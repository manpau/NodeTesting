var points = 0;
const pointsElement = document.getElementById('points');

function formGame() {
    var text = document.getElementById('text').value;   
  
    if (text != '') {
        points++;
        pointsElement.innerHTML = `points: ${points}`;
        document.getElementById('myForm').reset();
    } else {
        document.body.innerHTML= ('You loose >:C             (refresh to try again)');
        document.body.style.color = 'white';
    }
}