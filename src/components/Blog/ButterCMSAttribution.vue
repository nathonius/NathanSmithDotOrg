<template>
    <div class="butterAttr">
        <a href="https://buttercms.com/">
            <span>Powered by</span>
            <img :src="require('../../assets/butter-b.png')" alt="Powered by ButterCMS">
        </a>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ButterAttr extends Vue {
}
</script>
<style lang="scss">
@import '../../Global.scss';

.butterAttr {
    width: 100px;
    position: fixed;
    bottom: $smallGap / 2;
    right: $smallGap / 2;
    font-size: .7em;
    opacity: 0.3;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: $breakMedium) {
        position: static;
        bottom: 0;
        left: 0;
        margin-left: auto;
    }
    img {
        width: 100px;
    }
    a {
        color: $black;
    }
}
</style>

