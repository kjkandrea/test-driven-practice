import {build, BuildOptions} from 'esbuild'
import path from 'path'
import fs from 'fs'

const template = (bundleName: string) => `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
    <link rel="stylesheet" href="./${bundleName}.css" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="app"></div>
    <script src="./${bundleName}.js"></script>
  </body>
</html>
`;

const outdir = path.resolve(__dirname, '..', 'dist');

fs.writeFileSync(
	path.resolve(outdir, "./index.html"),
	template("./index")
);

// es-build option
const buildOptions: BuildOptions = {
	bundle: true,
	entryPoints: [path.resolve(__dirname, '..', 'src/index.tsx')],
	outdir,
	target: ["chrome58", "firefox57", "safari11", "edge16"],
	minify: true,
	sourcemap: false,
	define: {
		"process.env.NODE_ENV": `"production"`,
	},
	loader: {
		'.gif': 'file'
	}
};

build(buildOptions).catch(() => process.exit(1));