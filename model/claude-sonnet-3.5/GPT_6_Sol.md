# Claude Sonnet 3.5 (October 2024) — findings by GPT 6 Sol

- Source: Anthropic (`claude-3-5-sonnet-20241022`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (October 2024 update).
- **Short description:** Anthropic's upgraded Claude 3.5 Sonnet, historically influential in software engineering and early screenshot-based computer use. The [October 22 checkpoint](https://www.anthropic.com/news/3-5-models-and-computer-use) is **not** the earlier June `claude-3-5-sonnet-20240620`; both are now retired on Anthropic's API ([deprecation record](https://platform.claude.com/docs/en/about-claude/model-deprecations)).
- **Provider / access:** Historical Anthropic Messages API ID `claude-3-5-sonnet-20241022`, formerly also AWS Bedrock/Vertex AI. **Retired October 28, 2025 on Anthropic-operated platforms**, so requests to that endpoint fail now; partner-operated cloud schedules can differ. Do not advertise a working direct API or an unconditional free tier ([Anthropic deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)).
- **Release / knowledge:** Upgraded checkpoint announced **October 22, 2024**; Anthropic's [October model-card addendum](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf) says **April 2024** knowledge cutoff. The original Sonnet 3.5 appeared June 2024 and has different benchmark results.
- **IDs:** `claude-3-5-sonnet-20241022` (October); `claude-3-5-sonnet-20240620` is the earlier checkpoint, **not an alias** of the October weights. Proprietary model.
- **Context window:** **200,000 tokens** in the launch documentation ([Anthropic](https://www.anthropic.com/news/claude-3-5-sonnet)); do not confuse the context window with the separately imposed maximum output token setting.
- **Modalities:** Text and image/screenshot input; text output plus tool calls through the host application. Computer use is a **tool integration** around screenshot perception and cursor commands, not native video/audio generation ([Anthropic October announcement](https://www.anthropic.com/news/3-5-models-and-computer-use)).
- **Pricing (historical):** **$3 input / $15 output per million tokens** at launch, same as the June version ([Anthropic June pricing](https://www.anthropic.com/news/claude-3-5-sonnet), [October announcement](https://www.anthropic.com/news/3-5-models-and-computer-use)). Not a currently purchasable Anthropic API tariff for this retired ID.
- **Architecture:** Proprietary; parameter count and weight architecture undisclosed.

### Raw benchmarks found

- **Agent/tool use (October checkpoint, vendor):** [τ-bench pass^1 retail **69.2%**, airline **46.0%**](https://www.anthropic.com/news/3-5-models-and-computer-use), up from 62.6/36.0 for the June model; the two versions should not be pooled. Anthropic's screenshot-only [OSWorld **14.9%** at the normal interaction budget, **22.0%** with up to 50 steps](https://www.anthropic.com/news/3-5-models-and-computer-use). A longer budget is not a checkpoint improvement.
- **Reasoning:** Anthropic's [October card](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf) claims **GPQA Diamond 65.0% zero-shot CoT**, **MMLU-Pro 78.0%**, **MATH 78.3%**; independent [Epoch AI October-specific evaluation: GPQA Diamond **55.3%**, MATH Level 5 **57.0%**, OTIS AIME **8.5%**](https://aimap.page/en/benchmarks/model/claude-3-5-sonnet-october-2024/). Prompting, sample selection and suite definitions differ, so the 65.0 vs 55.3 gap is not an arithmetic inconsistency.
- **Coding:** Anthropic's [SWE-bench Verified **49.0%** with its own agent and **HumanEval 93.7%**](https://www.anthropic.com/news/3-5-models-and-computer-use). The [SWE-bench leaderboard compilation](https://aimap.page/en/benchmarks/model/claude-3-5-sonnet/) lists the October `claude-3-5-sonnet-20241022` with **63.4% AgentScope**, **62.8% EPAM AI/Run**, **62.2% CodeStory**, and lower scores under other agents; **63.4 is agent+harness performance, not an intrinsic bare-model pass rate**. Independent official LiveCodeBench dated subset of 182 problems reports **34.8%** for the explicitly October-labeled model ([same compilation](https://aimap.page/en/benchmarks/model/claude-3-5-sonnet/)).
- **Long context:** 200K advertised; no October-specific independent end-of-window needle/MRCR retrieval result verified. Avoid reusing June measurements or treating the whole allowance as guaranteed perfect recall.
- **Vision:** [LMArena Vision **1161** on 10,374 votes](https://aimap.page/en/benchmarks/model/claude-3-5-sonnet/) specifically labels the October checkpoint; this is an Elo-style preference rating, **not** percentage accuracy. Historical OSWorld 14.9% is a computer-use result, not general VQA.

### Normalized scores (1–100)

- **Tool use: 72/100.** Historically strong τ-bench and multiple coding-agent runs, tempered by 14.9% screenshot OSWorld and endpoint retirement.
- **Reasoning: 72/100.** Vendor GPQA 65.0 versus independent 55.3, with modern hard-math and HLE limits.
- **Context window: 68/100.** 200K allowance without confirmed near-cap October retrieval.
- **Multimodal: 65/100.** Image/screenshot input and sizable vision preference data, but no native audio/video I/O.
- **Coding: 75/100.** Vendor SWE 49 and independent agent-harness 62–63, qualified by 34.8 LiveCodeBench and differing scaffolds.
- **Cost efficiency: 25/100.** $3/$15 was costly by modern standards and the direct API ID is retired.
- **Overall Score: 70/100.** Half-up mean (72 + 72 + 68 + 65 + 75) / 5 = 70.4; archival assessment of the October checkpoint rather than a claim of current availability.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three fresh version, independent-evaluation and lifecycle web searches; October ID separated from June results. Vendor agent scaffolds compared with independent checkpoint-labeled scores; historical pricing and API retirement called out. Scores are normalized judgments.
- Reference URLs:
  - [Anthropic October 2024 release and computer-use/agent benchmarks](https://www.anthropic.com/news/3-5-models-and-computer-use)
  - [Anthropic October model-card addendum](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf)
  - [Anthropic model deprecations and exact retirement date](https://platform.claude.com/docs/en/about-claude/model-deprecations)
  - [Epoch AI October-checkpoint independent metrics, source-linked](https://aimap.page/en/benchmarks/model/claude-3-5-sonnet-october-2024/)
  - [SWE-bench, LiveCodeBench and LMArena checkpoint-specific results](https://aimap.page/en/benchmarks/model/claude-3-5-sonnet/)
- Future sources: add a new file next to this one using the same headings.
