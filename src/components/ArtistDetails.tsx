// components/ArtistDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { artists } from '../data/artists';

const ArtistDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (audioUrl: string | undefined) => {
    if (!audioUrl) {
      console.error('Audio URL is undefined');
      return;
    }
    if (currentAudio) {
      currentAudio.pause();
    }
    const audio = new Audio(audioUrl);
    setCurrentAudio(audio);
    audio.play();
  };

  useEffect(() => {
    // Cleanup function to pause audio when the component unmounts
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  if (id === undefined) {
    return <p>Artist not found.</p>;
  }

  const artist = artists[parseInt(id)];

  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.image} alt={artist.name} style={{ width: '200px' }} />
      <p>{artist.facts}</p>
      <p><strong>Famous Piece:</strong> {artist.famousPiece}</p>
      <button onClick={() => playAudio(artist.audio)}>Listen to This Artist</button>
    </div>
  );
};

export default ArtistDetails;
