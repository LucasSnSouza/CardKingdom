<template>

    <div class="app-wrapper flex h-full">
        <MiscTab
            :buttons="form_buttons_tab"
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
                },
                {
                    name: "Cards",
                    size: [19,19],
                    icon: "card-icon",
                }
            ]
        }
    },
    components: {
        ...Misc
    }
}

</script>

<style lang="scss" scoped></style>
