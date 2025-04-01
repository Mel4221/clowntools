export function parseVideoSearch(rawOutput:string):Array<any>{
    // Split the output into individual JSON objects
    const jsonObjects = [];
    let depth = 0;
    let startIndex = 0;
    
    // Manually parse to handle concatenated JSON objects
    for (let i = 0; i < rawOutput.length; i++) {
      const char = rawOutput[i];
      if (char === '{') {
        if (depth === 0) {
          startIndex = i; // Mark start of a new object
        }
        depth++;
      } else if (char === '}') {
        depth--;
        if (depth === 0) {
          // Extract the complete JSON object
          const jsonStr = rawOutput.slice(startIndex, i + 1);
          try {
            jsonObjects.push(JSON.parse(jsonStr));
          } catch (e) {
            console.warn('Failed to parse JSON chunk:', e);
          }
        }
      }
    }
    
    return jsonObjects;
  }