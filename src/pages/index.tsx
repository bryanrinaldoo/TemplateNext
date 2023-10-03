import type { NextPage } from "next";
import React from 'react'
import { HeadingComponent } from "../components/HeadingComponent";

const Home: NextPage = () => {

  return (
    <div className='flex flex-col justify-center container mx-auto p-3'>
      <HeadingComponent>HAII</HeadingComponent>
    </div>
  );
};

export default Home;
