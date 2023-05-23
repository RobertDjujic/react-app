import { useEffect, useState } from "react";

type SongType = {
  artistName: string;
  trackName: string;
  trackId: number;
};

const JsIspit = () => {
  const [error, setError] = useState("");
  const [songData, setSongData] = useState<SongType[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  const getSongs = (term: string) => {
    fetch(`https://itunes.apple.com/search?term=${term}&entity=song`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(res.statusText);
          setSongData(null);
        }
      })
      .then((data) => {
        setError("");
        setSongData(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="song">
        <h1>JavaScript ispit</h1>
        <div>
          <input onChange={(e) => setInputValue(e.target.value)} type="text" />
          <button
            onClick={() => {
              setLoading(true);
              getSongs(inputValue);
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
            ) : songData ? (
              songData.map((song, index) => {
                return (
                  <tr key={index}>
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
