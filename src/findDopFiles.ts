import { promises } from 'fs';
import { resolve } from 'path';

const { readdir } = promises;

export const findDopFiles = async (directory: string): Promise<string[]> => {
  const list = await readdir(directory, { withFileTypes: true });
  const directories = list.filter((dirent) => dirent.isDirectory());
  const files = list.filter((dirent) => !dirent.isDirectory());
  const ddops = await Promise.all(
    directories
      .map((file) => resolve(directory, file.name))
      .map(findDopFiles),
  );
  const dops = files
    .map(({ name }) => name)
    .filter((name) => name.endsWith('CR3.dop'))
    .map((name) => resolve(directory, name));

  return [
    ...ddops.flat(),
    ...dops,
  ];
};

