# Gemini 1.5 Pro — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-1.5-pro` (Gemini 1.5 Pro, Google) — folder: `model/gemini-1.5-pro`

## Overall
- **Overall Score: 73.4/100.** Historically important long-context multimodal model that introduced breakthrough 1M-2M context capabilities and strong recall/reasoning for its time, but it is retired from the Gemini API and no longer a practical current option.

## Scores
- **Tool use: 60/100.** As a 2024-era Gemini model it supported Google ecosystem integrations and function/tool-oriented workflows in its time, but current tool/capability support and availability are obsolete due to retirement.
- **Reasoning: 70/100.** Google reported strong performance for its generation, including long-context analysis/reasoning and near-1.0 Ultra quality in Gemini 1.5 Pro positioning; however, it is far behind modern Gemini and frontier models today.
- **Context window: 90/100.** A landmark 2,000,000-token context window (GA 2024-09-24 per repo metadata) with very high long-context retrieval claims (e.g. 99% needle-in-a-haystack at 1M in Google's announcement), historically excellent.
- **Multimodal: 82/100.** Supported text, image, audio, and video inputs with text output and demonstrated cross-modal long-context understanding (including long video/audio/code/document analysis) for its era.
- **Coding: 65/100.** Capable of reasoning over large codebases and long prompts at release, but now stale and superseded for modern coding/agent workflows.
- **Cost efficiency: 20/100.** Retired from the Gemini API (repo metadata notes retirement in 2025), so it is not a viable current deployment choice despite historical pricing references.
- **Overall Score: 62/100.** A major historical milestone in long-context multimodal AI, valuable as a reference point but not recommended for current use due to retirement and obsolescence.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/
  - https://cloud.google.com/vertex-ai/generative-ai/pricing
  - https://goo.gle/GeminiV1-5
