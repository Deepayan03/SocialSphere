import DataUriParser from "datauri/parser.js";
import path from "path";

export type MulterFile = {
  originalname: string;
  buffer: Buffer;
};

const getDataUri = (file: MulterFile): string => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname);

  // console.log(extName);
  const parsed: string | undefined = parser.format(
    extName,
    file.buffer
  ).content;
  if (parsed) {
    return parsed;
  }
  return "";
};

export default getDataUri;
