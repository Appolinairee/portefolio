"use client";

import React, { useState, useRef, useEffect } from "react";

interface ExplainWithAIProps {
  title: string;
}

export default function ExplainWithAI({ title }: ExplainWithAIProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRedirect = (platform: "perplexity" | "chatgpt" | "claude") => {
    const articleUrl = window.location.href;
    const promptText = `Résume cet article technique intitulé "${title}" : ${articleUrl}`;
    
    let targetUrl = "";
    if (platform === "perplexity") {
      targetUrl = `https://www.perplexity.ai/?q=${encodeURIComponent(promptText)}`;
    } else if (platform === "chatgpt") {
      targetUrl = `https://chatgpt.com/?q=${encodeURIComponent(promptText)}`;
    } else if (platform === "claude") {
      targetUrl = `https://claude.ai/new?q=${encodeURIComponent(promptText)}`;
    }

    window.open(targetUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 border-b border-neutral-400 dark:border-neutral-600 pb-0.5 cursor-pointer"
      >
        Ask AI
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 rounded bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-md z-20 text-xs">
          <div className="py-1">
            <button
              onClick={() => handleRedirect("perplexity")}
              className="w-full text-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
            >
              Perplexity
            </button>
            <button
              onClick={() => handleRedirect("chatgpt")}
              className="w-full text-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border-t border-neutral-100 dark:border-neutral-900 cursor-pointer"
            >
              ChatGPT
            </button>
            <button
              onClick={() => handleRedirect("claude")}
              className="w-full text-center px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border-t border-neutral-100 dark:border-neutral-900 cursor-pointer"
            >
              Claude
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
