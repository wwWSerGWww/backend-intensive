import { users } from '../odm/index.js'

export class Users {
  constructor(data) {
    this.data = data
  }
  async create() {
    const data = await users.create(this.data)
    return data
  }
  async find() {
    const data = await users.find({})
    return data
  }
}
