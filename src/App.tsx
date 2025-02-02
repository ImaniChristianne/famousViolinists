import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import { artists } from './data/artists';
import ArtistDetails from './components/ArtistDetails';

const Container = styled.div`
  text-align: center;
  background-color: #f0f8ff;
  color: #333;
  padding: 20px;
`;

const ArtistCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 300px;
  display: inline-block;
`;

const ArtistImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <h1>Famous Violinists</h1>
        <Routes>
          <Route path="/" element={
            <div>
              {artists.map((artist, index) => (
                <ArtistCard key={index}>
                  <h2>{artist.name}</h2>
                  <ArtistImage src={artist.image} alt={artist.name} />
                  <Link to={`/artist/${index}`}>
                    <Button>Learn more about {artist.name}</Button>
                  </Link>
                </ArtistCard>
              ))}
            </div>
          } />
          <Route path="/artist/:id" element={<ArtistDetails />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
