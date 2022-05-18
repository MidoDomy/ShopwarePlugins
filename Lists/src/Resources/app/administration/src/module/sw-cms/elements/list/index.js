import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'list',
    label: 'sw-cms.elements.list.label',
    component: 'sw-cms-el-list',
    previewComponent: 'sw-cms-el-preview-list',
    configComponent: 'sw-cms-el-config-list',
    defaultConfig: {
        title: {
            source: 'static',
            value: 'Lorem ipsum dolor',
        },
        fields: {
            source: 'static',
            value: []
        },
        collapseType: {
            source: 'static',
            value: 'accordion',
        },
        borderType: {
            source: 'static',
            value: 'all',
        },
        borderRadius: {
            source: 'static',
            value: {
                topLeft: 8,
                bottomLeft: 8,
                topRight: 16,
                bottomRight: 16
            },
        },
        padding: {
            source: 'static',
            value: {
                top: 8,
                bottom: 8,
                left: 16,
                right: 16
            },
        }
    }
});