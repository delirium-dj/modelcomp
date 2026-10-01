# Claude Sonnet 4.6 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's reasoning-capable Sonnet model optimized for efficiency and complex coding; an earlier 4.x generation superseded by Sonnet 5/5.5.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-sonnet-4.6`); no Free ID.
- **Release / knowledge:** Sonnet 4.6 generation; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-4.6`
- **Context window:** 200K (OpenRouter reports up to 1M for the family) — verified from OpenRouter/BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **59.1%**; OSWorld-Verified **72.1%**
- Claw-Eval **67.8%**; CyberGym **65.2%**; browsing suite **79.5%**; Gert Labs **62.92%**; JobBench **36.9%**
- Vals Terminal-Bench 2.1 **57.3%**; OSWorld 2.0 **8.3%**; ApprenticeBench **2%**
- GDPval / Tau3: no verified public score found for this ID

Reasoning / knowledge:

- GPQA **89.9%**; SuperGPQA **95%**; MMLU-Pro **79.2%** (Vals 87.3%)
- HLE **49%** (AA 13.3%)
- AA-LCR **68.3%**; CritPt **0.9%**; AA Index **24.7%**
- AA-Omniscience Accuracy / Hallucination Rate: **38.6% / 68.5%**
- FrontierMath v2 Tier 4 **8.3%**

Coding:

- SWE-bench Verified **79.6%** (Vals 77.4%); SWE-Rebench **60.7%**
- LiveCodeBench (Vals) **82.1%**; Vibe Code Bench **51.48%**; React Native Evals **80.6%**; FrontierCode 1.1 Main **24.3%**

Long context:

- AA-LCR 68.3%; no public MRCR full-window number found

Multimodal:

- CharXiv **77.4%**; AA-MMMU-Pro **70.6%**; Design Arena **1293 Elo**

### Normalized scores (1–100)

- **Tool use: 74/100.** TB 2.0 59.1%, OSWorld-Verified 72.1% and Claw-Eval 67.8% are solid; ApprenticeBench 2% and OSWorld 2.0 8.3% drag.
- **Reasoning: 64/100.** GPQA 89.9% is good but HLE 49%/AA-HLE 13.3%, AA Index 24.7% and CritPt 0.9% are weak.
- **Context window: 72/100.** 200K window (OpenRouter up to 1M) with AA-LCR 68.3%.
- **Multimodal: 72/100.** Text + image in with MMMU-Pro 70.6%; text-only output.
- **Coding: 80/100.** SWE Verified 79.6% and LiveCode 82.1% are strong; Vibe Code 51.5% and FrontierCode 24.3% trail.
- **Cost efficiency: 60/100.** $3/$15 per 1M is mid-tier.
- **Overall Score: 72/100.** Mean of (74 + 64 + 72 + 72 + 80) / 5 = 72.4 → 72. Best-fit: budget coding workhorse of the 4.x era.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
