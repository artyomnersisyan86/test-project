import DynamicTabs from "../DynamicTabs"
export default {
	components: {
		DynamicTabs
	},
	name: 'NavbarScript',
	data() {
		return {
			drawer: false,
			tabs: [
				{
					title: 'Ապահովագրություն',
					selects: [
						{title: 'Նոր վկայագրերի ստեղծում'},
						{title: 'Վկայագրերի որոնում'},
						{title: 'Վաճառքների սահմանաչափեր'},
						{title: 'Ապահովագրական պրոդուկտներ'},
						{title: 'Ապահովագրական փաթեթներ'},
						{title: ' Տեղեկատվական համակարգեր'},
					]
				},
				{
					title: 'Վերաապահովագրություն',
					selects: [
						{title: 'Վերաապահովագրված վկայագրեր'},
						{title: 'Վերաապահովագրության ենթակա վկայագրեր'},
						{title: 'Վերաապահովագրության պայմանագրեր'},
					]
				},
				{
					title: 'Պատահարներ',
					selects: [
						{title: 'Զանգերի ցանկ'},
						{title: 'Նախնական զննումների ցանկ '},
						{title: 'Սուբրոգացիա'},
						{title: 'Հաըցերի վճարումներ'},
						{title: 'Գործընկերներից ստացված հաշիվ ապրանքագրեր'},
						{title: 'Մատուցվող ծառայություններ և գնացուցակ'},
					]
				},
				{
					title: 'Ցանցային Կառավարում',
					selects: [
						{title: 'Անձանց տեղեկատու', route: '/DirectoryOfPersons'},
						{title: 'Գործակալներ', route: '/about'},
						{title: 'Հաշվառման ենթակա ձևաթղթերի վարում', route: '/emty2'},
						{title: 'Օգտվողների իրավասություններ'},
						{title: 'Մասնաճյուղեր'},
					]
				},
				{
					title: 'Հաշվապահություն',
					selects: [
						{title: 'լրացնելու եմ'},
					]
				},
				{
					title: 'կարգավորումներ',
					selects: [
						{title: 'լրացնելու եմ'},
					]
				},
				{
					title: 'Օգտվող',
					selects: [
						{title: 'լրացնելու եմ',},
						{title: 'լրացնելու եմ1'},
						{title: 'լրացնելու եմ2'},
					]
				},

			],
		}
	},
	methods: {
		addItem(item) {
			if (this.$store.state.tabs.indexOf(item) === -1) {
				this.$store.state.tabs.push(item);
				this.$store.state.showDynamicTabs = true;
				return item
			} else {
				alert('hello')
			}
		},
		logOut() {
			if (confirm('Ցանկանում եք լքել համակարգը ?')) {
				this.$router.push({path: '/'})
			}
		}
	},
	watch: {},


}