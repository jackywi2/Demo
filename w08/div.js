function changeVideo(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<iframe width="894" height="596" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML = `<iframe width="894" height="596" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      player.innerHTML = `<iframe width="894" height="596" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      player.innerHTML = `<iframe width="894" height="596" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      player.innerHTML = `<iframe width="894" height="596" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}

function changeColor(index) {
  const p = document.querySelector('#section');
  switch (index) {
    case 1:
      p.style.backgroundColor = 'yellow';
      break;
    case 2:
      p.style.backgroundColor = 'green';
      break;
    case 3:
      p.style.backgroundColor = 'red';
      break;
  }
}

function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<img src="./TKU1.png" style="width: 100%; height: 50rem" />`;
      break;
    case 2:
      player.innerHTML = `<img src="./TKU2.png" style="width: 100%; height: 50rem" />`;
      break;
    case 3:
      player.innerHTML = `<img src="./TKU3.png" style="width: 100%; height: 50rem" />`;
      break;
    case 4:
      player.innerHTML = `<img src="./TKU4.png" style="width: 100%; height: 50rem" />`;
      break;
    case 5:
      player.innerHTML = `<img src="./TKU5.png" style="width: 100%; height: 50rem" />`;
      break;
  }
}
