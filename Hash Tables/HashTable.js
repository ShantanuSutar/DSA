class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key, value) {
        let address = this._hash(key);;
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        return console.log(this.data);
    }
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key)
                    return console.log(currentBucket[i][1]);
            }
        }
        return console.log(undefined)
    }
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0])
            }
        }
        return console.log(keysArray);
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.get('apples')
myHashTable.get('applessss')

myHashTable.keys();


