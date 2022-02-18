---
title: "O que é o Redux?"
date: "2022-02-18"
image: redux.png
excerpt: Redux é um sistema de gestão de estados. Ele centraliza e administra todos os estados da aplicação
isFeatured: true
---

Redux é um **gerenciador de estados global**. Ele centraliza e gerencia todo o fluxo, toda a mudança de estado da aplicação.

Você com certeza, já precisou "levantar um estado" para o arquivo \_app, ou outro parent component qualquer, só para, de lá, distribui-lo para os componentes que realmente precisavam da sua informação.

Também já deve ter passado props por diversos componentes sem necessidade, por que o último componente, lá no fim do galho, precisava da informação.

**Agindo assim, você força diversos componentes a renderizarem, sem necessidade, tornando a aplicação bem mais lenta.**

## Veja na imagem abaixo a forma como fazemos sem o uso do Redux a esquerda:

o componente em azul muda o estado, e isso desencadeia uma mudança em quase toda a árvore da aplicação, renderizando componentes, e sujando o código, sem necessidade.

![Redux Schema](redux-1.png)

## Agora preste atenção na imagem a direita.

O componente muta, envia a informação apenas para o Store, criado com Redux, e de lá a informação é enviada somente para os componentes interessados nela. Além de melhorar e muito a organização do código, aumentar a escalabilidade, isso ajuda diretamente o desempenho da aplicação.
