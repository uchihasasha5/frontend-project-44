#!/usr/bin/env node
import mainGame from '../src/index.js';
import getBrainProgressionData from '../src/games/brain-progression.js';

mainGame(getBrainProgressionData);
