---
title: "O que é o Redux?"
date: "2022-02-18"
image: redux.png
excerpt: Redux é uma lib responsável por gerir os estados globais da aplicação, estados que afetam todos ou vários componentes na árvore.
isFeatured: true
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

- Local State
