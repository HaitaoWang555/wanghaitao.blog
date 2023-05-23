type post = {
  label: string
  value: string
  category: string
  tag: string[]
}

type category = {
  label: string
  value: string
  posts: post[]
}

type tag = {
  label: string
  value: string
  posts: post[]
}
