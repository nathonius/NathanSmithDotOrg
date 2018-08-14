<template>
    <nav>
        <ul ref="menu" v-if="$route.name == 'home'">
            <li><a href="#section-home" v-on:click="closeMenu">HOME</a></li>
            <li><a href="#section-about" v-on:click="closeMenu">ABOUT</a></li>
            <li><a href="#section-projects" v-on:click="closeMenu">PROJECTS</a></li>
            <li><a href="#section-contact" v-on:click="closeMenu">CONTACT</a></li>
            <li><router-link to="/blog" v-on:click="closeMenu">BLOG</router-link></li>
            <li id="showMenuButton" v-on:click="toggleMenu"><i class="fas fa-3x fa-angle-down"></i></li>
        </ul>
        <ul ref="menu" v-else>
            <li><router-link to="/#section-home" v-on:click="closeMenu">HOME</router-link></li>
            <li><router-link to="/#section-about" v-on:click="closeMenu">ABOUT</router-link></li>
            <li><router-link to="/#section-projects" v-on:click="closeMenu">PROJECTS</router-link></li>
            <li><router-link to="/#section-contact" v-on:click="closeMenu">CONTACT</router-link></li>
            <li>
                <a v-if="$route.name == 'blog'" href="#top" v-on:click="closeMenu" class="active">BLOG</a>
                <router-link v-else to="/blog" v-on:click="closeMenu">BLOG</router-link>
            </li>
            <li id="showMenuButton" v-on:click="toggleMenu"><i class="fas fa-3x fa-angle-down"></i></li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
    private menu: Element | null = null;
    public mounted() {
        this.menu = this.$refs.menu as Element;
    }
    public toggleMenu(event: MouseEvent): void {
        if (this.menu) {
            this.menu.classList.toggle('show');
        }
    }
    public closeMenu(event: MouseEvent): void {
        if (this.menu) {
            this.menu.classList.remove('show');
        }
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
        background-color: $darkgrey;
        @media screen and (max-width: $breakSmall) {
            display: block;
            width: 100vw;
        }
        svg {
            margin-left: auto;
            margin-right: auto;
            display: block;
            height: $navHeight;
            color: $white;
            cursor: pointer;
            transition: transform $linkHover;
        }
        &:hover, &:active {
            svg {
                color: $blue;
            }
        }
    }

    ul, li, a, router-link {
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
                transform: translateY(0);
                svg {
                    transform: rotate(180deg);
                }
            }
        }
    }

    li {
        flex-grow: 1;
    }

    a, router-link {
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
    a.active {
        background-color: $midgrey;
        color: $blue;
    }
}
</style>
