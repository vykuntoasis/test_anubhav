var x = 10;

QUnit.module("This is my first moduel")

var addNumber = function () {
      var x = 10;
      var y = 20;

      z = x + y;

      return z
}

QUnit.module("This is my seond moduel");


QUnit.test("just for fun", function (assert) {
      // here we write test cases

      var obtainedResult = addNumber();


      assert.ok(obtainedResult === 30, "The test case passed")
      // assert.ok("" == 0 , "in Js blank is") 

}
)

QUnit.test("just for fun", function (assert) {
      // here we write test cases


      var obtainedResult = 1
      var expected = 1

      assert.equal(expected, obtainedResult, "Actual and expected matched")

      assert.equal(0, "", "actual and expected matched")
      assert.strictEqual(0, "", "actual and expectd matched")


})

QUnit.test("This is how to test Asynchoronous calls", function(assert){

      assert.timeout(2000)
      var j = assert.async();

      setTimeout(function(){
             assert.ok(1==1,"My aysn code trigger")
             j();
      },3000)
})

QUnit.module("Comparing jso in tests");

QUnit.test("test for josn",function(assert){
      var emp = {
            foo: "anubhav"
      }

      assert.deepEqual(emp,{foo: "anubhav"}, "JSON compare success")
})