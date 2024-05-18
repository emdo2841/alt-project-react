import './App.css';
import { Route, Routes, Link} from 'react-router-dom';
import Main from './Component/main';
import RepositoryDetails from './Component/RepositoryDetails';
import { Center, ChakraProvider } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from './Component/errorboundary';
import About from "./Component/about"
import Footer from './Component/footer';
import ContactPage from './Component/contact';
import NotFound from './Component/404'; // Import the 404 component
import NewRepositoryModal from './Component/NewRepositoryModal';

const App = () => {
  const location = useLocation();
  return (
    <ChakraProvider>
       
      <body className='body'>
      <ErrorBoundary>
        <div className="App">
        <Center>
          <section className='header-section'>
        <Breadcrumb fontWeight='extrabold' fontSize='2xl' spacing='8px' separator='' mt='20px'>
          <BreadcrumbItem>
          <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/about">About</Link>
            {/* <BreadcrumbLink href="/about">About</BreadcrumbLink> */}
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage={location.pathname === "/breadcrumb"}>
          <Link to="/contact">Contact</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        </section>
        </Center>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/repository/:fullname" exact element={<RepositoryDetails />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
            <Route path="/new-repo" element={<NewRepositoryModal />} />
            
          </Routes>
          
          <Footer />
        </div>
        </ErrorBoundary>
      </body>
    </ChakraProvider>
  );
};
export default App;