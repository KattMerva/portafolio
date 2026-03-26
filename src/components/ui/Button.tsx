type ButtonVariants = 'default' | 'primary' | 'secondary' ;

interface ButtonProps {
    text: string;
    variant?: ButtonVariants;
    icon?: React.ReactNode;
}

const baseStyles = 'w-fit px-4 py-1 rounded-full';
const variants: Record<ButtonVariants, string> = {
    default: 'bg-white text-primary border-softPink',
    primary: 'bg-primary text-white border-primary',
    secondary: 'bg-secondary text-white border-secondary',
}

export default function Button({ 
    text,
    variant = 'default',
    icon, 
}: ButtonProps) {
    return (
        <button className={`${baseStyles} ${variants[variant]}`}>
            {text}
            {icon}
        </button>
    )
}
