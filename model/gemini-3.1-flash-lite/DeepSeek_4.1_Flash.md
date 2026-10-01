# Gemini 3.1 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Flash-Lite (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (GA high-efficiency tier; no "Free" wording, AI Studio quota offered)
- **Short description:** Google's March 2026 budget multimodal model ("intelligence at scale"): low-latency, high-volume work such as subagent routing, document parsing, classification and agentic search. Supersedes Gemini 2.5 Flash-Lite and is itself superseded by Gemini 3.5 Flash-Lite.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI. Proprietary, closed; no self-hosting.
- **Release / knowledge:** Catalogue date 2026-05-07 (BenchmarkList); GA 2026-03-03. Knowledge cutoff 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite` (also `gemini-3.1-flash-lite`). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output not published for this tier.
- **Modalities:** text, image, video, audio and PDF input; text output; tool calls; structured output; reasoning yes — thinking level minimal by default.
- **Pricing (as of 2026-10-01):** $0.25–$0.28 / 1M in and $1.50–$1.65 / 1M out (10% list rise 2026-08-29); prompt caching ≈50% off; batch ≈50% off-peak.
- **Architecture:** proprietary dense Transformer; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **31.1%** (rank 97 of 182); Tau3-Banking: **8.7%**; APEX-Agents: **25.0%** (BenchmarkList)
- GDPval-AA: **651 Elo**; MCP Atlas: **57.1%**; Agentic Skills Evaluation Framework: **71.4%**
- Claw-Eval / ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.2%** (rank 108 of 464); HLE: **16.2%** (rank 124 of 466)
- Artificial Analysis Intelligence Index: **25.04** (68th percentile); AIIQ Composite IQ: 101
- MMLU-Pro / CritPt / LCR: **no verified public score found**

Coding:

- SciCode: **41.9%** (rank 91 of 458); WebDev Arena: **1254 Elo**
- SWE-bench Verified / Pro / LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value for this tier; recall at 1M depth is unmeasured here.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.1 31.1%, Tau3-Banking 8.7% and APEX-Agents 25.0% fit "subagent and tool-router", not autonomous agent; the missing Claw/Toolathon results leave no way to argue higher.
- **Reasoning: 60/100.** GPQA Diamond 82.2% and an AA Intelligence Index of 25.04 are strong for the price class, but HLE 16.2% shows a shallow frontier-reasoning ceiling.
- **Context window: 95/100.** 1,048,576 tokens with ~50% caching and batch discounts is excellent value for long ingestion; capped by the absence of recall-at-depth evidence.
- **Multimodal: 82/100.** Text, image, video, audio and PDF ingestion in one call with text output; no generation and modality-specific quality is below the full Flash tiers.
- **Coding: 58/100.** SciCode 41.9% and WebDev Arena 1254 Elo are mid-pack; no SWE-bench-class result exists, so repository-level agentic coding is unsupported.
- **Cost efficiency: 88/100.** $0.25–$0.28 / $1.50–$1.65 per 1M is cheap and discountable, but the August 2026 10% list increase and cheaper, newer Lite tiers cap the score.
- **Overall Score: 67/100.** Mean of the five quality dims (40+60+95+82+58)/5 = 67.0 → 67. Best fit: high-volume multimodal ingestion, routing and classification where a million-token window matters more than agentic depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Google DeepMind model card, Epoch AI figures via Model Beat); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
