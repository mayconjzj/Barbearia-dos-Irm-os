import { Slot } from '@radix-ui/react-slot';
import { VariantProps, tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'inline-flex items-center justify-center',
  variants: {
    variant: {
      default:
        'px-4 py-2 bg-button text-button-foreground dark:font-light duration-300 rounded-md hover:bg-button-hover',
      ghost: 'p-2 hover:bg-button-foreground rounded-md duration-300'
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm'
  }
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
    asChild?: boolean;
  };

export const Button = ({
  children,
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button';
  return (
    <Component
      className={buttonVariants({ className, variant, size })}
      {...props}
    >
      {children}
    </Component>
  );
};
