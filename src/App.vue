<style lang="scss" src="./App.style.scss"></style>
<template>
<div id="page-wrapper">
    <NavBar></NavBar>
    <div id="sections">
        <div class="section" id="section-home">
            <div>
                <h1>Nathan Smith</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
        <div class="section" id="section-about">
            <div>
                <h2>about me</h2>
                <p>I am an Associate Software Developer at Bentley Systems, having graduated from Mississippi State University with my Bachelors degree in Software Engineering in 2016, and my Masters degree in Computer Science in 2017.</p>
                <p>I have a passion for open source software, music, and video games.</p>
            </div>
        </div>
        <div class="section" id="section-projects">
            <div>
                <h2>projects</h2>
                <ul id="project-list">
                    <Project :instance="project"></Project>
                </ul>
            </div>
        </div>
        <div class="section" id="section-contact">
            <div>
                <h2>contact me</h2>
                <p>I can be reached at <a href="mailto:nathan@nathan-smith.org">nathan@nathan-smith.org</a>, or on any of these platforms.</p>
                <span>
                    <a class="contact-link" href="https://github.com/OfficerHalf">
                        <i class="fab fa-2x fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <a class="contact-link" href="https://www.linkedin.com/in/nathan-r-smith/">
                        <i class="fab fa-2x fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a class="contact-link" href="https://www.last.fm/user/OfficerHalf">
                        <i class="fab fa-2x fa-lastfm"></i>
                        <span>last.fm</span>
                    </a>
                    <a class="contact-link" href="http://steamcommunity.com/id/officerhalf/">
                        <i class="fab fa-2x fa-steam"></i>
                        <span>Steam</span>
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/NavBar/NavBar.vue';
import Project from './components/Project/Project.vue';


@Component({
  components: {
    NavBar,
    Project
  }
})
export default class App extends Vue {
    private project: IProject = {
        id: 0,
        title: 'pyd20',
        icon: 'ic_launcher.svg',
        iconAlt: 'pyd20 icon',
        description: 'A command-line dice roller with many options and arguments, for playing tabletop RPGs.',
        status: 'Complete',
        url: new URL('https://github.com/OfficerHalf/pyd20')
    };
}

interface IProject {
    id: number;
    title: string;
    icon?: string;
    iconAlt?: string;
    description: string;
    status: string;
    url: URL;
}
</script>
