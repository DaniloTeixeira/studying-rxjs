/* 
    -> Criar função que recebe um Observable como parâmetro e emite o valor da Observable como uma Promise 
    Não utilizar o from nem nenhum operador, apenas o objeto Observable
*/

import { BehaviorSubject, Observable } from "rxjs";

function convertObservableToPromise<T>(observable: Observable<T>): Promise<T> {
    return new Promise((resolve) => {   
      observable.subscribe((result) => resolve(result))
    })
}

const obs = new BehaviorSubject<string>('I used to be an Observable, but times changes, so now I\'\m a Promise :)')

convertObservableToPromise(obs).then((r) => console.log(r));