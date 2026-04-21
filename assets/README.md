# Asset Guide

このプロトタイプでは、まず少ない素材で空気を作るのがおすすめです。
以下の名前で置くと、実装時に迷いにくくなります。

## Images

`assets/images/title-hero.webp`
- タイトル画面のメインビジュアル
- 明るいヒーローものに見える絵

`assets/images/question-bright-01.webp`
- 前半の質問画面背景
- ポップで元気な救助現場

`assets/images/question-bright-02.webp`
- 前半の質問画面背景の差し替え用

`assets/images/question-shift-01.webp`
- 中盤の違和感が出始める背景
- 少し影やノイズ感を増やす

`assets/images/question-dark-01.webp`
- 後半の暗い質問画面背景
- 選別装置っぽい冷たい空気

`assets/images/result-simulation.webp`
- 人類救済シミュレーション画面用
- 実験ログ、都市俯瞰、モニター群など

`assets/images/ending-silent-person.webp`
- 最後のひとり用の絵
- 顔をはっきり出しすぎないほうが使いやすい

`assets/images/mascot-bright.webp`
- 相棒キャラの明るい立ち絵

`assets/images/mascot-dark.webp`
- 相棒キャラの不穏な立ち絵

## UI

`assets/ui/noise-overlay.png`
- うっすら重ねるノイズ

`assets/ui/panel-glow.webp`
- タイトルや結果画面の発光演出

`assets/ui/button-shine.webp`
- ボタンの装飾やハイライト用

## Audio

`assets/audio/bgm-title.mp3`
- タイトル画面BGM
- 明るいヒーロー番組風

`assets/audio/bgm-questions-bright.mp3`
- 前半の質問画面BGM

`assets/audio/bgm-questions-dark.mp3`
- 後半の質問画面BGM

`assets/audio/bgm-result.mp3`
- 結果画面BGM
- 無機質で少し冷たい音

`assets/audio/se-click.wav`
- ボタン押下音

`assets/audio/se-alert.wav`
- 危機発生や設問切り替え音

`assets/audio/se-result.wav`
- シミュレーション結果表示音

`assets/audio/se-ending-low.wav`
- 最後のひとりが出るときの低い音

## First Pass

まずはこの6個があると、かなり雰囲気が出ます。

- `assets/images/title-hero.webp`
- `assets/images/question-bright-01.webp`
- `assets/images/question-dark-01.webp`
- `assets/images/ending-silent-person.webp`
- `assets/audio/se-click.wav`
- `assets/audio/bgm-questions-dark.mp3`

## Notes

- 画像に文字は入れない
- 透過が必要なら `png`
- 背景は軽さ優先なら `webp`
- 音量差が大きすぎる素材は避ける
- 最後の人物画像は、感情を決めすぎない構図のほうが分岐に使いやすい
