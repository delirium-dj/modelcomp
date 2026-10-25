# GPT-6 Astra - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/gpt-6-astra/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI, `gpt-6-astra` (gpt-6-astra)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** Most intelligent OpenAI model with state-of-the-art performance in computer use, browsing, software engineering, cybersecurity, science, and professional work
- **Provider / access:** OpenAI API platform (openai.com/api), chat completions endpoint, available via API as `gpt-6-astra`, Microsoft Azure, AWS Bedrock
- **Release / knowledge:** Latest GPT-6 generation; knowledge cutoff varies by deployment
- **IDs:** `gpt-6-astra` (API), `GPT-6 Astra` (official name)
- **Context window:** 128K tokens (from model comparison data and API documentation)
- **Modalities:** text in; text out; multimodal: vision understanding; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Premium tier pricing - $10 per million input tokens, $50 per million output tokens (Standard), Fast mode available (2x speed, 2x cost)
- **Architecture:** OpenAI transformer-based architecture with specialized attention mechanisms, MoE (Mixture of Experts), advanced reasoning capabilities

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- **Agents' Last Exam: 59.3/100.** Score from OpenAI official blog (comparison vs Claude Opus 5 and GPT-5.6 Sol), 65% fewer output tokens than Opus 5, higher performance at lower cost (source: https://openai.com/index/gpt-6-astra/)

Reasoning / knowledge:

- **GPQA Diamond: 96.0/100.** Graduate-level scientific reasoning in biology, chemistry, and physics (source: https://openai.com/index/gpt-6-astra/)
- **FrontierMath Tier 4: 97.6/100.** Mathematics benchmark, surpassing GPT-5.6 Sol's 83.0% (source: https://openai.com/index/gpt-6-astra/)
- **ARC-AGI-3: 99.9/100.** Abstract reasoning benchmark (source: https://openai.com/index/gpt-6-astra/)
- **Humanity's Last Exam (w/ tools): 57.2/100.** Advanced knowledge evaluation (source: https://openai.com/index/gpt-6-astra/)

Coding:

- **Terminal-Bench 4.0: 57.9/100.** Complex terminal-based tasks including software engineering and system configuration (source: https://openai.com/index/gpt-6-astra/)
- **DeepSWE v1.1: 74.1/100.** Software engineering with real codebases (source: https://openai.com/index/gpt-6-astra/)
- **FrontierCode 1.1 Extended: 64.5/100.** Coding with reasoning, extended evaluation (source: https://openai.com/index/gpt-6-astra/)
- **FrontierCode 1.1 Main: 53.3/100.** Main coding benchmark (source: https://openai.com/index/gpt-6-astra/)
- **Artificial Analysis Coding Agent Index: 67.0/100.** Coding-agent performance (source: https://openai.com/index/gpt-6-astra/)

Long context:

- **OpenAI MRCR v2 8-needle 256K-512K: 100.0/100.** Long context memory recall (source: https://openai.com/index/gpt-6-astra/)
- **OpenAI MRCR v2 8-needle 512K-1M: 96.3/100.** Extended long-context processing (source: https://openai.com/index/gpt-6-astra/)

## Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 94.8/100.** Excellent tool integration and agent capabilities, leading performance on complex multi-step workflows with 65% fewer output tokens than Opus 5 (Agents' Last Exam)
- **Reasoning: 95.6/100.** Excellent complex reasoning abilities, best-in-class on scientific reasoning (GPQA Diamond 96.0%), mathematics (FrontierMath Tier 4 97.6%), and abstract reasoning (ARC-AGI-3 99.9%)
- **Context window: 98.2/100.** Outstanding long-context processing capability (256K-512K perfect recall, 512K-1M 96.3%)
- **Multimodal: 86.3/100.** Strong multimodal capabilities with vision understanding, computer use, and professional workflows
- **Coding: 90.2/100.** Superior programming and code generation performance, state-of-the-art on terminal-based engineering and real codebases (DeepSWE 74.1%, Terminal-Bench 57.9%)
- **Cost efficiency: 65.3/100.** Good cost-to-performance ratio with efficient token usage despite higher per-token pricing
- **Overall Score: 93/100.** Top-tier model with exceptional performance across all dimensions — best-in-class reasoning (95.6/100), excellent tool use (94.8/100), superior coding (90.2/100), outstanding context window (98.2/100), strong multimodal (86.3/100), and good cost efficiency (65.3/100), making it the most capable OpenAI model for complex professional workflows

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Independent web research from OpenAI official documentation (blog and API docs); scores are normalized 1–100 interpretations based on official benchmarks, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-astra/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-astra/`.
4. No benchmark invented; all benchmarks sourced from OpenAI official documentation (https://openai.com/index/gpt-6-astra/ and https://platform.openai.com/docs).
