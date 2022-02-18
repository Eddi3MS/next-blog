import Link from "next/link";
import Logo from "./logo";
import { HeaderStyled } from "./main-navigation.styled";

function MainNavigation() {
  return (
    <HeaderStyled className="flex">
      <div className="container  flex  header__container">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
}

export default MainNavigation;
