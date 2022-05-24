import template from './sw-cms-el-config-tabs.html.twig';

const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-config-tabs', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    data() {
        return {
            // default values added to the newly added item
            defaultValue: {
                header: "New tab",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quia eveniet dolorem consequatur minus quidem illo obcaecati blanditiis totam modi, nesciunt porro reiciendis saepe at placeat deserunt. Laborum, quae."
            }
        }
    },

    methods: {
        createdComponent() {
            this.initElementConfig('tabs');
            this.initElementData('tabs');
        }
    }
});