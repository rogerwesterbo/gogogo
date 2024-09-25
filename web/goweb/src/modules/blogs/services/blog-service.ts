export const getBlogs = async () => {
  const apibase = process.env.API_BASE_URL;
  console.log(apibase);
  // const response = await fetch(`${apibase}/blogs`);
  // return response.json();

  const url = `${apibase}/blogs`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};
