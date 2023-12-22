import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import { useEffect, useState } from "react";
import BlogPostCard from "../modules/BlogPostCard";
import { Pagination } from "antd";
import { handleGetAllBlogs } from "../../action/blogAction";
import { handleGetCurrentUser } from "../../action/userAction";
import { useCookies } from "react-cookie";
import Loading from "../modules/Loading";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await handleGetAllBlogs();
        setBlogPosts(blogs);

        const user = await handleGetCurrentUser(cookies.accessToken);
        setCurrentUser(user);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <Loading />;
      </div>
    );
  }

  const handleDeletePost = (deletedPostId) => {
    setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== deletedPostId));
  };

  const handleEditPost = (editedPost) => {
    setBlogPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === editedPost.id ? editedPost : post))
    );
  };



  return (
    <div className="bg-green-200">
      <Navbar />
      <div className="bg-green-200 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Welcome to LoveCook's Flavorful World! 🌟
        </h1>
        <div className="container mx-auto px-4">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id}
              post={post}
              currentUser={currentUser}
              onDelete={handleDeletePost}
              onEdit={handleEditPost}
            />
          ))}
        </div>
        <div className="container mx-auto text-center mt-4">
          <Pagination defaultCurrent={1} total={500} />
        </div>
      </div>
      <Footer />
    </div>
  );

};

export default Blog;
