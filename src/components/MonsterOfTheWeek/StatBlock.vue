<template>
    <div class="statblock">
        <ul>
            <li><span>Charm</span></li>
            <li><span>Cool</span></li>
            <li><span>Sharp</span></li>
            <li><span>Tough</span></li>
            <li><span>Weird</span></li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StatBlock extends Vue {
}
</script>
<style lang="scss">
.statblock {
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
</style>
