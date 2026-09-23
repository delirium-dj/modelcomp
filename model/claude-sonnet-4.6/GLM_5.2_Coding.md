# Claude Sonnet 4.6 — findings by GLM 5.2 Coding

- Source: Anthropic (`claude-sonnet-4.6`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's prior Sonnet generation (#49 of 505 on BenchLM), superseded by Sonnet 5. Top use case: legacy reliable coding agent at Sonnet pricing.
- **Provider / access:** Anthropic API (`claude-sonnet-4.6`), Messages API.
- **Release / knowledge:** Generation before Sonnet 5; exact date and cutoff not published in the records checked.
- **IDs:** `anthropic/claude-sonnet-4.6`; no Free ID indicated on Zen in the sources checked.
- **Context window:** 200K tokens (BenchLM record; Anthropic pricing table).
- **Modalities:** Text and image input; text output; base variant is non-reasoning; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-22):** $3.00 in / $15.00 out per 1M (BenchLM Anthropic pricing table); no cached-input rate published.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Verified via BenchLM model record (38 of 481 benchmarks covered, 2026-09-22).

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (BenchLM; TB2.1 Vals 57.3%)
- Tau2-Bench: **79.5%** (τ²-bench, BenchLM); Tau3: no verified public score found
- GDPval-AA: no verified public score found (pre-AA-suite generation)
- Claw-Eval: **67.8%** (BenchLM)
- Toolathon / MCP-Atlas: no verified public score found
- OSWorld-Verified: **72.1%** (OSWorld 2.0: 8.3%); CyberGym: **65.2%**; Gert Labs: **62.92%**; JobBench: **36.9%** (all BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **79.9%** (AA; GPQA 89.9%; Vals harness 85.6%; SuperGPQA 95%)
- HLE: **49%** (BenchLM HLE; AA-HLE 13.3%)
- LCR / MLCR: **68.3%** (AA-LCR) / no MLCR score found
- CritPt: **0.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **24.7** (BenchLM — non-reasoning base)
- Omniscience Index: **-3.5%** with Accuracy **38.6%** / Hallucination Rate **68.5%** (BenchLM); MMLU-Pro: **79.2%** (Vals 87.3%); FrontierMath v2 T4: **8.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.6%** (SWE-V, BenchLM) / no SWE-Pro number found
- LiveCodeBench: **82.1%** (Vals harness, BenchLM)
- SciCode: no verified public score found
- Vibe Code Bench: **51.48%** (BenchLM)
- DeepSWE / Coding Index / other: no DeepSWE/Coding Index score found; SWE-Rebench **60.7%**; React Native Evals **80.6%**; cursorBench31 48.8%; FrontierCode 24.3% (BenchLM)

Long context:

- 200K window verified (BenchLM); no MRCR/RULER number published — AA-LCR 68.3% is the closest proxy.

### Normalized scores (1–100)

- **Tool use: 68/100.** τ² 79.5%, Claw-Eval 67.8% and OSWorld-Verified 72.1% are mid-tier; capped by TB2.0 59.1%, JobBench 36.9% and OSWorld 2.0 8.3%.
- **Reasoning: 72/100.** GPQA 89.9% (GPQA-D 85.6%) and HLE 49% hold up; capped by Index 24.7, AA-HLE 13.3%, CritPt 0.9% and FrontierMath T4 8.3%.
- **Context window: 70/100.** Verified 200K window — mid tier; half the 400K tier and 5× below the 1M class.
- **Multimodal: 68/100.** Text + image input (CharXiv 77.4%, AA-MMMU-Pro 70.6%); no audio/video, text-only output.
- **Coding: 75/100.** SWE-V 79.6%, LiveCodeBench 82.1% and React Native 80.6%; capped by Vibe 51.5%, SWE-Rebench 60.7% and FrontierCode 24.3%.
- **Cost efficiency: 62/100.** $3.00/$15.00 is above the $2/$10 medians while Sonnet 5 delivers more for $2/$10 — dominated.
- **Overall Score: 70.6/100.** (68+72+70+68+75)/5 — a legacy Sonnet: still a dependable coder, strictly outclassed by Sonnet 5 at lower price.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/GLM-5.2-Coding)** — 2026-09-22
- Method: public internet research (BenchLM model record + Anthropic pricing table) on 2026-09-22; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
