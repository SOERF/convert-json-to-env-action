# Convert Json to Env Action

This action converts all attributes in a single level json file into upper case env format.

## Inputs

json-file: The path to the json file

## Outputs:

Each json entry will dynamically become an output.

## Example usage:

```
uses: SOERF/convert-json-to-env-action@v1.1
with:
    json-file: './file.json'
```

## Build

Install npm dependencies

`npm i`

Install ncc to compile node_modules into a single file

`npm i -g @vercel/ncc`

Compile

`ncc build index.js`
