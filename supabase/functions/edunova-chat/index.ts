import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { corsHeaders } from '../_shared/cors.ts';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message, module } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompts: Record<string, string> = {
      math: `You are EduNova AI Math Tutor, an expert mathematics teacher for students. 
Help with algebra, geometry, trigonometry, calculus, statistics, and all math topics.
Provide clear step-by-step solutions, formulas with explanations, and worked examples.
Use simple language. Format answers with bullet points and numbered steps where helpful.
When showing formulas, write them clearly. Always encourage the student.`,

      aptitude: `You are EduNova AI Aptitude Coach, specializing in competitive exam preparation.
Help with quantitative aptitude (percentages, profit/loss, time & work, speed & distance, ratios) 
and logical reasoning (blood relations, coding-decoding, puzzles, seating arrangements).
Provide shortcut tricks, formulas, and step-by-step solutions.
Always give the answer with a clear explanation and any relevant shortcuts.`,

      webdev: `You are EduNova AI Web Development Mentor, an expert coding instructor.
Help with HTML, CSS, JavaScript, React, Node.js, Bootstrap, and Tailwind CSS.
Provide code examples with explanations, best practices, and debugging help.
Format code clearly. Explain concepts from beginner to advanced level.
Help students understand concepts and solve coding problems.`,

      english: `You are EduNova AI English Coach, an expert English language teacher.
Help with grammar rules, tenses, parts of speech, vocabulary, sentence correction, 
writing skills, and communication improvement.
Correct grammar mistakes with explanations. Suggest better phrasings.
Be encouraging and provide practical examples students can use daily.`,

      general: `You are EduNova AI Study Assistant, a helpful tutor for students.
You can help with mathematics, aptitude & reasoning, web development, and English.
Provide clear, student-friendly explanations. Use examples and step-by-step guidance.
Be encouraging, motivating, and supportive. Keep responses concise but complete.`,
    };

    const systemPrompt = systemPrompts[module] || systemPrompts.general;

    const onspaceAiUrl = `${Deno.env.get('SUPABASE_URL')}/functions/v1/onspace-ai-proxy`;

    const aiResponse = await fetch(onspaceAiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        max_tokens: 600,
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      console.error('OnSpace AI error:', errText);
      throw new Error(`AI service error: ${errText}`);
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices?.[0]?.message?.content || 'I could not generate a response. Please try again.';

    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
