<template>
  <div>
 <v-container fluid pa-1 >
        <v-row no-gutters class="pa-0 ">
<!-- <v-col cols="3"   md="3" sm="3" xs="2"> -->
  <v-col class="">

<div>
                    <v-btn
                      color="pink"
                      width="200"
                      height="32"
                      outlined
                      class="text-capitalize justify-start"
                      small
                      dark
                    >
                      <v-icon size="24" color="dark" left>mdi-autorenew</v-icon>

                      <span class="pl-9">Նորացնել</span>
                    </v-btn>
                  </div>
                  <div


                  >
                    <!--           arr[i]="arr[i]" -->


                    <v-btn
          :phone1="phone1.ID"
                    v-for="phone1 in getCUSTPHONE" :key="phone1.ID"

                                    @click="getCustomerDataMethod(
                     phone1.ID,
                                                phone1.STATE,
                                                phone1.KIND,
                                                 phone1.CODE,
                                                 phone1.PHONE,
                                                 phone1.ISSMS,
                                                   phone1.NOTE,
                                                 phone1.ONLUSER,
                                                  phone1.TSUSER)"

                      color="pink"
                      class="text-capitalize justify-start"
                      width="200"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon size="24" left color="dark">save</v-icon>
                      <span class="pl-9">Հիշել</span>
                    </v-btn>
                  </div>
                  <div>
                    <v-menu disabled offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="pink"
                          width="200"
                          class="text-capitalize justify-start"
                          height="32"
                          outlined
                          small
                          dark
                          v-on="on"
                        >
                          <v-icon size="24" left color="dark">add</v-icon>

                          <span class="pl-9">Ավելացնել</span>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item class="deep-purple">

                          <v-list-item-title class="white--text p-0"></v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </v-col>
<!-- <v-col cols="3"   md="3" sm="3" xs="2"> -->

             <v-col class="pl-5">

                  <div>
                    <v-btn
                      color="pink"
                      class="text-capitalize justify-start"
                      width="200"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon size="24" left color="dark">delete_forever</v-icon>
                      <span class="pl-9">Հեռացնել</span>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
                      color="pink"
                      class="text-capitalize justify-start"
                      width="200"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon size="24" left color="dark">emoji_people</v-icon>
                      <span class="pl-9">Կասեցնել</span>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
                      color="pink"
                      class="text-capitalize justify-start"
                      width="200"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon size="24" left color="dark">remove_red_eye</v-icon>
                      <span class="pl-2">Կարդալ ID Card-ից</span>
                    </v-btn>
                  </div>
                </v-col>

<!-- <v-col cols="3"   md="3" sm="3" xs="2"> -->
<v-col class="pl-5">


                  <div>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="pink"
                          class="text-capitalize justify-start"
                          width="215"
                          height="32"
                          outlined
                          small
                          dark
                          v-on="on"
                        >
                          <v-icon size="24" left color="dark">help</v-icon>

                          <span class="pl-9">ԲՄ հարցում</span>
                        </v-btn>
                      </template>
                      <v-list class="overflow-y-auto">
                        <v-list-item
                          class="pink"
                          v-for="(item, index) in items3"
                          :key="index"
                        >
                          <v-list-item-title class="white--text caption">{{item}}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>

                  <div>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="pink"
                          width="215"
                          class="text-capitalize justify-start"
                          height="32"
                          outlined
                          small
                          dark
                          v-on="on"
                        >
                          <v-icon size="24" left color="dark">help</v-icon>

                          <span class="pl-2">ԲՄ կրկնակի հարցում</span>
                        </v-btn>
                      </template>
                      <v-list class="overflow-y-auto">
                        <v-list-item
                          class="deep-purple"
                          v-for="(item, index) in items3"
                          :key="index"
                        >
                          <v-list-item-title class="white--text p-0">{{item}}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                  <div>
                    <v-btn
                      color="pink"
                      class="text-capitalize"
                      width="215"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon left color="dark">phone</v-icon>
                      <span>Դիտել հեռախոսահամարը</span>
                    </v-btn>
                  </div>
                </v-col>

<!-- <v-col cols="3"   md="3" sm="3" xs="2"> -->

            <v-col class="pl-5">

                  <div>
                    <v-btn
                      color="pink"
                      class="text-capitalize justify-start"
                      width="310"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon size="24" left color="dark">people_alt</v-icon>
                      <span>Համեմատել ահաբեկիչների ցանկի հետ</span>
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
                      color="pink"
                      class="text-capitalize justify-start"
                      width="310"
                      height="32"
                      outlined
                      small
                      dark
                    >
                      <v-icon size="24" left color="dark">cancel</v-icon>
                      <span class="pl-9">Փակել առանց ստուգման</span>
                    </v-btn>
                  </div>
                </v-col>


              </v-row>
 </v-container>
</div>
</template>

<script>
export default {

data() {
    return {
        items3:[],
        phone1:'',

url: {
                CUSTPHONEUPDATE: "http://192.168.100.153:8000/customer/custphone-update"
                // 8021 port
                // CUSTPHONEUPDATE:"http://192.168.100.153:8021/customer/custphone-update"

            }

    }
},
mounted() {
//  let arr=this.$store.state.CUSTPHONE

//   for(let i = 0; i<arr.length; i++){
// this.phone1=arr[i]
//     console.log(this.phone1)


// }
},

    computed: {
         getCUSTPHONE() {
            return this.$store.state.CUSTPHONE
        },
    },
    methods: {
      // ID, STATE, KIND, CODE, PHONE, ISSMS, NOTE, ONLUSER, TSUSER
       getCustomerDataMethod(
        ) {


           for(let i=0; i<this.getCUSTPHONE.length; i++){

                  console.log(this.phone=this.getCUSTPHONE[i])
            var formdata = new FormData();
            formdata.append("ID",this.phone.ID);
            formdata.append("KIND",this.phone.KIND);
            formdata.append("CODE",this.phone.CODE);
            formdata.append("PHONE",this.phone.PHONE);
            formdata.append("ISSMS",Number(this.phone.ISSMS));
            formdata.append("STATE", Number(this.phone.STATE));
             formdata.append("ONLUSER", this.phone.ONLUSER);
            formdata.append("NOTE", this.phone.NOTE);
            formdata.append("TSUSER", this.phone.TSUSER);

                }

            this.axios
                .post(this.url.CUSTPHONEUPDATE, formdata
                )
                .then(responce => {
                    // console.log(responce.body)
                    console.log(responce.data)
                    // this.$store.state.CUSTPHONE = responce.data.CUSTPHONE;

                })

                .catch(function(error) {
                    alert("կապի խափանում");
                    console.log(error.message);
                });





        },
},

}
</script>

<style>

</style>
