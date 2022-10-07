import { Contato } from "./contato";
import { Logradouro } from "./logradouro";

export class Cliente {
  id: number;
  nome: string;
  dataNascimento: Date | string | null;
  logradouro: Logradouro;
  contatos: Contato[]
}
