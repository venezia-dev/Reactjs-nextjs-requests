import Head from "next/head";
import Container from "../components/container";
import Users from "../components/users";

import fetch from 'isomorphic-fetch';

const Index = (props) => {
    console.log(props)
  return (
    <div>
      <Container>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Next</h1>
        <Users users={props.users}/>
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users')
    const resJson = await res.json()
    return {users: resJson.data}
  }

export default Index;
