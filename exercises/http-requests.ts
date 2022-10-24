// Criar uma classe que execute as requisições HTTP, utilizando axios ou ajax(RxJS)

import { map, Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

// Criando as interfaces
interface Post extends CreatePostPayload {
  id: number;
}

interface CreatePostPayload {
  userId: number;
  title: string;
  body: string;
}

// Criando a classe com os métodos HTTP
class MyHttpClass {
  getPosts(url: string): Observable<Post[]> {
    return ajax.getJSON(url);
  }

  createPost(
    url: string,
    payload: CreatePostPayload
  ): Observable<AjaxResponse<Post>> {
    return ajax({
      method: 'POST',
      url,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        payload,
      }),
    });
  }

  editPost(url: string, payload: Post): Observable<AjaxResponse<Post>> {
    const _url = `${url}/${payload.id}`;

    return ajax({
      method: 'PUT',
      url: _url,
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        payload,
      }),
    });
  }

  deletePost(url: string, id: number): Observable<any> {
    const _url = `${url}/${id}`;

    return ajax({
      method: 'DELETE',
      url: _url,
    });
  }
}

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

// Instanciando a classe
const http = new MyHttpClass();

// GET
http.getPosts(baseURL).subscribe((data) => console.log('GET', data));

// POST
function getCreatePostPayload(): CreatePostPayload {
  return {
    userId: 1,
    title: 'Primeiro post',
    body: 'Este é meu primeiro post',
  };
}

http
  .createPost(baseURL, getCreatePostPayload())
  .pipe(map((r) => r.response))
  .subscribe((data) => console.log('POST', data));

// PUT
function getEditPostPayload(): Post {
  return {
    id: 1,
    userId: 1,
    title: 'Alterando meu primeiro post',
    body: 'Meu primeiro post com conteúdo alterado',
  };
}

http
  .editPost(baseURL, getEditPostPayload())
  .pipe(map((r) => r.response))
  .subscribe((data) => console.log('PUT', data));

// DELETE
http
  .deletePost(baseURL, 1)
  // .pipe(map((r) => r.response))
  .subscribe((data) => console.log('DELETE - ', 'Post Deletado com sucesso!'));
