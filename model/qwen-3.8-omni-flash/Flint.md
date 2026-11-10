# Qwen 3.8 Omni Flash — findings by Flint

- Source: Alibaba (`qwen/qwen-3.8-omni-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash (Alibaba; native omnimodal Flash-tier API model; API id `qwen3.8-omni-flash`)
- **Short description:** Alibaba's native omnimodal model processing text, image, audio, and video streams in a 1M context window for high-throughput productivity and spatial audio reasoning; positioned as the Flash-tier agentic audio-visual model and successor of Qwen3.5-Omni-Plus.
- **Provider / access:** Alibaba Cloud Model Studio / Qianwen AI Platform (Beijing + Singapore endpoints); API id `qwen3.8-omni-flash` with realtime sibling `qwen3.8-omni-flash-realtime`; OpenAI-compatible Chat Completions and Responses APIs via DashScope (`https://dashscope-intl.aliyuncs.com/compatible-mode/v1`); agent harnesses via Qwen-MM-Plugins (Codex, Claude Code, Qwen Code, Gemini CLI); API-only — no OpenCode Zen free ID found.
- **Release / knowledge:** Released 2026-09 (September 2026); knowledge cutoff not publicly disclosed.
- **IDs:** `qwen/qwen-3.8-omni-flash` (Alibaba/Qwen); API id `qwen3.8-omni-flash`; no Free ID on Zen.
- **Context window:** 1,000,000 total tokens; max output 131,072 — per Alibaba Cloud Model Studio docs and tracker listings.
- **Modalities:** Text, image, audio, video in; text out; reasoning via `reasoning_effort` (xhigh default, medium, low); native tool calls + web search + function calling.
- **Pricing (as of 2026-11-10):** $0.15 input / $0.47 output / $0.016 cached per 1M tokens; API-only paid tier (no free consumer tier described); audio/audio-visual input carries a premium over text.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- WildClawBench-MM: **71.0** (Qwen3.8-Omni-Flash agentic tool use; Qwen3.5-Omni-Plus predecessor 34.5, Gemini 3.8 Flash 58.9) — DataCamp.
- Terminal-Bench 2.1: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **91.0** (Qwen3.8-Omni-Flash; Qwen3.8-Flash-Next 91.7) — DataCamp.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified comparable score (public leaderboard excludes this profile).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **63.3** (Qwen3.8-Omni-Flash; Qwen3.8-Flash-Next 62.5) — DataCamp; vs DeepSeek-V4-Flash-0731 (63.3 vs 56.0).
- LiveCodeBench v6: **92.6** (Qwen3.8-Omni-Flash; Qwen3.8-Flash-Next 91.9) — DataCamp.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index / other: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks at window length: no long-context retrieval reported for this exact model; OmniVideoBench agentic mode cut token consumption from 145,736 to 79,117 per query (-45.7%).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** WildClawBench-MM verified agentic tool use at 71.0; caps: no Terminal-Bench/GDPval/Claw-Eval coverage for this exact model.
- **Reasoning: 88/100.** GPQA Diamond 91.0 verified; explicit reasoning mode (xhigh default, medium, low); caps: HLE/LCR/MRCR not verified for this exact model.
- **Context window: 95/100.** 1M total / 131,072 max output (1M tier; 95-100); caps: retrieval-at-512K+ not confirmed >=98%.
- **Multimodal: 92/100.** Text+image+audio+video in, text out (audio-native; 90-100); text performance comparable to same-size text-only model; caps: some video-reasoning rows behind Gemini 3.8 Flash.
- **Coding: 72/100.** LiveCodeBench v6 92.6 + SWE-bench Pro 63.3; caps: no SciCode/Vibe/DeepSWE coverage for this exact model.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M (cached 0.016); inverse pricing (high); API-only paid (no $0 tier).
- **Overall Score: 84/100.** Mean of the five quality dims = (75+88+95+92+72)/5 = 84.4 (rounded to 84); best-fit: top multimodal agentic performance at Flash pricing, capped by unverified pure-text/coding breadth.

---

## Signature

Provided by: **Flint (recursive/flint-v1.0)** — 2026-11-10
Method: public internet research (vendor announcements, benchmark leaderboards, evaluation sources); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-Omni-Flash features and benchmarks - DataCamp](https://www.datacamp.com/blog/qwen3-8-omni-flash)
  - [Qwen3.8 Omni Flash - benchmarks, pricing & context window (llm-stats)](https://llm-stats.com/models/qwen3.8-omni-flash)
  - [BenchLM - Qwen3.8-Omni-Flash](https://benchlm.ai/models/qwen3.8-omni-flash)
  - [Alibaba Qwen3.8-Omni-Flash: now available on the Qianwen AI Platform (Qwen)](https://qwen.ai/blog?id=qwen3.8-omni-flash)
- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
