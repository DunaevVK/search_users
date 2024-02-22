<template>
    <span class="loader" v-if="$store.getters.getIsLoading"></span>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.loader {
    display: inline-block;
    margin: 3px auto;
    width: 25px;
    height: 25px;
    border: 3px solid red;
    border-bottom: none;
    border-radius: 100%;
    animation: rotate 1s infinite linear;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>