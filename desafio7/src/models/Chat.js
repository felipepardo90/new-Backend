import knex from "knex";

export default class Messages {
  constructor(config, table) {
    this.knex = knex(config);
    this.table = table;
  }

  async saveMessage(object) {
    try {
      await this.knex.insert(object).into(this.table);
      const messages = await this.knex.select("*").from(this.table);
      return messages;
      // const messageToParse = await fs.promises.readFile(this.file, "utf-8");
      // const messages = JSON.parse(messageToParse);

      // object.id = messages.length + 1;
      // messages.push(object);
      // const updatedFile = JSON.stringify(messages, null, " ");
      // fs.promises.writeFile(this.file, updatedFile);

      // return messages;
    } catch (error) {
      console.error(`Se produjo un error en saveMessage:${error}`);
    }
  }

  async readMessages() {
    try {
      return await this.knex.select("*").from(this.table);
      // const messageToParse = await fs.promises.readFile(this.file, "utf-8");
      // const messages = JSON.parse(messageToParse);
      // return messages;
    } catch (error) {
      console.error(`Se produjo un error en readMessages:${error}`);
    }
  }
}
