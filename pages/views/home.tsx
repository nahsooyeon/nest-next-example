import * as React from "react";
import { NextPage, NextPageContext } from "next";

interface Props {
  query: { name?: string };
}

const Home: NextPage<Props> = ({ query }) => {
  const greetName = query.name ? query.name : "World";

  return (
    <div>
      <div>Hello, {greetName}!</div>
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const query = {
    name: ctx.query.name || null,
  };
  return { props: { query } };
};

export default Home;
