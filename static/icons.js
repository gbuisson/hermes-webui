// ── Lucide icon library (self-hosted SVG paths, no CDN dependency) ──────────
// All icons are 24×24 viewBox, stroke-based, currentColor.
// Usage: li('folder')  →  returns a ready-to-embed SVG string
// The returned SVG uses display:inline-block + vertical-align so it sits
// neatly beside text in both HTML templates and innerHTML assignments.

const LI_PATHS = {
  // Navigation tabs
  'message-square':  '<path d="M5.5 5.25h13a2.75 2.75 0 0 1 2.75 2.75v6.5a2.75 2.75 0 0 1-2.75 2.75H10l-5.25 4v-4.35A2.75 2.75 0 0 1 2.75 14.5V8A2.75 2.75 0 0 1 5.5 5.25Z"/><path d="M7.5 10.25h9"/><path d="M7.5 13.75h5.5"/>',
  'calendar':        '<rect x="3.25" y="4.75" width="17.5" height="16" rx="4"/><path d="M7.75 3.25v3"/><path d="M16.25 3.25v3"/><path d="M3.75 9.25h16.5"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01"/>',
  'layers':          '<path d="M12 3.25 3.25 7.5 12 11.75l8.75-4.25L12 3.25Z"/><path d="m3.25 12 8.75 4.25L20.75 12"/><path d="m3.25 16.5 8.75 4.25 8.75-4.25"/>',
  'lightbulb':       '<path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.2 6H8.2C6.3 13.7 5 11.5 5 9a7 7 0 0 1 7-7z"/><line x1="9" y1="17" x2="15" y2="17"/><line x1="10" y1="20" x2="14" y2="20"/>',
  'folder':          '<path d="M3.25 7.25A2.75 2.75 0 0 1 6 4.5h4.05c.73 0 1.43.29 1.94.8l1.45 1.45H18A2.75 2.75 0 0 1 20.75 9.5v7.25A2.75 2.75 0 0 1 18 19.5H6a2.75 2.75 0 0 1-2.75-2.75Z"/><path d="M3.5 9h17"/>',
  'list-todo':       '<rect x="3.5" y="4.5" width="5.5" height="5.5" rx="1.6"/><path d="m4 17 2 2 4-5"/><path d="M13 7h7.5"/><path d="M13 12h7.5"/><path d="M13 18h7.5"/>',
  // Editing / actions
  'pencil':          '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
  'save':            '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
  'chevron-down':    '<polyline points="6 9 12 15 18 9"/>',
  'chevron-right':   '<polyline points="9 18 15 12 9 6"/>',
  'download':        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  'upload':          '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  'braces':          '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/>',
  'trash-2':         '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
  'settings':        '<circle cx="12" cy="12" r="3.25"/><path d="M12 2.75c.7 0 1.3.48 1.46 1.16l.22.94c.08.34.33.61.66.73.18.06.36.14.53.22.32.15.69.12.98-.07l.82-.52a1.5 1.5 0 0 1 1.86.2l.1.1c.5.5.58 1.28.2 1.87l-.52.82c-.2.3-.22.66-.07.98.08.17.16.35.22.53.12.33.39.58.73.66l.94.22A1.5 1.5 0 0 1 21.25 12c0 .7-.48 1.3-1.16 1.46l-.94.22c-.34.08-.61.33-.73.66-.06.18-.14.36-.22.53-.15.32-.12.69.07.98l.52.82c.38.59.3 1.37-.2 1.87l-.1.1c-.5.5-1.28.58-1.86.2l-.82-.52c-.3-.2-.66-.22-.98-.07-.17.08-.35.16-.53.22-.33.12-.58.39-.66.73l-.22.94A1.5 1.5 0 0 1 12 21.25c-.7 0-1.3-.48-1.46-1.16l-.22-.94a1.05 1.05 0 0 0-.66-.73 6.2 6.2 0 0 1-.53-.22 1.05 1.05 0 0 0-.98.07l-.82.52a1.5 1.5 0 0 1-1.86-.2l-.1-.1a1.5 1.5 0 0 1-.2-1.87l.52-.82c.2-.3.22-.66.07-.98a6.2 6.2 0 0 1-.22-.53 1.05 1.05 0 0 0-.73-.66l-.94-.22A1.5 1.5 0 0 1 2.75 12c0-.7.48-1.3 1.16-1.46l.94-.22c.34-.08.61-.33.73-.66.06-.18.14-.36.22-.53.15-.32.12-.69-.07-.98l-.52-.82a1.5 1.5 0 0 1 .2-1.87l.1-.1c.5-.5 1.28-.58 1.86-.2l.82.52c.3.2.66.22.98.07.17-.08.35-.16.53-.22.33-.12.58-.39.66-.73l.22-.94A1.5 1.5 0 0 1 12 2.75Z"/>',
  'alert-triangle':  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  'refresh-cw':      '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  'undo':            '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/>',
  'check':           '<polyline points="20 6 9 17 4 12"/>',
  'lock':            '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'star':            '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'sparkles':        '<path d="M12 2.75 13.5 8.5 19.25 10 13.5 11.5 12 17.25 10.5 11.5 4.75 10 10.5 8.5 12 2.75Z"/><path d="M19 15.25 19.75 18 22.25 18.75 19.75 19.5 19 22.25 18.25 19.5 15.75 18.75 18.25 18 19 15.25Z"/>',
  'x':               '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'square':          '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>',
  'plus':            '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  'arrow-up':        '<path d="M12 19V5.5"/><path d="m6.75 10.75 5.25-5.25 5.25 5.25"/>',
  'arrow-right':     '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'loader':          '<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>',
  'pause':           '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  // Tool icons
  'terminal':        '<rect x="3.25" y="4.25" width="17.5" height="15.5" rx="3.5"/><path d="m7.5 9 3 3-3 3"/><path d="M13.5 15h4"/>',
  'file-text':       '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  'file-pen':        '<path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 19.4 14 16l-4-1 .4 4.4z"/><path d="m14 16 1.5-1.5a2.12 2.12 0 0 1 3 3L17 19"/>',
  'search':          '<circle cx="10.75" cy="10.75" r="6.75"/><path d="m16.1 16.1 4.15 4.15"/>',
  'globe':           '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  'play':            '<polygon points="5 3 19 12 5 21 5 3"/>',
  'wrench':          '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  'brain':           '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',
  'book-open':       '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  'grip-vertical':   '<circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>',
  'clock':           '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'bot':             '<rect x="4" y="8" width="16" height="11.5" rx="4"/><path d="M12 4.25v3.5"/><path d="M8.25 13.25h.01M15.75 13.25h.01"/><path d="M9.5 16.25h5"/>',
  'eye':             '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  'shuffle':         '<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>',
  'paperclip':       '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.82-2.82l8.48-8.48"/>',
  'copy':            '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  'rotate-ccw':      '<path d="M3 2v6h6"/><path d="M3 8a9 9 0 1 0 2.64-4.36L3 8"/>',
  'user':            '<path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/>',
  // File-type icons
  'image':           '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  'file-code':       '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/>',
  'zap':             '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  // Suggestion buttons
  'clipboard-list':  '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/>',
  'map':             '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  'git-branch':      '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  // Audio / TTS
  'volume-2':        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
  // Voice-mode button — universal "two-way voice conversation" glyph (matches ChatGPT/Gemini)
  'audio-lines':     '<path d="M3.5 10.5v3"/><path d="M7 7.5v9"/><path d="M10.5 4.5v15"/><path d="M14 8.5v7"/><path d="M17.5 6.5v11"/><path d="M21 10.5v3"/>',
  // Queue pill chevron (ui.js queue indicator)
  'chevron-up':      '<polyline points="18 15 12 9 6 15"/>',
  // Insights panel stat cards (panels.js)
  'hash':            '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>',
  'cpu':             '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  'dollar-sign':     '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
};

/**
 * Returns a Lucide SVG string for the given icon name.
 * @param {string} name  – key in LI_PATHS (e.g. 'folder', 'trash-2')
 * @param {number} size  – width/height in px (default 16)
 * @returns {string} SVG element string ready for innerHTML
 */
function li(name, size = 16) {
  const p = LI_PATHS[name];
  if (!p) { console.warn('li(): unknown icon', name); return ''; }
  return `<svg class="li-icon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" `
       + `stroke="currentColor" stroke-width="1.85" stroke-linecap="round" `
       + `stroke-linejoin="round" aria-hidden="true" `
       + `style="display:inline-block;vertical-align:-0.15em;flex-shrink:0">${p}</svg>`;
}
