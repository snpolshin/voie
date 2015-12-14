import Vue from 'vue';
import Debug from 'debug';

const debug = Debug('voie:directive');

Vue.elementDirective('v-view', {

  bind() {
    const { state, manager } = this.vm.$options;
    manager.mountPoints[state.name] = this.el;
    debug('registered v-view', this.el);
  },

  unbind() {
    const { state, manager } = this.vm.$options;
    delete manager.mountPoints[state.name];
    debug('unregistered v-view', this.el);
  }

});
