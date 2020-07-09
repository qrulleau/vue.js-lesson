<template>
  <nav>
    <ul class="nav nav-pills">
      <router-link class="nav-item" tag="li" to="/" exact>
        <a active-class="active" class="nav-link active" exact>Home</a>
      </router-link>
      <!-- <router-link class="nav-item" tag="li" to="/user"  active-class="active"><a  active-class="active" class="nav-link">User</a></router-link> -->

      <!-- route dynamique -->
      <!-- <router-link class="nav-item" tag="li" to="/user/1">
        <a active-class="active" class="nav-link">User 1</a>
      </router-link>
      <router-link class="nav-item" tag="li" to="/user/2">
        <a active-class="active" class="nav-link">User 2</a>
      </router-link>-->
      <router-link class="nav-item" tag="li" to="/user">
        <a active-class="active" class="nav-link">User</a>
      </router-link>
    </ul>
  </nav>
</template>