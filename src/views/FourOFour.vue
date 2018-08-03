<template>
    <div id="wrapper404">
        <h2>Sorry, this page doesn't exist yet.</h2>
        <h1>404</h1>
        <h2>Maybe it should exist, or something is broken? Email me:</h2>
        <a href="mailto:nathan@nathan-smith.org"><h2>nathan@nathan-smith.org</h2></a>
        <br>
        <h2>Or <a href="#" v-on:click="GoBack">go back.</a></h2>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FourOFour extends Vue {
    public GoBack(): void {
        window.history.back();
    }
}
</script>
<style lang="scss">
@import '../Global.scss';

#wrapper404 {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    h1 {
        font-family: "Quicksand", sans-serif;
        font-size: 10em;
    }
    a {
        &, &:visited, &:link {
            color: $blue;
        }
        &:hover, &:active {
            color: $black;
        }
    }
}

</style>

