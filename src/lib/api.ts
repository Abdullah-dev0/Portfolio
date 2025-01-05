const getAllPosts = async (page = 1, per_page = 3) => {
	const posts = await fetch(
		`https://3qz76t3v3l.execute-api.eu-north-1.amazonaws.com/prod/devto?page=${page}&per_page=${per_page}`,
	);
	const data = await posts.json();
	return data;
};

export { getAllPosts };
