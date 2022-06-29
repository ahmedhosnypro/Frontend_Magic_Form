function search(numbers) {
    return numbers.find(n => n % 11 === 0);
}