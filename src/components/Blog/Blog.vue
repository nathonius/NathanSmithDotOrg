<template>
    <div>
        <NavBar></NavBar>
        <div class="blog" id="top">
            <div class="postCard" v-for="(post, index) in posts.data" :key="post.slug + '_' + index">
                <router-link :to="'/blog/' + post.slug">
                    <img class="featuredImage" v-if="post.featured_image" :src="post.featured_image" alt="">
                </router-link>
                <div class="inset">
                    <router-link :to="'/blog/' + post.slug" class="title"><h2>{{ post.title }}</h2></router-link>
                    <p>{{ post.summary }}</p>
                    <router-link class="button" :to="'/blog/' + post.slug">Read this post.</router-link>                    
                </div>
            </div>
        </div>
        <ButterAttr></ButterAttr>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import NavBar from '../Common/NavBar.vue';
import ButterAttr from './ButterCMSAttribution.vue';
const SmoothScroll = require('smooth-scroll');
import { IPostList } from '../../models/IPost';
import ButterService from '../../services/butter.service';

const scrollBlog = new SmoothScroll('a[href*="#"]', {
    header: 'nav'
});

@Component({
    components: {
        NavBar,
        ButterAttr
    }
})
export default class Blog extends Vue {
    public posts: IPostList = {
        data: [
            {
                slug: '',
                featured_image: '',
                title: '',
                summary: ''
            }
        ]
    };
    @Inject('butter') private butterService!: ButterService;
    public created() {
        this.butterService.getPosts().then(posts => {
            this.posts = posts;
        });
    }
}
</script>

<style lang="scss">
@import '../../Global.scss';
@import 'BlogCommon.scss';

$featuredImageW: 760px;
$featuredImageH: 428px;

.blog {
    background-color: $white;
    color: $black;
    padding: $smallGap;
    margin-top: $navHeight;
    padding-top: $smallGap * 3;
    margin-left: auto;
    margin-right: auto;
    max-width: $blogWidth;
    font-family: 'blog-serif', serif;
    h1, h2, h3 {
        font-family: 'blog-sans', sans-serif;
        font-weight: 700;
    }
    p, h4, a {
        font-family: 'blog-serif', serif;
    }
    a {
        color: $black;
    }
    .postCard {
        margin-bottom: $bigGap;
        .featuredImage {
            width: $featuredImageW;
            max-width: 100%;
        }
        .inset {
            padding: $smallGap * 2;
            .title {
                &:hover {
                    text-decoration: underline;
                }
                h2 {
                    display: inline;
                }
            }
            .button {
                padding: 5px;
                background-color: $blue;
            }
        }
    }
}
</style>

