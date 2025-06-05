export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
 
  quantity?: number; 
  usuarioId:number;
}
