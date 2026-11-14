# GPT-5.5 Pro — findings by Hy3

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's highest-capability GPT-5.5 option (2026-04-24) for the hardest tasks and long-running workflows; deep-reasoning "thinking" model with extended effort tiers (Pro Standard / Pro Extended).
- **Provider / access:** OpenAI API, ChatGPT (Pro/Business/Enterprise). Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-04-24.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** ~1,000,000 tokens (922K in / 128K out per BenchGecko).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** In $30.00 / Out $180.00 per 1M tokens (Pro, ~6× base); batch $15/$90.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI eval, Pro)
- Tau2-Bench Telecom (raw prompt): **98.0%** (OpenAI eval)
- Toolathlon / MCP Atlas: not separately disclosed for Pro this pass

Reasoning / knowledge:

- GPQA Diamond: **95.7%** (BenchGecko); **94.4%** (OpenAI eval for Pro)
- ARC-AGI: **96.5%** (BenchGecko)
- OTIS Mock AIME 2024-2025: **100.0%** (BenchGecko)
- FrontierMath T1-3: **92.3%**, T4: **78.0%** (BenchGecko)
- Humanity's Last Exam (with tools): **57.2%** (OpenAI eval, Pro)

Coding:

- FrontierMath strong (above); SWE-bench Pro not separately listed for Pro this pass (base GPT-5.5 = 58.6%)
- MMMU Pro (with tools): **83.2%** (OpenAI eval)

Long context:

- ~1,000,000-token window verified; MRCR/RULER retrieval score not found this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** BrowseComp 90.1% and Tau2 Telecom 98.0% are elite tool/web-use signals.
- **Reasoning: 95/100.** GPQA 95.7%, ARC-AGI 96.5%, AIME 100% — among the strongest reasoning profiles available.
- **Context window: 100/100.** ~1,000,000-token context (top tier).
- **Multimodal: 85/100.** Text + image in, strong MMMU Pro 83.2%; no native audio/video generation.
- **Coding: 88/100.** Elite math (FrontierMath, AIME) but no public SWE-bench Pro figure for Pro holds it below 95.
- **Cost efficiency: 25/100.** $30/$180 per 1M is the most expensive tier — premium pricing for max depth.
- **Overall Score: 92/100.** Mean of the five non-cost dims (90+95+100+85+88)/5 = 91.6 → 92. Best-fit: deepest-reasoning Pro tier with record math, gated only by very high cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, FrontierBenchmarks, BenchGecko, OpenAI launch post; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-5.5 Pro — Baidu Baike](https://baike.baidu.com/item/GPT-5.5%20Pro/67770677)
  - [GPT-5.5 Pro — Frontier Benchmarks](https://frontierbenchmarks.com/models/gpt-5-5-pro)
  - [GPT-5.5 Pro — BenchGecko](https://www.benchgecko.ai/model/gpt-5-5-pro)
  - [Introducing GPT-5.5 (OpenAI)](https://openai.com/zh-Hans-CN/index/introducing-gpt-5-5/)
