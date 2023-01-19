## 서버 컴포넌트의 사용 목적

### 자동 코드 분할 (Code-splitting)

React에서는 `React.lazy()` , Next에서도 `dynamic import` 구문으로 최적화 작업을 해주어야함

서버 컴포넌트는 **동적 임포트를 자동화**

### 트리의 최상단이 아니어도 서버사이드에 접근 가능

Next.js에서 SSR은 최상단 페이지인 pages 내부에서만 `getServerSideProps` 로 서버 사이드에 접근 가능
트리의 중간에서도 서버사이드에 접근할 수 있다.

즉 어떤 부분은 서버사이드 렌더링하고 어떤 부분은 정적 생성하거나 클라이언트사이드 렌더링할 수 있음

→ 이 방법을 이용하면 data fetching을 서버단으로 이관할 수 있고 이를 통해 **페이지 로딩 속도를 개선 가능**

### 클라이언트 상태를 유지하면서 서버 컴포넌트를 가져올 수 있다.

HTML을 받아오는 서버사이드 렌더링 방식은 HTML을 바꿔끼면 클라이언트 상태가 날아간다.

하지만 서버 컴포넌트는 HTML을 바꿔끼지 않는 방식으로 클라이언트의 상태를 지키면서 데이터를 리렌더링 할 수 있음

→ 데이터 블로킹을 막을 수 있다.

NextJS에서 사실상 모든 HYDRATION이 끝나기 전에는 사용자는 보기만 할 수 있는데 이제는 HYDRATION 중인 곳에는 로딩 화면을 보여주고 화면을 사용하게 할 수 있다.

## 동작 방식

### 이전의 NEXT 동작 방식

1. 브라우저에 주소를 입력
2. get 요청을 클라이언트에서 NEXT 서버로 보내고 만약 `getServerSideProps` 내에 데이터를 fetch하는 요청이 있다면 NEXT서버는 해당 페이지에서 필요한 데이터를 NEXT서버에서 백앤드 서버로 요청한 후에 마크업에 `renderToString` 으로 **마크업(HTML)으로 만들어** 클라이언트로 보낸다. (이 마크업에는 이벤트리스너들이 적용돼있지 않다.)
3. 마크업과 함께 리액트가 번들링 된 자바스크립트 코드들을 클라이언트에 전송한다.
4. 클라이언트는 2를 통해 받은 마크업을 화면에 보여준다.(seo가 잘 되고 사용자가 빠른 화면을 볼 수 있는 이유)
5. 클라이언트는 3에서 받은 JS 파일들을 바탕으로 DOM 요소 위에서 한번 더 렌더링을 하면서 매칭이 된다. (이 과정을 Hydrate라고 부른다.)

### 서버 컴포넌트 방식

1. 브라우저에 주소를 입력
2. 서버가 렌더링 요청을 받는다.
3. 서버가 루트 컴포넌트 엘리먼트를 **JSON 형식으로 만들어** 클라이언트에 보낸다.
4. 클라이언트는 클라이언트 컴포넌트 내부에서 자식이나 props로 서버 컴포넌트를 합쳐 렌더링한다.

## 서버 컴포넌트 방식을 사용하는 NextJS 13 app방식(beta)

app 방식을 사용하면

1. `getStaticProps`
2. `getServerSideProps`
3. `getInitialProps`

사용하지 않는다.

fetch API만 이용하여 데이터를 가져오고 캐싱함

각각은 다음과 같이 매칭됨

```jsx
// 임의로 무효화 할 때까지는 요청이 캐싱 (기본값)
// (=`getStaticProps`.)
fetch(URL, { cache: 'force-cache' });

// 모든 요청을 다시 가져옴
// (=`getServerSideProps`)
fetch(URL, { cache: 'no-store' });

// 일정 시간 동안만 캐싱됨
// (=`getStaticProps` with the `revalidate`)
fetch(URL, { next: { revalidate: 10 } });
```

### 실사용 예제

```jsx
// Server Components
import SystemInfo from '../components/server-info';

// Client Components
import Story from '../components/story';
import Footer from '../components/footer';

// Utils
import fetchData from '../lib/fetch-data';
import { transform } from '../lib/get-item';

async function StoryWithData({ id }) {
  const data = await fetchData(`item/${id}`);
  const story = transform(data);
  return <Story {...story} />;
}

export default async function RSCPage() {
  const storyIds = await fetchData('topstories');

  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return <StoryWithData id={id} key={id} />;
      })}
      <Footer />
      <SystemInfo />
    </>
  );
}
```

서버 컴포넌트인 `SystemInfo` 를 클라이언트 컴포넌트인 `Footer` 와 조합해서 사용하는 것을 확인할 수 있음

## 사용해볼만한 상황

아직은 자명한 단점이 없어보이므로 안정되면 많이 도입될것으로 보임

일단 아직은 불안정한 상태이기 때문에 서비스에서 사용하는 것은 권장하지 않는다고 함

- 무거운 import를 사용하는 상황일 때
  - 서버에서 import하기 때문에 브라우저의 부담이 준다.
- 반응성을 많이 타는 서비스의 경우 (예약 등)
