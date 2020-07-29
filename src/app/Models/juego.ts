import { Protagonista } from './protagonista';

export interface Juego {
    id?: number;
    nombre: string;
    ano: number;
    id_director: number;
    stock: number;
    precio: number;

    id_protagonista: number;
}
