import PostGrid from "../posts/posts-grid";
import { FeaturedStyled } from "./featured-posts.syled";

function FeaturedPosts(props) {
  return (
    <FeaturedStyled>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </FeaturedStyled>
  );
}

export default FeaturedPosts;
