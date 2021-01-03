
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  debugLib,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.13.1
 * Query Engine version: fcbc4bb2d306c86c28014f596b1e8c7980af8bd4
 */
Prisma.prismaVersion = {
  client: "2.13.1",
  engine: "fcbc4bb2d306c86c28014f596b1e8c7980af8bd4"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw


const dirnamePolyfill = path.join(process.cwd(), "src/generated/oldClient")
const dirname = __dirname.length === 1 ? dirnamePolyfill : __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AccountsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  accounts: 'accounts'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"accounts\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"schema\":{\"inputObjectTypes\":{\"prisma\":[{\"name\":\"accountsWhereInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"email\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"accountsOrderByInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":0},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"email\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"accountsWhereUniqueInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"email\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"accountsCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"email\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"accountsUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"email\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"accountsUpdateManyMutationInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"email\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"mode\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"QueryMode\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFieldUpdateOperationsInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"set\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"NestedStringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]}]},\"outputObjectTypes\":{\"model\":[{\"name\":\"accounts\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"email\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}],\"prisma\":[{\"name\":\"Query\",\"fields\":[{\"name\":\"findFirstaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"accountsOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"AccountsScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"findManyaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"accountsOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"AccountsScalarFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":true}},{\"name\":\"aggregateaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"accountsOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"AggregateAccounts\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"findOneaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneaccounts\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteOneaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateOneaccounts\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"upsertOneaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"create\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"update\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"accounts\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateManyaccounts\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsUpdateManyMutationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"BatchPayload\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteManyaccounts\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"accountsWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"BatchPayload\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AggregateAccounts\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"AccountsCountAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"min\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"AccountsMinAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"max\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"AccountsMaxAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AccountsCountAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"email\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"_all\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AccountsMinAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"email\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AccountsMaxAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"email\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}]},\"enumTypes\":{\"prisma\":[{\"name\":\"AccountsScalarFieldEnum\",\"values\":[\"id\",\"name\",\"email\"]},{\"name\":\"SortOrder\",\"values\":[\"asc\",\"desc\"]},{\"name\":\"QueryMode\",\"values\":[\"default\",\"insensitive\"]}]}},\"mappings\":{\"modelOperations\":[{\"model\":\"accounts\",\"plural\":\"accounts\",\"findUnique\":\"findOneaccounts\",\"findFirst\":\"findFirstaccounts\",\"findMany\":\"findManyaccounts\",\"create\":\"createOneaccounts\",\"delete\":\"deleteOneaccounts\",\"update\":\"updateOneaccounts\",\"deleteMany\":\"deleteManyaccounts\",\"updateMany\":\"updateManyaccounts\",\"upsert\":\"upsertOneaccounts\",\"aggregate\":\"aggregateaccounts\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": "prisma-client-js",
    "output": "/Users/solson/Desktop/platypus/src/generated/oldClient",
    "binaryTargets": [],
    "previewFeatures": [],
    "config": {},
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../prisma/.env"
  },
  "sqliteDatasourceOverrides": [],
  "relativePath": "../../../prisma",
  "clientVersion": "2.13.1",
  "engineVersion": "fcbc4bb2d306c86c28014f596b1e8c7980af8bd4",
  "datasourceNames": [
    "db"
  ]
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'query-engine-darwin');
path.join(process.cwd(), './src/generated/oldClient/query-engine-darwin');

/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './src/generated/oldClient/schema.prisma');
