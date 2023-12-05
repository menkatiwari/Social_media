import React from 'react'
import { Avatar } from '@mui/material'


const StoryCircle = () => {
  return (
    <div>
      
      <div className='flex flex-col items-center mr-4 
        cursor-pointer'>

          <Avatar sx={{ width: "5rem", height: "5rem" }}
          src='https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_640.jpg' 
          >
            
          </Avatar>
          <p>CodeWithMomo</p>
        </div>



    </div>
  )
}

export default StoryCircle





// import { Card, CardHeader } from '@mui/material'
// import React from 'react'
// import Avatar from '@mui/material/Avatar';
// import { red } from '@mui/material/colors';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import IconButton from '@mui/material/IconButton';

// const PostCard = () => {
//   return (
//     <Card className=''>
//           <CardHeader
//               avatar={
//                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                       R
//                   </Avatar>
//               }
//               action={
//                   <IconButton aria-label="settings">
//                       <MoreVertIcon />
//                   </IconButton>
//               }
//               title="Shrimp and Chorizo Paella"
//               subheader="September 14, 2016"
//           />
//     </Card>
//   )
// }

// export default PostCard;