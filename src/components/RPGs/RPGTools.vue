<template>
<div>
    <DiceRoller></DiceRoller>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DiceRoller from './DiceRoller.vue';

@Component({
    components: {
        DiceRoller
    }
})
export default class RPGTools extends Vue {
}
</script>

<style lang="scss">
</style>
