/* eslint-disable no-console */
import { match } from 'ts-pattern';

type Foo = 'foo' | 'bar' | 'baz';

const qux = (): Foo => {
  return 'foo';
};

const quux = match(qux())
  .with('foo', () => 1)
  .with('bar', () => 'bar')
  .with('baz', () => 'baz')
  .exhaustive();

console.log(quux);
