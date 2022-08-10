<div align="center">
<!--   <img src="https://firebasestorage.googleapis.com/v0/b/hackbar-attendance.appspot.com/o/Hack.BAR.jpg?alt=media&token=4022dc38-22a1-4564-bf92-d333f1152bbb" alt="Hack.BAR Logo" width="360"> -->
  <h1>Welcome to the Hack.BAR</h1>
  <strong>Bar where engineers meet 👩🏽‍💻</strong>
  <h6>Made with ❤️ &nbsp;by developers for developers</h6>
</div>
<br>

<p align="center">
  <a href="https://twitter.com/EngineerBarKobe">
    <img src="https://img.shields.io/twitter/follow/EngineerBarKobe?color=26A0ED&label=Follow&logo=twitter&logoColor=white&style=flat" alt="Twitter">
  </a>
</p>

## 🍸 Hack.BAR 🦔

> 神戸三ノ宮駅から徒歩5分。「エンジニアが集まるバー」 Hack.BAR in hanaです。 フロント・サーバ・インフラ各業種のエンジニアが集っていろんな会話が繰り広げられます。また、パソコンを開いてお酒と共に書くコードはいかがでしょうか？？

Info at Hack.BAR:

* 📅 **オープン日**：毎週金曜・土曜 18:00 ~ 23:00
* 😈 **イベント情報**: 毎月第一・第三土曜日 19:00 ~ 20:00 海外エンジニアトークショー

<p align="center">
    <img width="1658" alt="ホームページ 2022-08-10 11 52 25" src="https://user-images.githubusercontent.com/63713624/183799843-75d5e4db-0463-4bf1-8d00-8467074cd94e.png">
    <br>
    <a href="https://hackbar.jp/"><strong>📺 Watch Homepage → </strong></a>
</p>


## セットアップ

### ① yarn の準備

まずは yarn がインストールされているか確認しましょう。ターミナルで下記コマンドを打ってバージョンが表示されたら、それ以降の手順は飛ばして OK です。

```
yarn -v
```

yarn がまだの方はインストールしましょう。yarn のインストールには npm が必要です。まずは npm が入っているか確認しましょう。

```
npm -v
```

バージョンが表示された方は下記コマンドを打って、yarn をインストールしてください。

```
npm install -g yarn
```

npm が入っていなかった方は Node.js も入っていないと思うので、まずは Node.js をインストールしてください。インストール方法はたくさんありますが、[VOLTA](https://volta.sh/)をオススメしております。VOLTA のサイトを参考に Node.js をインストールしてください。

npm は Node.js とともに配布されるため、Node.js をインストールしたら npm も自動的にインストールされます。その後、yarn をインストールしてください。

### ② リポジトリのクローン

このリポジトリをローカル環境にクローンしてください。

コマンドで行う場合

```
git clone https://github.com/MAGIE-COMPANY-Inc/Hack.BAR-Homepage.git
```

VS Code で行う場合は、リポジトリをクローンする（英語だと Clone Repository）というボタンがあるので、それをクリックしていただき、`https://github.com/https://github.com/MAGIE-COMPANY-Inc/Hack.BAR-Homepage.git` を入力してエンターを押してください。

### ③ 依存関係のインストール

ターミナルを開き、下記コマンドで依存関係をインストールしましょう。以上で、環境構築は完了です。

```
yarn
```

## 開発する

開発を行う場合

```
yarn start // localhost:3000 で立ち上がります
```

本番の動作確認を行う場合

```
yarn build
yarn start // localhost:3000 で立ち上がります。dev中はportを変える必要があります。
```

## Git ブランチルール

`main`

- マージされると本番に自動反映されます。

`develop`

- 本番反映前に確認するための環境（ステージング環境）。
- 常駐しているブランチで、feature からの変更を受け付け、main にマージする。

`hotfix`

- 本番で発生した緊急のバグに対処するためのブランチ。
- 必ず main から分岐し、main と develop にマージする。

`feature/あなたのGitHub名_*`

- 開発にはここを用いる。
- 必ず develop から分岐し、develop にマージする。
- 「あなたの GitHub 名」にはアカウント名を入力。
- `*` は開発するものを簡易的に記入。
- 例: feature/shouhi_add-about-page

`main`, `develop`, `hotfix` に直接 push してはいけません。基本的に皆さんが触って良いのは `feature/あなたのGitHub名_*` ブランチだけです。

## Contributors ✨

Thanks goes to these wonderful people

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/shouhi_ide"><img src="https://user-images.githubusercontent.com/63713624/123041698-9f3c9b00-d430-11eb-8faf-e98e27e347db.jpg" width="100px;" alt=""/><br /><sub><b>井手翔陽</b></sub></a><br /><a href="https://github.com/TechUni2020/Tech.Uni_Members/commits?author=shouhi" title="Documentation">📖</a> <a href="#projectManagement-shouhi" title="Project Management">📆</a>
    </td>
</table>

Feel free to reach out to us and say hi 👋.


## 💬 What Do You Think of Hack.BAR?
> please write to Issue in this repository

<div align="left">
    <p><a href="https://twitter.com/EngineerBarKobe"><img alt="Twitter @dailydotdev" align="center" src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" /></a>&nbsp; Tweet us @EngineerBarKobe to share your thoughts and stay up-to-date. </p>
</div>
