var patcher = require("html-patcher");
var hyperglue = require("hyperglue");

module.exports = virtualGlue;

function virtualGlue (parent, template, updates) {
  if (arguments.length == 2) return hyperglue(parent, template).outerHTML;

  var patch;
  var queued;

  patcher(parent, hyperglue(template, updates()).outerHTML, function (error, patchfn) {
    if (error) throw error;
    patch = patchfn;

    if (queued) {
      patch(hyperglue(template, updates()).outerHTML);
    }
  });

  return function () {
    if (!patch) {
      queued = true;
      return;
    }

    return patch(hyperglue(template, updates()).outerHTML);
  };
}
