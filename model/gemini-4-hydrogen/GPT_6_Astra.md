# Gemini 4 Hydrogen — findings by GPT 6 Astra

- Source: Google DeepMind / `gemini-4-hydrogen`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's Gemini 4 execution-oriented model for everyday coding, tool workflows and multimodal knowledge work. It is adapted from Carbon, with its own API identity and evaluations; Carbon's scores are not transferred.
- **Provider / access:** Gemini API/AI Studio, Gemini for business, Gemini app, Search and Antigravity. Native Gemini API is documented; no separate Responses endpoint is assumed.
- **Release / knowledge:** Released **2026-11-12**; **March 2026** knowledge cutoff, per the [DeepMind model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/).
- **IDs:** Stable `gemini-4-hydrogen`. No Zen Free ID verified. Consumer free access uses automatic model selection; it is not an unrestricted free paid-API entitlement.
- **Context window:** **1,048,576 unified input/output tokens**; **65,536 default synchronous output**, up to the shared **1,048,576** limit with background long decode. [API specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen).
- **Modalities:** Text, image, audio, video and PDF input; text output. Code execution, computer use, function calling, search grounding and structured output; Low/Medium/High/Xhigh thinking. No native image/audio generation or Live API support.
- **Pricing (as of 2026-11-14):** Evaluated paid API: **$1.50 input / $7.50 output per 1M tokens**, flat across the full context window, according to [Google's launch article](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/). Cached-input and tool tariffs were not separately verified in this pass.
- **Architecture:** Proprietary Carbon-derived model; parameter count and exact architecture not established by the consulted Hydrogen documents.

### Raw benchmarks found

Primary sources: [model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/) and [evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-hydrogen). Highest thinking is used unless specified below; repeated trials are averaged, not converted to pass@k. Google distinguishes its own runs from evaluator-sourced rows.

Agent / tool use:

- AutomationBench-AA: **76.1%**, sourced by Google from Artificial Analysis.
- Agents' Last Exam **v1.1: 71.6%**, averaged rubric score; Google Antigravity CLI **1.4.8**, **122 tasks**, five-hour window, Oct-17 task version rather than the Oct-26 update.
- OSWorld **2.1: 77.6% partial score**, **82-task offline subset**, best of three runs, Google CUA harness. This is not binary complete-task success.
- Vending-Bench 2: **$14,549 final balance**, Andon Labs result reproduced by Google; currency is not a success percentage.
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw-Eval/ClawProBench and Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified public score found in these sources.

Reasoning / knowledge:

- HLE-Diamond: **58.8%**, sourced by Google from Artificial Analysis; not the older full HLE benchmark.
- Artificial Analysis Intelligence Index: **51 at High / 54 at Xhigh**, as reported in Google's launch post; configurations remain separate.
- GPQA Diamond, LCR/MLCR, CritPt and Omniscience accuracy/hallucination rate: no verified public score found in the consulted sources.
- Independent PlotlyDataAnalyticsBench: **43/43**, all passes manually checked, including **5/5 hidden-pattern tasks**, in Plotly Studio Embedded through OpenRouter; **one run**, **$6.36 total**, **32-second median per question**. [Plotly's own evaluation](https://plotly.com/blog/gemini-4-hydrogen-plotly-data-analytics-bench/).

Coding:

- Terminal-Bench **4.1: 57.0%**, cheating-adjusted average reward, **High** effort, mini-swe-agent vision harness, five attempts per task.
- SWE-sweep: **13.5%**, subtask-weighted reward, Antigravity CLI 1.4.8; not SWE-bench Verified or SWE-Pro.
- Terminal-Bench-Science **0.1: 51.4%**, mini-swe-agent vision, average reward over five attempts per task.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified exact-model public score found in these sources.

Long context:

- Official **1,048,576-token** shared capacity. No full-window MRCR/RULER/GraphWalks retrieval result found; Plotly's hidden-pattern tasks do not prove million-token retrieval.

Multimodal:

- MKA: **53.4%**, Climb WSR accuracy, Google's own run.
- Chartography: **66.6% without tools**, Google run following the official evaluation.

### Normalized scores (1–100)

- **Tool use: 90/100.** AutomationBench 76.1%, ALE 71.6% and independent Plotly completion support strong execution; best-of-three partial OSWorld scoring and small independent sample size cap the claim.
- **Reasoning: 91/100.** HLE-Diamond 58.8% and the High/Xhigh index results support strong reasoning, with one-run Plotly corroboration; newer benchmark versions are not directly mapped to older percentages.
- **Context window: 95/100.** Verified 1M-class shared capacity reaches the top tier; no full-window retrieval measurement supports 100.
- **Multimodal: 95/100.** Audio/video/image/PDF input and MKA/Chartography evidence support broad understanding; text-only output and incomplete audio-specific evaluation cap the score.
- **Coding: 86/100.** Terminal-Bench 4.1 57% and scientific-terminal 51.4% support everyday agentic engineering; SWE-sweep 13.5% and limited broad repository evidence constrain frontier claims.
- **Cost efficiency: 80/100.** Flat $1.50/$7.50 pricing offers useful paid value, but the $6.36 Plotly run shows token efficiency remains workload-dependent.
- **Overall Score: 91/100.** Half-up mean: (90 + 91 + 95 + 95 + 86) / 5 = 91.4 → 91. Best fit is multimodal knowledge work and everyday coding agents; cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-14
- Method: Fresh public search via DuckDuckGo after the configured search returned HTTP 402, direct Google documentation and independent Plotly results. The methodology PDF was retrieved through shell HTTP and extracted in temp after webfetch rejected its content type. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Hydrogen model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [Google: Hydrogen API specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [Google DeepMind: evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-4-hydrogen)
  - [Google: launch, thinking levels and pricing](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [Plotly: independent data-analysis evaluation](https://plotly.com/blog/gemini-4-hydrogen-plotly-data-analytics-bench/)
- Future sources: add a separate signed findings file using the same headings.
