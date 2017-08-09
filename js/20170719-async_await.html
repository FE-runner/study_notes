<!DOCTYPE html>
<html lang="en">

<head>
  <title>html-vue的模板</title>
  <meta charset="UTF-8">
  <!--<meta http-equiv="refresh" content="1">-->
  <meta name="author" content="liyang">
  <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
  <style>
	* {
	  margin: 0;
	  padding: 0;
	}
	
  </style>
  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.bootcss.com/vue/2.3.4/vue.min.js"></script>

</head>

<body>
  <div id="app">
	
  </div>
  <script>
	function fetchUser() {
  return new Promise((resolve, reject) => {
    fetch('https://api.github.com/users/superman66')
      .then((data) => {
        resolve(data.json());
      }, (error) => {
        reject(error);
      });
  });
}

/**
 * Promise 方式
 */
function getUserByPromise() {
  fetchUser()
    .then((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
}
getUserByPromise();

/**
 * Generator 方式
 */
function * fetchUserByGenerator() {
  const user = yield fetchUser();
  return user;
}

const g = fetchUserByGenerator();
const result = g.next().value;
result.then((v) => {
  console.log(v);
}, (error) => {
  console.log(error);
});

/**
 * async 方式
 */
async function getUserByAsync() {
  const user = await fetchUser();
  return user;
}
getUserByAsync()
  .then(v => console.log(v))
  .catch(e => console.log(e));


  </script>
</body>

</html>
