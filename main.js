import { program } from "commander";
import * as fs from "node:fs/promises";
import { marked } from "marked";

// fileオプションを定義する
// gfmオプションを定義する
program.option("-f, --file <n>", "対象ファイル", "")
  .option("-gfm, --gfm <n>", "GFMを有効にする", false)
  .parse(process.argv);

const options = program.opts();

// コマンドライン引数で指定されなかったオプションにデフォルト値を上書きする
const cliOptions = {
  filePath: options.file ?? "",
  gfm: options.gfm ?? false,
};

const file = await fs.readFile(cliOptions.filePath, 'utf8').catch(e => {
  console.error(e);
  process.exit(1);
});

const html = marked.parse(file);
console.log(html);
