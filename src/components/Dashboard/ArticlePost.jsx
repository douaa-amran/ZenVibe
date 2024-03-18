import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import { red } from '@mui/material/colors';
import Typography from '@mui/joy/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentalHealthImages, fetchProfilePictures } from '../../redux/ImagesSlice';
import { useEffect, useState } from 'react';
import { fetchArticles } from '../../redux/ArticlesSlice';
import { CardActions, CardHeader, CardMedia, Link } from '@mui/material';
import { ShareIcon } from '@heroicons/react/24/outline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { fetchUsers } from '../../redux/UsersSlice';

export default function ArticlePost() {
  const dispatch = useDispatch();
  const [displayedImages, setDisplayedImages] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const articles = useSelector(state => state.articles.articles);
  const mentalHealthImages = useSelector(state => state.images.mentalHealthImages);
  const profilePictures = useSelector(state => state.images.profilePictures);
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchMentalHealthImages('mental health', 30)); // Fetch mental health images
    dispatch(fetchProfilePictures('profile pictures', 10)); // Fetch profile pictures
    dispatch(fetchUsers());
  }, [dispatch]);

  const getRandomImage = () => {
    const unusedImages = mentalHealthImages.filter(img => !displayedImages.includes(img));
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    return unusedImages[randomIndex];
  };

  const getRandomProfilImage = () => {
    const unusedImages = profilePictures.filter(img => !displayedImages.includes(img));
    const randomIndex = Math.floor(Math.random() * unusedImages.length);
    return unusedImages[randomIndex];
  };

  const getRandomUser = () => {
    const unusedUsers = users.filter(u => !displayedUsers.includes(u));
    const randomIndex = Math.floor(Math.random() * unusedUsers.length);
    return unusedUsers[randomIndex];
  };

  console.log(getRandomUser())

  const getRandomDays = () => {
    return Math.floor(Math.random() * 1000); // Random number between 0 and 1000
  };

  return (
    <div className='grid grid-cols-1 gap-11 m-3'>
      {articles?.map((article, index) => (
        <Card style={{padding:'20px'}} key={index}>
          <CardHeader
            style={{marginBottom:'-20px'}}
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={getRandomProfilImage()}/>
            }
            action={
              <IconButton aria-label="settings" style={{marginRight : '10px'}}>
                <MoreVertIcon />
              </IconButton>
            }
            title={getRandomUser()?.name}
            subheader={getRandomUser()?.registered.date}
          />
          <CardMedia
            component="img"
            image={getRandomImage()} // Use mental health images
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {article}
            </Typography>
          </CardContent>
          <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', marginX: '10px'}}>
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
            <Link
              component="button"
              underline="none"
              fontSize="10px"
              sx={{ color: 'black', my: 0.5 , fontSize: '12px' , marginRight: '10px'}}
            >
              {getRandomDays()} DAYS AGO
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
