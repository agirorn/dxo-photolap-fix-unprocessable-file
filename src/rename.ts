import { promises } from 'fs';

const { rename } = promises;

export const renameWithPrefix = async (files: string[]) => {
  const renameMap = files.map((file) => [
    file.replace(/\.CR3\.dop$/, '.CR3'),
    file.replace(/\.CR3\.dop$/, '-.CR3'),
  ]);

  return renameMap.map(([from, to]) => rename(from, to));
};

export const renameBack = async (files: string[]) => {
  const renameMap = files.map((file) => [
    file.replace(/\.CR3\.dop$/, '-.CR3'),
    file.replace(/\.CR3\.dop$/, '.CR3'),
  ]);

  return renameMap.map(([from, to]) => rename(from, to));
};

