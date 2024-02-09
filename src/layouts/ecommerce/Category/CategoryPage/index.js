// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// ProductPage page components
import ProductImages from "layouts/ecommerce/Category/CategoryPage/components/ProductImages"
import ProductInfo from "layouts/ecommerce/Category/CategoryPage/components/ProductInfo";
// Data
import dataTableData from "layouts/ecommerce/Category/CategoryPage/data/dataTableData";
import { Link, useParams, useNavigate } from "react-router-dom";
import { updateDoc, collection, getDocs, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "config/firebase";

function CategoryPage() {
  const { id } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  const [editName, setEditName] = useState("");
  const [editTotalProduct, setEditTotalProduct] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editTotalEarning, setEditTotalEarning] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [editImg, setEditImg] = useState('');

  const navigate = useNavigate();

  const editCategory = async (id) => {
    try {
      const categoryDoc = doc(db, "Category", id);
      await updateDoc(categoryDoc, {
        name: editName,
        TotalProduct: editTotalProduct,
        Description: editDescription || "", // Use an empty string if editDescription is undefined
        TotalEarning: editTotalEarning,
        status: editStatus,
        img: editImg
      });
      navigate("/ecommerce/Category/category-list");
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Card sx={{ overflow: "visible" }}>
          <ArgonBox p={3}>
            <ArgonBox mb={3}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Category Details
              </ArgonTypography>
            </ArgonBox>
              <ProductImages editImg={editImg} setEditImg={setEditImg} setCategoryList={setCategoryList}/>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6} xl={5}>
              </Grid>
              <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
              <ProductInfo 
                editName={editName}
                setEditName={setEditName}
                editDescription={editDescription}
                setEditDescription={setEditDescription}
                editStatus={editStatus}
                setEditStatus={setEditStatus}
                editTotalProduct={editTotalProduct}
                setEditTotalProduct={setEditTotalProduct}
                editTotalEarning={editTotalEarning}
                setEditTotalEarning={setEditTotalEarning}
                editCategory={editCategory}
              /> 
              </Grid>
            </Grid>
            <ArgonBox mt={8} mb={2}>
              <ArgonBox mb={1} ml={2}>
                <ArgonTypography variant="h5" fontWeight="medium">
                  Other category
                </ArgonTypography>
              </ArgonBox>
              <DataTable
                table={dataTableData}
                entriesPerPage={false}
                showTotalEntries={false}
                isSorted={false}
              />
            </ArgonBox>
          </ArgonBox>
        </Card>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CategoryPage;
