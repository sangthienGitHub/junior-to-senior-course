const sum = (a: number, b: number) => {
  return a + b;
};

const answer = sum(4, 5);

//boolean
let isCool: boolean = true;

//number
let age: number = 56;

//string
let eyeColor: string = "brown";
let quote: string = `I'm not old, i'm only ${age}`;

//array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

//Object
let wizard: object = {
  a: "John",
};

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

//Tuple
let basket: [string, number];
basket = ["basketball", 5];

//Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;

//Any - !! BE CAREFUL, any type is ok with any type
let whatever: any = "aghhhh noo!!";
whatever = 5;
whatever = true;
whatever = basket;
whatever = "hi!!";

//void --> nothing return
let sing = (): void => {
  console.log("lalalala");
};

//never --> not return and doesn't have an end point
// will have error while replacing void with never previous statement
let error = (): never => {
  throw Error("ooops");
};
