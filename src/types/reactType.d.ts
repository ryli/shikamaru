type propsMatchParamsType = {
  id: number
}

type propsMatchType = {
  params: propsMatchParamsType
}

export type propsType = {
  match: propsMatchType
  [key: sting]: object
}
