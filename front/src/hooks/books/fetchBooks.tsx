const fetchBooks = async () => {
  const response = await fetch('/books', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  return await response.json();
}

export default fetchBooks;
