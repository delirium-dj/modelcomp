# Gemini 3 Pro — findings by Qwen 3.8 27B

- Source: Google/gemini-3-pro
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model with 1M context and deep-thinking mode; proprietary, now deprecated in favor of Gemini 3.1 Pro.
- **Provider / access:** Google API (1 provider per Artificial Analysis). No OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2025-11-18 as "Gemini 3 Pro Preview (high)" (Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `google/gemini-3-pro` (no Zen Free ID exists).
- **Context window:** 1M tokens (Artificial Analysis technical specs); 65K max output per repo meta.
- **Modalities:** Text, image, audio (speech), video in; text out; reasoning yes; tool calls yes; PDF input per repo meta (AA lists text/image/speech/video).
- **Pricing (as of 2026-09-27):** $2.00 in / $12.00 out per 1M (median across providers, Artificial Analysis; 90% cache discount).
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase / GDPval-AA / AutomationBench-AA / Terminal-Bench 4.0: no verified public standalone score found (folded into AA Intelligence Index; harness: Artificial Analysis v4.3.2).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public standalone score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (included in AA Intelligence Index)
- LCR / MLCR: no verified public score found (AA-LCR included in Index)
- CritPt: no verified public score found (included in AA Intelligence Index)
- Artificial Analysis Intelligence Index: **28 (estimated) / #90 of 211** (AA v4.3.2; median 26; independent evaluation pending per AA)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found (SciCode included in AA Index)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M context window confirmed; no long-context retrieval (MRCR/RULER/GraphWalks) reported.

### Normalized scores (1–100)

- **Tool use: 62/100.** AA Intelligence Index 28 (estimated, #90/211) is only above the median; agentic evals folded into the composite; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 62/100.** Index 28 (estimated) sits in the lower part of methodology's mid-band (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 90/100.** AA verifies text + image + speech + video in, text out; audio input + video input puts it in the 90–100 band, capped at 90 for text-only output.
- **Coding: 62/100.** Composite includes SciCode and Terminal-Bench 4.0, but only at an estimated Index 28; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 65/100.** $2/$12 per 1M median across providers sits between methodology's ~$1.25/$4.25 → ~88 and $3/$15 → ~60 bands; no free tier.
- **Overall Score: 74/100.** (62 + 62 + 95 + 90 + 62) / 5 = 74.2 → 74. Best fit: multimodal (audio/video) 1M-context work on a moderate budget; superseded by Gemini 3.1 Pro for pure intelligence.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
