# GPT-5.6 Sol — findings by GLM 5.3

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's July 2026 flagship-tier GPT-5.6 reasoning model (max effort default); superseded by GPT-6 Sol (Sept 2026) but still served. Top use case: high-effort agentic coding and research at sub-Astra pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** 2026-07-09; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.6-sol` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (1.05M per BenchLM; AA lists 1M).
- **Modalities:** text/image in; text out; reasoning yes (effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $4.00 in / $20.00 out per 1M ≤272K tokens ($8.00/$30.00 above 272K; cached read $0.40); OpenAI API same headline $4/$20.
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (BenchLM `gpt-5-6-sol`; Vals harness 85.8%; TB 3.0 34.6%; terminalBenchHard 65.9%)
- Tau3-Banking (AA harness): **44.3%**; Tau2-Bench **85.1%** (BenchLM)
- GDPval-AA: **1735 Elo** (BenchLM; normalized 54.4%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon: **58%**; OSWorld 2.0 **62.6%**; BrowseComp **92.2%**; CyberGym **84.5%**; ExploitGym **33.7%**; AA Briefcase Elo **1487**; AA ITBench **56.2%**; AA Harvey LAB **87.2%**; AA Agentic Index **50.5%**; AA AutomationBench **60.1%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (BenchLM; AA harness 94.1%; Vals 95.2%)
- HLE: **49.5%** AA harness / **54.5%** HLE-Verified (BenchLM)
- ARC-AGI-2: **92.5%** / ARC-AGI-3 **7.8%** (BenchLM)
- AA-LCR: **84.0%**; CritPt **32.3%**; MLCR-AA **26.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **47** (max effort, AA #19/211; BenchLM lists 58.9 from an earlier snapshot)
- Omniscience Accuracy / Hallucination Rate: **59.4% / 92.2%** (BenchLM — very high hallucination rate is the standout weakness)
- FrontierMath v2: **89.0%** Tiers 1–3 / **83.0%** Tier 4; MMLU-Pro (Vals) **89.1%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **96.2%**
- SWE-bench Pro: **64.6%**; DeepSWE **72.7%**; LiveCodeBench (Vals) **82.6%** (BenchLM)
- SciCode / AA-SciCode: **57.1%**; AA Coding Index **77.4%**; CursorBench 3.2 **67.2%** / 4.0 **41.7%**; FrontierSWE v2 **32.2%**; VulcanBench v3 **87.0%**; Bug Hunt Bench **42 fixes** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 84.0% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- MMMU-Pro **83%** / w/ Python **84.6%** (AA 83.4%) (BenchLM).

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 91.9% clears the frontier ref, Tau2 85.1%, BrowseComp 92.2% and Agentic Index 50.5% are top-tier; Tau3 44.3% and GDPval 1735 sit a hair under the frontier bars; Claw-Eval unpublished.
- **Reasoning: 89/100.** GPQA 94.6%, HLE 49.5–54.5%, ARC-AGI-2 92.5% and FrontierMath T4 83% are frontier; ARC-AGI-3 7.8% is weak and the 92.2% hallucination rate significantly caps knowledge reliability.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; MMMU-Pro 83% confirms strong vision.
- **Coding: 93/100.** SWE-bench Verified 96.2% (Vals) is elite; SciCode 57.1%, Coding Index 77.4%, LCB 82.6%, TB2.1 91.9% all clear frontier refs; DeepSWE 72.7% just misses 74 and FrontierSWE v2 32.2% drags.
- **Cost efficiency: 60/100.** $4/$20 per 1M on the evaluated tier (doubling above 272K) — right at the $3/$15≈60 anchor's edge; TTFT 113s is a latency cost.
- **Overall Score: 87.8/100.** (92 + 89 + 95 + 70 + 93) / 5 = 87.8. Best-fit: near-flagship agentic coding when Astra-class pricing is too steep; GPT-6 Sol is the current successor.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
