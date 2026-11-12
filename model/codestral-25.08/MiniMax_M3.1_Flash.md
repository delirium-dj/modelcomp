# Codestral 25.08 — findings by MiniMax M3.1 Flash

- Source: Mistral (codestral-2508, GA Premier, July 2025)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral's GA code-completion model for IDE autocomplete, fill-in-the-middle and chat-mode coding assistance, released 2025-07-30 as the current hosted "Codestral". It is the successor to Codestral 25.01 and the retired Codestral 24.05, and it is a distinct checkpoint from the `codestral` folder entry.
- **Provider / access:** Mistral La Plateforme (`codestral-2508`, Chat Completions, Conversations, batch and FIM endpoints), OpenRouter, plus VPC and on-prem deployment according to Mistral. Not present in the OpenCode Zen catalog checked on 2026-11-12.
- **Release / knowledge:** Released 2025-07-30 (GA, Premier tier). Knowledge cutoff not publicly stated by Mistral.
- **IDs:** `codestral-2508` (API), `opencode/codestral-25.08` (comparison catalog id). No public Hugging Face weights repository for the 25.08 checkpoint was found.
- **Context window:** 128k per Mistral's model page ("Context 128k"). Third-party listings and this repository's model card claim 256,000 / 262,144, and Mistral's own Codestral 25.01 announcement table lists 256k for the earlier 25.01 checkpoint; the vendor's live model page was taken as authoritative (see the conflict section).
- **Modalities:** Text and code in, text and code out; reasoning not offered; structured outputs, function calling, predicted outputs, document QnA, prefix completion, batch processing.
- **Pricing (as of 2026-11-12):** $0.30 input / $0.90 output per 1M tokens on Mistral's model page.
- **Architecture:** Proprietary hosted checkpoint (GA, Premier tier). Vendor states it is deployable across cloud, VPC or on-prem environments with no architectural changes; the 22B dense parameter count often attached to this id belongs to the 24.05 checkpoint, not to 25.08.

### Raw benchmarks found

#### Agent / tool use

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| Terminal-Bench 2.1 / Tau3-Bench / GDPval-AA / Claw-Eval | no verified public score found | — | No agentic benchmark published for this checkpoint |
| Function calling, structured outputs, prefix completion | supported (feature list) | Mistral model page | No measured tool-use score exists |
| BenchLM profile | no profile published for this checkpoint | BenchLM | The slug is absent from BenchLM's model index |

#### Reasoning / knowledge

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| GPQA Diamond / HLE / LCR / CritPt / Intelligence Index | no verified public score found | — | Codestral 25.08 is a completion model; no reasoning suite was published |
| IF eval v8 (instruction following) | +5% versus the previous Codestral generation | Mistral announcement | Vendor-reported relative delta, no absolute score |

#### Coding

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| Accepted completions | +30% versus the previous Codestral generation | Mistral announcement | Vendor-reported, measured in live IDE usage on production codebases |
| Retained code after suggestion | +10% versus the previous Codestral generation | Mistral announcement | Vendor-reported relative delta |
| Runaway generations | 50% fewer than the previous generation | Mistral announcement | Vendor-reported relative delta |
| MultiplE (average, chat mode) | +5% versus the previous Codestral generation | Mistral announcement | Vendor-reported relative delta |
| HumanEval | 86.6% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table; belongs to the retired 25.01 checkpoint |
| MBPP | 80.2% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| CruxEval | 55.5% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| LiveCodeBench | 37.9% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| RepoBench | 38.0% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| Spider (SQL) | 66.5% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| CanItEdit | 50.5% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| HumanEvalFIM (average) | 85.9% for Codestral-2501 (not 25.08) | Mistral Codestral 25.01 announcement table | Nearest published absolute table |
| SWE-bench Verified / DeepSWE / Terminal-Bench / SciCode | no verified public score found | — | No repository-level or agentic suite published for 25.08 |

#### Long context

- No long-context retrieval measurement was published; the only long-context statement is the vendor claim of "improved performance on academic benchmarks for short and long-context FIM completion" with no absolute values, plus the documented 128k window.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Context window.** Mistral's live model page for `codestral-2508` states "Context 128k", while this repository's model card records 256,000 total and third-party benchmark listings quote 262,144 tokens. Mistral's own Codestral 25.01 announcement table also prints 256k in its context-length column, but for the different `codestral-2501` checkpoint, which shows how easily the two are conflated. Resolved by using the vendor's own per-checkpoint page (128k), because it is the only source that documents the 25.08 checkpoint itself.
- **HumanEval 86.6%.** Aggregator listings commonly attach 86.6% HumanEval to Codestral 25.08, but Mistral's published table shows 86.6% for Codestral-2501 (which is retired, retirement date 2025-11-30) and 81.1% for Codestral-2405. Resolved by refusing to credit 86.6% to 25.08: the 25.01 row is used only as a labelled proxy for the 25.08 generation, supported by Mistral's own statement that 25.08 adds about 5% on MultiplE.
- **Relative versus absolute evidence.** Mistral publishes only relative deltas for 25.08 (+30% accepted completions, +10% retained code, 50% fewer runaway generations, +5% IF eval v8, +5% MultiplE), while every absolute score in the public record belongs to older checkpoints. Resolved by scoring coding from the labelled 25.01 proxy plus the vendor deltas and capping the score, instead of inventing an absolute 25.08 figure.
- **Parameter count and modality.** Third-party listings describe `codestral-2508` as a 22B dense model. The 22B dense specification belongs to Codestral 24.05 (`codestral-2405`); the 25.08 model page states no parameter count. Resolved by leaving architecture unspecified for 25.08 and flagging the 22B figure as an inherited label.

### Notes on identity

- The `codestral-25.08` slug is Mistral's GA "Codestral" checkpoint `codestral-2508` released 2025-07-30. Mistral's model index shows this checkpoint as the active Codestral and marks both older checkpoints as retired: `codestral-2501` (retired 2025-11-30) and `codestral-2405` (retired 2025-06-16, replacement "Codestral").
- The bare `codestral` slug in this repository is the original Codestral 24.05 checkpoint (`codestral-2405`, 22B dense, MNPL-0.1, 32k context), which is scored separately in `../codestral/MiniMax_M3.1_Flash.md`. The two files must not be merged: 24.05 is a retired open-weight release, 25.08 is the current hosted GA release with a different context window, feature set and license posture.
- Codestral 25.08 has no public weights repository. The `mistralai/Codestral-22B-v0.1` Hugging Face card belongs to the 24.05 checkpoint and must not be cited as evidence for 25.08.

### Normalized scores (1–100)

- **Tool use: 28/100.** Function calling, structured outputs, prefix completion and document QnA are documented, but no Terminal-Bench, τ²-bench, GDPval-AA or Claw-Eval number exists for this checkpoint and no agents endpoint is listed, so the dimension is scored conservatively on capability rather than on measured agentic behavior.
- **Reasoning: 18/100.** No reasoning suite (GPQA, HLE, LCR, CritPt, Intelligence Index) was published for Codestral 25.08, and the model is explicitly a completion/chat model rather than a reasoner; only a +5% instruction-following delta on IF eval v8 is available, so the score reflects a near-baseline reasoning expectation with no positive evidence.
- **Context window: 56/100.** The documented 128k window falls in the 100K–200K tier (50–64), and no long-context retrieval measurement at 128k was published to justify moving up the tier.
- **Multimodal: 15/100.** Text and code in, text and code out only; no image, audio or video input is supported.
- **Coding: 52/100.** The nearest absolute table (Codestral 25.01) shows strong completion quality (HumanEval 86.6%, HumanEvalFIM 85.9%, MBPP 80.2%, Spider 66.5%) but modest repository-level and competitive-programming numbers (RepoBench 38.0%, LiveCodeBench 37.9%, CanItEdit 50.5%, CruxEval 55.5%), and Mistral's own 25.08 deltas (+5% MultiplE, +30% accepted completions) support a modest improvement over that proxy while no SWE-bench, DeepSWE or Terminal-Bench figure exists.
- **Cost efficiency: 94/100.** $0.30 input / $0.90 output per 1M sits just under the ~$0.60/$2.20 anchor (~92) on a per-token basis, with no published cache discount for this checkpoint.
- **Overall Score: 33.8/100.** Mean of the five quality dimensions (28 + 18 + 56 + 15 + 52 = 169 / 5). Best fit: a low-latency IDE completion engine with modest chat abilities, not a reasoning or autonomous-engineering model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Public internet research (Mistral model and lifecycle pages, the Codestral 25.08 and Codestral 25.01 announcements, OpenCode Zen model list); every number carries its source, and scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Codestral 25.08 model page (Mistral Docs)](https://docs.mistral.ai/models/codestral-25-08)
  - [Codestral 25.08 announcement (Mistral AI)](https://mistral.ai/news/codestral-25-08)
  - [Codestral 25.01 announcement with benchmark table (Mistral AI)](https://mistral.ai/news/codestral-2501)
  - [Mistral models overview and lifecycle table (Mistral Docs)](https://docs.mistral.ai/getting-started/models/models_overview/)
  - [OpenCode Zen model list (OpenCode docs)](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_R2.md`, using the same headings.
