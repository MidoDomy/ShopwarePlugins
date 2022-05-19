import './sw-cms-block-config-modal';

import template from './sw-cms-block.html.twig';
import './sw-cms-block.scss';

const { Component, Mixin } = Shopware;

Component.override('sw-cms-block', {
    template,

    mixins: [
        Mixin.getByName('cms-state'),
    ],

    data() {
        return {
            showBlockSettings: false
        };
    },

    computed: {
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

        blockSpacing() {
            // get prefixes
            const minHeightPrefix = this.useDesktopPrefix(this.cFields.desktopDefaultMinHeight);
            const marginPrefix = this.useDesktopPrefix(this.cFields.desktopDefaultMargin);
            const paddingPrefix = this.useDesktopPrefix(this.cFields.desktopDefaultPadding);
            const borderRadiusPrefix = this.useDesktopPrefix(this.cFields.desktopDefaultBorderRadius);

            // get values
            const minHeight = this.cFields[minHeightPrefix + 'minHeight'];
            const marginTop = this.cFields[marginPrefix + 'marginTop'];
            const marginRight = this.cFields[marginPrefix + 'marginRight'];
            const marginBottom = this.cFields[marginPrefix + 'marginBottom'];
            const marginLeft = this.cFields[marginPrefix + 'marginLeft'];
            const paddingTop = this.cFields[paddingPrefix + 'paddingTop'];
            const paddingRight = this.cFields[paddingPrefix + 'paddingRight'];
            const paddingBottom = this.cFields[paddingPrefix + 'paddingBottom'];
            const paddingLeft = this.cFields[paddingPrefix + 'paddingLeft'];
            const borderRadiusTopLeft = this.cFields[borderRadiusPrefix + 'borderRadiusTopLeft'];
            const borderRadiusTopRight = this.cFields[borderRadiusPrefix + 'borderRadiusTopRight'];
            const borderRadiusBottomRight = this.cFields[borderRadiusPrefix + 'borderRadiusBottomRight'];
            const borderRadiusBottomLeft = this.cFields[borderRadiusPrefix + 'borderRadiusBottomLeft'];

            return {
                'min-height':  minHeight ? minHeight + 'px' : '0px',
                'margin-top':  marginTop ? marginTop + 'px' : '0px',
                'margin-bottom': marginBottom ? marginBottom + 'px' : '0px',
                'margin-left': marginLeft ? marginLeft + 'px' : '0px',
                'margin-right': marginRight ? marginRight + 'px' : '0px',
                'padding-top': paddingTop ? paddingTop + 'px' : '0px',
                'padding-bottom': paddingBottom ? paddingBottom + 'px' : '0px',
                'padding-left': paddingLeft ? paddingLeft + 'px' : '0px',
                'padding-right': paddingRight ? paddingRight + 'px' : '0px',
                'border-top-left-radius': borderRadiusTopLeft ? borderRadiusTopLeft + 'px' : '0px',
                'border-top-right-radius': borderRadiusTopRight ? borderRadiusTopRight + 'px' : '0px',
                'border-bottom-right-radius': borderRadiusBottomRight ? borderRadiusBottomRight + 'px' : '0px',
                'border-bottom-left-radius': borderRadiusBottomLeft ? borderRadiusBottomLeft + 'px' : '0px',
            };
        },
    },

    methods: {
        toggleBlockConfigModal() {
            this.showBlockSettings = !this.showBlockSettings;
        },

        // checks if the desktop value is the default, 
        // if not then sends a prefix of the current viewport
        useDesktopPrefix(isDesktop) {
            return isDesktop ? 'lg_' : this.variablePrefix;
        },
    }
});
