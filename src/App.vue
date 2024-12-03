<template>

    <div class="app-wrapper flex h-full">
        <MiscTab
            :buttons="form_buttons_tab"
            @Command-0="setView"
            @Command-1="setView"
        />
        <RouterView />
    </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import * as Misc from "@/components/Misc"

export default {
    data(){
        return{
            form_buttons_tab:[
                {
                    name: "Arena",
                    size: [19,19],
                    icon: "ticket-icon",
                    response: "/"
                },
                {
                    name: "Cards",
                    size: [19,19],
                    icon: "card-icon",
                    response: "/cards-list"
                }
            ]
        }
    },
    components: {
        ...Misc
    },
    methods: {
        setView(value){
            this.$router.push({ path: value });
        }
    }
}

</script>

<style lang="scss" scoped></style>
