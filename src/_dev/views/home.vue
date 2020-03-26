<template>
	<div id="home">
		<img src="@/_dev/assets/1.png">
	</div>
</template>
<script>
export default {
	path: '/',
	name: 'Home',
	meta: {
		TransitionView: {
		},
	},
};
</script>
<style lang="scss" scoped>
#home{
	overflow: hidden;
	// min-height: 100%;
	img{
		width: 100%;
	}
}
</style>
