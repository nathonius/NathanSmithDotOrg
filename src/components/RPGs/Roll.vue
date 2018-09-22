<template>
    <li class="roll">
        <span class="die">{{ roll.count }}d{{ roll.die }}</span>
        <span class="result">{{ roll.result.join(', ') }}</span>
        <span class="total"><span class="totalLabel">Total:&nbsp;</span><span class="totalResult">{{ roll.result.reduce((total, n) => total + n) }}</span></span>
    </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IRoll } from './models/IRoll';

@Component
export default class Roll extends Vue {
    @Prop() public roll!: IRoll;
}
</script>

<style lang="scss">
@import '../../Global.scss';
$green: #C6EFB2;
$rollHeight: 30px;
$rollWidth: 200px;
.roll {
    transition: all .2s, color 2s;
    background-color: $green;
    border-radius: 13px;
    min-height: $rollHeight;
    color: $darkgrey;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: space-between;
    min-width: $rollWidth;
    box-sizing: border-box;
    .die {
        text-align: left;
        margin-left: 15px;
        min-width: 45px;
    }
    .result {
        max-width: 250px;
        margin-left: 20px;
        margin-right: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .total {
        margin-right: 15px;
        .totalLabel {
            float: left;
        }
        .totalResult {
            float: right;
        }
    }
}
</style>