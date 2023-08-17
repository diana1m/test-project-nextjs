import IButton from "../IButton";

export default interface IOffer {
    title: string,
    description: string,
    dark_button: IButton,
    light_button: IButton
}