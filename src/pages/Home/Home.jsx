import { Helmet } from 'react-helmet';
import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <Title>Welcome to web-application 💁‍♀️</Title>
      </Container>
    </>
  );
}
