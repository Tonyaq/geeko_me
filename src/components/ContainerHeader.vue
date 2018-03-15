<template>
	<el-container class="el-container">
		<el-aside width="100px">
			<img src="../assets/img/logo.png">
		</el-aside>
		<el-main></el-main>
	</el-container>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	img{
		width:50px;
		height:50px;
	}
</style>
<script type="text/javascript">
	export default{
		name:'ContainerHeader',
		data() {
	      return {
	        imageUrl: ''
	      };
	    },
	    methods: {
	      handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	      },
	      beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;

	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	      }
	    }
		}
</script>