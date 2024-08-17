function interpolate(html, params) {
  let names = Object.keys(params);
  let values = Object.values(params);
  const result = html.replace(/\n/g, '').replace(/\{\{\s*(\w+)\s*}}/g, '${$1}');
  return new Function(...names, `return \`${result}\`;`)(...values);
}

export default { interpolate };
