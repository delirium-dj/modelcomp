# MAI-Thinking-1 — findings by DeepSeek 4.1 Flash

- Source: Microsoft (MAI) / MAI-Thinking-1 (`microsoft/mai-thinking-1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house frontier reasoning model (announced at Build 2026-06-02), a from-scratch ~1T-parameter sparse MoE trained on 8,192 GB200 GPUs and co-designed with Microsoft Maia 200 silicon. Text-only, hosted on Azure/Foundry.
- **Provider / access:** Microsoft Foundry / Azure (pay-as-you-go or reserved PTUs); `microsoft/mai-thinking-1`. OpenCode Zen tracks `opencode/mai-thinking-1` (if present). Proprietary.
- **Release / knowledge:** 2026-06-02 (public-preview update 2026-08-12); knowledge cutoff late 2025 / early 2026.
- **IDs:** `microsoft/mai-thinking-1`.
- **Context window:** 256K tokens, 64K max output.
- **Modalities:** text in; text out (no image/audio/video). Function calling supported.
- **Pricing (as of 2026-10-09):** **$2.00 / $8.00 per 1M** (Azure/Foundry, majority of sources); a minority quote $0.15/$0.60 or "TBA"; cached input not published.
- **Architecture:** sparse MoE decoder-only Transformer (base MAI-Base-1); **~35B active / ~962B–1T total** (34.7B active / 962B total, 78 layers, top-8 of 512 experts, 5:1 local/global attention); 30T pretraining + 3.55T mid-training tokens; proprietary.

### Raw benchmarks found

> All rows are Microsoft's technical report / model card (self-reported, GPT-5-mini judge for STEM); no independent suite found.

Reasoning / knowledge:

- GPQA Diamond **84.2**; MMLU-Pro 85; SimpleQA Verified 31; IFBench 69; Advanced IF 85; Multi-Challenge 53
- AIME 2025 **97.0**; AIME 2026 94.5; HMMT Feb 2026 84.9 (MathArena)
- LiveCodeBench v6 **87.7**; GraphWalks (≤128K) 90
- AIR-Bench 88; CyberSecEval-4 63; LongFact 98; TruthfulQA 88; HealthBench Prof. 35; MedXpertQA 43

Coding / agent:

- SWE-bench Verified **73.5**; SWE-bench Pro 52.8; Terminal-Bench 2.0 **46.0**; BFCL v3 72
- Human side-by-side (Surge AI, 1,276 tasks, vendor-commissioned): vs Claude Sonnet 4.6 won 49%/tied 6%/lost 45%

Long context:

- 256K window; GraphWalks 90 at ≤128K; **no MRCR/RULER at 512K+ published**.

### Normalized scores (1–100)

- **Tool use: 74/100.** BFCL v3 72 and GraphWalks 90 are solid; Terminal-Bench 2.0 46.0% and no OSWorld/τ suite cap it.
- **Reasoning: 82/100.** GPQA 84.2%, AIME 97.0% and MMLU-Pro 85% are high; SimpleQA 31% and HLE absent hold it below frontier.
- **Context window: 72/100.** 256K-token window, 64K max output (200K–500K band).
- **Multimodal: 15/100.** Text-only (the model card explicitly excludes image/audio/video).
- **Coding: 76/100.** SWE-bench Verified 73.5%, LiveCodeBench 87.7% are strong; SWE Pro 52.8% and Terminal-Bench 46.0% cap it.
- **Cost efficiency: 72/100.** $2.00/$8.00 per 1M is premium vs open-weight peers at similar intelligence; a minority source reports far lower pricing (unresolved).
- **Overall Score: 64/100.** (74 + 82 + 72 + 15 + 76) / 5 = 63.8 → 64. Best fit: Azure/Foundry text reasoning and math; prefer a multimodal or cheaper open model elsewhere.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across Microsoft's model page, technical report, Foundry card and launch blog, plus BenchLM, BenchmarkList, LLM Stats and Azure pricing aggregators. All capability numbers are Microsoft self-reported; the pricing conflict and lack of independent runs are surfaced. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
