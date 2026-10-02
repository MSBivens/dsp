// Plain-string lists get their labels sentence-cased by the Studio
// ("Coast guard"); explicit titles keep the capitalization as written.
export const asOptions = (values) =>
  values.map((value) => ({ title: value, value }));
