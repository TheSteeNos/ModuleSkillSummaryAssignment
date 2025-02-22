import test from "../../tools/test.mjs";
const tests = test("Greeting a Name Test");



function greeting(name) {
    if (typeof name !== "string" || /[^a-zA-Z\s]/.test(name)) return null;
    name = name.trim();
    if (name === "") return "No name entered";
    let letters = name.split(/\s+/);
    for (let i = 0; i < letters.length; i++) {
        letters[i] = letters[i].charAt(0).toUpperCase() + letters[i].slice(1).toLowerCase();
    }
    name = letters.join(' ');

    return "Hello " + name + "! How are you?"
}

tests.isEqual(greeting(4), null, "Expects null as input isn't a string");
tests.isEqual(greeting('     Donald  '), 'Hello Donald! How are you?', 'Expects removal of spaces in front and behind');
tests.isEqual(greeting('donALd'), 'Hello Donald! How are you?', 'Expects to capitalize first letters of the name');
tests.isEqual(greeting('donald duck'), 'Hello Donald Duck! How are you?', 'Expects to properly handle double names');
tests.isEqual(greeting('  '), 'No name entered', 'Expects "No name entered"');
tests.isEqual(greeting('donald@gmail.com'), null, 'Expects null as input has special characters');