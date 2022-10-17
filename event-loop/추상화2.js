const webAPI = {
  eventQueue: [],
  makeEvent: () => {
    while (true) {
      if (eventQueue.length) {
        const event = eventQueue.shift();
        try {
          event();
        } catch (err) {
          reportError();
        }
      }
    }
  },
};

const syncEnv = {
  callStack: [],
  callWebAPI: () => {
    while (true) {
      if (callStack.length) {
        callStack.forEach((fn) => {
          if (fn.type === 'async') {
            webAPI.eventQueue.push(fn);
          }
        });
      }
    }
  },
};
