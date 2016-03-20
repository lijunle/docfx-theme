// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.
function transform(model, attrs, global) {
  return {
    model: JSON.stringify(model, null, 2),
    attrs: JSON.stringify(attrs, null, 2),
    global: JSON.stringify(global, null, 2)
  }
}
