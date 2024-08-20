const arena = document.querySelector('.arena');

const generateNumbers = (from, to) => {
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
};

const createSectorSeats = () =>
  generateNumbers(1, 10)
    .map(
      seatNumber => `
    <div 
      class="sector__seat" 
      data-seat-number="${seatNumber}"
    ></div>
  `,
    )
    .join('');

const createSectorLines = () =>
  generateNumbers(1, 10)
    .map(
      lineNumber => `
    <div 
      class="sector__line" 
      data-line-number="${lineNumber}"
    >${createSectorSeats()}</div>
  `,
    )
    .join('');

const createArena = () => {
  arena.innerHTML = generateNumbers(1, 3)
    .map(
      sectorNumber => `
    <div 
      class="sector" 
      data-sector-number="${sectorNumber}"
    >${createSectorLines()}</div>
  `,
    )
    .join('');
};

createArena();

const board = document.querySelector('.board__selected-seat');

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seat = event.target.dataset.seatNumber;
  const line = event.target.closest('.sector__line').dataset.lineNumber;
  const sector = event.target.closest('.sector').dataset.sectorNumber;
  board.textContent = `S ${sector} - L ${line} - S ${seat}`;
};

arena.addEventListener('click', onSeatSelect);
