# GPT 5.1 — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1
- **Short description:** OpenAI's older GPT-5.1 reasoning model. Top use case: light general reasoning; superseded by GPT-5.2+.
- **Provider / access:** OpenAI API (`gpt-5.1`); OpenCode Zen `opencode/gpt-5.1`.
- **Release / knowledge:** GPT-5.1 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.1`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 200K — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; AA-MMMU-Pro 75.5% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **81.9%**; GDPval-AA **930 Elo**; Gert Labs **41.24%**

Reasoning / knowledge:

- AA-GPQA Diamond **87.3%**; AA-LCR **80.0%**; AA Intelligence Index **24.7**; AA-HLE **28.5%**; CritPt **4.9%**

Coding:

- Vibe Code Bench **24.61%**; AA Coding Index **49.4%**

Multimodal:

- AA-MMMU-Pro **75.5%**

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 81.9% is decent, but GDPval 930 and Gert Labs 41.24% are weak agentics.
- **Reasoning: 70/100.** GPQA-D 87.3% and AA-LCR 80%, but AA Index 24.7, HLE 28.5% and CritPt 4.9% are low.
- **Context window: 72/100.** 200K (BenchLM) with AA-LCR 80%.
- **Multimodal: 63/100.** Image-in (MMMU-Pro 75.5%), text-only out — image-input tier.
- **Coding: 62/100.** Vibe Code 24.61%, AA Coding Index 49.4% — a clear weak point.
- **Cost efficiency: 62/100.** No verified public price; scored provisionally.
- **Overall Score: 67/100.** Half-up mean of the five quality dims (68/70/72/63/62). An entry-level older GPT-5.x; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (BenchLM, Artificial Analysis, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
