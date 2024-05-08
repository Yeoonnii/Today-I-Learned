# day17_project 과제 : 연락처 앱(Contact List) 프로젝트에 Context 적용하기

## 미션 소개

연락처 앱(Contact List) 프로젝트 최적화하기

### 요구사항

### Context를 사용하도록 프로젝트 업그레이드하기

Day 17 진도에서 배우는 React의 Context를 사용해 프로젝트를 업그레이드 해 주세요

- `App` 컴포넌트의 `contacts` State를 공급할 Context 객체를 하나 생성하세요
- `App` 컴포넌트의 `onCreateContact`, `onRemoveContact`를 공급할 Context 객체를 하나 생성하세요

- ContactEditor 컴포넌트가 Context 객체로부터 onCreateContact 함수를 공급받도록 수정하세요
- ContactList 컴포넌트가 Context 객체로부터 contacts State를 공급받도록 수정하세요
  - 이 컴포넌트에서 Props로 공급받던 onRemoveContact함수는 이제 더이상 필요하지 않습니다.
- ContactItem 컴포넌트가 Context 객체로부터 onRemoveContact 함수를 공급받도록 수정하세요
