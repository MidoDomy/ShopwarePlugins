import template from './sw-cms-el-tabs.html.twig';
import './sw-cms-el-tabs.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-tabs', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        fields() {
            return this.element.config.fields.value;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('tabs');
            this.initElementData('tabs');
        }
    }
});
