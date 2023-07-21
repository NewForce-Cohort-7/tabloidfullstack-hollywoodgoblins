// swagger url
const baseUrl = '/api/Post';

// Fetch all posts
export const getAllPosts = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getPostsByUserId = (id) => {
    return fetch(`${baseUrl}/GetUsersPosts/${id}`).then((res) => res.json())
}

export const getPostById = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json())
}