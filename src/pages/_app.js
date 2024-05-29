import "@/styles/globals.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}
