import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import NavigationBar from '../../General Components/NavigationBar';
import Categories from '../Categories';
import { Link } from 'react-router-dom';
import { LuCameraOff } from "react-icons/lu";

import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";

export default function Servkit({handleAddProductDetails,cartItems }) {
const [data, setData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:3001/api/servkit')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}, []);

    const [pageNumber, setPageNumber] = useState(0);
    const [layoutMode, setLayoutMode] = useState('grid');
  
    const itemsPerPage = 12;
    const pagesVisited = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(data.length / itemsPerPage);

    


  
  return (
    <div className='big_container' key={1}>
    <div className='shop_routes' >
<a href="./" style={{ color: "#0078a1", textDecoration: "none" }}>
         {" "}
         Home &nbsp;/
       </a>
       <a
       href='/Shop'
         style={{ color: "#0078a1", textDecoration: "none" }}
      
       >
         &nbsp;Shop &nbsp;/
       </a>
       <p href='/Shop/Big'
         style={{ color: "#0078a1", textDecoration: "none",position: "absolute", left: "7.2rem", top: "-1rem", width:'10rem'}}
      
       >
         &nbsp;Serv Kit &nbsp;
       </p>
      
 </div>


 <div className='productdisplay_container' >

<div className={`sub_productdisplay_container ${layoutMode}`}>
<small  className='featuredprdts_length' >Featured Products: {data.length}</small>
     <div className='btn_group' >
     <small  >Sort by:</small>
      <p onClick={() => setLayoutMode('grid')} ><CiGrid41 /></p>
      <p  onClick={() => setLayoutMode('normal')} > <CiGrid2H /></p>
</div>

       {data.slice(pagesVisited, pagesVisited + itemsPerPage).map((product, index) => (
         
         <Link key={product.partnumber}  className='mylink' 
         // Moving to the product page
         to={`/Productdetails?name=${product.Description}?id=${product.partnumber}`} onClick={() => handleAddProductDetails(product)} > 
        
           <p className='cameraoff_icon'  ><LuCameraOff /></p>
         <p className='prdt_partnumber'> {product.partnumber}</p>
         {/** */}
           <p  className='prdt_title'  >{product.Description}   </p>
           <p  className='prdt_category'  >{product.category}   </p>
           <p  className='prdt_price'  >USD {product.Price}   </p>
      </Link>
       ))}
           <ReactPaginate
       previousLabel={'Previous'}
       nextLabel={'Next'}
       pageCount={pageCount}
       onPageChange={(e) => setPageNumber(e.selected)}
       containerClassName={'pagination'}
       previousLinkClassName={'pagination__link'}
       nextLinkClassName={'pagination__link'}
       disabledClassName={'pagination__link--disabled'}
       activeClassName={'pagination__link--active'}
     />

     </div>
     </div>
    



<Categories  />

<NavigationBar cartItems={cartItems} />


</div>
  )
}