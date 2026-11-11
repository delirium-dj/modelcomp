# DeepSeek-V4-Pro — findings by Ernie 5.5 Flash

- Source: DeepSeek/DeepSeek-V4-Pro (`deepseek-v4-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro
- **Short description:** DeepSeek's open MoE flagship (released 2026-04-24) with a million-token context for coding and long agent runs — the larger sibling of DeepSeek V4 Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`), Azure, OpenRouter, OpenCode Go, DeepInfra, GmiCloud, Empirio Labs, Jalapeno, plus ~63 routes. Open weights.
- **Release / knowledge:** 2026-04-24; knowledge cutoff 2025-05 (models.dev).
- **IDs:** `deepseek-v4-pro`, `deepseek-ai/DeepSeek-V4-Pro`, `azure/deepseek-v4-pro`, `opencode-go/deepseek-v4-pro`.
- **Context window:** 1,000,000 tokens (1,048,576 on some gateways); max output 384,000.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.74 / $3.48 per 1M input/output (Azure); OpenCode Go lists $0.66/$1.98, GmiCloud $1.392/$2.784.
- **Architecture:** open-weight MoE (DeepSeek; undisclosed size).

### Raw benchmarks found

> Figures are from BenchLM's profile of the current serving build (labelled "DeepSeek V4 Pro 0813").

Agent / tool use:

- Terminal-Bench 2.1: **87.9%**; Terminal-Bench 2.0: **67.9%**
- BrowseComp: **83.4%**; NL2Repo: **61.5%**; OpenHarmony Bench v1.0: **59.0%**
- DSBench-FullStack (DeepSeek): **71.1%**; DSBench-Hard: **67.2%**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for V4-Pro
- BenchLM ranks Reasoning as its strongest category (#39)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench (Vals AI): **96.4%** — the best verified SWE-bench row in this dataset
- LiveCodeBench Pass@1 with CoT: **93.5%**; LiveCodeBench (Vals AI): **87.5%**
- DeepSWE: **62.7%**; SWE-bench Pro: **55.4%**; SWE Multilingual: **76.2%**
- Codeforces rating: **3206.0**; Vibe Code Bench v1.1: **49.93%**; SWE-bench Verified: **80.6%**

Long context:

- 1M context with 384K output declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 87.9% is strong, BrowseComp 83.4% good, TB2.0 67.9% mid; no Terminal-Bench 4.x or OSWorld row was published for this build.
- **Reasoning: 78/100.** No public GPQA/HLE/ARC/FrontierMath row exists for V4-Pro; the score is derived from its #39 reasoning rank — low confidence.
- **Context window: 100/100.** 1,000,000 tokens with 384,000 max output.
- **Multimodal: 15/100.** Text-only model (models.dev: text in / text out) — no image, audio or video input.
- **Coding: 85/100.** SWE-bench (Vals) 96.4%, LiveCodeBench CoT 93.5% and Codeforces 3206 are the strongest verified coding cluster outside the very top, though DeepSWE 62.7% and SWE-bench Pro 55.4% are mid.
- **Cost efficiency: 88/100.** $1.74/$3.48 per 1M, with OpenCode Go at $0.66/$1.98 and open weights for self-hosting.
- **Overall Score: 71.6/100.** Best fit for self-hosted text-only coding at 1M context; the text-only modality and missing reasoning rows keep it out of the top tier.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (DeepSeek V4 Pro announcement and model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V4-Pro — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)
  - [DeepSeek V4 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/deepseek-v4-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `DeepSeek_4_Pro_v2.md`, using the same headings.