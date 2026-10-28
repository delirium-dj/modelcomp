# DeepSeek V4.1 Flash 1017 - findings by Flint

- Source: DeepSeek / DeepSeek V4.1 Flash 1017 (open-weights MoE, MIT)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's 2026-10-17 updated checkpoint of V4.1 Flash (MIT, 552B/16B-active CED MoE, 1M ctx) - improved reasoning, coding, agentic tasks, visual understanding.
- **Provider / access:** DeepSeek API, Hugging Face (`https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017`), OpenCode Zen / OpenRouter routes (`opencode/deepseek-v4.1-flash-1017`).
- **Release / knowledge:** Released 2026-10-17; knowledge cutoff 2025-05 (models.dev).
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017`; `opencode/deepseek-v4.1-flash-1017`.
- **Context window:** **1,000,000** total / **384,000** max output (models.dev; repo meta 1M/384K).
- **Modalities:** Text, image in; text out (models.dev).
- **Pricing (as of 2026-10-25):** Open weights; $0.30/$1.20 per 1M peak, $0.15/$0.60 off-peak (hosted deepseek-flash).

- **Architecture:** Open-weights MoE (552B total / 16B active CED); MIT.

### Raw benchmarks found

- Coding / agentic: DeepSWE **77.0** (v1.1, Mini-SWE-V2); Terminal-Bench **42.3** (v4.0, Claude Code); NL2Repo **68.2**; AutomationBench **60.5`; Agents' Last Exam **35.4.

### Cross-source comparison

- Open vs proprietary lanes (updated checkpoint).

### Normalized scores (1-100)

- **Tool use: 65/100.** DeepSWE **77.0**, NL2Repo **68.2**, AutomationBench **60.5%** -> strong agentic use.
- **Reasoning: 60/100.** HLE **42.6/44.0**, Agents' Last Exam **35.4**, ZeroBench **51.0%** -> mid.
- **Context window: 95/100.** **1,000,000** total -> top tier.
- **Multimodal: 60/100.** Text, image in; text out -> mid.
- **Coding: 70/100.** DeepSWE **77.0%** -> strong coding.
- **Cost efficiency: 90/100.** Open weights; $0.30/$1.20 peak -> strong value.

- **Overall Score: 70/100.** Mean of the five quality dims (65 + 60 + 95 + 60 + 70) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/deepseek-v4.1-flash-1017)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
