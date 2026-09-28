# Use Gemini 3.5 Flash-Lite for AI Commit Messages in GitHub Desktop

**For beginners: from zero to auto-generated commit messages in ~5 minutes.**

GitHub Desktop can write your commit messages for you. By default it wants GitHub Copilot, but you can plug in Google's `gemini-3.5-flash-lite` instead — it's fast, cheap, and great at summarizing diffs. Here's how.

---

## What you'll need

1. **GitHub Desktop** (latest version) — [desktop.github.com](https://desktop.github.com)
2. **A free Google account** — to get a Gemini API key
3. ~5 minutes

No coding, no terminal needed.

---

## Step 1 — Get your free Google API key

1. Go to **https://aistudio.google.com/apikey**
2. Sign in with Google.
3. Click **Create API key**.
4. Copy the key (looks like `AIza...`). Keep it secret — it's like a password.

> Free tier is more than enough for commit messages.

---

## Step 2 — Add Gemini as a custom provider in GitHub Desktop

1. Open GitHub Desktop.
2. Go to **File > Options > AI** (on Mac: **GitHub Desktop > Settings > AI**).
3. Find **Copilot / AI Providers** and click **Add custom provider**. You'll see the dialog from the screenshot.

Fill it exactly like this:

| Field | What to enter |
|---|---|
| **Name** | `Google Gemini` |
| **Type** | `OpenAI / OpenAI-compatible` |
| **Base URL** | `https://generativelanguage.googleapis.com/v1beta/openai/` |
| **API format** | `Chat completions (default)` |
| **Request timeout (seconds)** | `60` |
| **Authentication** | `API key` |
| **API key** | Paste your key from Step 1 |

> The `Base URL` must end with `/`. This is Google's OpenAI-compatibility layer — it lets GitHub Desktop talk to Gemini without any extra plugin.

---

## Step 3 — Add the model

At the bottom under **Models**, click **Add model...** and type exactly:

```
gemini-3.5-flash-lite
```

Click **Add** to save the provider.

Why this one? `gemini-3.5-flash-lite` is built for high-volume, low-latency jobs like summarization. Commit diffs are perfect for it — fast responses, tiny cost, 1M token context if your diff is huge.

> Spelling matters: all lowercase, with dashes. `Gemini 3.5 Flash Lite` with spaces will *not* work.

---

## Step 4 — Turn on commit message generation

1. Still in **Options > AI**, find **Commit message generation**.
2. In the model picker, choose **Google Gemini > gemini-3.5-flash-lite**.
3. Make some changes in a repo, go to the **Changes** tab.
4. Click the **sparkles / Generate commit message** button above the summary box.

Desktop sends your diff to Gemini and fills in a summary + description. Always read it and edit if needed — AI is a draft writer, you are the author.

---

## Troubleshooting for juniors

- **Red outline on Name / Base URL?** Those are required fields — you left them empty. Use `Google Gemini` and the URL above.
- **`No models yet`?** You must click `Add model...` and add at least one or the `Add` button stays disabled.
- **401 / Unauthorized?** Your API key is wrong or has a leading space. Re-copy from AI Studio.
- **404 / model not found?** You typed the model ID wrong. It must be `gemini-3.5-flash-lite`.
- **Nothing happens on Generate?** Check your internet and that you selected the Gemini model in Step 4, not Copilot.

---

## Safety tip

Never commit your API key to git. It lives only in GitHub Desktop settings on your machine. If you accidentally paste it into a file, delete it and regenerate a new key at `aistudio.google.com/apikey`.

---

That's it! You now have AI commit messages powered by `gemini-3.5-flash-lite` right inside GitHub Desktop.
