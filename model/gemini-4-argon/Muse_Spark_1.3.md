# Gemini 4 Argon — findings by Muse Spark 1.3

- Source: Google/Gemini 4 Argon (`gemini-4-argon`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (Google, paid API tier)
- **Short description:** Google DeepMind's frontier model for sustained professional work — software engineering, enterprise research, legal/financial workflows, and defensive cybersecurity. First proprietary Google model above Flash class in 7+ months.
- **Provider / access:** Google Gemini API (paid API customers first) and Google AI Ultra subscribers; launch cohort restricted to trusted cyber defenders via Fairwind Program. Chat Completions / Responses-style tool calling.
- **Release / knowledge:** 2026-09-30 release (announced by Koray Kavukcuoglu, Google DeepMind); knowledge cutoff undisclosed — no verified cutoff found
- **IDs:** `gemini-4-argon` (announced display name; public API request ID not yet documented — do NOT substitute an assumed ID)
- **Context window:** 1,000,000 tokens total per Artificial Analysis model page and Vals AI listing; max output 1,000,000 tokens per Google launch announcement (up from stated prior 64K limit) with Vals AI running 262,144 max-output config — verified via vendor announcement and third-party listings, not via capability measurement
- **Modalities:** text, image, video, speech input per launch coverage (text + image confirmed on AA model page); text out; reasoning yes (high effort); tool calls yes; structured output yes
- **Pricing (as of 2026-09-30):** Introductory $2.00 in / $10.00 out per 1M with 95% cached-input discount ($0.10 per 1M cached); standard pricing after promo $4.00 in / $20.00 out per 1M (Google: "after the introductory period expires, the price of $4 per 1M input tokens and $20 per 1M output tokens will apply", end date unannounced). No free tier announced; no Zen Free ID — paid only.
- **Architecture:** proprietary (parameter count undisclosed; pre-launch Arena checkpoint "Argon" reached 1528 Elo per eyestech 2026-09-27 telemetry analysis)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.58%** (Vals AI, rank 5/42, reasoning high, temp 1.0); **57%** (Artificial Analysis, behind Sonnet 5.5 max 64%, Opus 5.5 max 60%, GPT-6 Astra 59% — AA LinkedIn 2026-09-30)
- Terminal-Bench Science: **44.29%** (Vals AI, rank 3/34)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **component of AA Intelligence Index** (standalone Elo not separately published for Argon on launch day)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Vals Index (knowledge work): **68.90% ±0.97** (Vals AI, rank 1/41, $15.68 per test, ahead of Sonnet 5.5 67.04%, Opus 5.5 66.97%, Fable 5.1 65.83% — Vals AI 2026-09-30)
- AutomationBench: **51.3%** (Google official table via projedefteri 2026-09-30, vs Astra 41.4%, Fable 5.1 31.4%, Opus 5.5 42.5%); **78%** on AutomationBench-AA variant (Artificial Analysis, rank 1, +7 over Sonnet 5.5 max 71% — AA LinkedIn 2026-09-30)
- CUA-bench: **4.83%** (Vals AI, rank 7/8)
- CyberBench v1.1: **77.86% ±5.30** (Vals AI, rank 2/43, 0.12 behind GPT-6 Sol)
Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (not in launch-day third-party tables)
- HLE: **no verified public score found** (not in launch-day third-party tables)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53** (Artificial Analysis, tied GPT-6 Astra max 53, +1 over GPT-6.1 Sol max 52 — AA LinkedIn 2026-09-30)
- Omniscience Accuracy / Hallucination Rate: **42 overall (50% accuracy, 15% hallucination rate)** (Artificial Analysis AA-Omniscience — lowest hallucination rate of any model scoring 45+ on Index — AA LinkedIn 2026-09-30)
- AA-Briefcase v1.1: **1494 Elo (65% rubric pass rate, highest recorded)** (Artificial Analysis — AA LinkedIn 2026-09-30)
- Vals Finance Agent v2: **65.40% ±0.32** (Vals AI, rank 1/73 — Vals AI 2026-09-30)
- Harvey Legal Agent: **19.58% ±3.31** (Vals AI, rank 5/73); **19.6%** (Google official table via projedefteri, vs Astra 5.4%, Opus 5.5 3.8%)
- LegalBench: **88.30% ±0.37** (Vals AI, rank 3/149)
- SWE-bench Verified: **74.2%** (eyestech 2026-09-27 pre-launch Argon checkpoint telemetry — provisional, pre-release build)

Coding:

- SWE-bench Verified / SWE-Pro: **74.2% SWE-bench Verified** (eyestech pre-launch checkpoint telemetry — provisional); FrontierSWE led by Opus 5.5 / GPT-6 Astra per launch coverage (Argon trails — projedefteri 2026-09-30)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **component of AA Index** (standalone Argon value not separately published launch day)
- Vibe Code Bench v1.1: **91.91% ±1.90** (Vals AI, rank 2/106, behind Sonnet 5.5 92.39% — Vals AI 2026-09-30)
- DeepSWE / Coding Index / other: **leads DeepSWE v1.1** per Google launch claim via projedefteri 2026-09-30 (exact Argon percentage pending BenchLM mirror update); **CWE-bench v1 joint first 68%** (with Grok 4.7 and GPT-6 Astra); **IOI 100.00%** (Vals AI, tied 1/38 with GPT-6 Astra)
- Code Migration: **68.17% ±4.35** (Vals AI, rank 2/71)
- SRE Bench: **44.27% ±3.08** (Vals AI, rank 3/16)
- MMMU-Pro: **88.4%** (eyestech pre-launch checkpoint telemetry — provisional)
- Arena: **1528 Elo aggregate (95% CI 1521–1535)** (eyestech LMSYS Arena telemetry 2026-09-27 — provisional pre-release routing)

Long context:

- No verified MRCR / RULER / GraphWalks score found; 1M context and 1M max output are vendor listing ceilings only (quality near limit unmeasured at launch)

### Normalized scores (1–100)

- **Tool use: 88/100.** Vals Index #1 (68.9%), AutomationBench-AA #1 (78%) and Finance #1 (65.4%) show frontier agentic orchestration; capped by TB4.0 5th place (57.6%) and CUA-bench 7/8 (4.83%).
- **Reasoning: 90/100.** AA Index 53 (tied frontier-best with Astra), lowest hallucination rate in class (15%), AA-Briefcase 1494 Elo with record rubric pass rate; capped by no standalone GPQA/HLE launch-day numbers.
- **Context window: 100/100.** 1M verified input with industry-first 1M output ceiling (10x prior 64K limit); nothing larger in cohort.
- **Multimodal: 82/100.** Text/image/video/speech input with text output and native multimodal streams; capped by text-only output and provisional-only MMMU-Pro 88.4% vision number.
- **Coding: 90/100.** DeepSWE v1.1 lead claim, CWE-bench joint first (68%), IOI perfect (100%), Vibe Code #2 (91.9%) and SWE-bench 74.2% checkpoint; capped by FrontierSWE/TB4.0 trailing Astra and Opus 5.5.
- **Cost efficiency: 55/100.** Introductory $2/$10 is half Opus 5.5 and a fifth of Astra with $1.99 per Index task (60% of Astra); no free tier and standard $4/$20 (1.2x Astra) caps the score — paid only.
- **Overall Score: 90/100.** Mean of the five non-cost dims (88+90+100+82+90)/5 = 90.0; best-fit frontier pick for long-horizon professional coding and knowledge work once broadly available.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-30
- Method: public internet research (Google Keyword launch announcement 2026-09-30, Artificial Analysis model page + LinkedIn Index report 2026-09-30, Vals AI model page 2026-09-30, projedefteri/DEV launch benchmarks 2026-09-30, eyestech Argon checkpoint telemetry 2026-09-27, BenchLM DeepSWE page Sep-1 snapshot, ModelCap Terminal-Bench 4.0 snapshot 2026-09-21); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

