1. Before a project start, create a scoped public package:

- npm init --scope=@fellendorf

2. Добавьте "declaration": true в compilerOptions в tsconfig.json
3. Добавте в package.json

- "main": "dist/index.js",
- "types": "dist/index.d.ts",

4. To publish a scoped public package, use the following command from the root directory:

- npm publish --access public

TODO:

- README.md
- TESTS
