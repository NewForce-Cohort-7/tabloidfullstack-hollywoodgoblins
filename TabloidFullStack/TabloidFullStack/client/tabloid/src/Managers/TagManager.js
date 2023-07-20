const url = 'https://localhost:5001';

export const GetAllTags = () => {
    return fetch(`${url}/api/tag`)
    .then((res) => res.json())
};