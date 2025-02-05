import { useEffect, useState } from 'react';
import { Button, TextField, Box, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
});
const generateId = () => Math.floor(1000 + Math.random() * 9000);
const LeftSideForm = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [generatedId, setGeneratedId] = useState<number | null>(null);
  useEffect(() => {
    localStorage.removeItem('userList');
    setUsers([]);
  }, []);
  const formik = useFormik({
    initialValues: { name: '' },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (!generatedId) return;
      const newUser = { id: generatedId, name: values.name };
      const updatedUsers = [...users, newUser];
      localStorage.setItem('userList', JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      setGeneratedId(null);
      resetForm();
    },
  });
  useEffect(() => {
    if (formik.values.name && !generatedId) {
      setGeneratedId(generateId());
    } else if (!formik.values.name) {
      setGeneratedId(null);
    }
  }, [formik.values.name]);
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Read-Only JSON Display */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Saved Users (JSON)"
              multiline
              rows={4}
              value={users.length > 0 ? JSON.stringify(users, null, 2) : ''}
              InputProps={{
                readOnly: true,
                style: { color: 'white' }
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiInputLabel-root': { color: 'white' }
              }}
            />
          </Grid>
          {/* ID Field (Auto-Generated, Empty After Refresh) */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="User ID"
              value={generatedId ?? ''}
              InputProps={{
                readOnly: true,
                style: { color: 'white' }
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiInputLabel-root': { color: 'white' }
              }}
            />
          </Grid>
          {/* Name Field (Empty After Refresh) */}
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
              InputProps={{
                style: { color: 'white' }
              }}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                '& .MuiInputLabel-root': { color: 'white' }
              }}
            />
          </Grid>
          {/* Save Button (Always Enabled) */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" size="small" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default LeftSideForm;
