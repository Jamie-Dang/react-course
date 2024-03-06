import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

// <BlogList
//   blogs={blogs.filter((blog) => blog.author === "mario")}
//   title="Blogs of Mario"
// ></BlogList>
