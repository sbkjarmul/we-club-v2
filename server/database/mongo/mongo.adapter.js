const { DataTableInterface } = require("../../interfaces");

class MongoDataTable extends DataTableInterface {
  constructor(model) {
    super();
    this.table = model;
  }

  async create(data) {
    const newRecord = new this.table(data);
    return newRecord.save();
  }

  async findOne(query) {
    return this.table.findOne(query);
  }

  async findMany(query) {
    return this.table.find(query);
  }

  async findById(id) {
    return this.table.findById(id);
  }
}

module.exports = MongoDataTable;
