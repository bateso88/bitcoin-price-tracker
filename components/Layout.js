import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
  <div>
    <Head>
      <title>Bitzprice</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/5/cerulean/bootstrap.min.css"
      ></link>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
