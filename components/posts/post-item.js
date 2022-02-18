import Link from "next/link";
import Image from "next/image";
import { PostItemStyled } from "./post-item.styled";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const timeZoneDate = date + "T00:00";

  const formattedDate = new Date(timeZoneDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <PostItemStyled>
      <Link href={linkPath}>
        <a>
          <div className="image">
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </PostItemStyled>
  );
}

export default PostItem;
