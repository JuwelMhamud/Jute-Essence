
import { Outlet } from 'react-router-dom';
import Nav from './../Components/Nav';
import Footer from '../Components/Footer';
const Root = () => {
    return (
        <>
          <Nav/>
          <Outlet/> 
          <Footer/> 
        </>
    );
};

export default Root;