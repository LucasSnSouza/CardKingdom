<template>

    <button 
        class="small-button flex p-lg w-full rounded-sm"
        :class="
            type
        "
    >
        <div class="small-button-drive y-center flex gap-md w-full rounded-sm">
            <slot/>
        </div>
    </button>

</template>

<script>

// import * as Misc from "@/components/Misc";

export default {
    props: {
        type: {
            type: String,
            default: "primary"
        }
    },
    components: {
    }
}

</script>

<style lang="scss" scoped>

.small-button {
    border: none;
    cursor: pointer;
    overflow: hidden;
    z-index: 0;

    &.primary {
        background: none;
        color: white;
        position: relative;
        transition: .2s;

        &:hover{
            background: var(--bg-color-brand-tertiary);
        }

        &:active {
            background: var(--bg-color-brand-tertiary);
        }

    }

    .small-button-drive{
        z-index: 1;
    }

}

</style>