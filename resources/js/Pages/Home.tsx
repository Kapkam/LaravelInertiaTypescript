import React from "react";
import Layout from "../components/layouts";

const Home = () => {
    let foo: string = "React";
    const bar: string = "TypeScript";

    return (
        <Layout title='Welcome to my home page' children= 'From the home page'/>
    );
};

export default Home;