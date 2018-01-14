/**
 * Created by kevindhir on 2018-01-13.
 */
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event, context, callback) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: "comments",
        KeyConditionExpression: "postId = :postId",
        ExpressionAttributeValues: {
            ":postId": data.postId
        }
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        callback(null, success(result.Items));
    } catch (e) {
        callback(null, failure({status: false}));
    }
}