<style lang="scss" src="./App.style.scss"></style>
<template>
    <div id="page-wrapper">
        <NavBar></NavBar>
        <div id="sections">
            <div class="section" id="section-about">About</div>
            <div class="section" id="section-projects">Projects</div>
            <div class="section" id="section-contact">Contact</div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import NavBar from './components/NavBar/NavBar.vue';

    @Component({
        components: {
            NavBar
        }
    })
    export default class App extends Vue {}
</script>
