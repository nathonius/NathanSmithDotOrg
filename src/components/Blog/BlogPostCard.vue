<template>
<div :class="{postCard: true, wide: post.isWide}">
    <router-link :to="'/blog/' + post.slug" class="featuredImageLink">
        <img class="featuredImage" v-if="post.featured_image" :src="post.featured_image">
    </router-link>
    <div class="cardContent">
        <router-link :to="'/blog/' + post.slug" class="cardTitle"><h2>{{ post.title }}</h2></router-link>
        <p class="byline">by {{ post.author.first_name + ' ' + post.author.last_name }}, {{ PublishDate }}</p>
        <p class="cardSummary">{{ post.summary }}</p>
    </div>
</div>
</template>

<script lang="ts">
import { IPost } from './models/IPost';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BlogPostCard extends Vue {
    @Prop() public post!: IPost;
    get PublishDate(): string {
        if (this.post.published) {
            const theDate: Date = new Date(this.post.published);
            return theDate.toLocaleDateString('en-US');
        }
        return '';
    }
}
</script>

<style lang="scss">
@import '../../Global.scss';
@import './BlogCommon.scss';

$cardWidth: 335px;
$cardHeight: 380px;
$featuredImageMinHeight: 180px;
$featuredImageMaxHeight: 240px;
$cardPadding: 30px;
$halfGap: $cardGap / 2;

.postCard {
    color: $black;
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

    background-color: rgba($color: $black, $alpha: 0.1);
    width: $cardWidth;
    height: $cardHeight;
    margin: $cardPadding / 2;

    box-shadow: 3px 3px 8px .8px rgba($grey, $alpha: 0.5);
    transition: box-shadow $linkHover;
    &:hover {
        box-shadow: 3px 3px 8px .8px rgba($grey, $alpha: 0.75);
    }

    .featuredImageLink {
        display: block;
        width: 100%;
        min-height: $featuredImageMinHeight;
        .featuredImage {
            min-height: $featuredImageMinHeight;
            max-height: $featuredImageMaxHeight;
            width: 100%;
        }
    }
    .cardContent {
        padding: $cardPadding;
        width: $cardWidth;
        .cardTitle, .cardTitle * {
            padding: 0;
            margin: 0;
        }
        .byline {
            margin-top: 2px;
        }
        .cardSummary {
            padding: 0;
            margin: 0;
            margin-top: 5px;
        }
    }
}

.postCard.wide {
    width: $cardWidth * 2 + $cardGap;
    .featuredImageLink {
        float: right;
        width: $cardWidth + $halfGap;
        height: $cardHeight;
        .featuredImage {
            height: $cardHeight;
            max-height: $cardHeight;
            object-fit: cover;
            object-position: center;
        }
    }
    .cardContent {
        width: $cardWidth + $halfGap;
        padding-right: $cardPadding + $halfGap;
    }
}
</style>
