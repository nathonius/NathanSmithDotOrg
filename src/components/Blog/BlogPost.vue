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
import * as Prism from 'prismjs';
import 'prismjs/components/prism-batch';
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
    public updated() {
        Prism.highlightAll();
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
@import './prismjs-alloy.scss';

.blogPost {
    margin-top: $navHeight;
    padding: $smallGap;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400px;
    font-size: 21px;
    font-family: 'blog-serif', serif;
    text-rendering: optimizeLegibility;
    img {
        width: auto;
        height: auto;
        min-width: 0;
        min-height: 0;
        max-height: 100%;
        max-width: 100%;
    }
    h1, h2, h3, h4 {
        font-family: 'blog-sans', sans-serif;
    }
    code {
        font-family: 'blog-code', monospace;
        font-size: 18px;
    }
    p code, li code {
        margin-left: 3px;
        margin-right: 3px;
        background-color: rgba($grey, $alpha: 0.1)
    }
    .titleCard {
        padding-top: $smallGap * 2;
        margin-bottom: $smallGap * 5;
        * {
            margin: 0;
        }
        .title {
            display: inline;
            font-size: 42px;
            font-style: normal;
            font-weight: 600;
        }
        .byline {
            display: inline;
            margin-left: $smallGap;
            color: $grey;
        }
    }
    .body {
        p:first-child:first-letter {
            float: left;
            font-family: 'blog-sans', sans-serif;
            font-size: 72px;
            line-height: 64px;
            margin-bottom: -5px;
            margin-left: -5px;
        }
        figcaption {
            font-size: 12px;
            font-style: italic;
            color: $grey;
            margin-top: -2px;
            margin-bottom: -5px;
        }
        a {
            color: $blue;
        }
    }
}
</style>

