import React from 'react';

// mui
import { Avatar, Box, Stack, Typography } from '@mui/material';

// image
import commentNotFoundIcon from '../../assets/images/Status update-pana.svg';

const Comments = ({comments}) => {

    console.log(!!comments.length);

    return (
        <Box component={'div'} boxShadow={'0 0 15px 0px rgba(0,0,0,0.1)'} mt={8} pb={comments.length && 4} pt={comments.length && 2} px={4} borderRadius={'16px'}>
            {!!comments.length ? 
            comments.map((comment) => (
                <Box key={comment.id} component={'div'} mt={3} borderBottom={'1px solid #acacac77'} borderTop={'1px solid #acacac77'} borderLeft={'16px solid #2065BB'} borderRadius={"16px 0 0 16px"} py={2} >
                    <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1}>
                        <Avatar sx={{width: '45px', height: '45px'}}>{comment.name[0]}</Avatar>
                        <Typography component="p" fontWeight={500} fontSize={{xs: '16px', md: '18px'}}>{comment.name}</Typography>
                    </Stack>
                    <Typography component={"p"} fontSize={{xs: '14px', md: '16px'}} mt={3}>
                        {comment.text}
                    </Typography>
                </Box>
            ))
            :
                <Stack display={'flex'} flexDirection={{xs: 'column-reverse', sm: 'row'}} justifyContent={'space-between'} py={{xs: 4, sm: 0}} alignItems={'center'} gap={2}>
                    <Typography component={'p'} fontSize={{xs: '16px', md: '18px'}} textAlign={{xs: 'center', sm: 'right'}}>
                        دیدگاهی وجود ندارد. <br className='brParagraph' />
                        شما یک دیدگاه وارد کنید. <br /> و منتظر تایید آن باشید
                    </Typography>
                    <Box component={'img'} width={{xs: '180px', md: '260px', xl: '280px'}} src={commentNotFoundIcon} alt='commentNotFoundIcon' />
                </Stack>
            }

        </Box>
    );
};

export default Comments;