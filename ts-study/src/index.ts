import { waitForinput } from './input';

async function main() {
  while (true) {
    console.clear();
    const key = await waitForinput('input command: ');
  }
}
main();
