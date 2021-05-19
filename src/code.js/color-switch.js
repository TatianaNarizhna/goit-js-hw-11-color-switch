const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
      start: document.querySelector('button[data-action="start"]'),
      stop: document.querySelector('button[data-action="stop"]'),
      bodyColor: document.querySelector('body'),
  }

  const TIME_DELAY = 1000;

  refs.start.addEventListener('click', startColorSwitch);
//   refs.stop.addEventListener('click', callback);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function randomColor () {
    const randomCol = colors[randomIntegerFromInterval(0, colors.length-1)];
   console.log(randomCol);
   
    refs.bodyColor.style.backgroundColor = randomCol;
    
};

  function startColorSwitch (e) {
    
    setInterval(() => {
        randomColor();

    }, TIME_DELAY);
  }
