import { useEffect, useState } from "react";

type SongType = {
  artistName: string;
  trackName: string;
  trackId: number;
};

const JsIspit = () => {
  const [songData, setSongData] = useState<SongType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  const getSongs = (term: string) => {
    fetch(`https://itunes.apple.com/search?term=${term}&entity=song`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data.results);
        setSongData(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="song">
        <h1>JavaScript ispit</h1>
        <div>
          <input onChange={(e) => setInputValue(e.target.value)} type="text" />
          <button
            onClick={() => {
              getSongs(inputValue);
              setLoading(true);
            }}
          >
            Search
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Ime umjetnika</th>
              <th>Ime pjesme</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              "Loading..."
            ) : songData.length > 0 ? (
              songData.map((song: SongType) => {
                return (
                  <tr key={song.trackId}>
                    <td>{song.artistName}</td>
                    <td>{song.trackName}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Ne postoji umjetnik s ovim imenom.</td>
                <td>Ne postoji pjesma s ovim imenom.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JsIspit;
