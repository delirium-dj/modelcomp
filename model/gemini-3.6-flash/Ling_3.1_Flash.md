# Gemini 3.6 Flash — findings by Ling 3.1 Flash

- Source: Google DeepMind (`google/gemini-3.6-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's July-2026 "workhorse" Flash model (launched 2026-07-21 alongside 3.5 Flash-Lite and 3.5 Flash Cyber) — better coding, knowledge work and multimodal performance than 3.5 Flash at a lower price, using ~17% fewer output tokens on the AA Index (up to 65% fewer on DeepSWE).
- **Provider / access:** Gemini API / Google AI Studio, Vertex AI, Gemini app; built-in function calling, structured output, code execution, computer use and search grounding; free tier with standard rate limits on Google AI Studio and OpenCode Zen.
- **Release / knowledge:** 2026-07-21; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `google/gemini-3.6-flash`.
- **Context window:** 1,048,576 (1M) tokens input / 64K output.
- **Modalities:** text, image, audio, video, PDF in; text out (per AI/TLDR; the repo `meta.json` omits video — noted).
- **Pricing (as of 2026-10-02):** $1.50/$7.50 per 1M input/output (standard paid tier; output includes thinking tokens); cached input $0.15/M (cache storage $1.00/M/hour); free tier with usage limits.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (Google model card, Terminus-2 harness for TB2.1):

- Terminal-Bench 2.1: **78.0%** (vs Gemini 3.5 Flash 76.2%, 3.1 Pro 73.8%, GPT-5.6 Luna 84.7%, Grok 4.5 83.3%, Claude Sonnet 5 80.4%); Vals AI run: **73.8%**
- OSWorld-Verified (computer use): **83.0%** (vs 3.5 Flash 78.4%)
- GDPval-AA v2: **1421 Elo** (vs 3.5 Flash 1349, 3.1 Pro 965)
- MLE-Bench (ML engineering): **63.9%** (vs 3.5 Flash 49.7%, 3.1 Pro 42.6%, Sonnet 5 66.9%)
- AA Agentic Index: **30.1%** (BenchLM; likely penalized by the TB4.0-based index revision — flagged)
- CursorBench 3.2: **53.5%**
- Claw-Eval / ClawProBench / MCP Atlas / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (Artificial Analysis) / **93.4%** (Vals AI)
- Humanity's Last Exam: **38.3%** (AA via Wait Which Model) / **40.8%** (BenchLM) — conflicting figures, flagged
- ARC-AGI-2: **60.4%** (ARC Prize-verified, high effort; medium 50.4%, low 30.4%; $0.61/task)
- AA Intelligence Index: **50** (third-party; BenchLM shows a conflicting 34.0% — flagged)
- MMLU-Pro (Vals): **89.3%**
- AA-Omniscience: Index **22.1%**, Accuracy **50.0%**, Hallucination Rate **55.6%** — a weakness

Coding:

- SWE-bench Pro: **58.7%** (vs 3.5 Flash 55.1%, 3.1 Pro 54.2%, GPT-5.6 Luna 62.7%, Grok 4.5 64.7%, Sonnet 5 63.2%)
- DeepSWE v1.1: **49%** (vs 3.5 Flash 37%, 3.1 Pro 12%, GPT-5.6 Luna 67%, Grok 4.5 54%, Sonnet 5 54%)
- Terminal-Bench 2.1: **78.0%** (above)
- AA Coding Index: **69.2%**; AA-SciCode: **53.4%**
- SWE-bench (Vals): **79.6%**; LiveCodeBench (Vals): **88.1%**
- SciCode (non-AA) / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M-token window; GDM-MRCR v2: **91.8%** at 128K, **54.0%** at the full 1M depth (roughly double 3.5 Flash and 3.1 Pro at the same depth)
- LMArena Text: **1485** (#12); Frontend Code Arena: **1537** (#12); no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 78.0% (Terminus-2) and OSWorld-Verified 83.0% sit between the mid band and the 88% frontier bar, with GDPval-AA v2 1421 Elo (#5-tier) and MLE-Bench 63.9% supporting; the AA Agentic Index of 30.1% (likely a TB4.0-index artifact) and CursorBench 53.5% cap the score.
- **Reasoning: 82/100.** GPQA Diamond 92.8–93.4% clears the 90%+ frontier bar, but HLE (38.3–40.8%, conflicting figures) only reaches the 40% bar, the AA Intelligence Index of 50 is upper-mid (frontier: 59–61), ARC-AGI-2 60.4% (high effort) is mid-tier, and AA-Omniscience (50.0% accuracy, 55.6% hallucination) is weak.
- **Context window: 95/100.** 1M-token window with GDM-MRCR v2 91.8% at 128K — but only 54.0% at the full 1M depth, so the ≥98% retrieval-at-512K+ bar for 100 is not met.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with text out — the +audio-in band (90–100).
- **Coding: 78/100.** LiveCodeBench (Vals) 88.1% and SWE-bench (Vals) 79.6% are strong, but DeepSWE v1.1 49% (under the 74% bar), Terminal-Bench 2.1 78.0% (under the 85% bar), AA-SciCode 53.4% and AA Coding Index 69.2% (both just under their 55%/70% references) cap the score; SWE-bench Pro 58.7% trails Sonnet 5 (63.2%) and Grok 4.5 (64.7%).
- **Cost efficiency: 95/100.** $1.50/$7.50 per 1M interpolates to ~82 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors, lifted by the free tier (Google AI Studio / OpenCode Zen) and the 17% output-token efficiency gain.
- **Overall Score: 85/100.** (80+82+95+92+78)/5 = 85.4 → 85 — an efficient workhorse: frontier GPQA (92.8–93.4%), strong computer use (OSWorld 83.0%) and 1M multimodal context at $1.50/$7.50, with DeepSWE 49% and a mid-tier Intelligence Index (50) as the gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Google DeepMind model card, AI/TLDR, Wait Which Model, BenchLM, Vals AI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_6_Flash.md`, using the same headings.
