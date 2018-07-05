<template>
    <li class="project">
        <a class="project-title-wrapper" :href="instance.url">
            <div class="project-title">
                <h3>{{instance.title}}</h3>
                <img :src="require('../../assets/' + instance.icon)" :alt="instance.iconAlt" class="icon">
            </div>
        </a>
        <div class="description">
            <p>{{instance.description}}</p>
        </div>
        <div class="info">
            <a class="more" :href="instance.url">More Info</a>
            <span class="status">Status: {{ instance.status }}</span>
        </div>
    </li>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface IProject {
    id: number;
    title: string;
    icon?: string;
    iconAlt?: string;
    description: string;
    status: string;
    url: URL;
}

@Component
export default class Project extends Vue {
    @Prop() public instance!: any;
}
</script>
<style lang="scss">
@import '../../Global.scss';

$iconSize: 50px;
.project {
    img {
        max-width: $iconSize;
        max-height: $iconSize;        
    }
    .project-title {
        display: flex;
        align-items: center;
        background-color: rgba($grey, $alpha: 0.12);
    }
}
</style>