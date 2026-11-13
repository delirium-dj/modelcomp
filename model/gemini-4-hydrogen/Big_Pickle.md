# Gemini 4 Hydrogen — findings by Big Pickle

- Source: Google (`google/gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google DeepMind's high-efficiency Gemini 4 workhorse for everyday coding and agentic workflows (released 2026-11-12), adapted from Gemini 4 Carbon and positioned below Carbon/Argon on deep reasoning while roughly 2.5x faster than Gemini 3.8 Flash at its default thinking level.
- **Provider / access:** Gemini API / Google AI Studio as `gemini-4-hydrogen` (native `generateContent`, streaming; not an OpenAI-style Chat Completions or Responses endpoint), Google Cloud Vertex AI / Gemini Enterprise Agent Platform, Google Antigravity, Gemini app, Google Search, and Gemini in Google Sheets. Vendor-prefixed route: `google/gemini-4-hydrogen`.
- **Release / knowledge:** Released 2026-11-12; knowledge cutoff March 2026 per the model card (some domains less current).
- **IDs:** `gemini-4-hydrogen` (Gemini API / AI Studio model code); `google/gemini-4-hydrogen` (aggregator route). Free tier exists on the Gemini API; there is no OpenCode Zen Free ID (`noFreeId: true` in `meta.json`).
- **Context window:** 1,048,576 tokens unified input+output; max output 65,536 tokens default synchronous, expandable to 1,048,576 tokens via background long decode (verified against AI Studio model docs and the model card, which states "1M unified context window with up to 64K default synchronous output tokens / up to 1M via background long decode").
- **Modalities:** Text, image, audio, video, and PDF input; text (including code and structured JSON) output. Reasoning with four thinking levels (`low`, `medium`, `high` default, `xhigh`); function calling, structured outputs, code execution, computer use, file search, URL context, Google Search and Google Maps grounding supported. No image/audio generation and no Live API support.
- **Pricing (as of 2026-11-13):** $1.50 per 1M input / $7.50 per 1M output, flat across the full 1M window; implicit context-cache read $0.075 per 1M (95% discount, explicit caching unsupported); Batch and Flex 50% off ($0.75 / $3.75); Priority $2.70 / $13.50; free tier available but prompts are used to improve Google's products (paid tier is not).
- **Architecture:** Proprietary; adapted from Gemini 4 Carbon per the model card. Google does not disclose parameter count or MoE configuration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1 (**cheating-adjusted**): **57.0%** pass@1 (Google model card, Nov 2026; Claude Sonnet 5.5 63.9%; GPT-6.1 Terra not reported).
- AutomationBench-AA (**agentic SaaS workflows**): **76.1%** (Google model card; Claude Sonnet 5.5 71.8%, GPT-6.1 Terra 60.2%).
- Agents' Last Exam v1.1 (**end-to-end professional workflows**): **71.6%** (Google model card; Claude Sonnet 5.5 60.4%, GPT-6.1 Terra 69.8%).
- OSWorld-2.1 (**computer use, offline subset**): **77.6%** (Google model card; Claude Sonnet 5.5 83.9%, GPT-6.1 Terra 74.2%).
- Vending-Bench 2 (**long-horizon agentic business, bank balance**): **$14,549** (Google model card; Claude Sonnet 5.5 $11,165, GPT-6.1 Terra $9,107).
- Agent Arena live leaderboard: **#5 overall** (Google launch post, 2026-11-12; arena.ai).
- Vals Tax Agent Bench: **52.3%, #1 overall**; Vals Legal Research Bench: **55.8%, tied #1** (Google launch post, 2026-11-12).
- Terminal-Bench 4.0 (**Artificial Analysis independent run, mini-swe-agent harness**): public chart does not expose a text value for Hydrogen; AA's Intelligence Index (which weights TB4.0) reports 54. Public top-3 on TB4.0: Kimi K3.1 Pro 67.2%, Gemini 4 Carbon 65.2%, Claude Sonnet 5.5 63.6%.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0.1: **54 at `xhigh` (#16 of 78 models)** and **51 at the default `high` level** (Artificial Analysis model page; Google's launch post independently states 51 vs Gemini 4 Argon's 50, reaching 54 at `xhigh`).
- HLE-Diamond: **58.8%** (Google model card; Claude Sonnet 5.5 53.3%, GPT-6.1 Terra 47.3%).
- Terminal-Bench-Science 0.1: **51.4%** (Google model card; Claude Sonnet 5.5 59.9%, GPT-6.1 Terra 58.3%).
- GPQA Diamond, MMLU-Pro, CritPt v2, and AA-Omniscience accuracy/hallucination rate: no verified public score found for this exact model as of 2026-11-13.
- Vendor internal claims (not independently verified, not scored): 96.7% agent-honesty rate, 12x fewer misaligned actions/shortcuts, 2.3x more resilient on Gray Swan IPI, 99.9% chain-of-thought legibility, under 0.4% false refusals on HealthBench Pro, and more than 5x fewer fabricated claims vs Gemini 3.8 Flash.

Coding:

- SWE-sweep: **13.5%** (Google model card; Claude Sonnet 5.5 3.1%, GPT-6.1 Terra 5.8%) — a deliberately hard benchmark where low absolute scores still encode a 2-4x lead over class rivals.
- Terminal-Bench 4.1: **57.0%** (cheating-adjusted) — also counted under tool use; Google claims more than tripling Gemini 3.8 Flash's 18.2%.
- FrontierCode-AA 2.0 (**agentic repo edits graded on mergeability**): included in the AA Intelligence Index, but AA's public chart does not expose a per-model value; the benchmark's top score is Claude Fable 5.2 at 49.1%.
- SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench: no verified public score found.
- Vendor/partner claims (not scored): 12-23% lower token usage and 2x-2.8x faster on complex enterprise code/data workflows vs 3.8 Flash; Antigravity Orchestrator pairing Carbon + Hydrogen reaches near-Carbon Terminal-Bench 4.0 success with 24% less quota and 19% faster completion.

Long context:

- 1,048,576-token unified window with 1,048,576-token long-decode output ceiling (default 65,536 synchronous).
- No MRCR, RULER, or AA-LCR retrieval score published for this model; AA reports only the 1M window.
- Visual-document evidence: MKA (Multimodal Knowledge Agent, visually dense project files) **53.4%** and Chartography **66.6%**, both class-leading on the Google model card (Claude Sonnet 5.5 52.0% / 61.6%, GPT-6.1 Terra 43.8% / 63.2%).

Conflicting evidence & notes:

- **Speed vs. measured latency:** Google markets ~2.5x faster generation than 3.8 Flash at `high`, but Artificial Analysis measures 188 tok/s output speed, 40.55s time-to-first-answer-token, and 13.7 minutes per Intelligence Index task at `xhigh` — slower than the comparable-model median (13.0 min) and mid-pack on cost per task ($3.16). The speed claim is workload- and thinking-level-dependent, not a universal latency win.
- **Verbosity:** AA logs 304M output tokens on the Intelligence Index, ranking 76th of 77 models on token use. Cheap per token does not mean cheap per task.
- **Thinking-level sensitivity:** `high`/`xhigh` carry the launch benchmarks; lower levels trade capability for latency, so scores here reflect the default-high-to-xhigh range.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 4.1 at 57.0% trails Claude Sonnet 5.5 by about 7 points, but AutomationBench-AA 76.1% and Agents' Last Exam 71.6% lead the comparison class, OSWorld-2.1 is a solid 77.6%, and Vals ranks it #1 on Tax Agent and tied #1 on Legal Research; capped by the terminal-agent gap and the absence of Tau3-Banking/GDPval-AA numbers.
- **Reasoning: 87/100.** Artificial Analysis Intelligence Index 54 (#16/78) at `xhigh` and HLE-Diamond 58.8% are top-quintile, but the Index stays below the 60+ frontier reference band and Terminal-Bench-Science 0.1 (51.4%) trails both Sonnet 5.5 and GPT-6.1 Terra; no GPQA/CritPt evidence to push higher.
- **Context window: 97/100.** True 1,048,576-token unified window plus a 1,048,576-token long-decode output ceiling (65,536 synchronous default) — the ≥1M tier; capped at 97 rather than 100 because no ≥98%-retrieval-at-512K benchmark (MRCR/RULER/AA-LCR) is published, and explicit caching is unsupported.
- **Multimodal: 91/100.** Native text, image, audio, video, and PDF input with class-leading MKA (53.4%) and Chartography (66.6%) results and computer-use screenshots (OSWorld 77.6%); held at the low end of the 90-100 audio-input band because output is text-only and there is no image/audio/video generation.
- **Coding: 86/100.** SWE-sweep 13.5% vs 3.1%/5.8% for Sonnet 5.5/Terra shows a 2-4x edge on bug discovery and repair, TB4.1 57.0% confirms real terminal coding, and Google documents surgical multi-file edits plus 2x-2.8x faster iteration; capped by trailing Sonnet on TB4.1 and by the lack of SWE-bench Verified, SciCode, or LiveCodeBench numbers.
- **Cost efficiency: 80/100.** $1.50/$7.50 with a 95% implicit-cache discount, a free tier, and 50%-off Batch/Flex is strong mid-market value (AA blended $1.10 per 1M), but heavy verbosity (304M output tokens, 76th of 77) lifts real cost to $3.16 per AA index task and erodes the headline price advantage.
- **Overall Score: 89/100.** Mean of the five quality dimensions: (86 + 87 + 97 + 91 + 86) / 5 = 447 / 5 = 89.4 → **89**. A fast, 1M-context agentic executor that is best used as the high-throughput worker/verifier under a frontier planner or for everyday repo coding, not as the deepest-reasoning flagship.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-13
- Method: Public internet research against Google DeepMind's model card, the Gemini API model and pricing docs, Google's launch announcement, and Artificial Analysis's independent Intelligence Index, speed, token-use, and cost measurements; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 4 Hydrogen model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [Gemini 4 Hydrogen model card (PDF)](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-4-Hydrogen-Model-Card.pdf)
  - [Google — Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [Gemini API — Gemini 4 Hydrogen model docs](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [Gemini Developer API pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-4-hydrogen)
  - [Artificial Analysis — Gemini 4 Hydrogen (Xhigh)](https://artificialanalysis.ai/models/gemini-4-hydrogen)
  - [Terminal-Bench 4.0 leaderboard](https://www.tbench.ai/leaderboard/terminal-bench/4.0)
  - [Vals AI — Tax Agent Bench](https://www.vals.ai/benchmarks/tax_agent_bench)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
