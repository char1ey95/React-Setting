# React-Setting

## React Router

### Adding a Router

- 우선, Browser Router를 생성하여, 클라이언트 사이드의 라우팅을 활성화 해야한다
    - createBrowserRouter에 path, element값을 넣은 객체 배열을 인자로 넣어주어야 한다
        - `path`, `element` 이외에도 loader, id, action, handle 등의 값을 지정하여 사용할 수도 있다
```jsx
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


```jsx
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

### Nested Routes

- Root Layout 적용을 위해서 중첩 라우팅을 사용해야한다
- children 속성을 통해 중첩라우팅을 작성하고, Outlet을 통해서 자식 속성이 나타날 위치를 지정한다

```jsx
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />
            }
        ]
    }
])
```

```js
import { Outlet } from 'react-router-dom';

export default function Root(){
    return(
        <>
            {/* 사용중인 다른 컴포넌트들... */}
            <Outlet />
        </>
    )
}
```


### Client Side Routing

<br />

현재 작성된 코드로 사이드 바의 버튼을 클릭하면 React-Router를 사용하지 않고, URL에 대한 요청을 진행한다.

<br />

Client Side Routing(Link 컴포넌트)를 사용하면 URL에 대한 요청없이 해당 화면을 사용할 수 있다.

- a 태그로 작성된 컴포넌트를 Link 태그로 변경, href 속성 또한 to 속성으로 변경해주면 적용할 수 있다.
- Link로 코드를 변경하게되면 더 이상 URL로 요청을 보내지 않는 것을 알 수 있다.

```jsx
import { Link } from 'react-router-dom';

/* a 태그로 작성된 코드를 Link 컴포넌트로 변경해주면 Client Side Routing을 진행할 수 있다
 *
 * <a href={`/contacts/1`}>Your Name</a>
 */

<Link to={`/contacts/1`}>Your Name</Link>

```

### Loading Data

- URL Segment(path), Layouts(Components), Data 들이 서로 매칭되어 있으며, 이러한 점을 이용해 React-Router는 데이터를 쉽게 가져올 수 있다(GET 요청)
- `loader`와 `useLoaderData`를 이용하여 데이터를 로드할 수 있다
    - `loader`에 데이터를 요청하는 함수를 지정하면 해당 path의 컴포넌트가 열리기 전에 실행이 된다
    - 가져온 데이터를 `useLoaderData`를 이용하여 해당 페이지에서 사용할 수 있다
    - loader를 추가한 컴포넌트에서 사용이 가능하며, Nested 경로에 해당하는 컴포넌트라고 하더라도 해당 데이터를 사용할 수 없다
- 가져온 데이터를 UI와 동기화 시키기가 간단하다