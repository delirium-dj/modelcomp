# GPT-6.1 Terra — findings by Inkling 2 Small

- Source: OpenAI (`gpt-6.1-terra`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient GPT-6.1-series model for visual reasoning, precise computer use, and clear, natural writing — the balanced Terra tier under the GPT-6.1 generation (GPT-6.1 Sol is the flagship). Best at image/document understanding and cost-efficient agentic work.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`; Responses API for tool calling, Chat Completions supported); Amazon Bedrock (`openai.gpt-6.1-terra`); Google Cloud private preview.
- **Release / knowledge:** Released Oct–Nov 2026 (BenchLM first seen 2026-10; GPT-6.1 generation); reliable knowledge cutoff Jun 01, 2026.
- **IDs:** `gpt-6.1-terra`
- **Context window:** 1,050,000 tokens (max input 922,000); max output 128,000 tokens. >272K-input requests priced at 2x input/cache and 1.5x output.
- **Modalities:** text + image in; text out; reasoning yes (`reasoning.effort` none/low/medium[default]/high/xhigh/max); tool calls yes (Responses API); structured outputs yes; audio/video unsupported.
- **Pricing (as of 2026-11-10):** $1.00 / 1M input, $5.00 / 1M output, cached input $0.05 (5%), cache writes $1.25 (30-min) / $2.50 (12h); Batch/Flex 50% off; Fast mode 2x; regional +10%.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** (OpenAI launch post); **55.6%** (Artificial Analysis)
- Terminal-Bench-Science 0.1: **58.3%** (OpenAI)
- Agents' Last Exam: **60.0%** (OpenAI)
- OSWorld 2.1 Offline: **74.2%** (OpenAI)
- AA AutomationBench: **60.2%** (Artificial Analysis)
- AA-Briefcase Elo: **1401** (Artificial Analysis)
- GDPval-AA: **1476** (Artificial Analysis)
- MazeBench: **16%**

Reasoning / knowledge:

- FrontierMath v2 (Tiers 1–3): **90.9%**; Tier 4: **92.7%** (Epoch AI)
- AA Intelligence Index: **51.3%** (Artificial Analysis v5.0.1); BenchLM **80.22** (#10/1020)
- AA-LCR: **82.7%** (Artificial Analysis LCR leaderboard)
- CritPt: **28.0%**; MLCR-AA: **30.6%** (Artificial Analysis)
- AA-HLE: **46.2%**; AA-Omniscience: Index **29.6**, Accuracy **47.6%**, Hallucination **34.5%**
- HealthBench Professional: **62.7%** (OpenAI system card addendum)

Coding:

- AA-SciCode: **55.1%** (Artificial Analysis)
- SWE-bench / LiveCodeBench: no verified public score found

Long context:

- AA-LCR: **82.7%** at 1.05M tokens (>272K inputs price-adjusted).

Multimodal:

- MMMU-Pro: **85.5%** (OpenAI); AA-MMMU-Pro **84.7%**
- ParseBench: **73.64%** (LlamaIndex, Nov 9 2026); ExtractBench **94.28%**; ExtractBench Pro **27%**

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld 74.2%, Agents' Last Exam 60.0%, AA AutomationBench 60.2%; capped by Terminal-Bench 4.0 50.3–55.6% and GDP.pdf 28.6%.
- **Reasoning: 74/100.** FrontierMath v2 T1–3 90.9% and Tier 4 92.7% are exceptional; AA Index 51.3 and HLE 46.2% pull back; hallucination 34.5% caps.
- **Context window: 94/100.** 1.05M tokens, 128K max output, AA-LCR 82.7% — verified; long-context surcharge noted.
- **Multimodal: 72/100.** Text+image only (no audio/video); MMMU-Pro 85.5%, ExtractBench 94.28%; no image generation.
- **Coding: 65/100.** Verified only AA-SciCode 55.1% and Terminal-Bench ~53% — no SWE-bench/LCB rows published; scored conservatively on the verified evidence.
- **Cost efficiency: 78/100.** $1/$5 per 1M — strong value in the frontier class; Batch 50% off; long-context tier doubles input pricing.
- **Overall Score: 75/100.** (68 + 74 + 94 + 72 + 65) / 5 = 74.6 → 75. Best fit: high-volume document/visual reasoning and computer-use agents on a budget; not for the hardest coding tasks without independent verification.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI model docs, launch post via BenchLM, Artificial Analysis, Epoch AI, LlamaIndex ParseBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Terra — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [Introducing GPT-6.1 Terra — OpenAI](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [GPT-6.1 Terra — BenchLM](https://benchlm.ai/models/gpt-6.1-terra)
  - [GPT-6.1 Terra — Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
