"use client";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import * as Yup from "yup";

export default function FormAndValidation() {
  const initialValues = {
    name: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is needed")
  });

  const handleFormSubmit = (values:any) => {
    console.log("Form Submitted", values);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f0f2f5",
        p: 2
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "#fff",
          p: 4,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <Typography variant="h5" gutterBottom textAlign="center">
          User Form
        </Typography>

        <Formik
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validateOnBlur
          validateOnChange
        >
          {({
            values,
            errors,
            handleSubmit,
            handleChange,
            touched,
            handleBlur,
            submitCount,
            isValid
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              {/* Error Summary */}
              {submitCount > 0 && !isValid && (
                <Box sx={{ color: "red", mb: 2 }}>
                  <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                    {Object.values(errors).map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                </Box>
              )}

              <TextField
                fullWidth
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                margin="normal"
              />

              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />

              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}