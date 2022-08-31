let teamA = document.getElementById("Ascore")
let scoreA = 0
let teamB = document.getElementById("Bscore")
let scoreB = 0
let periodCount = 1
let pSpan = document.getElementById('periodSpan')

function teamAaddOne(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    scoreA += 1
    teamA.textContent = scoreA
  }
}
function teamAaddTwo(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    scoreA += 2
    teamA.textContent = scoreA
  }
}
function teamAaddThree(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    scoreA += 3
    teamA.textContent = scoreA
  }
}
function teamBaddOne(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    scoreB += 1
    teamB.textContent = scoreB
  }
}
function teamBaddTwo(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    scoreB += 2
    teamB.textContent = scoreB
  }
}
function teamBaddThree(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    scoreB += 3
    teamB.textContent = scoreB
  }
}


function newGame(){
  periodCount = 1
  pSpan.textContent = periodCount
  let noneContent = ''

  // First Period
  document.getElementById('periodTdA').textContent = ''
  document.getElementById('teamTdA').textContent = ''
  document.getElementById('scoreTdA').textContent = ''
  document.getElementById('winLoseTdA').textContent = ''

  document.getElementById('periodTdB').textContent = ''
  document.getElementById('teamTdB').textContent = ''
  document.getElementById('scoreTdB').textContent = ''
  document.getElementById('winLoseTdB').textContent = ''

  // Second Period
  document.getElementById('twoperiodTdA').textContent = ''
  document.getElementById('twoteamTdA').textContent = ''
  document.getElementById('twoscoreTdA').textContent = ''
  document.getElementById('twowinLoseTdA').textContent = ''

  document.getElementById('twoperiodTdB').textContent = ''
  document.getElementById('twoteamTdB').textContent = ''
  document.getElementById('twoscoreTdB').textContent = ''
  document.getElementById('twowinLoseTdB').textContent = ''

  // third Period
  document.getElementById('threeperiodTdA').textContent = ''
  document.getElementById('threeteamTdA').textContent = ''
  document.getElementById('threescoreTdA').textContent = ''
  document.getElementById('threewinLoseTdA').textContent = ''

  document.getElementById('threeperiodTdB').textContent = ''
  document.getElementById('threeteamTdB').textContent = ''
  document.getElementById('threewinLoseTdB').textContent = ''
  document.getElementById('threescoreTdB').textContent = ''

  // Fourth Period
  document.getElementById('fourthperiodTdA').textContent = ''
  document.getElementById('fourthteamTdA').textContent = ''
  document.getElementById('fourthscoreTdA').textContent = ''
  document.getElementById('fourthwinLoseTdA').textContent = ''

  document.getElementById('fourthperiodTdB').textContent = ''
  document.getElementById('fourthteamTdB').textContent = ''
  document.getElementById('fourthscoreTdB').textContent = ''
  document.getElementById('fourthwinLoseTdB').textContent = ''

  document.getElementById('gameData').style.display = 'none'
  alert('New Basketball Scoring Created!')
}
let teamACountWin = 0
let teamBCountWin = 0
function save(){
  if(periodCount == 0){
    alert('Game is over!. Create new game for scoring start!')
  }
  else if(periodCount >= 1){
    document.getElementById('gameData').style.display = 'block'
    if(periodCount == 1)
    {
      // Home Team Variables
      let periodVarA = document.getElementById('periodTdA')
      let teamVarA = document.getElementById('teamTdA')
      let scoreVarA = document.getElementById('scoreTdA')
      let winLoseVarA = document.getElementById('winLoseTdA')

      // Guest Team Variables
      let periodVarB = document.getElementById('periodTdB')
      let teamVarB = document.getElementById('teamTdB')
      let scoreVarB = document.getElementById('scoreTdB')
      let winLoseVarB = document.getElementById('winLoseTdB')

      periodVarA.textContent = periodCount
      periodVarB.textContent = periodCount
      periodCount +=1;

      teamVarA.textContent = 'Home'
      teamVarB.textContent = 'Guest'

      scoreVarA.textContent = scoreA
      scoreVarB.textContent = scoreB
      if(scoreA > scoreB){
        winLoseVarA.textContent = 'Win'
      }
      else {
        winLoseVarA.textContent = 'Lose'
      }
      if(scoreB > scoreA){
        winLoseVarB.textContent = 'Win'
      }
      else {
        winLoseVarB.textContent = 'Lose'
      }
      pSpan.textContent = periodCount
      scoreA = 0
      scoreB = 0
      teamA.textContent = scoreA
      teamB.textContent = scoreB
    }
    else if (periodCount == 2) {
      // Home Team Variables
      let periodVarA = document.getElementById('twoperiodTdA')
      let teamVarA = document.getElementById('twoteamTdA')
      let scoreVarA = document.getElementById('twoscoreTdA')
      let winLoseVarA = document.getElementById('twowinLoseTdA')

      // Guest Team Variables
      let periodVarB = document.getElementById('twoperiodTdB')
      let teamVarB = document.getElementById('twoteamTdB')
      let scoreVarB = document.getElementById('twoscoreTdB')
      let winLoseVarB = document.getElementById('twowinLoseTdB')

      periodVarA.textContent = periodCount
      periodVarB.textContent = periodCount
      periodCount +=1;

      teamVarA.textContent = 'Home'
      teamVarB.textContent = 'Guest'

      scoreVarA.textContent = scoreA
      scoreVarB.textContent = scoreB
      if(scoreA > scoreB){
        winLoseVarA.textContent = 'Win'
      }
      else {
        winLoseVarA.textContent = 'Lose'
      }
      if(scoreB > scoreA){
        winLoseVarB.textContent = 'Win'
      }
      else {
        winLoseVarB.textContent = 'Lose'
      }
      pSpan.textContent = periodCount
      scoreA = 0
      scoreB = 0
      teamA.textContent = scoreA
      teamB.textContent = scoreB
    }
    else if (periodCount == 3) {
      // Home Team Variables
      let periodVarA = document.getElementById('threeperiodTdA')
      let teamVarA = document.getElementById('threeteamTdA')
      let scoreVarA = document.getElementById('threescoreTdA')
      let winLoseVarA = document.getElementById('threewinLoseTdA')

      // Guest Team Variables
      let periodVarB = document.getElementById('threeperiodTdB')
      let teamVarB = document.getElementById('threeteamTdB')
      let scoreVarB = document.getElementById('threescoreTdB')
      let winLoseVarB = document.getElementById('threewinLoseTdB')

      periodVarA.textContent = periodCount
      periodVarB.textContent = periodCount
      periodCount +=1;

      teamVarA.textContent = 'Home'
      teamVarB.textContent = 'Guest'

      scoreVarA.textContent = scoreA
      scoreVarB.textContent = scoreB
      if(scoreA > scoreB){
        winLoseVarA.textContent = 'Win'
      }
      else {
        winLoseVarA.textContent = 'Lose'
      }
      if(scoreB > scoreA){
        winLoseVarB.textContent = 'Win'
      }
      else {
        winLoseVarB.textContent = 'Lose'
      }
      pSpan.textContent = periodCount
      scoreA = 0
      scoreB = 0
      teamA.textContent = scoreA
      teamB.textContent = scoreB
    }
    else if (periodCount == 4) {
      // Home Team Variables
      let periodVarA = document.getElementById('fourthperiodTdA')
      let teamVarA = document.getElementById('fourthteamTdA')
      let scoreVarA = document.getElementById('fourthscoreTdA')
      let winLoseVarA = document.getElementById('fourthwinLoseTdA')

      // Guest Team Variables
      let periodVarB = document.getElementById('fourthperiodTdB')
      let teamVarB = document.getElementById('fourthteamTdB')
      let scoreVarB = document.getElementById('fourthscoreTdB')
      let winLoseVarB = document.getElementById('fourthwinLoseTdB')

      periodVarA.textContent = periodCount
      periodVarB.textContent = periodCount

      teamVarA.textContent = 'Home'
      teamVarB.textContent = 'Guest'

      scoreVarA.textContent = scoreA
      scoreVarB.textContent = scoreB
      if(scoreA > scoreB){
        winLoseVarA.textContent = 'Win'
      }
      else {
        winLoseVarA.textContent = 'Lose'
      }
      if(scoreB > scoreA){
        winLoseVarB.textContent = 'Win'
      }
      else {
        winLoseVarB.textContent = 'Lose'
      }
      periodCount = 0;
      pSpan.textContent = periodCount
      scoreA = 0
      scoreB = 0
      teamA.textContent = scoreA
      teamB.textContent = scoreB
    }
  }
}
