import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PlayerSaka from "./pageSaka/playerSaka";
import PlayerBruno from "./pageBruno/playerBruno";
import PlayerHaaland from "./pageHaaland/playerHaaland";
import PlayerRicharlison from "./pageRicharlison/playerRicharlison";
import PlayerWatkins from "./pageWatkins/playerWatkins";
import sakaImg from "./components/saka.jpg";
import watkinsImg from "./components/watkins.jpg";
import richarlisonImg from "./components/richarlison.jpg";
import brunoImg from "./components/bruno.jpg";
import haalandImg from "./components/haaland.jpg";
import JezImg from "./components/Jez.jpg";
import sound from "./components/sound.mp3"; // Import the sound file

function App() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    username: "",
    team: "",
    player: "",
    review: "",
    password: "",
  });

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch("http://localhost:8080/player_review");
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/player_review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    });

    const data = await response.json();
    setReviews((prevReviews) => [...prevReviews, data]);
    setNewReview({
      username: "",
      team: "",
      player: "",
      review: "",
      password: "",
    });
  };

  const handleDelete = async (id) => {
    const enteredPassword = prompt("Enter the password to confirm deletion:");

    const response = await fetch(`http://localhost:8080/player_review/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: enteredPassword }),
    });

    if (response.ok) {
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== id)
      );
    } else {
      alert(
        "Incorrect password or you do not have permission to delete this review."
      );
    }
  };

  // Function to play sound
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Players</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Player Reviews</h1>

                <div className="players">
                  <Link to="/playerSaka" className="player-card">
                    <img src={sakaImg} alt="Saka" />
                    <h4>Saka</h4>
                  </Link>
                  <Link to="/playerWatkins" className="player-card">
                    <img src={watkinsImg} alt="Watkins" />
                    <h4>Watkins</h4>
                  </Link>
                  <Link to="/playerRicharlison" className="player-card">
                    <img src={richarlisonImg} alt="Richarlison" />
                    <h4>Richarlison</h4>
                  </Link>
                  <Link to="/playerBruno" className="player-card">
                    <img src={brunoImg} alt="Bruno Fernandes" />
                    <h4>Bruno Fernandes</h4>
                  </Link>
                  <Link to="/playerHaaland" className="player-card">
                    <img src={haalandImg} alt="Haaland" />
                    <h4>Haaland</h4>
                  </Link>
                  <div className="player-card" onClick={playSound}>
                    <img src={JezImg} alt="Jez" />
                    <h4>Jez</h4>
                  </div>
                </div>

                <div className="bottom-section">
                  <div className="review-form">
                    <h2>Add Your Review</h2>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="username"
                        value={newReview.username}
                        onChange={handleChange}
                        placeholder="Your Username"
                        required
                      />
                      <input
                        type="text"
                        name="team"
                        value={newReview.team}
                        onChange={handleChange}
                        placeholder="Team"
                        required
                      />
                      <input
                        type="text"
                        name="player"
                        value={newReview.player}
                        onChange={handleChange}
                        placeholder="Player"
                        required
                      />
                      <textarea
                        name="review"
                        value={newReview.review}
                        onChange={handleChange}
                        placeholder="Your Review"
                        required
                      ></textarea>
                      <input
                        type="password"
                        name="password"
                        value={newReview.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                      />
                      <button type="submit">Submit Review</button>
                    </form>
                  </div>

                  <div className="reviews-list">
                    {reviews.map((review) => (
                      <div className="review-card" key={review.id}>
                        <div className="review-header">
                          <h3>{review.player}</h3>
                          <p>By {review.username}</p>
                        </div>
                        <p>{review.review}</p>
                        <button onClick={() => handleDelete(review.id)}>
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/playerSaka" element={<PlayerSaka />} />
          <Route path="/playerBruno" element={<PlayerBruno />} />
          <Route path="/playerHaaland" element={<PlayerHaaland />} />
          <Route path="/playerRicharlison" element={<PlayerRicharlison />} />
          <Route path="/playerWatkins" element={<PlayerWatkins />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
