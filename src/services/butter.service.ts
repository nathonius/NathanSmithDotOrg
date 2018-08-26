import * as Butter from 'buttercms';
import { IPost, IPostList } from '../models/IPost';
import { IProject } from '../models/IProject';

export default class ButterService {
    private butterAPIKey = require('../components/Blog/data/buttercms.json').key;
    private butter = Butter(this.butterAPIKey);

    public getPosts(): Promise<IPostList> {
        return this.butter.post.list({
            page: 1,
            page_size: 10
        }).then(response => {
            return response.data;
        }).catch(response => {
            console.error(response);
        });
    }

    public getPost(slug: string): Promise<IPost> {
        return this.butter.post.retrieve(slug).then(response => {
            return response.data.data;
        }).catch(response => {
            console.error(response);
        });
    }

    public getProjects(): Promise<IProject[]> {
        return this.butter.content.retrieve(['project']).then(response => {
            return response.data.data.project;
        }).catch(response => {
            console.error(response);
        });
    }
}