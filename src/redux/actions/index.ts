import { ClickElementAction } from "./clickElement"
import { UpdateInputTextAction } from "./updateInputText"

export * from "./clickElement"
export * from "./updateInputText"

export type ActionUnion = ClickElementAction | UpdateInputTextAction
