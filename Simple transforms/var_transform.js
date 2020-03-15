module.exports = function(babel) {
    var t = babel.types;
    return {
      visitor: {
        Identifier: function(path) {
          if(path.node.name === 'wayfair') {
            path.node.name = `__${path.node.name}__`
          }
          if(path.node.name === 'wf') {
            path.node.name = `__${path.node.name}__`
          }
        }
      }
    };
  };
  