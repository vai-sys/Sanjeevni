


import React, { useState } from 'react';
import axios from 'axios';

const Bard = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateAnswer() {
          setAnswer("loading...")
          const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCzR6FPRWy-UOO2UsCXr8d5ok31YgN80OI",
            
            method:"post",
            data:{
              "contents":[{"parts":[{"text":question+" ayurvedic solution"}]}]
            }
          })
           setAnswer(simplifyText(response["data"]["candidates"][0]["content"]["parts"][0]["text"]))
        }
        const simplifyText = (text) => {
          return text.replace(/\*\*\**/g, ''); // Replace all occurrences of '**' with an empty string
        };
        

  return (
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold text-green-600">Sanjeevni Sarthi</h2>
      <p className="text-lg text-gray-600">Your AI Ayurveda Guide!</p>
      <textarea
        className="w-full h-32 px-3 py-2 mt-4 border rounded-md focus:outline-none focus:ring focus:border-green-300"
        value={question}
        placeholder="Ask your doubts about Ayurveda..."
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <button
        className={`mt-4 px-6 py-3 bg-green-600 text-white rounded-md transition duration-300 ease-in-out ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={generateAnswer}
        disabled={loading || question.trim() === ""}
      >
        {loading ? 'Generating...' : 'Generate Answer'}
      </button>
      <div className="mt-6">
      <pre className="text-left overflow-auto border rounded-md p-4 max-h-40 bg-gray-100">
        {answer || 'No answer available'}
      </pre>
    </div>
    </div>
  );
};

export default Bard;
