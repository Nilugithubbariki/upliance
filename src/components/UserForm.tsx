import  { useEffect, useState } from 'react';
import { Button, TextField, Box, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
});
const UserDataForm = () => {
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      email: '',
      phone: '',
    },
    validationSchema, 
    onSubmit: (values) => {
      localStorage.setItem('userData', JSON.stringify(values));
      console.log('User Data Saved:', values);
    },
  });
  useEffect(() => {
    if (!formik.values) return; 
    const hasChanges = (Object.keys(formik.values) as Array<keyof typeof formik.values>).some(
      (key) => formik.values[key]?.toString().trim() !== ''
    );
   setUnsavedChanges(hasChanges);
  }, [formik.values]);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        event.returnValue = 'You have unsaved changes! Are you sure you want to leave?';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);
  return (
    <Box>
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
              sx: { '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }
            }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
              sx: { '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }
            }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
              sx: { '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }
            }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{
              style: { color: 'white' },
              sx: { '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }
            }}
            FormHelperTextProps={{ style: { color: 'white' } }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="small" 
            type="submit"
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
  );
};
export default UserDataForm;
