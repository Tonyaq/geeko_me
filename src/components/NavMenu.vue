<template>
  <div>
    <el-menu class="el-menu-vertical-demo" mode="vertical">
      <el-menu-item index="1">
        <span slot="title">My Orders</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">My Wishlist</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">My Coupons</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">My Credits</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">Address Book</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">Change Email</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">Change Password</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">Update Profile</span>
      </el-menu-item>
      <el-menu-item index="9">
        <span slot="title">Sign Out</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'NavMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo{
  width:160px;
}
</style>
