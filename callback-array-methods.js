const minions = [
	'bob',
	'kevin',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl',
];

// First, he wants to test out forEach to check who's present. So as he goes down the array of minions, they should console.log that they're here.

// minions.forEach((minion) => console.log(minion));

//They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the map method.

const capitalizedMinions = minions.map((minion) => {
	//return a string that concatenates the first character capitalized + the rest of the string
	return minion === 'kevin'
		? minion
		: minion.charAt(0).toUpperCase() + minion.slice(1);
});

// console.log(capitalizedMinions);

// In order to check whether or not that previous map worked, Gru wants to try using the every method instead. So, using every, check whether or not every minion in capitalizedMinions are actually capitalized.

function isCapitalized(minion) {
	if (minion.charAt(0).toUpperCase() === minion.charAt(0)) {
		return true;
	} else {
		return false;
	}
}

// console.log(capitalizedMinions.every(isCapitalized));

// Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the filter method to filter out the sneaky minion who didn't get capitalized.

const actuallyCapitalizedMinions = capitalizedMinions.filter(isCapitalized);
// console.log(actuallyCapitalizedMinions.every(isCapitalized));

const uncapitalizedMinion = capitalizedMinions.find(
	(minion) => minion.charAt(0).toUpperCase() !== minion.charAt(0)
);

// console.log(uncapitalizedMinion);

// Aha! Now that Gru's found out which minion escaped him, he wants to find out what index in the original array he was at so he can fix him up later.

const indexOfKevin = capitalizedMinions.findIndex(
	(minion) => minion === 'kevin'
);

// console.log(indexOfKevin);
capitalizedMinions[1] =
	capitalizedMinions[1].charAt(0).toUpperCase() +
	capitalizedMinions[1].slice(1);

capitalizedMinions.splice(
	capitalizedMinions.findIndex((minion) => minion === 'kevin'),
	1
);

// console.log(capitalizedMinions.every(isCapitalized));

// Sweet! Now that that's all sorted, Gru can just have some fun testing out the remaining array methods he wanted to learn, starting with reduce. Out of curiosity, he wants to know what the sum of all his minions' name lengths is. Use reduce to find out

//First, using map create a separate array called minionNameLengths that maps out the minions' name
// lengths;

const minionNameLengths = capitalizedMinions.map((minion) => minion.length);
// console.log(minionNameLengths);
const sumOfLengths = minionNameLengths.reduce((a, b) => a + b);
// console.log(sumOfLengths);

// Now Gru wants to test out the `some` method, so let's go ahead and do that a few times.

// -   Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above?

const sixOrAbove = minionNameLengths.some((length) => length >= 6);
// console.log(sixOrAbove);
const sevenOrAbove = minionNameLengths.some((length) => length >= 7);
// console.log(sevenOrAbove);

// -   Lowercase Kevin's name again inside of the `capitalizedMinions` array, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?
capitalizedMinions[1] =
	capitalizedMinions[1].charAt(0).toLowerCase() +
	capitalizedMinions[1].slice(1);

// console.log(capitalizedMinions);
// console.log(capitalizedMinions.some(isCapitalized));

function isLowerCase(minion) {
	if (minion.charAt(0) === minion.charAt(0).toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

// console.log(capitalizedMinions.some(isLowerCase));

// Great, now Gru has had some practice with array methods that require callbacks. Now it's time to do some bad guy stuff. Before he can do so by sending his minions out to do his bidding, he wants to sort them in ascending order of their name lengths. Because why not?

// -   Use `sort` to order the minions within the `capitalizedMinions` array by order of name length.
// -   Hints: you'll need to write your own `compareMinions` function first to pass in as a callback to `sort`

function compareMinions(a, b) {
	if (a.length < b.length) {
		return -1;
	}
	if (a.length > b.length) {
		return 1;
	}
	return 0;
}

const sortedMinions = capitalizedMinions.sort(compareMinions);
console.log(sortedMinions);
