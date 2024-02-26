# React-Setting

## React Router

### Adding a Router

- 우선, Browser Router를 생성하여, 클라이언트 사이드의 라우팅을 활성화 해야한다
    - createBrowserRouter에 path, element값을 넣은 객체 배열을 인자로 넣어주어야 한다
        - `path`, `element` 이외에도 loader, id, action, handle 등의 값을 지정하여 사용할 수도 있다
```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Here is "/" </div>
    }
])

function App () {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
```

- 첫번째 라우터는 `root router`로 불린다
- 나머지 라우터는 `root router`안에서 동작한다
- `root router`는 `root layout`역할을 할 수 있다

### The Root Route

- 전역 레이아웃을 적용할 수 있음

### Handling Not Found Errors

- 에러페이지 핸들링을 할 수 있다
- 데이터 로딩, 데이터 변경시 렌더링 오류가 발생할 경우 Error 핸들링을 할 수 있다
- `useRouteError`는 발생된 에러를 반환한다
- `errorElement` 속성을 추가하여 Error 핸들링을 할 수 있다
    - 현재로선 지정하지 않은 URL로 요청을 했을 경우 `Not Found`를 반환할 수 있다
        - 무한 로딩(스피너), 응답하지 않는 페이지, 빈 페이지 등이 나오는 대신에 error 컴포넌트가 나오게 된다
    - 추후에 다른 에러들에 대한 핸들링도 추가로 학습이 필요하다


```js
import { createBrowserRouter } from 'react-router-dom';
import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1>Error Page</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
        errorElement: <ErrorPage />
    }
])
```