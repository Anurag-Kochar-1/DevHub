import './App.css';
import { lazy, Suspense } from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import { Box } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import { Navbar } from './components';

// Code spilting
const Feed = lazy(() => import("./components/Feed"))
const VideoDetail = lazy(() => import("./components/VideoDetail"))
const ChannelDetail = lazy(() => import("./components/ChannelDetail"))
const SearchFeed = lazy(() => import("./components/SearchFeed"))




const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor : "#000"}}>
      <Navbar />
    
     <Suspense fallback={<Box sx={{ posting: "fixed", top: "0", right: "0", left:"0", bottom: "0", width: "100vw", height: "100vh" , display: 'flex', justifyContent: "center", alignItems: "items" }}> <CircularProgress /> </Box>}>
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id'  element={<VideoDetail/>} />
          <Route path='/channel/:id'  element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm'  element={<SearchFeed/>} />
        </Routes>
     </Suspense>
    </Box>
  </BrowserRouter>
)

export default App;
