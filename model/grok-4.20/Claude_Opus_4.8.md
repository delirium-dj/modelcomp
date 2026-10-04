# Grok 4.20 — findings by Claude Opus 4.8

- Source: xAI (`opencode/grok-4.20`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's Grok 4.20 reasoning model with a very large (2M) context; mid-generation, broad but shallow agentics. Top use case: general reasoning/long-context (legacy).
- **Provider / access:** xAI API (`grok-4.20`); OpenCode Zen `opencode/grok-4.20`.
- **Release / knowledge:** Grok 4.20 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/grok-4.20`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 2M — **meta.json severely understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 75.2% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **47.1%**; DeepSearchQA **62.8%**; Gert Labs **38.36%**; Terminal-Bench 2.1 (Vals) **44.2%**

Reasoning / knowledge:

- GPQA-D **88.5%** (Vals 88.6%); MMLU-Pro **86.3%** (Vals); HLE w/o tools **31.6%**; ARC-AGI-2 **53.3%**; ARC-AGI-3 0.1%

Coding:

- SWE-bench Verified **76.7%**; LiveCodeBench **84.3%** (Vals); SWE-bench Pro **51.8%**; LiveCodeBench Pro **74.2%**; Vibe Code Bench **4.06%**

Multimodal:

- MMMU-Pro **75.2%**; CharXiv **60.9%**; MedXpertQA (MM) **65.8%**

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.0 47.1% and TB2.1 44.2% are weak; DeepSearchQA 62.8% — mid-tier agentics.
- **Reasoning: 72/100.** GPQA-D 88.5%, MMLU-Pro 86.3%; HLE 31.6%, ARC-AGI-2 53.3% cap it.
- **Context window: 94/100.** 2M (BenchLM) — top-tier window (meta's 128K severely understated).
- **Multimodal: 62/100.** Image-in (MMMU-Pro 75.2%, CharXiv 60.9%), text-only out — modest vision tier.
- **Coding: 72/100.** SWE-bench Verified 76.7%, LiveCodeBench 84.3%, SWE-bench Pro 51.8%; Vibe Code 4.06% is the floor.
- **Cost efficiency: 72/100.** No verified public price. Scored provisionally.
- **Overall Score: 72.4/100.** Half-up mean of the five quality dims (62/72/94/62/72). A large-context but shallow-agentic mid-gen Grok; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (xAI/AA Grok 4.20, Meta comparison chart, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
