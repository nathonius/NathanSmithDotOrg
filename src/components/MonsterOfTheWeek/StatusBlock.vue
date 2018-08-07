<template>
    <div>
        <div class="section" id="luck">
            <h3>LUCK</h3>
            Mark luck to change a roll to 12 or avoid all harm from an injury.
        </div>
        <div class="section" id="harm">
            <h3>HARM</h3>
            When you reach 4 or more, mark unstable.
        </div>
        <div class="section" id="experience">
            <h3>EXPERIENCE</h3>
            Whenever you roll and get a total of 6 or less, or when a move tells you to, mark an experience box.
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class StatusBlock extends Vue {
}
</script>