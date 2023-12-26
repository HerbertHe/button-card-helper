import type { ButtonCardConfig } from "@herberthe/button-card-devkit"

export interface IButtonCardFuntionArgs {}

export type IButtonCardReturnVal = ButtonCardConfig & {
    type: "custom:button-card"
}
