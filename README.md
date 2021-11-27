# test-driven-practice

관심사의 분리 (Separation of Concerns)

관심사의 분리는 프로그램을 관심사 별로 쪼개서 가능하면 
한 번에 한 가지 걱정만 함으로써 프로그램 개발과 유지보수 시의 복잡성을 줄이자는 것입니다. 

관심사의 분리가 잘 이뤄지면, 개별 부문을 이해하기 쉽고, 각 부문을 재사용할 수 있게 되며, 
한 부문을 개선하거나 수정할 때 다른 부문에 대해 자세히 알 필요가 없어지고,
다른 부문이 변하는 것에도 신경 쓸 필요가 없어지는 장점이 있습니다.

React 의 관심사 : State Reflection 
Redux 의 관심사 : 상태 변경

React 가 상태 변경을 다이렉트로 감지해야 할까? No. Container 를 두면 된다!

## 내 실무에선 어떻게?

red => green => refactor => red => green => refactor => ... 

1. rxjs 데이터스트림 구현하기전에 rxjs test 작성 (ts로 하다보니 겁나 짜증남)
2. rxjs 구현

* 테스트코드에 type 신경쓰기 싫으니깐 js로 작성
* `mockImplementation`, `jest.fn()` 적극 활용
* 실제 request 날리지말고 학습한것처럼 mock 으로 테스트

그리고 실습에서 Container(Model 과 View 이어주는 Controller 역할) 만든것처럼
프레젠테이션 컴포넌트랑 관심사 분리 가능할지 고민. 

테스트는 전부 한글로 작성 ( 우리 팀이 볼꺼니깐 보기 쉽게, 나도 작성하기 쉽게 )

## Test Code 는 뭘까?

TDD 는 만능이 아니다!!

* 지뢰 탐지기
* 과감한 리팩토링 도우미
* 예제로써의 스팩 역할. 테스트 코드로 사용례를 제시함으로서 스팩 파악에 용이하다!!

> ✨ 미래의 고통을 지금으로 가져오는 기술 ✨

## start

### develop

다음 명령어를 통해 esbuild 를 실행하면 esbuild 가 변경상태를 감시합니다.

```
yarn dev
```

esbuild 가 준비되었다면, 다음 명령어를 통해 런타임 실행이 가능합니다.

```
yarn serve
```

### build

```
yarn build
```


## 알려진 문제

대부분은 esbuild 의 이슈입니다.

* 모듈번들러의 문제로 `esbuild` target 을 `ES6` 이하로 설정할 수 없습니다. 
이는 [ES6 을 지원하지 않는 브라우저](https://caniuse.com/es6) 에 대한 별도설정이 불가능함을 의미합니다.
* `esbuild`로 대체되었으므로 webpack 생태계를 사용할 수 없습니다. 절충안으로 webpack + [esbuild-loader](https://github.com/privatenumber/esbuild-loader) 사용을 고려해볼 수 있습니다.
* `esbuild`는 빌드 시 typescript 유형검사를 하지않습니다.
