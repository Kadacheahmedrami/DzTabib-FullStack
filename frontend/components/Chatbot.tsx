import React, { useState, useEffect, useRef, FormEvent } from 'react';
import Link from 'next/link';

export default function ResponsiveChatbot() {
  const [prompt, setPrompt] = useState<string>('');
  const [conversation, setConversation] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Improved scroll to bottom logic
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [conversation]);

  const handleTypingEffect = (fullResponse: string) => {
    let currentText = '';
    const typingSpeed = 10;

    const interval = setInterval(() => {
      if (currentText.length < fullResponse.length) {
        currentText += fullResponse[currentText.length];
        setConversation((prevConversation) => {
          const updatedConversation = [...prevConversation];
          updatedConversation[updatedConversation.length - 1] = `AI: ${currentText}`;
          return updatedConversation;
        });
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, typingSpeed);
  };

  const formatAIResponse = (text: string) => {
    const lines = text.split('\n').filter(Boolean);
  
    return (
      <div className=" ">
        {lines.map((line, index) => {
          const isStep = line.startsWith('## Step');
          const isMiniStep = line.startsWith('-## MiniStep');
          const link = line.startsWith('****');
          const keyValue = `${line}-${index}`;
  
          return (
            link ? 
            <Link  
              href={line.replace('****', '')}
              key={keyValue}
              className="text-red-400 text-[22px] hover:underline block" 
            >
              {line.replace('****', '')}
            </Link>  
            :
            <p
              key={keyValue}
              className={`
                ${isStep ? 'text-2xl font-bold text-blue-500' : 
                  isMiniStep ? 'text-xl font-bold text-black' : 
                  'text-base'}
                transition-all duration-300 ease-in-out
              `}
            >
              {isStep ? line.replace('## ', '') : 
               isMiniStep ? line.replace('-## MiniStep', '') : 
               line}
            </p>  
          );
        })}
      </div>
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    setConversation((prevConversation) => [
      ...prevConversation,
      `User: ${prompt}`,
      'AI: ...'
    ]);
    setLoading(true);

    try {
      const res = await fetch('/pages/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, conversation }),
      });

      const data = await res.json();

      if (data.text) {
        handleTypingEffect(data.text);
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      setConversation((prevConversation) => [
        ...prevConversation.slice(0, -1),
        `AI: Error: ${error instanceof Error ? error.message : 'Network error'}`
      ]);
      setLoading(false);
    }

    setPrompt('');
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Doc AI</h1>

      <div className="flex-grow flex flex-col w-full max-w-4xl mx-auto">
        <div 
          ref={chatContainerRef}
          className="flex-grow overflow-y-auto bg-white rounded-lg shadow-md mb-4 p-4 space-y-3 max-h-[calc(100vh-250px)] sm:max-h-[calc(100vh-300px)] md:max-h-[calc(100vh-350px)]"
        >
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`
                p-3 rounded-lg max-w-[90%] break-words
                ${msg.startsWith('User') 
                  ? 'bg-blue-100 text-blue-900 self-end ml-auto' 
                  : 'bg-gray-200 text-gray-900 self-start'}
                ${loading && conversation.length - 1 === index ? 'animate-pulse' : ''}
              `}
            >
              {msg.startsWith('AI:') ? formatAIResponse(msg.replace('AI: ', '')) : msg}
            </div>
          ))}
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="flex gap-2 w-full"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className={`
              px-6 py-3 rounded-lg transition-all duration-300
              ${loading || !prompt.trim() 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'}
            `}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}