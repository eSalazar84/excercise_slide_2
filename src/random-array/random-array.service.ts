import { Injectable } from '@nestjs/common';

/* 
Realizar un programa que dado un arreglo de 100 elementos con valores 
enteros aleatorios, solicite al usuario un valor a buscar dentro del 
arreglo y devuelva al usuario cuantas veces se encuentra.
Realiza los test automáticos necesarios para asegurar su 
correcta funcionalidad.
*/


@Injectable()
export class RandomArrayService {
    generateArray(): number[] {
        const arrayR: number[] = [];
        for (let i = 0; i < 100; i++) {
            arrayR.push(Math.floor(Math.random() * 100) + 1);
        }
        return arrayR;
    }
    
    
}
