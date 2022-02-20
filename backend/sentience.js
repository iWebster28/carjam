// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const language_client = new language.LanguageServiceClient();

async function sentience(transcription) {
    // Prepares a document, representing the provided text
    const document = {
        content: transcription,
        type: 'PLAIN_TEXT',
      };
      
    // Detects the sentiment of the document
    const [result] = await language_client.analyzeSentiment({document});
    
    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);
    
    const sentences = result.sentences;
    sentences.forEach(sentence => {
    console.log(`Sentence: ${sentence.text.content}`);
    console.log(`  Score: ${sentence.sentiment.score}`);
    console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });
    
    return sentiment.score;
}

module.exports={sentience};