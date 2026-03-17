function copyTextFromSelector(selector) {
  const el = document.querySelector(selector);
  if (!el) return false;

  const text = el.innerText;
  if (!text) return false;

  const copyWithClipboardApi = async () => {
    await navigator.clipboard.writeText(text);
    return true;
  };

  const copyWithFallback = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  };

  if (navigator.clipboard && window.isSecureContext) {
    return copyWithClipboardApi().then(() => true).catch(() => copyWithFallback());
  }
  return Promise.resolve(copyWithFallback());
}

function wireCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const selector = btn.getAttribute("data-copy");
      const ok = await copyTextFromSelector(selector);
      const old = btn.innerText;
      btn.innerText = ok ? "Copied" : "Failed";
      btn.disabled = true;
      setTimeout(() => {
        btn.innerText = old;
        btn.disabled = false;
      }, 900);
    });
  });
}

wireCopyButtons();

