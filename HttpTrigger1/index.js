module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const params = req.body.split('&');
    let param_map = {};
    params.forEach(param => {
        const param_item = param.split('=');
        param_map[param_item[0]] = decodeURI(param_item[1]);
    });
    // context.bindings.outTable = JSON.stringify(param_map);
    context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {'Content-Type': 'text/json'},
        body: JSON.stringify(param_map)
    };
}
