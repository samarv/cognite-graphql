// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  /**
   * Retrieve the contents of a 3D file.
   *
   * This endpoint supported tag-based caching.
   *
   * This endpoint is only compatible with 3D file IDs from the 3D API, and not compatible with
   * file IDs from the Files API.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/files/{threedFileId}
   */
  apiV1Project3dFile?: Maybe<Scalars['String']>;
  /**
   * Get the results for converting an engineering diagram to SVG and PNG formats.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/diagram/convert/{jobId}
   */
  apiV1ProjectContextDiagramConvert3?: Maybe<ApiV1ProjectContextDiagramConvert3>;
  /**
   * Get the results from an engineering diagram detect job.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/diagram/detect/{jobId}
   */
  apiV1ProjectContextDiagramDetect3?: Maybe<ApiV1ProjectContextDiagramDetect3>;
  /**
   * List all available entity matching models.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/entitymatching/
   */
  apiV1ProjectContextEntitymatching?: Maybe<ApiV1ProjectContextEntitymatching>;
  /**
   * Shows the status of the model. If the status is completed, shows the parameters used to train the model.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/entitymatching/{id}
   */
  apiV1ProjectContextEntitymatching3?: Maybe<ApiV1ProjectContextEntitymatching3>;
  /**
   * Get the results from a predict job.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/entitymatching/jobs/{jobId}
   */
  apiV1ProjectContextEntitymatchingJob?: Maybe<ApiV1ProjectContextEntitymatchingJob>;
  /**
   * The GET /files/icon operation can be used to get an image representation of a file.
   *
   * Either id or externalId must be provided as a query parameter (but not both).
   * Supported file formats:
   * - Normal jpeg and png files are currently fully supported.
   * - Other image file formats might work, but continued support for these are not guaranteed.
   * - Currently only supporting thumbnails for image files.
   * Attempts to get icon for unsupported files will result in status 400.
   *
   * Equivalent to GET /api/v1/projects/{project}/files/icon
   */
  apiV1ProjectFilesIcon?: Maybe<Scalars['String']>;
  /**
   * Retrieve an asset by its ID. If you want to retrieve assets by externalIds, use Retrieve assets instead.
   *
   * Equivalent to GET /api/v1/projects/{project}/assets/{id}
   */
  asset?: Maybe<Asset>;
  /**
   * List all asset mappings
   *
   *
   * Asset references obtained from a mapping - through asset ids - may be
   * invalid, simply by the non-transactional nature of HTTP.
   * They are NOT maintained by any means from CDF, meaning they will be stored until the
   * reference is removed through the delete endpoint of 3d asset mappings.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings
   */
  assetMapping3DWithCursorResponse?: Maybe<AssetMapping3DWithCursorResponse>;
  /**
   * Retrieve cursors based on the last updated time range. Normally this endpoint is used for reading in parallel.
   *
   * Each cursor should be supplied as the 'cursor' query parameter on GET requests to [Read Rows](#operation/getRows).
   * **Note** that the 'minLastUpdatedTime' and the 'maxLastUpdatedTime' query parameter on [Read Rows](#operation/getRows) are ignored when a cursor is specified.
   *
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/cursors
   */
  dataRawDBTableCursors?: Maybe<DataRawDBTableCursors>;
  /**
   * The GET /files operation can be used to return information for all files in a project.
   *
   * Optionally you can add one or more of the following query parameters.
   * The filter query parameters will filter the results to only include files that match all filter parameters.
   *
   * Equivalent to GET /api/v1/projects/{project}/files
   */
  dataWithCursor?: Maybe<DataWithCursor>;
  /**
   * List all assets, or only the assets matching the specified query.
   *
   * Equivalent to GET /api/v1/projects/{project}/assets
   */
  dataWithCursorAsset?: Maybe<DataWithCursorAsset>;
  /**
   * List time series. Use nextCursor to paginate through the results.
   *
   * Equivalent to GET /api/v1/projects/{project}/timeseries
   */
  dataWithCursorGetTimeSeriesMetadataDTO?: Maybe<DataWithCursorGetTimeSeriesMetadataDTO>;
  /**
   * List databases
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs
   */
  dataWithCursorRawDB?: Maybe<DataWithCursorRawDB>;
  /**
   * Retrieve rows from a table
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows
   */
  dataWithCursorRawDBRow?: Maybe<DataWithCursorRawDBRow>;
  /**
   * List tables in a database
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables
   */
  dataWithCursorRawDBTable?: Maybe<DataWithCursorRawDBTable>;
  /**
   * Receive event by ID
   *
   * Equivalent to GET /api/v1/projects/{project}/events/{id}
   */
  event?: Maybe<Event>;
  /**
   * List events optionally filtered on query parameters
   *
   * Equivalent to GET /api/v1/projects/{project}/events
   */
  eventWithCursorResponse?: Maybe<EventWithCursorResponse>;
  /**
   * Retrieve an extraction pipeline by its ID. If you want to retrieve extraction pipelines by externalIds, use Retrieve extraction pipelines instead.
   *
   * Equivalent to GET /api/v1/projects/{project}/extpipes/{id}
   */
  extPipe?: Maybe<ExtPipe>;
  /**
   * Returns a list of all extraction pipelines for a given project
   *
   * Equivalent to GET /api/v1/projects/{project}/extpipes
   */
  extPipes?: Maybe<ExtPipes>;
  /**
   * Returns file info for the file ID
   *
   * Equivalent to GET /api/v1/projects/{project}/files/{id}
   */
  filesMetadata?: Maybe<FilesMetadata>;
  /**
   * Retrieves a list of ancestor nodes of a given node, including itself, in the hierarchy of the 3D model. This operation supports pagination.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/{nodeId}/ancestors
   */
  get3DNodeAncestors?: Maybe<Node3DWithCursorResponse>;
  /**
   * List of all extraction pipeline runs for a given extraction pipeline. Sorted by createdTime value with descendant order.
   *
   * Equivalent to GET /api/v1/projects/{project}/extpipes/runs
   */
  itemsResponseExtPipeRunResponse?: Maybe<ItemsResponseExtPipeRunResponse>;
  /**
   * Retrieve a 3D model
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}
   */
  model3D?: Maybe<Model3D>;
  /**
   * Retrieve a list of available outputs for a processed 3D model. An output can be a format that can be consumed by a viewer (e.g. Reveal) or import in external tools. Each of the outputs will have an associated version which is used to identify the version of output format (not the revision of the processed output). Note that the structure of the outputs will vary and is not covered here.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/outputs
   */
  model3DOutputResponseList?: Maybe<Model3DOutputResponseList>;
  /**
   * Retrieves a list of all models in a project. This operation supports pagination. You can filter out all models without a published revision.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models
   */
  model3DWithCursorResponse?: Maybe<Model3DWithCursorResponse>;
  /**
   * Retrieves a list of nodes from the hierarchy in the 3D model. You can also request a specific subtree with the 'nodeId' query parameter and limit the depth of the resulting subtree with the 'depth' query parameter. By default, nodes are returned in order of ascending treeIndex. We suggest trying to set the query parameter `sortByNodeId` to `true` to check whether it makes your use case faster. The `partition` parameter can only be used if `sortByNodeId` is set to `true`. This operation supports pagination.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes
   */
  node3DWithCursorResponse?: Maybe<Node3DWithCursorResponse>;
  /**
   * Lists all relationships. The order of retrieved objects may change for two calls with the same parameters.
   * The endpoint supports pagination. The initial call to this endpoint should not contain a cursor, but the cursor parameter should be used to retrieve further pages of results.
   *
   * Equivalent to GET /api/v1/projects/{project}/relationships
   */
  pagedRelationshipResponseWrapper?: Maybe<PagedRelationshipResponseWrapper>;
  /**
   * Retrieve row by key
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/{rowKey}
   */
  rawDBRow?: Maybe<RawDBRow>;
  /**
   * Retrieve a 3D revision
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}
   */
  revision3D?: Maybe<Revision3D>;
  /**
   * Retrieves a list of all revisions of a model. This operation supports pagination. You can also filter revisions if they are marked as published or not by using the query param published.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions
   */
  revision3DWithCursorResponse?: Maybe<Revision3DWithCursorResponse>;
  /**
   * List log entries for the revision
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/logs
   */
  revisionLog3DResponse?: Maybe<RevisionLog3DResponse>;
  /**
   * Retrieves a list of all security categories for a project.
   *
   * Equivalent to GET /api/v1/projects/{project}/securitycategories
   */
  securityCategoryWithCursorResponse?: Maybe<SecurityCategoryWithCursorResponse>;
  /**
   * List sequences. Use nextCursor to paginate through the results.
   *
   * Equivalent to GET /api/v1/projects/{project}/sequences
   */
  sequenceWithCursorResponse?: Maybe<SequenceWithCursorResponse>;
};


export type QueryapiV1Project3dFileArgs = {
  project: Scalars['String'];
  threedFileId: Scalars['Float'];
};


export type QueryapiV1ProjectContextDiagramConvert3Args = {
  jobId: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextDiagramDetect3Args = {
  jobId: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextEntitymatchingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextEntitymatching3Args = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextEntitymatchingJobArgs = {
  jobId: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectFilesIconArgs = {
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  project: Scalars['String'];
};


export type QueryassetArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryassetMapping3DWithCursorResponseArgs = {
  assetId?: InputMaybe<Scalars['Float']>;
  cursor?: InputMaybe<Scalars['String']>;
  intersectsBoundingBox?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  nodeId?: InputMaybe<Scalars['Float']>;
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type QuerydataRawDBTableCursorsArgs = {
  dbName: Scalars['String'];
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  numberOfCursors?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type QuerydataWithCursorArgs = {
  assetExternalIds?: InputMaybe<Scalars['String']>;
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  assetSubtreeExternalIds?: InputMaybe<Scalars['String']>;
  assetSubtreeIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxCreatedTime?: InputMaybe<Scalars['Float']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  maxSourceCreatedTime?: InputMaybe<Scalars['Float']>;
  maxSourceModifiedTime?: InputMaybe<Scalars['Float']>;
  maxUploadedTime?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  minCreatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minSourceCreatedTime?: InputMaybe<Scalars['Float']>;
  minSourceModifiedTime?: InputMaybe<Scalars['Float']>;
  minUploadedTime?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  rootAssetIds?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  uploaded?: InputMaybe<Scalars['Boolean']>;
};


export type QuerydataWithCursorAssetArgs = {
  assetSubtreeExternalIds?: InputMaybe<Scalars['String']>;
  assetSubtreeIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  includeMetadata?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxCreatedTime?: InputMaybe<Scalars['Float']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minCreatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parentExternalIds?: InputMaybe<Scalars['String']>;
  parentIds?: InputMaybe<Scalars['String']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  root?: InputMaybe<Scalars['Boolean']>;
  rootIds?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};


export type QuerydataWithCursorGetTimeSeriesMetadataDTOArgs = {
  assetIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  includeMetadata?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  rootAssetIds?: InputMaybe<Scalars['String']>;
};


export type QuerydataWithCursorRawDBArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QuerydataWithCursorRawDBRowArgs = {
  columns?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  dbName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type QuerydataWithCursorRawDBTableArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  dbName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryeventArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryeventWithCursorResponseArgs = {
  assetExternalIds?: InputMaybe<Scalars['String']>;
  assetIds?: InputMaybe<Scalars['String']>;
  assetSubtreeExternalIds?: InputMaybe<Scalars['String']>;
  assetSubtreeIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  includeMetadata?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxActiveAtTime?: InputMaybe<Scalars['Int']>;
  maxCreatedTime?: InputMaybe<Scalars['Float']>;
  maxEndTime?: InputMaybe<Scalars['Float']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  maxStartTime?: InputMaybe<Scalars['Float']>;
  minActiveAtTime?: InputMaybe<Scalars['Int']>;
  minCreatedTime?: InputMaybe<Scalars['Float']>;
  minEndTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minStartTime?: InputMaybe<Scalars['Float']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  rootAssetIds?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryextPipeArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryextPipesArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryfilesMetadataArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type Queryget3DNodeAncestorsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  nodeId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type QueryitemsResponseExtPipeRunResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  externalId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type Querymodel3DArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type Querymodel3DOutputResponseListArgs = {
  format?: InputMaybe<Scalars['String']>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Querymodel3DWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
};


export type Querynode3DWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  depth?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  nodeId?: InputMaybe<Scalars['Float']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  properties?: InputMaybe<Scalars['String']>;
  revisionId: Scalars['Float'];
  sortByNodeId?: InputMaybe<Scalars['Boolean']>;
};


export type QuerypagedRelationshipResponseWrapperArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
};


export type QueryrawDBRowArgs = {
  dbName: Scalars['String'];
  project: Scalars['String'];
  rowKey: Scalars['String'];
  tableName: Scalars['String'];
};


export type Queryrevision3DArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Queryrevision3DWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
};


export type QueryrevisionLog3DResponseArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
  severity?: InputMaybe<Scalars['Float']>;
};


export type QuerysecurityCategoryWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
  sort?: InputMaybe<Sort2>;
};


export type QuerysequenceWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
};

export type ApiV1ProjectContextDiagramConvert3 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** Return the SVG version in grayscale colors only (reduces the file size). */
  grayscale?: Maybe<Scalars['Boolean']>;
  /** An array of converted results, returned when the job finished or failed partially. */
  items?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type JobStatus =
  | 'QUEUED'
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED';

export type ApiV1ProjectContextDiagramDetect3 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** An array of detected results, returned when the job finished or failed partially. */
  items?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits. */
  minTokens?: Maybe<Scalars['Int']>;
  /** Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously. */
  partialMatch?: Maybe<Scalars['Boolean']>;
  /** This field determines the string to search for and to identify object entities. */
  searchField?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatching = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type EntityMatcherResponseSchema = {
  /** Name of the classifier used in the model, "Unsupervised" if unsupervised model. */
  classifier?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** User defined description. */
  description: Scalars['String'];
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId: Scalars['String'];
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType?: Maybe<FeatureType>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings. */
  ignoreMissingFields?: Maybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: Maybe<Array<Maybe<MatchFieldsListItem>>>;
  /** User defined name. */
  name: Scalars['String'];
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId?: Maybe<Scalars['Int']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type FeatureType =
  | 'SIMPLE'
  | 'INSENSITIVE'
  | 'BIGRAM'
  | 'FREQUENCYWEIGHTEDBIGRAM'
  | 'BIGRAMEXTRATOKENIZERS'
  | 'BIGRAMCOMBO';

export type MatchFieldsListItem = {
  source: Scalars['String'];
  target: Scalars['String'];
};

export type ApiV1ProjectContextEntitymatching3 = {
  /** Name of the classifier used in the model, "Unsupervised" if unsupervised model. */
  classifier: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** User defined description. */
  description: Scalars['String'];
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId: Scalars['String'];
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType: FeatureType;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings. */
  ignoreMissingFields?: Maybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: Maybe<Array<Maybe<MatchFieldsListItem>>>;
  /** User defined name. */
  name: Scalars['String'];
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId?: Maybe<Scalars['Int']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatchingJob = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** List of matched entities with confidence score. */
  items: Array<Maybe<Items75ListItem>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type Items75ListItem = {
  /** Matched items, sorted from highest score to lowest. May be empty. */
  matches: Array<Maybe<MatchesListItem>>;
  /** The source item given to predict. */
  source: Scalars['JSON'];
};

export type MatchesListItem = {
  /** The model's confidence in the match. */
  score?: Maybe<Scalars['Float']>;
  /** The target item given to predict. */
  target?: Maybe<Scalars['JSON']>;
};

export type Asset = {
  /** Aggregated metrics of the asset */
  aggregates?: Maybe<AggregateResultItem>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The id of the dataset this asset belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** The description of the asset. */
  description?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The name of the asset. */
  name: Scalars['String'];
  /**
   * The parent node's external ID used to specify the parent-child relationship.
   * When specifying this field, the API will resolve the external ID into an internal ID and use the internal ID to store the parent-child relation.
   * As a result, a later change to update the parent's external ID will not affect this parent-child relationship as it is based on internal ID.
   *
   * You should not use this field in combination with the parentId field.
   *
   */
  parentExternalId?: Maybe<Scalars['String']>;
  /**
   * The parent node's ID used to specify parent-child relationship.
   *
   * You should not use this field in combination with the parentExternalId field.
   *
   */
  parentId?: Maybe<Scalars['Int']>;
  /** The ID of the root asset. The root asset is the asset spanning the entire asset hierarchy that this asset belongs to. */
  rootId: Scalars['Int'];
  /** The source of the asset. */
  source?: Maybe<Scalars['String']>;
};

/** Aggregated metrics of the asset */
export type AggregateResultItem = {
  /** Number of direct descendants for the asset */
  childCount?: Maybe<Scalars['Int']>;
  /** Asset path depth (number of levels below root node). */
  depth?: Maybe<Scalars['Int']>;
  /** IDs of assets on the path to the asset. */
  path?: Maybe<Array<Maybe<AssetIdentifier>>>;
};

export type AssetIdentifier = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
};

/** A label assigned to a resource. */
export type Label = {
  /** An external ID to a predefined label definition. */
  externalId: Scalars['String'];
};

export type AssetMapping3DWithCursorResponse = {
  items: Array<Maybe<AssetMapping3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type AssetMapping3D = {
  /** The ID of the associated asset (Cognite's Assets API). */
  assetId: Scalars['Float'];
  /** The ID of the node. */
  nodeId: Scalars['Float'];
  /** The number of nodes in the subtree of this node (this number included the node itself). */
  subtreeSize: Scalars['Float'];
  /** A number describing the position of this node in the 3D hierarchy, starting from 0. The tree is traversed in a depth-first order. */
  treeIndex: Scalars['Float'];
};

/** A list of cursors */
export type DataRawDBTableCursors = {
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A list of objects along with possible cursors to get the next page of results */
export type DataWithCursor = {
  items?: Maybe<Array<Maybe<FilesMetadata>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type FilesMetadata = {
  assetIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Directory containing the file. Must be an absolute, unix-style path. */
  directory?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** The geographic metadata of the file. */
  geoLocation?: Maybe<GeoLocation>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: Maybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The security category IDs required to access this file. */
  securityCategories?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The source of the file. */
  source?: Maybe<Scalars['String']>;
  sourceCreatedTime?: Maybe<Scalars['Int']>;
  sourceModifiedTime?: Maybe<Scalars['Int']>;
  /** Whether or not the actual file is uploaded.  This field is returned only by the API, it has no effect in a post body. */
  uploaded: Scalars['Boolean'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  uploadedTime?: Maybe<Scalars['Float']>;
};

/** The geographic metadata of the file. */
export type GeoLocation = {
  /** Represents the points, curves and surfaces in the coordinate space. */
  geometry: Scalars['JSON'];
  /** Additional properties in a String key -> Object value format. */
  properties?: Maybe<Scalars['JSON']>;
  /** One of the GeoJSON types. Currently only the 'Feature' type is supported. */
  type: Type;
};

export type Type =
  | 'FEATURE';

/** A list of objects along with possible cursors to get the next or previous page of results. */
export type DataWithCursorAsset = {
  items: Array<Maybe<Asset>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** A list of objects along with possible cursors to get the next page of result */
export type DataWithCursorGetTimeSeriesMetadataDTO = {
  items: Array<Maybe<GetTimeSeriesMetadataDTO>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type GetTimeSeriesMetadataDTO = {
  /** Asset ID of equipment linked to this time series. */
  assetId?: Maybe<Scalars['Int']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Description of the time series. */
  description?: Maybe<Scalars['String']>;
  /** The externally supplied ID for the time series. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** Whether the time series is a step series or not. */
  isStep: Scalars['Boolean'];
  /** Whether the time series is string valued or not. */
  isString: Scalars['Boolean'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The display short name of the time series. Note: Value of this field can differ from name presented by older versions of API 0.3-0.6. */
  name?: Maybe<Scalars['String']>;
  /** The required security categories to access this time series. */
  securityCategories?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The physical unit of the time series. */
  unit?: Maybe<Scalars['String']>;
};

/** A list of objects along with possible cursors to get the next, or previous, page of results */
export type DataWithCursorRawDB = {
  items?: Maybe<Array<Maybe<RawDB>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** A NoSQL database to store customer data. */
export type RawDB = {
  /** Unique name of a database. */
  name: Scalars['String'];
};

/** A list of objects along with possible cursors to get the next, or previous, page of results */
export type DataWithCursorRawDBRow = {
  items?: Maybe<Array<Maybe<RawDBRow>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RawDBRow = {
  /** Row data stored as a JSON object. */
  columns: Scalars['JSON'];
  /** Unique row key */
  key: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
};

/** A list of objects along with possible cursors to get the next, or previous, page of results */
export type DataWithCursorRawDBTable = {
  items?: Maybe<Array<Maybe<RawDBTable>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** A NoSQL database table to store customer data */
export type RawDBTable = {
  /** Unique name of the table */
  name: Scalars['String'];
};

export type Event = {
  /** Asset IDs of equipment that this event relates to. */
  assetIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The id of the dataset this event belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** Textual description of the event. */
  description?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  endTime?: Maybe<Scalars['Float']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The source of this event. */
  source?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime?: Maybe<Scalars['Float']>;
  /** SubType of the event, e.g 'electrical'. */
  subtype?: Maybe<Scalars['String']>;
};

export type EventWithCursorResponse = {
  items: Array<Maybe<Event>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type ExtPipe = {
  /** Contacts list. */
  contacts?: Maybe<Array<Maybe<Contact>>>;
  /** Extraction Pipeline creator. Usually user email is expected here */
  createdBy?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: Maybe<Scalars['Float']>;
  /** DataSet ID */
  dataSetId: Scalars['Float'];
  /** Description of Extraction Pipeline */
  description?: Maybe<Scalars['String']>;
  /** Documentation text field, supports Markdown for text formatting. */
  documentation?: Maybe<Scalars['String']>;
  /** External Id provided by client. Should be unique within the project. */
  externalId: Scalars['String'];
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
  /** Time of last failure run. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastFailure?: Maybe<Scalars['Float']>;
  /** Last failure message. */
  lastMessage?: Maybe<Scalars['String']>;
  /** Last seen time. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastSeen?: Maybe<Scalars['Float']>;
  /** Time of last successful run. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastSuccess?: Maybe<Scalars['Float']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime?: Maybe<Scalars['Float']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Key are at most 128 bytes. Values are at most 10240 bytes. Up to 256 key-value pairs. Total size is at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** Name of Extraction Pipeline */
  name: Scalars['String'];
  /** Raw tables */
  rawTables?: Maybe<Array<Maybe<RawTable>>>;
  /** Possible values: “On trigger”, “Continuous” or cron expression. If empty then null */
  schedule?: Maybe<Scalars['String']>;
  /** Source for Extraction Pipeline */
  source?: Maybe<Scalars['String']>;
};

export type Contact = {
  /** Contact email */
  email?: Maybe<Scalars['String']>;
  /** Contact name */
  name?: Maybe<Scalars['String']>;
  /** Contact role */
  role?: Maybe<Scalars['String']>;
  /** True, if contact receives email notifications */
  sendNotification?: Maybe<Scalars['Boolean']>;
};

export type RawTable = {
  /** Database name */
  dbName: Scalars['String'];
  /** Table name */
  tableName: Scalars['String'];
};

/** List of extraction pipelines */
export type ExtPipes = {
  items?: Maybe<Array<Maybe<ExtPipe>>>;
};

export type Node3DWithCursorResponse = {
  items: Array<Maybe<Node3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type Node3D = {
  /** The bounding box of the subtree with this sector as the root sector. Is null if there are no geometries in the subtree. */
  boundingBox?: Maybe<BoundingBox3D>;
  /** The depth of the node in the tree, starting from 0 at the root node. */
  depth: Scalars['Float'];
  /** The ID of the node. */
  id: Scalars['Float'];
  /** The name of the node. */
  name: Scalars['String'];
  /** The parent of the node, null if it is the root node. */
  parentId?: Maybe<Scalars['Float']>;
  /** Properties extracted from 3D model, with property categories containing key/value string pairs. */
  properties?: Maybe<Scalars['JSON']>;
  /** The number of descendants of the node, plus one (counting itself). */
  subtreeSize: Scalars['Float'];
  /** The index of the node in the 3D model hierarchy, starting from 0. The tree is traversed in a depth-first order. */
  treeIndex: Scalars['Float'];
};

/** The bounding box of the subtree with this sector as the root sector. Is null if there are no geometries in the subtree. */
export type BoundingBox3D = {
  max: Array<Maybe<Scalars['Float']>>;
  min: Array<Maybe<Scalars['Float']>>;
};

/** Response with a list of elements. */
export type ItemsResponseExtPipeRunResponse = {
  items?: Maybe<Array<Maybe<ExtPipeRunResponse>>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** Extraction Pipeline Run. Contains extraction pipeline status and message for a moment of time */
export type ExtPipeRunResponse = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: Maybe<Scalars['Float']>;
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
  /** Error message. */
  message?: Maybe<Scalars['String']>;
  /** Extraction Pipeline status. */
  status: Scalars['String'];
};

export type Model3D = {
  /** The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** The ID of the model. */
  id: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The name of the model. */
  name: Scalars['String'];
};

export type Model3DOutputResponseList = {
  /** A list of named and versioned outputs for the model. Note that the list is not sorted. */
  items: Array<Maybe<Items27ListItem>>;
};

export type Items27ListItem = {
  /** Reference to 3D file containing output. 3D file can either be a single file or folder. Use `/3d/files/{id}`. */
  blobId: Scalars['Int'];
  /** Format identifier. */
  format: Scalars['String'];
  /** Version of the output format, starting at 1. */
  version: Scalars['Int'];
};

export type Model3DWithCursorResponse = {
  items: Array<Maybe<Model3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type PagedRelationshipResponseWrapper = {
  items: Array<Maybe<RelationshipResponse>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RelationshipResponse = {
  /** Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project. */
  confidence?: Maybe<Scalars['Float']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was created. */
  createdTime: Scalars['Int'];
  /** The ID of the dataset the relationship belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime. */
  endTime?: Maybe<Scalars['Int']>;
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was last updated. */
  lastUpdatedTime: Scalars['Int'];
  /** The external ID of the resource that is the relationship source. */
  sourceExternalId: Scalars['String'];
  /** The resource type of the relationship source. Must be one of the specified values. */
  sourceType: Scalars['String'];
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime. */
  startTime?: Maybe<Scalars['Int']>;
  /** The external ID of the resource that is the relationship target. */
  targetExternalId: Scalars['String'];
  /** The resource type of the relationship target. Must be one of the specified values. */
  targetType: Scalars['String'];
};

export type Revision3D = {
  /** The number of asset mappings for this revision. */
  assetMappingCount: Scalars['Float'];
  /** Initial camera position and target. */
  camera?: Maybe<RevisionCameraProperties>;
  /** The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC. */
  createdTime: Scalars['Float'];
  /** The file id. */
  fileId: Scalars['Float'];
  /** The ID of the revision. */
  id: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: Maybe<Scalars['JSON']>;
  /** True if the revision is marked as published. */
  published: Scalars['Boolean'];
  rotation?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The status of the revision. */
  status: Status;
  /** The threed file ID of a thumbnail for the revision. Use `/3d/files/{id}` to retrieve the file. */
  thumbnailThreedFileId?: Maybe<Scalars['Float']>;
  /** The URL of a thumbnail for the revision. */
  thumbnailURL?: Maybe<Scalars['String']>;
};

/** Initial camera position and target. */
export type RevisionCameraProperties = {
  /** Initial camera position. */
  position?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** Initial camera target. */
  target?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Status =
  | 'QUEUED'
  | 'PROCESSING'
  | 'DONE'
  | 'FAILED';

export type Revision3DWithCursorResponse = {
  items: Array<Maybe<Revision3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RevisionLog3DResponse = {
  items: Array<Maybe<RevisionLog3D>>;
};

export type RevisionLog3D = {
  /** Optional extra information related to the log entry */
  info?: Maybe<Scalars['String']>;
  /** How severe is the message (3 = INFO, 5 = WARN, 7 = ERROR). */
  severity: Scalars['Int'];
  /** The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC. */
  timestamp: Scalars['Float'];
  /** Main computer parsable log entry type */
  type: Scalars['String'];
};

/** A list of objects along with possible cursors to get the next page of results */
export type SecurityCategoryWithCursorResponse = {
  items: Array<Maybe<SecurityCategoryDTO>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type SecurityCategoryDTO = {
  /** ID of the security category */
  id: Scalars['Float'];
  /** Name of the security category */
  name: Scalars['String'];
};

export type Sort2 =
  | 'ASC'
  | 'DESC';

export type SequenceWithCursorResponse = {
  items: Array<Maybe<GetSequenceDTO>>;
  /** The cursor to get the next page of results (if available). Learn more [here](/dev/concepts/pagination/). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** Information about the sequence stored in the database */
export type GetSequenceDTO = {
  /** Optional asset this sequence is associated with */
  assetId?: Maybe<Scalars['Float']>;
  /** List of column definitions */
  columns: Array<Maybe<GetSequenceColumnDTO>>;
  /** Time when this sequence was created in CDF in milliseconds since Jan 1, 1970. */
  createdTime: Scalars['Float'];
  /** Data set that this sequence belongs to */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Description of the sequence */
  description?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** Unique cognite-provided identifier for the sequence */
  id: Scalars['Float'];
  /** The last time this sequence was updated in CDF, in milliseconds since Jan 1, 1970. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, up to a total size of 10000 bytes across all keys and values. */
  metadata?: Maybe<Scalars['JSON']>;
  /** Name of the sequence */
  name?: Maybe<Scalars['String']>;
};

/** Information about a column stored in the database */
export type GetSequenceColumnDTO = {
  /** Time when this asset was created in CDF in milliseconds since Jan 1, 1970. */
  createdTime: Scalars['Float'];
  /** Description of the column */
  description?: Maybe<Scalars['String']>;
  /** User provided column identifier (Unique for a given sequence) */
  externalId?: Maybe<Scalars['String']>;
  /** The last time this asset was updated in CDF, in milliseconds since Jan 1, 1970. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value */
  metadata?: Maybe<Scalars['JSON']>;
  /** Human readable name of the column */
  name?: Maybe<Scalars['String']>;
  /** What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100] */
  valueType: SequenceValueTypeEnum;
};

export type SequenceValueTypeEnum =
  | 'STRING'
  | 'DOUBLE'
  | 'LONG';

export type Mutation = {
  /**
   * Retrieve a list of all events in the same project. This operation supports pagination by cursor. Criteria can be applied to select a subset of events.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/list
   */
  advancedListEvents?: Maybe<EventWithCursorResponse>;
  /**
   * Retrieves a list of all files in a project. Criteria can be supplied to select a subset of files. This operation supports pagination with cursors.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/list
   */
  advancedListFiles?: Maybe<DataWithCursor>;
  /**
   * Retrieves a list of sequences matching the given criteria.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/list
   */
  advancedListSequences?: Maybe<SequenceWithCursorResponse>;
  /**
   * Use advanced filtering options to agggregate assets.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/aggregate
   */
  aggregateAssets?: Maybe<DataAssetAggregate>;
  /**
   * Aggregate data sets in the same project. Criteria can be applied to select a subset of data sets.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/aggregate
   */
  aggregateDataSets?: Maybe<DataDataSetAggregate>;
  /**
   * The aggregation API allows you to compute aggregated results on events
   * like getting the count of all events in a project or checking what are all the
   * different types and subtypes of events in your project, along with
   * the count of events in each of those aggregations. By specifying an additional
   * filter, you can also aggregate only among events matching the specified filter.
   *
   * The default behavior, when you do not specify
   * the `aggregate` field in the request body, is to return the count
   * of events.
   *
   * Setting `aggregate` to `uniqueValues` will return all unique values (up to a
   * maximum of 1000) and the count of each in the field specified in
   * `fields: []`. Note that, currently, you can only request for unique
   * values on a single field. Also, in the case of text fields, the values are
   * aggregated in a case-insensitive manner. For example:
   *
   * ```
   * {
   *   "aggregate": "uniqueValues",
   *   "fields": [ "type" ]
   * }
   * ```
   *
   * will return all unique 'types' in the events in your project.
   *
   * Similarly,
   *
   * ```
   * {
   *   "aggregate": "uniqueValues",
   *   "fields": [ "dataSetId" ],
   *   "filter": {
   *     "subType": "subtype_1"
   *   }
   * }
   * ```
   * will return all unique dataSetIds in events of subtype 'subtype_1'
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/events/aggregate
   */
  aggregateEvents?: Maybe<AggregateResult>;
  /**
   * Calculate aggregates for files, based on optional filter specification. Returns the following aggregates: `count`
   *
   * Equivalent to POST /api/v1/projects/{project}/files/aggregate
   */
  aggregateFiles?: Maybe<DataFilesAggregate>;
  /**
   * Count the number of sequences that match the given filter
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/aggregate
   */
  aggregateSequences?: Maybe<SequenceAggregateResponse>;
  /**
   * Count the number of time series that match the given filter
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/aggregate
   */
  aggregateTimeSeries?: Maybe<TimeSeriesAggregateResponse>;
  /**
   * Updates one or more time series. Fields that are not included in the request, are not changed.
   *
   * For primitive fields (String, Long Int), use 'set': 'value' to update the value; use 'setNull': true to set the field to null.
   *
   * For JSON Array fields (for example securityCategories), use 'set': [value1, value2] to update the value; use 'add': [v1, v2] to add values; use 'remove': [v1, v2] to remove values.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/update
   */
  alterTimeSeries?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Retrieve assets by IDs or external IDs. If you specify to get aggregates then be aware that the aggregates are eventually consistent.
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/byids
   */
  byIdsAssets?: Maybe<DataAsset>;
  /**
   * Retrieves information about events in the same project. Events are returned in the same order as the ids listed in the query.
   *
   * A maximum of 1000 event IDs may be listed per request and all of them must be unique.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/byids
   */
  byIdsEvents?: Maybe<EventResponse>;
  /**
   * Retrieves metadata information about multiple specific files in the same project.
   * Results are returned in the same order as in the request. This operation does not return the file contents.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/byids
   */
  byIdsFiles?: Maybe<DataFileMetadata>;
  /**
   * Retrieves information about multiple extraction pipelines in the same project. All ids and externalIds must be unique.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/byids
   */
  byidsExtPipes?: Maybe<ExtPipes>;
  /**
   * Retrieve relationships by external IDs. You can retrieve a maximum of 1000 relationships per request.
   * The order of the relationships in the response equals the order in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/byids
   */
  byidsRelationships?: Maybe<EnrichedRelationshipResponseWrapper>;
  /**
   * Create asset mappings
   *
   *
   * Asset references when creating a mapping - through asset ids - are allowed to be
   * invalid.
   * They are NOT maintained by any means from CDF, meaning they will be stored until the
   * reference is removed through the delete endpoint of 3d asset mappings.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings
   */
  create3DMappings?: Maybe<AssetMapping3DList>;
  /**
   * Create 3D models
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models
   */
  create3DModels?: Maybe<Model3DList>;
  /**
   * Create 3D revisions
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions
   */
  create3DRevisions?: Maybe<Revision3DList>;
  /**
   * You can create a maximum of 1000 assets per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets
   */
  createAssets?: Maybe<DataAsset>;
  /**
   * Create databases in a project. It is possible to post a maximum of 1000 databases per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs
   */
  createDBs?: Maybe<DataRawDB>;
  /**
   * You can create a maximum of 10 data sets per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets
   */
  createDataSets?: Maybe<DataSetList>;
  /**
   * Creates multiple event objects in the same project. It is possible to post a maximum of 1000 events per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/events
   */
  createEvents?: Maybe<EventResponse>;
  /**
   * Creates multiple new extraction pipelines. A maximum of 1000 extraction pipelines can be created per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes
   */
  createExtPipes?: Maybe<ExtPipes>;
  /**
   * List of the relationships to create. You can create a maximum of 1000 relationships per request. Relationships should be unique, but CDF does not prevent you from creating duplicates where only the externalId differs.
   *
   * Relationships are uniquely identified by their externalId. Non-unique relationships will not be created.
   *
   * The order of relationships in the response equals the order in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships
   */
  createRelationships?: Maybe<RelationshipResponseWrapper>;
  /**
   * Create multiple extraction pipeline runs. Current version supports one extraction pipeline run per request. Extraction pipeline runs support three statuses: success, failure, seen. The content of the Error Message parameter is configurable and will contain any messages that have been configured within the extraction pipeline.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/runs
   */
  createRuns?: Maybe<ItemsResponseCreateExtPipeRunResponse>;
  /**
   * Creates security categories with the given names. Duplicate names in the request are ignored.
   * If a security category with one of the provided names exists already, then the request will fail and no security categories are created.
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/securitycategories
   */
  createSecurityCategories?: Maybe<SecurityCategoryResponse>;
  /**
   * Create one or more sequences.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences
   */
  createSequence?: Maybe<DataGetSequence>;
  /**
   * Create tables in a database. It is possible to post a maximum of 1000 tables per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables
   */
  createTables?: Maybe<DataRawDBTable>;
  /**
   * Delete a list of asset mappings
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/delete
   */
  delete3DMappings?: Maybe<Scalars['JSON']>;
  /**
   * Delete 3D models
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/delete
   */
  delete3DModels?: Maybe<Scalars['JSON']>;
  /**
   * Delete 3D revisions
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/delete
   */
  delete3DRevisions?: Maybe<Scalars['JSON']>;
  /**
   * Delete assets. To delete all descendants, set recursive to true. The limit of the request does not include the number of descendants that are deleted.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/delete
   */
  deleteAssets?: Maybe<Scalars['JSON']>;
  /**
   * It deletes a database, but fails if the database is not empty and recursive is set to false (default).
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/delete
   */
  deleteDBs?: Maybe<Scalars['JSON']>;
  /**
   * Delete datapoints from time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data/delete
   */
  deleteDatapoints?: Maybe<Scalars['JSON']>;
  /**
   * Deletes events with the given ids. A maximum of 1000 events can be deleted per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/delete
   */
  deleteEvents?: Maybe<Scalars['JSON']>;
  /**
   * Delete extraction pipelines for given list of ids and externalIds. When the extraction pipeline is deleted, all extraction pipeline runs related to the extraction pipeline are automatically deleted.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/delete
   */
  deleteExtPipes?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the files with the given ids.
   *
   * A maximum of 1000 files can be deleted per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/delete
   */
  deleteFiles?: Maybe<Scalars['JSON']>;
  /**
   * Delete the relationships between resources identified by the external IDs in the request. You can delete a maximum of 1000 relationships per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/delete
   */
  deleteRelationships?: Maybe<Scalars['JSON']>;
  /**
   * Delete rows in a table
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/delete
   */
  deleteRows?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the security categories that match the provided IDs.
   * If any of the provided IDs does not belong to an existing security category, then the request will fail and no security categories are deleted.
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/securitycategories/delete
   */
  deleteSecurityCategories?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the given rows of the sequence. All columns are affected.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data/delete
   */
  deleteSequenceData?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the sequences with the specified IDs. If one or more of the sequences do not exist, ignoreUnknownIds controls what will happen: if it is true, the sequences that do exist will be deleted, and the request succeeds; if it is false or absent, nothing will be deleted, and the request fails.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/delete
   */
  deleteSequences?: Maybe<Scalars['JSON']>;
  /**
   * Delete tables in a database
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/delete
   */
  deleteTables?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the time series with the specified IDs and their datapoints.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/delete
   */
  deleteTimeSeries?: Maybe<Scalars['JSON']>;
  /**
   * Convert interactive engineering diagrams to image format, with highlighted annotations.
   * Supported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.
   * Supported output image formats are PNG and SVG, only the svg embeds the input annotations.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/diagram/convert/
   */
  diagramConvert?: Maybe<ApiV1ProjectContextDiagramConvert2>;
  /**
   * Detect annotations in engineering diagrams. Note: All users in a CDF project with assets read-all and files read-all capabilities can access data sent to this endpoint.
   * Supported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/diagram/detect/
   */
  diagramDetect?: Maybe<ApiV1ProjectContextDiagramDetect2>;
  /**
   * Retrieves a list of download URLs for the specified list of file IDs. After getting the download links, the client has to issue a GET request to the returned URLs, which will respond with the contents of the file. The link will expire after 30 seconds.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/downloadlink
   */
  downloadLinks?: Maybe<ApiV1ProjectFilesDownloadlink>;
  /**
   * Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Train a model that predicts matches between entities (for example, time series names to asset names). This is also known as fuzzy joining. If there are no trueMatches (labeled data), you train a static (unsupervised) model, otherwise a machine learned (supervised) model is trained.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/
   */
  entityMatchingCreate?: Maybe<EntityMatcherResponseSchema>;
  /**
   * Deletes an entity matching model. Currently, this is a soft delete, and only removes the entry from listing.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/delete
   */
  entityMatchingDelete?: Maybe<Scalars['JSON']>;
  /**
   * Use filtering options to find entity matcher models.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/list
   */
  entityMatchingFilter?: Maybe<ApiV1ProjectContextEntitymatchingList2>;
  /**
   * Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Predicts entity matches using a trained model.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/predict
   */
  entityMatchingPredict?: Maybe<ApiV1ProjectContextEntitymatchingPredict>;
  /**
   * Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Creates a new model by re-training an existing model on existing data but with additional true matches. The old model is not changed. The new model gets a new id and new external id if `newExternalId` is set, or no external id if `newExternalId` is not set. Use for efficient re-training of the model after a user creates additional confirmed matches.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/refit
   */
  entityMatchingReFit?: Maybe<ApiV1ProjectContextEntitymatchingRefit>;
  /**
   * Retrieve entity matching models by IDs or external IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/byids
   */
  entityMatchingRetrieve?: Maybe<ApiV1ProjectContextEntitymatchingByids2>;
  /**
   * Update entity matching models by IDs or external IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/update
   */
  entityMatchingUpdate?: Maybe<ApiV1ProjectContextEntitymatchingUpdate2>;
  /**
   * Lists 3D assets mappings that match the specified filter parameter. Only
   * one type of filter can be specified for each request, either `assetIds`, `nodeIds` or `treeIndexes`.
   *
   *
   * Asset references obtained from a mapping - through asset ids - may be
   * invalid, simply by the non-transactional nature of HTTP.
   * They are NOT maintained by any means from CDF, meaning they will be stored until the
   * reference is removed through the delete endpoint of 3d asset mappings.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/list
   */
  filter3DAssetMappings?: Maybe<AssetMapping3DWithCursorResponse>;
  /**
   * List nodes in a project, filtered by node property values specified by supplied filters. This operation supports pagination and partitions.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/list
   */
  filter3DNodes?: Maybe<Node3DWithCursorResponse>;
  /**
   * Use advanced filtering options to find extraction pipelines.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/list
   */
  filterExtPipes?: Maybe<ExtPipes>;
  /**
   * Use advanced filtering options to find extraction pipeline runs. Sorted by createdTime value with descendant order.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/runs/list
   */
  filterRuns?: Maybe<ItemsResponseExtPipeRunResponse>;
  /**
   * Retrieves specific nodes given by a list of IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/byids
   */
  get3DNodesById?: Maybe<Node3DList>;
  /**
   * Retrieve data sets by IDs or external IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/byids
   */
  getDataSets?: Maybe<DataSetList>;
  /**
   * Retrieves the latest data point in a time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data/latest
   */
  getLatest?: Maybe<DatapointsResponse>;
  /**
   * Retrieves the last row (i.e the row with the highest row number) in a sequence.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data/latest
   */
  getLatestSequenceRow?: Maybe<SequenceGetData>;
  /**
   * Retrieves a list of data points from multiple time series in a project. This operation supports aggregation, but not pagination. A detailed description of how aggregates work can be found at [our concept guide for aggregation](<https://docs.cognite.com/dev/concepts/aggregation/>).
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data/list
   */
  getMultiTimeSeriesDatapoints?: Maybe<DatapointsOrAggregatesResponse>;
  /**
   * Retrieve one or more sequences by ID or external ID. The sequences are returned in the same order as in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/byids
   */
  getSequenceById?: Maybe<DataGetSequence>;
  /**
   * Processes data requests, and returns the result. NB - This operation uses a dynamic limit on the number of rows returned based on the number and type of columns, use the provided cursor to paginate and retrieve all data.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data/list
   */
  getSequenceData?: Maybe<SequenceGetDataWithCursor>;
  /**
   * Retrieve one or more time series by ID or external ID. The time series are returned in the same order as in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/byids
   */
  getTimeSeriesByIds?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Create metadata information and get an upload link for a file.
   *
   * To upload the file, use the uploadUrl link in the response in a separate request.
   * To upload a file, send an HTTP PUT request to the uploadUrl with the relevant 'Content-Type' and 'Content-Length' headers.
   *
   * If the uploadUrl contains the string '/v1/files/gcs_proxy/', you can make a Google Cloud Storage (GCS) resumable upload request
   * as documented in https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload.
   *
   * The uploadUrl expires after one week.
   * Any file info entry that does not have the actual file uploaded within one week will be automatically deleted.
   *
   * Equivalent to POST /api/v1/projects/{project}/files
   */
  initFileUpload?: Maybe<ApiV1ProjectFiles>;
  /**
   * Use advanced filtering options to find assets.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/list
   */
  listAssets?: Maybe<DataWithCursorAsset>;
  /**
   * Use advanced filtering options to find data sets.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/list
   */
  listDataSets?: Maybe<DataSetListWithCursor>;
  /**
   * Lists relationships matching the query filter in the request. You can retrieve a maximum of 1000 relationships per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/list
   */
  listRelationships?: Maybe<PagedEnrichedRelationshipResponseWrapper>;
  /**
   * Retrieves a list of time series matching the specified criteria. This operation supports pagination by cursor. Criteria can be applied to select a subset of time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/list
   */
  listTimeSeries?: Maybe<DataWithCursorGetTimeSeriesMetadataDTO>;
  /**
   * Insert datapoints into a time series. You can do this for multiple time series.
   * If you insert a datapoint with a timestamp that already exists, it will be overwritten with the new value.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data
   */
  postMultiTimeSeriesDatapoints?: Maybe<Scalars['JSON']>;
  /**
   * Insert rows into a table. It is possible to post a maximum of 10000 rows per request.
   * It will replace the columns of an existing row if the rowKey already exists.
   *
   * The rowKey is limited to 1024 characters which also includes Unicode characters.
   * The maximum size of columns are 5 MiB, however the maximum size of one column name and value is 2621440 characters each.
   * If you want to store huge amount of data per row or column we recommend using the Files API to upload blobs, then reference it from the Raw row.
   *
   * The columns object is a key value object, where the key corresponds to the column name while the value is the column value.
   * It supports all the valid types of values in JSON, so number, string, array, and even nested JSON structure (see payload example to the right).
   *
   * **Note** There is no rollback if an error occurs, which means partial data may be written. However, it's safe to retry the request, since this endpoint supports both update and insert (upsert).
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows
   */
  postRows?: Maybe<Scalars['JSON']>;
  /**
   * Inserts rows into a sequence. This overwrites data in rows and columns that exist.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data
   */
  postSequenceData?: Maybe<Scalars['JSON']>;
  /**
   * Create one or more time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries
   */
  postTimeSeries?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Execute an on-the-fly synthetic query
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/synthetic/query
   */
  querySyntheticTimeseries?: Maybe<SyntheticQueryResponses>;
  /**
   * Fulltext search for assets based on result relevance. Primarily meant
   * for human-centric use-cases, not for programs, since matching and
   * ordering may change over time. Additional filters can also be
   * specified. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/search
   */
  searchAssets?: Maybe<DataAsset>;
  /**
   * Search within events
   *
   * Equivalent to POST /api/v1/projects/{project}/events/search
   */
  searchEvents?: Maybe<EventResponse>;
  /**
   * Search for files based on relevance. You can also supply a strict match filter as in Filter files, and search in the results from the filter. Returns first 1000 results based on relevance. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/search
   */
  searchFiles?: Maybe<DataFileMetadata>;
  /**
   * Retrieves a list of sequences matching the given criteria. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/search
   */
  searchSequences?: Maybe<DataGetSequence>;
  /**
   * Fulltext search for time series based on result relevance. Primarily meant
   * for human-centric use-cases, not for programs, since matching and
   * ordering may change over time. Additional filters can also be
   * specified. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/search
   */
  searchTimeSeries?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Update 3D models
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/update
   */
  update3DModels?: Maybe<Model3DList>;
  /**
   * Update 3D revisions
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/update
   */
  update3DRevisions?: Maybe<Revision3DList>;
  /**
   * Update the attributes of assets.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/update
   */
  updateAssets?: Maybe<DataAsset>;
  /**
   * Update the attributes of data sets.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/update
   */
  updateDataSets?: Maybe<DataSetList>;
  /**
   * Updates events in the same project. This operation supports partial updates; Fields omitted from queries will remain unchanged on objects.
   *
   * For primitive fields (String, Long, Int), use 'set': 'value' to update value; use 'setNull': true to set that field to null.
   *
   * For the Json Array field (e.g. assetIds), use 'set': [value1, value2] to update value; use 'add': [v1, v2] to add values to current list of values; use 'remove': [v1, v2] to remove these values from current list of values if exists.
   *
   * A maximum of 1000 events can be updated per request, and all of the event IDs must be unique.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/update
   */
  updateEvents?: Maybe<EventResponse>;
  /**
   * Update information for a list of extraction pipelines. Fields that are not included in the request, are not changed.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/update
   */
  updateExtPipes?: Maybe<ExtPipes>;
  /**
   * Updates the information for the files specified in the request body.
   *
   * If you want to update the file content, uploaded using the uploadUrl, please
   * use the initFileUpload request with the query parameter 'overwrite=true'.
   * Alternatively, delete and recreate the file.
   *
   * For primitive fields (String, Long, Int), use 'set': 'value' to update
   * value; use 'setNull': true to set that field to null.
   *
   * For the Json Array field (e.g. assetIds and securityCategories): Use either only 'set', or a combination of 'add' and/or 'remove'.
   *
   * __AssetIds update examples__:
   *
   * Example request body to overwrite assetIds with a new set, asset ID 1 and 2.
   *
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "assetIds" : {
   *           "set" : [ 1, 2 ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * Example request body to add one asset Id, and remove another asset ID.
   *
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "assetIds" : {
   *           "add" : [ 3 ],
   *           "remove": [ 2 ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * __Metadata update examples__:
   *
   * Example request body to overwrite metadata with a new set.
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "metadata": {
   *           "set": {
   *             "key1": "value1",
   *             "key2": "value2"
   *           }
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * Example request body to add two key-value pairs and remove two other key-value pairs by key for
   * the metadata field.
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "metadata": {
   *           "add": {
   *             "key3": "value3",
   *             "key4": "value4"
   *           },
   *           "remove": [
   *             "key1",
   *             "key2"
   *           ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * Equivalent to POST /api/v1/projects/{project}/files/update
   */
  updateFiles?: Maybe<DataFileMetadata>;
  /**
   * Update relationships between resources according to the partial definitions of the relationships given in the payload of the request. This means that fields not mentioned in the payload will remain unchanged. Up to 1000 relationships can be updated in one operation.
   * To delete a value from an optional value the `setNull` field should be set to `true`.
   * The order of the updated relationships in the response equals the order in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/update
   */
  updateRelationships?: Maybe<RelationshipResponseWrapper>;
  /**
   * Update one or more sequences. Fields that are not included in the request, are not changed.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/update
   */
  updateSequences?: Maybe<DataGetSequence>;
  /**
   * Update 3D revision thumbnail
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/thumbnail
   */
  updateThumbnail?: Maybe<Scalars['JSON']>;
};


export type MutationadvancedListEventsArgs = {
  eventFilterRequestInput?: InputMaybe<EventFilterRequestInput>;
  project: Scalars['String'];
};


export type MutationadvancedListFilesArgs = {
  fileFilterRequestInput: FileFilterRequestInput;
  project: Scalars['String'];
};


export type MutationadvancedListSequencesArgs = {
  project: Scalars['String'];
  sequencesAdvancedListDTOInput?: InputMaybe<SequencesAdvancedListDTOInput>;
};


export type MutationaggregateAssetsArgs = {
  assetAggregateRequestInput?: InputMaybe<AssetAggregateRequestInput>;
  project: Scalars['String'];
};


export type MutationaggregateDataSetsArgs = {
  dataSetAggregateRequestInput?: InputMaybe<DataSetAggregateRequestInput>;
  project: Scalars['String'];
};


export type MutationaggregateEventsArgs = {
  eventAggregateRequestInput?: InputMaybe<Scalars['JSON']>;
  project: Scalars['String'];
};


export type MutationaggregateFilesArgs = {
  fileFilterInput: FileFilterInput;
  project: Scalars['String'];
};


export type MutationaggregateSequencesArgs = {
  project: Scalars['String'];
  sequencesAggregateDTOInput?: InputMaybe<SequencesAggregateDTOInput>;
};


export type MutationaggregateTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesAggregateDTOInput?: InputMaybe<TimeSeriesAggregateDTOInput>;
};


export type MutationalterTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesUpdateRequestInput: TimeSeriesUpdateRequestInput;
};


export type MutationbyIdsAssetsArgs = {
  assetDataIdsInput: AssetDataIdsInput;
  project: Scalars['String'];
};


export type MutationbyIdsEventsArgs = {
  eventDataIdsInput: EventDataIdsInput;
  project: Scalars['String'];
};


export type MutationbyIdsFilesArgs = {
  fileDataIdsWithIgnoreUnknownIdsInput: FileDataIdsWithIgnoreUnknownIdsInput;
  project: Scalars['String'];
};


export type MutationbyidsExtPipesArgs = {
  extendedItemsRequestExtPipeIdInput: ExtendedItemsRequestExtPipeIdInput;
  project: Scalars['String'];
};


export type MutationbyidsRelationshipsArgs = {
  byIdsRequestInput: ByIdsRequestInput;
  project: Scalars['String'];
};


export type Mutationcreate3DMappingsArgs = {
  apiV1Project3dModelRevisionMappingsInput: ApiV1Project3dModelRevisionMappingsInput;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Mutationcreate3DModelsArgs = {
  apiV1Project3dModelsInput: ApiV1Project3dModelsInput;
  project: Scalars['String'];
};


export type Mutationcreate3DRevisionsArgs = {
  apiV1Project3dModelRevisionsInput?: InputMaybe<ApiV1Project3dModelRevisionsInput>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type MutationcreateAssetsArgs = {
  dataExternalAssetInput: DataExternalAssetInput;
  project: Scalars['String'];
};


export type MutationcreateDBsArgs = {
  dataRawDBInput: DataRawDBInput;
  project: Scalars['String'];
};


export type MutationcreateDataSetsArgs = {
  dataSetSpecListInput: DataSetSpecListInput;
  project: Scalars['String'];
};


export type MutationcreateEventsArgs = {
  dataExternalEventInput: DataExternalEventInput;
  project: Scalars['String'];
};


export type MutationcreateExtPipesArgs = {
  itemsRequestCreateExtPipeInput: ItemsRequestCreateExtPipeInput;
  project: Scalars['String'];
};


export type MutationcreateRelationshipsArgs = {
  project: Scalars['String'];
  relationshipRequestWrapperInput: RelationshipRequestWrapperInput;
};


export type MutationcreateRunsArgs = {
  itemsRequestExtPipeRunRequestInput: ItemsRequestExtPipeRunRequestInput;
  project: Scalars['String'];
};


export type MutationcreateSecurityCategoriesArgs = {
  dataSecurityCategorySpecDTOInput: DataSecurityCategorySpecDTOInput;
  project: Scalars['String'];
};


export type MutationcreateSequenceArgs = {
  dataPostSequenceInput: DataPostSequenceInput;
  project: Scalars['String'];
};


export type MutationcreateTablesArgs = {
  dataRawDBTableInput: DataRawDBTableInput;
  dbName: Scalars['String'];
  ensureParent?: InputMaybe<Scalars['Boolean']>;
  project: Scalars['String'];
};


export type Mutationdelete3DMappingsArgs = {
  apiV1Project3dModelRevisionMappingsDeleteInput: ApiV1Project3dModelRevisionMappingsDeleteInput;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Mutationdelete3DModelsArgs = {
  dataIdentifiersInput: DataIdentifiersInput;
  project: Scalars['String'];
};


export type Mutationdelete3DRevisionsArgs = {
  dataIdentifiersInput: DataIdentifiersInput;
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type MutationdeleteAssetsArgs = {
  deleteRequestInput: DeleteRequestInput;
  project: Scalars['String'];
};


export type MutationdeleteDBsArgs = {
  deleteRawDBInput: DeleteRawDBInput;
  project: Scalars['String'];
};


export type MutationdeleteDatapointsArgs = {
  datapointsDeleteQueryInput: DatapointsDeleteQueryInput;
  project: Scalars['String'];
};


export type MutationdeleteEventsArgs = {
  eventDataIdsInput: EventDataIdsInput;
  project: Scalars['String'];
};


export type MutationdeleteExtPipesArgs = {
  itemsRequestExtPipeIdInput: ItemsRequestExtPipeIdInput;
  project: Scalars['String'];
};


export type MutationdeleteFilesArgs = {
  fileDataIdsInput: FileDataIdsInput;
  project: Scalars['String'];
};


export type MutationdeleteRelationshipsArgs = {
  apiV1ProjectRelationshipsDeleteInput: ApiV1ProjectRelationshipsDeleteInput;
  project: Scalars['String'];
};


export type MutationdeleteRowsArgs = {
  dataRawDBRowKeyInput: DataRawDBRowKeyInput;
  dbName: Scalars['String'];
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationdeleteSecurityCategoriesArgs = {
  dataLongInput: DataLongInput;
  project: Scalars['String'];
};


export type MutationdeleteSequenceDataArgs = {
  dataSequenceDataDeleteRequestInput: DataSequenceDataDeleteRequestInput;
  project: Scalars['String'];
};


export type MutationdeleteSequencesArgs = {
  dataResourceIdsWithIgnoreUnknownIdsInput: DataResourceIdsWithIgnoreUnknownIdsInput;
  project: Scalars['String'];
};


export type MutationdeleteTablesArgs = {
  dataRawDBTableInput: DataRawDBTableInput;
  dbName: Scalars['String'];
  project: Scalars['String'];
};


export type MutationdeleteTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesLookupByIdInput: TimeSeriesLookupByIdInput;
};


export type MutationdiagramConvertArgs = {
  apiV1ProjectContextDiagramConvertInput?: InputMaybe<ApiV1ProjectContextDiagramConvertInput>;
  project: Scalars['String'];
};


export type MutationdiagramDetectArgs = {
  apiV1ProjectContextDiagramDetectInput?: InputMaybe<ApiV1ProjectContextDiagramDetectInput>;
  project: Scalars['String'];
};


export type MutationdownloadLinksArgs = {
  fileLinkIdsInput: FileLinkIdsInput;
  project: Scalars['String'];
};


export type MutationentityMatchingCreateArgs = {
  apiV1ProjectContextEntitymatching2Input?: InputMaybe<ApiV1ProjectContextEntitymatching2Input>;
  project: Scalars['String'];
};


export type MutationentityMatchingDeleteArgs = {
  apiV1ProjectContextEntitymatchingDeleteInput?: InputMaybe<ApiV1ProjectContextEntitymatchingDeleteInput>;
  project: Scalars['String'];
};


export type MutationentityMatchingFilterArgs = {
  apiV1ProjectContextEntitymatchingListInput?: InputMaybe<ApiV1ProjectContextEntitymatchingListInput>;
  project: Scalars['String'];
};


export type MutationentityMatchingPredictArgs = {
  entityMatchingPredictSchemaInput?: InputMaybe<Scalars['JSON']>;
  project: Scalars['String'];
};


export type MutationentityMatchingReFitArgs = {
  entityMatchingRefitSchemaInput?: InputMaybe<Scalars['JSON']>;
  project: Scalars['String'];
};


export type MutationentityMatchingRetrieveArgs = {
  apiV1ProjectContextEntitymatchingByidsInput?: InputMaybe<ApiV1ProjectContextEntitymatchingByidsInput>;
  project: Scalars['String'];
};


export type MutationentityMatchingUpdateArgs = {
  apiV1ProjectContextEntitymatchingUpdateInput?: InputMaybe<ApiV1ProjectContextEntitymatchingUpdateInput>;
  project: Scalars['String'];
};


export type Mutationfilter3DAssetMappingsArgs = {
  assetMapping3DFilterRequestInput?: InputMaybe<AssetMapping3DFilterRequestInput>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Mutationfilter3DNodesArgs = {
  modelId: Scalars['Float'];
  node3DFilterBodyInput: Node3DFilterBodyInput;
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type MutationfilterExtPipesArgs = {
  extPipesFilterRequestInput: ExtPipesFilterRequestInput;
  project: Scalars['String'];
};


export type MutationfilterRunsArgs = {
  project: Scalars['String'];
  runsFilterRequestInput: RunsFilterRequestInput;
};


export type Mutationget3DNodesByIdArgs = {
  modelId: Scalars['Float'];
  node3DIdsInput: Node3DIdsInput;
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type MutationgetDataSetsArgs = {
  dataSetIdEitherListInput?: InputMaybe<DataSetIdEitherListInput>;
  project: Scalars['String'];
};


export type MutationgetLatestArgs = {
  datapointsLatestQueryInput: DatapointsLatestQueryInput;
  project: Scalars['String'];
};


export type MutationgetLatestSequenceRowArgs = {
  project: Scalars['String'];
  sequenceLatestDataRequestInput: Scalars['JSON'];
};


export type MutationgetMultiTimeSeriesDatapointsArgs = {
  datapointsMultiQueryInput: DatapointsMultiQueryInput;
  project: Scalars['String'];
};


export type MutationgetSequenceByIdArgs = {
  dataResourceIdsWithIgnoreUnknownIdsInput: DataResourceIdsWithIgnoreUnknownIdsInput;
  project: Scalars['String'];
};


export type MutationgetSequenceDataArgs = {
  project: Scalars['String'];
  sequenceDataRequestInput: Scalars['JSON'];
};


export type MutationgetTimeSeriesByIdsArgs = {
  project: Scalars['String'];
  timeSeriesLookupByIdInput: TimeSeriesLookupByIdInput;
};


export type MutationinitFileUploadArgs = {
  externalFilesMetadataInput: ExternalFilesMetadataInput;
  origin?: InputMaybe<Scalars['String']>;
  overwrite?: InputMaybe<Scalars['Boolean']>;
  project: Scalars['String'];
};


export type MutationlistAssetsArgs = {
  assetListScopeInput?: InputMaybe<AssetListScopeInput>;
  project: Scalars['String'];
};


export type MutationlistDataSetsArgs = {
  dataSetFilterRequestInput?: InputMaybe<DataSetFilterRequestInput>;
  project: Scalars['String'];
};


export type MutationlistRelationshipsArgs = {
  project: Scalars['String'];
  relationshipsAdvancedListRequestInput: RelationshipsAdvancedListRequestInput;
};


export type MutationlistTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesListDTOInput?: InputMaybe<TimeSeriesListDTOInput>;
};


export type MutationpostMultiTimeSeriesDatapointsArgs = {
  datapointsInsertQueryInput: DatapointsInsertQueryInput;
  project: Scalars['String'];
};


export type MutationpostRowsArgs = {
  dataRawDBRowInput: DataRawDBRowInput;
  dbName: Scalars['String'];
  ensureParent?: InputMaybe<Scalars['Boolean']>;
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationpostSequenceDataArgs = {
  dataSequencePostDataInput: DataSequencePostDataInput;
  project: Scalars['String'];
};


export type MutationpostTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesCreateRequestInput: TimeSeriesCreateRequestInput;
};


export type MutationquerySyntheticTimeseriesArgs = {
  project: Scalars['String'];
  syntheticMultiQueryInput: SyntheticMultiQueryInput;
};


export type MutationsearchAssetsArgs = {
  assetSearchFilterInput: AssetSearchFilterInput;
  project: Scalars['String'];
};


export type MutationsearchEventsArgs = {
  eventSearchRequestInput?: InputMaybe<EventSearchRequestInput>;
  project: Scalars['String'];
};


export type MutationsearchFilesArgs = {
  filesSearchFilterInput?: InputMaybe<FilesSearchFilterInput>;
  project: Scalars['String'];
};


export type MutationsearchSequencesArgs = {
  project: Scalars['String'];
  sequencesSearchDTOInput?: InputMaybe<SequencesSearchDTOInput>;
};


export type MutationsearchTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesSearchDTOInput?: InputMaybe<TimeSeriesSearchDTOInput>;
};


export type Mutationupdate3DModelsArgs = {
  apiV1Project3dModelsUpdateInput: ApiV1Project3dModelsUpdateInput;
  project: Scalars['String'];
};


export type Mutationupdate3DRevisionsArgs = {
  apiV1Project3dModelRevisionsUpdateInput?: InputMaybe<ApiV1Project3dModelRevisionsUpdateInput>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type MutationupdateAssetsArgs = {
  dataAssetChangeInput: DataAssetChangeInput;
  project: Scalars['String'];
};


export type MutationupdateDataSetsArgs = {
  dataSetUpdateListInput: DataSetUpdateListInput;
  project: Scalars['String'];
};


export type MutationupdateEventsArgs = {
  dataEventChangeInput: DataEventChangeInput;
  project: Scalars['String'];
};


export type MutationupdateExtPipesArgs = {
  itemsRequestExtPipeUpdateInput: ItemsRequestExtPipeUpdateInput;
  project: Scalars['String'];
};


export type MutationupdateFilesArgs = {
  dataFileChangeInput: DataFileChangeInput;
  project: Scalars['String'];
};


export type MutationupdateRelationshipsArgs = {
  project: Scalars['String'];
  updateRelationshipWrapperInput: UpdateRelationshipWrapperInput;
};


export type MutationupdateSequencesArgs = {
  dataSequenceChangeInput: DataSequenceChangeInput;
  project: Scalars['String'];
};


export type MutationupdateThumbnailArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
  updateRevision3DThumbnailInput?: InputMaybe<UpdateRevision3DThumbnailInput>;
};

/** Filter request for events. Filters exact field matching or timestamp ranges inclusive min and max. */
export type EventFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /** Filter on events filter with exact match */
  filter?: InputMaybe<EventFilterInput>;
  /** <- Limits the maximum number of results to be returned by single request. In case there are more results to the request 'nextCursor' attribute will be provided as part of response. Request may contain less results than request limit. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
  /**
   * Sort by array of selected fields. Syntax: `["<fieldname>:asc|desc"]`. Default sort order is `asc` with short syntax: `["<fieldname>"]`.
   * Filter accepts the following field names: startTime, endTime, createdTime, lastUpdatedTime.
   * Partitions are done independently of sorting, there is no guarantee on sort order between elements from different partitions.
   *
   */
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Filter on events filter with exact match */
export type EventFilterInput = {
  /** Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified. */
  activeAtTime?: InputMaybe<ActiveAtTimeFilterInput>;
  /** Asset External IDs of equipment that this event relates to. */
  assetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Asset IDs of equipment that this event relates to. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include events that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Either range between two timestamps or isNull filter condition. */
  endTime?: InputMaybe<Scalars['JSON']>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** This parameter is deprecated. Use assetSubtreeIds instead. Only include events that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The source of this event. */
  source?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  startTime?: InputMaybe<EpochTimestampRangeInput>;
  /** SubType of the event, e.g 'electrical'. */
  subtype?: InputMaybe<Scalars['String']>;
  /** Type of the event, e.g 'failure'. */
  type?: InputMaybe<Scalars['String']>;
};

/** Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified. */
export type ActiveAtTimeFilterInput = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

/** Range between two timestamps (inclusive). */
export type EpochTimestampRangeInput = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

export type FileFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Filter2Input>;
  /** <- Maximum number of items that the client want to get back. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type Filter2Input = {
  /** Only include files that reference these specific asset external IDs. */
  assetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Only include files that reference these specific asset IDs. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include files that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Only include files that belong to these datasets. */
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the directory. */
  directoryPrefix?: InputMaybe<Scalars['String']>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Only include files matching the specified geographic relation. */
  geoLocation?: InputMaybe<GeoLocationFilterInput>;
  /** Return only the resource matching the specified label constraints. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: InputMaybe<Scalars['String']>;
  /** Name of the file. */
  name?: InputMaybe<Scalars['String']>;
  /** Only include files that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The source of this event. */
  source?: InputMaybe<Scalars['String']>;
  sourceCreatedTime?: InputMaybe<SourceCreatedTime4Input>;
  sourceModifiedTime?: InputMaybe<SourceModifiedTime4Input>;
  /** Whether or not the actual file is uploaded. This field is returned only by the API, it has no effect in a post body. */
  uploaded?: InputMaybe<Scalars['Boolean']>;
  /** Range between two timestamps (inclusive). */
  uploadedTime?: InputMaybe<EpochTimestampRangeInput>;
};

/** Only include files matching the specified geographic relation. */
export type GeoLocationFilterInput = {
  /** One of the supported queries. */
  relation: Relation;
  /** Represents the points, curves and surfaces in the coordinate space. */
  shape: Scalars['JSON'];
};

export type Relation =
  | 'INTERSECTS'
  | 'DISJOINT'
  | 'WITHIN';

export type SourceCreatedTime4Input = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

export type SourceModifiedTime4Input = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

export type SequencesAdvancedListDTOInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SequenceFilterInput>;
  /** Return up to this many results per page. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type SequenceFilterInput = {
  /** Return only sequences linked to one of the specified assets. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include sequences that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Only include sequences that belong to these datasets. */
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Filter the sequences by metadata fields and values (case-sensitive). Format is {"key1":"value1","key2":"value2"}. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Return only sequences with this *exact* name. */
  name?: InputMaybe<Scalars['String']>;
  /** Only include sequences that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DataAssetAggregate = {
  items: Array<Maybe<AssetAggregate>>;
};

/** Aggregation group of assets */
export type AssetAggregate = {
  /** Size of the aggregation group */
  count: Scalars['Float'];
};

/** Aggregation request of assets. Filters behave the same way as for the `list` endpoint. Default aggregation is `count`. */
export type AssetAggregateRequestInput = {
  /** Filter on assets with strict matching. */
  filter?: InputMaybe<FilterInput>;
};

/** Filter on assets with strict matching. */
export type FilterInput = {
  /** Only include assets in subtrees rooted at the specified assets (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Return only the resource matching the specified label constraints. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the asset. */
  name?: InputMaybe<Scalars['String']>;
  /** Return only the direct descendants of the specified assets. */
  parentExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Return only the direct descendants of the specified assets. */
  parentIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Whether the filtered assets are root assets, or not. Set to True to only list root assets. */
  root?: InputMaybe<Scalars['Boolean']>;
  /** This parameter is deprecated. Use assetSubtreeIds instead. Only include these root assets and their descendants. */
  rootIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The source of the asset. */
  source?: InputMaybe<Scalars['String']>;
};

export type DataDataSetAggregate = {
  items: Array<Maybe<DataSetAggregate>>;
};

/** Aggregation group of data sets */
export type DataSetAggregate = {
  /** Size of the aggregation group */
  count: Scalars['Float'];
};

/** Aggregation request of data sets. Filters exact field matching or timestamp ranges inclusive min and max. */
export type DataSetAggregateRequestInput = {
  /** Filter on data sets with strict matching. */
  filter?: InputMaybe<DataSetFilterInput>;
};

/** Filter on data sets with strict matching. */
export type DataSetFilterInput = {
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  writeProtected?: InputMaybe<Scalars['Boolean']>;
};

/** No description available. */
export type AggregateResult = CountAggregateResult | ValuesAggregateResult;

/** Count aggregation result. */
export type CountAggregateResult = {
  items: Array<Maybe<Items8ListItem>>;
};

export type Items8ListItem = {
  /** Number of items in this aggregation group. */
  count: Scalars['Float'];
};

/** Values aggregation result. */
export type ValuesAggregateResult = {
  items: Array<Maybe<Items9ListItem>>;
};

/** No description available. */
export type Items9ListItem = StringValue | IntegerValue;

/** A unique string value in the field. */
export type StringValue = {
  value: Scalars['String'];
};

/** A unique integer value in the field. */
export type IntegerValue = {
  value: Scalars['Float'];
};

export type DataFilesAggregate = {
  items: Array<Maybe<FilesAggregate>>;
};

/** Aggregation results for files */
export type FilesAggregate = {
  /** Number of filtered items included in aggregation */
  count: Scalars['Float'];
};

/** Filter on files with exact match */
export type FileFilterInput = {
  filter?: InputMaybe<Filter2Input>;
};

export type SequenceAggregateResponse = {
  items: Array<Maybe<Items63ListItem>>;
};

/** count of elements in the aggregation group */
export type Items63ListItem = {
  count: Scalars['Float'];
};

export type SequencesAggregateDTOInput = {
  filter?: InputMaybe<SequenceFilterInput>;
};

export type TimeSeriesAggregateResponse = {
  items: Array<Maybe<Items37ListItem>>;
};

/** count of elements in the aggregation group */
export type Items37ListItem = {
  count: Scalars['Float'];
};

export type TimeSeriesAggregateDTOInput = {
  filter?: InputMaybe<Filter4Input>;
};

export type Filter4Input = {
  /** Asset External IDs of related equipment that this time series relates to. */
  assetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Only include time series that reference these specific asset IDs. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include time series that are related to an asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Only include time series that reference these specific data set IDs. */
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Filter on isStep. */
  isStep?: InputMaybe<Scalars['Boolean']>;
  /** Filter on isString. */
  isString?: InputMaybe<Scalars['Boolean']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Filter on name. */
  name?: InputMaybe<Scalars['String']>;
  /** Only include time series that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Filter on unit. */
  unit?: InputMaybe<Scalars['String']>;
};

/** List of responses. The order matches the requests order. */
export type DataGetTimeSeriesMetadataDTO = {
  items: Array<Maybe<GetTimeSeriesMetadataDTO>>;
};

export type TimeSeriesUpdateRequestInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataAsset = {
  items: Array<Maybe<Asset>>;
};

export type AssetDataIdsInput = {
  /** Set of aggregated properties to include */
  aggregatedProperties?: InputMaybe<Array<InputMaybe<AggregatedProperty>>>;
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type AggregatedProperty =
  | 'CHILDCOUNT'
  | 'PATH'
  | 'DEPTH';

export type EventResponse = {
  items: Array<Maybe<Event>>;
};

export type EventDataIdsInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataFileMetadata = {
  items?: Maybe<Array<Maybe<FilesMetadata>>>;
};

export type FileDataIdsWithIgnoreUnknownIdsInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ExtendedItemsRequestExtPipeIdInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type EnrichedRelationshipResponseWrapper = {
  items: Array<Maybe<EnrichedRelationshipResponse>>;
};

export type EnrichedRelationshipResponse = {
  /** Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project. */
  confidence?: Maybe<Scalars['Float']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was created. */
  createdTime: Scalars['Int'];
  /** The ID of the dataset the relationship belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime. */
  endTime?: Maybe<Scalars['Int']>;
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was last updated. */
  lastUpdatedTime: Scalars['Int'];
  source?: Maybe<Source3>;
  /** The external ID of the resource that is the relationship source. */
  sourceExternalId: Scalars['String'];
  /** The resource type of the relationship source. Must be one of the specified values. */
  sourceType: Scalars['String'];
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime. */
  startTime?: Maybe<Scalars['Int']>;
  target?: Maybe<Target2>;
  /** The external ID of the resource that is the relationship target. */
  targetExternalId: Scalars['String'];
  /** The resource type of the relationship target. Must be one of the specified values. */
  targetType: Scalars['String'];
};

/** No description available. */
export type Source3 = GetSequenceDTO | GetTimeSeriesMetadataDTO;

/** No description available. */
export type Target2 = GetSequenceDTO | GetTimeSeriesMetadataDTO;

export type ByIdsRequestInput = {
  /**
   * If true,
   * will try to fetch the resources referred to in the relationship,
   * based on the users access rights.
   * Will silently fail to attatch the resources if the user lacks access to some of them.
   *
   */
  fetchResources?: InputMaybe<Scalars['Boolean']>;
  /** Ignore external IDs that are not found. */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<ExternalIdObjectInput>>;
};

export type ExternalIdObjectInput = {
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
};

export type AssetMapping3DList = {
  items: Array<Maybe<AssetMapping3D>>;
};

export type ApiV1Project3dModelRevisionMappingsInput = {
  items: Array<InputMaybe<CreateAssetMapping3DInput>>;
};

export type CreateAssetMapping3DInput = {
  /** The ID of the associated asset (Cognite's Assets API). */
  assetId: Scalars['Float'];
  /** The ID of the node. */
  nodeId: Scalars['Float'];
};

export type Model3DList = {
  items: Array<Maybe<Model3D>>;
};

export type ApiV1Project3dModelsInput = {
  items: Array<InputMaybe<CreateModel3DInput>>;
};

export type CreateModel3DInput = {
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the model. */
  name: Scalars['String'];
};

export type Revision3DList = {
  items: Array<Maybe<Revision3D>>;
};

export type ApiV1Project3dModelRevisionsInput = {
  items: Array<InputMaybe<CreateRevision3DInput>>;
};

export type CreateRevision3DInput = {
  /** Initial camera position and target. */
  camera?: InputMaybe<RevisionCameraPropertiesInput>;
  /** The file id to a file uploaded to Cognite's Files API. Can only be set on revision creation, and can never be updated. */
  fileId: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** True if the revision is marked as published. */
  published?: InputMaybe<Scalars['Boolean']>;
  rotation?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Initial camera position and target. */
export type RevisionCameraPropertiesInput = {
  /** Initial camera position. */
  position?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Initial camera target. */
  target?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DataExternalAssetInput = {
  items: Array<InputMaybe<DataExternalAssetItemInput>>;
};

export type DataExternalAssetItemInput = {
  /** The id of the dataset this asset belongs to. */
  dataSetId?: InputMaybe<Scalars['Int']>;
  /** The description of the asset. */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** A list of the labels associated with this resource item. */
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the asset. */
  name: Scalars['String'];
  /** The external ID of the parent. This will be resolved to an internal ID and stored as `parentId`. */
  parentExternalId?: InputMaybe<Scalars['String']>;
  /**
   * The parent node's ID used to specify parent-child relationship.
   *
   * You should not use this field in combination with the parentExternalId field.
   *
   */
  parentId?: InputMaybe<Scalars['Int']>;
  /** The source of the asset. */
  source?: InputMaybe<Scalars['String']>;
};

/** A label assigned to a resource. */
export type LabelInput = {
  /** An external ID to a predefined label definition. */
  externalId: Scalars['String'];
};

export type DataRawDB = {
  items?: Maybe<Array<Maybe<RawDB>>>;
};

export type DataRawDBInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBInput>>>;
};

/** A NoSQL database to store customer data. */
export type RawDBInput = {
  /** Unique name of a database. */
  name: Scalars['String'];
};

export type DataSetList = {
  items: Array<Maybe<DataSet>>;
};

export type DataSet = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The description of the data set. */
  description?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The name of the data set. */
  name?: Maybe<Scalars['String']>;
  /** To write data to a write-protected data set, you need to be a member of a group that has the "datasets:owner" action for the data set.  To learn more about write-protected data sets, follow this [guide](/cdf/data_governance/concepts/datasets/#write-protection) */
  writeProtected: Scalars['Boolean'];
};

export type DataSetSpecListInput = {
  items: Array<InputMaybe<DataSetSpecInput>>;
};

export type DataSetSpecInput = {
  /** The description of the data set. */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the data set. */
  name?: InputMaybe<Scalars['String']>;
  /** To write data to a write-protected data set, you need to be a member of a group that has the "datasets:owner" action for the data set.  To learn more about write-protected data sets, follow this [guide](/cdf/data_governance/concepts/datasets/#write-protection) */
  writeProtected?: InputMaybe<Scalars['Boolean']>;
};

export type DataExternalEventInput = {
  items: Array<InputMaybe<ExternalEventInput>>;
};

/** An event represents something that happened at a given interval in time, e.g a failure, a work order etc. */
export type ExternalEventInput = {
  /** Asset IDs of equipment that this event relates to. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The id of the dataset this event belongs to. */
  dataSetId?: InputMaybe<Scalars['Int']>;
  /** Textual description of the event. */
  description?: InputMaybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  endTime?: InputMaybe<Scalars['Float']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The source of this event. */
  source?: InputMaybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime?: InputMaybe<Scalars['Float']>;
  /** SubType of the event, e.g 'electrical'. */
  subtype?: InputMaybe<Scalars['String']>;
  /** Type of the event, e.g 'failure'. */
  type?: InputMaybe<Scalars['String']>;
};

export type ItemsRequestCreateExtPipeInput = {
  items: Array<InputMaybe<CreateExtPipeInput>>;
};

export type CreateExtPipeInput = {
  /** Contacts list. */
  contacts?: InputMaybe<Array<InputMaybe<ContactInput>>>;
  /** DataSet ID */
  dataSetId: Scalars['Float'];
  /** Description of Extraction Pipeline */
  description?: InputMaybe<Scalars['String']>;
  /** Documentation text field, supports Markdown for text formatting. */
  documentation?: InputMaybe<Scalars['String']>;
  /** External Id provided by client. Should be unique within the project. */
  externalId: Scalars['String'];
  /** Custom, application specific metadata. String key -> String value. Limits: Key are at most 128 bytes. Values are at most 10240 bytes. Up to 256 key-value pairs. Total size is at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Name of Extraction Pipeline */
  name: Scalars['String'];
  /** Raw tables */
  rawTables?: InputMaybe<Array<InputMaybe<RawTableInput>>>;
  /** Possible values: “On trigger”, “Continuous” or cron expression. If empty then null */
  schedule?: InputMaybe<Scalars['String']>;
  /** Source for Extraction Pipeline */
  source?: InputMaybe<Scalars['String']>;
};

export type ContactInput = {
  /** Contact email */
  email?: InputMaybe<Scalars['String']>;
  /** Contact name */
  name?: InputMaybe<Scalars['String']>;
  /** Contact role */
  role?: InputMaybe<Scalars['String']>;
  /** True, if contact receives email notifications */
  sendNotification?: InputMaybe<Scalars['Boolean']>;
};

export type RawTableInput = {
  /** Database name */
  dbName: Scalars['String'];
  /** Table name */
  tableName: Scalars['String'];
};

export type RelationshipResponseWrapper = {
  items: Array<Maybe<RelationshipResponse>>;
};

export type RelationshipRequestWrapperInput = {
  items: Array<InputMaybe<RelationshipInput>>;
};

/** The representation of a relationship consists of a source and a target and additional parameters. */
export type RelationshipInput = {
  /** Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project. */
  confidence?: InputMaybe<Scalars['Float']>;
  /** The ID of the dataset the relationship belongs to. */
  dataSetId?: InputMaybe<Scalars['Int']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime. */
  endTime?: InputMaybe<Scalars['Int']>;
  /** External ID of the relationship, must be unique within the project. */
  externalId: Scalars['String'];
  /** A list of the labels associated with this resource item. */
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  /** The external ID of the resource that is the relationship source. */
  sourceExternalId: Scalars['String'];
  /** The resource type of the relationship source. Must be one of the specified values. */
  sourceType: Scalars['String'];
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime. */
  startTime?: InputMaybe<Scalars['Int']>;
  /** The external ID of the resource that is the relationship target. */
  targetExternalId: Scalars['String'];
  /** The resource type of the relationship target. Must be one of the specified values. */
  targetType: Scalars['String'];
};

/** Response with a list of elements. */
export type ItemsResponseCreateExtPipeRunResponse = {
  items?: Maybe<Array<Maybe<CreateExtPipeRunResponse>>>;
};

export type CreateExtPipeRunResponse = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: Maybe<Scalars['Float']>;
  /** Extraction Pipeline external Id. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
  /** Error message. */
  message?: Maybe<Scalars['String']>;
  /** Extraction Pipeline status. */
  status: Scalars['String'];
};

export type ItemsRequestExtPipeRunRequestInput = {
  items: Array<InputMaybe<ExtPipeRunRequestInput>>;
};

/** Status of the extraction pipeline. */
export type ExtPipeRunRequestInput = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: InputMaybe<Scalars['Float']>;
  /** Extraction pipeline external Id provided by client. Should be unique within the project. */
  externalId: Scalars['String'];
  /** Error message. */
  message?: InputMaybe<Scalars['String']>;
  /** A status attribute represents the final status of a particular job run by an extraction pipeline. Utilize `success` and `failure` to indicate if the run has succeeded or failed for any reason. In addition, a heartbeat can be implemented by an extraction pipeline by periodically sending `seen` status represented by last seen and last connected time. */
  status: ExtPipeRunStatus;
};

export type ExtPipeRunStatus =
  | 'SUCCESS'
  | 'FAILURE'
  | 'SEEN';

export type SecurityCategoryResponse = {
  items?: Maybe<Array<Maybe<SecurityCategoryDTO>>>;
};

export type DataSecurityCategorySpecDTOInput = {
  items: Array<InputMaybe<SecurityCategorySpecDTOInput>>;
};

export type SecurityCategorySpecDTOInput = {
  /** Name of the security category */
  name: Scalars['String'];
};

export type DataGetSequence = {
  items: Array<Maybe<GetSequenceDTO>>;
};

export type DataPostSequenceInput = {
  items: Array<InputMaybe<PostSequenceDTOInput>>;
};

/** Describes a new sequence */
export type PostSequenceDTOInput = {
  /** Optional asset this sequence is associated with */
  assetId?: InputMaybe<Scalars['Float']>;
  /** List of column definitions. Maximum number of numeric columns is 400. Maximum number of string columns is 200. Maximum total number of columns is 400. */
  columns: Array<InputMaybe<PostSequenceColumnDTOInput>>;
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** Description of the sequence */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, up to a total size of 10000 bytes across all keys and values. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Name of the sequence */
  name?: InputMaybe<Scalars['String']>;
};

/** Describes a new column */
export type PostSequenceColumnDTOInput = {
  /** Description of the column */
  description?: InputMaybe<Scalars['String']>;
  /** User provided column identifier (Unique for a given sequence) */
  externalId: Scalars['String'];
  /** Custom, application specific metadata. String key -> String value */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Human readable name of the sequence */
  name?: InputMaybe<Scalars['String']>;
  /** What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100] */
  valueType?: InputMaybe<SequenceValueTypeEnum>;
};

export type DataRawDBTable = {
  items?: Maybe<Array<Maybe<RawDBTable>>>;
};

export type DataRawDBTableInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBTableInput>>>;
};

/** A NoSQL database table to store customer data */
export type RawDBTableInput = {
  /** Unique name of the table */
  name: Scalars['String'];
};

export type ApiV1Project3dModelRevisionMappingsDeleteInput = {
  items: Array<InputMaybe<DeleteAssetMapping3DInput>>;
};

export type DeleteAssetMapping3DInput = {
  /** The ID of the associated asset (Cognite's Assets API). */
  assetId: Scalars['Float'];
  /** The ID of the node. */
  nodeId: Scalars['Float'];
};

export type DataIdentifiersInput = {
  /** List of ID objects */
  items: Array<InputMaybe<DataIdentifierInput>>;
};

export type DataIdentifierInput = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
};

export type DeleteRequestInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
  /** Recursively delete all asset subtrees under the specified IDs. */
  recursive?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteRawDBInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBInput>>>;
  /** When true, tables of this database are deleted with the database. */
  recursive?: InputMaybe<Scalars['Boolean']>;
};

export type DatapointsDeleteQueryInput = {
  /** List of delete filters */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ItemsRequestExtPipeIdInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type FileDataIdsInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type ApiV1ProjectRelationshipsDeleteInput = {
  /** Ignore external IDs that are not found. */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<ExternalIdObjectInput>>;
};

export type DataRawDBRowKeyInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBRowKeyInput>>>;
};

/** A row key */
export type RawDBRowKeyInput = {
  /** Unique row key */
  key: Scalars['String'];
};

export type DataLongInput = {
  items: Array<InputMaybe<Scalars['Float']>>;
};

export type DataSequenceDataDeleteRequestInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataResourceIdsWithIgnoreUnknownIdsInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type TimeSeriesLookupByIdInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  /** List of ID objects */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextDiagramConvert2 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** Return the SVG version in grayscale colors only (reduces the file size). */
  grayscale?: Maybe<Scalars['Boolean']>;
  items: Array<Maybe<Scalars['JSON']>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextDiagramConvertInput = {
  /** Return the SVG version in grayscale colors only (reduces the file size). */
  grayscale?: InputMaybe<Scalars['Boolean']>;
  /** An array of files and annotations to create interactive diagrams. */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextDiagramDetect2 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  items: Array<Maybe<Scalars['JSON']>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits. */
  minTokens?: Maybe<Scalars['Int']>;
  /** Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously. */
  partialMatch?: Maybe<Scalars['Boolean']>;
  /** This field determines the string to search for and to identify object entities. */
  searchField?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextDiagramDetectInput = {
  /** A list of entities to look for. For example, all the assets under a root node. The `searchField` determines the strings that identify the entities. */
  entities: Array<InputMaybe<Scalars['JSON']>>;
  /** Files to run entity detection on. */
  items: Array<InputMaybe<Scalars['JSON']>>;
  /** Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits. */
  minTokens?: InputMaybe<Scalars['Int']>;
  /** Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously. */
  partialMatch?: InputMaybe<Scalars['Boolean']>;
  /** This field determines the string to search for and to identify object entities. */
  searchField?: InputMaybe<Scalars['String']>;
};

export type ApiV1ProjectFilesDownloadlink = {
  items?: Maybe<Array<Maybe<Items16ListItem>>>;
};

/** No description available. */
export type Items16ListItem = FileInternalId | FileExternalId;

export type FileInternalId = {
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
};

export type FileExternalId = {
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
};

export type FileLinkIdsInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type ApiV1ProjectContextEntitymatching2Input = {
  /** The classifier used in the model. Only relevant if there are trueMatches/labeled data and a supervised model is fitted. */
  classifier?: InputMaybe<Classifier2>;
  /** User defined description. */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /**
   * Each feature type defines one combination of features that will be created and used in the entity matcher model. All features are based on matching tokens. Tokens are defined at the top of the Entity matching section.
   * The options are:
   *   * Simple: Calculates the cosine-distance similarity score for each of the pairs of fields defined in `matchFields`. This is the fastest option.
   *   * Insensitive: Similar to Simple, but ignores lowercase/uppercase differences.
   *   * Bigram: Similar to `simple`, but adds similarity score based on matching bigrams of the tokens.
   *   * FrequencyWeightedBigram: Similar to `bigram`, but give higher weights to less commonly occurring tokens.
   *   * BigramExtraTokenizers: Similar to `bigram`, but able to learn that leading zeros, spaces, and uppercase/lowercase differences should be ignored in matching.
   *   * BigramCombo: Calculates all of the above options, relying on the model to determine the appropriate features to use.
   *   Hence, this option is only appropriate if there are  labeled data/trueMatches. This is the slowest option.
   *
   */
  featureType?: InputMaybe<Scalars['String']>;
  /** If True, replaces missing fields in `sources` or `targets` entities, for fields set in set in `matchFields`, with empty strings. Else, returns an error if there are missing data. */
  ignoreMissingFields?: InputMaybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: InputMaybe<Array<InputMaybe<MatchFieldsListItemInput>>>;
  /** User defined name. */
  name?: InputMaybe<Scalars['String']>;
  /** List of custom source object to match from, for example, time series. String key -> value. Only string values are considered in the matching. Both `id` and `externalId` fields are optional, only mandatory if the item is to be referenced in `trueMatches`. */
  sources: Array<InputMaybe<Scalars['JSON']>>;
  /** List of custom target object to match to, for example, assets. String key -> value. Only string values are considered in the matching. Both `id` and `externalId` fields are optional, only mandatory if the item is to be referenced in `trueMatches`. */
  targets: Array<InputMaybe<Scalars['JSON']>>;
  /** List of objects of pairs of sourceId or sourceExternalId and targetId or targetExternalId, that corresponds to entities in source and target respectively, that indicates a confirmed match used to train the model. If omitted, an unsupervised model is used. */
  trueMatches?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['JSON']>>>>>;
};

export type Classifier2 =
  | 'RANDOMFOREST'
  | 'DECISIONTREE'
  | 'LOGISTICREGRESSION'
  | 'AUGMENTEDLOGISTICREGRESSION'
  | 'AUGMENTEDRANDOMFOREST';

export type MatchFieldsListItemInput = {
  source: Scalars['String'];
  target: Scalars['String'];
};

export type ApiV1ProjectContextEntitymatchingDeleteInput = {
  /** List of ids or externalIds of models. */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextEntitymatchingList2 = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type ApiV1ProjectContextEntitymatchingListInput = {
  filter: Filter5Input;
  /** <- Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type Filter5Input = {
  /** The classifier used in the model. Only relevant if there are trueMatches/labeled data and a supervised model is fitted. */
  classifier?: InputMaybe<Classifier2>;
  /** User defined description. */
  description?: InputMaybe<Scalars['String']>;
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType?: InputMaybe<FeatureType>;
  /** User defined name. */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId?: InputMaybe<Scalars['Int']>;
};

export type ApiV1ProjectContextEntitymatchingPredict = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatchingRefit = {
  /** Name of the classifier used in the model, "Unsupervised" if unsupervised model. */
  classifier: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** User defined description. */
  description: Scalars['String'];
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId: Scalars['String'];
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType: FeatureType;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings. */
  ignoreMissingFields?: Maybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: Maybe<Array<Maybe<MatchFieldsListItem>>>;
  /** User defined name. */
  name: Scalars['String'];
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId: Scalars['Int'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatchingByids2 = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type ApiV1ProjectContextEntitymatchingByidsInput = {
  /** List of ids or externalIds of models. */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextEntitymatchingUpdate2 = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type ApiV1ProjectContextEntitymatchingUpdateInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type AssetMapping3DFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JSON']>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

/** Filter request for nodes. Filters nodes with properties matching ones in a list of alternatives. */
export type Node3DFilterBodyInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /** Filters used in the search. */
  filter?: InputMaybe<Node3DPropertyFilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

/** Filters used in the search. */
export type Node3DPropertyFilterInput = {
  /** Contains one or more categories (namespaces), each of which contains one or more properties. Each property is associated with a list of values. The list of values acts as an OR-clause, so that if a node's corresponding property value equals ANY of the strings in the list, it satisfies the condition for that property. The different properties are concatenated with AND-operations, so that a node must satisfy the condition for ALL properties from all categories to be part of the returned set. The allowed number of property values is limited to 1000 values in total. */
  properties?: InputMaybe<Scalars['JSON']>;
};

export type ExtPipesFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JSON']>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type RunsFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter: RunsFilterInput;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type RunsFilterInput = {
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Extraction pipeline external Id provided by client. */
  externalId: Scalars['String'];
  message?: InputMaybe<StringFilterInput>;
  /** Extraction pipeline statuses list. Expected values: success, failure, seen. */
  statuses?: InputMaybe<Array<InputMaybe<ExtPipeRunStatus>>>;
};

export type StringFilterInput = {
  /** Substring to find strings, that contains it ignoring case. */
  substring?: InputMaybe<Scalars['String']>;
};

export type Node3DList = {
  items: Array<Maybe<Node3D>>;
};

export type Node3DIdsInput = {
  items: Array<InputMaybe<Node3DIdInput>>;
};

export type Node3DIdInput = {
  /** The ID of the node. */
  id: Scalars['Float'];
};

export type DataSetIdEitherListInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

/** The list of responses. The order matches the requests order. */
export type DatapointsResponse = {
  items: Array<Maybe<Scalars['JSON']>>;
};

export type DatapointsLatestQueryInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  /** List of latest queries */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

/** Data from a sequence */
export type SequenceGetData = {
  /** Column information in order given by data */
  columns: Array<Maybe<BasicGetSequenceColumnInfo>>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** List of row information */
  rows: Array<Maybe<SequenceRowDTO>>;
};

/** Column information returned on data requests */
export type BasicGetSequenceColumnInfo = {
  /** User provided column identifier (Unique for a given sequence) */
  externalId?: Maybe<Scalars['String']>;
  /** Human readable name of the column */
  name?: Maybe<Scalars['String']>;
  /** What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100] */
  valueType?: Maybe<SequenceValueTypeEnum>;
};

/** A single row of datapoints */
export type SequenceRowDTO = {
  /** The row number for this row */
  rowNumber: Scalars['Float'];
  /** List of values in order defined in the columns field (Number of items must match. Null is accepted for missing values. String values must be no longer than 256 characters) */
  values: Array<Maybe<Scalars['JSON']>>;
};

/** The list of responses. The order matches the requests order. */
export type DatapointsOrAggregatesResponse = {
  items: Array<Maybe<Scalars['JSON']>>;
};

export type DatapointsMultiQueryInput = {
  /** Specify the aggregates to return, or an empty array if this sub-query should return datapoints without aggregation. This value overrides a top-level default aggregates list. */
  aggregates?: InputMaybe<Array<InputMaybe<Aggregate>>>;
  /** Get datapoints up to, but excluding, this point in time. Same format as for start. Note that when using aggregates, the end will be rounded up such that the last aggregate represents a full aggregation interval containing the original end, where the interval is the granularity unit times the granularity multiplier. For granularity 2d, the aggregation interval is 2 days, if end was originally 3 days after the start, it will be rounded to 4 days after the start. */
  end?: InputMaybe<Scalars['JSON']>;
  /** The time granularity size and unit to aggregate over. Valid entries are 'day, hour, minute, second', or short forms 'd, h, m, s', or a multiple of these indicated by a number as a prefix. For 'second' and 'minute' the multiple must be an integer betwen 1 and 120 inclusive, for 'hour' and 'day' the multiple must be an integer between 1 and 100000 inclusive. For example, a granularity '5m' means that aggregates are calculated over 5 minutes. This field is required if aggregates are specified. */
  granularity?: InputMaybe<Scalars['String']>;
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include the last datapoint before the requested time period, and the first one after. This option is useful for interpolating data. It is not available for aggregates. */
  includeOutsidePoints?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
  /** Return up to this number of datapoints. The maximum is 100000 non-aggregated data points and 10000 aggregated data points in total across all queries in a single request. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Get datapoints starting from, and including, this time. The format is N[timeunit]-ago where
   * timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
   * old. You can also specify time in milliseconds since epoch. Note that for aggregates, the start time is rounded down to a whole granularity unit (in UTC timezone). Daily granularities (d)
   * are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
   */
  start?: InputMaybe<Scalars['JSON']>;
};

export type Aggregate =
  | 'AVERAGE'
  | 'MAX'
  | 'MIN'
  | 'COUNT'
  | 'SUM'
  | 'INTERPOLATION'
  | 'STEPINTERPOLATION'
  | 'TOTALVARIATION'
  | 'CONTINUOUSVARIANCE'
  | 'DISCRETEVARIANCE';

export type SequenceGetDataWithCursor = {
  /** Column information in order given by data */
  columns: Array<Maybe<BasicGetSequenceColumnInfo>>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
  /** List of row information */
  rows: Array<Maybe<SequenceRowDTO>>;
};

export type ApiV1ProjectFiles = {
  assetIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Directory containing the file. Must be an absolute, unix-style path. */
  directory?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** The geographic metadata of the file. */
  geoLocation?: Maybe<GeoLocation>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: Maybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The security category IDs required to access this file. */
  securityCategories?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The source of the file. */
  source?: Maybe<Scalars['String']>;
  sourceCreatedTime?: Maybe<Scalars['Int']>;
  sourceModifiedTime?: Maybe<Scalars['Int']>;
  /** The URL where the file contents should be uploaded. */
  uploadUrl: Scalars['String'];
  /** Whether or not the actual file is uploaded.  This field is returned only by the API, it has no effect in a post body. */
  uploaded: Scalars['Boolean'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  uploadedTime?: Maybe<Scalars['Float']>;
};

export type ExternalFilesMetadataInput = {
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** Directory containing the file. Must be an absolute, unix-style path. */
  directory?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** The geographic metadata of the file. */
  geoLocation?: InputMaybe<GeoLocationInput>;
  /** A list of the labels associated with this resource item. */
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: InputMaybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The security category IDs required to access this file. */
  securityCategories?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The source of the file. */
  source?: InputMaybe<Scalars['String']>;
  sourceCreatedTime?: InputMaybe<Scalars['Int']>;
  sourceModifiedTime?: InputMaybe<Scalars['Int']>;
};

/** The geographic metadata of the file. */
export type GeoLocationInput = {
  /** Represents the points, curves and surfaces in the coordinate space. */
  geometry: Scalars['JSON'];
  /** Additional properties in a String key -> Object value format. */
  properties?: InputMaybe<Scalars['JSON']>;
  /** One of the GeoJSON types. Currently only the 'Feature' type is supported. */
  type: Type;
};

export type AssetListScopeInput = {
  /** Set of aggregated properties to include */
  aggregatedProperties?: InputMaybe<Array<InputMaybe<AggregatedProperty>>>;
  cursor?: InputMaybe<Scalars['String']>;
  /** Filter on assets with strict matching. */
  filter?: InputMaybe<FilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type DataSetListWithCursor = {
  items: Array<Maybe<DataSet>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type DataSetFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /** Filter on data sets with strict matching. */
  filter?: InputMaybe<DataSetFilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type PagedEnrichedRelationshipResponseWrapper = {
  items: Array<Maybe<EnrichedRelationshipResponse>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RelationshipsAdvancedListRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /**
   * If true,
   * will try to fetch the resources referred to in the relationship,
   * based on the users access rights.
   * Will silently fail to attatch the resources if the user lacks access to some of them.
   *
   */
  fetchResources?: InputMaybe<Scalars['Boolean']>;
  /** Filter on relationships with exact match. Multiple filter elements in one property, for example `sourceExternalIds: [ "a", "b" ], returns all relationships where the sourceExternalId field is either `a` or `b`. Filters in multiple properties return relationships that match all criteria. If the filter is not specified, it defaults to an empty filter. */
  filter?: InputMaybe<AdvancedListFilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

/** Filter on relationships with exact match. Multiple filter elements in one property, for example `sourceExternalIds: [ "a", "b" ], returns all relationships where the sourceExternalId field is either `a` or `b`. Filters in multiple properties return relationships that match all criteria. If the filter is not specified, it defaults to an empty filter. */
export type AdvancedListFilterInput = {
  /** Limits results to those active within the specified time range, that is, if there is any overlap in the intervals [`activeAtTime.min`, `activeAtTime.max`] and [`startTime`, `endTime`], where both intervals are inclusive. If a relationship does not have a `startTime`, it is regarded as active from the beginning of time by this filter. If it does not have an `endTime` is is regarded as active until the end of time. Similarly, if a `min` is not supplied to the filter, the `min` is implicitly set to the beginning of time. If a `max` is not supplied, the `max` is implicitly set to the end of time. */
  activeAtTime?: InputMaybe<ActiveAtTimeInput>;
  /** Range to filter the field for (inclusive). */
  confidence?: InputMaybe<FloatRangeInput>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  endTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Return only the resource matching the specified label constraints. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Include relationships that have any of these values in their `sourceExternalId` field */
  sourceExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Include relationships that have any of these values in their `sourceType` field */
  sourceTypes?: InputMaybe<Array<InputMaybe<ResourceType>>>;
  /** Include relationships that match any of the resources in either their source- or target-related fields. */
  sourcesOrTargets?: InputMaybe<Array<InputMaybe<ResourceReferenceWithExternalIdInput>>>;
  /** Range between two timestamps (inclusive). */
  startTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Include relationships that have any of these values in their `targetExternalId` field */
  targetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Include relationships that have any of these values in their `targetType` field */
  targetTypes?: InputMaybe<Array<InputMaybe<ResourceType>>>;
};

/** Limits results to those active within the specified time range, that is, if there is any overlap in the intervals [`activeAtTime.min`, `activeAtTime.max`] and [`startTime`, `endTime`], where both intervals are inclusive. If a relationship does not have a `startTime`, it is regarded as active from the beginning of time by this filter. If it does not have an `endTime` is is regarded as active until the end of time. Similarly, if a `min` is not supplied to the filter, the `min` is implicitly set to the beginning of time. If a `max` is not supplied, the `max` is implicitly set to the end of time. */
export type ActiveAtTimeInput = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

/** Range to filter the field for (inclusive). */
export type FloatRangeInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type ResourceType =
  | 'ASSET'
  | 'TIMESERIES'
  | 'FILE'
  | 'EVENT'
  | 'SEQUENCE';

export type ResourceReferenceWithExternalIdInput = {
  externalId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ResourceType>;
};

/** Filter request for time series. Filters exact field matching or timestamp ranges inclusive min and max. */
export type TimeSeriesListDTOInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Filter4Input>;
  /** Return up to this many results. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type DatapointsInsertQueryInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataRawDBRowInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBRowInsertInput>>>;
};

export type RawDBRowInsertInput = {
  /** Row data stored as a JSON object. */
  columns: Scalars['JSON'];
  /** Unique row key */
  key: Scalars['String'];
};

export type DataSequencePostDataInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type TimeSeriesCreateRequestInput = {
  items: Array<InputMaybe<PostTimeSeriesMetadataDTOInput>>;
};

export type PostTimeSeriesMetadataDTOInput = {
  /** Asset ID of equipment linked to this time series. */
  assetId?: InputMaybe<Scalars['Int']>;
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** A description of the time series. */
  description?: InputMaybe<Scalars['String']>;
  /** Externally provided ID for the time series (optional, but recommended.) */
  externalId?: InputMaybe<Scalars['String']>;
  /** Whether the time series is a step series or not. */
  isStep?: InputMaybe<Scalars['Boolean']>;
  /** Whether the time series is string valued or not. (not updatable - its value cannot be changed after its initial assignment.) */
  isString?: InputMaybe<Scalars['Boolean']>;
  /** This field is deprecated. Set a value for legacyName to allow applications using API v0.3, v04, v05, and v0.6 to access this time series. The legacy name is the human-readable name for the time series and is mapped to the name field used in API versions 0.3-0.6. The legacyName field value must be unique, and setting this value to an already existing value will return an error. We recommend that you set this field to the same value as externalId. */
  legacyName?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Human readable name of the time series. This field is seperate from name field available through API versions 0.3-0.6. */
  name?: InputMaybe<Scalars['String']>;
  /** The required security categories to access this time series. */
  securityCategories?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The physical unit of the time series. */
  unit?: InputMaybe<Scalars['String']>;
};

export type SyntheticQueryResponses = {
  items: Array<Maybe<SyntheticQueryResponse>>;
};

export type SyntheticQueryResponse = {
  /** list of data points */
  datapoints: Array<Maybe<SyntheticDataPoint>>;
  /** whether the returned data points are of string type or floating point type. Currently it will always be false. */
  isString?: Maybe<Scalars['Boolean']>;
};

/** No description available. */
export type SyntheticDataPoint = SyntheticDataValue | SyntheticDataError;

export type SyntheticDataValue = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  timestamp: Scalars['Float'];
  /** the data value */
  value: Scalars['Float'];
};

export type SyntheticDataError = {
  /** Human readable string with description of what went wrong */
  error: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  timestamp: Scalars['Float'];
};

export type SyntheticMultiQueryInput = {
  items: Array<InputMaybe<SyntheticQueryInput>>;
};

/** Synthetic query description */
export type SyntheticQueryInput = {
  /** Get datapoints up to, but excluding, this point in time. Same format as for start. Note that when using aggregates, the end will be rounded up such that the last aggregate represents a full aggregation interval containing the original end, where the interval is the granularity unit times the granularity multiplier. For granularity 2d, the aggregation interval is 2 days, if end was originally 3 days after the start, it will be rounded to 4 days after the start. */
  end?: InputMaybe<Scalars['JSON']>;
  /** query definition. For limits, see the [guide to synthetic time series](/dev/concepts/resource_types/synthetic_timeseries.html#limits). */
  expression: Scalars['String'];
  /** Return up to this number of datapoints */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Get datapoints starting from, and including, this time. The format is N[timeunit]-ago where
   * timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
   * old. You can also specify time in milliseconds since epoch. Note that for aggregates, the start time is rounded down to a whole granularity unit (in UTC timezone). Daily granularities (d)
   * are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
   */
  start?: InputMaybe<Scalars['JSON']>;
};

/** Search request with filter capabilities. */
export type AssetSearchFilterInput = {
  /** Filter on assets with strict matching. */
  filter?: InputMaybe<FilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Fulltext search for assets. Primarily meant for for human-centric use-cases, not for programs. The query parameter uses a different search algorithm than the deprecated name and description parameters, and will generally give much better results. */
  search?: InputMaybe<SearchInput>;
};

/** Fulltext search for assets. Primarily meant for for human-centric use-cases, not for programs. The query parameter uses a different search algorithm than the deprecated name and description parameters, and will generally give much better results. */
export type SearchInput = {
  /** The description of the asset. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the asset. */
  name?: InputMaybe<Scalars['String']>;
  /** Whitespace-separated terms to search for in assets. Does a best-effort fuzzy search in relevant fields (currently name and description) for variations of any of the search terms, and orders results by relevance. Uses a different search algorithm than the name and description parameters, and will generally give much better results. Matching and ordering is not guaranteed to be stable over time, and the fields being searched may be extended. */
  query?: InputMaybe<Scalars['String']>;
};

/** Filter on events filter with exact match */
export type EventSearchRequestInput = {
  /** Filter on events filter with exact match */
  filter?: InputMaybe<EventFilterInput>;
  /** <- Limits the maximum number of results to be returned by single request. Request may contain less results than request limit. */
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<EventSearchInput>;
};

export type EventSearchInput = {
  /** text to search in description field across events */
  description?: InputMaybe<Scalars['String']>;
};

/** Filter on files with exact match */
export type FilesSearchFilterInput = {
  filter?: InputMaybe<Filter2Input>;
  search?: InputMaybe<Search2Input>;
};

export type Search2Input = {
  /** Name of the file. */
  name?: InputMaybe<Scalars['String']>;
};

export type SequencesSearchDTOInput = {
  filter?: InputMaybe<SequenceFilterInput>;
  /** Return up to this many results. */
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<SequenceSearchInput>;
};

export type SequenceSearchInput = {
  /** Prefix and fuzzy search on description. */
  description?: InputMaybe<Scalars['String']>;
  /** Prefix and fuzzy search on name. */
  name?: InputMaybe<Scalars['String']>;
  /** Search on name and description using wildcard search on each of the words (separated by spaces). Retrieves results where at least one word must match. Example: '*some* *other*' */
  query?: InputMaybe<Scalars['String']>;
};

export type TimeSeriesSearchDTOInput = {
  filter?: InputMaybe<Filter4Input>;
  /** Return up to this many results. */
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Search3Input>;
};

export type Search3Input = {
  /** Prefix and fuzzy search on description. */
  description?: InputMaybe<Scalars['String']>;
  /** Prefix and fuzzy search on name. */
  name?: InputMaybe<Scalars['String']>;
  /**
   * Whitespace-separated terms to search for in time series. Does a
   * best-effort fuzzy search in relevant fields (currently name and
   * description) for variations of any of the search terms, and
   * orders results by relevance. Uses a different search algorithm
   * than the name and description parameters, and will generally give
   * much better results. Matching and ordering is not guaranteed to
   * be stable over time, and the fields being searched may be
   * extended.
   */
  query?: InputMaybe<Scalars['String']>;
};

export type ApiV1Project3dModelsUpdateInput = {
  items: Array<InputMaybe<UpdateModel3DInput>>;
};

export type UpdateModel3DInput = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  update?: InputMaybe<UpdateInput>;
};

export type UpdateInput = {
  dataSetId?: InputMaybe<Scalars['JSON']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<SetModelNameFieldInput>;
};

export type SetModelNameFieldInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type ApiV1Project3dModelRevisionsUpdateInput = {
  items: Array<InputMaybe<UpdateRevision3DInput>>;
};

export type UpdateRevision3DInput = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  update?: InputMaybe<Update2Input>;
};

export type Update2Input = {
  camera?: InputMaybe<SetRevisionCameraPropertiesInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  published?: InputMaybe<Published3Input>;
  rotation?: InputMaybe<SetRevisionRotationInput>;
};

export type SetRevisionCameraPropertiesInput = {
  /** Initial camera position and target. */
  set?: InputMaybe<RevisionCameraPropertiesInput>;
};

export type Published3Input = {
  /** True if the revision is marked as published. */
  set?: InputMaybe<Scalars['Boolean']>;
};

export type SetRevisionRotationInput = {
  set?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DataAssetChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataSetUpdateListInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataEventChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ItemsRequestExtPipeUpdateInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataFileChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type UpdateRelationshipWrapperInput = {
  items: Array<InputMaybe<RelationshipUpdateInput>>;
};

export type RelationshipUpdateInput = {
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
  update: RelationshipUpdateContentInput;
};

export type RelationshipUpdateContentInput = {
  /** Set a new value for the confidence, or remove the value. */
  confidence?: InputMaybe<Scalars['JSON']>;
  /** Set a new value for the dataSet Ids, or remove the value. */
  dataSetId?: InputMaybe<Scalars['JSON']>;
  endTime?: InputMaybe<Scalars['JSON']>;
  /**
   * Updates the resource's assigned labels.
   *
   * Labels can be added, removed or replaced (set). Adding an already attached label is an idempotent operation. Removing a label with no matching externalId is silently ignored.
   */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Set a new value for the relationship source external ID. */
  sourceExternalId?: InputMaybe<UpdateSourceExternalIdInput>;
  /** Set a new value for the relationship source type. */
  sourceType?: InputMaybe<UpdateSourceTypeInput>;
  /** Set a new value for the start time, or remove the value. */
  startTime?: InputMaybe<Scalars['JSON']>;
  /** Set a new value for the relationship target external ID. */
  targetExternalId?: InputMaybe<UpdateTargetExternalIdInput>;
  /** Set a new value for the relationship target type. */
  targetType?: InputMaybe<UpdateTargetTypeInput>;
};

/** Set a new value for the relationship source external ID. */
export type UpdateSourceExternalIdInput = {
  /** The external ID of the resource that is the relationship source. */
  set: Scalars['String'];
};

/** Set a new value for the relationship source type. */
export type UpdateSourceTypeInput = {
  /** The resource type of the relationship source. Must be one of the specified values. */
  set: Scalars['String'];
};

/** Set a new value for the relationship target external ID. */
export type UpdateTargetExternalIdInput = {
  /** The external ID of the resource that is the relationship target. */
  set: Scalars['String'];
};

/** Set a new value for the relationship target type. */
export type UpdateTargetTypeInput = {
  /** The resource type of the relationship target. Must be one of the specified values. */
  set: Scalars['String'];
};

export type DataSequenceChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

/** Request body for the updateModelRevisionThumbnail endpoint. */
export type UpdateRevision3DThumbnailInput = {
  /** File ID of thumbnail file in Files API. _Only JPEG and PNG files are supported_. */
  fileId: Scalars['Float'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ApiV1ProjectContextDiagramConvert3: ResolverTypeWrapper<ApiV1ProjectContextDiagramConvert3>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JobStatus: JobStatus;
  ApiV1ProjectContextDiagramDetect3: ResolverTypeWrapper<ApiV1ProjectContextDiagramDetect3>;
  ApiV1ProjectContextEntitymatching: ResolverTypeWrapper<ApiV1ProjectContextEntitymatching>;
  EntityMatcherResponseSchema: ResolverTypeWrapper<EntityMatcherResponseSchema>;
  FeatureType: FeatureType;
  MatchFieldsListItem: ResolverTypeWrapper<MatchFieldsListItem>;
  ApiV1ProjectContextEntitymatching3: ResolverTypeWrapper<ApiV1ProjectContextEntitymatching3>;
  ApiV1ProjectContextEntitymatchingJob: ResolverTypeWrapper<ApiV1ProjectContextEntitymatchingJob>;
  Items75ListItem: ResolverTypeWrapper<Items75ListItem>;
  MatchesListItem: ResolverTypeWrapper<MatchesListItem>;
  Asset: ResolverTypeWrapper<Asset>;
  AggregateResultItem: ResolverTypeWrapper<AggregateResultItem>;
  AssetIdentifier: ResolverTypeWrapper<AssetIdentifier>;
  Label: ResolverTypeWrapper<Label>;
  AssetMapping3DWithCursorResponse: ResolverTypeWrapper<AssetMapping3DWithCursorResponse>;
  AssetMapping3D: ResolverTypeWrapper<AssetMapping3D>;
  DataRawDBTableCursors: ResolverTypeWrapper<DataRawDBTableCursors>;
  DataWithCursor: ResolverTypeWrapper<DataWithCursor>;
  FilesMetadata: ResolverTypeWrapper<FilesMetadata>;
  GeoLocation: ResolverTypeWrapper<GeoLocation>;
  Type: Type;
  DataWithCursorAsset: ResolverTypeWrapper<DataWithCursorAsset>;
  DataWithCursorGetTimeSeriesMetadataDTO: ResolverTypeWrapper<DataWithCursorGetTimeSeriesMetadataDTO>;
  GetTimeSeriesMetadataDTO: ResolverTypeWrapper<GetTimeSeriesMetadataDTO>;
  DataWithCursorRawDB: ResolverTypeWrapper<DataWithCursorRawDB>;
  RawDB: ResolverTypeWrapper<RawDB>;
  DataWithCursorRawDBRow: ResolverTypeWrapper<DataWithCursorRawDBRow>;
  RawDBRow: ResolverTypeWrapper<RawDBRow>;
  DataWithCursorRawDBTable: ResolverTypeWrapper<DataWithCursorRawDBTable>;
  RawDBTable: ResolverTypeWrapper<RawDBTable>;
  Event: ResolverTypeWrapper<Event>;
  EventWithCursorResponse: ResolverTypeWrapper<EventWithCursorResponse>;
  ExtPipe: ResolverTypeWrapper<ExtPipe>;
  Contact: ResolverTypeWrapper<Contact>;
  RawTable: ResolverTypeWrapper<RawTable>;
  ExtPipes: ResolverTypeWrapper<ExtPipes>;
  Node3DWithCursorResponse: ResolverTypeWrapper<Node3DWithCursorResponse>;
  Node3D: ResolverTypeWrapper<Node3D>;
  BoundingBox3D: ResolverTypeWrapper<BoundingBox3D>;
  ItemsResponseExtPipeRunResponse: ResolverTypeWrapper<ItemsResponseExtPipeRunResponse>;
  ExtPipeRunResponse: ResolverTypeWrapper<ExtPipeRunResponse>;
  Model3D: ResolverTypeWrapper<Model3D>;
  Model3DOutputResponseList: ResolverTypeWrapper<Model3DOutputResponseList>;
  Items27ListItem: ResolverTypeWrapper<Items27ListItem>;
  Model3DWithCursorResponse: ResolverTypeWrapper<Model3DWithCursorResponse>;
  PagedRelationshipResponseWrapper: ResolverTypeWrapper<PagedRelationshipResponseWrapper>;
  RelationshipResponse: ResolverTypeWrapper<RelationshipResponse>;
  Revision3D: ResolverTypeWrapper<Revision3D>;
  RevisionCameraProperties: ResolverTypeWrapper<RevisionCameraProperties>;
  Status: Status;
  Revision3DWithCursorResponse: ResolverTypeWrapper<Revision3DWithCursorResponse>;
  RevisionLog3DResponse: ResolverTypeWrapper<RevisionLog3DResponse>;
  RevisionLog3D: ResolverTypeWrapper<RevisionLog3D>;
  SecurityCategoryWithCursorResponse: ResolverTypeWrapper<SecurityCategoryWithCursorResponse>;
  SecurityCategoryDTO: ResolverTypeWrapper<SecurityCategoryDTO>;
  Sort2: Sort2;
  SequenceWithCursorResponse: ResolverTypeWrapper<SequenceWithCursorResponse>;
  GetSequenceDTO: ResolverTypeWrapper<GetSequenceDTO>;
  GetSequenceColumnDTO: ResolverTypeWrapper<GetSequenceColumnDTO>;
  SequenceValueTypeEnum: SequenceValueTypeEnum;
  Mutation: ResolverTypeWrapper<{}>;
  EventFilterRequestInput: EventFilterRequestInput;
  EventFilterInput: EventFilterInput;
  ActiveAtTimeFilterInput: ActiveAtTimeFilterInput;
  EpochTimestampRangeInput: EpochTimestampRangeInput;
  FileFilterRequestInput: FileFilterRequestInput;
  Filter2Input: Filter2Input;
  GeoLocationFilterInput: GeoLocationFilterInput;
  Relation: Relation;
  SourceCreatedTime4Input: SourceCreatedTime4Input;
  SourceModifiedTime4Input: SourceModifiedTime4Input;
  SequencesAdvancedListDTOInput: SequencesAdvancedListDTOInput;
  SequenceFilterInput: SequenceFilterInput;
  DataAssetAggregate: ResolverTypeWrapper<DataAssetAggregate>;
  AssetAggregate: ResolverTypeWrapper<AssetAggregate>;
  AssetAggregateRequestInput: AssetAggregateRequestInput;
  FilterInput: FilterInput;
  DataDataSetAggregate: ResolverTypeWrapper<DataDataSetAggregate>;
  DataSetAggregate: ResolverTypeWrapper<DataSetAggregate>;
  DataSetAggregateRequestInput: DataSetAggregateRequestInput;
  DataSetFilterInput: DataSetFilterInput;
  AggregateResult: ResolversTypes['CountAggregateResult'] | ResolversTypes['ValuesAggregateResult'];
  CountAggregateResult: ResolverTypeWrapper<CountAggregateResult>;
  Items8ListItem: ResolverTypeWrapper<Items8ListItem>;
  ValuesAggregateResult: ResolverTypeWrapper<Omit<ValuesAggregateResult, 'items'> & { items: Array<Maybe<ResolversTypes['Items9ListItem']>> }>;
  Items9ListItem: ResolversTypes['StringValue'] | ResolversTypes['IntegerValue'];
  StringValue: ResolverTypeWrapper<StringValue>;
  IntegerValue: ResolverTypeWrapper<IntegerValue>;
  DataFilesAggregate: ResolverTypeWrapper<DataFilesAggregate>;
  FilesAggregate: ResolverTypeWrapper<FilesAggregate>;
  FileFilterInput: FileFilterInput;
  SequenceAggregateResponse: ResolverTypeWrapper<SequenceAggregateResponse>;
  Items63ListItem: ResolverTypeWrapper<Items63ListItem>;
  SequencesAggregateDTOInput: SequencesAggregateDTOInput;
  TimeSeriesAggregateResponse: ResolverTypeWrapper<TimeSeriesAggregateResponse>;
  Items37ListItem: ResolverTypeWrapper<Items37ListItem>;
  TimeSeriesAggregateDTOInput: TimeSeriesAggregateDTOInput;
  Filter4Input: Filter4Input;
  DataGetTimeSeriesMetadataDTO: ResolverTypeWrapper<DataGetTimeSeriesMetadataDTO>;
  TimeSeriesUpdateRequestInput: TimeSeriesUpdateRequestInput;
  DataAsset: ResolverTypeWrapper<DataAsset>;
  AssetDataIdsInput: AssetDataIdsInput;
  AggregatedProperty: AggregatedProperty;
  EventResponse: ResolverTypeWrapper<EventResponse>;
  EventDataIdsInput: EventDataIdsInput;
  DataFileMetadata: ResolverTypeWrapper<DataFileMetadata>;
  FileDataIdsWithIgnoreUnknownIdsInput: FileDataIdsWithIgnoreUnknownIdsInput;
  ExtendedItemsRequestExtPipeIdInput: ExtendedItemsRequestExtPipeIdInput;
  EnrichedRelationshipResponseWrapper: ResolverTypeWrapper<EnrichedRelationshipResponseWrapper>;
  EnrichedRelationshipResponse: ResolverTypeWrapper<Omit<EnrichedRelationshipResponse, 'source' | 'target'> & { source?: Maybe<ResolversTypes['Source3']>, target?: Maybe<ResolversTypes['Target2']> }>;
  Source3: ResolversTypes['GetSequenceDTO'] | ResolversTypes['GetTimeSeriesMetadataDTO'];
  Target2: ResolversTypes['GetSequenceDTO'] | ResolversTypes['GetTimeSeriesMetadataDTO'];
  ByIdsRequestInput: ByIdsRequestInput;
  ExternalIdObjectInput: ExternalIdObjectInput;
  AssetMapping3DList: ResolverTypeWrapper<AssetMapping3DList>;
  ApiV1Project3dModelRevisionMappingsInput: ApiV1Project3dModelRevisionMappingsInput;
  CreateAssetMapping3DInput: CreateAssetMapping3DInput;
  Model3DList: ResolverTypeWrapper<Model3DList>;
  ApiV1Project3dModelsInput: ApiV1Project3dModelsInput;
  CreateModel3DInput: CreateModel3DInput;
  Revision3DList: ResolverTypeWrapper<Revision3DList>;
  ApiV1Project3dModelRevisionsInput: ApiV1Project3dModelRevisionsInput;
  CreateRevision3DInput: CreateRevision3DInput;
  RevisionCameraPropertiesInput: RevisionCameraPropertiesInput;
  DataExternalAssetInput: DataExternalAssetInput;
  DataExternalAssetItemInput: DataExternalAssetItemInput;
  LabelInput: LabelInput;
  DataRawDB: ResolverTypeWrapper<DataRawDB>;
  DataRawDBInput: DataRawDBInput;
  RawDBInput: RawDBInput;
  DataSetList: ResolverTypeWrapper<DataSetList>;
  DataSet: ResolverTypeWrapper<DataSet>;
  DataSetSpecListInput: DataSetSpecListInput;
  DataSetSpecInput: DataSetSpecInput;
  DataExternalEventInput: DataExternalEventInput;
  ExternalEventInput: ExternalEventInput;
  ItemsRequestCreateExtPipeInput: ItemsRequestCreateExtPipeInput;
  CreateExtPipeInput: CreateExtPipeInput;
  ContactInput: ContactInput;
  RawTableInput: RawTableInput;
  RelationshipResponseWrapper: ResolverTypeWrapper<RelationshipResponseWrapper>;
  RelationshipRequestWrapperInput: RelationshipRequestWrapperInput;
  RelationshipInput: RelationshipInput;
  ItemsResponseCreateExtPipeRunResponse: ResolverTypeWrapper<ItemsResponseCreateExtPipeRunResponse>;
  CreateExtPipeRunResponse: ResolverTypeWrapper<CreateExtPipeRunResponse>;
  ItemsRequestExtPipeRunRequestInput: ItemsRequestExtPipeRunRequestInput;
  ExtPipeRunRequestInput: ExtPipeRunRequestInput;
  ExtPipeRunStatus: ExtPipeRunStatus;
  SecurityCategoryResponse: ResolverTypeWrapper<SecurityCategoryResponse>;
  DataSecurityCategorySpecDTOInput: DataSecurityCategorySpecDTOInput;
  SecurityCategorySpecDTOInput: SecurityCategorySpecDTOInput;
  DataGetSequence: ResolverTypeWrapper<DataGetSequence>;
  DataPostSequenceInput: DataPostSequenceInput;
  PostSequenceDTOInput: PostSequenceDTOInput;
  PostSequenceColumnDTOInput: PostSequenceColumnDTOInput;
  DataRawDBTable: ResolverTypeWrapper<DataRawDBTable>;
  DataRawDBTableInput: DataRawDBTableInput;
  RawDBTableInput: RawDBTableInput;
  ApiV1Project3dModelRevisionMappingsDeleteInput: ApiV1Project3dModelRevisionMappingsDeleteInput;
  DeleteAssetMapping3DInput: DeleteAssetMapping3DInput;
  DataIdentifiersInput: DataIdentifiersInput;
  DataIdentifierInput: DataIdentifierInput;
  DeleteRequestInput: DeleteRequestInput;
  DeleteRawDBInput: DeleteRawDBInput;
  DatapointsDeleteQueryInput: DatapointsDeleteQueryInput;
  ItemsRequestExtPipeIdInput: ItemsRequestExtPipeIdInput;
  FileDataIdsInput: FileDataIdsInput;
  ApiV1ProjectRelationshipsDeleteInput: ApiV1ProjectRelationshipsDeleteInput;
  DataRawDBRowKeyInput: DataRawDBRowKeyInput;
  RawDBRowKeyInput: RawDBRowKeyInput;
  DataLongInput: DataLongInput;
  DataSequenceDataDeleteRequestInput: DataSequenceDataDeleteRequestInput;
  DataResourceIdsWithIgnoreUnknownIdsInput: DataResourceIdsWithIgnoreUnknownIdsInput;
  TimeSeriesLookupByIdInput: TimeSeriesLookupByIdInput;
  ApiV1ProjectContextDiagramConvert2: ResolverTypeWrapper<ApiV1ProjectContextDiagramConvert2>;
  ApiV1ProjectContextDiagramConvertInput: ApiV1ProjectContextDiagramConvertInput;
  ApiV1ProjectContextDiagramDetect2: ResolverTypeWrapper<ApiV1ProjectContextDiagramDetect2>;
  ApiV1ProjectContextDiagramDetectInput: ApiV1ProjectContextDiagramDetectInput;
  ApiV1ProjectFilesDownloadlink: ResolverTypeWrapper<Omit<ApiV1ProjectFilesDownloadlink, 'items'> & { items?: Maybe<Array<Maybe<ResolversTypes['Items16ListItem']>>> }>;
  Items16ListItem: ResolversTypes['FileInternalId'] | ResolversTypes['FileExternalId'];
  FileInternalId: ResolverTypeWrapper<FileInternalId>;
  FileExternalId: ResolverTypeWrapper<FileExternalId>;
  FileLinkIdsInput: FileLinkIdsInput;
  ApiV1ProjectContextEntitymatching2Input: ApiV1ProjectContextEntitymatching2Input;
  Classifier2: Classifier2;
  MatchFieldsListItemInput: MatchFieldsListItemInput;
  ApiV1ProjectContextEntitymatchingDeleteInput: ApiV1ProjectContextEntitymatchingDeleteInput;
  ApiV1ProjectContextEntitymatchingList2: ResolverTypeWrapper<ApiV1ProjectContextEntitymatchingList2>;
  ApiV1ProjectContextEntitymatchingListInput: ApiV1ProjectContextEntitymatchingListInput;
  Filter5Input: Filter5Input;
  ApiV1ProjectContextEntitymatchingPredict: ResolverTypeWrapper<ApiV1ProjectContextEntitymatchingPredict>;
  ApiV1ProjectContextEntitymatchingRefit: ResolverTypeWrapper<ApiV1ProjectContextEntitymatchingRefit>;
  ApiV1ProjectContextEntitymatchingByids2: ResolverTypeWrapper<ApiV1ProjectContextEntitymatchingByids2>;
  ApiV1ProjectContextEntitymatchingByidsInput: ApiV1ProjectContextEntitymatchingByidsInput;
  ApiV1ProjectContextEntitymatchingUpdate2: ResolverTypeWrapper<ApiV1ProjectContextEntitymatchingUpdate2>;
  ApiV1ProjectContextEntitymatchingUpdateInput: ApiV1ProjectContextEntitymatchingUpdateInput;
  AssetMapping3DFilterRequestInput: AssetMapping3DFilterRequestInput;
  Node3DFilterBodyInput: Node3DFilterBodyInput;
  Node3DPropertyFilterInput: Node3DPropertyFilterInput;
  ExtPipesFilterRequestInput: ExtPipesFilterRequestInput;
  RunsFilterRequestInput: RunsFilterRequestInput;
  RunsFilterInput: RunsFilterInput;
  StringFilterInput: StringFilterInput;
  Node3DList: ResolverTypeWrapper<Node3DList>;
  Node3DIdsInput: Node3DIdsInput;
  Node3DIdInput: Node3DIdInput;
  DataSetIdEitherListInput: DataSetIdEitherListInput;
  DatapointsResponse: ResolverTypeWrapper<DatapointsResponse>;
  DatapointsLatestQueryInput: DatapointsLatestQueryInput;
  SequenceGetData: ResolverTypeWrapper<SequenceGetData>;
  BasicGetSequenceColumnInfo: ResolverTypeWrapper<BasicGetSequenceColumnInfo>;
  SequenceRowDTO: ResolverTypeWrapper<SequenceRowDTO>;
  DatapointsOrAggregatesResponse: ResolverTypeWrapper<DatapointsOrAggregatesResponse>;
  DatapointsMultiQueryInput: DatapointsMultiQueryInput;
  Aggregate: Aggregate;
  SequenceGetDataWithCursor: ResolverTypeWrapper<SequenceGetDataWithCursor>;
  ApiV1ProjectFiles: ResolverTypeWrapper<ApiV1ProjectFiles>;
  ExternalFilesMetadataInput: ExternalFilesMetadataInput;
  GeoLocationInput: GeoLocationInput;
  AssetListScopeInput: AssetListScopeInput;
  DataSetListWithCursor: ResolverTypeWrapper<DataSetListWithCursor>;
  DataSetFilterRequestInput: DataSetFilterRequestInput;
  PagedEnrichedRelationshipResponseWrapper: ResolverTypeWrapper<PagedEnrichedRelationshipResponseWrapper>;
  RelationshipsAdvancedListRequestInput: RelationshipsAdvancedListRequestInput;
  AdvancedListFilterInput: AdvancedListFilterInput;
  ActiveAtTimeInput: ActiveAtTimeInput;
  FloatRangeInput: FloatRangeInput;
  ResourceType: ResourceType;
  ResourceReferenceWithExternalIdInput: ResourceReferenceWithExternalIdInput;
  TimeSeriesListDTOInput: TimeSeriesListDTOInput;
  DatapointsInsertQueryInput: DatapointsInsertQueryInput;
  DataRawDBRowInput: DataRawDBRowInput;
  RawDBRowInsertInput: RawDBRowInsertInput;
  DataSequencePostDataInput: DataSequencePostDataInput;
  TimeSeriesCreateRequestInput: TimeSeriesCreateRequestInput;
  PostTimeSeriesMetadataDTOInput: PostTimeSeriesMetadataDTOInput;
  SyntheticQueryResponses: ResolverTypeWrapper<SyntheticQueryResponses>;
  SyntheticQueryResponse: ResolverTypeWrapper<Omit<SyntheticQueryResponse, 'datapoints'> & { datapoints: Array<Maybe<ResolversTypes['SyntheticDataPoint']>> }>;
  SyntheticDataPoint: ResolversTypes['SyntheticDataValue'] | ResolversTypes['SyntheticDataError'];
  SyntheticDataValue: ResolverTypeWrapper<SyntheticDataValue>;
  SyntheticDataError: ResolverTypeWrapper<SyntheticDataError>;
  SyntheticMultiQueryInput: SyntheticMultiQueryInput;
  SyntheticQueryInput: SyntheticQueryInput;
  AssetSearchFilterInput: AssetSearchFilterInput;
  SearchInput: SearchInput;
  EventSearchRequestInput: EventSearchRequestInput;
  EventSearchInput: EventSearchInput;
  FilesSearchFilterInput: FilesSearchFilterInput;
  Search2Input: Search2Input;
  SequencesSearchDTOInput: SequencesSearchDTOInput;
  SequenceSearchInput: SequenceSearchInput;
  TimeSeriesSearchDTOInput: TimeSeriesSearchDTOInput;
  Search3Input: Search3Input;
  ApiV1Project3dModelsUpdateInput: ApiV1Project3dModelsUpdateInput;
  UpdateModel3DInput: UpdateModel3DInput;
  UpdateInput: UpdateInput;
  SetModelNameFieldInput: SetModelNameFieldInput;
  ApiV1Project3dModelRevisionsUpdateInput: ApiV1Project3dModelRevisionsUpdateInput;
  UpdateRevision3DInput: UpdateRevision3DInput;
  Update2Input: Update2Input;
  SetRevisionCameraPropertiesInput: SetRevisionCameraPropertiesInput;
  Published3Input: Published3Input;
  SetRevisionRotationInput: SetRevisionRotationInput;
  DataAssetChangeInput: DataAssetChangeInput;
  DataSetUpdateListInput: DataSetUpdateListInput;
  DataEventChangeInput: DataEventChangeInput;
  ItemsRequestExtPipeUpdateInput: ItemsRequestExtPipeUpdateInput;
  DataFileChangeInput: DataFileChangeInput;
  UpdateRelationshipWrapperInput: UpdateRelationshipWrapperInput;
  RelationshipUpdateInput: RelationshipUpdateInput;
  RelationshipUpdateContentInput: RelationshipUpdateContentInput;
  UpdateSourceExternalIdInput: UpdateSourceExternalIdInput;
  UpdateSourceTypeInput: UpdateSourceTypeInput;
  UpdateTargetExternalIdInput: UpdateTargetExternalIdInput;
  UpdateTargetTypeInput: UpdateTargetTypeInput;
  DataSequenceChangeInput: DataSequenceChangeInput;
  UpdateRevision3DThumbnailInput: UpdateRevision3DThumbnailInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: Scalars['String'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  ApiV1ProjectContextDiagramConvert3: ApiV1ProjectContextDiagramConvert3;
  JSON: Scalars['JSON'];
  ApiV1ProjectContextDiagramDetect3: ApiV1ProjectContextDiagramDetect3;
  ApiV1ProjectContextEntitymatching: ApiV1ProjectContextEntitymatching;
  EntityMatcherResponseSchema: EntityMatcherResponseSchema;
  MatchFieldsListItem: MatchFieldsListItem;
  ApiV1ProjectContextEntitymatching3: ApiV1ProjectContextEntitymatching3;
  ApiV1ProjectContextEntitymatchingJob: ApiV1ProjectContextEntitymatchingJob;
  Items75ListItem: Items75ListItem;
  MatchesListItem: MatchesListItem;
  Asset: Asset;
  AggregateResultItem: AggregateResultItem;
  AssetIdentifier: AssetIdentifier;
  Label: Label;
  AssetMapping3DWithCursorResponse: AssetMapping3DWithCursorResponse;
  AssetMapping3D: AssetMapping3D;
  DataRawDBTableCursors: DataRawDBTableCursors;
  DataWithCursor: DataWithCursor;
  FilesMetadata: FilesMetadata;
  GeoLocation: GeoLocation;
  DataWithCursorAsset: DataWithCursorAsset;
  DataWithCursorGetTimeSeriesMetadataDTO: DataWithCursorGetTimeSeriesMetadataDTO;
  GetTimeSeriesMetadataDTO: GetTimeSeriesMetadataDTO;
  DataWithCursorRawDB: DataWithCursorRawDB;
  RawDB: RawDB;
  DataWithCursorRawDBRow: DataWithCursorRawDBRow;
  RawDBRow: RawDBRow;
  DataWithCursorRawDBTable: DataWithCursorRawDBTable;
  RawDBTable: RawDBTable;
  Event: Event;
  EventWithCursorResponse: EventWithCursorResponse;
  ExtPipe: ExtPipe;
  Contact: Contact;
  RawTable: RawTable;
  ExtPipes: ExtPipes;
  Node3DWithCursorResponse: Node3DWithCursorResponse;
  Node3D: Node3D;
  BoundingBox3D: BoundingBox3D;
  ItemsResponseExtPipeRunResponse: ItemsResponseExtPipeRunResponse;
  ExtPipeRunResponse: ExtPipeRunResponse;
  Model3D: Model3D;
  Model3DOutputResponseList: Model3DOutputResponseList;
  Items27ListItem: Items27ListItem;
  Model3DWithCursorResponse: Model3DWithCursorResponse;
  PagedRelationshipResponseWrapper: PagedRelationshipResponseWrapper;
  RelationshipResponse: RelationshipResponse;
  Revision3D: Revision3D;
  RevisionCameraProperties: RevisionCameraProperties;
  Revision3DWithCursorResponse: Revision3DWithCursorResponse;
  RevisionLog3DResponse: RevisionLog3DResponse;
  RevisionLog3D: RevisionLog3D;
  SecurityCategoryWithCursorResponse: SecurityCategoryWithCursorResponse;
  SecurityCategoryDTO: SecurityCategoryDTO;
  SequenceWithCursorResponse: SequenceWithCursorResponse;
  GetSequenceDTO: GetSequenceDTO;
  GetSequenceColumnDTO: GetSequenceColumnDTO;
  Mutation: {};
  EventFilterRequestInput: EventFilterRequestInput;
  EventFilterInput: EventFilterInput;
  ActiveAtTimeFilterInput: ActiveAtTimeFilterInput;
  EpochTimestampRangeInput: EpochTimestampRangeInput;
  FileFilterRequestInput: FileFilterRequestInput;
  Filter2Input: Filter2Input;
  GeoLocationFilterInput: GeoLocationFilterInput;
  SourceCreatedTime4Input: SourceCreatedTime4Input;
  SourceModifiedTime4Input: SourceModifiedTime4Input;
  SequencesAdvancedListDTOInput: SequencesAdvancedListDTOInput;
  SequenceFilterInput: SequenceFilterInput;
  DataAssetAggregate: DataAssetAggregate;
  AssetAggregate: AssetAggregate;
  AssetAggregateRequestInput: AssetAggregateRequestInput;
  FilterInput: FilterInput;
  DataDataSetAggregate: DataDataSetAggregate;
  DataSetAggregate: DataSetAggregate;
  DataSetAggregateRequestInput: DataSetAggregateRequestInput;
  DataSetFilterInput: DataSetFilterInput;
  AggregateResult: ResolversParentTypes['CountAggregateResult'] | ResolversParentTypes['ValuesAggregateResult'];
  CountAggregateResult: CountAggregateResult;
  Items8ListItem: Items8ListItem;
  ValuesAggregateResult: Omit<ValuesAggregateResult, 'items'> & { items: Array<Maybe<ResolversParentTypes['Items9ListItem']>> };
  Items9ListItem: ResolversParentTypes['StringValue'] | ResolversParentTypes['IntegerValue'];
  StringValue: StringValue;
  IntegerValue: IntegerValue;
  DataFilesAggregate: DataFilesAggregate;
  FilesAggregate: FilesAggregate;
  FileFilterInput: FileFilterInput;
  SequenceAggregateResponse: SequenceAggregateResponse;
  Items63ListItem: Items63ListItem;
  SequencesAggregateDTOInput: SequencesAggregateDTOInput;
  TimeSeriesAggregateResponse: TimeSeriesAggregateResponse;
  Items37ListItem: Items37ListItem;
  TimeSeriesAggregateDTOInput: TimeSeriesAggregateDTOInput;
  Filter4Input: Filter4Input;
  DataGetTimeSeriesMetadataDTO: DataGetTimeSeriesMetadataDTO;
  TimeSeriesUpdateRequestInput: TimeSeriesUpdateRequestInput;
  DataAsset: DataAsset;
  AssetDataIdsInput: AssetDataIdsInput;
  EventResponse: EventResponse;
  EventDataIdsInput: EventDataIdsInput;
  DataFileMetadata: DataFileMetadata;
  FileDataIdsWithIgnoreUnknownIdsInput: FileDataIdsWithIgnoreUnknownIdsInput;
  ExtendedItemsRequestExtPipeIdInput: ExtendedItemsRequestExtPipeIdInput;
  EnrichedRelationshipResponseWrapper: EnrichedRelationshipResponseWrapper;
  EnrichedRelationshipResponse: Omit<EnrichedRelationshipResponse, 'source' | 'target'> & { source?: Maybe<ResolversParentTypes['Source3']>, target?: Maybe<ResolversParentTypes['Target2']> };
  Source3: ResolversParentTypes['GetSequenceDTO'] | ResolversParentTypes['GetTimeSeriesMetadataDTO'];
  Target2: ResolversParentTypes['GetSequenceDTO'] | ResolversParentTypes['GetTimeSeriesMetadataDTO'];
  ByIdsRequestInput: ByIdsRequestInput;
  ExternalIdObjectInput: ExternalIdObjectInput;
  AssetMapping3DList: AssetMapping3DList;
  ApiV1Project3dModelRevisionMappingsInput: ApiV1Project3dModelRevisionMappingsInput;
  CreateAssetMapping3DInput: CreateAssetMapping3DInput;
  Model3DList: Model3DList;
  ApiV1Project3dModelsInput: ApiV1Project3dModelsInput;
  CreateModel3DInput: CreateModel3DInput;
  Revision3DList: Revision3DList;
  ApiV1Project3dModelRevisionsInput: ApiV1Project3dModelRevisionsInput;
  CreateRevision3DInput: CreateRevision3DInput;
  RevisionCameraPropertiesInput: RevisionCameraPropertiesInput;
  DataExternalAssetInput: DataExternalAssetInput;
  DataExternalAssetItemInput: DataExternalAssetItemInput;
  LabelInput: LabelInput;
  DataRawDB: DataRawDB;
  DataRawDBInput: DataRawDBInput;
  RawDBInput: RawDBInput;
  DataSetList: DataSetList;
  DataSet: DataSet;
  DataSetSpecListInput: DataSetSpecListInput;
  DataSetSpecInput: DataSetSpecInput;
  DataExternalEventInput: DataExternalEventInput;
  ExternalEventInput: ExternalEventInput;
  ItemsRequestCreateExtPipeInput: ItemsRequestCreateExtPipeInput;
  CreateExtPipeInput: CreateExtPipeInput;
  ContactInput: ContactInput;
  RawTableInput: RawTableInput;
  RelationshipResponseWrapper: RelationshipResponseWrapper;
  RelationshipRequestWrapperInput: RelationshipRequestWrapperInput;
  RelationshipInput: RelationshipInput;
  ItemsResponseCreateExtPipeRunResponse: ItemsResponseCreateExtPipeRunResponse;
  CreateExtPipeRunResponse: CreateExtPipeRunResponse;
  ItemsRequestExtPipeRunRequestInput: ItemsRequestExtPipeRunRequestInput;
  ExtPipeRunRequestInput: ExtPipeRunRequestInput;
  SecurityCategoryResponse: SecurityCategoryResponse;
  DataSecurityCategorySpecDTOInput: DataSecurityCategorySpecDTOInput;
  SecurityCategorySpecDTOInput: SecurityCategorySpecDTOInput;
  DataGetSequence: DataGetSequence;
  DataPostSequenceInput: DataPostSequenceInput;
  PostSequenceDTOInput: PostSequenceDTOInput;
  PostSequenceColumnDTOInput: PostSequenceColumnDTOInput;
  DataRawDBTable: DataRawDBTable;
  DataRawDBTableInput: DataRawDBTableInput;
  RawDBTableInput: RawDBTableInput;
  ApiV1Project3dModelRevisionMappingsDeleteInput: ApiV1Project3dModelRevisionMappingsDeleteInput;
  DeleteAssetMapping3DInput: DeleteAssetMapping3DInput;
  DataIdentifiersInput: DataIdentifiersInput;
  DataIdentifierInput: DataIdentifierInput;
  DeleteRequestInput: DeleteRequestInput;
  DeleteRawDBInput: DeleteRawDBInput;
  DatapointsDeleteQueryInput: DatapointsDeleteQueryInput;
  ItemsRequestExtPipeIdInput: ItemsRequestExtPipeIdInput;
  FileDataIdsInput: FileDataIdsInput;
  ApiV1ProjectRelationshipsDeleteInput: ApiV1ProjectRelationshipsDeleteInput;
  DataRawDBRowKeyInput: DataRawDBRowKeyInput;
  RawDBRowKeyInput: RawDBRowKeyInput;
  DataLongInput: DataLongInput;
  DataSequenceDataDeleteRequestInput: DataSequenceDataDeleteRequestInput;
  DataResourceIdsWithIgnoreUnknownIdsInput: DataResourceIdsWithIgnoreUnknownIdsInput;
  TimeSeriesLookupByIdInput: TimeSeriesLookupByIdInput;
  ApiV1ProjectContextDiagramConvert2: ApiV1ProjectContextDiagramConvert2;
  ApiV1ProjectContextDiagramConvertInput: ApiV1ProjectContextDiagramConvertInput;
  ApiV1ProjectContextDiagramDetect2: ApiV1ProjectContextDiagramDetect2;
  ApiV1ProjectContextDiagramDetectInput: ApiV1ProjectContextDiagramDetectInput;
  ApiV1ProjectFilesDownloadlink: Omit<ApiV1ProjectFilesDownloadlink, 'items'> & { items?: Maybe<Array<Maybe<ResolversParentTypes['Items16ListItem']>>> };
  Items16ListItem: ResolversParentTypes['FileInternalId'] | ResolversParentTypes['FileExternalId'];
  FileInternalId: FileInternalId;
  FileExternalId: FileExternalId;
  FileLinkIdsInput: FileLinkIdsInput;
  ApiV1ProjectContextEntitymatching2Input: ApiV1ProjectContextEntitymatching2Input;
  MatchFieldsListItemInput: MatchFieldsListItemInput;
  ApiV1ProjectContextEntitymatchingDeleteInput: ApiV1ProjectContextEntitymatchingDeleteInput;
  ApiV1ProjectContextEntitymatchingList2: ApiV1ProjectContextEntitymatchingList2;
  ApiV1ProjectContextEntitymatchingListInput: ApiV1ProjectContextEntitymatchingListInput;
  Filter5Input: Filter5Input;
  ApiV1ProjectContextEntitymatchingPredict: ApiV1ProjectContextEntitymatchingPredict;
  ApiV1ProjectContextEntitymatchingRefit: ApiV1ProjectContextEntitymatchingRefit;
  ApiV1ProjectContextEntitymatchingByids2: ApiV1ProjectContextEntitymatchingByids2;
  ApiV1ProjectContextEntitymatchingByidsInput: ApiV1ProjectContextEntitymatchingByidsInput;
  ApiV1ProjectContextEntitymatchingUpdate2: ApiV1ProjectContextEntitymatchingUpdate2;
  ApiV1ProjectContextEntitymatchingUpdateInput: ApiV1ProjectContextEntitymatchingUpdateInput;
  AssetMapping3DFilterRequestInput: AssetMapping3DFilterRequestInput;
  Node3DFilterBodyInput: Node3DFilterBodyInput;
  Node3DPropertyFilterInput: Node3DPropertyFilterInput;
  ExtPipesFilterRequestInput: ExtPipesFilterRequestInput;
  RunsFilterRequestInput: RunsFilterRequestInput;
  RunsFilterInput: RunsFilterInput;
  StringFilterInput: StringFilterInput;
  Node3DList: Node3DList;
  Node3DIdsInput: Node3DIdsInput;
  Node3DIdInput: Node3DIdInput;
  DataSetIdEitherListInput: DataSetIdEitherListInput;
  DatapointsResponse: DatapointsResponse;
  DatapointsLatestQueryInput: DatapointsLatestQueryInput;
  SequenceGetData: SequenceGetData;
  BasicGetSequenceColumnInfo: BasicGetSequenceColumnInfo;
  SequenceRowDTO: SequenceRowDTO;
  DatapointsOrAggregatesResponse: DatapointsOrAggregatesResponse;
  DatapointsMultiQueryInput: DatapointsMultiQueryInput;
  SequenceGetDataWithCursor: SequenceGetDataWithCursor;
  ApiV1ProjectFiles: ApiV1ProjectFiles;
  ExternalFilesMetadataInput: ExternalFilesMetadataInput;
  GeoLocationInput: GeoLocationInput;
  AssetListScopeInput: AssetListScopeInput;
  DataSetListWithCursor: DataSetListWithCursor;
  DataSetFilterRequestInput: DataSetFilterRequestInput;
  PagedEnrichedRelationshipResponseWrapper: PagedEnrichedRelationshipResponseWrapper;
  RelationshipsAdvancedListRequestInput: RelationshipsAdvancedListRequestInput;
  AdvancedListFilterInput: AdvancedListFilterInput;
  ActiveAtTimeInput: ActiveAtTimeInput;
  FloatRangeInput: FloatRangeInput;
  ResourceReferenceWithExternalIdInput: ResourceReferenceWithExternalIdInput;
  TimeSeriesListDTOInput: TimeSeriesListDTOInput;
  DatapointsInsertQueryInput: DatapointsInsertQueryInput;
  DataRawDBRowInput: DataRawDBRowInput;
  RawDBRowInsertInput: RawDBRowInsertInput;
  DataSequencePostDataInput: DataSequencePostDataInput;
  TimeSeriesCreateRequestInput: TimeSeriesCreateRequestInput;
  PostTimeSeriesMetadataDTOInput: PostTimeSeriesMetadataDTOInput;
  SyntheticQueryResponses: SyntheticQueryResponses;
  SyntheticQueryResponse: Omit<SyntheticQueryResponse, 'datapoints'> & { datapoints: Array<Maybe<ResolversParentTypes['SyntheticDataPoint']>> };
  SyntheticDataPoint: ResolversParentTypes['SyntheticDataValue'] | ResolversParentTypes['SyntheticDataError'];
  SyntheticDataValue: SyntheticDataValue;
  SyntheticDataError: SyntheticDataError;
  SyntheticMultiQueryInput: SyntheticMultiQueryInput;
  SyntheticQueryInput: SyntheticQueryInput;
  AssetSearchFilterInput: AssetSearchFilterInput;
  SearchInput: SearchInput;
  EventSearchRequestInput: EventSearchRequestInput;
  EventSearchInput: EventSearchInput;
  FilesSearchFilterInput: FilesSearchFilterInput;
  Search2Input: Search2Input;
  SequencesSearchDTOInput: SequencesSearchDTOInput;
  SequenceSearchInput: SequenceSearchInput;
  TimeSeriesSearchDTOInput: TimeSeriesSearchDTOInput;
  Search3Input: Search3Input;
  ApiV1Project3dModelsUpdateInput: ApiV1Project3dModelsUpdateInput;
  UpdateModel3DInput: UpdateModel3DInput;
  UpdateInput: UpdateInput;
  SetModelNameFieldInput: SetModelNameFieldInput;
  ApiV1Project3dModelRevisionsUpdateInput: ApiV1Project3dModelRevisionsUpdateInput;
  UpdateRevision3DInput: UpdateRevision3DInput;
  Update2Input: Update2Input;
  SetRevisionCameraPropertiesInput: SetRevisionCameraPropertiesInput;
  Published3Input: Published3Input;
  SetRevisionRotationInput: SetRevisionRotationInput;
  DataAssetChangeInput: DataAssetChangeInput;
  DataSetUpdateListInput: DataSetUpdateListInput;
  DataEventChangeInput: DataEventChangeInput;
  ItemsRequestExtPipeUpdateInput: ItemsRequestExtPipeUpdateInput;
  DataFileChangeInput: DataFileChangeInput;
  UpdateRelationshipWrapperInput: UpdateRelationshipWrapperInput;
  RelationshipUpdateInput: RelationshipUpdateInput;
  RelationshipUpdateContentInput: RelationshipUpdateContentInput;
  UpdateSourceExternalIdInput: UpdateSourceExternalIdInput;
  UpdateSourceTypeInput: UpdateSourceTypeInput;
  UpdateTargetExternalIdInput: UpdateTargetExternalIdInput;
  UpdateTargetTypeInput: UpdateTargetTypeInput;
  DataSequenceChangeInput: DataSequenceChangeInput;
  UpdateRevision3DThumbnailInput: UpdateRevision3DThumbnailInput;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  apiV1Project3dFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryapiV1Project3dFileArgs, 'project' | 'threedFileId'>>;
  apiV1ProjectContextDiagramConvert3?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextDiagramConvert3']>, ParentType, ContextType, RequireFields<QueryapiV1ProjectContextDiagramConvert3Args, 'jobId' | 'project'>>;
  apiV1ProjectContextDiagramDetect3?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextDiagramDetect3']>, ParentType, ContextType, RequireFields<QueryapiV1ProjectContextDiagramDetect3Args, 'jobId' | 'project'>>;
  apiV1ProjectContextEntitymatching?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatching']>, ParentType, ContextType, RequireFields<QueryapiV1ProjectContextEntitymatchingArgs, 'project'>>;
  apiV1ProjectContextEntitymatching3?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatching3']>, ParentType, ContextType, RequireFields<QueryapiV1ProjectContextEntitymatching3Args, 'id' | 'project'>>;
  apiV1ProjectContextEntitymatchingJob?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatchingJob']>, ParentType, ContextType, RequireFields<QueryapiV1ProjectContextEntitymatchingJobArgs, 'jobId' | 'project'>>;
  apiV1ProjectFilesIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryapiV1ProjectFilesIconArgs, 'project'>>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetArgs, 'id' | 'project'>>;
  assetMapping3DWithCursorResponse?: Resolver<Maybe<ResolversTypes['AssetMapping3DWithCursorResponse']>, ParentType, ContextType, RequireFields<QueryassetMapping3DWithCursorResponseArgs, 'modelId' | 'project' | 'revisionId'>>;
  dataRawDBTableCursors?: Resolver<Maybe<ResolversTypes['DataRawDBTableCursors']>, ParentType, ContextType, RequireFields<QuerydataRawDBTableCursorsArgs, 'dbName' | 'project' | 'tableName'>>;
  dataWithCursor?: Resolver<Maybe<ResolversTypes['DataWithCursor']>, ParentType, ContextType, RequireFields<QuerydataWithCursorArgs, 'project'>>;
  dataWithCursorAsset?: Resolver<Maybe<ResolversTypes['DataWithCursorAsset']>, ParentType, ContextType, RequireFields<QuerydataWithCursorAssetArgs, 'project'>>;
  dataWithCursorGetTimeSeriesMetadataDTO?: Resolver<Maybe<ResolversTypes['DataWithCursorGetTimeSeriesMetadataDTO']>, ParentType, ContextType, RequireFields<QuerydataWithCursorGetTimeSeriesMetadataDTOArgs, 'project'>>;
  dataWithCursorRawDB?: Resolver<Maybe<ResolversTypes['DataWithCursorRawDB']>, ParentType, ContextType, RequireFields<QuerydataWithCursorRawDBArgs, 'project'>>;
  dataWithCursorRawDBRow?: Resolver<Maybe<ResolversTypes['DataWithCursorRawDBRow']>, ParentType, ContextType, RequireFields<QuerydataWithCursorRawDBRowArgs, 'dbName' | 'project' | 'tableName'>>;
  dataWithCursorRawDBTable?: Resolver<Maybe<ResolversTypes['DataWithCursorRawDBTable']>, ParentType, ContextType, RequireFields<QuerydataWithCursorRawDBTableArgs, 'dbName' | 'project'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'id' | 'project'>>;
  eventWithCursorResponse?: Resolver<Maybe<ResolversTypes['EventWithCursorResponse']>, ParentType, ContextType, RequireFields<QueryeventWithCursorResponseArgs, 'project'>>;
  extPipe?: Resolver<Maybe<ResolversTypes['ExtPipe']>, ParentType, ContextType, RequireFields<QueryextPipeArgs, 'id' | 'project'>>;
  extPipes?: Resolver<Maybe<ResolversTypes['ExtPipes']>, ParentType, ContextType, RequireFields<QueryextPipesArgs, 'project'>>;
  filesMetadata?: Resolver<Maybe<ResolversTypes['FilesMetadata']>, ParentType, ContextType, RequireFields<QueryfilesMetadataArgs, 'id' | 'project'>>;
  get3DNodeAncestors?: Resolver<Maybe<ResolversTypes['Node3DWithCursorResponse']>, ParentType, ContextType, RequireFields<Queryget3DNodeAncestorsArgs, 'modelId' | 'nodeId' | 'project' | 'revisionId'>>;
  itemsResponseExtPipeRunResponse?: Resolver<Maybe<ResolversTypes['ItemsResponseExtPipeRunResponse']>, ParentType, ContextType, RequireFields<QueryitemsResponseExtPipeRunResponseArgs, 'externalId' | 'project'>>;
  model3D?: Resolver<Maybe<ResolversTypes['Model3D']>, ParentType, ContextType, RequireFields<Querymodel3DArgs, 'modelId' | 'project'>>;
  model3DOutputResponseList?: Resolver<Maybe<ResolversTypes['Model3DOutputResponseList']>, ParentType, ContextType, RequireFields<Querymodel3DOutputResponseListArgs, 'modelId' | 'project' | 'revisionId'>>;
  model3DWithCursorResponse?: Resolver<Maybe<ResolversTypes['Model3DWithCursorResponse']>, ParentType, ContextType, RequireFields<Querymodel3DWithCursorResponseArgs, 'project'>>;
  node3DWithCursorResponse?: Resolver<Maybe<ResolversTypes['Node3DWithCursorResponse']>, ParentType, ContextType, RequireFields<Querynode3DWithCursorResponseArgs, 'modelId' | 'project' | 'revisionId'>>;
  pagedRelationshipResponseWrapper?: Resolver<Maybe<ResolversTypes['PagedRelationshipResponseWrapper']>, ParentType, ContextType, RequireFields<QuerypagedRelationshipResponseWrapperArgs, 'project'>>;
  rawDBRow?: Resolver<Maybe<ResolversTypes['RawDBRow']>, ParentType, ContextType, RequireFields<QueryrawDBRowArgs, 'dbName' | 'project' | 'rowKey' | 'tableName'>>;
  revision3D?: Resolver<Maybe<ResolversTypes['Revision3D']>, ParentType, ContextType, RequireFields<Queryrevision3DArgs, 'modelId' | 'project' | 'revisionId'>>;
  revision3DWithCursorResponse?: Resolver<Maybe<ResolversTypes['Revision3DWithCursorResponse']>, ParentType, ContextType, RequireFields<Queryrevision3DWithCursorResponseArgs, 'modelId' | 'project'>>;
  revisionLog3DResponse?: Resolver<Maybe<ResolversTypes['RevisionLog3DResponse']>, ParentType, ContextType, RequireFields<QueryrevisionLog3DResponseArgs, 'modelId' | 'project' | 'revisionId'>>;
  securityCategoryWithCursorResponse?: Resolver<Maybe<ResolversTypes['SecurityCategoryWithCursorResponse']>, ParentType, ContextType, RequireFields<QuerysecurityCategoryWithCursorResponseArgs, 'project'>>;
  sequenceWithCursorResponse?: Resolver<Maybe<ResolversTypes['SequenceWithCursorResponse']>, ParentType, ContextType, RequireFields<QuerysequenceWithCursorResponseArgs, 'project'>>;
}>;

export type ApiV1ProjectContextDiagramConvert3Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextDiagramConvert3'] = ResolversParentTypes['ApiV1ProjectContextDiagramConvert3']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  grayscale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type JobStatusResolvers = { QUEUED: 'Queued', RUNNING: 'Running', COMPLETED: 'Completed', FAILED: 'Failed' };

export type ApiV1ProjectContextDiagramDetect3Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextDiagramDetect3'] = ResolversParentTypes['ApiV1ProjectContextDiagramDetect3']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minTokens?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  partialMatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatchingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatching'] = ResolversParentTypes['ApiV1ProjectContextEntitymatching']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['EntityMatcherResponseSchema']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntityMatcherResponseSchemaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EntityMatcherResponseSchema'] = ResolversParentTypes['EntityMatcherResponseSchema']> = ResolversObject<{
  classifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featureType?: Resolver<Maybe<ResolversTypes['FeatureType']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ignoreMissingFields?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  matchFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchFieldsListItem']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeatureTypeResolvers = { SIMPLE: 'simple', INSENSITIVE: 'insensitive', BIGRAM: 'bigram', FREQUENCYWEIGHTEDBIGRAM: 'frequencyweightedbigram', BIGRAMEXTRATOKENIZERS: 'bigramextratokenizers', BIGRAMCOMBO: 'bigramcombo' };

export type MatchFieldsListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MatchFieldsListItem'] = ResolversParentTypes['MatchFieldsListItem']> = ResolversObject<{
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatching3Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatching3'] = ResolversParentTypes['ApiV1ProjectContextEntitymatching3']> = ResolversObject<{
  classifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featureType?: Resolver<ResolversTypes['FeatureType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ignoreMissingFields?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  matchFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchFieldsListItem']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatchingJobResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatchingJob'] = ResolversParentTypes['ApiV1ProjectContextEntitymatchingJob']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['Items75ListItem']>>, ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items75ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items75ListItem'] = ResolversParentTypes['Items75ListItem']> = ResolversObject<{
  matches?: Resolver<Array<Maybe<ResolversTypes['MatchesListItem']>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MatchesListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MatchesListItem'] = ResolversParentTypes['MatchesListItem']> = ResolversObject<{
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  aggregates?: Resolver<Maybe<ResolversTypes['AggregateResultItem']>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Label']>>>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentExternalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rootId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateResultItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateResultItem'] = ResolversParentTypes['AggregateResultItem']> = ResolversObject<{
  childCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  depth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  path?: Resolver<Maybe<Array<Maybe<ResolversTypes['AssetIdentifier']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetIdentifierResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetIdentifier'] = ResolversParentTypes['AssetIdentifier']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label']> = ResolversObject<{
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetMapping3DWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetMapping3DWithCursorResponse'] = ResolversParentTypes['AssetMapping3DWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['AssetMapping3D']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetMapping3DResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetMapping3D'] = ResolversParentTypes['AssetMapping3D']> = ResolversObject<{
  assetId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  subtreeSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  treeIndex?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataRawDBTableCursorsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataRawDBTableCursors'] = ResolversParentTypes['DataRawDBTableCursors']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataWithCursorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataWithCursor'] = ResolversParentTypes['DataWithCursor']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilesMetadata']>>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilesMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilesMetadata'] = ResolversParentTypes['FilesMetadata']> = ResolversObject<{
  assetIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  directory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoLocation?: Resolver<Maybe<ResolversTypes['GeoLocation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Label']>>>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  securityCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceCreatedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sourceModifiedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uploaded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uploadedTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GeoLocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GeoLocation'] = ResolversParentTypes['GeoLocation']> = ResolversObject<{
  geometry?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypeResolvers = { FEATURE: 'Feature' };

export type DataWithCursorAssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataWithCursorAsset'] = ResolversParentTypes['DataWithCursorAsset']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataWithCursorGetTimeSeriesMetadataDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataWithCursorGetTimeSeriesMetadataDTO'] = ResolversParentTypes['DataWithCursorGetTimeSeriesMetadataDTO']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['GetTimeSeriesMetadataDTO']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetTimeSeriesMetadataDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetTimeSeriesMetadataDTO'] = ResolversParentTypes['GetTimeSeriesMetadataDTO']> = ResolversObject<{
  assetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  isStep?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isString?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  securityCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataWithCursorRawDBResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataWithCursorRawDB'] = ResolversParentTypes['DataWithCursorRawDB']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['RawDB']>>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RawDBResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RawDB'] = ResolversParentTypes['RawDB']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataWithCursorRawDBRowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataWithCursorRawDBRow'] = ResolversParentTypes['DataWithCursorRawDBRow']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['RawDBRow']>>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RawDBRowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RawDBRow'] = ResolversParentTypes['RawDBRow']> = ResolversObject<{
  columns?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataWithCursorRawDBTableResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataWithCursorRawDBTable'] = ResolversParentTypes['DataWithCursorRawDBTable']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['RawDBTable']>>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RawDBTableResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RawDBTable'] = ResolversParentTypes['RawDBTable']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  assetIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  subtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventWithCursorResponse'] = ResolversParentTypes['EventWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtPipeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExtPipe'] = ResolversParentTypes['ExtPipe']> = ResolversObject<{
  contacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Contact']>>>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dataSetId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastFailure?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastSuccess?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawTables?: Resolver<Maybe<Array<Maybe<ResolversTypes['RawTable']>>>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sendNotification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RawTableResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RawTable'] = ResolversParentTypes['RawTable']> = ResolversObject<{
  dbName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tableName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtPipesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExtPipes'] = ResolversParentTypes['ExtPipes']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExtPipe']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Node3DWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Node3DWithCursorResponse'] = ResolversParentTypes['Node3DWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Node3D']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Node3DResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Node3D'] = ResolversParentTypes['Node3D']> = ResolversObject<{
  boundingBox?: Resolver<Maybe<ResolversTypes['BoundingBox3D']>, ParentType, ContextType>;
  depth?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subtreeSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  treeIndex?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BoundingBox3DResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BoundingBox3D'] = ResolversParentTypes['BoundingBox3D']> = ResolversObject<{
  max?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  min?: Resolver<Array<Maybe<ResolversTypes['Float']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsResponseExtPipeRunResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemsResponseExtPipeRunResponse'] = ResolversParentTypes['ItemsResponseExtPipeRunResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExtPipeRunResponse']>>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtPipeRunResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExtPipeRunResponse'] = ResolversParentTypes['ExtPipeRunResponse']> = ResolversObject<{
  createdTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Model3DResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Model3D'] = ResolversParentTypes['Model3D']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Model3DOutputResponseListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Model3DOutputResponseList'] = ResolversParentTypes['Model3DOutputResponseList']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Items27ListItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items27ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items27ListItem'] = ResolversParentTypes['Items27ListItem']> = ResolversObject<{
  blobId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  format?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Model3DWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Model3DWithCursorResponse'] = ResolversParentTypes['Model3DWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Model3D']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PagedRelationshipResponseWrapperResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PagedRelationshipResponseWrapper'] = ResolversParentTypes['PagedRelationshipResponseWrapper']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['RelationshipResponse']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RelationshipResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelationshipResponse'] = ResolversParentTypes['RelationshipResponse']> = ResolversObject<{
  confidence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Label']>>>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sourceExternalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetExternalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Revision3DResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Revision3D'] = ResolversParentTypes['Revision3D']> = ResolversObject<{
  assetMappingCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  camera?: Resolver<Maybe<ResolversTypes['RevisionCameraProperties']>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  fileId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rotation?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  thumbnailThreedFileId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  thumbnailURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RevisionCameraPropertiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RevisionCameraProperties'] = ResolversParentTypes['RevisionCameraProperties']> = ResolversObject<{
  position?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  target?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusResolvers = { QUEUED: 'Queued', PROCESSING: 'Processing', DONE: 'Done', FAILED: 'Failed' };

export type Revision3DWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Revision3DWithCursorResponse'] = ResolversParentTypes['Revision3DWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Revision3D']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RevisionLog3DResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RevisionLog3DResponse'] = ResolversParentTypes['RevisionLog3DResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['RevisionLog3D']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RevisionLog3DResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RevisionLog3D'] = ResolversParentTypes['RevisionLog3D']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  severity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SecurityCategoryWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecurityCategoryWithCursorResponse'] = ResolversParentTypes['SecurityCategoryWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['SecurityCategoryDTO']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SecurityCategoryDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecurityCategoryDTO'] = ResolversParentTypes['SecurityCategoryDTO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SequenceWithCursorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SequenceWithCursorResponse'] = ResolversParentTypes['SequenceWithCursorResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['GetSequenceDTO']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetSequenceDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetSequenceDTO'] = ResolversParentTypes['GetSequenceDTO']> = ResolversObject<{
  assetId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  columns?: Resolver<Array<Maybe<ResolversTypes['GetSequenceColumnDTO']>>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetSequenceColumnDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetSequenceColumnDTO'] = ResolversParentTypes['GetSequenceColumnDTO']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueType?: Resolver<ResolversTypes['SequenceValueTypeEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  advancedListEvents?: Resolver<Maybe<ResolversTypes['EventWithCursorResponse']>, ParentType, ContextType, RequireFields<MutationadvancedListEventsArgs, 'project'>>;
  advancedListFiles?: Resolver<Maybe<ResolversTypes['DataWithCursor']>, ParentType, ContextType, RequireFields<MutationadvancedListFilesArgs, 'fileFilterRequestInput' | 'project'>>;
  advancedListSequences?: Resolver<Maybe<ResolversTypes['SequenceWithCursorResponse']>, ParentType, ContextType, RequireFields<MutationadvancedListSequencesArgs, 'project'>>;
  aggregateAssets?: Resolver<Maybe<ResolversTypes['DataAssetAggregate']>, ParentType, ContextType, RequireFields<MutationaggregateAssetsArgs, 'project'>>;
  aggregateDataSets?: Resolver<Maybe<ResolversTypes['DataDataSetAggregate']>, ParentType, ContextType, RequireFields<MutationaggregateDataSetsArgs, 'project'>>;
  aggregateEvents?: Resolver<Maybe<ResolversTypes['AggregateResult']>, ParentType, ContextType, RequireFields<MutationaggregateEventsArgs, 'project'>>;
  aggregateFiles?: Resolver<Maybe<ResolversTypes['DataFilesAggregate']>, ParentType, ContextType, RequireFields<MutationaggregateFilesArgs, 'fileFilterInput' | 'project'>>;
  aggregateSequences?: Resolver<Maybe<ResolversTypes['SequenceAggregateResponse']>, ParentType, ContextType, RequireFields<MutationaggregateSequencesArgs, 'project'>>;
  aggregateTimeSeries?: Resolver<Maybe<ResolversTypes['TimeSeriesAggregateResponse']>, ParentType, ContextType, RequireFields<MutationaggregateTimeSeriesArgs, 'project'>>;
  alterTimeSeries?: Resolver<Maybe<ResolversTypes['DataGetTimeSeriesMetadataDTO']>, ParentType, ContextType, RequireFields<MutationalterTimeSeriesArgs, 'project' | 'timeSeriesUpdateRequestInput'>>;
  byIdsAssets?: Resolver<Maybe<ResolversTypes['DataAsset']>, ParentType, ContextType, RequireFields<MutationbyIdsAssetsArgs, 'assetDataIdsInput' | 'project'>>;
  byIdsEvents?: Resolver<Maybe<ResolversTypes['EventResponse']>, ParentType, ContextType, RequireFields<MutationbyIdsEventsArgs, 'eventDataIdsInput' | 'project'>>;
  byIdsFiles?: Resolver<Maybe<ResolversTypes['DataFileMetadata']>, ParentType, ContextType, RequireFields<MutationbyIdsFilesArgs, 'fileDataIdsWithIgnoreUnknownIdsInput' | 'project'>>;
  byidsExtPipes?: Resolver<Maybe<ResolversTypes['ExtPipes']>, ParentType, ContextType, RequireFields<MutationbyidsExtPipesArgs, 'extendedItemsRequestExtPipeIdInput' | 'project'>>;
  byidsRelationships?: Resolver<Maybe<ResolversTypes['EnrichedRelationshipResponseWrapper']>, ParentType, ContextType, RequireFields<MutationbyidsRelationshipsArgs, 'byIdsRequestInput' | 'project'>>;
  create3DMappings?: Resolver<Maybe<ResolversTypes['AssetMapping3DList']>, ParentType, ContextType, RequireFields<Mutationcreate3DMappingsArgs, 'apiV1Project3dModelRevisionMappingsInput' | 'modelId' | 'project' | 'revisionId'>>;
  create3DModels?: Resolver<Maybe<ResolversTypes['Model3DList']>, ParentType, ContextType, RequireFields<Mutationcreate3DModelsArgs, 'apiV1Project3dModelsInput' | 'project'>>;
  create3DRevisions?: Resolver<Maybe<ResolversTypes['Revision3DList']>, ParentType, ContextType, RequireFields<Mutationcreate3DRevisionsArgs, 'modelId' | 'project'>>;
  createAssets?: Resolver<Maybe<ResolversTypes['DataAsset']>, ParentType, ContextType, RequireFields<MutationcreateAssetsArgs, 'dataExternalAssetInput' | 'project'>>;
  createDBs?: Resolver<Maybe<ResolversTypes['DataRawDB']>, ParentType, ContextType, RequireFields<MutationcreateDBsArgs, 'dataRawDBInput' | 'project'>>;
  createDataSets?: Resolver<Maybe<ResolversTypes['DataSetList']>, ParentType, ContextType, RequireFields<MutationcreateDataSetsArgs, 'dataSetSpecListInput' | 'project'>>;
  createEvents?: Resolver<Maybe<ResolversTypes['EventResponse']>, ParentType, ContextType, RequireFields<MutationcreateEventsArgs, 'dataExternalEventInput' | 'project'>>;
  createExtPipes?: Resolver<Maybe<ResolversTypes['ExtPipes']>, ParentType, ContextType, RequireFields<MutationcreateExtPipesArgs, 'itemsRequestCreateExtPipeInput' | 'project'>>;
  createRelationships?: Resolver<Maybe<ResolversTypes['RelationshipResponseWrapper']>, ParentType, ContextType, RequireFields<MutationcreateRelationshipsArgs, 'project' | 'relationshipRequestWrapperInput'>>;
  createRuns?: Resolver<Maybe<ResolversTypes['ItemsResponseCreateExtPipeRunResponse']>, ParentType, ContextType, RequireFields<MutationcreateRunsArgs, 'itemsRequestExtPipeRunRequestInput' | 'project'>>;
  createSecurityCategories?: Resolver<Maybe<ResolversTypes['SecurityCategoryResponse']>, ParentType, ContextType, RequireFields<MutationcreateSecurityCategoriesArgs, 'dataSecurityCategorySpecDTOInput' | 'project'>>;
  createSequence?: Resolver<Maybe<ResolversTypes['DataGetSequence']>, ParentType, ContextType, RequireFields<MutationcreateSequenceArgs, 'dataPostSequenceInput' | 'project'>>;
  createTables?: Resolver<Maybe<ResolversTypes['DataRawDBTable']>, ParentType, ContextType, RequireFields<MutationcreateTablesArgs, 'dataRawDBTableInput' | 'dbName' | 'project'>>;
  delete3DMappings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete3DMappingsArgs, 'apiV1Project3dModelRevisionMappingsDeleteInput' | 'modelId' | 'project' | 'revisionId'>>;
  delete3DModels?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete3DModelsArgs, 'dataIdentifiersInput' | 'project'>>;
  delete3DRevisions?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationdelete3DRevisionsArgs, 'dataIdentifiersInput' | 'modelId' | 'project'>>;
  deleteAssets?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteAssetsArgs, 'deleteRequestInput' | 'project'>>;
  deleteDBs?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteDBsArgs, 'deleteRawDBInput' | 'project'>>;
  deleteDatapoints?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteDatapointsArgs, 'datapointsDeleteQueryInput' | 'project'>>;
  deleteEvents?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteEventsArgs, 'eventDataIdsInput' | 'project'>>;
  deleteExtPipes?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteExtPipesArgs, 'itemsRequestExtPipeIdInput' | 'project'>>;
  deleteFiles?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteFilesArgs, 'fileDataIdsInput' | 'project'>>;
  deleteRelationships?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteRelationshipsArgs, 'apiV1ProjectRelationshipsDeleteInput' | 'project'>>;
  deleteRows?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteRowsArgs, 'dataRawDBRowKeyInput' | 'dbName' | 'project' | 'tableName'>>;
  deleteSecurityCategories?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteSecurityCategoriesArgs, 'dataLongInput' | 'project'>>;
  deleteSequenceData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteSequenceDataArgs, 'dataSequenceDataDeleteRequestInput' | 'project'>>;
  deleteSequences?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteSequencesArgs, 'dataResourceIdsWithIgnoreUnknownIdsInput' | 'project'>>;
  deleteTables?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteTablesArgs, 'dataRawDBTableInput' | 'dbName' | 'project'>>;
  deleteTimeSeries?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationdeleteTimeSeriesArgs, 'project' | 'timeSeriesLookupByIdInput'>>;
  diagramConvert?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextDiagramConvert2']>, ParentType, ContextType, RequireFields<MutationdiagramConvertArgs, 'project'>>;
  diagramDetect?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextDiagramDetect2']>, ParentType, ContextType, RequireFields<MutationdiagramDetectArgs, 'project'>>;
  downloadLinks?: Resolver<Maybe<ResolversTypes['ApiV1ProjectFilesDownloadlink']>, ParentType, ContextType, RequireFields<MutationdownloadLinksArgs, 'fileLinkIdsInput' | 'project'>>;
  entityMatchingCreate?: Resolver<Maybe<ResolversTypes['EntityMatcherResponseSchema']>, ParentType, ContextType, RequireFields<MutationentityMatchingCreateArgs, 'project'>>;
  entityMatchingDelete?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationentityMatchingDeleteArgs, 'project'>>;
  entityMatchingFilter?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatchingList2']>, ParentType, ContextType, RequireFields<MutationentityMatchingFilterArgs, 'project'>>;
  entityMatchingPredict?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatchingPredict']>, ParentType, ContextType, RequireFields<MutationentityMatchingPredictArgs, 'project'>>;
  entityMatchingReFit?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatchingRefit']>, ParentType, ContextType, RequireFields<MutationentityMatchingReFitArgs, 'project'>>;
  entityMatchingRetrieve?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatchingByids2']>, ParentType, ContextType, RequireFields<MutationentityMatchingRetrieveArgs, 'project'>>;
  entityMatchingUpdate?: Resolver<Maybe<ResolversTypes['ApiV1ProjectContextEntitymatchingUpdate2']>, ParentType, ContextType, RequireFields<MutationentityMatchingUpdateArgs, 'project'>>;
  filter3DAssetMappings?: Resolver<Maybe<ResolversTypes['AssetMapping3DWithCursorResponse']>, ParentType, ContextType, RequireFields<Mutationfilter3DAssetMappingsArgs, 'modelId' | 'project' | 'revisionId'>>;
  filter3DNodes?: Resolver<Maybe<ResolversTypes['Node3DWithCursorResponse']>, ParentType, ContextType, RequireFields<Mutationfilter3DNodesArgs, 'modelId' | 'node3DFilterBodyInput' | 'project' | 'revisionId'>>;
  filterExtPipes?: Resolver<Maybe<ResolversTypes['ExtPipes']>, ParentType, ContextType, RequireFields<MutationfilterExtPipesArgs, 'extPipesFilterRequestInput' | 'project'>>;
  filterRuns?: Resolver<Maybe<ResolversTypes['ItemsResponseExtPipeRunResponse']>, ParentType, ContextType, RequireFields<MutationfilterRunsArgs, 'project' | 'runsFilterRequestInput'>>;
  get3DNodesById?: Resolver<Maybe<ResolversTypes['Node3DList']>, ParentType, ContextType, RequireFields<Mutationget3DNodesByIdArgs, 'modelId' | 'node3DIdsInput' | 'project' | 'revisionId'>>;
  getDataSets?: Resolver<Maybe<ResolversTypes['DataSetList']>, ParentType, ContextType, RequireFields<MutationgetDataSetsArgs, 'project'>>;
  getLatest?: Resolver<Maybe<ResolversTypes['DatapointsResponse']>, ParentType, ContextType, RequireFields<MutationgetLatestArgs, 'datapointsLatestQueryInput' | 'project'>>;
  getLatestSequenceRow?: Resolver<Maybe<ResolversTypes['SequenceGetData']>, ParentType, ContextType, RequireFields<MutationgetLatestSequenceRowArgs, 'project' | 'sequenceLatestDataRequestInput'>>;
  getMultiTimeSeriesDatapoints?: Resolver<Maybe<ResolversTypes['DatapointsOrAggregatesResponse']>, ParentType, ContextType, RequireFields<MutationgetMultiTimeSeriesDatapointsArgs, 'datapointsMultiQueryInput' | 'project'>>;
  getSequenceById?: Resolver<Maybe<ResolversTypes['DataGetSequence']>, ParentType, ContextType, RequireFields<MutationgetSequenceByIdArgs, 'dataResourceIdsWithIgnoreUnknownIdsInput' | 'project'>>;
  getSequenceData?: Resolver<Maybe<ResolversTypes['SequenceGetDataWithCursor']>, ParentType, ContextType, RequireFields<MutationgetSequenceDataArgs, 'project' | 'sequenceDataRequestInput'>>;
  getTimeSeriesByIds?: Resolver<Maybe<ResolversTypes['DataGetTimeSeriesMetadataDTO']>, ParentType, ContextType, RequireFields<MutationgetTimeSeriesByIdsArgs, 'project' | 'timeSeriesLookupByIdInput'>>;
  initFileUpload?: Resolver<Maybe<ResolversTypes['ApiV1ProjectFiles']>, ParentType, ContextType, RequireFields<MutationinitFileUploadArgs, 'externalFilesMetadataInput' | 'project'>>;
  listAssets?: Resolver<Maybe<ResolversTypes['DataWithCursorAsset']>, ParentType, ContextType, RequireFields<MutationlistAssetsArgs, 'project'>>;
  listDataSets?: Resolver<Maybe<ResolversTypes['DataSetListWithCursor']>, ParentType, ContextType, RequireFields<MutationlistDataSetsArgs, 'project'>>;
  listRelationships?: Resolver<Maybe<ResolversTypes['PagedEnrichedRelationshipResponseWrapper']>, ParentType, ContextType, RequireFields<MutationlistRelationshipsArgs, 'project' | 'relationshipsAdvancedListRequestInput'>>;
  listTimeSeries?: Resolver<Maybe<ResolversTypes['DataWithCursorGetTimeSeriesMetadataDTO']>, ParentType, ContextType, RequireFields<MutationlistTimeSeriesArgs, 'project'>>;
  postMultiTimeSeriesDatapoints?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationpostMultiTimeSeriesDatapointsArgs, 'datapointsInsertQueryInput' | 'project'>>;
  postRows?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationpostRowsArgs, 'dataRawDBRowInput' | 'dbName' | 'project' | 'tableName'>>;
  postSequenceData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationpostSequenceDataArgs, 'dataSequencePostDataInput' | 'project'>>;
  postTimeSeries?: Resolver<Maybe<ResolversTypes['DataGetTimeSeriesMetadataDTO']>, ParentType, ContextType, RequireFields<MutationpostTimeSeriesArgs, 'project' | 'timeSeriesCreateRequestInput'>>;
  querySyntheticTimeseries?: Resolver<Maybe<ResolversTypes['SyntheticQueryResponses']>, ParentType, ContextType, RequireFields<MutationquerySyntheticTimeseriesArgs, 'project' | 'syntheticMultiQueryInput'>>;
  searchAssets?: Resolver<Maybe<ResolversTypes['DataAsset']>, ParentType, ContextType, RequireFields<MutationsearchAssetsArgs, 'assetSearchFilterInput' | 'project'>>;
  searchEvents?: Resolver<Maybe<ResolversTypes['EventResponse']>, ParentType, ContextType, RequireFields<MutationsearchEventsArgs, 'project'>>;
  searchFiles?: Resolver<Maybe<ResolversTypes['DataFileMetadata']>, ParentType, ContextType, RequireFields<MutationsearchFilesArgs, 'project'>>;
  searchSequences?: Resolver<Maybe<ResolversTypes['DataGetSequence']>, ParentType, ContextType, RequireFields<MutationsearchSequencesArgs, 'project'>>;
  searchTimeSeries?: Resolver<Maybe<ResolversTypes['DataGetTimeSeriesMetadataDTO']>, ParentType, ContextType, RequireFields<MutationsearchTimeSeriesArgs, 'project'>>;
  update3DModels?: Resolver<Maybe<ResolversTypes['Model3DList']>, ParentType, ContextType, RequireFields<Mutationupdate3DModelsArgs, 'apiV1Project3dModelsUpdateInput' | 'project'>>;
  update3DRevisions?: Resolver<Maybe<ResolversTypes['Revision3DList']>, ParentType, ContextType, RequireFields<Mutationupdate3DRevisionsArgs, 'modelId' | 'project'>>;
  updateAssets?: Resolver<Maybe<ResolversTypes['DataAsset']>, ParentType, ContextType, RequireFields<MutationupdateAssetsArgs, 'dataAssetChangeInput' | 'project'>>;
  updateDataSets?: Resolver<Maybe<ResolversTypes['DataSetList']>, ParentType, ContextType, RequireFields<MutationupdateDataSetsArgs, 'dataSetUpdateListInput' | 'project'>>;
  updateEvents?: Resolver<Maybe<ResolversTypes['EventResponse']>, ParentType, ContextType, RequireFields<MutationupdateEventsArgs, 'dataEventChangeInput' | 'project'>>;
  updateExtPipes?: Resolver<Maybe<ResolversTypes['ExtPipes']>, ParentType, ContextType, RequireFields<MutationupdateExtPipesArgs, 'itemsRequestExtPipeUpdateInput' | 'project'>>;
  updateFiles?: Resolver<Maybe<ResolversTypes['DataFileMetadata']>, ParentType, ContextType, RequireFields<MutationupdateFilesArgs, 'dataFileChangeInput' | 'project'>>;
  updateRelationships?: Resolver<Maybe<ResolversTypes['RelationshipResponseWrapper']>, ParentType, ContextType, RequireFields<MutationupdateRelationshipsArgs, 'project' | 'updateRelationshipWrapperInput'>>;
  updateSequences?: Resolver<Maybe<ResolversTypes['DataGetSequence']>, ParentType, ContextType, RequireFields<MutationupdateSequencesArgs, 'dataSequenceChangeInput' | 'project'>>;
  updateThumbnail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationupdateThumbnailArgs, 'modelId' | 'project' | 'revisionId'>>;
}>;

export type DataAssetAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataAssetAggregate'] = ResolversParentTypes['DataAssetAggregate']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['AssetAggregate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetAggregate'] = ResolversParentTypes['AssetAggregate']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataDataSetAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataDataSetAggregate'] = ResolversParentTypes['DataDataSetAggregate']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['DataSetAggregate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataSetAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataSetAggregate'] = ResolversParentTypes['DataSetAggregate']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AggregateResult'] = ResolversParentTypes['AggregateResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CountAggregateResult' | 'ValuesAggregateResult', ParentType, ContextType>;
}>;

export type CountAggregateResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CountAggregateResult'] = ResolversParentTypes['CountAggregateResult']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Items8ListItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items8ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items8ListItem'] = ResolversParentTypes['Items8ListItem']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValuesAggregateResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValuesAggregateResult'] = ResolversParentTypes['ValuesAggregateResult']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Items9ListItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items9ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items9ListItem'] = ResolversParentTypes['Items9ListItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'StringValue' | 'IntegerValue', ParentType, ContextType>;
}>;

export type StringValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StringValue'] = ResolversParentTypes['StringValue']> = ResolversObject<{
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IntegerValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IntegerValue'] = ResolversParentTypes['IntegerValue']> = ResolversObject<{
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataFilesAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataFilesAggregate'] = ResolversParentTypes['DataFilesAggregate']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['FilesAggregate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FilesAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FilesAggregate'] = ResolversParentTypes['FilesAggregate']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SequenceAggregateResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SequenceAggregateResponse'] = ResolversParentTypes['SequenceAggregateResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Items63ListItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items63ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items63ListItem'] = ResolversParentTypes['Items63ListItem']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeSeriesAggregateResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TimeSeriesAggregateResponse'] = ResolversParentTypes['TimeSeriesAggregateResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Items37ListItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items37ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items37ListItem'] = ResolversParentTypes['Items37ListItem']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataGetTimeSeriesMetadataDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataGetTimeSeriesMetadataDTO'] = ResolversParentTypes['DataGetTimeSeriesMetadataDTO']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['GetTimeSeriesMetadataDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataAssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataAsset'] = ResolversParentTypes['DataAsset']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Asset']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregatedPropertyResolvers = { CHILDCOUNT: 'childCount', PATH: 'path', DEPTH: 'depth' };

export type EventResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EventResponse'] = ResolversParentTypes['EventResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataFileMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataFileMetadata'] = ResolversParentTypes['DataFileMetadata']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilesMetadata']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnrichedRelationshipResponseWrapperResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnrichedRelationshipResponseWrapper'] = ResolversParentTypes['EnrichedRelationshipResponseWrapper']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['EnrichedRelationshipResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EnrichedRelationshipResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EnrichedRelationshipResponse'] = ResolversParentTypes['EnrichedRelationshipResponse']> = ResolversObject<{
  confidence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Label']>>>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['Source3']>, ParentType, ContextType>;
  sourceExternalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['Target2']>, ParentType, ContextType>;
  targetExternalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Source3Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Source3'] = ResolversParentTypes['Source3']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GetSequenceDTO' | 'GetTimeSeriesMetadataDTO', ParentType, ContextType>;
}>;

export type Target2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Target2'] = ResolversParentTypes['Target2']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GetSequenceDTO' | 'GetTimeSeriesMetadataDTO', ParentType, ContextType>;
}>;

export type AssetMapping3DListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetMapping3DList'] = ResolversParentTypes['AssetMapping3DList']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['AssetMapping3D']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Model3DListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Model3DList'] = ResolversParentTypes['Model3DList']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Model3D']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Revision3DListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Revision3DList'] = ResolversParentTypes['Revision3DList']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Revision3D']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataRawDBResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataRawDB'] = ResolversParentTypes['DataRawDB']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['RawDB']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataSetListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataSetList'] = ResolversParentTypes['DataSetList']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['DataSet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataSet'] = ResolversParentTypes['DataSet']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  writeProtected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RelationshipResponseWrapperResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelationshipResponseWrapper'] = ResolversParentTypes['RelationshipResponseWrapper']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['RelationshipResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsResponseCreateExtPipeRunResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemsResponseCreateExtPipeRunResponse'] = ResolversParentTypes['ItemsResponseCreateExtPipeRunResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CreateExtPipeRunResponse']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateExtPipeRunResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateExtPipeRunResponse'] = ResolversParentTypes['CreateExtPipeRunResponse']> = ResolversObject<{
  createdTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExtPipeRunStatusResolvers = { SUCCESS: 'success', FAILURE: 'failure', SEEN: 'seen' };

export type SecurityCategoryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SecurityCategoryResponse'] = ResolversParentTypes['SecurityCategoryResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SecurityCategoryDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataGetSequenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataGetSequence'] = ResolversParentTypes['DataGetSequence']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['GetSequenceDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataRawDBTableResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataRawDBTable'] = ResolversParentTypes['DataRawDBTable']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['RawDBTable']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextDiagramConvert2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextDiagramConvert2'] = ResolversParentTypes['ApiV1ProjectContextDiagramConvert2']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  grayscale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextDiagramDetect2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextDiagramDetect2'] = ResolversParentTypes['ApiV1ProjectContextDiagramDetect2']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minTokens?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  partialMatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  searchField?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectFilesDownloadlinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectFilesDownloadlink'] = ResolversParentTypes['ApiV1ProjectFilesDownloadlink']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items16ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items16ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items16ListItem'] = ResolversParentTypes['Items16ListItem']> = ResolversObject<{
  __resolveType: TypeResolveFn<'FileInternalId' | 'FileExternalId', ParentType, ContextType>;
}>;

export type FileInternalIdResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FileInternalId'] = ResolversParentTypes['FileInternalId']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileExternalIdResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FileExternalId'] = ResolversParentTypes['FileExternalId']> = ResolversObject<{
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Classifier2Resolvers = { RANDOMFOREST: 'randomforest', DECISIONTREE: 'decisiontree', LOGISTICREGRESSION: 'logisticregression', AUGMENTEDLOGISTICREGRESSION: 'augmentedlogisticregression', AUGMENTEDRANDOMFOREST: 'augmentedrandomforest' };

export type ApiV1ProjectContextEntitymatchingList2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatchingList2'] = ResolversParentTypes['ApiV1ProjectContextEntitymatchingList2']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['EntityMatcherResponseSchema']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatchingPredictResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatchingPredict'] = ResolversParentTypes['ApiV1ProjectContextEntitymatchingPredict']> = ResolversObject<{
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  jobId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatchingRefitResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatchingRefit'] = ResolversParentTypes['ApiV1ProjectContextEntitymatchingRefit']> = ResolversObject<{
  classifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  featureType?: Resolver<ResolversTypes['FeatureType'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ignoreMissingFields?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  matchFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['MatchFieldsListItem']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['JobStatus'], ParentType, ContextType>;
  statusTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatchingByids2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatchingByids2'] = ResolversParentTypes['ApiV1ProjectContextEntitymatchingByids2']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['EntityMatcherResponseSchema']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectContextEntitymatchingUpdate2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectContextEntitymatchingUpdate2'] = ResolversParentTypes['ApiV1ProjectContextEntitymatchingUpdate2']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['EntityMatcherResponseSchema']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Node3DListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Node3DList'] = ResolversParentTypes['Node3DList']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['Node3D']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DatapointsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DatapointsResponse'] = ResolversParentTypes['DatapointsResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SequenceGetDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SequenceGetData'] = ResolversParentTypes['SequenceGetData']> = ResolversObject<{
  columns?: Resolver<Array<Maybe<ResolversTypes['BasicGetSequenceColumnInfo']>>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<Maybe<ResolversTypes['SequenceRowDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasicGetSequenceColumnInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BasicGetSequenceColumnInfo'] = ResolversParentTypes['BasicGetSequenceColumnInfo']> = ResolversObject<{
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  valueType?: Resolver<Maybe<ResolversTypes['SequenceValueTypeEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SequenceRowDTOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SequenceRowDTO'] = ResolversParentTypes['SequenceRowDTO']> = ResolversObject<{
  rowNumber?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  values?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DatapointsOrAggregatesResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DatapointsOrAggregatesResponse'] = ResolversParentTypes['DatapointsOrAggregatesResponse']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['JSON']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateResolvers = { AVERAGE: 'average', MAX: 'max', MIN: 'min', COUNT: 'count', SUM: 'sum', INTERPOLATION: 'interpolation', STEPINTERPOLATION: 'stepInterpolation', TOTALVARIATION: 'totalVariation', CONTINUOUSVARIANCE: 'continuousVariance', DISCRETEVARIANCE: 'discreteVariance' };

export type SequenceGetDataWithCursorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SequenceGetDataWithCursor'] = ResolversParentTypes['SequenceGetDataWithCursor']> = ResolversObject<{
  columns?: Resolver<Array<Maybe<ResolversTypes['BasicGetSequenceColumnInfo']>>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rows?: Resolver<Array<Maybe<ResolversTypes['SequenceRowDTO']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiV1ProjectFilesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ApiV1ProjectFiles'] = ResolversParentTypes['ApiV1ProjectFiles']> = ResolversObject<{
  assetIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dataSetId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  directory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  externalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoLocation?: Resolver<Maybe<ResolversTypes['GeoLocation']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<Maybe<ResolversTypes['Label']>>>, ParentType, ContextType>;
  lastUpdatedTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  securityCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceCreatedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sourceModifiedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uploadUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uploaded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  uploadedTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DataSetListWithCursorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataSetListWithCursor'] = ResolversParentTypes['DataSetListWithCursor']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['DataSet']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PagedEnrichedRelationshipResponseWrapperResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PagedEnrichedRelationshipResponseWrapper'] = ResolversParentTypes['PagedEnrichedRelationshipResponseWrapper']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['EnrichedRelationshipResponse']>>, ParentType, ContextType>;
  nextCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTypeResolvers = { ASSET: 'asset', TIMESERIES: 'timeSeries', FILE: 'file', EVENT: 'event', SEQUENCE: 'sequence' };

export type SyntheticQueryResponsesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SyntheticQueryResponses'] = ResolversParentTypes['SyntheticQueryResponses']> = ResolversObject<{
  items?: Resolver<Array<Maybe<ResolversTypes['SyntheticQueryResponse']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyntheticQueryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SyntheticQueryResponse'] = ResolversParentTypes['SyntheticQueryResponse']> = ResolversObject<{
  datapoints?: Resolver<Array<Maybe<ResolversTypes['SyntheticDataPoint']>>, ParentType, ContextType>;
  isString?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyntheticDataPointResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SyntheticDataPoint'] = ResolversParentTypes['SyntheticDataPoint']> = ResolversObject<{
  __resolveType: TypeResolveFn<'SyntheticDataValue' | 'SyntheticDataError', ParentType, ContextType>;
}>;

export type SyntheticDataValueResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SyntheticDataValue'] = ResolversParentTypes['SyntheticDataValue']> = ResolversObject<{
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyntheticDataErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SyntheticDataError'] = ResolversParentTypes['SyntheticDataError']> = ResolversObject<{
  error?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ApiV1ProjectContextDiagramConvert3?: ApiV1ProjectContextDiagramConvert3Resolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JobStatus?: JobStatusResolvers;
  ApiV1ProjectContextDiagramDetect3?: ApiV1ProjectContextDiagramDetect3Resolvers<ContextType>;
  ApiV1ProjectContextEntitymatching?: ApiV1ProjectContextEntitymatchingResolvers<ContextType>;
  EntityMatcherResponseSchema?: EntityMatcherResponseSchemaResolvers<ContextType>;
  FeatureType?: FeatureTypeResolvers;
  MatchFieldsListItem?: MatchFieldsListItemResolvers<ContextType>;
  ApiV1ProjectContextEntitymatching3?: ApiV1ProjectContextEntitymatching3Resolvers<ContextType>;
  ApiV1ProjectContextEntitymatchingJob?: ApiV1ProjectContextEntitymatchingJobResolvers<ContextType>;
  Items75ListItem?: Items75ListItemResolvers<ContextType>;
  MatchesListItem?: MatchesListItemResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AggregateResultItem?: AggregateResultItemResolvers<ContextType>;
  AssetIdentifier?: AssetIdentifierResolvers<ContextType>;
  Label?: LabelResolvers<ContextType>;
  AssetMapping3DWithCursorResponse?: AssetMapping3DWithCursorResponseResolvers<ContextType>;
  AssetMapping3D?: AssetMapping3DResolvers<ContextType>;
  DataRawDBTableCursors?: DataRawDBTableCursorsResolvers<ContextType>;
  DataWithCursor?: DataWithCursorResolvers<ContextType>;
  FilesMetadata?: FilesMetadataResolvers<ContextType>;
  GeoLocation?: GeoLocationResolvers<ContextType>;
  Type?: TypeResolvers;
  DataWithCursorAsset?: DataWithCursorAssetResolvers<ContextType>;
  DataWithCursorGetTimeSeriesMetadataDTO?: DataWithCursorGetTimeSeriesMetadataDTOResolvers<ContextType>;
  GetTimeSeriesMetadataDTO?: GetTimeSeriesMetadataDTOResolvers<ContextType>;
  DataWithCursorRawDB?: DataWithCursorRawDBResolvers<ContextType>;
  RawDB?: RawDBResolvers<ContextType>;
  DataWithCursorRawDBRow?: DataWithCursorRawDBRowResolvers<ContextType>;
  RawDBRow?: RawDBRowResolvers<ContextType>;
  DataWithCursorRawDBTable?: DataWithCursorRawDBTableResolvers<ContextType>;
  RawDBTable?: RawDBTableResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventWithCursorResponse?: EventWithCursorResponseResolvers<ContextType>;
  ExtPipe?: ExtPipeResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  RawTable?: RawTableResolvers<ContextType>;
  ExtPipes?: ExtPipesResolvers<ContextType>;
  Node3DWithCursorResponse?: Node3DWithCursorResponseResolvers<ContextType>;
  Node3D?: Node3DResolvers<ContextType>;
  BoundingBox3D?: BoundingBox3DResolvers<ContextType>;
  ItemsResponseExtPipeRunResponse?: ItemsResponseExtPipeRunResponseResolvers<ContextType>;
  ExtPipeRunResponse?: ExtPipeRunResponseResolvers<ContextType>;
  Model3D?: Model3DResolvers<ContextType>;
  Model3DOutputResponseList?: Model3DOutputResponseListResolvers<ContextType>;
  Items27ListItem?: Items27ListItemResolvers<ContextType>;
  Model3DWithCursorResponse?: Model3DWithCursorResponseResolvers<ContextType>;
  PagedRelationshipResponseWrapper?: PagedRelationshipResponseWrapperResolvers<ContextType>;
  RelationshipResponse?: RelationshipResponseResolvers<ContextType>;
  Revision3D?: Revision3DResolvers<ContextType>;
  RevisionCameraProperties?: RevisionCameraPropertiesResolvers<ContextType>;
  Status?: StatusResolvers;
  Revision3DWithCursorResponse?: Revision3DWithCursorResponseResolvers<ContextType>;
  RevisionLog3DResponse?: RevisionLog3DResponseResolvers<ContextType>;
  RevisionLog3D?: RevisionLog3DResolvers<ContextType>;
  SecurityCategoryWithCursorResponse?: SecurityCategoryWithCursorResponseResolvers<ContextType>;
  SecurityCategoryDTO?: SecurityCategoryDTOResolvers<ContextType>;
  SequenceWithCursorResponse?: SequenceWithCursorResponseResolvers<ContextType>;
  GetSequenceDTO?: GetSequenceDTOResolvers<ContextType>;
  GetSequenceColumnDTO?: GetSequenceColumnDTOResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  DataAssetAggregate?: DataAssetAggregateResolvers<ContextType>;
  AssetAggregate?: AssetAggregateResolvers<ContextType>;
  DataDataSetAggregate?: DataDataSetAggregateResolvers<ContextType>;
  DataSetAggregate?: DataSetAggregateResolvers<ContextType>;
  AggregateResult?: AggregateResultResolvers<ContextType>;
  CountAggregateResult?: CountAggregateResultResolvers<ContextType>;
  Items8ListItem?: Items8ListItemResolvers<ContextType>;
  ValuesAggregateResult?: ValuesAggregateResultResolvers<ContextType>;
  Items9ListItem?: Items9ListItemResolvers<ContextType>;
  StringValue?: StringValueResolvers<ContextType>;
  IntegerValue?: IntegerValueResolvers<ContextType>;
  DataFilesAggregate?: DataFilesAggregateResolvers<ContextType>;
  FilesAggregate?: FilesAggregateResolvers<ContextType>;
  SequenceAggregateResponse?: SequenceAggregateResponseResolvers<ContextType>;
  Items63ListItem?: Items63ListItemResolvers<ContextType>;
  TimeSeriesAggregateResponse?: TimeSeriesAggregateResponseResolvers<ContextType>;
  Items37ListItem?: Items37ListItemResolvers<ContextType>;
  DataGetTimeSeriesMetadataDTO?: DataGetTimeSeriesMetadataDTOResolvers<ContextType>;
  DataAsset?: DataAssetResolvers<ContextType>;
  AggregatedProperty?: AggregatedPropertyResolvers;
  EventResponse?: EventResponseResolvers<ContextType>;
  DataFileMetadata?: DataFileMetadataResolvers<ContextType>;
  EnrichedRelationshipResponseWrapper?: EnrichedRelationshipResponseWrapperResolvers<ContextType>;
  EnrichedRelationshipResponse?: EnrichedRelationshipResponseResolvers<ContextType>;
  Source3?: Source3Resolvers<ContextType>;
  Target2?: Target2Resolvers<ContextType>;
  AssetMapping3DList?: AssetMapping3DListResolvers<ContextType>;
  Model3DList?: Model3DListResolvers<ContextType>;
  Revision3DList?: Revision3DListResolvers<ContextType>;
  DataRawDB?: DataRawDBResolvers<ContextType>;
  DataSetList?: DataSetListResolvers<ContextType>;
  DataSet?: DataSetResolvers<ContextType>;
  RelationshipResponseWrapper?: RelationshipResponseWrapperResolvers<ContextType>;
  ItemsResponseCreateExtPipeRunResponse?: ItemsResponseCreateExtPipeRunResponseResolvers<ContextType>;
  CreateExtPipeRunResponse?: CreateExtPipeRunResponseResolvers<ContextType>;
  ExtPipeRunStatus?: ExtPipeRunStatusResolvers;
  SecurityCategoryResponse?: SecurityCategoryResponseResolvers<ContextType>;
  DataGetSequence?: DataGetSequenceResolvers<ContextType>;
  DataRawDBTable?: DataRawDBTableResolvers<ContextType>;
  ApiV1ProjectContextDiagramConvert2?: ApiV1ProjectContextDiagramConvert2Resolvers<ContextType>;
  ApiV1ProjectContextDiagramDetect2?: ApiV1ProjectContextDiagramDetect2Resolvers<ContextType>;
  ApiV1ProjectFilesDownloadlink?: ApiV1ProjectFilesDownloadlinkResolvers<ContextType>;
  Items16ListItem?: Items16ListItemResolvers<ContextType>;
  FileInternalId?: FileInternalIdResolvers<ContextType>;
  FileExternalId?: FileExternalIdResolvers<ContextType>;
  Classifier2?: Classifier2Resolvers;
  ApiV1ProjectContextEntitymatchingList2?: ApiV1ProjectContextEntitymatchingList2Resolvers<ContextType>;
  ApiV1ProjectContextEntitymatchingPredict?: ApiV1ProjectContextEntitymatchingPredictResolvers<ContextType>;
  ApiV1ProjectContextEntitymatchingRefit?: ApiV1ProjectContextEntitymatchingRefitResolvers<ContextType>;
  ApiV1ProjectContextEntitymatchingByids2?: ApiV1ProjectContextEntitymatchingByids2Resolvers<ContextType>;
  ApiV1ProjectContextEntitymatchingUpdate2?: ApiV1ProjectContextEntitymatchingUpdate2Resolvers<ContextType>;
  Node3DList?: Node3DListResolvers<ContextType>;
  DatapointsResponse?: DatapointsResponseResolvers<ContextType>;
  SequenceGetData?: SequenceGetDataResolvers<ContextType>;
  BasicGetSequenceColumnInfo?: BasicGetSequenceColumnInfoResolvers<ContextType>;
  SequenceRowDTO?: SequenceRowDTOResolvers<ContextType>;
  DatapointsOrAggregatesResponse?: DatapointsOrAggregatesResponseResolvers<ContextType>;
  Aggregate?: AggregateResolvers;
  SequenceGetDataWithCursor?: SequenceGetDataWithCursorResolvers<ContextType>;
  ApiV1ProjectFiles?: ApiV1ProjectFilesResolvers<ContextType>;
  DataSetListWithCursor?: DataSetListWithCursorResolvers<ContextType>;
  PagedEnrichedRelationshipResponseWrapper?: PagedEnrichedRelationshipResponseWrapperResolvers<ContextType>;
  ResourceType?: ResourceTypeResolvers;
  SyntheticQueryResponses?: SyntheticQueryResponsesResolvers<ContextType>;
  SyntheticQueryResponse?: SyntheticQueryResponseResolvers<ContextType>;
  SyntheticDataPoint?: SyntheticDataPointResolvers<ContextType>;
  SyntheticDataValue?: SyntheticDataValueResolvers<ContextType>;
  SyntheticDataError?: SyntheticDataErrorResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace MyOpenapiApiTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  /**
   * Retrieve the contents of a 3D file.
   *
   * This endpoint supported tag-based caching.
   *
   * This endpoint is only compatible with 3D file IDs from the 3D API, and not compatible with
   * file IDs from the Files API.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/files/{threedFileId}
   */
  apiV1Project3dFile?: Maybe<Scalars['String']>;
  /**
   * Get the results for converting an engineering diagram to SVG and PNG formats.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/diagram/convert/{jobId}
   */
  apiV1ProjectContextDiagramConvert3?: Maybe<ApiV1ProjectContextDiagramConvert3>;
  /**
   * Get the results from an engineering diagram detect job.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/diagram/detect/{jobId}
   */
  apiV1ProjectContextDiagramDetect3?: Maybe<ApiV1ProjectContextDiagramDetect3>;
  /**
   * List all available entity matching models.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/entitymatching/
   */
  apiV1ProjectContextEntitymatching?: Maybe<ApiV1ProjectContextEntitymatching>;
  /**
   * Shows the status of the model. If the status is completed, shows the parameters used to train the model.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/entitymatching/{id}
   */
  apiV1ProjectContextEntitymatching3?: Maybe<ApiV1ProjectContextEntitymatching3>;
  /**
   * Get the results from a predict job.
   *
   * Equivalent to GET /api/v1/projects/{project}/context/entitymatching/jobs/{jobId}
   */
  apiV1ProjectContextEntitymatchingJob?: Maybe<ApiV1ProjectContextEntitymatchingJob>;
  /**
   * The GET /files/icon operation can be used to get an image representation of a file.
   *
   * Either id or externalId must be provided as a query parameter (but not both).
   * Supported file formats:
   * - Normal jpeg and png files are currently fully supported.
   * - Other image file formats might work, but continued support for these are not guaranteed.
   * - Currently only supporting thumbnails for image files.
   * Attempts to get icon for unsupported files will result in status 400.
   *
   * Equivalent to GET /api/v1/projects/{project}/files/icon
   */
  apiV1ProjectFilesIcon?: Maybe<Scalars['String']>;
  /**
   * Retrieve an asset by its ID. If you want to retrieve assets by externalIds, use Retrieve assets instead.
   *
   * Equivalent to GET /api/v1/projects/{project}/assets/{id}
   */
  asset?: Maybe<Asset>;
  /**
   * List all asset mappings
   *
   *
   * Asset references obtained from a mapping - through asset ids - may be
   * invalid, simply by the non-transactional nature of HTTP.
   * They are NOT maintained by any means from CDF, meaning they will be stored until the
   * reference is removed through the delete endpoint of 3d asset mappings.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings
   */
  assetMapping3DWithCursorResponse?: Maybe<AssetMapping3DWithCursorResponse>;
  /**
   * Retrieve cursors based on the last updated time range. Normally this endpoint is used for reading in parallel.
   *
   * Each cursor should be supplied as the 'cursor' query parameter on GET requests to [Read Rows](#operation/getRows).
   * **Note** that the 'minLastUpdatedTime' and the 'maxLastUpdatedTime' query parameter on [Read Rows](#operation/getRows) are ignored when a cursor is specified.
   *
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/cursors
   */
  dataRawDBTableCursors?: Maybe<DataRawDBTableCursors>;
  /**
   * The GET /files operation can be used to return information for all files in a project.
   *
   * Optionally you can add one or more of the following query parameters.
   * The filter query parameters will filter the results to only include files that match all filter parameters.
   *
   * Equivalent to GET /api/v1/projects/{project}/files
   */
  dataWithCursor?: Maybe<DataWithCursor>;
  /**
   * List all assets, or only the assets matching the specified query.
   *
   * Equivalent to GET /api/v1/projects/{project}/assets
   */
  dataWithCursorAsset?: Maybe<DataWithCursorAsset>;
  /**
   * List time series. Use nextCursor to paginate through the results.
   *
   * Equivalent to GET /api/v1/projects/{project}/timeseries
   */
  dataWithCursorGetTimeSeriesMetadataDTO?: Maybe<DataWithCursorGetTimeSeriesMetadataDTO>;
  /**
   * List databases
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs
   */
  dataWithCursorRawDB?: Maybe<DataWithCursorRawDB>;
  /**
   * Retrieve rows from a table
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows
   */
  dataWithCursorRawDBRow?: Maybe<DataWithCursorRawDBRow>;
  /**
   * List tables in a database
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables
   */
  dataWithCursorRawDBTable?: Maybe<DataWithCursorRawDBTable>;
  /**
   * Receive event by ID
   *
   * Equivalent to GET /api/v1/projects/{project}/events/{id}
   */
  event?: Maybe<Event>;
  /**
   * List events optionally filtered on query parameters
   *
   * Equivalent to GET /api/v1/projects/{project}/events
   */
  eventWithCursorResponse?: Maybe<EventWithCursorResponse>;
  /**
   * Retrieve an extraction pipeline by its ID. If you want to retrieve extraction pipelines by externalIds, use Retrieve extraction pipelines instead.
   *
   * Equivalent to GET /api/v1/projects/{project}/extpipes/{id}
   */
  extPipe?: Maybe<ExtPipe>;
  /**
   * Returns a list of all extraction pipelines for a given project
   *
   * Equivalent to GET /api/v1/projects/{project}/extpipes
   */
  extPipes?: Maybe<ExtPipes>;
  /**
   * Returns file info for the file ID
   *
   * Equivalent to GET /api/v1/projects/{project}/files/{id}
   */
  filesMetadata?: Maybe<FilesMetadata>;
  /**
   * Retrieves a list of ancestor nodes of a given node, including itself, in the hierarchy of the 3D model. This operation supports pagination.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/{nodeId}/ancestors
   */
  get3DNodeAncestors?: Maybe<Node3DWithCursorResponse>;
  /**
   * List of all extraction pipeline runs for a given extraction pipeline. Sorted by createdTime value with descendant order.
   *
   * Equivalent to GET /api/v1/projects/{project}/extpipes/runs
   */
  itemsResponseExtPipeRunResponse?: Maybe<ItemsResponseExtPipeRunResponse>;
  /**
   * Retrieve a 3D model
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}
   */
  model3D?: Maybe<Model3D>;
  /**
   * Retrieve a list of available outputs for a processed 3D model. An output can be a format that can be consumed by a viewer (e.g. Reveal) or import in external tools. Each of the outputs will have an associated version which is used to identify the version of output format (not the revision of the processed output). Note that the structure of the outputs will vary and is not covered here.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/outputs
   */
  model3DOutputResponseList?: Maybe<Model3DOutputResponseList>;
  /**
   * Retrieves a list of all models in a project. This operation supports pagination. You can filter out all models without a published revision.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models
   */
  model3DWithCursorResponse?: Maybe<Model3DWithCursorResponse>;
  /**
   * Retrieves a list of nodes from the hierarchy in the 3D model. You can also request a specific subtree with the 'nodeId' query parameter and limit the depth of the resulting subtree with the 'depth' query parameter. By default, nodes are returned in order of ascending treeIndex. We suggest trying to set the query parameter `sortByNodeId` to `true` to check whether it makes your use case faster. The `partition` parameter can only be used if `sortByNodeId` is set to `true`. This operation supports pagination.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes
   */
  node3DWithCursorResponse?: Maybe<Node3DWithCursorResponse>;
  /**
   * Lists all relationships. The order of retrieved objects may change for two calls with the same parameters.
   * The endpoint supports pagination. The initial call to this endpoint should not contain a cursor, but the cursor parameter should be used to retrieve further pages of results.
   *
   * Equivalent to GET /api/v1/projects/{project}/relationships
   */
  pagedRelationshipResponseWrapper?: Maybe<PagedRelationshipResponseWrapper>;
  /**
   * Retrieve row by key
   *
   * Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/{rowKey}
   */
  rawDBRow?: Maybe<RawDBRow>;
  /**
   * Retrieve a 3D revision
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}
   */
  revision3D?: Maybe<Revision3D>;
  /**
   * Retrieves a list of all revisions of a model. This operation supports pagination. You can also filter revisions if they are marked as published or not by using the query param published.
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions
   */
  revision3DWithCursorResponse?: Maybe<Revision3DWithCursorResponse>;
  /**
   * List log entries for the revision
   *
   * Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/logs
   */
  revisionLog3DResponse?: Maybe<RevisionLog3DResponse>;
  /**
   * Retrieves a list of all security categories for a project.
   *
   * Equivalent to GET /api/v1/projects/{project}/securitycategories
   */
  securityCategoryWithCursorResponse?: Maybe<SecurityCategoryWithCursorResponse>;
  /**
   * List sequences. Use nextCursor to paginate through the results.
   *
   * Equivalent to GET /api/v1/projects/{project}/sequences
   */
  sequenceWithCursorResponse?: Maybe<SequenceWithCursorResponse>;
};


export type QueryapiV1Project3dFileArgs = {
  project: Scalars['String'];
  threedFileId: Scalars['Float'];
};


export type QueryapiV1ProjectContextDiagramConvert3Args = {
  jobId: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextDiagramDetect3Args = {
  jobId: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextEntitymatchingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextEntitymatching3Args = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectContextEntitymatchingJobArgs = {
  jobId: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryapiV1ProjectFilesIconArgs = {
  externalId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  project: Scalars['String'];
};


export type QueryassetArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryassetMapping3DWithCursorResponseArgs = {
  assetId?: InputMaybe<Scalars['Float']>;
  cursor?: InputMaybe<Scalars['String']>;
  intersectsBoundingBox?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  nodeId?: InputMaybe<Scalars['Float']>;
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type QuerydataRawDBTableCursorsArgs = {
  dbName: Scalars['String'];
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  numberOfCursors?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type QuerydataWithCursorArgs = {
  assetExternalIds?: InputMaybe<Scalars['String']>;
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  assetSubtreeExternalIds?: InputMaybe<Scalars['String']>;
  assetSubtreeIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxCreatedTime?: InputMaybe<Scalars['Float']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  maxSourceCreatedTime?: InputMaybe<Scalars['Float']>;
  maxSourceModifiedTime?: InputMaybe<Scalars['Float']>;
  maxUploadedTime?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  minCreatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minSourceCreatedTime?: InputMaybe<Scalars['Float']>;
  minSourceModifiedTime?: InputMaybe<Scalars['Float']>;
  minUploadedTime?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  rootAssetIds?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  uploaded?: InputMaybe<Scalars['Boolean']>;
};


export type QuerydataWithCursorAssetArgs = {
  assetSubtreeExternalIds?: InputMaybe<Scalars['String']>;
  assetSubtreeIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  includeMetadata?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxCreatedTime?: InputMaybe<Scalars['Float']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minCreatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  parentExternalIds?: InputMaybe<Scalars['String']>;
  parentIds?: InputMaybe<Scalars['String']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  root?: InputMaybe<Scalars['Boolean']>;
  rootIds?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};


export type QuerydataWithCursorGetTimeSeriesMetadataDTOArgs = {
  assetIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  includeMetadata?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  rootAssetIds?: InputMaybe<Scalars['String']>;
};


export type QuerydataWithCursorRawDBArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QuerydataWithCursorRawDBRowArgs = {
  columns?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  dbName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type QuerydataWithCursorRawDBTableArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  dbName: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryeventArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryeventWithCursorResponseArgs = {
  assetExternalIds?: InputMaybe<Scalars['String']>;
  assetIds?: InputMaybe<Scalars['String']>;
  assetSubtreeExternalIds?: InputMaybe<Scalars['String']>;
  assetSubtreeIds?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['String']>;
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  includeMetadata?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  maxActiveAtTime?: InputMaybe<Scalars['Int']>;
  maxCreatedTime?: InputMaybe<Scalars['Float']>;
  maxEndTime?: InputMaybe<Scalars['Float']>;
  maxLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  maxStartTime?: InputMaybe<Scalars['Float']>;
  minActiveAtTime?: InputMaybe<Scalars['Int']>;
  minCreatedTime?: InputMaybe<Scalars['Float']>;
  minEndTime?: InputMaybe<Scalars['Float']>;
  minLastUpdatedTime?: InputMaybe<Scalars['Float']>;
  minStartTime?: InputMaybe<Scalars['Float']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  rootAssetIds?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  source?: InputMaybe<Scalars['String']>;
  subtype?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QueryextPipeArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type QueryextPipesArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type QueryfilesMetadataArgs = {
  id: Scalars['Float'];
  project: Scalars['String'];
};


export type Queryget3DNodeAncestorsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  nodeId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type QueryitemsResponseExtPipeRunResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  externalId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
};


export type Querymodel3DArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type Querymodel3DOutputResponseListArgs = {
  format?: InputMaybe<Scalars['String']>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Querymodel3DWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
};


export type Querynode3DWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  depth?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  nodeId?: InputMaybe<Scalars['Float']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
  properties?: InputMaybe<Scalars['String']>;
  revisionId: Scalars['Float'];
  sortByNodeId?: InputMaybe<Scalars['Boolean']>;
};


export type QuerypagedRelationshipResponseWrapperArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
};


export type QueryrawDBRowArgs = {
  dbName: Scalars['String'];
  project: Scalars['String'];
  rowKey: Scalars['String'];
  tableName: Scalars['String'];
};


export type Queryrevision3DArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Queryrevision3DWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
};


export type QueryrevisionLog3DResponseArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
  severity?: InputMaybe<Scalars['Float']>;
};


export type QuerysecurityCategoryWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  project: Scalars['String'];
  sort?: InputMaybe<Sort2>;
};


export type QuerysequenceWithCursorResponseArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  partition?: InputMaybe<Scalars['String']>;
  project: Scalars['String'];
};

export type ApiV1ProjectContextDiagramConvert3 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** Return the SVG version in grayscale colors only (reduces the file size). */
  grayscale?: Maybe<Scalars['Boolean']>;
  /** An array of converted results, returned when the job finished or failed partially. */
  items?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type JobStatus =
  | 'QUEUED'
  | 'RUNNING'
  | 'COMPLETED'
  | 'FAILED';

export type ApiV1ProjectContextDiagramDetect3 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** An array of detected results, returned when the job finished or failed partially. */
  items?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits. */
  minTokens?: Maybe<Scalars['Int']>;
  /** Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously. */
  partialMatch?: Maybe<Scalars['Boolean']>;
  /** This field determines the string to search for and to identify object entities. */
  searchField?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatching = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type EntityMatcherResponseSchema = {
  /** Name of the classifier used in the model, "Unsupervised" if unsupervised model. */
  classifier?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** User defined description. */
  description: Scalars['String'];
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId: Scalars['String'];
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType?: Maybe<FeatureType>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings. */
  ignoreMissingFields?: Maybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: Maybe<Array<Maybe<MatchFieldsListItem>>>;
  /** User defined name. */
  name: Scalars['String'];
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId?: Maybe<Scalars['Int']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type FeatureType =
  | 'SIMPLE'
  | 'INSENSITIVE'
  | 'BIGRAM'
  | 'FREQUENCYWEIGHTEDBIGRAM'
  | 'BIGRAMEXTRATOKENIZERS'
  | 'BIGRAMCOMBO';

export type MatchFieldsListItem = {
  source: Scalars['String'];
  target: Scalars['String'];
};

export type ApiV1ProjectContextEntitymatching3 = {
  /** Name of the classifier used in the model, "Unsupervised" if unsupervised model. */
  classifier: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** User defined description. */
  description: Scalars['String'];
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId: Scalars['String'];
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType: FeatureType;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings. */
  ignoreMissingFields?: Maybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: Maybe<Array<Maybe<MatchFieldsListItem>>>;
  /** User defined name. */
  name: Scalars['String'];
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId?: Maybe<Scalars['Int']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatchingJob = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** List of matched entities with confidence score. */
  items: Array<Maybe<Items75ListItem>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type Items75ListItem = {
  /** Matched items, sorted from highest score to lowest. May be empty. */
  matches: Array<Maybe<MatchesListItem>>;
  /** The source item given to predict. */
  source: Scalars['JSON'];
};

export type MatchesListItem = {
  /** The model's confidence in the match. */
  score?: Maybe<Scalars['Float']>;
  /** The target item given to predict. */
  target?: Maybe<Scalars['JSON']>;
};

export type Asset = {
  /** Aggregated metrics of the asset */
  aggregates?: Maybe<AggregateResultItem>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The id of the dataset this asset belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** The description of the asset. */
  description?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The name of the asset. */
  name: Scalars['String'];
  /**
   * The parent node's external ID used to specify the parent-child relationship.
   * When specifying this field, the API will resolve the external ID into an internal ID and use the internal ID to store the parent-child relation.
   * As a result, a later change to update the parent's external ID will not affect this parent-child relationship as it is based on internal ID.
   *
   * You should not use this field in combination with the parentId field.
   *
   */
  parentExternalId?: Maybe<Scalars['String']>;
  /**
   * The parent node's ID used to specify parent-child relationship.
   *
   * You should not use this field in combination with the parentExternalId field.
   *
   */
  parentId?: Maybe<Scalars['Int']>;
  /** The ID of the root asset. The root asset is the asset spanning the entire asset hierarchy that this asset belongs to. */
  rootId: Scalars['Int'];
  /** The source of the asset. */
  source?: Maybe<Scalars['String']>;
};

/** Aggregated metrics of the asset */
export type AggregateResultItem = {
  /** Number of direct descendants for the asset */
  childCount?: Maybe<Scalars['Int']>;
  /** Asset path depth (number of levels below root node). */
  depth?: Maybe<Scalars['Int']>;
  /** IDs of assets on the path to the asset. */
  path?: Maybe<Array<Maybe<AssetIdentifier>>>;
};

export type AssetIdentifier = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
};

/** A label assigned to a resource. */
export type Label = {
  /** An external ID to a predefined label definition. */
  externalId: Scalars['String'];
};

export type AssetMapping3DWithCursorResponse = {
  items: Array<Maybe<AssetMapping3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type AssetMapping3D = {
  /** The ID of the associated asset (Cognite's Assets API). */
  assetId: Scalars['Float'];
  /** The ID of the node. */
  nodeId: Scalars['Float'];
  /** The number of nodes in the subtree of this node (this number included the node itself). */
  subtreeSize: Scalars['Float'];
  /** A number describing the position of this node in the 3D hierarchy, starting from 0. The tree is traversed in a depth-first order. */
  treeIndex: Scalars['Float'];
};

/** A list of cursors */
export type DataRawDBTableCursors = {
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A list of objects along with possible cursors to get the next page of results */
export type DataWithCursor = {
  items?: Maybe<Array<Maybe<FilesMetadata>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type FilesMetadata = {
  assetIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Directory containing the file. Must be an absolute, unix-style path. */
  directory?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** The geographic metadata of the file. */
  geoLocation?: Maybe<GeoLocation>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: Maybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The security category IDs required to access this file. */
  securityCategories?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The source of the file. */
  source?: Maybe<Scalars['String']>;
  sourceCreatedTime?: Maybe<Scalars['Int']>;
  sourceModifiedTime?: Maybe<Scalars['Int']>;
  /** Whether or not the actual file is uploaded.  This field is returned only by the API, it has no effect in a post body. */
  uploaded: Scalars['Boolean'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  uploadedTime?: Maybe<Scalars['Float']>;
};

/** The geographic metadata of the file. */
export type GeoLocation = {
  /** Represents the points, curves and surfaces in the coordinate space. */
  geometry: Scalars['JSON'];
  /** Additional properties in a String key -> Object value format. */
  properties?: Maybe<Scalars['JSON']>;
  /** One of the GeoJSON types. Currently only the 'Feature' type is supported. */
  type: Type;
};

export type Type =
  | 'FEATURE';

/** A list of objects along with possible cursors to get the next or previous page of results. */
export type DataWithCursorAsset = {
  items: Array<Maybe<Asset>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** A list of objects along with possible cursors to get the next page of result */
export type DataWithCursorGetTimeSeriesMetadataDTO = {
  items: Array<Maybe<GetTimeSeriesMetadataDTO>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type GetTimeSeriesMetadataDTO = {
  /** Asset ID of equipment linked to this time series. */
  assetId?: Maybe<Scalars['Int']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Description of the time series. */
  description?: Maybe<Scalars['String']>;
  /** The externally supplied ID for the time series. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** Whether the time series is a step series or not. */
  isStep: Scalars['Boolean'];
  /** Whether the time series is string valued or not. */
  isString: Scalars['Boolean'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The display short name of the time series. Note: Value of this field can differ from name presented by older versions of API 0.3-0.6. */
  name?: Maybe<Scalars['String']>;
  /** The required security categories to access this time series. */
  securityCategories?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The physical unit of the time series. */
  unit?: Maybe<Scalars['String']>;
};

/** A list of objects along with possible cursors to get the next, or previous, page of results */
export type DataWithCursorRawDB = {
  items?: Maybe<Array<Maybe<RawDB>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** A NoSQL database to store customer data. */
export type RawDB = {
  /** Unique name of a database. */
  name: Scalars['String'];
};

/** A list of objects along with possible cursors to get the next, or previous, page of results */
export type DataWithCursorRawDBRow = {
  items?: Maybe<Array<Maybe<RawDBRow>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RawDBRow = {
  /** Row data stored as a JSON object. */
  columns: Scalars['JSON'];
  /** Unique row key */
  key: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
};

/** A list of objects along with possible cursors to get the next, or previous, page of results */
export type DataWithCursorRawDBTable = {
  items?: Maybe<Array<Maybe<RawDBTable>>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** A NoSQL database table to store customer data */
export type RawDBTable = {
  /** Unique name of the table */
  name: Scalars['String'];
};

export type Event = {
  /** Asset IDs of equipment that this event relates to. */
  assetIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The id of the dataset this event belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** Textual description of the event. */
  description?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  endTime?: Maybe<Scalars['Float']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The source of this event. */
  source?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime?: Maybe<Scalars['Float']>;
  /** SubType of the event, e.g 'electrical'. */
  subtype?: Maybe<Scalars['String']>;
};

export type EventWithCursorResponse = {
  items: Array<Maybe<Event>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type ExtPipe = {
  /** Contacts list. */
  contacts?: Maybe<Array<Maybe<Contact>>>;
  /** Extraction Pipeline creator. Usually user email is expected here */
  createdBy?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: Maybe<Scalars['Float']>;
  /** DataSet ID */
  dataSetId: Scalars['Float'];
  /** Description of Extraction Pipeline */
  description?: Maybe<Scalars['String']>;
  /** Documentation text field, supports Markdown for text formatting. */
  documentation?: Maybe<Scalars['String']>;
  /** External Id provided by client. Should be unique within the project. */
  externalId: Scalars['String'];
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
  /** Time of last failure run. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastFailure?: Maybe<Scalars['Float']>;
  /** Last failure message. */
  lastMessage?: Maybe<Scalars['String']>;
  /** Last seen time. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastSeen?: Maybe<Scalars['Float']>;
  /** Time of last successful run. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastSuccess?: Maybe<Scalars['Float']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime?: Maybe<Scalars['Float']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Key are at most 128 bytes. Values are at most 10240 bytes. Up to 256 key-value pairs. Total size is at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** Name of Extraction Pipeline */
  name: Scalars['String'];
  /** Raw tables */
  rawTables?: Maybe<Array<Maybe<RawTable>>>;
  /** Possible values: “On trigger”, “Continuous” or cron expression. If empty then null */
  schedule?: Maybe<Scalars['String']>;
  /** Source for Extraction Pipeline */
  source?: Maybe<Scalars['String']>;
};

export type Contact = {
  /** Contact email */
  email?: Maybe<Scalars['String']>;
  /** Contact name */
  name?: Maybe<Scalars['String']>;
  /** Contact role */
  role?: Maybe<Scalars['String']>;
  /** True, if contact receives email notifications */
  sendNotification?: Maybe<Scalars['Boolean']>;
};

export type RawTable = {
  /** Database name */
  dbName: Scalars['String'];
  /** Table name */
  tableName: Scalars['String'];
};

/** List of extraction pipelines */
export type ExtPipes = {
  items?: Maybe<Array<Maybe<ExtPipe>>>;
};

export type Node3DWithCursorResponse = {
  items: Array<Maybe<Node3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type Node3D = {
  /** The bounding box of the subtree with this sector as the root sector. Is null if there are no geometries in the subtree. */
  boundingBox?: Maybe<BoundingBox3D>;
  /** The depth of the node in the tree, starting from 0 at the root node. */
  depth: Scalars['Float'];
  /** The ID of the node. */
  id: Scalars['Float'];
  /** The name of the node. */
  name: Scalars['String'];
  /** The parent of the node, null if it is the root node. */
  parentId?: Maybe<Scalars['Float']>;
  /** Properties extracted from 3D model, with property categories containing key/value string pairs. */
  properties?: Maybe<Scalars['JSON']>;
  /** The number of descendants of the node, plus one (counting itself). */
  subtreeSize: Scalars['Float'];
  /** The index of the node in the 3D model hierarchy, starting from 0. The tree is traversed in a depth-first order. */
  treeIndex: Scalars['Float'];
};

/** The bounding box of the subtree with this sector as the root sector. Is null if there are no geometries in the subtree. */
export type BoundingBox3D = {
  max: Array<Maybe<Scalars['Float']>>;
  min: Array<Maybe<Scalars['Float']>>;
};

/** Response with a list of elements. */
export type ItemsResponseExtPipeRunResponse = {
  items?: Maybe<Array<Maybe<ExtPipeRunResponse>>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** Extraction Pipeline Run. Contains extraction pipeline status and message for a moment of time */
export type ExtPipeRunResponse = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: Maybe<Scalars['Float']>;
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
  /** Error message. */
  message?: Maybe<Scalars['String']>;
  /** Extraction Pipeline status. */
  status: Scalars['String'];
};

export type Model3D = {
  /** The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** The ID of the model. */
  id: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The name of the model. */
  name: Scalars['String'];
};

export type Model3DOutputResponseList = {
  /** A list of named and versioned outputs for the model. Note that the list is not sorted. */
  items: Array<Maybe<Items27ListItem>>;
};

export type Items27ListItem = {
  /** Reference to 3D file containing output. 3D file can either be a single file or folder. Use `/3d/files/{id}`. */
  blobId: Scalars['Int'];
  /** Format identifier. */
  format: Scalars['String'];
  /** Version of the output format, starting at 1. */
  version: Scalars['Int'];
};

export type Model3DWithCursorResponse = {
  items: Array<Maybe<Model3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type PagedRelationshipResponseWrapper = {
  items: Array<Maybe<RelationshipResponse>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RelationshipResponse = {
  /** Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project. */
  confidence?: Maybe<Scalars['Float']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was created. */
  createdTime: Scalars['Int'];
  /** The ID of the dataset the relationship belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime. */
  endTime?: Maybe<Scalars['Int']>;
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was last updated. */
  lastUpdatedTime: Scalars['Int'];
  /** The external ID of the resource that is the relationship source. */
  sourceExternalId: Scalars['String'];
  /** The resource type of the relationship source. Must be one of the specified values. */
  sourceType: Scalars['String'];
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime. */
  startTime?: Maybe<Scalars['Int']>;
  /** The external ID of the resource that is the relationship target. */
  targetExternalId: Scalars['String'];
  /** The resource type of the relationship target. Must be one of the specified values. */
  targetType: Scalars['String'];
};

export type Revision3D = {
  /** The number of asset mappings for this revision. */
  assetMappingCount: Scalars['Float'];
  /** Initial camera position and target. */
  camera?: Maybe<RevisionCameraProperties>;
  /** The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC. */
  createdTime: Scalars['Float'];
  /** The file id. */
  fileId: Scalars['Float'];
  /** The ID of the revision. */
  id: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: Maybe<Scalars['JSON']>;
  /** True if the revision is marked as published. */
  published: Scalars['Boolean'];
  rotation?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The status of the revision. */
  status: Status;
  /** The threed file ID of a thumbnail for the revision. Use `/3d/files/{id}` to retrieve the file. */
  thumbnailThreedFileId?: Maybe<Scalars['Float']>;
  /** The URL of a thumbnail for the revision. */
  thumbnailURL?: Maybe<Scalars['String']>;
};

/** Initial camera position and target. */
export type RevisionCameraProperties = {
  /** Initial camera position. */
  position?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** Initial camera target. */
  target?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Status =
  | 'QUEUED'
  | 'PROCESSING'
  | 'DONE'
  | 'FAILED';

export type Revision3DWithCursorResponse = {
  items: Array<Maybe<Revision3D>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RevisionLog3DResponse = {
  items: Array<Maybe<RevisionLog3D>>;
};

export type RevisionLog3D = {
  /** Optional extra information related to the log entry */
  info?: Maybe<Scalars['String']>;
  /** How severe is the message (3 = INFO, 5 = WARN, 7 = ERROR). */
  severity: Scalars['Int'];
  /** The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC. */
  timestamp: Scalars['Float'];
  /** Main computer parsable log entry type */
  type: Scalars['String'];
};

/** A list of objects along with possible cursors to get the next page of results */
export type SecurityCategoryWithCursorResponse = {
  items: Array<Maybe<SecurityCategoryDTO>>;
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type SecurityCategoryDTO = {
  /** ID of the security category */
  id: Scalars['Float'];
  /** Name of the security category */
  name: Scalars['String'];
};

export type Sort2 =
  | 'ASC'
  | 'DESC';

export type SequenceWithCursorResponse = {
  items: Array<Maybe<GetSequenceDTO>>;
  /** The cursor to get the next page of results (if available). Learn more [here](/dev/concepts/pagination/). */
  nextCursor?: Maybe<Scalars['String']>;
};

/** Information about the sequence stored in the database */
export type GetSequenceDTO = {
  /** Optional asset this sequence is associated with */
  assetId?: Maybe<Scalars['Float']>;
  /** List of column definitions */
  columns: Array<Maybe<GetSequenceColumnDTO>>;
  /** Time when this sequence was created in CDF in milliseconds since Jan 1, 1970. */
  createdTime: Scalars['Float'];
  /** Data set that this sequence belongs to */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Description of the sequence */
  description?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** Unique cognite-provided identifier for the sequence */
  id: Scalars['Float'];
  /** The last time this sequence was updated in CDF, in milliseconds since Jan 1, 1970. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, up to a total size of 10000 bytes across all keys and values. */
  metadata?: Maybe<Scalars['JSON']>;
  /** Name of the sequence */
  name?: Maybe<Scalars['String']>;
};

/** Information about a column stored in the database */
export type GetSequenceColumnDTO = {
  /** Time when this asset was created in CDF in milliseconds since Jan 1, 1970. */
  createdTime: Scalars['Float'];
  /** Description of the column */
  description?: Maybe<Scalars['String']>;
  /** User provided column identifier (Unique for a given sequence) */
  externalId?: Maybe<Scalars['String']>;
  /** The last time this asset was updated in CDF, in milliseconds since Jan 1, 1970. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value */
  metadata?: Maybe<Scalars['JSON']>;
  /** Human readable name of the column */
  name?: Maybe<Scalars['String']>;
  /** What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100] */
  valueType: SequenceValueTypeEnum;
};

export type SequenceValueTypeEnum =
  | 'STRING'
  | 'DOUBLE'
  | 'LONG';

export type Mutation = {
  /**
   * Retrieve a list of all events in the same project. This operation supports pagination by cursor. Criteria can be applied to select a subset of events.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/list
   */
  advancedListEvents?: Maybe<EventWithCursorResponse>;
  /**
   * Retrieves a list of all files in a project. Criteria can be supplied to select a subset of files. This operation supports pagination with cursors.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/list
   */
  advancedListFiles?: Maybe<DataWithCursor>;
  /**
   * Retrieves a list of sequences matching the given criteria.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/list
   */
  advancedListSequences?: Maybe<SequenceWithCursorResponse>;
  /**
   * Use advanced filtering options to agggregate assets.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/aggregate
   */
  aggregateAssets?: Maybe<DataAssetAggregate>;
  /**
   * Aggregate data sets in the same project. Criteria can be applied to select a subset of data sets.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/aggregate
   */
  aggregateDataSets?: Maybe<DataDataSetAggregate>;
  /**
   * The aggregation API allows you to compute aggregated results on events
   * like getting the count of all events in a project or checking what are all the
   * different types and subtypes of events in your project, along with
   * the count of events in each of those aggregations. By specifying an additional
   * filter, you can also aggregate only among events matching the specified filter.
   *
   * The default behavior, when you do not specify
   * the `aggregate` field in the request body, is to return the count
   * of events.
   *
   * Setting `aggregate` to `uniqueValues` will return all unique values (up to a
   * maximum of 1000) and the count of each in the field specified in
   * `fields: []`. Note that, currently, you can only request for unique
   * values on a single field. Also, in the case of text fields, the values are
   * aggregated in a case-insensitive manner. For example:
   *
   * ```
   * {
   *   "aggregate": "uniqueValues",
   *   "fields": [ "type" ]
   * }
   * ```
   *
   * will return all unique 'types' in the events in your project.
   *
   * Similarly,
   *
   * ```
   * {
   *   "aggregate": "uniqueValues",
   *   "fields": [ "dataSetId" ],
   *   "filter": {
   *     "subType": "subtype_1"
   *   }
   * }
   * ```
   * will return all unique dataSetIds in events of subtype 'subtype_1'
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/events/aggregate
   */
  aggregateEvents?: Maybe<AggregateResult>;
  /**
   * Calculate aggregates for files, based on optional filter specification. Returns the following aggregates: `count`
   *
   * Equivalent to POST /api/v1/projects/{project}/files/aggregate
   */
  aggregateFiles?: Maybe<DataFilesAggregate>;
  /**
   * Count the number of sequences that match the given filter
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/aggregate
   */
  aggregateSequences?: Maybe<SequenceAggregateResponse>;
  /**
   * Count the number of time series that match the given filter
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/aggregate
   */
  aggregateTimeSeries?: Maybe<TimeSeriesAggregateResponse>;
  /**
   * Updates one or more time series. Fields that are not included in the request, are not changed.
   *
   * For primitive fields (String, Long Int), use 'set': 'value' to update the value; use 'setNull': true to set the field to null.
   *
   * For JSON Array fields (for example securityCategories), use 'set': [value1, value2] to update the value; use 'add': [v1, v2] to add values; use 'remove': [v1, v2] to remove values.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/update
   */
  alterTimeSeries?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Retrieve assets by IDs or external IDs. If you specify to get aggregates then be aware that the aggregates are eventually consistent.
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/byids
   */
  byIdsAssets?: Maybe<DataAsset>;
  /**
   * Retrieves information about events in the same project. Events are returned in the same order as the ids listed in the query.
   *
   * A maximum of 1000 event IDs may be listed per request and all of them must be unique.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/byids
   */
  byIdsEvents?: Maybe<EventResponse>;
  /**
   * Retrieves metadata information about multiple specific files in the same project.
   * Results are returned in the same order as in the request. This operation does not return the file contents.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/byids
   */
  byIdsFiles?: Maybe<DataFileMetadata>;
  /**
   * Retrieves information about multiple extraction pipelines in the same project. All ids and externalIds must be unique.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/byids
   */
  byidsExtPipes?: Maybe<ExtPipes>;
  /**
   * Retrieve relationships by external IDs. You can retrieve a maximum of 1000 relationships per request.
   * The order of the relationships in the response equals the order in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/byids
   */
  byidsRelationships?: Maybe<EnrichedRelationshipResponseWrapper>;
  /**
   * Create asset mappings
   *
   *
   * Asset references when creating a mapping - through asset ids - are allowed to be
   * invalid.
   * They are NOT maintained by any means from CDF, meaning they will be stored until the
   * reference is removed through the delete endpoint of 3d asset mappings.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings
   */
  create3DMappings?: Maybe<AssetMapping3DList>;
  /**
   * Create 3D models
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models
   */
  create3DModels?: Maybe<Model3DList>;
  /**
   * Create 3D revisions
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions
   */
  create3DRevisions?: Maybe<Revision3DList>;
  /**
   * You can create a maximum of 1000 assets per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets
   */
  createAssets?: Maybe<DataAsset>;
  /**
   * Create databases in a project. It is possible to post a maximum of 1000 databases per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs
   */
  createDBs?: Maybe<DataRawDB>;
  /**
   * You can create a maximum of 10 data sets per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets
   */
  createDataSets?: Maybe<DataSetList>;
  /**
   * Creates multiple event objects in the same project. It is possible to post a maximum of 1000 events per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/events
   */
  createEvents?: Maybe<EventResponse>;
  /**
   * Creates multiple new extraction pipelines. A maximum of 1000 extraction pipelines can be created per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes
   */
  createExtPipes?: Maybe<ExtPipes>;
  /**
   * List of the relationships to create. You can create a maximum of 1000 relationships per request. Relationships should be unique, but CDF does not prevent you from creating duplicates where only the externalId differs.
   *
   * Relationships are uniquely identified by their externalId. Non-unique relationships will not be created.
   *
   * The order of relationships in the response equals the order in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships
   */
  createRelationships?: Maybe<RelationshipResponseWrapper>;
  /**
   * Create multiple extraction pipeline runs. Current version supports one extraction pipeline run per request. Extraction pipeline runs support three statuses: success, failure, seen. The content of the Error Message parameter is configurable and will contain any messages that have been configured within the extraction pipeline.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/runs
   */
  createRuns?: Maybe<ItemsResponseCreateExtPipeRunResponse>;
  /**
   * Creates security categories with the given names. Duplicate names in the request are ignored.
   * If a security category with one of the provided names exists already, then the request will fail and no security categories are created.
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/securitycategories
   */
  createSecurityCategories?: Maybe<SecurityCategoryResponse>;
  /**
   * Create one or more sequences.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences
   */
  createSequence?: Maybe<DataGetSequence>;
  /**
   * Create tables in a database. It is possible to post a maximum of 1000 tables per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables
   */
  createTables?: Maybe<DataRawDBTable>;
  /**
   * Delete a list of asset mappings
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/delete
   */
  delete3DMappings?: Maybe<Scalars['JSON']>;
  /**
   * Delete 3D models
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/delete
   */
  delete3DModels?: Maybe<Scalars['JSON']>;
  /**
   * Delete 3D revisions
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/delete
   */
  delete3DRevisions?: Maybe<Scalars['JSON']>;
  /**
   * Delete assets. To delete all descendants, set recursive to true. The limit of the request does not include the number of descendants that are deleted.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/delete
   */
  deleteAssets?: Maybe<Scalars['JSON']>;
  /**
   * It deletes a database, but fails if the database is not empty and recursive is set to false (default).
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/delete
   */
  deleteDBs?: Maybe<Scalars['JSON']>;
  /**
   * Delete datapoints from time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data/delete
   */
  deleteDatapoints?: Maybe<Scalars['JSON']>;
  /**
   * Deletes events with the given ids. A maximum of 1000 events can be deleted per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/delete
   */
  deleteEvents?: Maybe<Scalars['JSON']>;
  /**
   * Delete extraction pipelines for given list of ids and externalIds. When the extraction pipeline is deleted, all extraction pipeline runs related to the extraction pipeline are automatically deleted.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/delete
   */
  deleteExtPipes?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the files with the given ids.
   *
   * A maximum of 1000 files can be deleted per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/delete
   */
  deleteFiles?: Maybe<Scalars['JSON']>;
  /**
   * Delete the relationships between resources identified by the external IDs in the request. You can delete a maximum of 1000 relationships per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/delete
   */
  deleteRelationships?: Maybe<Scalars['JSON']>;
  /**
   * Delete rows in a table
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/delete
   */
  deleteRows?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the security categories that match the provided IDs.
   * If any of the provided IDs does not belong to an existing security category, then the request will fail and no security categories are deleted.
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/securitycategories/delete
   */
  deleteSecurityCategories?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the given rows of the sequence. All columns are affected.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data/delete
   */
  deleteSequenceData?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the sequences with the specified IDs. If one or more of the sequences do not exist, ignoreUnknownIds controls what will happen: if it is true, the sequences that do exist will be deleted, and the request succeeds; if it is false or absent, nothing will be deleted, and the request fails.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/delete
   */
  deleteSequences?: Maybe<Scalars['JSON']>;
  /**
   * Delete tables in a database
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/delete
   */
  deleteTables?: Maybe<Scalars['JSON']>;
  /**
   * Deletes the time series with the specified IDs and their datapoints.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/delete
   */
  deleteTimeSeries?: Maybe<Scalars['JSON']>;
  /**
   * Convert interactive engineering diagrams to image format, with highlighted annotations.
   * Supported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.
   * Supported output image formats are PNG and SVG, only the svg embeds the input annotations.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/diagram/convert/
   */
  diagramConvert?: Maybe<ApiV1ProjectContextDiagramConvert2>;
  /**
   * Detect annotations in engineering diagrams. Note: All users in a CDF project with assets read-all and files read-all capabilities can access data sent to this endpoint.
   * Supported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/diagram/detect/
   */
  diagramDetect?: Maybe<ApiV1ProjectContextDiagramDetect2>;
  /**
   * Retrieves a list of download URLs for the specified list of file IDs. After getting the download links, the client has to issue a GET request to the returned URLs, which will respond with the contents of the file. The link will expire after 30 seconds.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/downloadlink
   */
  downloadLinks?: Maybe<ApiV1ProjectFilesDownloadlink>;
  /**
   * Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Train a model that predicts matches between entities (for example, time series names to asset names). This is also known as fuzzy joining. If there are no trueMatches (labeled data), you train a static (unsupervised) model, otherwise a machine learned (supervised) model is trained.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/
   */
  entityMatchingCreate?: Maybe<EntityMatcherResponseSchema>;
  /**
   * Deletes an entity matching model. Currently, this is a soft delete, and only removes the entry from listing.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/delete
   */
  entityMatchingDelete?: Maybe<Scalars['JSON']>;
  /**
   * Use filtering options to find entity matcher models.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/list
   */
  entityMatchingFilter?: Maybe<ApiV1ProjectContextEntitymatchingList2>;
  /**
   * Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Predicts entity matches using a trained model.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/predict
   */
  entityMatchingPredict?: Maybe<ApiV1ProjectContextEntitymatchingPredict>;
  /**
   * Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Creates a new model by re-training an existing model on existing data but with additional true matches. The old model is not changed. The new model gets a new id and new external id if `newExternalId` is set, or no external id if `newExternalId` is not set. Use for efficient re-training of the model after a user creates additional confirmed matches.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/refit
   */
  entityMatchingReFit?: Maybe<ApiV1ProjectContextEntitymatchingRefit>;
  /**
   * Retrieve entity matching models by IDs or external IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/byids
   */
  entityMatchingRetrieve?: Maybe<ApiV1ProjectContextEntitymatchingByids2>;
  /**
   * Update entity matching models by IDs or external IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/context/entitymatching/update
   */
  entityMatchingUpdate?: Maybe<ApiV1ProjectContextEntitymatchingUpdate2>;
  /**
   * Lists 3D assets mappings that match the specified filter parameter. Only
   * one type of filter can be specified for each request, either `assetIds`, `nodeIds` or `treeIndexes`.
   *
   *
   * Asset references obtained from a mapping - through asset ids - may be
   * invalid, simply by the non-transactional nature of HTTP.
   * They are NOT maintained by any means from CDF, meaning they will be stored until the
   * reference is removed through the delete endpoint of 3d asset mappings.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/list
   */
  filter3DAssetMappings?: Maybe<AssetMapping3DWithCursorResponse>;
  /**
   * List nodes in a project, filtered by node property values specified by supplied filters. This operation supports pagination and partitions.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/list
   */
  filter3DNodes?: Maybe<Node3DWithCursorResponse>;
  /**
   * Use advanced filtering options to find extraction pipelines.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/list
   */
  filterExtPipes?: Maybe<ExtPipes>;
  /**
   * Use advanced filtering options to find extraction pipeline runs. Sorted by createdTime value with descendant order.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/runs/list
   */
  filterRuns?: Maybe<ItemsResponseExtPipeRunResponse>;
  /**
   * Retrieves specific nodes given by a list of IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/byids
   */
  get3DNodesById?: Maybe<Node3DList>;
  /**
   * Retrieve data sets by IDs or external IDs.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/byids
   */
  getDataSets?: Maybe<DataSetList>;
  /**
   * Retrieves the latest data point in a time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data/latest
   */
  getLatest?: Maybe<DatapointsResponse>;
  /**
   * Retrieves the last row (i.e the row with the highest row number) in a sequence.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data/latest
   */
  getLatestSequenceRow?: Maybe<SequenceGetData>;
  /**
   * Retrieves a list of data points from multiple time series in a project. This operation supports aggregation, but not pagination. A detailed description of how aggregates work can be found at [our concept guide for aggregation](<https://docs.cognite.com/dev/concepts/aggregation/>).
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data/list
   */
  getMultiTimeSeriesDatapoints?: Maybe<DatapointsOrAggregatesResponse>;
  /**
   * Retrieve one or more sequences by ID or external ID. The sequences are returned in the same order as in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/byids
   */
  getSequenceById?: Maybe<DataGetSequence>;
  /**
   * Processes data requests, and returns the result. NB - This operation uses a dynamic limit on the number of rows returned based on the number and type of columns, use the provided cursor to paginate and retrieve all data.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data/list
   */
  getSequenceData?: Maybe<SequenceGetDataWithCursor>;
  /**
   * Retrieve one or more time series by ID or external ID. The time series are returned in the same order as in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/byids
   */
  getTimeSeriesByIds?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Create metadata information and get an upload link for a file.
   *
   * To upload the file, use the uploadUrl link in the response in a separate request.
   * To upload a file, send an HTTP PUT request to the uploadUrl with the relevant 'Content-Type' and 'Content-Length' headers.
   *
   * If the uploadUrl contains the string '/v1/files/gcs_proxy/', you can make a Google Cloud Storage (GCS) resumable upload request
   * as documented in https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload.
   *
   * The uploadUrl expires after one week.
   * Any file info entry that does not have the actual file uploaded within one week will be automatically deleted.
   *
   * Equivalent to POST /api/v1/projects/{project}/files
   */
  initFileUpload?: Maybe<ApiV1ProjectFiles>;
  /**
   * Use advanced filtering options to find assets.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/list
   */
  listAssets?: Maybe<DataWithCursorAsset>;
  /**
   * Use advanced filtering options to find data sets.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/list
   */
  listDataSets?: Maybe<DataSetListWithCursor>;
  /**
   * Lists relationships matching the query filter in the request. You can retrieve a maximum of 1000 relationships per request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/list
   */
  listRelationships?: Maybe<PagedEnrichedRelationshipResponseWrapper>;
  /**
   * Retrieves a list of time series matching the specified criteria. This operation supports pagination by cursor. Criteria can be applied to select a subset of time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/list
   */
  listTimeSeries?: Maybe<DataWithCursorGetTimeSeriesMetadataDTO>;
  /**
   * Insert datapoints into a time series. You can do this for multiple time series.
   * If you insert a datapoint with a timestamp that already exists, it will be overwritten with the new value.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/data
   */
  postMultiTimeSeriesDatapoints?: Maybe<Scalars['JSON']>;
  /**
   * Insert rows into a table. It is possible to post a maximum of 10000 rows per request.
   * It will replace the columns of an existing row if the rowKey already exists.
   *
   * The rowKey is limited to 1024 characters which also includes Unicode characters.
   * The maximum size of columns are 5 MiB, however the maximum size of one column name and value is 2621440 characters each.
   * If you want to store huge amount of data per row or column we recommend using the Files API to upload blobs, then reference it from the Raw row.
   *
   * The columns object is a key value object, where the key corresponds to the column name while the value is the column value.
   * It supports all the valid types of values in JSON, so number, string, array, and even nested JSON structure (see payload example to the right).
   *
   * **Note** There is no rollback if an error occurs, which means partial data may be written. However, it's safe to retry the request, since this endpoint supports both update and insert (upsert).
   *
   *
   * Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows
   */
  postRows?: Maybe<Scalars['JSON']>;
  /**
   * Inserts rows into a sequence. This overwrites data in rows and columns that exist.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/data
   */
  postSequenceData?: Maybe<Scalars['JSON']>;
  /**
   * Create one or more time series.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries
   */
  postTimeSeries?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Execute an on-the-fly synthetic query
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/synthetic/query
   */
  querySyntheticTimeseries?: Maybe<SyntheticQueryResponses>;
  /**
   * Fulltext search for assets based on result relevance. Primarily meant
   * for human-centric use-cases, not for programs, since matching and
   * ordering may change over time. Additional filters can also be
   * specified. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/search
   */
  searchAssets?: Maybe<DataAsset>;
  /**
   * Search within events
   *
   * Equivalent to POST /api/v1/projects/{project}/events/search
   */
  searchEvents?: Maybe<EventResponse>;
  /**
   * Search for files based on relevance. You can also supply a strict match filter as in Filter files, and search in the results from the filter. Returns first 1000 results based on relevance. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/files/search
   */
  searchFiles?: Maybe<DataFileMetadata>;
  /**
   * Retrieves a list of sequences matching the given criteria. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/search
   */
  searchSequences?: Maybe<DataGetSequence>;
  /**
   * Fulltext search for time series based on result relevance. Primarily meant
   * for human-centric use-cases, not for programs, since matching and
   * ordering may change over time. Additional filters can also be
   * specified. This operation does not support pagination.
   *
   * Equivalent to POST /api/v1/projects/{project}/timeseries/search
   */
  searchTimeSeries?: Maybe<DataGetTimeSeriesMetadataDTO>;
  /**
   * Update 3D models
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/update
   */
  update3DModels?: Maybe<Model3DList>;
  /**
   * Update 3D revisions
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/update
   */
  update3DRevisions?: Maybe<Revision3DList>;
  /**
   * Update the attributes of assets.
   *
   * Equivalent to POST /api/v1/projects/{project}/assets/update
   */
  updateAssets?: Maybe<DataAsset>;
  /**
   * Update the attributes of data sets.
   *
   * Equivalent to POST /api/v1/projects/{project}/datasets/update
   */
  updateDataSets?: Maybe<DataSetList>;
  /**
   * Updates events in the same project. This operation supports partial updates; Fields omitted from queries will remain unchanged on objects.
   *
   * For primitive fields (String, Long, Int), use 'set': 'value' to update value; use 'setNull': true to set that field to null.
   *
   * For the Json Array field (e.g. assetIds), use 'set': [value1, value2] to update value; use 'add': [v1, v2] to add values to current list of values; use 'remove': [v1, v2] to remove these values from current list of values if exists.
   *
   * A maximum of 1000 events can be updated per request, and all of the event IDs must be unique.
   *
   * Equivalent to POST /api/v1/projects/{project}/events/update
   */
  updateEvents?: Maybe<EventResponse>;
  /**
   * Update information for a list of extraction pipelines. Fields that are not included in the request, are not changed.
   *
   * Equivalent to POST /api/v1/projects/{project}/extpipes/update
   */
  updateExtPipes?: Maybe<ExtPipes>;
  /**
   * Updates the information for the files specified in the request body.
   *
   * If you want to update the file content, uploaded using the uploadUrl, please
   * use the initFileUpload request with the query parameter 'overwrite=true'.
   * Alternatively, delete and recreate the file.
   *
   * For primitive fields (String, Long, Int), use 'set': 'value' to update
   * value; use 'setNull': true to set that field to null.
   *
   * For the Json Array field (e.g. assetIds and securityCategories): Use either only 'set', or a combination of 'add' and/or 'remove'.
   *
   * __AssetIds update examples__:
   *
   * Example request body to overwrite assetIds with a new set, asset ID 1 and 2.
   *
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "assetIds" : {
   *           "set" : [ 1, 2 ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * Example request body to add one asset Id, and remove another asset ID.
   *
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "assetIds" : {
   *           "add" : [ 3 ],
   *           "remove": [ 2 ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * __Metadata update examples__:
   *
   * Example request body to overwrite metadata with a new set.
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "metadata": {
   *           "set": {
   *             "key1": "value1",
   *             "key2": "value2"
   *           }
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * Example request body to add two key-value pairs and remove two other key-value pairs by key for
   * the metadata field.
   * ```
   * {
   *   "items": [
   *     {
   *       "id": 1,
   *       "update": {
   *         "metadata": {
   *           "add": {
   *             "key3": "value3",
   *             "key4": "value4"
   *           },
   *           "remove": [
   *             "key1",
   *             "key2"
   *           ]
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * Equivalent to POST /api/v1/projects/{project}/files/update
   */
  updateFiles?: Maybe<DataFileMetadata>;
  /**
   * Update relationships between resources according to the partial definitions of the relationships given in the payload of the request. This means that fields not mentioned in the payload will remain unchanged. Up to 1000 relationships can be updated in one operation.
   * To delete a value from an optional value the `setNull` field should be set to `true`.
   * The order of the updated relationships in the response equals the order in the request.
   *
   * Equivalent to POST /api/v1/projects/{project}/relationships/update
   */
  updateRelationships?: Maybe<RelationshipResponseWrapper>;
  /**
   * Update one or more sequences. Fields that are not included in the request, are not changed.
   *
   * Equivalent to POST /api/v1/projects/{project}/sequences/update
   */
  updateSequences?: Maybe<DataGetSequence>;
  /**
   * Update 3D revision thumbnail
   *
   * Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/thumbnail
   */
  updateThumbnail?: Maybe<Scalars['JSON']>;
};


export type MutationadvancedListEventsArgs = {
  eventFilterRequestInput?: InputMaybe<EventFilterRequestInput>;
  project: Scalars['String'];
};


export type MutationadvancedListFilesArgs = {
  fileFilterRequestInput: FileFilterRequestInput;
  project: Scalars['String'];
};


export type MutationadvancedListSequencesArgs = {
  project: Scalars['String'];
  sequencesAdvancedListDTOInput?: InputMaybe<SequencesAdvancedListDTOInput>;
};


export type MutationaggregateAssetsArgs = {
  assetAggregateRequestInput?: InputMaybe<AssetAggregateRequestInput>;
  project: Scalars['String'];
};


export type MutationaggregateDataSetsArgs = {
  dataSetAggregateRequestInput?: InputMaybe<DataSetAggregateRequestInput>;
  project: Scalars['String'];
};


export type MutationaggregateEventsArgs = {
  eventAggregateRequestInput?: InputMaybe<Scalars['JSON']>;
  project: Scalars['String'];
};


export type MutationaggregateFilesArgs = {
  fileFilterInput: FileFilterInput;
  project: Scalars['String'];
};


export type MutationaggregateSequencesArgs = {
  project: Scalars['String'];
  sequencesAggregateDTOInput?: InputMaybe<SequencesAggregateDTOInput>;
};


export type MutationaggregateTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesAggregateDTOInput?: InputMaybe<TimeSeriesAggregateDTOInput>;
};


export type MutationalterTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesUpdateRequestInput: TimeSeriesUpdateRequestInput;
};


export type MutationbyIdsAssetsArgs = {
  assetDataIdsInput: AssetDataIdsInput;
  project: Scalars['String'];
};


export type MutationbyIdsEventsArgs = {
  eventDataIdsInput: EventDataIdsInput;
  project: Scalars['String'];
};


export type MutationbyIdsFilesArgs = {
  fileDataIdsWithIgnoreUnknownIdsInput: FileDataIdsWithIgnoreUnknownIdsInput;
  project: Scalars['String'];
};


export type MutationbyidsExtPipesArgs = {
  extendedItemsRequestExtPipeIdInput: ExtendedItemsRequestExtPipeIdInput;
  project: Scalars['String'];
};


export type MutationbyidsRelationshipsArgs = {
  byIdsRequestInput: ByIdsRequestInput;
  project: Scalars['String'];
};


export type Mutationcreate3DMappingsArgs = {
  apiV1Project3dModelRevisionMappingsInput: ApiV1Project3dModelRevisionMappingsInput;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Mutationcreate3DModelsArgs = {
  apiV1Project3dModelsInput: ApiV1Project3dModelsInput;
  project: Scalars['String'];
};


export type Mutationcreate3DRevisionsArgs = {
  apiV1Project3dModelRevisionsInput?: InputMaybe<ApiV1Project3dModelRevisionsInput>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type MutationcreateAssetsArgs = {
  dataExternalAssetInput: DataExternalAssetInput;
  project: Scalars['String'];
};


export type MutationcreateDBsArgs = {
  dataRawDBInput: DataRawDBInput;
  project: Scalars['String'];
};


export type MutationcreateDataSetsArgs = {
  dataSetSpecListInput: DataSetSpecListInput;
  project: Scalars['String'];
};


export type MutationcreateEventsArgs = {
  dataExternalEventInput: DataExternalEventInput;
  project: Scalars['String'];
};


export type MutationcreateExtPipesArgs = {
  itemsRequestCreateExtPipeInput: ItemsRequestCreateExtPipeInput;
  project: Scalars['String'];
};


export type MutationcreateRelationshipsArgs = {
  project: Scalars['String'];
  relationshipRequestWrapperInput: RelationshipRequestWrapperInput;
};


export type MutationcreateRunsArgs = {
  itemsRequestExtPipeRunRequestInput: ItemsRequestExtPipeRunRequestInput;
  project: Scalars['String'];
};


export type MutationcreateSecurityCategoriesArgs = {
  dataSecurityCategorySpecDTOInput: DataSecurityCategorySpecDTOInput;
  project: Scalars['String'];
};


export type MutationcreateSequenceArgs = {
  dataPostSequenceInput: DataPostSequenceInput;
  project: Scalars['String'];
};


export type MutationcreateTablesArgs = {
  dataRawDBTableInput: DataRawDBTableInput;
  dbName: Scalars['String'];
  ensureParent?: InputMaybe<Scalars['Boolean']>;
  project: Scalars['String'];
};


export type Mutationdelete3DMappingsArgs = {
  apiV1Project3dModelRevisionMappingsDeleteInput: ApiV1Project3dModelRevisionMappingsDeleteInput;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Mutationdelete3DModelsArgs = {
  dataIdentifiersInput: DataIdentifiersInput;
  project: Scalars['String'];
};


export type Mutationdelete3DRevisionsArgs = {
  dataIdentifiersInput: DataIdentifiersInput;
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type MutationdeleteAssetsArgs = {
  deleteRequestInput: DeleteRequestInput;
  project: Scalars['String'];
};


export type MutationdeleteDBsArgs = {
  deleteRawDBInput: DeleteRawDBInput;
  project: Scalars['String'];
};


export type MutationdeleteDatapointsArgs = {
  datapointsDeleteQueryInput: DatapointsDeleteQueryInput;
  project: Scalars['String'];
};


export type MutationdeleteEventsArgs = {
  eventDataIdsInput: EventDataIdsInput;
  project: Scalars['String'];
};


export type MutationdeleteExtPipesArgs = {
  itemsRequestExtPipeIdInput: ItemsRequestExtPipeIdInput;
  project: Scalars['String'];
};


export type MutationdeleteFilesArgs = {
  fileDataIdsInput: FileDataIdsInput;
  project: Scalars['String'];
};


export type MutationdeleteRelationshipsArgs = {
  apiV1ProjectRelationshipsDeleteInput: ApiV1ProjectRelationshipsDeleteInput;
  project: Scalars['String'];
};


export type MutationdeleteRowsArgs = {
  dataRawDBRowKeyInput: DataRawDBRowKeyInput;
  dbName: Scalars['String'];
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationdeleteSecurityCategoriesArgs = {
  dataLongInput: DataLongInput;
  project: Scalars['String'];
};


export type MutationdeleteSequenceDataArgs = {
  dataSequenceDataDeleteRequestInput: DataSequenceDataDeleteRequestInput;
  project: Scalars['String'];
};


export type MutationdeleteSequencesArgs = {
  dataResourceIdsWithIgnoreUnknownIdsInput: DataResourceIdsWithIgnoreUnknownIdsInput;
  project: Scalars['String'];
};


export type MutationdeleteTablesArgs = {
  dataRawDBTableInput: DataRawDBTableInput;
  dbName: Scalars['String'];
  project: Scalars['String'];
};


export type MutationdeleteTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesLookupByIdInput: TimeSeriesLookupByIdInput;
};


export type MutationdiagramConvertArgs = {
  apiV1ProjectContextDiagramConvertInput?: InputMaybe<ApiV1ProjectContextDiagramConvertInput>;
  project: Scalars['String'];
};


export type MutationdiagramDetectArgs = {
  apiV1ProjectContextDiagramDetectInput?: InputMaybe<ApiV1ProjectContextDiagramDetectInput>;
  project: Scalars['String'];
};


export type MutationdownloadLinksArgs = {
  fileLinkIdsInput: FileLinkIdsInput;
  project: Scalars['String'];
};


export type MutationentityMatchingCreateArgs = {
  apiV1ProjectContextEntitymatching2Input?: InputMaybe<ApiV1ProjectContextEntitymatching2Input>;
  project: Scalars['String'];
};


export type MutationentityMatchingDeleteArgs = {
  apiV1ProjectContextEntitymatchingDeleteInput?: InputMaybe<ApiV1ProjectContextEntitymatchingDeleteInput>;
  project: Scalars['String'];
};


export type MutationentityMatchingFilterArgs = {
  apiV1ProjectContextEntitymatchingListInput?: InputMaybe<ApiV1ProjectContextEntitymatchingListInput>;
  project: Scalars['String'];
};


export type MutationentityMatchingPredictArgs = {
  entityMatchingPredictSchemaInput?: InputMaybe<Scalars['JSON']>;
  project: Scalars['String'];
};


export type MutationentityMatchingReFitArgs = {
  entityMatchingRefitSchemaInput?: InputMaybe<Scalars['JSON']>;
  project: Scalars['String'];
};


export type MutationentityMatchingRetrieveArgs = {
  apiV1ProjectContextEntitymatchingByidsInput?: InputMaybe<ApiV1ProjectContextEntitymatchingByidsInput>;
  project: Scalars['String'];
};


export type MutationentityMatchingUpdateArgs = {
  apiV1ProjectContextEntitymatchingUpdateInput?: InputMaybe<ApiV1ProjectContextEntitymatchingUpdateInput>;
  project: Scalars['String'];
};


export type Mutationfilter3DAssetMappingsArgs = {
  assetMapping3DFilterRequestInput?: InputMaybe<AssetMapping3DFilterRequestInput>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type Mutationfilter3DNodesArgs = {
  modelId: Scalars['Float'];
  node3DFilterBodyInput: Node3DFilterBodyInput;
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type MutationfilterExtPipesArgs = {
  extPipesFilterRequestInput: ExtPipesFilterRequestInput;
  project: Scalars['String'];
};


export type MutationfilterRunsArgs = {
  project: Scalars['String'];
  runsFilterRequestInput: RunsFilterRequestInput;
};


export type Mutationget3DNodesByIdArgs = {
  modelId: Scalars['Float'];
  node3DIdsInput: Node3DIdsInput;
  project: Scalars['String'];
  revisionId: Scalars['Float'];
};


export type MutationgetDataSetsArgs = {
  dataSetIdEitherListInput?: InputMaybe<DataSetIdEitherListInput>;
  project: Scalars['String'];
};


export type MutationgetLatestArgs = {
  datapointsLatestQueryInput: DatapointsLatestQueryInput;
  project: Scalars['String'];
};


export type MutationgetLatestSequenceRowArgs = {
  project: Scalars['String'];
  sequenceLatestDataRequestInput: Scalars['JSON'];
};


export type MutationgetMultiTimeSeriesDatapointsArgs = {
  datapointsMultiQueryInput: DatapointsMultiQueryInput;
  project: Scalars['String'];
};


export type MutationgetSequenceByIdArgs = {
  dataResourceIdsWithIgnoreUnknownIdsInput: DataResourceIdsWithIgnoreUnknownIdsInput;
  project: Scalars['String'];
};


export type MutationgetSequenceDataArgs = {
  project: Scalars['String'];
  sequenceDataRequestInput: Scalars['JSON'];
};


export type MutationgetTimeSeriesByIdsArgs = {
  project: Scalars['String'];
  timeSeriesLookupByIdInput: TimeSeriesLookupByIdInput;
};


export type MutationinitFileUploadArgs = {
  externalFilesMetadataInput: ExternalFilesMetadataInput;
  origin?: InputMaybe<Scalars['String']>;
  overwrite?: InputMaybe<Scalars['Boolean']>;
  project: Scalars['String'];
};


export type MutationlistAssetsArgs = {
  assetListScopeInput?: InputMaybe<AssetListScopeInput>;
  project: Scalars['String'];
};


export type MutationlistDataSetsArgs = {
  dataSetFilterRequestInput?: InputMaybe<DataSetFilterRequestInput>;
  project: Scalars['String'];
};


export type MutationlistRelationshipsArgs = {
  project: Scalars['String'];
  relationshipsAdvancedListRequestInput: RelationshipsAdvancedListRequestInput;
};


export type MutationlistTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesListDTOInput?: InputMaybe<TimeSeriesListDTOInput>;
};


export type MutationpostMultiTimeSeriesDatapointsArgs = {
  datapointsInsertQueryInput: DatapointsInsertQueryInput;
  project: Scalars['String'];
};


export type MutationpostRowsArgs = {
  dataRawDBRowInput: DataRawDBRowInput;
  dbName: Scalars['String'];
  ensureParent?: InputMaybe<Scalars['Boolean']>;
  project: Scalars['String'];
  tableName: Scalars['String'];
};


export type MutationpostSequenceDataArgs = {
  dataSequencePostDataInput: DataSequencePostDataInput;
  project: Scalars['String'];
};


export type MutationpostTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesCreateRequestInput: TimeSeriesCreateRequestInput;
};


export type MutationquerySyntheticTimeseriesArgs = {
  project: Scalars['String'];
  syntheticMultiQueryInput: SyntheticMultiQueryInput;
};


export type MutationsearchAssetsArgs = {
  assetSearchFilterInput: AssetSearchFilterInput;
  project: Scalars['String'];
};


export type MutationsearchEventsArgs = {
  eventSearchRequestInput?: InputMaybe<EventSearchRequestInput>;
  project: Scalars['String'];
};


export type MutationsearchFilesArgs = {
  filesSearchFilterInput?: InputMaybe<FilesSearchFilterInput>;
  project: Scalars['String'];
};


export type MutationsearchSequencesArgs = {
  project: Scalars['String'];
  sequencesSearchDTOInput?: InputMaybe<SequencesSearchDTOInput>;
};


export type MutationsearchTimeSeriesArgs = {
  project: Scalars['String'];
  timeSeriesSearchDTOInput?: InputMaybe<TimeSeriesSearchDTOInput>;
};


export type Mutationupdate3DModelsArgs = {
  apiV1Project3dModelsUpdateInput: ApiV1Project3dModelsUpdateInput;
  project: Scalars['String'];
};


export type Mutationupdate3DRevisionsArgs = {
  apiV1Project3dModelRevisionsUpdateInput?: InputMaybe<ApiV1Project3dModelRevisionsUpdateInput>;
  modelId: Scalars['Float'];
  project: Scalars['String'];
};


export type MutationupdateAssetsArgs = {
  dataAssetChangeInput: DataAssetChangeInput;
  project: Scalars['String'];
};


export type MutationupdateDataSetsArgs = {
  dataSetUpdateListInput: DataSetUpdateListInput;
  project: Scalars['String'];
};


export type MutationupdateEventsArgs = {
  dataEventChangeInput: DataEventChangeInput;
  project: Scalars['String'];
};


export type MutationupdateExtPipesArgs = {
  itemsRequestExtPipeUpdateInput: ItemsRequestExtPipeUpdateInput;
  project: Scalars['String'];
};


export type MutationupdateFilesArgs = {
  dataFileChangeInput: DataFileChangeInput;
  project: Scalars['String'];
};


export type MutationupdateRelationshipsArgs = {
  project: Scalars['String'];
  updateRelationshipWrapperInput: UpdateRelationshipWrapperInput;
};


export type MutationupdateSequencesArgs = {
  dataSequenceChangeInput: DataSequenceChangeInput;
  project: Scalars['String'];
};


export type MutationupdateThumbnailArgs = {
  modelId: Scalars['Float'];
  project: Scalars['String'];
  revisionId: Scalars['Float'];
  updateRevision3DThumbnailInput?: InputMaybe<UpdateRevision3DThumbnailInput>;
};

/** Filter request for events. Filters exact field matching or timestamp ranges inclusive min and max. */
export type EventFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /** Filter on events filter with exact match */
  filter?: InputMaybe<EventFilterInput>;
  /** <- Limits the maximum number of results to be returned by single request. In case there are more results to the request 'nextCursor' attribute will be provided as part of response. Request may contain less results than request limit. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
  /**
   * Sort by array of selected fields. Syntax: `["<fieldname>:asc|desc"]`. Default sort order is `asc` with short syntax: `["<fieldname>"]`.
   * Filter accepts the following field names: startTime, endTime, createdTime, lastUpdatedTime.
   * Partitions are done independently of sorting, there is no guarantee on sort order between elements from different partitions.
   *
   */
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Filter on events filter with exact match */
export type EventFilterInput = {
  /** Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified. */
  activeAtTime?: InputMaybe<ActiveAtTimeFilterInput>;
  /** Asset External IDs of equipment that this event relates to. */
  assetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Asset IDs of equipment that this event relates to. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include events that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Either range between two timestamps or isNull filter condition. */
  endTime?: InputMaybe<Scalars['JSON']>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** This parameter is deprecated. Use assetSubtreeIds instead. Only include events that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The source of this event. */
  source?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  startTime?: InputMaybe<EpochTimestampRangeInput>;
  /** SubType of the event, e.g 'electrical'. */
  subtype?: InputMaybe<Scalars['String']>;
  /** Type of the event, e.g 'failure'. */
  type?: InputMaybe<Scalars['String']>;
};

/** Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified. */
export type ActiveAtTimeFilterInput = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

/** Range between two timestamps (inclusive). */
export type EpochTimestampRangeInput = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

export type FileFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Filter2Input>;
  /** <- Maximum number of items that the client want to get back. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type Filter2Input = {
  /** Only include files that reference these specific asset external IDs. */
  assetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Only include files that reference these specific asset IDs. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include files that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Only include files that belong to these datasets. */
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the directory. */
  directoryPrefix?: InputMaybe<Scalars['String']>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Only include files matching the specified geographic relation. */
  geoLocation?: InputMaybe<GeoLocationFilterInput>;
  /** Return only the resource matching the specified label constraints. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: InputMaybe<Scalars['String']>;
  /** Name of the file. */
  name?: InputMaybe<Scalars['String']>;
  /** Only include files that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The source of this event. */
  source?: InputMaybe<Scalars['String']>;
  sourceCreatedTime?: InputMaybe<SourceCreatedTime4Input>;
  sourceModifiedTime?: InputMaybe<SourceModifiedTime4Input>;
  /** Whether or not the actual file is uploaded. This field is returned only by the API, it has no effect in a post body. */
  uploaded?: InputMaybe<Scalars['Boolean']>;
  /** Range between two timestamps (inclusive). */
  uploadedTime?: InputMaybe<EpochTimestampRangeInput>;
};

/** Only include files matching the specified geographic relation. */
export type GeoLocationFilterInput = {
  /** One of the supported queries. */
  relation: Relation;
  /** Represents the points, curves and surfaces in the coordinate space. */
  shape: Scalars['JSON'];
};

export type Relation =
  | 'INTERSECTS'
  | 'DISJOINT'
  | 'WITHIN';

export type SourceCreatedTime4Input = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

export type SourceModifiedTime4Input = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

export type SequencesAdvancedListDTOInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<SequenceFilterInput>;
  /** Return up to this many results per page. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type SequenceFilterInput = {
  /** Return only sequences linked to one of the specified assets. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include sequences that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Only include sequences that belong to these datasets. */
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Filter the sequences by metadata fields and values (case-sensitive). Format is {"key1":"value1","key2":"value2"}. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Return only sequences with this *exact* name. */
  name?: InputMaybe<Scalars['String']>;
  /** Only include sequences that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DataAssetAggregate = {
  items: Array<Maybe<AssetAggregate>>;
};

/** Aggregation group of assets */
export type AssetAggregate = {
  /** Size of the aggregation group */
  count: Scalars['Float'];
};

/** Aggregation request of assets. Filters behave the same way as for the `list` endpoint. Default aggregation is `count`. */
export type AssetAggregateRequestInput = {
  /** Filter on assets with strict matching. */
  filter?: InputMaybe<FilterInput>;
};

/** Filter on assets with strict matching. */
export type FilterInput = {
  /** Only include assets in subtrees rooted at the specified assets (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Return only the resource matching the specified label constraints. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the asset. */
  name?: InputMaybe<Scalars['String']>;
  /** Return only the direct descendants of the specified assets. */
  parentExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Return only the direct descendants of the specified assets. */
  parentIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Whether the filtered assets are root assets, or not. Set to True to only list root assets. */
  root?: InputMaybe<Scalars['Boolean']>;
  /** This parameter is deprecated. Use assetSubtreeIds instead. Only include these root assets and their descendants. */
  rootIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** The source of the asset. */
  source?: InputMaybe<Scalars['String']>;
};

export type DataDataSetAggregate = {
  items: Array<Maybe<DataSetAggregate>>;
};

/** Aggregation group of data sets */
export type DataSetAggregate = {
  /** Size of the aggregation group */
  count: Scalars['Float'];
};

/** Aggregation request of data sets. Filters exact field matching or timestamp ranges inclusive min and max. */
export type DataSetAggregateRequestInput = {
  /** Filter on data sets with strict matching. */
  filter?: InputMaybe<DataSetFilterInput>;
};

/** Filter on data sets with strict matching. */
export type DataSetFilterInput = {
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  writeProtected?: InputMaybe<Scalars['Boolean']>;
};

/** No description available. */
export type AggregateResult = CountAggregateResult | ValuesAggregateResult;

/** Count aggregation result. */
export type CountAggregateResult = {
  items: Array<Maybe<Items8ListItem>>;
};

export type Items8ListItem = {
  /** Number of items in this aggregation group. */
  count: Scalars['Float'];
};

/** Values aggregation result. */
export type ValuesAggregateResult = {
  items: Array<Maybe<Items9ListItem>>;
};

/** No description available. */
export type Items9ListItem = StringValue | IntegerValue;

/** A unique string value in the field. */
export type StringValue = {
  value: Scalars['String'];
};

/** A unique integer value in the field. */
export type IntegerValue = {
  value: Scalars['Float'];
};

export type DataFilesAggregate = {
  items: Array<Maybe<FilesAggregate>>;
};

/** Aggregation results for files */
export type FilesAggregate = {
  /** Number of filtered items included in aggregation */
  count: Scalars['Float'];
};

/** Filter on files with exact match */
export type FileFilterInput = {
  filter?: InputMaybe<Filter2Input>;
};

export type SequenceAggregateResponse = {
  items: Array<Maybe<Items63ListItem>>;
};

/** count of elements in the aggregation group */
export type Items63ListItem = {
  count: Scalars['Float'];
};

export type SequencesAggregateDTOInput = {
  filter?: InputMaybe<SequenceFilterInput>;
};

export type TimeSeriesAggregateResponse = {
  items: Array<Maybe<Items37ListItem>>;
};

/** count of elements in the aggregation group */
export type Items37ListItem = {
  count: Scalars['Float'];
};

export type TimeSeriesAggregateDTOInput = {
  filter?: InputMaybe<Filter4Input>;
};

export type Filter4Input = {
  /** Asset External IDs of related equipment that this time series relates to. */
  assetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Only include time series that reference these specific asset IDs. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Only include time series that are related to an asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned. */
  assetSubtreeIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Only include time series that reference these specific data set IDs. */
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Filter by this (case-sensitive) prefix for the external ID. */
  externalIdPrefix?: InputMaybe<Scalars['String']>;
  /** Filter on isStep. */
  isStep?: InputMaybe<Scalars['Boolean']>;
  /** Filter on isString. */
  isString?: InputMaybe<Scalars['Boolean']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Filter on name. */
  name?: InputMaybe<Scalars['String']>;
  /** Only include time series that have a related asset in a tree rooted at any of these root assetIds. */
  rootAssetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Filter on unit. */
  unit?: InputMaybe<Scalars['String']>;
};

/** List of responses. The order matches the requests order. */
export type DataGetTimeSeriesMetadataDTO = {
  items: Array<Maybe<GetTimeSeriesMetadataDTO>>;
};

export type TimeSeriesUpdateRequestInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataAsset = {
  items: Array<Maybe<Asset>>;
};

export type AssetDataIdsInput = {
  /** Set of aggregated properties to include */
  aggregatedProperties?: InputMaybe<Array<InputMaybe<AggregatedProperty>>>;
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type AggregatedProperty =
  | 'CHILDCOUNT'
  | 'PATH'
  | 'DEPTH';

export type EventResponse = {
  items: Array<Maybe<Event>>;
};

export type EventDataIdsInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataFileMetadata = {
  items?: Maybe<Array<Maybe<FilesMetadata>>>;
};

export type FileDataIdsWithIgnoreUnknownIdsInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ExtendedItemsRequestExtPipeIdInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type EnrichedRelationshipResponseWrapper = {
  items: Array<Maybe<EnrichedRelationshipResponse>>;
};

export type EnrichedRelationshipResponse = {
  /** Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project. */
  confidence?: Maybe<Scalars['Float']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was created. */
  createdTime: Scalars['Int'];
  /** The ID of the dataset the relationship belongs to. */
  dataSetId?: Maybe<Scalars['Int']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime. */
  endTime?: Maybe<Scalars['Int']>;
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship was last updated. */
  lastUpdatedTime: Scalars['Int'];
  source?: Maybe<Source3>;
  /** The external ID of the resource that is the relationship source. */
  sourceExternalId: Scalars['String'];
  /** The resource type of the relationship source. Must be one of the specified values. */
  sourceType: Scalars['String'];
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime. */
  startTime?: Maybe<Scalars['Int']>;
  target?: Maybe<Target2>;
  /** The external ID of the resource that is the relationship target. */
  targetExternalId: Scalars['String'];
  /** The resource type of the relationship target. Must be one of the specified values. */
  targetType: Scalars['String'];
};

/** No description available. */
export type Source3 = GetSequenceDTO | GetTimeSeriesMetadataDTO;

/** No description available. */
export type Target2 = GetSequenceDTO | GetTimeSeriesMetadataDTO;

export type ByIdsRequestInput = {
  /**
   * If true,
   * will try to fetch the resources referred to in the relationship,
   * based on the users access rights.
   * Will silently fail to attatch the resources if the user lacks access to some of them.
   *
   */
  fetchResources?: InputMaybe<Scalars['Boolean']>;
  /** Ignore external IDs that are not found. */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<ExternalIdObjectInput>>;
};

export type ExternalIdObjectInput = {
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
};

export type AssetMapping3DList = {
  items: Array<Maybe<AssetMapping3D>>;
};

export type ApiV1Project3dModelRevisionMappingsInput = {
  items: Array<InputMaybe<CreateAssetMapping3DInput>>;
};

export type CreateAssetMapping3DInput = {
  /** The ID of the associated asset (Cognite's Assets API). */
  assetId: Scalars['Float'];
  /** The ID of the node. */
  nodeId: Scalars['Float'];
};

export type Model3DList = {
  items: Array<Maybe<Model3D>>;
};

export type ApiV1Project3dModelsInput = {
  items: Array<InputMaybe<CreateModel3DInput>>;
};

export type CreateModel3DInput = {
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the model. */
  name: Scalars['String'];
};

export type Revision3DList = {
  items: Array<Maybe<Revision3D>>;
};

export type ApiV1Project3dModelRevisionsInput = {
  items: Array<InputMaybe<CreateRevision3DInput>>;
};

export type CreateRevision3DInput = {
  /** Initial camera position and target. */
  camera?: InputMaybe<RevisionCameraPropertiesInput>;
  /** The file id to a file uploaded to Cognite's Files API. Can only be set on revision creation, and can never be updated. */
  fileId: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** True if the revision is marked as published. */
  published?: InputMaybe<Scalars['Boolean']>;
  rotation?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Initial camera position and target. */
export type RevisionCameraPropertiesInput = {
  /** Initial camera position. */
  position?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Initial camera target. */
  target?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DataExternalAssetInput = {
  items: Array<InputMaybe<DataExternalAssetItemInput>>;
};

export type DataExternalAssetItemInput = {
  /** The id of the dataset this asset belongs to. */
  dataSetId?: InputMaybe<Scalars['Int']>;
  /** The description of the asset. */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** A list of the labels associated with this resource item. */
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the asset. */
  name: Scalars['String'];
  /** The external ID of the parent. This will be resolved to an internal ID and stored as `parentId`. */
  parentExternalId?: InputMaybe<Scalars['String']>;
  /**
   * The parent node's ID used to specify parent-child relationship.
   *
   * You should not use this field in combination with the parentExternalId field.
   *
   */
  parentId?: InputMaybe<Scalars['Int']>;
  /** The source of the asset. */
  source?: InputMaybe<Scalars['String']>;
};

/** A label assigned to a resource. */
export type LabelInput = {
  /** An external ID to a predefined label definition. */
  externalId: Scalars['String'];
};

export type DataRawDB = {
  items?: Maybe<Array<Maybe<RawDB>>>;
};

export type DataRawDBInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBInput>>>;
};

/** A NoSQL database to store customer data. */
export type RawDBInput = {
  /** Unique name of a database. */
  name: Scalars['String'];
};

export type DataSetList = {
  items: Array<Maybe<DataSet>>;
};

export type DataSet = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The description of the data set. */
  description?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** The name of the data set. */
  name?: Maybe<Scalars['String']>;
  /** To write data to a write-protected data set, you need to be a member of a group that has the "datasets:owner" action for the data set.  To learn more about write-protected data sets, follow this [guide](/cdf/data_governance/concepts/datasets/#write-protection) */
  writeProtected: Scalars['Boolean'];
};

export type DataSetSpecListInput = {
  items: Array<InputMaybe<DataSetSpecInput>>;
};

export type DataSetSpecInput = {
  /** The description of the data set. */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The name of the data set. */
  name?: InputMaybe<Scalars['String']>;
  /** To write data to a write-protected data set, you need to be a member of a group that has the "datasets:owner" action for the data set.  To learn more about write-protected data sets, follow this [guide](/cdf/data_governance/concepts/datasets/#write-protection) */
  writeProtected?: InputMaybe<Scalars['Boolean']>;
};

export type DataExternalEventInput = {
  items: Array<InputMaybe<ExternalEventInput>>;
};

/** An event represents something that happened at a given interval in time, e.g a failure, a work order etc. */
export type ExternalEventInput = {
  /** Asset IDs of equipment that this event relates to. */
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The id of the dataset this event belongs to. */
  dataSetId?: InputMaybe<Scalars['Int']>;
  /** Textual description of the event. */
  description?: InputMaybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  endTime?: InputMaybe<Scalars['Float']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** The source of this event. */
  source?: InputMaybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime?: InputMaybe<Scalars['Float']>;
  /** SubType of the event, e.g 'electrical'. */
  subtype?: InputMaybe<Scalars['String']>;
  /** Type of the event, e.g 'failure'. */
  type?: InputMaybe<Scalars['String']>;
};

export type ItemsRequestCreateExtPipeInput = {
  items: Array<InputMaybe<CreateExtPipeInput>>;
};

export type CreateExtPipeInput = {
  /** Contacts list. */
  contacts?: InputMaybe<Array<InputMaybe<ContactInput>>>;
  /** DataSet ID */
  dataSetId: Scalars['Float'];
  /** Description of Extraction Pipeline */
  description?: InputMaybe<Scalars['String']>;
  /** Documentation text field, supports Markdown for text formatting. */
  documentation?: InputMaybe<Scalars['String']>;
  /** External Id provided by client. Should be unique within the project. */
  externalId: Scalars['String'];
  /** Custom, application specific metadata. String key -> String value. Limits: Key are at most 128 bytes. Values are at most 10240 bytes. Up to 256 key-value pairs. Total size is at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Name of Extraction Pipeline */
  name: Scalars['String'];
  /** Raw tables */
  rawTables?: InputMaybe<Array<InputMaybe<RawTableInput>>>;
  /** Possible values: “On trigger”, “Continuous” or cron expression. If empty then null */
  schedule?: InputMaybe<Scalars['String']>;
  /** Source for Extraction Pipeline */
  source?: InputMaybe<Scalars['String']>;
};

export type ContactInput = {
  /** Contact email */
  email?: InputMaybe<Scalars['String']>;
  /** Contact name */
  name?: InputMaybe<Scalars['String']>;
  /** Contact role */
  role?: InputMaybe<Scalars['String']>;
  /** True, if contact receives email notifications */
  sendNotification?: InputMaybe<Scalars['Boolean']>;
};

export type RawTableInput = {
  /** Database name */
  dbName: Scalars['String'];
  /** Table name */
  tableName: Scalars['String'];
};

export type RelationshipResponseWrapper = {
  items: Array<Maybe<RelationshipResponse>>;
};

export type RelationshipRequestWrapperInput = {
  items: Array<InputMaybe<RelationshipInput>>;
};

/** The representation of a relationship consists of a source and a target and additional parameters. */
export type RelationshipInput = {
  /** Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project. */
  confidence?: InputMaybe<Scalars['Float']>;
  /** The ID of the dataset the relationship belongs to. */
  dataSetId?: InputMaybe<Scalars['Int']>;
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime. */
  endTime?: InputMaybe<Scalars['Int']>;
  /** External ID of the relationship, must be unique within the project. */
  externalId: Scalars['String'];
  /** A list of the labels associated with this resource item. */
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  /** The external ID of the resource that is the relationship source. */
  sourceExternalId: Scalars['String'];
  /** The resource type of the relationship source. Must be one of the specified values. */
  sourceType: Scalars['String'];
  /** The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime. */
  startTime?: InputMaybe<Scalars['Int']>;
  /** The external ID of the resource that is the relationship target. */
  targetExternalId: Scalars['String'];
  /** The resource type of the relationship target. Must be one of the specified values. */
  targetType: Scalars['String'];
};

/** Response with a list of elements. */
export type ItemsResponseCreateExtPipeRunResponse = {
  items?: Maybe<Array<Maybe<CreateExtPipeRunResponse>>>;
};

export type CreateExtPipeRunResponse = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: Maybe<Scalars['Float']>;
  /** Extraction Pipeline external Id. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
  /** Error message. */
  message?: Maybe<Scalars['String']>;
  /** Extraction Pipeline status. */
  status: Scalars['String'];
};

export type ItemsRequestExtPipeRunRequestInput = {
  items: Array<InputMaybe<ExtPipeRunRequestInput>>;
};

/** Status of the extraction pipeline. */
export type ExtPipeRunRequestInput = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime?: InputMaybe<Scalars['Float']>;
  /** Extraction pipeline external Id provided by client. Should be unique within the project. */
  externalId: Scalars['String'];
  /** Error message. */
  message?: InputMaybe<Scalars['String']>;
  /** A status attribute represents the final status of a particular job run by an extraction pipeline. Utilize `success` and `failure` to indicate if the run has succeeded or failed for any reason. In addition, a heartbeat can be implemented by an extraction pipeline by periodically sending `seen` status represented by last seen and last connected time. */
  status: ExtPipeRunStatus;
};

export type ExtPipeRunStatus =
  | 'SUCCESS'
  | 'FAILURE'
  | 'SEEN';

export type SecurityCategoryResponse = {
  items?: Maybe<Array<Maybe<SecurityCategoryDTO>>>;
};

export type DataSecurityCategorySpecDTOInput = {
  items: Array<InputMaybe<SecurityCategorySpecDTOInput>>;
};

export type SecurityCategorySpecDTOInput = {
  /** Name of the security category */
  name: Scalars['String'];
};

export type DataGetSequence = {
  items: Array<Maybe<GetSequenceDTO>>;
};

export type DataPostSequenceInput = {
  items: Array<InputMaybe<PostSequenceDTOInput>>;
};

/** Describes a new sequence */
export type PostSequenceDTOInput = {
  /** Optional asset this sequence is associated with */
  assetId?: InputMaybe<Scalars['Float']>;
  /** List of column definitions. Maximum number of numeric columns is 400. Maximum number of string columns is 200. Maximum total number of columns is 400. */
  columns: Array<InputMaybe<PostSequenceColumnDTOInput>>;
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** Description of the sequence */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, up to a total size of 10000 bytes across all keys and values. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Name of the sequence */
  name?: InputMaybe<Scalars['String']>;
};

/** Describes a new column */
export type PostSequenceColumnDTOInput = {
  /** Description of the column */
  description?: InputMaybe<Scalars['String']>;
  /** User provided column identifier (Unique for a given sequence) */
  externalId: Scalars['String'];
  /** Custom, application specific metadata. String key -> String value */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Human readable name of the sequence */
  name?: InputMaybe<Scalars['String']>;
  /** What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100] */
  valueType?: InputMaybe<SequenceValueTypeEnum>;
};

export type DataRawDBTable = {
  items?: Maybe<Array<Maybe<RawDBTable>>>;
};

export type DataRawDBTableInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBTableInput>>>;
};

/** A NoSQL database table to store customer data */
export type RawDBTableInput = {
  /** Unique name of the table */
  name: Scalars['String'];
};

export type ApiV1Project3dModelRevisionMappingsDeleteInput = {
  items: Array<InputMaybe<DeleteAssetMapping3DInput>>;
};

export type DeleteAssetMapping3DInput = {
  /** The ID of the associated asset (Cognite's Assets API). */
  assetId: Scalars['Float'];
  /** The ID of the node. */
  nodeId: Scalars['Float'];
};

export type DataIdentifiersInput = {
  /** List of ID objects */
  items: Array<InputMaybe<DataIdentifierInput>>;
};

export type DataIdentifierInput = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
};

export type DeleteRequestInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
  /** Recursively delete all asset subtrees under the specified IDs. */
  recursive?: InputMaybe<Scalars['Boolean']>;
};

export type DeleteRawDBInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBInput>>>;
  /** When true, tables of this database are deleted with the database. */
  recursive?: InputMaybe<Scalars['Boolean']>;
};

export type DatapointsDeleteQueryInput = {
  /** List of delete filters */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ItemsRequestExtPipeIdInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type FileDataIdsInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type ApiV1ProjectRelationshipsDeleteInput = {
  /** Ignore external IDs that are not found. */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<ExternalIdObjectInput>>;
};

export type DataRawDBRowKeyInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBRowKeyInput>>>;
};

/** A row key */
export type RawDBRowKeyInput = {
  /** Unique row key */
  key: Scalars['String'];
};

export type DataLongInput = {
  items: Array<InputMaybe<Scalars['Float']>>;
};

export type DataSequenceDataDeleteRequestInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataResourceIdsWithIgnoreUnknownIdsInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type TimeSeriesLookupByIdInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  /** List of ID objects */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextDiagramConvert2 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** Return the SVG version in grayscale colors only (reduces the file size). */
  grayscale?: Maybe<Scalars['Boolean']>;
  items: Array<Maybe<Scalars['JSON']>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextDiagramConvertInput = {
  /** Return the SVG version in grayscale colors only (reduces the file size). */
  grayscale?: InputMaybe<Scalars['Boolean']>;
  /** An array of files and annotations to create interactive diagrams. */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextDiagramDetect2 = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  items: Array<Maybe<Scalars['JSON']>>;
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits. */
  minTokens?: Maybe<Scalars['Int']>;
  /** Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously. */
  partialMatch?: Maybe<Scalars['Boolean']>;
  /** This field determines the string to search for and to identify object entities. */
  searchField?: Maybe<Scalars['String']>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextDiagramDetectInput = {
  /** A list of entities to look for. For example, all the assets under a root node. The `searchField` determines the strings that identify the entities. */
  entities: Array<InputMaybe<Scalars['JSON']>>;
  /** Files to run entity detection on. */
  items: Array<InputMaybe<Scalars['JSON']>>;
  /** Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits. */
  minTokens?: InputMaybe<Scalars['Int']>;
  /** Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously. */
  partialMatch?: InputMaybe<Scalars['Boolean']>;
  /** This field determines the string to search for and to identify object entities. */
  searchField?: InputMaybe<Scalars['String']>;
};

export type ApiV1ProjectFilesDownloadlink = {
  items?: Maybe<Array<Maybe<Items16ListItem>>>;
};

/** No description available. */
export type Items16ListItem = FileInternalId | FileExternalId;

export type FileInternalId = {
  /** A server-generated ID for the object. */
  id?: Maybe<Scalars['Float']>;
};

export type FileExternalId = {
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
};

export type FileLinkIdsInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type ApiV1ProjectContextEntitymatching2Input = {
  /** The classifier used in the model. Only relevant if there are trueMatches/labeled data and a supervised model is fitted. */
  classifier?: InputMaybe<Classifier2>;
  /** User defined description. */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /**
   * Each feature type defines one combination of features that will be created and used in the entity matcher model. All features are based on matching tokens. Tokens are defined at the top of the Entity matching section.
   * The options are:
   *   * Simple: Calculates the cosine-distance similarity score for each of the pairs of fields defined in `matchFields`. This is the fastest option.
   *   * Insensitive: Similar to Simple, but ignores lowercase/uppercase differences.
   *   * Bigram: Similar to `simple`, but adds similarity score based on matching bigrams of the tokens.
   *   * FrequencyWeightedBigram: Similar to `bigram`, but give higher weights to less commonly occurring tokens.
   *   * BigramExtraTokenizers: Similar to `bigram`, but able to learn that leading zeros, spaces, and uppercase/lowercase differences should be ignored in matching.
   *   * BigramCombo: Calculates all of the above options, relying on the model to determine the appropriate features to use.
   *   Hence, this option is only appropriate if there are  labeled data/trueMatches. This is the slowest option.
   *
   */
  featureType?: InputMaybe<Scalars['String']>;
  /** If True, replaces missing fields in `sources` or `targets` entities, for fields set in set in `matchFields`, with empty strings. Else, returns an error if there are missing data. */
  ignoreMissingFields?: InputMaybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: InputMaybe<Array<InputMaybe<MatchFieldsListItemInput>>>;
  /** User defined name. */
  name?: InputMaybe<Scalars['String']>;
  /** List of custom source object to match from, for example, time series. String key -> value. Only string values are considered in the matching. Both `id` and `externalId` fields are optional, only mandatory if the item is to be referenced in `trueMatches`. */
  sources: Array<InputMaybe<Scalars['JSON']>>;
  /** List of custom target object to match to, for example, assets. String key -> value. Only string values are considered in the matching. Both `id` and `externalId` fields are optional, only mandatory if the item is to be referenced in `trueMatches`. */
  targets: Array<InputMaybe<Scalars['JSON']>>;
  /** List of objects of pairs of sourceId or sourceExternalId and targetId or targetExternalId, that corresponds to entities in source and target respectively, that indicates a confirmed match used to train the model. If omitted, an unsupervised model is used. */
  trueMatches?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Scalars['JSON']>>>>>;
};

export type Classifier2 =
  | 'RANDOMFOREST'
  | 'DECISIONTREE'
  | 'LOGISTICREGRESSION'
  | 'AUGMENTEDLOGISTICREGRESSION'
  | 'AUGMENTEDRANDOMFOREST';

export type MatchFieldsListItemInput = {
  source: Scalars['String'];
  target: Scalars['String'];
};

export type ApiV1ProjectContextEntitymatchingDeleteInput = {
  /** List of ids or externalIds of models. */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextEntitymatchingList2 = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type ApiV1ProjectContextEntitymatchingListInput = {
  filter: Filter5Input;
  /** <- Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type Filter5Input = {
  /** The classifier used in the model. Only relevant if there are trueMatches/labeled data and a supervised model is fitted. */
  classifier?: InputMaybe<Classifier2>;
  /** User defined description. */
  description?: InputMaybe<Scalars['String']>;
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType?: InputMaybe<FeatureType>;
  /** User defined name. */
  name?: InputMaybe<Scalars['String']>;
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId?: InputMaybe<Scalars['Int']>;
};

export type ApiV1ProjectContextEntitymatchingPredict = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** Contextualization job ID. */
  jobId: Scalars['Float'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatchingRefit = {
  /** Name of the classifier used in the model, "Unsupervised" if unsupervised model. */
  classifier: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** User defined description. */
  description: Scalars['String'];
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId: Scalars['String'];
  /** Each feature type defines the combination of features that will be created and used in the entity matcher model. */
  featureType: FeatureType;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings. */
  ignoreMissingFields?: Maybe<Scalars['Boolean']>;
  /** List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here. */
  matchFields?: Maybe<Array<Maybe<MatchFieldsListItem>>>;
  /** User defined name. */
  name: Scalars['String'];
  /** The ID of original model, only relevant when the model is a retrained model. */
  originalId: Scalars['Int'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  startTime: Scalars['Float'];
  /** The status of the job. */
  status: JobStatus;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  statusTime: Scalars['Float'];
};

export type ApiV1ProjectContextEntitymatchingByids2 = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type ApiV1ProjectContextEntitymatchingByidsInput = {
  /** List of ids or externalIds of models. */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ApiV1ProjectContextEntitymatchingUpdate2 = {
  items: Array<Maybe<EntityMatcherResponseSchema>>;
};

export type ApiV1ProjectContextEntitymatchingUpdateInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type AssetMapping3DFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JSON']>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

/** Filter request for nodes. Filters nodes with properties matching ones in a list of alternatives. */
export type Node3DFilterBodyInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /** Filters used in the search. */
  filter?: InputMaybe<Node3DPropertyFilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

/** Filters used in the search. */
export type Node3DPropertyFilterInput = {
  /** Contains one or more categories (namespaces), each of which contains one or more properties. Each property is associated with a list of values. The list of values acts as an OR-clause, so that if a node's corresponding property value equals ANY of the strings in the list, it satisfies the condition for that property. The different properties are concatenated with AND-operations, so that a node must satisfy the condition for ALL properties from all categories to be part of the returned set. The allowed number of property values is limited to 1000 values in total. */
  properties?: InputMaybe<Scalars['JSON']>;
};

export type ExtPipesFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['JSON']>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type RunsFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter: RunsFilterInput;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type RunsFilterInput = {
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Extraction pipeline external Id provided by client. */
  externalId: Scalars['String'];
  message?: InputMaybe<StringFilterInput>;
  /** Extraction pipeline statuses list. Expected values: success, failure, seen. */
  statuses?: InputMaybe<Array<InputMaybe<ExtPipeRunStatus>>>;
};

export type StringFilterInput = {
  /** Substring to find strings, that contains it ignoring case. */
  substring?: InputMaybe<Scalars['String']>;
};

export type Node3DList = {
  items: Array<Maybe<Node3D>>;
};

export type Node3DIdsInput = {
  items: Array<InputMaybe<Node3DIdInput>>;
};

export type Node3DIdInput = {
  /** The ID of the node. */
  id: Scalars['Float'];
};

export type DataSetIdEitherListInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
};

/** The list of responses. The order matches the requests order. */
export type DatapointsResponse = {
  items: Array<Maybe<Scalars['JSON']>>;
};

export type DatapointsLatestQueryInput = {
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  /** List of latest queries */
  items: Array<InputMaybe<Scalars['JSON']>>;
};

/** Data from a sequence */
export type SequenceGetData = {
  /** Column information in order given by data */
  columns: Array<Maybe<BasicGetSequenceColumnInfo>>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** List of row information */
  rows: Array<Maybe<SequenceRowDTO>>;
};

/** Column information returned on data requests */
export type BasicGetSequenceColumnInfo = {
  /** User provided column identifier (Unique for a given sequence) */
  externalId?: Maybe<Scalars['String']>;
  /** Human readable name of the column */
  name?: Maybe<Scalars['String']>;
  /** What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100] */
  valueType?: Maybe<SequenceValueTypeEnum>;
};

/** A single row of datapoints */
export type SequenceRowDTO = {
  /** The row number for this row */
  rowNumber: Scalars['Float'];
  /** List of values in order defined in the columns field (Number of items must match. Null is accepted for missing values. String values must be no longer than 256 characters) */
  values: Array<Maybe<Scalars['JSON']>>;
};

/** The list of responses. The order matches the requests order. */
export type DatapointsOrAggregatesResponse = {
  items: Array<Maybe<Scalars['JSON']>>;
};

export type DatapointsMultiQueryInput = {
  /** Specify the aggregates to return, or an empty array if this sub-query should return datapoints without aggregation. This value overrides a top-level default aggregates list. */
  aggregates?: InputMaybe<Array<InputMaybe<Aggregate>>>;
  /** Get datapoints up to, but excluding, this point in time. Same format as for start. Note that when using aggregates, the end will be rounded up such that the last aggregate represents a full aggregation interval containing the original end, where the interval is the granularity unit times the granularity multiplier. For granularity 2d, the aggregation interval is 2 days, if end was originally 3 days after the start, it will be rounded to 4 days after the start. */
  end?: InputMaybe<Scalars['JSON']>;
  /** The time granularity size and unit to aggregate over. Valid entries are 'day, hour, minute, second', or short forms 'd, h, m, s', or a multiple of these indicated by a number as a prefix. For 'second' and 'minute' the multiple must be an integer betwen 1 and 120 inclusive, for 'hour' and 'day' the multiple must be an integer between 1 and 100000 inclusive. For example, a granularity '5m' means that aggregates are calculated over 5 minutes. This field is required if aggregates are specified. */
  granularity?: InputMaybe<Scalars['String']>;
  /** Ignore IDs and external IDs that are not found */
  ignoreUnknownIds?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include the last datapoint before the requested time period, and the first one after. This option is useful for interpolating data. It is not available for aggregates. */
  includeOutsidePoints?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<Scalars['JSON']>>;
  /** Return up to this number of datapoints. The maximum is 100000 non-aggregated data points and 10000 aggregated data points in total across all queries in a single request. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Get datapoints starting from, and including, this time. The format is N[timeunit]-ago where
   * timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
   * old. You can also specify time in milliseconds since epoch. Note that for aggregates, the start time is rounded down to a whole granularity unit (in UTC timezone). Daily granularities (d)
   * are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
   */
  start?: InputMaybe<Scalars['JSON']>;
};

export type Aggregate =
  | 'AVERAGE'
  | 'MAX'
  | 'MIN'
  | 'COUNT'
  | 'SUM'
  | 'INTERPOLATION'
  | 'STEPINTERPOLATION'
  | 'TOTALVARIATION'
  | 'CONTINUOUSVARIANCE'
  | 'DISCRETEVARIANCE';

export type SequenceGetDataWithCursor = {
  /** Column information in order given by data */
  columns: Array<Maybe<BasicGetSequenceColumnInfo>>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** Cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
  /** List of row information */
  rows: Array<Maybe<SequenceRowDTO>>;
};

export type ApiV1ProjectFiles = {
  assetIds?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  createdTime: Scalars['Float'];
  /** The dataSet Id for the item. */
  dataSetId?: Maybe<Scalars['Float']>;
  /** Directory containing the file. Must be an absolute, unix-style path. */
  directory?: Maybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: Maybe<Scalars['String']>;
  /** The geographic metadata of the file. */
  geoLocation?: Maybe<GeoLocation>;
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  /** A list of the labels associated with this resource item. */
  labels?: Maybe<Array<Maybe<Label>>>;
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  lastUpdatedTime: Scalars['Float'];
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: Maybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: Maybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The security category IDs required to access this file. */
  securityCategories?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The source of the file. */
  source?: Maybe<Scalars['String']>;
  sourceCreatedTime?: Maybe<Scalars['Int']>;
  sourceModifiedTime?: Maybe<Scalars['Int']>;
  /** The URL where the file contents should be uploaded. */
  uploadUrl: Scalars['String'];
  /** Whether or not the actual file is uploaded.  This field is returned only by the API, it has no effect in a post body. */
  uploaded: Scalars['Boolean'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  uploadedTime?: Maybe<Scalars['Float']>;
};

export type ExternalFilesMetadataInput = {
  assetIds?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** Directory containing the file. Must be an absolute, unix-style path. */
  directory?: InputMaybe<Scalars['String']>;
  /** The external ID provided by the client. Must be unique for the resource type. */
  externalId?: InputMaybe<Scalars['String']>;
  /** The geographic metadata of the file. */
  geoLocation?: InputMaybe<GeoLocationInput>;
  /** A list of the labels associated with this resource item. */
  labels?: InputMaybe<Array<InputMaybe<LabelInput>>>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** File type. E.g. text/plain, application/pdf, .. */
  mimeType?: InputMaybe<Scalars['String']>;
  /** Name of the file. */
  name: Scalars['String'];
  /** The security category IDs required to access this file. */
  securityCategories?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The source of the file. */
  source?: InputMaybe<Scalars['String']>;
  sourceCreatedTime?: InputMaybe<Scalars['Int']>;
  sourceModifiedTime?: InputMaybe<Scalars['Int']>;
};

/** The geographic metadata of the file. */
export type GeoLocationInput = {
  /** Represents the points, curves and surfaces in the coordinate space. */
  geometry: Scalars['JSON'];
  /** Additional properties in a String key -> Object value format. */
  properties?: InputMaybe<Scalars['JSON']>;
  /** One of the GeoJSON types. Currently only the 'Feature' type is supported. */
  type: Type;
};

export type AssetListScopeInput = {
  /** Set of aggregated properties to include */
  aggregatedProperties?: InputMaybe<Array<InputMaybe<AggregatedProperty>>>;
  cursor?: InputMaybe<Scalars['String']>;
  /** Filter on assets with strict matching. */
  filter?: InputMaybe<FilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type DataSetListWithCursor = {
  items: Array<Maybe<DataSet>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type DataSetFilterRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /** Filter on data sets with strict matching. */
  filter?: InputMaybe<DataSetFilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
};

export type PagedEnrichedRelationshipResponseWrapper = {
  items: Array<Maybe<EnrichedRelationshipResponse>>;
  /** The cursor to get the next page of results (if available). */
  nextCursor?: Maybe<Scalars['String']>;
};

export type RelationshipsAdvancedListRequestInput = {
  cursor?: InputMaybe<Scalars['String']>;
  /**
   * If true,
   * will try to fetch the resources referred to in the relationship,
   * based on the users access rights.
   * Will silently fail to attatch the resources if the user lacks access to some of them.
   *
   */
  fetchResources?: InputMaybe<Scalars['Boolean']>;
  /** Filter on relationships with exact match. Multiple filter elements in one property, for example `sourceExternalIds: [ "a", "b" ], returns all relationships where the sourceExternalId field is either `a` or `b`. Filters in multiple properties return relationships that match all criteria. If the filter is not specified, it defaults to an empty filter. */
  filter?: InputMaybe<AdvancedListFilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

/** Filter on relationships with exact match. Multiple filter elements in one property, for example `sourceExternalIds: [ "a", "b" ], returns all relationships where the sourceExternalId field is either `a` or `b`. Filters in multiple properties return relationships that match all criteria. If the filter is not specified, it defaults to an empty filter. */
export type AdvancedListFilterInput = {
  /** Limits results to those active within the specified time range, that is, if there is any overlap in the intervals [`activeAtTime.min`, `activeAtTime.max`] and [`startTime`, `endTime`], where both intervals are inclusive. If a relationship does not have a `startTime`, it is regarded as active from the beginning of time by this filter. If it does not have an `endTime` is is regarded as active until the end of time. Similarly, if a `min` is not supplied to the filter, the `min` is implicitly set to the beginning of time. If a `max` is not supplied, the `max` is implicitly set to the end of time. */
  activeAtTime?: InputMaybe<ActiveAtTimeInput>;
  /** Range to filter the field for (inclusive). */
  confidence?: InputMaybe<FloatRangeInput>;
  /** Range between two timestamps (inclusive). */
  createdTime?: InputMaybe<EpochTimestampRangeInput>;
  dataSetIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  /** Range between two timestamps (inclusive). */
  endTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Return only the resource matching the specified label constraints. */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Range between two timestamps (inclusive). */
  lastUpdatedTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Include relationships that have any of these values in their `sourceExternalId` field */
  sourceExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Include relationships that have any of these values in their `sourceType` field */
  sourceTypes?: InputMaybe<Array<InputMaybe<ResourceType>>>;
  /** Include relationships that match any of the resources in either their source- or target-related fields. */
  sourcesOrTargets?: InputMaybe<Array<InputMaybe<ResourceReferenceWithExternalIdInput>>>;
  /** Range between two timestamps (inclusive). */
  startTime?: InputMaybe<EpochTimestampRangeInput>;
  /** Include relationships that have any of these values in their `targetExternalId` field */
  targetExternalIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Include relationships that have any of these values in their `targetType` field */
  targetTypes?: InputMaybe<Array<InputMaybe<ResourceType>>>;
};

/** Limits results to those active within the specified time range, that is, if there is any overlap in the intervals [`activeAtTime.min`, `activeAtTime.max`] and [`startTime`, `endTime`], where both intervals are inclusive. If a relationship does not have a `startTime`, it is regarded as active from the beginning of time by this filter. If it does not have an `endTime` is is regarded as active until the end of time. Similarly, if a `min` is not supplied to the filter, the `min` is implicitly set to the beginning of time. If a `max` is not supplied, the `max` is implicitly set to the end of time. */
export type ActiveAtTimeInput = {
  /** Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  max?: InputMaybe<Scalars['Float']>;
  /** Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  min?: InputMaybe<Scalars['Float']>;
};

/** Range to filter the field for (inclusive). */
export type FloatRangeInput = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type ResourceType =
  | 'ASSET'
  | 'TIMESERIES'
  | 'FILE'
  | 'EVENT'
  | 'SEQUENCE';

export type ResourceReferenceWithExternalIdInput = {
  externalId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ResourceType>;
};

/** Filter request for time series. Filters exact field matching or timestamp ranges inclusive min and max. */
export type TimeSeriesListDTOInput = {
  cursor?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Filter4Input>;
  /** Return up to this many results. */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Splits the data set into N partitions.
   * You need to follow the cursors within each partition in order to receive all the data.
   * Example: 1/10
   *
   */
  partition?: InputMaybe<Scalars['String']>;
};

export type DatapointsInsertQueryInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataRawDBRowInput = {
  items?: InputMaybe<Array<InputMaybe<RawDBRowInsertInput>>>;
};

export type RawDBRowInsertInput = {
  /** Row data stored as a JSON object. */
  columns: Scalars['JSON'];
  /** Unique row key */
  key: Scalars['String'];
};

export type DataSequencePostDataInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type TimeSeriesCreateRequestInput = {
  items: Array<InputMaybe<PostTimeSeriesMetadataDTOInput>>;
};

export type PostTimeSeriesMetadataDTOInput = {
  /** Asset ID of equipment linked to this time series. */
  assetId?: InputMaybe<Scalars['Int']>;
  /** The dataSet Id for the item. */
  dataSetId?: InputMaybe<Scalars['Float']>;
  /** A description of the time series. */
  description?: InputMaybe<Scalars['String']>;
  /** Externally provided ID for the time series (optional, but recommended.) */
  externalId?: InputMaybe<Scalars['String']>;
  /** Whether the time series is a step series or not. */
  isStep?: InputMaybe<Scalars['Boolean']>;
  /** Whether the time series is string valued or not. (not updatable - its value cannot be changed after its initial assignment.) */
  isString?: InputMaybe<Scalars['Boolean']>;
  /** This field is deprecated. Set a value for legacyName to allow applications using API v0.3, v04, v05, and v0.6 to access this time series. The legacy name is the human-readable name for the time series and is mapped to the name field used in API versions 0.3-0.6. The legacyName field value must be unique, and setting this value to an already existing value will return an error. We recommend that you set this field to the same value as externalId. */
  legacyName?: InputMaybe<Scalars['String']>;
  /** Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values. */
  metadata?: InputMaybe<Scalars['JSON']>;
  /** Human readable name of the time series. This field is seperate from name field available through API versions 0.3-0.6. */
  name?: InputMaybe<Scalars['String']>;
  /** The required security categories to access this time series. */
  securityCategories?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** The physical unit of the time series. */
  unit?: InputMaybe<Scalars['String']>;
};

export type SyntheticQueryResponses = {
  items: Array<Maybe<SyntheticQueryResponse>>;
};

export type SyntheticQueryResponse = {
  /** list of data points */
  datapoints: Array<Maybe<SyntheticDataPoint>>;
  /** whether the returned data points are of string type or floating point type. Currently it will always be false. */
  isString?: Maybe<Scalars['Boolean']>;
};

/** No description available. */
export type SyntheticDataPoint = SyntheticDataValue | SyntheticDataError;

export type SyntheticDataValue = {
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  timestamp: Scalars['Float'];
  /** the data value */
  value: Scalars['Float'];
};

export type SyntheticDataError = {
  /** Human readable string with description of what went wrong */
  error: Scalars['String'];
  /** The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds. */
  timestamp: Scalars['Float'];
};

export type SyntheticMultiQueryInput = {
  items: Array<InputMaybe<SyntheticQueryInput>>;
};

/** Synthetic query description */
export type SyntheticQueryInput = {
  /** Get datapoints up to, but excluding, this point in time. Same format as for start. Note that when using aggregates, the end will be rounded up such that the last aggregate represents a full aggregation interval containing the original end, where the interval is the granularity unit times the granularity multiplier. For granularity 2d, the aggregation interval is 2 days, if end was originally 3 days after the start, it will be rounded to 4 days after the start. */
  end?: InputMaybe<Scalars['JSON']>;
  /** query definition. For limits, see the [guide to synthetic time series](/dev/concepts/resource_types/synthetic_timeseries.html#limits). */
  expression: Scalars['String'];
  /** Return up to this number of datapoints */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Get datapoints starting from, and including, this time. The format is N[timeunit]-ago where
   * timeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days
   * old. You can also specify time in milliseconds since epoch. Note that for aggregates, the start time is rounded down to a whole granularity unit (in UTC timezone). Daily granularities (d)
   * are rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc.
   */
  start?: InputMaybe<Scalars['JSON']>;
};

/** Search request with filter capabilities. */
export type AssetSearchFilterInput = {
  /** Filter on assets with strict matching. */
  filter?: InputMaybe<FilterInput>;
  /** Limits the number of results to return. */
  limit?: InputMaybe<Scalars['Int']>;
  /** Fulltext search for assets. Primarily meant for for human-centric use-cases, not for programs. The query parameter uses a different search algorithm than the deprecated name and description parameters, and will generally give much better results. */
  search?: InputMaybe<SearchInput>;
};

/** Fulltext search for assets. Primarily meant for for human-centric use-cases, not for programs. The query parameter uses a different search algorithm than the deprecated name and description parameters, and will generally give much better results. */
export type SearchInput = {
  /** The description of the asset. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the asset. */
  name?: InputMaybe<Scalars['String']>;
  /** Whitespace-separated terms to search for in assets. Does a best-effort fuzzy search in relevant fields (currently name and description) for variations of any of the search terms, and orders results by relevance. Uses a different search algorithm than the name and description parameters, and will generally give much better results. Matching and ordering is not guaranteed to be stable over time, and the fields being searched may be extended. */
  query?: InputMaybe<Scalars['String']>;
};

/** Filter on events filter with exact match */
export type EventSearchRequestInput = {
  /** Filter on events filter with exact match */
  filter?: InputMaybe<EventFilterInput>;
  /** <- Limits the maximum number of results to be returned by single request. Request may contain less results than request limit. */
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<EventSearchInput>;
};

export type EventSearchInput = {
  /** text to search in description field across events */
  description?: InputMaybe<Scalars['String']>;
};

/** Filter on files with exact match */
export type FilesSearchFilterInput = {
  filter?: InputMaybe<Filter2Input>;
  search?: InputMaybe<Search2Input>;
};

export type Search2Input = {
  /** Name of the file. */
  name?: InputMaybe<Scalars['String']>;
};

export type SequencesSearchDTOInput = {
  filter?: InputMaybe<SequenceFilterInput>;
  /** Return up to this many results. */
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<SequenceSearchInput>;
};

export type SequenceSearchInput = {
  /** Prefix and fuzzy search on description. */
  description?: InputMaybe<Scalars['String']>;
  /** Prefix and fuzzy search on name. */
  name?: InputMaybe<Scalars['String']>;
  /** Search on name and description using wildcard search on each of the words (separated by spaces). Retrieves results where at least one word must match. Example: '*some* *other*' */
  query?: InputMaybe<Scalars['String']>;
};

export type TimeSeriesSearchDTOInput = {
  filter?: InputMaybe<Filter4Input>;
  /** Return up to this many results. */
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Search3Input>;
};

export type Search3Input = {
  /** Prefix and fuzzy search on description. */
  description?: InputMaybe<Scalars['String']>;
  /** Prefix and fuzzy search on name. */
  name?: InputMaybe<Scalars['String']>;
  /**
   * Whitespace-separated terms to search for in time series. Does a
   * best-effort fuzzy search in relevant fields (currently name and
   * description) for variations of any of the search terms, and
   * orders results by relevance. Uses a different search algorithm
   * than the name and description parameters, and will generally give
   * much better results. Matching and ordering is not guaranteed to
   * be stable over time, and the fields being searched may be
   * extended.
   */
  query?: InputMaybe<Scalars['String']>;
};

export type ApiV1Project3dModelsUpdateInput = {
  items: Array<InputMaybe<UpdateModel3DInput>>;
};

export type UpdateModel3DInput = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  update?: InputMaybe<UpdateInput>;
};

export type UpdateInput = {
  dataSetId?: InputMaybe<Scalars['JSON']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<SetModelNameFieldInput>;
};

export type SetModelNameFieldInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type ApiV1Project3dModelRevisionsUpdateInput = {
  items: Array<InputMaybe<UpdateRevision3DInput>>;
};

export type UpdateRevision3DInput = {
  /** A server-generated ID for the object. */
  id: Scalars['Float'];
  update?: InputMaybe<Update2Input>;
};

export type Update2Input = {
  camera?: InputMaybe<SetRevisionCameraPropertiesInput>;
  metadata?: InputMaybe<Scalars['JSON']>;
  published?: InputMaybe<Published3Input>;
  rotation?: InputMaybe<SetRevisionRotationInput>;
};

export type SetRevisionCameraPropertiesInput = {
  /** Initial camera position and target. */
  set?: InputMaybe<RevisionCameraPropertiesInput>;
};

export type Published3Input = {
  /** True if the revision is marked as published. */
  set?: InputMaybe<Scalars['Boolean']>;
};

export type SetRevisionRotationInput = {
  set?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DataAssetChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataSetUpdateListInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataEventChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type ItemsRequestExtPipeUpdateInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type DataFileChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

export type UpdateRelationshipWrapperInput = {
  items: Array<InputMaybe<RelationshipUpdateInput>>;
};

export type RelationshipUpdateInput = {
  /** The external ID of the relationship. */
  externalId: Scalars['String'];
  update: RelationshipUpdateContentInput;
};

export type RelationshipUpdateContentInput = {
  /** Set a new value for the confidence, or remove the value. */
  confidence?: InputMaybe<Scalars['JSON']>;
  /** Set a new value for the dataSet Ids, or remove the value. */
  dataSetId?: InputMaybe<Scalars['JSON']>;
  endTime?: InputMaybe<Scalars['JSON']>;
  /**
   * Updates the resource's assigned labels.
   *
   * Labels can be added, removed or replaced (set). Adding an already attached label is an idempotent operation. Removing a label with no matching externalId is silently ignored.
   */
  labels?: InputMaybe<Scalars['JSON']>;
  /** Set a new value for the relationship source external ID. */
  sourceExternalId?: InputMaybe<UpdateSourceExternalIdInput>;
  /** Set a new value for the relationship source type. */
  sourceType?: InputMaybe<UpdateSourceTypeInput>;
  /** Set a new value for the start time, or remove the value. */
  startTime?: InputMaybe<Scalars['JSON']>;
  /** Set a new value for the relationship target external ID. */
  targetExternalId?: InputMaybe<UpdateTargetExternalIdInput>;
  /** Set a new value for the relationship target type. */
  targetType?: InputMaybe<UpdateTargetTypeInput>;
};

/** Set a new value for the relationship source external ID. */
export type UpdateSourceExternalIdInput = {
  /** The external ID of the resource that is the relationship source. */
  set: Scalars['String'];
};

/** Set a new value for the relationship source type. */
export type UpdateSourceTypeInput = {
  /** The resource type of the relationship source. Must be one of the specified values. */
  set: Scalars['String'];
};

/** Set a new value for the relationship target external ID. */
export type UpdateTargetExternalIdInput = {
  /** The external ID of the resource that is the relationship target. */
  set: Scalars['String'];
};

/** Set a new value for the relationship target type. */
export type UpdateTargetTypeInput = {
  /** The resource type of the relationship target. Must be one of the specified values. */
  set: Scalars['String'];
};

export type DataSequenceChangeInput = {
  items: Array<InputMaybe<Scalars['JSON']>>;
};

/** Request body for the updateModelRevisionThumbnail endpoint. */
export type UpdateRevision3DThumbnailInput = {
  /** File ID of thumbnail file in Files API. _Only JPEG and PNG files are supported_. */
  fileId: Scalars['Float'];
};

    }
    export type QueryMyOpenapiApiSdk = {
  /** Retrieve the contents of a 3D file.

This endpoint supported tag-based caching.

This endpoint is only compatible with 3D file IDs from the 3D API, and not compatible with
file IDs from the Files API.

Equivalent to GET /api/v1/projects/{project}/3d/files/{threedFileId} **/
  apiV1Project3dFile: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1Project3dFile'], MyOpenapiApiTypes.QueryapiV1Project3dFileArgs, MeshContext>,
  /** Get the results for converting an engineering diagram to SVG and PNG formats.

Equivalent to GET /api/v1/projects/{project}/context/diagram/convert/{jobId} **/
  apiV1ProjectContextDiagramConvert3: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1ProjectContextDiagramConvert3'], MyOpenapiApiTypes.QueryapiV1ProjectContextDiagramConvert3Args, MeshContext>,
  /** Get the results from an engineering diagram detect job.

Equivalent to GET /api/v1/projects/{project}/context/diagram/detect/{jobId} **/
  apiV1ProjectContextDiagramDetect3: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1ProjectContextDiagramDetect3'], MyOpenapiApiTypes.QueryapiV1ProjectContextDiagramDetect3Args, MeshContext>,
  /** List all available entity matching models.

Equivalent to GET /api/v1/projects/{project}/context/entitymatching/ **/
  apiV1ProjectContextEntitymatching: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1ProjectContextEntitymatching'], MyOpenapiApiTypes.QueryapiV1ProjectContextEntitymatchingArgs, MeshContext>,
  /** Shows the status of the model. If the status is completed, shows the parameters used to train the model.

Equivalent to GET /api/v1/projects/{project}/context/entitymatching/{id} **/
  apiV1ProjectContextEntitymatching3: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1ProjectContextEntitymatching3'], MyOpenapiApiTypes.QueryapiV1ProjectContextEntitymatching3Args, MeshContext>,
  /** Get the results from a predict job.

Equivalent to GET /api/v1/projects/{project}/context/entitymatching/jobs/{jobId} **/
  apiV1ProjectContextEntitymatchingJob: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1ProjectContextEntitymatchingJob'], MyOpenapiApiTypes.QueryapiV1ProjectContextEntitymatchingJobArgs, MeshContext>,
  /** The GET /files/icon operation can be used to get an image representation of a file.

Either id or externalId must be provided as a query parameter (but not both).
Supported file formats:
- Normal jpeg and png files are currently fully supported.
- Other image file formats might work, but continued support for these are not guaranteed.
- Currently only supporting thumbnails for image files.
Attempts to get icon for unsupported files will result in status 400.

Equivalent to GET /api/v1/projects/{project}/files/icon **/
  apiV1ProjectFilesIcon: InContextSdkMethod<MyOpenapiApiTypes.Query['apiV1ProjectFilesIcon'], MyOpenapiApiTypes.QueryapiV1ProjectFilesIconArgs, MeshContext>,
  /** Retrieve an asset by its ID. If you want to retrieve assets by externalIds, use Retrieve assets instead.

Equivalent to GET /api/v1/projects/{project}/assets/{id} **/
  asset: InContextSdkMethod<MyOpenapiApiTypes.Query['asset'], MyOpenapiApiTypes.QueryassetArgs, MeshContext>,
  /** List all asset mappings


Asset references obtained from a mapping - through asset ids - may be
invalid, simply by the non-transactional nature of HTTP.
They are NOT maintained by any means from CDF, meaning they will be stored until the
reference is removed through the delete endpoint of 3d asset mappings.

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings **/
  assetMapping3DWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['assetMapping3DWithCursorResponse'], MyOpenapiApiTypes.QueryassetMapping3DWithCursorResponseArgs, MeshContext>,
  /** Retrieve cursors based on the last updated time range. Normally this endpoint is used for reading in parallel.

Each cursor should be supplied as the 'cursor' query parameter on GET requests to [Read Rows](#operation/getRows).
**Note** that the 'minLastUpdatedTime' and the 'maxLastUpdatedTime' query parameter on [Read Rows](#operation/getRows) are ignored when a cursor is specified.


Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/cursors **/
  dataRawDBTableCursors: InContextSdkMethod<MyOpenapiApiTypes.Query['dataRawDBTableCursors'], MyOpenapiApiTypes.QuerydataRawDBTableCursorsArgs, MeshContext>,
  /** The GET /files operation can be used to return information for all files in a project. 

Optionally you can add one or more of the following query parameters. 
The filter query parameters will filter the results to only include files that match all filter parameters.

Equivalent to GET /api/v1/projects/{project}/files **/
  dataWithCursor: InContextSdkMethod<MyOpenapiApiTypes.Query['dataWithCursor'], MyOpenapiApiTypes.QuerydataWithCursorArgs, MeshContext>,
  /** List all assets, or only the assets matching the specified query.

Equivalent to GET /api/v1/projects/{project}/assets **/
  dataWithCursorAsset: InContextSdkMethod<MyOpenapiApiTypes.Query['dataWithCursorAsset'], MyOpenapiApiTypes.QuerydataWithCursorAssetArgs, MeshContext>,
  /** List time series. Use nextCursor to paginate through the results.

Equivalent to GET /api/v1/projects/{project}/timeseries **/
  dataWithCursorGetTimeSeriesMetadataDTO: InContextSdkMethod<MyOpenapiApiTypes.Query['dataWithCursorGetTimeSeriesMetadataDTO'], MyOpenapiApiTypes.QuerydataWithCursorGetTimeSeriesMetadataDTOArgs, MeshContext>,
  /** List databases

Equivalent to GET /api/v1/projects/{project}/raw/dbs **/
  dataWithCursorRawDB: InContextSdkMethod<MyOpenapiApiTypes.Query['dataWithCursorRawDB'], MyOpenapiApiTypes.QuerydataWithCursorRawDBArgs, MeshContext>,
  /** Retrieve rows from a table

Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows **/
  dataWithCursorRawDBRow: InContextSdkMethod<MyOpenapiApiTypes.Query['dataWithCursorRawDBRow'], MyOpenapiApiTypes.QuerydataWithCursorRawDBRowArgs, MeshContext>,
  /** List tables in a database

Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables **/
  dataWithCursorRawDBTable: InContextSdkMethod<MyOpenapiApiTypes.Query['dataWithCursorRawDBTable'], MyOpenapiApiTypes.QuerydataWithCursorRawDBTableArgs, MeshContext>,
  /** Receive event by ID

Equivalent to GET /api/v1/projects/{project}/events/{id} **/
  event: InContextSdkMethod<MyOpenapiApiTypes.Query['event'], MyOpenapiApiTypes.QueryeventArgs, MeshContext>,
  /** List events optionally filtered on query parameters

Equivalent to GET /api/v1/projects/{project}/events **/
  eventWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['eventWithCursorResponse'], MyOpenapiApiTypes.QueryeventWithCursorResponseArgs, MeshContext>,
  /** Retrieve an extraction pipeline by its ID. If you want to retrieve extraction pipelines by externalIds, use Retrieve extraction pipelines instead.

Equivalent to GET /api/v1/projects/{project}/extpipes/{id} **/
  extPipe: InContextSdkMethod<MyOpenapiApiTypes.Query['extPipe'], MyOpenapiApiTypes.QueryextPipeArgs, MeshContext>,
  /** Returns a list of all extraction pipelines for a given project

Equivalent to GET /api/v1/projects/{project}/extpipes **/
  extPipes: InContextSdkMethod<MyOpenapiApiTypes.Query['extPipes'], MyOpenapiApiTypes.QueryextPipesArgs, MeshContext>,
  /** Returns file info for the file ID

Equivalent to GET /api/v1/projects/{project}/files/{id} **/
  filesMetadata: InContextSdkMethod<MyOpenapiApiTypes.Query['filesMetadata'], MyOpenapiApiTypes.QueryfilesMetadataArgs, MeshContext>,
  /** Retrieves a list of ancestor nodes of a given node, including itself, in the hierarchy of the 3D model. This operation supports pagination.

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/{nodeId}/ancestors **/
  get3DNodeAncestors: InContextSdkMethod<MyOpenapiApiTypes.Query['get3DNodeAncestors'], MyOpenapiApiTypes.Queryget3DNodeAncestorsArgs, MeshContext>,
  /** List of all extraction pipeline runs for a given extraction pipeline. Sorted by createdTime value with descendant order.

Equivalent to GET /api/v1/projects/{project}/extpipes/runs **/
  itemsResponseExtPipeRunResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['itemsResponseExtPipeRunResponse'], MyOpenapiApiTypes.QueryitemsResponseExtPipeRunResponseArgs, MeshContext>,
  /** Retrieve a 3D model

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId} **/
  model3D: InContextSdkMethod<MyOpenapiApiTypes.Query['model3D'], MyOpenapiApiTypes.Querymodel3DArgs, MeshContext>,
  /** Retrieve a list of available outputs for a processed 3D model. An output can be a format that can be consumed by a viewer (e.g. Reveal) or import in external tools. Each of the outputs will have an associated version which is used to identify the version of output format (not the revision of the processed output). Note that the structure of the outputs will vary and is not covered here.

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/outputs **/
  model3DOutputResponseList: InContextSdkMethod<MyOpenapiApiTypes.Query['model3DOutputResponseList'], MyOpenapiApiTypes.Querymodel3DOutputResponseListArgs, MeshContext>,
  /** Retrieves a list of all models in a project. This operation supports pagination. You can filter out all models without a published revision.

Equivalent to GET /api/v1/projects/{project}/3d/models **/
  model3DWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['model3DWithCursorResponse'], MyOpenapiApiTypes.Querymodel3DWithCursorResponseArgs, MeshContext>,
  /** Retrieves a list of nodes from the hierarchy in the 3D model. You can also request a specific subtree with the 'nodeId' query parameter and limit the depth of the resulting subtree with the 'depth' query parameter. By default, nodes are returned in order of ascending treeIndex. We suggest trying to set the query parameter `sortByNodeId` to `true` to check whether it makes your use case faster. The `partition` parameter can only be used if `sortByNodeId` is set to `true`. This operation supports pagination.

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes **/
  node3DWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['node3DWithCursorResponse'], MyOpenapiApiTypes.Querynode3DWithCursorResponseArgs, MeshContext>,
  /** Lists all relationships. The order of retrieved objects may change for two calls with the same parameters.
The endpoint supports pagination. The initial call to this endpoint should not contain a cursor, but the cursor parameter should be used to retrieve further pages of results.

Equivalent to GET /api/v1/projects/{project}/relationships **/
  pagedRelationshipResponseWrapper: InContextSdkMethod<MyOpenapiApiTypes.Query['pagedRelationshipResponseWrapper'], MyOpenapiApiTypes.QuerypagedRelationshipResponseWrapperArgs, MeshContext>,
  /** Retrieve row by key

Equivalent to GET /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/{rowKey} **/
  rawDBRow: InContextSdkMethod<MyOpenapiApiTypes.Query['rawDBRow'], MyOpenapiApiTypes.QueryrawDBRowArgs, MeshContext>,
  /** Retrieve a 3D revision

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId} **/
  revision3D: InContextSdkMethod<MyOpenapiApiTypes.Query['revision3D'], MyOpenapiApiTypes.Queryrevision3DArgs, MeshContext>,
  /** Retrieves a list of all revisions of a model. This operation supports pagination. You can also filter revisions if they are marked as published or not by using the query param published.

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions **/
  revision3DWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['revision3DWithCursorResponse'], MyOpenapiApiTypes.Queryrevision3DWithCursorResponseArgs, MeshContext>,
  /** List log entries for the revision

Equivalent to GET /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/logs **/
  revisionLog3DResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['revisionLog3DResponse'], MyOpenapiApiTypes.QueryrevisionLog3DResponseArgs, MeshContext>,
  /** Retrieves a list of all security categories for a project.

Equivalent to GET /api/v1/projects/{project}/securitycategories **/
  securityCategoryWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['securityCategoryWithCursorResponse'], MyOpenapiApiTypes.QuerysecurityCategoryWithCursorResponseArgs, MeshContext>,
  /** List sequences. Use nextCursor to paginate through the results.

Equivalent to GET /api/v1/projects/{project}/sequences **/
  sequenceWithCursorResponse: InContextSdkMethod<MyOpenapiApiTypes.Query['sequenceWithCursorResponse'], MyOpenapiApiTypes.QuerysequenceWithCursorResponseArgs, MeshContext>
};

export type MutationMyOpenapiApiSdk = {
  /** Retrieve a list of all events in the same project. This operation supports pagination by cursor. Criteria can be applied to select a subset of events.

Equivalent to POST /api/v1/projects/{project}/events/list **/
  advancedListEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['advancedListEvents'], MyOpenapiApiTypes.MutationadvancedListEventsArgs, MeshContext>,
  /** Retrieves a list of all files in a project. Criteria can be supplied to select a subset of files. This operation supports pagination with cursors.

Equivalent to POST /api/v1/projects/{project}/files/list **/
  advancedListFiles: InContextSdkMethod<MyOpenapiApiTypes.Mutation['advancedListFiles'], MyOpenapiApiTypes.MutationadvancedListFilesArgs, MeshContext>,
  /** Retrieves a list of sequences matching the given criteria.

Equivalent to POST /api/v1/projects/{project}/sequences/list **/
  advancedListSequences: InContextSdkMethod<MyOpenapiApiTypes.Mutation['advancedListSequences'], MyOpenapiApiTypes.MutationadvancedListSequencesArgs, MeshContext>,
  /** Use advanced filtering options to agggregate assets.

Equivalent to POST /api/v1/projects/{project}/assets/aggregate **/
  aggregateAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['aggregateAssets'], MyOpenapiApiTypes.MutationaggregateAssetsArgs, MeshContext>,
  /** Aggregate data sets in the same project. Criteria can be applied to select a subset of data sets.

Equivalent to POST /api/v1/projects/{project}/datasets/aggregate **/
  aggregateDataSets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['aggregateDataSets'], MyOpenapiApiTypes.MutationaggregateDataSetsArgs, MeshContext>,
  /** The aggregation API allows you to compute aggregated results on events 
like getting the count of all events in a project or checking what are all the 
different types and subtypes of events in your project, along with 
the count of events in each of those aggregations. By specifying an additional 
filter, you can also aggregate only among events matching the specified filter.

The default behavior, when you do not specify 
the `aggregate` field in the request body, is to return the count 
of events.

Setting `aggregate` to `uniqueValues` will return all unique values (up to a 
maximum of 1000) and the count of each in the field specified in 
`fields: []`. Note that, currently, you can only request for unique 
values on a single field. Also, in the case of text fields, the values are 
aggregated in a case-insensitive manner. For example:

```
{
  "aggregate": "uniqueValues",
  "fields": [ "type" ]
}
```

will return all unique 'types' in the events in your project.

Similarly,

```
{
  "aggregate": "uniqueValues",
  "fields": [ "dataSetId" ],
  "filter": {
    "subType": "subtype_1"
  }
}
```
will return all unique dataSetIds in events of subtype 'subtype_1'


Equivalent to POST /api/v1/projects/{project}/events/aggregate **/
  aggregateEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['aggregateEvents'], MyOpenapiApiTypes.MutationaggregateEventsArgs, MeshContext>,
  /** Calculate aggregates for files, based on optional filter specification. Returns the following aggregates: `count`

Equivalent to POST /api/v1/projects/{project}/files/aggregate **/
  aggregateFiles: InContextSdkMethod<MyOpenapiApiTypes.Mutation['aggregateFiles'], MyOpenapiApiTypes.MutationaggregateFilesArgs, MeshContext>,
  /** Count the number of sequences that match the given filter

Equivalent to POST /api/v1/projects/{project}/sequences/aggregate **/
  aggregateSequences: InContextSdkMethod<MyOpenapiApiTypes.Mutation['aggregateSequences'], MyOpenapiApiTypes.MutationaggregateSequencesArgs, MeshContext>,
  /** Count the number of time series that match the given filter

Equivalent to POST /api/v1/projects/{project}/timeseries/aggregate **/
  aggregateTimeSeries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['aggregateTimeSeries'], MyOpenapiApiTypes.MutationaggregateTimeSeriesArgs, MeshContext>,
  /** Updates one or more time series. Fields that are not included in the request, are not changed.

For primitive fields (String, Long Int), use 'set': 'value' to update the value; use 'setNull': true to set the field to null.

For JSON Array fields (for example securityCategories), use 'set': [value1, value2] to update the value; use 'add': [v1, v2] to add values; use 'remove': [v1, v2] to remove values.

Equivalent to POST /api/v1/projects/{project}/timeseries/update **/
  alterTimeSeries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['alterTimeSeries'], MyOpenapiApiTypes.MutationalterTimeSeriesArgs, MeshContext>,
  /** Retrieve assets by IDs or external IDs. If you specify to get aggregates then be aware that the aggregates are eventually consistent.


Equivalent to POST /api/v1/projects/{project}/assets/byids **/
  byIdsAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['byIdsAssets'], MyOpenapiApiTypes.MutationbyIdsAssetsArgs, MeshContext>,
  /** Retrieves information about events in the same project. Events are returned in the same order as the ids listed in the query.

A maximum of 1000 event IDs may be listed per request and all of them must be unique.

Equivalent to POST /api/v1/projects/{project}/events/byids **/
  byIdsEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['byIdsEvents'], MyOpenapiApiTypes.MutationbyIdsEventsArgs, MeshContext>,
  /** Retrieves metadata information about multiple specific files in the same project. 
Results are returned in the same order as in the request. This operation does not return the file contents.

Equivalent to POST /api/v1/projects/{project}/files/byids **/
  byIdsFiles: InContextSdkMethod<MyOpenapiApiTypes.Mutation['byIdsFiles'], MyOpenapiApiTypes.MutationbyIdsFilesArgs, MeshContext>,
  /** Retrieves information about multiple extraction pipelines in the same project. All ids and externalIds must be unique.

Equivalent to POST /api/v1/projects/{project}/extpipes/byids **/
  byidsExtPipes: InContextSdkMethod<MyOpenapiApiTypes.Mutation['byidsExtPipes'], MyOpenapiApiTypes.MutationbyidsExtPipesArgs, MeshContext>,
  /** Retrieve relationships by external IDs. You can retrieve a maximum of 1000 relationships per request.
The order of the relationships in the response equals the order in the request.

Equivalent to POST /api/v1/projects/{project}/relationships/byids **/
  byidsRelationships: InContextSdkMethod<MyOpenapiApiTypes.Mutation['byidsRelationships'], MyOpenapiApiTypes.MutationbyidsRelationshipsArgs, MeshContext>,
  /** Create asset mappings


Asset references when creating a mapping - through asset ids - are allowed to be
invalid.
They are NOT maintained by any means from CDF, meaning they will be stored until the
reference is removed through the delete endpoint of 3d asset mappings.

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings **/
  create3DMappings: InContextSdkMethod<MyOpenapiApiTypes.Mutation['create3DMappings'], MyOpenapiApiTypes.Mutationcreate3DMappingsArgs, MeshContext>,
  /** Create 3D models

Equivalent to POST /api/v1/projects/{project}/3d/models **/
  create3DModels: InContextSdkMethod<MyOpenapiApiTypes.Mutation['create3DModels'], MyOpenapiApiTypes.Mutationcreate3DModelsArgs, MeshContext>,
  /** Create 3D revisions

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions **/
  create3DRevisions: InContextSdkMethod<MyOpenapiApiTypes.Mutation['create3DRevisions'], MyOpenapiApiTypes.Mutationcreate3DRevisionsArgs, MeshContext>,
  /** You can create a maximum of 1000 assets per request.

Equivalent to POST /api/v1/projects/{project}/assets **/
  createAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createAssets'], MyOpenapiApiTypes.MutationcreateAssetsArgs, MeshContext>,
  /** Create databases in a project. It is possible to post a maximum of 1000 databases per request.

Equivalent to POST /api/v1/projects/{project}/raw/dbs **/
  createDBs: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createDBs'], MyOpenapiApiTypes.MutationcreateDBsArgs, MeshContext>,
  /** You can create a maximum of 10 data sets per request.

Equivalent to POST /api/v1/projects/{project}/datasets **/
  createDataSets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createDataSets'], MyOpenapiApiTypes.MutationcreateDataSetsArgs, MeshContext>,
  /** Creates multiple event objects in the same project. It is possible to post a maximum of 1000 events per request.

Equivalent to POST /api/v1/projects/{project}/events **/
  createEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createEvents'], MyOpenapiApiTypes.MutationcreateEventsArgs, MeshContext>,
  /** Creates multiple new extraction pipelines. A maximum of 1000 extraction pipelines can be created per request.

Equivalent to POST /api/v1/projects/{project}/extpipes **/
  createExtPipes: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createExtPipes'], MyOpenapiApiTypes.MutationcreateExtPipesArgs, MeshContext>,
  /** List of the relationships to create. You can create a maximum of 1000 relationships per request. Relationships should be unique, but CDF does not prevent you from creating duplicates where only the externalId differs.

Relationships are uniquely identified by their externalId. Non-unique relationships will not be created.

The order of relationships in the response equals the order in the request.

Equivalent to POST /api/v1/projects/{project}/relationships **/
  createRelationships: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createRelationships'], MyOpenapiApiTypes.MutationcreateRelationshipsArgs, MeshContext>,
  /** Create multiple extraction pipeline runs. Current version supports one extraction pipeline run per request. Extraction pipeline runs support three statuses: success, failure, seen. The content of the Error Message parameter is configurable and will contain any messages that have been configured within the extraction pipeline.

Equivalent to POST /api/v1/projects/{project}/extpipes/runs **/
  createRuns: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createRuns'], MyOpenapiApiTypes.MutationcreateRunsArgs, MeshContext>,
  /** Creates security categories with the given names. Duplicate names in the request are ignored.
If a security category with one of the provided names exists already, then the request will fail and no security categories are created.


Equivalent to POST /api/v1/projects/{project}/securitycategories **/
  createSecurityCategories: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createSecurityCategories'], MyOpenapiApiTypes.MutationcreateSecurityCategoriesArgs, MeshContext>,
  /** Create one or more sequences.

Equivalent to POST /api/v1/projects/{project}/sequences **/
  createSequence: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createSequence'], MyOpenapiApiTypes.MutationcreateSequenceArgs, MeshContext>,
  /** Create tables in a database. It is possible to post a maximum of 1000 tables per request.

Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables **/
  createTables: InContextSdkMethod<MyOpenapiApiTypes.Mutation['createTables'], MyOpenapiApiTypes.MutationcreateTablesArgs, MeshContext>,
  /** Delete a list of asset mappings

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/delete **/
  delete3DMappings: InContextSdkMethod<MyOpenapiApiTypes.Mutation['delete3DMappings'], MyOpenapiApiTypes.Mutationdelete3DMappingsArgs, MeshContext>,
  /** Delete 3D models

Equivalent to POST /api/v1/projects/{project}/3d/models/delete **/
  delete3DModels: InContextSdkMethod<MyOpenapiApiTypes.Mutation['delete3DModels'], MyOpenapiApiTypes.Mutationdelete3DModelsArgs, MeshContext>,
  /** Delete 3D revisions

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/delete **/
  delete3DRevisions: InContextSdkMethod<MyOpenapiApiTypes.Mutation['delete3DRevisions'], MyOpenapiApiTypes.Mutationdelete3DRevisionsArgs, MeshContext>,
  /** Delete assets. To delete all descendants, set recursive to true. The limit of the request does not include the number of descendants that are deleted.

Equivalent to POST /api/v1/projects/{project}/assets/delete **/
  deleteAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteAssets'], MyOpenapiApiTypes.MutationdeleteAssetsArgs, MeshContext>,
  /** It deletes a database, but fails if the database is not empty and recursive is set to false (default).

Equivalent to POST /api/v1/projects/{project}/raw/dbs/delete **/
  deleteDBs: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteDBs'], MyOpenapiApiTypes.MutationdeleteDBsArgs, MeshContext>,
  /** Delete datapoints from time series.

Equivalent to POST /api/v1/projects/{project}/timeseries/data/delete **/
  deleteDatapoints: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteDatapoints'], MyOpenapiApiTypes.MutationdeleteDatapointsArgs, MeshContext>,
  /** Deletes events with the given ids. A maximum of 1000 events can be deleted per request.

Equivalent to POST /api/v1/projects/{project}/events/delete **/
  deleteEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteEvents'], MyOpenapiApiTypes.MutationdeleteEventsArgs, MeshContext>,
  /** Delete extraction pipelines for given list of ids and externalIds. When the extraction pipeline is deleted, all extraction pipeline runs related to the extraction pipeline are automatically deleted.

Equivalent to POST /api/v1/projects/{project}/extpipes/delete **/
  deleteExtPipes: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteExtPipes'], MyOpenapiApiTypes.MutationdeleteExtPipesArgs, MeshContext>,
  /** Deletes the files with the given ids.

A maximum of 1000 files can be deleted per request.

Equivalent to POST /api/v1/projects/{project}/files/delete **/
  deleteFiles: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteFiles'], MyOpenapiApiTypes.MutationdeleteFilesArgs, MeshContext>,
  /** Delete the relationships between resources identified by the external IDs in the request. You can delete a maximum of 1000 relationships per request.

Equivalent to POST /api/v1/projects/{project}/relationships/delete **/
  deleteRelationships: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteRelationships'], MyOpenapiApiTypes.MutationdeleteRelationshipsArgs, MeshContext>,
  /** Delete rows in a table

Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/delete **/
  deleteRows: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteRows'], MyOpenapiApiTypes.MutationdeleteRowsArgs, MeshContext>,
  /** Deletes the security categories that match the provided IDs.
If any of the provided IDs does not belong to an existing security category, then the request will fail and no security categories are deleted.


Equivalent to POST /api/v1/projects/{project}/securitycategories/delete **/
  deleteSecurityCategories: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteSecurityCategories'], MyOpenapiApiTypes.MutationdeleteSecurityCategoriesArgs, MeshContext>,
  /** Deletes the given rows of the sequence. All columns are affected.

Equivalent to POST /api/v1/projects/{project}/sequences/data/delete **/
  deleteSequenceData: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteSequenceData'], MyOpenapiApiTypes.MutationdeleteSequenceDataArgs, MeshContext>,
  /** Deletes the sequences with the specified IDs. If one or more of the sequences do not exist, ignoreUnknownIds controls what will happen: if it is true, the sequences that do exist will be deleted, and the request succeeds; if it is false or absent, nothing will be deleted, and the request fails.

Equivalent to POST /api/v1/projects/{project}/sequences/delete **/
  deleteSequences: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteSequences'], MyOpenapiApiTypes.MutationdeleteSequencesArgs, MeshContext>,
  /** Delete tables in a database

Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/delete **/
  deleteTables: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteTables'], MyOpenapiApiTypes.MutationdeleteTablesArgs, MeshContext>,
  /** Deletes the time series with the specified IDs and their datapoints.

Equivalent to POST /api/v1/projects/{project}/timeseries/delete **/
  deleteTimeSeries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['deleteTimeSeries'], MyOpenapiApiTypes.MutationdeleteTimeSeriesArgs, MeshContext>,
  /** Convert interactive engineering diagrams to image format, with highlighted annotations.
Supported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.
Supported output image formats are PNG and SVG, only the svg embeds the input annotations.

Equivalent to POST /api/v1/projects/{project}/context/diagram/convert/ **/
  diagramConvert: InContextSdkMethod<MyOpenapiApiTypes.Mutation['diagramConvert'], MyOpenapiApiTypes.MutationdiagramConvertArgs, MeshContext>,
  /** Detect annotations in engineering diagrams. Note: All users in a CDF project with assets read-all and files read-all capabilities can access data sent to this endpoint.
Supported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.

Equivalent to POST /api/v1/projects/{project}/context/diagram/detect/ **/
  diagramDetect: InContextSdkMethod<MyOpenapiApiTypes.Mutation['diagramDetect'], MyOpenapiApiTypes.MutationdiagramDetectArgs, MeshContext>,
  /** Retrieves a list of download URLs for the specified list of file IDs. After getting the download links, the client has to issue a GET request to the returned URLs, which will respond with the contents of the file. The link will expire after 30 seconds.

Equivalent to POST /api/v1/projects/{project}/files/downloadlink **/
  downloadLinks: InContextSdkMethod<MyOpenapiApiTypes.Mutation['downloadLinks'], MyOpenapiApiTypes.MutationdownloadLinksArgs, MeshContext>,
  /** Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Train a model that predicts matches between entities (for example, time series names to asset names). This is also known as fuzzy joining. If there are no trueMatches (labeled data), you train a static (unsupervised) model, otherwise a machine learned (supervised) model is trained.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/ **/
  entityMatchingCreate: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingCreate'], MyOpenapiApiTypes.MutationentityMatchingCreateArgs, MeshContext>,
  /** Deletes an entity matching model. Currently, this is a soft delete, and only removes the entry from listing.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/delete **/
  entityMatchingDelete: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingDelete'], MyOpenapiApiTypes.MutationentityMatchingDeleteArgs, MeshContext>,
  /** Use filtering options to find entity matcher models.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/list **/
  entityMatchingFilter: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingFilter'], MyOpenapiApiTypes.MutationentityMatchingFilterArgs, MeshContext>,
  /** Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Predicts entity matches using a trained model.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/predict **/
  entityMatchingPredict: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingPredict'], MyOpenapiApiTypes.MutationentityMatchingPredictArgs, MeshContext>,
  /** Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Creates a new model by re-training an existing model on existing data but with additional true matches. The old model is not changed. The new model gets a new id and new external id if `newExternalId` is set, or no external id if `newExternalId` is not set. Use for efficient re-training of the model after a user creates additional confirmed matches.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/refit **/
  entityMatchingReFit: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingReFit'], MyOpenapiApiTypes.MutationentityMatchingReFitArgs, MeshContext>,
  /** Retrieve entity matching models by IDs or external IDs.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/byids **/
  entityMatchingRetrieve: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingRetrieve'], MyOpenapiApiTypes.MutationentityMatchingRetrieveArgs, MeshContext>,
  /** Update entity matching models by IDs or external IDs.

Equivalent to POST /api/v1/projects/{project}/context/entitymatching/update **/
  entityMatchingUpdate: InContextSdkMethod<MyOpenapiApiTypes.Mutation['entityMatchingUpdate'], MyOpenapiApiTypes.MutationentityMatchingUpdateArgs, MeshContext>,
  /** Lists 3D assets mappings that match the specified filter parameter. Only
one type of filter can be specified for each request, either `assetIds`, `nodeIds` or `treeIndexes`.


Asset references obtained from a mapping - through asset ids - may be
invalid, simply by the non-transactional nature of HTTP.
They are NOT maintained by any means from CDF, meaning they will be stored until the
reference is removed through the delete endpoint of 3d asset mappings.

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/list **/
  filter3DAssetMappings: InContextSdkMethod<MyOpenapiApiTypes.Mutation['filter3DAssetMappings'], MyOpenapiApiTypes.Mutationfilter3DAssetMappingsArgs, MeshContext>,
  /** List nodes in a project, filtered by node property values specified by supplied filters. This operation supports pagination and partitions.

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/list **/
  filter3DNodes: InContextSdkMethod<MyOpenapiApiTypes.Mutation['filter3DNodes'], MyOpenapiApiTypes.Mutationfilter3DNodesArgs, MeshContext>,
  /** Use advanced filtering options to find extraction pipelines.

Equivalent to POST /api/v1/projects/{project}/extpipes/list **/
  filterExtPipes: InContextSdkMethod<MyOpenapiApiTypes.Mutation['filterExtPipes'], MyOpenapiApiTypes.MutationfilterExtPipesArgs, MeshContext>,
  /** Use advanced filtering options to find extraction pipeline runs. Sorted by createdTime value with descendant order.

Equivalent to POST /api/v1/projects/{project}/extpipes/runs/list **/
  filterRuns: InContextSdkMethod<MyOpenapiApiTypes.Mutation['filterRuns'], MyOpenapiApiTypes.MutationfilterRunsArgs, MeshContext>,
  /** Retrieves specific nodes given by a list of IDs.

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/byids **/
  get3DNodesById: InContextSdkMethod<MyOpenapiApiTypes.Mutation['get3DNodesById'], MyOpenapiApiTypes.Mutationget3DNodesByIdArgs, MeshContext>,
  /** Retrieve data sets by IDs or external IDs.

Equivalent to POST /api/v1/projects/{project}/datasets/byids **/
  getDataSets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getDataSets'], MyOpenapiApiTypes.MutationgetDataSetsArgs, MeshContext>,
  /** Retrieves the latest data point in a time series.

Equivalent to POST /api/v1/projects/{project}/timeseries/data/latest **/
  getLatest: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getLatest'], MyOpenapiApiTypes.MutationgetLatestArgs, MeshContext>,
  /** Retrieves the last row (i.e the row with the highest row number) in a sequence.

Equivalent to POST /api/v1/projects/{project}/sequences/data/latest **/
  getLatestSequenceRow: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getLatestSequenceRow'], MyOpenapiApiTypes.MutationgetLatestSequenceRowArgs, MeshContext>,
  /** Retrieves a list of data points from multiple time series in a project. This operation supports aggregation, but not pagination. A detailed description of how aggregates work can be found at [our concept guide for aggregation](<https://docs.cognite.com/dev/concepts/aggregation/>).

Equivalent to POST /api/v1/projects/{project}/timeseries/data/list **/
  getMultiTimeSeriesDatapoints: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getMultiTimeSeriesDatapoints'], MyOpenapiApiTypes.MutationgetMultiTimeSeriesDatapointsArgs, MeshContext>,
  /** Retrieve one or more sequences by ID or external ID. The sequences are returned in the same order as in the request.

Equivalent to POST /api/v1/projects/{project}/sequences/byids **/
  getSequenceById: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getSequenceById'], MyOpenapiApiTypes.MutationgetSequenceByIdArgs, MeshContext>,
  /** Processes data requests, and returns the result. NB - This operation uses a dynamic limit on the number of rows returned based on the number and type of columns, use the provided cursor to paginate and retrieve all data.

Equivalent to POST /api/v1/projects/{project}/sequences/data/list **/
  getSequenceData: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getSequenceData'], MyOpenapiApiTypes.MutationgetSequenceDataArgs, MeshContext>,
  /** Retrieve one or more time series by ID or external ID. The time series are returned in the same order as in the request.

Equivalent to POST /api/v1/projects/{project}/timeseries/byids **/
  getTimeSeriesByIds: InContextSdkMethod<MyOpenapiApiTypes.Mutation['getTimeSeriesByIds'], MyOpenapiApiTypes.MutationgetTimeSeriesByIdsArgs, MeshContext>,
  /** Create metadata information and get an upload link for a file.

To upload the file, use the uploadUrl link in the response in a separate request. 
To upload a file, send an HTTP PUT request to the uploadUrl with the relevant 'Content-Type' and 'Content-Length' headers.

If the uploadUrl contains the string '/v1/files/gcs_proxy/', you can make a Google Cloud Storage (GCS) resumable upload request
as documented in https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload.

The uploadUrl expires after one week. 
Any file info entry that does not have the actual file uploaded within one week will be automatically deleted.

Equivalent to POST /api/v1/projects/{project}/files **/
  initFileUpload: InContextSdkMethod<MyOpenapiApiTypes.Mutation['initFileUpload'], MyOpenapiApiTypes.MutationinitFileUploadArgs, MeshContext>,
  /** Use advanced filtering options to find assets.

Equivalent to POST /api/v1/projects/{project}/assets/list **/
  listAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['listAssets'], MyOpenapiApiTypes.MutationlistAssetsArgs, MeshContext>,
  /** Use advanced filtering options to find data sets.

Equivalent to POST /api/v1/projects/{project}/datasets/list **/
  listDataSets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['listDataSets'], MyOpenapiApiTypes.MutationlistDataSetsArgs, MeshContext>,
  /** Lists relationships matching the query filter in the request. You can retrieve a maximum of 1000 relationships per request.

Equivalent to POST /api/v1/projects/{project}/relationships/list **/
  listRelationships: InContextSdkMethod<MyOpenapiApiTypes.Mutation['listRelationships'], MyOpenapiApiTypes.MutationlistRelationshipsArgs, MeshContext>,
  /** Retrieves a list of time series matching the specified criteria. This operation supports pagination by cursor. Criteria can be applied to select a subset of time series.

Equivalent to POST /api/v1/projects/{project}/timeseries/list **/
  listTimeSeries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['listTimeSeries'], MyOpenapiApiTypes.MutationlistTimeSeriesArgs, MeshContext>,
  /** Insert datapoints into a time series. You can do this for multiple time series.
If you insert a datapoint with a timestamp that already exists, it will be overwritten with the new value.

Equivalent to POST /api/v1/projects/{project}/timeseries/data **/
  postMultiTimeSeriesDatapoints: InContextSdkMethod<MyOpenapiApiTypes.Mutation['postMultiTimeSeriesDatapoints'], MyOpenapiApiTypes.MutationpostMultiTimeSeriesDatapointsArgs, MeshContext>,
  /** Insert rows into a table. It is possible to post a maximum of 10000 rows per request.
It will replace the columns of an existing row if the rowKey already exists.

The rowKey is limited to 1024 characters which also includes Unicode characters.
The maximum size of columns are 5 MiB, however the maximum size of one column name and value is 2621440 characters each.
If you want to store huge amount of data per row or column we recommend using the Files API to upload blobs, then reference it from the Raw row.

The columns object is a key value object, where the key corresponds to the column name while the value is the column value.
It supports all the valid types of values in JSON, so number, string, array, and even nested JSON structure (see payload example to the right).

**Note** There is no rollback if an error occurs, which means partial data may be written. However, it's safe to retry the request, since this endpoint supports both update and insert (upsert).


Equivalent to POST /api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows **/
  postRows: InContextSdkMethod<MyOpenapiApiTypes.Mutation['postRows'], MyOpenapiApiTypes.MutationpostRowsArgs, MeshContext>,
  /** Inserts rows into a sequence. This overwrites data in rows and columns that exist.

Equivalent to POST /api/v1/projects/{project}/sequences/data **/
  postSequenceData: InContextSdkMethod<MyOpenapiApiTypes.Mutation['postSequenceData'], MyOpenapiApiTypes.MutationpostSequenceDataArgs, MeshContext>,
  /** Create one or more time series.

Equivalent to POST /api/v1/projects/{project}/timeseries **/
  postTimeSeries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['postTimeSeries'], MyOpenapiApiTypes.MutationpostTimeSeriesArgs, MeshContext>,
  /** Execute an on-the-fly synthetic query

Equivalent to POST /api/v1/projects/{project}/timeseries/synthetic/query **/
  querySyntheticTimeseries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['querySyntheticTimeseries'], MyOpenapiApiTypes.MutationquerySyntheticTimeseriesArgs, MeshContext>,
  /** Fulltext search for assets based on result relevance. Primarily meant
for human-centric use-cases, not for programs, since matching and
ordering may change over time. Additional filters can also be
specified. This operation does not support pagination.

Equivalent to POST /api/v1/projects/{project}/assets/search **/
  searchAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['searchAssets'], MyOpenapiApiTypes.MutationsearchAssetsArgs, MeshContext>,
  /** Search within events

Equivalent to POST /api/v1/projects/{project}/events/search **/
  searchEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['searchEvents'], MyOpenapiApiTypes.MutationsearchEventsArgs, MeshContext>,
  /** Search for files based on relevance. You can also supply a strict match filter as in Filter files, and search in the results from the filter. Returns first 1000 results based on relevance. This operation does not support pagination.

Equivalent to POST /api/v1/projects/{project}/files/search **/
  searchFiles: InContextSdkMethod<MyOpenapiApiTypes.Mutation['searchFiles'], MyOpenapiApiTypes.MutationsearchFilesArgs, MeshContext>,
  /** Retrieves a list of sequences matching the given criteria. This operation does not support pagination.

Equivalent to POST /api/v1/projects/{project}/sequences/search **/
  searchSequences: InContextSdkMethod<MyOpenapiApiTypes.Mutation['searchSequences'], MyOpenapiApiTypes.MutationsearchSequencesArgs, MeshContext>,
  /** Fulltext search for time series based on result relevance. Primarily meant
for human-centric use-cases, not for programs, since matching and
ordering may change over time. Additional filters can also be
specified. This operation does not support pagination.

Equivalent to POST /api/v1/projects/{project}/timeseries/search **/
  searchTimeSeries: InContextSdkMethod<MyOpenapiApiTypes.Mutation['searchTimeSeries'], MyOpenapiApiTypes.MutationsearchTimeSeriesArgs, MeshContext>,
  /** Update 3D models

Equivalent to POST /api/v1/projects/{project}/3d/models/update **/
  update3DModels: InContextSdkMethod<MyOpenapiApiTypes.Mutation['update3DModels'], MyOpenapiApiTypes.Mutationupdate3DModelsArgs, MeshContext>,
  /** Update 3D revisions

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/update **/
  update3DRevisions: InContextSdkMethod<MyOpenapiApiTypes.Mutation['update3DRevisions'], MyOpenapiApiTypes.Mutationupdate3DRevisionsArgs, MeshContext>,
  /** Update the attributes of assets.

Equivalent to POST /api/v1/projects/{project}/assets/update **/
  updateAssets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateAssets'], MyOpenapiApiTypes.MutationupdateAssetsArgs, MeshContext>,
  /** Update the attributes of data sets.

Equivalent to POST /api/v1/projects/{project}/datasets/update **/
  updateDataSets: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateDataSets'], MyOpenapiApiTypes.MutationupdateDataSetsArgs, MeshContext>,
  /** Updates events in the same project. This operation supports partial updates; Fields omitted from queries will remain unchanged on objects.

For primitive fields (String, Long, Int), use 'set': 'value' to update value; use 'setNull': true to set that field to null.

For the Json Array field (e.g. assetIds), use 'set': [value1, value2] to update value; use 'add': [v1, v2] to add values to current list of values; use 'remove': [v1, v2] to remove these values from current list of values if exists.

A maximum of 1000 events can be updated per request, and all of the event IDs must be unique.

Equivalent to POST /api/v1/projects/{project}/events/update **/
  updateEvents: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateEvents'], MyOpenapiApiTypes.MutationupdateEventsArgs, MeshContext>,
  /** Update information for a list of extraction pipelines. Fields that are not included in the request, are not changed.

Equivalent to POST /api/v1/projects/{project}/extpipes/update **/
  updateExtPipes: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateExtPipes'], MyOpenapiApiTypes.MutationupdateExtPipesArgs, MeshContext>,
  /** Updates the information for the files specified in the request body.

If you want to update the file content, uploaded using the uploadUrl, please
use the initFileUpload request with the query parameter 'overwrite=true'.
Alternatively, delete and recreate the file.

For primitive fields (String, Long, Int), use 'set': 'value' to update
value; use 'setNull': true to set that field to null.

For the Json Array field (e.g. assetIds and securityCategories): Use either only 'set', or a combination of 'add' and/or 'remove'. 

__AssetIds update examples__:

Example request body to overwrite assetIds with a new set, asset ID 1 and 2.

```
{
  "items": [
    {
      "id": 1,
      "update": {
        "assetIds" : {
          "set" : [ 1, 2 ]
        }
      }
    }
  ]
}
```

Example request body to add one asset Id, and remove another asset ID.

```
{
  "items": [
    {
      "id": 1,
      "update": {
        "assetIds" : {
          "add" : [ 3 ],
          "remove": [ 2 ]
        }
      }
    }
  ]
}
```

__Metadata update examples__:

Example request body to overwrite metadata with a new set.
```
{
  "items": [
    {
      "id": 1,
      "update": {
        "metadata": {
          "set": {
            "key1": "value1",
            "key2": "value2"
          }
        }
      }
    }
  ]
}
```

Example request body to add two key-value pairs and remove two other key-value pairs by key for
the metadata field.
```
{
  "items": [
    {
      "id": 1,
      "update": {
        "metadata": {
          "add": {
            "key3": "value3",
            "key4": "value4"
          },
          "remove": [
            "key1",
            "key2"
          ]
        }
      }
    }
  ]
}
```

Equivalent to POST /api/v1/projects/{project}/files/update **/
  updateFiles: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateFiles'], MyOpenapiApiTypes.MutationupdateFilesArgs, MeshContext>,
  /** Update relationships between resources according to the partial definitions of the relationships given in the payload of the request. This means that fields not mentioned in the payload will remain unchanged. Up to 1000 relationships can be updated in one operation.
To delete a value from an optional value the `setNull` field should be set to `true`.
The order of the updated relationships in the response equals the order in the request.

Equivalent to POST /api/v1/projects/{project}/relationships/update **/
  updateRelationships: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateRelationships'], MyOpenapiApiTypes.MutationupdateRelationshipsArgs, MeshContext>,
  /** Update one or more sequences. Fields that are not included in the request, are not changed.

Equivalent to POST /api/v1/projects/{project}/sequences/update **/
  updateSequences: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateSequences'], MyOpenapiApiTypes.MutationupdateSequencesArgs, MeshContext>,
  /** Update 3D revision thumbnail

Equivalent to POST /api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/thumbnail **/
  updateThumbnail: InContextSdkMethod<MyOpenapiApiTypes.Mutation['updateThumbnail'], MyOpenapiApiTypes.MutationupdateThumbnailArgs, MeshContext>
};

export type SubscriptionMyOpenapiApiSdk = {

};

export type MyOpenapiApiContext = {
      ["MyOpenapiApi"]: { Query: QueryMyOpenapiApiSdk, Mutation: MutationMyOpenapiApiSdk, Subscription: SubscriptionMyOpenapiApiSdk },
    };

export type MeshContext = MyOpenapiApiContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                    additionalPackagePrefixes: [],
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));