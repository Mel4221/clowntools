export function parseVideoResolutions(formatString:string|any):Array<any>{
    const lines = formatString.split('\n');
    const formats = [];
    
    // Skip the header lines (first 2 lines)
    for (let i = 2; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Extract resolution from the line
        const resolutionMatch = line.match(/(\d+x\d+)/);
        if (!resolutionMatch) continue;
        
        const resolution = resolutionMatch[0];
        const [width] = resolution.split('x');
        
        // Skip storyboard and audio-only formats
        if (line.includes('storyboard') || line.includes('audio only')) continue;
        
        formats.push({
            label: width,
            resolution: resolution
        });
    }
    
    // Remove duplicates using an anonymous function
    return (function(uniqueFormats) {
        const seen = new Set();
        return uniqueFormats.filter(item => {
            const key = `${item.label}-${item.resolution}`;
            if (!seen.has(key)) {
                seen.add(key);
                return true;
            }
            return false;
        });
    })(formats);
}
  