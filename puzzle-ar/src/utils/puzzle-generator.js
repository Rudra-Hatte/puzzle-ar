export function generatePuzzle(image, rows, cols) {
    const puzzlePieces = [];
    const pieceWidth = image.width / cols;
    const pieceHeight = image.height / rows;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * pieceWidth;
            const y = row * pieceHeight;
            const piece = {
                x: x,
                y: y,
                width: pieceWidth,
                height: pieceHeight,
                id: `${row}-${col}`
            };
            puzzlePieces.push(piece);
        }
    }

    return shuffleArray(puzzlePieces);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}