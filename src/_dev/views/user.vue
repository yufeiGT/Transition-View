<template>
	<div id="user">
		<img src="@/_dev/assets/2.png">
	</div>
</template>
<script>
export default {
	path: '/user',
	name: 'User',
	meta: {
		TransitionView: {
			backgroundColor: '#FF0',
		},
	},
};
</script>
<style lang="scss" scoped>
#user{
	overflow: hidden;
	// min-height: 100%;
	img{
		width: 100%;
	}
}
</style>
