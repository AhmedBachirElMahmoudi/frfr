const Hero = ({searchResults}) => {
  return (
    <div>
      <ul>
        {searchResults?.map((track) => (
          <>
            <li key={track?.id}>{track?.name}</li>
            <iframe
              src={`https://open.spotify.com/embed/track/${track.id}`}
              width="300"
              height="200"
              frameBorder={0}
              allowTransparency={true}
              allow="encrypted-media"
            ></iframe>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
