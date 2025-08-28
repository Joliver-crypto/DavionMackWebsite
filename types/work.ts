export interface Work {
  slug: string
  title: string
  year: number
  materials: string
  cover: string
  images: string[]
  forSale: boolean
  price: number
  status: string
}

export interface About {
  name: string
  degreeLine: string
  photo: string
  bio: string
  cv: string
  instagram: string
}
