# DeepSeek V4 Pro — findings by Pixel Canary

- Source: DeepSeek (`opencode/deepseek-v4-pro`, weights `deepseek-ai/DeepSeek-V4-Pro-0813`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813 build) — the open-weight flagship of the V4 generation, **now officially superseded**: from 04:00 UTC 2026-09-14 every `deepseek-v4-pro` API request is routed to **V4.1-Flash** at V4.1-Flash rates, so this ID is effectively a legacy/archival entry.
- **Short description:** A 1M-context reasoning MoE with **384K max output**, native tool calling and MIT-class open weights, whose published profile is heavy on long-context retrieval (MRCR 1M 83.5%) and algorithmic coding (LiveCodeBench 93.5%) rather than agentic autonomy (AA Agentic Index 49.6).
- **Provider / access:** DeepSeek first-party API plus open-weight hosts — DeepInfra, TogetherAI, Baseten, Fireworks, Novita — all serving `deepseek-ai/DeepSeek-V4-Pro-0813`; OpenAI-compatible with function calling and structured output. Self-hosting supported (weights on Hugging Face).
- **Release / knowledge:** **2026-08-12** (models.dev `release_date` on all three hosted entries); knowledge cutoff not published.
- **IDs:** `opencode/deepseek-v4-pro`, `deepinfra/deepseek-ai/DeepSeek-V4-Pro-0813`, `togetherai/deepseek-ai/DeepSeek-V4-Pro-0813`, `baseten/deepseek-ai/DeepSeek-V4-Pro-0813`. No free/Zero-cost Zen ID.
- **Context window:** **1,048,576 input tokens / 384,000 output** (DeepInfra and TogetherAI limits; Baseten caps output at 262,144) — BenchLM lists "1M". This folder's `meta.json` still says "128K total / Text in-out / Standard pricing", which is a stale placeholder and contradicts every hosted entry.
- **Modalities:** **Text in / text out only** on all three hosted entries — no image, audio or video input. Reasoning: yes. Tool calling: yes (MCP Atlas and Terminal-Bench "with tools" rows exist).
- **Pricing (as of 2026-09-29):** DeepInfra **$1.30 / $2.60** per 1M with **$0.10 cache reads**; TogetherAI $1.32 / $3.96 (cache $0.13); Baseten $1.32 / $3.96. Open weights mean self-hosting cost is hardware-only.
- **Architecture:** proprietary-trained but **open weight** (BenchLM "Source Type: Open Weight"); DeepSeek does not publish a parameter count for the V4-Pro tier, and the V4.1 report describes an asymmetric encoder–decoder MoE with a compressed KV cache.

### Raw benchmarks found

BenchLM profile `deepseek-v4-pro-0813` (updated 2026-09-28) — composite **63.97/100, rank #35 of 512**.

Agentic / tool use:

- Terminal-Bench 2.1: **87.9%**; Terminal-Bench 2.0: **67.9%**; Terminal-Bench 2.1 (Vals): 54.7%
- MCP Atlas: **73.6%**; AA Agentic Index: **49.6%**
- GDPval-AA: **1306** Elo (54.5% normalized) — below Grok 4.6 (1643–1663), MiMo-V2.6-Pro (1673) and DeepSeek's own V4.1-Flash (1632)
- APEX-Agents-AA: **24.3%**; no Toolathlon / τ²-bench / OSWorld row published for this ID

Coding:

- SWE-bench Verified: **80.6%**; SWE-bench (Vals): **96.4%**; SWE-bench Pro: **55.4%**
- LiveCodeBench (Pass@1-CoT): **93.5%**; LiveCodeBench (Vals): 87.5%
- DeepSWE: **62.7%**; AA Coding Index: **68.8%**; AA-SciCode: 51.0%; Vibe Code Bench: 49.93%

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (AA-GPQA Diamond **92.8%**, Vals 92.4%); HLE: **42.7%** (AA-HLE 41.0%, HLE **with tools 60.0%**)
- MMLU-Pro: **87.5%** (Vals 87.0%); HMMT Feb 2026: **95.2%**; FrontierMath v2 Tiers 1–3 32.4 / Tier 4 8.3 (Vals 14.1 / 4.2); Apex Shortlist 90.2, Apex 38.3
- Artificial Analysis Intelligence Index: **53.2** — the highest of any DeepSeek ID checked here (V4.1-Flash 39.5)
- CritPt: **18.0%**; AA-IFBench: **76.5%**
- AA-Omniscience: Accuracy **49.1%**, Hallucination Rate **94.1%**, Index **0.8** — answers confidently far more often than it knows

Long context:

- **MRCR 1M: 83.5%** — a verified score at the full million-token depth; AA-LCR: **80.3%**
- RULER / GraphWalks / MLCR multi-document: no verified public score found for this ID

Multimodal:

- Design Arena (website Elo): **1258** — a text-prompt-to-design row, not visual input
- MMMU-Pro / OCRBench / Video-MME / audio: **no rows exist — the API is text-only**

### Normalized scores (1–100)
