export const getBlogs = async () => {
  const apibase = process.env.API_BASE_URL;

  const url = `${apibase}/blogs`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};
