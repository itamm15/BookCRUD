import { Dispatch, useEffect, useState } from "react";
import { Author } from "../../models/author";
import fetchAuthors from "../../hooks/authors/fetchAuthors";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    retrieveAuthors(setAuthors);
  }, [])

  return (
    <>
      {authors && authors.map(author => (
        <div>{ author.firstname }</div>
      ))}
    </>
  )
};

const retrieveAuthors = async (setAuthors: Dispatch<Author[]>) => {
  try {
    const authors: Author[] = await fetchAuthors();
    setAuthors(authors);
  } catch (error) {
    console.error("Error fetching authors: ", error);
  }
}

export default AuthorsPage;
