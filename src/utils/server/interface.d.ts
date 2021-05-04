import {
  FetchResult,
  MutationFunctionOptions,
  ApolloQueryResult,
  DocumentNode,
} from "@apollo/client";

export interface AppMutationProps<ResponseDataProps, InputDataProps> {
  mutation: Mutation<ResponseDataProps, MutationInput<InputDataProps>>;
  mutationData: InputDataProps;
}

export interface MutationInput<InputDataProps> {
  input: InputDataProps;
}

export type Mutation<ResponseProps, InputProps> = (
  options?: MutationFunctionOptions<ResponseProps, InputProps>
) => Promise<FetchResult<ResponseProps>>;

export interface Error {
  name: string;
  message: string;
}
