/* eslint-disable no-console */
import { Maybe } from 'true-myth';

const get = <T>(lst: readonly T[], index: number) => {
  return Maybe.of(lst[index]);
};

console.log(get([1, 2, 3], 2).unwrapOr(-1));

console.log(get([1, 2, 3], 3).unwrapOrElse(() => -1));
