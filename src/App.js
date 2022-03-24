import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import viewedReducer from "./reducers/viewedReducer";

const store = configureStore({
  reducer: {
    viewed: viewedReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
