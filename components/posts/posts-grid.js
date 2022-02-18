import PostItem from "./post-item";
import { PostGridStyled } from "./posts-grid.styled";

function PostsGrid(props) {
  const { posts } = props;

  return (
    <PostGridStyled>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </PostGridStyled>
  );
}

export default PostsGrid;
