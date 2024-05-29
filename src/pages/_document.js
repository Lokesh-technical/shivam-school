import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />

      <link rel="shortcut icon" href="favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
        rel="stylesheet" />

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

      <link href="../assets/lib/animate/animate.min.css" rel="stylesheet" />
      <link href="../assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

      <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
      <link href="../assets/css/style.css" rel="stylesheet" />

      <body>
        <Main />
        <NextScript />
        <Script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>
        <Script src="../assets/lib/wow/wow.min.js" type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>
        <Script src="../assets/lib/easing/easing.min.js" type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>
        <Script src="../assets/lib/waypoints/waypoints.min.js" type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>
        <Script src="../assets/lib/owlcarousel/owl.carousel.min.js" type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>

        <Script src="assets/js/main.js" type="bbe96954e4e5851cbd6ede54-text/javascript"></Script>
        <Script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
      </body>
    </Html>
  );
}
