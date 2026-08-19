import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Send, Copy, Check, Mail, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'Opportunity Inquiry',
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subjectRole, setSubjectRole] = useState(initialRole);
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialRole) {
      setSubjectRole(initialRole);
    }
  }, [initialRole]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mailtoSubject = encodeURIComponent(`[${subjectRole}] - Inquiry from ${senderName || 'Recruiter/Client'}`);
  const mailtoBody = encodeURIComponent(
    `Hello Hillary,\n\n${message || 'I came across your portfolio and would like to discuss an opportunity.'}\n\nBest regards,\n${senderName || 'Your Name'}\n${senderEmail || ''}`
  );
  const fullMailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopyNote = () => {
    const text = `To: ${PERSONAL_INFO.email}\nSubject: [${subjectRole}] - Inquiry from ${senderName || 'Recruiter'}\n\n${message || 'Hello Hillary, I would like to discuss an opportunity.'}\n\nSender: ${senderName} (${senderEmail})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        id="contact-modal-content"
        className="w-full max-w-lg bg-[#0E0E0E] border border-[#222222] rounded-xl p-6 sm:p-8 text-[#F5F5F5] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="contact-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md bg-[#161616] hover:bg-[#222222] text-[#888888] hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#666666] block mb-1">
            DIRECT COMMUNICATION
          </span>
          <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5]">
            Initiate Contact with Hillary
          </h3>
          <p className="text-xs font-mono-code text-[#888888] mt-1">
            Recipient: <span className="text-[#DCDCDC]">{PERSONAL_INFO.email}</span>
          </p>
        </div>

        {/* Quick Role Selection */}
        <div className="mb-5">
          <label className="block text-xs font-mono-code text-[#888888] mb-2 uppercase tracking-wider">
            Discussion Topic / Role Focus
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              'Application Support',
              'Technical Support Engineering',
              'Full-Stack Opportunity',
              'Data & Systems Research',
              'General Inquiry'
            ].map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setSubjectRole(role)}
                className={`text-xs font-mono-code px-3 py-1.5 rounded-full border transition-all ${
                  subjectRole === role
                    ? 'bg-[#F5F5F5] text-[#080808] border-white font-medium'
                    : 'bg-[#141414] text-[#888888] border-[#242424] hover:text-white hover:border-[#383838]'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono-code text-[#777777] mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                id="modal-input-name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Sarah Connor"
                className="w-full px-3 py-2 text-sm bg-[#141414] border border-[#222222] rounded-md text-[#F5F5F5] placeholder-[#444444] focus:outline-none focus:border-[#555555] font-sans"
              />
            </div>
            <div>
              <label className="block text-xs font-mono-code text-[#777777] mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="modal-input-email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="sarah@company.com"
                className="w-full px-3 py-2 text-sm bg-[#141414] border border-[#222222] rounded-md text-[#F5F5F5] placeholder-[#444444] focus:outline-none focus:border-[#555555] font-sans"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono-code text-[#777777] mb-1.5">
              Message or Brief Summary
            </label>
            <textarea
              id="modal-input-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Hillary, we have an opening in our technical team and would love to review your background..."
              className="w-full px-3 py-2 text-sm bg-[#141414] border border-[#222222] rounded-md text-[#F5F5F5] placeholder-[#444444] focus:outline-none focus:border-[#555555] font-sans resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-5 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            id="modal-copy-btn"
            onClick={handleCopyNote}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#161616] hover:bg-[#202020] border border-[#262626] text-xs font-mono-code text-[#AAAAAA] hover:text-white transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Template</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Content</span>
              </>
            )}
          </button>

          <a
            id="modal-send-mailto-link"
            href={fullMailtoLink}
            onClick={onClose}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#F5F5F5] hover:bg-white text-[#080808] text-xs font-semibold tracking-wide uppercase transition-all shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Open in Mail Client</span>
          </a>
        </div>

      </div>
    </div>
  );
};
