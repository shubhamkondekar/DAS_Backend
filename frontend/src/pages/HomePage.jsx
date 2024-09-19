import React, { useEffect } from "react";
import Layout from "../components/Layout";

const HomePage = () => {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default HomePage;
