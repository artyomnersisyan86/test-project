<template>
	<div >
		<v-btn  color="pink" width="200"   outlined dark
						class="text-capitalize caption justify-start" height="32"
						@click="click"
		>
			<v-icon class="text-left" color="dark" size="24" left>{{icon}}</v-icon>
			<span  style="margin: 0 auto;" class="text-center">{{label}}</span>	</v-btn>
	</div>

</template>

<script>
	export default {
		name: "Vbutton",
		props:{
			icon:{
				type:String,
				default:"mdi-autorenew",
			} ,
			id:{
				type:Number,
				default:1

			},
			label: {
				type:String,
				default:"Նորացնել"
			},
			disabled:{
				type:Boolean,
				default:false,
			},

			className:{
				type:String,
				default:"",
			},
			// fType: "button"
		},
		methods:{
			click(){
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>

</style>