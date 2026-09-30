# GLM 5.2 Coding — findings by Muse Spark 1.3

- Source: Z.AI/GLM-5.2 (coding preset), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Z.AI's flagship long-horizon coding preset of GLM-5.2 (744B/40B MoE, 1M context). Top use case is project-scale agentic software engineering with High/Max thinking effort.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` at `https://opencode.ai/zen/v1/chat/completions` (Chat Completions, OpenAI-compatible). Native Z.ai API name `GLM-5.2` (Claude Code alias `GLM-5.2[1m]` for 1M).
- **Release / knowledge:** 2026-06-16 release (Z.ai blog + Hugging Face `zai-org/GLM-5.2`); knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.2-coding` (Zen coding preset); `z-ai-org/GLM-5.2` weights (`zai-org/GLM-5.2`, `GLM-5.2-FP8`)
- **Context window:** 1,048,576 tokens total (1M solid), up to 131,072–163,840 output tokens — verified via Z.ai blog evaluation footnotes (400K SWE-Pro window, 256K Terminus-2 window, 300K HLE-tools window) and OpenRouter 1.0M/163,840 listing
- **Modalities:** text in/out only; reasoning yes (High/Max thinking effort); tool calls yes; JSON/structured output via standard chat API
- **Pricing (as of 2026-09-22):** Paid $1.40 in / $4.40 out / $0.26 cached per 1M (Zen + Z.ai list agree; no Zen Free ID for this coding preset). Coding Plan quota 3× peak / 2× off-peak (1× promo off-peak through September). MIT weights allow self-host.
- **Architecture:** MoE 744B total / 40B active, IndexShare sparse attention (2.9× fewer FLOPs at 1M) + improved MTP speculative decoding, MIT open weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- MCP-Atlas Public Set (500 tasks, think mode, 10-min timeout): **76.8%** (Z.ai blog 2026-06-16, Gemini-3.0-Pro judge; Opus 4.8 77.8, GPT-5.5 75.3 on same table)
- Tool-Decathlon: **48.2%** (Z.ai blog; Opus 4.8 59.9, GPT-5.5 55.6, DeepSeek-V4-Pro 52.8 on same table)
- GDPval-AA: **42.9%** (OpenRouter Artificial Analysis `GLM-5.2 (max)` listing; non-reasoning variant 36.6%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.ai blog text-only subset, GPT-5.5-medium judge; AA `GLM-5.2 (max)` 89.5% on OpenRouter — both listed, harness differs)
- HLE: **40.5%** text-only (Z.ai blog; AA `max` 41.1% on OpenRouter, non-reasoning 9.8%)
- HLE with tools: **54.7%** (Z.ai blog, 300K context, no management strategy)
- CritPt: **20.9%** (Z.ai blog; ties Opus 4.8 20.9 on same table; AA `max` 20.9% agrees)
- AIME 2026: **99.2%** (Z.ai blog, Explanation/Answer/Confidence prompt)
- IMOAnswerBench: **91.0%** (Z.ai blog)
- Artificial Analysis Intelligence Index: **51 points v4.1** (Z.ai-era, leading open-weights, Pareto frontier) and **33.7 points `max` v4.3** (OpenRouter AA listing, current revision — version drift, not comparable head-to-head)
- Omniscience Accuracy / Non-Hallucination: **24.3% / 73.7%** (OpenRouter AA `max`; non-reasoning 20.3% / 66.3%)

Coding:

- SWE-bench Pro (OpenHands, tailored prompt, temp 1.0, 400K ctx): **62.1%** (Z.ai blog/HF; GLM-5.1 58.4, GPT-5.5 58.6–60.6, Opus 4.8 69.2 on same table — first MIT-licensed lead over both flagships on this suite)
- Terminal-Bench 2.1 Terminus-2 (256K ctx, 500 episodes): **81.0%** (Z.ai blog; GLM-5.1 63.5, Opus 4.8 85.0 on same table)
- Terminal-Bench 2.1 best-harness (Claude Code, 128K override, 5-run avg): **82.7%** (Z.ai blog)
- Terminal-Bench Hard (AA): **50.8%** (OpenRouter AA `max`)
- DeepSWE: **46.2%** (Z.ai blog table)
- ProgramBench: **63.7%** (AI/TLDR summary of Z.ai table)
- NL2Repo: **48.9%** (Z.ai blog)
- FrontierSWE dominance: **74.4%** (Z.ai blog; Opus 4.8 75.1, GPT-5.5 72.6 on same card)
- SWE-Marathon: **13.0%** (Z.ai blog; Opus 4.8 26.0 on same card)
- SciCode: **51.2%** (OpenRouter AA `max`)
- Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR: **78.3%** (OpenRouter AA `max`; non-reasoning 42.3% — longest-context proxy at 1M family)
- MRCR / RULER / GraphWalks at stated length: **no long-context retrieval percentage reported at 512K/1M** (1M described as stable for project-scale trajectories, no 98%+ proof)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 84/100.** MCP-Atlas 76.8 within 1 pt of Opus 4.8 with GDPval-AA 42.9% mid-pack; capped by Tool-Decathlon 48.2 trailing Opus by ~12.
- **Reasoning: 88/100.** GPQA 91.2 + AIME 99.2 + CritPt 20.9 (ties Opus) with HLE 40.5/54.7; capped by HLE still ~9 behind Opus full-set 49.8.
- **Context window: 96/100.** Solid 1M tier with 131K+ output and AA-LCR 78.3%; capped below 100 without 98%+ retrieval at 512K+.
- **Multimodal: 15/100.** Text-only in/out (verified OpenRouter + AI/TLDR); standard text-only band.
- **Coding: 87/100.** SWE-Pro 62.1 leading GPT-5.5 with TB2.1 81.0–82.7 within 4 of Opus 85.0; capped by DeepSWE 46.2 and SWE-Marathon 13.0 trailing Opus by half.
- **Cost efficiency: 80/100.** Paid $1.40/$4.40 ($0.26 cached), no Free ID; MIT self-host offsets but Zen bill is full frontier-mid price.
- **Overall Score: 74/100.** Mean of the five non-cost dims (84+88+96+15+87)/5 = 74.0 → 74; best-fit as open-weights long-horizon coder where 1M stable context outweighs text-only limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-22
- Method: public internet research (Z.ai GLM-5.2 blog 2026-06-16 + HF `zai-org/GLM-5.2`, OpenRouter AA `max` panel, AI/TLDR + benchr/orcarouter summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
