import template from './list-item.html.twig';

export default {
    name: 'list-item',

    template,

    props: ['item', 'padding', 'level'],

    computed: {
        paddingStyles() {
            return { padding: this.padding.top + 'px ' + (this.padding.right * this.level) + 'px ' + this.padding.bottom + 'px ' + (this.padding.left * this.level) + 'px' }
        }
    }
}
