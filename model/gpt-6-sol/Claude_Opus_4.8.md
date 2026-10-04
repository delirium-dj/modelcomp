# GPT 6 Sol — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-6-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's GPT-6 Sol — the mainstream reasoning/agentic tier of the GPT-6 family (below Astra). Top use case: frontier agentic reasoning and knowledge work.
- **Provider / access:** OpenAI API (`gpt-6-sol`); OpenCode Zen `opencode/gpt-6-sol`.
- **Release / knowledge:** GPT-6 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-6-sol`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1.05M and AA-LCR runs long — **meta.json "128K" understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; AA-MMMU-Pro 82.9% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam **56.4%**; OSWorld 2.0 **60.5%**; GDPval-AA **1505 Elo**; AA AutomationBench **61.6%**
- AA ITBench **49.4%**; AA Terminal-Bench 4.0 **43.9%**; AutomationBench **33.2%**; AA Briefcase **1479 Elo**

Reasoning / knowledge:

- AA Intelligence Index **47.6**; AA-HLE **47.9%**; AA-LCR **83.7%**; CritPt **30.9%**; MLCR-AA **16.1%**

Coding:

- DeepSWE **68.8%**; AA-SciCode **57.6%**

Multimodal:

- AA-MMMU-Pro **82.9%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Agents' Last Exam 56.4%, OSWorld 60.5%, GDPval 1505, AA AutomationBench 61.6%; raw AutomationBench 33.2% caps it.
- **Reasoning: 85/100.** AA Index 47.6, AA-HLE 47.9%, AA-LCR 83.7%, CritPt 30.9%; MLCR 16.1% caps the top.
- **Context window: 95/100.** ~1.05M window with AA-LCR 83.7% (meta's 128K understated).
- **Multimodal: 68/100.** Image-in (MMMU-Pro 82.9%), text-only out — image-input tier.
- **Coding: 82/100.** DeepSWE 68.8%, SciCode 57.6% (limited public coding coverage).
- **Cost efficiency: 55/100.** No verified public price; scored provisionally.
- **Overall Score: 82.8/100.** Half-up mean of the five quality dims (84/85/95/68/82). A frontier agentic-reasoning GPT-6 tier; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-6 Sol launch + Astra system card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
