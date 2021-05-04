import React from "react";
import { FetchResult } from "@apollo/client";

import { AppMutationProps } from "./interface";

export async function useAppMutation<
  MutationInputsProps,
  MutationResponseProps
>(props: AppMutationProps<MutationResponseProps, MutationInputsProps>) {
  try {
    const { mutation, mutationData } = props;
    const { data, errors }: FetchResult<MutationResponseProps> = await mutation(
      {
        variables: { input: mutationData },
      }
    );
    if (errors) {
      // log to bug snag
    }
    return { data };
  } catch (errors) {
    //log errors to bug snag
    return {};
  }
}
