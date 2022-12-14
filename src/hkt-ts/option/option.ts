/* eslint-disable no-console */
import { pipe, Maybe } from 'hkt-ts';

const get = <T>(lst: readonly T[], index: number) => {
  return Maybe.fromNullable(lst[index]);
};

console.log(
  pipe(
    get([1, 2, 3], 2),
    Maybe.match(
      () => -1,
      (val) => val
    )
  )
);

console.log(
  pipe(
    get([1, 2, 3], 3),
    Maybe.getOrElse(() => -1)
  )
);
