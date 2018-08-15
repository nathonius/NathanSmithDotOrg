<template>
<div>
    <NavBar></NavBar>
    <div class="blogPost">
        <div class="titleCard">
            <h1 class="title">{{ post.data.title }}</h1>
            <h4 class="byline">by {{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
        </div>
        <div v-html="post.data.body" class="body"></div>
    </div>
    <ButterAttr></ButterAttr>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import NavBar from '../Common/NavBar.vue';
import ButterAttr from './ButterCMSAttribution.vue';
import * as Butter from 'buttercms';
const butterAPIKey = require('./data/buttercms.json').key;

@Component({
    components: {
        NavBar,
        ButterAttr
    }
})
export default class BlogPost extends Vue {
    public post = {
        data: {
            title: '',
            author: {
                first_name: '',
                last_name: ''
            },
            body: '',
        },
        meta: {
            previous_post: {
                title: '',
                slug: ''
            },
            next_post: {
                title: '',
                slug: ''
            }
        }
    };
    private butter: Butter;
    constructor() {
        super();
        this.butter = Butter(butterAPIKey);
    }
    public getPost() {
        this.butter.post.retrieve(this.$route.params.slug)
        .then(response => {
            this.post = response.data;
        }).catch(response => {
            console.error(response);
        });
    }
    public created() {
        this.getPost();
    }
    @Watch('$route')
    public onRouteChange(to: string, from: string) {
        this.getPost();
    }
}
</script>

<style lang="scss">
@import '../../Global.scss';
@import 'BlogCommon.scss';

.blogPost {
    margin-top: $navHeight;
    margin-left: 20vw;
    margin-right: 20vw;
    font-family: 'Roboto', sans-serif;
    @media screen and (max-width: $breakMedium) {
            margin-left: 10vw;
            margin-right: 10vw;
        }
    @media screen and (max-width: $breakSmall) {
            margin-left: 10px;
            margin-right: 10px;
        }
    h1, h2, h3 {
        font-family: 'Merriweather', serif;
        font-weight: 700;
    }
    p, h4, a {
        font-family: 'Roboto', sans-serif;
    }
    img {
        width: auto;
        height: auto;
        min-width: 0;
        min-height: 0;
        max-height: 100%;
        max-width: 100%;
    }
    .titleCard {
        padding-top: $smallGap * 2;
        margin-bottom: $smallGap * 5;
        * {
            margin: 0;
        }
        .title {
            display: inline;
            font-size: 3.4em;
        }
        .byline {
            display: inline;
            margin-left: $smallGap;
        }
    }
    .body {
        a {
            color: $blue;
        }
    }
}
</style>

