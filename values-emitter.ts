/* 
    -> Criar um Observable que emite os valores 1,2,4,8,16 em seguencia infinatente 
*/

import { interval, map, scan } from "rxjs";

interval(1000).pipe(
    map(value => value +1),
    scan(number => number + number),
).subscribe(console.log)