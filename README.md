# YouTube API를 활용한 근현대사 웹사이트 기획안

<img src="/img/img01.png">

## 배경
근현대사에 대한 관심으로 YouTube에서 자주 영상을 시청합니다. 이에 따라 근현대사 관련 영상을 한 곳에서 편리하게 찾아볼 수 있는 웹사이트를 개발하려고 합니다.

## 작업 순서

1. **Node.js 설치 및 버전 확인**
    - Node.js를 설치하고 `node -v` 명령어로 버전을 확인합니다.

2. **폴더 구조 설정**
    - 필요 없는 파일 삭제하고 초기 설정 파일 추가합니다.
    - 프로젝트 폴더를 구성하고, 필요한 폴더와 파일을 생성합니다.

3. **각 페이지 메타 태그 설정 (HelmetProvider)**
    - SEO 최적화를 위해 React Helmet Async 라이브러리를 사용하여 각 페이지에 메타 태그를 설정합니다.

## 필요한 라이브러리 설치

- **React**
    - `npx create-react-app 폴더이름`으로 설치합니다. (폴더 이름을 생략하면 현재 폴더에 생성됩니다.)

- **React Router DOM**
    - 페이지 간의 라우팅 및 주소 설정을 위한 라이브러리입니다.
    - `npm install react-router-dom`으로 설치합니다.

- **Axios**
    - API 요청을 보내는 데 사용되는 라이브러리입니다.
    - `npm install axios`로 설치합니다.

- **React Icons**
    - 리액트 프로젝트에 아이콘을 추가하기 위한 라이브러리입니다.
    - `npm install react-icons`로 설치합니다.

- **React Player**
    - YouTube 영상을 재생하기 위한 라이브러리입니다.
    - `npm install react-player`로 설치합니다.

- **Sass**
    - CSS를 관리하기 위한 라이브러리입니다.
    - `npm install sass`로 설치합니다.

- **React Helmet Async**
    - SEO를 위한 라이브러리입니다.
    - `npm install react-helmet-async`로 설치합니다.

- **Swiper**
    - 이미지 슬라이드를 위한 라이브러리입니다.
    - `npm install swiper`로 설치합니다.

## 단축키

- **rafce**
    ```javascript
    import React from 'react';

    const Home = () => {
        return (
            <div>Home</div>
        );
    };

    export default Home;
    ```

## 리액트 문법

- `import 이름 from '경로'` : 리액트에서 컴포넌트를 다른 파일에서 불러와서 사용할 때 `import` 문법을 사용합니다.

## 사용 기술 스택

- **Node.js**
    - 서버를 구축하고 API 요청을 처리합니다.

- **React**
    - 사용자 인터페이스를 구현합니다.

- **React Router DOM**
    - 페이지 간의 라우팅 및 주소 설정을 관리합니다.

## 트러블 슈팅

- **API 요청 문제**
    - YouTube API 요청 시 발생할 수 있는 오류를 디버깅하고, 올바른 API 키를 사용하고 있는지 확인합니다.

- **라우팅 문제**
    - React Router를 사용하여 페이지 간의 이동이 제대로 이루어지지 않는 문제를 해결합니다.

- **스타일링 문제**
    - Sass를 사용하여 스타일링을 할 때 발생하는 문제를 해결하고, 브라우저 호환성을 확인합니다.

## 프로젝트 설정 파일

```json
{
  "name": "youtube_att",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.2.1",
    "react-player": "^2.16.0",
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "sass": "^1.77.6",
    "swiper": "^11.1.4",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
<img src="/img/img02.png">
<img src="/img/img03.png">
<img src="/img/img04.png">

이 기획안을 바탕으로, YouTube API를 활용한 근현대사 웹사이트를 개발하여 사용자들이 쉽게 관련 영상을 찾아보고 감상할 수 있는 플랫폼을 구축했습니다.