<template>
    
    <div class="tab-wrapper bg-color-brand-one flex flex-column h-full shadow-sm">

        <div class="flex p-md gap-md">

            <ButtonBasic
                class="bg-color-brand-four w-full aspect-ratio flex x-center y-center rounded-md pointer"
            >
                
            </ButtonBasic>

        </div>

        <div class="flex flex-column h-full p-md gap-md">
            
            <ButtonBasic
                v-for="(item, index) of buttons"
                class="bg-color-brand-four aspect-ratio flex x-center y-center rounded-md pointer"
                :key="index"
            >
                <Icon
                    :icon="item?.icon"
                    :size="item?.size"
                    color="#000000AA"
                />
            </ButtonBasic>

        </div>

        <div class="flex flex-column p-md gap-md">
            
            <ButtonBasic
                class="bg-color-brand-four aspect-ratio flex x-center y-center rounded-md pointer"
            >
                <Icon
                    icon="config-icon"
                    :size="[18,18]"
                    color="#000000AA"
                />
            </ButtonBasic>

            <ButtonBasic
                class="bg-color-brand-four aspect-ratio flex x-center y-center rounded-md pointer"
            >
                <Icon
                    icon="exit-icon"
                    :size="[18,18]"
                    color="#000000AA"
                />
            </ButtonBasic>

        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
import Icon from "./Icon.vue"

export default{
    data(){
        return{
            
        }
    },
    components: {
        ...Button,
        Icon
    },
    props: {
        buttons:{
            type: Array,
            default: () => []
        }
    }
}

</script>

<style lang="scss" scoped>

.tab-wrapper{
    width: 60px;
    z-index: 2;
}

</style>