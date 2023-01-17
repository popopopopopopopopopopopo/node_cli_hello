import { program } from "commander";
import * as fs from "node:fs/promises";

// fileオプションを定義する
program.option("--f", "対象ファイル");
// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");

const options = program.opts();
program.parse(process.argv);

// コマンドライン引数で指定されなかったオプションにデフォルト値を上書きする
const cliOptions = {
  filePath: options.f ?? "",
  gfm: options.gfm ?? false,
};

const file = await fs.readFile(cliOptions.filePath).catch(e => {
  console.error(e);
  process.exit(1);
});
