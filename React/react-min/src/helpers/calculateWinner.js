export default function calculateWinner(squares) {
    const lines = [
        {indexes:[0, 1, 2], css: 'r1'},
        {indexes:[3, 4, 5], css: 'r2'},
        {indexes:[6, 7, 8], css: 'r3'},
        {indexes:[0, 3, 6], css: 'c1'},
        {indexes:[1, 4, 7], css: 'c2'},
        {indexes:[2, 5, 8], css: 'c3'},
        {indexes:[0, 4, 8], css: 'd1'},
        {indexes:[2, 4, 6], css: 'd2'}
    ];
    let result = null;
    lines.forEach(line => {
        const [a, b, c] = line.indexes;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            result = {
                winner: squares[a],
                css:    line.css
            };
            return false;
        }
        return true;
    });
    console.log(result)
    return result;
}