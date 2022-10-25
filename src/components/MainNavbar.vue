<script lang="ts">
type NavbarTab = {
  route: string
  name: string
}

export default {
  name: 'MainNavbar',
  data() {
    return {
      tabs: <NavbarTab[]>[
        {
          route: '/',
          name: 'Home',
        },
        {
          route: '/texts',
          name: 'Bible Texts',
        },
        {
          route: '/tracker',
          name: 'Activity Tracker',
        }
      ],
    }
  },
}
</script>

<template>
  <div id="main-navbar">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="sticky">
      <b-navbar-brand href="#">FFC Tools</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
              v-for="tab in tabs"
              :key="tab.route"
              :to="tab.route"
              exact
              exact-active-class="active"
          >
            {{ tab.name }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>