const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
