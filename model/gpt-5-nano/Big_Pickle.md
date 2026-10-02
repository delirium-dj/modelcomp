# GPT 5 Nano — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5-nano`, API model `gpt-5-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5 Nano
- **Short description:** OpenAI's fastest and cheapest GPT-5 tier, shipped alongside GPT-5 in August 2025 for summarization and classification. Now **legacy**: OpenAI's own model page recommends GPT-5.6 Luna for new speed- and cost-sensitive workloads, and Artificial Analysis has marked variants deprecated. Still cheap and still unusually good at narrow, well-specified classification and device-automation tasks.
- **Provider / access:** OpenAI API `gpt-5-nano`; `reasoning.effort` minimal, low, medium, high; Azure; OpenRouter; OpenCode Zen `opencode/gpt-5-nano`.
- **Release / knowledge:** released August 2025 with the GPT-5 family; knowledge cutoff 2024-05-30 — roughly a year behind the GPT-5.4 generation.
- **IDs:** `opencode/gpt-5-nano` (Zen, standard pricing); upstream `gpt-5-nano`.
- **Context window:** 400,000 tokens, 128,000 max output (OpenAI API model page).
- **Modalities:** text and image input; text output; reasoning effort minimal–high; tool calls; structured outputs; `verbosity` control.
- **Pricing (as of 2026-10-02):** **$0.05 in / $0.40 out per 1M**; cached input $0.005 (90% cache discount); batch ≈50%. Blended ≈$0.0535 per 1M at a 7:2:1 cache/input/output ratio.
- **Architecture:** proprietary; weights not published. Measured output speed 144–171 t/s depending on reasoning effort.
- **Reasoning modes measured:** minimal (Intelligence Index 7), medium (12), high (13).

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **91.4%** — exceptional device-automation performance, 4th of 21 on BenchmarkList (BenchmarkList)
- Berkeley Function-Calling Leaderboard: **51.5%**, 20th of 85
- MiniWoB++: **64.8%**; WorkArena-L1: **40.6%**, WorkArena-L2: **3.4%**
- τ²-Bench Telecom: **36.5%** at high (30.4% medium, 25.7% minimal) — Artificial Analysis
- MCPMark: **6.3%** — 38th of 41, the clearest weakness
- Terminal-Bench Hard: **12.1%** at high, 17.4% medium, 6.8% minimal (Artificial Analysis)
- IFBench (instruction following): **67.6%** at high (65.9% medium, 32.5% minimal)

Reasoning / knowledge:

- GPQA Diamond: **67.6%** at high (67.0% medium, 42.8% minimal) — Artificial Analysis
- MMLU-Pro: **78.0%**; AIME 2025: **83.7%**; HLE: **9.5%** at high (8.7% medium, 4.0% minimal)
- CritPt: **0.0%** in every mode; ARC-AGI-2 **2.6%**; ARC-AGI-1 **20.7%**
- Artificial Analysis Intelligence Index: **13** at high, 12 medium, 7 minimal
- AA-Omniscience Accuracy / Non-Hallucination Rate: **19.1% / 41.0%** at high (13.1% / 11.2% minimal)

Coding:

- LiveCodeBench: **78.9%** (temperature2; BenchmarkList lists 70.2%)
- SciCode: **36.6%** at high (33.8% medium, 29.1% minimal)
- SWE-bench Verified / SWE-bench Pro: no verified public score found for this ID
- Design Arena Code Categories Elo: **1090**

Long context:

- AA-LCR: **45.0%** at high (43.7% medium, 20.0% minimal); LongContext Reasoning 43.7
- GraphWalks <128K: BFS **64.0%**, parents **43.8%**
- 400K window documented; no MRCR / RULER row published

Multimodal / output quality:

- MMMU-Pro: **70.9%**; MMBench **80.3%**; RealWorldQA **74.1%**; AIIQ Composite IQ 96
- Design Arena Elo: Website **1108**, Code 1090, UI Component 1073, Data Visualization 1065, Game Development 1057, 3D 980

### Normalized scores (1–100)

- **Tool use: 60/100.** Genuinely split profile. AndroidWorld 91.4% and MiniWoB++ 64.8% show excellent GUI/device automation, and BFCL 51.5% and IFBench 67.6% show solid function calling; but MCPMark 6.3%, Terminal-Bench Hard 12.1% and τ²-Bench Telecom 36.5% show it cannot drive terminal or MCP-based engineering workflows — fine as a UI/screen agent, poor as a coding agent.
- **Reasoning: 62/100.** GPQA Diamond 67.6%, MMLU-Pro 78.0% and AIME 2025 83.7% keep it competitive on academic-style questions, but HLE 9.5%, CritPt 0.0% and ARC-AGI-2 2.6% show no genuine reasoning depth, and the minimal-to-high spread is only 7→13 on the Intelligence Index — the reasoning dial buys very little here.
- **Context window: 64/100.** A real 400,000-token window with poor recall inside it: AA-LCR 45.0%, LongContext Reasoning 43.7%, GraphWalks parents 43.8%. The window is available for cheap prompt stuffing, not for reliable retrieval.
- **Multimodal: 74/100.** Text and image input with MMMU-Pro 70.9%, MMBench 80.3%, RealWorldQA 74.1% and a Design Arena Website Elo of 1108 — solid, if unremarkable, vision for a nano tier, and the strongest dimension after cost.
- **Coding: 66/100.** LiveCodeBench 78.9% proves competent contest-style generation, and Design Arena Code at 1090 Elo is respectable; but SciCode 36.6%, Terminal-Bench Hard 12.1% and the complete absence of any SWE-bench figure show this is not a code-fixing model.
- **Cost efficiency: 94/100.** $0.05/$0.40 with $0.005 cache reads and half-price batch remains one of the cheapest routes to any model in this comparison, at 144–171 t/s; docked only for being deprecated — OpenAI now steers new spend to GPT-5.6 Luna.
- **Overall Score: 65.2/100.** Half-up mean of the five quality dims. Best fit for high-volume classification, extraction, summarization, device/GUI automation and routing; GPT-5.4 nano is the better buy for anything new, at 4× the input price for a far more capable model.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5 nano API model page, Artificial Analysis GPT-5 nano release/model/comparison pages via OpenRouter, BenchmarkList, temperature2, TechBriefly, Vector Wire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Luna.md`, using the same headings.

---