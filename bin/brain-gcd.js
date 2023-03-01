#!/usr/bin/env node
import mainGame from '../src/index.js';
import getGcdGameData from '../src/games/brain-gcd.js';

mainGame(getGcdGameData);
