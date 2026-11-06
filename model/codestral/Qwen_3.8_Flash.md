# Codestral — findings by Qwen 3.8 Flash

- Source: Mistral AI (original `codestral-2405`, curated id `opencode/codestral`), cross-checked against Mistral's Codestral launch post and the Codestral 25.01 comparison table (which re-reports the 24.05 baselines)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity / conflation note:** the curated `meta.json` is a **scaffolded placeholder** ("128K / Text in-out / Standard pricing"). This folder is scored as the **original Codestral** (`codestral-2405`, launched 2024-05-29) — a distinct 22B / **32K-context** release that started the family, **not** the dated `codestral-25.08` sibling (which has its own folder and report). **Caveat for the orchestrator:** Mistral's live `codestral` / `codestral-latest` API alias now resolves to the 25.08 refresh, so the bare `codestral` slug risks alias conflation with `codestral-25.08`; kept separate here on the original-release reading, flagged for a possible merge/redirect decision.

## Model card

- **Name:** Codestral
- **Short description:** Mistral AI's **first dedicated code model** (launched 2024-05-29) — a lightweight ~22B model optimized for low-latency, high-frequency **fill-in-the-middle (FIM)** completion, code correction and test generation across 80+ languages; SOTA FIM at its release.
- **Provider / access:** Mistral **La Plateforme** API (`codestral` / `codestral-2405`); source-available weights for self-hosting/VPC. Now superseded by Codestral 25.01 / 25.08.
- **Release / knowledge:** launched **2024-05-29**; knowledge cutoff not separately published.
- **IDs:** Mistral `codestral-2405`.
- **Context window:** **32K tokens** (per the Codestral 25.01 comparison table listing Codestral-2405 at 32k) — the scaffold's "128K" is overridden.
- **Modalities:** **text + code in; text out**; no image/audio/video; no native reasoning mode.
- **Pricing (as of 2026-11-06):** source-available weights (**Mistral Non-Production License**); this 2024 release is largely **deprecated/redirected** to `codestral-latest` — a current first-party price for `codestral-2405` specifically is not independently confirmed.
- **Architecture:** ~22B-parameter dense decoder with an 8K max FIM span, tuned for autocomplete.

### Raw benchmarks found

> Provenance: **all vendor-run** (Mistral's own tables; the 25.01 post re-publishes the 24.05 baselines). **No independent Artificial Analysis Intelligence Index row exists for this ID**, and the values are 2024-era — heavily outclassed in the late-2026 field.

Coding / completion:

- HumanEval: **81.1%** (vendor; Python pass@1, Codestral-2405)
- MBPP sanitised: **78.2%** (vendor)
- CruxEval-O: **51.3%** (vendor)
- LiveCodeBench: **31.5%** (vendor)
- HumanEval FIM pass@1 (avg): **91.8%** (vendor; its launch headline)

Reasoning / knowledge / agent / long context / multimodal:

- GPQA / HLE / MMLU-Pro / AA Index: **no verified public score found** (not a general-index model)
- Terminal-Bench / τ² / GDPval / MCP-Atlas: **no verified public score found** (not agentic)
- MRCR / RULER: **no long-context retrieval absolute** (32K window)
- MMMU-Pro / vision / audio: **not applicable** (text/code-only)

### Normalized scores (1–100)

- **Tool use: 35/100.** Function calling for IDE completion only; no autonomous/agentic tool use, and no verified agentic benchmark for the ID.
- **Reasoning: 42/100.** A no-reasoning-mode single-purpose coder with no general-reasoning leaderboard presence; modest multi-step capability.
- **Context window: 45/100.** **32K** was reasonable in 2024 but is small in the late-2026 field (where 128K–1M is common); no retrieval-quality proof.
- **Multimodal: 15/100.** **Text/code only** — no image/audio/video; the template's text-only floor.
- **Coding: 62/100.** SOTA FIM autocomplete at launch (HumanEval 81.1, FIM pass@1 91.8), but LiveCodeBench 31.5 and a 2024 single-shot design sit far below modern agentic coders; scores are vendor-only.
- **Cost efficiency: 88/100.** Very cheap/light to run (22B, source-available, low-latency), which was its main pitch — docked only because the exact ID is deprecated and a current first-party price is unconfirmed.
- **Overall Score: 39.8/100.** Half-up mean of the five quality dims (35+42+45+15+62)/5 = 39.8 (Cost excluded). Best fit historically: a **fast, cheap 2024-era FIM autocomplete**; today it is a superseded release, so the low bands reflect its age and single-purpose scope, all on vendor-only evidence.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-06
- Method: public internet research — Mistral "Codestral" launch post (2024-05-29) and the Codestral 25.01 comparison table that re-reports the Codestral-2405 baselines (HumanEval 81.1, MBPP 78.2, CruxEval 51.3, LiveCodeBench 31.5, FIM pass@1 91.8, 32K context). The scaffolded `meta.json` (128K/text/Standard) is overridden with first-party specs. **No independent AA Intelligence Index row exists for this ID**, so all numbers are vendor-only and flagged; this is the 2024 original kept distinct from the `codestral-25.08` sibling, with an alias-conflation caveat surfaced for the orchestrator. Scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [Mistral AI — Codestral (original launch)](https://mistral.ai/news/codestral/)
  - [Mistral AI — Codestral 25.01 (re-publishes Codestral-2405 baselines)](https://mistral.ai/news/codestral-2501/)
- Revisit trigger: Mistral confirming a still-live first-party `codestral-2405` endpoint with a published price, or an independent evaluator adding a same-harness row for the original ID; alternatively an orchestrator decision to merge/redirect this bare slug into `codestral-25.08`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
