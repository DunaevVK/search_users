<template>
    <div class="sidebar-card">
        <img src="../assets/img/preview.png" alt="Preview Img">
        <div class="card-info" @click="openCard">
            <div class="card-title">{{ user.username }}</div>
            <div class="card-mail">{{ user.email }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
    },
    mounted() {
        const activeEl = document.querySelectorAll('.card-info')
        activeEl.forEach(el => {
            el.addEventListener('click', () => {
                document.querySelector('.active')?.classList.remove('active')
                el.classList.add('active')
            })
        })
    },

    methods: {
        openCard() {
            this.$emit('openCard', this.user)
        }
    },
}
</script>
<style lang="scss" scoped>
.sidebar-card {
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 18px;
    border: 1px solid rgba(224, 224, 224, 1);
    overflow: hidden;
    min-width: 286px;

    &:hover {
        cursor: pointer;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        padding-left: 15px;
        width: 100%;
        height: 70px;

        .card-title {
            font-size: 14px;
            font-weight: 600;
            line-height: 17px;

        }

        .card-mail {
            font-size: 14px;
            line-height: 17px;
            color: rgba(118, 120, 125, 1);
            ;
        }
    }

    .active {
        background: rgba(224, 224, 224, 1);
    }
}
</style>