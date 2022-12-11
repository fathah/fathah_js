let arabic_diacritics:RegExp, arabic_punctuations:string;
arabic_punctuations = "`\u00f7\u00d7\u061b<>_()*&^%][\u0640\u060c/:\"\u061f.,'{}~\u00a6+|!\u201d\u2026\u201c\u2013\u0640";
arabic_diacritics = RegExp("[\u064b-\u0652]", "g");




export function remove_diacritics(text:string) {
  /*  remove the `arabic diacritics` from the `text` . */
  text = text.replace(arabic_diacritics, "");
  return text;
}

export default {
  remove_diacritics
};
