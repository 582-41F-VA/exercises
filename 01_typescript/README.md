# Exercise: TypeScript

Using TypeScript, annotate the type of the parameters and return value
of the following functions.

```ts
/** Return a greeting for the given person. */
function greet(person) {
    return `Hi ${person.name}!`;
}
```

```ts
/** Move the given object right and down. */
function move(obj) {
    return { ...obj, x: obj.x + 1, y: obj.y + 1 };
}
```

```ts
/** Repeat the given callback a given number of times. */
function repeat(times, callback) {
    for (let i = 0; i < times; i++) callback(i);
}
```

```ts
/** Return a function that increments the given starting number when called. */
function incrementer(start) {
    return (step) => start += step;
}
```

```ts
/** Create an account with the given name and starting balance. */
function newAccount(name, balance = 0) {
    return {
        name,
        balance,
        deposit: (amount) => newAccount(name, balance + amount),
        withdraw: (amount) => newAccount(name, balance - amount),
    };
}
```
