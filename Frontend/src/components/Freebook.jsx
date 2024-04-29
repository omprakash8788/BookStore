// import list from '../../public/list.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Freebook = () => {
      const [book, setBook]=useState([])
      // console.log(book)

  useEffect(()=>{
    const getBook= async()=>{
      try {
       const res= await axios.get("http://localhost:4000/book")
       console.log(res.data);
       setBook(res.data.filter((data)=>data.category==="Free"))
         // So first of all we are filtering free category data here
    // const filterData=list.filter((data)=>data.category==="Free")

        
      } catch (error) {
        console.log("Error- we not get book data", error)
        
      }
    }
    getBook()

  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id iure quod eius eaque voluptatibus!</p>
        </div>
      <div>
      <Slider {...settings}>
       {
        book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))
       }
      </Slider>
      </div>
      </div>

    </>
  )
}

export default Freebook
