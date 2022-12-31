## Picking a Router

- 너의 앱이 single router 만 쓰게 될건데, 그에 반해 앱이 돌아가는동안 몇 라우터들이 환경에 따라 작동한다.

## using v6.4 data apis

- 6.4 버전에서, new data APIs 를 지원하는 새로운 라우터들이 소개됐다.

  1. [`createBrowserRouter`](https://reactrouter.com/en/6.6.1/routers/create-browser-router)
  2. [`createMemoryRouter`](https://reactrouter.com/en/6.6.1/routers/create-memory-router)
  3. [`createHashRouter`](https://reactrouter.com/en/6.6.1/routers/create-hash-router)

- 아래는 data APIs 를 지원하지 않는다

  1. [BrowserRouter](https://reactrouter.com/en/6.6.1/router-components/browser-router)
  2. [MemoryRouter](https://reactrouter.com/en/6.6.1/router-components/memory-router)
  3. [HashRouter](https://reactrouter.com/en/6.6.1/router-components/hash-router)
  4. [NativeRouter](https://reactrouter.com/en/6.6.1/router-components/native-router)
  5. [StaticRouter](https://reactrouter.com/en/6.6.1/router-components/static-router)

- 6.4 버전 이후의 새로운 routers 를 사용하는걸 추천합니다.
- 6.4 버전으로 업데이트 하는 가장 쉬운 방법은, `createRoutesFromElements` 를 이용하는 거에요. `<Route>` 요소를 route objects 로 바꿀 필요가 없어집니다.

```javascript
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='dashboard' element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## 웹개발

> 웹개발시 `createBrowserRouter` 를 사용하기를 추천합니다.

- 이건 hash url 대신에 full URL 을 사용합니다. full URL 은 SEO 에도 좋고 서버랜더링에도 좋고, 웹 플랫폼 전반적으로 호환이 됩니다.
- 정적 파일서버에 앱을 호스팅 시킨다면, 404 에러들을 피하기 위해 모든 요청을 전송하도록 index.html 을 구성해야 합니다.
- 만약 어떤 이유 때문에라 full URL 을 사용못하는 거라면, `createHashRouter` 가 두번째로 좋은 선택입니다.
- DATA API 에 관심이 없다면 하던대로 `<BrowserRouter>` 나 `<HashRouter>` 를 그대로 써도 됩니다.

## 테스팅

- DOM history API 를 필요로 사용하는 라우터 보다 React Router API 를 사용하는 테스팅 컴포넌트가 가장 쉽습니다.
- React Router API 중 몇은 `fetch` 를 사용하는데, 이건 Node.js v18 부터 지원받을 수 있습니다.
- 당신의 프로젝트가 v17 버전 이하를 쓴다면 `fetch` 를 추가해야 합니다. 이걸 하기 위한 방법중 하나가 `whatwg-fetch`를 설치하고 `jest.config.js` 파일에 다음을 추가하는 겁니다.

```javascript
module.exports = {
  setupFiles: ["whatwg-fetch"],
  // ...rest of the config
};
```
