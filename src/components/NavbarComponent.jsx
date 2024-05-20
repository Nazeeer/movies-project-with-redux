import React from 'react'
import { Container ,Row ,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { getAllMovie } from '../redux/actions/moviesAction';
import { getSeachMovie } from '../redux/actions/moviesAction';
const NavbarComponent = () => {

    const onSearch = (word)=>{
        search(word);
    }

    const dispatch = useDispatch()
      // nav search
  const search= async(word)=>{
    if(word === ''){
      // getAllMovies();
      dispatch(getAllMovie())
    }else{
        dispatch(getSeachMovie(word))
}
  }
  return (
    <div className='nav-style w-100'>
        <Container>
            <Row className='pt-2 d-flex justify-content-between'>
                <Col xs="3" lg="4">
                    <h1 className='logo'>Movies</h1>
                </Col>
                <Col xs="9" lg="5" className="d-flex align-items-center">
                    <div className="search w-100">
                        <i className="ri-search-eye-line"></i>
                        <input onChange={(e)=> onSearch(e.target.value)} type="text" className='form-control' placeholder='Search' />
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default NavbarComponent