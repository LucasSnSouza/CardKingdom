<template>

    <div class="arena-wrapper flex w-full h-full">

        <div class="information-frame h-full p-lg ">

            <div class="information-panel bg-color-brand-one p-lg h-full rounded-md shadow-sm">

                <div>
                    <h1 class="font-md">Arena</h1>
                </div>

            </div>

        </div>

        <div class="views-frame w-full h-full p-lg">

            <div class="views-panel w-full h-full flex flex-column x-center">

                <div class="views-allies-frame w-full h-half flex x-center y-center gap-md">

                    <CardBasic
                        v-for="(item, index) of form_allies_cards"
                        :content="item"
                        :index="index"
                    />

                </div>

                <div class="views-enemies-frame w-full h-half flex x-center y-center gap-md">

                    <CardBasic
                        v-for="(item, index) of form_enemies_cards"
                        :content="item"
                        :index="index"
                    />

                </div>

            </div>
            
        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"
import * as Card from "@/components/Card"

export default{
    data(){
        return{
            form_allies_cards: [
                {
                    class: "Knight",
                    description: "Desde os tempos antigos, os cavaleiros têm sido símbolos de força, honra e proteção. Equipados com armaduras brilhantes e espadas afiadas, eles representavam os ideais de coragem e lealdade.",
                    stats: {
                        atack: 8,
                        defense: 6
                    }
                },
                {
                    class: "Defender",
                    description: "Os defensores, desde os primórdios das batalhas, são a linha de frente que sustenta a guerra. Com escudos robustos e armaduras reforçadas, eles simbolizam resiliência e determinação.",
                    stats: {
                        atack: 3,
                        defense: 10
                    }
                },
                {
                    class: "Bersek",
                    description: "Os berserkers, temidos guerreiros das eras antigas, eram a personificação da fúria em combate. Guiados por uma força primal, entravam em batalhas com uma ferocidade incomparável, desafiando qualquer adversário.",
                    stats: {
                        atack: 12,
                        defense: 3
                    }
                },
                {
                    class: "Archer",
                    description: "Os arqueiros, mestres da precisão e da paciência, eram os olhos atentos nos campos de batalha. Com arcos em mãos e flechas afiadas, atacavam de longe, atingindo alvos com uma habilidade letal.",
                    stats: {
                        atack: 6,
                        defense: 2
                    }
                },
                {
                    class: "Archer",
                    description: "Os arqueiros, mestres da precisão e da paciência, eram os olhos atentos nos campos de batalha. Com arcos em mãos e flechas afiadas, atacavam de longe, atingindo alvos com uma habilidade letal.",
                    stats: {
                        atack: 6,
                        defense: 2
                    }
                }
            ],
            form_enemies_cards: [
                {
                    class: "Knight",
                    description: "Desde os tempos antigos, os cavaleiros têm sido símbolos de força, honra e proteção. Equipados com armaduras brilhantes e espadas afiadas, eles representavam os ideais de coragem e lealdade.",
                    stats: {
                        atack: 8,
                        defense: 6
                    }
                },
                {
                    class: "Defender",
                    description: "Os defensores, desde os primórdios das batalhas, são a linha de frente que sustenta a guerra. Com escudos robustos e armaduras reforçadas, eles simbolizam resiliência e determinação.",
                    stats: {
                        atack: 3,
                        defense: 10
                    }
                },
                {
                    class: "Bersek",
                    description: "Os berserkers, temidos guerreiros das eras antigas, eram a personificação da fúria em combate. Guiados por uma força primal, entravam em batalhas com uma ferocidade incomparável, desafiando qualquer adversário.",
                    stats: {
                        atack: 12,
                        defense: 3
                    }
                },
                {
                    class: "Archer",
                    description: "Os arqueiros, mestres da precisão e da paciência, eram os olhos atentos nos campos de batalha. Com arcos em mãos e flechas afiadas, atacavam de longe, atingindo alvos com uma habilidade letal.",
                    stats: {
                        atack: 6,
                        defense: 2
                    }
                },
                {
                    class: "Archer",
                    description: "Os arqueiros, mestres da precisão e da paciência, eram os olhos atentos nos campos de batalha. Com arcos em mãos e flechas afiadas, atacavam de longe, atingindo alvos com uma habilidade letal.",
                    stats: {
                        atack: 6,
                        defense: 2
                    }
                }
            ]
        }
    },
    components: {
        ...Misc,
        ...Card
    }
}


</script>

<style lang="scss" scoped>

.arena-wrapper{
    background-color: var(--color-brand-four); 
    background-image: radial-gradient(var(--color-brand-five) 1px, transparent 1px); 
    background-size: 18px 18px;
    
    .information-frame{
        min-width: 350px;
    }
}

</style>