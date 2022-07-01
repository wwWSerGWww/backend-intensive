export const get = (req, res) => {
  try {
    res.status(200).json({ data: [] })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const post = (req, res) => {
  try {
    res.status(201).json({})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getByHash = (req, res) => {
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const updateByHash = (req, res) => {
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const deleteByHash = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const enroll = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const expel = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const postVideos = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const getVideosByHash = (req, res) => {
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const deleteVideosByHash = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const postKeynotes = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const getKeynotesByHash = (req, res) => {
  try {
    res.status(200).json({ data: {} })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export const deleteKeynotesByHash = (req, res) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
