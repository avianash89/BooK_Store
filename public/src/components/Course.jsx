import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import {Link} from "react-router-dom";
function Course() {
  // const filterData = list.filter((data) => data.category === "Buy");
  // console.log(filterData)
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        const filterData = res.data.filter((data) => data.category === "Buy");
        console.log(filterData);
        setBook(filterData);
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here:) </span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            animi iusto sequi, illo cumque maiores illum recusandae nam
            laudantium repellendus nihil laborum tenetur aut neque odit dolorem
            ex ullam omnis amet quos et voluptatibus esse vero laboriosam?
            Aperiam harum obcaecati inventore autem maxime ullam voluptates,
            pariatur deserunt itaque est, libero provident cum. Molestiae,
            fugiat officiis? Maxime quidem quo optio aspernatur!
          </p>
          <Link to = "/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item)=> (
                <Cards item = {item} key = {item.id} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Course;
