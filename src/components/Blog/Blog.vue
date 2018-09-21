<template>
    <div>
        <NavBar></NavBar>
        <div class="blog" id="top">
            <BlogPostCard v-for="(post, index) in posts.data" :key="index + 'bug'" :post="post"></BlogPostCard>
        </div>
        <ButterAttr></ButterAttr>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import NavBar from '../Common/NavBar.vue';
import BlogPostCard from './BlogPostCard.vue';
import ButterAttr from './ButterCMSAttribution.vue';
const SmoothScroll = require('smooth-scroll');
import { IPostList } from './models/IPost';
import ButterService from '../../services/butter.service';

const scrollBlog = new SmoothScroll('a[href*="#"]', {
    header: 'nav'
});

@Component({
    components: {
        NavBar,
        ButterAttr,
        BlogPostCard
    }
})
export default class Blog extends Vue {
    public posts: IPostList = {
        data: [
            {
                slug: '',
                featured_image: '',
                title: '',
                summary: '',
                isWide: false
            }
        ]
    };
    @Inject('butter') private butterService!: ButterService;
    public created() {
        this.butterService.getPosts().then(posts => {
            this.posts = this.fillGrid(posts);
        });
    }
    private fillGrid(postList: IPostList): IPostList {
        const posts = postList.data;
        if (posts.length === 1) {
            posts[0].isWide = true;
            return {
                data: posts
            };
        }
        if (posts.length % 3 === 2) {
            const index = Math.floor(Math.random() * posts.length);
            posts[index].isWide = true;
            return {
                data: posts
            };
        }
        if (posts.length % 3 === 1 && posts.length >= 3) {
            // select the first post from two separate rows of 3, and make it wide
            const indexes: number[] = Array.apply(null, {length: posts.length}).map(Function.call, Number);
            let indexIndex = Math.floor(Math.floor(Math.random() * indexes.length) / 3) * 3;
            const index1 = indexes[indexIndex];
            indexes.splice(indexIndex, 3);
            indexIndex = Math.floor(Math.floor(Math.random() * indexes.length) / 3) * 3;
            const index2 = indexes[indexIndex];
            posts[index1].isWide = true;
            posts[index2].isWide = true;
            return {
                data: posts
            };
        }
        // else
        return postList;
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
    margin-top: $navHeight;
    padding-top: $smallGap * 3;
    margin-left: auto;
    margin-right: auto;
    max-width: $blogWidth + 100px;
    display: flex;
    flex-wrap: wrap;
}
</style>

