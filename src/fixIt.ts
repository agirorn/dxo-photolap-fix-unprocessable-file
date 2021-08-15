import { findDopFiles } from './findDopFiles';
import {
  renameWithPrefix,
  renameBack,
} from './rename';
import { sleep } from './sleep';

const paths = process.argv.slice(2);
// eslint-disable-next-line no-console
console.log('paths', paths);

const run = async () => {
  const sideCarFiles = (await Promise.all(paths.map(findDopFiles))).flat();
  await renameWithPrefix(sideCarFiles);
  await sleep(5_000);
  await renameBack(sideCarFiles);

  // eslint-disable-next-line no-console
  console.log('DXO side car files processed', sideCarFiles);
};

// eslint-disable-next-line promise/prefer-await-to-callbacks
run().catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error);
  // eslint-disable-next-line node/no-process-exit
  process.exit(1);
});
