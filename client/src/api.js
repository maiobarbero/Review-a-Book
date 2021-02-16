//Base URL
const base_url = "http://localhost:3000/api/";

//All Books

export const allBooksURL = () => `${base_url}book`;
export const popularBooksURL = () => `${base_url}book/popular`;
export const bookReviewsURL = (id) => `${base_url}book/${id}`;
export const bookSearchURL = (title) => `${base_url}book/title/${title}`;

//Login
export const loginUrl = () => `${base_url}user/login`;
export const registerUrl = () => `${base_url}user/register`;
