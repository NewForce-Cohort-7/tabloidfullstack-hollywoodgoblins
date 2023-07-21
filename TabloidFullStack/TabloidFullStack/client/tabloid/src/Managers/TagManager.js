const url = '/api/tag';

export const GetAllTags = () => {
    return fetch(`${url}`)
    .then((res) => res.json())
};

export const AddTag = (tag) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(tag)
    })
};