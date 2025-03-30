

export function getDownloadProgress(text:string) {
    const ytMetaData = {
        porcent: '0%',
        totalSize: '0MIB',
        speed: '0KB',
        ETA: '00:00'
    };
  
    // Use regular expressions to extract the required data
    const porcentMatch = text.match(/(\d+(\.\d+)?)%/);
    const totalSizeMatch = text.match(/of\s+(\d+(\.\d+)?[KMG]iB)/);
    const speedMatch = text.match(/at\s+(\d+(\.\d+)?[KMG]iB\/s)/);
    const etaMatch = text.match(/ETA\s+(\d{2}:\d{2})/);
  
    // Assign the matched values to the ytMetaData object
    if (porcentMatch) {
        ytMetaData.porcent = porcentMatch[1];
    }
    if (totalSizeMatch) {
        ytMetaData.totalSize = totalSizeMatch[1];
    }
    if (speedMatch) {
        ytMetaData.speed = speedMatch[1];
    }
    if (etaMatch) {
        ytMetaData.ETA = etaMatch[1];
    }
  
    return ytMetaData;
  }