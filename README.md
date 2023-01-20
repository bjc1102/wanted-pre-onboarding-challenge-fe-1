# wanted-pre-onboarding-challenge-fe-1

# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
    - 수정모드를 유지해야한다
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

<hr/>

## 진행하기전 고민했던 부분들

- 간단할 거라 생각해서 상태관리 라이브러리, context를 사용하지 않고 Props로 폴더와 컴포넌트 구조를 나눠보면서 폴더 구조,컴포넌트 구조 대해 이해를 하고 이후에 React-query로 리팩토링을 진행해보고자 하였습니다.

## 트러블 / 해결해야할 부분

- useForm type을 정의해주는 문제 등, Todo 형식으로 들어오는 데이터의 타입을 사용하는데 있어서 깔끔하게 정리하지 못했다고 생각해서 그 부분을 해결해볼 예정입니다.
- props drilling에 대해 생각해보게 되었습니다. 이 정도면 상태관리 도구를 써야하는건지 아닌건지 애매했는데 결국 사용하지 않고 구현을 했습니다. 그래서 구조를 제대로 설계 했는가에 대한 고민을 가지게 되었습니다.
- 관심사 분리에 대해 알아보게 되었습니다. 위 문제와 비슷한데 구현한 코드에서 하나의 컴포넌트에 많은 props가 전달되어 기능이 독립적이지 못하다는 느낌을 받았고 해결해야할 부분이라고 생각하였습니다.

## 새롭게 배운 것들

- custom hook을 통해 중복된 change 함수, state들을 관리할 수 있었고 더 유사한 기능들끼리 묶을 수 있었습니다.
- 기능 명세서를 잘 읽으면서 구현해야할 필요가 있다고 느꼈습니다. 막상 구현을 하고보니 구현되었어야할 부분이 제대로 구현되지 않았다는 느낌을 받아 조금 더 세세하게 읽어야겠다고 생각하였습니다.

