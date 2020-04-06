<template>
  <div class="row">
    <div class="col-8">
      <h3>Draggable table</h3>
      <table class="table table-striped">
        <thead class="thead-dark">
<draggable v-model="list" tag="tr">

   





           <th v-for="header in headers" :key="header" scope="col">
              {{ header }}
            </th>
               </draggable>
        </thead>
        <draggable v-model="list" tag="tbody">
          <tr v-for="item in list" :key="item.name">
           <td scope="row" v-for="header in headers" :key="header">{{ item[header] }}</td>
          
          </tr>
        </draggable>
      </table>
    </div>
    <!-- <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="headers" title="Headers" /> -->
    <!-- <rawDisplayer class="col-3" :value="list" title="List" /> -->
  </div>



  
<!-- //    getCustomerDataMethod(
//        ID, STATE, KIND, CODE, PHONE, ISSMS, NOTE, ONLUSER, TSUSER 

//         ) {
           
//             let arr=this.getCUSTPHONE

//   for(let i = 0; i<arr.length; i++){
// this.this.phone1=arr[i]
//     console.log(this.this.phone1)
//     this.phone1.ID=ID
//     this.phone1.STATE=STATE
//     this.phone1.KIND=KIND
//     this.phone1.CODE=CODE
//     this.phone1.PHONE=PHONE
//     this.phone1.ISSMS=ISSMS
//     this.phone1.STATE=STATE
//     this.phone1.ONLUSER=ONLUSER
//     this.phone1.NOTE=NOTE
//     this.phone1.TSUSER
//             var formdata = new FormData();

//                formdata.append("ID",ID);
//             formdata.append("KIND",KIND);
//             formdata.append("CODE",CODE);
//             formdata.append("PHONE",PHONE);
//             formdata.append("ISSMS", Number(ISSMS));
//             formdata.append("STATE", Number(STATE));
//              formdata.append("ONLUSER", ONLUSER);
//             formdata.append("NOTE",NOTE);
//             formdata.append("TSUSER",this.phone1.TSUSER);
    
  
// }
 
//             this.axios
//                 .post(this.url.CUSTPHONEUPDATE, formdata
//                 )
//                 .then(responce => {
//                     // console.log(responce.body)
//                     console.log(responce.data)
//                     // this.$store.state.CUSTPHONE = responce.data.CUSTPHONE;

//                 })

//                 .catch(function(error) {
//                     alert("կապի խափանում");
//                     console.log(error.message);
//                 });

//         },
// }, -->
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "table-example",
  display: "Table",
  // order: 8,
  order: 9,
  components: {
    draggable
  },
  data() {
    return {
         headers: ["id", "name", "sname"],
      list: [
        { id: 1, name: "Արտյոմ", sname: "Ներսիսյան" },
        { id: 2, name: "Էդգար", sname: "Մարտիրոսյան" },
        { id: 3, name: "Թոմ", sname: "Դոխոլյան" },
        { id: 4, name: "Արմեն", sname: "Ներսիսյան" }
      ],
      dragging: false
    };
  }
};
</script>
<style scoped>
/* .buttons {
  margin-top: 135px;
} */
</style>

