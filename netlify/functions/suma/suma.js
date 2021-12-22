const handler = async (event) => {
  try {
    const a = parseInt(event.queryStringParameters.num1)
    const b = parseInt(event.queryStringParameters.num2)
    return {
      statusCode: 200,
      body: JSON.stringify({message: `La suma es ${a+b}`}),
    }
  } catch (error) {
    return {statusCode: 500 , body: error.toString() }
  }
}
module.exports = {handler}
