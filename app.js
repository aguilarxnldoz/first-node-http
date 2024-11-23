
const http = require('node:http');

const webServer = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html')
        res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
</head>

<body>
    <header><h1>Temperature Converter</h1></header>

        <form method="post">
            <label>
                <input type="number" name="temp">
            </label>

            <fieldset>
                <label>
                    C to F
                    <input type="radio" name="convert-temp" value="C2F">
                </label>

                <label>
                    F to C
                    <input type="radio" name="convert-temp" value="F2C">
                </label>
            </fieldset>

            <label>
                <input type="submit">
            </label>
        </form>
</body>
</html>`)
    } else {
        let totalData = '';
        req.on('data', (chunk) => totalData += chunk.toString())
        req.on("end", () => {

            const splitData = totalData.split('&');

            console.log(splitData);

            let fahrenheitFormula = ((parseFloat(splitData[0].slice(5)) * (9 / 5)) + 32);
            let celciusFormula = ((parseFloat(splitData[0].slice(5)) - 32) * (5 / 9));
            
            let fahrenheitValue = fahrenheitFormula.toFixed(1)
            let celciusValue = celciusFormula.toFixed(1)

            let tempResult;

            if (splitData[1].substring(13) === 'C2F') {
                tempResult = fahrenheitValue;
            } else if (splitData[1].substring(13) === 'F2C') {
                tempResult = celciusValue;
            }
            res.setHeader('Content-Type', 'text/html');
            res.setHeader('Content-Type','text/html')
            res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Temperature Converter</title>
</head>

<body>
    <header><h1>Temperature Converter</h1></header>

        <form method="post">
            <label>
                <input type="number" name="temp">
            </label>

            <fieldset>
                <label>
                    C to F
                    <input type="radio" name="convert-temp" value="C2F">
                </label>

                <label>
                    F to C
                    <input type="radio" name="convert-temp" value="F2C">
                </label>
            </fieldset>

            <label>
                <input type="submit">
            </label>
        </form>
        <div class="outputTemp">
            <h2>Temperature Conversion:${tempResult}</h2>
        </div>
</body>
</html>`)
        })
        
    }

});


webServer.listen(8080, () => {
    console.log('Web Server is now running')
})

