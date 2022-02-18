import Image from "next/image";
import { PostHeaderStyled } from "./post-header.styled";

function PostHeader(props) {
  const { title, image } = props;

  return (
    <PostHeaderStyled>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </PostHeaderStyled>
  );
}

export default PostHeader;
