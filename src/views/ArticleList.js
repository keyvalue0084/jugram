
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ArticleList = () => {
    return (
      <Box pl={30} pr={30} pt={10} style={{maxHeight: '80vh', overflow: 'auto'}}>
        <Card sx={{ maxWidth: 1300, mb:2}}>
          <CardMedia
            component="img"
            alt="a man"
            height="440"
            image="https://blog.kakaocdn.net/dn/bldVq2/btqvyBqsrnU/pYDSTBDpawvvCuiWvNzBr0/img.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            A Man
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A man looking away
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 1300 , mt:8,  mb:2}}>
          <CardMedia
            component="img"
            alt="moon"
            height="440"
            image="http://images.socdoc.io/images/article/2020/04/05/629550/7275f33c5853_6a720f6c188f.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            The moon
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The mooooooooooon is looking good
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">More</Button>
          </CardActions>
        </Card>

      </Box>
      
    );
  };
  
  export default ArticleList;
  