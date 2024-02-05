
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model currency
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type currency = $Result.DefaultSelection<Prisma.$currencyPayload>
/**
 * Model transaction_table
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type transaction_table = $Result.DefaultSelection<Prisma.$transaction_tablePayload>
/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model minners_account
 * 
 */
export type minners_account = $Result.DefaultSelection<Prisma.$minners_accountPayload>
/**
 * Model payment_manager_options
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type payment_manager_options = $Result.DefaultSelection<Prisma.$payment_manager_optionsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Currencies
 * const currencies = await prisma.currency.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Currencies
   * const currencies = await prisma.currency.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.currency`: Exposes CRUD operations for the **currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.currencyDelegate<ExtArgs>;

  /**
   * `prisma.transaction_table`: Exposes CRUD operations for the **transaction_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_tables
    * const transaction_tables = await prisma.transaction_table.findMany()
    * ```
    */
  get transaction_table(): Prisma.transaction_tableDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.minners_account`: Exposes CRUD operations for the **minners_account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Minners_accounts
    * const minners_accounts = await prisma.minners_account.findMany()
    * ```
    */
  get minners_account(): Prisma.minners_accountDelegate<ExtArgs>;

  /**
   * `prisma.payment_manager_options`: Exposes CRUD operations for the **payment_manager_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_manager_options
    * const payment_manager_options = await prisma.payment_manager_options.findMany()
    * ```
    */
  get payment_manager_options(): Prisma.payment_manager_optionsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    currency: 'currency',
    transaction_table: 'transaction_table',
    users: 'users',
    minners_account: 'minners_account',
    payment_manager_options: 'payment_manager_options'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'currency' | 'transaction_table' | 'users' | 'minners_account' | 'payment_manager_options'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      currency: {
        payload: Prisma.$currencyPayload<ExtArgs>
        fields: Prisma.currencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.currencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.currencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          findFirst: {
            args: Prisma.currencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.currencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          findMany: {
            args: Prisma.currencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>[]
          }
          create: {
            args: Prisma.currencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          createMany: {
            args: Prisma.currencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.currencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          update: {
            args: Prisma.currencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          deleteMany: {
            args: Prisma.currencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.currencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.currencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$currencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.currencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.currencyCountArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      transaction_table: {
        payload: Prisma.$transaction_tablePayload<ExtArgs>
        fields: Prisma.transaction_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_tableFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_tableFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          findFirst: {
            args: Prisma.transaction_tableFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_tableFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          findMany: {
            args: Prisma.transaction_tableFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>[]
          }
          create: {
            args: Prisma.transaction_tableCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          createMany: {
            args: Prisma.transaction_tableCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transaction_tableDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          update: {
            args: Prisma.transaction_tableUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          deleteMany: {
            args: Prisma.transaction_tableDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_tableUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transaction_tableUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_tablePayload>
          }
          aggregate: {
            args: Prisma.Transaction_tableAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction_table>
          }
          groupBy: {
            args: Prisma.transaction_tableGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Transaction_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_tableCountArgs<ExtArgs>,
            result: $Utils.Optional<Transaction_tableCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      minners_account: {
        payload: Prisma.$minners_accountPayload<ExtArgs>
        fields: Prisma.minners_accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.minners_accountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.minners_accountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>
          }
          findFirst: {
            args: Prisma.minners_accountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.minners_accountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>
          }
          findMany: {
            args: Prisma.minners_accountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>[]
          }
          create: {
            args: Prisma.minners_accountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>
          }
          createMany: {
            args: Prisma.minners_accountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.minners_accountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>
          }
          update: {
            args: Prisma.minners_accountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>
          }
          deleteMany: {
            args: Prisma.minners_accountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.minners_accountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.minners_accountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$minners_accountPayload>
          }
          aggregate: {
            args: Prisma.Minners_accountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMinners_account>
          }
          groupBy: {
            args: Prisma.minners_accountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Minners_accountGroupByOutputType>[]
          }
          count: {
            args: Prisma.minners_accountCountArgs<ExtArgs>,
            result: $Utils.Optional<Minners_accountCountAggregateOutputType> | number
          }
        }
      }
      payment_manager_options: {
        payload: Prisma.$payment_manager_optionsPayload<ExtArgs>
        fields: Prisma.payment_manager_optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_manager_optionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_manager_optionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>
          }
          findFirst: {
            args: Prisma.payment_manager_optionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_manager_optionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>
          }
          findMany: {
            args: Prisma.payment_manager_optionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>[]
          }
          create: {
            args: Prisma.payment_manager_optionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>
          }
          createMany: {
            args: Prisma.payment_manager_optionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.payment_manager_optionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>
          }
          update: {
            args: Prisma.payment_manager_optionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>
          }
          deleteMany: {
            args: Prisma.payment_manager_optionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.payment_manager_optionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.payment_manager_optionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$payment_manager_optionsPayload>
          }
          aggregate: {
            args: Prisma.Payment_manager_optionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePayment_manager_options>
          }
          groupBy: {
            args: Prisma.payment_manager_optionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Payment_manager_optionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_manager_optionsCountArgs<ExtArgs>,
            result: $Utils.Optional<Payment_manager_optionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    transaction_table_transaction_table_currencyTocurrency: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table_transaction_table_currencyTocurrency?: boolean | CurrencyCountOutputTypeCountTransaction_table_transaction_table_currencyTocurrencyArgs
  }

  // Custom InputTypes

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountTransaction_table_transaction_table_currencyTocurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
  }



  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    transaction_table: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | UsersCountOutputTypeCountTransaction_tableArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
  }



  /**
   * Count Type Minners_accountCountOutputType
   */

  export type Minners_accountCountOutputType = {
    transaction_table: number
  }

  export type Minners_accountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | Minners_accountCountOutputTypeCountTransaction_tableArgs
  }

  // Custom InputTypes

  /**
   * Minners_accountCountOutputType without action
   */
  export type Minners_accountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Minners_accountCountOutputType
     */
    select?: Minners_accountCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Minners_accountCountOutputType without action
   */
  export type Minners_accountCountOutputTypeCountTransaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
  }



  /**
   * Models
   */

  /**
   * Model currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    id: number | null
    per_hash: number | null
    rate: number | null
  }

  export type CurrencySumAggregateOutputType = {
    id: number | null
    per_hash: number | null
    rate: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    currency_name: string | null
    currency_code: string | null
    is_exist: boolean | null
    per_hash: number | null
    rate: number | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    currency_name: string | null
    currency_code: string | null
    is_exist: boolean | null
    per_hash: number | null
    rate: number | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    created_at: number
    currency_name: number
    currency_code: number
    is_exist: number
    per_hash: number
    rate: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    id?: true
    per_hash?: true
    rate?: true
  }

  export type CurrencySumAggregateInputType = {
    id?: true
    per_hash?: true
    rate?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    created_at?: true
    currency_name?: true
    currency_code?: true
    is_exist?: true
    per_hash?: true
    rate?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    created_at?: true
    currency_name?: true
    currency_code?: true
    is_exist?: true
    per_hash?: true
    rate?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    created_at?: true
    currency_name?: true
    currency_code?: true
    is_exist?: true
    per_hash?: true
    rate?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currency to aggregate.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type currencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: currencyWhereInput
    orderBy?: currencyOrderByWithAggregationInput | currencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: currencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: number
    created_at: Date | null
    currency_name: string | null
    currency_code: string | null
    is_exist: boolean | null
    per_hash: number | null
    rate: number | null
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends currencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type currencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    currency_name?: boolean
    currency_code?: boolean
    is_exist?: boolean
    per_hash?: boolean
    rate?: boolean
    transaction_table_transaction_table_currencyTocurrency?: boolean | currency$transaction_table_transaction_table_currencyTocurrencyArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type currencySelectScalar = {
    id?: boolean
    created_at?: boolean
    currency_name?: boolean
    currency_code?: boolean
    is_exist?: boolean
    per_hash?: boolean
    rate?: boolean
  }

  export type currencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table_transaction_table_currencyTocurrency?: boolean | currency$transaction_table_transaction_table_currencyTocurrencyArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $currencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "currency"
    objects: {
      transaction_table_transaction_table_currencyTocurrency: Prisma.$transaction_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date | null
      currency_name: string | null
      currency_code: string | null
      is_exist: boolean | null
      per_hash: number | null
      rate: number | null
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }


  type currencyGetPayload<S extends boolean | null | undefined | currencyDefaultArgs> = $Result.GetResult<Prisma.$currencyPayload, S>

  type currencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<currencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface currencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['currency'], meta: { name: 'currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {currencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends currencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, currencyFindUniqueArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Currency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {currencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends currencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends currencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindFirstArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends currencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends currencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Currency.
     * @param {currencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
    **/
    create<T extends currencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, currencyCreateArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Currencies.
     *     @param {currencyCreateManyArgs} args - Arguments to create many Currencies.
     *     @example
     *     // Create many Currencies
     *     const currency = await prisma.currency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends currencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currency.
     * @param {currencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
    **/
    delete<T extends currencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, currencyDeleteArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Currency.
     * @param {currencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends currencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, currencyUpdateArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {currencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends currencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, currencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends currencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, currencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {currencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
    **/
    upsert<T extends currencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, currencyUpsertArgs<ExtArgs>>
    ): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends currencyCountArgs>(
      args?: Subset<T, currencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends currencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: currencyGroupByArgs['orderBy'] }
        : { orderBy?: currencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, currencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the currency model
   */
  readonly fields: currencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__currencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transaction_table_transaction_table_currencyTocurrency<T extends currency$transaction_table_transaction_table_currencyTocurrencyArgs<ExtArgs> = {}>(args?: Subset<T, currency$transaction_table_transaction_table_currencyTocurrencyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the currency model
   */ 
  interface currencyFieldRefs {
    readonly id: FieldRef<"currency", 'Int'>
    readonly created_at: FieldRef<"currency", 'DateTime'>
    readonly currency_name: FieldRef<"currency", 'String'>
    readonly currency_code: FieldRef<"currency", 'String'>
    readonly is_exist: FieldRef<"currency", 'Boolean'>
    readonly per_hash: FieldRef<"currency", 'Float'>
    readonly rate: FieldRef<"currency", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * currency findUnique
   */
  export type currencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where: currencyWhereUniqueInput
  }


  /**
   * currency findUniqueOrThrow
   */
  export type currencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where: currencyWhereUniqueInput
  }


  /**
   * currency findFirst
   */
  export type currencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * currency findFirstOrThrow
   */
  export type currencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * Filter, which currency to fetch.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * currency findMany
   */
  export type currencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currencyOrderByWithRelationInput | currencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing currencies.
     */
    cursor?: currencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * currency create
   */
  export type currencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * The data needed to create a currency.
     */
    data?: XOR<currencyCreateInput, currencyUncheckedCreateInput>
  }


  /**
   * currency createMany
   */
  export type currencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many currencies.
     */
    data: currencyCreateManyInput | currencyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * currency update
   */
  export type currencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * The data needed to update a currency.
     */
    data: XOR<currencyUpdateInput, currencyUncheckedUpdateInput>
    /**
     * Choose, which currency to update.
     */
    where: currencyWhereUniqueInput
  }


  /**
   * currency updateMany
   */
  export type currencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update currencies.
     */
    data: XOR<currencyUpdateManyMutationInput, currencyUncheckedUpdateManyInput>
    /**
     * Filter which currencies to update
     */
    where?: currencyWhereInput
  }


  /**
   * currency upsert
   */
  export type currencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * The filter to search for the currency to update in case it exists.
     */
    where: currencyWhereUniqueInput
    /**
     * In case the currency found by the `where` argument doesn't exist, create a new currency with this data.
     */
    create: XOR<currencyCreateInput, currencyUncheckedCreateInput>
    /**
     * In case the currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<currencyUpdateInput, currencyUncheckedUpdateInput>
  }


  /**
   * currency delete
   */
  export type currencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    /**
     * Filter which currency to delete.
     */
    where: currencyWhereUniqueInput
  }


  /**
   * currency deleteMany
   */
  export type currencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currencies to delete
     */
    where?: currencyWhereInput
  }


  /**
   * currency.transaction_table_transaction_table_currencyTocurrency
   */
  export type currency$transaction_table_transaction_table_currencyTocurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    cursor?: transaction_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }


  /**
   * currency without action
   */
  export type currencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
  }



  /**
   * Model transaction_table
   */

  export type AggregateTransaction_table = {
    _count: Transaction_tableCountAggregateOutputType | null
    _avg: Transaction_tableAvgAggregateOutputType | null
    _sum: Transaction_tableSumAggregateOutputType | null
    _min: Transaction_tableMinAggregateOutputType | null
    _max: Transaction_tableMaxAggregateOutputType | null
  }

  export type Transaction_tableAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    currency: number | null
    current_balance: number | null
    user: number | null
    hash_number: number | null
    minner_id: number | null
  }

  export type Transaction_tableSumAggregateOutputType = {
    id: number | null
    amount: number | null
    currency: number | null
    current_balance: number | null
    user: number | null
    hash_number: number | null
    minner_id: number | null
  }

  export type Transaction_tableMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    amount: number | null
    currency: number | null
    to_user: string | null
    current_balance: number | null
    status: string | null
    payout_user_hash: string | null
    payout_id: string | null
    referral: boolean | null
    user: number | null
    hash_number: number | null
    minner_id: number | null
  }

  export type Transaction_tableMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    amount: number | null
    currency: number | null
    to_user: string | null
    current_balance: number | null
    status: string | null
    payout_user_hash: string | null
    payout_id: string | null
    referral: boolean | null
    user: number | null
    hash_number: number | null
    minner_id: number | null
  }

  export type Transaction_tableCountAggregateOutputType = {
    id: number
    created_at: number
    amount: number
    currency: number
    to_user: number
    current_balance: number
    status: number
    payout_user_hash: number
    payout_id: number
    referral: number
    user: number
    hash_number: number
    minner_id: number
    _all: number
  }


  export type Transaction_tableAvgAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    current_balance?: true
    user?: true
    hash_number?: true
    minner_id?: true
  }

  export type Transaction_tableSumAggregateInputType = {
    id?: true
    amount?: true
    currency?: true
    current_balance?: true
    user?: true
    hash_number?: true
    minner_id?: true
  }

  export type Transaction_tableMinAggregateInputType = {
    id?: true
    created_at?: true
    amount?: true
    currency?: true
    to_user?: true
    current_balance?: true
    status?: true
    payout_user_hash?: true
    payout_id?: true
    referral?: true
    user?: true
    hash_number?: true
    minner_id?: true
  }

  export type Transaction_tableMaxAggregateInputType = {
    id?: true
    created_at?: true
    amount?: true
    currency?: true
    to_user?: true
    current_balance?: true
    status?: true
    payout_user_hash?: true
    payout_id?: true
    referral?: true
    user?: true
    hash_number?: true
    minner_id?: true
  }

  export type Transaction_tableCountAggregateInputType = {
    id?: true
    created_at?: true
    amount?: true
    currency?: true
    to_user?: true
    current_balance?: true
    status?: true
    payout_user_hash?: true
    payout_id?: true
    referral?: true
    user?: true
    hash_number?: true
    minner_id?: true
    _all?: true
  }

  export type Transaction_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_table to aggregate.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_tables
    **/
    _count?: true | Transaction_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_tableMaxAggregateInputType
  }

  export type GetTransaction_tableAggregateType<T extends Transaction_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_table[P]>
      : GetScalarType<T[P], AggregateTransaction_table[P]>
  }




  export type transaction_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithAggregationInput | transaction_tableOrderByWithAggregationInput[]
    by: Transaction_tableScalarFieldEnum[] | Transaction_tableScalarFieldEnum
    having?: transaction_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_tableCountAggregateInputType | true
    _avg?: Transaction_tableAvgAggregateInputType
    _sum?: Transaction_tableSumAggregateInputType
    _min?: Transaction_tableMinAggregateInputType
    _max?: Transaction_tableMaxAggregateInputType
  }

  export type Transaction_tableGroupByOutputType = {
    id: number
    created_at: Date | null
    amount: number | null
    currency: number | null
    to_user: string | null
    current_balance: number | null
    status: string | null
    payout_user_hash: string | null
    payout_id: string | null
    referral: boolean | null
    user: number | null
    hash_number: number | null
    minner_id: number | null
    _count: Transaction_tableCountAggregateOutputType | null
    _avg: Transaction_tableAvgAggregateOutputType | null
    _sum: Transaction_tableSumAggregateOutputType | null
    _min: Transaction_tableMinAggregateOutputType | null
    _max: Transaction_tableMaxAggregateOutputType | null
  }

  type GetTransaction_tableGroupByPayload<T extends transaction_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_tableGroupByOutputType[P]>
        }
      >
    >


  export type transaction_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    amount?: boolean
    currency?: boolean
    to_user?: boolean
    current_balance?: boolean
    status?: boolean
    payout_user_hash?: boolean
    payout_id?: boolean
    referral?: boolean
    user?: boolean
    hash_number?: boolean
    minner_id?: boolean
    currency_transaction_table_currencyTocurrency?: boolean | transaction_table$currency_transaction_table_currencyTocurrencyArgs<ExtArgs>
    minners_account?: boolean | transaction_table$minners_accountArgs<ExtArgs>
    users?: boolean | transaction_table$usersArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_table"]>

  export type transaction_tableSelectScalar = {
    id?: boolean
    created_at?: boolean
    amount?: boolean
    currency?: boolean
    to_user?: boolean
    current_balance?: boolean
    status?: boolean
    payout_user_hash?: boolean
    payout_id?: boolean
    referral?: boolean
    user?: boolean
    hash_number?: boolean
    minner_id?: boolean
  }

  export type transaction_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currency_transaction_table_currencyTocurrency?: boolean | transaction_table$currency_transaction_table_currencyTocurrencyArgs<ExtArgs>
    minners_account?: boolean | transaction_table$minners_accountArgs<ExtArgs>
    users?: boolean | transaction_table$usersArgs<ExtArgs>
  }


  export type $transaction_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_table"
    objects: {
      currency_transaction_table_currencyTocurrency: Prisma.$currencyPayload<ExtArgs> | null
      minners_account: Prisma.$minners_accountPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date | null
      amount: number | null
      currency: number | null
      to_user: string | null
      current_balance: number | null
      status: string | null
      payout_user_hash: string | null
      payout_id: string | null
      referral: boolean | null
      user: number | null
      hash_number: number | null
      minner_id: number | null
    }, ExtArgs["result"]["transaction_table"]>
    composites: {}
  }


  type transaction_tableGetPayload<S extends boolean | null | undefined | transaction_tableDefaultArgs> = $Result.GetResult<Prisma.$transaction_tablePayload, S>

  type transaction_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transaction_tableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Transaction_tableCountAggregateInputType | true
    }

  export interface transaction_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_table'], meta: { name: 'transaction_table' } }
    /**
     * Find zero or one Transaction_table that matches the filter.
     * @param {transaction_tableFindUniqueArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transaction_tableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_tableFindUniqueArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction_table that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transaction_tableFindUniqueOrThrowArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transaction_tableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_tableFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableFindFirstArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transaction_tableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_tableFindFirstArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableFindFirstOrThrowArgs} args - Arguments to find a Transaction_table
     * @example
     * // Get one Transaction_table
     * const transaction_table = await prisma.transaction_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transaction_tableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_tableFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transaction_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_tables
     * const transaction_tables = await prisma.transaction_table.findMany()
     * 
     * // Get first 10 Transaction_tables
     * const transaction_tables = await prisma.transaction_table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_tableWithIdOnly = await prisma.transaction_table.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transaction_tableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_tableFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction_table.
     * @param {transaction_tableCreateArgs} args - Arguments to create a Transaction_table.
     * @example
     * // Create one Transaction_table
     * const Transaction_table = await prisma.transaction_table.create({
     *   data: {
     *     // ... data to create a Transaction_table
     *   }
     * })
     * 
    **/
    create<T extends transaction_tableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_tableCreateArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transaction_tables.
     *     @param {transaction_tableCreateManyArgs} args - Arguments to create many Transaction_tables.
     *     @example
     *     // Create many Transaction_tables
     *     const transaction_table = await prisma.transaction_table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transaction_tableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_tableCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction_table.
     * @param {transaction_tableDeleteArgs} args - Arguments to delete one Transaction_table.
     * @example
     * // Delete one Transaction_table
     * const Transaction_table = await prisma.transaction_table.delete({
     *   where: {
     *     // ... filter to delete one Transaction_table
     *   }
     * })
     * 
    **/
    delete<T extends transaction_tableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_tableDeleteArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction_table.
     * @param {transaction_tableUpdateArgs} args - Arguments to update one Transaction_table.
     * @example
     * // Update one Transaction_table
     * const transaction_table = await prisma.transaction_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transaction_tableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_tableUpdateArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transaction_tables.
     * @param {transaction_tableDeleteManyArgs} args - Arguments to filter Transaction_tables to delete.
     * @example
     * // Delete a few Transaction_tables
     * const { count } = await prisma.transaction_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transaction_tableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_tableDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_tables
     * const transaction_table = await prisma.transaction_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transaction_tableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_tableUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction_table.
     * @param {transaction_tableUpsertArgs} args - Arguments to update or create a Transaction_table.
     * @example
     * // Update or create a Transaction_table
     * const transaction_table = await prisma.transaction_table.upsert({
     *   create: {
     *     // ... data to create a Transaction_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_table we want to update
     *   }
     * })
    **/
    upsert<T extends transaction_tableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_tableUpsertArgs<ExtArgs>>
    ): Prisma__transaction_tableClient<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transaction_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableCountArgs} args - Arguments to filter Transaction_tables to count.
     * @example
     * // Count the number of Transaction_tables
     * const count = await prisma.transaction_table.count({
     *   where: {
     *     // ... the filter for the Transaction_tables we want to count
     *   }
     * })
    **/
    count<T extends transaction_tableCountArgs>(
      args?: Subset<T, transaction_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_tableAggregateArgs>(args: Subset<T, Transaction_tableAggregateArgs>): Prisma.PrismaPromise<GetTransaction_tableAggregateType<T>>

    /**
     * Group by Transaction_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaction_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_tableGroupByArgs['orderBy'] }
        : { orderBy?: transaction_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_table model
   */
  readonly fields: transaction_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    currency_transaction_table_currencyTocurrency<T extends transaction_table$currency_transaction_table_currencyTocurrencyArgs<ExtArgs> = {}>(args?: Subset<T, transaction_table$currency_transaction_table_currencyTocurrencyArgs<ExtArgs>>): Prisma__currencyClient<$Result.GetResult<Prisma.$currencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    minners_account<T extends transaction_table$minners_accountArgs<ExtArgs> = {}>(args?: Subset<T, transaction_table$minners_accountArgs<ExtArgs>>): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    users<T extends transaction_table$usersArgs<ExtArgs> = {}>(args?: Subset<T, transaction_table$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transaction_table model
   */ 
  interface transaction_tableFieldRefs {
    readonly id: FieldRef<"transaction_table", 'Int'>
    readonly created_at: FieldRef<"transaction_table", 'DateTime'>
    readonly amount: FieldRef<"transaction_table", 'Float'>
    readonly currency: FieldRef<"transaction_table", 'Int'>
    readonly to_user: FieldRef<"transaction_table", 'String'>
    readonly current_balance: FieldRef<"transaction_table", 'Float'>
    readonly status: FieldRef<"transaction_table", 'String'>
    readonly payout_user_hash: FieldRef<"transaction_table", 'String'>
    readonly payout_id: FieldRef<"transaction_table", 'String'>
    readonly referral: FieldRef<"transaction_table", 'Boolean'>
    readonly user: FieldRef<"transaction_table", 'Int'>
    readonly hash_number: FieldRef<"transaction_table", 'Float'>
    readonly minner_id: FieldRef<"transaction_table", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * transaction_table findUnique
   */
  export type transaction_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where: transaction_tableWhereUniqueInput
  }


  /**
   * transaction_table findUniqueOrThrow
   */
  export type transaction_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where: transaction_tableWhereUniqueInput
  }


  /**
   * transaction_table findFirst
   */
  export type transaction_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_tables.
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_tables.
     */
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }


  /**
   * transaction_table findFirstOrThrow
   */
  export type transaction_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_table to fetch.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_tables.
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_tables.
     */
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }


  /**
   * transaction_table findMany
   */
  export type transaction_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter, which transaction_tables to fetch.
     */
    where?: transaction_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_tables to fetch.
     */
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_tables.
     */
    cursor?: transaction_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_tables.
     */
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }


  /**
   * transaction_table create
   */
  export type transaction_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_table.
     */
    data?: XOR<transaction_tableCreateInput, transaction_tableUncheckedCreateInput>
  }


  /**
   * transaction_table createMany
   */
  export type transaction_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_tables.
     */
    data: transaction_tableCreateManyInput | transaction_tableCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * transaction_table update
   */
  export type transaction_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_table.
     */
    data: XOR<transaction_tableUpdateInput, transaction_tableUncheckedUpdateInput>
    /**
     * Choose, which transaction_table to update.
     */
    where: transaction_tableWhereUniqueInput
  }


  /**
   * transaction_table updateMany
   */
  export type transaction_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_tables.
     */
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyInput>
    /**
     * Filter which transaction_tables to update
     */
    where?: transaction_tableWhereInput
  }


  /**
   * transaction_table upsert
   */
  export type transaction_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_table to update in case it exists.
     */
    where: transaction_tableWhereUniqueInput
    /**
     * In case the transaction_table found by the `where` argument doesn't exist, create a new transaction_table with this data.
     */
    create: XOR<transaction_tableCreateInput, transaction_tableUncheckedCreateInput>
    /**
     * In case the transaction_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_tableUpdateInput, transaction_tableUncheckedUpdateInput>
  }


  /**
   * transaction_table delete
   */
  export type transaction_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    /**
     * Filter which transaction_table to delete.
     */
    where: transaction_tableWhereUniqueInput
  }


  /**
   * transaction_table deleteMany
   */
  export type transaction_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_tables to delete
     */
    where?: transaction_tableWhereInput
  }


  /**
   * transaction_table.currency_transaction_table_currencyTocurrency
   */
  export type transaction_table$currency_transaction_table_currencyTocurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currency
     */
    select?: currencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: currencyInclude<ExtArgs> | null
    where?: currencyWhereInput
  }


  /**
   * transaction_table.minners_account
   */
  export type transaction_table$minners_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    where?: minners_accountWhereInput
  }


  /**
   * transaction_table.users
   */
  export type transaction_table$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * transaction_table without action
   */
  export type transaction_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
  }



  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    balance_hash: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    balance_hash: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    username: string | null
    password: string | null
    is_exist: boolean | null
    balance_hash: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    username: string | null
    password: string | null
    is_exist: boolean | null
    balance_hash: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    username: number
    password: number
    is_exist: number
    balance_hash: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    balance_hash?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    balance_hash?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    username?: true
    password?: true
    is_exist?: true
    balance_hash?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    username?: true
    password?: true
    is_exist?: true
    balance_hash?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    username?: true
    password?: true
    is_exist?: true
    balance_hash?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    created_at: Date | null
    username: string | null
    password: string | null
    is_exist: boolean | null
    balance_hash: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    username?: boolean
    password?: boolean
    is_exist?: boolean
    balance_hash?: boolean
    transaction_table?: boolean | users$transaction_tableArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    username?: boolean
    password?: boolean
    is_exist?: boolean
    balance_hash?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | users$transaction_tableArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      transaction_table: Prisma.$transaction_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date | null
      username: string | null
      password: string | null
      is_exist: boolean | null
      balance_hash: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transaction_table<T extends users$transaction_tableArgs<ExtArgs> = {}>(args?: Subset<T, users$transaction_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly is_exist: FieldRef<"users", 'Boolean'>
    readonly balance_hash: FieldRef<"users", 'Float'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.transaction_table
   */
  export type users$transaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    cursor?: transaction_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model minners_account
   */

  export type AggregateMinners_account = {
    _count: Minners_accountCountAggregateOutputType | null
    _avg: Minners_accountAvgAggregateOutputType | null
    _sum: Minners_accountSumAggregateOutputType | null
    _min: Minners_accountMinAggregateOutputType | null
    _max: Minners_accountMaxAggregateOutputType | null
  }

  export type Minners_accountAvgAggregateOutputType = {
    id: number | null
    balance_hash: number | null
    total_hashes: number | null
  }

  export type Minners_accountSumAggregateOutputType = {
    id: number | null
    balance_hash: number | null
    total_hashes: number | null
  }

  export type Minners_accountMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    email: string | null
    password: string | null
    is_exist: boolean | null
    balance_hash: number | null
    balance_check_at: Date | null
    total_hashes: number | null
    updated_at: Date | null
  }

  export type Minners_accountMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    email: string | null
    password: string | null
    is_exist: boolean | null
    balance_hash: number | null
    balance_check_at: Date | null
    total_hashes: number | null
    updated_at: Date | null
  }

  export type Minners_accountCountAggregateOutputType = {
    id: number
    created_at: number
    email: number
    password: number
    is_exist: number
    balance_hash: number
    balance_check_at: number
    total_hashes: number
    updated_at: number
    _all: number
  }


  export type Minners_accountAvgAggregateInputType = {
    id?: true
    balance_hash?: true
    total_hashes?: true
  }

  export type Minners_accountSumAggregateInputType = {
    id?: true
    balance_hash?: true
    total_hashes?: true
  }

  export type Minners_accountMinAggregateInputType = {
    id?: true
    created_at?: true
    email?: true
    password?: true
    is_exist?: true
    balance_hash?: true
    balance_check_at?: true
    total_hashes?: true
    updated_at?: true
  }

  export type Minners_accountMaxAggregateInputType = {
    id?: true
    created_at?: true
    email?: true
    password?: true
    is_exist?: true
    balance_hash?: true
    balance_check_at?: true
    total_hashes?: true
    updated_at?: true
  }

  export type Minners_accountCountAggregateInputType = {
    id?: true
    created_at?: true
    email?: true
    password?: true
    is_exist?: true
    balance_hash?: true
    balance_check_at?: true
    total_hashes?: true
    updated_at?: true
    _all?: true
  }

  export type Minners_accountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which minners_account to aggregate.
     */
    where?: minners_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of minners_accounts to fetch.
     */
    orderBy?: minners_accountOrderByWithRelationInput | minners_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: minners_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` minners_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` minners_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned minners_accounts
    **/
    _count?: true | Minners_accountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Minners_accountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Minners_accountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Minners_accountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Minners_accountMaxAggregateInputType
  }

  export type GetMinners_accountAggregateType<T extends Minners_accountAggregateArgs> = {
        [P in keyof T & keyof AggregateMinners_account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMinners_account[P]>
      : GetScalarType<T[P], AggregateMinners_account[P]>
  }




  export type minners_accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: minners_accountWhereInput
    orderBy?: minners_accountOrderByWithAggregationInput | minners_accountOrderByWithAggregationInput[]
    by: Minners_accountScalarFieldEnum[] | Minners_accountScalarFieldEnum
    having?: minners_accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Minners_accountCountAggregateInputType | true
    _avg?: Minners_accountAvgAggregateInputType
    _sum?: Minners_accountSumAggregateInputType
    _min?: Minners_accountMinAggregateInputType
    _max?: Minners_accountMaxAggregateInputType
  }

  export type Minners_accountGroupByOutputType = {
    id: number
    created_at: Date | null
    email: string | null
    password: string | null
    is_exist: boolean | null
    balance_hash: number | null
    balance_check_at: Date | null
    total_hashes: number | null
    updated_at: Date | null
    _count: Minners_accountCountAggregateOutputType | null
    _avg: Minners_accountAvgAggregateOutputType | null
    _sum: Minners_accountSumAggregateOutputType | null
    _min: Minners_accountMinAggregateOutputType | null
    _max: Minners_accountMaxAggregateOutputType | null
  }

  type GetMinners_accountGroupByPayload<T extends minners_accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Minners_accountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Minners_accountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Minners_accountGroupByOutputType[P]>
            : GetScalarType<T[P], Minners_accountGroupByOutputType[P]>
        }
      >
    >


  export type minners_accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    email?: boolean
    password?: boolean
    is_exist?: boolean
    balance_hash?: boolean
    balance_check_at?: boolean
    total_hashes?: boolean
    updated_at?: boolean
    transaction_table?: boolean | minners_account$transaction_tableArgs<ExtArgs>
    _count?: boolean | Minners_accountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["minners_account"]>

  export type minners_accountSelectScalar = {
    id?: boolean
    created_at?: boolean
    email?: boolean
    password?: boolean
    is_exist?: boolean
    balance_hash?: boolean
    balance_check_at?: boolean
    total_hashes?: boolean
    updated_at?: boolean
  }

  export type minners_accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_table?: boolean | minners_account$transaction_tableArgs<ExtArgs>
    _count?: boolean | Minners_accountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $minners_accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "minners_account"
    objects: {
      transaction_table: Prisma.$transaction_tablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date | null
      email: string | null
      password: string | null
      is_exist: boolean | null
      balance_hash: number | null
      balance_check_at: Date | null
      total_hashes: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["minners_account"]>
    composites: {}
  }


  type minners_accountGetPayload<S extends boolean | null | undefined | minners_accountDefaultArgs> = $Result.GetResult<Prisma.$minners_accountPayload, S>

  type minners_accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<minners_accountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Minners_accountCountAggregateInputType | true
    }

  export interface minners_accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['minners_account'], meta: { name: 'minners_account' } }
    /**
     * Find zero or one Minners_account that matches the filter.
     * @param {minners_accountFindUniqueArgs} args - Arguments to find a Minners_account
     * @example
     * // Get one Minners_account
     * const minners_account = await prisma.minners_account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends minners_accountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, minners_accountFindUniqueArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Minners_account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {minners_accountFindUniqueOrThrowArgs} args - Arguments to find a Minners_account
     * @example
     * // Get one Minners_account
     * const minners_account = await prisma.minners_account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends minners_accountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, minners_accountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Minners_account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minners_accountFindFirstArgs} args - Arguments to find a Minners_account
     * @example
     * // Get one Minners_account
     * const minners_account = await prisma.minners_account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends minners_accountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, minners_accountFindFirstArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Minners_account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minners_accountFindFirstOrThrowArgs} args - Arguments to find a Minners_account
     * @example
     * // Get one Minners_account
     * const minners_account = await prisma.minners_account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends minners_accountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, minners_accountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Minners_accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minners_accountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Minners_accounts
     * const minners_accounts = await prisma.minners_account.findMany()
     * 
     * // Get first 10 Minners_accounts
     * const minners_accounts = await prisma.minners_account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const minners_accountWithIdOnly = await prisma.minners_account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends minners_accountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, minners_accountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Minners_account.
     * @param {minners_accountCreateArgs} args - Arguments to create a Minners_account.
     * @example
     * // Create one Minners_account
     * const Minners_account = await prisma.minners_account.create({
     *   data: {
     *     // ... data to create a Minners_account
     *   }
     * })
     * 
    **/
    create<T extends minners_accountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, minners_accountCreateArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Minners_accounts.
     *     @param {minners_accountCreateManyArgs} args - Arguments to create many Minners_accounts.
     *     @example
     *     // Create many Minners_accounts
     *     const minners_account = await prisma.minners_account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends minners_accountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, minners_accountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Minners_account.
     * @param {minners_accountDeleteArgs} args - Arguments to delete one Minners_account.
     * @example
     * // Delete one Minners_account
     * const Minners_account = await prisma.minners_account.delete({
     *   where: {
     *     // ... filter to delete one Minners_account
     *   }
     * })
     * 
    **/
    delete<T extends minners_accountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, minners_accountDeleteArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Minners_account.
     * @param {minners_accountUpdateArgs} args - Arguments to update one Minners_account.
     * @example
     * // Update one Minners_account
     * const minners_account = await prisma.minners_account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends minners_accountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, minners_accountUpdateArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Minners_accounts.
     * @param {minners_accountDeleteManyArgs} args - Arguments to filter Minners_accounts to delete.
     * @example
     * // Delete a few Minners_accounts
     * const { count } = await prisma.minners_account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends minners_accountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, minners_accountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minners_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minners_accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Minners_accounts
     * const minners_account = await prisma.minners_account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends minners_accountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, minners_accountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Minners_account.
     * @param {minners_accountUpsertArgs} args - Arguments to update or create a Minners_account.
     * @example
     * // Update or create a Minners_account
     * const minners_account = await prisma.minners_account.upsert({
     *   create: {
     *     // ... data to create a Minners_account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Minners_account we want to update
     *   }
     * })
    **/
    upsert<T extends minners_accountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, minners_accountUpsertArgs<ExtArgs>>
    ): Prisma__minners_accountClient<$Result.GetResult<Prisma.$minners_accountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Minners_accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minners_accountCountArgs} args - Arguments to filter Minners_accounts to count.
     * @example
     * // Count the number of Minners_accounts
     * const count = await prisma.minners_account.count({
     *   where: {
     *     // ... the filter for the Minners_accounts we want to count
     *   }
     * })
    **/
    count<T extends minners_accountCountArgs>(
      args?: Subset<T, minners_accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Minners_accountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Minners_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Minners_accountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Minners_accountAggregateArgs>(args: Subset<T, Minners_accountAggregateArgs>): Prisma.PrismaPromise<GetMinners_accountAggregateType<T>>

    /**
     * Group by Minners_account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {minners_accountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends minners_accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: minners_accountGroupByArgs['orderBy'] }
        : { orderBy?: minners_accountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, minners_accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMinners_accountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the minners_account model
   */
  readonly fields: minners_accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for minners_account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__minners_accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transaction_table<T extends minners_account$transaction_tableArgs<ExtArgs> = {}>(args?: Subset<T, minners_account$transaction_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_tablePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the minners_account model
   */ 
  interface minners_accountFieldRefs {
    readonly id: FieldRef<"minners_account", 'Int'>
    readonly created_at: FieldRef<"minners_account", 'DateTime'>
    readonly email: FieldRef<"minners_account", 'String'>
    readonly password: FieldRef<"minners_account", 'String'>
    readonly is_exist: FieldRef<"minners_account", 'Boolean'>
    readonly balance_hash: FieldRef<"minners_account", 'Float'>
    readonly balance_check_at: FieldRef<"minners_account", 'DateTime'>
    readonly total_hashes: FieldRef<"minners_account", 'Float'>
    readonly updated_at: FieldRef<"minners_account", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * minners_account findUnique
   */
  export type minners_accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * Filter, which minners_account to fetch.
     */
    where: minners_accountWhereUniqueInput
  }


  /**
   * minners_account findUniqueOrThrow
   */
  export type minners_accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * Filter, which minners_account to fetch.
     */
    where: minners_accountWhereUniqueInput
  }


  /**
   * minners_account findFirst
   */
  export type minners_accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * Filter, which minners_account to fetch.
     */
    where?: minners_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of minners_accounts to fetch.
     */
    orderBy?: minners_accountOrderByWithRelationInput | minners_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for minners_accounts.
     */
    cursor?: minners_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` minners_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` minners_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of minners_accounts.
     */
    distinct?: Minners_accountScalarFieldEnum | Minners_accountScalarFieldEnum[]
  }


  /**
   * minners_account findFirstOrThrow
   */
  export type minners_accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * Filter, which minners_account to fetch.
     */
    where?: minners_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of minners_accounts to fetch.
     */
    orderBy?: minners_accountOrderByWithRelationInput | minners_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for minners_accounts.
     */
    cursor?: minners_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` minners_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` minners_accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of minners_accounts.
     */
    distinct?: Minners_accountScalarFieldEnum | Minners_accountScalarFieldEnum[]
  }


  /**
   * minners_account findMany
   */
  export type minners_accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * Filter, which minners_accounts to fetch.
     */
    where?: minners_accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of minners_accounts to fetch.
     */
    orderBy?: minners_accountOrderByWithRelationInput | minners_accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing minners_accounts.
     */
    cursor?: minners_accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` minners_accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` minners_accounts.
     */
    skip?: number
    distinct?: Minners_accountScalarFieldEnum | Minners_accountScalarFieldEnum[]
  }


  /**
   * minners_account create
   */
  export type minners_accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * The data needed to create a minners_account.
     */
    data?: XOR<minners_accountCreateInput, minners_accountUncheckedCreateInput>
  }


  /**
   * minners_account createMany
   */
  export type minners_accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many minners_accounts.
     */
    data: minners_accountCreateManyInput | minners_accountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * minners_account update
   */
  export type minners_accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * The data needed to update a minners_account.
     */
    data: XOR<minners_accountUpdateInput, minners_accountUncheckedUpdateInput>
    /**
     * Choose, which minners_account to update.
     */
    where: minners_accountWhereUniqueInput
  }


  /**
   * minners_account updateMany
   */
  export type minners_accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update minners_accounts.
     */
    data: XOR<minners_accountUpdateManyMutationInput, minners_accountUncheckedUpdateManyInput>
    /**
     * Filter which minners_accounts to update
     */
    where?: minners_accountWhereInput
  }


  /**
   * minners_account upsert
   */
  export type minners_accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * The filter to search for the minners_account to update in case it exists.
     */
    where: minners_accountWhereUniqueInput
    /**
     * In case the minners_account found by the `where` argument doesn't exist, create a new minners_account with this data.
     */
    create: XOR<minners_accountCreateInput, minners_accountUncheckedCreateInput>
    /**
     * In case the minners_account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<minners_accountUpdateInput, minners_accountUncheckedUpdateInput>
  }


  /**
   * minners_account delete
   */
  export type minners_accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
    /**
     * Filter which minners_account to delete.
     */
    where: minners_accountWhereUniqueInput
  }


  /**
   * minners_account deleteMany
   */
  export type minners_accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which minners_accounts to delete
     */
    where?: minners_accountWhereInput
  }


  /**
   * minners_account.transaction_table
   */
  export type minners_account$transaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_table
     */
    select?: transaction_tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_tableInclude<ExtArgs> | null
    where?: transaction_tableWhereInput
    orderBy?: transaction_tableOrderByWithRelationInput | transaction_tableOrderByWithRelationInput[]
    cursor?: transaction_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_tableScalarFieldEnum | Transaction_tableScalarFieldEnum[]
  }


  /**
   * minners_account without action
   */
  export type minners_accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the minners_account
     */
    select?: minners_accountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: minners_accountInclude<ExtArgs> | null
  }



  /**
   * Model payment_manager_options
   */

  export type AggregatePayment_manager_options = {
    _count: Payment_manager_optionsCountAggregateOutputType | null
    _avg: Payment_manager_optionsAvgAggregateOutputType | null
    _sum: Payment_manager_optionsSumAggregateOutputType | null
    _min: Payment_manager_optionsMinAggregateOutputType | null
    _max: Payment_manager_optionsMaxAggregateOutputType | null
  }

  export type Payment_manager_optionsAvgAggregateOutputType = {
    id: number | null
  }

  export type Payment_manager_optionsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Payment_manager_optionsMinAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    auto_transaction: boolean | null
    is_exist: boolean | null
  }

  export type Payment_manager_optionsMaxAggregateOutputType = {
    id: bigint | null
    created_at: Date | null
    auto_transaction: boolean | null
    is_exist: boolean | null
  }

  export type Payment_manager_optionsCountAggregateOutputType = {
    id: number
    created_at: number
    auto_transaction: number
    is_exist: number
    _all: number
  }


  export type Payment_manager_optionsAvgAggregateInputType = {
    id?: true
  }

  export type Payment_manager_optionsSumAggregateInputType = {
    id?: true
  }

  export type Payment_manager_optionsMinAggregateInputType = {
    id?: true
    created_at?: true
    auto_transaction?: true
    is_exist?: true
  }

  export type Payment_manager_optionsMaxAggregateInputType = {
    id?: true
    created_at?: true
    auto_transaction?: true
    is_exist?: true
  }

  export type Payment_manager_optionsCountAggregateInputType = {
    id?: true
    created_at?: true
    auto_transaction?: true
    is_exist?: true
    _all?: true
  }

  export type Payment_manager_optionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_manager_options to aggregate.
     */
    where?: payment_manager_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_manager_options to fetch.
     */
    orderBy?: payment_manager_optionsOrderByWithRelationInput | payment_manager_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_manager_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_manager_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_manager_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_manager_options
    **/
    _count?: true | Payment_manager_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_manager_optionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_manager_optionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_manager_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_manager_optionsMaxAggregateInputType
  }

  export type GetPayment_manager_optionsAggregateType<T extends Payment_manager_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_manager_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_manager_options[P]>
      : GetScalarType<T[P], AggregatePayment_manager_options[P]>
  }




  export type payment_manager_optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_manager_optionsWhereInput
    orderBy?: payment_manager_optionsOrderByWithAggregationInput | payment_manager_optionsOrderByWithAggregationInput[]
    by: Payment_manager_optionsScalarFieldEnum[] | Payment_manager_optionsScalarFieldEnum
    having?: payment_manager_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_manager_optionsCountAggregateInputType | true
    _avg?: Payment_manager_optionsAvgAggregateInputType
    _sum?: Payment_manager_optionsSumAggregateInputType
    _min?: Payment_manager_optionsMinAggregateInputType
    _max?: Payment_manager_optionsMaxAggregateInputType
  }

  export type Payment_manager_optionsGroupByOutputType = {
    id: bigint
    created_at: Date
    auto_transaction: boolean | null
    is_exist: boolean | null
    _count: Payment_manager_optionsCountAggregateOutputType | null
    _avg: Payment_manager_optionsAvgAggregateOutputType | null
    _sum: Payment_manager_optionsSumAggregateOutputType | null
    _min: Payment_manager_optionsMinAggregateOutputType | null
    _max: Payment_manager_optionsMaxAggregateOutputType | null
  }

  type GetPayment_manager_optionsGroupByPayload<T extends payment_manager_optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_manager_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_manager_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_manager_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_manager_optionsGroupByOutputType[P]>
        }
      >
    >


  export type payment_manager_optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    auto_transaction?: boolean
    is_exist?: boolean
  }, ExtArgs["result"]["payment_manager_options"]>

  export type payment_manager_optionsSelectScalar = {
    id?: boolean
    created_at?: boolean
    auto_transaction?: boolean
    is_exist?: boolean
  }


  export type $payment_manager_optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_manager_options"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      created_at: Date
      auto_transaction: boolean | null
      is_exist: boolean | null
    }, ExtArgs["result"]["payment_manager_options"]>
    composites: {}
  }


  type payment_manager_optionsGetPayload<S extends boolean | null | undefined | payment_manager_optionsDefaultArgs> = $Result.GetResult<Prisma.$payment_manager_optionsPayload, S>

  type payment_manager_optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<payment_manager_optionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Payment_manager_optionsCountAggregateInputType | true
    }

  export interface payment_manager_optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_manager_options'], meta: { name: 'payment_manager_options' } }
    /**
     * Find zero or one Payment_manager_options that matches the filter.
     * @param {payment_manager_optionsFindUniqueArgs} args - Arguments to find a Payment_manager_options
     * @example
     * // Get one Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends payment_manager_optionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, payment_manager_optionsFindUniqueArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Payment_manager_options that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {payment_manager_optionsFindUniqueOrThrowArgs} args - Arguments to find a Payment_manager_options
     * @example
     * // Get one Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends payment_manager_optionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_manager_optionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Payment_manager_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_manager_optionsFindFirstArgs} args - Arguments to find a Payment_manager_options
     * @example
     * // Get one Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends payment_manager_optionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_manager_optionsFindFirstArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Payment_manager_options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_manager_optionsFindFirstOrThrowArgs} args - Arguments to find a Payment_manager_options
     * @example
     * // Get one Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends payment_manager_optionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_manager_optionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Payment_manager_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_manager_optionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.findMany()
     * 
     * // Get first 10 Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_manager_optionsWithIdOnly = await prisma.payment_manager_options.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends payment_manager_optionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_manager_optionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Payment_manager_options.
     * @param {payment_manager_optionsCreateArgs} args - Arguments to create a Payment_manager_options.
     * @example
     * // Create one Payment_manager_options
     * const Payment_manager_options = await prisma.payment_manager_options.create({
     *   data: {
     *     // ... data to create a Payment_manager_options
     *   }
     * })
     * 
    **/
    create<T extends payment_manager_optionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_manager_optionsCreateArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Payment_manager_options.
     *     @param {payment_manager_optionsCreateManyArgs} args - Arguments to create many Payment_manager_options.
     *     @example
     *     // Create many Payment_manager_options
     *     const payment_manager_options = await prisma.payment_manager_options.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends payment_manager_optionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_manager_optionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment_manager_options.
     * @param {payment_manager_optionsDeleteArgs} args - Arguments to delete one Payment_manager_options.
     * @example
     * // Delete one Payment_manager_options
     * const Payment_manager_options = await prisma.payment_manager_options.delete({
     *   where: {
     *     // ... filter to delete one Payment_manager_options
     *   }
     * })
     * 
    **/
    delete<T extends payment_manager_optionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payment_manager_optionsDeleteArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Payment_manager_options.
     * @param {payment_manager_optionsUpdateArgs} args - Arguments to update one Payment_manager_options.
     * @example
     * // Update one Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends payment_manager_optionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_manager_optionsUpdateArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Payment_manager_options.
     * @param {payment_manager_optionsDeleteManyArgs} args - Arguments to filter Payment_manager_options to delete.
     * @example
     * // Delete a few Payment_manager_options
     * const { count } = await prisma.payment_manager_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends payment_manager_optionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_manager_optionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_manager_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_manager_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends payment_manager_optionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payment_manager_optionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment_manager_options.
     * @param {payment_manager_optionsUpsertArgs} args - Arguments to update or create a Payment_manager_options.
     * @example
     * // Update or create a Payment_manager_options
     * const payment_manager_options = await prisma.payment_manager_options.upsert({
     *   create: {
     *     // ... data to create a Payment_manager_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_manager_options we want to update
     *   }
     * })
    **/
    upsert<T extends payment_manager_optionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payment_manager_optionsUpsertArgs<ExtArgs>>
    ): Prisma__payment_manager_optionsClient<$Result.GetResult<Prisma.$payment_manager_optionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Payment_manager_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_manager_optionsCountArgs} args - Arguments to filter Payment_manager_options to count.
     * @example
     * // Count the number of Payment_manager_options
     * const count = await prisma.payment_manager_options.count({
     *   where: {
     *     // ... the filter for the Payment_manager_options we want to count
     *   }
     * })
    **/
    count<T extends payment_manager_optionsCountArgs>(
      args?: Subset<T, payment_manager_optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_manager_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_manager_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_manager_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Payment_manager_optionsAggregateArgs>(args: Subset<T, Payment_manager_optionsAggregateArgs>): Prisma.PrismaPromise<GetPayment_manager_optionsAggregateType<T>>

    /**
     * Group by Payment_manager_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_manager_optionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payment_manager_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_manager_optionsGroupByArgs['orderBy'] }
        : { orderBy?: payment_manager_optionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payment_manager_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_manager_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_manager_options model
   */
  readonly fields: payment_manager_optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_manager_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_manager_optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the payment_manager_options model
   */ 
  interface payment_manager_optionsFieldRefs {
    readonly id: FieldRef<"payment_manager_options", 'BigInt'>
    readonly created_at: FieldRef<"payment_manager_options", 'DateTime'>
    readonly auto_transaction: FieldRef<"payment_manager_options", 'Boolean'>
    readonly is_exist: FieldRef<"payment_manager_options", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * payment_manager_options findUnique
   */
  export type payment_manager_optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * Filter, which payment_manager_options to fetch.
     */
    where: payment_manager_optionsWhereUniqueInput
  }


  /**
   * payment_manager_options findUniqueOrThrow
   */
  export type payment_manager_optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * Filter, which payment_manager_options to fetch.
     */
    where: payment_manager_optionsWhereUniqueInput
  }


  /**
   * payment_manager_options findFirst
   */
  export type payment_manager_optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * Filter, which payment_manager_options to fetch.
     */
    where?: payment_manager_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_manager_options to fetch.
     */
    orderBy?: payment_manager_optionsOrderByWithRelationInput | payment_manager_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_manager_options.
     */
    cursor?: payment_manager_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_manager_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_manager_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_manager_options.
     */
    distinct?: Payment_manager_optionsScalarFieldEnum | Payment_manager_optionsScalarFieldEnum[]
  }


  /**
   * payment_manager_options findFirstOrThrow
   */
  export type payment_manager_optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * Filter, which payment_manager_options to fetch.
     */
    where?: payment_manager_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_manager_options to fetch.
     */
    orderBy?: payment_manager_optionsOrderByWithRelationInput | payment_manager_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_manager_options.
     */
    cursor?: payment_manager_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_manager_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_manager_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_manager_options.
     */
    distinct?: Payment_manager_optionsScalarFieldEnum | Payment_manager_optionsScalarFieldEnum[]
  }


  /**
   * payment_manager_options findMany
   */
  export type payment_manager_optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * Filter, which payment_manager_options to fetch.
     */
    where?: payment_manager_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_manager_options to fetch.
     */
    orderBy?: payment_manager_optionsOrderByWithRelationInput | payment_manager_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_manager_options.
     */
    cursor?: payment_manager_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_manager_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_manager_options.
     */
    skip?: number
    distinct?: Payment_manager_optionsScalarFieldEnum | Payment_manager_optionsScalarFieldEnum[]
  }


  /**
   * payment_manager_options create
   */
  export type payment_manager_optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * The data needed to create a payment_manager_options.
     */
    data?: XOR<payment_manager_optionsCreateInput, payment_manager_optionsUncheckedCreateInput>
  }


  /**
   * payment_manager_options createMany
   */
  export type payment_manager_optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_manager_options.
     */
    data: payment_manager_optionsCreateManyInput | payment_manager_optionsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * payment_manager_options update
   */
  export type payment_manager_optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * The data needed to update a payment_manager_options.
     */
    data: XOR<payment_manager_optionsUpdateInput, payment_manager_optionsUncheckedUpdateInput>
    /**
     * Choose, which payment_manager_options to update.
     */
    where: payment_manager_optionsWhereUniqueInput
  }


  /**
   * payment_manager_options updateMany
   */
  export type payment_manager_optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_manager_options.
     */
    data: XOR<payment_manager_optionsUpdateManyMutationInput, payment_manager_optionsUncheckedUpdateManyInput>
    /**
     * Filter which payment_manager_options to update
     */
    where?: payment_manager_optionsWhereInput
  }


  /**
   * payment_manager_options upsert
   */
  export type payment_manager_optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * The filter to search for the payment_manager_options to update in case it exists.
     */
    where: payment_manager_optionsWhereUniqueInput
    /**
     * In case the payment_manager_options found by the `where` argument doesn't exist, create a new payment_manager_options with this data.
     */
    create: XOR<payment_manager_optionsCreateInput, payment_manager_optionsUncheckedCreateInput>
    /**
     * In case the payment_manager_options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_manager_optionsUpdateInput, payment_manager_optionsUncheckedUpdateInput>
  }


  /**
   * payment_manager_options delete
   */
  export type payment_manager_optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
    /**
     * Filter which payment_manager_options to delete.
     */
    where: payment_manager_optionsWhereUniqueInput
  }


  /**
   * payment_manager_options deleteMany
   */
  export type payment_manager_optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_manager_options to delete
     */
    where?: payment_manager_optionsWhereInput
  }


  /**
   * payment_manager_options without action
   */
  export type payment_manager_optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_manager_options
     */
    select?: payment_manager_optionsSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    currency_name: 'currency_name',
    currency_code: 'currency_code',
    is_exist: 'is_exist',
    per_hash: 'per_hash',
    rate: 'rate'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const Transaction_tableScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    amount: 'amount',
    currency: 'currency',
    to_user: 'to_user',
    current_balance: 'current_balance',
    status: 'status',
    payout_user_hash: 'payout_user_hash',
    payout_id: 'payout_id',
    referral: 'referral',
    user: 'user',
    hash_number: 'hash_number',
    minner_id: 'minner_id'
  };

  export type Transaction_tableScalarFieldEnum = (typeof Transaction_tableScalarFieldEnum)[keyof typeof Transaction_tableScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    username: 'username',
    password: 'password',
    is_exist: 'is_exist',
    balance_hash: 'balance_hash'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Minners_accountScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    email: 'email',
    password: 'password',
    is_exist: 'is_exist',
    balance_hash: 'balance_hash',
    balance_check_at: 'balance_check_at',
    total_hashes: 'total_hashes',
    updated_at: 'updated_at'
  };

  export type Minners_accountScalarFieldEnum = (typeof Minners_accountScalarFieldEnum)[keyof typeof Minners_accountScalarFieldEnum]


  export const Payment_manager_optionsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    auto_transaction: 'auto_transaction',
    is_exist: 'is_exist'
  };

  export type Payment_manager_optionsScalarFieldEnum = (typeof Payment_manager_optionsScalarFieldEnum)[keyof typeof Payment_manager_optionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type currencyWhereInput = {
    AND?: currencyWhereInput | currencyWhereInput[]
    OR?: currencyWhereInput[]
    NOT?: currencyWhereInput | currencyWhereInput[]
    id?: IntFilter<"currency"> | number
    created_at?: DateTimeNullableFilter<"currency"> | Date | string | null
    currency_name?: StringNullableFilter<"currency"> | string | null
    currency_code?: StringNullableFilter<"currency"> | string | null
    is_exist?: BoolNullableFilter<"currency"> | boolean | null
    per_hash?: FloatNullableFilter<"currency"> | number | null
    rate?: FloatNullableFilter<"currency"> | number | null
    transaction_table_transaction_table_currencyTocurrency?: Transaction_tableListRelationFilter
  }

  export type currencyOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    currency_name?: SortOrderInput | SortOrder
    currency_code?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    per_hash?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    transaction_table_transaction_table_currencyTocurrency?: transaction_tableOrderByRelationAggregateInput
  }

  export type currencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: currencyWhereInput | currencyWhereInput[]
    OR?: currencyWhereInput[]
    NOT?: currencyWhereInput | currencyWhereInput[]
    created_at?: DateTimeNullableFilter<"currency"> | Date | string | null
    currency_name?: StringNullableFilter<"currency"> | string | null
    currency_code?: StringNullableFilter<"currency"> | string | null
    is_exist?: BoolNullableFilter<"currency"> | boolean | null
    per_hash?: FloatNullableFilter<"currency"> | number | null
    rate?: FloatNullableFilter<"currency"> | number | null
    transaction_table_transaction_table_currencyTocurrency?: Transaction_tableListRelationFilter
  }, "id">

  export type currencyOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    currency_name?: SortOrderInput | SortOrder
    currency_code?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    per_hash?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    _count?: currencyCountOrderByAggregateInput
    _avg?: currencyAvgOrderByAggregateInput
    _max?: currencyMaxOrderByAggregateInput
    _min?: currencyMinOrderByAggregateInput
    _sum?: currencySumOrderByAggregateInput
  }

  export type currencyScalarWhereWithAggregatesInput = {
    AND?: currencyScalarWhereWithAggregatesInput | currencyScalarWhereWithAggregatesInput[]
    OR?: currencyScalarWhereWithAggregatesInput[]
    NOT?: currencyScalarWhereWithAggregatesInput | currencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"currency"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"currency"> | Date | string | null
    currency_name?: StringNullableWithAggregatesFilter<"currency"> | string | null
    currency_code?: StringNullableWithAggregatesFilter<"currency"> | string | null
    is_exist?: BoolNullableWithAggregatesFilter<"currency"> | boolean | null
    per_hash?: FloatNullableWithAggregatesFilter<"currency"> | number | null
    rate?: FloatNullableWithAggregatesFilter<"currency"> | number | null
  }

  export type transaction_tableWhereInput = {
    AND?: transaction_tableWhereInput | transaction_tableWhereInput[]
    OR?: transaction_tableWhereInput[]
    NOT?: transaction_tableWhereInput | transaction_tableWhereInput[]
    id?: IntFilter<"transaction_table"> | number
    created_at?: DateTimeNullableFilter<"transaction_table"> | Date | string | null
    amount?: FloatNullableFilter<"transaction_table"> | number | null
    currency?: IntNullableFilter<"transaction_table"> | number | null
    to_user?: StringNullableFilter<"transaction_table"> | string | null
    current_balance?: FloatNullableFilter<"transaction_table"> | number | null
    status?: StringNullableFilter<"transaction_table"> | string | null
    payout_user_hash?: StringNullableFilter<"transaction_table"> | string | null
    payout_id?: StringNullableFilter<"transaction_table"> | string | null
    referral?: BoolNullableFilter<"transaction_table"> | boolean | null
    user?: IntNullableFilter<"transaction_table"> | number | null
    hash_number?: FloatNullableFilter<"transaction_table"> | number | null
    minner_id?: IntNullableFilter<"transaction_table"> | number | null
    currency_transaction_table_currencyTocurrency?: XOR<CurrencyNullableRelationFilter, currencyWhereInput> | null
    minners_account?: XOR<Minners_accountNullableRelationFilter, minners_accountWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }

  export type transaction_tableOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    to_user?: SortOrderInput | SortOrder
    current_balance?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payout_user_hash?: SortOrderInput | SortOrder
    payout_id?: SortOrderInput | SortOrder
    referral?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    hash_number?: SortOrderInput | SortOrder
    minner_id?: SortOrderInput | SortOrder
    currency_transaction_table_currencyTocurrency?: currencyOrderByWithRelationInput
    minners_account?: minners_accountOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type transaction_tableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaction_tableWhereInput | transaction_tableWhereInput[]
    OR?: transaction_tableWhereInput[]
    NOT?: transaction_tableWhereInput | transaction_tableWhereInput[]
    created_at?: DateTimeNullableFilter<"transaction_table"> | Date | string | null
    amount?: FloatNullableFilter<"transaction_table"> | number | null
    currency?: IntNullableFilter<"transaction_table"> | number | null
    to_user?: StringNullableFilter<"transaction_table"> | string | null
    current_balance?: FloatNullableFilter<"transaction_table"> | number | null
    status?: StringNullableFilter<"transaction_table"> | string | null
    payout_user_hash?: StringNullableFilter<"transaction_table"> | string | null
    payout_id?: StringNullableFilter<"transaction_table"> | string | null
    referral?: BoolNullableFilter<"transaction_table"> | boolean | null
    user?: IntNullableFilter<"transaction_table"> | number | null
    hash_number?: FloatNullableFilter<"transaction_table"> | number | null
    minner_id?: IntNullableFilter<"transaction_table"> | number | null
    currency_transaction_table_currencyTocurrency?: XOR<CurrencyNullableRelationFilter, currencyWhereInput> | null
    minners_account?: XOR<Minners_accountNullableRelationFilter, minners_accountWhereInput> | null
    users?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
  }, "id">

  export type transaction_tableOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    to_user?: SortOrderInput | SortOrder
    current_balance?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payout_user_hash?: SortOrderInput | SortOrder
    payout_id?: SortOrderInput | SortOrder
    referral?: SortOrderInput | SortOrder
    user?: SortOrderInput | SortOrder
    hash_number?: SortOrderInput | SortOrder
    minner_id?: SortOrderInput | SortOrder
    _count?: transaction_tableCountOrderByAggregateInput
    _avg?: transaction_tableAvgOrderByAggregateInput
    _max?: transaction_tableMaxOrderByAggregateInput
    _min?: transaction_tableMinOrderByAggregateInput
    _sum?: transaction_tableSumOrderByAggregateInput
  }

  export type transaction_tableScalarWhereWithAggregatesInput = {
    AND?: transaction_tableScalarWhereWithAggregatesInput | transaction_tableScalarWhereWithAggregatesInput[]
    OR?: transaction_tableScalarWhereWithAggregatesInput[]
    NOT?: transaction_tableScalarWhereWithAggregatesInput | transaction_tableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction_table"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"transaction_table"> | Date | string | null
    amount?: FloatNullableWithAggregatesFilter<"transaction_table"> | number | null
    currency?: IntNullableWithAggregatesFilter<"transaction_table"> | number | null
    to_user?: StringNullableWithAggregatesFilter<"transaction_table"> | string | null
    current_balance?: FloatNullableWithAggregatesFilter<"transaction_table"> | number | null
    status?: StringNullableWithAggregatesFilter<"transaction_table"> | string | null
    payout_user_hash?: StringNullableWithAggregatesFilter<"transaction_table"> | string | null
    payout_id?: StringNullableWithAggregatesFilter<"transaction_table"> | string | null
    referral?: BoolNullableWithAggregatesFilter<"transaction_table"> | boolean | null
    user?: IntNullableWithAggregatesFilter<"transaction_table"> | number | null
    hash_number?: FloatNullableWithAggregatesFilter<"transaction_table"> | number | null
    minner_id?: IntNullableWithAggregatesFilter<"transaction_table"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    is_exist?: BoolNullableFilter<"users"> | boolean | null
    balance_hash?: FloatNullableFilter<"users"> | number | null
    transaction_table?: Transaction_tableListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    balance_hash?: SortOrderInput | SortOrder
    transaction_table?: transaction_tableOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    is_exist?: BoolNullableFilter<"users"> | boolean | null
    balance_hash?: FloatNullableFilter<"users"> | number | null
    transaction_table?: Transaction_tableListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    balance_hash?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_exist?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    balance_hash?: FloatNullableWithAggregatesFilter<"users"> | number | null
  }

  export type minners_accountWhereInput = {
    AND?: minners_accountWhereInput | minners_accountWhereInput[]
    OR?: minners_accountWhereInput[]
    NOT?: minners_accountWhereInput | minners_accountWhereInput[]
    id?: IntFilter<"minners_account"> | number
    created_at?: DateTimeNullableFilter<"minners_account"> | Date | string | null
    email?: StringNullableFilter<"minners_account"> | string | null
    password?: StringNullableFilter<"minners_account"> | string | null
    is_exist?: BoolNullableFilter<"minners_account"> | boolean | null
    balance_hash?: FloatNullableFilter<"minners_account"> | number | null
    balance_check_at?: DateTimeNullableFilter<"minners_account"> | Date | string | null
    total_hashes?: FloatNullableFilter<"minners_account"> | number | null
    updated_at?: DateTimeNullableFilter<"minners_account"> | Date | string | null
    transaction_table?: Transaction_tableListRelationFilter
  }

  export type minners_accountOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    balance_hash?: SortOrderInput | SortOrder
    balance_check_at?: SortOrderInput | SortOrder
    total_hashes?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    transaction_table?: transaction_tableOrderByRelationAggregateInput
  }

  export type minners_accountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: minners_accountWhereInput | minners_accountWhereInput[]
    OR?: minners_accountWhereInput[]
    NOT?: minners_accountWhereInput | minners_accountWhereInput[]
    created_at?: DateTimeNullableFilter<"minners_account"> | Date | string | null
    email?: StringNullableFilter<"minners_account"> | string | null
    password?: StringNullableFilter<"minners_account"> | string | null
    is_exist?: BoolNullableFilter<"minners_account"> | boolean | null
    balance_hash?: FloatNullableFilter<"minners_account"> | number | null
    balance_check_at?: DateTimeNullableFilter<"minners_account"> | Date | string | null
    total_hashes?: FloatNullableFilter<"minners_account"> | number | null
    updated_at?: DateTimeNullableFilter<"minners_account"> | Date | string | null
    transaction_table?: Transaction_tableListRelationFilter
  }, "id">

  export type minners_accountOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    balance_hash?: SortOrderInput | SortOrder
    balance_check_at?: SortOrderInput | SortOrder
    total_hashes?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: minners_accountCountOrderByAggregateInput
    _avg?: minners_accountAvgOrderByAggregateInput
    _max?: minners_accountMaxOrderByAggregateInput
    _min?: minners_accountMinOrderByAggregateInput
    _sum?: minners_accountSumOrderByAggregateInput
  }

  export type minners_accountScalarWhereWithAggregatesInput = {
    AND?: minners_accountScalarWhereWithAggregatesInput | minners_accountScalarWhereWithAggregatesInput[]
    OR?: minners_accountScalarWhereWithAggregatesInput[]
    NOT?: minners_accountScalarWhereWithAggregatesInput | minners_accountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"minners_account"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"minners_account"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"minners_account"> | string | null
    password?: StringNullableWithAggregatesFilter<"minners_account"> | string | null
    is_exist?: BoolNullableWithAggregatesFilter<"minners_account"> | boolean | null
    balance_hash?: FloatNullableWithAggregatesFilter<"minners_account"> | number | null
    balance_check_at?: DateTimeNullableWithAggregatesFilter<"minners_account"> | Date | string | null
    total_hashes?: FloatNullableWithAggregatesFilter<"minners_account"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"minners_account"> | Date | string | null
  }

  export type payment_manager_optionsWhereInput = {
    AND?: payment_manager_optionsWhereInput | payment_manager_optionsWhereInput[]
    OR?: payment_manager_optionsWhereInput[]
    NOT?: payment_manager_optionsWhereInput | payment_manager_optionsWhereInput[]
    id?: BigIntFilter<"payment_manager_options"> | bigint | number
    created_at?: DateTimeFilter<"payment_manager_options"> | Date | string
    auto_transaction?: BoolNullableFilter<"payment_manager_options"> | boolean | null
    is_exist?: BoolNullableFilter<"payment_manager_options"> | boolean | null
  }

  export type payment_manager_optionsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    auto_transaction?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
  }

  export type payment_manager_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: payment_manager_optionsWhereInput | payment_manager_optionsWhereInput[]
    OR?: payment_manager_optionsWhereInput[]
    NOT?: payment_manager_optionsWhereInput | payment_manager_optionsWhereInput[]
    created_at?: DateTimeFilter<"payment_manager_options"> | Date | string
    auto_transaction?: BoolNullableFilter<"payment_manager_options"> | boolean | null
    is_exist?: BoolNullableFilter<"payment_manager_options"> | boolean | null
  }, "id">

  export type payment_manager_optionsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    auto_transaction?: SortOrderInput | SortOrder
    is_exist?: SortOrderInput | SortOrder
    _count?: payment_manager_optionsCountOrderByAggregateInput
    _avg?: payment_manager_optionsAvgOrderByAggregateInput
    _max?: payment_manager_optionsMaxOrderByAggregateInput
    _min?: payment_manager_optionsMinOrderByAggregateInput
    _sum?: payment_manager_optionsSumOrderByAggregateInput
  }

  export type payment_manager_optionsScalarWhereWithAggregatesInput = {
    AND?: payment_manager_optionsScalarWhereWithAggregatesInput | payment_manager_optionsScalarWhereWithAggregatesInput[]
    OR?: payment_manager_optionsScalarWhereWithAggregatesInput[]
    NOT?: payment_manager_optionsScalarWhereWithAggregatesInput | payment_manager_optionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"payment_manager_options"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"payment_manager_options"> | Date | string
    auto_transaction?: BoolNullableWithAggregatesFilter<"payment_manager_options"> | boolean | null
    is_exist?: BoolNullableWithAggregatesFilter<"payment_manager_options"> | boolean | null
  }

  export type currencyCreateInput = {
    created_at?: Date | string | null
    currency_name?: string | null
    currency_code?: string | null
    is_exist?: boolean | null
    per_hash?: number | null
    rate?: number | null
    transaction_table_transaction_table_currencyTocurrency?: transaction_tableCreateNestedManyWithoutCurrency_transaction_table_currencyTocurrencyInput
  }

  export type currencyUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    currency_name?: string | null
    currency_code?: string | null
    is_exist?: boolean | null
    per_hash?: number | null
    rate?: number | null
    transaction_table_transaction_table_currencyTocurrency?: transaction_tableUncheckedCreateNestedManyWithoutCurrency_transaction_table_currencyTocurrencyInput
  }

  export type currencyUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    per_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_table_transaction_table_currencyTocurrency?: transaction_tableUpdateManyWithoutCurrency_transaction_table_currencyTocurrencyNestedInput
  }

  export type currencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    per_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_table_transaction_table_currencyTocurrency?: transaction_tableUncheckedUpdateManyWithoutCurrency_transaction_table_currencyTocurrencyNestedInput
  }

  export type currencyCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    currency_name?: string | null
    currency_code?: string | null
    is_exist?: boolean | null
    per_hash?: number | null
    rate?: number | null
  }

  export type currencyUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    per_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type currencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    per_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableCreateInput = {
    created_at?: Date | string | null
    amount?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    hash_number?: number | null
    currency_transaction_table_currencyTocurrency?: currencyCreateNestedOneWithoutTransaction_table_transaction_table_currencyTocurrencyInput
    minners_account?: minners_accountCreateNestedOneWithoutTransaction_tableInput
    users?: usersCreateNestedOneWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    currency?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    user?: number | null
    hash_number?: number | null
    minner_id?: number | null
  }

  export type transaction_tableUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    currency_transaction_table_currencyTocurrency?: currencyUpdateOneWithoutTransaction_table_transaction_table_currencyTocurrencyNestedInput
    minners_account?: minners_accountUpdateOneWithoutTransaction_tableNestedInput
    users?: usersUpdateOneWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableIntFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    currency?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    user?: number | null
    hash_number?: number | null
    minner_id?: number | null
  }

  export type transaction_tableUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableIntFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    created_at?: Date | string | null
    username?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    transaction_table?: transaction_tableCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    username?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_table?: transaction_tableUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    username?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
  }

  export type usersUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type minners_accountCreateInput = {
    created_at?: Date | string | null
    email?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    balance_check_at?: Date | string | null
    total_hashes?: number | null
    updated_at?: Date | string | null
    transaction_table?: transaction_tableCreateNestedManyWithoutMinners_accountInput
  }

  export type minners_accountUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    email?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    balance_check_at?: Date | string | null
    total_hashes?: number | null
    updated_at?: Date | string | null
    transaction_table?: transaction_tableUncheckedCreateNestedManyWithoutMinners_accountInput
  }

  export type minners_accountUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    balance_check_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_hashes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_table?: transaction_tableUpdateManyWithoutMinners_accountNestedInput
  }

  export type minners_accountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    balance_check_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_hashes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_table?: transaction_tableUncheckedUpdateManyWithoutMinners_accountNestedInput
  }

  export type minners_accountCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    email?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    balance_check_at?: Date | string | null
    total_hashes?: number | null
    updated_at?: Date | string | null
  }

  export type minners_accountUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    balance_check_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_hashes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type minners_accountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    balance_check_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_hashes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type payment_manager_optionsCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    auto_transaction?: boolean | null
    is_exist?: boolean | null
  }

  export type payment_manager_optionsUncheckedCreateInput = {
    id?: bigint | number
    created_at?: Date | string
    auto_transaction?: boolean | null
    is_exist?: boolean | null
  }

  export type payment_manager_optionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auto_transaction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type payment_manager_optionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auto_transaction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type payment_manager_optionsCreateManyInput = {
    id?: bigint | number
    created_at?: Date | string
    auto_transaction?: boolean | null
    is_exist?: boolean | null
  }

  export type payment_manager_optionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auto_transaction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type payment_manager_optionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auto_transaction?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Transaction_tableListRelationFilter = {
    every?: transaction_tableWhereInput
    some?: transaction_tableWhereInput
    none?: transaction_tableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type transaction_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type currencyCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    currency_name?: SortOrder
    currency_code?: SortOrder
    is_exist?: SortOrder
    per_hash?: SortOrder
    rate?: SortOrder
  }

  export type currencyAvgOrderByAggregateInput = {
    id?: SortOrder
    per_hash?: SortOrder
    rate?: SortOrder
  }

  export type currencyMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    currency_name?: SortOrder
    currency_code?: SortOrder
    is_exist?: SortOrder
    per_hash?: SortOrder
    rate?: SortOrder
  }

  export type currencyMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    currency_name?: SortOrder
    currency_code?: SortOrder
    is_exist?: SortOrder
    per_hash?: SortOrder
    rate?: SortOrder
  }

  export type currencySumOrderByAggregateInput = {
    id?: SortOrder
    per_hash?: SortOrder
    rate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CurrencyNullableRelationFilter = {
    is?: currencyWhereInput | null
    isNot?: currencyWhereInput | null
  }

  export type Minners_accountNullableRelationFilter = {
    is?: minners_accountWhereInput | null
    isNot?: minners_accountWhereInput | null
  }

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type transaction_tableCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    to_user?: SortOrder
    current_balance?: SortOrder
    status?: SortOrder
    payout_user_hash?: SortOrder
    payout_id?: SortOrder
    referral?: SortOrder
    user?: SortOrder
    hash_number?: SortOrder
    minner_id?: SortOrder
  }

  export type transaction_tableAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    current_balance?: SortOrder
    user?: SortOrder
    hash_number?: SortOrder
    minner_id?: SortOrder
  }

  export type transaction_tableMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    to_user?: SortOrder
    current_balance?: SortOrder
    status?: SortOrder
    payout_user_hash?: SortOrder
    payout_id?: SortOrder
    referral?: SortOrder
    user?: SortOrder
    hash_number?: SortOrder
    minner_id?: SortOrder
  }

  export type transaction_tableMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    to_user?: SortOrder
    current_balance?: SortOrder
    status?: SortOrder
    payout_user_hash?: SortOrder
    payout_id?: SortOrder
    referral?: SortOrder
    user?: SortOrder
    hash_number?: SortOrder
    minner_id?: SortOrder
  }

  export type transaction_tableSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    current_balance?: SortOrder
    user?: SortOrder
    hash_number?: SortOrder
    minner_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_exist?: SortOrder
    balance_hash?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    balance_hash?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_exist?: SortOrder
    balance_hash?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_exist?: SortOrder
    balance_hash?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    balance_hash?: SortOrder
  }

  export type minners_accountCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_exist?: SortOrder
    balance_hash?: SortOrder
    balance_check_at?: SortOrder
    total_hashes?: SortOrder
    updated_at?: SortOrder
  }

  export type minners_accountAvgOrderByAggregateInput = {
    id?: SortOrder
    balance_hash?: SortOrder
    total_hashes?: SortOrder
  }

  export type minners_accountMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_exist?: SortOrder
    balance_hash?: SortOrder
    balance_check_at?: SortOrder
    total_hashes?: SortOrder
    updated_at?: SortOrder
  }

  export type minners_accountMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_exist?: SortOrder
    balance_hash?: SortOrder
    balance_check_at?: SortOrder
    total_hashes?: SortOrder
    updated_at?: SortOrder
  }

  export type minners_accountSumOrderByAggregateInput = {
    id?: SortOrder
    balance_hash?: SortOrder
    total_hashes?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type payment_manager_optionsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    auto_transaction?: SortOrder
    is_exist?: SortOrder
  }

  export type payment_manager_optionsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type payment_manager_optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    auto_transaction?: SortOrder
    is_exist?: SortOrder
  }

  export type payment_manager_optionsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    auto_transaction?: SortOrder
    is_exist?: SortOrder
  }

  export type payment_manager_optionsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type transaction_tableCreateNestedManyWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    create?: XOR<transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput> | transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[] | transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    createMany?: transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type transaction_tableUncheckedCreateNestedManyWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    create?: XOR<transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput> | transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[] | transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    createMany?: transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaction_tableUpdateManyWithoutCurrency_transaction_table_currencyTocurrencyNestedInput = {
    create?: XOR<transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput> | transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[] | transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableUpsertWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    createMany?: transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableUpdateWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableUpdateManyWithWhereWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaction_tableUncheckedUpdateManyWithoutCurrency_transaction_table_currencyTocurrencyNestedInput = {
    create?: XOR<transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput> | transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[] | transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableUpsertWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    createMany?: transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableUpdateWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutCurrency_transaction_table_currencyTocurrencyInput | transaction_tableUpdateManyWithWhereWithoutCurrency_transaction_table_currencyTocurrencyInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type currencyCreateNestedOneWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    create?: XOR<currencyCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUncheckedCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
    connectOrCreate?: currencyCreateOrConnectWithoutTransaction_table_transaction_table_currencyTocurrencyInput
    connect?: currencyWhereUniqueInput
  }

  export type minners_accountCreateNestedOneWithoutTransaction_tableInput = {
    create?: XOR<minners_accountCreateWithoutTransaction_tableInput, minners_accountUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: minners_accountCreateOrConnectWithoutTransaction_tableInput
    connect?: minners_accountWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTransaction_tableInput = {
    create?: XOR<usersCreateWithoutTransaction_tableInput, usersUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransaction_tableInput
    connect?: usersWhereUniqueInput
  }

  export type currencyUpdateOneWithoutTransaction_table_transaction_table_currencyTocurrencyNestedInput = {
    create?: XOR<currencyCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUncheckedCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
    connectOrCreate?: currencyCreateOrConnectWithoutTransaction_table_transaction_table_currencyTocurrencyInput
    upsert?: currencyUpsertWithoutTransaction_table_transaction_table_currencyTocurrencyInput
    disconnect?: currencyWhereInput | boolean
    delete?: currencyWhereInput | boolean
    connect?: currencyWhereUniqueInput
    update?: XOR<XOR<currencyUpdateToOneWithWhereWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>, currencyUncheckedUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
  }

  export type minners_accountUpdateOneWithoutTransaction_tableNestedInput = {
    create?: XOR<minners_accountCreateWithoutTransaction_tableInput, minners_accountUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: minners_accountCreateOrConnectWithoutTransaction_tableInput
    upsert?: minners_accountUpsertWithoutTransaction_tableInput
    disconnect?: minners_accountWhereInput | boolean
    delete?: minners_accountWhereInput | boolean
    connect?: minners_accountWhereUniqueInput
    update?: XOR<XOR<minners_accountUpdateToOneWithWhereWithoutTransaction_tableInput, minners_accountUpdateWithoutTransaction_tableInput>, minners_accountUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type usersUpdateOneWithoutTransaction_tableNestedInput = {
    create?: XOR<usersCreateWithoutTransaction_tableInput, usersUncheckedCreateWithoutTransaction_tableInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransaction_tableInput
    upsert?: usersUpsertWithoutTransaction_tableInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransaction_tableInput, usersUpdateWithoutTransaction_tableInput>, usersUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaction_tableCreateNestedManyWithoutUsersInput = {
    create?: XOR<transaction_tableCreateWithoutUsersInput, transaction_tableUncheckedCreateWithoutUsersInput> | transaction_tableCreateWithoutUsersInput[] | transaction_tableUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutUsersInput | transaction_tableCreateOrConnectWithoutUsersInput[]
    createMany?: transaction_tableCreateManyUsersInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type transaction_tableUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transaction_tableCreateWithoutUsersInput, transaction_tableUncheckedCreateWithoutUsersInput> | transaction_tableCreateWithoutUsersInput[] | transaction_tableUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutUsersInput | transaction_tableCreateOrConnectWithoutUsersInput[]
    createMany?: transaction_tableCreateManyUsersInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type transaction_tableUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transaction_tableCreateWithoutUsersInput, transaction_tableUncheckedCreateWithoutUsersInput> | transaction_tableCreateWithoutUsersInput[] | transaction_tableUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutUsersInput | transaction_tableCreateOrConnectWithoutUsersInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutUsersInput | transaction_tableUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transaction_tableCreateManyUsersInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutUsersInput | transaction_tableUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutUsersInput | transaction_tableUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type transaction_tableUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transaction_tableCreateWithoutUsersInput, transaction_tableUncheckedCreateWithoutUsersInput> | transaction_tableCreateWithoutUsersInput[] | transaction_tableUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutUsersInput | transaction_tableCreateOrConnectWithoutUsersInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutUsersInput | transaction_tableUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transaction_tableCreateManyUsersInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutUsersInput | transaction_tableUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutUsersInput | transaction_tableUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type transaction_tableCreateNestedManyWithoutMinners_accountInput = {
    create?: XOR<transaction_tableCreateWithoutMinners_accountInput, transaction_tableUncheckedCreateWithoutMinners_accountInput> | transaction_tableCreateWithoutMinners_accountInput[] | transaction_tableUncheckedCreateWithoutMinners_accountInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutMinners_accountInput | transaction_tableCreateOrConnectWithoutMinners_accountInput[]
    createMany?: transaction_tableCreateManyMinners_accountInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type transaction_tableUncheckedCreateNestedManyWithoutMinners_accountInput = {
    create?: XOR<transaction_tableCreateWithoutMinners_accountInput, transaction_tableUncheckedCreateWithoutMinners_accountInput> | transaction_tableCreateWithoutMinners_accountInput[] | transaction_tableUncheckedCreateWithoutMinners_accountInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutMinners_accountInput | transaction_tableCreateOrConnectWithoutMinners_accountInput[]
    createMany?: transaction_tableCreateManyMinners_accountInputEnvelope
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
  }

  export type transaction_tableUpdateManyWithoutMinners_accountNestedInput = {
    create?: XOR<transaction_tableCreateWithoutMinners_accountInput, transaction_tableUncheckedCreateWithoutMinners_accountInput> | transaction_tableCreateWithoutMinners_accountInput[] | transaction_tableUncheckedCreateWithoutMinners_accountInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutMinners_accountInput | transaction_tableCreateOrConnectWithoutMinners_accountInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutMinners_accountInput | transaction_tableUpsertWithWhereUniqueWithoutMinners_accountInput[]
    createMany?: transaction_tableCreateManyMinners_accountInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutMinners_accountInput | transaction_tableUpdateWithWhereUniqueWithoutMinners_accountInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutMinners_accountInput | transaction_tableUpdateManyWithWhereWithoutMinners_accountInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type transaction_tableUncheckedUpdateManyWithoutMinners_accountNestedInput = {
    create?: XOR<transaction_tableCreateWithoutMinners_accountInput, transaction_tableUncheckedCreateWithoutMinners_accountInput> | transaction_tableCreateWithoutMinners_accountInput[] | transaction_tableUncheckedCreateWithoutMinners_accountInput[]
    connectOrCreate?: transaction_tableCreateOrConnectWithoutMinners_accountInput | transaction_tableCreateOrConnectWithoutMinners_accountInput[]
    upsert?: transaction_tableUpsertWithWhereUniqueWithoutMinners_accountInput | transaction_tableUpsertWithWhereUniqueWithoutMinners_accountInput[]
    createMany?: transaction_tableCreateManyMinners_accountInputEnvelope
    set?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    disconnect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    delete?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    connect?: transaction_tableWhereUniqueInput | transaction_tableWhereUniqueInput[]
    update?: transaction_tableUpdateWithWhereUniqueWithoutMinners_accountInput | transaction_tableUpdateWithWhereUniqueWithoutMinners_accountInput[]
    updateMany?: transaction_tableUpdateManyWithWhereWithoutMinners_accountInput | transaction_tableUpdateManyWithWhereWithoutMinners_accountInput[]
    deleteMany?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    created_at?: Date | string | null
    amount?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    hash_number?: number | null
    minners_account?: minners_accountCreateNestedOneWithoutTransaction_tableInput
    users?: usersCreateNestedOneWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    user?: number | null
    hash_number?: number | null
    minner_id?: number | null
  }

  export type transaction_tableCreateOrConnectWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput>
  }

  export type transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInputEnvelope = {
    data: transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInput | transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInput[]
    skipDuplicates?: boolean
  }

  export type transaction_tableUpsertWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    where: transaction_tableWhereUniqueInput
    update: XOR<transaction_tableUpdateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedUpdateWithoutCurrency_transaction_table_currencyTocurrencyInput>
    create: XOR<transaction_tableCreateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedCreateWithoutCurrency_transaction_table_currencyTocurrencyInput>
  }

  export type transaction_tableUpdateWithWhereUniqueWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    where: transaction_tableWhereUniqueInput
    data: XOR<transaction_tableUpdateWithoutCurrency_transaction_table_currencyTocurrencyInput, transaction_tableUncheckedUpdateWithoutCurrency_transaction_table_currencyTocurrencyInput>
  }

  export type transaction_tableUpdateManyWithWhereWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    where: transaction_tableScalarWhereInput
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyWithoutCurrency_transaction_table_currencyTocurrencyInput>
  }

  export type transaction_tableScalarWhereInput = {
    AND?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
    OR?: transaction_tableScalarWhereInput[]
    NOT?: transaction_tableScalarWhereInput | transaction_tableScalarWhereInput[]
    id?: IntFilter<"transaction_table"> | number
    created_at?: DateTimeNullableFilter<"transaction_table"> | Date | string | null
    amount?: FloatNullableFilter<"transaction_table"> | number | null
    currency?: IntNullableFilter<"transaction_table"> | number | null
    to_user?: StringNullableFilter<"transaction_table"> | string | null
    current_balance?: FloatNullableFilter<"transaction_table"> | number | null
    status?: StringNullableFilter<"transaction_table"> | string | null
    payout_user_hash?: StringNullableFilter<"transaction_table"> | string | null
    payout_id?: StringNullableFilter<"transaction_table"> | string | null
    referral?: BoolNullableFilter<"transaction_table"> | boolean | null
    user?: IntNullableFilter<"transaction_table"> | number | null
    hash_number?: FloatNullableFilter<"transaction_table"> | number | null
    minner_id?: IntNullableFilter<"transaction_table"> | number | null
  }

  export type currencyCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    created_at?: Date | string | null
    currency_name?: string | null
    currency_code?: string | null
    is_exist?: boolean | null
    per_hash?: number | null
    rate?: number | null
  }

  export type currencyUncheckedCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    id?: number
    created_at?: Date | string | null
    currency_name?: string | null
    currency_code?: string | null
    is_exist?: boolean | null
    per_hash?: number | null
    rate?: number | null
  }

  export type currencyCreateOrConnectWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    where: currencyWhereUniqueInput
    create: XOR<currencyCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUncheckedCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
  }

  export type minners_accountCreateWithoutTransaction_tableInput = {
    created_at?: Date | string | null
    email?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    balance_check_at?: Date | string | null
    total_hashes?: number | null
    updated_at?: Date | string | null
  }

  export type minners_accountUncheckedCreateWithoutTransaction_tableInput = {
    id?: number
    created_at?: Date | string | null
    email?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
    balance_check_at?: Date | string | null
    total_hashes?: number | null
    updated_at?: Date | string | null
  }

  export type minners_accountCreateOrConnectWithoutTransaction_tableInput = {
    where: minners_accountWhereUniqueInput
    create: XOR<minners_accountCreateWithoutTransaction_tableInput, minners_accountUncheckedCreateWithoutTransaction_tableInput>
  }

  export type usersCreateWithoutTransaction_tableInput = {
    created_at?: Date | string | null
    username?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
  }

  export type usersUncheckedCreateWithoutTransaction_tableInput = {
    id?: number
    created_at?: Date | string | null
    username?: string | null
    password?: string | null
    is_exist?: boolean | null
    balance_hash?: number | null
  }

  export type usersCreateOrConnectWithoutTransaction_tableInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransaction_tableInput, usersUncheckedCreateWithoutTransaction_tableInput>
  }

  export type currencyUpsertWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    update: XOR<currencyUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUncheckedUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
    create: XOR<currencyCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUncheckedCreateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
    where?: currencyWhereInput
  }

  export type currencyUpdateToOneWithWhereWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    where?: currencyWhereInput
    data: XOR<currencyUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput, currencyUncheckedUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput>
  }

  export type currencyUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    per_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type currencyUncheckedUpdateWithoutTransaction_table_transaction_table_currencyTocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency_name?: NullableStringFieldUpdateOperationsInput | string | null
    currency_code?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    per_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type minners_accountUpsertWithoutTransaction_tableInput = {
    update: XOR<minners_accountUpdateWithoutTransaction_tableInput, minners_accountUncheckedUpdateWithoutTransaction_tableInput>
    create: XOR<minners_accountCreateWithoutTransaction_tableInput, minners_accountUncheckedCreateWithoutTransaction_tableInput>
    where?: minners_accountWhereInput
  }

  export type minners_accountUpdateToOneWithWhereWithoutTransaction_tableInput = {
    where?: minners_accountWhereInput
    data: XOR<minners_accountUpdateWithoutTransaction_tableInput, minners_accountUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type minners_accountUpdateWithoutTransaction_tableInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    balance_check_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_hashes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type minners_accountUncheckedUpdateWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
    balance_check_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_hashes?: NullableFloatFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutTransaction_tableInput = {
    update: XOR<usersUpdateWithoutTransaction_tableInput, usersUncheckedUpdateWithoutTransaction_tableInput>
    create: XOR<usersCreateWithoutTransaction_tableInput, usersUncheckedCreateWithoutTransaction_tableInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransaction_tableInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransaction_tableInput, usersUncheckedUpdateWithoutTransaction_tableInput>
  }

  export type usersUpdateWithoutTransaction_tableInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type usersUncheckedUpdateWithoutTransaction_tableInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    is_exist?: NullableBoolFieldUpdateOperationsInput | boolean | null
    balance_hash?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableCreateWithoutUsersInput = {
    created_at?: Date | string | null
    amount?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    hash_number?: number | null
    currency_transaction_table_currencyTocurrency?: currencyCreateNestedOneWithoutTransaction_table_transaction_table_currencyTocurrencyInput
    minners_account?: minners_accountCreateNestedOneWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    currency?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    hash_number?: number | null
    minner_id?: number | null
  }

  export type transaction_tableCreateOrConnectWithoutUsersInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutUsersInput, transaction_tableUncheckedCreateWithoutUsersInput>
  }

  export type transaction_tableCreateManyUsersInputEnvelope = {
    data: transaction_tableCreateManyUsersInput | transaction_tableCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transaction_tableUpsertWithWhereUniqueWithoutUsersInput = {
    where: transaction_tableWhereUniqueInput
    update: XOR<transaction_tableUpdateWithoutUsersInput, transaction_tableUncheckedUpdateWithoutUsersInput>
    create: XOR<transaction_tableCreateWithoutUsersInput, transaction_tableUncheckedCreateWithoutUsersInput>
  }

  export type transaction_tableUpdateWithWhereUniqueWithoutUsersInput = {
    where: transaction_tableWhereUniqueInput
    data: XOR<transaction_tableUpdateWithoutUsersInput, transaction_tableUncheckedUpdateWithoutUsersInput>
  }

  export type transaction_tableUpdateManyWithWhereWithoutUsersInput = {
    where: transaction_tableScalarWhereInput
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyWithoutUsersInput>
  }

  export type transaction_tableCreateWithoutMinners_accountInput = {
    created_at?: Date | string | null
    amount?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    hash_number?: number | null
    currency_transaction_table_currencyTocurrency?: currencyCreateNestedOneWithoutTransaction_table_transaction_table_currencyTocurrencyInput
    users?: usersCreateNestedOneWithoutTransaction_tableInput
  }

  export type transaction_tableUncheckedCreateWithoutMinners_accountInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    currency?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    user?: number | null
    hash_number?: number | null
  }

  export type transaction_tableCreateOrConnectWithoutMinners_accountInput = {
    where: transaction_tableWhereUniqueInput
    create: XOR<transaction_tableCreateWithoutMinners_accountInput, transaction_tableUncheckedCreateWithoutMinners_accountInput>
  }

  export type transaction_tableCreateManyMinners_accountInputEnvelope = {
    data: transaction_tableCreateManyMinners_accountInput | transaction_tableCreateManyMinners_accountInput[]
    skipDuplicates?: boolean
  }

  export type transaction_tableUpsertWithWhereUniqueWithoutMinners_accountInput = {
    where: transaction_tableWhereUniqueInput
    update: XOR<transaction_tableUpdateWithoutMinners_accountInput, transaction_tableUncheckedUpdateWithoutMinners_accountInput>
    create: XOR<transaction_tableCreateWithoutMinners_accountInput, transaction_tableUncheckedCreateWithoutMinners_accountInput>
  }

  export type transaction_tableUpdateWithWhereUniqueWithoutMinners_accountInput = {
    where: transaction_tableWhereUniqueInput
    data: XOR<transaction_tableUpdateWithoutMinners_accountInput, transaction_tableUncheckedUpdateWithoutMinners_accountInput>
  }

  export type transaction_tableUpdateManyWithWhereWithoutMinners_accountInput = {
    where: transaction_tableScalarWhereInput
    data: XOR<transaction_tableUpdateManyMutationInput, transaction_tableUncheckedUpdateManyWithoutMinners_accountInput>
  }

  export type transaction_tableCreateManyCurrency_transaction_table_currencyTocurrencyInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    user?: number | null
    hash_number?: number | null
    minner_id?: number | null
  }

  export type transaction_tableUpdateWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minners_account?: minners_accountUpdateOneWithoutTransaction_tableNestedInput
    users?: usersUpdateOneWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableUncheckedUpdateManyWithoutCurrency_transaction_table_currencyTocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableCreateManyUsersInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    currency?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    hash_number?: number | null
    minner_id?: number | null
  }

  export type transaction_tableUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    currency_transaction_table_currencyTocurrency?: currencyUpdateOneWithoutTransaction_table_transaction_table_currencyTocurrencyNestedInput
    minners_account?: minners_accountUpdateOneWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableIntFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableIntFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    minner_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableCreateManyMinners_accountInput = {
    id?: number
    created_at?: Date | string | null
    amount?: number | null
    currency?: number | null
    to_user?: string | null
    current_balance?: number | null
    status?: string | null
    payout_user_hash?: string | null
    payout_id?: string | null
    referral?: boolean | null
    user?: number | null
    hash_number?: number | null
  }

  export type transaction_tableUpdateWithoutMinners_accountInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
    currency_transaction_table_currencyTocurrency?: currencyUpdateOneWithoutTransaction_table_transaction_table_currencyTocurrencyNestedInput
    users?: usersUpdateOneWithoutTransaction_tableNestedInput
  }

  export type transaction_tableUncheckedUpdateWithoutMinners_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableIntFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type transaction_tableUncheckedUpdateManyWithoutMinners_accountInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: NullableIntFieldUpdateOperationsInput | number | null
    to_user?: NullableStringFieldUpdateOperationsInput | string | null
    current_balance?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payout_user_hash?: NullableStringFieldUpdateOperationsInput | string | null
    payout_id?: NullableStringFieldUpdateOperationsInput | string | null
    referral?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    hash_number?: NullableFloatFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CurrencyCountOutputTypeDefaultArgs instead
     */
    export type CurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Minners_accountCountOutputTypeDefaultArgs instead
     */
    export type Minners_accountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Minners_accountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use currencyDefaultArgs instead
     */
    export type currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = currencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transaction_tableDefaultArgs instead
     */
    export type transaction_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transaction_tableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use minners_accountDefaultArgs instead
     */
    export type minners_accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = minners_accountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use payment_manager_optionsDefaultArgs instead
     */
    export type payment_manager_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = payment_manager_optionsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}