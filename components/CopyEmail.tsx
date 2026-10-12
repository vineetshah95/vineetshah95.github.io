'use client';

import { useState } from 'react';

export default function CopyEmail({ email, label = 'Copy' }: { email: string; label?: string }) {
  const [text, setText] = useState(label);

  function flash(t: string) {
    setText(t);
    setTimeout(() => setText(label), 1600);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      flash('Copied');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button className="copy" type="button" onClick={copy}>
      {text}
    </button>
  );
}
