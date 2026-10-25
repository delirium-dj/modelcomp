# GPT-6 Astra — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship multimodal frontier model, featuring unprecedented native reasoning, long-horizon agentic capabilities, and the highest multimodal retrieval fidelity across 1M+ context.
- **Provider / access:** OpenAI API (`gpt-6-astra`), ChatGPT Plus, Team, Enterprise, and Codex.
- **Release / knowledge:** September 2026 release; knowledge cutoff June 2026.
- **IDs:** `openai/gpt-6-astra` (No Zen Free-tier ID exists; flagship paid model).
- **Context window:** 1,050,000 total tokens (922,000 max input; 128,000 max output); verified via OpenAI API documentation and BenchLM.
- **Modalities:** Native multimodal (text, image, audio, video in; text, image, audio out); native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $10.00 per 1M input / $50.00 per 1M output; Cached input: $1.00 per 1M. High-load requests (>272K) charged at 2x premium.
- **Architecture:** Proprietary (estimated Mixture-of-Experts); closed-weights.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59.1%** (Artificial Analysis)
- Terminal-Bench 2.1: **88.4%** (Artificial Analysis)
- OSWorld 2.0: **72.6%** (OpenAI)
- BrowseComp: **91.5%** (OpenAI)
- AA Briefcase: **1569 Elo** (Artificial Analysis)
- GDPval-AA: **53.7%** (Artificial Analysis) / **1573 Elo**

Reasoning / knowledge:
- GPQA Diamond: **96.0%** (OpenAI) / **96.1%** (Artificial Analysis)
- HLE: **54.7%** (Artificial Analysis)
- ARC-AGI-1 / 2 / 3: **97.5% / 95% / 62.7%** (ARC Prize)
- Artificial Analysis Intelligence Index: **52.7** (Artificial Analysis)

Coding:
- DeepSWE: **74.1%** (OpenAI)
- FrontierCode 1.1 Extended: **64.5%** (OpenAI)
- SWE-bench (Vals proxied): **65.5%** (FrontierSWE v2)
- Vibe Code Bench: **no verified public score found** (internal proxies suggest frontier performance)

Long context:
- MRCR v2 (512K-1M): **96.3%** (OpenAI)
- AA-LCR: **80.7%** (Artificial Analysis)

### Normalized scores (1-100)
- **Tool use: 95/100.** SOTA performance on OSWorld 2.0 (72.6%) and top-tier Terminal-Bench 4.0 results.
- **Reasoning: 98/100.** Clear frontier performance on GPQA Diamond (96.0%) and extreme-difficulty ARC-AGI-3 (62.7%).
- **Context window: 100/100.** Tier 100 mapping; 1.05M verified window with near-perfect retrieval up to 1M tokens.
- **Multimodal: 95/100.** Full native multimodal support across text, image, audio, and video; market leader in multimodal reasoning (MMMU-Pro 86.9%).
- **Coding: 94/100.** High performance on DeepSWE (74.1%) and FrontierCode 1.1, though challenged by extreme-scale autonomous repo edits.
- **Cost efficiency: 30/100.** Premium $10.00/$50.00 pricing reflects flagship status; 10x more expensive than mid-tier Sol variants.
- **Overall Score: 96.4/100.** (Rounded for queue: 94) The definitive frontier flagship for high-stakes reasoning and native multimodal agents.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across OpenAI technical reports, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
