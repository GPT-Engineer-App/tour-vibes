import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from './components/Footer';
import { Flex, Box, Link, IconButton, useDisclosure, Collapse } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function App() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Router>
      <Box bg="brand.900" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={onToggle}
          />
          <Collapse in={isOpen} animateOpacity>
            <Box pb={4} display={{ md: 'none' }}>
              <Flex direction="column" alignItems="center">
                <Link href="/" p={2}>Home</Link>
                <Link href="/tour-dates" p={2}>Tour Dates</Link>
                <Link href="/merchandise" p={2}>Merchandise</Link>
                <Link href="/contact" p={2}>Contact</Link>
              </Flex>
            </Box>
          </Collapse>
          <Flex alignItems={'center'}>
            <Link href="/" p={2} display={{ base: 'none', md: 'block' }}>Home</Link>
            <Link href="/tour-dates" p={2} display={{ base: 'none', md: 'block' }}>Tour Dates</Link>
            <Link href="/merchandise" p={2} display={{ base: 'none', md: 'block' }}>Merchandise</Link>
            <Link href="/contact" p={2} display={{ base: 'none', md: 'block' }}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
