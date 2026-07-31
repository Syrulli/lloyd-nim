"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, MessageCircle, Send } from '@/components/icons/IconPacks';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi! I’m Lloyd. Ask me about my work experiences, tech stack, or anything on your mind!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isSending, setIsSending] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current && isOpen) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const send = async () => {
        if (!input.trim() || isSending) return;

        const userMessage = input.trim();
        setMessages((m) => [...m, { sender: "user", text: userMessage }]);
        setInput("");
        setIsSending(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage }),
            });
            const data = await res.json();
            setMessages((m) => [
                ...m,
                { sender: "bot", text: data.reply || "Sorry — no reply." },
            ]);
        } catch (err) {
            console.error(err);
            setMessages((m) => [
                ...m,
                { sender: "bot", text: "Network error — please try again." },
            ]);
        } finally {
            setIsSending(false);
        }
    };

    const onKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2.5 bg-signal-dim text-white rounded-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 z-[9998] font-semibold text-sm tracking-tight"                >
                    <MessageCircle className="h-5 w-5" />
                    Chat with Lloyd
                </button>
            )}

            {isOpen && (
                <div
                    className="fixed bottom-6 right-6 w-full max-w-xs bg-[#121212] rounded shadow-2xl overflow-hidden border border-line transition-all duration-300 z-[9999]"
                    style={{ maxHeight: "520px" }}
                >
                    <div
                        className="flex items-center justify-between px-4 py-3"
                        style={{ backgroundColor: "#2d2d2d" }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Image
                                    src="/profile.webp"
                                    alt="Lloyd NIM"
                                    width={35}
                                    height={35}
                                    className="rounded-full border-2 border-gray-300"
                                />
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#2d2d2d] animate-pulse"></span>
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-white">Lloyd Nim</div>
                                <div className="text-xs text-gray-400">Online</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition"
                        >
                            <X fontSize="small" />
                        </button>
                    </div>

                    <div
                        ref={containerRef}
                        className="h-64 overflow-y-auto p-4 space-y-3 bg-[#121212]"
                    >
                        {messages.map((m, i) => (
                            // <div
                            //     key={i}
                            //     className={m.sender === "user" ? "text-right" : "text-left"}
                            // >
                            //     <div
                            //         className={`inline-block max-w-[82%] px-3.5 py-2.5 rounded text-sm leading-snug ${m.sender === "user"
                            //             ? "bg-signal-dim text-white"
                            //             : "bg-[#2d2d2d] text-gray-100"
                            //             } shadow-sm`}
                            //     >
                            //         {m.text}
                            //     </div>
                            // </div>
                            <div
                                key={i}
                                className={m.sender === "user" ? "text-right" : "text-left"}
                            >
                                <div
                                    className={`inline-block max-w-[82%] [overflow-wrap:anywhere] px-3.5 py-2.5 rounded text-sm leading-snug ${m.sender === "user"
                                        ? "bg-signal-dim text-white"
                                        : "bg-[#2d2d2d] text-gray-100"
                                        } shadow-sm`}
                                >
                                    {m.text}
                                </div>
                            </div>
                        ))}
                        {isSending && (
                            <div className="text-left">
                                <div className="inline-block px-3.5 py-2.5 rounded-2xl bg-[#2d2d2d] text-gray-400 text-sm">
                                    Thinking
                                    <span className="inline-block ml-2">
                                        <span className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <span
                                                    key={i}
                                                    className={`w-1 h-1 bg-gray-500 rounded-full animate-bounce`}
                                                    style={{ animationDelay: `${i * 100}ms` }}
                                                />
                                            ))}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-[#1a1a1a] border-t border-line">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={onKey}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-[#2d2d2d] text-white placeholder-gray-500 px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
                                maxLength={50}
                                autoFocus
                            />
                            <button
                                onClick={send}
                                disabled={isSending || !input.trim()}
                                className="w-10 h-10 bg-signal-dim rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-md disabled:opacity-60"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="text-right lg:mr-3 mt-1 text-xs text-gray-500 ">
                            {50 - input.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}