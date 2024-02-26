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
