import { GlobalStyle } from "../../styles/globals";

import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <>
      <GlobalStyle />
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
