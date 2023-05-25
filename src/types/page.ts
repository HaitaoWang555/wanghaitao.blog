export type post = {
  label: string
  value: string
  category: category
  tag: tag[]
}

export type category = {
  label: string
  value: string
  posts?: post[]
}

export type tag = {
  label: string
  value: string
  posts?: post[]
}
