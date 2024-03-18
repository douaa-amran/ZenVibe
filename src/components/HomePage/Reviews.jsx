import React from 'react';
import profil1 from '../../Images/Profil1.png';
import profil2 from '../../Images/Profil2.png';
import profil3 from '../../Images/Profil3.png';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconEmpty': {
        color: '#ff6d75',
    },
});

export default function Reviews() {
    return (
        <div className='flex items-center justify-center gap-14 mt-24 mb-16' id='why-us'>
            <div className="bg-dark-purple  p-6 rounded-lg shadow-md w-72 relative card">
                <div className='flex items-center gap-3 mb-2 text-beige'>
                    <img src={profil2} alt="profil picture" className='w-10 h-auto rounded-full' />
                    <h3 className="font-bold card__title">Layla Al-Zarhouni</h3>
                </div>
                <p className="text-beige card__content mb-5 ml-2">This mental health app is a game-changer. The personalized resources have helped me manage my anxiety better</p>
                <div className='flex justify-between items-center mx-1'>
                    <StyledRating
                        name="customized-color"
                        defaultValue={5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        size="small"
                        readOnly
                    />
                    <p className="text-sm text-beige card__date">January 10, 2024</p>

                </div>
            </div>
            <div className="bg-dark-purple  p-6 rounded-lg shadow-md w-72 relative card">
                <div className='flex items-center gap-3 mb-2 text-beige'>
                    <img src={profil1} alt="profil picture" className='w-10 h-auto rounded-full' />
                    <h3 className="font-bold card__title">Youssef Ben Ali</h3>
                </div>
                <p className="text-beige card__content mb-5 ml-2">I love how easy it is to track my mood and progress with this app. It's like having a therapist in my pocket!</p>
                <div className='flex justify-between items-center mx-1'>
                    <StyledRating
                        name="customized-color"
                        defaultValue={3}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        size="small"
                        readOnly
                    />
                    <p className="text-sm text-beige card__date">February 15, 2024</p>

                </div>
            </div>
            <div className="bg-dark-purple  p-6 rounded-lg shadow-md w-72 relative card">
                <div className='flex items-center gap-3 mb-2 text-beige'>
                    <img src={profil3} alt="profil picture" className='w-10 h-auto rounded-full' />
                    <h3 className="font-bold card__title">Zaynab El Amrani</h3>
                </div>
                <p className="text-beige card__content mb-5 ml-2">Finally, a mental health app that doesn't just focus on symptoms but also empowers users with coping strategies/self-care tips.</p>
                <div className='flex justify-between items-center mx-1'>
                    <StyledRating
                        name="customized-color"
                        defaultValue={4}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        size="small"
                        readOnly
                    />
                    <p className="text-sm text-beige card__date">March 11, 2024</p>
                </div>
            </div>
        </div>
    )
}
