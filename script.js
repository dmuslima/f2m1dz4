let name = prompt('Ismingizni kiriting');

let letter = prompt('Bironta harf kiriting');

if (name.includes(letter)) {
    alert(`${name} ismining ichida ${letter} harfi mavjud`);
} else {
    alert(`${name} ismining ichida ${letter} harfi mavjud emas`);
}