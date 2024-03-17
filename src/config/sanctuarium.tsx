import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

export const Sanctuarium = {
  name: 'Sanctuarium',
  description:
    'Uma fusão única de barbearia e estúdio de tatuagens, onde estilo e autoexpressão se encontram. Nossa equipe dedicada oferece cortes de cabelo, barbas e tatuagens personalizadas em um ambiente acolhedor e sofisticado. Cada cliente é tratado de forma única, celebrando sua individualidade. Venha nos visitar e encontre seu santuário pessoal de estilo e beleza.',
  backdrop: '/images/barber-backdrop.jpg',
  logo: '/images/sanctuarium-logo.png',
  contact: {
    instagram: {
      name: 'instagram',
      href: 'https://www.instagram.com/sanctuariumbv/',
      icon: <FaInstagram size={24} />
    },
    email: {
      name: 'email',
      href: 'mailto:Jw5kZ@example.com'
    },
    phone: {
      name: 'phone',
      href: '(51) 99999-9999',
      icon: <BsFillTelephoneFill size={24} />
    },
    whatsapp: {
      name: 'whatsapp',
      href: 'https://wa.me/5551999999999',
      icon: <FaWhatsapp size={24} />
    }
  },
  address: {
    name: 'address',
    href: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1557.3664139655757!2d-60.74404789965962!3d2.841346887538738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d9305cf8a91f0b9%3A0xd4c1081b49bf0610!2sEst%C3%BAdio%20de%20tatuagem%20Sanctatinta!5e0!3m2!1spt-BR!2sbr!4v1710634473100!5m2!1spt-BR!2sbr',
    icon: <FaMapLocationDot size={24} />,
    address:
      'Av. Consolação de Matos, 103 - Cidade Satélite, Boa Vista - RR, 69317-474'
  },
  about: {
    name: 'Quem Somos',
    description:
      'No Sanctuarium, nossos especialistas em cortes e tatuagens estão prontos para transformar sua aparência e celebratear sua autenticidade.'
  }
};
