import { Route, Routes } from "react-router-dom";
import "./index.css";
import Latest from "./pages/Latest";
import Main from "./components/Main/Main";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import DetailMovie from "./pages/DetailPage/DetailMovie";
import FavoritList from "./pages/FavoritList";
import TagList from "./pages/TagList";
import FavoriteLayout from "./components/Main/FavoriteLayout/FavoriteLayout";
import WrapperLayout from "./components/Main/FavoriteLayout/WrapperLayout";


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index={true} element={<Latest />}/>
          <Route path="/nowPlaying/:name" element={<NowPlaying />}/>
          <Route path="/popular/:name" element={<Popular />}/>
          <Route path="/topRated/:name" element={<TopRated />}/>
          <Route path="/upComing/:name" element={<UpComing />}/>
          {/* <Route path="/favoriteList" element={<FavoritList />}/>
          <Route path="/tagList" element={<TagList />}/>
          <Route path="/details/:id" element={<DetailMovie />}/> */}
          {/* <Route path="/favoriteList" element={<FavoriteLayout><FavoritList /></FavoriteLayout>}/>
          <Route path="/tagList" element={<TagList />}/> */}
        </Route>         
      </Routes>

      <Routes>
        <Route path="/" element={<WrapperLayout />}>
          <Route index={true} element={<FavoriteLayout />}/>
          <Route path="/favoriteList" element={<FavoritList />}/>
          <Route path="/tagList" element={<TagList />}/>
          <Route path="/details/:id" element={<DetailMovie />}/>
        </Route>
      </Routes>

      
   
    </div>
  
  );
}


export default App;
