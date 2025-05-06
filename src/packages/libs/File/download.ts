type DownLoadFileParams = {
  data: string | Blob;
  fileName: string;
  fileType: string;
};

export async function downloadFile({ data, fileName, fileType }: DownLoadFileParams) {
  let blobOrFile: Blob | File;

  if (typeof data === 'string' && (data.startsWith('http://') || data.startsWith('https://'))) {
    try {
      // Fetch the data if the input is a URL
      const response = await fetch(data);
      if (!response.ok) {
        throw new Error(`Failed to fetch the file: ${response.statusText}`);
      }
      blobOrFile = await response.blob();
    } catch (error) {
      window.open(data, '_blank');
      throw error;
    }
  } else if (data instanceof Blob) {
    blobOrFile = data;
  } else {
    blobOrFile = new Blob([data], { type: fileType });
  }

  // Create a temporary URL for the blob
  const url = URL.createObjectURL(blobOrFile);

  // Create an anchor element to trigger download
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;

  // Dispatch a click event to download
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  a.dispatchEvent(clickEvt);

  // Clean up
  a.remove();
  URL.revokeObjectURL(url);
}
