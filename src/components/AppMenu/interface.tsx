export interface Props {
    text?: string;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    checkBoxVariant?: string
}