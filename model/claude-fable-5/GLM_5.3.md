# Claude Fable 5 — findings by GLM 5.3

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's June 2026 ultra-thinking frontier model for long-horizon agentic work — near-ceiling tool use and coding benchmarks with a 1M window. Superseded by Claude Fable 5.1 (Sept 2026; Artificial Analysis marks this release deprecated) but still served.
- **Provider / access:** Anthropic Messages API; OpenCode Zen `opencode/claude-fable-5` at `https://opencode.ai/zen/v1/messages` ($10.00/$50.00, cached read $1.00, cache write $12.50 — Zen pricing table, live 2026-10-08); 7 providers on AA.
- **Release / knowledge:** 2026-06-09 (Artificial Analysis); knowledge cutoff not stated.
- **IDs:** `opencode/claude-fable-5`; no Free ID.
- **Context window:** 1M (Artificial Analysis; BenchLM 1M+; the folder meta's 128K is a scaffold placeholder).
- **Modalities:** text and image in; text out; reasoning yes (extreme thinking budget — 119.89s median TTFT); tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $10.00 in / $50.00 out per 1M (Zen, AA); $8.75 per AA Intelligence Index task; 64.6 tokens/s output.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **98.5%** (Artificial Analysis tau2 leaderboard via BenchLM)
- OSWorld-Verified: **85%** (Anthropic Claude Fable 5 / Mythos 5 system card via BenchLM)
- Terminal-Bench 2.1: **84.3%** (system card; Vals 80.5%) (BenchLM)
- GDPval-AA: **1747** (55.6% normalized) (system card / AA via BenchLM)
- Harvey LAB-AA: **93.6%** (AA leaderboard via BenchLM)
- terminalBench-Hard: **62.9%** (AA leaderboard via BenchLM)
- AA Agentic Index: **51.0%** (AA via BenchLM)
- AA EnterpriseOps-Gym: **51.1%** / AA-AnalystAgent: **48.8%** (AA via BenchLM)
- Terminal-Bench 3.0: **34.0%** (FrontierBench leaderboard via BenchLM)
- ApprenticeBench (GUI): **34%** (NeoCognition via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA; Vals 93.2%) (BenchLM)
- HLE: **55.5%** (AA leaderboard via BenchLM)
- ARC-AGI-1: **98.50%** / ARC-AGI-2: **89.2%** (ARC Prize verified results via BenchLM)
- MMLU-Pro: **91.5%** (Vals via BenchLM)
- AA-LCR: **82.3%** / MLCR-AA: **64.4%** (AA via BenchLM)
- CritPt: **28.6%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **50** (AA model page; BenchLM 49.6)
- AA-Omniscience Index: **+43.3** (accuracy 65.4%, hallucination rate 63.6%) (AA via BenchLM)

Coding:

- SWE-bench Verified: **95%** (system card; Vals 95.0%) (BenchLM)
- SWE-bench Pro: **80%** (system card via BenchLM)
- LiveCodeBench: **89.8%** (Vals via BenchLM)
- AA Coding Index: **76.5%** / AA-SciCode: **61.0%** (AA via BenchLM)
- FrontierSWE v2: **47.0%** (Proximal via BenchLM) / FrontierCode 1.1: **53.5%** (Cognition via BenchLM)
- CursorBench 3.1/3.2: **70.6% / 70.5%** (Cursor evals via BenchLM); VulcanBench v3: **89.5%** (technical report via BenchLM)

Multimodal:

- Blueprint-Bench 2: **38.6%** / OfficeQA Pro: **57.9%** (system card via BenchLM) — modest image grounding
- Design Arena Website: **1302** (OpenRouter via BenchLM)

Long context:

- 1M window verified (Artificial Analysis); AA-LCR 82.3% is the long-context reasoning proxy; no MRCR/RULER retrieval percentage published.

Instruction following:

- AA-IFBench: **63.5%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench 98.5%, OSWorld-Verified 85%, Terminal-Bench 2.1 84.3%, Harvey LAB 93.6% and GDPval-AA 1747 are frontier-class; capped by AA Agentic Index 51.0%, ApprenticeBench 34% and Terminal-Bench 3.0 34% on the newest harnesses.
- **Reasoning: 90/100.** GPQA 92.6%, HLE 55.5% and ARC-AGI-2 89.2% clear the frontier references; capped by CritPt 28.6%, a 63.6% hallucination rate and AA Intelligence Index 50 (below the 60+ frontier band).
- **Context window: 95/100.** 1M verified (Artificial Analysis); not 100 because no ≥98% retrieval-at-512K measurement is published.
- **Multimodal: 68/100.** Image input verified but grounding scores are modest (OfficeQA Pro 57.9%, Blueprint-Bench 38.6%) with text-only output — top of the image-in band, no further.
- **Coding: 93/100.** SWE-bench Verified 95%, SWE-bench Pro 80% and LiveCodeBench 89.8% are best-in-class; capped by FrontierSWE v2 47.0% and SciCode 61.0% on harder/newer sets.
- **Cost efficiency: 30/100.** $10.00/$50.00 per 1M is the most expensive tier in the methodology's scale (~$10/$50 = ~30), with $8.75 per Intelligence Index task and a ~120s median TTFT — capability at maximum price.
- **Overall Score: 88/100.** (92 + 90 + 95 + 68 + 93) / 5 = 87.6 → 88. Best-fit recommendation: maximal-quality long-horizon agentic coding and computer-use work where cost is no object; for everything cheaper, Fable 5.1 or Opus-tier models deliver most of the capability at a fraction of the price.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Anthropic system card via BenchLM, Artificial Analysis, Vals, ARC Prize, Zen pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
