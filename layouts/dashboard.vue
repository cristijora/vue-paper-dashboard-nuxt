<template>
  <div class="wrapper">
      <side-bar type="sidebar">
        <sidebar-link to="/">
          <i class="ti-panel"></i>
          <p>Dashboard</p>
        </sidebar-link>
        <sidebar-link to="/userprofile">
          <i class="ti-user"></i>
          <p>User Profile</p>
        </sidebar-link>
        <sidebar-link to="/tablelist">
          <i class="ti-view-list-alt"></i>
          <p>Table list</p>
        </sidebar-link>
        <sidebar-link to="/typography">
          <i class="ti-text"></i>
          <p>Typography</p>
        </sidebar-link>
        <sidebar-link to="/icons">
          <i class="ti-pencil-alt2"></i>
          <p>Icons</p>
        </sidebar-link>
        <sidebar-link to="/maps">
          <i class="ti-map"></i>
          <p>Maps</p>
        </sidebar-link>
        <sidebar-link to="/notifications">
          <i class="ti-bell"></i>
          <p>Notifications</p>
        </sidebar-link>
      </side-bar>
    <no-ssr>
      <notifications>

      </notifications>
    </no-ssr>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../assets/sass/paper-dashboard.scss";
</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar() {
        // if (this.$sidebar && this.$sidebar.showSidebar) {
        //   this.$sidebar.displaySidebar(false)
        // }
      }
    }
  }

</script>
