<template>
    <nav>
        <span id="showMenuButton" v-on:click="toggleMenu"><i class="fas fa-3x fa-angle-down"></i></span>
        <ul ref="menu">
            <li><a href="#section-home">HOME</a></li>
            <li><a href="#section-about">ABOUT</a></li>
            <li><a href="#section-projects">PROJECTS</a></li>
            <li><a href="#section-contact">CONTACT</a></li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
    private menu: Element = this.$refs.menu as Element;
    public toggleMenu(event: MouseEvent): void {
        this.menu.classList.toggle('show');
    }
}
</script>
<style lang="scss">
@import '../../Global.scss';

nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    height: $navHeight;
    background-color: $darkgrey;
}

nav {
    #showMenuButton {
        display: none;
        @media screen and (max-width: $breakSmall) {
            display: inline;
        }
        svg {
            height: $navHeight;
            width: 100vw;
            color: $white;
            cursor: pointer;
            &:hover, &:active {
                color: $blue;
            }
        }
    }

    ul, li, a {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        height: $navHeight;
    }

    ul {
        list-style: none;
        display: flex;
        flex-grow: 1;
        @media screen and (max-width: $breakSmall) {
            transition: transform $longHover;
            transform: translateY($navHeight * -5);
            flex-direction: column;
            &.show {
                transform: translateY(-$navHeight);
            }
        }
    }

    li {
        flex-grow: 1;
    }

    a {
        font-size: 1.5em;
        font-family: "Quicksand", "Roboto", "Open Sans", sans-serif;
        font-weight: 700;
        transition: all $linkHover;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: $white;
        background-color: $darkgrey;
        &:hover, &:active {
            background-color: $midgrey;
            color: $blue;
        }
    }
}
</style>
