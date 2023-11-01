import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Frame2609438 = React.lazy(() => import("pages/Frame2609438"));
const Frame2609437 = React.lazy(() => import("pages/Frame2609437"));
const Frame2609436 = React.lazy(() => import("pages/Frame2609436"));
const Frame2609435 = React.lazy(() => import("pages/Frame2609435"));
const PresentationPreviewExpand = React.lazy(() =>
  import("pages/PresentationPreviewExpand"),
);
const Azmonk31Twelve = React.lazy(() => import("pages/Azmonk31Twelve"));
const Azmonk31 = React.lazy(() => import("pages/Azmonk31"));
const Azmonk31Eight = React.lazy(() => import("pages/Azmonk31Eight"));
const Azmonk31Four = React.lazy(() => import("pages/Azmonk31Four"));
const Azmonk31Seven = React.lazy(() => import("pages/Azmonk31Seven"));
const Presentation = React.lazy(() => import("pages/Presentation"));
const Azmonk31Two = React.lazy(() => import("pages/Azmonk31Two"));
const Azmonk31Three = React.lazy(() => import("pages/Azmonk31Three"));
const Azmonk31Nine = React.lazy(() => import("pages/Azmonk31Nine"));
const Azmonk31Eleven = React.lazy(() => import("pages/Azmonk31Eleven"));
const CheckList = React.lazy(() => import("pages/CheckList"));
const Estimate = React.lazy(() => import("pages/Estimate"));
const SalesOrder = React.lazy(() => import("pages//SalesOrder"));
const Invoices = React.lazy(() => import("pages/Invoices"));
const PurchaseOrder = React.lazy(() => import("pages/PurchaseOrder"));
const Bills = React.lazy(() => import("pages/Bills"));
const Feedback = React.lazy(() => import("pages/Feedback"));
const Commisions = React.lazy(() => import("pages/Commisions"));
const ProductDetail = React.lazy(() => import("pages/ProductDetail"));
const EditProduct = React.lazy(() => import("pages/ProductDetail/EditProduct"));
const SearchPopup = React.lazy(() => import("pages/SearchProduct"));
const QuickAdd = React.lazy(() => import("pages/QuickAdd"));
const Clients = React.lazy(() => import("pages/clients"));
const OrderStage = React.lazy(() => import("pages/OrderStage"));
const Products = React.lazy(() => import("pages/Products"));
const EstProductEdit = React.lazy(() => import("pages/EstProductEdit"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Azmonk31Eleven />} />
          <Route path="/overview" element={<Azmonk31Nine />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/sales-order" element={<SalesOrder />} />
          <Route path="/order-stage" element={<OrderStage />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/commisions" element={<Commisions />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/product-edit" element={<EditProduct />} />
          <Route path="/search" element={<SearchPopup />} />
          <Route path="/quick" element={<QuickAdd />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/est-product-edit" element={<EstProductEdit />} />
          <Route path="/azmonk31three" element={<Azmonk31Three />} />
          <Route path="/azmonk31two" element={<Azmonk31Two />} />
          <Route path="/estimate" element={<Azmonk31Seven />} />
          <Route path="/azmonk31four" element={<Azmonk31Four />} />
          <Route path="/azmonk31eight" element={<Azmonk31Eight />} />
          <Route path="/purchase-order" element={<PurchaseOrder />} />
          <Route path="/azmonk31" element={<Azmonk31 />} />
          <Route path="/azmonk31twelve" element={<Azmonk31Twelve />} />
          <Route
            path="/presentationpreviewexpand"
            element={<PresentationPreviewExpand />}
          />
          <Route path="/frame2609435" element={<Frame2609435 />} />
          <Route path="/frame2609436" element={<Frame2609436 />} />
          <Route path="/frame2609437" element={<Frame2609437 />} />
          <Route path="/frame2609438" element={<Frame2609438 />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
