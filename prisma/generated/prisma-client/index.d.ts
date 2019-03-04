// Code generated by Prisma (prisma@1.27.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  pedido: (where?: PedidoWhereInput) => Promise<boolean>;
  produto: (where?: ProdutoWhereInput) => Promise<boolean>;
  usuario: (where?: UsuarioWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  pedido: (where: PedidoWhereUniqueInput) => PedidoPromise;
  pedidoes: (
    args?: {
      where?: PedidoWhereInput;
      orderBy?: PedidoOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Pedido>;
  pedidoesConnection: (
    args?: {
      where?: PedidoWhereInput;
      orderBy?: PedidoOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PedidoConnectionPromise;
  produto: (where: ProdutoWhereUniqueInput) => ProdutoPromise;
  produtoes: (
    args?: {
      where?: ProdutoWhereInput;
      orderBy?: ProdutoOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Produto>;
  produtoesConnection: (
    args?: {
      where?: ProdutoWhereInput;
      orderBy?: ProdutoOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ProdutoConnectionPromise;
  usuario: (where: UsuarioWhereUniqueInput) => UsuarioPromise;
  usuarios: (
    args?: {
      where?: UsuarioWhereInput;
      orderBy?: UsuarioOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Usuario>;
  usuariosConnection: (
    args?: {
      where?: UsuarioWhereInput;
      orderBy?: UsuarioOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UsuarioConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPedido: (data: PedidoCreateInput) => PedidoPromise;
  updatePedido: (
    args: { data: PedidoUpdateInput; where: PedidoWhereUniqueInput }
  ) => PedidoPromise;
  upsertPedido: (
    args: {
      where: PedidoWhereUniqueInput;
      create: PedidoCreateInput;
      update: PedidoUpdateInput;
    }
  ) => PedidoPromise;
  deletePedido: (where: PedidoWhereUniqueInput) => PedidoPromise;
  deleteManyPedidoes: (where?: PedidoWhereInput) => BatchPayloadPromise;
  createProduto: (data: ProdutoCreateInput) => ProdutoPromise;
  updateProduto: (
    args: { data: ProdutoUpdateInput; where: ProdutoWhereUniqueInput }
  ) => ProdutoPromise;
  updateManyProdutoes: (
    args: { data: ProdutoUpdateManyMutationInput; where?: ProdutoWhereInput }
  ) => BatchPayloadPromise;
  upsertProduto: (
    args: {
      where: ProdutoWhereUniqueInput;
      create: ProdutoCreateInput;
      update: ProdutoUpdateInput;
    }
  ) => ProdutoPromise;
  deleteProduto: (where: ProdutoWhereUniqueInput) => ProdutoPromise;
  deleteManyProdutoes: (where?: ProdutoWhereInput) => BatchPayloadPromise;
  createUsuario: (data: UsuarioCreateInput) => UsuarioPromise;
  updateUsuario: (
    args: { data: UsuarioUpdateInput; where: UsuarioWhereUniqueInput }
  ) => UsuarioPromise;
  updateManyUsuarios: (
    args: { data: UsuarioUpdateManyMutationInput; where?: UsuarioWhereInput }
  ) => BatchPayloadPromise;
  upsertUsuario: (
    args: {
      where: UsuarioWhereUniqueInput;
      create: UsuarioCreateInput;
      update: UsuarioUpdateInput;
    }
  ) => UsuarioPromise;
  deleteUsuario: (where: UsuarioWhereUniqueInput) => UsuarioPromise;
  deleteManyUsuarios: (where?: UsuarioWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  pedido: (
    where?: PedidoSubscriptionWhereInput
  ) => PedidoSubscriptionPayloadSubscription;
  produto: (
    where?: ProdutoSubscriptionWhereInput
  ) => ProdutoSubscriptionPayloadSubscription;
  usuario: (
    where?: UsuarioSubscriptionWhereInput
  ) => UsuarioSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PedidoOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type ProdutoOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nome_ASC"
  | "nome_DESC"
  | "categoria_ASC"
  | "categoria_DESC"
  | "descricao_ASC"
  | "descricao_DESC"
  | "imagemUrl_ASC"
  | "imagemUrl_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UsuarioOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "nome_ASC"
  | "nome_DESC"
  | "sobrenome_ASC"
  | "sobrenome_DESC"
  | "email_ASC"
  | "email_DESC"
  | "senha_ASC"
  | "senha_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PedidoCreateInput {
  usuario: UsuarioCreateOneInput;
  prato: ProdutoCreateOneInput;
  bebida: ProdutoCreateOneInput;
}

export type PedidoWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ProdutoUpdateDataInput {
  nome?: String;
  categoria?: String;
  descricao?: String;
  imagemUrl?: String;
}

export interface UsuarioCreateInput {
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}

export interface ProdutoUpdateOneRequiredInput {
  create?: ProdutoCreateInput;
  update?: ProdutoUpdateDataInput;
  upsert?: ProdutoUpsertNestedInput;
  connect?: ProdutoWhereUniqueInput;
}

export interface ProdutoCreateOneInput {
  create?: ProdutoCreateInput;
  connect?: ProdutoWhereUniqueInput;
}

export interface UsuarioUpsertNestedInput {
  update: UsuarioUpdateDataInput;
  create: UsuarioCreateInput;
}

export interface ProdutoWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  nome?: String;
  nome_not?: String;
  nome_in?: String[] | String;
  nome_not_in?: String[] | String;
  nome_lt?: String;
  nome_lte?: String;
  nome_gt?: String;
  nome_gte?: String;
  nome_contains?: String;
  nome_not_contains?: String;
  nome_starts_with?: String;
  nome_not_starts_with?: String;
  nome_ends_with?: String;
  nome_not_ends_with?: String;
  categoria?: String;
  categoria_not?: String;
  categoria_in?: String[] | String;
  categoria_not_in?: String[] | String;
  categoria_lt?: String;
  categoria_lte?: String;
  categoria_gt?: String;
  categoria_gte?: String;
  categoria_contains?: String;
  categoria_not_contains?: String;
  categoria_starts_with?: String;
  categoria_not_starts_with?: String;
  categoria_ends_with?: String;
  categoria_not_ends_with?: String;
  descricao?: String;
  descricao_not?: String;
  descricao_in?: String[] | String;
  descricao_not_in?: String[] | String;
  descricao_lt?: String;
  descricao_lte?: String;
  descricao_gt?: String;
  descricao_gte?: String;
  descricao_contains?: String;
  descricao_not_contains?: String;
  descricao_starts_with?: String;
  descricao_not_starts_with?: String;
  descricao_ends_with?: String;
  descricao_not_ends_with?: String;
  imagemUrl?: String;
  imagemUrl_not?: String;
  imagemUrl_in?: String[] | String;
  imagemUrl_not_in?: String[] | String;
  imagemUrl_lt?: String;
  imagemUrl_lte?: String;
  imagemUrl_gt?: String;
  imagemUrl_gte?: String;
  imagemUrl_contains?: String;
  imagemUrl_not_contains?: String;
  imagemUrl_starts_with?: String;
  imagemUrl_not_starts_with?: String;
  imagemUrl_ends_with?: String;
  imagemUrl_not_ends_with?: String;
  AND?: ProdutoWhereInput[] | ProdutoWhereInput;
  OR?: ProdutoWhereInput[] | ProdutoWhereInput;
  NOT?: ProdutoWhereInput[] | ProdutoWhereInput;
}

export type UsuarioWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface ProdutoSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ProdutoWhereInput;
  AND?: ProdutoSubscriptionWhereInput[] | ProdutoSubscriptionWhereInput;
  OR?: ProdutoSubscriptionWhereInput[] | ProdutoSubscriptionWhereInput;
  NOT?: ProdutoSubscriptionWhereInput[] | ProdutoSubscriptionWhereInput;
}

export interface UsuarioUpdateDataInput {
  nome?: String;
  sobrenome?: String;
  email?: String;
  senha?: String;
}

export interface UsuarioUpdateManyMutationInput {
  nome?: String;
  sobrenome?: String;
  email?: String;
  senha?: String;
}

export interface UsuarioUpdateOneRequiredInput {
  create?: UsuarioCreateInput;
  update?: UsuarioUpdateDataInput;
  upsert?: UsuarioUpsertNestedInput;
  connect?: UsuarioWhereUniqueInput;
}

export interface ProdutoUpdateManyMutationInput {
  nome?: String;
  categoria?: String;
  descricao?: String;
  imagemUrl?: String;
}

export interface PedidoUpdateInput {
  usuario?: UsuarioUpdateOneRequiredInput;
  prato?: ProdutoUpdateOneRequiredInput;
  bebida?: ProdutoUpdateOneRequiredInput;
}

export type ProdutoWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UsuarioWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  nome?: String;
  nome_not?: String;
  nome_in?: String[] | String;
  nome_not_in?: String[] | String;
  nome_lt?: String;
  nome_lte?: String;
  nome_gt?: String;
  nome_gte?: String;
  nome_contains?: String;
  nome_not_contains?: String;
  nome_starts_with?: String;
  nome_not_starts_with?: String;
  nome_ends_with?: String;
  nome_not_ends_with?: String;
  sobrenome?: String;
  sobrenome_not?: String;
  sobrenome_in?: String[] | String;
  sobrenome_not_in?: String[] | String;
  sobrenome_lt?: String;
  sobrenome_lte?: String;
  sobrenome_gt?: String;
  sobrenome_gte?: String;
  sobrenome_contains?: String;
  sobrenome_not_contains?: String;
  sobrenome_starts_with?: String;
  sobrenome_not_starts_with?: String;
  sobrenome_ends_with?: String;
  sobrenome_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  senha?: String;
  senha_not?: String;
  senha_in?: String[] | String;
  senha_not_in?: String[] | String;
  senha_lt?: String;
  senha_lte?: String;
  senha_gt?: String;
  senha_gte?: String;
  senha_contains?: String;
  senha_not_contains?: String;
  senha_starts_with?: String;
  senha_not_starts_with?: String;
  senha_ends_with?: String;
  senha_not_ends_with?: String;
  AND?: UsuarioWhereInput[] | UsuarioWhereInput;
  OR?: UsuarioWhereInput[] | UsuarioWhereInput;
  NOT?: UsuarioWhereInput[] | UsuarioWhereInput;
}

export interface UsuarioCreateOneInput {
  create?: UsuarioCreateInput;
  connect?: UsuarioWhereUniqueInput;
}

export interface PedidoWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  usuario?: UsuarioWhereInput;
  prato?: ProdutoWhereInput;
  bebida?: ProdutoWhereInput;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  AND?: PedidoWhereInput[] | PedidoWhereInput;
  OR?: PedidoWhereInput[] | PedidoWhereInput;
  NOT?: PedidoWhereInput[] | PedidoWhereInput;
}

export interface ProdutoCreateInput {
  nome: String;
  categoria: String;
  descricao?: String;
  imagemUrl?: String;
}

export interface UsuarioSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UsuarioWhereInput;
  AND?: UsuarioSubscriptionWhereInput[] | UsuarioSubscriptionWhereInput;
  OR?: UsuarioSubscriptionWhereInput[] | UsuarioSubscriptionWhereInput;
  NOT?: UsuarioSubscriptionWhereInput[] | UsuarioSubscriptionWhereInput;
}

export interface ProdutoUpsertNestedInput {
  update: ProdutoUpdateDataInput;
  create: ProdutoCreateInput;
}

export interface ProdutoUpdateInput {
  nome?: String;
  categoria?: String;
  descricao?: String;
  imagemUrl?: String;
}

export interface UsuarioUpdateInput {
  nome?: String;
  sobrenome?: String;
  email?: String;
  senha?: String;
}

export interface PedidoSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PedidoWhereInput;
  AND?: PedidoSubscriptionWhereInput[] | PedidoSubscriptionWhereInput;
  OR?: PedidoSubscriptionWhereInput[] | PedidoSubscriptionWhereInput;
  NOT?: PedidoSubscriptionWhereInput[] | PedidoSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UsuarioPreviousValues {
  id: ID_Output;
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}

export interface UsuarioPreviousValuesPromise
  extends Promise<UsuarioPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nome: () => Promise<String>;
  sobrenome: () => Promise<String>;
  email: () => Promise<String>;
  senha: () => Promise<String>;
}

export interface UsuarioPreviousValuesSubscription
  extends Promise<AsyncIterator<UsuarioPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nome: () => Promise<AsyncIterator<String>>;
  sobrenome: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  senha: () => Promise<AsyncIterator<String>>;
}

export interface Produto {
  id: ID_Output;
  nome: String;
  categoria: String;
  descricao?: String;
  imagemUrl?: String;
}

export interface ProdutoPromise extends Promise<Produto>, Fragmentable {
  id: () => Promise<ID_Output>;
  nome: () => Promise<String>;
  categoria: () => Promise<String>;
  descricao: () => Promise<String>;
  imagemUrl: () => Promise<String>;
}

export interface ProdutoSubscription
  extends Promise<AsyncIterator<Produto>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nome: () => Promise<AsyncIterator<String>>;
  categoria: () => Promise<AsyncIterator<String>>;
  descricao: () => Promise<AsyncIterator<String>>;
  imagemUrl: () => Promise<AsyncIterator<String>>;
}

export interface ProdutoSubscriptionPayload {
  mutation: MutationType;
  node: Produto;
  updatedFields: String[];
  previousValues: ProdutoPreviousValues;
}

export interface ProdutoSubscriptionPayloadPromise
  extends Promise<ProdutoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProdutoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProdutoPreviousValuesPromise>() => T;
}

export interface ProdutoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProdutoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProdutoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProdutoPreviousValuesSubscription>() => T;
}

export interface AggregatePedido {
  count: Int;
}

export interface AggregatePedidoPromise
  extends Promise<AggregatePedido>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePedidoSubscription
  extends Promise<AsyncIterator<AggregatePedido>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PedidoEdge {
  node: Pedido;
  cursor: String;
}

export interface PedidoEdgePromise extends Promise<PedidoEdge>, Fragmentable {
  node: <T = PedidoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PedidoEdgeSubscription
  extends Promise<AsyncIterator<PedidoEdge>>,
    Fragmentable {
  node: <T = PedidoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUsuario {
  count: Int;
}

export interface AggregateUsuarioPromise
  extends Promise<AggregateUsuario>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUsuarioSubscription
  extends Promise<AsyncIterator<AggregateUsuario>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UsuarioConnection {
  pageInfo: PageInfo;
  edges: UsuarioEdge[];
}

export interface UsuarioConnectionPromise
  extends Promise<UsuarioConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UsuarioEdge>>() => T;
  aggregate: <T = AggregateUsuarioPromise>() => T;
}

export interface UsuarioConnectionSubscription
  extends Promise<AsyncIterator<UsuarioConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UsuarioEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUsuarioSubscription>() => T;
}

export interface ProdutoPreviousValues {
  id: ID_Output;
  nome: String;
  categoria: String;
  descricao?: String;
  imagemUrl?: String;
}

export interface ProdutoPreviousValuesPromise
  extends Promise<ProdutoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  nome: () => Promise<String>;
  categoria: () => Promise<String>;
  descricao: () => Promise<String>;
  imagemUrl: () => Promise<String>;
}

export interface ProdutoPreviousValuesSubscription
  extends Promise<AsyncIterator<ProdutoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nome: () => Promise<AsyncIterator<String>>;
  categoria: () => Promise<AsyncIterator<String>>;
  descricao: () => Promise<AsyncIterator<String>>;
  imagemUrl: () => Promise<AsyncIterator<String>>;
}

export interface AggregateProduto {
  count: Int;
}

export interface AggregateProdutoPromise
  extends Promise<AggregateProduto>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProdutoSubscription
  extends Promise<AsyncIterator<AggregateProduto>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ProdutoConnection {
  pageInfo: PageInfo;
  edges: ProdutoEdge[];
}

export interface ProdutoConnectionPromise
  extends Promise<ProdutoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProdutoEdge>>() => T;
  aggregate: <T = AggregateProdutoPromise>() => T;
}

export interface ProdutoConnectionSubscription
  extends Promise<AsyncIterator<ProdutoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProdutoEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProdutoSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PedidoPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
}

export interface PedidoPreviousValuesPromise
  extends Promise<PedidoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface PedidoPreviousValuesSubscription
  extends Promise<AsyncIterator<PedidoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PedidoSubscriptionPayload {
  mutation: MutationType;
  node: Pedido;
  updatedFields: String[];
  previousValues: PedidoPreviousValues;
}

export interface PedidoSubscriptionPayloadPromise
  extends Promise<PedidoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PedidoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PedidoPreviousValuesPromise>() => T;
}

export interface PedidoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PedidoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PedidoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PedidoPreviousValuesSubscription>() => T;
}

export interface Pedido {
  id: ID_Output;
  createdAt: DateTimeOutput;
}

export interface PedidoPromise extends Promise<Pedido>, Fragmentable {
  id: () => Promise<ID_Output>;
  usuario: <T = UsuarioPromise>() => T;
  prato: <T = ProdutoPromise>() => T;
  bebida: <T = ProdutoPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface PedidoSubscription
  extends Promise<AsyncIterator<Pedido>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  usuario: <T = UsuarioSubscription>() => T;
  prato: <T = ProdutoSubscription>() => T;
  bebida: <T = ProdutoSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PedidoConnection {
  pageInfo: PageInfo;
  edges: PedidoEdge[];
}

export interface PedidoConnectionPromise
  extends Promise<PedidoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PedidoEdge>>() => T;
  aggregate: <T = AggregatePedidoPromise>() => T;
}

export interface PedidoConnectionSubscription
  extends Promise<AsyncIterator<PedidoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PedidoEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePedidoSubscription>() => T;
}

export interface UsuarioEdge {
  node: Usuario;
  cursor: String;
}

export interface UsuarioEdgePromise extends Promise<UsuarioEdge>, Fragmentable {
  node: <T = UsuarioPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UsuarioEdgeSubscription
  extends Promise<AsyncIterator<UsuarioEdge>>,
    Fragmentable {
  node: <T = UsuarioSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UsuarioSubscriptionPayload {
  mutation: MutationType;
  node: Usuario;
  updatedFields: String[];
  previousValues: UsuarioPreviousValues;
}

export interface UsuarioSubscriptionPayloadPromise
  extends Promise<UsuarioSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UsuarioPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UsuarioPreviousValuesPromise>() => T;
}

export interface UsuarioSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UsuarioSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UsuarioSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UsuarioPreviousValuesSubscription>() => T;
}

export interface ProdutoEdge {
  node: Produto;
  cursor: String;
}

export interface ProdutoEdgePromise extends Promise<ProdutoEdge>, Fragmentable {
  node: <T = ProdutoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProdutoEdgeSubscription
  extends Promise<AsyncIterator<ProdutoEdge>>,
    Fragmentable {
  node: <T = ProdutoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Usuario {
  id: ID_Output;
  nome: String;
  sobrenome: String;
  email: String;
  senha: String;
}

export interface UsuarioPromise extends Promise<Usuario>, Fragmentable {
  id: () => Promise<ID_Output>;
  nome: () => Promise<String>;
  sobrenome: () => Promise<String>;
  email: () => Promise<String>;
  senha: () => Promise<String>;
}

export interface UsuarioSubscription
  extends Promise<AsyncIterator<Usuario>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  nome: () => Promise<AsyncIterator<String>>;
  sobrenome: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  senha: () => Promise<AsyncIterator<String>>;
}

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Usuario",
    embedded: false
  },
  {
    name: "Produto",
    embedded: false
  },
  {
    name: "Pedido",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;