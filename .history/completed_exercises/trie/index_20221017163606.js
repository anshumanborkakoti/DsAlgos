
// Javascript implementation of search and insert operations
// on Trie
//https://www.geeksforgeeks.org/trie-insert-and-search/

// Alphabet size (# of symbols)
let ALPHABET_SIZE = 26;

// trie node
class TrieNode
{
	constructor()
	{
		this.isEndOfWord = false;
		this.children = new Array(ALPHABET_SIZE);
		for (let i = 0; i < ALPHABET_SIZE; i++)
			this.children[i] = null;
	}
}

let root;

// If not present, inserts key into trie
	// If the key is prefix of trie node,
	// just marks leaf node
function insert(key)
{
	let level;
		let length = key.length;
		let index;
	
		let pCrawl = root;
	
		for (level = 0; level < length; level++)
		{
			index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
			if (pCrawl.children[index] == null)
				pCrawl.children[index] = new TrieNode();
	
			pCrawl = pCrawl.children[index];
		}
	
		// mark last node as leaf
		pCrawl.isEndOfWord = true;
}

// Returns true if key presents in trie, else false
function search(key)
{
	let level;
		let length = key.length;
		let index;
		let pCrawl = root;
	
		for (level = 0; level < length; level++)
		{
          //console.log(`key level ${key[level]}`)
			index = key[level].charCodeAt(0) - 'a'.charCodeAt(0);
	
			if (pCrawl.children[index] == null)
				return false;
	
			pCrawl = pCrawl.children[index];
		}
	
		return (pCrawl.isEndOfWord);
}

// Driver
// Input keys (use only 'a' through 'z' and lower case)
let keys = ["the", "a", "there", "answer", "any",
				"by", "bye", "their"];

let output = ["Not present in trie", "Present in trie"];


root = new TrieNode();

// Construct trie
let i;
for (i = 0; i < keys.length ; i++)
	insert(keys[i]);

// Search for different keys
if(search("the") == true)
	console.log("the --- " + output[1]+"<br>");
else
	console.log("the --- " + output[0]+"<br>");

if(search("these") == true)
	console.log("these --- " + output[1]+"<br>");
else
	console.log("these --- " + output[0]+"<br>");

if(search("their") == true)
	console.log("their --- " + output[1]+"<br>");
else
	console.log("their --- " + output[0]+"<br>");

if(search("thaw") == true)
	console.log("thaw --- " + output[1]+"<br>");
else
	console.log("thaw --- " + output[0]+"<br>");

