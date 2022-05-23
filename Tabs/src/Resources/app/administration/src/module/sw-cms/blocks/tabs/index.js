import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'tabs',
    label: 'sw-cms.blocks.tabs.label',
    category: 'custom-elements',
    component: 'sw-cms-block-tabs',
    previewComponent: 'sw-cms-preview-tabs',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        'slot': 'tabs'
    }
});
