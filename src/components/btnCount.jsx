export function BtnCount({ mod, st }) {
  return <button onClick={() => mod(st + 5)}>click</button>;
}
