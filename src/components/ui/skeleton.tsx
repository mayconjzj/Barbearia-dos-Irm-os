import { cn } from '@/lib/tailwind-merge';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...props }: { className?: string }) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-zinc-50/10', className)}
      {...props}
    />
  );
};
