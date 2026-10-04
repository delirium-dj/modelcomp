# Claude Sonnet 4.6 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's 2025 Sonnet 4.6 — efficient reasoning-capable model for complex coding; 200K context. Top use case: balanced agentic coding (legacy).
- **Provider / access:** Anthropic Claude Platform (`claude-sonnet-4-6`); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** 2025 generation; knowledge cutoff per Anthropic docs.
- **IDs:** `anthropic/claude-sonnet-4.6` (no Free ID).
- **Context window:** 200K total (per curated `meta.json`; BenchLM 200K).
- **Modalities:** text, image in; text out; tool calls yes.
- **Pricing (as of 2026-10-03):** paid Sonnet tier. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **79.5%**; OSWorld-Verified **72.1%**; Claw-Eval **67.8%**; CyberGym **65.2%**; TB2.0 **59.1%**
- JobBench 36.9%; OSWorld 2.0 8.3%; ApprenticeBench 2%

Reasoning / knowledge:

- GPQA **89.9%** (AA 79.9%); SuperGPQA **95%**; MMLU-Pro **79.2–87.3%**; HLE **49%**
- AA Intelligence Index **24.7**; AA-HLE 13.3%; AA-LCR **68.3%**; CritPt 0.9%

Coding:

- SWE-bench Verified **79.6%**; LiveCodeBench **82.1%** (Vals); React Native Evals **80.6%**; Vibe Code Bench **51.48%**; SWE-Rebench 60.7%

Multimodal:

- CharXiv **77.4%**; AA-MMMU-Pro **70.6%**

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 79.5%, OSWorld-Verified 72.1%, Claw-Eval 67.8%; AutomationBench-era weaknesses cap it.
- **Reasoning: 76/100.** GPQA 89.9%, SuperGPQA 95%; AA Index 24.7 and CritPt 0.9% cap it.
- **Context window: 72/100.** 200K (the 100K–200K tier); AA-LCR 68.3%.
- **Multimodal: 67/100.** Image-in (CharXiv 77.4%), text-only out — image-input tier.
- **Coding: 80/100.** SWE-bench Verified 79.6%, LiveCodeBench 82.1%, React Native 80.6%.
- **Cost efficiency: 55/100.** Paid Sonnet tier. Scored provisionally.
- **Overall Score: 74.2/100.** Half-up mean of the five quality dims (76/76/72/67/80). A capable 2025 agentic-coding model, now legacy.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude Sonnet 4.6 system card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
