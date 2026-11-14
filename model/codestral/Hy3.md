# Codestral — findings by Hy3

- Source: Mistral AI, Codestral (base, 22B, 2024)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (base, 22B)
- **Short description:** Mistral's first code-generation model — 22B, 80+ programming languages, fill-in-the-middle (FIM) support, released 2024-05. Predecessor to the Codestral 25.08 line. Non-commercial (MNPL) license.
- **Provider / access:** Open weights on Hugging Face (MNPL license, non-commercial); Mistral la Plateforme (paid). FIM + Chat completions.
- **Release / knowledge:** Released 2024-05-29; knowledge cutoff not separately published.
- **IDs:** `mistralai/codestral` (base 22B).
- **Context window:** 32K tokens (4× Llama 3 70B at release).
- **Modalities:** Text in / text out; no image/audio; FIM completion supported.
- **Pricing (as of 2026-11-14):** La Plateforme ~$1/... per 1M (historical); open-weight but MNPL non-commercial restricts use.
- **Architecture:** 22B (Llama-derived), MNPL non-commercial license.

### Raw benchmarks found

Agent / tool use:

- No verified public agent/tool benchmark found for base Codestral.

Reasoning / knowledge:

- No GPQA / AIME published; coding-focused.

Coding:

- HumanEval (7 langs avg): near/over 90% (reported ~90% across Python/JS/Java FIM; avg 91.6 FIM).
- RepoBench (repo-level completion): strong for 2024.
- HumanEvalFIM: ~90% on Python/JS/Java.

Long context:

- 32K context (no MRCR/RULER score found).

### Normalized scores (1–100)

- **Tool use: 32/100.** Coding model, no agent/tool benchmark.
- **Reasoning: 36/100.** General reasoning not a focus.
- **Context window: 38/100.** 32K window → lower tier (2024 baseline).
- **Multimodal: 16/100.** Text-only.
- **Coding: 84/100.** Strong 2024 coding (HumanEval ~90%, 80+ langs, FIM) — held back only by being a 2024 narrow specialist.
- **Cost efficiency: 72/100.** Open weights but MNPL non-commercial limits; modest API price.
- **Overall Score: 41/100.** Mean of five non-cost dims = (32+36+38+16+84)/5 = 206/5 = 41.2 → 41. Best fit: self-hosted FIM code completion (non-commercial) at small scale.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Mistral 开源首个 22B 代码模型 — Baidu Baijiahao](https://baijiahao.baidu.com/s?id=1800462772243731346)
  - [Codestral 指南 2026 — UC Strategies](https://www.ucstrategies.com/news/?p=4727)
  - [最强开源编程大模型 Codestral — Tencent Cloud](https://cloud.tencent.com/developer/article/2424221)
