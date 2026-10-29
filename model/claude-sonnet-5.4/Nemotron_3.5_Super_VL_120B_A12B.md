# Claude Sonnet 5.4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Anthropic (`claude-sonnet-5-4`), modelcomp.vercel.app, artificialanalysis.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic's mid-2026 Claude Sonnet model, a hybrid reasoning model for real-time agents and high-volume work. Part of the Claude 5.x family between Claude Sonnet 5 (June 2026) and Claude Sonnet 5.5 (September 2026).
- **Provider / access:** Anthropic Claude Platform (`claude-sonnet-5-4`), Amazon Bedrock, Google Vertex AI, Microsoft Azure AI Foundry. Messages API (Chat Completions-style). Paid only — no free tier confirmed.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff not publicly specified for 5.4 specifically (Sonnet 5 family cutoff ~Jun 2026 per Anthropic platform docs).
- **IDs:** `claude-sonnet-5-4` (Anthropic API ID); no Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 total tokens; 128,000 max output tokens (verified via modelcomp.vercel.app and Anthropic models overview for the 5.x family).
- **Modalities:** Text and image in; text out. Reasoning: yes (adaptive thinking). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-29):** $2.50 / $12.50 per 1M input/output tokens; $0.25 per 1M cached read (modelcomp.vercel.app). Paid tier only.
- **Architecture:** Proprietary; parameter count not publicly disclosed by Anthropic.

### Raw benchmarks found

- Terminal-Bench: **80.4%** (modelcomp.vercel.app, 5 reports cite: Beam, Gemini 3.8 Flash, Nemotron 3 Ultra 550B A55B, Qwen 3.8 Flash, Qwen 3.8 Max)
- SWE-bench Verified: **85.2%** (modelcomp.vercel.app, 3 reports cite: Beam, Nemotron 3 Ultra 550B A55B, Qwen 3.8 Flash)
- OSWorld: **81.2%** (modelcomp.vercel.app, 4 reports cite: Beam, Gemini 3.8 Flash, Nemotron 3 Ultra 550B A55B, Qwen 3.8 Max)
- SWE-bench Pro: **63.2%** (modelcomp.vercel.app, 4 reports cite)
- GPQA Diamond: no verified public score found for Claude Sonnet 5.4 specifically (Anthropic docs cover Sonnet 5/5.5 but not 5.4)
- HLE: no verified public score found for Claude Sonnet 5.4 specifically
- LiveCodeBench: no verified public score found for Claude Sonnet 5.4 specifically

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 80.4% and OSWorld 81.2% demonstrate strong agentic and computer-use capability; capped by lack of model-specific OSWorld-Verified breakdown for 5.4.
- **Reasoning: 86/100.** SWE-bench Verified 85.2% indicates strong reasoning; no HLE/GPQA figure specific to 5.4 found, so capped below frontier Opus-tier models.
- **Context window: 94/100.** 1M total / 128K max output matches the Claude 5.x family standard; verified via modelcomp and Anthropic platform docs.
- **Multimodal: 78/100.** Text + image input, text output only — no audio/video input or output; strong image understanding but no native multimodal generation.
- **Coding: 86/100.** SWE-bench Verified 85.2% and SWE-bench Pro 63.2% show solid coding; capped below top-tier coding specialists by lack of LiveCodeBench/Terminal-Bench-4.0 figures specific to 5.4.
- **Cost efficiency: 73/100.** $2.50/$12.50 per 1M is mid-range paid pricing with no free tier; caching at $0.25 helps but not cost-leading.
- **Overall Score: 86/100.** Mean of (86+86+94+78+86)/5 = 86; best-fit recommendation: strong general-purpose agentic model for high-volume work at Sonnet pricing.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3 independent searches: modelcomp.vercel.app, anthropic.com system cards/models overview, artificialanalysis.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
