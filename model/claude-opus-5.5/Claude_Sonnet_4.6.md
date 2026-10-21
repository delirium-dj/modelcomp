# Claude Opus 5.5 — findings by Claude Sonnet 4.6

- Source: Anthropic / Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Opus-class model for long-horizon coding and agentic workflows, featuring adaptive extended thinking and 1M-token context. Released 2026-09-22.
- **Provider / access:** Anthropic API `anthropic/claude-opus-5-5`. Chat Completions / Messages API. No free tier.
- **Release / knowledge:** 2026-09-22; knowledge cutoff approximately mid-2026.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID on Zen)
- **Context window:** 1,048,576 total / 128,000 max output. Verified via Anthropic documentation and meta.json.
- **Modalities:** Text, image input; text output. Adaptive extended thinking (reasoning). Tool calls and JSON mode supported. No audio/video.
- **Pricing (as of 2026-10-21):** $4.00 / $20.00 per 1M in/out. No free tier.
- **Architecture:** Proprietary. Anthropic's flagship Opus-class model with adaptive extended thinking. Full-capability model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic official, higher/xhigh effort; Kingy.ai)
- Terminal-Bench 4.0 (independent): **59.6–65.2%** (Artificial Analysis, various harnesses)
- Multilingual Terminal-Bench: **#1 rank** (AURORA/Harbor frameworks; Hugging Face)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Van Data Team / independent trackers)
- HLE (with tools): **67.7%** (Anthropic official; Armes.ai)
- HLE (no tools): **64.4%** (Anthropic official)
- Artificial Analysis Intelligence Index: **58** (meta.json)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic report; Armes.ai)
- SWE-bench Multimodal: **70.2%** (Vals AI independent leaderboard; Hermes-ai)
- LiveCodeBench: no verified public score found

Long context:

- No RULER/MRCR scores published. 1M context supported; real-world multi-hundred-thousand-line codebase handling confirmed (Anthropic blog, Fullstack.com).

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 66.4% (official) and multilingual #1 ranking confirm strong terminal-native agentic capability. Capped by independent scores (59–65%) showing some harness variance; no BFCL/Tau-bench data.
- **Reasoning: 88/100.** GPQA Diamond 90.6% is near-frontier. HLE 67.7% (with tools) is among the highest published. Adaptive extended thinking enables deep multi-step reasoning. Capped by trailing a very small number of models above 91%.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90–95). Verified real-world performance on massive codebases. Scored at 92.
- **Multimodal: 58/100.** Text + image input with text output. No audio or video. Scored at 58 for text+image.
- **Coding: 88/100.** SWE-bench Pro 89.9% is top-tier. SWE-bench Multimodal 70.2% is leading. Extended thinking adds depth to complex refactoring. Capped by lack of LiveCodeBench and limited verified SWE-bench Verified score.
- **Cost efficiency: 28/100.** $4/$20 per 1M is premium tier — expensive relative to most models. Justified for long-horizon depth; poor value for routine tasks.
- **Overall Score: 81/100.** (78 + 88 + 92 + 58 + 88) / 5 = 80.8 → 81. Anthropic's flagship long-horizon coding model with exceptional reasoning and coding on complex real-world tasks. Multimodal input without audio/video is the primary capability gap.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: Public internet research cross-referencing Anthropic official documentation, Artificial Analysis, Van Data Team, Kingy.ai, and Armes.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
