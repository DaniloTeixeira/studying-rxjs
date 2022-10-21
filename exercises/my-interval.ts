/* 
  -> Criar uma função que tem um parametro que é a quantidade de milissegundos
  Ela deve retornar um observable que vai emitir um valor sequencial numerico a cada milisegundos
  * Não usar o timer, interval ou qlq coisa nesse sentido
  * Usar o objeto Observable
*/

import { Observable } from 'rxjs';


function myInterval(miliseconds: number): Observable<number> {
  let counter = 0;

  return new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next(counter++);
    }, miliseconds);
  });
}

myInterval(1000).subscribe(console.log);
