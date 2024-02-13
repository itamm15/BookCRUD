import { Dispatch, useEffect, useState } from "react";
import { Author } from "../../models/author";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    retrieveAuthors(setAuthors);
  }, [])

  return (
    <div>Authors page!</div>
  )
};

const retrieveAuthors = (setAuthors: Dispatch<Author[]>) => {

}

export default AuthorsPage;
