# Convert Json to Env Action

Parses a JSON file and converts all non-nested attributes to env variables.

## Inputs

json-file: The path to the json file
json-attribute: Dot notated path of nested object

## Outputs:

Each json entry will dynamically become an env variable.

## Example usage:

```
uses: SOERF/convert-json-to-env-action@v1.2
with:
    json-file: './file.json'
    json-attribute: 'my.data.path'
```

## Build

Install npm dependencies

`npm i`

Install ncc to compile node_modules into a single file

`npm i -g @vercel/ncc`

Compile

`ncc build index.js`
