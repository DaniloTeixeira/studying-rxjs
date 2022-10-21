/* 
    -> Criar função que recebe uma Promise como parâmetro e emite o valor da Promise como Observable 
    Não utilizar o from nem nenhum operador, apenas o objeto Observable
*/

import { Observable } from "rxjs";

function emitPromiseAsObservable<T>(promise: Promise<T>): Observable<T> {
    return new Observable(subscriber => {
        promise.then((result) => subscriber.next(result))
    })
}

const asyncMsg = new Promise(resolve => resolve('RxJS is awesome!'));

emitPromiseAsObservable(asyncMsg).subscribe(console.log);