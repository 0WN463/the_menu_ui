/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type Item = {
  __typename?: 'Item';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  itemType?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  modifierGroups: Array<ModifierGroup>;
  price?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of ItemCreate */
export type ItemCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  itemType?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated return type of ItemCreate. */
export type ItemCreatePayload = {
  __typename?: 'ItemCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  item: Item;
};

/** Autogenerated input type of ItemDelete */
export type ItemDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['ID']['input'];
};

/** Autogenerated return type of ItemDelete. */
export type ItemDeletePayload = {
  __typename?: 'ItemDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  item: Item;
};

export type ItemModifierGroup = {
  __typename?: 'ItemModifierGroup';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  itemId: Scalars['Int']['output'];
  modifierGroupId: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of ItemModifierGroupCreate */
export type ItemModifierGroupCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  modifierGroupId: Scalars['ID']['input'];
};

/** Autogenerated return type of ItemModifierGroupCreate. */
export type ItemModifierGroupCreatePayload = {
  __typename?: 'ItemModifierGroupCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  itemModifierGroup: ItemModifierGroup;
};

/** Autogenerated input type of ItemModifierGroupDelete */
export type ItemModifierGroupDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  modifierGroupId: Scalars['ID']['input'];
};

/** Autogenerated return type of ItemModifierGroupDelete. */
export type ItemModifierGroupDeletePayload = {
  __typename?: 'ItemModifierGroupDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  modifierGroup: ItemModifierGroup;
};

export type Menu = {
  __typename?: 'Menu';
  createdAt: Scalars['ISO8601DateTime']['output'];
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  label: Scalars['String']['output'];
  sections: Array<Section>;
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
  state: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of MenuCreate */
export type MenuCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of MenuCreate. */
export type MenuCreatePayload = {
  __typename?: 'MenuCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  menu: Menu;
};

/** Autogenerated input type of MenuDelete */
export type MenuDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['ID']['input'];
};

/** Autogenerated return type of MenuDelete. */
export type MenuDeletePayload = {
  __typename?: 'MenuDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  menu: Menu;
};

export type MenuSection = {
  __typename?: 'MenuSection';
  createdAt: Scalars['ISO8601DateTime']['output'];
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  menuId: Scalars['Int']['output'];
  sectionId: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of MenuSectionCreate */
export type MenuSectionCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  menuId: Scalars['ID']['input'];
  sectionId: Scalars['ID']['input'];
};

/** Autogenerated return type of MenuSectionCreate. */
export type MenuSectionCreatePayload = {
  __typename?: 'MenuSectionCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  menuSection: MenuSection;
};

/** Autogenerated input type of MenuSectionDelete */
export type MenuSectionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  menuId: Scalars['ID']['input'];
  sectionId: Scalars['ID']['input'];
};

/** Autogenerated return type of MenuSectionDelete. */
export type MenuSectionDeletePayload = {
  __typename?: 'MenuSectionDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  menuSection: MenuSection;
};

export type Modifier = {
  __typename?: 'Modifier';
  createdAt: Scalars['ISO8601DateTime']['output'];
  defaultQuantity?: Maybe<Scalars['Int']['output']>;
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  item: Item;
  itemId: Scalars['Int']['output'];
  modifierGroupId: Scalars['Int']['output'];
  priceOverride?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of ModifierCreate */
export type ModifierCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  defaultQuantity?: InputMaybe<Scalars['Int']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  itemId: Scalars['String']['input'];
  modifierGroupId: Scalars['String']['input'];
  priceOverride?: InputMaybe<Scalars['Float']['input']>;
};

/** Autogenerated return type of ModifierCreate. */
export type ModifierCreatePayload = {
  __typename?: 'ModifierCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  menuSection: Modifier;
};

/** Autogenerated input type of ModifierDelete */
export type ModifierDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  modifierGroupId: Scalars['ID']['input'];
};

/** Autogenerated return type of ModifierDelete. */
export type ModifierDeletePayload = {
  __typename?: 'ModifierDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  menuSection: Modifier;
};

export type ModifierGroup = {
  __typename?: 'ModifierGroup';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  modifiers: Array<Modifier>;
  selectionRequiredMax?: Maybe<Scalars['Int']['output']>;
  selectionRequiredMin?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of ModifierGroupCreate */
export type ModifierGroupCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
  selectionRequiredMax?: InputMaybe<Scalars['Int']['input']>;
  selectionRequiredMin?: InputMaybe<Scalars['Int']['input']>;
};

/** Autogenerated return type of ModifierGroupCreate. */
export type ModifierGroupCreatePayload = {
  __typename?: 'ModifierGroupCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  modifierGroup: ModifierGroup;
};

/** Autogenerated input type of ModifierGroupDelete */
export type ModifierGroupDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['ID']['input'];
};

/** Autogenerated return type of ModifierGroupDelete. */
export type ModifierGroupDeletePayload = {
  __typename?: 'ModifierGroupDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  modifierGroup: ModifierGroup;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a item to a section */
  addItemToSection?: Maybe<SectionItemCreatePayload>;
  /** Add a itme to a item */
  addModifierGroupToItem?: Maybe<ItemModifierGroupCreatePayload>;
  /** Add a section to a menu */
  addModifierToModifierGroup?: Maybe<ModifierCreatePayload>;
  /** Add a section to a menu */
  addSectionToMenu?: Maybe<MenuSectionCreatePayload>;
  /** Creates a new item */
  itemCreate?: Maybe<ItemCreatePayload>;
  /** Deletes a item by ID */
  itemDelete?: Maybe<ItemDeletePayload>;
  /** Creates a new menu */
  menuCreate?: Maybe<MenuCreatePayload>;
  /** Deletes a menu by ID */
  menuDelete?: Maybe<MenuDeletePayload>;
  /** Creates a new modifier_group */
  modifierGroupCreate?: Maybe<ModifierGroupCreatePayload>;
  /** Deletes a modifier_group by ID */
  modifierGroupDelete?: Maybe<ModifierGroupDeletePayload>;
  /** Remove a item from a section */
  removeItemFromSection?: Maybe<SectionItemDeletePayload>;
  /** Remove a section from a menu */
  removeModifierFromModifierGroup?: Maybe<ModifierDeletePayload>;
  /** Remove a modifier group from an item */
  removeModifierGroupFromItem?: Maybe<ItemModifierGroupDeletePayload>;
  /** Remove a section from a menu */
  removeSectionFromMenu?: Maybe<MenuSectionDeletePayload>;
  /** Creates a new section */
  sectionCreate?: Maybe<SectionCreatePayload>;
  /** Deletes a section by ID */
  sectionDelete?: Maybe<SectionDeletePayload>;
};


export type MutationAddItemToSectionArgs = {
  input: SectionItemCreateInput;
};


export type MutationAddModifierGroupToItemArgs = {
  input: ItemModifierGroupCreateInput;
};


export type MutationAddModifierToModifierGroupArgs = {
  input: ModifierCreateInput;
};


export type MutationAddSectionToMenuArgs = {
  input: MenuSectionCreateInput;
};


export type MutationItemCreateArgs = {
  input: ItemCreateInput;
};


export type MutationItemDeleteArgs = {
  input: ItemDeleteInput;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  input: MenuDeleteInput;
};


export type MutationModifierGroupCreateArgs = {
  input: ModifierGroupCreateInput;
};


export type MutationModifierGroupDeleteArgs = {
  input: ModifierGroupDeleteInput;
};


export type MutationRemoveItemFromSectionArgs = {
  input: SectionItemDeleteInput;
};


export type MutationRemoveModifierFromModifierGroupArgs = {
  input: ModifierDeleteInput;
};


export type MutationRemoveModifierGroupFromItemArgs = {
  input: ItemModifierGroupDeleteInput;
};


export type MutationRemoveSectionFromMenuArgs = {
  input: MenuSectionDeleteInput;
};


export type MutationSectionCreateArgs = {
  input: SectionCreateInput;
};


export type MutationSectionDeleteArgs = {
  input: SectionDeleteInput;
};

export type Query = {
  __typename?: 'Query';
  /** Return a list of items */
  items: Array<Item>;
  /** Return a list of menus */
  menus: Array<Menu>;
  /** Return a list of modifier groups */
  modifierGroups: Array<ModifierGroup>;
  /** Return a list of sections */
  sections: Array<Section>;
};

export type Section = {
  __typename?: 'Section';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  items: Array<Item>;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of SectionCreate */
export type SectionCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

/** Autogenerated return type of SectionCreate. */
export type SectionCreatePayload = {
  __typename?: 'SectionCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  section: Section;
};

/** Autogenerated input type of SectionDelete */
export type SectionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['ID']['input'];
};

/** Autogenerated return type of SectionDelete. */
export type SectionDeletePayload = {
  __typename?: 'SectionDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  section: Section;
};

export type SectionItem = {
  __typename?: 'SectionItem';
  createdAt: Scalars['ISO8601DateTime']['output'];
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  itemId: Scalars['Int']['output'];
  sectionId: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

/** Autogenerated input type of SectionItemCreate */
export type SectionItemCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  sectionId: Scalars['ID']['input'];
};

/** Autogenerated return type of SectionItemCreate. */
export type SectionItemCreatePayload = {
  __typename?: 'SectionItemCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  sectionItem: SectionItem;
};

/** Autogenerated input type of SectionItemDelete */
export type SectionItemDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  sectionId: Scalars['ID']['input'];
};

/** Autogenerated return type of SectionItemDelete. */
export type SectionItemDeletePayload = {
  __typename?: 'SectionItemDeletePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  sectionItem: SectionItem;
};

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'Menu', label: string, identifier: string, sections: Array<{ __typename?: 'Section', identifier?: string | null, label?: string | null, description?: string | null, items: Array<{ __typename?: 'Item', identifier?: string | null, label?: string | null, description?: string | null, price?: number | null, imageUrl?: string | null }> }> }> };


export const GetMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMenuQuery, GetMenuQueryVariables>;