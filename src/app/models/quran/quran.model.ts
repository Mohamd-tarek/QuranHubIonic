import { QuranBase } from "./quranBase.model";

export class Quran extends QuranBase {
  constructor(
    public id: number,
    index: number,
    sura: number,
    aya: number,
    text: string) {

    super(index, sura, aya, text);
  }
 
}
