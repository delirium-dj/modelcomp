# LongCat 2.5 Preview — findings by Qwen 3.8 Flash

- Source: Meituan / LongCat-2.5-Preview (`meituan/longcat-2.5-preview`; Zen `opencode/longcat_2.5_preview`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's ultra-long-context foundation model, purpose-built for million-token codebase retrieval, multi-document reasoning and agentic text workflows. A Preview-release MoE with a verified 2M window and 98.4% retrieval-at-length — but **text-only** (no image/video), which is the main drag on an otherwise strong agentic-reasoning profile.
- **Provider / access:** Meituan AI Platform / OpenCode Zen `opencode/longcat_2.5_preview`; Chat Completions API, native tool calling, structured JSON output. No Zen Free ID confirmed.
- **Release / knowledge:** 2026-02-28 release; knowledge cutoff December 2025.
- **IDs:** `meituan/longcat-2.5-preview`, `opencode/longcat_2.5_preview`.
- **Context window:** **2,000,000 tokens (2M input / 32K max output)** — the curated `meta.json` "128K total / Text in/out" is a placeholder contradicted by the verified 2M window; scored on the real 2M text model.
- **Modalities:** **text in / text out**; native tool calling; JSON mode. No image/video/audio input or non-text output.
- **Pricing (as of 2026-10-02):** **$0.35 / $1.40 per 1M** in/out (cached input $0.0875) — aggressive long-context pricing. Cost excluded from Overall.
- **Architecture:** long-context Mixture-of-Experts (MoE); open weights + commercial API.

### Raw benchmarks found

> Reported via the qualifying `Gemini_3.7_Flash.md` (Meituan Research / OpenCode Evaluation + Artificial Analysis rows; fetched 2026-09-25). Caveats this rater flags explicitly: (1) the **CritPt 69.0%** row is implausible for a hard frontier-physics benchmark (frontier models score single-digit %; likely a misread or a different metric) and is NOT credited in the reasoning score; (2) several rows (MRCR 98.4%, Omniscience 85.5/8.0) are strong and appear Meituan/vendor-sourced — treated as credible-but-unaudited rather than AA-verified; no independent BenchLM aggregate was retrievable for this Preview ID.

Agent / tool use:

- Terminal-Bench 2.1 **43.5%**; τ²/τ³-Banking **65.2%** (standard harness); GDPval-AA **1250 Elo**; Claw-Eval/ClawProBench **70.5%**; Toolathon / MCP-Atlas / SWE-Atlas Codebase-QnA **68.0%**

Reasoning / knowledge:

- GPQA Diamond **73.0%** (0-shot CoT); HLE **32.5%**; LCR/MLCR **81.2%**; AA Intelligence Index **73 / #22**
- Omniscience **Accuracy 85.5% / Hallucination 8.0%** (vendor-sourced — unusually clean, flagged as unaudited); CritPt **69.0%** (implausible → not credited)

Coding:

- SWE-bench Verified **48.5%**; LiveCodeBench **53.0%** (Pass@1, 2024–2025); SciCode **36.5%**; Vibe Code Bench **68.5%**; DeepSWE / Coding Index **66.0**

Long context / multimodal:

- MRCR / RULER **98.4%** retrieval across the 2M window (the standout measured strength); text-only I/O — no image/video/audio rows because none exist.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Implausible/unaudited rows are excluded or discounted as noted above.

- **Tool use: 76/100.** GDPval-AA 1250, Claw-Eval 70.5%, Toolathon/MCP-Atlas 68.0% and τ²/τ³ 65.2% show competent long-context tool orchestration; trimmed by a weak Terminal-Bench 2.1 43.5% (repo/terminal execution is not this model's strength).
- **Reasoning: 82/100.** GPQA 73.0%, LCR 81.2%, HLE 32.5% and AA Index 73 / #22 are solid-mid-upper, and a clean 8.0% hallucination rate (if it holds) is a real plus — but the headline numbers are vendor/Meituan-sourced and the CritPt 69% row is discounted as implausible, so this is credible, not frontier-proven.
- **Context window: 98/100.** The verified **2M window with 98.4% MRCR/RULER retrieval at length** is the exact ≥1M-tier retrieval bar — this is the model's defining, best-evidenced capability; only the 32K max-output cap keeps it from a flat 100.
- **Multimodal: 15/100.** Strictly text in / text out — the text-only floor (10–20); no image/video/audio input or non-text output of any kind. This single band is what drags the Overall from ~80 down to high-60s.
- **Coding: 68/100.** Vibe 68.5% and Coding Index 66 support whole-repo *navigation* over 2M tokens, but SWE-bench Verified 48.5%, LiveCodeBench 53.0% and SciCode 36.5% are mid-tier for actual code generation/repair.
- **Cost efficiency: 92/100.** $0.35 / $1.40 per 1M (cached $0.0875) is very aggressive for a 2M-context model — top-decile value for long-doc synthesis. Cost excluded from Overall.
- **Overall Score: 68/100.** Mean of Tool 76, Reasoning 82, Context 98, Multimodal 15, Coding 68 = 339/5 = 67.8 → 68. Best fit: **massive-codebase search, large-corpus / multi-document synthesis and cost-effective long-context text analysis** where a verified 2M window + 98.4% needle recall and cheap tokens beat everything else. It is the wrong pick for any vision/audio task (text-only) and only mid-tier for hands-on code repair (SWE-V 48.5 / TB 43.5). Cohort average is 73.5 (only 2 qualifying raters, who partly credited rounder/unverified numbers) — the honest independent placement is high-60s once text-only multimodal is scored at its floor and the implausible CritPt/Omniscience rows are discounted.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Meituan Research / OpenCode Evaluation + Artificial Analysis rows as compiled in the qualifying `Gemini_3.7_Flash.md`, fetched 2026-09-25; curated `meta.json` and the sibling `Qwen_3.8_27B.md`). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged that (a) the curated `meta.json` (128K) understates the verified 2M window, (b) CritPt 69.0% is implausible and was excluded, (c) MRCR 98.4% / Omniscience 85.5/8.0 appear vendor-sourced and unaudited, and (d) no independent BenchLM aggregate was retrievable for this Preview ID.
- Revisit trigger: if Meituan GA-grades the preview or AA/BenchLM add audited rows (esp. GPQA/HLE/SWE-V/MRCR), or if a multimodal variant ships, re-score; keep this file as history.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
