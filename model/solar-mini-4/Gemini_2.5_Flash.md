# Solar Mini 4 — findings by Gemini 2.5 Flash

* Source: Upstage (`upstage/solar-mini4`)
* Date: 2026-10-09 (UTC)
* Overview and scoring methodology: `../../model-comparison.md`
* Cross-model signed log: `../../model-findings.md`

## Model card

* **Name:** Solar Mini 4
* **Short description:** Solar Mini 4 is a compact 35B-parameter Mixture-of-Experts language model with 3B active parameters per token created by Upstage. It is designed specifically as a high-speed, low-cost workhorse for high-volume agentic tasks, document processing, and tool orchestration.
* **Provider / access:** Available directly via Upstage API Console (`upstage/solar-mini4` or `solar-mini4-260922`), OpenRouter (`upstage/solar-mini4`), and Hermes Agent via Nous Portal. Supports standard Chat Completions / Tool Calling / JSON mode APIs. Note: No OpenCode Zen Free API ID exists for this model.
* **Release / knowledge:** 2026-09-22; training cutoff February 2026.
* **IDs:** `upstage/solar-mini4` / `solar-mini4-260922` (No Free ID exists on OpenCode Zen).
* **Context window:** 524,288 tokens total input / 131,072 tokens max output (verified via Upstage official launch specs and LLM Stats).
* **Modalities:** Text-only in (English, Korean, Japanese supported); text out; reasoning no; tool calls yes (including parallel tool calls); JSON mode yes.
* **Pricing (as of 2026-10-09):** $0.10 / 1M input tokens, $0.01 / 1M cached input tokens, $0.40 / 1M output tokens via Upstage Console. Free access for 2 weeks inside Hermes Agent through Nous Portal starting October 5, 2026. Paid API pricing carries standard commercial privacy terms.
* **Architecture:** 35B total parameters / 3B active parameters per token Mixture-of-Experts (MoE); proprietary weights.

### Raw benchmarks found

Agent / tool use:

* Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench 4.0 reported at **43.0% / 0.43** on LLM Stats / AA)
* Tau3-Banking / Tau2-Bench: **47.2%** (Upstage official launch post / harness τ³-Banking)
* GDPval-AA: **1072.00 Elo** (Artificial Analysis GDPval-AA v2.1, rank #5)
* Claw-Eval / ClawProBench: **no verified public score found**
* Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (AutomationBench-AA reported at **22.3%** by Upstage)

Reasoning / knowledge:

* GPQA Diamond: **no verified public score found**
* HLE: **19.6% / 25.8%** (Humanity's Last Exam text-only reported at 19.6% in Upstage launch post and 25.8% in evaluation summaries)
* LCR / MLCR: **83.3%** (Artificial Analysis AA-LCR v1.1, rank #1)
* CritPt: **no verified public score found**
* Artificial Analysis Intelligence Index / BenchLM overall: **24.1 / #1 among 3B-active models** (Artificial Analysis Intelligence Index v4.3.2)
* Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

* SWE-bench Verified / SWE-Pro: **no verified public score found**
* LiveCodeBench: **no verified public score found**
* SciCode / AA-SciCode: **47.6% (0.48/1)** (SciCode scientific coding benchmark, rank #10 on AA)
* Vibe Code Bench: **no verified public score found**
* DeepSWE / Coding Index / other: **no verified public score found**

Long context:

* **83.3%** on AA-LCR v1.1 (Agent Arena Long Context Reasoning) across 100k-500k token windows

### Normalized scores (1-100)

* **Tool use: 62/100.** Demonstrates respectable agent performance for a 3B-active model with 47.2% on Tau3-Banking, 22.3% on AutomationBench-AA, and 1072 Elo on GDPval-AA 2.1. Capped below frontier level due to sub-50% Tau3 and lack of top-tier Terminal-Bench 2.1 scores.
* **Reasoning: 58/100.** Achieves 24.1 on the Artificial Analysis Intelligence Index v4.3.2 and 19.6% on Humanity's Last Exam. Strong for its active parameter class, but capped by sub-20% HLE and lack of frontier-tier GPQA Diamond verification.
* **Context window: 88/100.** Verified 524,288 token input capacity (500K-1M tier) with an exceptional 83.3% long-context reasoning score on AA-LCR v1.1.
* **Multimodal: 15/100.** Strictly text-only input and output modalities.
* **Coding: 55/100.** Reaches 47.6% (0.48) on SciCode scientific problem solving/code synthesis. Capped due to absence of verified public scores on SWE-bench Verified or LiveCodeBench.
* **Cost efficiency: 98/100.** Highly cost-effective at $0.10/1M input, $0.01/1M cached, and $0.40/1M output tokens.
* **Overall Score: 56/100.** Mean of non-cost dimensions ((62 + 58 + 88 + 15 + 55) / 5 = 55.6 -> 56). Best-fit workhorse choice for high-volume, cost-sensitive agent loops, document extraction, and long-context retrieval where sub-$0.15/1M execution is required.

---

## Signature

* Provided by: **Gemini 2.5 Flash (google/gemini-2.5-flash)** — 2026-10-09
* Method: Public web research across Upstage official releases, Artificial Analysis, and LLM Stats; scores are normalized 1-100 interpretations, not official vendor scores.
* Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.