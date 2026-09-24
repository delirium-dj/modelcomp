# Grok 4.3 — findings by Muse Spark 1.2

- Source: xAI/Grok 4.3, e.g. Meta (`muse-spark-1.2-contributor-free`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's April 2026 reasoning flagship, optimized for enterprise agents with 1M context and configurable reasoning effort; strongest on agentic tool-calling and low hallucination.
- **Provider / access:** xAI via https://api.x.ai/v1 (model `grok-4-3`), also on Amazon Bedrock (`xai.grok-4.3`), OCI Generative AI; Chat Completions + Responses-style with tool calling and structured outputs.
- **Release / knowledge:** 2026-04-30 release; knowledge cutoff December 2025 (per OCI docs)
- **IDs:** `opencode/grok-4.3` (OpenCode Zen Free available as grok-4-3); `xai/grok-4-3` on xAI
- **Context window:** 1,000,000 tokens total (max prompt+response 1M; playground response capped 131K) — verified via xAI Bedrock announcement and Oracle docs (1M), Vals AI listing 1M
- **Modalities:** text + image in; text out; reasoning yes (none/low/medium/high); tool calls yes; JSON/structured outputs yes; file input yes
- **Pricing (as of 2026-09-25):** $1.25 in / $2.50 out per 1M (cached input supported); BenchLM/Artificial Analysis lists weighted cost ~$0.64 per Intelligence Index task — Free tier via OpenCode Zen (no training on data)
- **Architecture:** proprietary dense reasoning model (size not disclosed)

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom / tau-bench: **97.7% pass^1** (developer-reported via benchmarks.company) — ranked #1 on Tau2 Telecom per xAI announcement
- Terminal-Bench 2.1 (Vals via BenchLM): **41.9%** (BenchLM grok-4-3 vs grok-4-6 comparison, Vals harness)
- Gert Labs: **43.86%** (BenchLM)
- GDPval-AA: **Elo 1500** (Artificial Analysis article: up 321 pts from Grok 4.20's 1179)
- BenchLM Agentic lane: **25/100** (Supported #147/151)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.4%** (BenchLM Vals) / **90.1%** developer-reported (benchmarks.company)
- MMLU-Pro (Vals): **85.8%** (BenchLM)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **38 (high) / 35 (low)** (Artificial Analysis comparisons; launch article cited 53 on older Index version)
- Omniscience Accuracy / Hallucination Rate: no verified public numeric score found (xAI claims lowest hallucination rate among frontier models)
- AIME 2025: **86.7% solved** (benchmarks.company, dev-reported)

Coding:

- SWE-bench Verified (Vals): **71.4%** (BenchLM)
- LiveCodeBench (Vals): **84.5%** (BenchLM)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: **19.4%** (Vals AI update: +15 pts over predecessor)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M context verified, no MRCR/RULER retrieval score found — no verified public long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong Tau2 97.7% and GDPval 1500 Elo drive high agentic capability, capped by modest Terminal-Bench 41.9% and BenchLM agentic lane 25.
- **Reasoning: 87/100.** GPQA ~91% and MMLU-Pro 85.8% plus AIME 86.7% show frontier reasoning; capped by missing HLE/LCR and AA Index variance (38 high).
- **Context window: 92/100.** Verified 1M total window with configurability; just below 2M-tier leaders so not 95+.
- **Multimodal: 66/100.** Text and image in, file input, no video/audio in, text-only out; reasoning and tool use present but limited breadth.
- **Coding: 75/100.** LiveCodeBench 84.5% and SWE-bench 71.4% solid, capped by Vibe Code 19.4% and missing SciCode.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M is Pareto-frontier cheap for intelligence level; ~40-60% cheaper than Grok 4.20.
- **Overall Score: 81/100.** Mean of five quality dims (83+87+92+66+75)/5=80.6→81; best fit for cost-sensitive enterprise agents needing 1M context and strong tool use.

---

## Signature

- Provided by: **Muse Spark 1.2 (meta/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (BenchLM, Vals AI, Artificial Analysis, benchmarks.company, xAI/Bedrock/Oracle docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
