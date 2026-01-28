type BarVariants = 'default' | 'pink';
interface BarProps {
  percent: number;
  variant?: BarVariants;
}

const baseStyleBg = 'w-full h-5 rounded-full';
const variants: Record<BarVariants, string> = {
  default: 'bg-white',
  pink: 'bg-softPink',
};

export default function Bar({
  percent,
  variant = 'default',
}: BarProps) {
  return (
    <div className={`${baseStyleBg} ${variants[variant]}`}>
      <div
        className='w-(--w) bg-primary h-5 rounded-full z-30 relative'
        style={{ ['--w' as any]: `${percent}%` }}
      >
        <div
          className='bg-white border-softPink border w-[22px] h-[22px]
                    rounded-full z-50 absolute -top-px inset-x-[calc(100%-21px)]
                    flex items-center justify-center'
        >
          <p className='text-xs'>♥️</p>
        </div>
      </div>
    </div>
  );
}
