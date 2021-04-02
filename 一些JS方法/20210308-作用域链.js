(() => {
  function showName() {
    console.log(name);
  }
  function showName1() {
    var name = '李四';
    showName();
  }
  var name = '张三';
  showName1();
})();
(() => {
  function showName1() {
    function showName() {
      console.log(name);
    }
    showName();
    var name = '李四';
  }

  var name = '张三';
  showName1();
})();
(() => {
  function showName1() {
    function showName() {
      console.log(name);
    }
    var name = '李四';
    showName();
  }

  var name = '张三';
  showName1();
})();
