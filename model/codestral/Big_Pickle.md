# Codestral — findings by Big Pickle

- Source: Mistral AI/Codestral
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (22B, Codestral-2405)
- **Short description:** Mistral AI's first code-specialist model, released 29 May 2024 as a 22B open-weight model fluent in 80+ programming languages. It is built for low-latency autocomplete, fill-in-the-middle (FIM), test generation and code correction, not general chat. This entry is the original 2405 checkpoint; the newer 25.01 / 25.08 checkpoints are separate entries.
- **Provider / access:** Mistral AI La Plateforme (`codestral-latest`), the dedicated `codestral.mistral.ai` endpoint, Google Cloud Vertex AI, Azure AI Foundry and Amazon Bedrock; open weights on Hugging Face under the Mistral AI Non-Production License (MNPL), not Apache.
- **Release / knowledge:** Released 2024-05-29; knowledge cutoff not published.
- **IDs:** `codestral-latest` (La Plateforme); `mistralai/Codestral-22B-v0.1` on Hugging Face; no Zen Free ID.
- **Context window:** 32,768 total (vendor announcement; later Codestral checkpoints extend to 128K/256K).
- **Modalities:** text and code in; text and code out; reasoning no; tool calls yes on the instruct route; FIM endpoint yes.
- **Pricing (as of 2026-11-11):** $0.30 / $0.90 per 1M in/out; cached input $0.03.
- **Architecture:** 22B dense; open weights under the Mistral AI Non-Production License (research/testing only; commercial use requires a paid licence).

### Raw benchmarks found

All rows are Mistral AI's own vendor benchmarks published in the Codestral 25.01 announcement (13 January 2025), which tabulates the Codestral-2405 22B row for comparison.

Python / SQL / multi-language:

- HumanEval: **81.1%**
- MBPP (sanitised): **78.2%**
- CruxEval: **51.3%**
- LiveCodeBench: **31.5%**
- RepoBench EM: **34.0%**
- Spider (SQL): **63.5%**
- CanItEdit: **50.5%**
- HumanEval average across languages: **65.6%**

Per-language HumanEval:

- Python: **81.1%**
- C++: **68.9%**
- Java: **78.5%**
- JavaScript: **71.4%**
- Bash: **40.5%**
- TypeScript: **74.8%**
- C#: **43.7%**

Fill-in-the-middle:

- HumanEval FIM single-line exact match, average: **82.07%** (Python 77.0%, Java 83.2%, JS 86.08%)
- HumanEval FIM pass@1, average: **91.8%** (Python 90.2%, Java 90.1%, JS 95.0%)

Agent / tool use:

- Terminal-Bench, Tau2/Tau3, GDPval-AA, OSWorld, AutomationBench, SWE-bench, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond, HLE, AIME, LCR, CritPt, AA Intelligence Index: no verified public score found (the model has no general-reasoning evaluation suite).

Multimodal:

- None — text and code only.

Long context:

- No MRCR / RULER / GraphWalks retrieval result published; RepoBench 34.0% is the closest long-range code-completion proxy on the 32K window.

### Normalized scores (1–100)

- **Tool use: 30/100.** The instruct route supports tool calls, but there is no agentic benchmark of any kind — no Terminal-Bench, Tau, OSWorld or SWE-agent result.
- **Reasoning: 36/100.** CruxEval 51.3% is the only non-generation reasoning signal; no GPQA/HLE/AIME exists, and the model was never trained as a general reasoner.
- **Context window: 35/100.** 32K total sits low in the <100K band, roughly a third of the 100K reference.
- **Multimodal: 15/100.** Text and code only.
- **Coding: 55/100.** HumanEval 81.1%, MBPP 78.2% and a 91.8% FIM pass@1 average are strong for autocomplete, but LiveCodeBench 31.5% and RepoBench 34.0% show the 2024-era checkpoint is well behind current repo-level coding models.
- **Cost efficiency: 80/100.** $0.30/$0.90 per 1M with $0.03 cache reads is cheap for high-frequency completion, but the non-production licence blocks free commercial self-hosting.
- **Overall Score: 34/100.** (30 + 36 + 35 + 15 + 55) / 5 = 34.2 → 34. Best fit: legacy IDE autocomplete and FIM pipelines on the 22B checkpoint; new deployments should use Codestral 25.08.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (Mistral AI Codestral launch post and Codestral 25.01 benchmark table, Hugging Face model card and licence, Mistral AI pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral launch](https://mistral.ai/news/codestral)
  - [Mistral AI — Codestral 25.01 benchmark table (Codestral-2405 row)](https://mistral.ai/news/codestral-2501)
  - [Hugging Face — mistralai/Codestral-22B-v0.1](https://huggingface.co/mistralai/Codestral-22B-v0.1)
- Future sources: add a new file next to this one, e.g. `Codestral_Update.md`, using the same headings.
