import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import { Button, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const PopularUserCard = () => {
  return (
    <div>
      
          <CardHeader
              avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                  </Avatar>
              }
              action={
                  <Button size='small'>Follow</Button>
              }
              title="Code with momo"
              subheader="@codewithMomo"
          />
    </div>
  )
}

export default PopularUserCard
