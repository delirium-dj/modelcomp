# DeepSeek V4.1 Flash 1017 — findings by GPT-6.1 Terra

- Source: DeepSeek `DeepSeek-V4.1-Flash-1017`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** A separately published update to V4.1 Flash for multimodal and agentic tasks.
- **Provider / access:** DeepSeek's `deepseek-flash` API currently serves 1017; downloadable `deepseek-ai/DeepSeek-V4.1-Flash-1017` weights.
- **Release / knowledge:** Released 2026-10-17; knowledge cutoff not verified.
- **IDs:** Weights `deepseek-ai/DeepSeek-V4.1-Flash-1017`; API `deepseek-flash`.
- **Context window:** DeepSeek specifies 1M context and 384K maximum output on its API.
- **Modalities:** Text and image input, text output; function calling and thinking modes.
- **Pricing (2026-11-01):** Peak $0.30 input / $1.20 output, off-peak $0.15/$0.60 per million; search/fetch costs extra.
- **Architecture:** Open weights under MIT license; parameter count not independently verified here.

### Raw benchmarks found

Agent / tool use:

- DeepSeek reports Terminal-Bench 4.0 **42.3%** with Claude Code, Automation-Bench v1.0.6 **60.5%**, Agents' Last Exam **35.4%**. Vals TB 4.0 **31.82% ± 2.62** is a separate evaluation.

Reasoning / knowledge:

- DeepSeek reports HLE **42.6% without tools** and **44.0% on the text-only subset**; Vals Index **61.26% ± 1.05**. GPQA: no verified exact-snapshot score found.

Coding:

- DeepSeek reports DeepSWE v1.1 **77.0%** with mini-SWE-v2 and NL2Repo-Bench **68.2%**. Vals Vibe Code Bench v1.1 **87.73% ± 2.75**, Code Migration v1.1 **67.52% ± 2.76**.

Long context and multimodal:

- DeepSeek lists 1M context; no verified 512K-plus retrieval score found. Vendor reports Chartography **83.0% with tools**, not an unaided vision result.

### Normalized scores (1–100)

- **Tool use: 90/100.** Vendor automation and terminal results plus independent TB 4.0 support strong agent capability.
- **Reasoning: 89/100.** No-tools HLE and Vals Index support strong reasoning; GPQA is not verified here.
- **Context window: 96/100.** 1M is documented without verified long-context retrieval accuracy.
- **Multimodal: 65/100.** Image and text input with text output; audio and video are not established here.
- **Coding: 92/100.** DeepSWE and independent Vibe Code/Code Migration results support strong coding, with harness caveats.
- **Cost efficiency: 96/100.** Peak $0.30/$1.20 per million and lower off-peak rates; tool charges are separate.
- **Overall Score: 86/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Exact-snapshot DeepSeek documentation and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [DeepSeek 1017 model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing)
  - [Vals 1017 evaluation](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017)
- Future sources: add a separate signed findings file alongside this one.
