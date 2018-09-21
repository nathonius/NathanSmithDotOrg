<template>
<div id="roller">
    <input v-model="currentRoll" @keyup="getRoll" name="count" id="count" placeholder="1d6">
    <button @click="doRoll">Roll</button>
    <transition-group name="roll" tag="ul" id="rollList">
        <Roll v-for="roll in rolls" :key="roll.index" :roll="roll"></Roll>
    </transition-group>
</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Roll from './Roll.vue';
import { IRoll } from './models/IRoll';

@Component({
    components: {
        Roll
    }
})
export default class DiceRoller extends Vue {
    private currentIndex: number = 0;
    private readonly maxCache: number = 15;
    @Prop() private rolls: IRoll[] = [];
    @Prop() private currentRoll: string = '';
    @Prop() private currentDie = 6;
    @Prop() private currentCount = 1;

    private getRoll(event: KeyboardEvent): void {
        const selection = window.getSelection().toString();
        const arrows = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
        if (selection !== '' || arrows.includes(event.key)) {
            return;
        }
        const completeRegex = /^(?<count>\d+)(?<sep>d)(?<die>\d+)$/;
        const startRegex = /^(?<count>\d+)$/;
        const sepRegex = /^(?<count>\d+)(?<sep>d)$/;
    }

    private doRoll(): void {
        this.rollDice(this.currentDie, this.currentCount);
        if (this.rolls.length > this.maxCache) {
            this.rolls.splice(this.rolls.length - 1, 1);
        }
    }

    private rollDice(die: number, count: number): void {
        const values: number[] = [];
        for (let i = 0; i < count; i++) {
            values.push(this.roll(die));
        }
        const roll = {
            index: this.currentIndex,
            die,
            count,
            result: values
        };
        this.rolls.splice(0, 0, roll);
        this.currentIndex++;
    }

    private roll(die: number): number {
        return Math.floor(Math.random() * die) + 1;
    }
}
</script>
<style lang="scss">
@import '../../Global.scss';
#roller {
    display: inline-block;
    input {
        width: 80px;
    }
}
#rollList {
    list-style: none;
    margin: 0;
    padding: $smallGap;
    display: block;
}
.roll-enter, .roll-leave-to {
    color: red;
    opacity: 0;
}
.roll-leave-active {
    position: absolute;
}
</style>
