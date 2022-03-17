const ranked = [100, 90, 90, 80, 75, 60];
const player = [50, 65, 77, 90, 102];

function climbingLeaderboard(ranked, player) {
    // get the unique ranks sorted descending
    ranked = Array.from(new Set(ranked));

    const playerRanks = [];
    for (const score of player) {
        while (score >= ranked[ranked.length - 1]) 
        ranked.pop();
        playerRanks.push(ranked.length + 1); 
    }
    return playerRanks;
}

console.log(climbingLeaderboard(ranked, player));
// output: 6 5 4 2 1
