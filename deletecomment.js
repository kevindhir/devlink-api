/**
 * Created by kevindhir on 2018-01-14.
 */
/**
 * Created by kevindhir on 2018-01-13.
 */
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
    const params = {
        TableName: "comments",
        Key: {
            commentId: event.pathParameters.comment,
            postId: event.pathParameters.post
        }
    };

    try {
        const result = await dynamoDbLib.call("delete", params);
        callback(null, success({ status: true }));
    } catch (e) {
        callback(null, failure({ status: false }));
    }
}