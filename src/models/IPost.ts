export interface IPostList {
    data: IPost[];
}

export interface IPost {
    url?: string;
    created?: string;
    published?: string;
    author?: {
        first_name?: string;
        last_name?: string;
        email?: string;
        slug?: string;
        bio?: string;
        title?: string;
        linkedin_url?: string;
        facebook_url?: string;
        instagram_url?: string;
        pinterest_url?: string;
        twitter_handle?: string;
        profile_image?: string;
    };
    categories?: string[];
    tags?: string[];
    featured_image?: string;
    slug?: string;
    title?: string;
    body?: string;
    summary?: string;
    seo_title?: string;
    meta_description?: string;
    status?: string;
}