# Qwen 3.5 Flash — findings by Step 5 Preview

- Source: Alibaba / Qwen3.5-Flash (`opencode/qwen-3.5-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba's hosted Flash tier of the Qwen3.5 medium series — the hosted ~35B/~3B-active MoE with a 1M context, native function calling and text/image/video input, delivering Vals-measured GPQA 82.8%, MMLU-Pro 84.1%, LiveCodeBench 83.3% and LegalBench 84.3% at $0.10/$0.40 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-flash`, OpenAI-compatible endpoint), OpenCode Zen (`opencode/qwen-3.5-flash`); hosted only (Vals AI lists weights as private); Chat Completions API, function calling, built-in tools.
- **Release / knowledge:** released 2026-02-23 (Vals AI) in the Qwen3.5 medium wave (2026-02-24/25); knowledge cutoff not published.
- **IDs:** `qwen3.5-flash` (Model Studio route style), `opencode/qwen-3.5-flash` (Zen).
- **Context window:** 1,000,000 total (Vals AI); 66K max output (Vals AI) — the longest context in the medium series (the open-weight siblings cap at 262K).
- **Modalities:** text, image, video in; text out; reasoning; tool/function calling.
- **Pricing (as of 2026-10-21):** $0.10/$0.40 per 1M in/out (Vals AI, DigitalApplied Model Studio table) — ~13x cheaper input than Claude Sonnet 4.6 per DigitalApplied.
- **Architecture:** hosted ~35B-total / ~3B-active MoE on the Gated DeltaNet + sparse-MoE hybrid (3:1 linear-to-full attention); the hosted counterpart of the open-weight Qwen3.5-35B-A3B (DigitalApplied).

### Raw benchmarks found

Vals AI independent evaluation (checked 2026-10-21) + DigitalApplied series guide:

Agent / tool use:

- Corp Fin (v2): **64.2%** (Vals AI update 2026-03-02)
- Case Law (v2): **55.9%** (Vals AI update 2026-03-02)
- Finance Agent: **46.7%** (Vals AI update 2026-03-02)
- TaxEval v2: **72.16% ±0.88** (rank 68/145, Vals AI table)
- MortgageTax: **67.37% ±0.92** (rank 25/98, Vals AI table)
- Terminal-Bench 2.0: **24.72% ±4.60** (rank 54/67, Vals AI table) — weak on the terminal harness
- Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas / BFCL: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.83% ±1.90** (rank 60/138, Vals AI)
- MMLU Pro: **84.06% ±0.36** (rank 68/138, Vals AI)
- SAGE: **42.49% ±3.46** (rank 54/91, Vals AI) — mixed
- MedCode: **33.00% ±1.79** (rank 86/107, Vals AI) — weak medical QA
- MedScribe: **70.62% ±2.09** (rank 94/109, Vals AI)
- HLE / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- LiveCodeBench: **83.28% ±1.04** (rank 49/143, Vals AI)
- SWE-bench Verified: **64.40% ±2.14** (rank 74/88, Vals AI current table); **54.9%** on the March 2, 2026 Vals Index snapshot — harness/snapshot spread noted
- LegalBench: **84.28% ±0.41** (rank 36/151, Vals AI — its best result)
- SciCode / SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- 1M window (Vals AI, Model Studio); no MRCR / RULER / GraphWalks / LCR retrieval-at-length figure published.

Composite (Vals AI, 2026-03-02 snapshot): **#22 overall on the Vals Index (49.6% accuracy), #7 among open-weight models**; ~$0.08 per index test; strongest on financial tasks (Corp Fin 64.2%, Case Law 55.9%).

### Normalized scores (1–100)

- **Tool use: 66/100.** The Vals Index snapshot shows genuine domain-agentic strength — Corp Fin 64.2%, Case Law 55.9%, TaxEval 72.2% — with native function calling; capped hard by Terminal-Bench 2.0 24.7% and zero Tau/GDPval/OSWorld/Claw/MCP numbers.
- **Reasoning: 80/100.** GPQA Diamond 82.8% and MMLU-Pro 84.1% are strong graduate-level/knowledge results for a 3B-active tier; capped by SAGE 42.5%, MedCode 33.0% and no HLE/CritPt/Index rows.
- **Context window: 95/100.** 1,000,000 total (the longest in the medium series) lands in the ≥1M tier; no ≥98% retrieval-at-512K evidence exists, and the 66K max output is a practical caveat.
- **Multimodal: 88/100.** Text, image and video input (video-in tier 75–90) with text-only output; MMMU-Pro 81.9% (Vals) is excellent for the tier; no audio input or non-text output.
- **Coding: 72/100.** LiveCodeBench 83.3% and LegalBench 84.3% are strong upper-mid results, but SWE-bench Verified 64.4% (54.9% on the March snapshot — a wide spread) and Terminal-Bench 2.0 24.7% are mid-to-weak, and no SciCode/SWE-Pro numbers exist.
- **Cost efficiency: 96/100.** $0.10/$0.40 per 1M sits inside the ~$0.10/$0.20 ≈ 97–99 reference band; Vals measured ~$0.08 per index test — frontier-adjacent knowledge scores at roughly 1/13th of Claude Sonnet 4.6's input price.
- **Overall Score: 80/100.** Mean of (66 + 80 + 95 + 88 + 72) / 5 = 80.2 → 80. Best fit: high-volume long-context (1M) financial/legal document and multimodal workflows at flash-tier prices — the cheap hosted door into the Qwen3.5 family.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Vals AI independent benchmark table + March 2026 index snapshot, DigitalApplied Qwen3.5 medium-series guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
