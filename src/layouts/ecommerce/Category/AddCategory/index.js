import { useState } from "react";
import { useParams } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// NewProduct page components
import Header from "layouts/ecommerce/Category/AddCategory/components/Header";
import Media from "layouts/ecommerce/Category/AddCategory/components/Media";
import Pricing from "layouts/ecommerce/Category/AddCategory/components/Pricing";

// Argon Dashboard 2 PRO MUI components
import ArgonTypography from "components/ArgonTypography";
import ArgonEditor from "components/ArgonEditor";
import ArgonSelect from "components/ArgonSelect";
import ArgonDropzone from "components/ArgonDropzone";

// NewProduct page components
import FormField from "layouts/ecommerce/Category/AddCategory/components/FormField";

import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../../config/firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { v4 } from "uuid";

// Images
const bgImage =
  "https://as2.ftcdn.net/v2/jpg/05/51/69/95/1000_F_551699573_1wjaMGnizF5QeorJJIgw5eRtmq5nQnzz.jpg";

function AddCategory() {

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const [addName, setAddName] = useState("");
  const [addTotalProduct, setAddTotalProduct] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addTotalEarning, setAddTotalEarning] = useState("");
  const [addStatus, setAddStatus] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const categoriesCollectionRef = collection(db, "Category");
  const navigate = useNavigate();
  const [downloadURL, setDownloadURL] = useState(""); // Define downloadURL state

  const { id } = useParams();

  useEffect(() => {
    id && getSingleUser
  },[id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "Category", id);
    const snapShot = await getDoc(docRef);
    if(snapShot.exists()) {
      setData({...snapShot.data()});
    }
  }

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, `images/${file.name + v4()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURL(url); // Store downloadURL in state
          });
        }
      );

    }
    file && uploadFile();
  }, [file]);
  console.log(data);

  const createCategory = async (e) => {
    e.preventDefault();
    if(!id) {
      try {
        await addDoc(categoriesCollectionRef, {
          name: addName,
          TotalProduct: addTotalProduct,
          TotalEarning: addTotalEarning,
          status: addStatus,
          img: downloadURL
        });
        navigate("/ecommerce/Category/category-list");
      } catch (e) {
        console.log(e);
      }
    }else{
      try {
        await updateDoc(doc(db, "Category", id),{
          name: addName,
          TotalProduct: addTotalProduct,
          TotalEarning: addTotalEarning,
          status: addStatus,
          img: downloadURL
        });
        navigate("/ecommerce/Category/category-list");
      } catch (e) {
        console.log(e);
      }
    }

  }
  

  function getSteps() {
    return ["1. Category Info", "2. Media", "3. Pricing"];
  }
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <ArgonBox>
            <ArgonTypography variant="h5">{id ? "Update Category" : "Add Category" }</ArgonTypography>
            <ArgonBox mt={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormField type="text" label="name" placeholder="eg. " onChange={(e) => { setAddName(e.target.value) }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormField type="text" label="TotalProduct" placeholder="eg. 42" onChange={(e) => { setAddTotalProduct(e.target.value) }} />
                </Grid>
              </Grid>
            </ArgonBox>
            <ArgonBox mt={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <ArgonTypography component="label" variant="caption" fontWeight="bold">
                      Description&nbsp;&nbsp;
                      <ArgonTypography variant="caption" fontWeight="regular" color="text" onChange={(e) => { setAddDescription(e.target.value) }}>
                        (optional)
                      </ArgonTypography>
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonEditor />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormField type="text" label="TotalEarning" placeholder="eg. 420$" onChange={(e) => { setAddTotalEarning(e.target.value) }} />
                  <FormField type="text" label="Status" placeholder="in stock" onChange={(e) => { setAddStatus(e.target.value) }} />
                  <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <ArgonTypography
                      component="label"
                      variant="caption"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      Size
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonSelect
                    defaultValue={{ value: "medium", label: "Medium" }}
                    options={[
                      { value: "extra large", label: "Extra Large" },
                      { value: "extra small", label: "Extra Small" },
                      { value: "large", label: "Large" },
                      { value: "medium", label: "Medium" },
                      { value: "small", label: "Small" },
                    ]}
                  />
                </Grid>
              </Grid>
            </ArgonBox>
          </ArgonBox>
        );
      case 1:
        return (
          <ArgonBox>
            <ArgonTypography variant="h5">Media</ArgonTypography>
            <ArgonBox mt={3}>
              <ArgonBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <ArgonTypography component="label" variant="caption" fontWeight="bold">
                  Category Image
                </ArgonTypography>
              </ArgonBox>
              <div className="bottom">
                <div className="left">
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="right">
                  <form>
                    <div className="formInput">
                      <label htmlFor="file">
                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                      </label>
                      <input
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </ArgonBox>
          </ArgonBox>
        );
      case 2:
        return <Pricing />;
      default:
        return null;
    }
  }

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "80%",
      }}
    >
      <Header />
      <ArgonBox mt={1} mb={20}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card sx={{ overflow: "visible" }}>
              <ArgonBox p={2}>
                <ArgonBox>
                  {getStepContent(activeStep)}
                  <ArgonBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <ArgonBox />
                    ) : (
                      <ArgonButton variant="gradient" color="secondary" onClick={handleBack}>
                        Back
                      </ArgonButton>
                    )}
                    <ArgonButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : createCategory}
                    >
                      {isLastStep ? "Send" : "Next"}
                    </ArgonButton>
                  </ArgonBox>
                </ArgonBox>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddCategory;
