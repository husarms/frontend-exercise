import axios from "axios";

const blogApi = axios.create();

const blogPostsInitialPageUrl =
    "https://storage.googleapis.com/twochairs-interview-materials/interview-exercise/blog-data-1.json";

export async function getBlogPosts(url = blogPostsInitialPageUrl) {
    try {
        const response = await blogApi.get(url);
        const { data, links } = response.data;
        if (links.next !== null) {
            return data.concat(await getBlogPosts(links.next));
        } else {
            return data;
        }
    } catch (error) {
        return Promise.reject(error);
    }
}
