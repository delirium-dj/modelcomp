# DeepSeek V4 Pro — findings by LongCat 2.5 Preview

- Source: DeepSeek (`deepseek-v4-pro` / `DeepSeek-V4-Pro-0813`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Pro
- **Short description:** DeepSeek's flagship open-weight MoE — 1.6T total / 49B active parameters with hybrid sparse attention, 1M-token context, and frontier-class coding/reasoning at a fraction of closed-flagship prices.
- **Provider / access:** DeepSeek API — `deepseek-v4-pro` (OpenAI + Anthropic-compatible; non-think / think-high / think-max modes). Also DeepInfra, OpenRouter, NVIDIA NIM, Fireworks. Preview 2026-04-24; GA (0813) 2026-08-13.
- **Release / knowledge:** GA 2026-08-13; knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4-pro` (OpenRouter), `deepseek-v4-pro` (DeepSeek API). No Zen Free ID — paid API / MIT open weights.
- **Context window:** 1,000,000 tokens (verified via DeepSeek model card).
- **Modalities:** Text in; text out (no vision on V4-Pro); reasoning yes (three effort modes); tool calls, JSON output, Responses API.
- **Pricing (as of 2026-09-27):** $0.435/M in, $0.87/M out (permanent cut from $1.74/$3.48); cache hit $0.003625/M. Paid API / MIT open weights.
- **Architecture:** 1.6T total params, 49B active; MoE with Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA); Muon optimizer; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%**; Terminal-Bench 2.0: **67.9%**
- BrowseComp: **83.4%**; MCP Atlas: **73.6%**; Toolathlon: **51.8%**
- CyberGym: **83.3%**; NL2Repo: **61.5%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%**
- HLE: **42.7%** (60.0% with tools)
- MMLU-Pro: **87.5%**; SimpleQA: **57.9%**; HMMT 2026 Feb: **95.2%**

Coding:

- SWE-bench Verified: **80.6%**
- LiveCodeBench: **93.5%**
- SWE-bench Pro: **55.4%**; SWE Multilingual: **76.2%**
- Vibe Code Bench: **49.93%**; deepSwe: **62.7%**; DSBench-FullStack: **71.1%**
- Codeforces: **3206**

Long context:

- MRCR 1M: **83.5%**; CorpusQA 1M: **62.0%** — strong published long-context retrieval.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 87.9% is a hair under the 88%+ frontier mark; BrowseComp 83.4% and MCP Atlas 73.6% are solid; Toolathlon 51.8% keeps the dimension down.
- **Reasoning: 85/100.** GPQA 90.1%, HLE 42.7% (60.0% with tools) and MRCR 1M 83.5% are all frontier-tier for the generation.
- **Context window: 95/100.** 1M tokens earns the ≥1M tier; MRCR 1M 83.5% supports strong long-context behavior.
- **Multimodal: 15/100.** Text-only input/output (vision is on the Flash variant, not V4-Pro).
- **Coding: 78/100.** LiveCodeBench 93.5% and SWE-bench Verified 80.6% are strong; SWE-bench Pro 55.4% and Vibe Code Bench 49.93% sit mid-field.
- **Cost efficiency: 96/100.** $0.435/$0.87 pricing is ~2.5x cheaper than the ~$0.60/$2.20 ≈ 92 reference point.
- **Overall Score: 71/100.** Mean of the five quality dims (82+85+95+15+78)/5 = 71. Best-fit: self-hostable open-weight flagship for coding and long-context work — near-frontier capability at the field's best prices, held back in this text-only checkpoint by multimodal limits.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (DeepSeek model card + API docs, BenchLM, evermx, deepseekv4.tech); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
