/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const lambdaHandler = async (event, context) => {
//  throw new Error("This will cause a deployment rollback")
    console.log("Change deployed with SAM Accelerate")
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'I\'m using canary deployments',
            })
       }
    } catch (err) {
        console.log(err);
        return err;
    }
};
