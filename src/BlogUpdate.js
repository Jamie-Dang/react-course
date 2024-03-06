import { useParams } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogUpdate = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/update/" + id);
  const history = useHistory();

  const handleSubmit = () => {
    fetch("http://localhost:8000/blogs/update/" + blog.id, {
      method: "PUT",
    }).then(() => {
      history.push("/blogs/" + blog.id);
    });
  };

  const handleClickReturn = () => {
    history.push("/blogs/" + blog.id);
  };

  return (
    <div className="update">
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>Update Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
              type="text"
              require
              value={blog.title}
              onChange={(e) => blog.setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
              required
              value={blog.body}
              onChange={(e) => blog.setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
              value={blog.author}
              onChange={(e) => blog.setAuthor(e.target.value)}
            >
              <option value="mario">mario</option>
              <option value="julia">julia</option>
            </select>
            {!isPending && <button>Update</button>}
            {isPending && <button disabled>Updating</button>}
          </form>
          <button onClick={handleClickReturn}>Return</button>
        </article>
      )}
    </div>
  );
};

export default BlogUpdate;
