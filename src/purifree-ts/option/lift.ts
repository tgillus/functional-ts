/* eslint-disable no-console */
import { extract, Just, lift2C, List, pipe } from 'purifree-ts';

const add = (x: number) => (y: number) => x + y;
const addLifted = lift2C(add);

console.log(pipe(Just(3), pipe(Just(2), addLifted), extract()));

console.log(pipe([1, 2, 3], List.at(1), pipe(Just(2), addLifted), extract()));

console.log(pipe([1, 2, 3], List.at(3), pipe(Just(2), addLifted), extract()));
