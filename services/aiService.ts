// AI Service - Real AI via OnSpace Cloud Edge Function
import { getSupabaseClient } from '@/template';
import { FunctionsHttpError } from '@supabase/supabase-js';

export type AIChatModule = 'general' | 'math' | 'webdev' | 'english' | 'aptitude';

interface AIResponse {
  content: string;
}

export async function getAIResponse(
  message: string,
  module: AIChatModule = 'general'
): Promise<AIResponse> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.functions.invoke('edunova-chat', {
      body: { message, module },
    });

    if (error) {
      let errorMessage = error.message;
      if (error instanceof FunctionsHttpError) {
        try {
          const statusCode = error.context?.status ?? 500;
          const textContent = await error.context?.text();
          errorMessage = `[Code: ${statusCode}] ${textContent || error.message}`;
        } catch {
          errorMessage = error.message || 'Failed to read response';
        }
      }
      console.error('AI service error:', errorMessage);
      return { content: getFallbackResponse(module) };
    }

    return { content: data?.content || getFallbackResponse(module) };
  } catch (err) {
    console.error('getAIResponse error:', err);
    return { content: getFallbackResponse(module) };
  }
}

function getFallbackResponse(module: AIChatModule): string {
  const fallbacks: Record<AIChatModule, string> = {
    math: "I am having trouble connecting right now. For math help, try asking about specific formulas like quadratic equation, Pythagorean theorem, or trigonometry ratios. I will be back online shortly!",
    webdev: "Connection issue detected. For coding help, check the tutorials in the Web Dev module. Common topics: HTML structure, CSS flexbox, JavaScript ES6, React hooks.",
    english: "Unable to connect right now. For English help, review grammar rules in the English Coach module covering tenses, articles, and sentence structure.",
    aptitude: "Connection issue. For aptitude prep, use shortcut tricks: Percentage = (Part/Total) x 100, Time-Work = 1/A + 1/B = 1/T, Speed = Distance/Time.",
    general: "I am having a temporary connection issue. Please try again in a moment. In the meantime, explore the learning modules for formulas, tutorials, and practice questions!",
  };
  return fallbacks[module];
}
