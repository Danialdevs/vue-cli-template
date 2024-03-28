<script>
export default {
    name: "Header",
    data() {
        return {

        };
    },
    props: ['links', 'title']
}
</script>

<template>
    <header>
        <div class="navbar">
            <div class="container">
                <div class="navbar-content">
                    <a class="navbar-logo" href="/">{{ title }}</a>
                    <ul class="navbar-list">
                        <li class="navbar-item" v-for="link in links" :key="link.alias">
                            <RouterLink class="navbar-link" :to="link.url">{{ link.title }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
