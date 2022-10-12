const eventLoop = [];

while (true) {
  if (eventLoop.length) {
    const event = eventLoop.shift();
    try {
      event();
    } catch (err) {
      reportError();
    }
  }
}
