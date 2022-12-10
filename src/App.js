import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Table3 from "./components/saction/Table3";
import Footer from "./components/footer/footer";

const App = () => {
  const objUsers = [
    {
      name: "Elaman",
      lastName: "Tashtanbekov",
      age: 21,
      id: 1,
    },
    {
      name: "Said",
      lastName: "Lansarov",
      age: 22,
      id: 2,
    },
    {
      name: "Urma",
      lastName: "Tipbekov",
      age: 19,
      id: 3,
    },
  ];
  return (
    <div>
      <Navbar />
      {objUsers.map((item) => {
        return (
          <Table3
            name={item.name}
            lastName={item.lastName}
            age={item.age}
            id={item.id}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
