# Codestral — findings by MiniMax M3.1 Flash

- Source: Mistral (mistralai/Codestral-22B-v0.1, Codestral 24.05)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 24.05 (first Codestral release)
- **Short description:** Mistral's first open-weight code model — a 22B dense model for low-latency code completion and fill-in-the-middle — released 2024-05-29 under the Mistral Non-Production License. It is retired from Mistral's hosted API (retirement date 2025-06-16, replacement "Codestral"), and it is a different checkpoint from the `codestral-25.08` folder entry.
- **Provider / access:** Retired from Mistral La Plateforme (use the current Codestral for new integrations). Remaining access is self-hosted inference of the `mistralai/Codestral-22B-v0.1` weights via `mistral-inference`, `mistral_common` tokenizers, vLLM or Transformers, with FIM and instruct prompting. Not present in the OpenCode Zen catalog checked on 2026-11-12.
- **Release / knowledge:** Released 2024-05-29; retired 2025-06-16. Knowledge cutoff not publicly stated by Mistral.
- **IDs:** `mistralai/Codestral-22B-v0.1` (weights), `codestral-2405` (Mistral API id, now retired), `opencode/codestral` (comparison catalog id).
- **Context window:** 32k total; Mistral's model page lists "Context 32k" and a weights table entry of "Context Size (tokens) 32k". No maximum-output figure was published.
- **Modalities:** Text and code in, text and code out; no reasoning mode, no image or audio, no JSON/structured-output mode documented, and no function-calling feature in the 24.05 feature set.
- **Pricing (as of 2026-11-12):** The hosted checkpoint is retired; the $0.30 input / $0.90 output per 1M point (with $0.03 cached input) in this repository's model card is the current Mistral Codestral service price, while self-hosting the MNPL-licensed weights carries no per-token charge but requires the hardware.
- **Architecture:** 22B dense (22B total, 22B active), released under the Mistral Non-Production License (MNPL-0.1); Mistral's model page lists roughly 26–52 GB of GPU RAM at bf16/fp4.

### Raw benchmarks found

#### Agent / tool use

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| Terminal-Bench 2.1 / Tau3-Bench / GDPval-AA / Claw-Eval | no verified public score found | — | No agentic benchmark was published for this checkpoint |
| Function calling / tool use | not supported in the documented 24.05 feature set | Mistral model page | The 24.05 feature list is empty; tool support arrives with later Codestral checkpoints |

#### Reasoning / knowledge

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| GPQA Diamond / HLE / LCR / CritPt / Intelligence Index | no verified public score found | — | No reasoning suite published for Codestral 24.05 |
| BenchLM profile | no profile published for this checkpoint | BenchLM | The slug is absent from BenchLM's model index |

#### Coding

| Benchmark | Value | Source | Notes |
|-----------|-------|--------|-------|
| HumanEval | 81.1% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| MBPP (sanitised) | 78.2% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| CruxEval | 51.3% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| LiveCodeBench | 31.5% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| RepoBench | 34.0% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| Spider (SQL) | 63.5% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| CanItEdit | 50.5% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| HumanEval (multi-language average) | 65.6% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| HumanEvalFIM (average) | 82.1% | Mistral Codestral 25.01 announcement table | Vendor-reported row for Codestral-2405 22B |
| Kotlin-HumanEval pass rate at T=0.2 | 73.75 | Mistral launch announcement (JetBrains researcher quote) | Compared by JetBrains against GPT-4-Turbo 72.05 and GPT-3.5-Turbo 54.66 |
| RepoBench claim at launch | outperforms all compared models thanks to a 32k window versus 4k / 8k / 16k competitors | Mistral launch announcement | Vendor claim, no absolute value in the post |
| Programming languages covered | 80+ (Python, Java, C, C++, JavaScript, Bash, Swift, Fortran among them) | Mistral launch announcement and model card | Coverage claim, not a benchmark |
| SWE-bench Verified / DeepSWE / Terminal-Bench / SciCode | no verified public score found | — | No repository-level or agentic suite published for 24.05 |

#### Long context

- No long-context retrieval measurement was published. The launch post's RepoBench claim is a long-range completion comparison (32k window) without an absolute retrieval score.

#### Availability and caveats

| Item | Detail | Source | Notes |
|------|--------|--------|-------|
| Hosted status | retired from Mistral's API; retirement date 2025-06-16, replacement "Codestral" | Mistral model page and lifecycle table | New integrations must move to the current Codestral checkpoint |
| Weights | `mistralai/Codestral-22B-v0.1`, MNPL-0.1 licence, roughly 26–52 GB of GPU RAM at bf16/fp4 | Mistral model page and Hugging Face model card | Non-production licence restricts commercial deployment |
| Runtime | `mistral-inference`, `mistral_common` tokenizers, vLLM or Transformers; instruct and FIM prompt modes | Hugging Face model card | The model card recommends `mistral-inference` |
| Platform listing | absent from the OpenCode Zen model list checked on 2026-11-12 | OpenCode Zen docs | No hosted Codestral entry at all |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Which checkpoint "Codestral" means.** Mistral's model index now presents "Codestral" as the GA 25.08 checkpoint and lists 24.05 as a retired entry whose replacement is Codestral. This repository's bare `codestral` slug carries the 22B, 32k, MNPL description of the 24.05 release, so the two are scored separately rather than merged.
- **Context-window inheritance.** This repository's model card for the bare `codestral` slug mentions "32,768 total (extended to 128K on later checkpoints)". Mistral's own per-checkpoint pages confirm 32k for 24.05 and 128k for 25.01 and 25.08, so the bare slug is scored on its native 32k and the note about later checkpoints is recorded as a pointer to the separate 25.08 entry.
- **Benchmark source.** No independent leaderboard covers Codestral 24.05; the absolute numbers used here come from Mistral's own Codestral 25.01 announcement table, which is a vendor-published retrospective rather than a fresh independent run. Resolved by labelling every figure as vendor-reported, and by anchoring the coding score on the weaker of the published rows (LiveCodeBench 31.5%, RepoBench 34.0%) rather than on the strong HumanEval number.
- **Pricing.** The hosted checkpoint is retired, so the $0.30/$0.90 price in this repository's model card belongs to the current Codestral service, not to 24.05 itself; self-hosted MNPL inference is free per token. Resolved by scoring cost on the listed price point while stating the access caveat.

### Notes on identity

- The bare `codestral` slug is Codestral 24.05 (`codestral-2405`, weights `mistralai/Codestral-22B-v0.1`), released 2024-05-29 under MNPL-0.1 and retired from the hosted API on 2025-06-16. It is **not** the GA `codestral-2508` checkpoint scored in `../codestral-25.08/MiniMax_M3.1_Flash.md`, which has a 128k window, a different feature set (function calling, structured outputs, prefix) and a current hosted price.
- The model supports two prompt modes documented in its model card: instruct (explain, document, refactor a snippet) and fill-in-the-middle (predict the middle tokens between a prefix and a suffix).
- Codestral Mamba 7B (`open-codestral-mamba`) is a separate research release from the same family and is not scored here.

### Normalized scores (1–100)

- **Tool use: 12/100.** The documented 24.05 feature set contains no function calling, no agents endpoint and no tool-calling mode, and no agentic benchmark (Terminal-Bench, τ²-bench, GDPval-AA, Claw-Eval) was ever published for it, so the dimension sits near the text-completion floor.
- **Reasoning: 15/100.** No reasoning suite (GPQA, HLE, LCR, CritPt, Intelligence Index) exists for this checkpoint and the model is a completion specialist without a reasoning mode, so the score reflects the absence of any positive reasoning evidence.
- **Context window: 28/100.** A native 32k window sits in the below-100K band that scales down to 10–49; it was ahead of the 4k–16k competitors of its time, but no long-context retrieval measurement was published and the window is far short of modern standards.
- **Multimodal: 15/100.** Text and code in, text and code out only.
- **Coding: 48/100.** Completion quality is genuinely strong for 2024 (HumanEval 81.1%, HumanEvalFIM 82.1%, MBPP 78.2%, Spider 63.5%, Kotlin-HumanEval 73.75 at T=0.2) but the repository-level and competitive-programming rows are weak (RepoBench 34.0%, LiveCodeBench 31.5%, CanItEdit 50.5%, CruxEval 51.3%), and every figure is vendor-reported with no SWE-bench or Terminal-Bench evidence.
- **Cost efficiency: 94/100.** The listed $0.30 input / $0.90 output per 1M point (with $0.03 cached input) sits just under the ~$0.60/$2.20 anchor (~92), and self-hosted MNPL inference has no per-token charge; the caveat is that the hosted checkpoint itself is retired.
- **Overall Score: 23.6/100.** Mean of the five quality dimensions (12 + 15 + 28 + 15 + 48 = 118 / 5). Best fit: a fast local FIM and completion engine for IDE autocomplete and lightweight code editing, with no tool use, no reasoning and a narrow context window.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Public internet research (Mistral model and lifecycle pages, the Codestral launch announcement, the Codestral 25.01 announcement table, Hugging Face model card, OpenCode Zen model list); every number carries its source, and scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Codestral 24.05 model page (Mistral Docs)](https://docs.mistral.ai/models/codestral-24-05)
  - [Codestral launch announcement (Mistral AI)](https://mistral.ai/news/codestral/)
  - [Codestral 25.01 announcement with benchmark table (Mistral AI)](https://mistral.ai/news/codestral-2501)
  - [Codestral-22B-v0.1 model card (Hugging Face)](https://huggingface.co/mistralai/Codestral-22B-v0.1)
  - [Mistral models overview and lifecycle table (Mistral Docs)](https://docs.mistral.ai/getting-started/models/models_overview/)
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash_R2.md`, using the same headings.
