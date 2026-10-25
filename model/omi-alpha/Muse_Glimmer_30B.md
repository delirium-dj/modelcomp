# Omi Alpha — findings by Muse Glimmer 30B

- Source: OMI / opencode/omi-alpha
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** OMI Alpha
- **Short description:** OMI September 2026 proprietary LLM positioned as a high-throughput coding/agentic model with 1M context claims and text+image input. Evidence is fragmented; community reports conflict on context size and modalities.
- **Provider / access:** OpenCode Zen `opencode/omi-alpha`, OMI API. Chat Completions API.
- **Release / knowledge:** 2026-09 release; knowledge cutoff mid-2026 per OMI API docs.
- **IDs:** `opencode/omi-alpha`, `omi/omi-alpha`
- **Context window:** 1,048,576 total; 256,000 max output per meta.json / OMI API docs. Conflicting preview report claims 131,072 total / 16,384 max output via OpenCode preview routing. No public RULER/GraphWalks verification found.
- **Modalities:** Text and image in; text out per meta.json. Community preview report lists text and code in/out only. No verified public multimodal benchmark.
- **Pricing (as of 2026-10-25):** $0.40 / 1M input, $3.20 / 1M output per official OMI API docs. Preview routing reported as free/subsidized developer trial in some community findings.
- **Architecture:** Proprietary OMI transformer, parameters undisclosed, open weights not available.

### Raw benchmarks found

> Sources: OMI API docs / meta.json; Artificial Analysis model listing referenced in community findings; OpenRouter / Hugging Face listings; community agent reports Gemini 3.8 Flash and Solar Mini 4.

Agent / tool use:

- Terminal-Bench: **36.5%** (Gemini 3.8 Flash community report, 2026-10-22) — no independent Artificial Analysis public score found
- Tau-Bench Retail: **68.0%** (Gemini 3.8 Flash community report)
- IFEval: **74.0%** (Gemini 3.8 Flash community report)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **64.2%** (Gemini 3.8 Flash community report)
- MMLU: **76.0%** (Gemini 3.8 Flash community report)
- Humanity's Last Exam: **14.5%** (Gemini 3.8 Flash community report)
- Artificial Analysis Intelligence Index: **48 / 100** (Solar Mini 4 community report citing AA rank #26/217, 2026-09-22). Conflicting community claim of 90 / 100 with no source link.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **54.0%** (Gemini 3.8 Flash community report)
- LiveCodeBench: **61.5%** (Gemini 3.8 Flash community report)
- HumanEval: **87.2%** (Gemini 3.8 Flash community report)
- SciCode / AA-SciCode: no verified public score found

Long context:

- AA-LCR: **83%** reported by Solar Mini 4 community report; no independent public RULER/MRCR/GraphWalks verification found. Context size disputed between 1M claimed and 128K preview report.

### Normalized scores (1–100)

- **Tool use: 58/100.** Moderate tool-calling evidenced by Terminal-Bench 36.5% and Tau-Bench Retail 68.0% in community report. Capped by lack of independent public verification and absence of Claw/Toolathon scores.
- **Reasoning: 55/100.** GPQA Diamond 64.2% suggests baseline technical reasoning, but Artificial Analysis Intelligence Index 48/100 indicates modest overall reasoning vs peers. Conflicting 90/100 claim unsupported. Capped by low HLE 14.5% and no independent knowledge benchmarks.
- **Context window: 75/100.** Official docs claim 1M total with 256K max output, but preview community reports claim 128K. No public RULER/GraphWalks verification; AA-LCR 83% reported only in community findings. Score capped by conflicting claims and lack of independent long-context retrieval proof.
- **Multimodal: 40/100.** Meta.json lists text+image in; community preview reports text+code only. No verified public multimodal benchmark found. Score reflects claimed capability without independent evidence.
- **Coding: 60/100.** Community report shows SWE-bench Verified 54.0%, LiveCodeBench 61.5%, HumanEval 87.2%. No independent public SWE-bench/LiveCodeBench verification from Artificial Analysis or OpenRouter. Capped by lack of independent confirmation.
- **Cost efficiency: 82/100.** $0.40/$3.20 pricing is competitive for claimed 1M context with image input. Preview free tier reported in some findings improves efficiency, but pricing volatility and limited access reduce confidence.
- **Overall Score: 57.6/100.** Mean of five quality dims (58 + 55 + 75 + 40 + 60) / 5 = 57.6 → 58 rounded. Best-fit: modest agentic/coding preview model with disputed context/multimodal claims and limited independent benchmark verification.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; three independent searches of official OMI API docs/meta.json, Artificial Analysis listings, and OpenRouter/Hugging Face community reports; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting community reports on context size and modalities were compared and conservatively weighted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
