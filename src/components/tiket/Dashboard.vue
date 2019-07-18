<template>
  <div class="dashboard">
    <dashboard-info-widgets></dashboard-info-widgets>
    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs :names="[$t('dashboard.dataVisualization'), $t(), $t(), $t()]" ref="tabs">
        <div :slot="$t('dashboard.dataVisualization')">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>
  </div>
</template>

<script>
import DashboardInfoWidgets from './DashboardInfoWidgets';
import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue';

export default {
  name: 'dashboard',
  components: {
    DataVisualisationTab,
    DashboardInfoWidgets
  }
}
</script>
<style lang="scss" scoped>
</style>
