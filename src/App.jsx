import MovieProvider from "./context/MovieProvider";
import BackgroundStyle from "./BackgroundStyle/BackgroundStyle";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

import TrendingMovie from "./Pages/TrendingMovie";
import Category from "./Pages/Category";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AdminLogin from "./Pages/AdminLogin";
import Admin from "./Admin/Admin";
import Protected from "./Pages/Protected";
import UploadMovie from "./Admin/UploadMovie";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <>
      <BackgroundStyle>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-movies" element={<TrendingMovie />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Protected ProtectRoute={Admin} />} />
            <Route
              path="/upload-new-movie"
              element={<Protected ProtectRoute={UploadMovie} />}
            />
            <Route path="/movies/:type" element={<Category />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </MovieProvider>
      </BackgroundStyle>
    </>
  );
}

export default App;
