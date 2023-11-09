class LinkedList {

  constructor() {
    this.node = new Node(1)
  }

  append(value) {
    let currentNode = this.node
    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }

    currentNode.nextNode = new Node(value)
  }

  prepend(value) {
    this.node = new Node(value, this.node)
  }

  size() {
    let currentNode = this.node
    let count = 1

    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
      count++
    }
    
    return count
  }

  head() {
    return this.node
  }

  tail() {
    let currentNode = this.node

    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }
  
  at(index) {
    let currentNode = this.node
    let currentIndex = 0

    while(currentNode.nextNode !== null) {
    	if (currentIndex === index) return currentNode
      currentNode = currentNode.nextNode
      currentIndex++
    }
    
    return currentIndex === index ?  currentNode : null

  }
  
  pop() {
   let currentNode = this.node

    while(currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode
    }
    
    currentNode.nextNode = null
  }
  
  contains(value) {
   	let currentNode = this.node

    while(currentNode.nextNode !== null) {
    	if (currentNode.value === value) return true
      currentNode = currentNode.nextNode
    }
    
    if ( currentNode.value === value ) return true
    return false
  }
  
  find(value) {
  	let currentNode = this.node
    let currentIndex = 0

    while(currentNode.nextNode !== null) {
    	if (currentNode.value === value) return currentIndex
			currentIndex++
      currentNode = currentNode.nextNode
    }
    
    if (currentNode.value === value) return currentIndex
    return null
  }
  
 insertAt(value, index) {
 		let currentNode = this.node
    let nextIndex = 1
    
    if (index === 0) this.node = new Node(value, this.node) 
		else {
      while(currentNode.nextNode !== null) {
    		if (nextIndex === index) {
        	currentNode.nextNode = new Node(value, currentNode.nextNode)
          break
        } 
				nextIndex++
        currentNode = currentNode.nextNode
       }  
    }
 }
  
 removeAt(index) {
 	 	let currentNode = this.node
    let nextIndex = 1
    
    if (index === 0) this.node = this.node.nextNode 
		else {
      while(currentNode.nextNode !== null) {
    		if (nextIndex === index) {
        	currentNode.nextNode = currentNode.nextNode.nextNode
          break
        } 
				nextIndex++
        currentNode = currentNode.nextNode
       }  
    }
 }
  
  
  toString() {
    let currentNode = this.node
    let string = ''

    while(currentNode.nextNode !== null) {
    	string += "(" + currentNode.value + ")" + " -> "
      currentNode = currentNode.nextNode
    }
    
    string += "(" + currentNode.value + ")" + " -> null" 
		console.log(string)
   
  }
}


class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }

}

const linkedList = new LinkedList();

linkedList.append(12)
linkedList.append(24)
linkedList.prepend(28)

linkedList.toString()
linkedList.insertAt(30, 0)
linkedList.toString()
console.log('end')
console.log(' ')

