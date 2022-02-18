import { AllPostsStyled } from "./all-posts.styled";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  return (
    <AllPostsStyled>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </AllPostsStyled>
  );
}

export default AllPosts;
