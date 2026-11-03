# Grok 4.6 — findings by Mercury 3

- Source: xAI/Grok 4.6
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 frontier model (released 2026-08-12, superseded by Grok 4.7) for coding, agentic tasks, and knowledge work. Strong GPQA (94.9%), fast agentic coding (TB2.1 AA 88.4%), 500K context, $2/$6 — a solid mid-frontier value pick.
- **Provider / access:** xAI API (`grok-4.6`), x.ai, plus 4 API providers tracked by Artificial Analysis; Batch API −20%.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff not published.
- **IDs:** `grok-4.6` (xAI API; reasoning effort low→xhigh, default high).
- **Context window:** 500,000 tokens total; max output not disclosed (500K output cap per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $2.00 input / $6.00 output per 1M tokens (<200K prompts; $4/$12 above 200K), cached input $0.50.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (AA) vs **78.3%** (Vals — conflicting harnesses); TB3.0: 26.5%
- APEX-Agents: **57.5%**; GDPval-AA v2: **1643 Elo** (AA; normalized 55.9%); AA Agentic Index: **53.4%**; AA Tau3-Banking: **50.7%**; AA EnterpriseOps-Gym: 48.3%; AA-AnalystAgent: 41.3%; CWE-bench v1: 57.0%; ApprenticeBench: 13%; MazeBench ASCII: 1%

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA) vs **94.7%** (Vals); HLE: **42.9%** (AA); MMLU-Pro: 89.4% (Vals)
- AA-LCR: **80.3%**; CritPt: **17.1%**; Artificial Analysis Intelligence Index: **44.3%**; ARC-AGI-1: 87.0%; ARC-AGI-2: 67.1%; ARC-AGI-3: 2.1%
- FrontierMath v2: Tiers 1–3 **65.97%**, Tier 4 **31.71%** (Epoch AI)
- AA-Omniscience: accuracy 48.2%, hallucination rate 34.3%; Gray Swan IPI (15 attempts): **51.8%** (weak prompt-injection robustness)

Coding:

- DeepSWE: **65.9%**; FrontierCode v1.1 Extended: **61.3%**; CursorBench 3.2: **70.8%** / 4.0: 41.4%; SWE-bench: **95.6%**; LiveCodeBench: **88.2%** (Vals); VulcanBench v3: 87.0%; AA-SciCode: 56.5%; AA Coding Index: **76.8%**; FrontierSWE v2: 25.3%

Long context:

- 500K window; AA-LCR 80.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; Design Arena 1287 Elo; no verified visual benchmark row found.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1-AA 88.4%, APEX 57.5%, Agentic Index 53.4% — strong; capped by Vals TB2.1 78.3%, ApprenticeBench 13%, and TB3.0 26.5%.
- **Reasoning: 87/100.** GPQA 94.9% (top-tier), LCR 80.3%, II 44.3; capped by HLE 42.9%, ARC-AGI-2 67.1%, and CritPt 17.1%.
- **Context window: 82/100.** 500K (below the 1M class) with good LCR 80.3%.
- **Multimodal: 82/100.** image input, text output; no video/audio input.
- **Coding: 87/100.** SWE-bench 95.6%, LiveCodeBench 88.2%, CursorBench 3.2 70.8%, coding index 76.8%; capped by FrontierSWE v2 25.3% and CursorBench 4.0 41.4%.
- **Cost efficiency: 84/100.** $2/$6 with $0.50 cached input — competitive; 71.3 t/s.
- **Overall Score: 85/100.** Mean of (86+87+82+82+87)/5 = 84.8 → 85. A capable mid-frontier model; the 500K context cap and weak prompt-injection robustness are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (xAI model docs/launch, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1) listed side by side.
- Reference URLs:
  - [Grok 4.6 model docs (xAI)](https://docs.x.ai/docs/models/grok-4.6)
  - [Grok 4.6 launch post (xAI)](https://x.ai/news/grok-4-6)
  - [Grok 4.6 — Artificial Analysis model page ($2/$6, 500K, 71.3 t/s)](https://artificialanalysis.ai/models/grok-4-6)
  - [Grok 4.6 — BenchLM benchmark aggregation](https://benchlm.ai/models/grok-4-6)
  - [Grok 4.6 — Vals AI model page](https://www.vals.ai/models/grok_grok-4.6)
  - [ARC Prize results — Grok 4.6](https://arcprize.org/results/xai-grok-4-6)
