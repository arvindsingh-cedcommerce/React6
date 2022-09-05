import { Box, Button, CardMedia, Container, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { BlogContext } from '../App';
import Rightbar from '../components/rightbar/Rightbar'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete'; import { useNavigate } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import Blogs from '../data';
import { SettingsSystemDaydream } from '@mui/icons-material';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
// component to edit or delete the BLOG
const Details = () => {
  let Naigate = useNavigate();
  let Blog = Blogs();
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [indx, setIndx] = React.useState('');
  const [checkclick, setcheckclick] = useState(false);
  const { ID, title, setTitle, heading, setHeading, subTitle, setSubTitle, description, setDescription,flag } = useContext(BlogContext);
  console.log(ID);

  // function to edit the Blog
  const Edit = () => {
    if(flag === true) {
    setEdit(true);
    document.getElementById('icons').style.display = 'none';
    document.getElementById('save').style.display = 'block';
    }
    else {
      Naigate('/signin')
    }
  }
  // It works to move focus to the editable block to edit the BLOG
  React.useEffect(() => {
    document.getElementById('para').focus();
  }, [edit])
// function to delete the BLOG
  const Delete = (index) => {
    if(flag === true) {
      Blog.splice(index, 1);
      Naigate('/');
    }
    else {
      Naigate('/signin')
    }
  }
  //Delete Confirm
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 //Abort Delete
  const handleClose = () => {
    setAnchorEl(null);
  };
  // function to save the changes on the BLOG
  const Save = (index) => {
    setEdit(false);
    setIndx(index);
    let temp = heading
    temp = document.getElementById('para').textContent;
    setHeading(temp);
    let Title = document.getElementById('para1').innerText;
    setTitle(Title);
    let SubTitle = document.getElementById('para2').innerText;
    setSubTitle(SubTitle);
    let Description = document.getElementById('para3').innerText;
    setDescription(Description);
    console.log(heading + "--" + title + "--" + subTitle + "--" + description);
    setcheckclick(true);
  }
  // It call a function to save the changes
  React.useEffect(() => {
    if (indx !== '') {
      SaveChanges(indx);
    }
  }, [checkclick]);
//  function to save the changes
  const SaveChanges = (index) => {
    alert(heading + "--" + title + "--" + subTitle + "--" + description)
    console.log(title);
    Blog[index].title = title;
    Blog[index].heading = heading;
    Blog[index].subtitle = subTitle;
    Blog[index].description = description;
    document.getElementById('icons').style.display = 'block';
    document.getElementById('save').style.display = 'none';
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <Navbar />
      {Blog.map((item, index) => {
        if (item.id === ID) {
          return (
            <Box>
              <Box
                sx={{
                  backgroundImage: `url('images/space.gif')`,
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  backgroundSize: 'cover ',
                  height: '350px'
                }}
              >
                <Typography align="center" color="white" variant='h2'
                  sx={{ fontWeight: 900, padding: 10 }}
                >
                  {item.heading}
                </Typography>

              </Box>
              <Container>
                <hr />
                <Stack direction={{ xs: 'column', md: 'row' }}
                  padding={{ xs: 1, sm: 2, md: 8 }}
                >
                  <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
                    <h1 id="para"
                      m={4}
                      align={"center"}
                      contentEditable={edit}
                      style={{ fontWeight: 900, color: "tomato", marginBottom: '2rem' }}
                    >
                      {item.heading}
                    </h1>
                    <Typography variant="h6" m={2} color="#7C6B9C" contentEditable={edit}>
                      <p id="para1" >{item.title}</p></Typography>
                    <CardMedia
                      component="img"
                      height="600px"
                      image={item.image}
                    />
                    <Typography align='center' variant="h4" mt={2} contentEditable={edit} >
                      <p id="para2">{item.subtitle}</p>
                    </Typography>
                    <Typography
                      m={4}
                      // align={"center"}
                      color={"gray"}
                      variant="h4"
                      sx={{ fontWeight: 900 }}
                      contentEditable={edit}
                    >
                      <p id="para3">{item.description}</p>
                    </Typography>
                    <Stack direction={{ xs: "row", md: "row" }}>
                      <Box flex={{ xs: 3, sm: 4, md: 3, lg: 5 }}></Box>
                      <Box flex={1}>
                        <div id='icons'>
                          {/* Edit icon to edit the BLOG */}
                          <BorderColorIcon
                            sx={{ fontSize: 35, color: '#60507C', cursor: "pointer" }}
                            onClick={Edit} />&nbsp;&nbsp;
                            {/* Delete icon to delete the BLOG */}
                          <DeleteIcon aria-describedby={id} onClick={handleClick}
                            sx={{ fontSize: 40, color: 'red', cursor: "pointer" }} />
                          <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'left',
                            }}
                          >
                            <Button sx={{ m: 0.3 }} variant='outlined' onClick={() => Delete(index)}>Delete</Button>
                            <Button sx={{ m: 0.3 }} variant='outlined' onClick={handleClose}>Cancel</Button>
                          </Popover>
                        </div>
                        <div id='save' hidden>
                          <Button align="center" variant="contained" size="large"
                            sx={{ backgroundColor: '#382B50' }} onClick={() => Save(index)}
                          >Save</Button>
                        </div>
                      </Box>
                    </Stack>
                  </Box>
                  <Box flex={1}>
                    <Rightbar />
                  </Box>
                </Stack>
              </Container>
            </Box>
          )
        }
      })}
      <Footer />
    </>
  )
}

export default Details