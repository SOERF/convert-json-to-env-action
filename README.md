# Convert Json to Env Action

This action converts all attributes in a single level json file into upper case env format.

## Inputs

json-file: The path to the json file

## Outputs:

env: The env formatted json file as a string

## Example usage:

```
uses: SOERF/convert-json-to-env-action@v1.0
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
