<script>
export default {
	name: 'TransitionView',
	props: {
		name: {
			type: String,
			default: 'fade',
		},
		direction: String,
	},
	data() {
		return {
			transitionName: '',
			transitionDirection: '',
			backgroundColor: '',
			formBackgroundColor: '',
			keepAlive: false,
			isTransition: false,
			noDirection: ['flash-in', 'flash-out', 'fall'],
			height: 0,
		};
	},
	watch: {
		$route(to, form) {
			const {
				TransitionView = {},
			} = form.meta, {
				backgroundColor,
			} = TransitionView;
			this.formBackgroundColor = backgroundColor;
			this.beforeUpdate(to);
		},
	},
	computed: {
		getName() {
			const name = this.transitionName || this.name;
			if (this.noDirection.includes(name)) return name;
			return `${name}-${this.direction || this.transitionDirection || 'left'}`;
		},
	},
	methods: {
		beforeUpdate(to) {
			console.log(history.length);
			const {
				TransitionView = {},
			} = to.meta, {
				name,
				direction,
				backgroundColor,
				keepAlive,
			} = TransitionView;
			this.transitionName = name;
			this.transitionDirection = direction;
			this.backgroundColor = backgroundColor;
			this.keepAlive = keepAlive;
		},
	},
	created() {
		this.beforeUpdate(this.$route);
	},
	render(_c) {
		let child = this.$slots.default ? this.$slots.default : _c('router-view'),
			style;
		if (this.keepAlive) child = _c('keep-alive', [child]);
		if (this.isTransition) style = _c('style', [this._v(`
			.vue-transition-view {
				height: ${this.height}px !important;
			}
			.transition-view-leave {
				background-color: ${this.formBackgroundColor} !important;
			}
			.transition-view-enter {
				background-color: ${this.backgroundColor} !important;
			}
		`)]);
		return _c('div', {
			staticClass: 'vue-transition-view',
			class: {
				'transtion': this.isTransition,
			},
			style: {
				backgroundColor: this.backgroundColor,
			},
		}, [
			_c('transition', {
				props: {
					name: this.getName,
					enterActiveClass: 'transition-view-enter',
					leaveActiveClass: 'transition-view-leave',
				},
				on: {
					beforeEnter: () => this.height = window.innerHeight,
					enter: () => this.isTransition = true,
					afterEnter: () => this.isTransition = false,
				},
			}, [
				child,
			]),
			style,
		]);
	},
};
</script>
<style lang="scss" scoped>
.vue-transition-view{
	overflow: auto;
	width: 100%;
	height: 100%;
	position: relative;
	&.transtion{
		overflow: hidden !important;
		background-color: #000 !important;
	}
}

.transition-view-enter,
.transition-view-leave{
	will-change: transform;
	transition: all .5s, background-color 0s;
	overflow: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background-color: #FFF;
}

// 滑行
.slide-left-enter,
.slide-right-leave-to,
.fade-left-enter{
	transform: translateX(-100%);
}

.slide-left-leave-to,
.slide-right-enter,
.fade-right-enter{
	transform: translateX(100%);
}

.slide-top-enter,
.slide-bottom-leave-to,
.fade-top-enter{
	transform: translateY(-100%);
}

.slide-top-leave-to,
.slide-bottom-enter,
.fade-bottom-enter{
	transform: translateY(100%);
}

.fade-left-leave-to,
.fade-right-leave-to,
.fade-top-leave-to,
.fade-bottom-leave-to{
	opacity: .5;
}

// 缩放
.scale-left-enter{
	transform: scale(1.4) translateX(-100%);
}

.scale-left-leave-to{
	transform: scale(.6) translateX(50%);
}

.scale-right-enter{
	transform: scale(1.4) translateX(100%);
}

.scale-right-leave-to{
	transform: scale(.6) translateX(-50%);
}

.scale-top-enter{
	transform: scale(1.4) translateY(-100%);
}

.scale-top-leave-to{
	transform: scale(.6) translateY(50%);
}

.scale-bottom-enter{
	transform: scale(1.4) translateY(100%);
}

.scale-bottom-leave-to{
	transform: scale(.6) translateY(-50%);
}

// 闪现
.flash-in-enter{
	transform: scale(.6);
	opacity: 0;
}

.flash-in-leave-to{
	opacity: .5;
}

.flash-out-enter{
	transform: scale(1.4);
	opacity: 0;
}

.flash-out-leave-to{
	transform: scale(.6);
}

// 缩放滑入
.scale-slide-left-enter-to{
	animation: scale-slide-left-in 1s;
}

.scale-slide-left-leave-to{
	animation: scale-slide-left-out 1s;
}

@keyframes scale-slide-left-in{
	0%,
	50%{
		transform: scale(.6) translateX(-150%);
	}
	75%{
		transform: scale(.6);
	}
}

@keyframes scale-slide-left-out{
	25%{
		transform: scale(.6);
	}
	50%,
	100%{
		transform: scale(.6) translateX(150%);
	}
}

.scale-slide-right-enter-to{
	animation: scale-slide-right-in 1s;
}

.scale-slide-right-leave-to{
	animation: scale-slide-right-out 1s;
}

@keyframes scale-slide-right-in{
	0%,
	50%{
		transform: scale(.6) translateX(150%);
	}
	75%{
		transform: scale(.6);
	}
}

@keyframes scale-slide-right-out{
	25%{
		transform: scale(.6);
	}
	50%,
	100%{
		transform: scale(.6) translateX(-150%);
	}
}

.scale-slide-top-enter-to{
	animation: scale-slide-top-in 1s;
}

.scale-slide-top-leave-to{
	animation: scale-slide-top-out 1s;
}

@keyframes scale-slide-top-in{
	0%,
	50%{
		transform: scale(.6) translateY(-150%);
	}
	75%{
		transform: scale(.6);
	}
}

@keyframes scale-slide-top-out{
	25%{
		transform: scale(.6);
	}
	50%,
	100%{
		transform: scale(.6) translateY(150%);
	}
}

.scale-slide-bottom-enter-to{
	animation: scale-slide-bottom-in 1s;
}

.scale-slide-bottom-leave-to{
	animation: scale-slide-bottom-out 1s;
}

@keyframes scale-slide-bottom-in{
	0%,
	50%{
		transform: scale(.6) translateY(150%);
	}
	75%{
		transform: scale(.6);
	}
}

@keyframes scale-slide-bottom-out{
	25%{
		transform: scale(.6);
	}
	50%,
	100%{
		transform: scale(.6) translateY(-150%);
	}
}

// 落下
.fall-enter-to{
	animation: fall-in .5s;
}

.fall-leave-to{
	animation: fall-out .5s;
}

@keyframes fall-in{
	0%{
		opacity: 0;
		transform: scale(.6);
	}
}

@keyframes fall-out{
	50%{
		transform: rotateZ(30deg) translateX(-48%) translateY(18%);
	}
	100%{
		transform: rotateZ(30deg) translateX(10%) translateY(100%);
	}
}
</style>
