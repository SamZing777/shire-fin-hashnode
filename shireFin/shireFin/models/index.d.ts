import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum CountryField {
  NIGERIA = "NIGERIA",
  UNITED_KINGDOM = "UNITED_KINGDOM"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type EagerUserInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Country: CountryField | keyof typeof CountryField;
  readonly Gender: Gender | keyof typeof Gender;
  readonly DateOfBirth: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInformation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInformation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly FirstName: string;
  readonly LastName: string;
  readonly Country: CountryField | keyof typeof CountryField;
  readonly Gender: Gender | keyof typeof Gender;
  readonly DateOfBirth: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInformation = LazyLoading extends LazyLoadingDisabled ? EagerUserInformation : LazyUserInformation

export declare const UserInformation: (new (init: ModelInit<UserInformation>) => UserInformation) & {
  copyOf(source: UserInformation, mutator: (draft: MutableModel<UserInformation>) => MutableModel<UserInformation> | void): UserInformation;
}