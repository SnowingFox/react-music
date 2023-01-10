declare interface ISearchHotWordsResponse {
  code: number
  result: Result
}

interface Result {
  hots: Hot[]
}

interface Hot {
  first: string
  second: number
  third: any
  iconType: number
}
