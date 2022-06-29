function search(objects) {
    return objects.findIndex(o => o.name === "John" && o.age === 30);
}