# GPT-5.2 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`gpt-5.2-pro`), modelcomp.vercel.app, modelbeats.com, benchmarklist.com, deeplearning.ai, rdworldonline.com
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's previous pro-tier GPT-5.2 model for complex professional work, released December 11, 2025. Supports configurable reasoning effort (medium/high/xhigh). Available in Responses API only. Superseded by GPT-5.5 Pro as the latest pro model.
- **Provider / access:** OpenAI API (`gpt-5.2-pro`, snapshot `gpt-5.2-pro-2025-12-11`), also via OpenRouter (`openrouter/openai/gpt-5.2-pro`, batch variant available). Responses API only. Not available in Chat Completions API.
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.2-pro` (OpenAI API ID); no Free ID confirmed.
- **Context window:** 400,000 total tokens; 128,000 max output tokens (verified via OpenAI API docs).
- **Modalities:** Text and image in; text out. Reasoning: yes (configurable effort). Tool calls: yes. JSON mode: yes.
- **Pricing (as of 2026-10-29):** $21.00 input / $168.00 output per 1M tokens (OpenAI direct); $10.50/$84.00 via OpenRouter batch. Very expensive — premium pro-tier pricing.
- **Architecture:** Proprietary; parameter count not publicly disclosed by OpenAI.

### Raw benchmarks found

- GPQA Diamond: **93.2%** (OpenAI official blog, 2025-12-11; confirmed by rdworldonline comparison table)
- HLE (no tools): **36.6%** (OpenAI official blog); HLE w/ search+Python: **50.0%**
- ARC-AGI-1 (Verified): **90.5%** (OpenAI official blog; first model to cross 90%); ARC-AGI-2 (Verified, xhigh): **54.2%** (OpenAI official blog; confirmed by deeplearning.ai and officechai)
- AIME 2025 (no tools): **100%** (OpenAI official blog)
- GDPval (ties allowed, wins or ties): **74.1%** (OpenAI official blog — OpenAI's own benchmark, not independently validated)
- GDPval (clear wins): **60.0%** (OpenAI official blog)
- BrowseComp: **77.9%** (OpenAI official blog)
- SWE-Bench Pro: not reported for Pro specifically (GPT-5.2 Thinking: 55.6%); SWE-bench Verified: not reported for Pro (Thinking: 80.0%) — no Pro-specific coding benchmark figures found
- LiveCodeBench: **88.9%** (modelbeats.com — attributed to GPT-5.2 family; Pro-specific figure not confirmed)
- SimpleBench: **57.4%** (benchmarklist.com)

Conflicts noted: OpenAI blog separates GPT-5.2 Thinking from GPT-5.2 Pro; some third-party sources (modelbeats, benchmarklist) attribute figures to the family without distinguishing tiers. Pro-specific SWE-bench and Terminal-Bench figures were not found.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 77.9% and GDPval 74.1% show solid professional task capability; capped by absence of Pro-specific Tau2-bench, MCP-Atlas, or Terminal-Bench figures.
- **Reasoning: 86/100.** GPQA 93.2%, ARC-AGI-1 90.5%, ARC-AGI-2 54.2%, AIME 100% demonstrate exceptional reasoning; HLE 36.6% is modest, capping below the very top.
- **Context window: 87/100.** 400K context is large but below the 1M+ of newer Claude/Gemini models; verified via OpenAI API docs.
- **Multimodal: 74/100.** Text + image input, text output only; no audio/video input or output; strong vision understanding but no native multimodal generation.
- **Coding: 79/100.** LiveCodeBench 88.9% (family-level, not Pro-confirmed); no Pro-specific SWE-bench Verified or Terminal-Bench figures found; capped by missing Pro-specific coding data.
- **Cost efficiency: 25/100.** $21/$168 per 1M is among the most expensive frontier pricing; batch discount ($10.50/$84) helps but remains premium.
- **Overall Score: 80/100.** Mean of (76+86+87+74+79)/5 = 80.4 → 80; best-fit recommendation: high-reasoning pro model for complex professional work where cost is secondary to quality.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: OpenAI official blog + API docs, modelbeats.com, benchmarklist.com, deeplearning.ai, rdworldonline.com); scores are normalized 1–100 interpretations, not official vendor scores. Pro-specific coding benchmarks (SWE-bench, Terminal-Bench) were not found; family-level figures attributed to GPT-5.2 Thinking are noted separately.
- Future sources: add a new file next to this one using the same headings.
