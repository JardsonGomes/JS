let person = {
  name: "Jard",
  age: 31,
  weigth: 99.9,
};

for (let proprety in person) {
  console.log(proprety + " :");
  console.log(person[proprety]);
}
