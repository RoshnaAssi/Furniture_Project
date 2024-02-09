// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// EditProduct page components
import CategoryInfo from "layouts/ecommerce/Category/edit-product/components/CategoryInfo";
import Socials from "layouts/ecommerce/products/edit-product/components/Socials";
import Pricing from "layouts/ecommerce/products/edit-product/components/Pricing";
import CategoryImages from "layouts/ecommerce/Category/edit-product/components/CategoryImages"
import { Link, useParams, useNavigate } from "react-router-dom";
import { updateDoc, collection, getDocs, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "config/firebase";

function EditCategory() {
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Category"));
        const newList = [];
        querySnapshot.forEach((doc) => {
          newList.push({ id: doc.id, ...doc.data() });
        });
        setCategoryList(newList);
        console.log(newList);
        if (newList.length > 0) {
          setEditName(newList[0].name); // Assuming you want to set editName from the first item in the list
          setEditTotalProduct(newList[0].TotalProduct);
          setEditTotalEarning(newList[0].TotalEarning);
          setEditStatus(newList[0].status);
          setEditDescription(newList[0].description);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    {categoryList.map((category, index) => (
    <DashboardLayout  key={category.id}>
      <DashboardNavbar />
      <ArgonBox my={3}>
        <ArgonBox mb={3} position="relative">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} lg={6}>
              <ArgonTypography variant="h4" color="white" fontWeight="medium">
                Make the changes below
              </ArgonTypography>
              <ArgonBox mt={1} mb={2}>
                <ArgonTypography variant="body2" color="white">
                  We&apos;re constantly trying to express ourselves and actualize our dreams. If you
                  have the opportunity to play.
                </ArgonTypography>
              </ArgonBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <ArgonBox display="flex" justifyContent="flex-end">
                <ArgonButton variant="outlined" color="white">
                  Save
                </ArgonButton>
              </ArgonBox>
            </Grid>
          </Grid>
        </ArgonBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <CategoryImages editImg={editImg} setEditImg={setEditImg} setCategoryList={setCategoryList} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <CategoryInfo
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
          <Grid item xs={12} lg={4}>
            <Socials />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Pricing />
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox mt={3}>
            <Grid item xs={12} lg={3} container>
              <ArgonButton variant="gradient" color="info" fullWidth onClick={() => editCategory(category.id)}>
                Edit
              </ArgonButton>
            </Grid>
          </ArgonBox>
      <Footer />
    </DashboardLayout>
          ))}
          </>
  );
}

export default EditCategory;
