import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPhoneNumber'
})
export class ConvertPhoneNumberPipe implements PipeTransform {

  transform(value: string | null): string {
    if (!value) return '';

    // Убираем все нецифровые символы
    const digits = value.replace(/\D/g, '');

    if (digits.length !== 12 || !digits.startsWith('375')) {
      return value;
    }

    // Формат под "+375 (29) 368-98-68"
    const country = digits.slice(0, 3);   // 375
    const code = digits.slice(3, 5);      // 29
    const part1 = digits.slice(5, 8);     // 368
    const part2 = digits.slice(8, 10);    // 98
    const part3 = digits.slice(10, 12);   // 68

    return `+${country} (${code}) ${part1}-${part2}-${part3}`;
  }

}
