import template from './tab.html.twig';
import './tab.scss';

const { Component } = Shopware;

Component.register('tab', {
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
                header: "New tab",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quia eveniet dolorem consequatur minus quidem illo obcaecati blanditiis totam modi, nesciunt porro reiciendis saepe at placeat deserunt. Laborum, quae."
            }
        }
    },

    computed: {
        tab: {
          get () { return this.value },
          set (tab) { this.$emit('input', tab) }
        }
    },

    methods: {
        onBlur(content) {
            this.emitChanges(content);
        },

        onInput(content) {
            this.emitChanges(content);
        },

        emitChanges(content) {
            if (content !== this.tab.content) {
                this.tab.content = content;
            }
        }
    }
});
