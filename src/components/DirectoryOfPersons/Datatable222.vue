<template>
 <v-container fluid pa-0>
     <!-- v-resize="onResize" align="center" justify="center" -->
     <v-row no-gutters >
     <v-col cols="12" md="12" sm="8" xs="12">

             <div id="table-wrapper">
                 <div id="table-scroll"   >
                     <!--  <table  -->
                     <!-- v-bind:style="{'height':'calc(1000px - 450px)', 'overflow':'auto'}" -->

<!-- <v-btn @click="resize" color="primary">resize heigt</v-btn>
<p>{{windowSize}} {{height}} </p> -->
                   <v-simple-table  id="myTable"  v-if="getTableShow"  
                    fixed-header :height="height" 
                    display
                     dense class="borderTableRafius " >
                         <template v-slot:default>
                             <thead class="theadClass"  >
                                 <tr class="">
                                     <th >
                                         <span @click="sortBYCustomer" class=""> Կոդ <v-icon left size="20">unfold_more</v-icon></span>

                                         <div class="myDiv mydivResize">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search" 
                                                  class="pa-0 caption  wwwe"
                                                   type="number"
                                                  @keyup="myFunction" id="myInput" 
                                                  ></v-text-field>
                                             <!-- <v-btn slot="activator" icon> <v-icon>filter_list</v-icon> </v-btn> -->
                                         </div>
                                     </th>
                                     <th><span @click="sortBYEXTNUM">Ներքին համար <v-icon left size="20">unfold_more</v-icon></span>
                                         <div class="myDiv mydivResize">
                                                 <v-text-field color="light-green"
                                                 type="number"
                                                  prepend-inner-icon="search" 
                                                class="pa-0 caption" @keyup="myFunction1"
                                                   id="myInput1"></v-text-field>
                                           
                                         </div>

                                     </th>

                                     <th> <span @click="sortBYPERSON" class="">Տիպ <v-icon left size="20">unfold_more</v-icon></span>
                                         <div class="myDiv mydivResize">
                                             <!-- <v-form> -->
                                                 <v-text-field color="light-green" 
                                                  prepend-inner-icon="search"
                                                 class="pa-0 caption" @keyup="myFunction2"
                                                  id="myInput2"
                                                  placeholder="Որոնել"></v-text-field>

                                             <!-- </v-form> -->
                                         </div>

                                     </th>
                                     
                                     <th> <span @click="sortBYRESIDENCE" class="">Ռեզիդենտ է  <v-icon left size="20">unfold_more</v-icon></span>
                                         <div class="myDiv mydivResize">
                                             <!-- <v-form> -->
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"

                                                  class="pa-0 caption" @keyup="myFunction3" id="myInput3"
                                                   placeholder="Որոնել"></v-text-field>

                                             <!-- </v-form> -->
                                         </div>

                                     </th>
                                     <th> <span @click="sortBYname" class=""> Անուն/Անվանում  <v-icon left size="20">unfold_more</v-icon></span>
                                     
                                         <!-- <input type="text"  class="hasdjah"> -->

                                         <div class="myDiv mydivResize hasdjah ">
                                             <!-- <v-form> -->
                                                 <v-text-field
                                                  prepend-inner-icon="search"

                                                  color="light-green" 
                                                  class="pa-0 caption "
                                                   @keyup="myFunction4" 
                                                   id="myInput4" placeholder="Որոնել"></v-text-field>

                                             <!-- </v-form> -->
                                         </div>

                                     </th>
                                     <th> <span @click="sortBYSNAME_A" class="pa-0">Ազգանուն <v-icon left size="20">unfold_more</v-icon></span>
                                         <!-- <input type="text" @keyup="myFunctionBYcolumn" value="" class="hasdjah"> -->

                                         <div class="myDiv mydivResize hasdjah">
                                            
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption " @keyup="myFunction5" id="myInput5" placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                    <!-- <div class="mydivResize"> <th>Հայրանուն</th></div> -->
                                    <th > <span @click="sortBYFNAME_A">Հայրանուն <v-icon left size="20">unfold_more</v-icon> </span>
                                    
                                      <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption " @keyup="myFunction6" 
                                                  id="myInput6" placeholder="Որոնել"></v-text-field>
                                         </div>
                                    </th>
                                     <th> <span> Կազմակերպաիրավական տեսակ</span>
                                       <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption " @keyup="myFunction7" 
                                                  id="myInput7" placeholder="Որոնել"></v-text-field>
                                         </div>
                                     
                                      </th>
                                     <th>Պետության մասնաբաժինը

                                         <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption " @keyup="myFunction8" 
                                                  id="myInput8" placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>

                                     <th>Կազմակերպության անվանումը 
                                          <div class="myDiv hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption " @keyup="myFunction9" 
                                                  id="myInput9" placeholder="Որոնել"></v-text-field>
                                         </div>



                                     </th>
                                     <th> Սեռ
                                         <div class="myDiv mydivResize  hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction10" 
                                                  id="myInput10"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>
                                         
                                          </th>
                                     <!-- <th>Ծննդյան տարեթիվ</th> -->
                                     <th>Ծննդյան տարեթիվ
 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction11" 
                                                  id="myInput11"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>


                                     </th>

                                     <th>Մահվան ամսաթիվ
 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction12" 
                                                  id="myInput12"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Երկքաղաքացիություն
                                          <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction13" 
                                                  id="myInput13"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>



                                     </th>
                                     <th>Հաշվառման երկիր
                                          <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction14" 
                                                  id="myInput14"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>


                                     </th>
                                     <th>ՀԾՀՀ 
                                          <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction15" 
                                                  id="myInput15"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>



                                     </th>
                                     <th>Փաստաթղթի տեսակ
                                          <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction17" 
                                                  id="myInput17"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>
                                     </th>
                                     <th>Փաստաթղթի համար
                                          <div class="myDiv  mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction18" 
                                                  id="myInput18"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>
                                          </th>
                                     <th>Ում կողմից է տրված 
 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction19" 
                                                  id="myInput19"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Տրման ամսաթիվ
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction20" 
                                                  id="myInput20"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>


                                     </th>
                                     <th>Վավեր է մինչև
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction21" 
                                                  id="myInput21"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Նույնականացման համար
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction22" 
                                                  id="myInput22"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Ում կողմից է տրվել
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction23" 
                                                  id="myInput23"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Տրման ամսաթիվ 
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction24" 
                                                  id="myInput24"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Վավեր է մինչև 
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction25" 
                                                  id="myInput25"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Վարորդական վկայական
                                                 <div class="myDiv mydivResize hasdjah">
                                                 <v-text-field color="light-green"
                                                  prepend-inner-icon="search"
                                                  class="pa-0 caption "
                                                   @keyup="myFunction27" 
                                                  id="myInput27"
                                                   placeholder="Որոնել"></v-text-field>
                                         </div>

                                     </th>
                                     <th>Վարորդական վկայականի ժամկետ

                                         
                                     </th>
                                     <th>ՀՎՀՀ</th>
                                     <th>Պետական ռեգիստրի գրանցման համար</th>
                                     <th>Տնտեսության հատված</th>
                                     <th>Հուսալի է</th>
                                     <th>Հասցե</th>
                                     <th>Էլեկտրոնային հասցե</th>
                                     <th>Անուն/Անվանում(անգլերեն)</th>
                                     <th>Անուն/Անվանում(ռուսերեն)</th>
                                     <th>Ծննդավայր</th>
                                     <th>Աշխատավայր</th>
                                     <th>Տնօրենի ԱԱՀ</th>
                                     <th>Մասնաճյուղ</th>
                                     <th>Լրացման ճշտություն</th>
                                     <th>մուտքագրող</th>
                                     <th>Մուտքագրման ամսաթիվ</th>
                                     <th>Փակման ամսաթիվ</th>
                                     <th>Փոփոխող</th>
                                     <th>Փոփոխում</th>
                                     <th>Գործակալ</th>
                                     <th>Գործակալի հաշվառման ամսաթիվ</th>
                                     <th>Գործակալի հաշվառման համար</th>
                                     <th>Աշխատանքային պայմանագրի համար</th>
                                     <th>Աշխատանքային պայմանագրի սկիզբ</th>
                                 </tr>

                             </thead>
                             
                             <tbody>
                                 <!--   v-for="myGetData in filteredInput" 
                    v-bind:key="myGetData.id" ??paginatedCUSTOMER??  -->
                                 <tr v-bind:CUSTOMER="myGetData.CUSTOMER" 

                                 class="aaaa " @dblclick="openDialog(myGetData.CUSTOMER)"
                               :rez="myGetData.RESIDENCE"
                                  v-for="myGetData in getDataFunction" v-bind:key="myGetData.id">
                                     <!-- <td>getDataFunction
                      {{myGetData}}
                    </td> -->

                                     <td> {{myGetData.CUSTOMER}} </td>
                                     <td>{{myGetData.EXTNUM}}</td>
                                     <td v-if="myGetData.PERSON===0"><span>
                                             <v-icon left small>account_balance</v-icon> Ապահովագրական
                                         </span> </td>
                                     <td v-else-if="myGetData.PERSON===1"><span>
                                             <v-icon left small>account_balance</v-icon> Բանկ
                                         </span> </td>
                                     <td v-else-if="myGetData.PERSON===2">
                                         <v-icon left class="pa-0" dense small>domain</v-icon> <span class="caption"> Իրավաբանական անձ </span>
                                     </td>
                                     <td v-else-if="myGetData.PERSON===3"><span>
                                             <v-icon small left=""> accessibility</v-icon>Ֆիզիկական անձ
                                         </span></td>
                                     <td v-else-if="myGetData.PERSON===4"><span>
                                             <v-icon left small>accessibility</v-icon> Անհատ ձեռներեց
                                         </span> </td>
                                     <td v-else-if="myGetData.PERSON===5"><span>
                                             <v-icon left small>fas fa-flag</v-icon>Հայաստանի Հանրապետություն/ՈՉՖՆ.ԸՆԿ
                                         </span> </td>
                                     <td v-else-if="myGetData.PERSON===6"><span>
                                             <v-icon left small>fas fa-flag</v-icon> Օտարերկրյա պետություն / ՈՉՖՆ.ԸՆԿ
                                         </span> </td>
                                     <td v-else-if="myGetData.PERSON===7"><span>
                                             <v-icon left small>fas fa-city</v-icon> Համայնք / ՈՉՖՆ.ԸՆԿ
                                         </span> </td>
                                     <td v-else-if="myGetData.PERSON===8"><span>
                                             <v-icon left small>fas fa-flag</v-icon> Միջազգային կազմակերպություն / ՖՆ.ԸՆԿ
                                         </span> </td>
                                     <td v-else><span> </span> </td>

                                     <!-- <td>{{myGetData.RESIDENCE}}</td> -->
                                     <!-- <input type="text" disabled value="code.ID"
                                      v-model="myGetData.RESIDENCE"> -->
                             <td > <select class=" selectMy" disabled v-model="myGetData.RESIDENCE" >

    <option :value="code.ID"  class="black--text caption select" id="selectMy" 
    v-for="code in sitizenship " :key="code.ID"> {{ code.RESIDENCE}} 

                                        </option>

                                    </select>
</td>
                                     <td> {{myGetData.NAME_A}}</td>
                                     <td>{{myGetData.SNAME_A}}</td>
                                     <td>{{myGetData.FNAME_A}}</td>

                                     <td>{{myGetData.ORGTYPE}}</td>

                                     <td>{{myGetData.PRATE}}</td>

                                     <td>{{myGetData.ORGNAME}}</td>
                                     <td v-if="myGetData.SEX===1">
                                         <v-icon color="" dense>fas fa-mars </v-icon> <span class="pl-3 pr-8">Արական</span>
                                     </td>
                                     <td v-else>
                                         <v-icon class="" dense color="pink lighten-2">fas fa-venus </v-icon> <span class="pl-4">Իգական</span>
                                     </td>

                                     <td>{{myGetData.BIRTHDAY  }}</td>
                                     <td>{{myGetData.DEDTIME}}</td>

                                     <td>{{myGetData.ISTWOCTRY}}</td>
                                     <td>{{myGetData.COUNTRY}}</td>
                                     <td>{{myGetData.SOCCART}}</td>

                                     <td>{{myGetData.DOCKIND}}</td>
                                     <td>{{myGetData.DOCUMENT}}</td>
                                     <td>{{myGetData.DOCSRC}}</td>
                                     <td>{{myGetData.DOCDATE}}</td>

                                   <td>{{myGetData.DOCISSUDT}}</td>
                  <td>{{myGetData.IDCARD}}</td>
                  <td>{{myGetData.IDSRC}}</td>
                  <td>{{myGetData.IDISSUDT}}</td>
                  <td>{{myGetData.IDEXPIRDT}}</td>
                  <td>{{myGetData.DRVNUM}}</td>
                  <td>{{myGetData.DRVDATE}}</td>
                  <td>{{myGetData.TAXPAYER}}</td>
                  <td>{{myGetData.REGNUM}}</td>
                  <td>{{myGetData.SECTOR}}</td>
                  <td>{{myGetData.TRUSTED}}</td>
                  <td>{{myGetData.ADDRESS_A}}</td>
                  <td>{{myGetData.EMAIL}}</td>
                  <td>{{myGetData.FULLNAME_E}}</td>
                  <td>{{myGetData.FULLNAME_R}}</td>
                  <td>{{myGetData.BIRTHPLACE}}</td>
                  <td>{{myGetData.WORKPLACE}}</td>
                  <td>{{myGetData.WORKER}}</td>
                  <td>{{myGetData.BRANCH}}</td>
                  <td>{{myGetData.FULLKIND}}</td>
                  <td>{{myGetData.TSOWNER}}</td>
                  <td>{{myGetData.OPENDATE}}</td>
                  <td>{{myGetData.CLOSEDATE}}</td>
                  <td>{{myGetData.TSUSER}}</td>
                  <td>{{myGetData.TSTIME}}</td>
                  <td>{{myGetData.BROKER}}</td>
                  <td>{{myGetData.LICENCEDATE}}</td>
                  <td>{{myGetData.LICENCENUM}}</td>
                  <td>{{myGetData.CONTNUM}}</td>
                  <td>{{myGetData.CONTDATE}}</td>
             


                                 </tr>

                             </tbody>
                             
                         </template> 
                    </v-simple-table>
                     <!-- </table>  -->
                      <!-- <div class="v-table_pagination" v-if="pages" >
                                     <div class="page"
                                     :class="{'page_selected':page===pageNumber}"
                                     @click="pageClick(page)"
                                     v-for="page in pages" :key="page">
                                     <span>    {{page}}  </span>   
                                     </div>
                                 </div> -->
       
                 </div>
                
             </div>
         </v-col>
     </v-row>

     <!--  -->

 </v-container>
</template>

<script>
import {mapActions} from 'vuex'
import {myFunction,myFunction1,myFunction2,myFunction3,myFunction4,myFunction5,myFunction6,myFunction7,myFunction8,myFunction9,myFunction10,
    myFunction11,myFunction12,myFunction13,myFunction14,myFunction15,myFunction16,myFunction17,myFunction18,myFunction19,
    myFunction20,myFunction21,myFunction22,myFunction23,myFunction24,myFunction25,myFunction26,myFunction27,myFunction28,
    } from "../helpers/method"
import {
    eventEmitter
} from './../../main'
export default {
    name: 'Datatable222',
    // props:["getData"],

    data() {

        return {
windowSize: {
        x: 0,
        y: 0,
      },
      height:0,


            rez:'',
            usersPerPage:10,
            pageNumber:1,


 sitizenship: [
              {
            RESIDENCE: "Ռեզիդենտ ",
            ID: 5,
        },
          {
            RESIDENCE: "Ոչ ռեզիդենտ ",
            ID: 6,
        },

            ],
            //  myGetdata2:['Artyom','armen','valodik'],
            search: '',

            myGetdata2: '',
            // getCustomerData:[], vuex state mej e
            //  CUSTOMER:'',
            url: {
                getUrl: "http://192.168.100.153:8000/customer/customer-retrieve",
                // 8021 port
                // getUrl: "http://192.168.100.153:8021/customer/customer-retrieve",
                // 


                   // փաստաթղթերի տվյալներ հիմնական էջի & popup -i & CUSTDOCS տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
                getDocType: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTDOCS&CCOLUMN=DOCKIND" ,


               

                   
        // Անձանց տեսակներ լրացված է OtherBasicInformation.vue
              personType: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=KIND",



               // Լրացման ճշտություն "Անձի լրացման տեսակ API" լրացված է BranchOtherBasicinfo.vue
                
             fillingAccuracy: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=FULLKIND",

            // //  Մարզերի ցուցակ "Ռեգիոնների ցուցակ API" լրացված է LeftAdresses.vue ?COUNTRY=ARM
            //    getRegionArm: "http://192.168.100.153:8000/country/get-region-list/",

            //    Ռայոնների ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ
// հանել եմ =YR
            //  getYerReg:  "http://192.168.100.153:8000/country/get-district-list/?COUNTRY=ARM&REGION=YR",

            /////////////////////////////////

            //  Փողոցներ ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ =YR03
             
            getStreet: "http://192.168.100.153:8000/country/get-street-list/?DCHARID",

// գրանցման տեսակ registrationTypeLeftAdresses.vue

            getLives: "http://192.168.100.153:8000/diction_s/get-dicttype-details/?CTABLE=CUSTOMER&CCOLUMN=ADRESKIND",


            },
        }
        
    },


    computed: {

        /////////////pagination
        pages(){
 let arr=this.$store.state.getData
    const result = Math.ceil(arr.length/this.usersPerPage);
        console.log(result)
 return  (result < 1) ? 1 : result
        },


        paginatedCUSTOMER(){
let from= (this.pageNumber-1)*this.usersPerPage;
let to = from + this.usersPerPage;
return this.$store.state.getData.slice(from,to);
        },
        //////////////////////

        // getCustomerData.js -ից եկած տվյալներ

        getCUSTADDRES(){
return this.$store.state.CUSTADDRES
    },


        getDataFunction() {
            return this.$store.state.getData
        },
        /////
          myFunction(){
       return   myFunction
      },

          myFunction1(){
       return   myFunction1
      },///

    myFunction2(){
       return   myFunction2
      },    myFunction3(){
       return   myFunction3
      },    myFunction4(){
       return   myFunction4
      },    myFunction5(){
       return   myFunction5
      },    myFunction6(){
       return   myFunction6
      },    myFunction7(){
       return   myFunction7
      },    myFunction8(){
       return   myFunction8
      },    myFunction9(){
       return   myFunction9
      },    myFunction10(){
       return   myFunction10
      },    myFunction11(){
       return   myFunction11
      },    myFunction12(){
       return   myFunction12
      },    myFunction13(){
       return   myFunction13
      },    myFunction14(){
       return   myFunction14
      }, 
         myFunction15(){
       return   myFunction15
      }, 
       myFunction16(){
       return   myFunction16
      }, 
      
      
      myFunction17(){
       return   myFunction17
      },    myFunction18(){
       return   myFunction18
      },    myFunction19(){
       return   myFunction19
      },    myFunction20(){
       return   myFunction20
      },    myFunction21(){
       return   myFunction21
      },    myFunction22(){
       return   myFunction22
      },    myFunction23(){
       return   myFunction23
      },    myFunction24(){
       return   myFunction24
      },    myFunction25(){
       return   myFunction25
      },    myFunction26(){
       return   myFunction26
      },    myFunction27(){
       return   myFunction27
      },    myFunction28(){
       return   myFunction28
      },   


        getTableShow() {
            return this.$store.state.myTable
        },

        filteredInput() {

            var self = this
            const filtered = this.$store.state.getData.filter(function (myGetData) {
                return Object.keys(myGetData).some(function (key) {
                    console.log(String(myGetData[key]).toLowerCase().indexOf(self.search) > -1)

                    return String(myGetData[key]).toLowerCase().indexOf(self.search) > -1

                })

            })

            console.log(filtered)
            return filtered
        }
    },
     mounted () {
      this.onResize();
      this.resize();
      this.GET_COUNTRY_LIST();
   
    },
    methods: {
        ...mapActions([
            'GET_COUNTRY_LIST',
          
        ]),

          onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
        //  window.innerHeight 
resize(){
    this.height=this.windowSize.y  - (294-32)+'px'
    // this.height=635
},
sortBYname(){
this.$store.state.getData.sort((a,b)=>a.NAME_A.localeCompare(b.NAME_A))
},
sortBYCustomer(){
this.$store.state.getData.sort((a,b)=>a.CUSTOMER-b.CUSTOMER)
},
sortBYEXTNUM(){
this.$store.state.getData.sort((a,b)=>a.EXTNUM-b.EXTNUM)
},

sortBYPERSON(){
this.$store.state.getData.sort((a,b)=>a.PERSON-b.PERSON)
},

sortBYRESIDENCE(){
this.$store.state.getData.sort((a,b)=>a.RESIDENCE-b.RESIDENCE)
},

sortBYSNAME_A(){
this.$store.state.getData.sort((a,b)=>a.SNAME_A.localeCompare(b.SNAME_A))
},

sortBYFNAME_A(){
this.$store.state.getData.sort((a,b)=>{
if(a.FNAME_A===""||b.FNAME_A===""){
return a.FNAME_A.localeCompare(b.FNAME_A)}
}
    
)},
       
    
        pageClick(page){
            this.pageNumber=page;

        },

        scrollToEnd: function () {
            var container = this.$el.querySelector("#table");
            container.scrollTop = container.scrollHeight;
        },

        openDialog(CUSTOMER) {
            if (eventEmitter.$emit('dialogOpened', )) {
                this.getCustomerDataMethod(CUSTOMER);
             
                this.getDocTypeFunc();

this.getPersonTypeFunc();
this.getFillingAccuracyFunc();
this.getStreetFunc();
this.getLivesFunc();
            }

        },

// գրանցման տեսակ registrationTypeLeftAdresses.vue
getLivesFunc() {
     
            this.axios
                .get(this.url. getLives, )
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state.  getLives= responce.data.data;
                    console.log(this.$store.state. getLives)
                     }) .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

},

 //    Ռայոնների ցուցակ Erevan լրացված է LeftAdresses.vue գրացման տվյալներ -ի մեջ          

getStreetFunc() {
     
            this.axios
                .get(this.url. getStreet, )
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state.getStreet= responce.data.data;
                    console.log ("POXOC"+this.$store.state. getStreet)
                     }) .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

},

               // Լրացման ճշտություն "Անձի լրացման տեսակ API" լրացված է BranchOtherBasicinfo.vue
                
getFillingAccuracyFunc() {
     
            this.axios
                .get(this.url.fillingAccuracy, {
                       
                    },)
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state. fillingAccuracy= responce.data.data;
                    console.log(this.$store.state.fillingAccuracy
)
                })
                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

},


        // Անձանց տեսակներ լրացված է OtherBasicInformation.vue

getPersonTypeFunc() {
     
            this.axios
                .get(this.url.personType, {
                       
                    },)
                .then(responce => {
                    // console.log(responce.data);
                  this.$store.state.personType = responce.data.data;
                    console.log(this.$store.state.personType)
                })
                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
    

},




// PersonalDocuments.vue մեջի տվյալենրի zapros
getDocTypeFunc() {
            this.axios
                .get(this.url.getDocType,)
                .then(responce => {
                    // console.log(responce.data);
                    this.$store.state.getDocType = responce.data.data;
                })
                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });
        },
              


        //   getDatMethod(CUSTOMER) {
        getCustomerDataMethod(CUSTOMER,) {

            this.axios
                .get(
                    this.url.getUrl, {
                        params: {
                            CUSTOMER: CUSTOMER,
                       
                        }
                    },

                )
                .then(responce => {
                    console.log(responce.data);
                    // CUSTUMER ընդհանուր
                    this.$store.state. getCustomerData = responce.data;
                    // CUSTPHONE տվյալներ լրացված է PhoneleftTabs.vue -ի մեջ
                    this.$store.state.CUSTPHONE = responce.data.CUSTPHONE;
                    // CUSTADDRES տվյալներ լրացված է AdresseLeftTabs.vue ի մեջ
                    this.$store.state.CUSTADDRES = responce.data.CUSTADDRES;
                    console.log("Adresss =  "+  this.$store.state.CUSTADDRES )
                    // CUSTDOCS տվյալներ  լրացված է PersonalDocuments.vue -ի մեջ
                    this.$store.state.CUSTDOCS = responce.data.CUSTDOCS;
                    // CUSTACNT տվյալներ
                    this.$store.state.CUSTACNT = responce.data.CUSTACNT;
                    console.log(this.$store.state.getCustomerData)
                })

                .catch(function (error) {
                    alert("կապի խափանում");
                    console.log(error);
                });

        }
    }
}
</script>

<style>

.myDiv {
    width: 110px;

}

.wwwe {
    color: red
}

.borderTableRafius {
    border: 3px solid #8BC34A;

}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #F5F5F5;
    border-radius: 10px;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    /* background-color: #F5F5F5; */
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #c0c0c0
        /* background-image: -webkit-linear-gradient(top,  rgb(206, 218, 192) 0%, rgb(149, 168, 128) 50%,  rgb(172, 224, 112) 51%, #8BC34A 100%); */
}
::-webkit-scrollbar-thumb:hover {
    border-radius: 5px;
    background-color:#757575
        /* background-image: -webkit-linear-gradient(top,  rgb(206, 218, 192) 0%, rgb(149, 168, 128) 50%,  rgb(172, 224, 112) 51%, #8BC34A 100%); */
}
.genderheight {
    width: 200px !important;
}
.v-table_pagination{
    display:flex !important;
    /* flex-wrap:wrap !important; */
    justify-content:center !important;
    background-color: #c4c0bd !important;
    height:32px
    /* margin-top:20px !important; */
}
.page{
    padding:8px !important;
    height:32px;
    /* border:1px solid grey !important; */
    /* border-radius: 12px solid grey !important;; */
    margin-right: 10px;
}
.page:hover{
    background-color:#F48FB1;
    cursor:pointer;
    color:white
}
.page_selected{
    background-color:#8BC34A;
    cursor:pointer;
    color:white;
      /* z-index: -1; */

    
}

 

</style>
