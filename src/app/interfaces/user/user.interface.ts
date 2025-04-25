import { InterfaceAddress } from "./address.interface";
import { InterfaceStatus } from "./status.interface";

export interface InterfaceUser {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco: InterfaceAddress;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: InterfaceStatus;
}