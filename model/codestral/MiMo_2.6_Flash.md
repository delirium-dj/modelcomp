# Codestral — findings by MiMo 2.6 Flash

- Source: Mistral AI (`codestral-2405`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (original 24.05 release)
- **Short description:** Mistral's first code model — a 22B open-weight FIM/autocomplete specialist released 2024-05-29, trained on 80+ programming languages. **This folder scores the retired `codestral-2405` weights, not the live alias:** the bare `codestral` API ID now redirects to Codestral 25.08 (see the sibling `codestral-25.08` folder), so conflation risk is high.
- **Provider / access:** Mistral La Plateforme — `codestral-2405` on `api.mistral.ai` plus the dedicated `codestral.mistral.ai` endpoint (Chat Completions + FIM routes). **API retired 2025-06-16** (Mistral docs model card; replacement = `codestral-2508`), so hosted access no longer serves these weights. Self-hostable from Hugging Face (`mistralai/Codestral-22B-v0.1`, `mistral_inference`). No OpenCode Zen Free ID (`noFreeId: true` in this folder's `meta.json`).
- **Release / knowledge:** 2024-05-29 (Mistral announcement + docs card). Knowledge cutoff not published.
- **IDs:** `codestral-2405` (retired 2025-06-16), `mistralai/Codestral-22B-v0.1` (weights), `mistral/codestral` (models.dev row). The live `codestral-latest` alias resolves to Codestral 25.08.
- **Context window:** 32,768 total (32k, verified three ways: Mistral's original announcement figure "larger context window of 32k", the retired docs model card, and models.dev's `Codestral-22B-v0.1` row). Max output 8,192 (models.dev).
- **Modalities:** text + code in; text + code out; FIM (`/v1/fim/completions`), function calling in instruct mode (LangChain integration quoted in the announcement), no JSON-mode/structured-output guarantee documented, no vision/audio. No reasoning mode; no moderation mechanism (HF model card limitation note).
- **Pricing (as of 2026-11-06):** API retired — no current price. Historical: ~$0.30 in / $0.90 out per 1M (models.dev `codestral-latest` row, same family pricing as 25.08), free during the 8-week launch beta on `codestral.mistral.ai`. Weights free to download under the Mistral AI Non-Production License (MNPL-0.1) — research/testing only, commercial use requires a separate license.
- **Architecture:** 22B dense (22B active, 52 GB bf16 / 26 GB fp4 per Mistral docs weights table), MNPL-0.1 license, tokenizer v3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Tool use: supported in instruct mode (LangChain quote in Mistral's announcement — self-corrective code generation with the instruct Codestral tool-use route) — capability claim only, no benchmark number.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (no independent AA row)
- CruxEval (Python output prediction): **51.3%** (Mistral, Codestral-2405 row of the Codestral 25.01 benchmark table)
- Benchable-style general-knowledge battery: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- HumanEval (Python pass@1): **81.1%** (Mistral benchmark table, Codestral-2405 22B row)
- MBPP sanitised: **78.2%** (Mistral)
- LiveCodeBench: **31.5%** (Mistral)
- RepoBench EM: **34.0%** (Mistral); the original announcement claims Codestral "outperforms all other models in RepoBench" vs 4k/8k/16k-context competitors (qualitative, figure only)
- Spider (SQL): **63.5%** (Mistral)
- CanItEdit: **50.5%** (Mistral, tied best in table)
- HumanEval average across 7 languages (Py/C++/Java/JS/Bash/TS/C#): **65.6%** (Mistral; per-language 81.1 / 68.9 / 78.5 / 71.4 / 40.5 / 74.8 / 43.7)
- HumanEvalFIM pass@1 average: **91.8%** (Mistral; single-line exact-match average 82.07%) — SOTA-FIM claim at launch (May 2024); by the time of Mistral's Jan-2025 table it trailed DeepSeek Chat API (94.4%), OpenAI's FIM API (92.7%) and its own successor 25.01 (95.3%) on pass@1
- Kotlin-HumanEval: **73.75%** at T=0.2 (JetBrains, quoted in Mistral's announcement; GPT-4-Turbo 72.05, GPT-3.5-Turbo 54.66)

Long context:

- No long-context retrieval benchmark reported; the 32k window itself was the headline ("larger context window of 32k compared to 4k, 8k or 16k for competitors", Mistral announcement).

### Normalized scores (1–100)

- **Tool use: 38/100.** Instruct-mode function calling exists (LangChain quote in the vendor announcement), but there is no agentic benchmark of any kind (Terminal-Bench/Tau3/GDPval/Claw-Eval all absent) and the API has been retired since 2025-06-16 — capability claim without evidence caps it in the high 30s.
- **Reasoning: 35/100.** No GPQA/HLE/AA-Index row; only code-adjacent evals exist (CruxEval 51.3%, MBPP 78.2%), and the model has no reasoning mode — a pure completion engine.
- **Context window: 25/100.** 32k verified (docs card + announcement + models.dev) falls in the "<100K scales down to 10–49" band; 8,192 max output noted as a caveat.
- **Multimodal: 15/100.** Text/code in, text/code out only — text-only tier per methodology.
- **Coding: 55/100.** Real measured strengths for its era — HumanEval 81.1%, FIM pass@1 91.8%, RepoBench/Spider/CanItEdit mid-table, JetBrains Kotlin-HumanEval 73.75 beating GPT-4-Turbo — but LiveCodeBench 31.5% is far below 2026 coders, the model is superseded twice over (25.01, then 25.08), and there is no SWE-bench/agentic evidence at all.
- **Cost efficiency: 90/100.** API retired (no current paid price to score); historically $0.30/$0.90 put it in the cheap tier, weights are free to self-host, but MNPL restricts use to research/testing so production cost is effectively "contact sales".
- **Overall Score: 34/100.** Mean of Tool 38 + Reasoning 35 + Context 25 + Multimodal 15 + Coding 55 = 168/5 = 33.6 → 34. Best fit: historical reference point / free self-hosted autocomplete experiment — new integrations should use `codestral-2508` (folder `codestral-25.08`), which the retired API ID now redirects to.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-11-06
- Method: public internet research (vendor announcements + retired model card + weights card + model catalogs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral — Codestral announcement (2024-05-29, 22B / 32k / MNPL / JetBrains quote)](https://mistral.ai/news/codestral/)
  - [Mistral docs — Codestral 24.05 model card (retired 2025-06-16, 32k, weights table)](https://docs.mistral.ai/models/codestral-24-05)
  - [Mistral — Codestral 25.01 announcement (official benchmark table incl. Codestral-2405 rows: HumanEval 81.1, LiveCodeBench 31.5, FIM pass@1 91.8)](https://mistral.ai/news/codestral-2501/)
  - [Hugging Face — mistralai/Codestral-22B-v0.1 (weights, 22B, MNPL license, FIM usage)](https://huggingface.co/mistralai/Codestral-22B-v0.1)
  - [Models.dev — Codestral (latest) / Codestral-22B-v0.1 rows (context, output limits, pricing)](https://models.dev/models/mistral/codestral-latest)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
