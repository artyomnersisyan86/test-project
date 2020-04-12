<template>
    <v-tabs background-color="pink lighten-2 " color="pink" dark hide-slider height="23px">
        <v-tabs-slider></v-tabs-slider>
        <v-tab :key="tab2" color="pink" class="caption text-capitalize">Որոնում</v-tab>
        <v-tab-item key="tab2">
            <v-container fluid>
                <v-row no-gutters>
                    <v-col>
                        <div>
                            <v-btn color="pink" width="200" height="32" class="text-capitalize justify-start" outlined
                                    small dark>
                                <v-icon size="24" color="dark" left>mdi-autorenew</v-icon>
                                <span class="pl-9">Նորացնել</span>
                            </v-btn>
                        </div>
                        <div>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="pink" width="200" height="32" class="text-capitalize justify-start"
                                           outlined small dark v-on="on">
                                        <v-icon size="24" left color="dark">add</v-icon>
                                        <span class="pl-9">Ավելացնել</span>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item class="pink" v-for="(item, index) in items" :key="index" router
                                            :to="item.route">
                                        <v-list-item-title class="white--text caption ">{{item.title }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        <div>
                            <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32"
                                    outlined small dark>
                                <v-icon size="24" left color="dark">edit</v-icon>
                                <span class="pl-9">Փոփոխել</span>
                            </v-btn>
                        </div>
                    </v-col>
                    <v-col>
                        <div>
                            <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32"
                                    outlined small dark>
                                <v-icon size="24" left color="dark">delete_forever</v-icon>
                                <span class="pl-9">Հեռացնել</span>
                            </v-btn>
                        </div>
                        <div>
                            <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32"
                                    outlined small dark>
                                <v-icon size="24" left color="dark">emoji_people</v-icon>
                                <span class="pl-9">Կասեցնել</span>
                            </v-btn>
                        </div>
                        <div>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32"
                                            outlined small dark v-on="on">
                                        <v-icon size="24" left color="dark">done_all</v-icon>
                                        <span class="pl-9">Որոշիչ</span>
                                    </v-btn>
                                </template>
                                <v-list style="max-height: 200px" class="overflow-y-auto">
                                    <v-list-item class="pink" v-for="(item, index) in decisive" :key="index">
                                        <v-list-item-title class="white--text caption p-0">{{item}}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                    <v-col>
                        <div>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="pink" width="200" class="text-capitalize justify-start" height="32"
                                            outlined small dark v-on="on">
                                        <v-icon size="24" left color="dark">subtitles</v-icon>
                                        <span class="pl-9">Տեսակ</span>
                                    </v-btn>
                                </template>
                                <v-list style="max-height: 200px" class="overflow-y-auto">
                                    <v-list-item class="pink" v-for="(item, index) in typeDocuments" :key="index">
                                        <v-list-item-title class="white--text caption">{{item}}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                        <div class=" caption">
                            <v-form
                                    @submit.prevent>
                                <v-text-field background-color color="pink" outlined placeholder="Փաստաթուղթ"
                                        dense="" class="caption" prepend-inner-icon="description"></v-text-field>
                            </v-form>
                        </div>
                        <div class="heightWidthClass caption">
                            <v-form @submit="submit" onSubmit="return false;">
                                <v-text-field background-color color="pink" outlined placeholder="Ներքին կոդ"
                                        dense="" class="caption" prepend-inner-icon="description"></v-text-field>
                            </v-form>
                        </div>
                    </v-col>
                    <v-col>
                        <div>
                            <v-form @submit.prevent>
                                <v-text-field background-color color="pink" outlined placeholder="Անուն" dense=""
                                              class="caption" prepend-inner-icon="people"></v-text-field>
                            </v-form>
                        </div>
                        <div>
                            <v-form @submit.prevent>
                                <v-text-field background-color color="pink" outlined placeholder="Ազգանուն"
                                        dense="" prepend-inner-icon="people" class="caption"></v-text-field>
                            </v-form>
                        </div>
                        <div class="heightWidthClass ">
                            <v-form @submit.prevent>
                                <v-text-field background-color color="pink" outlined placeholder="Անձի կոդ"
                                              class="caption" dense="" prepend-inner-icon="people"></v-text-field>
                            </v-form>
                        </div>
                    </v-col>
                    <v-col>
                        <div class="heightWidthClass caption">
                            <v-form @submit.prevent>
                                <v-text-field background-color color="pink" outlined placeholder="Հեռախոս"
                                        dense="" class="caption" prepend-inner-icon="phone"></v-text-field>
                            </v-form>
                        </div>
                        <div>
                            <v-btn color="pink" class="text-capitalize justify-start" width="200" height="32"
                                    outlined small dark>
                                <v-icon size="24" left color="dark">description</v-icon>
                                <span class="pl-9">Պայմանագրեր</span>
                            </v-btn>
                        </div>
                        <div>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on }">
                                    <v-btn color="pink" class="text-capitalize justify-start" width="200"
                                            height="32" outlined small dark v-on="on">
                                        <v-icon size="24" left color="dark">help</v-icon>
                                        <span class="pl-9"> հարցում</span>
                                    </v-btn>
                                </template>
                                <v-list style="max-height: 200px" class="overflow-y-auto">
                                    <v-list-item class="pink" v-for="(item, index) in personQuery" :key="index">
                                        <v-list-item-title class="white--text  caption">{{item}}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-tab-item>
    </v-tabs>
</template>
<script>
    export default {
        name: 'workPlaceMenu',
        data() {
            return {
                filters:[
                    {label:'Նորացնել', type: ''},{}
                ],
                tab1: null,
                tab2: null,
                personQuery: ["Հարցում անձի վերաբերյալ", "Հարցում վարորդի վերաբերյալ "],
                items: [
                    {title: "Ֆիզիկական անձ",},
                    {title: "Անհատ ձեռնարակատեր",},
                    {title: "Կազմակերպություն",}
                ],
                decisive: [
                    "Բոլորը",
                    "Հաճախորդ",
                    "Աշխատակից",
                    "Վերաապահովագրող",
                    "Վերապ․ բրոքեր",
                    "Ապահովագրական գործակալ",
                    "Մեր ընկերություն",
                    "Գումարն իր հաշվին",
                    "Առանց Online",
                    "Միջնորդավճարի հաշվանցում",
                    "Վաճառող",
                    "Ինքը որպես գործակալ",
                    "Աշխատավայր",
                    "Ապահովագրված անձ",
                    "Առավելագույն ապգումարի սահմանում",
                    "Բանկ",
                    "Պատասխանատու անձ",
                    "Միայն փոխանցումով"
                ],
                typeDocuments: [
                    "Անձնագիր",
                    "Նույնականացման քարտ",
                    "Ծննդյան վկայական",
                    "Կացության վկայական",
                    "Օտարերկրյա անձնագիր(Ռդ քաղ․․․)",
                    "Օտարերկրյա անձնագիր",
                    "Հին նույնականացման քարտ",
                    "Մահվան վկայական",
                    "Ճամփորդական փաստաթուղթ"
                ],
            }
        },
    }
</script>

