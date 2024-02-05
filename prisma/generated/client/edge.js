
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CurrencyScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  currency_name: 'currency_name',
  currency_code: 'currency_code',
  is_exist: 'is_exist',
  per_hash: 'per_hash',
  rate: 'rate'
};

exports.Prisma.Transaction_tableScalarFieldEnum = {
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

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  username: 'username',
  password: 'password',
  is_exist: 'is_exist',
  balance_hash: 'balance_hash'
};

exports.Prisma.Minners_accountScalarFieldEnum = {
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

exports.Prisma.Payment_manager_optionsScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  auto_transaction: 'auto_transaction',
  is_exist: 'is_exist'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  currency: 'currency',
  transaction_table: 'transaction_table',
  users: 'users',
  minners_account: 'minners_account',
  payment_manager_options: 'payment_manager_options'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Ejayz\\Documents\\Project\\westnile-faucetpay-paymentmanager\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCi8vLyBUaGlzIG1vZGVsIG9yIGF0IGxlYXN0IG9uZSBvZiBpdHMgZmllbGRzIGhhcyBjb21tZW50cyBpbiB0aGUgZGF0YWJhc2UsIGFuZCByZXF1aXJlcyBhbiBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zOiBSZWFkIG1vcmU6IGh0dHBzOi8vcHJpcy5seS9kL2RhdGFiYXNlLWNvbW1lbnRzCm1vZGVsIGN1cnJlbmN5IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuU21hbGxJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgY3VycmVuY3lfbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgQGRiLlZhckNoYXIKICBjdXJyZW5jeV9jb2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICBAZGIuVmFyQ2hhcgogIGlzX2V4aXN0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuPwogIHBlcl9oYXNoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbG9hdD8gICAgICAgICAgICAgIEBkYi5SZWFsCiAgcmF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZsb2F0PyAgICAgICAgICAgICAgQGRiLlJlYWwKICB0cmFuc2FjdGlvbl90YWJsZV90cmFuc2FjdGlvbl90YWJsZV9jdXJyZW5jeVRvY3VycmVuY3kgdHJhbnNhY3Rpb25fdGFibGVbXSBAcmVsYXRpb24oInRyYW5zYWN0aW9uX3RhYmxlX2N1cnJlbmN5VG9jdXJyZW5jeSIpCn0KCi8vLyBUaGlzIG1vZGVsIG9yIGF0IGxlYXN0IG9uZSBvZiBpdHMgZmllbGRzIGhhcyBjb21tZW50cyBpbiB0aGUgZGF0YWJhc2UsIGFuZCByZXF1aXJlcyBhbiBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zOiBSZWFkIG1vcmU6IGh0dHBzOi8vcHJpcy5seS9kL2RhdGFiYXNlLWNvbW1lbnRzCm1vZGVsIHRyYW5zYWN0aW9uX3RhYmxlIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuU21hbGxJbnQKICBjcmVhdGVkX2F0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLlRpbWVzdGFtcHR6KDYpCiAgYW1vdW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZsb2F0PwogIGN1cnJlbmN5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgIEBkYi5TbWFsbEludAogIHRvX3VzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3VycmVudF9iYWxhbmNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZsb2F0PwogIHN0YXR1cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcGF5b3V0X3VzZXJfaGFzaCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBwYXlvdXRfaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHJlZmVycmFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuPwogIHVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/ICAgICAgICAgICAgIEBkYi5TbWFsbEludAogIGhhc2hfbnVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGbG9hdD8gICAgICAgICAgIEBkYi5SZWFsCiAgbWlubmVyX2lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludD8gICAgICAgICAgICAgQGRiLlNtYWxsSW50CiAgY3VycmVuY3lfdHJhbnNhY3Rpb25fdGFibGVfY3VycmVuY3lUb2N1cnJlbmN5IGN1cnJlbmN5PyAgICAgICAgQHJlbGF0aW9uKCJ0cmFuc2FjdGlvbl90YWJsZV9jdXJyZW5jeVRvY3VycmVuY3kiLCBmaWVsZHM6IFtjdXJyZW5jeV0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQogIG1pbm5lcnNfYWNjb3VudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5uZXJzX2FjY291bnQ/IEByZWxhdGlvbihmaWVsZHM6IFttaW5uZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikKICB1c2VycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnM/ICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQp9CgovLy8gVGhpcyBtb2RlbCBvciBhdCBsZWFzdCBvbmUgb2YgaXRzIGZpZWxkcyBoYXMgY29tbWVudHMgaW4gdGhlIGRhdGFiYXNlLCBhbmQgcmVxdWlyZXMgYW4gYWRkaXRpb25hbCBzZXR1cCBmb3IgbWlncmF0aW9uczogUmVhZCBtb3JlOiBodHRwczovL3ByaXMubHkvZC9kYXRhYmFzZS1jb21tZW50cwptb2RlbCB1c2VycyB7CiAgaWQgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAZGIuU21hbGxJbnQKICBjcmVhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikKICB1c2VybmFtZSAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgIEBkYi5WYXJDaGFyCiAgcGFzc3dvcmQgICAgICAgICAgU3RyaW5nPwogIGlzX2V4aXN0ICAgICAgICAgIEJvb2xlYW4/CiAgYmFsYW5jZV9oYXNoICAgICAgRmxvYXQ/ICAgICAgICAgICAgICBAZGIuUmVhbAogIHRyYW5zYWN0aW9uX3RhYmxlIHRyYW5zYWN0aW9uX3RhYmxlW10KfQoKbW9kZWwgbWlubmVyc19hY2NvdW50IHsKICBpZCAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBkYi5TbWFsbEludAogIGNyZWF0ZWRfYXQgICAgICAgIERhdGVUaW1lPyAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5UaW1lc3RhbXB0eig2KQogIGVtYWlsICAgICAgICAgICAgIFN0cmluZz8gICAgICAgICAgICAgQGRiLlZhckNoYXIKICBwYXNzd29yZCAgICAgICAgICBTdHJpbmc/CiAgaXNfZXhpc3QgICAgICAgICAgQm9vbGVhbj8gICAgICAgICAgICBAZGVmYXVsdCh0cnVlKQogIGJhbGFuY2VfaGFzaCAgICAgIEZsb2F0PyAgICAgICAgICAgICAgQGRlZmF1bHQoMCkgQGRiLlJlYWwKICBiYWxhbmNlX2NoZWNrX2F0ICBEYXRlVGltZT8gICAgICAgICAgIEBkYi5UaW1lc3RhbXB0eig2KQogIHRvdGFsX2hhc2hlcyAgICAgIEZsb2F0PyAgICAgICAgICAgICAgQGRlZmF1bHQoMCkgQGRiLlJlYWwKICB1cGRhdGVkX2F0ICAgICAgICBEYXRlVGltZT8gICAgICAgICAgIEBkYi5UaW1lc3RhbXB0eig2KQogIHRyYW5zYWN0aW9uX3RhYmxlIHRyYW5zYWN0aW9uX3RhYmxlW10KfQoKLy8vIFRoaXMgbW9kZWwgY29udGFpbnMgcm93IGxldmVsIHNlY3VyaXR5IGFuZCByZXF1aXJlcyBhZGRpdGlvbmFsIHNldHVwIGZvciBtaWdyYXRpb25zLiBWaXNpdCBodHRwczovL3ByaXMubHkvZC9yb3ctbGV2ZWwtc2VjdXJpdHkgZm9yIG1vcmUgaW5mby4KbW9kZWwgcGF5bWVudF9tYW5hZ2VyX29wdGlvbnMgewogIGlkICAgICAgICAgICAgICAgQmlnSW50ICAgQGlkKG1hcDogInBheW1lbnRfbWFuYWdlX29wdGlvbnNfcGtleSIpIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjcmVhdGVkX2F0ICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooNikKICBhdXRvX3RyYW5zYWN0aW9uIEJvb2xlYW4/IEBkZWZhdWx0KGZhbHNlKQogIGlzX2V4aXN0ICAgICAgICAgQm9vbGVhbj8gQGRlZmF1bHQodHJ1ZSkKfQo=",
  "inlineSchemaHash": "4fdb12b3793703d4b13ab23ef2081d5c33272a77fe1ffaa057983af2c20aa124",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"currency\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_exist\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"per_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_table_transaction_table_currencyTocurrency\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transaction_table\",\"relationName\":\"transaction_table_currencyTocurrency\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"transaction_table\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to_user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payout_user_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payout_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"referral\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency_transaction_table_currencyTocurrency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"currency\",\"relationName\":\"transaction_table_currencyTocurrency\",\"relationFromFields\":[\"currency\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minners_account\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"minners_account\",\"relationName\":\"minners_accountTotransaction_table\",\"relationFromFields\":[\"minner_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"transaction_tableTousers\",\"relationFromFields\":[\"user\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_exist\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_table\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transaction_table\",\"relationName\":\"transaction_tableTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"minners_account\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_exist\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance_hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance_check_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_hashes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transaction_table\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"transaction_table\",\"relationName\":\"minners_accountTotransaction_table\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"payment_manager_options\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auto_transaction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_exist\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

