# GPT-5.4 Pro — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's higher-compute March 2026 GPT-5.4 variant for difficult professional research and reasoning; a separate API model from base `gpt-5.4` ([launch](https://openai.com/index/introducing-gpt-5-4/), [API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)).
- **Provider / access:** `gpt-5.4-pro` (snapshot `gpt-5.4-pro-2026-03-05`) on OpenAI's **Responses API only**, with background mode recommended for long requests. Chat Completions, Batch and fine-tuning are unavailable; no verified free Zen ID ([API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)).
- **Release / knowledge:** March 5, 2026; cutoff August 31, 2025 ([launch](https://openai.com/index/introducing-gpt-5-4/), [API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)).
- **IDs:** `openai/gpt-5.4-pro`, API `gpt-5.4-pro`; project metadata also names `opencode/gpt-5.4-pro`, but a currently free route was not verified.
- **Context window:** 1,050,000 combined / 128,000 output tokens ([API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)); long-context retrieval **has not been measured for the Pro variant** in the cited OpenAI table.
- **Modalities:** Text and image input → text output; reasoning medium/high/xhigh and Responses function calls, web/file search, computer use and MCP tools; no native audio/video in/out ([API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)).
- **Pricing (as of 2026-10-13):** OpenAI API **$30 input / $180 output per 1M**, no discounted cached-input price shown. Above 272K input, **2× input / 1.5× output for the whole session** ([API docs](https://developers.openai.com/api/docs/models/gpt-5.4-pro)); paid.
- **Architecture:** Proprietary; no public parameter count ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-pro)).

### Raw benchmarks found

OpenAI's [March launch table](https://openai.com/index/introducing-gpt-5-4/) reports xhigh in a research environment. Its Pro column contains **dashes** for SWE-bench Pro, Terminal-Bench, OSWorld, MMMU, MCP Atlas, Toolathlon, and long-context retrieval; the neighboring base-model numbers are **not** Pro measurements. [BenchLM](https://benchlm.ai/models/gpt-5-4-pro) attributes its sparse Pro benchmarks to OpenAI/ARC/Epoch; [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-pro) currently shows its Pro Intelligence Index as **N/A**, not a measured numeric score. Vals's guessed `openai_gpt-5.4-pro` page returned 404.

Agent / tool use:

- [OpenAI BrowseComp **89.3%**](https://openai.com/index/introducing-gpt-5-4/) with ChatGPT search tool/blocklist; [GDPval wins-or-ties **82.0%**, FinanceAgent v1.1 **61.5%**, internal investment-banking modeling **83.6%**](https://openai.com/index/introducing-gpt-5-4/). Not interchangeable with GDPval-AA Elo or later FinanceAgent v2.
- Pro Terminal-Bench 2.0, MCP Atlas, OSWorld-Verified, Tau2 and Toolathlon: **no verified public score found**; OpenAI publishes those only for base GPT-5.4 in this launch table.

Reasoning / knowledge:

- [OpenAI GPQA Diamond **94.4%**, HLE **42.7% without tools / 58.7% with tools**, Frontier Science Research **36.7%**, FrontierMath Tiers 1–3 **50.0%** and Tier 4 **38.0%**](https://openai.com/index/introducing-gpt-5-4/). [Epoch separately lists Tier 4 v2 **37.5%**](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard), a different leaderboard/version.
- [OpenAI ARC-AGI-1 Verified **94.5%**, ARC-AGI-2 Verified **83.3%**](https://openai.com/index/introducing-gpt-5-4/). [BenchLM attributes CritPt **30.0%** to AA](https://benchlm.ai/models/gpt-5-4-pro); AA's current Pro profile has no aggregate Index, so don't use its base-model aggregate as a Pro result.

Coding:

- SWE-bench Pro, Terminal-Bench 2.0, independent SWE Verified and LiveCodeBench for this **Pro** ID: **no verified public score found** ([OpenAI Pro column](https://openai.com/index/introducing-gpt-5-4/), [BenchLM coverage](https://benchlm.ai/models/gpt-5-4-pro)). The base model's **57.7% SWE-bench Pro / 75.1% Terminal-Bench 2.0** are only lineage context, not Pro scores.

Long context / vision:

- The 1.05M API allowance and image-input support are [documented](https://developers.openai.com/api/docs/models/gpt-5.4-pro); Pro-specific MRCR/Graphwalks/MMMU-Pro numeric scores: **no verified public score found**. The March launch's 1M Graphwalks and MMMU results are for base GPT-5.4, not Pro.

### Normalized scores (1–100)

- **Tool use: 72/100.** BrowseComp 89.3% and GDPval 82.0% show strong search/workflow ability, but no Pro-specific terminal, MCP or computer-use score supports extrapolating base GPT-5.4 performance.
- **Reasoning: 92/100.** GPQA 94.4%, ARC-AGI-2 83.3%, HLE 42.7–58.7% and Tier-4 math ~38% support expert reasoning; independent coverage remains sparse.
- **Context window: 93/100.** Documented 1.05M capacity and 128K output, discounted for the lack of Pro-specific full-window retrieval validation and >272K pricing uplift.
- **Multimodal: 66/100.** Text/image input and text output only; no Pro-specific visual benchmark, so no inference from base MMMU.
- **Coding: 68/100.** Reasoning/tool capability plausibly helps code, but missing Pro-specific SWE/terminal coding evidence mandates a conservative provisional score.
- **Cost efficiency: 16/100.** $30/$180, no published cache discount and long-context premium make ordinary tasks expensive.
- **Overall Score: 78/100.** (72 + 92 + 93 + 66 + 68) / 5 = 78.2, half-up 78; reserve for hard research/analysis where Pro's measured gains justify the price and verify code workflows separately.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh OpenAI model docs and original Pro-column evaluations, compared with BenchLM, Epoch and Artificial Analysis; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
