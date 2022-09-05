import { Box, Button, IconButton, Input, Stack, TextField } from '@mui/material'
import React from 'react'
import { BlogContext } from '../../App'
import { useContext } from 'react'
import Blogs from '../../data'
import "./AddBlog.css"
import { PhotoCamera } from '@mui/icons-material'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const AddBLog = () => {
  const navi = useNavigate();
  let Blog = Blogs();
  const { title, setTitle, heading, setHeading, subTitle, setSubTitle,
    description, setDescription, image, setImage } = useContext(BlogContext);

  const ImageUpload = (e) => {
    let img = URL.createObjectURL(e.target.files[0]);
    setImage(img);
  }
  const Upload = () => {
    if (title !== '' && heading !== '' && subTitle !== '' && description !== '' && image !== '') {
      let temp = { title: title, heading: heading, subtitle: subTitle, description: description, image: image };
      Blog.push(temp);
      alert("Your blog has been added successfully");
      setTitle('');
      setHeading('');
      setSubTitle('');
      setDescription('');
      setImage('');
      navi('/');
    }
    else {
      alert("All fields should be filled");
    }
  }
  return (
    <>
      <Navbar />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box style={{ background: '' }}>
          <TextField
            id="standard-multiline-static"
            label="Title"
            placeholder='Title'
            multiline
            rows={4}
            variant="standard"
            value={title}
            InputProps={{ sx: { width: 1300 } }}

            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            id="standard-multiline-static"
            label="Heading"
            multiline
            rows={4}
            variant="standard"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            sx={{

            }}
            InputProps={{ sx: { width: 1300 } }}

          />
        </Box>
        <Box>
          <TextField
            id="standard-multiline-static"
            label="SubTitle"
            multiline
            rows={4}
            variant="standard"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            InputProps={{ sx: { width: 1300 } }}

          />
        </Box>
        <Box>
          <TextField
            id="standard-multiline-static"
            label="Describe Your Blog"
            multiline
            rows={4}
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            InputProps={{ sx: { width: 1300, mb: 3 } }}

          />
        </Box>
        <Box>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" onChange={ImageUpload} />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" onChange={ImageUpload} />
              <PhotoCamera />
            </IconButton>
          </Stack>
        </Box>
        <Box align="center" sx={{ mb: 5 }} >
          <Button variant="contained" onClick={Upload} >Post</Button>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default AddBLog