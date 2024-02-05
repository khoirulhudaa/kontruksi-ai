export interface ButtonProps {
    typeButton?: string;
    text?: string;
    icon?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    color: string;
    disabled?: boolean;
    style?: string;
    onClick?: any;
    active?: boolean
}

export interface InputProps {
    label?: string;
    onBlur?: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    onFocus?: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    onChange?: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    activeName?: string,
    value?: any;
    placeholder?: string;
    type?: string;
    name?: string;
    id?: string;
    typeInput?: string;
    onError?: string | undefined;
    onTouched?: boolean | undefined;
    disabled?: boolean;
    icon?: any;
    onClick?: any;
    active?: boolean
}

export interface SidebarProps {
    active?: string,
    router?: string,
    data?: any,
    onClick?: any
}

export interface ProgressProps {
    label?: string,
    percentation?: any,
    data?: any
}

export interface TableProps {
    header?: any[] | undefined,
    data?: any[] | undefined
}