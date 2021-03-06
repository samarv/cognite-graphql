// @ts-nocheck
export default [
  {
    "openapi": "3.0.1",
    "info": {
      "title": "Cognite API",
      "description": "# Introduction\nThis is the reference documentation for the Cognite API with\nan overview of all the available methods.\n\n# Postman\nYou can download our postman collection [here](https://storage.googleapis.com/cognite-postman-collections/v1.json).\nOpen Postman, click `Import -> Import From Link`, insert the link and import.\n\nYou can read more about how to use Postman [here](https://docs.cognite.com/dev/guides/postman/)\n\n# Pagination\nMost resource types can be paginated, indicated by the field `nextCursor` in the response.\nBy passing the value of `nextCursor` as the cursor you will get the next page of `limit` results.\nNote that all parameters except `cursor` has to stay the same.\n\n# Parallel retrieval\nIf you want to download a lot of resources (let's say events), paginating through millions of records can be slow.\nWe support parallel retrieval through the `partition` parameter, which has the format `m/n` where `n` is the amount of partitions you would like to split the entire data set into.\nIf you want to download the entire data set by splitting it into 10 partitions, you would do the following in parallel with `m` running from 1 to 10:\n  - Make a request to `/events` with `partition=m/10`.\n  - Paginate through the response by following the cursor as explained above. Note that the `partition` parameter needs to be passed to all subqueries.\n",
      "version": "v1",
      "contact": {
        "name": "Cognite Support",
        "url": "https://support.cognite.com",
        "email": "support@cognite.com"
      }
    },
    "servers": [
      {
        "url": "https://api.cognitedata.com"
      }
    ],
    "paths": {
      "/api/v1/projects/{project}/assets": {
        "get": {
          "tags": [
            "Assets"
          ],
          "summary": "List assets",
          "description": "List all assets, or only the assets matching the specified query.",
          "operationId": "getAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/IncludeMetadata"
            },
            {
              "in": "query",
              "name": "name",
              "schema": {
                "$ref": "#/components/schemas/AssetName"
              }
            },
            {
              "in": "query",
              "name": "parentIds",
              "description": "List only assets that have one of the parentIds as a parent. The parentId for root assets is null.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "parentExternalIds",
              "description": "List only assets that have one of the parentExternalIds as a parent. The parentId for root assets is null.",
              "example": "[externalId_1, externalId_2, externalId_3]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayString"
              }
            },
            {
              "in": "query",
              "name": "rootIds",
              "description": "This parameter is deprecated. Use assetSubtreeIds instead. List only assets that have one of the rootIds as a root asset. A root asset is its own root asset.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "deprecated": true,
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetSubtreeIds",
              "description": "List only assets that are in a subtree rooted at any of these assetIds (including the roots given).  If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetSubtreeExternalIds",
              "description": "List only assets that are in a subtree rooted at any of these assetExternalIds. If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": "[externalId_1, externalId_2, externalId_3]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayString"
              }
            },
            {
              "in": "query",
              "name": "source",
              "schema": {
                "maxLength": 128,
                "type": "string",
                "description": "The source of the asset, for example which database it's from."
              }
            },
            {
              "in": "query",
              "name": "root",
              "schema": {
                "type": "boolean",
                "default": false,
                "description": "Whether the filtered assets are root assets, or not. Set to True to only list root assets."
              }
            },
            {
              "in": "query",
              "name": "minCreatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxCreatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minLastUpdatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxLastUpdatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "externalIdPrefix",
              "schema": {
                "$ref": "#/components/schemas/CogniteExternalIdPrefix"
              }
            },
            {
              "$ref": "#/components/parameters/partition"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetDataWithCursorResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = await client.assets.list({ filter: { name: '21PT1019' } });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "asset_list = client.assets.list(limit=5)\n\nfor asset in client.assets:\n    asset # do something with the asset\n\nfor asset_list in client.assets(chunk_size=2500):\n    asset_list # do something with the assets\n\nfrom cognite.client.data_classes import LabelFilter\nmy_label_filter = LabelFilter(contains_all=[\"PUMP\", \"VERIFIED\"])\nasset_list = client.assets.list(labels=my_label_filter)\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Create assets",
          "description": "You can create a maximum of 1000 assets per request.",
          "operationId": "createAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of the assets to create. You can create a maximum of 1000 assets per request.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataExternalAsset"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "$ref": "#/components/responses/AssetDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = [\n  { name: 'First asset' },\n  { name: 'Second asset', description: 'Another asset', externalId: 'anotherAsset' },\n  { name: 'Child asset', parentExternalId: 'anotherAsset'},\n];\nconst createdAssets = await client.assets.create(assets);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import Asset\nassets = [Asset(name=\"asset1\"), Asset(name=\"asset2\")]\nres = client.assets.create(assets)\n\nfrom cognite.client.data_classes import Asset, Label\nasset = Asset(name=\"my_pump\", labels=[Label(external_id=\"PUMP\")])\nres = client.assets.create(assets)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Asset> upsertAssetsList = List.of(Asset.newBuilder()\n    .setExternalId(\"10\")\n    .setName(\"generated_asset_\")\n    .setDescription(\"generated_asset_description_\")\n    .setSource(\"sdk-data-generator\")\n    .putMetadata(\"type\", \"sdk-data-generator\")\n    .build()); \nList<Asset> upsertedAssets = client.assets().upsert(upsertAssetsList);  \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/{id}": {
        "get": {
          "tags": [
            "Assets"
          ],
          "summary": "Retrieve an asset by its ID",
          "description": "Retrieve an asset by its ID. If you want to retrieve assets by externalIds, use Retrieve assets instead.",
          "operationId": "getAsset",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/CogniteInternalId"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = await client.assets.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.assets.retrieve(id=1)\n\nres = client.assets.retrieve(external_id=\"1\")\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/list": {
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Filter assets",
          "description": "Use advanced filtering options to find assets.",
          "operationId": "listAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AssetListScope"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetDataWithCursorResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = await client.assets.list({ filter: { name: '21PT1019' } });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "asset_list = client.assets.list(limit=5)\n\nfor asset in client.assets:\n    asset # do something with the asset\n\nfor asset_list in client.assets(chunk_size=2500):\n    asset_list # do something with the assets\n\nfrom cognite.client.data_classes import LabelFilter\nmy_label_filter = LabelFilter(contains_all=[\"PUMP\", \"VERIFIED\"])\nasset_list = client.assets.list(labels=my_label_filter)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Asset> listAssetsResults = new ArrayList<>(); \nclient.assets() \n .list() \n .forEachRemaining(listAssetsResults::addAll); \n\n \nclient.assets() \n .list(Request.create() \n .withFilterParameter(\"source\", \"source\")) \n .forEachRemaining(listAssetsResults::addAll); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/aggregate": {
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Aggregate assets",
          "description": "Use advanced filtering options to agggregate assets.",
          "operationId": "aggregateAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AssetAggregateRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetAggregateResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const aggregates = await client.assets.aggregate({ filter: { root: true } });\nconsole.log('Number of root assets: ', aggregates[0].count)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "aggregate_by_prefix = client.assets.aggregate(filter={\"external_id_prefix\": \"prefix\"})\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Aggregate aggregateResult = client.assets() \n      .aggregate(Request.create().withFilterParameter(\"source\", \"\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/byids": {
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Retrieve assets",
          "operationId": "byIdsAssets",
          "description": "Retrieve assets by IDs or external IDs. If you specify to get aggregates then be aware that the aggregates are eventually consistent.\n",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "All provided IDs and external IDs must be unique.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AssetDataIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = await client.assets.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.assets.retrieve_multiple(ids=[1, 2, 3])\n\nres = client.assets.retrieve_multiple(external_ids=[\"abc\", \"def\"], ignore_unknown_ids=True)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<Asset> retrievedAssets = client.assets().retrieve(byExternalIds);// by list of items \nList<Asset> retrievedAssets = client.assets().retrieve(\"10\", \"20\");// by varargs of String \n\nList<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<Asset> retrievedAssets = client.assets().retrieve(byInternalIds);// by list of items \nList<Asset> retrievedAssets = client.assets().retrieve(10, 20);// by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/update": {
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Update assets",
          "description": "Update the attributes of assets.",
          "operationId": "updateAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "All provided IDs and external IDs must be unique. Fields that are not included in the request, are not changed.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataAssetChange"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = await client.assets.update([{id: 123, update: {name: {set: 'New name'}}}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import AssetUpdate\nmy_update = AssetUpdate(id=1).description.set(\"New description\").metadata.add({\"key\": \"value\"})\nres1 = client.assets.update(my_update)\nanother_update = AssetUpdate(id=1).description.set(None)\nres2 = client.assets.update(another_update)\n\nfrom cognite.client.data_classes import AssetUpdate\nmy_update = AssetUpdate(id=1).metadata.add({\"key\": \"value\"})\nres1 = client.assets.update(my_update)\nanother_update = AssetUpdate(id=1).metadata.set(None)\nanother_update2 = AssetUpdate(id=1).metadata.set({})\nres2 = client.assets.update(another_update)\n\nfrom cognite.client.data_classes import AssetUpdate\nmy_update = AssetUpdate(id=1).labels.add([\"PUMP\", \"VERIFIED\"])\nres = client.assets.update(my_update)\n\nfrom cognite.client.data_classes import AssetUpdate\nmy_update = AssetUpdate(id=1).labels.remove(\"PUMP\")\nres = client.assets.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Asset> upsertedAssets = client.assets().upsert(upsertAssetsList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/search": {
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Search assets",
          "description": "Fulltext search for assets based on result relevance. Primarily meant\nfor human-centric use-cases, not for programs, since matching and\nordering may change over time. Additional filters can also be\nspecified. This operation does not support pagination.",
          "operationId": "searchAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Search query",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AssetSearchFilter"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/AssetDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assets = await client.assets.search({\n  filter: {\n    parentIds: [1, 2]\n  },\n  search: {\n    query: '21PT1019'\n  }\n});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.assets.search(name=\"some name\")\n\nres = client.assets.search(filter={\"name\": \"some name\"})\n\nres = client.assets.search(query=\"TAG 30 XV\")\n\nres = client.assets.search(name=\"xyz\",filter={\"parent_ids\": [123,456],\"source\": \"some source\"})\n\nmy_label_filter = LabelFilter(contains_all=[\"PUMP\"])\nres = client.assets.search(name=\"xyz\",filter=AssetFilter(labels=my_label_filter))\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/assets/delete": {
        "post": {
          "tags": [
            "Assets"
          ],
          "summary": "Delete assets",
          "description": "Delete assets. To delete all descendants, set recursive to true. The limit of the request does not include the number of descendants that are deleted.",
          "operationId": "deleteAssets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.assets.delete([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.assets.delete(id=[1,2,3], external_id=\"3\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<Item> deletedAssets = client.assets().delete(byInternalIds); \n\nList<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<Item> deletedAssets = client.assets().delete(byExternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Create events",
          "description": "Creates multiple event objects in the same project. It is possible to post a maximum of 1000 events per request.",
          "operationId": "createEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of events to be posted. It is possible to post a maximum of 1000 events per request.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataExternalEvent"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "$ref": "#/components/responses/EventDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = [\n  { description: 'Workorder pump abc', startTime: new Date('22 jan 2019') },\n  { description: 'Broken rule', externalId: 'rule123', startTime: 1557346524667000 },\n];\nconst createdEvents = await client.events.create(events);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import Event\nevents = [Event(start_time=0, end_time=1), Event(start_time=2, end_time=3)]\nres = client.events.create(events)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Event> upsertEventsList = List.of(Event.newBuilder() \n          .setExternalId(\"10\") \n          .setStartTime(1552566113) \n          .setEndTime(1553566113) \n          .setDescription(\"generated_event_\") \n          .setType(\"generated_event\") \n          .setSubtype(\"event_sub_type\") \n          .setSource(\"sdk-data-generator\") \n          .putMetadata(\"type\", \"sdk-data-generator\") \n     .build()); \nclient.events().upsert(upsertEventsList); \n\n "
            }
          ]
        },
        "get": {
          "tags": [
            "Events"
          ],
          "summary": "Filter events",
          "description": "List events optionally filtered on query parameters",
          "operationId": "listEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "in": "query",
              "name": "minStartTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxStartTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minEndTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxEndTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minActiveAtTime",
              "schema": {
                "description": "Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/EpochTimestamp"
                  }
                ]
              }
            },
            {
              "in": "query",
              "name": "maxActiveAtTime",
              "schema": {
                "description": "Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified.",
                "allOf": [
                  {
                    "$ref": "#/components/schemas/EpochTimestamp"
                  }
                ]
              }
            },
            {
              "in": "query",
              "name": "assetIds",
              "description": "Asset IDs of equipment that this event relates to. Format is list of IDs serialized as JSON array(int64). Takes [ 1 .. 100 ] of unique items.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetExternalIds",
              "description": "Asset external IDs of equipment that this event relates to. Takes 1..100 unique items.",
              "example": "[\"externalId1\", \"externalId2\", \"externalId3\"]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayString"
              }
            },
            {
              "in": "query",
              "name": "rootAssetIds",
              "description": "This parameter is deprecated. Use assetSubtreeIds instead. Only include events that have a related asset in a tree rooted at any of these root assetIds.",
              "deprecated": true,
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetSubtreeIds",
              "description": "Only include events that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetSubtreeExternalIds",
              "description": "Only include events that have a related asset in a subtree rooted at any of these assetExternalIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": "[\"externalId1\", \"externalId2\", \"externalId3\"]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayString"
              }
            },
            {
              "in": "query",
              "name": "source",
              "schema": {
                "maxLength": 128,
                "type": "string",
                "description": "The source of this event."
              }
            },
            {
              "in": "query",
              "name": "type",
              "schema": {
                "$ref": "#/components/schemas/EventType"
              }
            },
            {
              "in": "query",
              "name": "subtype",
              "schema": {
                "$ref": "#/components/schemas/EventSubType"
              }
            },
            {
              "in": "query",
              "name": "minCreatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxCreatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minLastUpdatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxLastUpdatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "externalIdPrefix",
              "schema": {
                "$ref": "#/components/schemas/CogniteExternalIdPrefix"
              },
              "style": "form",
              "explode": false
            },
            {
              "$ref": "#/components/parameters/partition"
            },
            {
              "$ref": "#/components/parameters/IncludeMetadata"
            },
            {
              "in": "query",
              "name": "sort",
              "description": "Sort by array of selected fields. Syntax: `[\"<fieldname>:asc|desc\"]`. Default sort order is `asc` with short syntax: `[\"<fieldname>\"]`.\nFilter accepts the following field names: startTime, endTime, createdTime, lastUpdatedTime.\nPartitions are done independently of sorting, there is no guarantee on sort order between elements from different partitions.\n",
              "example": [
                "endTime:desc"
              ],
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/EventDataWithCursorResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = await client.events.list({ filter: { startTime: { min: new Date('1 jan 2018') }, endTime: { max: new Date('1 jan 2019') } } });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "event_list = client.events.list(limit=5, start_time={\"max\": 1500000000})\n\nfor event in client.events:\n    event # do something with the event\n\nfor event_list in client.events(chunk_size=2500):\n    event_list # do something with the events\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/{id}": {
        "get": {
          "tags": [
            "Events"
          ],
          "summary": "Receive event by ID",
          "operationId": "getEventByInternalId",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "$ref": "#/components/schemas/CogniteInternalId"
              }
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/EventResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = await client.events.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.events.retrieve(id=1)\n\nres = client.events.retrieve(external_id=\"1\")\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/list": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Filter all events",
          "description": "Retrieve a list of all events in the same project. This operation supports pagination by cursor. Criteria can be applied to select a subset of events.",
          "operationId": "advancedListEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EventFilterRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EventDataWithCursorResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = await client.events.list({ filter: { startTime: { min: new Date('1 jan 2018') }, endTime: { max: new Date('1 jan 2019') } } });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "event_list = client.events.list(limit=5, start_time={\"max\": 1500000000})\n\nfor event in client.events:\n    event # do something with the event\n\nfor event_list in client.events(chunk_size=2500):\n    event_list # do something with the events\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Event> listEventsResults = new ArrayList<>(); \nclient.events() \n          .list() \n          .forEachRemaining(events -> listEventsResults.addAll(events)); \n\nclient.events() \n          .list(Request.create() \n               .withFilterParameter(\"source\", \"source\")) \n          .forEachRemaining(events -> listEventsResults.addAll(events)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/aggregate": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Aggregate events",
          "operationId": "aggregateEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EventAggregateRequest"
                },
                "examples": {
                  "aggregate": {
                    "value": {
                      "filter": {
                        "type": "type_1"
                      },
                      "aggregate": "uniqueValues",
                      "fields": [
                        "subtype"
                      ]
                    }
                  },
                  "default": {
                    "value": {
                      "filter": {
                        "type": "type_1"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/AggregateResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:READ"
          ],
          "description": "The aggregation API allows you to compute aggregated results on events \nlike getting the count of all events in a project or checking what are all the \ndifferent types and subtypes of events in your project, along with \nthe count of events in each of those aggregations. By specifying an additional \nfilter, you can also aggregate only among events matching the specified filter.\n\nThe default behavior, when you do not specify \nthe `aggregate` field in the request body, is to return the count \nof events.\n\nSetting `aggregate` to `uniqueValues` will return all unique values (up to a \nmaximum of 1000) and the count of each in the field specified in \n`fields: []`. Note that, currently, you can only request for unique \nvalues on a single field. Also, in the case of text fields, the values are \naggregated in a case-insensitive manner. For example:\n\n```\n{\n  \"aggregate\": \"uniqueValues\",\n  \"fields\": [ \"type\" ]\n}\n```\n\nwill return all unique 'types' in the events in your project.\n\nSimilarly,\n\n```\n{\n  \"aggregate\": \"uniqueValues\",\n  \"fields\": [ \"dataSetId\" ],\n  \"filter\": {\n    \"subType\": \"subtype_1\"\n  }\n}\n```\nwill return all unique dataSetIds in events of subtype 'subtype_1'\n",
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const aggregates = await client.events.aggregate.count({ filter: { assetIds: [1, 2, 3] } });\nconsole.log('Number of events: ', aggregates[0].count)\n\nconst uniqueValues = await client.events.aggregate.uniqueValues({ filter: { assetIds: [1, 2, 3] }, fields: ['subtype'] });\nconsole.log('Unique values: ', uniqueValues)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "aggregate_type = client.events.aggregate(filter={\"type\": \"failure\"})\naggregate_subtype = client.events.aggregate_unique_values(filter={\"type\": \"failure\"}, fields=[\"subtype\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Aggregate aggregateResult = \n          client.events().aggregate(Request.create().withFilterParameter(\"source\", \"source\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/byids": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Retrieve events",
          "description": "Retrieves information about events in the same project. Events are returned in the same order as the ids listed in the query.\n\nA maximum of 1000 event IDs may be listed per request and all of them must be unique.",
          "operationId": "byIdsEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of IDs of events to retrieve. Must be up to a maximum of 1000 IDs, and all of them must be unique.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EventDataIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EventDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = await client.events.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.events.retrieve_multiple(ids=[1, 2, 3])\n\nres = client.events.retrieve_multiple(external_ids=[\"abc\", \"def\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\").build()); \nList<Event> resultByExternalIds = \n          client.events().retrieve(byExternalIds);//by list of items \nList<Event> resultByExternalIds = \n           client.events().retrieve(\"10\", \"20\");//by varargs of String \n\n List<Item> byInternalIds = List.of(Item.newBuilder() \n          .setId(10).build()); \nList<Event> resultByInternalIds = \n          client.events().retrieve(byInternalIds);//by list of items \nList<Event> resultByInternalIds = \n          client.events().retrieve(10, 20);//by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/update": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Update events",
          "description": "Updates events in the same project. This operation supports partial updates; Fields omitted from queries will remain unchanged on objects.\n\nFor primitive fields (String, Long, Int), use 'set': 'value' to update value; use 'setNull': true to set that field to null.\n\nFor the Json Array field (e.g. assetIds), use 'set': [value1, value2] to update value; use 'add': [v1, v2] to add values to current list of values; use 'remove': [v1, v2] to remove these values from current list of values if exists.\n\nA maximum of 1000 events can be updated per request, and all of the event IDs must be unique.",
          "operationId": "updateEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of changes. A maximum of 1000 events can be updated per request, and all of the event IDs must be unique.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataEventChange"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EventDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = await client.events.update([{id: 123, update: {description: {set: 'New description'}}}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "event = client.events.retrieve(id=1)\nevent.description = \"New description\"\nres = client.events.update(event)\n\nfrom cognite.client.data_classes import EventUpdate\nmy_update = EventUpdate(id=1).description.set(\"New description\").metadata.add({\"key\": \"value\"})\nres = client.events.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "\nclient.events().upsert(upsertEventsList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/search": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Search within events",
          "operationId": "searchEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EventSearchRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EventDataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const events = await client.events.search({\n  filter: {\n    assetIds: [1, 2]\n  },\n  search: {\n    description: 'Pump'\n  }\n});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.events.search(description=\"some description\")\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/events/delete": {
        "post": {
          "tags": [
            "Events"
          ],
          "summary": "Delete multiple events",
          "description": "Deletes events with the given ids. A maximum of 1000 events can be deleted per request.",
          "operationId": "deleteEvents",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of IDs to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EventDataIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "eventsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.events.delete([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.events.delete(id=[1,2,3], external_id=\"3\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\").build()); \nList<Item> resultByExternalIds = \n          client.events().delete(byExternalIds); \n\nList<Item> byInternalIds = List.of(Item.newBuilder() \n           .setId(10).build()); \nList<Item> resultByInternalIds = \n          client.events().delete(byInternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Upload file",
          "description": "Create metadata information and get an upload link for a file.\n\nTo upload the file, use the uploadUrl link in the response in a separate request. \nTo upload a file, send an HTTP PUT request to the uploadUrl with the relevant 'Content-Type' and 'Content-Length' headers.\n\nIf the uploadUrl contains the string '/v1/files/gcs_proxy/', you can make a Google Cloud Storage (GCS) resumable upload request\nas documented in https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload.\n\nThe uploadUrl expires after one week. \nAny file info entry that does not have the actual file uploaded within one week will be automatically deleted.",
          "operationId": "initFileUpload",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "in": "header",
              "name": "Origin",
              "description": "The 'Origin' header parameter is required if there is a Cross Origin issue.",
              "schema": {
                "type": "string"
              }
            },
            {
              "in": "query",
              "name": "overwrite",
              "schema": {
                "type": "boolean",
                "default": false
              },
              "description": "If 'overwrite' is set to true, and the POST body content specifies a 'externalId' field, fields for the file found for externalId can be overwritten. The default setting is false. \n\nIf metadata is included in the request body, all of the original metadata will be overwritten.\nThe actual file will be overwritten after a successful upload with the uploadUrl from the response. \nIf there is no successful upload, the current file contents will be kept. \n\nFile-Asset mappings only change if explicitly stated in the assetIds field of the POST json body. \nDo not set assetIds in request body if you want to keep the current file-asset mappings."
            }
          ],
          "requestBody": {
            "description": "Fields to be set for the file.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExternalFilesMetadata"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "$ref": "#/components/responses/UploadFileMetadataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const fileContent = 'file data here'; // can also be of type ArrayBuffer, Buffer, Blob, File or any\n// automatic upload:\nconst file = await client.files.upload({name: 'examplefile.jpg', mimeType: 'image/jpg'}, fileContent);\n\n// manual with uploadUrl:\nconst file2 = await client.files.upload({name: 'examplefile.jpg', mimeType: 'image/jpg'});\n// then upload using the file.uploadUrl"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.files.upload(\"/path/to/file\", name=\"my_file\")\n\nres = client.files.upload(\"/path/to/file\")\n\nres = client.files.upload(\"/path/to/my/directory\")\n\nfrom cognite.client.data_classes import Label\nres = client.files.upload(\"/path/to/file\", name=\"my_file\", labels=[Label(external_id=\"WELL LOG\")])\n\nfrom cognite.client.data_classes import GeoLocation, Geometry\ngeometry = Geometry(type=\"LineString\", coordinates=[[30, 10], [10, 30], [40, 40]])\nres = client.files.upload(\"/path/to/file\", geo_location=GeoLocation(type=\"Feature\", geometry=geometry))\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Path fileAOriginal = Paths.get(\"./src/test/resources/csv-data.txt\"); \nList<FileContainer> fileContainerInput = new ArrayList<>(); \nFileMetadata fileMetadata = FileMetadata.newBuilder() \n          .setExternalId(\"10\") \n          .setName(\"test_file_.test\") \n          .setSource(\"sdk-data-generator\") \n          .putMetadata(\"type\", \"sdk-data-generator\") \n     .build(); \n\n FileContainer fileContainer = FileContainer.newBuilder() \n          .setFileMetadata(fileMetadata) \n          .setFileBinary(FileBinary.newBuilder() \n               .setBinaryUri(fileAOriginal.toUri().toString())) \n          .build(); \n fileContainerInput.add(fileContainer); \n\n List<FileMetadata> uploadFileResult = \n          client.files().upload(fileContainerInput); \n\n"
            }
          ]
        },
        "get": {
          "tags": [
            "Files"
          ],
          "summary": "List files",
          "description": "The GET /files operation can be used to return information for all files in a project. \n\nOptionally you can add one or more of the following query parameters. \nThe filter query parameters will filter the results to only include files that match all filter parameters.",
          "operationId": "listFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/Name"
            },
            {
              "in": "query",
              "name": "mimeType",
              "schema": {
                "$ref": "#/components/schemas/MimeType"
              }
            },
            {
              "in": "query",
              "name": "source",
              "schema": {
                "$ref": "#/components/schemas/FileSource"
              }
            },
            {
              "in": "query",
              "name": "assetIds",
              "schema": {
                "$ref": "#/components/schemas/AssetIds"
              }
            },
            {
              "in": "query",
              "name": "assetExternalIds",
              "description": "Asset external IDs of related equipment that this file relates to. Takes 1..100 unique items.",
              "example": "[\"externalId1\", \"externalId2\", \"externalId3\"]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayString"
              }
            },
            {
              "in": "query",
              "name": "dataSetIds",
              "schema": {
                "$ref": "#/components/schemas/DataSetIdEithers"
              }
            },
            {
              "in": "query",
              "name": "rootAssetIds",
              "description": "Only include files that have a related asset in a tree rooted at any of these root assetIds.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetSubtreeIds",
              "description": "Only include files that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "assetSubtreeExternalIds",
              "description": "Only include files that have a related asset in a subtree rooted at any of these assetExternalIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": "[\"externalId1\", \"externalId2\", \"externalId3\"]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayString"
              }
            },
            {
              "in": "query",
              "name": "minCreatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxCreatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minLastUpdatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxLastUpdatedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minUploadedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxUploadedTime",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minSourceCreatedTime",
              "description": "Include files that have sourceCreatedTime set and with minimum this value.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxSourceCreatedTime",
              "description": "Include files that have sourceCreatedTime set and with maximum this value.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "minSourceModifiedTime",
              "description": "Include files that have sourceModifiedTime set and with minimum this value.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "maxSourceModifiedTime",
              "description": "Include files that have sourceModifiedTime set and with maximum this value.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "in": "query",
              "name": "externalIdPrefix",
              "schema": {
                "$ref": "#/components/schemas/CogniteExternalIdPrefix"
              },
              "style": "form",
              "explode": false
            },
            {
              "in": "query",
              "name": "uploaded",
              "description": "Whether or not the actual file is uploaded. This field is returned only by the API, it has no effect in a post body.",
              "schema": {
                "type": "boolean"
              },
              "example": true
            },
            {
              "$ref": "#/components/parameters/partition"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/FileMetadataWithCursorResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const files = await client.files.list({filter: {mimeType: 'image/png'}});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "file_list = client.files.list(limit=5, external_id_prefix=\"prefix\")\n\nfor file_metadata in client.files:\n    file_metadata # do something with the file metadata\n\nfor file_list in client.files(chunk_size=2500):\n    file_list # do something with the files\n\nfrom cognite.client.data_classes import LabelFilter\nmy_label_filter = LabelFilter(contains_all=[\"WELL LOG\", \"VERIFIED\"])\nfile_list = client.files.list(labels=my_label_filter)\n\nfrom cognite.client.data_classes import GeoLocationFilter, GeometryFilter\nmy_geo_location_filter = GeoLocationFilter(relation=\"intersects\", shape=GeometryFilter(type=\"Point\", coordinates=[35,10]))\nfile_list = client.files.list(geo_location=my_geo_location_filter)\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/{id}": {
        "get": {
          "tags": [
            "Files"
          ],
          "summary": "Retrieve file by id",
          "description": "Returns file info for the file ID",
          "operationId": "getFileByInternalId",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "$ref": "#/components/schemas/CogniteInternalId"
              }
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/FileMetadataResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const files = await client.files.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.files.retrieve(id=1)\n\nres = client.files.retrieve(external_id=\"1\")\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/list": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Filter files",
          "description": "Retrieves a list of all files in a project. Criteria can be supplied to select a subset of files. This operation supports pagination with cursors.",
          "operationId": "advancedListFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The project name",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileFilterRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/FileMetadataWithCursorResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const files = await client.files.list({filter: {mimeType: 'image/png'}});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "file_list = client.files.list(limit=5, external_id_prefix=\"prefix\")\n\nfor file_metadata in client.files:\n    file_metadata # do something with the file metadata\n\nfor file_list in client.files(chunk_size=2500):\n    file_list # do something with the files\n\nfrom cognite.client.data_classes import LabelFilter\nmy_label_filter = LabelFilter(contains_all=[\"WELL LOG\", \"VERIFIED\"])\nfile_list = client.files.list(labels=my_label_filter)\n\nfrom cognite.client.data_classes import GeoLocationFilter, GeometryFilter\nmy_geo_location_filter = GeoLocationFilter(relation=\"intersects\", shape=GeometryFilter(type=\"Point\", coordinates=[35,10]))\nfile_list = client.files.list(geo_location=my_geo_location_filter)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<FileMetadata> listFilesResults = new ArrayList<>(); \nclient.files() \n          .list() \n          .forEachRemaining(files -> listFilesResults.addAll(files)); \n\nclient.files() \n          .list(Request.create() \n                .withFilterParameter(\"source\", \"sourceValue\")) \n          .forEachRemaining(files -> listFilesResults.addAll(files)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/byids": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Retrieve files",
          "description": "Retrieves metadata information about multiple specific files in the same project. \nResults are returned in the same order as in the request. This operation does not return the file contents.",
          "operationId": "byIdsFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of IDs of files to retrieve. Must be up to a maximum of 1000 IDs, and all of them must be unique.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileDataIdsWithIgnoreUnknownIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/FileResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const files = await client.files.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.files.retrieve_multiple(ids=[1, 2, 3])\n\nres = client.files.retrieve_multiple(external_ids=[\"abc\", \"def\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<FileMetadata> retrievedFilesByExternalIds = client.files().retrieve(\"10\");//by varargs of String \nList<Item> itemsExternalId = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<FileMetadata> resultsExternal = client.files().retrieve(itemsExternalId);//by list of items \n\nList<FileMetadata> retrievedFilesByInternalIds = client.files().retrieve(10, 20);//by varargs of Long \nList<Item> itemsInternalId = List.of(Item.newBuilder().setId(10).build()); \nList<FileMetadata> resultsInternal = client.files().retrieve(itemsInternalId);//by list of items \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/search": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Search files",
          "description": "Search for files based on relevance. You can also supply a strict match filter as in Filter files, and search in the results from the filter. Returns first 1000 results based on relevance. This operation does not support pagination.",
          "operationId": "searchFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FilesSearchFilter"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/FileResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const files = await client.files.search({\n  filter: {\n    mimeType: 'image/jpg',\n  },\n  search: {\n    name: 'Pump'\n  }\n});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.files.search(name=\"some name\")\n\nmy_label_filter = LabelFilter(contains_all=[\"WELL LOG\"])\nres = client.assets.search(name=\"xyz\",filter=FileMetadataFilter(labels=my_label_filter))\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/delete": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Delete files",
          "description": "Deletes the files with the given ids.\n\nA maximum of 1000 files can be deleted per request.",
          "operationId": "deleteFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of IDs of files to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileDataIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.files.delete([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.files.delete(id=[1,2,3], external_id=\"3\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> deleteByExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\").build()); \nList<Item> deleteItemsResults = client.files().delete(deleteByExternalIds); \n\nList<Item> deleteByInternalIds = List.of(Item.newBuilder() \n          .setId(10).build()); \nList<Item> deleteItemsResults = client.files().delete(deleteByInternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/downloadlink": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Download files",
          "description": "Retrieves a list of download URLs for the specified list of file IDs. After getting the download links, the client has to issue a GET request to the returned URLs, which will respond with the contents of the file. The link will expire after 30 seconds.",
          "operationId": "downloadLinks",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of file IDs to retrieve the download URL for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileLinkIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/DataWithLinks"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.files.getDownloadUrls([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.files.download(directory=\"my_directory\", id=[1,2,3], external_id=[\"abc\", \"def\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> downloadByExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\").build()); \nList<FileContainer> downloadFilesResults = \n          client.files().downloadToPath(downloadByExternalIds, Paths.get(\"\")); \n\nList<Item> downloadByInternallIds = List.of(Item.newBuilder() \n          .setId(10).build()); \nList<FileContainer> downloadFilesResults = \n          client.files().downloadToPath(downloadByInternallIds, Paths.get(\"\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/icon": {
        "get": {
          "tags": [
            "Files"
          ],
          "summary": "Get icon",
          "description": "The GET /files/icon operation can be used to get an image representation of a file.\n\nEither id or externalId must be provided as a query parameter (but not both).\nSupported file formats:\n- Normal jpeg and png files are currently fully supported.\n- Other image file formats might work, but continued support for these are not guaranteed.\n- Currently only supporting thumbnails for image files.\nAttempts to get icon for unsupported files will result in status 400.",
          "operationId": "getIcon",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "in": "query",
              "name": "id",
              "schema": {
                "$ref": "#/components/schemas/CogniteInternalId"
              }
            },
            {
              "in": "query",
              "name": "externalId",
              "schema": {
                "$ref": "#/components/schemas/CogniteExternalId"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Thumbnail image (JPEG)",
              "content": {
                "image/jpeg": {
                  "schema": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/files/update": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Update files",
          "description": "Updates the information for the files specified in the request body.\n\nIf you want to update the file content, uploaded using the uploadUrl, please\nuse the initFileUpload request with the query parameter 'overwrite=true'.\nAlternatively, delete and recreate the file.\n\nFor primitive fields (String, Long, Int), use 'set': 'value' to update\nvalue; use 'setNull': true to set that field to null.\n\nFor the Json Array field (e.g. assetIds and securityCategories): Use either only 'set', or a combination of 'add' and/or 'remove'. \n\n__AssetIds update examples__:\n\nExample request body to overwrite assetIds with a new set, asset ID 1 and 2.\n\n```\n{\n  \"items\": [\n    {\n      \"id\": 1,\n      \"update\": {\n        \"assetIds\" : {\n          \"set\" : [ 1, 2 ]\n        }\n      }\n    }\n  ]\n}\n```\n\nExample request body to add one asset Id, and remove another asset ID.\n\n```\n{\n  \"items\": [\n    {\n      \"id\": 1,\n      \"update\": {\n        \"assetIds\" : {\n          \"add\" : [ 3 ],\n          \"remove\": [ 2 ]\n        }\n      }\n    }\n  ]\n}\n```\n\n__Metadata update examples__:\n\nExample request body to overwrite metadata with a new set.\n```\n{\n  \"items\": [\n    {\n      \"id\": 1,\n      \"update\": {\n        \"metadata\": {\n          \"set\": {\n            \"key1\": \"value1\",\n            \"key2\": \"value2\"\n          }\n        }\n      }\n    }\n  ]\n}\n```\n\nExample request body to add two key-value pairs and remove two other key-value pairs by key for\nthe metadata field.\n```\n{\n  \"items\": [\n    {\n      \"id\": 1,\n      \"update\": {\n        \"metadata\": {\n          \"add\": {\n            \"key3\": \"value3\",\n            \"key4\": \"value4\"\n          },\n          \"remove\": [\n            \"key1\",\n            \"key2\"\n          ]\n        }\n      }\n    }\n  ]\n}\n```",
          "operationId": "updateFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The JSON request body which specifies which files and fields to update.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataFileChange"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/FileResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const files = await client.files.update([{\n  id: 123,\n  update: {\n    source: { set: 'new source' }\n  }\n}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "file_metadata = client.files.retrieve(id=1)\nfile_metadata.description = \"New description\"\nres = client.files.update(file_metadata)\n\nfrom cognite.client.data_classes import FileMetadataUpdate\nmy_update = FileMetadataUpdate(id=1).source.set(\"new source\").metadata.add({\"key\": \"value\"})\nres = client.files.update(my_update)\n\nfrom cognite.client.data_classes import FileMetadataUpdate\nmy_update = FileMetadataUpdate(id=1).labels.add([\"PUMP\", \"VERIFIED\"])\nres = client.files.update(my_update)\n\nfrom cognite.client.data_classes import FileMetadataUpdate\nmy_update = FileMetadataUpdate(id=1).labels.remove(\"PUMP\")\nres = client.files.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<FileMetadata> editFilesInput = listFilesResults.stream() \n .map(fileMetadata -> fileMetadata.toBuilder() \n .putMetadata(\"addedField\", \"new field value\") \n .build()) \n .collect(Collectors.toList()); \n\n List<FileMetadata> editFilesResult = \n          client.files().upsert(editFilesInput); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/files/aggregate": {
        "post": {
          "tags": [
            "Files"
          ],
          "summary": "Aggregate files",
          "description": "Calculate aggregates for files, based on optional filter specification. Returns the following aggregates: `count`",
          "operationId": "aggregateFiles",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Files aggregate request body",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileFilter"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/FilesAggregateResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "filesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const aggregates = await client.files.aggregate({ filter: { uploaded: true } });\nconsole.log('Number of uploaded files: ', aggregates[0].count)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "aggregate_uploaded = client.files.aggregate(filter={\"uploaded\": True})\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Aggregate fileAggregate = \n          client.files().aggregate(Request.create() \n          .withFilterParameter(\"source\", \"source\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/files/{threedFileId}": {
        "get": {
          "tags": [
            "3D Files"
          ],
          "summary": "Retrieve a 3D file",
          "description": "Retrieve the contents of a 3D file.\n\nThis endpoint supported tag-based caching.\n\nThis endpoint is only compatible with 3D file IDs from the 3D API, and not compatible with\nfile IDs from the Files API.",
          "operationId": "get3DFile",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "threedFileId",
              "in": "path",
              "description": "The ID of the 3D file to retrieve.",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "*/*": {
                  "schema": {
                    "type": "string",
                    "description": "The raw contents of the file.",
                    "format": "binary"
                  }
                }
              },
              "headers": {
                "Content-Type": {
                  "schema": {
                    "type": "string"
                  },
                  "description": "The media type of the file."
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.files3D.retrieve(3744350296805509);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.files.retrieve(1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "client.threeD().files().downloadToPath(1L, Paths.get(\"\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models": {
        "get": {
          "tags": [
            "3D Models"
          ],
          "summary": "List 3D models",
          "description": "Retrieves a list of all models in a project. This operation supports pagination. You can filter out all models without a published revision.",
          "operationId": "get3DModels",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "name": "published",
              "in": "query",
              "description": "Filter based on whether or not it has published revisions.",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of models.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Model3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const models3D = await client.models3D.list({ published: true });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "three_d_model_list = client.three_d.models.list()\n\nfor three_d_model in client.three_d.models:\n    three_d_model # do something with the 3d model\n\nfor three_d_model in client.three_d.models(chunk_size=50):\n    three_d_model # do something with the 3d model\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDModel> listResults = new ArrayList<>(); \n client.threeD().models() \n          .list() \n          .forEachRemaining(model -> listResults.addAll(model)); \n\n"
            }
          ]
        },
        "post": {
          "tags": [
            "3D Models"
          ],
          "summary": "Create 3D models",
          "operationId": "create3DModels",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The models to create.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 1000,
                      "items": {
                        "$ref": "#/components/schemas/CreateModel3D"
                      }
                    }
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "A list of the created models.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Model3DList"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:CREATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const modelsToCreate = [\n  { name: 'Model 0' },\n  { name: 'Model 2' },\n];\nconst models3D = await client.models3D.create(modelsToCreate);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.models.create(name=\"My Model\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDModel> upsertThreeDModelsList = List.of( \n          ThreeDModel.newBuilder() \n          .setName(\"generated-\") \n          .setDataSetId(dataSetId) \n          .setCreatedTime(1552566113).build()); \nList<ThreeDModel> listUpsert = \n          client.threeD() \n          .models() \n          .upsert(upsertThreeDModelsList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/update": {
        "post": {
          "tags": [
            "3D Models"
          ],
          "summary": "Update 3D models",
          "operationId": "update3DModels",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of changes.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 1000,
                      "items": {
                        "$ref": "#/components/schemas/UpdateModel3D"
                      }
                    }
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Corresponding models after applying the updates.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Model3DList"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:UPDATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const modelsToUpdate = [\n  { id: 3744350296805509, update: { name: { set: 'Model 0 updated' }}},\n  { id: 8163365893677939, update: { name: { set: 'Model 2 updated' }}},\n];\nconst models3D = await client.models3D.update(modelsToUpdate);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "three_d_model = client.three_d.models.retrieve(id=1)\nthree_d_model.name = \"New Name\"\nres = client.three_d.models.update(three_d_model)\n\nfrom cognite.client.data_classes import ThreeDModelUpdate\nmy_update = ThreeDModelUpdate(id=1).name.set(\"New Name\")\nres = client.three_d.models.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "ThreeDModel update = upsertThreeDModelsList.get(0).toBuilder() \n          .setName(\"Update Test\").build(); \nList<ThreeDModel> listUpsert = \n          client.threeD() \n          .models() \n          .upsert(List.of(update)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/delete": {
        "post": {
          "tags": [
            "3D Models"
          ],
          "summary": "Delete 3D models",
          "operationId": "delete3DModels",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of models to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataIdentifiers"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:DELETE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.models3D.delete([{ id: 3744350296805509 }, { id: 8163365893677939 }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.models.delete(id=1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> deleteItemsResultsByExternalIds = \n          client.threeD() \n          .models() \n          .delete(List.of(Item.newBuilder().setExternalId(\"10\").build())); \n\nList<Item> deleteItemsResultsByInternalIds = \n          client.threeD() \n          .models() \n          .delete(List.of(Item.newBuilder().setId(10).build())); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}": {
        "get": {
          "tags": [
            "3D Models"
          ],
          "summary": "Retrieve a 3D model",
          "operationId": "get3DModel",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            }
          ],
          "responses": {
            "200": {
              "description": "A model object",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Model3D"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.models3D.retrieve(3744350296805509);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.models.retrieve(id=1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDModel> retrievedByInternalIds = \n          client.threeD() \n          .models() \n          .retrieve(List.of(Item.newBuilder().setId(10).build())); \n\nList<ThreeDModel> retrievedByExternalIds = \n          client.threeD() \n          .models() \n          .retrieve(List.of(Item.newBuilder().setExternalId(\"10\").build())); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions": {
        "get": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "List 3D revisions",
          "description": "Retrieves a list of all revisions of a model. This operation supports pagination. You can also filter revisions if they are marked as published or not by using the query param published.",
          "operationId": "get3DRevisions",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "name": "published",
              "in": "query",
              "description": "Filter based on published status.",
              "schema": {
                "type": "boolean"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of revisions of the model.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Revision3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const revisions3D = await client.revisions3D.list(324566546546346);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.revisions.list(model_id=1, published=True, limit=100)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDModelRevision> listResults = new ArrayList<>(); \nclient.threeD() \n          .models() \n          .revisions()\n          .list(1L) \n          .forEachRemaining(model -> listResults.addAll(model)); \n\n"
            }
          ]
        },
        "post": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Create 3D revisions",
          "operationId": "create3DRevisions",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            }
          ],
          "requestBody": {
            "description": "The revisions to create.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 1000,
                      "items": {
                        "$ref": "#/components/schemas/CreateRevision3D"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "A list of created revisions.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Revision3DList"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:CREATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const revisions = await client.revisions3D.create(4234325345643654, [{ fileId: 8252999965991682 }, { fileId: 6305529564379596 }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import ThreeDModelRevision\nmy_revision = ThreeDModelRevision(file_id=1)\nres = client.three_d.revisions.create(model_id=1, revision=my_revision)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Path fileAOriginal = Paths.get(\"./src/test/resources/csv-data.txt\"); \nList<FileContainer> fileContainerInput = new ArrayList<>(); \nFileMetadata fileMetadata = FileMetadata.newBuilder() \n          .setExternalId(\"10\") \n          .setName(\"test_file_.test\") \n          .setSource(\"sdk-data-generator\") \n          .putMetadata(\"type\", \"sdk-data-generator\") \n     .build(); \n\n FileContainer fileContainer = FileContainer.newBuilder() \n          .setFileMetadata(fileMetadata) \n          .setFileBinary(FileBinary.newBuilder() \n               .setBinaryUri(fileAOriginal.toUri().toString())) \n          .build(); \n fileContainerInput.add(fileContainer); \n\n List<FileMetadata> uploadFileResult = \n          client.files().upload(fileContainerInput); \n\nThreeDModelRevision.Camera camera = ThreeDModelRevision.Camera.newBuilder() \n .addPosition(2.707411050796509).addPosition(-4.514726638793945).addPosition(1.5695604085922241) \n .addTarget(0.0).addTarget(-0.002374999923631549).addTarget(1.5695604085922241) \n.build(); \nThreeDModelRevision revision = ThreeDModelRevision.newBuilder() \n .setFileId(uploadFileResult.get(0).getId()).setCamera(camera).addRotation(new Random().nextInt(100) / 100.0) \n.build(); \nList<ThreeDModelRevision> listUpsert = \n          client.threeD() \n          .models() \n          .revisions() \n          .upsert(10L, List.of(revision)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/update": {
        "post": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Update 3D revisions",
          "operationId": "update3DRevisions",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            }
          ],
          "requestBody": {
            "description": "List of changes.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 1000,
                      "items": {
                        "$ref": "#/components/schemas/UpdateRevision3D"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Corresponding revisions after applying the updates.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Revision3DList"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:UPDATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const revisionsToUpdate = [{\n id: 6305529564379596,\n update: {\n   rotation: {\n     set: [1, 2, 3]\n   }\n }\n}];\nconst updated = await client.revisions3D.update(8252999965991682, revisionsToUpdate);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "revision = client.three_d.revisions.retrieve(model_id=1, id=1)\nrevision.status = \"New Status\"\nres = client.three_d.revisions.update(model_id=1, item=revision)\n\nfrom cognite.client.data_classes import ThreeDModelRevisionUpdate\nmy_update = ThreeDModelRevisionUpdate(id=1).published.set(False).metadata.add({\"key\": \"value\"})\nres = client.three_d.revisions.update(model_id=1, item=my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "ThreeDModelRevision th = ThreeDModelRevision.newBuilder().setId(10).setRotation(1,10).build(); \nList<ThreeDModelRevision> tdUpdateResults = \nclient.threeD() \n          .models() \n          .revisions() \n          .upsert(10L, List.of(th)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/delete": {
        "post": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Delete 3D revisions",
          "operationId": "delete3DRevisions",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            }
          ],
          "requestBody": {
            "description": "List of revisions ids to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataIdentifiers"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:DELETE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.revisions3D.delete(8252999965991682, [{ id: 4190022127342195 }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.revisions.delete(model_id=1, id=1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<Item> deleteItemsResults = client.threeD().models().revisions().delete(20L, byInternalIds); \n\nList<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<Item> deleteItemsResults = client.threeD().models().revisions().delete(20L, byExternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}": {
        "get": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Retrieve a 3D revision",
          "operationId": "get3DRevision",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "responses": {
            "200": {
              "description": "A revision object",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Revision3D"
                  }
                }
              }
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const revisions3D = await client.revisions3D.retrieve(8252999965991682, 4190022127342195)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.revisions.retrieve(model_id=1, id=1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<ThreeDModelRevision> resultsByInternalIds = client.threeD().models().revisions().retrieve(10L, byInternalIds); \n\nList<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<ThreeDModelRevision> resultsByExternalIds = client.threeD().models().revisions().retrieve(10L, byExternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/logs": {
        "get": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "List 3D revision logs",
          "description": "List log entries for the revision",
          "operationId": "get3DLogs",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            },
            {
              "name": "severity",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64",
                "description": "Minimum severity to retrieve (3 = INFO, 5 = WARN, 7 = ERROR).",
                "default": 5
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of log entries",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RevisionLog3DResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/thumbnail": {
        "post": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Update 3D revision thumbnail",
          "operationId": "updateThumbnail",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "requestBody": {
            "description": "The request body containing the file ID of the thumbnail image (from Files API).",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateRevision3DThumbnail"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:UPDATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.revisions3D.updateThumbnail(8252999965991682, 4190022127342195, 3243334242324);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.revisions.update_thumbnail(model_id=1, revision_id=1, file_id=1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "FileMetadata fileMetadata = FileMetadata.newBuilder() \n .setExternalId(\"10\") \n .setName(\"CAMARO_THUMBNAIL_TEST_SDK_JAVA.png\") \n .setSource(\"sdk-data-generator\") \n .setUploaded(true) \n .setMimeType(\"image/png\") \n .putMetadata(\"type\", \"sdk-data-generator\") \n .putMetadata(\"sdk-data-generator\", \"sdk-data-generator\") \n .build(); \n byte[] fileByteA = bytes of file; \n List<FileContainer> list = List.of(FileContainer.newBuilder().setFileMetadata(fileMetadata).setFileBinary(FileBinary.newBuilder() \n          .setBinary(ByteString.copyFrom(fileByteA))).build()); \nList<FileMetadata> uploadFileResult = client.files().upload(list); \n\nBoolean updated = client \n          .threeD() \n          .models() \n          .revisions() \n          .updateThumbnail(model.getId(), revision.getId(), uploadFileResult.get(0).getId()); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/outputs": {
        "get": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "List available outputs",
          "description": "Retrieve a list of available outputs for a processed 3D model. An output can be a format that can be consumed by a viewer (e.g. Reveal) or import in external tools. Each of the outputs will have an associated version which is used to identify the version of output format (not the revision of the processed output). Note that the structure of the outputs will vary and is not covered here.",
          "operationId": "list3dModelOutputs",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            },
            {
              "name": "format",
              "in": "query",
              "description": "Format identifier, e.g. 'ept-pointcloud' (point cloud). Well known formats are: \n'ept-pointcloud' (point cloud data), 'reveal-directory' (output supported by Reveal), \n'nodes-json' (a JSON dump of all nodes in the file) and 'preview-glb' (a GLTF preview\nof the 3D model). In addition, 'all-outputs' can be provided to return all outputs. Note\nthat many of the outputs are internal, where the format might change without any warning.\n",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Returns a list of outputs and available versions per output for the given revision.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Model3DOutputResponseList"
                  }
                }
              }
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes": {
        "get": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "List 3D nodes",
          "description": "Retrieves a list of nodes from the hierarchy in the 3D model. You can also request a specific subtree with the 'nodeId' query parameter and limit the depth of the resulting subtree with the 'depth' query parameter. By default, nodes are returned in order of ascending treeIndex. We suggest trying to set the query parameter `sortByNodeId` to `true` to check whether it makes your use case faster. The `partition` parameter can only be used if `sortByNodeId` is set to `true`. This operation supports pagination.",
          "operationId": "get3DNodes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            },
            {
              "$ref": "#/components/parameters/partition"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "name": "depth",
              "in": "query",
              "description": "Get sub nodes up to this many levels below the specified node. Depth 0 is the root node.",
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "nodeId",
              "in": "query",
              "description": "ID of a node that are the root of the subtree you request (default is the root node).",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "sortByNodeId",
              "in": "query",
              "description": "Enable sorting by nodeId. When this parameter is `true`, nodes will be listed in order of ascending nodeId. Enabling this option will likely result in faster response for many requests.",
              "schema": {
                "type": "boolean",
                "default": false
              }
            },
            {
              "name": "properties",
              "in": "query",
              "description": "Example: `{\"category1\":{\"property1\":\"value1\"}}`\n\nFilter for node properties. Only nodes that match all the given properties exactly will be listed.\nThe filter must be a JSON object with the same format as the `properties` field.\n",
              "schema": {
                "type": "string",
                "format": "jsonObject(jsonObject(string))"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of nodes of a revision.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Node3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const nodes3d = await client.revisions3D.list3DNodes(8252999965991682, 4190022127342195);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.revisions.list_nodes(model_id=1, revision_id=1, limit=10)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDModelRevision> listResults = new ArrayList<>(); \nclient.threeD() \n          .models() \n          .revisions() \n          .nodes() \n          .list(model.getId(), revision.getId()) \n          .forEachRemaining(val -> listResults.addAll(val)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/list": {
        "post": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Filter 3D nodes",
          "description": "List nodes in a project, filtered by node property values specified by supplied filters. This operation supports pagination and partitions.",
          "operationId": "filter3DNodes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node3DFilterBody"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "A list of nodes satisfying the supplied node property filters.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Node3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "//without parameters \nIterator<List<ThreeDNode>> itFilter = client.threeD() \n          .models() \n          .revisions() \n          .nodes() \n          .filter(model.getId(), revision.getId()); \n List<ThreeDNode> listResults = itFilter.next(); \n\n//with parameters \nRequest request = Request.create() \n          .withFilterParameter(\"properties\", createFilterPropertiesWithCategories()); \n\nList<ThreeDNode> listResults = new ArrayList<>(); \nclient.threeD() \n          .models() \n          .revisions() \n          .nodes() \n          .filter(model.getId(), revision.getId(), request) \n          .forEachRemaining(val -> listResults.addAll(val)); \n\nprivate ThreeDNode.PropertiesFilter createFilterPropertiesWithCategories() { \n     ThreeDNode.PropertiesFilter.Categories.CategoriesValues.Builder catValBuilder = \n          ThreeDNode.PropertiesFilter.Categories.CategoriesValues.newBuilder(); \n     catValBuilder.addValuesString(\"Box\"); \n     ThreeDNode.PropertiesFilter.Categories.Builder catBuilder = \n          ThreeDNode.PropertiesFilter.Categories.newBuilder(); \n     catBuilder.setName(\"Item\"); \n     catBuilder.putValues(\"Type\", catValBuilder.build()); \n     ThreeDNode.PropertiesFilter.Builder propsBuilder = \n          ThreeDNode.PropertiesFilter.newBuilder(); \n     propsBuilder.addCategories(catBuilder.build()); \n     return propsBuilder.build(); \n } \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/byids": {
        "post": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "Get 3D nodes by ID",
          "description": "Retrieves specific nodes given by a list of IDs.",
          "operationId": "get3DNodesById",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "requestBody": {
            "description": "The request body containing the IDs of the nodes to retrieve.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Node3DIds"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "A list of nodes.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Node3DList"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const nodes3d = await client.revisions3D.retrieve3DNodes(8252999965991682, 4190022127342195, [{id: 123}, {id: 456}]);"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<ThreeDNode> nodesByIds = client.threeD() \n          .models() \n          .revisions() \n          .nodes() \n          .retrieve(model.getId(), revision.getId(), byInternalIds); \n\nList<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \n List<ThreeDNode> nodesByIds = client.threeD() \n          .models() \n          .revisions() \n          .nodes() \n          .retrieve(model.getId(), revision.getId(), byExternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/nodes/{nodeId}/ancestors": {
        "get": {
          "tags": [
            "3D Model Revisions"
          ],
          "summary": "List 3D ancestor nodes",
          "description": "Retrieves a list of ancestor nodes of a given node, including itself, in the hierarchy of the 3D model. This operation supports pagination.",
          "operationId": "get3DNodeAncestors",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "name": "nodeId",
              "in": "path",
              "description": "ID of the node to get the ancestors of.",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of ancestor nodes.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Node3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const nodes3d = await client.revisions3D.list3DNodeAncestors(8252999965991682, 4190022127342195, 572413075141081);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.revisions.list_ancestor_nodes(model_id=1, revision_id=1, node_id=5, limit=10)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDNode> listResultsAncestorNodes = new ArrayList<>(); \nclient.threeD() \n          .models() \n          .revisions() \n          .nodes() \n          .list(model.getId(), revision.getId(), nodeDrawn.getId()) \n          .forEachRemaining(val -> listResultsAncestorNodes.addAll(val)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings": {
        "get": {
          "tags": [
            "3D Asset Mapping"
          ],
          "summary": "List 3D asset mappings",
          "description": "List all asset mappings\n\n\nAsset references obtained from a mapping - through asset ids - may be\ninvalid, simply by the non-transactional nature of HTTP.\nThey are NOT maintained by any means from CDF, meaning they will be stored until the\nreference is removed through the delete endpoint of 3d asset mappings.",
          "operationId": "get3DMappings",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "name": "nodeId",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "assetId",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "intersectsBoundingBox",
              "in": "query",
              "description": "Example: `{\"min\":[0.0, 0.0, 0.0], \"max\":[1.0, 1.0, 1.0]}`\n\nIf given, only return asset mappings for assets whose bounding box\nintersects the given bounding box.\n\nMust be a JSON object with `min`, `max` arrays of coordinates.\n",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of mappings between assets and 3D nodes",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AssetMapping3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const mappings3D = await client.assetMappings3D.list(3244265346345, 32423454353545);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.three_d.asset_mappings.list(model_id=1, revision_id=1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Iterator<List<ThreeDAssetMapping>> itFilter = client.threeD() \n          .models() \n          .revisions() \n          .assetMappings() \n          .list(model.getId(), revision.getId()); \nList<ThreeDAssetMapping> listResultsList = itFilter.next(); \n\n"
            }
          ]
        },
        "post": {
          "tags": [
            "3D Asset Mapping"
          ],
          "summary": "Create 3D asset mappings",
          "description": "Create asset mappings\n\n\nAsset references when creating a mapping - through asset ids - are allowed to be\ninvalid.\nThey are NOT maintained by any means from CDF, meaning they will be stored until the\nreference is removed through the delete endpoint of 3d asset mappings.",
          "operationId": "create3DMappings",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "requestBody": {
            "description": "The asset mappings to create.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 1000,
                      "items": {
                        "$ref": "#/components/schemas/CreateAssetMapping3D"
                      }
                    }
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "A list of created asset mappings.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AssetMapping3DList"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:UPDATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assetMappingsToCreate = [\n {\n   nodeId: 8252999965991682,\n   assetId: 4354399876978078\n },\n {\n   nodeId: 9034285498543958,\n   assetId: 1042345809544395\n }\n];\nconst mappings3D = await client.assetMappings3D.create(\n 25432542356436,\n 33485743958747,\n assetMappingsToCreate\n);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import ThreeDAssetMapping\nmy_mapping = ThreeDAssetMapping(node_id=1, asset_id=1)\nres = client.three_d.asset_mappings.create(model_id=1, revision_id=1, asset_mapping=my_mapping)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": " List<ThreeDAssetMapping> items = List.of(ThreeDAssetMapping.newBuilder() \n          .setAssetId(1L) \n          .setNodeId(1L) \n          .build()); \n\nList<ThreeDAssetMapping> listCreated = client.threeD() \n          .models() \n          .revisions() \n          .assetMappings() \n          .create(model.getId(), revision.getId(), items); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/delete": {
        "post": {
          "tags": [
            "3D Asset Mapping"
          ],
          "summary": "Delete 3D asset mappings",
          "description": "Delete a list of asset mappings",
          "operationId": "delete3DMappings",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "requestBody": {
            "description": "The IDs of the asset mappings to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 1000,
                      "items": {
                        "$ref": "#/components/schemas/DeleteAssetMapping3D"
                      }
                    }
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:DELETE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const assetMappingsToDelete = [\n {\n   nodeId: 8252999965991682,\n   assetId: 4354399876978078\n },\n {\n   nodeId: 9034285498543958,\n   assetId: 1042345809544395\n }\n];\nawait client.assetMappings3D.delete(8252999965991682, 4190022127342195, assetMappingsToDelete);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "mapping_to_delete = client.three_d.asset_mappings.list(model_id=1, revision_id=1)[0]\nres = client.three_d.asset_mappings.delete(model_id=1, revision_id=1, asset_mapping=mapping_to_delete)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ThreeDAssetMapping> listCreated = //list of ThreeDAssetMapping; \nBoolean isDeleted = client.threeD() \n          .models() \n          .revisions() \n          .assetMappings() \n          .delete(model.getId(), revision.getId(), listCreated); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/3d/models/{modelId}/revisions/{revisionId}/mappings/list": {
        "post": {
          "tags": [
            "3D Asset Mapping"
          ],
          "summary": "Filter 3D asset mappings",
          "description": "Lists 3D assets mappings that match the specified filter parameter. Only\none type of filter can be specified for each request, either `assetIds`, `nodeIds` or `treeIndexes`.\n\n\nAsset references obtained from a mapping - through asset ids - may be\ninvalid, simply by the non-transactional nature of HTTP.\nThey are NOT maintained by any means from CDF, meaning they will be stored until the\nreference is removed through the delete endpoint of 3d asset mappings.",
          "operationId": "filter3DAssetMappings",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/ModelId"
            },
            {
              "$ref": "#/components/parameters/RevisionId"
            }
          ],
          "requestBody": {
            "description": "The filter for asset mappings to get.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AssetMapping3DFilterRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "A list of matching asset mappings.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AssetMapping3DWithCursorResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "threedAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const mappings3D = await client.assetMappings3D.filter(3244265346345, 32423454353545, {\n  filter: {\n    treeIndexes: [1000, 1001, 1002]\n  }\n});"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": " Request request1 = \n          Request.create().withFilterParameter(\"assetIds\", List.of(1L, 2L)); \nIterator<List<ThreeDAssetMapping>> itFilter1 = client.threeD() \n          .models() \n          .revisions() \n          .assetMappings() \n          .filter(model.getId(), revision.getId(), request1); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries": {
        "get": {
          "tags": [
            "Time series"
          ],
          "summary": "List time series",
          "description": "List time series. Use nextCursor to paginate through the results.",
          "operationId": "getTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limits the number of results to return. CDF returns a maximum of 1000 results even if you specify a higher limit.",
              "schema": {
                "maximum": 1000,
                "minimum": 1,
                "type": "integer",
                "format": "int32",
                "default": 100
              }
            },
            {
              "$ref": "#/components/parameters/IncludeMetadata"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/partition"
            },
            {
              "name": "assetIds",
              "in": "query",
              "description": "Get the time series related to the assets. The format is a list of IDs serialized as a JSON array(int64). Takes [ 1 .. 100 ] unique items.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "name": "rootAssetIds",
              "in": "query",
              "description": "Only include time series that have a related asset in a tree rooted at any of these root assetIds.",
              "example": "[363848954441724, 793045462540095, 1261042166839739]",
              "schema": {
                "$ref": "#/components/schemas/JsonArrayInt64"
              }
            },
            {
              "in": "query",
              "name": "externalIdPrefix",
              "schema": {
                "$ref": "#/components/schemas/CogniteExternalIdPrefix"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of time series in lexicographic order.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataWithCursorGetTimeSeriesMetadataDTO"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const timeseries = await client.timeseries.list({ filter: { assetIds: [1, 2] }});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.time_series.list(limit=5)\n\nfor ts in client.time_series:\n    ts # do something with the time_series\n\nfor ts_list in client.time_series(chunk_size=2500):\n    ts_list # do something with the time_series\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Create time series",
          "description": "Create one or more time series.",
          "operationId": "postTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesCreateRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "The time series created.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetTimeSeriesMetadataDTO"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/MissingField"
            },
            "409": {
              "description": "A time series with the specified externalId already exists.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExternalIdsAlreadyExistResponse"
                  }
                }
              }
            },
            "422": {
              "description": "ExternalIds duplicated.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DuplicatedIdsInRequestResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const timeseries = [\n  { name: 'Pressure sensor', assetId: 123 },\n  { name: 'Temprature sensor', description: 'Pump abc', unit: 'C' },\n];\nconst createdTimeseries = await client.timeseries.create(timeseries);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import TimeSeries\nts = client.time_series.create(TimeSeries(name=\"my ts\"))\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<TimeseriesMetadata> upsertTimeseriesList = List.of(TimeseriesMetadata.newBuilder() \n   .setExternalId(\"10\") \n   .setName(\"test_ts\") \n   .setIsString(false) \n   .setIsStep(false) \n   .setDescription(\"Description\") \n   .setUnit(\"TestUnits\") \n   .putMetadata(\"type\", \"sdk-data-generator\") \n   .putMetadata(\"sdk-data-generator\", \"sdk-data-generator\") \n .build()); \n\nclient.timeseries().upsert(upsertTimeseriesList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/byids": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Retrieve time series",
          "description": "Retrieve one or more time series by ID or external ID. The time series are returned in the same order as in the request.",
          "operationId": "getTimeSeriesByIds",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of the IDs of the time series to retrieve.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesLookupById"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "List of time series matching the IDs.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetTimeSeriesMetadataDTO"
                  }
                }
              }
            },
            "400": {
              "description": "Ids not found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "422": {
              "description": "IDs duplicated.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DuplicatedIdsInRequestResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const timeseries = await client.timeseries.retrieve([\n  { id: 123 },\n  { externalId: 'abc' }\n]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.time_series.retrieve(id=1)\n\nres = client.time_series.retrieve(external_id=\"1\")\nres = client.time_series.retrieve_multiple(ids=[1, 2, 3])\n\nres = client.time_series.retrieve_multiple(external_ids=[\"abc\", \"def\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<TimeseriesMetadata> retrievedAssets = client.timeseries().retrieve(byExternalIds);// by list of items \nList<TimeseriesMetadata> retrievedAssets = client.timeseries().retrieve(\"10\", \"20\");// by varargs of String \n\nList<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<TimeseriesMetadata> retrievedAssets = client.timeseries().retrieve(byInternalIds);// by list of items \nList<TimeseriesMetadata> retrievedAssets = client.timeseries().retrieve(10, 20);// by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/list": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Filter time series",
          "description": "Retrieves a list of time series matching the specified criteria. This operation supports pagination by cursor. Criteria can be applied to select a subset of time series.",
          "operationId": "listTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesListDTO"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "List for time series.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataWithCursorGetTimeSeriesMetadataDTO"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.time_series.list(limit=5)\n\nfor ts in client.time_series:\n    ts # do something with the time_series\n\nfor ts_list in client.time_series(chunk_size=2500):\n    ts_list # do something with the time_series\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<TimeseriesMetadata> listTimeseriesResults = new ArrayList<>(); \nclient.timeseries() \n .list() \n .forEachRemaining(timeseries -> listTimeseriesResults.addAll(timeseries)); \n\nList<TimeseriesMetadata> listTimeseriesResults = new ArrayList<>(); \nclient.timeseries() \n .list(Request.create() \n .withFilterMetadataParameter(\"source\", \"source\")) \n .forEachRemaining(timeseries -> listTimeseriesResults.addAll(timeseries)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/aggregate": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Aggregate time series",
          "description": "Count the number of time series that match the given filter",
          "operationId": "aggregateTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Retrieves the count of time series matching the given criteria",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesAggregateDTO"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Count of time series",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/TimeSeriesAggregateResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const aggregates = await client.timeseries.aggregate({ filter: { isString: true } });\nconsole.log('Number of string timeseries: ', aggregates[0].count)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.time_series.aggregate(filter={\"unit\": \"kpa\"})\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Aggregate aggregateResult = client.timeseries() \n .aggregate(Request.create() \n .withFilterMetadataParameter(\"source\", \"source\"));"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/search": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Search time series",
          "description": "Fulltext search for time series based on result relevance. Primarily meant\nfor human-centric use-cases, not for programs, since matching and\nordering may change over time. Additional filters can also be\nspecified. This operation does not support pagination.",
          "operationId": "searchTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesSearchDTO"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "List of search results.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetTimeSeriesMetadataDTO"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const timeseries = await client.timeseries.search({\n  filter: {\n    isString: false,\n  },\n  search: {\n    query: 'Temperature'\n  }\n});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.time_series.search(name=\"some name\")\n\nres = client.time_series.search(filter={\"asset_ids\":[123]})\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/update": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Update time series",
          "description": "Updates one or more time series. Fields that are not included in the request, are not changed.\n\nFor primitive fields (String, Long Int), use 'set': 'value' to update the value; use 'setNull': true to set the field to null.\n\nFor JSON Array fields (for example securityCategories), use 'set': [value1, value2] to update the value; use 'add': [v1, v2] to add values; use 'remove': [v1, v2] to remove values.",
          "operationId": "alterTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of changes.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesUpdateRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Corresponding time series after applying the updates.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetTimeSeriesMetadataDTO"
                  }
                }
              }
            },
            "400": {
              "description": "Ids not found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "409": {
              "description": "Time series with specified externalId already exists",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExternalIdsAlreadyExistResponse"
                  }
                }
              }
            },
            "422": {
              "description": "Ids duplicated.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DuplicatedIdsInRequestResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const timeseries = await client.timeseries.update([{\n  id: 3785438579439,\n  update: {\n    name: { set: 'New name' }\n  }\n}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.time_series.retrieve(id=1)\nres.description = \"New description\"\nres = client.time_series.update(res)\n\nfrom cognite.client.data_classes import TimeSeriesUpdate\nmy_update = TimeSeriesUpdate(id=1).description.set(\"New description\").metadata.add({\"key\": \"value\"})\nres = client.time_series.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "client.timeseries().upsert(upsertTimeseriesList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/delete": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Delete time series",
          "description": "Deletes the time series with the specified IDs and their datapoints.",
          "operationId": "deleteTimeSeries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Specify a list of the time series to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSeriesLookupById"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "description": "IDs not found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "422": {
              "description": "IDs duplicated.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DuplicatedIdsInRequestResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.timeseries.delete([\n  { id: 123 },\n  { externalId: 'abc' }\n]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.time_series.delete(id=[1,2,3], external_id=\"3\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<Item> deletedAssets = client.timeseries().delete(byInternalIds); \n\nList<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<Item> deletedAssets = client.timeseries().delete(byExternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/data": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Insert data points",
          "description": "Insert datapoints into a time series. You can do this for multiple time series.\nIf you insert a datapoint with a timestamp that already exists, it will be overwritten with the new value.",
          "operationId": "postMultiTimeSeriesDatapoints",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The datapoints to insert.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DatapointsInsertQuery"
                }
              },
              "application/protobuf": {
                "schema": {
                  "type": "string",
                  "format": "binary",
                  "description": "Accepts protocol buffer serialised payload, based on following proto definitions: [Data Point Insertion](<https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_point_insertion_request.proto>) and [Data Points](<https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_points.proto>)",
                  "example": "Definitions: https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_point_insertion_request.proto https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_points.proto"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "description": "IDs or external IDs not found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            },
            "422": {
              "description": "IDs or external IDs duplicated.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DuplicatedIdsInRequestResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.datapoints.insert([{ id: 123, datapoints: [{timestamp: 1557320284000, value: -2}] }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "datapoints = []\ndatapoints.append({\"id\": 1, \"datapoints\": [(datetime(2018,1,1), 1000), (datetime(2018,1,2), 2000)]})\ndatapoints.append({\"externalId\": 1, \"datapoints\": [(150000000000, 1000), (160000000000, 2000)]})\n\nclient.datapoints.insert_multiple(datapoints)\n\ndatapoints = []\ndatapoints.append({\"externalId\": \"1\", \"datapoints\": [{\"timestamp\": datetime(2018,1,1), \"value\": 1000},\n                    {\"timestamp\": datetime(2018,1,2), \"value\": 2000}]})\ndatapoints.append({\"id\": 1, \"datapoints\": [{\"timestamp\": 150000000000, \"value\": 1000},\n                    {\"timestamp\": 160000000000, \"value\": 2000}]})\n\nclient.datapoints.insert_multiple(datapoints)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<TimeseriesPointPost> items = new ArrayList<>(); items.add(TimeseriesPointPost.newBuilder() \n .setExternalId(\"TimeseriesMetadata.id\") \n .setTimestamp(timeStamp.toEpochMilli()) \n .setValueNum(ThreadLocalRandom.current().nextLong(-10, 20)) \n .build()); \nclient.timeseries().dataPoints().upsert(items); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/data/list": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Retrieve data points",
          "description": "Retrieves a list of data points from multiple time series in a project. This operation supports aggregation, but not pagination. A detailed description of how aggregates work can be found at [our concept guide for aggregation](<https://docs.cognite.com/dev/concepts/aggregation/>).",
          "operationId": "getMultiTimeSeriesDatapoints",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Specify parameters to query for multiple datapoints. If you omit fields in individual datapoint query items, the top-level field values are used. For example, you can specify a default limit for all items by setting the top-level limit field. If you request aggregates, only the aggregates are returned. If you don't request any aggregates, all data points are returned.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DatapointsMultiQuery"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Lists of datapoints for the specified queries.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DatapointsOrAggregatesResponse"
                  }
                },
                "application/protobuf": {
                  "schema": {
                    "type": "string",
                    "format": "binary",
                    "description": "Return protocol buffer serialised payload, based on the following proto definitions: [Data Points List](<https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_point_list_response.proto>) and [Data Points](<https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_points.proto>)",
                    "example": "Definitions: https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_point_list_response.proto https://raw.githubusercontent.com/cognitedata/protobuf-files/master/v1/timeseries/data_points.proto"
                  }
                }
              }
            },
            "400": {
              "description": "IDs not found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const data = await client.datapoints.retrieve({ items: [{ id: 123 }] });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "dps = client.datapoints.retrieve(id=1, start=\"2w-ago\", end=\"now\")\n\ndps = client.datapoints.retrieve(external_id=[\"abc\", \"def\"],\n                        start=datetime(2018,1,1),\n                        end=datetime(2019,1,1),\n                        aggregates=[\"average\"],\n                        granularity=\"1d\")\n\ndps = client.datapoints.retrieve(id=[{\"id\": 1, \"aggregates\": [\"average\"]},\n                            {\"id\": 1, \"aggregates\": [\"min\"]}],\n                        external_id={\"externalId\": \"1\", \"aggregates\": [\"max\"]},\n                        start=\"1d-ago\", end=\"now\", granularity=\"1h\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<TimeseriesPoint> results = new ArrayList<>(); \n\nList<Item> byExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nclient.timeseries().dataPoints()\n          .retrieveComplete(byExternalIds) \n          .forEachRemaining(result -> results.addAll(result));//by list of items  \nclient.timeseries().dataPoints()\n          .retrieveComplete(\"10\", \"20\") \n          .forEachRemaining(result -> results.addAll(result));//by varargs of String \n\nList<Item> byInternalIds = List.of(Item.newBuilder().setId(10).build()); \nclient.timeseries().dataPoints()\n          .retrieveComplete(byInternalIds) \n          .forEachRemaining(result -> results.addAll(result));//by list of items \nclient.timeseries().dataPoints() \n          .retrieveComplete(10, 20) \n          .forEachRemaining(result -> results.addAll(result));//by varargs of Long \n\n//with filter\nclient.timeseries().dataPoints() \n          .retrieve(Request.create().withRootParameter(\"includeOutsidePoints\", true)) \n          .forEachRemaining(items-> results.addAll(items)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/data/latest": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Retrieve latest data point",
          "description": "Retrieves the latest data point in a time series.",
          "operationId": "getLatest",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The list of the queries to perform.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DatapointsLatestQuery"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "A list of responses. Each response contains a list with the most recent datapoint, or an empty list if no datapoints are found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DatapointsResponse"
                  }
                }
              }
            },
            "400": {
              "description": "The time series does not exist.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const datapoints = await client.datapoints.retrieveLatest([\n  {\n   before: 'now',\n   id: 123\n },\n {\n   externalId: 'abc',\n   before: new Date('21 jan 2018'),\n }\n]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.datapoints.retrieve_latest(id=1)[0]\n\nres = client.datapoints.retrieve_latest(id=1, before=\"2d-ago\")[0]\n\nres = client.datapoints.retrieve_latest(external_id=[\"abc\", \"def\"])\nlatest_abc = res[0][0]\nlatest_def = res[1][0]\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\").build()); \nList<TimeseriesPoint> result = \n          client.timeseries().dataPoints() \n          .retrieveLatest(byExternalIds);//by list of items \nList<TimeseriesPoint> result = \n          client.timeseries().dataPoints() \n          .retrieveLatest(\"10\", \"20\");//by varargs of String \n\nList<Item> byInternalIds = List.of(Item.newBuilder() \n          .setId(10).build()); \nList<TimeseriesPoint> result = \n           client.timeseries().dataPoints() \n          .retrieveLatest(byInternalIds);//by list of items \nList<TimeseriesPoint> result = \n          client.timeseries().dataPoints() \n          .retrieveLatest(10, 20);//by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/data/delete": {
        "post": {
          "tags": [
            "Time series"
          ],
          "summary": "Delete datapoints",
          "description": "Delete datapoints from time series.",
          "operationId": "deleteDatapoints",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The list of delete requests to perform.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DatapointsDeleteQuery"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "description": "IDs not found.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/NotFoundResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "timeSeriesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.datapoints.delete([{id: 123, inclusiveBegin: new Date('1 jan 2019')}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "ranges = [{\"id\": 1, \"start\": \"2d-ago\", \"end\": \"now\"},\n            {\"externalId\": \"abc\", \"start\": \"2d-ago\", \"end\": \"now\"}]\nclient.datapoints.delete_ranges(ranges)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\").build()); \nList<Item> deletedItems = \n           client.timeseries().dataPoints().delete(byExternalIds); \n\nList<Item> byInternalIds = List.of(Item.newBuilder() \n          .setId(10).build()); \n List<Item> deletedItems = \n          client.timeseries().dataPoints().delete(byInternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/timeseries/synthetic/query": {
        "post": {
          "tags": [
            "Synthetic Time Series"
          ],
          "summary": "Synthetic query",
          "description": "Execute an on-the-fly synthetic query",
          "operationId": "querySyntheticTimeseries",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "The list of queries to perform",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SyntheticMultiQuery"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "List of datapoints for the specified queries.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SyntheticQueryResponses"
                  }
                }
              }
            },
            "400": {
              "description": "Query error"
            }
          },
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.timeseries.syntheticQuery([\n  {\n    expression: \"24 * TS{externalId='production/hour', aggregate='average', granularity='1d'}\",\n    start: '48h-ago',\n    end: 'now',\n    limit: 100\n  }\n]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "dps = client.datapoints.synthetic.query(expressions=\"TS{id:123} + TS{externalId:'abc'}\", start=\"2w-ago\", end=\"now\")\n\nvars = {\"A\": \"my_ts_external_id\", \"B\": client.time_series.retrieve(id=1)}\ndps = client.datapoints.synthetic.query(expressions=\"A+B\", start=\"2w-ago\", end=\"now\", variables=vars)\n\nfrom sympy import symbols, cos, sin\na = symbols('a')\ndps = client.datapoints.synthetic.query([sin(a), cos(a)], start=\"2w-ago\", end=\"now\", variables={\"a\": \"my_ts_external_id\"}, aggregate='interpolation', granularity='1m')\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs": {
        "get": {
          "tags": [
            "Raw"
          ],
          "summary": "List databases",
          "operationId": "getDBs",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit on the number of databases to be returned.",
              "schema": {
                "type": "integer",
                "format": "int32",
                "minimum": 1,
                "maximum": 1000,
                "default": 25
              }
            },
            {
              "$ref": "#/components/parameters/Cursor"
            }
          ],
          "responses": {
            "200": {
              "description": "A list of databases.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataWithCursorRawDB"
                  }
                }
              }
            }
          },
          "x-capability": [
            "rawAcl:LIST"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const databases = await client.raw.listDatabases();"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "db_list = client.raw.databases.list(limit=5)\n\nfor db in client.raw.databases:\n    db # do something with the db\n\nfor db_list in client.raw.databases(chunk_size=2500):\n    db_list # do something with the dbs\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> listDatabaseResults = new ArrayList<>(); \nclient.raw() \n          .databases() \n          .list() \n          .forEachRemaining(listDatabaseResults::addAll); \n\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Raw"
          ],
          "summary": "Create databases",
          "description": "Create databases in a project. It is possible to post a maximum of 1000 databases per request.",
          "operationId": "createDBs",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of names of databases to be created.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataRawDB"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "The created databases.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataRawDB"
                  }
                }
              }
            }
          },
          "x-capability": [
            "rawAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const databases = await client.raw.createDatabases([{ name: 'My company' }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.raw.databases.create(\"db1\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> createDatabasesList = \n          List.of(StringValue.of(\"dbName\").getValue()); \nclient.raw().databases().create(createDatabasesList);"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/delete": {
        "post": {
          "tags": [
            "Raw"
          ],
          "summary": "Delete databases",
          "description": "It deletes a database, but fails if the database is not empty and recursive is set to false (default).",
          "operationId": "deleteDBs",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of names of the databases to be deleted.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DeleteRawDB"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            }
          },
          "x-capability": [
            "rawAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.raw.deleteDatabases([{ name: 'My company' }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.raw.databases.delete([\"db1\", \"db2\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> createDatabasesList = \n          List.of(StringValue.of(\"dbName\").getValue()); \nList<String> deleteItemsResults = \n          client.raw().databases().delete(createDatabasesList); \n\n //Allows to recursively \nclient.raw().databases().delete(createDatabasesList, true); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/{dbName}/tables": {
        "get": {
          "tags": [
            "Raw"
          ],
          "summary": "List tables in a database",
          "operationId": "getTables",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "The name of a database to retrieve tables from.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit on the number of tables to be returned.",
              "schema": {
                "type": "integer",
                "format": "int32",
                "minimum": 1,
                "maximum": 1000,
                "default": 25
              }
            },
            {
              "$ref": "#/components/parameters/Cursor"
            }
          ],
          "responses": {
            "200": {
              "description": "A list of tables in the database",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataWithCursorRawDBTable"
                  }
                }
              }
            }
          },
          "x-capability": [
            "rawAcl:LIST"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const tables = await client.raw.listTables('My company');"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "table_list = client.raw.tables.list(\"db1\", limit=5)\n\nfor table in client.raw.tables(db_name=\"db1\"):\n    table # do something with the table\n\nfor table_list in client.raw.tables(db_name=\"db1\", chunk_size=2500):\n    table_list # do something with the tables\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> tablesResults = new ArrayList<>(); \nclient.raw().tables() \n          .list(\"dbName\") \n          .forEachRemaining(tablesResults::addAll); \n\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Raw"
          ],
          "summary": "Create tables in a database",
          "description": "Create tables in a database. It is possible to post a maximum of 1000 tables per request.",
          "operationId": "createTables",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database to create tables in.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "ensureParent",
              "in": "query",
              "description": "Create database if it doesn't exist already",
              "schema": {
                "type": "boolean",
                "default": false
              }
            }
          ],
          "requestBody": {
            "description": "List of tables to create.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataRawDBTable"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "The created tables.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataRawDBTable"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/MissingField"
            }
          },
          "x-capability": [
            "rawAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const tables = await client.raw.createTables('My company', [{ name: 'Customers' }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.raw.tables.create(\"db1\", \"table1\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> createTablesLists = \n          List.of(StringValue.of(\"tableName\").getValue()); \nclient.raw().tables().create(\"dbName\", createTablesLists, false); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/{dbName}/tables/delete": {
        "post": {
          "tags": [
            "Raw"
          ],
          "summary": "Delete tables in a database",
          "operationId": "deleteTables",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database to delete tables in.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "List of tables to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataRawDBTable"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/MissingField"
            }
          },
          "x-capability": [
            "rawAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.raw.deleteTables('My company', [{ name: 'Customers' }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.raw.tables.delete(\"db1\", [\"table1\", \"table2\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> listDeleted = \n          client.raw().tables().delete(\"dbName\", List.of(\"TablesName\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/cursors": {
        "get": {
          "tags": [
            "Raw"
          ],
          "summary": "Retrieve cursors for parallel reads",
          "description": "Retrieve cursors based on the last updated time range. Normally this endpoint is used for reading in parallel.\n\nEach cursor should be supplied as the 'cursor' query parameter on GET requests to [Read Rows](#operation/getRows).\n**Note** that the 'minLastUpdatedTime' and the 'maxLastUpdatedTime' query parameter on [Read Rows](#operation/getRows) are ignored when a cursor is specified.\n",
          "operationId": "getCursors",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "tableName",
              "in": "path",
              "description": "Name of the table.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "minLastUpdatedTime",
              "in": "query",
              "description": "An exclusive filter, specified as the number of milliseconds that have elapsed since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "name": "maxLastUpdatedTime",
              "in": "query",
              "description": "An inclusive filter, specified as the number of milliseconds that have elapsed since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "name": "numberOfCursors",
              "in": "query",
              "description": "The number of cursors to return, by default it's 10.",
              "schema": {
                "type": "integer",
                "format": "int32",
                "minimum": 1,
                "maximum": 10000
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Response with cursors",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataRawDBTableCursors"
                  }
                }
              }
            }
          },
          "x-capability": [
            "rawAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows": {
        "get": {
          "tags": [
            "Raw"
          ],
          "summary": "Retrieve rows from a table",
          "operationId": "getRows",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "tableName",
              "in": "path",
              "description": "Name of the table.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit the number of results.",
              "schema": {
                "type": "integer",
                "format": "int32",
                "minimum": 1,
                "maximum": 10000,
                "default": 25
              }
            },
            {
              "name": "columns",
              "in": "query",
              "description": "Ordered list of column keys, separated by commas. Leave empty for all, use single comma to retrieve only row keys.",
              "schema": {
                "type": "string",
                "example": "column1,column2"
              }
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "name": "minLastUpdatedTime",
              "in": "query",
              "description": "An exclusive filter, specified as the number of milliseconds that have elapsed since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            },
            {
              "name": "maxLastUpdatedTime",
              "in": "query",
              "description": "An inclusive filter, specified as the number of milliseconds that have elapsed since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "schema": {
                "$ref": "#/components/schemas/EpochTimestamp"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Rows returned",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataWithCursorRawDBRow"
                  }
                },
                "text/csv": {
                  "schema": {
                    "$ref": "#/components/schemas/RawRowCSV"
                  }
                }
              }
            }
          },
          "x-capability": [
            "rawAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.raw.listRows('My company', 'Employees', { columns: ['last_name'] });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "row_list = client.raw.rows.list(\"db1\", \"t1\", limit=5)\n\nfor row in client.raw.rows(db_name=\"db1\", table_name=\"t1\", columns=[\"col1\",\"col2\"]):\n    row # do something with the row\n\nfor row_list in client.raw.rows(db_name=\"db1\", table_name=\"t1\", chunk_size=2500):\n    row_list # do something with the rows\ndf = client.raw.rows.retrieve_dataframe(\"db1\", \"t1\", limit=5)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<RawRow> listRowsResults = new ArrayList<>(); \nclient.raw().rows().list(\"dbName\", \"TablesName\") \n          .forEachRemaining(listRowsResults::addAll); \n\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Raw"
          ],
          "summary": "Insert rows into a table",
          "description": "Insert rows into a table. It is possible to post a maximum of 10000 rows per request.\nIt will replace the columns of an existing row if the rowKey already exists.\n\nThe rowKey is limited to 1024 characters which also includes Unicode characters.\nThe maximum size of columns are 5 MiB, however the maximum size of one column name and value is 2621440 characters each.\nIf you want to store huge amount of data per row or column we recommend using the Files API to upload blobs, then reference it from the Raw row.\n\nThe columns object is a key value object, where the key corresponds to the column name while the value is the column value.\nIt supports all the valid types of values in JSON, so number, string, array, and even nested JSON structure (see payload example to the right).\n\n**Note** There is no rollback if an error occurs, which means partial data may be written. However, it's safe to retry the request, since this endpoint supports both update and insert (upsert).\n",
          "operationId": "postRows",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database.",
              "required": true,
              "schema": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32
              }
            },
            {
              "name": "tableName",
              "in": "path",
              "description": "Name of the table.",
              "required": true,
              "schema": {
                "type": "string",
                "minLength": 1,
                "maxLength": 64
              }
            },
            {
              "name": "ensureParent",
              "in": "query",
              "description": "Create database/table if it doesn't exist already",
              "schema": {
                "type": "boolean",
                "default": false
              }
            }
          ],
          "requestBody": {
            "description": "List of rows to create.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataRawDBRow"
                },
                "example": {
                  "items": [
                    {
                      "key": "some rowKey",
                      "columns": {
                        "some int-col": 10,
                        "some string-col": "string example",
                        "some json-col": {
                          "test": {
                            "foo": "nested"
                          }
                        },
                        "some array-col": [
                          0,
                          1,
                          3,
                          4
                        ]
                      }
                    }
                  ]
                }
              },
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "file": {
                      "type": "object"
                    }
                  }
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/MissingField"
            }
          },
          "x-capability": [
            "rawAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.raw.insertRows('My company', 'Customers', [{ key: 'customer1', columns: { 'First name': 'Steve', 'Last name': 'Jobs' } }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "rows = {\"r1\": {\"col1\": \"val1\", \"col2\": \"val1\"}, \"r2\": {\"col1\": \"val2\", \"col2\": \"val2\"}}\nres = client.raw.rows.insert(\"db1\", \"table1\", rows)\nimport pandas as pd\ndf = pd.DataFrame(data={\"a\": 1, \"b\": 2}, index=[\"r1\", \"r2\", \"r3\"])\nres = client.raw.rows.insert_dataframe(\"db1\", \"table1\", df)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<RawRow> createRowsList = List.of(RawRow.newBuilder() \n          .setDbName(\"dbName\") \n          .setTableName(\"tableName\") \n          .setKey(\"key\") \n          .setColumns(Struct.newBuilder() \n               .putFields(\"string\", Values.of(\"VAL\")) \n               .putFields(\"numeric\", Values.of(\"VAL\")) \n               .putFields(\"bool\", Values.of(ThreadLocalRandom.current().nextBoolean()))  \n               .putFields(\"null_value\", Values.ofNull())  \n               .putFields(\"array\", Values.of(ListValue.newBuilder()  \n                    .addValues(Values.of(ThreadLocalRandom.current().nextDouble(10000d)))  \n                    .build())) \n               .putFields(\"struct\", Values.of(Structs.of(\"nestedString\", Values.of(\"myTrickyStringValue\") \n               ))) \n          ).build()); \n\nList<RawRow> createRowsResults = client.raw().rows().upsert(createRowsList, false); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/{rowKey}": {
        "get": {
          "tags": [
            "Raw"
          ],
          "summary": "Retrieve row by key",
          "operationId": "getRow",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database to retrieve the row from.",
              "required": true,
              "schema": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32
              }
            },
            {
              "name": "tableName",
              "in": "path",
              "description": "Name of the table to retrieve the row from.",
              "required": true,
              "schema": {
                "type": "string",
                "minLength": 1,
                "maxLength": 64
              }
            },
            {
              "name": "rowKey",
              "in": "path",
              "description": "Row key of the row to retrieve.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Single row from the raw database table with the specified rowKey.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RawDBRow"
                  }
                }
              }
            }
          },
          "x-capability": [
            "rawAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.raw.retrieveRow('My company', 'Customers', 'customer1');"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "row = client.raw.rows.retrieve(\"db1\", \"t1\", \"k1\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<String> rowsToRetrieve = createRowsList.stream() \n          .filter(row -> ThreadLocalRandom.current().nextBoolean()) \n          .map(row -> row.getKey()) \n          .collect(Collectors.toList()); \n\nList<RawRow> rowsRetrieved = \n          client.raw().rows().retrieve(\"dbName\", \"tableName\", rowsToRetrieve); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/raw/dbs/{dbName}/tables/{tableName}/rows/delete": {
        "post": {
          "tags": [
            "Raw"
          ],
          "summary": "Delete rows in a table",
          "operationId": "deleteRows",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "dbName",
              "in": "path",
              "description": "Name of the database containing the rows.",
              "required": true,
              "schema": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32
              }
            },
            {
              "name": "tableName",
              "in": "path",
              "description": "Name of the table containing the rows.",
              "required": true,
              "schema": {
                "type": "string",
                "minLength": 1,
                "maxLength": 64
              }
            }
          ],
          "requestBody": {
            "description": "Keys to the rows to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataRawDBRowKey"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            }
          },
          "x-capability": [
            "rawAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.raw.deleteRows('My company', 'Customers', [{key: 'customer1'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "keys_to_delete = [\"k1\", \"k2\", \"k3\"]\nclient.raw.rows.delete(\"db1\", \"table1\", keys_to_delete)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<RawRow> rowsToDelete = //list of RawRow; \nList<RawRow> deleteRowResults = client.raw().rows().delete(rowsToDelete); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/securitycategories": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "get": {
          "tags": [
            "Security categories"
          ],
          "summary": "List security categories",
          "description": "Retrieves a list of all security categories for a project.",
          "operationId": "getSecurityCategories",
          "parameters": [
            {
              "name": "sort",
              "in": "query",
              "description": "Sort descending or ascending.",
              "schema": {
                "type": "string",
                "enum": [
                  "ASC",
                  "DESC"
                ],
                "default": "ASC"
              }
            },
            {
              "name": "cursor",
              "in": "query",
              "description": "Cursor to use for paging through results.",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Return up to this many results. Maximum is 1000. Default is 25.",
              "schema": {
                "maximum": 1000,
                "type": "integer",
                "format": "int32",
                "default": 25
              }
            }
          ],
          "responses": {
            "200": {
              "description": "A list of security categories.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityCategoryWithCursorResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "securityCategoriesAcl:LIST"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const securityCategories = await client.securityCategories.list({ sort: 'ASC' });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.iam.security_categories.list()\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SecurityCategory> listSecurityCategoriesResults = new ArrayList<>(); \nclient.securityCategories(). \n          list(Request.create()) \n          .forEachRemaining(labels -> listSecurityCategoriesResults.addAll(labels)); \n\n "
            }
          ]
        },
        "post": {
          "tags": [
            "Security categories"
          ],
          "summary": "Create security categories",
          "description": "Creates security categories with the given names. Duplicate names in the request are ignored.\nIf a security category with one of the provided names exists already, then the request will fail and no security categories are created.\n",
          "operationId": "createSecurityCategories",
          "requestBody": {
            "description": "List of categories to create",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSecurityCategorySpecDTO"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "A list of security categories.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SecurityCategoryResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "securityCategoriesAcl:CREATE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const securityCategories = [\n  { name: 'Admins' },\n  { name: 'Developers' },\n];\nconst createdSecurityCategories = await client.securityCategories.create(securityCategories);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import SecurityCategory\nmy_category = SecurityCategory(name=\"My Category\")\nres = client.iam.security_categories.create(my_category)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SecurityCategory> createSecurityCategoriesList = \n       List.of(SecurityCategory.newBuilder().setName(\"Name\").build()); \nclient.securityCategories().create(createSecurityCategoriesList); \n\n "
            }
          ]
        }
      },
      "/api/v1/projects/{project}/securitycategories/delete": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "post": {
          "tags": [
            "Security categories"
          ],
          "summary": "Delete security categories",
          "description": "Deletes the security categories that match the provided IDs.\nIf any of the provided IDs does not belong to an existing security category, then the request will fail and no security categories are deleted.\n",
          "operationId": "deleteSecurityCategories",
          "requestBody": {
            "description": "List of security category IDs to delete.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataLong"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "securityCategoriesAcl:DELETE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.securityCategories.delete([123, 456]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.iam.security_categories.delete(1)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SecurityCategory> deleteItemsResults = \n          client.securityCategories() \n          .delete(listSecurityCategoriesResults); \n\n "
            }
          ]
        }
      },
      "/api/v1/projects/{project}/datasets": {
        "post": {
          "tags": [
            "Data sets"
          ],
          "summary": "Create data sets",
          "description": "You can create a maximum of 10 data sets per request.",
          "operationId": "createDataSets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of the data sets to create.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSetSpecList"
                }
              }
            },
            "required": true
          },
          "x-capability": [
            "datasetsAcl:WRITE"
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/DataSetListResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const datasets = [\n  { externalId: 'sensitiveData' },\n  { writeProtected: true }\n];\nconst createdDatasets = await client.datasets.create(datasets);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import DataSet\ndata_sets = [DataSet(name=\"1st level\"), DataSet(name=\"2nd level\")]\nres = client.data_sets.create(data_sets)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<DataSet> upsertDataSetList = List.of(DataSet.newBuilder() \n          .setExternalId(\"10\") \n          .setName(\"generated-\") \n          .setDescription(\"Generated description\") \n          .putMetadata(\"type\", \"sdk-data-generator\") \n          .putMetadata(\"source\", \"sdk-data-generator\") \n          .build()); \n\nList<DataSet> upsertDataSetsResults = \n          client.datasets().upsert(upsertDataSetList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/datasets/list": {
        "post": {
          "tags": [
            "Data sets"
          ],
          "summary": "Filter data sets",
          "description": "Use advanced filtering options to find data sets.",
          "operationId": "listDataSets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of IDs of the data sets to retrieve. You can retrieve a maximum of 1000 data sets per request. All IDs must be unique.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSetFilterRequest"
                }
              }
            }
          },
          "x-capability": [
            "datasetsAcl:READ"
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/DataSetFilterResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const dataSets = await client.datasets.list({ filter: { createdTime: { min: new Date('1 jan 2018'), max: new Date('1 jan 2019') }}});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "data_sets_list = client.data_sets.list(limit=5, write_protected=False)\n\nfor data_set in client.data_sets:\n    data_set # do something with the data_set\n\nfor data_set_list in client.data_sets(chunk_size=2500):\n    data_set_list # do something with the list\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<DataSet> listDataSetsResults = new ArrayList<>(); \nclient.datasets() \n          .list(Request.create()) \n          .forEachRemaining(batch -> listDataSetsResults.addAll(batch)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/datasets/aggregate": {
        "post": {
          "tags": [
            "Data sets"
          ],
          "summary": "Aggregate data sets",
          "description": "Aggregate data sets in the same project. Criteria can be applied to select a subset of data sets.",
          "operationId": "aggregateDataSets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSetAggregateRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/DataSetAggregateResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "datasetsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const aggregates = await client.datasets.aggregate({ filter: { writeProtected: true } });\nconsole.log('Number of write protected datasets: ', aggregates[0].count)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "aggregate_protected = client.data_sets.aggregate(filter={\"write_protected\": True})\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Aggregate aggregate = client \n          .datasets() \n          .aggregate(Request.create() \n          .withFilterParameter(\"source\",\"sdk-data-generator\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/datasets/byids": {
        "post": {
          "tags": [
            "Data sets"
          ],
          "summary": "Retrieve data sets",
          "description": "Retrieve data sets by IDs or external IDs.",
          "operationId": "getDataSets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "List of the IDs of the data sets to retrieve. You can retrieve a maximum of 1000 data sets per request. All IDs must be unique.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSetIdEitherList"
                }
              }
            }
          },
          "x-capability": [
            "datasetsAcl:READ"
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/DataSetListResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const dataSets = await client.datasets.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.data_sets.retrieve(id=1)\n\nres = client.data_sets.retrieve(external_id=\"1\")\nres = client.data_sets.retrieve_multiple(ids=[1, 2, 3])\n\nres = client.data_sets.retrieve_multiple(external_ids=[\"abc\", \"def\"], ignore_unknown_ids=True)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> retrieveByExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\") \n          .build()); \nList<DataSet> retrieveDataSetResults = client.datasets() \n          .retrieve(retrieveByExternalIds);//by list of items \nList<DataSet> retrieveDataSetResults = client.datasets() \n          .retrieve(\"10\", \"20\");//by varargs of String \n\nList<Item> retrieveByInternalIds = List.of(Item.newBuilder() \n          .setId(10) \n          .build()); \nList<DataSet> retrieveDataSetResults = client.datasets() \n          .retrieve(retrieveByInternalIds);//by list of items \nList<DataSet> retrieveDataSetResults = client.datasets() \n          .retrieve(10, 20);//by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/datasets/update": {
        "post": {
          "tags": [
            "Data sets"
          ],
          "summary": "Update the attributes of data sets.",
          "operationId": "updateDataSets",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "All provided IDs and external IDs must be unique. Fields that are not included in the request, are not changed.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSetUpdateList"
                }
              }
            },
            "required": true
          },
          "x-capability": [
            "datasetsAcl:WRITE"
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/DataSetListResponse"
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const dataSets = await client.datasets.update([{id: 123, update: {description: {set: 'New description'}}}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "data_set = client.data_sets.retrieve(id=1)\ndata_set.description = \"New description\"\nres = client.data_sets.update(data_set)\n\nfrom cognite.client.data_classes import DataSetUpdate\nmy_update = DataSetUpdate(id=1).description.set(\"New description\").metadata.remove([\"key\"])\nres = client.data_sets.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<DataSet> upsertDataSetList = //list of DataSet; \nList<DataSet> upsertDataSetsResults = \n          client.datasets().upsert(upsertDataSetList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences": {
        "get": {
          "tags": [
            "Sequences"
          ],
          "summary": "List sequences",
          "operationId": "listSequences",
          "description": "List sequences. Use nextCursor to paginate through the results.",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/partition"
            },
            {
              "in": "query",
              "name": "limit",
              "description": "Limits the number of results to be returned. The maximum results returned by the server is 1000 even if you specify a higher limit.",
              "schema": {
                "type": "integer",
                "default": 25,
                "minimum": 1,
                "maximum": 1000
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Paged response with list of sequences.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SequenceWithCursorResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const sequences = await client.sequences.list({ filter: { name: 'sequence_name' } });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.list(limit=5)\n\nfor seq in client.sequences:\n    seq # do something with the sequences\n\nfor seq_list in client.sequences(chunk_size=2500):\n    seq_list # do something with the sequences\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Create sequences",
          "description": "Create one or more sequences.",
          "operationId": "createSequence",
          "requestBody": {
            "description": "Sequence to be stored",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataPostSequence"
                }
              }
            }
          },
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "responses": {
            "201": {
              "description": "Created object",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetSequence"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "sequencesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const sequences = [\n {\n  externalId: 'sequence_name',\n  columns: [\n   {\n     externalId: 'one',\n     valueType: SequenceValueType.LONG,\n   },\n   {\n     externalId: 'two',\n   },\n   {\n     externalId: 'three',\n     valueType: SequenceValueType.STRING,\n   }\n  ]\n }\n];\nconst [sequence] = await client.sequences.create(sequences);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import Sequence\nclient.lumn_def = [{\"valueType\":\"STRING\",\"externalId\":\"user\",\"description\":\"some description\"}, {\"valueType\":\"DOUBLE\",\"externalId\":\"amount\"}]\nseq = client.sequences.create(Sequence(external_id=\"my_sequence\", columns=column_def))\n\nseq2 = client.sequences.create(Sequence(external_id=\"my_copied_sequence\", columns=seq.columns))\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SequenceColumn> columns = List.of(SequenceColumn.newBuilder() \n          .setExternalId(\"10\") \n          .setName(\"test_column_\") \n          .setDescription(\"Description\") \n          .setValueTypeValue(SequenceColumn.ValueType.STRING_VALUE) \n     .build()); \n\n List<SequenceMetadata> upsertSequencesList = List.of( SequenceMetadata.newBuilder() \n          .setExternalId(\"10\") \n          .setName(\"test_sequence_\") \n          .setDescription(\"Description\") \n          .putMetadata(\"type\", \"sdk-data-generator\") \n          .addAllColumns(columns) \n     .build()); \n\n client.sequences().upsert(upsertSequencesList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/list": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Filter sequences",
          "description": "Retrieves a list of sequences matching the given criteria.",
          "operationId": "advancedListSequences",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Retrieves a list of sequences matching the given criteria.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SequencesAdvancedListDTO"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Listing sequences.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SequenceWithCursorResponse"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const sequences = await client.sequences.list({ filter: { name: 'sequence_name' } });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.list(limit=5)\n\nfor seq in client.sequences:\n    seq # do something with the sequences\n\nfor seq_list in client.sequences(chunk_size=2500):\n    seq_list # do something with the sequences\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SequenceMetadata> listSequencesResults = new ArrayList<>(); \n client.sequences() \n          .list() \n          .forEachRemaining(sequences -> listSequencesResults.addAll(sequences)); \n\n client.sequences() \n          .list(Request.create() \n               .withFilterMetadataParameter(\"source\", \"sdk-data-generator\")) \n          .forEachRemaining(sequences -> listSequencesResults.addAll(sequences)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/aggregate": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Aggregate sequences",
          "description": "Count the number of sequences that match the given filter",
          "operationId": "aggregateSequences",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Retrieves the count of sequences matching the given criteria.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SequencesAggregateDTO"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Count of sequences",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SequenceAggregateResponse"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const aggregates = await client.sequences.aggregate({ filter: { name: \"Well\" } });\nconsole.log('Number of sequences named Well: ', aggregates[0].count)"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.aggregate(filter={\"external_id_prefix\": \"prefix\"})\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Aggregate aggregateResult = \n          client.sequences().aggregate(Request.create().withFilterMetadataParameter(\"source\", \"source\")); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/byids": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Retrieve sequences",
          "description": "Retrieve one or more sequences by ID or external ID. The sequences are returned in the same order as in the request.",
          "operationId": "getSequenceById",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Ids of the sequences",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataResourceIdsWithIgnoreUnknownIds"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Object found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetSequence"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const [sequence1, sequence2] = await client.sequences.retrieve([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.retrieve(id=1)\n\nres = client.sequences.retrieve(external_id=\"1\")\nres = client.sequences.retrieve_multiple(ids=[1, 2, 3])\n\nres = client.sequences.retrieve_multiple(external_ids=[\"abc\", \"def\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SequenceMetadata> retrievedByExternalIds = client.sequences().retrieve(\"10\");//by varargs of String \nList<Item> listItemsExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<SequenceMetadata> retrievedSequencesExternalIds = client.sequences().retrieve(listItemsExternalIds);//by list of items \n\nList<SequenceMetadata> retrievedByInternalIds = client.sequences().retrieve(10, 20);//by varargs of Long \nList<Item> listItemsInternalIds = List.of(Item.newBuilder().setId(10).build()); \nList<SequenceMetadata> retrievedSequencesInternalIds = client.sequences().retrieve(listItemsInternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/search": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Search sequences",
          "description": "Retrieves a list of sequences matching the given criteria. This operation does not support pagination.",
          "operationId": "searchSequences",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Retrieves a list of sequences matching the given criteria. This operation does not support pagination.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SequencesSearchDTO"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Search on sequences.",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetSequence"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const sequences = await client.sequences.search({\n  filter: {\n    assetIds: [1, 2]\n  },\n  search: {\n    query: 'n*m* desc*ion'\n  }\n});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.search(name=\"some name\")\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/update": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Update sequences",
          "description": "Update one or more sequences. Fields that are not included in the request, are not changed.",
          "operationId": "updateSequences",
          "requestBody": {
            "description": "Patch definition",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSequenceChange"
                }
              }
            }
          },
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "responses": {
            "200": {
              "description": "The modified sequences",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DataGetSequence"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const [updatedSequence] = await client.sequences.update([{id: 123, update: {name: {set: 'New name'}}}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.retrieve(id=1)\nres.description = \"New description\"\nres = client.sequences.update(res)\n\nfrom cognite.client.data_classes import SequenceUpdate\nmy_update = SequenceUpdate(id=1).description.set(\"New description\").metadata.add({\"key\": \"value\"})\nres = client.sequences.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "\n client.sequences().upsert(upsertSequencesList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/delete": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Delete sequences",
          "description": "Deletes the sequences with the specified IDs. If one or more of the sequences do not exist, ignoreUnknownIds controls what will happen: if it is true, the sequences that do exist will be deleted, and the request succeeds; if it is false or absent, nothing will be deleted, and the request fails.",
          "operationId": "deleteSequences",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "description": "Ids of the sequences to delete",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataResourceIdsWithIgnoreUnknownIds"
                }
              }
            }
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            }
          },
          "x-capability": [
            "sequencesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.sequences.delete([{id: 123}, {externalId: 'abc'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.sequences.delete(id=[1,2,3], external_id=\"3\")\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> deleteItemsSequencesByExternalIds = List.of(Item.newBuilder().setExternalId(\"10\").build()); \nList<Item> externalIdsResults = client.sequences().delete(deleteItemsSequencesByExternalIds); \n\nList<Item> deleteItemsSequencesByInternalIds = List.of(Item.newBuilder().setId(10).build()); \n List<Item> InternalIdsResults = client.sequences().delete(deleteItemsSequencesByInternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/data": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Insert rows",
          "description": "Inserts rows into a sequence. This overwrites data in rows and columns that exist.",
          "operationId": "postSequenceData",
          "requestBody": {
            "description": "Data posted",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSequencePostData"
                }
              }
            }
          },
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            }
          },
          "x-capability": [
            "sequencesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const rows = [\n { rowNumber: 0, values: [1, 2.2, 'three'] },\n { rowNumber: 1, values: [4, 5, 'six'] }\n];\nawait client.sequences.insertRows([{ id: 123, rows, columns: ['one', 'two', 'three'] }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "seq = client.sequences.create(Sequence(columns=[{\"valueType\": \"STRING\", \"externalId\":\"col_a\"},{\"valueType\": \"DOUBLE\", \"externalId\":\"col_b\"}]))\ndata = [(1, ['pi',3.14]), (2, ['e',2.72]) ]\nclient.sequences.data.insert(column_external_ids=[\"col_a\",\"col_b\"], rows=data, id=1)\n\ndata = [{\"rowNumber\": 123, \"values\": ['str',3]}, {\"rowNumber\": 456, \"values\": [\"bar\",42]} ]\nclient.sequences.data.insert(data, id=1, column_external_ids=[\"col_a\",\"col_b\"]) # implicit columns are retrieved from metadata\n\ndata = {123 : ['str',3], 456 : ['bar',42] }\nclient.sequences.data.insert(column_external_ids=['stringColumn','intColumn'], rows=data, id=1)\n\ndata = client.sequences.data.retrieve(id=2,start=0,end=10)\nclient.sequences.data.insert(rows=data, id=1,column_external_ids=None)\ndf = client.sequences.data.retrieve_dataframe(id=123, start=0, end=None)\nclient.sequences.data.insert_dataframe(df*2, id=123)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SequenceMetadata> upsertSequencesList = DataGenerator.generateSequenceMetadata(); \nclient.sequences().upsert(upsertSequencesList); \n\n SequenceBody body = SequenceBody.newBuilder() \n .setExternalId(upsertSequencesList.get(1).getExternalId()) \n .addAllColumns(List.of(SequenceColumn.newBuilder().setExternalId(\"10\").build())) \n .addAllRows(List.of(SequenceRow.newBuilder().setRowNumber(1).addAllValues(List.of(Value.newBuilder().setNumberValue(10).build())).build())) \n .build(); \n List<SequenceBody> upsertSequenceBodyResponse = client.sequences().rows().upsert(List.of(body)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/data/list": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Retrieve rows",
          "description": "Processes data requests, and returns the result. NB - This operation uses a dynamic limit on the number of rows returned based on the number and type of columns, use the provided cursor to paginate and retrieve all data.",
          "operationId": "getSequenceData",
          "requestBody": {
            "description": "Description of data requested",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SequenceDataRequest"
                }
              }
            }
          },
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "responses": {
            "200": {
              "description": "Sequence data found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SequenceGetDataWithCursor"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const rows = await client.sequences.retrieveRows({ externalId: 'sequence1' }).autoPagingToArray({ limit: 100 });"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.sequences.data.retrieve(id=0, start=0, end=None)\ntuples = [(r,v) for r,v in res.items()] # You can use this iterator in for loops and list comprehensions,\nsingle_value = res[23] # ... get the values at a single row number,\nclient.l = res.get_column(external_id='columnExtId') # ... get the array of values for a specific column,\ndf = res.to_pandas() # ... or convert the result to a dataframe\ndf = client.sequences.data.retrieve_dataframe(id=0, start=0, end=None)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "Iterator<List<SequenceBody>> listRetrieved = client.sequences().rows().retrieve(Request.create()); \n\nIterator<List<SequenceBody>> list = client.sequences().rows().retrieveComplete(List.of(Item.newBuilder().setId(10).build()));//by list of items \nIterator<List<SequenceBody>> list = client.sequences().rows().retrieveComplete(10);//by varargs of Long \n\nIterator<List<SequenceBody>> list = client.sequences().rows().retrieveComplete(List.of(Item.newBuilder().setExternalId(\"10\").build()));//by list of items \nIterator<List<SequenceBody>> list = client.sequences().rows().retrieveComplete(\"10\");//by varargs of String \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/data/latest": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Retrieve latest row",
          "description": "Retrieves the last row (i.e the row with the highest row number) in a sequence.",
          "operationId": "getLatestSequenceRow",
          "requestBody": {
            "description": "Description of data requested",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SequenceLatestDataRequest"
                }
              }
            }
          },
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "responses": {
            "200": {
              "description": "Sequence data found",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SequenceGetData"
                  }
                }
              }
            }
          },
          "x-capability": [
            "sequencesAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/sequences/data/delete": {
        "post": {
          "tags": [
            "Sequences"
          ],
          "summary": "Delete rows",
          "description": "Deletes the given rows of the sequence. All columns are affected.",
          "operationId": "deleteSequenceData",
          "requestBody": {
            "description": "Indicate the sequences and the rows where data should be deleted",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DataSequenceDataDeleteRequest"
                }
              }
            }
          },
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            }
          },
          "x-capability": [
            "sequencesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.sequences.deleteRows([{ id: 32423849, rows: [1,2,3] }]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.sequences.data.delete(id=0, rows=[1,2,42])\nclient.sequences.data.delete_range(id=0, start=0, end=None)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<SequenceBody> deleteRowsInput = listSequencesRowsResults; \nList<SequenceBody> deleteRowsResults = client.sequences().rows().delete(deleteRowsInput);"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/relationships": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "post": {
          "summary": "Create relationships",
          "tags": [
            "Relationships"
          ],
          "description": "List of the relationships to create. You can create a maximum of 1000 relationships per request. Relationships should be unique, but CDF does not prevent you from creating duplicates where only the externalId differs.\n\nRelationships are uniquely identified by their externalId. Non-unique relationships will not be created.\n\nThe order of relationships in the response equals the order in the request.",
          "operationId": "createRelationships",
          "responses": {
            "201": {
              "$ref": "#/components/responses/persistedRelationships"
            },
            "400": {
              "$ref": "#/components/responses/400GeneralError"
            },
            "409": {
              "$ref": "#/components/responses/409GeneralError"
            },
            "500": {
              "$ref": "#/components/responses/generalError"
            }
          },
          "requestBody": {
            "$ref": "#/components/requestBodies/newRelationship"
          },
          "deprecated": false,
          "x-capability": [
            "relationshipsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const relationships = [\n  {\n     externalId: 'some_relationship',\n     sourceExternalId: 'some_source_external_id',\n     sourceType: 'asset' as const,\n     targetExternalId: 'some_target_external_id',\n     targetType: 'event' as const\n  }\n];\nconst createdRelationships = await client.relationships.create(relationships);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import Relationship\nflowrel1 = Relationship(external_id=\"flow_1\", source_external_id=\"source_ext_id\", source_type=\"asset\", target_external_id=\"target_ext_id\", target_type=\"event\", confidence=0.1, data_set_id=1234)\nflowrel2 = Relationship(external_id=\"flow_2\", source_external_id=\"source_ext_id\", source_type=\"asset\", target_external_id=\"target_ext_id\", target_type=\"event\", confidence=0.1, data_set_id=1234)\nres = client.relationships.create([flowrel1,flowrel2])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Asset> assetUpsertList = //list of Asset; \nList<Event> eventUpsertList = //list of Event; \nList<TimeseriesMetadata> timseriesUpsertList = //list of TimeseriesMetadata; \nList<SequenceMetadata> sequenceUpsertList = // list of SequenceMetadata; \n\nList<Relationship> relationshipList = new ArrayList<>(); \n\n//EVENT AND ASSET \nrelationshipList.add( \n     Relationship.newBuilder() \n          .setStartTime(Instant.now().toEpochMilli()) \n          .setEndTime(Instant.now().toEpochMilli()) \n          .setSourceType(Relationship.ResourceType.EVENT) \n          .setSourceExternalId(eventUpsertList.get(0).getExternalId()) \n          .setTargetType(Relationship.ResourceType.ASSET) \n          .setTargetExternalId(assetUpsertList.get(0).getExternalId()) \n          .setConfidence(ThreadLocalRandom.current().nextFloat()) \n          .build()); \n\n//TIME_SERIES AND ASSET \nrelationshipList.add( \n     Relationship.newBuilder() \n          .setStartTime(Instant.now().toEpochMilli()) \n          .setEndTime(Instant.now().toEpochMilli()) \n          .setSourceType(Relationship.ResourceType.TIME_SERIES) \n          .setSourceExternalId(timseriesUpsertList.get(1).getExternalId()) \n          .setTargetType(Relationship.ResourceType.ASSET) \n          .setTargetExternalId(assetUpsertList.get(1).getExternalId()) \n          .setConfidence(ThreadLocalRandom.current().nextFloat()) \n          .build()); \n\n//SEQUENCE AND EVENT \nrelationshipList.add( \n     Relationship.newBuilder() \n          .setStartTime(Instant.now().toEpochMilli()) \n          .setEndTime(Instant.now().toEpochMilli()) \n          .setSourceType(Relationship.ResourceType.SEQUENCE) \n          .setSourceExternalId(sequenceUpsertList.get(2).getExternalId()) \n          .setTargetType(Relationship.ResourceType.EVENT) \n          .setTargetExternalId(eventUpsertList.get(2).getExternalId()) \n          .setConfidence(ThreadLocalRandom.current().nextFloat()) \n          .build()); \n\nList<Relationship> upsertRelationshipsList = client.relationships() \n          .upsert(relationshipList); \n\n"
            }
          ]
        },
        "get": {
          "summary": "List relationships",
          "tags": [
            "Relationships"
          ],
          "description": "Lists all relationships. The order of retrieved objects may change for two calls with the same parameters.\nThe endpoint supports pagination. The initial call to this endpoint should not contain a cursor, but the cursor parameter should be used to retrieve further pages of results.",
          "operationId": "getRelationships",
          "parameters": [
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            },
            {
              "$ref": "#/components/parameters/partition"
            }
          ],
          "responses": {
            "200": {
              "$ref": "#/components/responses/pagedPersistedRelationships"
            },
            "500": {
              "$ref": "#/components/responses/generalError"
            }
          },
          "deprecated": false,
          "x-capability": [
            "relationshipsAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/relationships/update": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "post": {
          "summary": "Update relationships",
          "tags": [
            "Relationships"
          ],
          "description": "Update relationships between resources according to the partial definitions of the relationships given in the payload of the request. This means that fields not mentioned in the payload will remain unchanged. Up to 1000 relationships can be updated in one operation.\nTo delete a value from an optional value the `setNull` field should be set to `true`.\nThe order of the updated relationships in the response equals the order in the request.",
          "operationId": "updateRelationships",
          "requestBody": {
            "$ref": "#/components/requestBodies/updateObject"
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/persistedRelationships"
            },
            "400": {
              "$ref": "#/components/responses/generalError"
            },
            "409": {
              "$ref": "#/components/responses/409GeneralError"
            }
          },
          "x-capability": [
            "relationshipsAcl:WRITE",
            "relationshipsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "rel = client.relationships.retrieve(external_id=\"flow1\")\nrel.confidence = 0.75\nres = client.relationships.update(rel)\n\nfrom cognite.client.data_classes import RelationshipUpdate\nmy_update = RelationshipUpdate(external_id=\"flow_1\").source_external_id.set(\"alternate_source\").confidence.set(0.97)\nres1 = client.relationships.update(my_update)\nanother_update = RelationshipUpdate(external_id=\"flow_1\").confidence.set(None)\nres2 = client.relationships.update(another_update)\n\nfrom cognite.client.data_classes import RelationshipUpdate\nmy_update = RelationshipUpdate(external_id=\"flow_1\").labels.add([\"PUMP\", \"VERIFIED\"])\nres = client.relationships.update(my_update)\n\nfrom cognite.client.data_classes import RelationshipUpdate\nmy_update = RelationshipUpdate(external_id=\"flow_1\").labels.remove(\"PUMP\")\nres = client.relationships.update(my_update)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Relationship> relationshipList = // list of Relationship for update; \nList<Relationship> upsertRelationshipsList = \n          client.relationships().upsert(relationshipList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/relationships/delete": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "post": {
          "summary": "Delete relationships",
          "tags": [
            "Relationships"
          ],
          "description": "Delete the relationships between resources identified by the external IDs in the request. You can delete a maximum of 1000 relationships per request.",
          "operationId": "deleteRelationships",
          "requestBody": {
            "$ref": "#/components/requestBodies/delete"
          },
          "responses": {
            "202": {
              "$ref": "#/components/responses/emptyDeleteResponse"
            },
            "409": {
              "$ref": "#/components/responses/409GeneralError"
            },
            "500": {
              "$ref": "#/components/responses/generalError"
            }
          },
          "x-capability": [
            "relationshipsAcl:WRITE"
          ],
          "deprecated": false,
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.relationships.delete([{externalId: 'abc'}, {externalId: 'def'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.relationships.delete(external_id=[\"a\",\"b\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> deleteItemsInput = List.of(Item.newBuilder() \n          .setExternalId(\"10\") \n          .build()); \nList<Item> deleteItemsResults = \n          client.relationships().delete(deleteItemsInput); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/relationships/byids": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "post": {
          "summary": "Retrieve relationships",
          "tags": [
            "Relationships"
          ],
          "description": "Retrieve relationships by external IDs. You can retrieve a maximum of 1000 relationships per request.\nThe order of the relationships in the response equals the order in the request.",
          "operationId": "byidsRelationships",
          "requestBody": {
            "$ref": "#/components/requestBodies/listOfExternalIds"
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/enrichedPersistedRelationships"
            },
            "400": {
              "$ref": "#/components/responses/generalError"
            },
            "409": {
              "$ref": "#/components/responses/409GeneralError"
            }
          },
          "x-capability": [
            "relationshipsAcl:READ"
          ],
          "deprecated": false,
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const relationships = await client.relationships.retrieve([{externalId: 'abc'}, {externalId: 'def'}]);"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.relationships.retrieve_multiple(external_ids=[\"abc\", \"def\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> byExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\") \n          .build()); \nList<Relationship> list = \n          client.relationships().retrieve(byExternalIds);//by list of items \nList<Relationship> list = \n          client.relationships().retrieve(\"10\", \"20\");//by varargs of String \n\nList<Item> byInternalIds = List.of(Item.newBuilder() \n          .setId(10) \n          .build()); \nList<Relationship> list = \n          client.relationships().retrieve(byInternalIds, true);//by list of items \nList<Relationship> list1 = \n          client.relationships().retrieve(10,20);//by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/relationships/list": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "post": {
          "summary": "Filter relationships",
          "tags": [
            "Relationships"
          ],
          "description": "Lists relationships matching the query filter in the request. You can retrieve a maximum of 1000 relationships per request.",
          "operationId": "listRelationships",
          "requestBody": {
            "$ref": "#/components/requestBodies/advancedList"
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/filteredRelationships"
            },
            "400": {
              "$ref": "#/components/responses/generalError"
            },
            "409": {
              "$ref": "#/components/responses/409GeneralError"
            }
          },
          "x-capability": [
            "relationshipsAcl:READ"
          ],
          "deprecated": false,
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const relationships = await client.relationships.list({ filter: { createdTime: { min: new Date('1 jan 2018'), max: new Date('1 jan 2019') }}});"
            },
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "relationship_list = client.relationships.list(limit=5)\n\nfor relationship in client.relationships:\n    relationship # do something with the relationship\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Relationship> listRelationshipsResults = new ArrayList<>(); \nclient.relationships() \n          .list() \n          .forEachRemaining(listRelationshipsResults::addAll); \n\nclient.relationships() \n          .list(Request.create() \n               .withRootParameter(\"fetchResources\", true)) \n          .forEachRemaining(listRelationshipsResults::addAll); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/diagram/detect/": {
        "post": {
          "tags": [
            "Engineering diagrams"
          ],
          "summary": "Detect annotations in engineering diagrams",
          "description": "Detect annotations in engineering diagrams. Note: All users in a CDF project with assets read-all and files read-all capabilities can access data sent to this endpoint.\nSupported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.",
          "operationId": "diagramDetect",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items",
                    "entities"
                  ],
                  "allOf": [
                    {
                      "properties": {
                        "items": {
                          "type": "array",
                          "description": "Files to run entity detection on.",
                          "minItems": 1,
                          "maxItems": 50,
                          "items": {
                            "$ref": "#/components/schemas/OneOfFileId"
                          }
                        },
                        "entities": {
                          "$ref": "#/components/schemas/DiagramDetectEntities"
                        }
                      }
                    },
                    {
                      "$ref": "#/components/schemas/DiagramDetectConfig"
                    }
                  ]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "jobId",
                      "items"
                    ],
                    "allOf": [
                      {
                        "properties": {
                          "items": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/OneOfFileId"
                            }
                          },
                          "jobId": {
                            "$ref": "#/components/schemas/JobId"
                          },
                          "status": {
                            "$ref": "#/components/schemas/BatchJobStatus"
                          }
                        }
                      },
                      {
                        "$ref": "#/components/schemas/StatusSchema"
                      },
                      {
                        "$ref": "#/components/schemas/DiagramDetectConfig"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "filesAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/context/diagram/detect/{jobId}": {
        "get": {
          "tags": [
            "Engineering diagrams"
          ],
          "summary": "Retrieve engineering diagram detect results",
          "description": "Get the results from an engineering diagram detect job.",
          "operationId": "diagramDetectResults",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/jobId"
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "jobId"
                    ],
                    "allOf": [
                      {
                        "properties": {
                          "jobId": {
                            "$ref": "#/components/schemas/JobId"
                          },
                          "status": {
                            "$ref": "#/components/schemas/BatchJobStatus"
                          },
                          "items": {
                            "$ref": "#/components/schemas/DiagramDetectResultSchema"
                          }
                        }
                      },
                      {
                        "$ref": "#/components/schemas/StatusSchema"
                      },
                      {
                        "$ref": "#/components/schemas/DiagramDetectConfig"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "filesAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/context/diagram/convert/": {
        "post": {
          "tags": [
            "Engineering diagrams"
          ],
          "summary": "Convert a diagram to image format",
          "description": "Convert interactive engineering diagrams to image format, with highlighted annotations.\nSupported input file mime_types are application/pdf, image/jpeg, image/png, image/tiff.\nSupported output image formats are PNG and SVG, only the svg embeds the input annotations.",
          "operationId": "diagramConvert",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "allOf": [
                    {
                      "properties": {
                        "items": {
                          "$ref": "#/components/schemas/DiagramConvertRequestSchema"
                        }
                      }
                    },
                    {
                      "$ref": "#/components/schemas/DiagramConvertConfig"
                    }
                  ]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "jobId",
                      "items"
                    ],
                    "allOf": [
                      {
                        "properties": {
                          "items": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/OneOfFileId"
                            }
                          },
                          "jobId": {
                            "$ref": "#/components/schemas/JobId"
                          },
                          "status": {
                            "$ref": "#/components/schemas/BatchJobStatus"
                          }
                        }
                      },
                      {
                        "$ref": "#/components/schemas/StatusSchema"
                      },
                      {
                        "$ref": "#/components/schemas/DiagramConvertConfig"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "filesAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/context/diagram/convert/{jobId}": {
        "get": {
          "tags": [
            "Engineering diagrams"
          ],
          "summary": "Get the results for converting an engineering diagram to an image",
          "description": "Get the results for converting an engineering diagram to SVG and PNG formats.",
          "operationId": "diagramConvertResults",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/jobId"
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "jobId"
                    ],
                    "allOf": [
                      {
                        "properties": {
                          "jobId": {
                            "$ref": "#/components/schemas/JobId"
                          },
                          "status": {
                            "$ref": "#/components/schemas/BatchJobStatus"
                          },
                          "items": {
                            "$ref": "#/components/schemas/DiagramConvertResultSchema"
                          }
                        }
                      },
                      {
                        "$ref": "#/components/schemas/StatusSchema"
                      },
                      {
                        "$ref": "#/components/schemas/DiagramConvertConfig"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "filesAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/": {
        "parameters": [
          {
            "$ref": "#/components/parameters/project"
          }
        ],
        "get": {
          "tags": [
            "Entity matching"
          ],
          "summary": "List entity matching models",
          "description": "List all available entity matching models.",
          "operationId": "entityMatchingModels",
          "parameters": [
            {
              "in": "query",
              "name": "limit",
              "description": "Limits the number of results to be returned. The maximum results returned by the server is 1000 even if you specify a higher limit.",
              "schema": {
                "type": "integer",
                "default": 100,
                "minimum": 1
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "items"
                    ],
                    "properties": {
                      "items": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:READ"
          ]
        },
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Create entity matcher model",
          "description": "Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Train a model that predicts matches between entities (for example, time series names to asset names). This is also known as fuzzy joining. If there are no trueMatches (labeled data), you train a static (unsupervised) model, otherwise a machine learned (supervised) model is trained.",
          "operationId": "entityMatchingCreate",
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "sources",
                    "targets"
                  ],
                  "properties": {
                    "sources": {
                      "$ref": "#/components/schemas/Sources"
                    },
                    "targets": {
                      "$ref": "#/components/schemas/Targets"
                    },
                    "trueMatches": {
                      "$ref": "#/components/schemas/TrueMatches"
                    },
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    },
                    "name": {
                      "$ref": "#/components/schemas/ModelName"
                    },
                    "description": {
                      "$ref": "#/components/schemas/ModelDescription"
                    },
                    "featureType": {
                      "description": "Each feature type defines one combination of features that will be created and used in the entity matcher model. All features are based on matching tokens. Tokens are defined at the top of the Entity matching section.\nThe options are:\n  * Simple: Calculates the cosine-distance similarity score for each of the pairs of fields defined in `matchFields`. This is the fastest option.\n  * Insensitive: Similar to Simple, but ignores lowercase/uppercase differences.\n  * Bigram: Similar to `simple`, but adds similarity score based on matching bigrams of the tokens.\n  * FrequencyWeightedBigram: Similar to `bigram`, but give higher weights to less commonly occurring tokens.\n  * BigramExtraTokenizers: Similar to `bigram`, but able to learn that leading zeros, spaces, and uppercase/lowercase differences should be ignored in matching.\n  * BigramCombo: Calculates all of the above options, relying on the model to determine the appropriate features to use.\n  Hence, this option is only appropriate if there are  labeled data/trueMatches. This is the slowest option.\n",
                      "allOf": [
                        {
                          "$ref": "#/components/schemas/FeatureType"
                        }
                      ]
                    },
                    "matchFields": {
                      "$ref": "#/components/schemas/MatchFields"
                    },
                    "classifier": {
                      "$ref": "#/components/schemas/Classifier"
                    },
                    "ignoreMissingFields": {
                      "$ref": "#/components/schemas/IgnoreMissingFields"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const result = await client.entityMatching.create({\n sources: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],\n targets: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],\n externalId: 'model123',\n name: 'model123',\n});"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Struct> source = generateSourceStructs(); \nList<Struct> target = generateTargetTrainingStructs(); \n\n// Train the matching model \nRequest entityMatchFitRequest = Request.create() \n          .withRootParameter(\"sources\",  source) \n          .withRootParameter(\"targets\", target) \n          .withRootParameter(\"matchFields\", Map.of(\"source\", \"name\", \"target\", \"externalId\")) \n          .withRootParameter(\"featureType\", \"insensitive\"); \n\nList<EntityMatchModel> models = client.contextualization() \n          .entityMatching() \n          .create(List.of(entityMatchFitRequest)); \n\nprivate List<Struct> generateSourceStructs() { \n     Struct entityA = Struct.newBuilder() \n          .putFields(\"id\", Values.of(1D)) \n          .putFields(\"name\", Values.of(\"23-DB-9101\")) \n          .putFields(\"fooField\", Values.of(\"bar\")) \n          .build(); \n     Struct entityB = Struct.newBuilder() \n          .putFields(\"id\", Values.of(2D)) \n          .putFields(\"name\", Values.of(\"23-PC-9101\")) \n          .putFields(\"barField\", Values.of(\"foo\")) \n          .build(); \n     return List.of(entityA, entityB); \n} \n\nprivate List<Struct> generateTargetTrainingStructs() { \n    Struct targetA = Struct.newBuilder() \n          .putFields(\"id\", Values.of(1D)) \n          .putFields(\"externalId\", Values.of(\"IA-23_DB_9101\")) \n          .build(); \n     Struct targetB = Struct.newBuilder() \n          .putFields(\"id\", Values.of(2D)) \n          .putFields(\"externalId\", Values.of(\"VAL_23_PC_9101\")) \n          .build(); \n     return List.of(targetA, targetB); \n} \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/{id}": {
        "get": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Retrieve an entity matching model by the ID of the model",
          "description": "Shows the status of the model. If the status is completed, shows the parameters used to train the model.",
          "operationId": "entityMatchingStatus",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/CogniteInternalId"
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "required": [
                      "classifier",
                      "featureType"
                    ],
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:READ"
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/byids": {
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Retrieve entity matching models",
          "description": "Retrieve entity matching models by IDs or external IDs.",
          "operationId": "entityMatchingRetrieve",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "$ref": "#/components/schemas/OneOfId"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "items"
                    ],
                    "properties": {
                      "items": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const [result] = await client.entityMatching.retrieve([{ externalId: 'model123' }]);"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/list": {
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Filter models",
          "description": "Use filtering options to find entity matcher models.",
          "operationId": "entityMatchingFilter",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "filter"
                  ],
                  "properties": {
                    "limit": {
                      "description": "<- Limits the number of results to return.",
                      "type": "integer",
                      "format": "int32",
                      "minimum": 1,
                      "maximum": 1000,
                      "default": 100
                    },
                    "filter": {
                      "type": "object",
                      "allOf": [
                        {
                          "description": "Filter on models with strict matching."
                        },
                        {
                          "$ref": "#/components/schemas/EntityMatchingFilterSchema"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "items"
                    ],
                    "properties": {
                      "items": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const { items } = await client.entityMatching.list({ filter: { name: 'model123' }});"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/update": {
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Update entity matching models",
          "description": "Update entity matching models by IDs or external IDs.",
          "operationId": "entityMatchingUpdate",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ModelChange"
                      }
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "items"
                    ],
                    "properties": {
                      "items": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const [updated] = await client.entityMatching.update([{\n externalId: 'model123',\n update: { description: { set: '??' }}\n}]);"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/delete": {
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Delete entity matcher model",
          "description": "Deletes an entity matching model. Currently, this is a soft delete, and only removes the entry from listing.",
          "operationId": "entityMatchingDelete",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "items"
                  ],
                  "properties": {
                    "items": {
                      "$ref": "#/components/schemas/OneOfId"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Models deleted.",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.entityMatching.delete([{ externalId: 'model123' }]);"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/predict": {
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Predict matches",
          "description": "Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Predicts entity matches using a trained model.",
          "operationId": "entityMatchingPredict",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EntityMatchingPredictSchema"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "jobId"
                    ],
                    "allOf": [
                      {
                        "properties": {
                          "jobId": {
                            "$ref": "#/components/schemas/JobId"
                          }
                        }
                      },
                      {
                        "$ref": "#/components/schemas/StatusSchema"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "const response = await client.entityMatching.predict({\n externalId: 'model123',\n sources: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],\n targets: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],\n});"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<EntityMatchModel> models = // list of EntityMatchModel; \nlong modelId = models.get(0).getId(); \nList<Struct> source = generateSourceStructs(); \nList<Struct> target = generateTargetStructs(); \nList<EntityMatchResult> matchResults = client.contextualization() \n          .entityMatching() \n          .predict(modelId, source, target); \n\nprivate List<Struct> generateSourceStructs() { \n     Struct entityA = Struct.newBuilder() \n          .putFields(\"id\", Values.of(1D)) \n          .putFields(\"name\", Values.of(\"23-DB-9101\")) \n          .putFields(\"fooField\", Values.of(\"bar\")) \n          .build(); \n     Struct entityB = Struct.newBuilder() \n          .putFields(\"id\", Values.of(2D)) \n          .putFields(\"name\", Values.of(\"23-PC-9101\")) \n          .putFields(\"barField\", Values.of(\"foo\")) \n          .build(); \n     return List.of(entityA, entityB); \n} \n\nprivate List<Struct> generateTargetStructs() { \n     Struct targetA = Struct.newBuilder() \n          .putFields(\"id\", Values.of(1D)) \n          .putFields(\"externalId\", Values.of(\"IA-23_DB_9101\")) \n          .putFields(\"uuid\", Values.of(UUID.randomUUID().toString())) \n          .build(); \n     Struct targetB = Struct.newBuilder() \n          .putFields(\"id\", Values.of(2D)) \n          .putFields(\"externalId\", Values.of(\"VAL_23_PC_9101\")) \n          .putFields(\"uuid\", Values.of(UUID.randomUUID().toString())) \n          .build(); \n     return List.of(targetA, targetB); \n} \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/jobs/{jobId}": {
        "get": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Retrieve entity matcher predict results",
          "description": "Get the results from a predict job.",
          "operationId": "entityMatchingPredictResults",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/jobId"
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "required": [
                      "jobId",
                      "items"
                    ],
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/StatusSchema"
                      },
                      {
                        "properties": {
                          "jobId": {
                            "$ref": "#/components/schemas/JobId"
                          },
                          "status": {
                            "$ref": "#/components/schemas/JobStatus"
                          },
                          "items": {
                            "type": "array",
                            "description": "List of matched entities with confidence score.",
                            "items": {
                              "type": "object",
                              "required": [
                                "source",
                                "matches"
                              ],
                              "properties": {
                                "source": {
                                  "type": "object",
                                  "example": {
                                    "field": "value",
                                    "ignoredfield": {
                                      "key": "value"
                                    }
                                  },
                                  "description": "The source item given to predict."
                                },
                                "matches": {
                                  "type": "array",
                                  "required": [
                                    "score",
                                    "target"
                                  ],
                                  "description": "Matched items, sorted from highest score to lowest. May be empty.",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "score": {
                                        "type": "number",
                                        "example": 0.98,
                                        "description": "The model's confidence in the match."
                                      },
                                      "target": {
                                        "type": "object",
                                        "example": {
                                          "field": "value",
                                          "ignoredfield": {
                                            "key": "value"
                                          }
                                        },
                                        "description": "The target item given to predict."
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:WRITE"
          ]
        }
      },
      "/api/v1/projects/{project}/context/entitymatching/refit": {
        "post": {
          "tags": [
            "Entity matching"
          ],
          "summary": "Re-fit entity matcher model",
          "description": "Note: All users on this CDF subscription with assets read-all and entitymatching read-all and write-all capabilities in the project, are able to access the data sent to this endpoint. Creates a new model by re-training an existing model on existing data but with additional true matches. The old model is not changed. The new model gets a new id and new external id if `newExternalId` is set, or no external id if `newExternalId` is not set. Use for efficient re-training of the model after a user creates additional confirmed matches.",
          "operationId": "entityMatchingReFit",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EntityMatchingRefitSchema"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "required": [
                      "classifier",
                      "featureType",
                      "originalId"
                    ],
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/EntityMatcherResponseSchema"
                      }
                    ]
                  }
                }
              }
            },
            "400": {
              "$ref": "#/components/responses/ErrorResponse"
            }
          },
          "x-capability": [
            "assetsAcl:READ",
            "entitymatchingAcl:READ",
            "entitymatchingAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "JavaScript",
              "label": "JavaScript SDK",
              "source": "await client.entityMatching.refit({\n newExternalId: 'newModel123',\n sources: [{externalId: 'asset1', name: 'asset1'}, {externalId: 'asset2', name: 'asset2'}],\n targets: [{externalId: 'ts1', name: 'ts1'}, {externalId: 'ts2', name: 'ts2'}],\n externalId: 'model123',\n trueMatches: [{sourceExternalId: 'asset1', targetExternalId: 'ts1'}]\n});"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes": {
        "get": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "List extraction pipelines",
          "description": "Returns a list of all extraction pipelines for a given project",
          "operationId": "listExtPipes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            }
          ],
          "responses": {
            "200": {
              "description": "Response with the list of extraction pipelines",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExtPipes"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipelines.list()\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "Create extraction pipelines",
          "description": "Creates multiple new extraction pipelines. A maximum of 1000 extraction pipelines can be created per request.",
          "operationId": "createExtPipes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ItemsRequest_CreateExtPipe_"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Response with the list of extraction pipelines",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExtPipes"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import ExtractionPipeline\nep = ExtractionPipeline(external_id=\"py test id\", name=\"py test\", description=\"python generated\", data_set_id=1,\n schedule=\"\", contacts=[{\"name\": \"Name\", \"email\": \"name@test.no\", \"sendNotification\": True}])\nres = client.extraction_pipelines.create(ep)\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ExtractionPipeline> upsertPipelinesList = List.of(ExtractionPipeline.newBuilder() \n          .setExternalId(\"10\") \n          .setName(\"generated-\") \n          .setDescription(\"Generated description\") \n          .setDataSetId(dataSetId) \n          .setSource(\"sdk-data-generator\") \n          .putMetadata(\"type\", \"sdk-data-generator\") \n          .addContacts(ExtractionPipeline.Contact.newBuilder() \n               .setName(\"generated-\") \n               .setRole(\"generated\") \n               .build()) \n          .build()); \n\nclient.extractionPipelines().upsert(upsertPipelinesList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/delete": {
        "post": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "Delete extraction pipelines",
          "description": "Delete extraction pipelines for given list of ids and externalIds. When the extraction pipeline is deleted, all extraction pipeline runs related to the extraction pipeline are automatically deleted.",
          "operationId": "deleteExtPipes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ItemsRequest_ExtPipeId_"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "$ref": "#/components/responses/EmptyResponse"
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "client.extraction_pipelines.delete(id=100)\nclient.extraction_pipelines.delete(external_id=[\"a132421\", \"b12321\"])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> deleteByExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\") \n          .build()); \nList<Item> deleteItemsResults =  \n          client.extractionPipelines().delete(deleteByExternalIds); \n\nList<Item> deleteByInternalIds = List.of(Item.newBuilder()\n          .setId(10) \n          .build()); \nList<Item> deleteItemsResults =  \n          client.extractionPipelines().delete(deleteByInternalIds); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/update": {
        "post": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "Update extraction pipelines",
          "description": "Update information for a list of extraction pipelines. Fields that are not included in the request, are not changed.",
          "operationId": "updateExtPipes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ItemsRequest_ExtPipeUpdate_"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Response with the list of updated extraction pipelines",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExtPipes"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipelines.retrieve(id=100)\nres.description = \"New description\"\nres = client.extraction_pipelines.update(res)\n\nOR\n\nfrom cognite.client.data_classes import ExtractionPipelineUpdate\t\nup = ExtractionPipelineUpdate(id=res.id)\nup.description.set(\"Another new entity\")\nup.raw_tables.add([{\"dbName\": \"name\", \"tableName\": \"name\"}])\nup.raw_tables.remove([{\"dbName\": \"old_name\", \"tableName\": \"old_name\"}])\nres = client.extraction_pipelines.update(up)"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ExtractionPipeline> upsertPipelinesList = //list of ExtractionPipeline \nclient.extractionPipelines().upsert(upsertPipelinesList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/{id}": {
        "get": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "Retrieve an extraction pipeline by its ID.",
          "description": "Retrieve an extraction pipeline by its ID. If you want to retrieve extraction pipelines by externalIds, use Retrieve extraction pipelines instead.",
          "operationId": "showExtPipe",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "$ref": "#/components/parameters/CogniteInternalId"
            }
          ],
          "responses": {
            "200": {
              "description": "Single extraction pipeline response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExtPipe"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipelines.retrieve(id=100)\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/byids": {
        "post": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "Retrieve extraction pipelines",
          "description": "Retrieves information about multiple extraction pipelines in the same project. All ids and externalIds must be unique.",
          "operationId": "byidsExtPipes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExtendedItemsRequest_ExtPipeId_"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Response with the list of extraction pipelines",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExtPipes"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipelines.retrieve_multiple(ids=[23,24,25, 120], external_ids=['test_id'])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<Item> itemsByExternalIds = List.of(Item.newBuilder() \n          .setExternalId(\"10\") \n          .build()); \nList<ExtractionPipeline> retrievedEvents = \n          client.extractionPipelines().retrieve(itemsByExternalIds);//by list of items \nList<ExtractionPipeline> retrievedEvents = \n          client.extractionPipelines().retrieve(\"10\");//by varargs of String \n\nList<Item> itemsByInternalIds = List.of(Item.newBuilder() \n          .setId(10) \n          .build()); \nList<ExtractionPipeline> retrievedEvents = \n          client.extractionPipelines().retrieve(itemsByInternalIds); \n List<ExtractionPipeline> retrievedEvents = \n          client.extractionPipelines().retrieve(10);//by varargs of Long \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/list": {
        "post": {
          "tags": [
            "Extraction Pipelines"
          ],
          "summary": "Filter extraction pipelines",
          "description": "Use advanced filtering options to find extraction pipelines.",
          "operationId": "filterExtPipes",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ExtPipesFilterRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Response with the list of extraction pipelines",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ExtPipes"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionpipelinesAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipelines.list()\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ExtractionPipeline> listPipelinesResults = new ArrayList<>(); \nclient.extractionPipelines() \n          .list(Request.create() \n               .withFilterParameter(\"source\", \"source\")) \n          .forEachRemaining(events -> listPipelinesResults.addAll(events)); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/runs": {
        "get": {
          "tags": [
            "Extraction Pipelines Runs"
          ],
          "summary": "List extraction pipeline runs",
          "description": "List of all extraction pipeline runs for a given extraction pipeline. Sorted by createdTime value with descendant order.",
          "operationId": "runs",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            },
            {
              "name": "externalId",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "$ref": "#/components/parameters/Limit"
            },
            {
              "$ref": "#/components/parameters/Cursor"
            }
          ],
          "responses": {
            "200": {
              "description": "Response with list of extraction pipeline runs",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ItemsResponse_ExtPipeRunResponse_"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionrunsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipeline_runs.list(external_id=\"a132421\")\n"
            }
          ]
        },
        "post": {
          "tags": [
            "Extraction Pipelines Runs"
          ],
          "summary": "Create extraction pipeline runs",
          "description": "Create multiple extraction pipeline runs. Current version supports one extraction pipeline run per request. Extraction pipeline runs support three statuses: success, failure, seen. The content of the Error Message parameter is configurable and will contain any messages that have been configured within the extraction pipeline.",
          "operationId": "createRuns",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ItemsRequest_ExtPipeRunRequest_"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Response with list of extraction pipeline runs",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ItemsResponse_CreateExtPipeRunResponse_"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionrunsAcl:WRITE"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "from cognite.client.data_classes import ExtractionPipelineRun\t\nnewRun = client.extraction_pipeline_runs.create(ExtractionPipelineRun(external_id=res1.external_id, status=\"success\"))\nnewFailureRun = client.extraction_pipeline_runs.create(ExtractionPipelineRun(external_id=res1.external_id, status=\"failure\", message=\"Error message\"))\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ExtractionPipeline> listPipelinesResults = //list of ExtractionPipeline; \nList<ExtractionPipelineRun> upsertPipelineRunsList = \n          List.of(ExtractionPipelineRun.newBuilder() \n          .setExternalId(listPipelinesResults.get(0).getExternalId()) \n          .setCreatedTime(Instant.now().toEpochMilli()) \n          .setMessage(\"generated-\") \n          .setStatus(ExtractionPipelineRun.Status.SUCCESS) \n          .build()); \n\n client.extractionPipelines().runs().create(upsertPipelineRunsList); \n\n"
            }
          ]
        }
      },
      "/api/v1/projects/{project}/extpipes/runs/list": {
        "post": {
          "tags": [
            "Extraction Pipelines Runs"
          ],
          "summary": "Filter extraction pipeline runs",
          "description": "Use advanced filtering options to find extraction pipeline runs. Sorted by createdTime value with descendant order.",
          "operationId": "filterRuns",
          "parameters": [
            {
              "$ref": "#/components/parameters/project"
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RunsFilterRequest"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Response with list of extraction pipeline runs",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ItemsResponse_ExtPipeRunResponse_"
                  }
                }
              }
            },
            "400": {
              "description": "Response for a failed request",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/DefaultError"
                  }
                }
              }
            }
          },
          "x-capability": [
            "extractionrunsAcl:READ"
          ],
          "x-code-samples": [
            {
              "lang": "Python",
              "label": "Python SDK",
              "source": "res = client.extraction_pipeline_runs.list(external_id=\"external_id\", statuses=['success'])\n"
            },
            {
              "lang": "Java",
              "label": "Java SDK",
              "source": "List<ExtractionPipelineRun> listPipelinesRunsResults = new ArrayList<>(); \nclient.extractionPipelines() \n          .runs() \n          .list() \n          .forEachRemaining(run -> listPipelinesRunsResults.addAll(run)); \n\nclient.extractionPipelines() \n          .runs() \n          .list(Request.create().withFilterParameter(\"statuses\", \"success\")) \n          .forEachRemaining(run -> listPipelinesRunsResults.addAll(run)); \n\n"
            }
          ]
        }
      }
    },
    "components": {
      "securitySchemes": {
        "api-key": {
          "type": "apiKey",
          "description": "An admin can create API keys in the Cognite console.",
          "name": "api-key",
          "in": "header"
        },
        "oidc-token": {
          "type": "http",
          "description": "Access token issued by the CDF project's configured identity provider. Access token must be an OpenID Connect token, and the project must be configured to accept OpenID Connect tokens. Use a header key of 'Authorization' with a value of 'Bearer $accesstoken'",
          "scheme": "bearer"
        }
      },
      "schemas": {
        "ResourceDescription": {
          "type": "string",
          "description": "The description of the resource type.",
          "maxLength": 500
        },
        "IgnoreUnknownIdsField": {
          "type": "object",
          "properties": {
            "ignoreUnknownIds": {
              "description": "Ignore IDs and external IDs that are not found",
              "type": "boolean",
              "default": false
            }
          }
        },
        "Limit": {
          "type": "object",
          "properties": {
            "limit": {
              "description": "Limits the number of results to return.",
              "type": "integer",
              "default": 100,
              "minimum": 1,
              "maximum": 1000
            }
          }
        },
        "ExternalIdPrefixFilter": {
          "description": "filter external ids starting with the prefix specified",
          "type": "string",
          "maxLength": 255
        },
        "DataLong": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "example": [
                23872937137,
                1238712837,
                128371973
              ],
              "minItems": 1,
              "uniqueItems": true,
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "Error": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "description": "Cognite API error.",
          "properties": {
            "code": {
              "type": "integer",
              "description": "HTTP status code.",
              "format": "int32",
              "example": 401
            },
            "message": {
              "type": "string",
              "description": "Error message.",
              "example": "Could not authenticate."
            },
            "missing": {
              "type": "array",
              "description": "List of lookup objects that do not match any results.",
              "items": {
                "type": "object",
                "additionalProperties": true
              }
            },
            "duplicated": {
              "type": "array",
              "description": "List of objects that are not unique.",
              "items": {
                "type": "object",
                "additionalProperties": true
              }
            }
          }
        },
        "ObjectPatch": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ObjectPatchSet"
            },
            {
              "$ref": "#/components/schemas/ObjectPatchAddRemove"
            }
          ]
        },
        "ObjectPatchSet": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "uniqueItems": true,
              "type": "object",
              "description": "Set the key-value pairs. All existing key-value pairs will be removed.",
              "additionalProperties": {
                "type": "string"
              },
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            }
          }
        },
        "ObjectPatchAddRemove": {
          "title": "add/remove",
          "type": "object",
          "properties": {
            "add": {
              "uniqueItems": true,
              "type": "object",
              "description": "Add the key-value pairs. Values for existing keys will be overwritten.",
              "additionalProperties": {
                "type": "string"
              },
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            },
            "remove": {
              "uniqueItems": true,
              "type": "array",
              "description": "Remove the key-value pairs with the specified keys.",
              "example": [
                "value1",
                "value2"
              ],
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ObjectPatchEvent": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits of updated event: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ObjectPatchEventSet"
            },
            {
              "$ref": "#/components/schemas/ObjectPatchEventAddRemove"
            }
          ]
        },
        "ObjectPatchEventSet": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "uniqueItems": true,
              "type": "object",
              "description": "Set the key-value pairs. All existing key-value pairs will be removed.",
              "additionalProperties": {
                "type": "string",
                "maxLength": 128000
              },
              "x-maxKeyLength": 128,
              "x-maxTotalSize": 200000,
              "maxProperties": 256,
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            }
          }
        },
        "ObjectPatchEventAddRemove": {
          "title": "add/remove",
          "type": "object",
          "properties": {
            "add": {
              "uniqueItems": true,
              "type": "object",
              "description": "Add the key-value pairs. Values for existing keys will be overwritten.",
              "additionalProperties": {
                "type": "string",
                "maxLength": 128000
              },
              "x-maxKeyLength": 128,
              "x-maxTotalSize": 200000,
              "maxProperties": 256,
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            },
            "remove": {
              "uniqueItems": true,
              "type": "array",
              "description": "Remove the key-value pairs with the specified keys.",
              "example": [
                "value1",
                "value2"
              ],
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ObjectPatchAsset": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits of updated asset: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ObjectPatchSetAsset"
            },
            {
              "$ref": "#/components/schemas/ObjectPatchAddRemoveAsset"
            }
          ]
        },
        "ObjectPatchSetAsset": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "uniqueItems": true,
              "type": "object",
              "description": "Set the key-value pairs. All existing key-value pairs will be removed.",
              "additionalProperties": {
                "type": "string",
                "maxLength": 10240
              },
              "x-maxKeyLength": 128,
              "x-maxTotalSize": 10240,
              "maxProperties": 256,
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            }
          }
        },
        "ObjectPatchAddRemoveAsset": {
          "title": "add/remove",
          "type": "object",
          "properties": {
            "add": {
              "uniqueItems": true,
              "type": "object",
              "description": "Add the key-value pairs. Values for existing keys will be overwritten.",
              "additionalProperties": {
                "type": "string",
                "maxLength": 10240
              },
              "x-maxKeyLength": 128,
              "x-maxTotalSize": 10240,
              "maxProperties": 256,
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            },
            "remove": {
              "uniqueItems": true,
              "type": "array",
              "description": "Remove the key-value pairs with the specified keys.",
              "example": [
                "value1",
                "value2"
              ],
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ObjectPatchDataSet": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits of updated asset: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ObjectPatchSetDataSet"
            },
            {
              "$ref": "#/components/schemas/ObjectPatchAddRemoveDataSet"
            }
          ]
        },
        "ObjectPatchSetDataSet": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "uniqueItems": true,
              "type": "object",
              "description": "Set the key-value pairs. All existing key-value pairs will be removed.",
              "additionalProperties": {
                "type": "string",
                "maxLength": 10240
              },
              "x-maxKeyLength": 128,
              "x-maxTotalSize": 10240,
              "maxProperties": 256,
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            }
          }
        },
        "ObjectPatchAddRemoveDataSet": {
          "title": "add/remove",
          "type": "object",
          "properties": {
            "add": {
              "uniqueItems": true,
              "type": "object",
              "description": "Add the key-value pairs. Values for existing keys will be overwritten.",
              "additionalProperties": {
                "type": "string",
                "maxLength": 10240
              },
              "x-maxKeyLength": 128,
              "x-maxTotalSize": 10240,
              "maxProperties": 256,
              "example": {
                "key1": "value1",
                "key2": "value2"
              }
            },
            "remove": {
              "uniqueItems": true,
              "type": "array",
              "description": "Remove the key-value pairs with the specified keys.",
              "example": [
                "value1",
                "value2"
              ],
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ArrayPatchLongSet": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "ArrayPatchLongAddOrRemove": {
          "title": "add/remove",
          "type": "object",
          "properties": {
            "add": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "remove": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "ArrayPatchLong": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ArrayPatchLongSet"
            },
            {
              "$ref": "#/components/schemas/ArrayPatchLongAddOrRemove"
            }
          ],
          "description": "Change that will be applied to the array."
        },
        "ArrayPatchStringSet": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ArrayPatchStringAddOrRemove": {
          "title": "add/remove",
          "type": "object",
          "properties": {
            "add": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "remove": {
              "uniqueItems": true,
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "ArrayPatchString": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ArrayPatchStringSet"
            },
            {
              "$ref": "#/components/schemas/ArrayPatchStringAddOrRemove"
            }
          ],
          "description": "Change that will be applied to the array."
        },
        "SinglePatchBoolean": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "type": "boolean"
            }
          }
        },
        "JsonArrayInt64": {
          "type": "string",
          "format": "jsonArray(int64)",
          "example": "[1238712837, 238712361376, 23786237623]"
        },
        "JsonArrayString": {
          "type": "string",
          "format": "jsonArray(string)"
        },
        "EpochTimestamp": {
          "description": "The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
          "type": "integer",
          "minimum": 0,
          "format": "int64"
        },
        "EpochTimestampRange": {
          "description": "Range between two timestamps (inclusive).",
          "type": "object",
          "properties": {
            "max": {
              "description": "Maximum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "type": "integer",
              "minimum": 0,
              "format": "int64"
            },
            "min": {
              "description": "Minimum timestamp (inclusive). The timestamp is represented as number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "type": "integer",
              "minimum": 0,
              "format": "int64"
            }
          }
        },
        "IsNull": {
          "type": "object",
          "properties": {
            "isNull": {
              "type": "boolean",
              "example": true,
              "description": "Set to true if you want to search for data with field value not set, false to search for cases where some value is present."
            }
          }
        },
        "Partition": {
          "description": "Splits the data set into N partitions.\nYou need to follow the cursors within each partition in order to receive all the data.\nExample: 1/10\n",
          "type": "string",
          "example": "1/10"
        },
        "PartitionObject": {
          "type": "object",
          "properties": {
            "partition": {
              "$ref": "#/components/schemas/Partition"
            }
          }
        },
        "Cursor": {
          "description": "Cursor for paging through results",
          "type": "object",
          "properties": {
            "cursor": {
              "type": "string",
              "example": "4zj0Vy2fo0NtNMb229mI9r1V3YG5NBL752kQz1cKtwo"
            }
          }
        },
        "SetLongField": {
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "SetStringField": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "type": "string"
            }
          }
        },
        "SetIntegerField": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "type": "integer"
            }
          }
        },
        "SetBooleanField": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "type": "boolean"
            }
          }
        },
        "GeoLocationFilter": {
          "description": "Only include files matching the specified geographic relation.",
          "type": "object",
          "required": [
            "relation",
            "shape"
          ],
          "properties": {
            "relation": {
              "type": "string",
              "enum": [
                "INTERSECTS",
                "DISJOINT",
                "WITHIN"
              ],
              "description": "One of the supported queries."
            },
            "shape": {
              "type": "object",
              "description": "Represents the points, curves and surfaces in the coordinate space.",
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Point"
                },
                {
                  "$ref": "#/components/schemas/LineString"
                },
                {
                  "$ref": "#/components/schemas/Polygon"
                },
                {
                  "$ref": "#/components/schemas/MultiLineString"
                },
                {
                  "$ref": "#/components/schemas/MultiPolygon"
                }
              ],
              "discriminator": {
                "propertyName": "type"
              }
            }
          }
        },
        "GeoLocationGeometry": {
          "type": "object",
          "required": [
            "type"
          ],
          "description": "Represents the points, curves and surfaces in the coordinate space.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/Point"
            },
            {
              "$ref": "#/components/schemas/LineString"
            },
            {
              "$ref": "#/components/schemas/Polygon"
            },
            {
              "$ref": "#/components/schemas/MultiPoint"
            },
            {
              "$ref": "#/components/schemas/MultiLineString"
            },
            {
              "$ref": "#/components/schemas/MultiPolygon"
            }
          ],
          "discriminator": {
            "propertyName": "type"
          }
        },
        "Point": {
          "type": "object",
          "required": [
            "type",
            "coordinates"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Point"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/PointCoordinates"
            }
          }
        },
        "PointCoordinates": {
          "description": "Coordinates of a point in 2D space, described as an array of 2 numbers.\n\nExample: `[4.306640625, 60.205710352530346]`\n",
          "type": "array",
          "minItems": 2,
          "maxItems": 2,
          "items": {
            "type": "number"
          }
        },
        "LineString": {
          "type": "object",
          "required": [
            "type",
            "coordinates"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "LineString"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/LineStringCoordinates"
            }
          }
        },
        "LineStringCoordinates": {
          "description": "Coordinates of a line described by a list of two or more points.\nEach point is defined as a pair of two numbers in an array, representing coordinates of a point in 2D space.\n\nExample: `[[30, 10], [10, 30], [40, 40]]`\n",
          "type": "array",
          "minItems": 2,
          "items": {
            "$ref": "#/components/schemas/PointCoordinates"
          }
        },
        "Polygon": {
          "type": "object",
          "required": [
            "type",
            "coordinates"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Polygon"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/PolygonCoordinates"
            }
          }
        },
        "PolygonCoordinates": {
          "description": "List of one or more linear rings representing a shape.\n\nA linear ring is the boundary of a surface or the boundary of a hole in a surface. It is defined as a list consisting of 4 or more Points, where the first and last Point is equivalent.\n\nEach Point is defined as an array of 2 numbers, representing coordinates of a point in 2D space.\n\nExample: `[[[35, 10], [45, 45], [15, 40], [10, 20], [35, 10]], [[20, 30], [35, 35], [30, 20], [20, 30]]]`\n",
          "type": "array",
          "minItems": 2,
          "items": {
            "$ref": "#/components/schemas/LineStringCoordinates"
          }
        },
        "MultiPoint": {
          "type": "object",
          "required": [
            "type",
            "coordinates"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "MultiPoint"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/MultiPointCoordinates"
            }
          }
        },
        "MultiPointCoordinates": {
          "description": "List of Points. Each Point is defined as an array of 2 numbers, representing coordinates of a point in 2D space.\n\nExample: `[[35, 10], [45, 45]]`\n",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/PointCoordinates"
          }
        },
        "MultiLineString": {
          "type": "object",
          "required": [
            "type",
            "coordinates"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "MultiLineString"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/MultiLineStringCoordinates"
            }
          }
        },
        "MultiLineStringCoordinates": {
          "description": "List of lines where each line (LineString) is defined as a list of two or more points.\nEach point is defined as a pair of two numbers in an array, representing coordinates of a point in 2D space.\n\nExample: `[[[30, 10], [10, 30]], [[35, 10], [10, 30], [40, 40]]]`\n",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/LineStringCoordinates"
          }
        },
        "MultiPolygon": {
          "type": "object",
          "required": [
            "type",
            "coordinates"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "MultiPolygon"
              ]
            },
            "coordinates": {
              "$ref": "#/components/schemas/MultiPolygonCoordinates"
            }
          }
        },
        "MultiPolygonCoordinates": {
          "description": "List of multiple polygons.\n\nEach polygon is defined as a list of one or more linear rings representing a shape.\n\nA linear ring is the boundary of a surface or the boundary of a hole in a surface. It is defined as a list consisting of 4 or more Points, where the first and last Point is equivalent.\n\nEach Point is defined as an array of 2 numbers, representing coordinates of a point in 2D space.\n\nExample: `[[[[30, 20], [45, 40], [10, 40], [30, 20]]], [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]]`\n",
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/PolygonCoordinates"
          }
        },
        "GeoLocation": {
          "description": "The geographic metadata of the file.",
          "required": [
            "type",
            "geometry"
          ],
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Feature"
              ],
              "description": "One of the GeoJSON types. Currently only the 'Feature' type is supported."
            },
            "geometry": {
              "$ref": "#/components/schemas/GeoLocationGeometry"
            },
            "properties": {
              "type": "object",
              "description": "Additional properties in a String key -> Object value format."
            }
          }
        },
        "SinglePatchGeoLocation": {
          "title": "set",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetGeoLocation"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the geoLocation, or remove the value."
        },
        "SetGeoLocation": {
          "title": "set",
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/GeoLocation"
            }
          }
        },
        "RemoveField": {
          "title": "remove",
          "type": "object",
          "required": [
            "setNull"
          ],
          "properties": {
            "setNull": {
              "type": "boolean",
              "example": true
            }
          }
        },
        "SetExternalId": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          }
        },
        "SetDataSetId": {
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/DataSetId"
            }
          }
        },
        "SetDescription": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/ResourceDescription"
            }
          }
        },
        "SinglePatchResourceDescription": {
          "title": "set",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetDescription"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ]
        },
        "SinglePatchDataSetId": {
          "title": "set",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetDataSetId"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ]
        },
        "SinglePatchExternalId": {
          "title": "set",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetExternalId"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the externalId, or remove the value. Must be unique for the resource type."
        },
        "SinglePatchLong": {
          "title": "set",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetLongField"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the string, or remove the value."
        },
        "ModifyPatchInteger": {
          "title": "modify",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetIntegerField"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the integer, or remove the value"
        },
        "ModifyPatchBoolean": {
          "title": "modify",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetBooleanField"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the boolean, or remove the value"
        },
        "SinglePatchString": {
          "title": "set",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetStringField"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the string, or remove the value."
        },
        "SinglePatchRequiredString": {
          "title": "set",
          "type": "object",
          "properties": {
            "set": {
              "type": "string"
            }
          },
          "description": "Set a new value for the string.",
          "required": [
            "set"
          ]
        },
        "CogniteInternalId": {
          "description": "A server-generated ID for the object.",
          "type": "integer",
          "minimum": 1,
          "maximum": 9007199254740991,
          "format": "int64"
        },
        "CogniteExternalId": {
          "description": "The external ID provided by the client. Must be unique for the resource type.",
          "type": "string",
          "maxLength": 255,
          "example": "my.known.id"
        },
        "CogniteExternalIdPrefix": {
          "description": "Filter by this (case-sensitive) prefix for the external ID.",
          "type": "string",
          "maxLength": 255,
          "example": "my.known.prefix"
        },
        "DataSetInternalId": {
          "type": "object",
          "title": "DataSetInternalId",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          }
        },
        "DataSetExternalId": {
          "type": "object",
          "title": "DataSetExternalId",
          "required": [
            "externalId"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          }
        },
        "DataSetIdEither": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/DataSetInternalId"
            },
            {
              "$ref": "#/components/schemas/DataSetExternalId"
            }
          ]
        },
        "DataSetIdEithers": {
          "type": "array",
          "items": {
            "$ref": "#/components/schemas/DataSetIdEither"
          }
        },
        "DataSetId": {
          "description": "The dataSet Id for the item.",
          "type": "integer",
          "minimum": 1,
          "maximum": 9007199254740991,
          "format": "int64"
        },
        "TimestampOrStringStart": {
          "oneOf": [
            {
              "type": "integer",
              "default": 0
            },
            {
              "type": "string"
            }
          ],
          "description": "Get datapoints starting from, and including, this time. The format is N[timeunit]-ago where\ntimeunit is w,d,h,m,s. Example: '2d-ago' gets datapoints that are up to 2 days\nold. You can also specify time in milliseconds since epoch. Note that for aggregates, the start time is rounded down to a whole granularity unit (in UTC timezone). Daily granularities (d)\nare rounded to 0:00 AM; hourly granularities (h) to the start of the hour, etc."
        },
        "TimestampOrStringEnd": {
          "oneOf": [
            {
              "type": "integer"
            },
            {
              "type": "string",
              "default": "now"
            }
          ],
          "description": "Get datapoints up to, but excluding, this point in time. Same format as for start. Note that when using aggregates, the end will be rounded up such that the last aggregate represents a full aggregation interval containing the original end, where the interval is the granularity unit times the granularity multiplier. For granularity 2d, the aggregation interval is 2 days, if end was originally 3 days after the start, it will be rounded to 4 days after the start."
        },
        "CountAggregateResult": {
          "description": "Count aggregation result.",
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1,
              "items": {
                "type": "object",
                "required": [
                  "count"
                ],
                "properties": {
                  "count": {
                    "type": "integer",
                    "description": "Number of items in this aggregation group.",
                    "format": "int64"
                  }
                }
              }
            }
          },
          "example": {
            "items": [
              {
                "count": 10
              }
            ]
          }
        },
        "StringValue": {
          "description": "A unique string value in the field.",
          "type": "object",
          "required": [
            "value"
          ],
          "properties": {
            "value": {
              "type": "string"
            }
          }
        },
        "IntegerValue": {
          "description": "A unique integer value in the field.",
          "type": "object",
          "required": [
            "value"
          ],
          "properties": {
            "value": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "ValuesAggregateResult": {
          "description": "Values aggregation result.",
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "items": {
                "type": "object",
                "allOf": [
                  {
                    "type": "object",
                    "required": [
                      "count"
                    ],
                    "properties": {
                      "count": {
                        "description": "Number of items in this aggregation group.",
                        "type": "integer",
                        "format": "int64"
                      }
                    }
                  },
                  {
                    "oneOf": [
                      {
                        "$ref": "#/components/schemas/StringValue"
                      },
                      {
                        "$ref": "#/components/schemas/IntegerValue"
                      }
                    ]
                  }
                ]
              }
            }
          },
          "example": {
            "items": [
              {
                "count": 5,
                "value": "value_1"
              },
              {
                "count": 10,
                "value": "value_2"
              }
            ]
          }
        },
        "AggregateResult": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/CountAggregateResult"
            },
            {
              "$ref": "#/components/schemas/ValuesAggregateResult"
            }
          ]
        },
        "Label": {
          "type": "object",
          "title": "Label",
          "required": [
            "externalId"
          ],
          "description": "A label assigned to a resource.",
          "properties": {
            "externalId": {
              "description": "An external ID to a predefined label definition.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              ]
            }
          }
        },
        "LabelList": {
          "type": "array",
          "description": "A list of the labels associated with this resource item.",
          "minItems": 0,
          "maxItems": 10,
          "uniqueItems": true,
          "items": {
            "$ref": "#/components/schemas/Label"
          }
        },
        "LabelFilter": {
          "description": "Return only the resource matching the specified label constraints.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/LabelContainsAnyFilter"
            },
            {
              "$ref": "#/components/schemas/LabelContainsAllFilter"
            }
          ]
        },
        "LabelContainsAnyFilter": {
          "type": "object",
          "required": [
            "containsAny"
          ],
          "properties": {
            "containsAny": {
              "description": "The resource item contains at least one of the listed labels.",
              "type": "array",
              "minItems": 1,
              "maxItems": 10,
              "items": {
                "$ref": "#/components/schemas/Label"
              }
            }
          }
        },
        "LabelContainsAllFilter": {
          "type": "object",
          "required": [
            "containsAll"
          ],
          "properties": {
            "containsAll": {
              "description": "The resource item contains at least all the listed labels.",
              "type": "array",
              "minItems": 1,
              "maxItems": 10,
              "items": {
                "$ref": "#/components/schemas/Label"
              }
            }
          }
        },
        "LabelDefinitionExternalId": {
          "type": "object",
          "required": [
            "externalId"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          }
        },
        "LabelDefinitionExternalIdList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "uniqueItems": true,
              "items": {
                "$ref": "#/components/schemas/LabelDefinitionExternalId"
              }
            }
          }
        },
        "LabelsPatch": {
          "description": "Updates the resource's assigned labels.\n\nLabels can be added, removed or replaced (set). Adding an already attached label is an idempotent operation. Removing a label with no matching externalId is silently ignored.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/LabelsAddRemove"
            },
            {
              "$ref": "#/components/schemas/LabelsSet"
            }
          ]
        },
        "LabelsAddRemove": {
          "type": "object",
          "properties": {
            "add": {
              "type": "array",
              "description": "A list of the labels to add to a resource.",
              "minItems": 0,
              "maxItems": 10,
              "uniqueItems": true,
              "items": {
                "$ref": "#/components/schemas/Label"
              }
            },
            "remove": {
              "type": "array",
              "description": "A list of the labels to remove from a resource.",
              "minItems": 0,
              "maxItems": 10,
              "uniqueItems": true,
              "items": {
                "$ref": "#/components/schemas/Label"
              }
            }
          }
        },
        "LabelsSet": {
          "type": "object",
          "properties": {
            "set": {
              "type": "array",
              "description": "A list of the labels to replace (set) to a resource.",
              "minItems": 0,
              "maxItems": 10,
              "uniqueItems": true,
              "items": {
                "$ref": "#/components/schemas/Label"
              }
            }
          }
        },
        "AssetName": {
          "type": "string",
          "description": "The name of the asset.",
          "minLength": 1,
          "maxLength": 140
        },
        "AssetDescription": {
          "type": "string",
          "description": "The description of the asset.",
          "maxLength": 500
        },
        "AssetQuery": {
          "type": "string",
          "description": "Whitespace-separated terms to search for in assets. Does a best-effort fuzzy search in relevant fields (currently name and description) for variations of any of the search terms, and orders results by relevance. Uses a different search algorithm than the name and description parameters, and will generally give much better results. Matching and ordering is not guaranteed to be stable over time, and the fields being searched may be extended.",
          "minLength": 1,
          "maxLength": 140
        },
        "AssetMetadata": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240.",
          "additionalProperties": {
            "type": "string",
            "maxLength": 10240
          },
          "x-maxKeyLength": 128,
          "x-maxTotalSize": 10240,
          "maxProperties": 256
        },
        "AssetParentExternalId": {
          "description": "The external ID of the parent. This will be resolved to an internal ID and stored as `parentId`.",
          "type": "string",
          "maxLength": 255,
          "example": "my.known.id"
        },
        "AssetSource": {
          "type": "string",
          "maxLength": 128,
          "description": "The source of the asset."
        },
        "SetAssetSource": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/AssetSource"
            }
          }
        },
        "AssetInternalId": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          }
        },
        "AssetExternalId": {
          "type": "object",
          "required": [
            "externalId"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          }
        },
        "AssetIdEither": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/AssetInternalId"
            },
            {
              "$ref": "#/components/schemas/AssetExternalId"
            }
          ]
        },
        "AssetIdentifier": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          }
        },
        "DeleteRequest": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/AssetIdEither"
                  },
                  "maxItems": 1000,
                  "minItems": 1
                },
                "recursive": {
                  "description": "Recursively delete all asset subtrees under the specified IDs.",
                  "type": "boolean",
                  "default": false
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "AssetDataIds": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/AssetIdEither"
                  },
                  "maxItems": 1000,
                  "minItems": 1
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            },
            {
              "$ref": "#/components/schemas/AggregatedProperties"
            }
          ]
        },
        "ExternalAsset": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "name": {
              "$ref": "#/components/schemas/AssetName"
            },
            "parentId": {
              "description": "The parent node's ID used to specify parent-child relationship.\n\nYou should not use this field in combination with the parentExternalId field.\n",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              ]
            },
            "parentExternalId": {
              "description": "The parent node's external ID used to specify the parent-child relationship.\nWhen specifying this field, the API will resolve the external ID into an internal ID and use the internal ID to store the parent-child relation.\nAs a result, a later change to update the parent's external ID will not affect this parent-child relationship as it is based on internal ID.\n\nYou should not use this field in combination with the parentId field.\n",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              ]
            },
            "description": {
              "$ref": "#/components/schemas/AssetDescription"
            },
            "dataSetId": {
              "description": "The id of the dataset this asset belongs to.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              ]
            },
            "metadata": {
              "$ref": "#/components/schemas/AssetMetadata"
            },
            "source": {
              "$ref": "#/components/schemas/AssetSource"
            },
            "labels": {
              "$ref": "#/components/schemas/LabelList"
            }
          },
          "description": "A representation of a physical asset, for example a factory or a piece of equipment."
        },
        "Asset": {
          "allOf": [
            {
              "type": "object",
              "required": [
                "rootId",
                "createdTime",
                "lastUpdatedTime"
              ],
              "properties": {
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "rootId": {
                  "description": "The ID of the root asset. The root asset is the asset spanning the entire asset hierarchy that this asset belongs to.",
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  ]
                },
                "aggregates": {
                  "$ref": "#/components/schemas/AggregateResultItem"
                },
                "parentId": {
                  "description": "The ID of the parent of this node, null if it is the root node.",
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  ]
                },
                "parentExternalId": {
                  "description": "The external ID of the parent. The property is omitted if the asset doesn't have a parent or if the parent doesn't have externalId.",
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  ]
                }
              }
            },
            {
              "$ref": "#/components/schemas/ExternalAsset"
            },
            {
              "$ref": "#/components/schemas/AssetInternalId"
            }
          ]
        },
        "AssetAggregate": {
          "description": "Aggregation group of assets",
          "type": "object",
          "required": [
            "count"
          ],
          "properties": {
            "count": {
              "type": "integer",
              "description": "Size of the aggregation group",
              "format": "int64"
            }
          }
        },
        "AggregateResultItem": {
          "description": "Aggregated metrics of the asset",
          "type": "object",
          "properties": {
            "childCount": {
              "type": "integer",
              "description": "Number of direct descendants for the asset",
              "format": "int32",
              "minimum": 0
            },
            "depth": {
              "type": "integer",
              "description": "Asset path depth (number of levels below root node).",
              "format": "int32",
              "minimum": 0
            },
            "path": {
              "description": "IDs of assets on the path to the asset.",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AssetIdentifier"
              }
            }
          }
        },
        "DataAsset": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Asset"
              }
            }
          }
        },
        "DataAssetAggregate": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1,
              "items": {
                "$ref": "#/components/schemas/AssetAggregate"
              }
            }
          }
        },
        "DataAssetChange": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AssetChange"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "DataExternalAssetItem": {
          "allOf": [
            {
              "$ref": "#/components/schemas/ExternalAsset"
            },
            {
              "type": "object",
              "properties": {
                "parentExternalId": {
                  "$ref": "#/components/schemas/AssetParentExternalId"
                }
              }
            }
          ]
        },
        "DataExternalAsset": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DataExternalAssetItem"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "DataWithCursorAsset": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Asset"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "The cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next or previous page of results."
        },
        "AggregatedProperty": {
          "type": "string",
          "enum": [
            "childCount",
            "path",
            "depth"
          ]
        },
        "AggregatedProperties": {
          "type": "object",
          "properties": {
            "aggregatedProperties": {
              "description": "Set of aggregated properties to include",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AggregatedProperty"
              }
            }
          }
        },
        "AssetFilter": {
          "type": "object",
          "properties": {
            "filter": {
              "type": "object",
              "description": "Filter on assets with strict matching.",
              "title": "Filter",
              "properties": {
                "name": {
                  "$ref": "#/components/schemas/AssetName"
                },
                "parentIds": {
                  "description": "Return only the direct descendants of the specified assets.",
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 100,
                  "items": {
                    "$ref": "#/components/schemas/CogniteInternalId"
                  }
                },
                "parentExternalIds": {
                  "description": "Return only the direct descendants of the specified assets.",
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 100,
                  "items": {
                    "$ref": "#/components/schemas/CogniteExternalId"
                  }
                },
                "rootIds": {
                  "description": "This parameter is deprecated. Use assetSubtreeIds instead. Only include these root assets and their descendants.",
                  "deprecated": true,
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 100,
                  "items": {
                    "$ref": "#/components/schemas/AssetIdEither"
                  }
                },
                "assetSubtreeIds": {
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 100,
                  "description": "Only include assets in subtrees rooted at the specified assets (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
                  "items": {
                    "$ref": "#/components/schemas/AssetIdEither"
                  }
                },
                "dataSetIds": {
                  "type": "array",
                  "maxItems": 1000,
                  "items": {
                    "$ref": "#/components/schemas/DataSetIdEither"
                  }
                },
                "metadata": {
                  "$ref": "#/components/schemas/AssetMetadata"
                },
                "source": {
                  "$ref": "#/components/schemas/AssetSource"
                },
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestampRange"
                },
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestampRange"
                },
                "root": {
                  "type": "boolean",
                  "description": "Whether the filtered assets are root assets, or not. Set to True to only list root assets."
                },
                "externalIdPrefix": {
                  "$ref": "#/components/schemas/CogniteExternalIdPrefix"
                },
                "labels": {
                  "$ref": "#/components/schemas/LabelFilter"
                }
              }
            }
          }
        },
        "AssetLimit": {
          "type": "object",
          "properties": {
            "limit": {
              "description": "Limits the number of results to return.",
              "type": "integer",
              "format": "int32",
              "minimum": 1,
              "maximum": 1000,
              "default": 100
            }
          }
        },
        "AssetAggregateRequest": {
          "description": "Aggregation request of assets. Filters behave the same way as for the `list` endpoint. Default aggregation is `count`.",
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetFilter"
            }
          ]
        },
        "AssetListScope": {
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetFilter"
            },
            {
              "$ref": "#/components/schemas/AssetLimit"
            },
            {
              "$ref": "#/components/schemas/Cursor"
            },
            {
              "$ref": "#/components/schemas/AggregatedProperties"
            },
            {
              "$ref": "#/components/schemas/PartitionObject"
            }
          ]
        },
        "AssetSearchFilter": {
          "description": "Search request with filter capabilities.",
          "example": {
            "filter": {
              "parentIds": [
                1293812938,
                293823982938
              ]
            },
            "search": {
              "name": "flow",
              "description": "upstream"
            }
          },
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetFilter"
            },
            {
              "$ref": "#/components/schemas/AssetLimit"
            },
            {
              "$ref": "#/components/schemas/AssetSearch"
            }
          ]
        },
        "AssetSearch": {
          "type": "object",
          "properties": {
            "search": {
              "type": "object",
              "title": "Search",
              "description": "Fulltext search for assets. Primarily meant for for human-centric use-cases, not for programs. The query parameter uses a different search algorithm than the deprecated name and description parameters, and will generally give much better results.",
              "properties": {
                "name": {
                  "$ref": "#/components/schemas/AssetName"
                },
                "description": {
                  "$ref": "#/components/schemas/AssetDescription"
                },
                "query": {
                  "$ref": "#/components/schemas/AssetQuery"
                }
              }
            }
          }
        },
        "AssetChange": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/AssetChangeById"
            },
            {
              "$ref": "#/components/schemas/AssetChangeByExternalId"
            }
          ]
        },
        "AssetChangeById": {
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetPatch"
            },
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            }
          ]
        },
        "AssetChangeByExternalId": {
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetPatch"
            },
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            }
          ]
        },
        "AssetPatch": {
          "type": "object",
          "description": "Changes applied to asset",
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/SinglePatchExternalId"
                },
                "name": {
                  "$ref": "#/components/schemas/SinglePatchRequiredName"
                },
                "description": {
                  "$ref": "#/components/schemas/SinglePatchResourceDescription"
                },
                "dataSetId": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "metadata": {
                  "$ref": "#/components/schemas/ObjectPatchAsset"
                },
                "source": {
                  "$ref": "#/components/schemas/SinglePatchAssetSource"
                },
                "parentId": {
                  "$ref": "#/components/schemas/SinglePatchRequiredInternalId"
                },
                "parentExternalId": {
                  "$ref": "#/components/schemas/SinglePatchRequiredParentExternalId"
                },
                "labels": {
                  "$ref": "#/components/schemas/LabelsPatch"
                }
              }
            }
          }
        },
        "SinglePatchRequiredName": {
          "title": "AssetName",
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/AssetName"
            }
          },
          "description": "Set a new value for the asset name.",
          "required": [
            "set"
          ]
        },
        "SinglePatchAssetSource": {
          "title": "Source",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetAssetSource"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the source, or remove the value."
        },
        "SinglePatchRequiredInternalId": {
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          },
          "description": "Change the ID of the object.",
          "required": [
            "set"
          ]
        },
        "SinglePatchRequiredExternalId": {
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          },
          "description": "Change the external ID of the object.",
          "required": [
            "set"
          ]
        },
        "SinglePatchRequiredParentExternalId": {
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/AssetParentExternalId"
            }
          },
          "description": "Change the external ID of the object.",
          "required": [
            "set"
          ]
        },
        "EventType": {
          "maxLength": 64,
          "type": "string",
          "description": "Type of the event, e.g 'failure'."
        },
        "SetEventType": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/EventType"
            }
          }
        },
        "EventSubType": {
          "maxLength": 64,
          "type": "string",
          "description": "SubType of the event, e.g 'electrical'."
        },
        "SetEventSubType": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/EventSubType"
            }
          }
        },
        "InternalId": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          }
        },
        "ExternalId": {
          "type": "object",
          "required": [
            "externalId"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          }
        },
        "EventSource": {
          "maxLength": 128,
          "type": "string",
          "description": "The source of this event."
        },
        "SetEventSource": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/EventSource"
            }
          }
        },
        "EventDescription": {
          "maxLength": 500,
          "type": "string",
          "description": "Textual description of the event."
        },
        "DataEvent": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Event"
              }
            }
          }
        },
        "DataExternalEvent": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExternalEvent"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "DataEventChange": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EventChange"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "EitherId": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/InternalId"
            },
            {
              "$ref": "#/components/schemas/ExternalId"
            }
          ]
        },
        "EventDataIds": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/EitherId"
                  },
                  "maxItems": 1000,
                  "minItems": 1
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "DataWithCursorEvent": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Event"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "Cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next, or previous, page of results"
        },
        "EventMetadata": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 128000 bytes, up to 256 key-value pairs, of total size at most 200000.",
          "additionalProperties": {
            "type": "string",
            "maxLength": 128000
          },
          "x-maxKeyLength": 128,
          "x-maxTotalSize": 200000,
          "maxProperties": 256
        },
        "Event": {
          "allOf": [
            {
              "$ref": "#/components/schemas/InternalEvent"
            },
            {
              "$ref": "#/components/schemas/InternalId"
            },
            {
              "type": "object",
              "required": [
                "createdTime",
                "lastUpdatedTime"
              ],
              "properties": {
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              }
            }
          ]
        },
        "InternalEvent": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "dataSetId": {
              "description": "The id of the dataset this event belongs to.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              ]
            },
            "startTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "endTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "type": {
              "$ref": "#/components/schemas/EventType"
            },
            "subtype": {
              "$ref": "#/components/schemas/EventSubType"
            },
            "description": {
              "maxLength": 500,
              "type": "string",
              "description": "Textual description of the event."
            },
            "metadata": {
              "$ref": "#/components/schemas/EventMetadata"
            },
            "assetIds": {
              "type": "array",
              "uniqueItems": true,
              "description": "Asset IDs of equipment that this event relates to.",
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              }
            },
            "source": {
              "maxLength": 128,
              "type": "string",
              "description": "The source of this event."
            }
          },
          "description": "An event represents something that happened at a given interval in time, e.g a failure, a work order etc."
        },
        "ExternalEvent": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "dataSetId": {
              "description": "The id of the dataset this event belongs to.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              ]
            },
            "startTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "endTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "type": {
              "$ref": "#/components/schemas/EventType"
            },
            "subtype": {
              "$ref": "#/components/schemas/EventSubType"
            },
            "description": {
              "$ref": "#/components/schemas/EventDescription"
            },
            "metadata": {
              "$ref": "#/components/schemas/EventMetadata"
            },
            "assetIds": {
              "type": "array",
              "minItems": 0,
              "maxItems": 10000,
              "uniqueItems": true,
              "description": "Asset IDs of equipment that this event relates to.",
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              }
            },
            "source": {
              "$ref": "#/components/schemas/EventSource"
            }
          },
          "description": "An event represents something that happened at a given interval in time, e.g a failure, a work order etc."
        },
        "EventAggregateRequest": {
          "description": "Aggregation request of events. Filters exact field matching or timestamp ranges inclusive min and max. Default aggregation is `count`.",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/UniqueValuesAggregate"
            },
            {
              "$ref": "#/components/schemas/CountAggregate"
            }
          ]
        },
        "CountAggregate": {
          "description": "Default aggregation to count.",
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/EventFilter"
            }
          }
        },
        "UniqueValuesAggregate": {
          "allOf": [
            {},
            {
              "$ref": "#/components/schemas/LegacyAggregationFields"
            },
            {
              "type": "object",
              "description": "Request aggregation on a specific field.",
              "required": [
                "aggregate"
              ],
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/EventFilter"
                },
                "aggregate": {
                  "description": "Type of aggregation to apply.\n`uniqueValues` - Get unique values (upto max 1000) in the specified field ordered by frequency.\n",
                  "type": "string",
                  "enum": [
                    "uniqueValues"
                  ]
                }
              }
            }
          ]
        },
        "LegacyAggregationFields": {
          "type": "object",
          "title": "legacy",
          "deprecated": true,
          "required": [
            "fields"
          ],
          "properties": {
            "fields": {
              "type": "array",
              "maxItems": 1,
              "items": {
                "type": "string",
                "enum": [
                  "type",
                  "subtype",
                  "dataSetId"
                ]
              },
              "description": "The field name(s) to apply the aggregation on. Currently limited to one field.\n"
            }
          }
        },
        "EventFilterRequest": {
          "description": "Filter request for events. Filters exact field matching or timestamp ranges inclusive min and max.",
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/EventFilter"
                },
                "limit": {
                  "description": "<- Limits the maximum number of results to be returned by single request. In case there are more results to the request 'nextCursor' attribute will be provided as part of response. Request may contain less results than request limit.",
                  "type": "integer",
                  "format": "int32",
                  "minimum": 1,
                  "maximum": 1000,
                  "default": 100
                },
                "sort": {
                  "$ref": "#/components/schemas/SortSpecString"
                }
              }
            },
            {
              "$ref": "#/components/schemas/Cursor"
            },
            {
              "$ref": "#/components/schemas/PartitionObject"
            }
          ]
        },
        "SortSpecString": {
          "description": "Sort by array of selected fields. Syntax: `[\"<fieldname>:asc|desc\"]`. Default sort order is `asc` with short syntax: `[\"<fieldname>\"]`.\nFilter accepts the following field names: startTime, endTime, createdTime, lastUpdatedTime.\nPartitions are done independently of sorting, there is no guarantee on sort order between elements from different partitions.\n",
          "example": [
            "endTime:desc"
          ],
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "EventChange": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/EventChangeById"
            },
            {
              "$ref": "#/components/schemas/EventChangeByExternalId"
            }
          ]
        },
        "EventChangeById": {
          "allOf": [
            {
              "$ref": "#/components/schemas/EventPatch"
            },
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            }
          ]
        },
        "EventChangeByExternalId": {
          "allOf": [
            {
              "$ref": "#/components/schemas/EventPatch"
            },
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            }
          ]
        },
        "EventPatch": {
          "type": "object",
          "description": "Changes will be applied to event.",
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/SinglePatchExternalId"
                },
                "dataSetId": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "startTime": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "endTime": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "description": {
                  "$ref": "#/components/schemas/SinglePatchResourceDescription"
                },
                "metadata": {
                  "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.",
                  "allOf": [
                    {
                      "$ref": "#/components/schemas/ObjectPatchEvent"
                    }
                  ]
                },
                "assetIds": {
                  "$ref": "#/components/schemas/ArrayPatchLong"
                },
                "source": {
                  "$ref": "#/components/schemas/SinglePatchEventSource"
                },
                "type": {
                  "$ref": "#/components/schemas/SinglePatchEventType"
                },
                "subtype": {
                  "$ref": "#/components/schemas/SinglePatchEventSubType"
                }
              }
            }
          }
        },
        "SinglePatchEventType": {
          "title": "Type",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetEventType"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ]
        },
        "SinglePatchEventSubType": {
          "title": "SubType",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetEventSubType"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ]
        },
        "SinglePatchEventSource": {
          "title": "Source",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SetEventSource"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the source, or remove the value."
        },
        "ActiveAtTimeFilter": {
          "description": "Event is considered active from its startTime to endTime inclusive. If startTime is null, event is never active. If endTime is null, event is active from startTime onwards. activeAtTime filter will match all events that are active at some point from min to max, from min, or to max, depending on which of min and max parameters are specified.",
          "allOf": [
            {
              "$ref": "#/components/schemas/EpochTimestampRange"
            }
          ]
        },
        "EndTimeMinMax": {
          "$ref": "#/components/schemas/EpochTimestampRange"
        },
        "EndTimeIsNull": {
          "$ref": "#/components/schemas/IsNull"
        },
        "EndTimeFilter": {
          "description": "Either range between two timestamps or isNull filter condition.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            {
              "$ref": "#/components/schemas/IsNull"
            }
          ]
        },
        "EventFilter": {
          "description": "Filter on events filter with exact match",
          "type": "object",
          "properties": {
            "startTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "endTime": {
              "$ref": "#/components/schemas/EndTimeFilter"
            },
            "activeAtTime": {
              "$ref": "#/components/schemas/ActiveAtTimeFilter"
            },
            "metadata": {
              "$ref": "#/components/schemas/EventMetadata"
            },
            "assetIds": {
              "type": "array",
              "minItems": 1,
              "maxItems": 5000,
              "uniqueItems": true,
              "description": "Asset IDs of equipment that this event relates to.",
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              }
            },
            "assetExternalIds": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "maxItems": 5000,
              "description": "Asset External IDs of equipment that this event relates to.",
              "items": {
                "$ref": "#/components/schemas/CogniteExternalId"
              }
            },
            "rootAssetIds": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "maxItems": 100,
              "description": "This parameter is deprecated. Use assetSubtreeIds instead. Only include events that have a related asset in a tree rooted at any of these root assetIds.",
              "deprecated": true,
              "items": {
                "$ref": "#/components/schemas/AssetIdEither"
              }
            },
            "assetSubtreeIds": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "maxItems": 100,
              "description": "Only include events that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "items": {
                "$ref": "#/components/schemas/AssetIdEither"
              }
            },
            "dataSetIds": {
              "type": "array",
              "maxItems": 100,
              "uniqueItems": true,
              "items": {
                "$ref": "#/components/schemas/DataSetIdEither"
              }
            },
            "source": {
              "$ref": "#/components/schemas/EventSource"
            },
            "type": {
              "$ref": "#/components/schemas/EventType"
            },
            "subtype": {
              "$ref": "#/components/schemas/EventSubType"
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "externalIdPrefix": {
              "$ref": "#/components/schemas/CogniteExternalIdPrefix"
            }
          }
        },
        "EventSearch": {
          "type": "object",
          "properties": {
            "description": {
              "type": "string",
              "maxLength": 500,
              "description": "text to search in description field across events"
            }
          }
        },
        "EventSearchRequest": {
          "description": "Filter on events filter with exact match",
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/EventFilter"
            },
            "search": {
              "$ref": "#/components/schemas/EventSearch"
            },
            "limit": {
              "description": "<- Limits the maximum number of results to be returned by single request. Request may contain less results than request limit.",
              "type": "integer",
              "format": "int32",
              "minimum": 1,
              "maximum": 1000,
              "default": 100
            }
          }
        },
        "DataEventAggregate": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1,
              "items": {
                "$ref": "#/components/schemas/EventAggregate"
              }
            }
          }
        },
        "EventAggregate": {
          "description": "Aggregation group of events",
          "type": "object",
          "required": [
            "count"
          ],
          "properties": {
            "count": {
              "type": "integer",
              "description": "Size of the aggregation group",
              "format": "int64"
            }
          }
        },
        "EventResponse": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/DataEvent"
            }
          ]
        },
        "EventWithCursorResponse": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/DataWithCursorEvent"
            }
          ]
        },
        "FileInternalId": {
          "type": "object",
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          }
        },
        "FileExternalId": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          }
        },
        "FileIdEither": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/FileInternalId"
            },
            {
              "$ref": "#/components/schemas/FileExternalId"
            }
          ]
        },
        "FileName": {
          "type": "string",
          "description": "Name of the file.",
          "maxLength": 256
        },
        "FileDirectory": {
          "type": "string",
          "description": "Directory containing the file. Must be an absolute, unix-style path.",
          "maxLength": 512
        },
        "MimeType": {
          "maxLength": 256,
          "type": "string",
          "example": "image/jpeg",
          "description": "File type. E.g. text/plain, application/pdf, .."
        },
        "FileSource": {
          "maxLength": 128,
          "type": "string",
          "description": "The source of the file."
        },
        "ExternalFilesMetadata": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "name": {
              "$ref": "#/components/schemas/FileName"
            },
            "directory": {
              "$ref": "#/components/schemas/FileDirectory"
            },
            "source": {
              "$ref": "#/components/schemas/FileSource"
            },
            "mimeType": {
              "$ref": "#/components/schemas/MimeType"
            },
            "metadata": {
              "$ref": "#/components/schemas/FilesMetadataField"
            },
            "assetIds": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              },
              "maxItems": 1000,
              "minItems": 1
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetId"
            },
            "sourceCreatedTime": {
              "allOf": [
                {
                  "description": "The timestamp for when the file was originally created in the source system."
                },
                {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              ]
            },
            "sourceModifiedTime": {
              "allOf": [
                {
                  "description": "The timestamp for when the file was last modified in the source system."
                },
                {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              ]
            },
            "securityCategories": {
              "type": "array",
              "description": "The security category IDs required to access this file.",
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              },
              "maxItems": 100,
              "minItems": 0
            },
            "labels": {
              "$ref": "#/components/schemas/LabelList"
            },
            "geoLocation": {
              "$ref": "#/components/schemas/GeoLocation"
            }
          }
        },
        "FilesMetadata": {
          "allOf": [
            {
              "$ref": "#/components/schemas/ExternalFilesMetadata"
            },
            {
              "type": "object",
              "required": [
                "id",
                "uploaded",
                "createdTime",
                "lastUpdatedTime"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                },
                "uploaded": {
                  "type": "boolean",
                  "description": "Whether or not the actual file is uploaded.  This field is returned only by the API, it has no effect in a post body.",
                  "example": true
                },
                "uploadedTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              }
            }
          ]
        },
        "FilesSearchFilter": {
          "description": "Filter on files with exact match",
          "allOf": [
            {
              "$ref": "#/components/schemas/FileFilter"
            },
            {
              "type": "object",
              "properties": {
                "search": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "$ref": "#/components/schemas/FileName"
                    }
                  }
                }
              }
            }
          ]
        },
        "DataFileChange": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "items": {
                "$ref": "#/components/schemas/FileChangeUpdate"
              }
            }
          }
        },
        "FileChangeUpdate": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/FileChangeUpdateById"
            },
            {
              "$ref": "#/components/schemas/FileChangeUpdateByExternalId"
            }
          ]
        },
        "FileChangeUpdateById": {
          "allOf": [
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            },
            {
              "$ref": "#/components/schemas/FileChange"
            }
          ]
        },
        "FileChangeUpdateByExternalId": {
          "allOf": [
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            },
            {
              "$ref": "#/components/schemas/FileChange"
            }
          ]
        },
        "DataFileMetadata": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/FilesMetadata"
              }
            }
          }
        },
        "FileLink": {
          "type": "object",
          "properties": {
            "downloadUrl": {
              "type": "string"
            }
          }
        },
        "DataExternalFileMetadata": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExternalFilesMetadata"
              }
            }
          }
        },
        "FileDataIds": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/FileIdEither"
              },
              "maxItems": 1000,
              "minItems": 1
            }
          }
        },
        "FileDataIdsWithIgnoreUnknownIds": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "oneOf": [
                      {
                        "type": "object",
                        "title": "Select by Id",
                        "properties": {
                          "id": {
                            "$ref": "#/components/schemas/CogniteInternalId"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "Select by ExternalId",
                        "properties": {
                          "externalId": {
                            "$ref": "#/components/schemas/CogniteExternalId"
                          }
                        }
                      }
                    ]
                  },
                  "minItems": 1,
                  "maxItems": 1000
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "FileLinkIds": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/FileIdEither"
              },
              "maxItems": 100,
              "minItems": 1
            }
          }
        },
        "FileChange": {
          "type": "object",
          "description": "Changes will be applied to file.",
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "directory": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "source": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "mimeType": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "metadata": {
                  "allOf": [
                    {
                      "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240."
                    },
                    {
                      "$ref": "#/components/schemas/ObjectPatch"
                    }
                  ]
                },
                "assetIds": {
                  "allOf": [
                    {
                      "description": "Edit the set of assetIds for the file. Minimum 0, maximum 1000. See examples in the description for the updateFiles operation."
                    },
                    {
                      "$ref": "#/components/schemas/ArrayPatchLong"
                    }
                  ]
                },
                "sourceCreatedTime": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "sourceModifiedTime": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "dataSetId": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "securityCategories": {
                  "allOf": [
                    {
                      "description": "Edit the set of securityCategories for the file. Minimum 0, maximum 100. See examples in the description for the updateFiles operation."
                    },
                    {
                      "$ref": "#/components/schemas/ArrayPatchLong"
                    }
                  ]
                },
                "labels": {
                  "$ref": "#/components/schemas/LabelsPatch"
                },
                "geoLocation": {
                  "$ref": "#/components/schemas/SinglePatchGeoLocation"
                }
              }
            }
          }
        },
        "DataWithCursor": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/FilesMetadata"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "Cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next page of results"
        },
        "FilesMetadataField": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "FileFilterRequest": {
          "allOf": [
            {
              "$ref": "#/components/schemas/FileFilter"
            },
            {
              "$ref": "#/components/schemas/PartitionObject"
            },
            {
              "$ref": "#/components/schemas/FileLimit"
            },
            {
              "$ref": "#/components/schemas/Cursor"
            }
          ]
        },
        "FileFilter": {
          "description": "Filter on files with exact match",
          "type": "object",
          "properties": {
            "filter": {
              "type": "object",
              "properties": {
                "name": {
                  "$ref": "#/components/schemas/FileName"
                },
                "directoryPrefix": {
                  "description": "Filter by this (case-sensitive) prefix for the directory.",
                  "type": "string",
                  "maxLength": 512,
                  "example": "/my/known/directory"
                },
                "mimeType": {
                  "$ref": "#/components/schemas/MimeType"
                },
                "metadata": {
                  "$ref": "#/components/schemas/FilesMetadataField"
                },
                "assetIds": {
                  "$ref": "#/components/schemas/AssetIds"
                },
                "assetExternalIds": {
                  "$ref": "#/components/schemas/AssetExternalIds"
                },
                "rootAssetIds": {
                  "$ref": "#/components/schemas/RootAssetIds"
                },
                "dataSetIds": {
                  "type": "array",
                  "maxItems": 100,
                  "uniqueItems": true,
                  "description": "Only include files that belong to these datasets.",
                  "items": {
                    "$ref": "#/components/schemas/DataSetIdEither"
                  }
                },
                "assetSubtreeIds": {
                  "$ref": "#/components/schemas/AssetSubtreeIds"
                },
                "source": {
                  "maxLength": 128,
                  "type": "string",
                  "description": "The source of this event."
                },
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestampRange"
                },
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestampRange"
                },
                "uploadedTime": {
                  "$ref": "#/components/schemas/EpochTimestampRange"
                },
                "sourceCreatedTime": {
                  "allOf": [
                    {
                      "description": "Filter for files where the sourceCreatedTime field has been set and is within the specified range."
                    },
                    {
                      "$ref": "#/components/schemas/EpochTimestampRange"
                    }
                  ]
                },
                "sourceModifiedTime": {
                  "allOf": [
                    {
                      "description": "Filter for files where the sourceModifiedTime field has been set and is within the specified range."
                    },
                    {
                      "$ref": "#/components/schemas/EpochTimestampRange"
                    }
                  ]
                },
                "externalIdPrefix": {
                  "$ref": "#/components/schemas/CogniteExternalIdPrefix"
                },
                "uploaded": {
                  "description": "Whether or not the actual file is uploaded. This field is returned only by the API, it has no effect in a post body.",
                  "type": "boolean",
                  "example": true
                },
                "labels": {
                  "$ref": "#/components/schemas/LabelFilter"
                },
                "geoLocation": {
                  "$ref": "#/components/schemas/GeoLocationFilter"
                }
              }
            }
          }
        },
        "FileLimit": {
          "type": "object",
          "properties": {
            "limit": {
              "description": "<- Maximum number of items that the client want to get back.",
              "type": "integer",
              "format": "int32",
              "minimum": 1,
              "maximum": 1000,
              "default": 100
            }
          }
        },
        "AssetIds": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "uniqueItems": true,
          "description": "Only include files that reference these specific asset IDs.",
          "example": [
            363848954441724,
            793045462540095,
            1261042166839739
          ],
          "items": {
            "$ref": "#/components/schemas/CogniteInternalId"
          }
        },
        "AssetExternalIds": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "uniqueItems": true,
          "description": "Only include files that reference these specific asset external IDs.",
          "example": [
            "externalId1",
            "externalId2",
            "externalId3"
          ],
          "items": {
            "$ref": "#/components/schemas/CogniteExternalId"
          }
        },
        "RootAssetIds": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "uniqueItems": true,
          "description": "Only include files that have a related asset in a tree rooted at any of these root assetIds.",
          "example": [
            {
              "id": 123456789
            },
            {
              "externalId": "system 99 external Id 1234"
            }
          ],
          "items": {
            "$ref": "#/components/schemas/AssetIdEither"
          }
        },
        "AssetSubtreeIds": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "uniqueItems": true,
          "description": "Only include files that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
          "example": [
            {
              "id": 123456789
            },
            {
              "externalId": "system 99 external Id 1234"
            }
          ],
          "items": {
            "$ref": "#/components/schemas/AssetIdEither"
          }
        },
        "FilesAggregate": {
          "description": "Aggregation results for files",
          "type": "object",
          "required": [
            "count"
          ],
          "properties": {
            "count": {
              "type": "integer",
              "description": "Number of filtered items included in aggregation",
              "format": "int64",
              "minimum": 0
            }
          }
        },
        "DataFilesAggregate": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/FilesAggregate"
              }
            }
          }
        },
        "NextCursor": {
          "type": "string",
          "description": "Cursor to get the next page of results (if available)."
        },
        "NextCursorData": {
          "type": "object",
          "properties": {
            "nextCursor": {
              "$ref": "#/components/schemas/NextCursor"
            }
          }
        },
        "CreatedTime": {
          "type": "integer",
          "description": "The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC.",
          "format": "int64",
          "example": 0
        },
        "DataIdentifier": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          }
        },
        "DataIdentifiers": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "uniqueItems": true,
              "type": "array",
              "description": "List of ID objects",
              "items": {
                "$ref": "#/components/schemas/DataIdentifier"
              },
              "maxItems": 1000,
              "minItems": 1
            }
          }
        },
        "Model3D": {
          "type": "object",
          "required": [
            "name",
            "id",
            "createdTime"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the model.",
              "example": "My Model"
            },
            "id": {
              "type": "integer",
              "description": "The ID of the model.",
              "format": "int64",
              "example": 1000
            },
            "createdTime": {
              "$ref": "#/components/schemas/CreatedTime"
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetId"
            },
            "metadata": {
              "$ref": "#/components/schemas/Metadata3D"
            }
          }
        },
        "Model3DWithCursorResponse": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Model3DList"
            },
            {
              "$ref": "#/components/schemas/NextCursorData"
            }
          ]
        },
        "Model3DList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Model3D"
              }
            }
          }
        },
        "CreateModel3D": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 255,
              "description": "The name of the model.",
              "example": "My Model"
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetId"
            },
            "metadata": {
              "$ref": "#/components/schemas/Metadata3D"
            }
          }
        },
        "UpdateModel3D": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DataIdentifier"
            },
            {
              "type": "object",
              "properties": {
                "update": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "$ref": "#/components/schemas/SetModelNameField"
                    },
                    "dataSetId": {
                      "$ref": "#/components/schemas/SinglePatchDataSetId"
                    },
                    "metadata": {
                      "allOf": [
                        {
                          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs."
                        },
                        {
                          "$ref": "#/components/schemas/ObjectPatch"
                        }
                      ]
                    }
                  }
                }
              }
            }
          ]
        },
        "SetModelNameField": {
          "type": "object",
          "properties": {
            "set": {
              "type": "string",
              "minLength": 1,
              "maxLength": 255
            }
          }
        },
        "Revision3D": {
          "type": "object",
          "required": [
            "id",
            "fileId",
            "published",
            "status",
            "assetMappingCount",
            "createdTime"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The ID of the revision.",
              "format": "int64",
              "example": 1000
            },
            "fileId": {
              "type": "integer",
              "description": "The file id.",
              "format": "int64",
              "example": 1000
            },
            "published": {
              "type": "boolean",
              "description": "True if the revision is marked as published.",
              "default": false
            },
            "rotation": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "items": {
                "type": "number",
                "description": "Global rotation to be applied to the entire model. The rotation is expressed by Euler angles in radians and in XYZ order.",
                "format": "double"
              }
            },
            "camera": {
              "$ref": "#/components/schemas/RevisionCameraProperties"
            },
            "status": {
              "type": "string",
              "enum": [
                "Queued",
                "Processing",
                "Done",
                "Failed"
              ],
              "description": "The status of the revision.",
              "example": "Done"
            },
            "metadata": {
              "$ref": "#/components/schemas/Metadata3D"
            },
            "thumbnailThreedFileId": {
              "type": "integer",
              "description": "The threed file ID of a thumbnail for the revision. Use `/3d/files/{id}` to retrieve the file.",
              "format": "int64",
              "example": 1000
            },
            "thumbnailURL": {
              "type": "string",
              "description": "The URL of a thumbnail for the revision.",
              "example": "https://api.cognitedata.com/api/v1/project/myproject/3d/files/1000"
            },
            "assetMappingCount": {
              "type": "integer",
              "description": "The number of asset mappings for this revision.",
              "format": "int64",
              "example": 0
            },
            "createdTime": {
              "$ref": "#/components/schemas/CreatedTime"
            }
          }
        },
        "Metadata3D": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "NodeProperties3D": {
          "type": "object",
          "description": "Properties extracted from 3D model, with property categories containing key/value string pairs.",
          "example": {
            "category1": {
              "property1": "value1",
              "property2": "value2"
            },
            "category2": {
              "property1": "value1",
              "property2": "value2"
            }
          },
          "additionalProperties": {
            "description": "Property category.",
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          }
        },
        "Revision3DWithCursorResponse": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Revision3DList"
            },
            {
              "$ref": "#/components/schemas/NextCursorData"
            }
          ]
        },
        "Revision3DList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Revision3D"
              }
            }
          }
        },
        "CreateRevision3D": {
          "type": "object",
          "required": [
            "fileId"
          ],
          "properties": {
            "published": {
              "type": "boolean",
              "description": "True if the revision is marked as published.",
              "default": false
            },
            "rotation": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "items": {
                "type": "number",
                "description": "Global rotation to be applied to the entire model. The rotation is expressed by Euler angles in radians and in XYZ order.",
                "format": "double"
              }
            },
            "metadata": {
              "$ref": "#/components/schemas/Metadata3D"
            },
            "camera": {
              "$ref": "#/components/schemas/RevisionCameraProperties"
            },
            "fileId": {
              "type": "integer",
              "description": "The file id to a file uploaded to Cognite's Files API. Can only be set on revision creation, and can never be updated.",
              "format": "int64"
            }
          }
        },
        "UpdateRevision3D": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DataIdentifier"
            },
            {
              "type": "object",
              "properties": {
                "update": {
                  "type": "object",
                  "properties": {
                    "published": {
                      "type": "object",
                      "properties": {
                        "set": {
                          "type": "boolean",
                          "description": "True if the revision is marked as published."
                        }
                      }
                    },
                    "rotation": {
                      "$ref": "#/components/schemas/SetRevisionRotation"
                    },
                    "camera": {
                      "$ref": "#/components/schemas/SetRevisionCameraProperties"
                    },
                    "metadata": {
                      "allOf": [
                        {
                          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 32 bytes, value 512 bytes, up to 16 key-value pairs."
                        },
                        {
                          "$ref": "#/components/schemas/ObjectPatch"
                        }
                      ]
                    }
                  }
                }
              }
            }
          ]
        },
        "Versioned3DFile": {
          "description": "The file ID of the data file for this resource, with multiple versions supported. Use /3d/files/{id} to retrieve the file.",
          "type": "object",
          "required": [
            "version",
            "fileId"
          ],
          "properties": {
            "version": {
              "type": "integer",
              "description": "Version of the file format.",
              "format": "int64",
              "example": 1
            },
            "fileId": {
              "type": "integer",
              "description": "File ID. Use `/3d/files/{id}` to retrieve the file.",
              "format": "int64",
              "example": 1000
            }
          }
        },
        "RevisionCameraProperties": {
          "type": "object",
          "properties": {
            "target": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "description": "Initial camera target.",
              "items": {
                "type": "number",
                "format": "double"
              }
            },
            "position": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "description": "Initial camera position.",
              "items": {
                "type": "number",
                "format": "double"
              }
            }
          },
          "description": "Initial camera position and target."
        },
        "SetRevisionRotation": {
          "type": "object",
          "properties": {
            "set": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "items": {
                "type": "number",
                "description": "Global rotation to be applied to the entire model. The rotation is expressed by Euler angles in radians and in XYZ order.",
                "format": "double"
              }
            }
          }
        },
        "SetRevisionCameraProperties": {
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/RevisionCameraProperties"
            }
          }
        },
        "RevisionLog3D": {
          "type": "object",
          "required": [
            "timestamp",
            "severity",
            "type"
          ],
          "properties": {
            "timestamp": {
              "$ref": "#/components/schemas/CreatedTime"
            },
            "severity": {
              "type": "integer",
              "description": "How severe is the message (3 = INFO, 5 = WARN, 7 = ERROR).",
              "example": 7
            },
            "type": {
              "type": "string",
              "description": "Main computer parsable log entry type",
              "example": "CONVERTER/FAILED"
            },
            "info": {
              "type": "string",
              "description": "Optional extra information related to the log entry"
            }
          }
        },
        "RevisionLog3DResponse": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RevisionLog3D"
              }
            }
          }
        },
        "Node3D": {
          "type": "object",
          "required": [
            "id",
            "treeIndex",
            "depth",
            "name",
            "subtreeSize"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The ID of the node.",
              "format": "int64",
              "example": 1000
            },
            "treeIndex": {
              "type": "integer",
              "minimum": 0,
              "description": "The index of the node in the 3D model hierarchy, starting from 0. The tree is traversed in a depth-first order.",
              "format": "int64",
              "example": 3
            },
            "parentId": {
              "type": "integer",
              "description": "The parent of the node, null if it is the root node.",
              "format": "int64",
              "example": 2
            },
            "depth": {
              "type": "integer",
              "description": "The depth of the node in the tree, starting from 0 at the root node.",
              "format": "int64",
              "example": 2
            },
            "name": {
              "type": "string",
              "description": "The name of the node.",
              "example": "Node name"
            },
            "subtreeSize": {
              "type": "integer",
              "description": "The number of descendants of the node, plus one (counting itself).",
              "format": "int64",
              "example": 4
            },
            "properties": {
              "$ref": "#/components/schemas/NodeProperties3D"
            },
            "boundingBox": {
              "$ref": "#/components/schemas/BoundingBox3D"
            }
          }
        },
        "Node3DWithCursorResponse": {
          "allOf": [
            {
              "$ref": "#/components/schemas/Node3DList"
            },
            {
              "$ref": "#/components/schemas/NextCursorData"
            }
          ]
        },
        "Node3DList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Node3D"
              }
            }
          }
        },
        "Node3DIds": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Node3DId"
              },
              "maxItems": 1000,
              "minItems": 1
            }
          }
        },
        "Node3DId": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "description": "The ID of the node.",
              "format": "int64",
              "example": 1000
            }
          }
        },
        "BoundingBox3D": {
          "type": "object",
          "required": [
            "min",
            "max"
          ],
          "properties": {
            "max": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "items": {
                "type": "number",
                "description": "The maximal coordinates of the bounding box.",
                "format": "double"
              }
            },
            "min": {
              "maxItems": 3,
              "minItems": 3,
              "type": "array",
              "items": {
                "type": "number",
                "description": "The minimal coordinates of the bounding box.",
                "format": "double"
              }
            }
          },
          "description": "The bounding box of the subtree with this sector as the root sector. Is null if there are no geometries in the subtree."
        },
        "Node3DPropertyFilter": {
          "type": "object",
          "description": "Filters used in the search.",
          "properties": {
            "properties": {
              "type": "object",
              "description": "Contains one or more categories (namespaces), each of which contains one or more properties. Each property is associated with a list of values. The list of values acts as an OR-clause, so that if a node's corresponding property value equals ANY of the strings in the list, it satisfies the condition for that property. The different properties are concatenated with AND-operations, so that a node must satisfy the condition for ALL properties from all categories to be part of the returned set. The allowed number of property values is limited to 1000 values in total.",
              "example": {
                "PDMS": {
                  "Area": [
                    "AB76",
                    "AB77",
                    "AB78"
                  ],
                  "Type": [
                    "PIPE",
                    "BEND",
                    "PIPESUP"
                  ]
                }
              }
            }
          }
        },
        "Node3DFilterBody": {
          "description": "Filter request for nodes. Filters nodes with properties matching ones in a list of alternatives.",
          "allOf": [
            {
              "type": "object",
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/Node3DPropertyFilter"
                }
              }
            },
            {
              "$ref": "#/components/schemas/Limit"
            },
            {
              "$ref": "#/components/schemas/Cursor"
            },
            {
              "$ref": "#/components/schemas/PartitionObject"
            }
          ]
        },
        "Model3DOutputResponseList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "description": "A list of named and versioned outputs for the model. Note that the list is not sorted.",
              "type": "array",
              "items": {
                "type": "object",
                "required": [
                  "format",
                  "version",
                  "blobId"
                ],
                "properties": {
                  "format": {
                    "description": "Format identifier.",
                    "example": "ept-pointcloud",
                    "type": "string"
                  },
                  "version": {
                    "description": "Version of the output format, starting at 1.",
                    "example": 1,
                    "type": "integer"
                  },
                  "blobId": {
                    "description": "Reference to 3D file containing output. 3D file can either be a single file or folder. Use `/3d/files/{id}`.",
                    "allOf": [
                      {
                        "$ref": "#/components/schemas/CogniteInternalId"
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "AssetMapping3D": {
          "type": "object",
          "required": [
            "nodeId",
            "assetId",
            "treeIndex",
            "subtreeSize"
          ],
          "properties": {
            "nodeId": {
              "type": "integer",
              "description": "The ID of the node.",
              "format": "int64",
              "example": 1003
            },
            "assetId": {
              "type": "integer",
              "description": "The ID of the associated asset (Cognite's Assets API).",
              "format": "int64",
              "example": 3001
            },
            "treeIndex": {
              "type": "integer",
              "minimum": 0,
              "description": "A number describing the position of this node in the 3D hierarchy, starting from 0. The tree is traversed in a depth-first order.",
              "format": "int64",
              "example": 5
            },
            "subtreeSize": {
              "type": "integer",
              "description": "The number of nodes in the subtree of this node (this number included the node itself).",
              "format": "int64",
              "example": 7
            }
          }
        },
        "AssetMapping3DWithCursorResponse": {
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetMapping3DList"
            },
            {
              "$ref": "#/components/schemas/NextCursorData"
            }
          ]
        },
        "AssetMapping3DList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AssetMapping3D"
              }
            }
          }
        },
        "CreateAssetMapping3D": {
          "type": "object",
          "required": [
            "nodeId",
            "assetId"
          ],
          "properties": {
            "nodeId": {
              "type": "integer",
              "description": "The ID of the node.",
              "format": "int64",
              "example": 1003
            },
            "assetId": {
              "type": "integer",
              "description": "The ID of the associated asset (Cognite's Assets API).",
              "format": "int64",
              "example": 3001
            }
          }
        },
        "DeleteAssetMapping3D": {
          "type": "object",
          "required": [
            "nodeId",
            "assetId"
          ],
          "properties": {
            "nodeId": {
              "type": "integer",
              "description": "The ID of the node.",
              "format": "int64",
              "example": 1003
            },
            "assetId": {
              "type": "integer",
              "description": "The ID of the associated asset (Cognite's Assets API).",
              "format": "int64",
              "example": 3001
            }
          }
        },
        "AssetMapping3DFilterRequest": {
          "allOf": [
            {
              "$ref": "#/components/schemas/AssetMapping3DFilter"
            },
            {
              "$ref": "#/components/schemas/Cursor"
            }
          ]
        },
        "AssetMapping3DFilter": {
          "type": "object",
          "properties": {
            "filter": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/AssetMapping3DAssetFilter"
                },
                {
                  "$ref": "#/components/schemas/AssetMapping3DNodeFilter"
                },
                {
                  "$ref": "#/components/schemas/AssetMapping3DTreeIndexFilter"
                }
              ]
            },
            "limit": {
              "description": "Limits the number of results to return.",
              "type": "integer",
              "format": "int32",
              "minimum": 1,
              "maximum": 1000,
              "default": 100
            }
          }
        },
        "AssetMapping3DNodeFilter": {
          "type": "object",
          "required": [
            "nodeIds"
          ],
          "properties": {
            "nodeIds": {
              "type": "array",
              "minItems": 0,
              "maxItems": 100,
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "AssetMapping3DAssetFilter": {
          "type": "object",
          "required": [
            "assetIds"
          ],
          "properties": {
            "assetIds": {
              "type": "array",
              "minItems": 0,
              "maxItems": 100,
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "AssetMapping3DTreeIndexFilter": {
          "type": "object",
          "required": [
            "treeIndexes"
          ],
          "properties": {
            "treeIndexes": {
              "type": "array",
              "minItems": 0,
              "maxItems": 100,
              "items": {
                "type": "integer",
                "format": "int64"
              }
            }
          }
        },
        "UpdateRevision3DThumbnail": {
          "type": "object",
          "required": [
            "fileId"
          ],
          "properties": {
            "fileId": {
              "type": "integer",
              "description": "File ID of thumbnail file in Files API. _Only JPEG and PNG files are supported_.",
              "format": "int64"
            }
          },
          "description": "Request body for the updateModelRevisionThumbnail endpoint."
        },
        "TimeSeriesResponse": {
          "$ref": "#/components/schemas/DataGetTimeSeriesMetadataDTO"
        },
        "DatapointsInsertQuery": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 10000,
              "items": {
                "$ref": "#/components/schemas/DatapointsPostDatapoint"
              }
            }
          }
        },
        "DatapointsPostDatapoint": {
          "type": "object",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "DatapointsWithInternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DatapointsInsertProperties"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "DatapointsWithExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DatapointsInsertProperties"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "DatapointsInsertProperties": {
          "required": [
            "datapoints"
          ],
          "properties": {
            "datapoints": {
              "type": "array",
              "description": "The list of data points. The total number of data points in a single request is limited to 100000, across all time series.",
              "items": {
                "$ref": "#/components/schemas/PostDatapoint"
              }
            }
          }
        },
        "DatapointsMultiQuery": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/DatapointsQuery"
                  },
                  "minItems": 1,
                  "maxItems": 100
                },
                "start": {
                  "$ref": "#/components/schemas/TimestampOrStringStart"
                },
                "end": {
                  "$ref": "#/components/schemas/TimestampOrStringEnd"
                },
                "limit": {
                  "type": "integer",
                  "description": "Return up to this number of datapoints. The maximum is 100000 non-aggregated data points and 10000 aggregated data points in total across all queries in a single request.",
                  "format": "int32",
                  "default": 100
                },
                "aggregates": {
                  "type": "array",
                  "description": "Specify the aggregates to return, or an empty array if this sub-query should return datapoints without aggregation. This value overrides a top-level default aggregates list.",
                  "minItems": 0,
                  "maxItems": 10,
                  "uniqueItems": true,
                  "items": {
                    "$ref": "#/components/schemas/Aggregate"
                  }
                },
                "granularity": {
                  "type": "string",
                  "description": "The time granularity size and unit to aggregate over. Valid entries are 'day, hour, minute, second', or short forms 'd, h, m, s', or a multiple of these indicated by a number as a prefix. For 'second' and 'minute' the multiple must be an integer betwen 1 and 120 inclusive, for 'hour' and 'day' the multiple must be an integer between 1 and 100000 inclusive. For example, a granularity '5m' means that aggregates are calculated over 5 minutes. This field is required if aggregates are specified.",
                  "example": "1h"
                },
                "includeOutsidePoints": {
                  "type": "boolean",
                  "description": "Whether to include the last datapoint before the requested time period, and the first one after. This option is useful for interpolating data. It is not available for aggregates.",
                  "default": false
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "DatapointsQuery": {
          "type": "object",
          "description": "Parameters describing a query for datapoints.",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "QueryWithInternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DatapointsQueryProperties"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "QueryWithExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DatapointsQueryProperties"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "DatapointsQueryProperties": {
          "properties": {
            "start": {
              "$ref": "#/components/schemas/TimestampOrStringStart"
            },
            "end": {
              "$ref": "#/components/schemas/TimestampOrStringEnd"
            },
            "limit": {
              "type": "integer",
              "description": "Return up to this number of datapoints. The maximum is 100000 non-aggregated data points and 10000 aggregated data points in total across all queries in a single request.",
              "format": "int32"
            },
            "aggregates": {
              "type": "array",
              "description": "Specify the aggregates to return. Use default if null. If the default is a set of aggregates, specify an empty string to get raw data.",
              "minItems": 0,
              "maxItems": 10,
              "uniqueItems": true,
              "items": {
                "$ref": "#/components/schemas/Aggregate"
              }
            },
            "granularity": {
              "type": "string",
              "description": "The granularity size and granularity of the aggregates.",
              "example": "1h"
            },
            "includeOutsidePoints": {
              "type": "boolean",
              "description": "Whether to include the last datapoint before the requested time period,and the first one after. This option can be useful for interpolating data. It is not available for aggregates.",
              "default": false
            }
          }
        },
        "DatapointsLatestQuery": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "description": "List of latest queries",
                  "minItems": 1,
                  "maxItems": 100,
                  "items": {
                    "$ref": "#/components/schemas/LatestDataBeforeRequest"
                  }
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "LatestDataBeforeRequest": {
          "type": "object",
          "description": "Describes the latest query.",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "QueryWithInternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/LatestDataPropertyFilter"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "QueryWithExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/LatestDataPropertyFilter"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "LatestDataPropertyFilter": {
          "properties": {
            "before": {
              "type": "string",
              "description": "Get datapoints before this time. The format is N[timeunit]-ago where timeunit is w,d,h,m,s.\nExample: '2d-ago' gets data that is up to 2 days old. You can also specify time in milliseconds since epoch.",
              "default": "now"
            }
          }
        },
        "DatapointsDeleteQuery": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "description": "List of delete filters",
              "minItems": 1,
              "maxItems": 10000,
              "items": {
                "$ref": "#/components/schemas/DatapointsDeleteRequest"
              }
            }
          }
        },
        "DatapointsDeleteRequest": {
          "type": "object",
          "description": "Select time series and datapoints to delete.",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "QueryWithInternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DatapointsDeleteRange"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "QueryWithExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/DatapointsDeleteRange"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "DatapointsDeleteRange": {
          "required": [
            "inclusiveBegin"
          ],
          "properties": {
            "inclusiveBegin": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "exclusiveEnd": {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          }
        },
        "TimeSeriesLookupById": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "uniqueItems": true,
                  "type": "array",
                  "description": "List of ID objects",
                  "items": {
                    "oneOf": [
                      {
                        "type": "object",
                        "title": "QueryWithInternalId",
                        "properties": {
                          "id": {
                            "$ref": "#/components/schemas/CogniteInternalId"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "QueryWithExternalId",
                        "properties": {
                          "externalId": {
                            "$ref": "#/components/schemas/CogniteExternalId"
                          }
                        }
                      }
                    ]
                  },
                  "maxItems": 1000,
                  "minItems": 1
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "TimeSeriesUpdateRequest": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "items": {
                "$ref": "#/components/schemas/TimeSeriesUpdate"
              }
            }
          }
        },
        "TimeSeriesUpdate": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/TimeSeriesUpdateById"
            },
            {
              "$ref": "#/components/schemas/TimeSeriesUpdateByExternalId"
            }
          ]
        },
        "TimeSeriesUpdateById": {
          "allOf": [
            {
              "$ref": "#/components/schemas/TimeSeriesPatch"
            },
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            }
          ]
        },
        "TimeSeriesUpdateByExternalId": {
          "allOf": [
            {
              "$ref": "#/components/schemas/TimeSeriesPatch"
            },
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            }
          ]
        },
        "TimeSeriesPatch": {
          "type": "object",
          "description": "Changes will be applied to time series.",
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/NullableSinglePatchString"
                },
                "name": {
                  "$ref": "#/components/schemas/NullableSinglePatchString"
                },
                "metadata": {
                  "$ref": "#/components/schemas/ObjectPatch"
                },
                "unit": {
                  "$ref": "#/components/schemas/NullableSinglePatchString"
                },
                "assetId": {
                  "$ref": "#/components/schemas/NullableSinglePatchLong"
                },
                "isStep": {
                  "$ref": "#/components/schemas/SinglePatchBoolean"
                },
                "description": {
                  "$ref": "#/components/schemas/NullableSinglePatchString"
                },
                "securityCategories": {
                  "$ref": "#/components/schemas/ArrayPatchLong"
                },
                "dataSetId": {
                  "$ref": "#/components/schemas/NullableSinglePatchLong"
                }
              }
            }
          }
        },
        "Aggregate": {
          "type": "string",
          "enum": [
            "average",
            "max",
            "min",
            "count",
            "sum",
            "interpolation",
            "stepInterpolation",
            "totalVariation",
            "continuousVariance",
            "discreteVariance"
          ]
        },
        "TimeSeriesCursorResponse": {
          "$ref": "#/components/schemas/DataWithCursorGetTimeSeriesMetadataDTO"
        },
        "TimeSeriesCreateRequest": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "items": {
                "$ref": "#/components/schemas/PostTimeSeriesMetadataDTO"
              }
            }
          }
        },
        "DataGetTimeSeriesMetadataDTO": {
          "description": "List of responses. The order matches the requests order.",
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/GetTimeSeriesMetadataDTO"
              }
            }
          }
        },
        "PostDatapoint": {
          "oneOf": [
            {
              "required": [
                "timestamp",
                "value"
              ],
              "title": "NumericalDatapoint",
              "type": "object",
              "properties": {
                "timestamp": {
                  "minimum": 31536000000,
                  "maximum": 2556144000000,
                  "description": "The timestamp in milliseconds since the epoch (Jan 1, 1970). Must be between 1971 and 2050, inclusive"
                },
                "value": {
                  "type": "number",
                  "description": "The numerical data value of a numerical metric. Numerical data values can be in the range (-1e100, 1e100)"
                }
              }
            },
            {
              "required": [
                "timestamp",
                "value"
              ],
              "type": "object",
              "title": "StringDatapoint",
              "properties": {
                "timestamp": {
                  "minimum": 31536000000,
                  "maximum": 2556140400000,
                  "description": "The timestamp in milliseconds since the epoch (Jan 1, 1970). Must be between 1971 and 2050, inclusive"
                },
                "value": {
                  "maxLength": 255,
                  "type": "string",
                  "description": "The string data value of a string metric."
                }
              }
            }
          ]
        },
        "DataWithCursorGetTimeSeriesMetadataDTO": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 0,
              "items": {
                "$ref": "#/components/schemas/GetTimeSeriesMetadataDTO"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "The cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next page of result"
        },
        "PostTimeSeriesMetadataDTO": {
          "type": "object",
          "properties": {
            "externalId": {
              "maxLength": 255,
              "type": "string",
              "description": "Externally provided ID for the time series (optional, but recommended.)"
            },
            "name": {
              "maxLength": 255,
              "type": "string",
              "description": "Human readable name of the time series. This field is seperate from name field available through API versions 0.3-0.6."
            },
            "legacyName": {
              "deprecated": true,
              "maxLength": 255,
              "type": "string",
              "description": "This field is deprecated. Set a value for legacyName to allow applications using API v0.3, v04, v05, and v0.6 to access this time series. The legacy name is the human-readable name for the time series and is mapped to the name field used in API versions 0.3-0.6. The legacyName field value must be unique, and setting this value to an already existing value will return an error. We recommend that you set this field to the same value as externalId."
            },
            "isString": {
              "type": "boolean",
              "default": false,
              "description": "Whether the time series is string valued or not. (not updatable - its value cannot be changed after its initial assignment.)"
            },
            "metadata": {
              "$ref": "#/components/schemas/TimeSeriesMetadata"
            },
            "unit": {
              "maxLength": 32,
              "type": "string",
              "description": "The physical unit of the time series."
            },
            "assetId": {
              "description": "Asset ID of equipment linked to this time series.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              ]
            },
            "isStep": {
              "type": "boolean",
              "default": false,
              "description": "Whether the time series is a step series or not."
            },
            "description": {
              "maxLength": 1000,
              "type": "string",
              "description": "A description of the time series."
            },
            "securityCategories": {
              "type": "array",
              "description": "The required security categories to access this time series.",
              "items": {
                "type": "integer",
                "description": "The required security categories to access this time series.",
                "format": "int64"
              }
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetId"
            }
          }
        },
        "TimeSeriesAggregateResponse": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1,
              "items": {
                "type": "object",
                "required": [
                  "count"
                ],
                "title": "count",
                "description": "count of elements in the aggregation group",
                "properties": {
                  "count": {
                    "type": "integer",
                    "format": "int64",
                    "example": 137
                  }
                }
              }
            }
          }
        },
        "GetDatapointMetadata": {
          "type": "object",
          "required": [
            "timestamp"
          ],
          "properties": {
            "timestamp": {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          }
        },
        "GetStringDatapoint": {
          "allOf": [
            {
              "$ref": "#/components/schemas/GetDatapointMetadata"
            },
            {
              "type": "object",
              "required": [
                "value"
              ],
              "properties": {
                "value": {
                  "type": "string",
                  "description": "The data value."
                }
              }
            }
          ]
        },
        "GetDoubleDatapoint": {
          "allOf": [
            {
              "$ref": "#/components/schemas/GetDatapointMetadata"
            },
            {
              "type": "object",
              "required": [
                "value"
              ],
              "properties": {
                "value": {
                  "type": "number",
                  "description": "The data value."
                }
              }
            }
          ]
        },
        "GetAggregateDatapoint": {
          "allOf": [
            {
              "$ref": "#/components/schemas/GetDatapointMetadata"
            },
            {
              "type": "object",
              "properties": {
                "average": {
                  "type": "number",
                  "description": "The integral average value in the aggregate period.",
                  "format": "double"
                },
                "max": {
                  "type": "number",
                  "description": "The maximum value in the aggregate period.",
                  "format": "double"
                },
                "min": {
                  "type": "number",
                  "description": "The minimum value in the aggregate period.",
                  "format": "double"
                },
                "count": {
                  "type": "integer",
                  "description": "The number of datapoints in the aggregate period.",
                  "format": "int32"
                },
                "sum": {
                  "type": "number",
                  "description": "The sum of the datapoints in the aggregate period.",
                  "format": "double"
                },
                "interpolation": {
                  "type": "number",
                  "description": "The interpolated value of the series in the beginning of the aggregate.",
                  "format": "double"
                },
                "stepInterpolation": {
                  "type": "number",
                  "description": "The last value before or at the beginning of the aggregate.",
                  "format": "double"
                },
                "continuousVariance": {
                  "type": "number",
                  "description": "The variance of the interpolated underlying function.",
                  "format": "double"
                },
                "discreteVariance": {
                  "type": "number",
                  "description": "The variance of the datapoint values.",
                  "format": "double"
                },
                "totalVariation": {
                  "type": "number",
                  "description": "The total variation of the interpolated underlying function.",
                  "format": "double"
                }
              }
            }
          ]
        },
        "TimeSeriesMetadata": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, of total size of at most 10000 bytes across all keys and values.",
          "additionalProperties": {
            "type": "string"
          }
        },
        "GetTimeSeriesMetadataDTO": {
          "required": [
            "id",
            "isString",
            "isStep",
            "createdTime",
            "lastUpdatedTime"
          ],
          "type": "object",
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            },
            "externalId": {
              "maxLength": 255,
              "type": "string",
              "description": "The externally supplied ID for the time series."
            },
            "name": {
              "maxLength": 255,
              "type": "string",
              "description": "The display short name of the time series. Note: Value of this field can differ from name presented by older versions of API 0.3-0.6."
            },
            "isString": {
              "type": "boolean",
              "description": "Whether the time series is string valued or not."
            },
            "metadata": {
              "$ref": "#/components/schemas/TimeSeriesMetadata"
            },
            "unit": {
              "maxLength": 32,
              "type": "string",
              "description": "The physical unit of the time series."
            },
            "assetId": {
              "description": "Asset ID of equipment linked to this time series.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              ]
            },
            "isStep": {
              "type": "boolean",
              "description": "Whether the time series is a step series or not."
            },
            "description": {
              "maxLength": 1000,
              "type": "string",
              "description": "Description of the time series."
            },
            "securityCategories": {
              "type": "array",
              "description": "The required security categories to access this time series.",
              "items": {
                "type": "integer",
                "description": "Security categories required in order to access this time series.",
                "format": "int64"
              }
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetId"
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          }
        },
        "DatapointsMetadata": {
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            },
            "externalId": {
              "maxLength": 255,
              "type": "string",
              "description": "The external ID of the time series the datapoints belong to."
            }
          }
        },
        "DatapointsGetStringDatapoint": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DatapointsMetadata"
            },
            {
              "type": "object",
              "required": [
                "datapoints",
                "isString"
              ],
              "properties": {
                "isString": {
                  "description": "Whether the time series is string valued or not.",
                  "type": "boolean"
                },
                "unit": {
                  "maxLength": 32,
                  "type": "string",
                  "description": "The physical unit of the time series."
                },
                "datapoints": {
                  "type": "array",
                  "description": "The list of datapoints.",
                  "items": {
                    "$ref": "#/components/schemas/GetStringDatapoint"
                  }
                }
              }
            }
          ]
        },
        "DatapointsGetDoubleDatapoint": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DatapointsMetadata"
            },
            {
              "type": "object",
              "required": [
                "datapoints",
                "isString"
              ],
              "properties": {
                "isString": {
                  "description": "Whether the time series is string valued or not.",
                  "type": "boolean"
                },
                "isStep": {
                  "description": "Whether the time series is a step series or not.",
                  "type": "boolean"
                },
                "unit": {
                  "maxLength": 32,
                  "type": "string",
                  "description": "The physical unit of the time series."
                },
                "datapoints": {
                  "type": "array",
                  "description": "The list of datapoints",
                  "items": {
                    "$ref": "#/components/schemas/GetDoubleDatapoint"
                  }
                }
              }
            }
          ]
        },
        "DatapointsGetDatapoint": {
          "required": [
            "isString"
          ],
          "oneOf": [
            {
              "$ref": "#/components/schemas/DatapointsGetDoubleDatapoint"
            },
            {
              "$ref": "#/components/schemas/DatapointsGetStringDatapoint"
            }
          ],
          "discriminator": {
            "propertyName": "isString",
            "mapping": {
              "false": "#/components/schemas/DatapointsGetDoubleDatapoint",
              "true": "#/components/schemas/DatapointsGetStringDatapoint"
            }
          }
        },
        "DatapointsGetAggregateDatapoint": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DatapointsMetadata"
            },
            {
              "type": "object",
              "required": [
                "datapoints",
                "isString",
                "isStep"
              ],
              "properties": {
                "isString": {
                  "description": "Whether the time series is string valued or not (always false for aggregates).",
                  "type": "boolean",
                  "enum": [
                    false
                  ]
                },
                "isStep": {
                  "description": "Whether the time series is a step series or not.",
                  "type": "boolean"
                },
                "unit": {
                  "maxLength": 32,
                  "type": "string",
                  "description": "The physical unit of the time series."
                },
                "datapoints": {
                  "type": "array",
                  "description": "The list of datapoints",
                  "items": {
                    "$ref": "#/components/schemas/GetAggregateDatapoint"
                  }
                }
              }
            }
          ]
        },
        "DatapointsOrAggregatesResponse": {
          "description": "The list of responses. The order matches the requests order.",
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "oneOf": [
                  {
                    "$ref": "#/components/schemas/DatapointsGetAggregateDatapoint"
                  },
                  {
                    "$ref": "#/components/schemas/DatapointsGetDatapoint"
                  }
                ]
              }
            }
          }
        },
        "DatapointsResponse": {
          "type": "object",
          "description": "The list of responses. The order matches the requests order.",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DatapointsGetDatapoint"
              }
            }
          }
        },
        "Filter": {
          "type": "object",
          "properties": {
            "name": {
              "description": "Filter on name.",
              "type": "string"
            },
            "unit": {
              "description": "Filter on unit.",
              "type": "string"
            },
            "isString": {
              "description": "Filter on isString.",
              "type": "boolean"
            },
            "isStep": {
              "description": "Filter on isStep.",
              "type": "boolean"
            },
            "metadata": {
              "$ref": "#/components/schemas/TimeSeriesMetadata"
            },
            "assetIds": {
              "type": "array",
              "description": "Only include time series that reference these specific asset IDs.",
              "example": [
                363848954441724,
                793045462540095,
                1261042166839739
              ],
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              },
              "minItems": 1,
              "maxItems": 100,
              "uniqueItems": true
            },
            "assetExternalIds": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "maxItems": 100,
              "description": "Asset External IDs of related equipment that this time series relates to.",
              "items": {
                "$ref": "#/components/schemas/CogniteExternalId"
              }
            },
            "rootAssetIds": {
              "type": "array",
              "description": "Only include time series that have a related asset in a tree rooted at any of these root assetIds.",
              "example": [
                343099548723932,
                88483999203217
              ],
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              },
              "minItems": 1,
              "maxItems": 100,
              "uniqueItems": true
            },
            "assetSubtreeIds": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "maxItems": 100,
              "description": "Only include time series that are related to an asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "items": {
                "$ref": "#/components/schemas/AssetIdEither"
              }
            },
            "dataSetIds": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "maxItems": 100,
              "description": "Only include time series that reference these specific data set IDs.",
              "items": {
                "$ref": "#/components/schemas/DataSetIdEither"
              }
            },
            "externalIdPrefix": {
              "$ref": "#/components/schemas/CogniteExternalIdPrefix"
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            }
          }
        },
        "Search": {
          "type": "object",
          "properties": {
            "name": {
              "description": "Prefix and fuzzy search on name.",
              "type": "string"
            },
            "description": {
              "description": "Prefix and fuzzy search on description.",
              "type": "string"
            },
            "query": {
              "description": "Whitespace-separated terms to search for in time series. Does a\nbest-effort fuzzy search in relevant fields (currently name and\ndescription) for variations of any of the search terms, and\norders results by relevance. Uses a different search algorithm\nthan the name and description parameters, and will generally give\nmuch better results. Matching and ordering is not guaranteed to\nbe stable over time, and the fields being searched may be\nextended.",
              "type": "string",
              "example": "some other"
            }
          }
        },
        "TimeSeriesSearchDTO": {
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/Filter"
            },
            "search": {
              "$ref": "#/components/schemas/Search"
            },
            "limit": {
              "description": "Return up to this many results.",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 100
            }
          }
        },
        "TimeSeriesListDTO": {
          "description": "Filter request for time series. Filters exact field matching or timestamp ranges inclusive min and max.",
          "allOf": [
            {
              "type": "object",
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/Filter"
                },
                "limit": {
                  "description": "Return up to this many results.",
                  "maximum": 1000,
                  "minimum": 1,
                  "type": "integer",
                  "format": "int32",
                  "default": 100
                }
              }
            },
            {
              "$ref": "#/components/schemas/Cursor"
            },
            {
              "$ref": "#/components/schemas/PartitionObject"
            }
          ]
        },
        "TimeSeriesAggregateDTO": {
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/Filter"
            }
          }
        },
        "NullableSinglePatchLong": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "set"
              ],
              "properties": {
                "set": {
                  "type": "integer",
                  "format": "int64"
                }
              }
            },
            {
              "type": "object",
              "required": [
                "setNull"
              ],
              "properties": {
                "setNull": {
                  "type": "boolean",
                  "enum": [
                    true
                  ]
                }
              }
            }
          ],
          "description": "The change that will be applied to the key."
        },
        "NullableSinglePatchString": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "set"
              ],
              "properties": {
                "set": {
                  "type": "string"
                }
              }
            },
            {
              "type": "object",
              "required": [
                "setNull"
              ],
              "properties": {
                "setNull": {
                  "type": "boolean",
                  "enum": [
                    true
                  ]
                }
              }
            }
          ],
          "description": "The change that will be applied to the key."
        },
        "DuplicatedIdsInRequestResponse": {
          "type": "object",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "object",
              "description": "Error details",
              "required": [
                "code",
                "message",
                "duplicated"
              ],
              "properties": {
                "code": {
                  "type": "integer",
                  "description": "HTTP status code",
                  "format": "int32",
                  "example": 422
                },
                "message": {
                  "type": "string",
                  "description": "Error message"
                },
                "duplicated": {
                  "uniqueItems": true,
                  "type": "array",
                  "description": "Items that are duplicated.",
                  "items": {
                    "description": "Ids and ExternalIds that are duplicated in the request.",
                    "oneOf": [
                      {
                        "type": "object",
                        "required": [
                          "id"
                        ],
                        "properties": {
                          "id": {
                            "$ref": "#/components/schemas/CogniteInternalId"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "required": [
                          "externalId"
                        ],
                        "properties": {
                          "externalId": {
                            "$ref": "#/components/schemas/CogniteExternalId"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "ExternalIdsAlreadyExistResponse": {
          "type": "object",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "object",
              "description": "Error details",
              "required": [
                "code",
                "message",
                "duplicated"
              ],
              "properties": {
                "code": {
                  "type": "integer",
                  "description": "HTTP status code",
                  "format": "int32",
                  "example": 409
                },
                "message": {
                  "type": "string",
                  "description": "Error message"
                },
                "duplicated": {
                  "uniqueItems": true,
                  "type": "array",
                  "description": "Items that are duplicated.",
                  "items": {
                    "description": "ExternalIds that already exist.",
                    "type": "object",
                    "required": [
                      "externalId"
                    ],
                    "properties": {
                      "externalId": {
                        "$ref": "#/components/schemas/CogniteExternalId"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "NotFoundResponse": {
          "type": "object",
          "required": [
            "error"
          ],
          "properties": {
            "error": {
              "type": "object",
              "description": "Error details.",
              "required": [
                "code",
                "message",
                "missing"
              ],
              "properties": {
                "code": {
                  "type": "integer",
                  "description": "HTTP status code",
                  "format": "int32",
                  "example": 400
                },
                "message": {
                  "type": "string",
                  "description": "Error message."
                },
                "missing": {
                  "uniqueItems": true,
                  "type": "array",
                  "description": "Items that are not found.",
                  "items": {
                    "description": "Ids or ExternalIds that are not found.",
                    "oneOf": [
                      {
                        "type": "object",
                        "required": [
                          "id"
                        ],
                        "properties": {
                          "id": {
                            "$ref": "#/components/schemas/CogniteInternalId"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "required": [
                          "externalId"
                        ],
                        "properties": {
                          "externalId": {
                            "$ref": "#/components/schemas/CogniteExternalId"
                          }
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "SyntheticMultiQuery": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SyntheticQuery"
              },
              "minItems": 1,
              "maxItems": 10
            }
          }
        },
        "SyntheticQuery": {
          "type": "object",
          "description": "Synthetic query description",
          "required": [
            "expression"
          ],
          "properties": {
            "expression": {
              "type": "string",
              "description": "query definition. For limits, see the [guide to synthetic time series](/dev/concepts/resource_types/synthetic_timeseries.html#limits).",
              "example": "(5 + TS{externalId='hello'}) / TS{id=123, aggregate='average', granularity='1h'}"
            },
            "start": {
              "$ref": "#/components/schemas/TimestampOrStringStart"
            },
            "end": {
              "$ref": "#/components/schemas/TimestampOrStringEnd"
            },
            "limit": {
              "type": "integer",
              "description": "Return up to this number of datapoints",
              "format": "int32",
              "example": 100,
              "minimum": 1,
              "maximum": 10000
            }
          }
        },
        "SyntheticQueryResponses": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SyntheticQueryResponse"
              }
            }
          }
        },
        "SyntheticQueryResponse": {
          "type": "object",
          "required": [
            "datapoints"
          ],
          "properties": {
            "isString": {
              "type": "boolean",
              "example": false,
              "description": "whether the returned data points are of string type or floating point type. Currently it will always be false."
            },
            "datapoints": {
              "type": "array",
              "description": "list of data points",
              "items": {
                "$ref": "#/components/schemas/SyntheticDataPoint"
              }
            }
          }
        },
        "SyntheticDataPoint": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/SyntheticDataValue"
            },
            {
              "$ref": "#/components/schemas/SyntheticDataError"
            }
          ]
        },
        "SyntheticDataValue": {
          "type": "object",
          "required": [
            "timestamp",
            "value"
          ],
          "properties": {
            "timestamp": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "value": {
              "type": "number",
              "description": "the data value"
            }
          }
        },
        "SyntheticDataError": {
          "type": "object",
          "required": [
            "timestamp",
            "error"
          ],
          "properties": {
            "timestamp": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "error": {
              "type": "string",
              "description": "Human readable string with description of what went wrong",
              "example": "Error BAD_DOMAIN: Division by zero"
            }
          }
        },
        "DataRawDB": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDB"
              }
            }
          }
        },
        "DeleteRawDB": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDB"
              }
            },
            "recursive": {
              "type": "boolean",
              "description": "When true, tables of this database are deleted with the database.",
              "default": false
            }
          }
        },
        "DataRawDBRow": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDBRowInsert"
              }
            }
          }
        },
        "DataRawDBRowKey": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDBRowKey"
              }
            }
          }
        },
        "DataRawDBTable": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDBTable"
              }
            }
          }
        },
        "DataWithCursorRawDBRow": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDBRow"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "Cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next, or previous, page of results"
        },
        "DataWithCursorRawDBTable": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDBTable"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "Cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next, or previous, page of results"
        },
        "DataRawDBTableCursors": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "description": "A list of cursors"
        },
        "RawDBTable": {
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 64,
              "description": "Unique name of the table"
            }
          },
          "description": "A NoSQL database table to store customer data"
        },
        "RawRowCSV": {
          "type": "object",
          "properties": {
            "columnHeaders": {
              "type": "array",
              "description": "Headers for the different columns in the response.",
              "items": {
                "type": "string",
                "description": "Headers for the different columns in the response."
              }
            },
            "rows": {
              "type": "array",
              "description": "Rows of column values, in same order as columnHeaders.",
              "items": {
                "type": "array",
                "description": "Rows of column values, in same order as columnHeaders.",
                "items": {
                  "type": "object",
                  "description": "Rows of column values, in same order as columnHeaders."
                }
              }
            }
          },
          "description": "Raw row result written in CSV format, with column columnHeaders."
        },
        "DataWithCursorRawDB": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawDB"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "Cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next, or previous, page of results"
        },
        "RawDB": {
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 32,
              "description": "Unique name of a database."
            }
          },
          "description": "A NoSQL database to store customer data."
        },
        "RawDBRow": {
          "required": [
            "columns",
            "key",
            "lastUpdatedTime"
          ],
          "type": "object",
          "properties": {
            "key": {
              "type": "string",
              "description": "Unique row key"
            },
            "columns": {
              "type": "object",
              "description": "Row data stored as a JSON object."
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          }
        },
        "RawDBRowInsert": {
          "required": [
            "columns",
            "key"
          ],
          "type": "object",
          "properties": {
            "key": {
              "type": "string",
              "description": "Unique row key"
            },
            "columns": {
              "type": "object",
              "description": "Row data stored as a JSON object."
            }
          }
        },
        "RawDBRowKey": {
          "required": [
            "key"
          ],
          "type": "object",
          "properties": {
            "key": {
              "type": "string",
              "description": "Unique row key"
            }
          },
          "description": "A row key"
        },
        "DataSecurityCategorySpecDTO": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minLength": 1,
              "items": {
                "$ref": "#/components/schemas/SecurityCategorySpecDTO"
              }
            }
          }
        },
        "SecurityCategoryResponse": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SecurityCategoryDTO"
              }
            }
          }
        },
        "SecurityCategoryWithCursorResponse": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SecurityCategoryDTO"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "Cursor to get the next page of results (if available)."
            }
          },
          "description": "A list of objects along with possible cursors to get the next page of results"
        },
        "SecurityCategorySpecDTO": {
          "required": [
            "name"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Name of the security category",
              "example": "Guarded by vendor x"
            }
          }
        },
        "SecurityCategoryDTO": {
          "required": [
            "name",
            "id"
          ],
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Name of the security category",
              "example": "Guarded by vendor x"
            },
            "id": {
              "type": "integer",
              "description": "ID of the security category",
              "format": "int64"
            }
          }
        },
        "DataSetList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DataSet"
              }
            }
          }
        },
        "DataSetListWithCursor": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/DataSetList"
            },
            {
              "type": "object",
              "properties": {
                "nextCursor": {
                  "type": "string",
                  "description": "The cursor to get the next page of results (if available)."
                }
              }
            }
          ]
        },
        "DataSetAggregateRequest": {
          "description": "Aggregation request of data sets. Filters exact field matching or timestamp ranges inclusive min and max.",
          "allOf": [
            {
              "type": "object",
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/DataSetFilter"
                }
              }
            }
          ]
        },
        "DataSetFilter": {
          "description": "Filter on data sets with strict matching.",
          "type": "object",
          "properties": {
            "metadata": {
              "$ref": "#/components/schemas/DataSetMetadata"
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "externalIdPrefix": {
              "$ref": "#/components/schemas/CogniteExternalIdPrefix"
            },
            "writeProtected": {
              "type": "boolean"
            }
          }
        },
        "DataSetFilterRequest": {
          "allOf": [
            {
              "type": "object",
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/DataSetFilter"
                },
                "limit": {
                  "description": "Limits the number of results to return.",
                  "type": "integer",
                  "format": "int32",
                  "minimum": 1,
                  "maximum": 1000,
                  "default": 100
                }
              }
            },
            {
              "$ref": "#/components/schemas/Cursor"
            }
          ]
        },
        "DataSetSpecList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DataSetSpec"
              },
              "minItems": 1,
              "maxItems": 10
            }
          }
        },
        "DataSetUpdateList": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/DataSetUpdate"
              }
            }
          }
        },
        "DataSet": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DataSetSpec"
            },
            {
              "type": "object",
              "required": [
                "id",
                "createdTime",
                "lastUpdatedTime",
                "writeProtected"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                },
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              }
            }
          ]
        },
        "DataSetMetadata": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240.",
          "additionalProperties": {
            "type": "string",
            "maxLength": 10240
          },
          "x-maxKeyLength": 128,
          "x-maxTotalSize": 10240,
          "maxProperties": 256
        },
        "DataSetSpec": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "name": {
              "description": "The name of the data set.",
              "minLength": 1,
              "maxLength": 50,
              "type": "string"
            },
            "description": {
              "description": "The description of the data set.",
              "minLength": 1,
              "maxLength": 500,
              "type": "string"
            },
            "metadata": {
              "$ref": "#/components/schemas/DataSetMetadata"
            },
            "writeProtected": {
              "default": false,
              "type": "boolean",
              "description": "To write data to a write-protected data set, you need to be a member of a group that has the \"datasets:owner\" action for the data set.  To learn more about write-protected data sets, follow this [guide](/cdf/data_governance/concepts/datasets/#write-protection)"
            }
          }
        },
        "DataSetIdEitherList": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 1000,
                  "uniqueItems": true,
                  "items": {
                    "$ref": "#/components/schemas/DataSetIdEither"
                  }
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "DataSetUpdate": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/DataSetChangeById"
            },
            {
              "$ref": "#/components/schemas/DataSetChangeByExternalId"
            }
          ]
        },
        "DataSetChangeById": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DataSetPatch"
            },
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            }
          ]
        },
        "DataSetChangeByExternalId": {
          "allOf": [
            {
              "$ref": "#/components/schemas/DataSetPatch"
            },
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            }
          ]
        },
        "DataSetPatch": {
          "type": "object",
          "description": "Update applied to single data set",
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "name": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "description": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "metadata": {
                  "$ref": "#/components/schemas/ObjectPatchDataSet"
                },
                "writeProtected": {
                  "$ref": "#/components/schemas/SinglePatchBoolean"
                }
              }
            }
          }
        },
        "DataDataSetAggregate": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1,
              "items": {
                "$ref": "#/components/schemas/DataSetAggregate"
              }
            }
          }
        },
        "DataSetAggregate": {
          "description": "Aggregation group of data sets",
          "type": "object",
          "required": [
            "count"
          ],
          "properties": {
            "count": {
              "type": "integer",
              "description": "Size of the aggregation group",
              "format": "int64"
            }
          }
        },
        "SequenceWithCursorResponse": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/GetSequenceDTO"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "The cursor to get the next page of results (if available). Learn more [here](/dev/concepts/pagination/)."
            }
          }
        },
        "SequenceAggregateResponse": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1,
              "items": {
                "type": "object",
                "required": [
                  "count"
                ],
                "title": "count",
                "description": "count of elements in the aggregation group",
                "properties": {
                  "count": {
                    "type": "integer",
                    "format": "int64"
                  }
                }
              }
            }
          }
        },
        "DataResourceIds": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "oneOf": [
                  {
                    "type": "object",
                    "title": "Select by Id",
                    "properties": {
                      "id": {
                        "$ref": "#/components/schemas/CogniteInternalId"
                      }
                    }
                  },
                  {
                    "type": "object",
                    "title": "Select by ExternalId",
                    "properties": {
                      "externalId": {
                        "$ref": "#/components/schemas/CogniteExternalId"
                      }
                    }
                  }
                ]
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "DataResourceIdsWithIgnoreUnknownIds": {
          "type": "object",
          "allOf": [
            {
              "type": "object",
              "required": [
                "items"
              ],
              "properties": {
                "items": {
                  "type": "array",
                  "items": {
                    "oneOf": [
                      {
                        "type": "object",
                        "title": "Select by Id",
                        "properties": {
                          "id": {
                            "$ref": "#/components/schemas/CogniteInternalId"
                          }
                        }
                      },
                      {
                        "type": "object",
                        "title": "Select by ExternalId",
                        "properties": {
                          "externalId": {
                            "$ref": "#/components/schemas/CogniteExternalId"
                          }
                        }
                      }
                    ]
                  },
                  "minItems": 1,
                  "maxItems": 1000
                }
              }
            },
            {
              "$ref": "#/components/schemas/IgnoreUnknownIdsField"
            }
          ]
        },
        "DataGetSequence": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/GetSequenceDTO"
              }
            }
          }
        },
        "DataPostSequence": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PostSequenceDTO"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "DataSequenceDataDeleteRequest": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SequenceDeleteDataRequest"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "SequenceDataRequest": {
          "type": "object",
          "description": "Parameters describing a query for datapoints.",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "Select by Id",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceDataRequestDTO"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "Select by ExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceDataRequestDTO"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "SequenceLatestDataRequest": {
          "type": "object",
          "description": "Parameters describing a query for latest row in a Sequence.",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "Select by Id",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceLatestDataRequestDTO"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "Select by ExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceLatestDataRequestDTO"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "SequenceDeleteDataRequest": {
          "type": "object",
          "description": "Parameters describing datapoints to be deleted",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "Select by Id",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceDataDeleteRequestDTO"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "Select by ExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceDataDeleteRequestDTO"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ]
        },
        "DataSequencePostData": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SequencePostData"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          },
          "example": {
            "items": [
              {
                "externalId": "DL/DRILL412/20190103/T3",
                "columns": [
                  "Depth",
                  "DepthSource",
                  "PowerSetting"
                ],
                "rows": [
                  {
                    "rowNumber": 1,
                    "values": [
                      23331.3,
                      "s2",
                      61
                    ]
                  }
                ]
              }
            ]
          }
        },
        "DataSequenceChange": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SequencesUpdate"
              },
              "minItems": 1,
              "maxItems": 1000
            }
          }
        },
        "PostSequenceDTO": {
          "required": [
            "columns"
          ],
          "type": "object",
          "description": "Describes a new sequence",
          "properties": {
            "name": {
              "type": "string",
              "example": "Any relevant name",
              "description": "Name of the sequence"
            },
            "description": {
              "type": "string",
              "example": "Optional description",
              "description": "Description of the sequence"
            },
            "assetId": {
              "type": "integer",
              "example": 1221123111,
              "description": "Optional asset this sequence is associated with",
              "format": "int64"
            },
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "metadata": {
              "type": "object",
              "example": {
                "extracted-by": "cognite"
              },
              "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, up to a total size of 10000 bytes across all keys and values.",
              "additionalProperties": {
                "type": "string"
              }
            },
            "columns": {
              "type": "array",
              "description": "List of column definitions. Maximum number of numeric columns is 400. Maximum number of string columns is 200. Maximum total number of columns is 400.",
              "items": {
                "$ref": "#/components/schemas/PostSequenceColumnDTO"
              },
              "minItems": 1,
              "maxItems": 400
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetId"
            }
          }
        },
        "GetSequenceDTO": {
          "type": "object",
          "required": [
            "id",
            "columns",
            "createdTime",
            "lastUpdatedTime"
          ],
          "description": "Information about the sequence stored in the database",
          "properties": {
            "id": {
              "type": "integer",
              "description": "Unique cognite-provided identifier for the sequence",
              "example": 1,
              "format": "int64",
              "readOnly": true
            },
            "name": {
              "type": "string",
              "example": "Any relevant name",
              "description": "Name of the sequence"
            },
            "description": {
              "type": "string",
              "example": "Optional description",
              "description": "Description of the sequence"
            },
            "assetId": {
              "type": "integer",
              "example": 1221123111,
              "description": "Optional asset this sequence is associated with",
              "format": "int64"
            },
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "metadata": {
              "type": "object",
              "example": {
                "extracted-by": "cognite"
              },
              "description": "Custom, application specific metadata. String key -> String value. Limits: Maximum length of key is 128 bytes, up to 256 key-value pairs, up to a total size of 10000 bytes across all keys and values.",
              "additionalProperties": {
                "type": "string"
              }
            },
            "columns": {
              "type": "array",
              "description": "List of column definitions",
              "items": {
                "$ref": "#/components/schemas/GetSequenceColumnDTO"
              }
            },
            "createdTime": {
              "type": "integer",
              "example": 100000000000,
              "description": "Time when this sequence was created in CDF in milliseconds since Jan 1, 1970.",
              "format": "int64",
              "readOnly": true
            },
            "lastUpdatedTime": {
              "type": "integer",
              "example": 100000000000,
              "description": "The last time this sequence was updated in CDF, in milliseconds since Jan 1, 1970.",
              "format": "int64",
              "readOnly": true
            },
            "dataSetId": {
              "type": "integer",
              "format": "int64",
              "description": "Data set that this sequence belongs to",
              "example": 2718281828459
            }
          }
        },
        "PostSequenceColumnDTO": {
          "type": "object",
          "description": "Describes a new column",
          "required": [
            "externalId"
          ],
          "properties": {
            "name": {
              "type": "string",
              "example": "depth",
              "description": "Human readable name of the sequence"
            },
            "externalId": {
              "type": "string",
              "example": "DPS1",
              "maxLength": 255,
              "description": "User provided column identifier (Unique for a given sequence)"
            },
            "description": {
              "type": "string",
              "example": "Optional description",
              "description": "Description of the column"
            },
            "valueType": {
              "$ref": "#/components/schemas/SequenceValueTypeEnum"
            },
            "metadata": {
              "type": "object",
              "example": {
                "extracted-by": "cognite"
              },
              "description": "Custom, application specific metadata. String key -> String value",
              "additionalProperties": {
                "type": "string"
              }
            }
          }
        },
        "GetSequenceColumnDTO": {
          "type": "object",
          "required": [
            "id",
            "valueType",
            "createdTime",
            "lastUpdatedTime"
          ],
          "description": "Information about a column stored in the database",
          "properties": {
            "name": {
              "type": "string",
              "example": "depth",
              "description": "Human readable name of the column"
            },
            "externalId": {
              "type": "string",
              "example": "DPS1",
              "description": "User provided column identifier (Unique for a given sequence)"
            },
            "description": {
              "type": "string",
              "example": "Optional description",
              "description": "Description of the column"
            },
            "valueType": {
              "$ref": "#/components/schemas/SequenceValueTypeEnum"
            },
            "metadata": {
              "type": "object",
              "example": {
                "extracted-by": "cognite"
              },
              "description": "Custom, application specific metadata. String key -> String value",
              "additionalProperties": {
                "type": "string"
              }
            },
            "createdTime": {
              "type": "integer",
              "example": 100000000000,
              "description": "Time when this asset was created in CDF in milliseconds since Jan 1, 1970.",
              "format": "int64",
              "readOnly": true
            },
            "lastUpdatedTime": {
              "type": "integer",
              "example": 100000000000,
              "description": "The last time this asset was updated in CDF, in milliseconds since Jan 1, 1970.",
              "format": "int64",
              "readOnly": true
            }
          }
        },
        "SequenceDataRequestDTO": {
          "type": "object",
          "description": "A request for datapoints stored",
          "properties": {
            "start": {
              "type": "integer",
              "description": "Lowest row number included.",
              "default": 0,
              "format": "int64"
            },
            "end": {
              "type": "integer",
              "description": "Get rows up to, but excluding, this row number. Default - No limit",
              "example": 1,
              "format": "int64"
            },
            "limit": {
              "type": "integer",
              "description": "Maximum number of rows returned in one request. Api might return less even if there is more data, but it will then provide a cursor for continuation. If there is more data beyond this limit, a cursor will be returned to simplify further fetching of data.",
              "minimum": 1,
              "maximum": 10000,
              "default": 100,
              "example": 1,
              "format": "int32"
            },
            "cursor": {
              "type": "string",
              "description": "Cursor for pagination returned from a previous request. Apart from this cursor, the rest of the request object have be the same as for the original request."
            },
            "columns": {
              "type": "array",
              "description": "Columns to be included. Specified as list of column externalIds. In case this filter is not set, all available columns will be returned.",
              "items": {
                "type": "string"
              },
              "minItems": 1,
              "maxItems": 400
            }
          }
        },
        "SequenceLatestDataRequestDTO": {
          "type": "object",
          "description": "A request for latest row",
          "properties": {
            "columns": {
              "type": "array",
              "description": "Columns to be included. Specified as list of column externalIds. In case this filter is not set, all available columns will be returned.",
              "items": {
                "type": "string"
              },
              "minItems": 1,
              "maxItems": 400
            },
            "before": {
              "type": "integer",
              "description": "Get rows up to but not including this row number.",
              "minimum": 1,
              "format": "int64"
            }
          }
        },
        "SequenceDataDeleteRequestDTO": {
          "type": "object",
          "required": [
            "rows"
          ],
          "description": "rows to delete from a sequence",
          "properties": {
            "rows": {
              "type": "array",
              "items": {
                "type": "integer",
                "example": 1,
                "format": "int64"
              },
              "minItems": 1,
              "maxItems": 10000
            }
          }
        },
        "SequenceGetData": {
          "type": "object",
          "required": [
            "id",
            "columns",
            "rows"
          ],
          "description": "Data from a sequence",
          "properties": {
            "id": {
              "$ref": "#/components/schemas/CogniteInternalId"
            },
            "externalId": {
              "$ref": "#/components/schemas/CogniteExternalId"
            },
            "columns": {
              "type": "array",
              "description": "Column information in order given by data",
              "items": {
                "$ref": "#/components/schemas/BasicGetSequenceColumnInfo"
              }
            },
            "rows": {
              "type": "array",
              "description": "List of row information",
              "items": {
                "$ref": "#/components/schemas/SequenceRowDTO"
              }
            }
          },
          "example": {
            "id": 1112,
            "externalId": "DL/DRILL412/20190103/T3",
            "columns": [
              {
                "externalId": "Depth"
              },
              {
                "externalId": "DepthSource"
              },
              {
                "externalId": "PowerSetting"
              }
            ],
            "rows": [
              {
                "rowNumber": 1,
                "values": [
                  23331.3,
                  "s2",
                  61
                ]
              }
            ]
          }
        },
        "SequenceGetDataWithCursor": {
          "allOf": [
            {
              "$ref": "#/components/schemas/SequenceGetData"
            },
            {
              "properties": {
                "nextCursor": {
                  "type": "string",
                  "description": "Cursor to get the next page of results (if available)."
                }
              }
            }
          ]
        },
        "SequencePostData": {
          "type": "object",
          "oneOf": [
            {
              "required": [
                "id"
              ],
              "title": "Select by Id",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceDataInsertion"
                },
                {
                  "properties": {
                    "id": {
                      "$ref": "#/components/schemas/CogniteInternalId"
                    }
                  }
                }
              ]
            },
            {
              "required": [
                "externalId"
              ],
              "title": "Select by ExternalId",
              "allOf": [
                {
                  "$ref": "#/components/schemas/SequenceDataInsertion"
                },
                {
                  "properties": {
                    "externalId": {
                      "$ref": "#/components/schemas/CogniteExternalId"
                    }
                  }
                }
              ]
            }
          ],
          "example": {
            "externalId": "DL/DRILL412/20190103/T3",
            "columns": [
              "Depth",
              "DepthSource",
              "PowerSetting"
            ],
            "rows": [
              {
                "rowNumber": 1,
                "values": [
                  23331.3,
                  "s2",
                  61
                ]
              }
            ]
          }
        },
        "SequenceDataInsertion": {
          "type": "object",
          "required": [
            "columns",
            "rows"
          ],
          "description": "Data from a sequence",
          "properties": {
            "columns": {
              "type": "array",
              "description": "Column external ids in the same order as the values for each row",
              "items": {
                "type": "string"
              },
              "minItems": 1,
              "maxItems": 200
            },
            "rows": {
              "type": "array",
              "description": "List of row information",
              "items": {
                "$ref": "#/components/schemas/SequenceRowDTO"
              },
              "minItems": 1,
              "maxItems": 10000
            }
          }
        },
        "BasicGetSequenceColumnInfo": {
          "type": "object",
          "description": "Column information returned on data requests",
          "properties": {
            "externalId": {
              "type": "string",
              "example": "DPS1",
              "description": "User provided column identifier (Unique for a given sequence)"
            },
            "name": {
              "type": "string",
              "example": "Depth sensor 1",
              "description": "Human readable name of the column"
            },
            "valueType": {
              "$ref": "#/components/schemas/SequenceValueTypeEnum"
            }
          }
        },
        "SequenceRowDTO": {
          "type": "object",
          "description": "A single row of datapoints",
          "required": [
            "rowNumber",
            "values"
          ],
          "properties": {
            "rowNumber": {
              "type": "integer",
              "description": "The row number for this row",
              "example": 1,
              "minimum": 0,
              "format": "int64"
            },
            "values": {
              "type": "array",
              "description": "List of values in order defined in the columns field (Number of items must match. Null is accepted for missing values. String values must be no longer than 256 characters)",
              "items": {
                "$ref": "#/components/schemas/SequenceItemDTO"
              },
              "minItems": 1,
              "maxItems": 400
            }
          }
        },
        "SequenceItemDTO": {
          "oneOf": [
            {
              "type": "number",
              "description": "Json element of type corresponding to the column type. May include NULL!",
              "example": 10000.123
            },
            {
              "type": "string",
              "description": "Json element of type corresponding to the column type. May include NULL!",
              "example": "ON"
            }
          ]
        },
        "SequencesUpdate": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/SequencesUpdateById"
            },
            {
              "$ref": "#/components/schemas/SequencesUpdateByExternalId"
            }
          ]
        },
        "SequencesUpdateById": {
          "title": "Select by Id",
          "allOf": [
            {
              "$ref": "#/components/schemas/SequenceChangeDTO"
            },
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            }
          ]
        },
        "SequencesUpdateByExternalId": {
          "title": "Select by ExternalId",
          "allOf": [
            {
              "$ref": "#/components/schemas/SequenceChangeDTO"
            },
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            }
          ]
        },
        "SequenceChangeDTO": {
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "description": "A description of changes that should be done to the sequence",
              "properties": {
                "name": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "description": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "assetId": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "externalId": {
                  "$ref": "#/components/schemas/SinglePatchString"
                },
                "metadata": {
                  "$ref": "#/components/schemas/ObjectPatch"
                },
                "dataSetId": {
                  "$ref": "#/components/schemas/SinglePatchLong"
                },
                "columns": {
                  "$ref": "#/components/schemas/SequenceColumnChangeDTO"
                }
              }
            }
          }
        },
        "SequenceColumnChangeDTO": {
          "description": "Add, remove, or modify sequence columns. After update, numeric and deleted columns should be <= 400, string and deleted columns should be <= 200, numeric and string and deleted columns should be <= 400",
          "properties": {
            "modify": {
              "type": "array",
              "description": "List of single column updates",
              "items": {
                "description": "Modify a single sequence column by column externalId",
                "required": [
                  "externalId",
                  "update"
                ],
                "properties": {
                  "externalId": {
                    "$ref": "#/components/schemas/CogniteExternalId"
                  },
                  "update": {
                    "type": "object",
                    "description": "Modifications to apply to single column",
                    "properties": {
                      "description": {
                        "$ref": "#/components/schemas/SinglePatchString"
                      },
                      "externalId": {
                        "$ref": "#/components/schemas/SinglePatchRequiredString"
                      },
                      "name": {
                        "$ref": "#/components/schemas/SinglePatchString"
                      },
                      "metadata": {
                        "$ref": "#/components/schemas/ObjectPatch"
                      }
                    }
                  }
                }
              }
            },
            "add": {
              "type": "array",
              "description": "List of column definitions to add",
              "items": {
                "$ref": "#/components/schemas/PostSequenceColumnDTO"
              }
            },
            "remove": {
              "type": "array",
              "description": "List of columns to remove",
              "items": {
                "type": "object",
                "required": [
                  "externalId"
                ],
                "properties": {
                  "externalId": {
                    "$ref": "#/components/schemas/CogniteExternalId"
                  }
                }
              }
            }
          }
        },
        "SequenceFilter": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Return only sequences with this *exact* name."
            },
            "externalIdPrefix": {
              "$ref": "#/components/schemas/CogniteExternalIdPrefix"
            },
            "metadata": {
              "description": "Filter the sequences by metadata fields and values (case-sensitive). Format is {\"key1\":\"value1\",\"key2\":\"value2\"}.",
              "example": {
                "key1": "value1",
                "key2": "value2"
              },
              "type": "object"
            },
            "assetIds": {
              "type": "array",
              "description": "Return only sequences linked to one of the specified assets.",
              "example": [
                363848954441724,
                793045462540095,
                1261042166839739
              ],
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              },
              "minItems": 1,
              "maxItems": 100,
              "uniqueItems": true
            },
            "rootAssetIds": {
              "type": "array",
              "description": "Only include sequences that have a related asset in a tree rooted at any of these root assetIds.",
              "example": [
                363848954441724,
                793045462540095,
                1261042166839739
              ],
              "items": {
                "$ref": "#/components/schemas/CogniteInternalId"
              },
              "minItems": 1,
              "maxItems": 100,
              "uniqueItems": true
            },
            "assetSubtreeIds": {
              "type": "array",
              "description": "Only include sequences that have a related asset in a subtree rooted at any of these assetIds (including the roots given). If the total size of the given subtrees exceeds 100,000 assets, an error will be returned.",
              "example": [
                {
                  "id": 1234567890
                },
                {
                  "externalId": "externalId123"
                }
              ],
              "items": {
                "$ref": "#/components/schemas/AssetIdEither"
              },
              "minItems": 1,
              "maxItems": 100,
              "uniqueItems": true
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "dataSetIds": {
              "type": "array",
              "maxItems": 100,
              "uniqueItems": true,
              "description": "Only include sequences that belong to these datasets.",
              "items": {
                "$ref": "#/components/schemas/DataSetIdEither"
              }
            }
          }
        },
        "SequenceSearch": {
          "type": "object",
          "properties": {
            "name": {
              "description": "Prefix and fuzzy search on name.",
              "type": "string"
            },
            "description": {
              "description": "Prefix and fuzzy search on description.",
              "type": "string"
            },
            "query": {
              "description": "Search on name and description using wildcard search on each of the words (separated by spaces). Retrieves results where at least one word must match. Example: '*some* *other*'",
              "type": "string"
            }
          }
        },
        "SequencesSearchDTO": {
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/SequenceFilter"
            },
            "search": {
              "$ref": "#/components/schemas/SequenceSearch"
            },
            "limit": {
              "description": "Return up to this many results.",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer",
              "format": "int32",
              "default": 100
            }
          }
        },
        "SequencesAdvancedListDTO": {
          "allOf": [
            {
              "type": "object",
              "properties": {
                "filter": {
                  "$ref": "#/components/schemas/SequenceFilter"
                },
                "limit": {
                  "description": "Return up to this many results per page.",
                  "maximum": 1000,
                  "minimum": 1,
                  "type": "integer",
                  "format": "int32",
                  "default": 100
                }
              }
            },
            {
              "$ref": "#/components/schemas/Cursor"
            },
            {
              "$ref": "#/components/schemas/PartitionObject"
            }
          ]
        },
        "SequencesAggregateDTO": {
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/SequenceFilter"
            }
          }
        },
        "SequenceValueTypeEnum": {
          "type": "string",
          "description": "What type the datapoints in a column will have. DOUBLE is restricted to the range [-1E100, 1E100]",
          "default": "DOUBLE",
          "enum": [
            "STRING",
            "DOUBLE",
            "LONG"
          ]
        },
        "fetchResources": {
          "description": "If true,\nwill try to fetch the resources referred to in the relationship,\nbased on the users access rights.\nWill silently fail to attatch the resources if the user lacks access to some of them.\n",
          "type": "boolean",
          "default": false
        },
        "relationshipExternalId": {
          "type": "string",
          "minLength": 1,
          "maxLength": 255,
          "description": "The external ID of the relationship."
        },
        "resourceExternalId": {
          "type": "string",
          "minLength": 1,
          "maxLength": 255
        },
        "externalIdObject": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/relationshipExternalId"
            }
          },
          "required": [
            "externalId"
          ]
        },
        "persistedObject": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/relationshipExternalId"
            },
            "createdTime": {
              "description": "The time, in milliseconds since Jan. 1, 1970, when the relationship was created.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              ]
            },
            "lastUpdatedTime": {
              "description": "The time, in milliseconds since Jan. 1, 1970, when the relationship was last updated.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/EpochTimestamp"
                }
              ]
            }
          },
          "required": [
            "externalId",
            "createdTime",
            "lastUpdatedTime"
          ]
        },
        "enrichedRelationship": {
          "type": "object",
          "properties": {
            "source": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Asset"
                },
                {
                  "$ref": "#/components/schemas/GetTimeSeriesMetadataDTO"
                },
                {
                  "$ref": "#/components/schemas/Event"
                },
                {
                  "$ref": "#/components/schemas/FilesMetadata"
                },
                {
                  "$ref": "#/components/schemas/GetSequenceDTO"
                }
              ]
            },
            "target": {
              "oneOf": [
                {
                  "$ref": "#/components/schemas/Asset"
                },
                {
                  "$ref": "#/components/schemas/GetTimeSeriesMetadataDTO"
                },
                {
                  "$ref": "#/components/schemas/Event"
                },
                {
                  "$ref": "#/components/schemas/FilesMetadata"
                },
                {
                  "$ref": "#/components/schemas/GetSequenceDTO"
                }
              ]
            }
          }
        },
        "generalErrorWrapper": {
          "type": "object",
          "required": [
            "error"
          ],
          "description": "Error wrapper Error message",
          "properties": {
            "error": {
              "$ref": "#/components/schemas/generalError"
            }
          }
        },
        "generalError": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "description": "Cognite API error",
          "properties": {
            "code": {
              "type": "integer",
              "description": "HTTP status code",
              "format": "int32",
              "example": 409
            },
            "message": {
              "type": "string",
              "description": "Error message",
              "example": "Could not authenticate."
            },
            "missing": {
              "type": "array",
              "description": "List of lookup objects that do not match any results.",
              "items": {
                "type": "object",
                "additionalProperties": true
              }
            },
            "duplicated": {
              "type": "array",
              "description": "List of objects that are not unique.",
              "items": {
                "type": "object",
                "additionalProperties": true
              }
            }
          }
        },
        "resourceType": {
          "type": "string",
          "enum": [
            "asset",
            "timeSeries",
            "file",
            "event",
            "sequence"
          ]
        },
        "resourceReferenceWithExternalId": {
          "type": "object",
          "required": [
            "resource",
            "resourceId"
          ],
          "properties": {
            "type": {
              "$ref": "#/components/schemas/resourceType"
            },
            "externalId": {
              "$ref": "#/components/schemas/resourceExternalId"
            }
          }
        },
        "confidence": {
          "description": "Confidence value of the existence of the relationship. Generated relationships provide a score of the likelihood of the relationship existing. Relationships without a confidence value can be interpreted at the discretion of each project.",
          "type": "number",
          "format": "float",
          "minimum": 0,
          "maximum": 1
        },
        "dataSetId": {
          "description": "The ID of the dataset the relationship belongs to.",
          "allOf": [
            {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          ]
        },
        "relationship": {
          "description": "The representation of a relationship consists of a source and a target and additional parameters.",
          "type": "object",
          "required": [
            "externalId",
            "sourceExternalId",
            "sourceType",
            "targetExternalId",
            "targetType"
          ],
          "properties": {
            "externalId": {
              "description": "External ID of the relationship, must be unique within the project.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/relationshipExternalId"
                }
              ]
            },
            "sourceExternalId": {
              "$ref": "#/components/schemas/sourceExternalId"
            },
            "sourceType": {
              "$ref": "#/components/schemas/sourceType"
            },
            "targetExternalId": {
              "$ref": "#/components/schemas/targetExternalId"
            },
            "targetType": {
              "$ref": "#/components/schemas/targetType"
            },
            "startTime": {
              "$ref": "#/components/schemas/startTime"
            },
            "endTime": {
              "$ref": "#/components/schemas/endTime"
            },
            "confidence": {
              "$ref": "#/components/schemas/confidence"
            },
            "dataSetId": {
              "$ref": "#/components/schemas/dataSetId"
            },
            "labels": {
              "$ref": "#/components/schemas/LabelList"
            }
          }
        },
        "sourceExternalId": {
          "description": "The external ID of the resource that is the relationship source.",
          "allOf": [
            {
              "$ref": "#/components/schemas/resourceExternalId"
            }
          ]
        },
        "sourceType": {
          "description": "The resource type of the relationship source. Must be one of the specified values.",
          "allOf": [
            {
              "$ref": "#/components/schemas/resourceType"
            }
          ]
        },
        "targetExternalId": {
          "description": "The external ID of the resource that is the relationship target.",
          "allOf": [
            {
              "$ref": "#/components/schemas/relationshipExternalId"
            }
          ]
        },
        "targetType": {
          "description": "The resource type of the relationship target. Must be one of the specified values.",
          "allOf": [
            {
              "$ref": "#/components/schemas/resourceType"
            }
          ]
        },
        "startTime": {
          "description": "The time, in milliseconds since Jan. 1, 1970, when the relationship became active. If there is no startTime, the relationship is active from the beginning of time until endTime.",
          "allOf": [
            {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          ]
        },
        "endTime": {
          "description": "The time, in milliseconds since Jan. 1, 1970, when the relationship became inactive. If there is no endTime, the relationship is active from startTime until the present or any point in the future. If endTime and startTime are set, the endTime must be greater than startTime.",
          "allOf": [
            {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          ]
        },
        "updateSourceType": {
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/sourceType"
            }
          },
          "description": "Set a new value for the relationship source type."
        },
        "updateSourceExternalId": {
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/sourceExternalId"
            }
          },
          "description": "Set a new value for the relationship source external ID."
        },
        "updateTargetType": {
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/targetType"
            }
          },
          "description": "Set a new value for the relationship target type."
        },
        "updateTargetExternalId": {
          "type": "object",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/targetExternalId"
            }
          },
          "description": "Set a new value for the relationship target external ID."
        },
        "updateConfidence": {
          "title": "updateConfidence",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/setConfidence"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the confidence, or remove the value."
        },
        "setConfidence": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/confidence"
            }
          }
        },
        "updateStartTime": {
          "title": "updateStartTime",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/setStartTime"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the start time, or remove the value."
        },
        "setStartTime": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/startTime"
            }
          }
        },
        "updateEndTime": {
          "title": "updateEndTime",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/setEndTime"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ]
        },
        "updateDataSetId": {
          "title": "updateDataSetId",
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/setDataSetId"
            },
            {
              "$ref": "#/components/schemas/RemoveField"
            }
          ],
          "description": "Set a new value for the dataSet Ids, or remove the value."
        },
        "setDataSetId": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/dataSetId"
            }
          }
        },
        "setEndTime": {
          "type": "object",
          "title": "set",
          "required": [
            "set"
          ],
          "properties": {
            "set": {
              "$ref": "#/components/schemas/endTime"
            }
          }
        },
        "relationshipUpdateContent": {
          "type": "object",
          "properties": {
            "sourceType": {
              "$ref": "#/components/schemas/updateSourceType"
            },
            "sourceExternalId": {
              "$ref": "#/components/schemas/updateSourceExternalId"
            },
            "targetType": {
              "$ref": "#/components/schemas/updateTargetType"
            },
            "targetExternalId": {
              "$ref": "#/components/schemas/updateTargetExternalId"
            },
            "confidence": {
              "$ref": "#/components/schemas/updateConfidence"
            },
            "startTime": {
              "$ref": "#/components/schemas/updateStartTime"
            },
            "endTime": {
              "$ref": "#/components/schemas/updateEndTime"
            },
            "dataSetId": {
              "$ref": "#/components/schemas/updateDataSetId"
            },
            "labels": {
              "$ref": "#/components/schemas/LabelsPatch"
            }
          }
        },
        "relationshipUpdate": {
          "type": "object",
          "required": [
            "externalId",
            "update"
          ],
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/relationshipExternalId"
            },
            "update": {
              "$ref": "#/components/schemas/relationshipUpdateContent"
            }
          }
        },
        "byIdsRequest": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "$ref": "#/components/schemas/itemsArray"
            },
            "ignoreUnknownIds": {
              "$ref": "#/components/schemas/ignoreUnknownIds"
            },
            "fetchResources": {
              "$ref": "#/components/schemas/fetchResources"
            }
          }
        },
        "deleteRequest": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "$ref": "#/components/schemas/itemsArray"
            },
            "ignoreUnknownIds": {
              "$ref": "#/components/schemas/ignoreUnknownIds"
            }
          }
        },
        "itemsArray": {
          "type": "array",
          "minItems": 1,
          "maxItems": 1000,
          "items": {
            "$ref": "#/components/schemas/externalIdObject"
          }
        },
        "ignoreUnknownIds": {
          "description": "Ignore external IDs that are not found.",
          "type": "boolean",
          "default": false
        },
        "advancedListFilter": {
          "type": "object",
          "description": "Filter on relationships with exact match. Multiple filter elements in one property, for example `sourceExternalIds: [ \"a\", \"b\" ], returns all relationships where the sourceExternalId field is either `a` or `b`. Filters in multiple properties return relationships that match all criteria. If the filter is not specified, it defaults to an empty filter.",
          "properties": {
            "sourceExternalIds": {
              "type": "array",
              "description": "Include relationships that have any of these values in their `sourceExternalId` field",
              "items": {
                "$ref": "#/components/schemas/resourceExternalId"
              },
              "minItems": 1,
              "maxItems": 1000
            },
            "sourceTypes": {
              "type": "array",
              "description": "Include relationships that have any of these values in their `sourceType` field",
              "items": {
                "$ref": "#/components/schemas/resourceType"
              },
              "minItems": 1,
              "maxItems": 1000
            },
            "targetExternalIds": {
              "type": "array",
              "description": "Include relationships that have any of these values in their `targetExternalId` field",
              "items": {
                "$ref": "#/components/schemas/resourceExternalId"
              },
              "minItems": 1,
              "maxItems": 1000
            },
            "targetTypes": {
              "type": "array",
              "description": "Include relationships that have any of these values in their `targetType` field",
              "items": {
                "$ref": "#/components/schemas/resourceType"
              },
              "minItems": 1,
              "maxItems": 1000
            },
            "dataSetIds": {
              "type": "array",
              "maxItems": 1000,
              "items": {
                "$ref": "#/components/schemas/DataSetIdEither"
              }
            },
            "startTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "endTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "confidence": {
              "$ref": "#/components/schemas/floatRange"
            },
            "lastUpdatedTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "activeAtTime": {
              "description": "Limits results to those active within the specified time range, that is, if there is any overlap in the intervals [`activeAtTime.min`, `activeAtTime.max`] and [`startTime`, `endTime`], where both intervals are inclusive. If a relationship does not have a `startTime`, it is regarded as active from the beginning of time by this filter. If it does not have an `endTime` is is regarded as active until the end of time. Similarly, if a `min` is not supplied to the filter, the `min` is implicitly set to the beginning of time. If a `max` is not supplied, the `max` is implicitly set to the end of time.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/EpochTimestampRange"
                }
              ]
            },
            "labels": {
              "$ref": "#/components/schemas/LabelFilter"
            },
            "sourcesOrTargets": {
              "type": "array",
              "description": "Include relationships that match any of the resources in either their source- or target-related fields.",
              "items": {
                "$ref": "#/components/schemas/resourceReferenceWithExternalId"
              },
              "minItems": 1,
              "maxItems": 1
            }
          }
        },
        "relationshipsAdvancedListRequest": {
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/advancedListFilter"
            },
            "limit": {
              "$ref": "#/components/schemas/Limit/properties/limit"
            },
            "cursor": {
              "$ref": "#/components/schemas/Cursor/properties/cursor"
            },
            "fetchResources": {
              "$ref": "#/components/schemas/fetchResources"
            },
            "partition": {
              "$ref": "#/components/schemas/Partition"
            }
          }
        },
        "cursorObject": {
          "type": "object",
          "properties": {
            "nextCursor": {
              "type": "string",
              "description": "The cursor to get the next page of results (if available)."
            }
          }
        },
        "floatRange": {
          "type": "object",
          "description": "Range to filter the field for (inclusive).",
          "properties": {
            "min": {
              "type": "number"
            },
            "max": {
              "type": "number"
            }
          }
        },
        "relationshipRequestWrapper": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "items": {
                "$ref": "#/components/schemas/relationship"
              }
            }
          }
        },
        "updateRelationshipWrapper": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array",
              "minItems": 1,
              "maxItems": 1000,
              "items": {
                "$ref": "#/components/schemas/relationshipUpdate"
              }
            }
          }
        },
        "relationshipResponse": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/relationship"
            },
            {
              "$ref": "#/components/schemas/persistedObject"
            }
          ]
        },
        "enrichedRelationshipResponse": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/relationship"
            },
            {
              "$ref": "#/components/schemas/persistedObject"
            },
            {
              "$ref": "#/components/schemas/enrichedRelationship"
            }
          ]
        },
        "relationshipResponseWrapper": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "minItems": 1,
              "maxItems": 1000,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/relationshipResponse"
              }
            }
          }
        },
        "enrichedRelationshipResponseWrapper": {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "minItems": 1,
              "maxItems": 1000,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/enrichedRelationshipResponse"
              }
            }
          }
        },
        "pagedRelationshipResponseWrapper": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/relationshipResponseWrapper"
            },
            {
              "$ref": "#/components/schemas/cursorObject"
            }
          ]
        },
        "pagedEnrichedRelationshipResponseWrapper": {
          "type": "object",
          "allOf": [
            {
              "$ref": "#/components/schemas/enrichedRelationshipResponseWrapper"
            },
            {
              "$ref": "#/components/schemas/cursorObject"
            }
          ]
        },
        "JobId": {
          "description": "Contextualization job ID.",
          "type": "integer",
          "example": 123,
          "format": "int64"
        },
        "JobStatus": {
          "description": "The status of the job.",
          "type": "string",
          "enum": [
            "Queued",
            "Running",
            "Completed",
            "Failed"
          ]
        },
        "ModelId": {
          "description": "The ID of the model.",
          "type": "integer",
          "example": 456,
          "format": "int64"
        },
        "ErrorMessage": {
          "description": "Error message returned by the model if it fails.",
          "type": "string",
          "example": "Found zero entities, expecting more."
        },
        "ModelName": {
          "type": "string",
          "description": "User defined name.",
          "example": "simple_model_1",
          "maxLength": 256
        },
        "ModelDescription": {
          "type": "string",
          "description": "User defined description.",
          "example": "Simple model 1",
          "maxLength": 500
        },
        "FeatureType": {
          "type": "string",
          "example": "simple",
          "enum": [
            "simple",
            "insensitive",
            "bigram",
            "frequencyweightedbigram",
            "bigramextratokenizers",
            "bigramcombo"
          ],
          "default": "simple",
          "description": "Each feature type defines the combination of features that will be created and used in the entity matcher model."
        },
        "Classifier": {
          "type": "string",
          "description": "The classifier used in the model. Only relevant if there are trueMatches/labeled data and a supervised model is fitted.",
          "example": "randomforest",
          "default": "randomforest",
          "enum": [
            "randomforest",
            "decisiontree",
            "logisticregression",
            "augmentedlogisticregression",
            "augmentedrandomforest"
          ]
        },
        "IgnoreMissingFields": {
          "type": "boolean",
          "default": false,
          "example": true,
          "description": "If True, replaces missing fields in `sources` or `targets` entities, for fields set in set in `matchFields`, with empty strings. Else, returns an error if there are missing data."
        },
        "MatchFields": {
          "type": "array",
          "example": [
            {
              "source": "name",
              "target": "name"
            },
            {
              "source": "field",
              "target": "somefield"
            }
          ],
          "default": [
            {
              "source": "name",
              "target": "name"
            }
          ],
          "description": "List of pairs of fields from the target and source items used to calculate features. All source and target items should have all the `source` and `target` fields specified here.",
          "items": {
            "type": "object",
            "required": [
              "source",
              "target"
            ],
            "properties": {
              "source": {
                "type": "string"
              },
              "target": {
                "type": "string"
              }
            }
          }
        },
        "Sources": {
          "type": "array",
          "minItems": 0,
          "maxItems": 2000000,
          "items": {
            "type": "object",
            "example": {
              "id": 10,
              "name": "a_name",
              "field": "value",
              "ignoredfield": {
                "key": "value"
              }
            }
          },
          "description": "List of custom source object to match from, for example, time series. String key -> value. Only string values are considered in the matching. Both `id` and `externalId` fields are optional, only mandatory if the item is to be referenced in `trueMatches`."
        },
        "Targets": {
          "type": "array",
          "minItems": 1,
          "maxItems": 2000000,
          "items": {
            "type": "object",
            "example": {
              "id": 6,
              "name": "some_name",
              "somefield": "value",
              "ignoredfield": {
                "key": "value"
              }
            }
          },
          "description": "List of custom target object to match to, for example, assets. String key -> value. Only string values are considered in the matching. Both `id` and `externalId` fields are optional, only mandatory if the item is to be referenced in `trueMatches`."
        },
        "OneOfId": {
          "type": "array",
          "example": [
            {
              "id": 2563587950655335
            },
            {
              "externalId": "myUniqueName"
            }
          ],
          "description": "List of ids or externalIds of models.",
          "items": {
            "oneOf": [
              {
                "type": "object",
                "required": [
                  "id"
                ],
                "properties": {
                  "id": {
                    "$ref": "#/components/schemas/CogniteInternalId"
                  }
                }
              },
              {
                "type": "object",
                "required": [
                  "externalId"
                ],
                "properties": {
                  "externalId": {
                    "$ref": "#/components/schemas/CogniteExternalId"
                  }
                }
              }
            ]
          }
        },
        "SourceId": {
          "description": "The id for the from-object of the match.",
          "allOf": [
            {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          ]
        },
        "SourceExternalId": {
          "description": "The external id for the source-object of the match.",
          "allOf": [
            {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          ]
        },
        "TargetId": {
          "description": "The id for the target-object of the match.",
          "allOf": [
            {
              "$ref": "#/components/schemas/CogniteInternalId"
            }
          ]
        },
        "TargetExternalId": {
          "description": "The external id for the to-object of the match.",
          "allOf": [
            {
              "$ref": "#/components/schemas/CogniteExternalId"
            }
          ]
        },
        "TrueMatches": {
          "type": "array",
          "description": "List of objects of pairs of sourceId or sourceExternalId and targetId or targetExternalId, that corresponds to entities in source and target respectively, that indicates a confirmed match used to train the model. If omitted, an unsupervised model is used.",
          "example": [
            {
              "sourceId": 1,
              "targetId": 1
            },
            {
              "sourceExternalId": "2",
              "targetExternalId": "2"
            }
          ],
          "minItems": 1,
          "maxItems": 2000000,
          "items": {
            "items": {
              "oneOf": [
                {
                  "properties": {
                    "sourceId": {
                      "$ref": "#/components/schemas/SourceId"
                    },
                    "targetId": {
                      "$ref": "#/components/schemas/TargetId"
                    }
                  },
                  "required": [
                    "sourceId",
                    "targetId"
                  ]
                },
                {
                  "properties": {
                    "sourceId": {
                      "$ref": "#/components/schemas/SourceId"
                    },
                    "targetExternalId": {
                      "$ref": "#/components/schemas/TargetExternalId"
                    }
                  },
                  "required": [
                    "sourceId",
                    "targetExternalId"
                  ]
                },
                {
                  "properties": {
                    "sourceExternalId": {
                      "$ref": "#/components/schemas/SourceExternalId"
                    },
                    "targetId": {
                      "$ref": "#/components/schemas/TargetId"
                    }
                  },
                  "required": [
                    "sourceExternalId",
                    "targetId"
                  ]
                },
                {
                  "properties": {
                    "sourceExternalId": {
                      "$ref": "#/components/schemas/SourceExternalId"
                    },
                    "targetExternalId": {
                      "$ref": "#/components/schemas/TargetExternalId"
                    }
                  },
                  "required": [
                    "sourceExternalId",
                    "targetExternalId"
                  ]
                }
              ]
            }
          }
        },
        "EntityMatchingFilterSchema": {
          "type": "object",
          "properties": {
            "featureType": {
              "$ref": "#/components/schemas/FeatureType"
            },
            "classifier": {
              "$ref": "#/components/schemas/Classifier"
            },
            "originalId": {
              "type": "integer",
              "description": "The ID of original model, only relevant when the model is a retrained model.",
              "example": 111
            },
            "name": {
              "$ref": "#/components/schemas/ModelName"
            },
            "description": {
              "$ref": "#/components/schemas/ModelDescription"
            }
          }
        },
        "EntityMatchingFeatureSchema": {
          "type": "object",
          "properties": {
            "name": {
              "$ref": "#/components/schemas/ModelName"
            },
            "description": {
              "$ref": "#/components/schemas/ModelDescription"
            },
            "featureType": {
              "$ref": "#/components/schemas/FeatureType"
            },
            "matchFields": {
              "$ref": "#/components/schemas/MatchFields"
            },
            "ignoreMissingFields": {
              "description": "If True, missing fields in `sources` or `targets` entities set in `matchFields`, are replaced with empty strings.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/IgnoreMissingFields"
                }
              ]
            },
            "classifier": {
              "description": "Name of the classifier used in the model, \"Unsupervised\" if unsupervised model.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Classifier"
                }
              ]
            },
            "originalId": {
              "type": "integer",
              "description": "The ID of original model, only relevant when the model is a retrained model.",
              "example": 111
            }
          }
        },
        "EntityMatcherResponseSchema": {
          "type": "object",
          "required": [
            "id",
            "externalId",
            "name",
            "description"
          ],
          "allOf": [
            {
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                },
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            },
            {
              "$ref": "#/components/schemas/StatusSchema"
            },
            {
              "$ref": "#/components/schemas/EntityMatchingFeatureSchema"
            }
          ]
        },
        "EntityMatchingPredictFeatureSchema": {
          "type": "object",
          "properties": {
            "sources": {
              "description": "List of source entities to predict matches for, for example, time series. If omitted, will use `sources` from create.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Sources"
                }
              ]
            },
            "targets": {
              "description": "List of potential target entities to match to one or more of the source entities, for example, assets. If omitted, will use `targets` from create.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Targets"
                }
              ]
            },
            "numMatches": {
              "type": "integer",
              "example": 3,
              "minimum": 0,
              "maximum": 100,
              "description": "The maximum number of results to return for each source entity."
            },
            "scoreThreshold": {
              "type": "number",
              "example": 0.7,
              "minimum": 0,
              "maximum": 1,
              "description": "Only return matches with score above this threshold."
            }
          }
        },
        "EntityMatchingPredictSchema": {
          "type": "object",
          "oneOf": [
            {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "id": {
                      "description": "The ID of the model that is used to predict matches.",
                      "allOf": [
                        {
                          "$ref": "#/components/schemas/CogniteInternalId"
                        }
                      ]
                    }
                  }
                },
                {
                  "$ref": "#/components/schemas/EntityMatchingPredictFeatureSchema"
                }
              ]
            },
            {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "externalId"
                  ],
                  "properties": {
                    "externalId": {
                      "description": "The externalId of the model that is used to predict matches.",
                      "allOf": [
                        {
                          "$ref": "#/components/schemas/CogniteExternalId"
                        }
                      ]
                    }
                  }
                },
                {
                  "$ref": "#/components/schemas/EntityMatchingPredictFeatureSchema"
                }
              ]
            }
          ]
        },
        "EntityMatchingRefitFeatureSchema": {
          "type": "object",
          "required": [
            "trueMatches"
          ],
          "properties": {
            "newExternalId": {
              "description": "ExternalId for the new refitted model provided by client. Must be unique within the project.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              ]
            },
            "trueMatches": {
              "description": "List of additional confirmed matches used to train the model. The new model uses a combination of this and trueMatches from the orginal model. If there are identical match-from ids, the pair from the original model is dropped.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/TrueMatches"
                }
              ]
            },
            "sources": {
              "description": "List of source entities, for example, time series. If omitted, will use data from fit.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Sources"
                }
              ]
            },
            "targets": {
              "description": "List of target entities, for example, assets. If omitted, will use data from fit.",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Targets"
                }
              ]
            }
          }
        },
        "EntityMatchingRefitSchema": {
          "type": "object",
          "oneOf": [
            {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "id"
                  ],
                  "properties": {
                    "id": {
                      "description": "The ID of the original model.",
                      "allOf": [
                        {
                          "$ref": "#/components/schemas/CogniteInternalId"
                        }
                      ]
                    }
                  }
                },
                {
                  "$ref": "#/components/schemas/EntityMatchingRefitFeatureSchema"
                }
              ]
            },
            {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "externalId"
                  ],
                  "properties": {
                    "externalId": {
                      "description": "The externalId of the original model.",
                      "allOf": [
                        {
                          "$ref": "#/components/schemas/CogniteExternalId"
                        }
                      ]
                    }
                  }
                },
                {
                  "$ref": "#/components/schemas/EntityMatchingRefitFeatureSchema"
                }
              ]
            }
          ]
        },
        "StatusSchema": {
          "type": "object",
          "required": [
            "status",
            "createdTime",
            "startTime",
            "statusTime"
          ],
          "properties": {
            "status": {
              "$ref": "#/components/schemas/JobStatus"
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "startTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            },
            "statusTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          }
        },
        "SinglePatchRequiredModelName": {
          "title": "Name",
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/ModelName"
            }
          },
          "description": "Set a new value for name.",
          "required": [
            "set"
          ]
        },
        "SinglePatchRequiredModelDescription": {
          "title": "Description",
          "type": "object",
          "properties": {
            "set": {
              "$ref": "#/components/schemas/ModelDescription"
            }
          },
          "description": "Set a new value for description.",
          "required": [
            "set"
          ]
        },
        "ModelChange": {
          "oneOf": [
            {
              "$ref": "#/components/schemas/ModelChangeById"
            },
            {
              "$ref": "#/components/schemas/ModelChangeByExternalId"
            }
          ]
        },
        "ModelChangeById": {
          "allOf": [
            {
              "$ref": "#/components/schemas/ModelPatch"
            },
            {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/CogniteInternalId"
                }
              }
            }
          ]
        },
        "ModelChangeByExternalId": {
          "allOf": [
            {
              "$ref": "#/components/schemas/ModelPatch"
            },
            {
              "type": "object",
              "required": [
                "externalId"
              ],
              "properties": {
                "externalId": {
                  "$ref": "#/components/schemas/CogniteExternalId"
                }
              }
            }
          ]
        },
        "ModelPatch": {
          "type": "object",
          "description": "Changes applied to model",
          "required": [
            "update"
          ],
          "properties": {
            "update": {
              "type": "object",
              "properties": {
                "name": {
                  "$ref": "#/components/schemas/SinglePatchRequiredModelName"
                },
                "description": {
                  "$ref": "#/components/schemas/SinglePatchRequiredModelDescription"
                }
              }
            }
          }
        },
        "DiagramFileId": {
          "type": "integer",
          "example": 1234,
          "description": "The ID of a file in CDF. The file must have mime_type application/pdf, image/jpeg, image/png or image/tiff.",
          "format": "int64"
        },
        "DiagramFileExternalId": {
          "type": "string",
          "example": "1234",
          "description": "The external ID of a file in CDF. The file must have mime_type application/pdf, image/jpeg, image/png or image/tiff."
        },
        "OneOfFileId": {
          "type": "object",
          "required": [
            "fileId",
            "fileExternalId"
          ],
          "description": "An object containg file (external) id. The file can only have maximum 50 pages.",
          "oneOf": [
            {
              "properties": {
                "fileId": {
                  "$ref": "#/components/schemas/DiagramFileId"
                }
              }
            },
            {
              "properties": {
                "fileExternalId": {
                  "$ref": "#/components/schemas/DiagramFileExternalId"
                }
              }
            }
          ]
        },
        "AllOfFileId": {
          "type": "object",
          "required": [
            "fileId"
          ],
          "properties": {
            "fileId": {
              "$ref": "#/components/schemas/DiagramFileId"
            },
            "fileExternalId": {
              "$ref": "#/components/schemas/DiagramFileExternalId"
            }
          }
        },
        "DiagramDetectEntities": {
          "type": "array",
          "example": [
            {
              "userDefinedField": "21PT1017",
              "ignoredField": "AA11"
            },
            {
              "userDefinedField": [
                "21PT1017-A",
                "21PT1017-B"
              ]
            }
          ],
          "description": "A list of entities to look for. For example, all the assets under a root node. The `searchField` determines the strings that identify the entities.",
          "items": {
            "type": "object",
            "maxProperties": 256
          },
          "minItems": 1,
          "maxItems": 500000
        },
        "DiagramSearchField": {
          "type": "string",
          "example": "userDefinedField",
          "default": "name",
          "description": "This field determines the string to search for and to identify object entities."
        },
        "DiagramPartialMatch": {
          "type": "boolean",
          "description": "Allow partial (fuzzy) matching of entities in the engineering diagrams. Creates a match only when it is possible to do so unambiguously.",
          "default": false
        },
        "DiagramMinTokens": {
          "type": "integer",
          "description": "Each detected item must match the detected entity on at least this number of tokens. A token is a substring of consecutive letters or digits.",
          "default": 2
        },
        "Page": {
          "type": "integer",
          "example": 1,
          "description": "The page of the file where the annotations in `annotations` were detected.",
          "maximum": 50,
          "minimum": 1
        },
        "DiagramDetectConfig": {
          "type": "object",
          "properties": {
            "searchField": {
              "$ref": "#/components/schemas/DiagramSearchField"
            },
            "partialMatch": {
              "$ref": "#/components/schemas/DiagramPartialMatch"
            },
            "minTokens": {
              "$ref": "#/components/schemas/DiagramMinTokens"
            }
          }
        },
        "DiagramConvertConfig": {
          "type": "object",
          "properties": {
            "grayscale": {
              "$ref": "#/components/schemas/Grayscale"
            }
          }
        },
        "Grayscale": {
          "type": "boolean",
          "example": true,
          "default": true,
          "description": "Return the SVG version in grayscale colors only (reduces the file size)."
        },
        "NewAnnotation": {
          "type": "object",
          "required": [
            "text",
            "region"
          ],
          "properties": {
            "text": {
              "description": "The text and entities detected by the service.",
              "type": "string",
              "example": "21-PT-1019"
            },
            "confidence": {
              "type": "number",
              "description": "The confidence for the detection.",
              "example": 0.5,
              "minimum": 0,
              "maximum": 1
            },
            "region": {
              "required": [
                "shape",
                "vertices",
                "page"
              ],
              "allOf": [
                {
                  "$ref": "#/components/schemas/DiagramRegion"
                },
                {
                  "properties": {
                    "page": {
                      "$ref": "#/components/schemas/Page"
                    }
                  }
                }
              ]
            }
          }
        },
        "DiagramDetectedEntities": {
          "type": "array",
          "example": [
            {
              "userDefinedField": "21PT1017",
              "ignoredField": "AA11"
            },
            {
              "userDefinedField": [
                "21PT1017-A",
                "21PT1017-B"
              ]
            }
          ],
          "description": "A list of entities detected per annotation.",
          "items": {
            "type": "object"
          },
          "minItems": 1,
          "maxItems": 5
        },
        "DiagramAnnotation": {
          "description": "Annotation representing a detected entity.",
          "allOf": [
            {
              "$ref": "#/components/schemas/NewAnnotation"
            },
            {
              "type": "object",
              "properties": {
                "entities": {
                  "$ref": "#/components/schemas/DiagramDetectedEntities"
                }
              }
            }
          ]
        },
        "DiagramDetectResultSchema": {
          "description": "An array of detected results, returned when the job finished or failed partially.",
          "type": "array",
          "items": {
            "type": "object",
            "oneOf": [
              {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/AllOfFileId"
                  },
                  {
                    "properties": {
                      "annotations": {
                        "type": "array",
                        "description": "Annotations of entities detected by the service",
                        "items": {
                          "$ref": "#/components/schemas/DiagramAnnotation"
                        }
                      }
                    }
                  }
                ],
                "required": [
                  "annotations"
                ]
              },
              {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/AllOfFileId"
                  },
                  {
                    "properties": {
                      "errorMessage": {
                        "type": "string",
                        "description": "Error message for the file."
                      }
                    }
                  }
                ],
                "required": [
                  "errorMessage"
                ]
              }
            ]
          }
        },
        "DiagramSvgPngResultSchema": {
          "type": "object",
          "oneOf": [
            {
              "properties": {
                "page": {
                  "$ref": "#/components/schemas/Page"
                },
                "svgUrl": {
                  "type": "string",
                  "example": "https://storage.googleapis.com/cluster/1234/PH-ME-P-0004-001.svg",
                  "description": "A signed URL to an interactive SVG version of the engineering diagram (valid for 10 minutes)."
                },
                "pngUrl": {
                  "type": "string",
                  "example": "https://storage.googleapis.com/cluster/1234/PH-ME-P-0004-001.png",
                  "description": "A signed URL to a PNG version of the engineering diagram (valid for 10 minutes)."
                }
              },
              "required": [
                "page",
                "svgUrl",
                "pngUrl"
              ]
            },
            {
              "properties": {
                "page": {
                  "$ref": "#/components/schemas/Page"
                },
                "errorMessage": {
                  "type": "string",
                  "description": "The error message for the page and file."
                }
              },
              "required": [
                "page",
                "errorMessage"
              ]
            }
          ]
        },
        "DiagramConvertResultSchema": {
          "description": "An array of converted results, returned when the job finished or failed partially.",
          "type": "array",
          "items": {
            "type": "object",
            "oneOf": [
              {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/AllOfFileId"
                  },
                  {
                    "properties": {
                      "results": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/DiagramSvgPngResultSchema"
                        },
                        "maxItems": 50
                      }
                    }
                  }
                ],
                "required": [
                  "results"
                ]
              },
              {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/AllOfFileId"
                  },
                  {
                    "properties": {
                      "errorMessage": {
                        "type": "string",
                        "description": "The error message for a file."
                      }
                    }
                  }
                ],
                "required": [
                  "errorMessage"
                ]
              }
            ]
          }
        },
        "DiagramConvertRequestSchema": {
          "description": "An array of files and annotations to create interactive diagrams.",
          "type": "array",
          "maxItems": 50,
          "minItems": 1,
          "items": {
            "type": "object",
            "required": [
              "annotations"
            ],
            "allOf": [
              {
                "$ref": "#/components/schemas/OneOfFileId"
              },
              {
                "properties": {
                  "annotations": {
                    "description": "Annotations to draw on the engineering diagrams",
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/DiagramAnnotation"
                    },
                    "maxItems": 1000
                  }
                }
              }
            ]
          }
        },
        "Vertex": {
          "type": "object",
          "description": "A vertex represents a 2D point in the image. The vertex coordinates are normalized.",
          "example": {
            "x": 0.58,
            "y": 0.12
          },
          "required": [
            "x",
            "y"
          ],
          "properties": {
            "x": {
              "type": "number",
              "description": "Normalized x coordinate.",
              "minimum": 0,
              "maximum": 1
            },
            "y": {
              "type": "number",
              "description": "Normalized y coordinate.",
              "minimum": 0,
              "maximum": 1
            }
          }
        },
        "DiagramRegion": {
          "description": "Shape and coordinates of the detected entity in the image.",
          "type": "object",
          "required": [
            "shape",
            "vertices"
          ],
          "properties": {
            "shape": {
              "type": "string",
              "description": "The geometrical shape of the image region to which a detected entity belongs.",
              "enum": [
                "rectangle"
              ]
            },
            "vertices": {
              "type": "array",
              "description": "List of vertices representing the image region to which a detected entity belongs.",
              "items": {
                "$ref": "#/components/schemas/Vertex"
              },
              "minItems": 4,
              "maxItems": 4
            }
          }
        },
        "BatchJobStatus": {
          "description": "The status of the job.",
          "type": "string",
          "enum": [
            "Queued",
            "Distributing",
            "Running",
            "Collecting",
            "Completed",
            "Failed",
            "Timeout"
          ]
        },
        "RawTable": {
          "required": [
            "dbName",
            "tableName"
          ],
          "type": "object",
          "properties": {
            "dbName": {
              "minLength": 1,
              "type": "string",
              "description": "Database name"
            },
            "tableName": {
              "minLength": 1,
              "type": "string",
              "description": "Table name"
            }
          }
        },
        "Contact": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Contact name",
              "nullable": true
            },
            "email": {
              "maxLength": 254,
              "minLength": 1,
              "type": "string",
              "description": "Contact email",
              "format": "email",
              "nullable": true
            },
            "role": {
              "type": "string",
              "description": "Contact role",
              "nullable": true
            },
            "sendNotification": {
              "type": "boolean",
              "description": "True, if contact receives email notifications",
              "nullable": true
            }
          }
        },
        "CreateExtPipe": {
          "required": [
            "dataSetId",
            "externalId",
            "name"
          ],
          "type": "object",
          "properties": {
            "externalId": {
              "maxLength": 255,
              "minLength": 1,
              "required": [
                "true"
              ],
              "type": "string",
              "description": "External Id provided by client. Should be unique within the project."
            },
            "name": {
              "maxLength": 140,
              "minLength": 1,
              "required": [
                "true"
              ],
              "type": "string",
              "description": "Name of Extraction Pipeline"
            },
            "description": {
              "maxLength": 500,
              "type": "string",
              "description": "Description of Extraction Pipeline",
              "nullable": true
            },
            "dataSetId": {
              "maximum": 9007199254740991,
              "minimum": 0,
              "required": [
                "true"
              ],
              "type": "integer",
              "description": "DataSet ID",
              "format": "int64"
            },
            "rawTables": {
              "type": "array",
              "description": "Raw tables",
              "nullable": true,
              "items": {
                "$ref": "#/components/schemas/RawTable"
              }
            },
            "schedule": {
              "pattern": "^(On trigger|Continuous)|(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\\d+(ns|us|??s|ms|s|m|h))+)|((((\\d+,)+\\d+|(\\d+([/\\-])\\d+)|\\d+|\\*(/\\d+)?) ?){5,7})$",
              "type": "string",
              "description": "Possible values: ???On trigger???, ???Continuous??? or cron expression. If empty then null",
              "nullable": true
            },
            "contacts": {
              "type": "array",
              "description": "Contacts list.",
              "nullable": true,
              "items": {
                "$ref": "#/components/schemas/Contact"
              }
            },
            "metadata": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              },
              "description": "Custom, application specific metadata. String key -> String value. Limits: Key are at most 128 bytes. Values are at most 10240 bytes. Up to 256 key-value pairs. Total size is at most 10240.",
              "example": {
                "property1": "string",
                "property2": "string"
              }
            },
            "source": {
              "maxLength": 255,
              "type": "string",
              "description": "Source for Extraction Pipeline",
              "nullable": true
            },
            "documentation": {
              "maxLength": 10000,
              "type": "string",
              "description": "Documentation text field, supports Markdown for text formatting.",
              "nullable": true
            }
          }
        },
        "ExtPipe": {
          "allOf": [
            {
              "$ref": "#/components/schemas/CreateExtPipe"
            },
            {
              "type": "object",
              "properties": {
                "id": {
                  "maximum": 9007199254740991,
                  "minimum": 0,
                  "type": "integer",
                  "description": "A server-generated ID for the object.",
                  "format": "int64"
                },
                "lastSuccess": {
                  "type": "integer",
                  "description": "Time of last successful run. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
                  "format": "int64"
                },
                "lastFailure": {
                  "type": "integer",
                  "description": "Time of last failure run. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
                  "format": "int64"
                },
                "lastMessage": {
                  "type": "string",
                  "description": "Last failure message."
                },
                "lastSeen": {
                  "type": "integer",
                  "description": "Last seen time. The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
                  "format": "int64"
                },
                "createdTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "lastUpdatedTime": {
                  "$ref": "#/components/schemas/EpochTimestamp"
                },
                "createdBy": {
                  "type": "string",
                  "description": "Extraction Pipeline creator. Usually user email is expected here"
                }
              }
            }
          ]
        },
        "ExtPipes": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExtPipe"
              }
            }
          },
          "description": "List of extraction pipelines"
        },
        "DefaultError": {
          "type": "object",
          "properties": {
            "code": {
              "required": [
                "true"
              ],
              "type": "integer",
              "description": "HTTP status code",
              "format": "int32"
            },
            "message": {
              "required": [
                "true"
              ],
              "type": "string",
              "description": "Error message"
            },
            "missing": {
              "type": "array",
              "description": "List of lookup objects that do not match any results.",
              "items": {
                "type": "object"
              }
            },
            "duplicated": {
              "type": "array",
              "description": "List of objects that are not unique.",
              "items": {
                "type": "object"
              }
            }
          },
          "description": "Cognite API error"
        },
        "ItemsRequest_CreateExtPipe_": {
          "required": [
            "items"
          ],
          "type": "object",
          "properties": {
            "items": {
              "maxItems": 1000,
              "minItems": 1,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CreateExtPipe"
              }
            }
          }
        },
        "ItemsRequest_ExtPipeId_": {
          "required": [
            "items"
          ],
          "type": "object",
          "properties": {
            "items": {
              "maxItems": 1000,
              "minItems": 1,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExtPipeId"
              }
            }
          }
        },
        "ExtPipeInternalId": {
          "required": [
            "id"
          ],
          "type": "object",
          "properties": {
            "id": {
              "maximum": 9007199254740991,
              "minimum": 0,
              "type": "integer",
              "description": "A server-generated ID for the object.",
              "format": "int64"
            }
          }
        },
        "ExtPipeExternalId": {
          "required": [
            "externalId"
          ],
          "type": "object",
          "properties": {
            "externalId": {
              "maxLength": 255,
              "minLength": 1,
              "type": "string",
              "description": "External Id provided by client. Should be unique within the project."
            }
          }
        },
        "ExtPipeId": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ExtPipeInternalId"
            },
            {
              "$ref": "#/components/schemas/ExtPipeExternalId"
            }
          ]
        },
        "ItemsRequest_ExtPipeUpdate_": {
          "required": [
            "items"
          ],
          "type": "object",
          "properties": {
            "items": {
              "maxItems": 1000,
              "minItems": 1,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExtPipeUpdate"
              }
            }
          }
        },
        "ExternalIdUpdateField": {
          "required": [
            "set"
          ],
          "type": "object",
          "properties": {
            "set": {
              "maxLength": 255,
              "minLength": 1,
              "type": "string",
              "description": "External Id provided by client. Should be unique within the project."
            }
          },
          "description": "Set a new value for the externalId. Must be unique for the resource type."
        },
        "NameUpdateField": {
          "required": [
            "set"
          ],
          "type": "object",
          "properties": {
            "set": {
              "maxLength": 140,
              "minLength": 1,
              "type": "string",
              "description": "Name of Extraction Pipeline"
            }
          },
          "description": "Set a new value for name."
        },
        "DescriptionUpdateField": {
          "type": "object",
          "properties": {
            "set": {
              "maxLength": 500,
              "type": "string",
              "description": "Description of Extraction Pipeline",
              "nullable": true
            }
          },
          "description": "Set a new value for description."
        },
        "DataSetIdUpdateField": {
          "type": "object",
          "properties": {
            "set": {
              "maximum": 9007199254740991,
              "minimum": 0,
              "required": [
                "true"
              ],
              "type": "integer",
              "description": "DataSet ID",
              "format": "int64"
            }
          },
          "description": "Set a new value for dataSetId."
        },
        "ScheduleUpdateField": {
          "type": "object",
          "properties": {
            "set": {
              "pattern": "^(On trigger|Continuous)|(@(annually|yearly|monthly|weekly|daily|hourly|reboot))|(@every (\\d+(ns|us|??s|ms|s|m|h))+)|((((\\d+,)+\\d+|(\\d+([/\\-])\\d+)|\\d+|\\*(/\\d+)?) ?){5,7})$",
              "type": "string",
              "description": "Possible values: ???On trigger???, ???Continuous??? or cron expression. If empty then null",
              "nullable": true
            }
          },
          "description": "Set a new value for schedule."
        },
        "RawTablesUpdateSet": {
          "type": "object",
          "properties": {
            "set": {
              "type": "array",
              "nullable": true,
              "items": {
                "$ref": "#/components/schemas/RawTable"
              }
            }
          }
        },
        "RawTablesUpdateAddRemove": {
          "type": "object",
          "properties": {
            "add": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawTable"
              }
            },
            "remove": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RawTable"
              }
            }
          }
        },
        "RawTablesUpdate": {
          "type": "object",
          "description": "Updates the resource's assigned rawTables. RawTables can be added, removed or replaced (set). ",
          "oneOf": [
            {
              "$ref": "#/components/schemas/RawTablesUpdateSet"
            },
            {
              "$ref": "#/components/schemas/RawTablesUpdateAddRemove"
            }
          ]
        },
        "ContactsUpdateSet": {
          "type": "object",
          "properties": {
            "set": {
              "type": "array",
              "description": "New contacts list",
              "items": {
                "$ref": "#/components/schemas/Contact"
              }
            }
          }
        },
        "ContactsUpdateAddRemove": {
          "type": "object",
          "properties": {
            "add": {
              "type": "array",
              "description": "Contacts to add",
              "items": {
                "$ref": "#/components/schemas/Contact"
              }
            },
            "remove": {
              "type": "array",
              "description": "Contacts to remove",
              "items": {
                "$ref": "#/components/schemas/Contact"
              }
            }
          }
        },
        "ContactsUpdate": {
          "type": "object",
          "description": "Updates the resource's assigned contacts. Contacts can be added, removed or replaced (set). ",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ContactsUpdateSet"
            },
            {
              "$ref": "#/components/schemas/ContactsUpdateAddRemove"
            }
          ]
        },
        "MapUpdateSet": {
          "type": "object",
          "properties": {
            "set": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              },
              "description": "Custom, application specific metadata. String key -> String value. Limits: Key are at most 128 bytes. Values are at most 10240 bytes. Up to 256 key-value pairs. Total size is at most 10240.",
              "nullable": true,
              "example": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        },
        "MapUpdateAddRemove": {
          "type": "object",
          "properties": {
            "add": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              },
              "description": "Add the key-value pairs. Values for existing keys will be overwritten.",
              "nullable": true,
              "example": {
                "property1": "string",
                "property2": "string"
              }
            },
            "remove": {
              "type": "array",
              "description": "Remove the key-value pairs with the specified keys.",
              "nullable": true,
              "items": {
                "type": "string"
              }
            }
          }
        },
        "MapUpdate": {
          "type": "object",
          "description": "Custom, application specific metadata. String key -> String value. Limits of updated extraction pipeline: Maximum length of key is 128 bytes, value 10240 bytes, up to 256 key-value pairs, of total size at most 10240.",
          "oneOf": [
            {
              "$ref": "#/components/schemas/MapUpdateSet"
            },
            {
              "$ref": "#/components/schemas/MapUpdateAddRemove"
            }
          ]
        },
        "SourceUpdateField": {
          "type": "object",
          "properties": {
            "set": {
              "maxLength": 255,
              "type": "string",
              "description": "Source for Extraction Pipeline",
              "nullable": true
            }
          },
          "description": "Set a new value for source."
        },
        "DocumentationUpdateField": {
          "type": "object",
          "properties": {
            "set": {
              "maxLength": 10000,
              "type": "string",
              "description": "Documentation text field",
              "nullable": true
            }
          },
          "description": "Set a new value for documentation."
        },
        "ExtPipeUpdateData": {
          "type": "object",
          "properties": {
            "externalId": {
              "$ref": "#/components/schemas/ExternalIdUpdateField"
            },
            "name": {
              "$ref": "#/components/schemas/NameUpdateField"
            },
            "description": {
              "$ref": "#/components/schemas/DescriptionUpdateField"
            },
            "dataSetId": {
              "$ref": "#/components/schemas/DataSetIdUpdateField"
            },
            "schedule": {
              "$ref": "#/components/schemas/ScheduleUpdateField"
            },
            "rawTables": {
              "$ref": "#/components/schemas/RawTablesUpdate"
            },
            "contacts": {
              "$ref": "#/components/schemas/ContactsUpdate"
            },
            "metadata": {
              "$ref": "#/components/schemas/MapUpdate"
            },
            "source": {
              "$ref": "#/components/schemas/SourceUpdateField"
            },
            "documentation": {
              "$ref": "#/components/schemas/DocumentationUpdateField"
            }
          },
          "description": "List of updates for Extraction Pipeline"
        },
        "ExtPipeUpdateById": {
          "type": "object",
          "properties": {
            "id": {
              "maximum": 9007199254740991,
              "minimum": 0,
              "type": "integer",
              "description": "A server-generated ID for the object.",
              "format": "int64"
            },
            "update": {
              "$ref": "#/components/schemas/ExtPipeUpdateData"
            }
          }
        },
        "ExtPipeUpdateByExternalId": {
          "type": "object",
          "properties": {
            "externalId": {
              "maxLength": 255,
              "type": "string",
              "description": "External Id provided by client. Should be unique within the project.",
              "nullable": true
            },
            "update": {
              "$ref": "#/components/schemas/ExtPipeUpdateData"
            }
          }
        },
        "ExtPipeUpdate": {
          "type": "object",
          "oneOf": [
            {
              "$ref": "#/components/schemas/ExtPipeUpdateById"
            },
            {
              "$ref": "#/components/schemas/ExtPipeUpdateByExternalId"
            }
          ]
        },
        "ExtendedItemsRequest_ExtPipeId_": {
          "required": [
            "items"
          ],
          "type": "object",
          "properties": {
            "items": {
              "maxItems": 1000,
              "minItems": 1,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExtPipeId"
              }
            },
            "ignoreUnknownIds": {
              "type": "boolean",
              "description": "Ignore IDs and external IDs that are not found",
              "default": false
            }
          }
        },
        "ExtPipesFilterRequest": {
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/ExtPipesFilter"
            },
            "limit": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer",
              "description": "Limits the number of results to return.",
              "format": "int32",
              "default": 100
            },
            "cursor": {
              "type": "string"
            }
          }
        },
        "ExtPipesFilter": {
          "type": "object"
        },
        "CreateExtPipeRunResponse": {
          "allOf": [
            {
              "$ref": "#/components/schemas/ExtPipeRunResponse"
            },
            {
              "type": "object",
              "properties": {
                "externalId": {
                  "type": "string",
                  "description": "Extraction Pipeline external Id."
                }
              },
              "description": "Create Extraction Pipeline Runs response."
            }
          ]
        },
        "ItemsResponse_CreateExtPipeRunResponse_": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/CreateExtPipeRunResponse"
              }
            }
          },
          "description": "Response with a list of elements."
        },
        "ItemsRequest_ExtPipeRunRequest_": {
          "required": [
            "items"
          ],
          "type": "object",
          "properties": {
            "items": {
              "maxItems": 1,
              "minItems": 1,
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExtPipeRunRequest"
              }
            }
          }
        },
        "ExtPipeRunStatus": {
          "description": "A status attribute represents the final status of a particular job run by an extraction pipeline. Utilize `success` and `failure` to indicate if the run has succeeded or failed for any reason. In addition, a heartbeat can be implemented by an extraction pipeline by periodically sending `seen` status represented by last seen and last connected time.",
          "type": "string",
          "enum": [
            "success",
            "failure",
            "seen"
          ]
        },
        "ExtPipeRunRequest": {
          "required": [
            "externalId",
            "status"
          ],
          "type": "object",
          "properties": {
            "externalId": {
              "maxLength": 255,
              "minLength": 1,
              "required": [
                "true"
              ],
              "type": "string",
              "description": "Extraction pipeline external Id provided by client. Should be unique within the project."
            },
            "status": {
              "$ref": "#/components/schemas/ExtPipeRunStatus"
            },
            "message": {
              "maxLength": 1000,
              "type": "string",
              "description": "Error message.",
              "nullable": true
            },
            "createdTime": {
              "type": "integer",
              "description": "The number of milliseconds since 00:00:00 Thursday, 1 January 1970, Coordinated Universal Time (UTC), minus leap seconds.",
              "format": "int64",
              "nullable": true
            }
          },
          "description": "Status of the extraction pipeline."
        },
        "RunsFilterRequest": {
          "required": [
            "filter"
          ],
          "type": "object",
          "properties": {
            "filter": {
              "$ref": "#/components/schemas/RunsFilter"
            },
            "limit": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer",
              "description": "Limits the number of results to return.",
              "format": "int32",
              "default": 100
            },
            "cursor": {
              "type": "string"
            }
          }
        },
        "RunsFilter": {
          "required": [
            "externalId"
          ],
          "type": "object",
          "properties": {
            "externalId": {
              "maxLength": 255,
              "minLength": 1,
              "required": [
                "true"
              ],
              "type": "string",
              "description": "Extraction pipeline external Id provided by client."
            },
            "statuses": {
              "type": "array",
              "description": "Extraction pipeline statuses list. Expected values: success, failure, seen.",
              "items": {
                "$ref": "#/components/schemas/ExtPipeRunStatus"
              }
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestampRange"
            },
            "message": {
              "$ref": "#/components/schemas/StringFilter"
            }
          }
        },
        "StringFilter": {
          "type": "object",
          "properties": {
            "substring": {
              "type": "string",
              "description": "Substring to find strings, that contains it ignoring case."
            }
          }
        },
        "ExtPipeRunResponse": {
          "required": [
            "status"
          ],
          "type": "object",
          "properties": {
            "id": {
              "maximum": 9007199254740991,
              "minimum": 1,
              "type": "integer",
              "description": "A server-generated ID for the object.",
              "format": "int64"
            },
            "status": {
              "minLength": 1,
              "required": [
                "true"
              ],
              "type": "string",
              "description": "Extraction Pipeline status."
            },
            "message": {
              "type": "string",
              "description": "Error message."
            },
            "createdTime": {
              "$ref": "#/components/schemas/EpochTimestamp"
            }
          },
          "description": "Extraction Pipeline Run. Contains extraction pipeline status and message for a moment of time"
        },
        "ItemsResponse_ExtPipeRunResponse_": {
          "type": "object",
          "properties": {
            "items": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExtPipeRunResponse"
              }
            },
            "nextCursor": {
              "type": "string",
              "description": "The cursor to get the next page of results (if available)."
            }
          },
          "description": "Response with a list of elements."
        }
      },
      "parameters": {
        "project": {
          "in": "path",
          "name": "project",
          "required": true,
          "description": "The project name.",
          "schema": {
            "type": "string",
            "example": "publicdata"
          }
        },
        "partition": {
          "in": "query",
          "name": "partition",
          "required": false,
          "description": "Splits the data set into N partitions.\nYou need to follow the cursors within each partition in order to receive all the data.\nExample: 1/10\n",
          "schema": {
            "type": "string",
            "example": "1/10"
          }
        },
        "CogniteInternalId": {
          "in": "path",
          "name": "id",
          "required": true,
          "schema": {
            "$ref": "#/components/schemas/CogniteInternalId"
          }
        },
        "Offset": {
          "name": "offset",
          "description": "Offset from the first result. Sum of limit and offset must not exceed 1000.",
          "in": "query",
          "schema": {
            "type": "integer",
            "default": 0,
            "minimum": 0,
            "maximum": 1000
          }
        },
        "Limit": {
          "name": "limit",
          "description": "Limits the number of results to be returned. The maximum results returned by the server is 1000 even if you specify a higher limit.",
          "in": "query",
          "schema": {
            "type": "integer",
            "default": 100,
            "minimum": 1,
            "maximum": 1000
          }
        },
        "Cursor": {
          "name": "cursor",
          "description": "Cursor for paging through results.",
          "in": "query",
          "schema": {
            "type": "string",
            "example": "4zj0Vy2fo0NtNMb229mI9r1V3YG5NBL752kQz1cKtwo"
          }
        },
        "IncludeMetadata": {
          "name": "includeMetadata",
          "in": "query",
          "description": "Whether the metadata field should be returned, or not.",
          "schema": {
            "type": "boolean",
            "default": true
          }
        },
        "Name": {
          "name": "name",
          "in": "query",
          "schema": {
            "$ref": "#/components/schemas/FileName"
          }
        },
        "ModelId": {
          "name": "modelId",
          "in": "path",
          "description": "Model ID.",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        },
        "RevisionId": {
          "name": "revisionId",
          "in": "path",
          "description": "Revision ID.",
          "required": true,
          "schema": {
            "type": "integer",
            "format": "int64"
          }
        },
        "modelId": {
          "in": "path",
          "name": "modelId",
          "required": true,
          "schema": {
            "$ref": "#/components/schemas/ModelId"
          }
        },
        "jobId": {
          "in": "path",
          "name": "jobId",
          "required": true,
          "schema": {
            "$ref": "#/components/schemas/JobId"
          }
        }
      },
      "responses": {
        "MissingField": {
          "description": "Missing required fields.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "description": "Some required fields are missing.",
                "required": [
                  "code",
                  "message",
                  "missingFields"
                ],
                "properties": {
                  "code": {
                    "type": "integer",
                    "description": "HTTP status code.",
                    "format": "int32",
                    "example": 400
                  },
                  "message": {
                    "type": "string",
                    "description": "Error message."
                  },
                  "missingFields": {
                    "uniqueItems": true,
                    "type": "array",
                    "description": "Fields that are missing.",
                    "items": {
                      "type": "object",
                      "description": "Fields that are missing."
                    }
                  }
                }
              }
            }
          }
        },
        "EmptyResponse": {
          "description": "Empty response.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "ErrorResponse": {
          "description": "The response for a failed request.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "error"
                ],
                "properties": {
                  "error": {
                    "$ref": "#/components/schemas/Error"
                  }
                }
              }
            }
          }
        },
        "AggregateResponse": {
          "description": "Response with list of aggregation results.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AggregateResult"
              }
            }
          }
        },
        "AssetDataWithCursorResponse": {
          "description": "Paged response with list of assets.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataWithCursorAsset"
              }
            }
          }
        },
        "AssetDataResponse": {
          "description": "Response with list of assets.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataAsset"
              }
            }
          }
        },
        "AssetAggregateResponse": {
          "description": "Response with asset aggregates.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataAssetAggregate"
              }
            }
          }
        },
        "AssetResponse": {
          "description": "Response with a single asset.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Asset"
              }
            }
          }
        },
        "EventDataResponse": {
          "description": "Paged response with list of events",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EventResponse"
              }
            }
          }
        },
        "EventAggregateResponse": {
          "description": "Response with list of event aggregations",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataEventAggregate"
              }
            }
          }
        },
        "EventResponse": {
          "description": "response with list of events",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Event"
              }
            }
          }
        },
        "EventDataWithCursorResponse": {
          "description": "Paged response with list of events",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/EventWithCursorResponse"
              }
            }
          }
        },
        "FileMetadataResponse": {
          "description": "The response for a successful GET files/id operation",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/FilesMetadata"
              }
            }
          }
        },
        "UploadFileMetadataResponse": {
          "description": "The response for a successful files operation",
          "content": {
            "application/json": {
              "schema": {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/FilesMetadata"
                  },
                  {
                    "type": "object",
                    "required": [
                      "uploadUrl"
                    ],
                    "properties": {
                      "uploadUrl": {
                        "description": "The URL where the file contents should be uploaded.",
                        "type": "string"
                      }
                    }
                  }
                ]
              }
            }
          }
        },
        "FileMetadataWithCursorResponse": {
          "description": "The response for a successful files/list operation",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataWithCursor"
              }
            }
          }
        },
        "FileResponse": {
          "description": "The response for a successful files/byids, files/search or files/update operation",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataFileMetadata"
              }
            }
          }
        },
        "DataWithLinks": {
          "description": "The response for a successful files/downloadlink operation.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "items": {
                    "type": "array",
                    "items": {
                      "allOf": [
                        {
                          "$ref": "#/components/schemas/FileLink"
                        },
                        {
                          "$ref": "#/components/schemas/FileIdEither"
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "FilesAggregateResponse": {
          "description": "Response with files aggregates.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataFilesAggregate"
              }
            }
          }
        },
        "DataSetListResponse": {
          "description": "A list of data sets.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataSetList"
              }
            }
          }
        },
        "DataSetFilterResponse": {
          "description": "A list of data sets.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataSetListWithCursor"
              }
            }
          }
        },
        "DataSetAggregateResponse": {
          "description": "Response with list of data set aggregations",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/DataDataSetAggregate"
              }
            }
          }
        },
        "generalError": {
          "description": "General error object.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/generalErrorWrapper"
              }
            }
          }
        },
        "400GeneralError": {
          "description": "Bad request error. Typically issued if relationships in a create request have illegal/unsupported values.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/generalErrorWrapper"
              }
            }
          }
        },
        "409GeneralError": {
          "description": "Conflict error. Typically issued if external IDs on any relationship already exists, or if there are duplicate external IDs in the request itself.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/generalErrorWrapper"
              }
            }
          }
        },
        "persistedRelationships": {
          "description": "Relationships stored by CDF.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/relationshipResponseWrapper"
              }
            }
          }
        },
        "enrichedPersistedRelationships": {
          "description": "Relationships stored by CDF.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/enrichedRelationshipResponseWrapper"
              }
            }
          }
        },
        "pagedPersistedRelationships": {
          "description": "One page of relationships stored by CDF.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/pagedRelationshipResponseWrapper"
              }
            }
          }
        },
        "pagedEnrichedPersistedRelationships": {
          "description": "One page of relationships stored by CDF.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/pagedEnrichedRelationshipResponseWrapper"
              }
            }
          }
        },
        "emptyDeleteResponse": {
          "description": "Empty response for deleting relationships.",
          "content": {
            "application/json": {
              "schema": {
                "type": "object"
              }
            }
          }
        },
        "filteredRelationships": {
          "description": "One page of relationships stored by CDF that match the provided filter.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/pagedEnrichedRelationshipResponseWrapper"
              }
            }
          }
        }
      },
      "requestBodies": {
        "newRelationship": {
          "description": "Data required to create relationships. You can request a maximum of 1000 relationships per request.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/relationshipRequestWrapper"
              }
            }
          }
        },
        "listOfExternalIds": {
          "description": "Data required to list relationships.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/byIdsRequest"
              }
            }
          }
        },
        "delete": {
          "description": "Data required to delete relationships. You can delete a maximum of 1000 relationships per request.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/deleteRequest"
              }
            }
          }
        },
        "advancedList": {
          "description": "Data required to filter relationships. Combined filters are interpreted as an AND operation (not OR). Only relationships that match ALL the provided filters are returned.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/relationshipsAdvancedListRequest"
              }
            }
          }
        },
        "updateObject": {
          "description": "Data required to update relationships.",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/updateRelationshipWrapper"
              }
            }
          }
        }
      }
    },
    "security": [
      {
        "api-key": []
      },
      {
        "oidc-token": []
      }
    ],
    "x-tagGroups": [
      {
        "name": "Authentication",
        "tags": [
          "Login",
          "Logout"
        ]
      },
      {
        "name": "Identity and access management",
        "tags": [
          "Projects",
          "Groups",
          "Service accounts",
          "API keys",
          "Security categories",
          "Sessions",
          "Token"
        ]
      },
      {
        "name": "Core data model",
        "tags": [
          "Assets",
          "Time series",
          "Synthetic Time Series",
          "Events",
          "Files",
          "Sequences",
          "Geospatial"
        ]
      },
      {
        "name": "3D",
        "tags": [
          "3D Models",
          "3D Model Revisions",
          "3D Files",
          "3D Asset Mapping"
        ]
      },
      {
        "name": "Contextualization",
        "tags": [
          "Entity matching",
          "Engineering diagrams"
        ]
      },
      {
        "name": "Documents",
        "tags": [
          "Documents",
          "Document preview"
        ]
      },
      {
        "name": "Data ingestion",
        "tags": [
          "Raw",
          "Extraction Pipelines",
          "Extraction Pipelines Runs"
        ]
      },
      {
        "name": "Data organization",
        "tags": [
          "Data sets",
          "Labels",
          "Relationships"
        ]
      },
      {
        "name": "Transformations",
        "tags": [
          "Transformations",
          "Transformation Jobs",
          "Transformation Schedules",
          "Transformation Notifications",
          "Query",
          "Schema"
        ]
      }
    ],
    "tags": [
      {
        "name": "Assets",
        "description": "The assets resource type stores digital representations of objects or groups of objects from the physical world. Assets are organized in hierarchies. For example, a water pump asset can be part of a subsystem asset on an oil platform asset."
      },
      {
        "name": "Events",
        "description": "Event objects store complex information about multiple assets over a time period. For example, an event can describe two hours of maintenance on a water pump and some associated pipes, or a future time window where the pump is scheduled for inspection. This is in contrast with data points in time series that store single pieces of information about one asset at specific points in time (e.g., temperature measurements).\n\nAn event???s time period is defined by a start time and end time, both millisecond timestamps since the UNIX epoch. The timestamps can be in the future. In addition, events can have a text description as well as arbitrary metadata and properties.\n\nAsset references obtained from an event - through asset ids - may be invalid, simply by the non-transactional nature of HTTP. They are maintained in an eventual consistent manner.\n"
      },
      {
        "name": "Files",
        "description": "A file stores a sequence of bytes connected to one or more assets. For\nexample, a file can contain a piping and instrumentation diagram (P&IDs)\nshowing how multiple assets are connected.\n\nEach file is identified by the 'id' field, which is generated internally \nfor each new file. Each file's 'id' field is unique within a project.\n\nThe 'externalId' field is optional, but can also be used to identify a file. \nThe 'externalId' (if used) must be unique within a project.\n\nFiles are created in two steps; First the metadata is stored in a file\nobject, and then the file contents are uploaded. This means that files can\nexist in a non-uploaded state. The upload state is reflected in the 'uploaded' \nfield in responses.\n\nAsset references obtained from a file - through asset ids - may be\ninvalid, simply by the non-transactional nature of HTTP.\nThey are maintained in an eventual consistent manner."
      },
      {
        "name": "3D",
        "description": "We organize 3D data into models and revisions. A model is just a placeholder for a set of revisions. Revisions contains the actual 3D data. For example you can have a model named Compressor and you can upload a revision under that model. When you create a revision you need to attach a 3D file. For every new version of the 3D model you upload a new revision under the placeholder model. You can then easily track the history of a model by browsing the different revisions.\n\nWhen you upload a new revision Cognite need to process the 3D data to optimize it for rendering. This can take some time and we therefore give you a status string back in the revision object. You can then follow the process while you wait.\n\nA 3D model is typically built up by a hierarchical structure. This looks very similar to how we organize our internal asset hierarchy. We support endpoints to extract the 3D node hierarchy and endpoints to make mappings from the 3D nodes to nodes in Cognite's asset hierarchy. We assign a random ID, nodeId, to each node in the 3D hierarchy. This is the ID representing the object in the viewer. When a user click on a object in the viewer it returns the ID for the object that was clicked. You can then use that ID to look up which node in the hierarchy the user clicked on.\n\nWe also deliver a [web based 3D viewer](https://www.npmjs.com/package/@cognite/3d-viewer) to embed the 3D model in your own web page."
      },
      {
        "name": "Time series",
        "description": "A time series consists of a sequence of data points connected to a single asset. \n\nFor example: A water pump asset can have a temperature time series that records a data point in units of ??C every second. \n\nA single asset can have several time series. The water pump could have additional time series measuring pressure within the pump, rpm, flow volume, power consumption, and more.\n\nTime series store data points as either number or strings. This is controlled by the is_string flag on the time series object. Numerical data points can be aggregated before they are returned from a query (e.g., to find the average temperature for a day). String data points, on the other hand, cannot be aggregated by CDF, but can store arbitrary information like states (e.g. ???open???/???closed???) or more complex information (JSON).\n\nCognite stores discrete data points, but the underlying process measured by the data points can vary continuously. When interpolating between data points, we can either assume that each value stays the same until the next measurement, or that it linearly changes between the two measurements. This is controlled by the is_step flag on the time series object. For example, if we estimate the average over a time containing two data points, the average will either be close to the first (is step) or close to the mean of the two (not is step).\n\nA data point stores a single piece of information, a number or a string, associated with a specific time. Data points are identified by their timestamps, measured in milliseconds since the unix epoch -- 00:00, January 1st, 1970. Milliseconds is the finest time resolution supported by CDF i.e. fractional milliseconds are not supported. Leap seconds are not counted.\n\nNumerical data points can be aggregated before they are retrieved from CDF. This allows for faster queries by reducing the amount of data transferred. You can aggregate data points by specifying one or more aggregates (e.g. average, minimum, maximum) as well as the time granularity over which the aggregates should be applied (e.g. ???1h??? for one hour).\n\nAggregates are aligned to the start time modulo the granularity unit. For example, if you ask for daily average temperatures since Monday afternoon last week, the first aggregated data point will contain averages for Monday, the second for Tuesday, etc. Determining aggregate alignment without considering data point timestamps allows CDF to pre-calculate aggregates (e.g. to quickly return daily average temperatures for a year). As a consequence, aggregating over 60 minutes can return a different result that aggregating over 1 hour because the two queries will be aligned differently. \n\nAsset references obtained from a time series - through its asset id - may be invalid, simply by the non-transactional nature of HTTP. They are maintained in an eventual consistent manner."
      },
      {
        "name": "Synthetic Time Series",
        "description": "Synthetic Time Series (STS) is a way to combine various input time series, constants and operators, to create completely new time series.\n\nFor example can we use the expression `24 * TS{externalId='production/hour'}` to convert from hourly to daily production rates.\n\nBut STS is not limited to simple conversions.\n* We support combination of different time series `TS{id=123} + TS{externalId='hei'}`.\n* Functions of time series `sin(pow(TS{id=123}, 2))`.\n* Aggregations of time series `TS{id=123, aggregate='average', granularity='1h'}+TS{id=456}`\n\nTo learn more about synthetic time series please follow [our guide](/dev/concepts/resource_types/synthetic_timeseries)."
      },
      {
        "name": "Raw",
        "description": "Manage data in the raw NoSQL database. Each project will have a variable number of raw databases, each of which will have a variable number of tables, each of which will have a variable number of key-value objects. Only queries on key are supported through this API."
      },
      {
        "name": "Security categories",
        "description": "Manage security categories for a specific project.\nSecurity categories can be used to restrict access to a resource.\nApplying a security category to a resource means that only principals (users or service accounts) that also have this security category can access the resource.\nTo learn more about security categories please read [this page](/dev/guides/iam/authorization.html#security-categories).\n"
      },
      {
        "name": "Data sets",
        "description": "Data sets let you document and track data lineage, ensure data integrity, and allow 3rd parties to write their insights securely back to a Cognite Data Fusion (CDF) project.\n\n\nData sets group and track data by its source. For example, a data set can contain all work orders originating from SAP. Typically, an organization will have one data set for each of its data ingestion pipelines in CDF.\n\n\nA data set consists of metadata about the data set, and the data objects that belong to the data set. Data objects, for example events, files, and time series, are added to a data set through the `dataSetId` field of the data object. Each data object can belong to only one data set.\n\n\nTo learn more about data sets, see [getting started guide](/cdf/data_governance/concepts/datasets/)"
      },
      {
        "name": "Sequences",
        "description": "A sequence stores a table with up to 400 columns indexed by row number. There can be at most 400 numeric columns and 200 string columns. Each of the columns has a pre-defined type which is a string, integer, or floating point number.\n\nFor example, a sequence can represent a curve, either with the dependent variable x as the row number  and a single value column y, or can simply store (x,y) pair in the rows directly. Other potential applications include data logs in which the index is not time-based.\nTo learn more about sequences, see the [concept guide](/dev/concepts/resource_types/sequences.html).\n"
      },
      {
        "name": "Relationships",
        "description": "The relationships resource type represents connections between resource objects in CDF. Relationships allow you to organize assets in other structures in addition to the standard hierarchical asset structure.\nEach relationship is between a source and a target object and is defined by a relationship type and the external IDs and resource types of the source and target objects. Optionally, a relationship can be time-constrained with a start and end time.\nTo define and manage the available relationship types, use the labels resource type.\nThe externalId field uniquely identifies each relationship."
      },
      {
        "name": "Entity matching",
        "description": "The entity matching contextualization endpoints lets you match CDF resources.  For example, you can match time series to assets. The model uses similarity between string-fields from the source and the target to find potential matches, for instance the source name and the target name. The exact algorithm may change over time."
      },
      {
        "name": "Extraction Pipelines",
        "description": "Extraction Pipeline objects represent the applications and software that are deployed to ingest operational data into CDF.  An extraction pipeline can consist of a number of different software components between the source system and CDF. The extraction pipeline object represents the software component that actually sends the data to CDF. Two examples are Cognite extractors and third party ETL tools such as Microsoft Azure or Informatica PowerCenter"
      },
      {
        "name": "Extraction Pipelines Runs",
        "description": "Extraction Pipelines Runs are CDF objects to store statuses related to an extraction pipeline. The supported statuses are: success, failure and seen. The statuses are related to two different types of operation of the extraction pipeline. Success and failure indicate the status for a particular EP run where the EP attempts to send data to CDF. If the data is successfully posted to CDF the status of the run is ???success???; if the run has been unsuccessful and the data is not posted to CDF, the status of the run is ???failure???. Message can be stored to explain run status. Seen is a heartbeat status that indicates that the extraction pipeline is alive. This message is sent periodically on a schedule and indicates that the extraction pipeline is working even though data may not have been sent to CDF by the extraction pipeline."
      }
    ]
  }
]