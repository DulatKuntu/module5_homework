let map=new Map([
    ["first", "firstVal"],
    ["second", "secondVal"],
    [3,"val"]
]);
for(let key of map.keys()){
    console.log(`Key-${key}, Val-${map.get(key)}`);
}