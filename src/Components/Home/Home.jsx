import React from "react";
import TaskTree from "../TaskTree/TaskTree";
import packageData from "../../Components/data/packageData";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>{packageData.title}</h1>
      <p>{packageData.description}</p>
      <p>
        Price: {packageData.price} {packageData.currency}
      </p>
      <h2>Tasks:</h2>
      <TaskTree tasks={packageData.servicePackageTasks} />
    </div>
  );
};

export default Home;
