<template>
<v-container fluid pa-0>

    <v-row no-gutters class="pt-8">

        <v-tabs v-if="showTabsFunction" v-model="currentItem" background-color="pink lighten-2" color="pink" dark hide-slider height="32px">

            <v-tab class="mx-2 caption text-capitalize" v-for="(item,index) in tabsFunction" :key="index" :index="index" router :to="item.route" value="item.route">
                <!--  router  :to="item.route" -->

                {{ item.title }}
                <v-btn icon color="pink" dark @click="del(index)">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-tab>

        </v-tabs>

        <!--        
<keep-alive> 
             <router-view></router-view>           

</keep-alive> -->

    </v-row>

</v-container>
</template>

<script>
export default {

    name: 'DynamicTabs',

    data() {
        return {
            show: false,
            currentItem: 'tab-'
        }
    },
    computed: {
        tabsFunction() {
            return this.$store.state.tabs
        },

        showTabsFunction() {
            return this.$store.state.showDynamicTabs
        }
    },
    methods: {
        del(item) {
            if (this.$store.state.tabs.length === 1) {

                this.$store.state.showDynamicTabs = false

                window.location.href = "/Navbar"
                // this.$router.push({path: '/Navbar' })

            }
            this.$store.state.tabs.splice(item, 1);
            this.$router.go(-1)
            //  this.$nextTick(() => { this.currentItem = 'tab-' + item })

        }

    }

}
</script>

<style>

</style>
