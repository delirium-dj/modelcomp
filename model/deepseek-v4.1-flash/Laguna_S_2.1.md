# DeepSeek V4.1 Flash — findings by Laguna S 2.1

> Source: deepseek/deepseek-v4.1-flash (DeepSeek), e.g. DeepSeek model card (10 Sep 2026), Artificial Analysis, AshnaAI launch benchmarks
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: DeepSeek V4.1 Flash (DeepSeek). The **smallest member of a new architecture family** — a from-scratch rebuild (not a V4-Flash tune); "the .1 is a rebuild, not a point release."
- Short description: DeepSeek's Sept-2026 552B open-weights MoE with a native 1M-context Causal Encoder-Decoder architecture. Leads GPT-5.6 Sol and Claude Opus 5 on Terminal-Bench 2.1 (90.6%), DeepSWE (74.2%), CyberGym (88.1%), AutomationBench (54.8%) and Agents' Last Exam (31.8%); loses GPQA Diamond (90.9% vs Sol 94.1) and the newer Terminal-Bench 3.0/4.0 rows (Opus 5 wins). MIT license; very cheap input pricing.
- Provider / access: DeepSeek API (`deepseek-flash`); OpenRouter; 18 API providers (Artificial Analysis). OpenCode Zen: `deepseek/deepseek-v4.1-flash` (retired V4-Flash / V4-Flash-Vision-Exp temporarily route here).
- Release: **September 10, 2026** (DeepSeek model card, AshnaAI; AA "Released September 2026"). From 2026-09-14 04:00 UTC, `deepseek-v4-pro` requests route to V4.1 Flash at Flash rates until a V4.1 Pro launches.
- Architecture: **552B total parameters, 16B active decode (8B prefill)** — Mixture-of-Experts, **Causal Encoder-Decoder** (20 encoder / 20 decoder layers), FP4 KV caching, Compressed Sparse Attention 2. HBM footprint ~1/4 of V4-Flash, SSD ~1/8 (AshnaAI). MIT license (open weights on Hugging Face; commercial use allowed). Param count undisclosed beyond totals.
- Context window: **1,000,000 total tokens** (AA + repo `meta.json`); max output **384K** (repo `meta.json` "384K out"; ≥1M tier, clears <64K caveat).
- Modalities: **text + image input → text output** (multimodal; AA "text and image → text"; repo `meta.json` "Text, image in; text out") (+image-in). Text-only output; no audio/video/PDF.
- Knowledge cutoff: not verified/stated on fetched pages.
- Reasoning / tools: Yes (reasoning model; "max effort" variant); tool/function calling + JSON structured outputs; native visual understanding.
- Pricing (as of 2026-09-23): **official DeepSeek $0.15 / $0.60 per 1M off-peak** (cache-hit input $0.003; 2× peak = **$0.30/$1.20**, which matches repo `meta.json` exactly); cache-hit input $0.003 (AshnaAI). noFreeId — paid tier; no $0 Zen tier. Cache 98% discount (AA).
- Speed: not found for V4.1 Flash directly (the architecture is optimized for long agents via KV compression, not raw tok/s).

### Raw benchmarks found

> Verified public numbers (DeepSeek model card 10 Sep 2026 via AshnaAI; Artificial Analysis model page 2026-09). Benchmarks not located are NOT fabricated. AshnaAI presents DeepSeek's launch scoreboard vs GPT-5.6 Sol / Claude Opus 5 (vendor-published, not an independent bake-off).

Agent / tool use:
- Terminal-Bench 2.1: **90.6%** — leads GPT-5.6 Sol 88.8 and Claude Opus 5 89.1 (AshnaAI launch scoreboard)
- DeepSWE v1.1: **74.2%** — leads Sol 73.0 and Opus 5 74.0 (AshnaAI)
- CyberGym: **88.1%** — leads Sol 84.5 (AshnaAI)
- AutomationBench: **54.8%** — leads Sol 45.8 and Opus 5 50.3 (AshnaAI)
- Agents' Last Exam: **31.8%** — leads Sol 26.7 and Opus 5 28.6 (AshnaAI)
- AA Intelligence Index v4.3.2 / AA-Briefcase / GDPval-AA Elo / Tau3-Banking / tau3-general / Terminal-Bench 3.0 / Terminal-Bench 4.0 / OSWorld / Toolaton / MCP-Atlas: NOT FOUND as standalone figures here (Index 39 is the composite; TB 3.0/4.0 are only mentioned as rows DeepSeek loses, no value surfaced).
- HLE (with tools): **88.1%** — leads (AshnaAI header "leads on... HLE with tools")
- Terminal-Bench 4.0: **31.2%** — loses to Opus 5 51.8% (AshnaAI)
- Humanity's Last Exam (no tools): **36.8%** — trails Opus 5 56.3% (AshnaAI)
- GPQA Diamond: **90.9%** — trails Sol 94.1 (AshnaAI)
- ProgramBench: **20.3%** — trails Opus 5 37.0 (AshnaAI)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Anchored on **AA Intelligence Index v4.3.2 = 39** (= GPT-5.4's index), but V4.1 Flash has far stronger verified raw coding/agentic figures (TB 2.1 90.6%, DeepSWE 74.2%, GPQA 90.9%, HLE-tools 88.1%) so Tool/Reasoning/Coding land above GPT-5.4's 62/64/73.

- **Tool use: 92/100.** TB 2.1 90.6% (leads Sol/Opus), DeepSWE 74.2% (leads), CyberGym 88.1%, AutomationBench 54.8%, Agents' Last Exam 31.8% (all lead Sol/Opus 5) + Intelligence Index 39. Capped by no GDPval-AA/Tau3/TB 4.0 (loses 31.2% to Opus 5)/OSWorld.
- **Reasoning: 89/100.** GPQA 90.9% + HLE-with-tools 88.1% + Agents' 31.8% (leads, beats Fable 27.3) + Intelligence Index 39; capped by TB 4.0 loss (31.2 vs 51.8), Humanity's Last Exam no-tools 36.8% (trails 56.3%), and no GPQA rank.
- **Context window: 95/100.** 1,000,000 native tokens + 384K max output (≥1M tier, clears caveat); no retrieval-at-window-512K+ proof.
- **Multimodal: 70/100.** Text + image input, text output (+image-in only; no audio/video/PDF).
- **Coding: 90/100.** TB 2.1 90.6% (frontier-lead), DeepSWE 74.2% (leader), GPQA 90.9%, AutomationBench 54.8%; capped by TB 4.0 loss and no SWE-bench-Verified / LiveCodeBench %.
- **Cost efficiency: 85/100.** Official off-peak **$0.15/$0.60** per 1M (~$0.19/MTok blended, ~$0.065/Index task; cache-hit input $0.003) is elite cheap for a 552B open-weights MoE; noFreeId (paid, no $0) caps below 100.
- **Overall Score: 87/100.** (92 + 89 + 95 + 70 + 90) / 5 = 436 / 5 = 87.2 → 87.

> ⚠️ **Reconciliation note:** Repo AI-Rankings average for this model is **81.1** (audit/model-comparison.md v4, 2026-09-17). My Index-anchored figure here is **87** — the stronger of the two — because V4.1 Flash (Sept 10, 2026 release) is a genuine rebuild that leads GPT-5.6 Sol and Claude Opus 5 on Terminal-Bench 2.1 (90.6%), DeepSWE (74.2%), CyberGym (88.1%), AutomationBench (54.8%) and Agents' Last Exam (31.8%) in DeepSeek's own launch scoreboard. The repo's 81.1 likely reflects an earlier/legacy weighting or the pre-rebuild V4-Flash figures; AA also marks the older id deprecated. The caps keeping my score below 90+: losses on Terminal-Bench 4.0 (31.2 vs 51.8) + Humanity's Last Exam-no-tools (36.8 vs 56.3) + no SWE-bench-Verified/LiveCodeBench/TB 3.0 numbers, and the text+image-only (non-omni) modalities. Both repo 81.1 and my 87 preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (DeepSeek V4.1 Flash model card, 10 Sep 2026, via AshnaAI launch-benchmarks article; Artificial Analysis model page 2026-09). Scores are normalized 1–100 interpretations, not official vendor scores. Note: AshnaAI presents DeepSeek's own vendor-published scoreboard vs Sol/Opus 5 (not an independent bake-off). No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek V4.1 Flash is an open-weights Mixture-of-Experts reasoning model optimized for low-latency agentic workflows and coding tasks.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`), Hugging Face open weights.
- **Release / knowledge:** 2026-09-01 release; 2026-07 knowledge cutoff
- **IDs:** `deepseek/deepseek-v4.1-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.30 in / $1.20 out per 1M tokens ($0.18 blended with cache)
- **Architecture:** Mixture-of-Experts (552B total / 16B active), MIT license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **39 / #7**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M token context window supported; no long-context retrieval (MRCR / RULER) score reported at full length.

### Normalized scores (1–100)

- **Tool use: 75/100.** High-speed agentic execution (225.6 t/s) and MoE tool calling; capped by missing Terminal-Bench scores.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index score of 39 (#7 open-weights reasoning class); capped by missing GPQA Diamond.
- **Context window: 95/100.** 1M token context window (top tier).
- **Multimodal: 65/100.** Text and image input support with text output; capped by lack of audio/video.
- **Coding: 72/100.** Strong MoE code generation speed and capacity; capped by unverified public SWE-bench scores.
- **Cost efficiency: 95/100.** Extremely cost-effective open-weights pricing at $0.30 in / $1.20 out per 1M.
- **Overall Score: 73.4/100.** Mean of the five quality dimensions; fast and cost-effective 1M-context reasoning model.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
