<template>
<div id="roller">
    <input v-model="currentRoll" @keyup="getRoll" name="rollInput" id="rollInput" placeholder="eg. 1d6" :class="{valid: isValidRoll}">
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
    private prevRoll: string = '';
    @Prop() private isValidRoll = false;
    @Prop() private rolls: IRoll[] = [];
    @Prop() private currentRoll: string = '';
    private currentDie = 6;
    private currentCount = 0;

    private getRoll(event: KeyboardEvent): void {
        // Ignore selection and arrow keys
        const selection = window.getSelection().toString();
        const arrows = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];
        if (selection !== '' || arrows.includes(event.key)) {
            return;
        }

        // make it lowercase, just in case
        this.currentRoll = this.currentRoll.toLowerCase();

        // Figure out how close we are to a real roll
        let match: RegExpMatchArray | null;
        const allRegex = [/\d+d\d+/, /\d+d/, /\d+/, /^$/]; // complete roll, count with separator, count, empty
        this.isValidRoll = false; // we only roll if its a complete roll
        for (let i = 0; i < allRegex.length; i++) {
            match = this.currentRoll.match(allRegex[i]);
            if (match !== null && match.length > 0) {
                // If we matched, it means we at least had part of a roll.
                // However, could have extra that doesn't belong, so we reduce down to just the first match
                this.currentRoll = match[0];
                this.prevRoll = this.currentRoll;
                if (i === 0) { // if a complete match, get the count and die, set as a valid roll
                    const parts = this.currentRoll.split('d');
                    this.currentCount = parseInt(parts[0], 10);
                    this.currentDie = parseInt(parts[1], 10);
                    this.isValidRoll = true;
                }
                return; // start with the most specific match, down to the least. get out of the loop if it matches
            }
        }
        // there was no match at all, so just set it back to what it was before
        this.currentRoll = this.prevRoll;
    }

    private doRoll(): void {
        if (!this.isValidRoll) {
            return;
        }
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
    #rollInput {
        width: 80px;
        border-color: red;
        &.valid {
            border-color: green;
        }
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
