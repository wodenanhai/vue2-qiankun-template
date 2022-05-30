<template>
    <div class="qiankun-home-layout">
        <div class="title">
            <el-button size="mini" type="primary" @click="micro1">子应用一</el-button>
            <el-button size="mini" type="primary" plain @click="micro2">子应用二</el-button>
        </div>
        <div class="container">
            <transition name="fade-transform" mode="out-in">
                <div id="container"></div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "qiankun-home-layout",
    data() {
        return {}
    },
    methods: {
        micro1() {
            this.$router.push("/spa/qiankun-micro-package1")
        },
        micro2() {
            this.$router.push("/spa/qiankun-micro-package2")
        }
    }
}
</script>

<style scoped lang="scss">
.qiankun-home-layout {
    width: 100%;
    height: 100%;
    
    .title {
        width: 100%;
        height: 60px;
        background: rgb(84, 92, 100);
        display: flex;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
    }
    
    .container {
        width: 100%;
        height: calc(100% - 60px);
    }
}
</style>