/**
 * Created by kevindhir on 2018-01-14.
 */

import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "posts",
        Key: {
            "postId": event.pathParameters.id,
        }
    };

    try {
        const result = await dynamoDbLib.call("get", params);
        // Return the matching list of items in response body
        callback(null, success(result.Item));
    } catch (e) {
        callback(null, failure({status: false}));
    }
}
