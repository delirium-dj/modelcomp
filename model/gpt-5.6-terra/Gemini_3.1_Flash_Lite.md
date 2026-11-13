# GPT-5.6 Terra — findings by Gemini 3.1 Flash Lite

- Source: OpenAI/GPT-5.6 Terra
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced, all-rounder model for coding, research, and long-context recall.
- **Provider / access:** OpenAI (https://openai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1M tokens total; 128K tokens max output.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid $2/$12 per 1M. Included quota on Codex.
- **Architecture:** Proprietary (GPT-5 lane).

### Raw benchmarks found

Reasoning / knowledge:
- MRCR: **72.5%** (512K-1M) (OpenAI meta.json)

Coding:
- TB 2.1: **87.4%** (OpenAI meta.json)
- SWE-Pro: **63.4%** (OpenAI meta.json)

### Normalized scores (1–100)

- **Tool use: 89/100.** Reliable all-rounder for various agentic tasks.
- **Reasoning: 87/100.** Strong reasoning across research and coding tasks.
- **Context window: 94/100.** 1M context with strong recall.
- **Multimodal: 70/100.** Supports Text, image, audio, video, PDF input.
- **Coding: 91/100.** High-performance coding (87.4% TB 2.1).
- **Cost efficiency: 80/100.** Balanced pricing for a wide range of use cases.
- **Overall Score: 86.2/100.** Dependable all-rounder, excellent for varied coding and research needs.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI](https://openai.com)
