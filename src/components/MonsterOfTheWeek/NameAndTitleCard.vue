<template>
    <div id="titleCard">
        <input type="text" name="name" id="name">,
        <h2>The Chosen</h2>
        <p>Your birth was prophesied. You are the Chosen One, and with your abilities you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.</p>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NameAndTitleCard extends Vue {
}
</script>
<style lang="scss">
@import '../../Global.scss';

#titleCard {
    h2 {
        font-family: "3rd Man", sans-serif;
        font-size: 4em;
        margin: 0;
    }
    p {
        margin-left: $bigGap / 2;
        margin-right: $bigGap / 2;
        font-style: italic;
    }
}

</style>
