# HTML5 Canvas Game Engine
Simple engine written in TypeScript
## Description
Node-based HTML5 Game Library that implements basic features of a "game engine".
*This project born because of wanting to develop the closest thing to a tool for HTML5 Game Development, it's only a hobbie project and i don't recommend use this for a serious game development.*

### Features
 - **Based in nodes**
Everything is a node. A node can has children nodes

 - **Input Manager**
 Keyboard and mouse events

 - **Assets Manager**

- **Collision system**
Detects rectangles colliding or points over rectangles

- **Singleton implementation**
For internal classes running

- **2D Rendering**
With Canvas API

- **Spritesheet**
For sprites animations

## Implemented Nodes
- Rectangle
- Sprite
- AnimatedSprite
- Text (with multiline support)

Possibility of implement a lot nodes out-the-box, like buttons, scene manager, etc

## Languages & Tools
<img align="left" alt="Webpack" width="80"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img alt="Webpack" width="80" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />

## Game Demo Gif
![enter image description here](https://res.cloudinary.com/mabno/image/upload/v1643303660/ezgif.com-gif-maker.gif)

## Run demo
```
$ git clone https://github.com/mabno/mbn-canvas-engine.git
$ cd mbn-canvas-engine
$ npm i
$ npm run dev
```
Development server run in http://localhost:8080/