export class Image {
  id: number;
  name: string;
  type: string;
  picByte: Blob;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}
