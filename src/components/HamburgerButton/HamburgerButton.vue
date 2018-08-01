<template>
    <div id="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<style lang="scss">
@import '../../Global.scss';

#hamburger {
    width: 24px;
    height: 24px;
    span {
        display: block;
        width: 100%;
        height: 12px;
        border-radius: 4px;
        border-style: solid;
        border-width: 4px;
        border-color: red;
    }
}
</style>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class HamburgerButton extends Vue {
    }
</script>