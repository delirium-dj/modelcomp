# Claude Opus 5.5 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Opus 5.5 (`anthropic/claude-opus-5-5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's mid-cycle flagship update for long-running agentic coding and knowledge work, released September 22, 2026. Features adaptive thinking (always on, five effort levels), 20% price reduction vs. Opus 5, and 30%+ faster output generation. Beats both Opus 5 and Fable 5.1 on most Anthropic-published benchmarks.
- **Provider / access:** Claude API (`claude-opus-5-5`); Amazon Bedrock (`anthropic.claude-opus-5-5`); Google Cloud Vertex AI; Microsoft Foundry; Claude Platform on AWS. No free tier. Chat Completions via Anthropic API.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5` (Claude API); `anthropic.claude-opus-5-5` (Bedrock). No free OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) total; 128,000 max output (Messages API); 300K max output via Batch API with `output-300k-2026-03-24`.
- **Modalities:** Text and images in; text out. Reasoning yes (adaptive thinking, always on). Tool calls supported. JSON mode supported. Computer use supported.
- **Pricing (as of 2026-10-10):** $4 in / $20 out / $0.20 cached (5% multiplier) per 1M tokens. Batch: $2/$10. Fast mode: $8/$40 (up to 2.5x faster). No long-context premium.
- **Architecture:** Proprietary; parameter count not disclosed. Adaptive thinking always on with five effort levels (low, medium, high, xhigh, max); default is medium.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh effort; leads all models on release)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic)
- AutomationBench-AA: **40.0%** (Anthropic; Artificial Analysis)
- GDPval-AA v2.1: **1846 Elo** (Artificial Analysis; highest reported)
- AA-Briefcase v1.1: **1822 Elo** (Anthropic)
- OSWorld 2.0 (computer use): **81.8% partial / 48.7% strict** (Anthropic)
- Chartography (with tools): **89.0%** (Anthropic)
- HealthBench Professional: **65.6%** (Anthropic)

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **64.4%** (Anthropic)
- Humanity's Last Exam (with tools): **67.7%** (Anthropic; highest reported)
- Artificial Analysis Intelligence Index v4.3.2: **58** (#1 of 216 models at max effort)
- GDPval-AA v2.1: **1846 Elo** (also listed under reasoning/knowledge work)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic; highest reported)
- SWE-bench Multilingual: **93.9%** (Anthropic)
- SWE-bench Multimodal: **61.4%** (Anthropic)
- FrontierCode v1.1 (Main): **54.4%** (Anthropic, medium effort)
- CursorBench 4.0: **57.8%** (Cursor/Anthropic, max effort)
- Terminal-Bench 4.0: **66.4%** (also listed under tool use)
- SWE-bench Verified: no verified public score found for Opus 5.5 specifically
- LiveCodeBench: no verified public score found

Long context:

- No specific MRCR or long-context retrieval scores published for Opus 5.5
- 1M-token context window at standard pricing (no premium for long context)

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 4.0 at 66.4% leads all models. GDPval-AA 1846 Elo and AA-Briefcase 1822 Elo are highest reported. OSWorld 2.0 at 81.8% partial demonstrates strong computer use. AutomationBench at 40.0% is moderate but the breadth and depth of agentic benchmarks is exceptional. Capped by the moderate AutomationBench score relative to some competitors.
- **Reasoning: 94/100.** HLE 67.7% with tools is the highest reported. Intelligence Index 58 ranked #1 of 216 models. GDPval-AA 1846 Elo confirms leading knowledge-work performance. HealthBench Professional 65.6% is strong. Capped only by the absence of publicly available GPQA Diamond scores specifically for 5.5 (vs. Opus 5's 93.4%).
- **Context window: 88/100.** 1M-token context window with 128K max output (300K via Batch API). No long-context premium pricing. However, no specific MRCR or long-context retrieval benchmarks were published for Opus 5.5, so the score is based on window size and output capacity rather than measured retrieval accuracy.
- **Multimodal: 62/100.** Text and images in; text out. No audio or video input (unlike Gemini models). OSWorld 2.0 at 81.8% demonstrates computer-use capability. SWE-bench Multimodal 61.4% shows some multimodal coding ability. Capped significantly by text-and-image-only input modality in a field where audio/video are increasingly standard.
- **Coding: 96/100.** SWE-bench Pro 89.9% and SWE-bench Multilingual 93.9% are exceptional. FrontierCode 54.4%, CursorBench 57.8%, and Terminal-Bench 4.0 66.4% all lead their respective leaderboards. The coding performance across multiple independent benchmarks is among the strongest of any model. Capped only by the absence of SWE-bench Verified and LiveCodeBench scores.
- **Cost efficiency: 55/100.** $4/$20 per 1M tokens is expensive — among the priciest frontier models. 20% cheaper than Opus 5, and 5% cache-read multiplier helps with repeated context. However, at ~119K output tokens per Intelligence Index task (Artificial Analysis), cost per task is ~$5.98. Fast mode doubles the price. Not suitable for high-volume workloads where cost matters.
- **Overall Score: 86/100.** Mean of five quality dims: (91 + 94 + 88 + 62 + 96) / 5 = 86.2, rounded to 86. A top-tier coding and agentic model with the strongest published SWE-bench Pro and HLE scores. Best fit for long-running autonomous coding agents, multi-step knowledge work, and tasks requiring sustained planning with tool use. The high per-token cost and limited input modalities are the main trade-offs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official pages, Artificial Analysis, NeuralTrust, Codersera, MyClaw, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
