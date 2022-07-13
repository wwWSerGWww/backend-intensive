import { users } from '../odm/index.js'

export class Users {
  constructor(data) {
    this.data = data
  }
  async create() {
    const data = await users.create(this.data)
    return data
  }
}

export const find = async () => {
  const data = await users.find()
  return data
}

export const findByID = async (id) => {
  const data = await users.findById(id)
  return data
}

export const findByIdAndUpdate = async (id, obj) => {
  const data = await users.findByIdAndUpdate(id, obj, { new: true })
  return data
}

export const findByIdAndDelete = async (id) => {
  const data = await users.findByIdAndDelete(id)
  return data
}
