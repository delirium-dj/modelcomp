# GPT 5.3 Codex — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.3-codex`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's GPT-5.3 Codex — a coding-specialist variant tuned for agentic software engineering. Top use case: autonomous coding and SWE workflows.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`); OpenCode Zen `opencode/gpt-5.3-codex`.
- **Release / knowledge:** GPT-5.3 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.3-codex`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 400K — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; AA-MMMU-Pro 78.5% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary (Codex-series).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **77.3%**; OSWorld-Verified **64.7%**; τ²-bench **86%**; JobBench **33.7%**

Reasoning / knowledge:

- GPQA Diamond **91.5%**; AA-LCR **83.3%**; AA Intelligence Index **32.5**; AA-HLE **42.5%**; CritPt **16.9%**; AA-Omniscience Hallucination Rate 89.2%

Coding:

- SWE-bench Verified **85%**; SWE-bench Pro **56.8%**; LiveCodeBench **87.3%** (Vals); Vibe Code Bench **61.77%**; SWE-Rebench **58.2%**

Multimodal:

- AA-MMMU-Pro **78.5%**

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 86%, TB2.0 77.3%, OSWorld-Verified 64.7%; JobBench 33.7% caps it.
- **Reasoning: 78/100.** GPQA-D 91.5%, AA-LCR 83.3%; AA Index 32.5, CritPt 16.9% and an 89.2% hallucination rate cap it.
- **Context window: 82/100.** 400K (BenchLM) with AA-LCR 83.3% (meta's 128K understated).
- **Multimodal: 64/100.** Image-in (MMMU-Pro 78.5%), text-only out — image-input tier.
- **Coding: 86/100.** SWE-bench Verified 85%, LiveCodeBench 87.3%, Vibe Code 61.77%, SWE-Rebench 58.2% — the specialist strength.
- **Cost efficiency: 62/100.** No verified public price; scored provisionally.
- **Overall Score: 77.6/100.** Half-up mean of the five quality dims (78/78/82/64/86). A capable coding specialist; image-only multimodal and `meta.json` context need attention.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.3-Codex system card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
