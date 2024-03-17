import Image from 'next/image';

import { cn } from '@/lib/tailwind-merge';

export type CollaboratorProfileImageProps =
  React.AllHTMLAttributes<HTMLImageElement> & {
    name: string;
    src: string;
  };

export const CollaboratorProfileImage = ({
  name,
  src
}: CollaboratorProfileImageProps) => {
  return (
    <Image
      src={src}
      alt={name}
      fill
      loading="lazy"
      aria-label={`Foto de perfil do colaborador ${name}`}
      className={cn('object-cover object-center inset-0 -z-10')}
    />
  );
};
