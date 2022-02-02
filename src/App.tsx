import { Route, Routes } from "react-router-dom";
import List from "./pages/Questions/List";
import Detail from "./pages/Questions/Detail";
import Share from "./pages/Common/Share";
import NoConnectivity from "./pages/Common/NoConnectivity";
import Layout from "./pages/Common/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="share" element={<Share />} />
          <Route path="questions" element={<List />} />
          <Route path="questions/:id" element={<Detail />} />
          <Route path="NoConnectivity " element={<NoConnectivity />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
