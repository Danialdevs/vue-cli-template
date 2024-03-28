<template>
    <div class="wrapper">
        <Header :links="links" :title="title"/>
        <div class="wrapper-content">
            <div class="container">
                <router-view/>
            </div>
        </div>
        <Footer :links="links"/>
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import {app, links} from "@/_config.js"
export default {
    data() {
        return {
            funct: 5 + 9,
            links: links,
            title: app.title,

        };
    },
    components: {
        Header,
        Footer
    }
}
</script>
