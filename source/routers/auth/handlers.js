export const login = (req, res, next) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const logout = (req, res, next) => {
  try {
    res.status(204).send()
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}
