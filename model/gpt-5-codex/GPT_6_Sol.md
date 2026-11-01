# GPT-5-Codex — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex.
- **Short description:** OpenAI's separately named GPT-5-derived model tuned for agentic software engineering in Codex. The `low`, `medium` and `high` reasoning settings are not separate model weights; do not conflate this ID with GPT-5.1-Codex or GPT-5.1-Codex-Max ([OpenAI exact-ID reference](https://developers.openai.com/api/docs/models/gpt-5-codex)).
- **Provider / access:** OpenAI **Responses API only**, model `gpt-5-codex` (`v1/responses`), not Chat Completions. The [official status is **Shut down**](https://developers.openai.com/api/docs/models/gpt-5-codex); old provider snapshots and leaderboard prices are archival, not a usable recommendation.
- **Release / knowledge:** September 2025 per [Vals release record](https://www.vals.ai/models/openai_gpt-5-codex); September 30, 2024 knowledge cutoff per [OpenAI](https://developers.openai.com/api/docs/models/gpt-5-codex).
- **IDs:** `openai/gpt-5-codex` (former API identifier); no open weights or distinct effort-tier model IDs.
- **Context window:** 400K combined, **272K maximum input**, **128K maximum output**. These are distinct limits ([OpenAI exact-model page](https://developers.openai.com/api/docs/models/gpt-5-codex)).
- **Modalities:** Text/image in, text out, function calling, structured outputs and search tools; no native audio/video listed. Reasoning supported ([OpenAI model page](https://developers.openai.com/api/docs/models/gpt-5-codex)).
- **Pricing (as of 2026-11-01):** Official archived $1.25 input / $0.125 cached input / $10 output per million tokens; **no current first-party API purchase** at this shut-down ID ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5-codex)).
- **Architecture:** Proprietary; size and weights undisclosed.

### Raw benchmarks found

- **Agent / tool use:** [Vals' September 2025 exact-ID evaluation retrospective](https://www.vals.ai/models/openai_gpt-5-codex) says **58.8% Terminal-Bench**, first in that contemporary run. Its update does **not** state the benchmark version, so do not label it 2.0, 2.1 or 4.0. The retrospective reports first place on SWE-bench Verified without a current exact numeric score on the model profile; do not invent one.
- **Coding:** [Vals LiveCodeBench **84.72% ±1.03** at high reasoning effort](https://www.vals.ai/models/openai_gpt-5-codex); [Fortytwo's independent RustEvo² **28%** and Rust hold-out **47%** for the explicitly identified `openai/gpt-5-codex`](https://huggingface.co/Fortytwo-Network/Strand-Rust-Coder-14B-v1/raw/main/README.md). The Rust benchmark is narrow and model-lab-reported, not a general coding index; results are not interchangeable.
- **Reasoning:** No verified exact-ID GPQA, HLE or AIME score found in reviewed primary/independent sources. LiveCodeBench is a coding proxy, not a general reasoning benchmark.
- **Long context:** 400K total/272K maximum input is specified, but no verified exact-ID MRCR/GraphWalks at that size; effective long-input retrieval remains unmeasured here.
- **Vision:** Text/image capability documented by OpenAI; no verified exact-ID MMMU-Pro/vision benchmark found. Do not transfer GPT-5 family vision percentages to this coding-tuned ID.

### Normalized scores (1–100)

- **Tool use: 74/100.** Archived independent Terminal-Bench 58.8 and native tools, tempered by unspecified benchmark revision and unavailable endpoint.
- **Reasoning: 70/100.** Coding-oriented reasoning supported but no independently measured exact-ID general knowledge test.
- **Context window: 75/100.** 400K combined/272K input, without near-limit accuracy evidence.
- **Multimodal: 64/100.** Images in and text out, but no exact-checkpoint vision score or audio/video.
- **Coding: 79/100.** Vals LCB 84.72 and Rust hold-out 47, while RustEvo² 28 shows domain and harness variance.
- **Cost efficiency: 49/100.** Official $1.25/$10 is an archival tariff and the first-party ID is shut down.
- **Overall Score: 72/100.** Half-up mean (74 + 70 + 75 + 64 + 79) / 5 = 72.4; historical coding-agent baseline, not a new API deployment choice.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three independent catalog, dataset and full-text searches; exact vendor API status cross-checked with Vals exact-ID scores and Rust domain evaluation. Scores are normalized judgments, not benchmark percentages.
- Reference URLs:
  - [OpenAI GPT-5-Codex exact-ID model, limits and shutdown](https://developers.openai.com/api/docs/models/gpt-5-codex)
  - [Vals exact-ID coding benchmark and historical terminal update](https://www.vals.ai/models/openai_gpt-5-codex)
  - [Fortytwo RustEvo² and Rust hold-out evaluation methodology](https://huggingface.co/Fortytwo-Network/Strand-Rust-Coder-14B-v1)
- Future sources: add a new file next to this one using the same headings.
