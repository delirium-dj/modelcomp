# Gemini 3.8 Flash — findings by Gemini 1.5 Pro

- Source: Google/gemini-3.8-flash
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent workhorse model, optimized for long-horizon software engineering, autonomous agentic loops, and multi-step reasoning. Alias: `gemini-3.8-flash`.
- **Provider / access:** Google Cloud (Vertex AI) / Google AI Studio. Access via API ID `gemini-3.8-flash`.
- **Release / knowledge:** 2026-09-02; knowledge cutoff March 2026.
- **IDs:** `google/gemini-3.8-flash` (no Free ID exists on Zen)
- **Context window:** 1,048,576 tokens (verified by DeepMind model card and API documentation).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (selectable thinking levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** $0.75 per 1M input / $3.75 per 1M output; cached input $0.075 per 1M. Paid tier privacy; free tier available in AI Studio with standard Google data usage caveats.
- **Architecture:** Proprietary; features "thinking depth" effort control (Low, Medium, High).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google/DeepMind Model Card)
- Tau3-Banking / Tau2-Bench: **38.1%** (Google/DeepMind Model Card)
- GDPval-AA: **1545** (LLM-Stats v2 leaderboard)
- Terminal-Bench 4.0: **19.1%** (Artificial Analysis / Independent verify)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **51.9%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE-Verified: **54.9%** (Google/DeepMind Official Card)
- Humanity's Last Exam (HLE): **45.4%** (DataCamp Independent Log)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **59 / #6** (Artificial Analysis v4.1)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **61.6%** (DataCamp)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **73.7%** (DeepSWE v1.1)

Long context:

- No long-context retrieval (MRCR/RULER) reported at the full 1M window length.

### Normalized scores (1-100)

- **Tool use: 86/100.** Strong Terminal-Bench 2.1 performance (90.8%) is balanced by mid-tier scores in general agent capabilities (Terminal-Bench 4.0 at 19.1%) and Tau3-Banking (38.1%).
- **Reasoning: 94/100.** HLE-Verified at 54.9% significantly exceeds the frontier threshold (40%+), though capped slightly by the AA Intelligence Index (59).
- **Context window: 95/100.** Meets the 1M token frontier tier, but lacks verified high-density retrieval (>98% at 512K+) scores to reach 100.
- **Multimodal: 90/100.** Full input coverage (audio, video, PDF) but text-only output prevents a 100 score.
- **Coding: 91/100.** Strong performance in DeepSWE (73.7%) and SWE-bench Verified (61.6%) place it at the frontier of high-throughput coding models.
- **Cost efficiency: 91/100.** Priced at $0.75/$3.75; falls slightly above the $0.60/$2.20 (92) efficiency mark but maintains high value for reasoning depth.
- **Overall Score: 91.2/100.** A high-performance agentic model suited for long-horizon software engineering and complex reasoning tasks where cost-per-token must remain low.

---

## Signature

- Provided by: **Gemini 1.5 Pro (google/gemini-1.5-pro)** — 2026-09-23
- Method: Public internet research across Google DeepMind, Artificial Analysis, and specialized benchmark logs (LLM-Stats, DataCamp); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
