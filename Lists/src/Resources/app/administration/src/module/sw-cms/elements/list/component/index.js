import ListItem from './list-item';
import template from './sw-cms-el-list.html.twig';
import './sw-cms-el-list.scss';
 
const { Component, Mixin } = Shopware;

Component.register('sw-cms-el-list', {
    template,

    components: {
        'list-item': ListItem
    },

    mixins: [
        Mixin.getByName('cms-element')
    ],

    computed: {
        title() {
            return this.element.config.title.value;
        },

        fields() {
            return this.element.config.fields.value;
        },

        collapseType() {
            return this.element.config.collapseType.value;
        },

        borderType() {
            return this.element.config.borderType.value;
        },

        borderRadius() {
            return this.element.config.borderRadius.value;
        },

        padding() {
            return this.element.config.padding.value;
        },

        borderRadiusStyles() {
            return { borderRadius: this.borderRadius.topLeft + 'px ' + this.borderRadius.topRight + 'px ' + this.borderRadius.bottomRight + 'px ' + this.borderRadius.bottomLeft + 'px' }
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('list');
            this.initElementData('list');
        }
    }
});
