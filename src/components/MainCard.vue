<template>
    <div class="main-content-card" v-if="mainCardVisible">
        <img src="../assets/img/img.png" alt="user card img">
        <div class="main-card-descr">
            <h2 class="main-content-title">{{ user.name }}</h2>
            <p class="main-content-mail"><span>email:</span> {{ user.email }}</p>
            <p class="main-content-phone"><span>phone:</span> {{ user.phone }}</p>
            <h3 class="main-content-descr">О себе:</h3>
            <p class="main-content-descr-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
        mainCardVisible: {
            type: Boolean,
            default: false,
        }
    },

}
</script>
<style lang="scss">
.main-content {
    width: 100%;
    border-left: 1px solid rgba(222, 222, 221, 1);

    .main-content-card {
        display: flex;
        padding: 30px;
        gap: 61px;

        .main-card-descr {

            .main-content-title {
                font-size: 16px;
                font-weight: 600;
                line-height: 22px;
                margin-bottom: 10px;
                color: rgba(0, 0, 0, 1);
            }

            .main-content-mail,
            .main-content-phone {
                font-size: 14px;
                line-height: 20px;
                color: rgba(118, 120, 125, 1);
                margin-bottom: 10px;
            }

            .main-content-descr {
                margin-top: 20px;
                margin-bottom: 25px;
            }

            .main-content-descr-text {
                font-size: 14px;
                line-height: 17px;
                color: rgba(118, 120, 125, 1);
            }

            span {
                font-weight: 600;
                color: rgba(0, 0, 0, 1);
                margin-right: 10px;
            }
        }
    }
}
</style>