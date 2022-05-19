import template from './sw-cms-block-config-modal.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-block-config-modal', {
    template,

    inject: [
        'repositoryFactory',
        'cmsService',
    ],

    mixins: [
        Mixin.getByName('cms-state'),
    ],

    props: {
        block: {
            type: Object,
            required: true,
        }
    },

    computed: {
        uploadTag() {
            return `cms-block-media-config-${this.block.id}`;
        },

        sectionType() {
            let section = this.cmsPageState.currentPage.sections.find(sec => sec.id === this.block.sectionId);

            return section.type;
        },

        mediaRepository() {
            return this.repositoryFactory.create('media');
        },

        cFields() {
            return this.block.customFields;
        },

        // sends prefix of the current viewport
        // prefixes are used for dynamic variables
        variablePrefix() {
            return this.currentDeviceView === 'desktop' ? 'lg_' 
                : 
                this.currentDeviceView === 'tablet-landscape' ? 'md_' 
                    : '';
        },

        iconName() {
            return this.currentDeviceView === 'desktop' ? 'desktop' 
                : 
                this.currentDeviceView === 'tablet-landscape' ? 'tablet' 
                    : 'mobile';
        }
    },

    methods: {
        closeBlockConfigModal() {
            this.$parent.toggleBlockConfigModal();
        },

        // checks if the desktop value is the default, 
        // if not then sends a prefix of the current viewport
        useDesktopPrefix(isDesktop) {
            return isDesktop ? 'lg_' : this.variablePrefix;
        },

        // background media methods
        onSetBackgroundMedia([mediaItem]) {
            this.block.backgroundMediaId = mediaItem.id;
            this.block.backgroundMedia = mediaItem;
        },

        successfulUpload(media) {
            this.block.backgroundMediaId = media.targetId;

            this.mediaRepository.get(media.targetId).then((mediaItem) => {
                this.block.backgroundMedia = mediaItem;
            });
        },

        removeMedia() {
            this.block.backgroundMediaId = null;
            this.block.backgroundMedia = null;
        }
    }
});
