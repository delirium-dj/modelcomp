# Gemini 2.5 Flash — findings by Qwen 3.8 27B

- Source: Google/Gemini 2.5 Flash (`google/gemini-2.5-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google DeepMind's cost-efficient hybrid-reasoning "workhorse" of the 2.5 generation: turnable thinking with budgets, 1M context, and strong multimodal support at Flash pricing. GA of the 2.5 Flash line; not a variant/alias of 2.5 Flash-Lite.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.5-flash` (native Gemini API); OpenRouter `google/gemini-2.5-flash`; 27 providers listed on models.dev (Chat Completions-style + native API). No OpenCode Zen listing found in the retrieved provider set as of 2026-09-29.
- **Release / knowledge:** preview 2025-04-17 (`gemini-2.5-flash-preview-04-17`, official launch post); GA release 2025-06-17 (models.dev); knowledge cutoff 2025-01.
- **IDs:** `google/gemini-2.5-flash` (GA; preview ID `gemini-2.5-flash-preview-04-17`)
- **Context window:** 1,048,576 input / 65,536 max output (models.dev; llm-stats Google route "1.0M/1.0M" on DeepInfra, 1M/65.5K on Google)
- **Modalities:** text + image + video (+PDF) in; audio input only via the separate 2.5 Flash Native Audio Preview variant; text out; reasoning: yes (hybrid thinking, `thinking_budget` 0–24576 — Google's first fully hybrid reasoning model); tool calls: yes; JSON/structured mode: yes (models.dev capability flags)
- **Pricing (as of 2026-09-29):** paid — $0.30/M input, $2.50/M output (consistent across Google, OpenRouter, DeepInfra, Replicate, Vercel on llmreference/models.dev); cached-read rates not verified in retrieved sources
- **Architecture:** proprietary, decoder-only, weights not released

### Raw benchmarks found

Agent / tool use:

- BFCL (Berkeley Function Calling Leaderboard): **56.2%** (LLMReference citing gorilla.cs.berkeley.edu, observed 2026-04-14)
- Aider Polyglot: **55.1%** (LLMReference citing aider.chat leaderboards, rank 20/33)
- Tau2-Bench: **14.9%** (BenchLM catalog, updated 2026-09-28)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (LLMReference citing deepmind.google/technologies/gemini/flash, observed 2025-06-17); **68.3%** (BenchLM AA-GPQA harness, updated 2026-09-28 — harness/version discrepancy, both listed)
- HLE: **4.7%** (BenchLM AA-HLE)
- LCR: **49.9%** (BenchLM AA-LCR); MLCR: no verified public score found
- CritPt: **1.4%** (BenchLM)
- MMLU Pro: **88.4%** (LLMReference citing deepmind.google flash page)
- Artificial Analysis Intelligence Index: **9.8** (BenchLM AA-derived; BenchLM flags only 14/486 benchmarks covered, so the aggregate is conservative)
- Omniscience Accuracy / Hallucination Rate: **26.1% / 93.0%** (BenchLM AA)
- Chatbot Arena: **1320** (LLMReference citing lmarena.ai, observed 2026-04-15)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found in retrieved sources
- LiveCodeBench: **76.2%** (LLMReference citing livecodebench.github.io, observed 2026-04-14, rank 36/56)
- HumanEval: **90.1%** (LLMReference citing Google's gemini_v2_5_report.pdf)
- Aider Polyglot: **55.1%** (see above)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval values at window length found in retrieved sources.

Multimodal (supporting): MMMU **79.7%** (LLMReference citing mmmu-benchmark.github.io); AA-MMMU-Pro **65.5%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 60/100.** BFCL 56.2% and Aider Polyglot 55.1% sit mid-band and Tau2-Bench 14.9% is inside the mid tau band (10–25%), but no Terminal-Bench, GDPval, or Claw-Eval numbers were found, capping it at 60.
- **Reasoning: 65/100.** GPQA Diamond 82.8% (vendor) / 68.3% (AA harness) plus MMLU Pro 88.4% and Arena 1320 are mid-strong, but HLE 4.7%, CritPt 1.4%, LCR 49.9%, and AA Index 9.8 (partial-coverage caveat) hold it in the mid-60s.
- **Context window: 95/100.** 1,048,576-token window is in the ≥1M tier (95–100); capped at 95 because no verified ≥98% long-context retrieval at 512K+ was found; 65,536 max output.
- **Multimodal: 75/100.** text/image/video (+PDF) in with text out lands in the +video/PDF band (75–90); MMMU 79.7% / AA-MMMU-Pro 65.5% are mid-band and audio in belongs to the separate Native Audio Preview, so bottom of band.
- **Coding: 70/100.** LiveCodeBench 76.2% and HumanEval 90.1% are solid with Aider Polyglot 55.1% mid, but no verified SWE-bench Verified, SciCode, Vibe Code Bench, or DeepSWE values were found, capping it in the 70s.
- **Cost efficiency: 90/100.** $0.30 in / $2.50 out per 1M is cheaper than the ~$0.60/$2.20 anchor (~92) on input but above it on output, landing just under that anchor.
- **Overall Score: 73.0/100.** Mean of the five quality dims (60+65+95+75+70)/5 = 73.0 — best fit: cheapest 1M-context multimodal workhorse for high-volume long-document and embedding-adjacent tasks, not a frontier reasoning or SWE agent.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (models.dev provider catalog, BenchLM model catalog updated 2026-09-28, LLMReference with cited primary sources, Google official launch post 2025-04-17; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
