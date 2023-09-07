/*
    == ---- igual ----- a==b ---- verdadeiro se for igual a b

    === ----- identico ---- a===b ---- verdadeiro se a for identico a b

    !== ----- não-identico ---- a !==b ---- verdadeiro se a nao for identico a b

    != ----- diferente ----- a != b ---- verdadeiro se o a for diferente de b

    <  ----- menor que  ----- a < b ---- verdadeiro quando a for menor que b

    <= ---- menor igual que  ---- verdadeiro quando a for menor ou igual a b

    > ---- maior i que ---- verdadeiro quando a for maior ou igual a b

    >= ---- mairo igual que ---- a >= b ---- verdadeiro quando a for maior ou igual a b
*/

// const a = 3
// const b = 3

//  console.log(a >= b)

//  Tabela do E and //

     const a = 3
     const b = 3

    //  console.log(a === b && a <= b)

    //  // V e V =V

    //  console.log(a === b && a < b)
    // // V e F = F

    // console.log(a > b && a === b)
    // // F e V = F

    // console.log(a > b && a < b)
    // // F e F =F


    // /*
    // OR
    // */

    // console.log(a === b || a <= b)
    // // V ou V = V

    // console.log(a === b || a < b)
    // // V ou F = V

    // console.log(a > b || a === b)
    // // F ou V = V

    // console.loh(a > b || a < b)
    // // F ou F = F

    /*
    NOT
    */
    
    console.log(!(a === b)) //false

    console.log(!(a < b)) // true