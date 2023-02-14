// Code from: https://www.geeksforgeeks.org/how-to-find-record-by-id-from-local-custom-database-in-node-js/

/* This will be used to simulate a DB*/

const fs = require("fs");
class Repository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Filename is required to create a datastore!");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async getQuests() {
    const jsonRecords = await fs.promises.readFile(this.filename, {
      encoding: "utf8",
    });
    const objRecord = JSON.parse(jsonRecords);
    return objRecord;
  }
}

module.exports = new Repository("database.json");
