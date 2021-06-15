# game-boilerplate



[TOC]

## 目的

javascript でゲーム開発用のボイラーテンプレートを作成する
技術検証を兼ねる

## フレームワーク、ライブラリ

・追加済

- electron

- react

- redux

- typescript

- node.js

- pixi.js

  

・追加予定

- three.js

## 実装予定機能

- ビジュアルノベル
- ローグライク

## フロントエンド環境構築

### electron-forge

デスクトップアプリケーションの作成に使用する

electron + react + typescript のボイラーテンプレートを使用する

```
git clone --depth 1 --single-branch https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
cd your-project-name
yarn
```

> https://github.com/electron-react-boilerplate/electron-react-boilerplate > https://electron-react-boilerplate.js.org/docs/installation

electron api

> https://www.electronjs.org/docs/api



### redux

storeを管理しやすくする、手続き的な管理により予期せぬstoreの変更を防止する

```
yarn add redux react-redux
```



### pixi.js,pixi-react

ゲームスプライトの描画、アニメーションに使用する

```
yarn add pixi.js @inlet/react-pixi
```

> https://reactpixi.org/

> https://pixijs.download/dev/docs/index.html