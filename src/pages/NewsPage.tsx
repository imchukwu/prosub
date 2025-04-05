// src/pages/NewsPage.tsx
import { Box, Typography, Container, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';

const newsItems = [
  {
    title: "Company Wins Safety Excellence Award",
    date: "May 15, 2023",
    author: "John Doe",
    excerpt: "Recognized for outstanding HSE performance in offshore operations",
    image: "/images/news1.jpg"
  },
  // Add more news items
];

const NewsPage = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          News & Media
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {newsItems.map((news, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                height="160"
                image={news.image}
                alt={news.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {news.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    <CalendarToday fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {news.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Person fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {news.author}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {news.excerpt}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read More</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default NewsPage;