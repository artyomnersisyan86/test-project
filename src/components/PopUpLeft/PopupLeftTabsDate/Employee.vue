<template>
  <v-container fluid  pa-0 >
    <v-row  no-gutters>
    <v-col cols="12"  md="12" sm="12" xs="4" >

     
<v-expansion-panels :popout="false"   :focusable="true"  :hover="true">
      <v-expansion-panel >
        <v-expansion-panel-header ripple class="grey lighten-2 pink--text" >Աշխատակից</v-expansion-panel-header>
        <v-expansion-panel-content  >

<v-container fluid  pa-0>
<!-- քաղաքացիական կացություն civil status -->
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
          <v-form 
                @submit.prevent >
        <v-select
 color="pink lighten-2"
          :items="civilStatus"
          label="Քաղաք.. կացություն"
          dense
          outlined
           filled
           
         height="32"
           class="body-2  centered-input"
        ></v-select>
          </v-form>
        </v-col>

<!-- Կրթություն Education-->
        </v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
        <v-form 
                @submit.prevent >
        <v-select
 color="pink lighten-2"
          :items="education"
          label="Կրթություն"
          dense
          outlined
           filled
         height="32"
           class="body-2  centered-input"
        ></v-select>
        </v-form>
      </v-col>
       </v-row>

<!-- լեզուների իմացություն   languages-->
<v-row justify="center" no-gutters class="pt-2 pb-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
<template>
       <v-form 
                @submit.prevent >
    <v-select
  class="body-2  centered-input"
      v-model="selectedLanguages"
      :items=" languages"
      label="Լեզուների իմացություն "
      dense
          outlined
           filled
      multiple
    >
      <template v-slot:prepend-item>
        <v-list-item
        class="pink body-2  centered-input " 
        dark
          ripple
          @click="toggle"
        >
          <v-list-item-action>
            <v-icon :color="selectedLanguages.length > 0 ? 'pimk lighten-2' : ''">{{ icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ընտրել բոլորը</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
      <template v-slot:append-item>
        <v-divider class="mb-2"></v-divider>
        <v-list-item disabled>
          <v-list-item-avatar color="pink lighten-2" dark>
            <v-icon>language</v-icon>
          </v-list-item-avatar>

          <v-list-item-content v-if="likesAlllanguages">
            <v-list-item-title>Նշված են բոլոր լեզուները</v-list-item-title>
          </v-list-item-content>

          <v-list-item-content v-else-if="likesSomeLenguages">
            <v-list-item-title>Լեզուների քանակը</v-list-item-title>
            <v-list-item-subtitle>{{ selectedLanguages.length }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-content v-else>
            <v-list-item-title>
            Ոչ մի լեզու չգիտեք?
            </v-list-item-title>
           
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-select>
  </v-form>
</template>
</v-col>
</v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
            <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
      class="body-2  centered-input"
            label="ԷՀՄ․ իմացություն"
            outlined
            dense
            height="32"
     ></v-text-field>
      </v-form>
      </v-col>
       </v-row>
<v-row justify="center" no-gutters class="pt-2">
      <v-col cols="12"  md="8" sm="12" xs="12">
           <v-form 
                @submit.prevent >
    <v-text-field
   color="pink"
   class="body-2  centered-input"
            outlined
            label="Մասնագիտություն"
            height="32"
            dense
     ></v-text-field>
      </v-form>
      </v-col>
    </v-row>
</v-container>   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name:'Employee',

    data() {
        return {
                 civilStatus:['Ամուրի','Ամուսնացած','Բաժանված','Այրի'],
                 education:['Բարձրագույն','Միջնակարգ','Միջնակարգ մասնագիտական','Թերի բարձրագույն'],

 languages:['Հայերեն','Ռուսերեն','Անգլերեն','ֆրանսերեն','Իտալերեն','Գերմաներեն','Իսպաներեն','Ուկրաիներեն','Ֆիններեն','Վրացերեն','Բուլղարերեն','Արաբերեն','Ադրբեջաներեն','Թուրքերեն','Էստոներեն'],
 selectedLanguages:[]
        }
    },

     computed: {
      likesAlllanguages () {
        return this.selectedLanguages.length === this.languages.length
      },
      likesSomeLenguages () {
        return this.selectedLanguages.length > 0 && !this.likesAlllanguages
      },
      icon () {
        if (this. likesAlllanguages) return 'mdi-close-box'
        if (this.likesSomeLenguages) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      },
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAlllanguages) {
            this.selectedLanguages = []
          } else {
            this.selectedLanguages = this.languages.slice()
          }
        })
      },
    },

}
</script>

<style>

</style>