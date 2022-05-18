import template from './list-item.html.twig';
import './list-item.scss';

const { Component } = Shopware;

Component.register('list-item', {
    template,

    props: {
        value: {
            type: Object,
            required: true
        },
        index: {
            type: Number
        }
    },

    data() {
        return {
            // default values added to the newly added item
            defaultValue: {
                name: "Child item name",
                hasChildren: false,
                children: []
            }
        }
    },

    computed: {
        item: {
          get () { return this.value },
          set (item) { this.$emit('input', item) }
        }
    }
});
