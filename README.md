# test-driven-practice

관심사의 분리 (Separation of Concerns)

관심사의 분리는 프로그램을 관심사 별로 쪼개서 가능하면 
한 번에 한 가지 걱정만 함으로써 프로그램 개발과 유지보수 시의 복잡성을 줄이자는 것입니다. 

관심사의 분리가 잘 이뤄지면, 개별 부문을 이해하기 쉽고, 각 부문을 재사용할 수 있게 되며, 
한 부문을 개선하거나 수정할 때 다른 부문에 대해 자세히 알 필요가 없어지고,
다른 부문이 변하는 것에도 신경 쓸 필요가 없어지는 장점이 있습니다.

React 의 관심사 : State Reflection 


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
