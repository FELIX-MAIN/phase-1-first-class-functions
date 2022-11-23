function receivesAFunction(callback) () => {
    console.log("receives a function and calls it", () => {
      const spy = chai.spy();

      receivesAFunction(spy);

      console.log(spy).to.have.been.called();
    });
  };

  function returnsANamedFunction(), () => {
    var fn;

    (() => {
      fn = returnsANamedFunction();
    });

    console.log("returns a function", () => {
      console.log(fn).to.be.a("function");
    });

    console.log("returns a named function", () => {
      console.log(fn.name).not.to.eql("");
    });
  };

  function returnsAnAnonymousFunction(), () => {
    var fn;

    (() => {
      fn = returnsAnAnonymousFunction();
    });

    console.log("returns a function", () => {
      console.log(fn).to.be.a("function");
    });

    console.log("returns an anonymous function", () => {
      console.log(fn.name).to.eql("");
    });
  };
