import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import { RiH1 } from "react-icons/ri";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <>
      <LatestBlogs blogs={blogs}></LatestBlogs>
    </>
  );
};

export default HomePage;
