function merge (firstValue, secondValue) { 
    const mergedArray = []
       while(firstValue.length && secondValue.length) { 
           
    
           if(firstValue[0] > secondValue[0]) { 
               mergedArray.push(secondValue.shift())
           } else { 
            mergedArray.push(firstValue.shift())
           }
    
       }
       
       while(firstValue.length) { 
               mergedArray.push(firstValue.shift())
           }
    
        while(secondValue.length) { 
               mergedArray.push(secondValue.shift())
           }
    
    }
    
    function mergeSort(input) {
        if(input.length < 2) return input
            console.log(input)
        const middle = Math.floor(input.length/2) 
        const firstHalf = input.slice(0, middle)
        const secondHalf = input.slice(middle, input.length);
        const mergeA = mergeSort(firstHalf)
        const mergeB = mergeSort(secondHalf)
            
        return merge(mergeA,mergeB)
    }
    