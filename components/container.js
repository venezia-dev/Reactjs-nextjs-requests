import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js Project</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css"
      />
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;
