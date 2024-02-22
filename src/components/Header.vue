<template>
    <header class="header container">
        <div class="header-logo">Жилфонд</div>
        <div class="header-user">Пользователь</div>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px !important;
    margin-bottom: 26px !important;

    .header-logo {
        font-size: 32px;
        font-weight: 700;
        line-height: 39px;
        color: rgba(227, 31, 36, 1);
    }

    .header-user {
        font-size: 16px;
        line-height: 20px;
        color: rgba(51, 51, 51, 1);
    }
}
</style>