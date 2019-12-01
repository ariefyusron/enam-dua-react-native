export const get = async (url, headers) => {
  const response = await fetch(`https://api.yelp.com/v3/businesses/${url}`, {
    method: 'GET',
    headers: headers
  });
  return response.json();
};
