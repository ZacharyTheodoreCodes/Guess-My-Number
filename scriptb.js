// ...
// Function to handle the player's guess
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
  
    // When there is no input
    if (!guess) {
      displayMessage("⛔️ No number!");
    } else if (guess > 20 || guess < 1) {
      displayMessage("Number between 1 and 20");
    } else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("#scoreAkhir").textContent = score;
      document.querySelector(".popup").classList.add("active");
  
      // Find the player's name based on their score
      playerName = namesArray.find((entry) => entry.score === score)?.name || "Unknown";
  
      // Save the score and name to local storage
      let leaderboardData = localStorage.getItem("leaderboard");
      let leaderboardArray = leaderboardData ? JSON.parse(leaderboardData) : [];
  
      leaderboardArray.push({ name: playerName, score: score });
  
      // Sort leaderboard by score in descending order
      leaderboardArray.sort((a, b) => b.score - a.score);
  
      // Keep only the top 5 scores
      leaderboardArray = leaderboardArray.slice(0, 5);
  
      // Save updated leaderboard to local storage
      localStorage.setItem("leaderboard", JSON.stringify(leaderboardArray));
  
      updateLeaderboard(); // Update and display the leaderboard
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // ...
        score--;
        document.querySelector("#scoreId").textContent = score;
      } else {
        // ...
      }
    }
  });
  // ...