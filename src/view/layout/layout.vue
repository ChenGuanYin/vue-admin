<template>
    <div class="layout" :class="{'hiddenSiber':collapse}">
        <siber :collapse="collapse"></siber>
        <main class="content">
            <v-head :collapse="collapse"></v-head>
        </main>
    </div>
</template>
<script>
import Siber from "@/view/layout/Siber";
import vHead from "@/view/layout/Head"
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            spanLeft: 5,
            spanRight: 19
        }
    },
    components: {
        Siber, vHead
    },
    computed: {
        ...mapGetters([
            "collapse"
        ])
    },
    methods: {

    }
}
</script>
<style scoped>

</style>