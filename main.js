//--- forEach ---

function forEach (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

//--- map ---

function map (array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++){
		result.push(callback(array[i]));
	}
	return result;
}

// var newArr = map(arr, function(value) {
// 	return value;
// })

//--- filter ---

function filter (arr, cb) {
	var result = [];
	forEach(arr, function(value) {
		if (cb(value)) {
			result.push(value);
		}
	});
	return result;
}

//--- reduce ---

function reduce (arr, cb) {
	var previous = arr[0];
	arr = arr.slice(1, arr.length);
	forEach(arr, function (value) {
		previous = cb(previous, value);
	});
	return previous;
}

//--- Data ---

var data = [
    { 
      title: "Cymbeline", 
      author: "Shakespeare", 
      year: 1623 
  	},
    { 
      title: "The Tempest", 
      author: "Shakespeare", 
      year: 1623 
  	},
    { 
      title: "Hamlet", 
      author: "Shakespeare", 
      year: 1603 
  	},
    { 
      title: "A Midsummer Night's Dream", 
      author: "Shakespeare", 
      year: 1600 
  	},
    { 
      title: "Macbeth", 
      author: "Shakespeare", 
      year: 1620 
  	},
    { 
      title: "Death of a Salesman", 
      author: "Arthur Miller", 
      year: 1949 
  	},
    { 
      title: "Two Blind Mice", 
      author: "Samuel and Bella Spewack", 
      year: 1949 
  	}
]

//--- Answers ---

function pluck (arr, propName) {
	return map(arr, function (item) {
		return item[propName];
	});
}

console.log(pluck(data, 'year'));

console.assert(pluck(data, 'year').length === data.length);
console.assert(pluck(data, 'year')[0] === 1623);


function reject (arr, cb) {
	var result = [];
	forEach(arr, function (value) {
		if (!cb(value)) {
			return result.push(value);
		}
	});
	return result;
}

console.log(reject(data, function (x) {
	return x.year > 1600; 
}));

console.assert(reject(data, (x) => x.year > 1600).length === 1);
console.assert(reject(data, (x) => x.year > 1900).length === 5);



function find (arr, cb) {
	var result;
	forEach(arr, function (value) {
		if (result === undefined && cb(value)) {
			result = value;
		}
	});
	return result;
}

console.log(find(data, (x) => x.year === 1623));

console.assert(find([1, 2, 3, 4, 5], (x) => x > 3) === 4);
console.assert(find([1, 2, 3, 4, 5], (x) => x > 1) === 2);



function where (arr, crit){
	return arr.filter (function (value) {
	for (var prop in crit) {
		if (crit[prop] !== value[prop]) {
			return false;
		}
		return true;
	}
});
}

console.log(where(data, {author: 'Shakespeare'}));

console.assert(where(data, {author: 'Arthur Miller'}).length === 1);
console.assert(where(data, {author: 'Shakespeare'}).length === 5);


	

















