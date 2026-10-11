# Claude Haiku 3.5 — findings by Gemini 3.8 Flash

- Source: opencode/claude-haiku-3.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's October 2024 small/fast model — a drop-in upgrade to Claude 3 Haiku that beat Claude 3 Opus on several knowledge benchmarks at release. Retired 2026-02-19 (replaced by claude-haiku-4-5); no first-party access remains.
- **Provider / access:** opencode/claude-haiku-3.5
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/claude-haiku-3.5 (no Free ID on Zen)
- **Context window:** 200,000 total; 8,192 max output
- **Modalities:** Text in/out; image + PDF input (image added 2025-02-25); text-only output
- **Pricing (as of 2026-10-11):** Retired 2026-02-19; final rate $0.80/$4.00 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

**Vendor-reported (Anthropic Model Card Addendum, 2024-10-22):**

- SWE-bench Verified: **40.6%** (Table 2, pass@1; beat the original Claude 3.5 Sonnet's 33.4% and
  Claude 3 Opus's 22.2%; SOTA leaderboard was 45.2% at the time)
- TAU-bench (τ-bench, pass^1): Retail **51.0%**, Airline **22.8%** (Table 3)
- GPQA Diamond 0-shot CoT: **41.6%** · MMLU 5-shot CoT **80.9%** / 5-shot 77.6% / 0-shot CoT 80.3% ·
  MMLU-Pro 0-shot CoT **65.0%** · MATH **69.2%** · HumanEval 0-shot **88.1%** · MBPP **85.6%** ·
  MGSM 0-shot CoT 85.6% · DROP 3-shot F1 83.1

**Independent / third-party (DataLearner aggregated, with ranks):**

- MMLU 77.60 (**#61/124**) · MMLU-Pro 65.0 (**#114/176**) · GPQA 37.50 (**#15/17**)
- GPQA Diamond 41.60 (**#429/463**) · HLE **3.60** (**#547/565**)
- MATH 69.20 (**#23/42**) · FrontierMath **0.30** (**#57/60**)
- HumanEval 88.10 (**#30/140**) · MBPP 85.60 (**#10/96**) · LiveCodeBench **31.40** (**#215/251**)
- Aider-Polyglot 28 (**#44/59**)
- Terminal-Bench 2.1 **10.10** (**#176/196**, with tools) · Terminal-Bench Hard **2.30** (**#229/244**)
- τ²-Bench Telecom **24.60** (**#231/264**, with tools)
- IF Bench 42.80 (**#198/282**) · SimpleQA 8.02 (**#44/47**) · Creative Writing 1143.50 (**#82/106**)
- **MMMU-Pro 45.60 (#212/229)**

**Artificial Analysis:**

- Intelligence Index **9** (estimated, legacy scale) / **18.7, #235** on the revised index
- HLE **4%** · CritPt **0%** · AA-LCR v1.1 **27%** · GDPval-AA v2.1 **198** Elo · AA-Omniscience **−23**
- Sub-index ranks: Coding Index 10.7 **#287**, MMLU-Pro #240, GPQA #360, HLE #426, LiveCodeBench
  #200, AIME #147, IFBench #194, SciCode #263, MATH-500 #119, LCR #230, TB-Hard #290, TAU2 #263
- TTFT ranked **#35**; output throughput reported ~170 tok/s (Serenities AI)

**Vendor-vs-independent conflict worth recording:** Anthropic reports SWE-bench Verified 40.6%;
independent re-measurement puts it at **22.0%** (Serenities AI). The vendor number came with a
bespoke scaffold; the replicated number does not. Same pattern on GPQA (41.6% official vs 35.0%
third-party). Treat vendor figures as a scaffold-assisted ceiling.

Agent / tool use:

- Terminal-Bench 2.1: **10.10%** (#176/196)
- Terminal-Bench Hard: **2.30%** (#229/244)
- Tau2-Bench Telecom: **24.60%** (#231/264) — Tau-bench v1 Retail **51.0%** / Airline **22.8%**
  (Anthropic's own harness)
- GDPval-AA: **198** Elo
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found** (it predates
  MCP-Atlas; `claude-3-5-haiku` is absent from that 20-model leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (#429/463)
- HLE: **3.6%** (#547/565)
- LCR / MLCR: **27%** (AA-LCR v1.1)
- CritPt: **0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **18.7 / #235** (9 on the legacy scale)
- Omniscience Accuracy / Hallucination Rate: **−23 index**; SimpleQA 8.02 (#44/47)
- MMLU 77.6 / MMLU-Pro 65.0 / MATH 69.2 / FrontierMath 0.3

Coding:

- SWE-bench Verified: **40.6%** (Anthropic) / **22.0%** (independent)
- LiveCodeBench: **31.4%** (#215/251)
- HumanEval **88.1%** (#30/140) · MBPP **85.6%** (#10/96) · Aider-Polyglot 28 (#44/59)
- SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- **no long-context retrieval measurement reported** (no MRCR, RULER or GraphWalks row). The
  200K window is documented as a capacity, not as a measured retrieval result.

Multimodal:

- MMMU-Pro **45.60%** (#212/229)

### Normalized scores (1–100)

- **Tool use: 50/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 55/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 70/100.** Effective retrieval fidelity across context capacity (200,000 total; 8,192 max output).
- **Multimodal: 62/100.** Input/output modality comprehension (Text in/out; image + PDF input (image added 2025-02-25); text-only output).
- **Coding: 60/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 59.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
