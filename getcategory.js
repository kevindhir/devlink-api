/**
 * Created by kevindhir on 2018-01-14.
 */

import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "posts",
        FilterExpression: "contains(#category, :v)",
        ExpressionAttributeNames: { "#category": "category" },
        ExpressionAttributeValues: { ":v": event.pathParameters.category }
    };

    try {
        const result = await dynamoDbLib.call("scan", params);
        // Return the matching list of items in response body
        callback(null, success(result.Items));
    } catch (e) {
        callback(null, failure({ status: false }));
    }
}
