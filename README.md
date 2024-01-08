# next-login-logic

Next.js를 활용한 로그인 로직 구현

<br>

- [next-login-logic](#next-login-logic)
  - [1. 프로젝트 생성](#1-프로젝트-생성)
  - [2. 프로젝트 실행](#2-프로젝트-실행)
  - [3. 프로젝트 구조](#3-프로젝트-구조)
  - [4. 사용 라이브러리 및 프레임워크](#4-사용-라이브러리-및-프레임워크)
  - [5. 전제조건](#5-전제조건)
  - [6. 디자인](#6-디자인)
  - [7. Next.js](#7-nextjs)
  - [기능 명세](#기능-명세)
  - [화면 설계](#화면-설계)
  - [ERD 설계](#erd-설계)
  - [References](#references)

<br>

## 1. 프로젝트 생성

```bash

```

<br>

## 2. 프로젝트 실행

```bash

```

<br>

## 3. 프로젝트 구조

```bash

```

<br>

## 4. 사용 라이브러리 및 프레임워크

- [x] UI 컴포넌트 라이브러리: shadcn.ui
- [x] CSS 프레임워크: tailwindcss

<br>

## 5. 전제조건

- [ ] Node.js 18.17 이상

<br>

## 6. 디자인

피그마 커뮤니티의 SnowUI와 shadcn.ui 등을 참고하여 페이지를 구현하고자 노력했습니다.

- [x] 아이콘: [React Icons](https://react-icons.github.io/react-icons/)
- [x] 피그마 커뮤니티: [DashBoard UI Kit: SnowUI](https://www.figma.com/file/PAA0JKidFMVK44KRRWB1zL/SnowUI?type=design&node-id=12779-67346&mode=design&t=T2rJRPpjuveJgwS5-0)
- [x] 로그인 페이지 예시
  - [Intercom](https://app.intercom.com/admins/sign_in)
  - [Webflow](https://webflow.com/dashboard/login)

<br>

## 7. Next.js

- [x] Next.js App Router
  - Next.js는 파일 시스템 기반 라우팅을 사용하여, pages 디렉토리 내의 파일 구조를 기반으로 라우트를 자동으로 생성합니다. 그러나, Next.js 12 버전부터는 app 디렉토리를 도입하여 라우팅 및 페이지 구성에 대한 새로운 컨벤션을 제공하고 있습니다
    - Next.js 12 버전에서는 app 디렉토리에 대한 초기 개념이 소개되었지만, App Router와 관련된 모든 기능들은 Next.js 13 버전에서 완전히 구현되었습니다.
    - **pages 디렉토리 (기존 방식)**:
      - pages 디렉토리는 각 파일이 하나의 라우트로 매핑됩니다.
      - 파일 이름과 경로가 URL에 직접 반영됩니다.
      - 동적 라우팅을 위해 파일 이름에 대괄호([])를 사용합니다.
      - API 라우트는 pages/api 내에서 정의됩니다.
    - **app 디렉토리 (Next.js 12 이후 새로운 방식)**:
      - app 디렉토리는 더 세밀한 라우팅과 페이지 구성을 가능하게 합니다.
      - layout, page, loading, error 등과 같은 특별한 파일을 사용하여 특정 동작을 정의합니다.
      - 페이지와 관련된 로직을 모듈화하고 재사용성을 높일 수 있습니다.
      - 개별 페이지에 대한 레이아웃이나 로딩 UI 등을 세그먼트별로 쉽게 관리할 수 있습니다.

## 기능 명세

<br>

## 화면 설계

<br>

## ERD 설계

<br>

## References

- [Next.js 공식문서](https://nextjs.org/docs/getting-started)
  - [Next.js 블로그, Next.js 13](https://nextjs.org/blog/next-13)
  - [Next.js 블로그, Next.js 12](https://nextjs.org/blog/next-12)
  - [Next.js 공식문서, App Router](https://nextjs.org/docs/app)
  - [Next.js 공식문서, File convention](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)
- [UI 컴포넌트 라이브러리: shadcn.ui](https://ui.shadcn.com/docs)
- [피그마 공식문서](https://www.figma.com/)
- [피그마 커뮤니티](https://www.figma.com/community)
