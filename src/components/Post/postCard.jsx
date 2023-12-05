import React from 'react'
import { Card, CardHeader } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const postCard = () => {
  return (
    <Card className=''>
           <CardHeader
              avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                  </Avatar>
              }
              action={
                  <IconButton aria-label="settings">
                      <MoreVertIcon />
                  </IconButton>
              }
              title="Code With Momo"
              subheader="@CodeWithMomo"
          />

          <CardMedia
              component="img"
              height="194"
              image="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg"
              alt="Paella dish"
          />

          <CardContent>
              <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
              </Typography>
          </CardContent>



          <CardActions className='flex justify-between' disableSpacing>
              <div>
                <IconButton>
                   {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>

                <IconButton>
                   {<ShareIcon/>}
                </IconButton>
                <IconButton>
                   {<ChatIcon/>}
                </IconButton>
                </div>

                  <div>
                    <IconButton>
                    {true?<BookmarkIcon/>:<BookmarkBorderIcon/>} 
                    </IconButton>
                 
                  </div>

              
                  
          </CardActions>

    </Card>
   
  )
}

export default postCard;
