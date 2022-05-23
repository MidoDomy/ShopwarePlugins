import './component';
import './preview';
import './config';

Shopware.Service('cmsService').registerCmsElement({
    name: 'tabs',
    label: 'sw-cms.elements.tabs.label',
    component: 'sw-cms-el-tabs',
    previewComponent: 'sw-cms-el-preview-tabs',
    configComponent: 'sw-cms-el-config-tabs',
    defaultConfig: {
        fields: {
            source: 'static',
            value: [
                {
                    name: "tab",
                    value: {
                        header: "New tab",
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quia eveniet dolorem consequatur minus quidem illo obcaecati blanditiis totam modi, nesciunt porro reiciendis saepe at placeat deserunt. Laborum, quae."
                    }
                }
            ]
        }
    }
});