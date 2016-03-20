function transform(model, attrs, global) {
  return {
    model: JSON.stringify(model, null, 2),
    attrs: JSON.stringify(attrs, null, 2),
    global: JSON.stringify(global, null, 2)
  }
}
