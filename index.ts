import { interval, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/skipuntil
// Example 1: Skip until observable emits
//emit every 1s
const srcInterval$ = interval(1000);
//skip emitted values from source until inner observable emits (6s)
const example = srcInterval$.pipe(skipUntil(timer(6000)));
const subscribe = example.subscribe((val) => console.log(val));
//output: 5...6...7...8...
