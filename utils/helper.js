export const fillAdpPicks = (numberOfTeams) => {
  let picks = [];
  
  for (let i = 0; i < Number(numberOfTeams); i++) {
    const pick = i + 1;
    picks.push(String(pick));
  }
  return picks;
};
