# North Mini Code — findings by Claude Opus 4.8

- Source: Cohere (`opencode/north_mini_code`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weight MoE reasoning model for code (30B total / 3B active, Apache 2.0), 256K context, completely free tier, sub-second latency, text-only. Top use case: free fast self-hosted coding assistant.
- **Provider / access:** Cohere + open weights (`CohereLabs/North-Mini-Code-1.0`, Apache 2.0); OpenCode Zen `opencode/north_mini_code`. Free tier ($0/$0).
- **Release / knowledge:** North Mini Code 1.0 (2026); knowledge cutoff per Cohere.
- **IDs:** `opencode/north_mini_code` (free tier; open weights).
- **Context window:** 256K total.
- **Modalities:** text in/out only; reasoning.
- **Pricing (as of 2026-10-03):** completely free tier ($0/$0); free self-host (Apache 2.0).
- **Architecture:** 30B total / 3B active open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **37.4%**; GDPval-AA 0% norm; AA-IFBench 57.6%

Reasoning / knowledge:

- AA-GPQA Diamond **75.7%**; AA-LCR **37.3%**; AA Intelligence Index 9.9; AA-HLE 11.1%; CritPt 0.3%; AA-Omniscience Index -48.6%

Coding:

- AA-SciCode **38.8%**

Multimodal:

- Text-only

### Normalized scores (1–100)

- **Tool use: 42/100.** τ²-bench 37.4%, IFBench 57.6%; GDPval 0% norm caps it — modest agentics for a 30B/3B model.
- **Reasoning: 48/100.** AA-GPQA-D 75.7% is decent, but AA-LCR 37.3%, AA Index 9.9, HLE 11.1% are low.
- **Context window: 72/100.** 256K total.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 46/100.** Only AA-SciCode 38.8% published; thin for a "code" model.
- **Cost efficiency: 100/100.** Completely free tier ($0/$0) plus free self-host (Apache 2.0).
- **Overall Score: 44.6/100.** Half-up mean of the five quality dims (42/48/72/15/46). A free fast open coding assistant — cost/context lead; raw agentic/coding scores are entry-tier and it is text-only.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Cohere North Mini Code HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
