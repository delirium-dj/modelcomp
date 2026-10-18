# Muse Spark 1.1 — findings by DeepSeek 4.1 Flash

- Source: Meta (Meta Superintelligence Labs)/Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** The earlier version of this file scored Multimodal **15** (text-only) because no modality row could be verified for this exact ID. Fresh research now establishes Muse Spark 1.1 is **multimodal** (text/image/video/file in, text out) with a full first-party evaluation report, and BenchLM now exposes ~40 benchmark rows. Multimodal, Reasoning and Coding are therefore re-scored; the Overall moves **68 → 86**.

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model for agentic tasks, released 2026-07-09 and the first Meta model behind a paid API. First generation of the Muse Spark line tracked here (1.2 and 1.3 are later, separate IDs); unlike the 1.3 Contributor tier, 1.1 is proprietary/closed-weight with no $0 route — not an alias of either sibling.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`, model `muse-spark-1.1`), drop-in OpenAI **and** Anthropic SDK compatible; launch availability US-only public preview with a waitlist (not on OpenRouter at launch); Zen route `opencode/muse-spark-1.1`. Configurable `reasoning_effort` (minimal → xhigh); native MCP, custom skills, built-in web search, computer-use mode, and primary-agent + subagent orchestration.
- **Release / knowledge:** 2026-07-09 (Meta launch blog / llm-stats); SurfMind lists 2026-07-16 — minor conflicting date. Knowledge cutoff not published.
- **IDs:** `muse-spark-1.1` (Meta Model API); Zen `opencode/muse-spark-1.1`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 input tokens / 131,100 output tokens (llm-stats; provider-managed "active compaction").
- **Modalities:** text, image, video, and document/file input; text out. Reasoning (thinking mode; `reasoning_tokens` billed as output), tool calls, structured outputs.
- **Pricing (as of 2026-10-18):** $1.25 / 1M input, $4.25 / 1M output, $0.15 / 1M cached input (Meta Model API). $20 free credits for new accounts. No free tier.
- **Architecture:** proprietary, closed weights, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Meta evaluation report, via BenchLM) — **69.3%** (Vals AI, independent harness)
- MCP Atlas: **88.1%** (Meta eval report; best-in-class tool use at launch)
- Toolathlon: **75.6%** (Meta); JobBench **54.7%** (Meta)
- OSWorld-Verified: **80.8%** (Meta) — OSWorld 2.0 **14.2%** (Meta)
- WebArena-Verified **69%**, DeepSearchQA **84.9%**, Cybench **92.9%**, CyberGym **59.0%**, ExploitGym **0.8%** (Meta)
- Finance Agent v2: **57.2%** (Meta)
- GDPval-AA: **1375 Elo** (Meta) — **35.6%** normalized (Artificial Analysis)
- AA Agentic Index: **27.5%** (Artificial Analysis); AA Coding Agents composite **54.9** at $1.44/task (Lumina)
- Tau3-Banking / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Vals AI) — **89.8%** (Artificial Analysis)
- HLE: **62.1%** with tools / **52.2%** without (Meta) — AA-HLE **46.2%** (Artificial Analysis)
- MRCR 1M: **54.1%** (Meta); AA-LCR **77.7%** (Artificial Analysis); CritPt **15.1%**
- MMLU-Pro: **88.7%** (Vals); HealthBench Professional **59.3%** (Meta)
- Artificial Analysis Intelligence Index: **33.7%**; AA-Omniscience Accuracy **52.1%** / Hallucination Rate **50.0%** / Index **28.1%**
- BenchLM overall **66.02/100, #33 of 954**

Coding:

- SWE-bench Pro: **61.5%** (Meta); SWE-bench (Vals) **82.0%** (Vals)
- LiveCodeBench (Vals): **85.9%** (Vals)
- AA-SciCode: **58.8%**; AA Coding Index **71.3%** (Artificial Analysis)
- DeepSWE (1.1): **53.3%** (Meta); Terminal-Bench 2.1 **80.0%** (Meta)

Multimodal / long context:

- CharXiv **88.4%**, BabyVision **76.3%** (Meta); Design Arena Website **1272** (OpenRouter)
- MRCR 1M 54.1% is the only 1M-retention figure found — moderate rather than class-leading.

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 88.1%, OSWorld-Verified 80.8%, Toolathlon 75.6% and Terminal-Bench 2.1 80.0% are genuinely frontier; capped by OSWorld 2.0 14.2%, ExploitGym 0.8% and the absence of Tau3/Claw-Eval.
- **Reasoning: 87/100.** GPQA Diamond 91.2% (Vals)/89.8% (AA), HLE 62.1% with tools, MMLU-Pro 88.7% and AA Intelligence Index 33.7%; capped by CritPt 15.1%, MRCR 1M 54.1% and a 50% AA-Omniscience hallucination rate.
- **Context window: 92/100.** A true 1M input / 131K output window, held below the 95–100 floor because 1M-retrieval accuracy (MRCR 54.1%) is moderate and provider-managed compaction trades precision for cost.
- **Multimodal: 80/100.** Text + image + video + document in, text out (CharXiv 88.4%, BabyVision 76.3%) — the video/PDF band; no audio-in and no non-text output.
- **Coding: 84/100.** SWE-bench (Vals) 82.0%, LiveCodeBench 85.9%, SWE-bench Pro 61.5%, SciCode 58.8% and Coding Index 71.3%; capped by DeepSWE 53.3% (well under the 74%+ frontier ref).
- **Cost efficiency: 87/100.** $1.25/$4.25 with $0.15 cached input is aggressive for a frontier-adjacent multimodal model; reasoning tokens bill at output rate, pushing effective cost up on heavy-thinking workloads.
- **Overall Score: 86/100.** (88 + 87 + 92 + 80 + 84) / 5 = 86.2 → **86**. Best fit: MCP-heavy agentic tool orchestration and long-context multimodal workflows on a paid API; the US-only preview waitlist is the main practical gate.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (Meta Muse Spark 1.1 evaluation report via BenchLM, llm-stats, SurfMind, The Agent Report, Vals AI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
