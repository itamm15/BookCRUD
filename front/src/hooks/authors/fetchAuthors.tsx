const fetchAuthors = async () => {
  const response = await fetch('/authors', {
    method: 'GET',
  });

  if (!response.ok) throw new Error('Failed to fetch authors');

  return await response.json();
}

export default fetchAuthors;
