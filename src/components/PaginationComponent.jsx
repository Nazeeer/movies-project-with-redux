import React, { useState,useEffect } from 'react'
// import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from 'react-paginate';
import { useDispatch,useSelector } from 'react-redux';
import { getPagination } from '../redux/actions/moviesAction';
const PaginationComponent = () => {
    const [pageCount , setPageCount] =useState(0);

    const dispatch =useDispatch()
    const pages= useSelector((state)=> state.pageCount)
    useEffect(()=>{
        setPageCount(pages)
      },[])


      // pagination
  const choosePageNumber =async (number)=>{
    dispatch(getPagination(number))
  }


    const handlePageClick=(data)=>{
        console.log(data);
        console.log(data.selected);
        choosePageNumber(data.selected + 1)
    }



    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"

            containerClassName={'pagination justify-content-center p-3  '}
            pageClassName={'page-item '}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active-color'}
    />
)}

export default PaginationComponent