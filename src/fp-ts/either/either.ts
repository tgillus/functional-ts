import { either as E, function as F } from 'fp-ts';
import { Response, trySomething } from '../../util/util.js';
import pipe = F.pipe;

/*
 * Handle errors and successes
 */

const failOrNot = (fail: boolean): E.Either<string, string> => {
  return fail ? E.left('failure') : E.right('success');
};

pipe(failOrNot(true), E.match(console.log, console.error));

pipe(failOrNot(false), E.match(console.log, console.error));

/*
 * Handle exceptions
 */

const result = E.tryCatch(
  () => ({ number: trySomething() }),
  (e) => ({ errors: [(e as Error).message] })
);

Response.log(
  pipe(
    result,
    E.match(
      (data) => new Response(400, data),
      (data) => new Response(200, data)
    )
  )
);

Response.log(
  pipe(
    result,
    E.bimap(
      (e) => new Response(400, e),
      (data) => new Response(200, data)
    ),
    E.match(
      (response) => response,
      (response) => response
    )
  )
);
