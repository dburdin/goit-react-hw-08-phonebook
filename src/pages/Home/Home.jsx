import { Helmet } from 'react-helmet-async';
import { Container, Title, SubTitle, NavigatonLink } from './Home.styled';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container>
        <Title>Welcome to web-application 💁‍♀️</Title>
        <SubTitle>
          COME ON! Don’t wait —
          <NavigatonLink to="/register">register</NavigatonLink>now and join us!
        </SubTitle>
      </Container>
    </>
  );
}
