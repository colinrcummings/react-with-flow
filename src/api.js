// @flow
const api = {
  get: (group: string) =>
    new Promise<Array<string>>((resolve, reject) => {
      const err = null;

      if (!err) {
        switch (group) {
          case "fruits":
            return resolve(["Apple", "Pear", "Orange"]);

          case "vegitables":
            return resolve(["Tomato", "Lettuce", "Broccoli"]);

          case "dairy":
            return resolve(["Milk", "Cheese", "Yogurt"]);

          default:
            throw new Error(`Unknown group ${group}!`);
        }
      } else {
        reject(Error(err));
      }
    })
};

export default api;
