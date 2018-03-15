<template>
	<div>
		<el-container class="el-container">
			<el-aside width="200px">
				<nav-menu></nav-menu>
			</el-aside>
			<el-container>
				<el-header>
					<container-header></container-header>
				</el-header>
				<el-main>
					<main-container></main-container>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.el-container{
		width:1151px;
		margin:20px auto;
	}
</style>

<script>
import NavMenu from '../components/NavMenu'
import ContainerHeader from '../components/ContainerHeader'
import MainContainer from '../components/MainContainer'

export default{
	components:{
		NavMenu,
		ContainerHeader,
		MainContainer
	}
}
</script>