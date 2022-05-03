import template from './sw-cms-section.html.twig';
import './sw-cms-section.scss';

const { Component } = Shopware;

Component.override('sw-cms-section', {
    template,

    computed: {
        getVariablePrefix() {
            let prefix;

            prefix = this.currentDeviceView === 'desktop' ? 'lg_' 
                : 
                this.currentDeviceView === 'tablet-landscape' ? 'md_' 
                    : '';

            return prefix;
        }
    },

    methods: {
        createdComponent() {
            if (!this.section.backgroundMediaMode) {
                this.section.backgroundMediaMode = 'cover';
            }
        },

        blockStyles(block) {
            const cFields = block.customFields;

            const columnWidthPrefix = this.useDesktopPrefix(cFields.desktopDefaultColumnWidth);
            const orderPrefix = this.useDesktopPrefix(cFields.desktopDefaultColumnOrder);
            const verticalAlignPrefix = this.useDesktopPrefix(cFields.desktopDefaultVerticalAlign);

            const columnWidth = cFields[columnWidthPrefix + 'columnWidth'] ? cFields[columnWidthPrefix + 'columnWidth'] : '12';
            const order = cFields[orderPrefix + 'columnSortOrder'] ? cFields[orderPrefix + 'columnSortOrder'] : '0';
            const verticalAlign = cFields[verticalAlignPrefix + 'verticalAlign'] ? cFields[verticalAlignPrefix + 'verticalAlign'] : 'flex-start';

            return {
                'grid-column': 'span ' + columnWidth + ' / span ' + columnWidth,
                'order': order,
                'align-self': verticalAlign,
            };
        },
        
        isFullWidth(block) {
            const cFields = block.customFields;
            const columnWidthPrefix = this.useDesktopPrefix(cFields.desktopDefaultColumnWidth);

            return cFields[columnWidthPrefix + 'columnWidth'] === 12;
        },

        useDesktopPrefix(isDesktop) {
            return isDesktop ? 'lg_' : this.getVariablePrefix;
        },

        initCustomFields(block) {
            // adds default custom fields if the block does not have them
            if(!block.customFields) {
                block.customFields = {
                    columnWidth: 12,
                    md_columnWidth: 12,
                    lg_columnWidth: 12,
                    lg_columnSortOrder: 100,
                    desktopDefaultMargin: true,
                    desktopDefaultPadding: true,
                    desktopDefaultDisplay: true,
                    desktopDefaultColumnOrder: true,
                    desktopDefaultColumnWidth: true,
                    desktopDefaultMinHeight: true,
                    desktopDefaultVerticalAlign: true,
                    desktopDefaultBorderRadius: true
                }
            }

            return '';
        }
    }
});
