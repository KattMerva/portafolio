type PillVariant = 'default' | 'outline' | 'soft';
interface PillProps {
  text: string;
  variant?: PillVariant;
}
const baseStyles =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold px-3 py-1 border';

const variants: Record<PillVariant, string> = {
  default: 'bg-white text-primary border-softPink',
  outline: 'bg-softPink text-primary border-primary',
  soft: 'bg-muted text-white border-muted',
};

export default function Pill({
  text,
  variant = 'default',
}: PillProps) {
  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {text}
    </span>
  );
}
