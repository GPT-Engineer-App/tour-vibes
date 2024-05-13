import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from './components/Footer';
import { Flex, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Link, Icon } from '@chakra-ui/react';
import { FaBars, FaHome, FaCalendarAlt, FaShoppingCart, FaPhone } from 'react-icons/fa';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="brand.900" color="white">
        <IconButton icon={<FaBars />} variant="outline" onClick={onOpen} aria-label="Open Menu" display={{ base: "inline-flex", md: "none" }} />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
            <DrawerBody>
              <Link href="/" onClick={onClose} p={2}><Icon as={FaHome} /> Home</Link>
              <Link href="/tour-dates" onClick={onClose} p={2}><Icon as={FaCalendarAlt} /> Tour Dates</Link>
              <Link href="/merchandise" onClick={onClose} p={2}><Icon as={FaShoppingCart} /> Merchandise</Link>
              <Link href="/contact" onClick={onClose} p={2}><Icon as={FaPhone} /> Contact</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;