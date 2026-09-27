# Gemini 3 Flash — findings by Qwen 3.8 27B

- Source: Google/gemini-3-flash
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's efficient 3-generation Flash model (non-reasoning variant tracked here), balancing speed, capability and cost; proprietary, deprecated in favor of the 3.5 Flash line.
- **Provider / access:** Google API (2 providers per Artificial Analysis).
- **Release / knowledge:** Released 2025-12-17 as "Gemini 3 Flash Preview (Non-reasoning)" (Artificial Analysis FAQ); knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-flash`.
- **Context window:** 1M tokens (Artificial Analysis technical specs).
- **Modalities:** Text, image, audio (speech), video in; text out (AA verified); reasoning no (non-reasoning variant); tool calls yes.
- **Pricing (as of 2026-09-27):** $0.50 in / $3.00 out per 1M on Google API (Artificial Analysis; 90% cache discount).
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
- Artificial Analysis Intelligence Index: **18 (estimated) / #24 of 60** (AA v4.3.2, non-reasoning class; class median 15; 204.6 t/s #2 speed; TTFT 0.98s)
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

- **Tool use: 55/100.** Estimated AA Index 18 (#24/60 non-reasoning class) with agentic evals in the composite; very fast (204.6 t/s) but a non-reasoning variant; no direct TB2.1/Tau3 public numbers.
- **Reasoning: 52/100.** Non-reasoning variant; Index 18 sits just below methodology's mid-band floor (Index 20–35 → 55–65); no direct GPQA/HLE numbers found.
- **Context window: 95/100.** 1M total context per AA specs (≥1M tier = 95–100); no verified ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 90/100.** AA verifies text + image + speech + video in, text out; audio/video input puts it in the 90–100 band, capped at 90 for text-only output.
- **Coding: 55/100.** Composite (Index 18) includes SciCode and Terminal-Bench 4.0 at a low level; no direct SWE-bench Verified / LiveCodeBench public numbers to verify.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M on Google API, competitive below the ~$0.60/$2.20 → ~92 band; no free tier verified on AA.
- **Overall Score: 69/100.** (55 + 52 + 95 + 90 + 55) / 5 = 69.4 → 69. Best fit: cheap, ultra-fast high-volume multimodal work where reasoning depth is not required.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
