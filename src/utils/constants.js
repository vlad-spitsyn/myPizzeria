import React from 'react'
import { MdOutlineTimer } from 'react-icons/md'
import {FaMedal, FaRegGrinTongueSquint} from 'react-icons/fa'
export const links = [
  {
    id: 1,
    text: 'головна',
    url: '/',
  },
  {
    id: 2,
    text: 'продукти',
    url: '/products',
  },
  {
    id: 3,
    text: 'про мене',
    url: '/about',
  },
]

export const services = [
  {
    id: 1,
    icon: <FaMedal />,
    title: 'Якість',
    text:
      'У нашій піцерії ми приділяємо найбільше уваги на якість наших піц. Кожна піца готується з використанням найсвіжіших та натуральних інгредієнтів, щоб забезпечити неперевершений смак кожного шматочка.',
  },
  {
    id: 2,
    icon: <FaRegGrinTongueSquint />,
    title: 'Смак',
    text:
      'Наші піци відзначаються гармонійним поєднанням складових, що робить їх надзвичайно смачними. Від хрусткого та ароматного тіста до ніжної сирної начинки та соковитих топінгів - кожен шар пропонує вам непередбачувані і вишукані смакові ноти.',
  },
  {
    id: 3,
    icon: <MdOutlineTimer />,
    title: 'Швидкість',
    text:
      'Незалежно від того, чи ви знаходитесь в офісі, вдома або в готелі, ми гарантуємо, що ваша піца буде доставлена вчасно та в ідеальному стані. Ми розуміємо, що ваш час цінується, тому ми зробимо все можливе, щоб ви отримали ваше замовлення якнайшвидше.',
  },
]

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;
