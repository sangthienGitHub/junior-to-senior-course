var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = "brown";
var quote = "I'm not old, i'm only " + age;
//array
var pets = ["cat", "dog", "pig"];
var pets2 = ["lion", "dragon", "lizard"];
//Object
var wizard = {
    a: "John"
};
//null and undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ["basketball", 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Small;
//Any - !! BE CAREFUL, any type is ok with any type
var whatever = "aghhhh noo!!";
whatever = 5;
whatever = true;
whatever = basket;
whatever = "hi!!";
//void --> nothing return
var sing = function () {
    console.log("lalalala");
};
//never --> not return and doesn't have an end point
// will have error while replacing void with never previous statement
var error = function () {
    throw Error("ooops");
};
