<template>
    <div id="motwWrapper">
        <div id="column1" class="column">
            <NameAndTitleCard></NameAndTitleCard>
            <StatBlock></StatBlock>
            <StatusBlock></StatusBlock>
        </div>
        <div id="column2" class="column">column2</div>
        <div id="column3" class="column">column3</div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NameAndTitleCard from '../components/MonsterOfTheWeek/NameAndTitleCard.vue';
import StatBlock from '../components/MonsterOfTheWeek/StatBlock.vue';
import StatusBlock from '../components/MonsterOfTheWeek/StatusBlock.vue';

@Component({
    components: {
        NameAndTitleCard,
        StatBlock,
        StatusBlock
    }
})
export default class MonsterOfTheWeek extends Vue {
}
</script>
<style lang="scss">
@import '../Global.scss';
@import 'MotWFonts.scss';

#motwWrapper {
    font-family: 'Cormorant Garamond', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    "column1 column2 column3";
    grid-gap: $smallGap;
    margin-top: $smallGap * 2;
    margin-bottom: $smallGap * 2;

    #column1 {
        margin-left: $smallGap * 2;
        grid-area: column1;
    }
    #column2 {
        grid-area: column2;
    }
    #column3 {
        margin-right: $smallGap * 2;
        grid-area: column3;
    }
}
</style>

