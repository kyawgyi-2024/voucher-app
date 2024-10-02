import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashBoardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import { createBrowserRouter } from "react-router-dom";
import ProductCreatePage from "./pages/ProductCreatePage";
import ProductEditPage from "./pages/ProductEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <DashBoardPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "product/edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "sale",
        element: <SalePage />,
      },
      {
        path: "voucher",
        element: <VoucherPage />,
      },
    ],
  },
]);

export default router;
