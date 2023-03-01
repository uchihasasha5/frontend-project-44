#!/usr/bin/env node
import mainGame from '../src/index.js';
import getPrimeData from '../src/games/brain-gcd.js';

mainGame(getPrimeData);
