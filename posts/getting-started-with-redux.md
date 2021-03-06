---
title: "O que é o Redux?"
date: "2022-02-18"
image: redux.png
excerpt: Redux é uma lib responsável por gerir os estados globais da aplicação, estados que afetam todos ou vários componentes na árvore.
isFeatured: false
---

Você com certeza, já precisou "levantar um estado" para o arquivo \_app, ou outro 'parent component' qualquer, só para, de lá, distribuir as props para os componentes que realmente precisavam delas.

Também já deve ter passado props por diversos componentes sem necessidade, por que o último componente, lá no fim do galho, precisava dela.

**Agindo assim, você força diversos componentes a renderizarem, sem necessidade, tornando a aplicação mais lenta.**

## Veja na imagem abaixo a forma como os estados se propagam sem o uso do Redux, a esquerda:

O componente em azul muda e isso desencadeia uma mudança em quase toda a árvore da aplicação, renderizando componentes, e sujando o código, sem necessidade.

![Redux Schema](redux-1.png)

## Agora preste atenção na imagem a direita, usando Redux para centralizar e gerir o estado da aplicação:

O componente muta, envia a informação apenas para o Store - Redux -, e de lá a informação é enviada somente para os componentes que precisam dela. Além de melhorar a organização do código, aumentar a escalabilidade da aplicação, ajuda também no desempenho da mesma.

# E agora? Quais estados devem ser geridos localmente, e quais devem ser geridos pelo redux?

Existem 3 tipos de estados:

- Local State: são coisas que podem ser geridas localmente. Ex: onChange no input, show more de um details..

- Cross-Component State: são mudanças que afetam mais de um componente e precisam passar props entre eles. Ex: close/open Modal overlay..

- App-Wide State: são mudanças que afetam todos ou quase todos componentes, e demandariam um prop drilling bem complexo. Ex: autenticação de usuário..

1. Para o primeiro caso, o ideal é usar react-hooks.
2. Para o segundo, podemos escolher entre a Context API ou Redux.
3. E já no terceiro, definitivamente devemos usar Redux, por ele ser mais performático e menos complexo.

**A Context-API não foi feita para lidar com high frequency updates.**

# Conceitos do Redux

1- Todos os estados centralizados.

2- Components se inscrevem para receber atualizações sempre que houver mudanças no estado

3- Components dispacham ações para mudar esse estado.

4- As ações são interpretadas e executadas pelo Reducer, que atualiza o estado no STORE.

5- A mudança se reflete em todos os componentes inscritos.

## Exemplo de código com Redux puro

Primeiro temos de criar o STORE e a função Reducer

```js
import { createStore } from "redux";

const initialState = { counter: 0, isVisible: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,

      counter: state.counter + action.payload,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,

      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
      ...state,
      isVisible: !state.isVisible,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
```

Depois, no index do projeto, prover esse store a toda aplicação

```js
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Agora, com o store e o provider configurados, tudo que precisamos fazer é "inscrever" para receber atualizações do Store e dispachar as ações para o Reducer.

```js
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const isVisible = useSelector((state) => state.isVisible);

  const [increaseNumber, setIncreaseNumber] = useState(0);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", payload: increaseNumber });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
   // jsx here
  );
};

export default Counter;
```

## Agora veja o mesmo código usando @reduxjs/toolkit

Store -> Slice

```js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isVisible: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default store;
```

No Provider, nada muda

```js
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

e no counter:

```js
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.isVisible);

  const [increaseNumber, setIncreaseNumber] = useState(0);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(increaseNumber));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    //.. jsx here
  );
};

export default Counter;

```

Redux/Toolkit é um grande facilitador, ele abstrai o controle do estado, mantendo sua imutabilidade, enquando nós apenas atualizamos o que precisa realmente ser atualizado.
