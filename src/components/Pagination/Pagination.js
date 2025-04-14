import React, { useEffect, useState } from 'react';
import '../Pagination/Pagination.css';

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData(pageNumber);
  }, [])

  const fetchData = async () => { 
    const result = await fetch('https://dummyjson.com/products?limit=100');
    const data =  await result.json();
    setProducts(data?.products)
    console.log(data);
  }

  const paginationHandler = (pgNum) => {
    if(pgNum == 'prev' && pageNumber > 1){
      setPageNumber((prev) => prev - 1);
    }else if(pgNum == 'next' && pageNumber < (products.length / pageNumber)){
      setPageNumber((next) => next + 1);
    }else{
      setPageNumber(pgNum+1);
    }
  }
  
  return (
    <div className='container'>
      <div className='pagination-container'>
        {
          (products && products.length) && (products.slice(pageNumber * 10 - 10 , pageNumber * 10)).map((item) => {
            return (
               <div className='box' key={item.id}>
                  <img className='item_image' src={item.thumbnail} alt='item'></img>
                  <div className='title'>{item.title}</div>
              </div>
            )
          })
        }
       
      </div>
      {
        (pageNumber > 0) && (
          <div className='pagination'>
            <span onClick={() => paginationHandler('prev')} style={pageNumber == 1 ? {pointerEvents : 'none'} : {pointerEvents: 'auto'}}>Prev</span>
            {
              [...Array(products.length / 10)].map((_, idx) => (
                <span className={(idx+1) == pageNumber ? 'selected':'unselected'} key={idx} onClick={() => paginationHandler(idx)}>{(idx + 1)}</span>
              ))
            }
            <span onClick={() => paginationHandler('next')}>Next</span>
          </div>
        )
      } 

      </div>
  )
}

export default Pagination;