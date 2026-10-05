# GPT OSS 120B — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-oss-120b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** OpenAI's open-weight 120B model (2025), text-only, 128K context; mid-knowledge but weak agentics/coding by 2026 standards. Top use case: free self-hosted general text.
- **Provider / access:** OpenAI open weights; OpenCode Zen `opencode/gpt-oss-120b`; many hosts.
- **Release / knowledge:** 2025 generation; knowledge cutoff per OpenAI.
- **IDs:** `opencode/gpt-oss-120b` (open weights).
- **Context window:** 128K total (per curated `meta.json`; BenchLM 128K).
- **Modalities:** text in/out (no image).
- **Pricing (as of 2026-10-03):** free self-host (open weights); cheap hosted.
- **Architecture:** 120B open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **65.8%**; GDPval-AA **745 Elo**; AA Agentic Index **6.2%**; APEX-Agents-AA 3.1%

Reasoning / knowledge:

- AA-GPQA Diamond **78.2%**; AA-LCR **52.0%**; AA Intelligence Index **11.6**; AA-HLE **19.6%**; CritPt 1.1%; AA-Omniscience Index -49.2%

Coding:

- React Native Evals **71.6%**; AA Coding Index **30.4%**; AA-SciCode 34%

Multimodal:

- Text-only (Design Arena Website 974)

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 65.8% but GDPval 745, AA Agentic Index 6.2% — weak agentics.
- **Reasoning: 52/100.** GPQA-D 78.2% but AA Index 11.6, HLE 19.6%, AA-LCR 52% — modest.
- **Context window: 55/100.** 128K total (100K–200K tier).
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 48/100.** React Native 71.6% but AA Coding Index 30.4%, SciCode 34%.
- **Cost efficiency: 92/100.** Free self-host (open weights); cheap hosted.
- **Overall Score: 43/100.** Half-up mean of the five quality dims (45/52/55/15/48). A free open-weight general text model, well behind 2026 frontier; text-only and weak agentics cap it.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
