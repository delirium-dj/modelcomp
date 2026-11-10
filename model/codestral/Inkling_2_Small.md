# Codestral — findings by Inkling 2 Small

- Source: Mistral AI (`codestral-latest`; original `codestral-2405`; Zen route `opencode/codestral`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (the original 22B; the `codestral-latest` alias now routes to Codestral 25.08)
- **Short description:** Mistral's first code-specialized model — a 22B dense decoder with native fill-in-the-middle pre-training for IDE autocomplete across 80+ languages. Note: the API alias `codestral-latest` now points at the newer Codestral 25.08; the open weights frozen on Hugging Face / Ollama are v0.1 (May 2024) and the hosted `codestral-2405` was retired 2025-06-16.
- **Provider / access:** Mistral La Plateforme (`codestral-latest` / `codestral-2508`) and dedicated FIM endpoint (`/v1/fim/completions`); OpenCode Zen (`opencode/codestral`); open weights (`mistralai/Codestral-22B-v0.1`, Mistral Non-Production License — non-commercial without agreement); chat completions + FIM.
- **Release / knowledge:** Codestral 22B v0.1 — May 29, 2024; successor Codestral 25.01 (Jan 2025), then 25.08 (Jul 2025). Knowledge cutoff not reported.
- **IDs:** `codestral-2405` (retired), `codestral-latest` (→ 25.08), `opencode/codestral` (Zen)
- **Context window:** 32,768 native (v0.1); 256K on Codestral 25.01 / 128K on 25.08 via API — 32K is the v0.1 ceiling
- **Modalities:** Text (code) in; text (code) out; reasoning no; function calling added in later releases (v0.1: none); FIM native; JSON/structured outputs on API
- **Pricing (as of 2026-11-10):** $0.30 / $0.90 per 1M input/output (cached $0.03) via Mistral API; weights downloadable (MNPL — research/personal use only; commercial requires license@mistral.ai)
- **Architecture:** Dense decoder-only Transformer, 22.2B params; RoPE; causal LM + FIM pre-training objective; bf16 (~46 GB) / Q4 (~13 GB VRAM); MNPL license

### Raw benchmarks found

Agent / tool use:

- Function calling: not present in v0.1 (added in 25.x releases) — no verified public agentic score found
- RepoBench EM (v0.1, Mistral launch): **34.0%** — best at launch; repository-level code completion (Mistral comparison)

Reasoning / knowledge:

- GPQA Diamond / MMLU-Pro / AIME: no verified public score found for this model

Coding:

- HumanEval pass@1 (v0.1): **81.1%** — vs DeepSeek Coder 33B 77.4%, Code Llama 70B 67.1%, Llama 3 70B 76.2% (Mistral launch comparison; ChatForest review)
- MBPP pass@1 (v0.1): **78.2%** (vs DeepSeek Coder 33B 80.2% — loss)
- CruxEval-O (v0.1): **51.3%** — vs Code Llama 70B 47.3%, DeepSeek Coder 33B 49.5%, Llama 3 70B 26.0%
- SWE-bench / LiveCodeBench: no verified public score found

Long context:

- RepoBench 34.0% is the closest long-context-adjacent signal (32K); no MRCR/RULER measurement

### Normalized scores (1–100)

- **Tool use: 40/100.** v0.1 predates function calling; the current API alias routes to 25.08 which does support it — but no agentic benchmark exists for either; scored for the completion-first design.
- **Reasoning: 34/100.** No GPQA/HLE/MMLU-Pro; a pure code-completion specialist — knowledge reasoning out of scope.
- **Context window: 48/100.** 32K v0.1 native (now 128K/256K on the 25.x API line); RepoBench 34.0% evidences usable 32K retrieval; scored on the v0.1 profile with the alias caveat.
- **Multimodal: 15/100.** Text/code only — floor per methodology.
- **Coding: 62/100.** HumanEval 81.1% / CruxEval-O 51.3% / MBPP 78.2% — genuinely strong FIM code specialist for its 2024 cohort; no SWE-bench-class verification ever published.
- **Cost efficiency: 84/100.** $0.30/$0.90; open weights for research use; MNPL blocks commercial self-hosting without agreement.
- **Overall Score: 40/100.** Mean of (40 + 34 + 48 + 15 + 62) / 5 = 199/5 = 39.8 → 40. A legacy FIM specialist: meaningful for IDE autocomplete in 2024 terms; superseded by Codestral 25.08 — treat `codestral-latest` as 25.08-class, not v0.1-class.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (Mistral launch figures, independent reviews); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: historical baseline / research on FIM; for production use today pick Codestral 25.08 or a current agentic coder.
- Reference URLs:
  - [ChatForest — Mistral Codestral review (HumanEval 81.1%, MBPP 78.2%, CruxEval-O 51.3%, RepoBench 34.0%)](https://chatforest.com/reviews/mistral-codestral-22b-code-fill-in-the-middle-llm-review/)
  - [Mistral AI — Codestral 25.08 announcement (current `codestral-latest`)](https://mistral.ai/news/codestral-25-08/)
  - [Mistral Docs — Codestral (current model page)](https://docs.mistral.ai/models/codestral-25-08)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
