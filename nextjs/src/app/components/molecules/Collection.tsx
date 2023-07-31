import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Collection() {
  const cards = [
    {
      name: 'chat-app',
      description: 'チャットアプリ',
      image: 'collection-image/chat-app.png',
      url: 'https://portfolio-tsuru.web.app/',
      src: 'https://github.com/tsuru531/chat-app'
    },
    {
      name: 'simple-daw',
      description: 'シーケンスソフト',
      image: 'collection-image/simple-daw.png',
      src: 'https://github.com/tsuru531/simple-daw'
    },
    {
      name: 'ドラムスクールHP',
      description: '管理中のドラムスクールのホームページ',
      image: 'collection-image/drum-school.png',
      url: 'https://www.kosei-drumschool.com/',
    },
  ]
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.name} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: '56.25%',
                }}
                image={card.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">{card.name}</Typography>
                <Typography>{card.description}</Typography>
              </CardContent>
              <CardActions>
                {card.url &&
                  <a href={card.url} target="_blank" rel="noopener noreferrer">
                    <Button size="small">View</Button>
                  </a>
                }
                {card.src &&
                  <a href={card.src} target="_blank" rel="noopener noreferrer">
                    <Button size="small">Src</Button>
                  </a>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
