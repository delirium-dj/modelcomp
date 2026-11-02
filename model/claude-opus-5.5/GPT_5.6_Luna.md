# Claude Opus 5.5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's premium reasoning model for long-horizon coding, agentic knowledge work, and computer-use tasks. Opus 5.5 is materially cheaper than Opus 5 while remaining in Anthropic's highest-capability tier.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS; Messages API model ID `claude-opus-5-5`.
- **Release / knowledge:** 2026-09-22 release; no knowledge cutoff was published in the reviewed official and independent sources.
- **IDs:** `anthropic/claude-opus-5-5`; Bedrock ID `anthropic.claude-opus-5-5`. No OpenCode Zen Free ID.
- **Context window:** 1M tokens; 128K maximum output, with a 300K Batch API beta option (Anthropic documentation).
- **Modalities:** Text and image input, text output, adaptive reasoning, tool calls, computer-use integrations, and structured output; no audio/video output was documented.
- **Pricing (as of 2026-11-02):** $4 input / $20 output per 1M tokens; cache write $5 (5-minute) or $8 (1-hour), cache read $0.20; Batch API input/output 50% discount. Artificial Analysis estimates about $10.04 per Intelligence Index task because of high token use.
- **Architecture:** Proprietary closed model; parameters and architecture undisclosed.

## Raw benchmarks found

> Anthropic's release chart/system card and independent Artificial Analysis/BenchLM records agree on frontier-level performance, but effort settings and agent harnesses materially change the result. The AA composite is not a direct average of the individual percentages.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic release chart; independent BenchLM transcription)
- Terminal-Bench-Science 0.1: **58.7%** (BenchLM record of Anthropic's release evidence)
- Toolathlon-Verified: **77.8%** (Anthropic system card)
- AutomationBench: **40.0%** (Anthropic release chart)
- GDPval-AA: **1846 Elo** (Anthropic release chart)
- OSWorld 2.0: **48.7%** (Anthropic system card)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **58** (Artificial Analysis; #2 in the reviewed snapshot)
- Humanity's Last Exam without tools: **64.4%** (Anthropic system card)
- ARC-AGI-2: **91.7%** (ARC Prize published result)
- AA-LCR: **84.7%** (Artificial Analysis long-context reasoning evaluation)
- CritPt: **31.7%** (Artificial Analysis hard physics subset)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card; BenchLM)
- SWE Multilingual: **93.9%** (Anthropic system card; BenchLM)
- ProgramBench: **91.2%** (Anthropic system card; BenchLM)
- FrontierCode 1.1 Main: **54.4%** (Anthropic release chart)
- FrontierCode 1.1 Extended: **63.6%** (Anthropic system card)
- DeepSWE: **74.2%** (Anthropic system card)

Multimodal:

- MMMU-Pro: **87.7%** (Artificial Analysis)
- Chartography with tools: **89.0%** (Anthropic release chart)
- SWE-bench Multimodal: **61.4%** (Anthropic system card)

Long context:

- **1M-token advertised limit**; AA-LCR is **84.7%**, but no public full-window retrieval curve was found.

## Normalized scores (1–100)

- **Tool use: 97/100.** Terminal-Bench 4.0, Toolathlon, GDPval, and computer-use evidence establish frontier agent performance; AutomationBench and OSWorld variance prevent a perfect score.
- **Reasoning: 96/100.** AA Index 58, HLE 64.4%, ARC-AGI-2 91.7%, and AA-LCR 84.7% are exceptionally strong, although CritPt 31.7% and effort sensitivity cap it.
- **Context window: 100/100.** The independently listed 1M-token window is the current top tier; no larger verified window was found.
- **Multimodal: 91/100.** Image input plus strong MMMU-Pro and Chartography performance is excellent, but the model remains text-output only and lacks audio/video.
- **Coding: 97/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, ProgramBench 91.2%, and DeepSWE 74.2% are frontier-level, while FrontierCode 54.4% shows harness variance.
- **Cost efficiency: 82/100.** $4/$20 is materially below Opus 5 but remains expensive; AA's approximately $10.04 per composite task and high token use keep value below the Sonnet tier.
- **Overall Score: 96/100.** Half-up mean of `(97 + 96 + 100 + 91 + 97) / 5 = 96.2`; best fit is difficult long-horizon coding and agentic knowledge work where the premium price is justified.

### Deep-research addendum (2026-10-09)

- Anthropic reports Opus 5.5 solves more public command-line tasks than Opus 5 while making about 40% fewer calls and using half the tokens.
- The official page notes Terminal-Bench 4.0 evaluation at xhigh effort and documents production safeguards, so scores should be read as harness- and safety-configuration-specific.
- Source: https://www.anthropic.com/claude/opus

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s official documentation states Opus 5.5 uses adaptive thinking at max effort for most published evaluations and reports a **1M-token** context option.
- Anthropic’s command-line comparison says Opus 5.5 solves more real CLI tasks than Opus 5 with about **40% fewer calls** and **half the tokens**.
- Independent discussion of Terminal-Bench 4.0 places Opus 5.5 around **60%**, close to GPT-6 Astra, while medium/high-effort runs show a cost/quality tradeoff rather than one fixed score.
- A small independent everyday-task comparison favored Opus 5.5 on 4 of 5 prompts, but that is qualitative and not a substitute for standardized evaluation.
- **Assessment:** retain the frontier coding/reasoning score; add a confidence caveat that effort setting, Claude Code harness, safeguards, and token budget materially affect comparisons.
- Sources: https://platform.claude.com/docs/en/models/opus-5-5/overview ; https://www.anthropic.com/claude/opus ; https://www.reddit.com/r/Anthropic/comments/1wqscan/two_independent_opus_55_benchmarks_1_on/ ; https://www.tomsguide.com/ai/i-tested-chatgpt-6-vs-claude-opus-5-5-with-5-everyday-prompts-it-wasnt-even-close

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: fresh independent public-web research using Anthropic's release materials and system card, Artificial Analysis, BenchLM, and ARC Prize; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Claude Opus 5.5 system card](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [Artificial Analysis: Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [BenchLM: Claude Opus 5.5 benchmark scores](https://benchlm.ai/models/claude-opus-5-5)
  - [ARC Prize: Claude Opus 5.5 results](https://arcprize.org/results/anthropic-claude-opus-5-5)
