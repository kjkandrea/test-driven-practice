# React boilerplate

![logo](./src/shopby-emoji.gif)

react-boilerplate 는 사내 향후 React 프로젝트에서 셋업을 간편하게 하고자 만들어졌습니다.

## start

### develop

다음 명령어를 통해 esbuild 를 실행하면 esbuild 가 변경상태를 감시합니다.

```
yarn dev
```

esbuild 가 준비되었다면, 다음 명령어를 통해 런타임 실행이 가능합니다.

```
yarn start
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
