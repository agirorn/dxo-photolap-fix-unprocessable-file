# Fix for the DXO PhotoLab "This image cannot be processed" bug

If you encounter the bug in [DXO PhotoLab] that for some reason it thinks your
files are corrupt but they are not and you want to try to get past this error
message.

> This image cannot be processed because of an unknown error. It may be
> corrupted or in an unsupported format.

Then this script could be the solution for you.

## Installation

```shell
git clone https://github.com/agirorn/dxo-photolap-fix-unprocessable-file
```

## Usage

```shell
cd dxo-photolap-fix-unprocessable-file
yarn start path-to-CD3-files
```

## Details

The script search fro `.dop` side car files and if it finds on then it renamed
the file that the sidecar is for by adding a `-` after the name and before the
file extension. Then waits for (5 seconds) PhotoLap to figure out that the file
has been deleted and a new file has been added. Then the files is renamed back to
it's original name without the `-`. This seams to be enough to trick [PhotoLap]
into recognizing the image and seams to brake any other sidecar functionality and
PhotoLap dose remove the sidecar files for only the crouped files.

This was tested on [PhotoLap] 4.3.1

## Limitations

Currently it only works for raw files the CR3 extension, this could be easily
changes.

## Why does this happen

I think PhotoLab is reading the files from disk as soon as they are created and
they may not have completely been saved to disk when it reads them. Like when
coping large RAW files over a slow connection USB or network.

## Note

This script is meant to be used as a fix for a bug in [DXO PhotoLab] until is
gets a permanent fix in PhotoLab.

[DXO PhotoLab]: https://www.dxo.com/dxo-photolab/
[PhotoLab]: https://www.dxo.com/dxo-photolab/
