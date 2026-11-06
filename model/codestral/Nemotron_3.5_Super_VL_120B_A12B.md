# Codestral — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Mistral AI official blog (`mistral.ai/news/codestral/`), Hugging Face model card (`mistralai/Codestral-22B-v0.1`), BenchmarkList LiveSQLBench profile (`benchmarklist.com/models/codestral-22b`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (Mistral AI Codestral 22B)
- **Short description:** Mistral AI's first open-weight code generation model, explicitly trained on 80+ programming languages; fill-in-the-middle (FIM) support; released May 29 2024; 32K context window; open under Mistral AI Non-Production License (MNLP-0.1) for research/testing, commercial license available on demand.
- **Provider / access:** Mistral AI `api.mistral.ai` (Chat Completions / completions API), dedicated `codestral.mistral.ai` FIM/instruct endpoint; open weights downloadable from Hugging Face `mistralai/Codestral-22B-v0.1` (MNLP license).
- **Release / knowledge:** Released 2024-05-29; knowledge cutoff not stated by vendor.
- **IDs:** `mistralai/Codestral-22B-v0.1` (HF), `codestral` (Mistral API), `opencode/codestral` (OpenCode Zen route).
- **Context window:** 32K total tokens (Mistral AI launch blog — larger than 4K/8K/16K competitors at launch).
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning via instruction following; tool calls supported via instruct endpoint; FIM for code completion; JSON mode not explicitly advertised.
- **Pricing (as of 2026-11-06):** Not publicly published by Mistral for Codestral specifically; beta free during 8-week launch waitlist (expired); commercial license on demand. Open weights self-host effectively $0 under MNLP.
- **Architecture:** 22B parameters total (HF model card, BF16); dense transformer trained on 80+ programming languages including Python, Java, C, C++, JavaScript, Bash, Swift, Fortran.

### Raw benchmarks found

No comprehensive verified public benchmark suite found beyond one third-party measurement. All figures cited below are vendor-reported unless noted independent.

Agent / tool use:

- LiveSQLBench Text-to-SQL: **12.5%** success rate; average cost per task $0.0045; rank 30/26 models sampled (BenchmarkList / livesqlbench.ai, sampled May 6 2026 — independent third-party measurement).

Reasoning / knowledge:

- HumanEval pass@1 (Python): vendor-reported via Mistral launch blog (exact % not isolated in public page; chart-based comparison only).
- MBPP sanitised pass@1: vendor-reported (exact % not isolated).
- CruxEval Python output prediction: vendor-reported (no public %).
- RepoBench EM (long-range repository-level code completion): vendor-reported — Codestral outperforms other code-specific models (no isolated %).
- Spider SQL benchmark: vendor-reported (no isolated %).

Coding:

- HumanEval pass@1 across C++, bash, Java, PHP, TypeScript, C#: vendor-reported average (no isolated %).
- Fill-in-the-middle HumanEval pass@1 (Python, JavaScript, Java): vendor-reported vs DeepSeek Coder 33B (no isolated %).

Long context:

- Declared 32K context window; no public needle-recall curve at 32K found.

### Conflicting results noted

- Only one independent third-party benchmark (LiveSQLBench 12.5%) was located; all other figures are vendor-reported from the Mistral AI launch blog and cannot be independently verified at research date.
- HumanEval/MBPP/RepoBench percentages are chart-based in the launch post and not stated as exact numbers in text.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** One independent measurement (LiveSQLBench 12.5%, rank ~30/26); no Terminal-Bench/Tau3/GDPval found; capped by sparse independent verification and single narrow SQL-only measurement.
- **Reasoning: 45/100.** Vendor-reported code-generation strength on HumanEval/MBPP/CruxEval/RepoBench but no isolated public percentages; no GPQA/HLE/LCR/CritPt/Intelligence Index found; capped by absence of generalist reasoning evidence.
- **Context window: 55/100.** Declared 32K total (verified via launch blog); below the 100K–200K band that scores 50–64 per tier mapping; no retrieval curve to confirm effective limit.
- **Multimodal: 15/100.** Text in / text out only — NOT multimodal.
- **Coding: 60/100.** Vendor-claimed code-specialist (HumanEval/MBPP/RepoBench/Spider/FIM across 80+ languages); 22B parameter count is modest; capped by no independent SWE-Bench/DeepSWE/LiveCodeBench/SciCode numbers and single weak independent SQL measurement (12.5%).
- **Cost efficiency: 95/100.** Open weights under MNLP — self-host effectively $0; API pricing not published; capped slightly by lack of published per-token pricing. Not counted toward Overall.
- **Overall Score: 43/100.** Half-up mean of (40 + 45 + 55 + 15 + 60) / 5 = 43.0 → 43. Best-fit recommendation: niche open-weight code model for self-hosted FIM/completion workloads; treat vendor launch figures as unverified pending independent benchmarking.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-06
- Method: public internet research (Mistral AI official blog, Hugging Face model card, BenchmarkList LiveSQLBench profile); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Introducing Codestral](https://mistral.ai/news/codestral/)
  - [Hugging Face — mistralai/Codestral-22B-v0.1 model card](https://huggingface.co/mistralai/Codestral-22B-v0.1)
  - [BenchmarkList — Codestral 22B LiveSQLBench](https://benchmarklist.com/models/codestral-22b)
- Future sources: add a new file next to this one, using the same headings.
