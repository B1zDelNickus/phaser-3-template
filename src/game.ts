import "phaser";

import GameConfig = Phaser.Types.Core.GameConfig;
import Game = Phaser.Game;

import {BootView} from "./views/BootView";

const config : GameConfig = {
    title: "Tank",
    url: "https://github.com/digitsensitive/phaser3-typescript",
    version: "1.0",
    width: 800,
    height: 475,
    zoom: 1.0,
    parent: "game",
    scene: [BootView],
    type: Phaser.AUTO,
    backgroundColor: "#000000"
}

export class App extends Game {

    constructor(config: GameConfig) {
        super(config);
    }

    preload() {
        this.boot();
    }

}

window.onload = () => { const app = new App(config); };