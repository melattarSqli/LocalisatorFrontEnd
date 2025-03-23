import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
 
import { useEffect} from 'react'

export const FormStep6 = () => {
          
    const handleNextStep = () => {
        // Fetch the ZIP file from the backend
        fetch('http://localhost:8090/api/files/download')
            .then(response => {
                if (response.ok) {
                    return response.blob(); // Return the response as a blob for binary data (e.g., ZIP file)
                }
                throw new Error('Network response was not ok');
            })
            .then(blob => {
                // Create a URL for the blob (binary data)
                const downloadUrl = window.URL.createObjectURL(blob);
                
                // Create a link element to trigger the download
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = 'file.zip'; // Set the name of the downloaded file (can be adjusted)
                
                // Trigger a click on the link to start the download
                link.click();
                
                // Cleanup the URL object after download
                window.URL.revokeObjectURL(downloadUrl);
            })
            .catch(error => {
                console.error('There was an error with the fetch operation:', error); // Handle any errors
            });
    };
    
    useEffect(()=>{

    },[])
    return(
        <Theme>
        <C.Container>
        <h2>Download SQL Files</h2>
                <div>
                    <button  onClick={handleNextStep} >Download Files</button>
                </div>
        </C.Container>
    </Theme>
    )
}