import React, { createContext, useState, ReactNode, useCallback } from 'react';

interface BookmarkItem {
  id: string;
  type: 'formula' | 'topic' | 'lesson';
  title: string;
  module: string;
  data: Record<string, unknown>;
}

interface AppContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  bookmarks: BookmarkItem[];
  addBookmark: (item: BookmarkItem) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  chatHistory: ChatMessage[];
  addChatMessage: (msg: ChatMessage) => void;
  clearChatHistory: () => void;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  module?: string;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const toggleDarkMode = useCallback(() => setIsDarkMode(p => !p), []);

  const addBookmark = useCallback((item: BookmarkItem) => {
    setBookmarks(prev => {
      if (prev.find(b => b.id === item.id)) return prev;
      return [item, ...prev];
    });
  }, []);

  const removeBookmark = useCallback((id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  }, []);

  const isBookmarked = useCallback((id: string) => {
    return bookmarks.some(b => b.id === id);
  }, [bookmarks]);

  const addChatMessage = useCallback((msg: ChatMessage) => {
    setChatHistory(prev => [...prev, msg]);
  }, []);

  const clearChatHistory = useCallback(() => setChatHistory([]), []);

  return (
    <AppContext.Provider value={{
      isDarkMode,
      toggleDarkMode,
      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked,
      searchQuery,
      setSearchQuery,
      chatHistory,
      addChatMessage,
      clearChatHistory,
    }}>
      {children}
    </AppContext.Provider>
  );
}
