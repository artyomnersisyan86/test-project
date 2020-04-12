// import BasicTabsDirOfPersons from "../components/DirectoryOfPersons/BasicTabsDirOfPersons";
import BasicTabsDirOfPersons from "./BasicTabsDirOfPersons";
import DirectoryOfPersonsPopup from "./DirectoryOfPersonsPopup";
import Datatable222 from "./Datatable222";
import {mapActions, mapGetters} from 'vuex';

export default {
	components: {
		DirectoryOfPersonsPopup,
		BasicTabsDirOfPersons,
		Datatable222
	},
	data() {
		return {
			active_tab: 1,
			tabs:[
				{id:1, label:"Հիմնական", class: "mx-2 text-capitalize caption"},
				{id:2, label:"Անձիք", class: "text-capitalize caption"},
			],
			filters: [
				{
					id:1,
					label: "Նորացնել",
					icon: "mdi-autorenew",
					class: "",
					fType: "button"
				}, {
					id:2,
					label: "Ավելացնել",
					icon: "add",
					class: "pt-2",
					fType: "select",
					list: [
						{
							title: "Ֆիզիկական անձ",
							route: "/AddPersons"
						}, {
							title: "Անհատ ձեռնարակատեր",
							route: "/AddPersons"
						}, {
							title: "Կազմակերպություն",
							route: "/AddPersons"
						}
					],
				}, {
					id:3,
					label: "Փոփոխել",
					icon: "edit",
					class: "pt-2",
					fType: "button"
				}, {
					id:4,
					label: "Հեռացնել",
					icon: "delete_forever",
					class: "",
					fType: "button"
				}, {
					id:5,
					label: "Կասեցնել",
					icon: "emoji_people",
					class: "pt-2",
					fType: "button"
				}, {
					label: "Փոփոխել ծածկագիր",
					icon: "edit",
					class: "pt-2",
					fType: "button"
				}, {
					id:6,
					label: "Որոշիչ",
					icon: "done_all",
					class: "",
					fType: "autocomplete",
					fModel: this.CHARID,
					items: this.$store.state.determinantsOfPerson.determinantsOfPerson
				}, {
					id:7,
					label: "Տեսակ",
					icon: "subtitles",
					class: "pt-2",
					fType: "autocomplete",
					fModel: this.DOCKIND,
					items: this.$store.state.docDetHome.docDetHome
				}, {
					id:8,
					label: "Փաստաթուղթ",
					icon: "description",
					class: "heightWidthClass pt-2",
					fType: "text-field",
					fModel: this.DOCNUM,
				}, {
					id:9,
					label: "Անուն",
					icon: "people",
					class: "",
					fType: "text-field",
					fModel: this.NAME_A,
				}, {
					id:10,
					label: "Ազգանուն",
					icon: "people",
					class: "pt-2",
					fType: "text-field",
					fModel: this.SNAME_A,
				}, {
					id:11,
					label: "Անձի կոդ",
					icon: "people",
					class: "pt-2",
					fType: "text-field",
					fModel: this.CUSTOMER,
				}, {
					id:12,
					label: "ՀԾՀ",
					icon: "description",
					class: "heightWidthClass caption",
					fType: "text-field",
					fModel: this.SOCCART,
				}, {
					id:13,
					label: "Հեռախոս",
					icon: "phone",
					class: "heightWidthClass pt-2",
					fType: "text-field",
					fModel: this.PHONE,
				}, {
					id:14,
					label: "Դիտել հեռախոսահամ..",
					icon: "phone",
					class: "pt-2",
					fType: "button",
				}, {
					id:15,
					label: "ԲՄ հարցում",
					icon: "help",
					class: "",
					fType: "select",
					list: [
						{
							title: "Ապահովադրի"
						}, {
							title: "Վարորդի (BM01)"
						}
					],
				}, {
					id:16,
					label: "ԲՄ կրկնակի հարցում",
					icon: "help",
					class: "pt-2",
					fType: "select",
					list: [
						{
							title: "Ապահովադրի"
						}, {
							title: "Վարորդի (BM01)"
						}
					],
				}
			],
			search: "",
			CUSTOMER: "",
			SOCCART: "",
			DOCKIND: "",
			CHARID: "",
			NAME_A: "",
			SNAME_A: "",
			DOCNUM: "",
			PHONE: "",
			url: {getData: "http://192.168.100.153:8000/customer/customer-list",},
			tab1: null,
			tab2: null,
			items: [
				{
					title: "Ֆիզիկական անձ",
					route: "/AddPersons"
				}, {
					title: "Անհատ ձեռնարակատեր",
					route: "/AddPersons"
				}, {
					title: "Կազմակերպություն",
					route: "/AddPersons"
				}
			],
			items3: ["Ապահովադրի", "Վարորդի (BM01)"]
		};
	},
	computed: {
		getDataFunction() {
			return this.$store.state.getData
		},
		...mapGetters([
			'DETERMINANTSOFPERSON',
			'DOCDETHOME',
		])
	},
	mounted() {
		// determinantsOfPerson.js
		this.GET_DETERMINANTS_OF_PERSON();
		// docDetHome.js
		this.GET_DOCDETHOME();
		// organizationalType.js
		this.GET_ORGANIZATIONALTYPE_ACTIONS();
		// activityType.js
		this.GET_ACTIVITITYPE_ACTIONS();
		// residence.js
		this.GET_RESIDENCE_ACTIONS();
		//    registeredOrgan.js
		this.GET_REGISTEREDORGAN_ACTIONS();
		//    leadershipPosition.JS
		this.GET_LIDERSHIPPOSITION_ACTIONS();
		//    ստորաբաժանման առկայություն  brnType .js
		this.GET_BRNTYPE_ACTIONS();
		this.getDataMethod();
	},
	methods: {
		...mapActions([
			// determinantsOfPerson.js
			'GET_DETERMINANTS_OF_PERSON',
			// docDetHome.js
			'GET_DOCDETHOME',
			// organizationalType.js
			'GET_ORGANIZATIONALTYPE_ACTIONS',
			// activityType.js
			'GET_ACTIVITITYPE_ACTIONS',
			// residence.js
			'GET_RESIDENCE_ACTIONS',
			//    registeredOrgan.js
			'GET_REGISTEREDORGAN_ACTIONS',
			//    leadershipPosition.JS
			'GET_LIDERSHIPPOSITION_ACTIONS',
			//    ստորաբաժանման առկայություն  brnType .js
			'GET_BRNTYPE_ACTIONS'
		]),
		getDataMethod() {
			const config = {
				headers: this.headers
			};
			this.CUSTOMER = this.filters.find(filter => filter.id == 11).fModel;
			this.axios.get(this.url.getData, {
				params: {
					CUSTOMER: this.filters.find(filter => filter.id == 11).fModel,
					SOCCART: this.filters.find(filter => filter.id == 12).fModel,
					DOCKIND: this.filters.find(filter => filter.id == 7).fModel,
					CHARID: this.filters.find(filter => filter.id == 6).fModel,
					NAME_A: this.filters.find(filter => filter.id == 9).fModel,
					SNAME_A: this.filters.find(filter => filter.id == 10).fModel,
					DOCNUM: this.filters.find(filter => filter.id == 8).fModel,
					PHONE: this.filters.find(filter => filter.id == 13).fModel,
				}
			}, config).then(responce => {console.log(responce.data);
				this.$store.state.getData = responce.data.result_list;
				this.$store.state.myTable = true;
			}).catch(function (error) {alert("կապի խափանում");console.log(error);});
		},
	}
};