import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * clsx + tailwind class merge
 * @param classes - class names
 * @returns {string} - class names joined by space
 */
function clsxm(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}

export default clsxm;
