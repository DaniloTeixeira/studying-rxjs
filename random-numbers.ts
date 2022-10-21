/* 
    -> Criar uma função que recebe um numero como parametro e retorna ele x 2 em formato de promise
    -> Criar uma função que recebe um numero como parametro e retorna um observable da promise da outra função
    Resultado esperado: doubleObservable(10).subscribe(console.log) // 20
    Funções: doublePromise e doubleObservable
*/

import { from, Observable } from "rxjs";

function doublePromise(value: number): Promise<number> {
    return new Promise((resolve) => resolve(value * 2));
};

function doubleObservable(value: number): Observable<number> {
    return from(doublePromise(value));
};

doubleObservable(10).subscribe(console.log)