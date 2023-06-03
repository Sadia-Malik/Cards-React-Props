import React from "react";
import './Latest.css'
import CardLatest from "./CardLatest";
import CardNav from "./CardNav";

const data = [
  {
    id: 1,
    subtitle:"Quisque egestas ullamco",
    title: " Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor sit amet, co... ",
    image: "https://opencart.templatemela.com/OPC08/OPC080192/OPC4/image/cache/catalog/blog5-898x649.jpg",
  },
  {
    id: 2,
    subtitle:"Crowdes passges into all",
    title: " Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor sit amet, co... ",
   
    image: "https://opencart.templatemela.com/OPC08/OPC080192/OPC4/image/cache/catalog/blog4-898x649.jpg",
  },
  {
    id: 3,
    subtitle:"Libro Lorem Vehicula",
    title: " Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor sit amet, co... ",
    image: "https://opencart.templatemela.com/OPC08/OPC080192/OPC4/image/cache/catalog/blog3-898x649.jpg",
  },
  {
    id: 4,
    subtitle:"Libro Lorem Vehicula",
    title: " Link: St. Louis Blues Audio shortcode: “Lorem ipsum dolor sit amet, co... ",
    image: "https://opencart.templatemela.com/OPC08/OPC080192/OPC4/image/cache/catalog/blog1-898x649.jpg",
  },

];

const PassData = () => {
  return (
  <>
    <CardNav/>
    <div className="container d-flex">
       <div className="card-list row d-flex justify-content-between">
      {data.map((item) => (
        <CardLatest key={item.id} title={item.title} subtitle={item.subtitle} image={item.image} />
      ))}
    </div>
    </div>
    </>
  );
};

export default PassData;