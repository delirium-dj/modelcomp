# GPT 6.1 Sol — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-6.1-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6.1 Sol
- **Short description:** OpenAI's GPT-6.1 Sol — a reasoning/agentic model in the GPT-6 family, successor to GPT-6 Sol. Top use case: frontier agentic reasoning and knowledge work.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`); OpenCode Zen `opencode/gpt-6.1-sol`.
- **Release / knowledge:** GPT-6.1 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-6.1-sol`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1.05M and AA-LCR runs long — **meta.json "128K" is understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; AA-MMMU-Pro 86% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- AutomationBench **36.1%** (AA 64.9%); Terminal-Bench-Science 0.1 **57.0%**; AA Terminal-Bench 4.0 **56.1%**
- GDPval-AA **1575 Elo**; AA Briefcase **1564 Elo**; ExploitGym **35.1%**; AA-AnalystAgent **50.0%**

Reasoning / knowledge:

- AA Intelligence Index **51.8**; AA-HLE **52.9%**; AA-LCR **83.0%**; CritPt **31.7%**; MLCR-AA **33.9%**
- AA-Omniscience Index **41.5%** / Accuracy 62.1%

Coding:

- DeepSWE **71.9%**; AA-SciCode **54.2%**

Multimodal:

- AA-MMMU-Pro **86.0%**

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval 1575, AA-AutomationBench 64.9%, TB4.0 56.1%, Terminal-Bench-Science 57%; raw AutomationBench 36.1% caps it.
- **Reasoning: 87/100.** AA Index 51.8, AA-HLE 52.9%, AA-LCR 83%, CritPt 31.7% — strong frontier reasoning.
- **Context window: 95/100.** ~1.05M window with AA-LCR 83% (meta's 128K understated).
- **Multimodal: 68/100.** Image-in (MMMU-Pro 86%), text-only out — image-input tier.
- **Coding: 84/100.** DeepSWE 71.9%, SciCode 54.2% (limited public coding coverage).
- **Cost efficiency: 55/100.** No verified public price; scored provisionally.
- **Overall Score: 83.8/100.** Half-up mean of the five quality dims (85/87/95/68/84). A frontier agentic-reasoning GPT-6 model; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-6.1 Sol launch + system card addendum, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
