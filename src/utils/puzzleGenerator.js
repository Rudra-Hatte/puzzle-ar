export const generatePuzzlePieces = (imageSrc, rows, cols) => {
  const pieces = [];
  const totalPieces = rows * cols;
  
  for (let i = 0; i < totalPieces; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    
    pieces.push({
      id: `piece-${i}`,
      image: imageSrc,
      correctIndex: i,
      backgroundPosition: `-${col * (100 / (cols - 1))}% -${row * (100 / (rows - 1))}%`,
      row: row,
      col: col
    });
  }
  
  return pieces;
};

export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};