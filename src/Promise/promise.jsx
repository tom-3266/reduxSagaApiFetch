import "./promise.css";
const PromiseRetry = () => {
  function retryPromiseFunction() {
    let count = 0;

    return function () {
      return new Promise((resolve, reject) => {
        if (count < 2) {
          console.log(count);
          ++count;
          reject("Failed");
        } else {
          console.log(count);
          resolve("success");
        }
      });
    };
  }

  const retry = retryPromiseFunction();
  retry()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  retry()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  retry()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  return (
    <div className="container">
      <div>Promise retry check</div>
      <div className="square">
        <div className="comp1"></div>
        <div className="comp2"></div>
      </div>
    </div>
  );
};

export default PromiseRetry;
