import $ from 'jquery';
import svgMixin from '../mixin/svg';

export default function (UIkit) {

    UIkit.component('icon', {

        mixins: [svgMixin],

        props: ['icon'],

        defaults: {cls: 'uk-icon'},

        ready() {

            if (!this.icon) {
                return;
            }

            this.class += (this.class ? ' ' : '') + this.cls;

            this.replaceIcon(this.$el.css('background-image').slice(4, -1).replace(/"/g, ''), this.icon);
        }

    });

}