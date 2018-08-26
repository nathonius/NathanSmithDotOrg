<template>
    <li class="project">
        <a class="project-title-wrapper" :href="instance.url">
            <div class="project-title">
                <h3>{{instance.name}}</h3>
                <img :src="instance.icon" class="icon">
            </div>
        </a>
        <div class="description" v-html="instance.description">
        </div>
        <div class="info">
            <a class="more" :href="instance.more">More Info</a>
            <span class="status">Status: {{ instance.status }}</span>
        </div>
    </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IProject } from '../../models/IProject';

@Component
export default class Project extends Vue {
    @Prop() public instance!: any;
}
</script>
<style lang="scss">
@import '../../Global.scss';

$iconSize: 100px;
$projectWidth: 360px;
$projectMinWidth: 250px;

.project {
    padding: 0;
    margin: $smallGap;
    max-width: $projectWidth;
    min-width: $projectMinWidth;
    display: flex;
    flex-direction: column;

    box-shadow: 3px 3px 8px .8px rgba($grey, $alpha: 0.5);
    transition: box-shadow $linkHover;
    &:hover {
        box-shadow: 3px 3px 8px .8px rgba($grey, $alpha: 0.75);
    }

    & > * {
        padding-left: $smallGap;
        padding-right: $smallGap;
    }
    img {
        margin-left: $smallGap;
        max-width: $iconSize;
        max-height: $iconSize;
        min-width: $iconSize;    
    }
    .project-title-wrapper {
        display: block;
        background-color: rgba($grey, $alpha: 0.12);
        color: $black;
        &:active, &:link, &:visited {
            color: $black;
        }
    }
    .project-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5em;
        text-align: left;
        padding-top: $smallGap / 2;
        padding-bottom: $smallGap / 2;
    }
    .description {
        text-align: left;
        flex-grow: 1;
        a {
            color: $blue;
            &:visited, &:link, &:active {
                color: $blue;
            }
        }
    }
    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: $smallGap;
        a {
            color: $blue;
            &:visited, &:link, &:active {
                color: $blue;
            }
        }
    }
}
</style>