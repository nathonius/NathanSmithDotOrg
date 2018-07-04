<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class NavBar extends Vue {
    }
</script>
<style lang="scss">

</style>
