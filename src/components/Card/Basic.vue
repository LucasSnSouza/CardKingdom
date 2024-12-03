<template>

    <div
        class="basic-card-wrapper overflow-hidden p-md rounded-md shadow-sm flex flex-column pointer relative"
        :class="content?.rarity?.current"
    >

        <div class="basic-card-description flex flex-column gap-md p-lg">

            <MiscIcon
                icon="drag-hash-icon"
                :size="[24,24]"
                color="#000000"
            />

            <p class="color-brand-two font-sm"> {{ content?.passive }} </p>

            <div 
                v-if="content?.tags"
                class="flex wrap"
            >
                <div
                    v-for="(item, index) of content.tags"
                    class="p-md rounded-sm"
                    :class="item?.current"
                    :key="index"
                >
                    <p class="font-xsm color-brand-one">{{ item?.text }}</p>
                </div>
            </div>

        </div>

        <div class="basic-card-titles flex w-full p-md gap-md">

            <div class="titles-class aspect-ratio rounded-md">

            </div>

            <div class="w-full flex x-center y-center">

                <h1 class="font-sm" > {{ content?.class }} </h1>

            </div>

        </div>

        <div class="basic-card-images h-full w-full rounded-sm bg-color-brand-four">
        </div>

        <div class="basic-card-stats w-full flex gap-md p-md">

            <div class="stats-damage aspect-ratio rounded-md flex x-center y-center">
                <p class="font-sm color-brand-one">
                    {{ content?.stats?.atack }}
                </p>
            </div>

            <div class="stats-data w-full flex x-center y-center">

                <p class="font-xsm o-half">
                    {{ content?.rarity?.text }}
                </p>

            </div>

            <div class="stats-defense aspect-ratio rounded-md flex x-center y-center">
                <p class="font-sm color-brand-one">
                    {{ content?.stats?.defense }}
                </p>
            </div>

        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"

export default{
    data(){
        return{

        }
    },
    components: {
        ...Misc
    },
    props: {
        content: {
            type: Object,
            default: () => {}
        }
    }
}

</script>

<style lang="scss" scoped>

.basic-card-wrapper{
    width: 180px;
    height: 260px;
    padding-top: 0px;
    padding-bottom: 0px;

    .basic-card-description{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0;
        width: 100%;
        height: 100%;
        transition: .2s;
    }

    .basic-card-description:hover{
        background: rgba(250, 250, 250, 0.8);
        opacity: 1;
        backdrop-filter: blur(10px);
    }

    .basic-card-titles{

        padding-left: 0px;
        padding-right: 0px;

        .titles-class{
            min-width: 35px;
            background: rgb(95, 89, 89);
        }

    }

    .basic-card-stats{

        padding-left: 0px;
        padding-right: 0px;
        
        .stats-damage{
            min-width: 35px;
            background: rgb(241, 112, 112);
        }

        .stats-defense{
            min-width: 35px;
            background: rgb(95, 89, 89);
        }

    }
}

.basic-card-wrapper{

    &.common{
        background: #FFFFFF;
    }
    &.uncommon{
        background: hsl(122, 40%, 84%);
    }
    &.rare{
        background: linear-gradient(-60deg, rgb(255, 202, 186), rgb(243, 155, 143));
        border: 1px solid #ff5c46;
    }
    &.epic{
        background: linear-gradient(-60deg, rgb(206, 210, 238), rgb(152, 158, 206));
        border: 1px solid rgb(87, 80, 196);
    }

}

.basic-card-description{

    .fighter{
        background: rgb(58, 119, 252);
    }
    .tank{
        background: rgb(59, 64, 107);
    }
    .ranged{
        background: rgb(247, 96, 51);
    }
    
}

</style>