# Qwen 3.6 Plus — findings by Big Pickle

- Source: Alibaba (`opencode/qwen-3.6-plus`, Model Studio model `qwen3.6-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's hosted Qwen3.6 Plus, released 2026-04-02 as a large capability upgrade over Qwen3.5-Plus with a deliberate tilt toward real-world agents: repository-level agentic coding, front-end and "vibe coding", plus sharper multimodal perception (object recognition, OCR, localization). 1M context by default; the open-weight Qwen3.6 releases are separate entries.
- **Provider / access:** Alibaba Cloud Model Studio (Bailian), model ID `qwen3.6-plus` (snapshot `qwen3.6-plus-2026-04-02`); OpenRouter (`qwen/qwen3.6-plus`); OpenCode Zen `opencode/qwen-3.6-plus`. OpenAI-compatible chat endpoint with thinking/non-thinking toggle and a `preserve_thinking` flag recommended for agentic tasks.
- **Release / knowledge:** released 2026-04-02 (Alibaba Cloud); knowledge cutoff not published for the hosted tier.
- **IDs:** `opencode/qwen-3.6-plus` (Zen, standard pricing); upstream `qwen3.6-plus`.
- **Context window:** 1,000,000 tokens total — max input 991,808, max output 65,536; thinking mode 983,616 input with up to 81,920 chain-of-thought tokens.
- **Modalities:** text, image and video input (native vision-language series); text output; thinking / non-thinking modes; tool calls; `preserve_thinking` multi-turn reasoning context.
- **Pricing (as of 2026-10-02):** Model Studio International (Singapore) $0.50 in / $3.00 out per 1M up to 256K input, $2.00 / $6.00 above 256K; cache read $0.05/1M; China (Beijing) $0.276 / $1.651 up to 256K, $1.101 / $6.602 above; OpenRouter / Alibaba Cloud Int. route $0.325 / $1.95 with $0.0325 cache read.
- **Architecture:** hybrid linear attention plus sparse Mixture-of-Experts routing (Qwen3.6 family); proprietary hosted tier.

### Raw benchmarks found

Agent / tool use:

- TAU3-Bench: **70.7%** (Alibaba, official user model gpt-5.2 low effort + BM25 retrieval)
- τ²-Bench Telecom: **97.7%** (Artificial Analysis)
- Terminal-Bench 2.0: **61.6%** (Alibaba, Harbor/Terminus-2, avg of 5 runs); **61.4%** on Artificial Analysis
- Terminal-Bench Hard: **43.9%** (Artificial Analysis)
- IFBench (instruction following): **75.2%** (Artificial Analysis)
- GDPval-AA: **23.8%** (Artificial Analysis) — weak professional-work output
- Claw-Eval / QwenClawBench / MCPMark / MCP-Atlas: published by Alibaba as internal/leaderboard rows; no numeric figures surfaced in the sources read

Reasoning / knowledge:

- GPQA Diamond: **88.2%** (Artificial Analysis); **90.4%** (Alibaba, April 2026)
- HLE: **27.8%** (Artificial Analysis) — CritPt: **2.9%** (Artificial Analysis)
- MMLU: **87.5%** (Alibaba, April 2026); MMLU-ProX averages 29 languages per Alibaba's methodology
- AA-Omniscience Accuracy / Non-Hallucination Rate: **26.4% / 65.4%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **78.8%** (Alibaba, internal agent scaffold, 200K ctx)
- LiveCodeBench v6: **87.1%** (Alibaba)
- Artificial Analysis Coding Index: **54.5** (Artificial Analysis)
- Design Arena Elo: Code Categories **1242**, Game Development 1224, Data Visualization 1239, UI Component 1241, Website 1248, SVG 1161, Asciiart 1127, 3D 1217
- SWE-bench Pro (refined): reported by Alibaba on a corrected task set; no figure surfaced in the sources read

Long context:

- AA-LCR: **78.3%** (Artificial Analysis)
- Alibaba reports new records on precise information extraction from ultra-long contexts (WideSearch, 256K ctx with tool-token pruning) — no numeric figure surfaced
- No independent MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 74/100.** TAU3-Bench 70.7% and τ²-Bench Telecom 97.7% show strong tool-calling discipline, with Terminal-Bench 2.0 61.6% (five-run average) and IFBench 75.2% confirming reliable instruction-following under tools; capped by Terminal-Bench Hard 43.9% and a GDPval-AA of 23.8%, the weakest professional-work figure in this dataset.
- **Reasoning: 68/100.** GPQA Diamond 88.2–90.4% and MMLU 87.5% show solid academic science, but HLE 27.8% and CritPt 2.9% on Artificial Analysis are the two weakest frontier-tier cells in this report, and AA-Omniscience accuracy of 26.4% signals substantial knowledge-bound uncertainty.
- **Context window: 86/100.** A verified 1,000,000-token window (991,808 max input, 65,536 max output, 81,920-token thinking budget) with AA-LCR 78.3% and Alibaba's claimed ultra-long-context extraction records; capped by mid-tier measured retention rather than a top-decile 1M result.
- **Multimodal: 90/100.** A native vision-language model with text/image/video input — VideoMME 87.8% — plus documented gains in object recognition, OCR and localization, and Design Arena Elo leadership across Website (1248), Code (1242), UI Component (1241) and SVG (1161) front-end generation categories.
- **Coding: 80/100.** SWE-bench Verified 78.8%, LiveCodeBench v6 87.1% and top-tier Design Arena front-end Elo make it a strong everyday coder; capped by an Artificial Analysis Coding Index of only 54.5 and no independently surfaced SWE-bench Pro figure.
- **Cost efficiency: 96/100.** $0.325/$1.95 per 1M on OpenRouter, $0.50/$3.00 on Model Studio International, $0.276/$1.651 in the China region, a $0.0325–$0.05 cache-read rate and ~50% batch pricing — among the cheapest 1M-context multimodal models tracked here, with no free Zen ID documented.
- **Overall Score: 79.6/100.** Half-up mean of the five quality dims. Best fit as a low-cost 1M-context multimodal front-end and repository-level coding agent; pair it with a reasoning-first model whenever HLE-class expert reasoning or high-stakes professional deliverables matter.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Alibaba Cloud Model Studio qwen3.6-plus docs, Alibaba Cloud "Qwen3.6-Plus: Towards Real World Agents" release blog, Artificial Analysis figures via OpenRouter, OpenTools, benchable.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7.md`, using the same headings.

---