import { Quran } from "../../models/quran/quran.model";
import { Observable, BehaviorSubject} from "rxjs";
import { Note } from "../../models/quran/note.model";
import { DataWraper } from "../../models/dataWraper.model";
import { Sura } from "../../models/meta/sura.model";
import { Trie } from "../../models/trie";



export abstract class QuranRepository {
  
  quran! : DataWraper<Quran>;
  quranClean! : DataWraper<Quran>;
  muyassar! : DataWraper<Quran>; 
  tabary! : DataWraper<Quran>;
  qortobi! : DataWraper<Quran>;
  ibnKatheer! : DataWraper<Quran>;
  jalalayn! : DataWraper<Quran>;
  translation! : DataWraper<Quran>; 
  suras! : DataWraper<Sura>;
  words!: BehaviorSubject<Map<string, number>>; 
  letters!: BehaviorSubject<Map<string, number>>; 
  trie!: BehaviorSubject<Trie>;
  
  abstract getMindMap(index : number) :Observable<any>; 
 
  abstract getNote(aya : Quran) :Observable<Note> ;

  abstract insertNote(note : Note): void; 
  
  abstract getSimilarAyas(aya : Quran) :Observable<Quran[]>;
  
  abstract getUniques() :Observable<Quran[]>;

  abstract getTopics() :Observable<Quran[][]>;
}
