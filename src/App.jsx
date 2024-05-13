import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Index from "./pages/Index.jsx";

const Navbar = () => {
  const [display, changeDisplay] = React.useState('none');
  return (
    <Flex>
      <Box p="2" flex="1" align="center">
        <Heading size="md">The Rock Legends</Heading>
      </Box>
      <Box display={{ base: 'block', md: 'none' }} onClick={() => changeDisplay('flex')}>
        <IconButton icon={<HamburgerIcon />} variant="outline" aria-label="Open Menu" />
      </Box>
      <Box flex="1" display={{ base: display, md: 'flex' }} justifyContent="flex-end">
        <Flex>
          <Link p="2" href="/">Home</Link>
          <Link p="2" href="/tour-dates">Tour Dates</Link>
          <Link p="2" href="/merchandise">Merchandise</Link>
          <Link p="2" href="/contact">Contact</Link>
        </Flex>
        <IconButton icon={<CloseIcon />} variant="outline" aria-label="Close Menu" display={{ base: 'flex', md: 'none' }} onClick={() => changeDisplay('none')} />
      </Box>
    </Flex>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
