/* 
    -> Criar função que recebe uma Promise como parâmetro e emite o valor da Promise como Observable 
    Não utilizar o from nem nenhum operador, apenas o objeto Observable
*/

import { Observable } from "rxjs";

function convertPromiseToObservable<T>(promise: Promise<T>): Observable<T> {
    return new Observable(subscriber => {
        promise.then((result) => subscriber.next(result))
    })
}

const asyncMsg = new Promise(resolve => 
        resolve('I use to be a Promise, but the times changes, so now I am a Observable'));

convertPromiseToObservable(asyncMsg).subscribe(console.log);