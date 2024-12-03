<template>

    <div class="arena-wrapper flex w-full h-full">

        <div class="information-frame flex x-center y-center h-full p-lg ">

            <div class="information-panel bg-color-brand-one flex flex-column gap-lg p-xlg w-full h-full rounded-sm shadow-sm">

                <div>
                    <h1 class="font-md o-3-4">Arena</h1>
                    <p class="font-sm o-half w-3-4">Coloque a prova seus decks, mostre sua soberania no campo de batalha.</p>
                </div>

                <div class="flex flex-column gap-sm">
                    <p class="font-sm">Busque por suas cartas</p>
                    <InputBasic
                        class="bg-color-brand-four p-md rounded-sm"
                        placeholder="Nome da carta"
                    />
                </div>

            </div>

        </div>

        <div class="views-frame w-full h-full p-lg">

            <div class="views-panel w-full h-full flex flex-column x-center">

                <div 
                    v-if="form_allies_cards.length > 0"
                    class="views-allies-frame w-full h-half flex x-center y-center gap-md"
                >

                    <CardBasic
                        v-for="(item, index) of form_allies_cards"
                        :content="item"
                        :index="index"
                    />

                </div>

                <div 
                    v-if="form_enemies_cards.length > 0"
                    class="views-enemies-frame w-full h-half flex x-center y-center gap-md"
                >

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
import * as Input from "@/components/Input"

export default{
    data(){
        return{
            form_allies_cards: [
                {
                    class: "Knight",
                    passive: "Ao morre, aumenta a armadura da proxima carta a direita em +1.",
                    rarity: {
                        current: "common",
                        text: "Comum"
                    },
                    stats: {
                        atack: 6,
                        defense: 6
                    },
                    tags: [
                        {
                            current: "fighter",
                            text: "Lutador" 
                        },
                    ]
                },
                {
                    class: "Defender",
                    passive: "Ao passar uma rodada, aumenta a armadura de todos as cartas a sua esquerda em +2.",
                    rarity: {
                        current: "rare",
                        text: "Rara"
                    },
                    stats: {
                        atack: 2,
                        defense: 14
                    },
                    tags: [
                        {
                            current: "tank",
                            text: "Tank" 
                        },
                    ]
                },
                {
                    class: "Bersek",
                    passive: "Ao passar uma rodada, se ainda vivo, recebe um aumento de +2 ponto de força.",
                    rarity: {
                        current: "uncommon",
                        text: "Incomum"
                    },
                    stats: {
                        atack: 12,
                        defense: 3
                    },
                    tags: [
                        {
                            current: "fighter",
                            text: "Lutador" 
                        },
                    ]
                },
                {
                    class: "Archer",
                    passive: "Possui 30% de chance de atacar, duas vezes.",
                    rarity: {
                        current: "common",
                        text: "Comum"
                    },
                    stats: {
                        atack: 6,
                        defense: 2
                    },
                    tags: [
                        {
                            current: "ranged",
                            text: "Longo Alcance" 
                        },
                    ]
                },
                {
                    class: "Archer",
                    passive: "Possui 60% de chance de atacar, duas vezes.",
                    rarity: {
                        current: "epic",
                        text: "Épico"
                    },
                    stats: {
                        atack: 6,
                        defense: 2
                    },
                    tags: [
                        {
                            current: "ranged",
                            text: "Longo Alcance" 
                        },
                    ]
                }
            ],
            form_enemies_cards: [
                
            ]
        }
    },
    components: {
        ...Misc,
        ...Card,
        ...Input
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