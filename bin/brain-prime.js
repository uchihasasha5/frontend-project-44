#!/usr/bin/env node
import mainGame from '../src/index.js';
import getPrimeData from '../src/games/brain-prime.js';

mainGame(getPrimeData);
