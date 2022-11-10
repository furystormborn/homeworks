const matrix1 = [ [5, -1, 6], [-3, 0, 7] ];
const matrix2 = [ [2, 1], [-3, 0], [4, -1] ];

const multiply = (m1, m2) => {

    let rows = m1[0].length;
    let columns = m2.length;
    let common = m1.length;
    let result = new Array(rows);

    for(let row = 0; row < rows; row++) {

        result[row] = new Array();
        for(let column = 0; column < columns; column++) {
            result[row][column] = 0;
            for (let index = 0; index < common; index++) {
                result[row][column] += m1[index][row] * m2[column][index];                
            }
        }
    }

    return result;
} 

multiply(matrix1, matrix2);