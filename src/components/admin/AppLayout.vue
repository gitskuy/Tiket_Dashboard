<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar" />
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar" />
    <main slot="content" id="content" class="content va-layout gutter--lg fluid" role="main">
      <app-breadcrumbs />
      <vuestic-pre-loader v-show="isLoading" class="pre-loader" />
      <router-view />
    </main>
  </vuestic-layout>
</template>

<script>
import Layout from '../../vuestic-theme/vuestic-directives/Layout';
import { mapGetters } from 'vuex';

export default {
  name: 'app-layout',
  components: {},
  directives: {
    layout: Layout
  },
  data () {
    return {
      opened: true
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>
