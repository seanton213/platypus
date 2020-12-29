
/**
 * Client
**/

import * as runtime from './runtime';

export import DMMF = runtime.DMMF

/**
 * Prisma Errors
 */
export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
export import PrismaClientValidationError = runtime.PrismaClientValidationError

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

/**
 * Prisma Client JS version: 2.13.1
 * Query Engine version: fcbc4bb2d306c86c28014f596b1e8c7980af8bd4
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
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export type InputJsonObject = {[Key in string]?: JsonValue}
 
export interface InputJsonArray extends Array<JsonValue> {}
 
export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
 type SelectAndInclude = {
  select: any
  include: any
}
type HasSelect = {
  select: any
}
type HasInclude = {
  include: any
}
type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;



/**
 * Used by group by
 */
export type GetScalarType<T, O> = O extends object ? {
  [P in keyof T]: P extends keyof O
    ? O[P]
    : never
} : never

/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>

/**
 * Like `Pick`, but with an array
 */
type PickArray<T, K extends Array<keyof T>> = Pick<T, TupleToUnion<K>>





/**
 * Model accounts
 */

export type accounts = {
  id: string
  name: string
  email: string
  favorite_flavor: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']

      /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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

  /**
   * Prisma Client JS version: 2.13.1
   * Query Engine version: fcbc4bb2d306c86c28014f596b1e8c7980af8bd4
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
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;



  /**
   * Used by group by
   */
  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Pick<T, TupleToUnion<K>>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    accounts: 'accounts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }


  /**
   * Model accounts
   */


  export type AggregateAccounts = {
    count: number | null
    min: AccountsMinAggregateOutputType | null
    max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    favorite_flavor: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    favorite_flavor: string | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number | null
    name: number | null
    email: number | null
    favorite_flavor: number | null
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    favorite_flavor?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    favorite_flavor?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    favorite_flavor?: true
    _all?: true
  }

  export type AggregateAccountsArgs = {
    where?: accountsWhereInput
    orderBy?: Enumerable<accountsOrderByInput>
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    count?: true
    min?: AccountsMinAggregateInputType
    max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AggregateAccountsArgs> = {
    [P in keyof T]: P extends 'count' ? number : never
  }



    



  export type accountsSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    favorite_flavor?: boolean
  }

  export type accountsGetPayload<
    S extends boolean | null | undefined | accountsArgs,
    U = keyof S
      > = S extends true
        ? accounts
    : S extends undefined
    ? never
    : S extends accountsArgs | FindManyaccountsArgs
    ?'include' extends U
    ? accounts 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof accounts ?accounts [P]
  : 
     never
  } 
    : accounts
  : accounts


  export interface accountsDelegate {
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {FindUniqueaccountsArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueaccountsArgs>(
      args: Subset<T, FindUniqueaccountsArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts | null>, Prisma__accountsClient<accountsGetPayload<T> | null>>
    /**
     * Find the first Accounts that matches the filter.
     * @param {FindFirstaccountsArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstaccountsArgs>(
      args?: Subset<T, FindFirstaccountsArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts | null>, Prisma__accountsClient<accountsGetPayload<T> | null>>
    /**
     * Find zero or more Accounts that matches the filter.
     * @param {FindManyaccountsArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FindManyaccountsArgs>(
      args?: Subset<T, FindManyaccountsArgs>
    ): CheckSelect<T, Promise<Array<accounts>>, Promise<Array<accountsGetPayload<T>>>>
    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
    **/
    create<T extends accountsCreateArgs>(
      args: Subset<T, accountsCreateArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>
    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
    **/
    delete<T extends accountsDeleteArgs>(
      args: Subset<T, accountsDeleteArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>
    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends accountsUpdateArgs>(
      args: Subset<T, accountsUpdateArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>
    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends accountsDeleteManyArgs>(
      args?: Subset<T, accountsDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Accounts.
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends accountsUpdateManyArgs>(
      args: Subset<T, accountsUpdateManyArgs>
    ): Promise<BatchPayload>
    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
    **/
    upsert<T extends accountsUpsertArgs>(
      args: Subset<T, accountsUpsertArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts>, Prisma__accountsClient<accountsGetPayload<T>>>
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {FindUniqueaccountsArgs} args - Arguments to find a Accounts
     * @deprecated This will be deprecated please use prisma.accounts.findUnique
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueaccountsArgs>(
      args: Subset<T, FindUniqueaccountsArgs>
    ): CheckSelect<T, Prisma__accountsClient<accounts | null>, Prisma__accountsClient<accountsGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyaccountsArgs, 'select' | 'include'>): Promise<number>

  

    /**
     * Aggregate
     */
    aggregate<T extends AggregateAccountsArgs>(args: Subset<T, AggregateAccountsArgs>): Promise<GetAccountsAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__accountsClient<T> implements Promise<T> {
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * accounts findUnique
   */
  export type FindUniqueaccountsArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * Filter, which accounts to fetch.
    **/
    where: accountsWhereUniqueInput
  }


  /**
   * accounts findFirst
   */
  export type FindFirstaccountsArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * Filter, which accounts to fetch.
    **/
    where?: accountsWhereInput
    orderBy?: Enumerable<accountsOrderByInput>
    cursor?: accountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * accounts findMany
   */
  export type FindManyaccountsArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * Filter, which accounts to fetch.
    **/
    where?: accountsWhereInput
    /**
     * Determine the order of the accounts to fetch.
    **/
    orderBy?: Enumerable<accountsOrderByInput>
    /**
     * Sets the position for listing accounts.
    **/
    cursor?: accountsWhereUniqueInput
    /**
     * The number of accounts to fetch. If negative number, it will take accounts before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` accounts.
    **/
    skip?: number
    distinct?: Enumerable<AccountsScalarFieldEnum>
  }


  /**
   * accounts create
   */
  export type accountsCreateArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * The data needed to create a accounts.
    **/
    data: accountsCreateInput
  }


  /**
   * accounts update
   */
  export type accountsUpdateArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * The data needed to update a accounts.
    **/
    data: accountsUpdateInput
    /**
     * Choose, which accounts to update.
    **/
    where: accountsWhereUniqueInput
  }


  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs = {
    data: accountsUpdateManyMutationInput
    where?: accountsWhereInput
  }


  /**
   * accounts upsert
   */
  export type accountsUpsertArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * The filter to search for the accounts to update in case it exists.
    **/
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
    **/
    create: accountsCreateInput
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
    **/
    update: accountsUpdateInput
  }


  /**
   * accounts delete
   */
  export type accountsDeleteArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
    /**
     * Filter which accounts to delete.
    **/
    where: accountsWhereUniqueInput
  }


  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs = {
    where?: accountsWhereInput
  }


  /**
   * accounts without action
   */
  export type accountsArgs = {
    /**
     * Select specific fields to fetch from the accounts
    **/
    select?: accountsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AccountsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    favorite_flavor: 'favorite_flavor'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


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


  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: Enumerable<accountsWhereInput>
    OR?: Enumerable<accountsWhereInput>
    NOT?: Enumerable<accountsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    favorite_flavor?: StringFilter | string
  }

  export type accountsOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    favorite_flavor?: SortOrder
  }

  export type accountsWhereUniqueInput = {
    email?: string
  }

  export type accountsCreateInput = {
    id: string
    name: string
    email: string
    favorite_flavor: string
  }

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite_flavor?: StringFieldUpdateOperationsInput | string
  }

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    favorite_flavor?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }



  /**
   * Batch Payload for updateMany & deleteMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}

/*
* Exports for compatibility introduced in 2.12.0
* Please import from the Prisma namespace instead
*/

/**
 * @deprecated Renamed to `Prisma.AccountsScalarFieldEnum`
 */
export type AccountsScalarFieldEnum = Prisma.AccountsScalarFieldEnum

/**
 * @deprecated Renamed to `Prisma.SortOrder`
 */
export type SortOrder = Prisma.SortOrder

/**
 * @deprecated Renamed to `Prisma.QueryMode`
 */
export type QueryMode = Prisma.QueryMode

/**
 * @deprecated Renamed to `Prisma.ModelName`
 */
export type ModelName = Prisma.ModelName

/**
 * @deprecated Renamed to `Prisma.AggregateAccounts`
 */
export type AggregateAccounts = Prisma.AggregateAccounts

/**
 * @deprecated Renamed to `Prisma.AccountsMinAggregateOutputType`
 */
export type AccountsMinAggregateOutputType = Prisma.AccountsMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AccountsMaxAggregateOutputType`
 */
export type AccountsMaxAggregateOutputType = Prisma.AccountsMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AccountsCountAggregateOutputType`
 */
export type AccountsCountAggregateOutputType = Prisma.AccountsCountAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateAccountsArgs`
 */
export type AggregateAccountsArgs = Prisma.AggregateAccountsArgs

/**
 * @deprecated Renamed to `Prisma.AccountsMinAggregateInputType`
 */
export type AccountsMinAggregateInputType = Prisma.AccountsMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.AccountsMaxAggregateInputType`
 */
export type AccountsMaxAggregateInputType = Prisma.AccountsMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.AccountsCountAggregateInputType`
 */
export type AccountsCountAggregateInputType = Prisma.AccountsCountAggregateInputType

/**
 * @deprecated Renamed to `Prisma.accountsSelect`
 */
export type accountsSelect = Prisma.accountsSelect

/**
 * @deprecated Renamed to `Prisma.FindUniqueaccountsArgs`
 */
export type FindUniqueaccountsArgs = Prisma.FindUniqueaccountsArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstaccountsArgs`
 */
export type FindFirstaccountsArgs = Prisma.FindFirstaccountsArgs

/**
 * @deprecated Renamed to `Prisma.FindManyaccountsArgs`
 */
export type FindManyaccountsArgs = Prisma.FindManyaccountsArgs

/**
 * @deprecated Renamed to `Prisma.accountsCreateArgs`
 */
export type accountsCreateArgs = Prisma.accountsCreateArgs

/**
 * @deprecated Renamed to `Prisma.accountsUpdateArgs`
 */
export type accountsUpdateArgs = Prisma.accountsUpdateArgs

/**
 * @deprecated Renamed to `Prisma.accountsUpdateManyArgs`
 */
export type accountsUpdateManyArgs = Prisma.accountsUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.accountsUpsertArgs`
 */
export type accountsUpsertArgs = Prisma.accountsUpsertArgs

/**
 * @deprecated Renamed to `Prisma.accountsDeleteArgs`
 */
export type accountsDeleteArgs = Prisma.accountsDeleteArgs

/**
 * @deprecated Renamed to `Prisma.accountsDeleteManyArgs`
 */
export type accountsDeleteManyArgs = Prisma.accountsDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.accountsWhereInput`
 */
export type accountsWhereInput = Prisma.accountsWhereInput

/**
 * @deprecated Renamed to `Prisma.accountsOrderByInput`
 */
export type accountsOrderByInput = Prisma.accountsOrderByInput

/**
 * @deprecated Renamed to `Prisma.accountsWhereUniqueInput`
 */
export type accountsWhereUniqueInput = Prisma.accountsWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.accountsCreateInput`
 */
export type accountsCreateInput = Prisma.accountsCreateInput

/**
 * @deprecated Renamed to `Prisma.accountsUpdateInput`
 */
export type accountsUpdateInput = Prisma.accountsUpdateInput

/**
 * @deprecated Renamed to `Prisma.accountsUpdateManyMutationInput`
 */
export type accountsUpdateManyMutationInput = Prisma.accountsUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.StringFilter`
 */
export type StringFilter = Prisma.StringFilter

/**
 * @deprecated Renamed to `Prisma.StringFieldUpdateOperationsInput`
 */
export type StringFieldUpdateOperationsInput = Prisma.StringFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.NestedStringFilter`
 */
export type NestedStringFilter = Prisma.NestedStringFilter