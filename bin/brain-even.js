#!/usr/bin/env node
import mainGame from '../src/index.js';
import getGamedata from '../src/games/brain-even.js';

mainGame(getGamedata);
