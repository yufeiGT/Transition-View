<template>
	<div id="app">
		<div class="container">
			<transition-view :name="name" :direction="direction" />
		</div>
		<div class="menu">
			<div class="select">
				<span>效果</span>
				<select v-model="name">
					<option value="slide">slide</option>
					<option value="fade">fade</option>
					<option value="scale">scale</option>
					<option value="flash-in">flash-in</option>
					<option value="flash-out">flash-out</option>
					<option value="scale-slide">scale-slide</option>
					<option value="fall">fall</option>
				</select>
				<span>方向</span>
				<select v-model="direction">
					<option value="left">left</option>
					<option value="right">right</option>
					<option value="top">top</option>
					<option value="bottom">bottom</option>
				</select>
			</div>
			<router-link to="/">首页</router-link>
			<router-link to="/user">用户</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			name: 'slide',
			direction: 'left',
		};
	},
};
</script>
<style lang="scss" scoped>
#app{
	overflow: hidden;
	// height: 100%;
	max-width: 414px;
	margin: 0 auto;
	.menu{
		overflow: hidden;
		padding: 10px 0;
		border-top: solid 1px #CCC;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background-color: #FFF;
		max-width: 414px;
		.select{
			overflow: hidden;
			text-align: center;
			border-bottom: solid 1px #CCC;
			margin-bottom: 10px;
			padding-bottom: 10px;
		}
		a{
			overflow: hidden;
			width: 50%;
			float: left;
			line-height: 20px;
			display: block;
			text-align: center;
			text-decoration: none;
			color: #333;
			border-right: solid 1px #CCC;
			box-sizing: border-box;
			&:last-child{
				border: none;
			}
		}
	}
	.container{
		overflow: hidden;
		padding-bottom: 80px;
		// margin-bottom: -80px;
		height: 100%;
		box-sizing: border-box;
	}
}
</style>
