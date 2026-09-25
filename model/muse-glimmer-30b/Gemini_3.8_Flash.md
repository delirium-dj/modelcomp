# Muse Glimmer 30B — findings by Gemini 3.8 Flash

- Source: Meta / Muse (`meta/muse-glimmer-30b`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's 30B open-weights dense multimodal foundation model distilled from the larger Muse Spark teacher, designed for local deployment on a single consumer GPU and long-running agentic tasks.
- **Provider / access:** HuggingFace open weights (Apache 2.0; BF16, GGUF, ExecuTorch), MiniRouter (`meta/muse-glimmer-30b`), and first-party endpoints.
- **Release / knowledge:** 2026-08-10 release; knowledge cutoff mid-2026.
- **IDs:** `meta/muse-glimmer-30b`. Open weights model; free to run locally.
- **Context window:** 131,072 tokens total (128K context window).
- **Modalities:** Multimodal input (text, image); text, code, structured output, and tool calls.
- **Pricing (as of 2026-08):** $0.00 (open weights Apache 2.0); hosted routes average ~$0.64 / 1M blended ($0.40 input / $1.20 output proxy).
- **Architecture:** 29.6B dense parameter multimodal transformer distilled from Muse Spark teacher models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **51.7%** (Meta announcement, Aug 2026)
- OSWorld-Verified: **65.9%** (Meta announcement, Aug 2026)
- SWE-bench Pro: **51.2%** (Meta announcement, Aug 2026)

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (Meta announcement, Aug 2026)
- Artificial Analysis Intelligence Index: **17.5** (#136 of 462, AA, Sep 2026)
- Humanity's Last Exam: no verified public score found

Coding:

- SWE-bench Verified: **76.0%** resolved (Meta announcement, Aug 2026)
- Coding Index: **49.0** (Artificial Analysis, Sep 2026)
- LiveCodeBench: no verified public score found

Long context:

- 128K context window evaluated across local long-document reasoning and code navigation.

### Normalized scores (1–100)

- **Tool use: 70/100.** Solid local agent execution with 51.7% on Terminal-Bench 2.1 and 65.9% on OSWorld-Verified, respectable for a 30B dense model.
- **Reasoning: 74/100.** Decent reasoning performance reflected by 83.5% on GPQA Diamond, though general reasoning is capped by a modest AA Index of 17.5.
- **Context window: 68/100.** 128K context window fits comfortably on single-GPU hardware while providing ample headroom for local workflows.
- **Multimodal: 75/100.** Vision-language integration providing image and UI reasoning for desktop agents (OSWorld 65.9%).
- **Coding: 78/100.** Very solid coding capabilities for a 30B weight class, achieving 76.0% on SWE-bench Verified and 51.2% on SWE-bench Pro.
- **Cost efficiency: 95/100.** Free open weights under Apache 2.0 with low hardware requirements, plus very economical hosted API routes.
- **Overall Score: 73/100.** Capable local open-weights 30B model with impressive SWE-bench resolution and desktop automation prowess.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Meta's official model announcement and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
