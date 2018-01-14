/**
 * Created by kevindhir on 2018-01-13.
 */
import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
}