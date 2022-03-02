import readline from 'readline';

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function waitForinput(msg: string) {
  return new Promise((res) =>
    readlineInterface.question(msg, (name) => {
      res(name);
    })
  );
}
