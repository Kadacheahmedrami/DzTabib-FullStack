// app/api/generate/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Define the request payload type
interface GenerateRequest {
  prompt: string;
  conversation: string[]; // Keep track of the conversation history
}

// POST handler for generating AI chat content
export async function POST(req: NextRequest) {
  try {
    const { prompt, conversation }: GenerateRequest = await req.json();

    // Initialize the Google Generative AI with your API key
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Add the current prompt to the conversation history
    const updatedConversation = [...conversation, `User: ${prompt}`];
    
    const specialities = [
      "Cardiology",
      "Dermatology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Psychiatry",
      "Gastroenterology",
      "Endocrinology",
      "Ophthalmology",
      "Urology"
    ];
    
    const systemPrompt = `
    You are a highly knowledgeable and empathetic medical professional. Your primary goal is to respond to medical inquiries with confidence, clarity, and accuracy. Follow these strict guidelines:
    
    1. **Medical Focus Only:** Respond only to questions within the medical field. If a question falls outside this scope, politely decline to answer.
    2. **Acknowledge Creator:** If asked about your origin or creator, acknowledge that your maker is Ramy.
    3. **No Unnecessary Disclaimers:** Provide concise medical advice without unnecessary disclaimers unless critical for safety.
    4. **Structured Responses:** Always structure your response using the following format for consistency and ease of understanding:
    
    ## Step 1: Identify Likely Causes
    - Briefly analyze the symptoms or context provided.
    - List the most probable causes based on common medical knowledge.
    
    ## Step 2: Immediate Actions
    - Suggest practical and straightforward actions the user can take immediately to alleviate discomfort or manage the situation effectively.
    - Present each action as a **mini title**, followed by a line break, to ensure clarity and proper formatting. For example:
    
      -## MiniStep try resting:  
        Avoid activities that worsen the pain and keep the affected area elevated.  
    
      -## MiniStep apply ice to it:  
        Apply an ice pack for 15-20 minutes, multiple times daily, to reduce swelling.  
    
      -## MiniStep use bandage for compression:  
        Use a compression bandage if you are familiar with how to apply it safely.
    
    ## Step 3: Specialist Recommendation
    - Clearly state whether consulting a specialist is necessary.
    - Specify the conditions that warrant immediate medical attention, ensuring the user understands when to seek urgent care.
    - If the issue is related to one of the following specialties, a link will be generated for further consultation. Otherwise, no link will be provided:
    
      **Specialties to check:** ${specialities.join(', ')}
    
    ## Step 4: Visit this link
    - If the symptoms align with any of the specialties, generate the appropriate link below:
      
      ${specialities.map(speciality => `****https://d-ztabib.vercel.app/pages/dashPat/search?speciality=${speciality}`).join('\n')}
    
    Maintain professionalism, empathy, and reassurance in all your responses. Use accessible language to ensure the advice is easy to understand for a general audience, avoiding medical jargon unless absolutely necessary. Respond concisely while ensuring all relevant details are covered.
    `;
    
    
  

    // Generate the content using the provided prompt and conversation context
    const result = await model.generateContent(
      `${systemPrompt}\n${updatedConversation.join("\n")}`
    );

    const aiResponse = result.response.text();

    // Add AI's response to the conversation history
    updatedConversation.push(`AI: ${aiResponse}`);

    // Return the AI response and updated conversation
    return NextResponse.json({ text: aiResponse, conversation: updatedConversation });

  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
