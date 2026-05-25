// Replace the askGemini function with this:
async function askHuggingFace(question) {
    const url = 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                inputs: question,
                parameters: { max_length: 100 }
            })
        });
        
        const data = await response.json();
        if (data && data.generated_text) {
            return data.generated_text;
        }
        return "I couldn't process that. Please try again.";
    } catch (error) {
        return "Sorry, I'm having trouble connecting.";
    }
}
