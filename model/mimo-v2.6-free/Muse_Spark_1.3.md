# MiMo V2.6 Free — findings by Muse Spark 1.3

- Source: Xiaomi/MiMo-V2.6-Flash (Free tier), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-22 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM mirror note added; scores hold 90); re-verified 2026-09-29 (UTC, user-signed-off re-research: full-table extraction — ProgramBench 26.0/Visual 71.5/CyberBench 77.2/Exploit rows/ALE 27.6/DeepSWE-65.7 variant/batch pricing added; Tool 86 → 85, Coding 88 → 87, Overall 90 → 89)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's efficiency-balanced omnimodal MoE checkpoint (V2.6 Flash, 309B/15B), served as the $0 Zen Free tier. Top use case is high-volume agentic coding and long-horizon tool workflows at roughly one-third the Pro price.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` at `https://opencode.ai/zen/v1/chat/completions` (Chat Completions, OpenAI-compatible). Native Xiaomi API uses lowercase `mimo-v2.6-flash`.
- **Release / knowledge:** 2026-09-21 release (MIT open weights, RL run live-streamed, ~750k trajectories in under six days); knowledge cutoff undisclosed
- **IDs:** `opencode/mimo-v2-6-free` (Zen Free tier); native `mimo-v2.6-flash` (Xiaomi, no separate Zen paid ID needed for scoring)
- **Context window:** 1,048,576 tokens total (1M), up to 128,000 output tokens — verified via Xiaomi release docs, Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash-RL` README, and VentureBeat 2026-09-22
- **Modalities:** text/image/video/audio in; text out; reasoning yes (Thinking mode); tool calls yes; JSON/structured output via standard chat API
- **Pricing (as of 2026-09-22):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) $0 in / $0 out / $0 cached (limited-time preview). Paid fallback (native Xiaomi API): $0.14 in / $0.28 out per 1M ($0.0028 cached; Batch API 50% off — re-verified 2026-09-29; Pro is $0.435/$0.87). No training on prompts per Zen zero-retention route; OpenRouter-style routes may retain prompts without training — use Zen for confidential code.
- **Architecture:** sparse MoE, 309B total / 15B active (256 routed experts, 8 active), hybrid sliding-window/global attention, 681M-param MiMo ViT + audio tokenizer/patch encoder, MIT license, ungated weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- AutomationBench v1.0.6: **52.3%** (Xiaomi official model card/table, 2026-09-21/22; Pro 53.1, Opus 5 50.3 on same card)
- Toolathlon-Verified: **73.6%** (Xiaomi official card; Pro 76.9, Opus 5 80.6 on same card)
- OSWorld-Verified: **80.8%** (Xiaomi official card; Pro 82.0, Opus 5 83.4 on same card)
- Terminal-Bench 2.1: **87.6%** (Xiaomi official card; agent-terminal proxy, Pro 89.9)
- Terminal-Bench 4.0: **28.8%** (Xiaomi official card; Pro 34.9, Opus 5 49.0 on same card)
- Agents' Last Exam: **27.6%** (Pro 31.6 on same table — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no V2.6-Flash Tau run published)
- GDPval-AA: **no verified public score found for Flash** (Pro reported at 1673 Elo on Xiaomi page; no Flash Elo published)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BenchLM MiMo-V2.6-Flash page: **14 source-displayable rows, no public overall score** (Sep 2026 third-party mirror — numbers not yet extracted into this report; amended 2026-09-27)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found for V2.6-Flash** (no Flash-specific GPQA run published; Pro has no separate GPQA either)
- HLE: **no verified public score found for V2.6-Flash**
- LCR / MLCR: **no verified public score found for V2.6-Flash**
- CritPt: **no verified public score found for V2.6-Flash**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified Flash-specific score found** (Pro scores 46 / 46.32 on AA Index v4.3, 2026-09-22, first among 114 open-weights — cited here only as family proxy, not scored as Flash)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found for V2.6-Flash**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified V2.6-Flash-specific score found** (older `mimo-v2-flash-0204` Thinking 78.6% on SWE-Bench Verified per Xiaomi model docs is a different checkpoint and is NOT counted here)
- LiveCodeBench: **no verified V2.6-Flash-specific score found**
- SciCode / AA-SciCode: **no verified public score found for V2.6-Flash**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **67.9%** card eval table (**65.7%** announcement RL-endpoint, 48.8→65.7 — official-figure conflict flagged per ModelGap — re-verified 2026-09-29); Pro 71.9, Opus 5 74.0, Sol 73.0 on same card
- MiMo Code Bench (in-house): **61.2%** (Xiaomi official card; Pro 63.2)
- ProgramBench: **26.0%** (weak tail — re-verified 2026-09-29); MiMo Visual Coding: **71.5%** (Pro 72.3 — re-verified 2026-09-29)
- MiMo Cyber Bench: **77.2%** (Pro 80.2 — re-verified 2026-09-29); ExploitBench: **25.3%**; ExploitGym: **6.0%**; SEC Bench Pro: **47.5%** (same table — re-verified 2026-09-29)
- JobBench: **61.2%** (Xiaomi official card; Pro 62.0, Opus 5 65.7 on same card)
- CyberGym: **95.1%** (Xiaomi official card; Pro 94.0 — sole row Flash wins outright)

Long context:

- **No long-context retrieval reported at a stated window length** (1M claimed with 1M-context RL training at 1,568 samples/step; no MRCR/RULER/GraphWalks percentage at 512K/1M published for Flash)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 85/100.** AutomationBench 52.3 beats Opus 5 (50.3) with Toolathlon 73.6 + OSWorld 80.8 near-frontier; capped by TB4.0 28.8 and ALE 27.6 trailing on longest sessions.
- **Reasoning: 84/100.** No Flash-direct GPQA/HLE, but Pro AA Index 46 (top open-weights, level with Grok 4.7) with Flash within 1–4 pts on every shared agent row; capped by zero Flash-direct reasoning numbers.
- **Context window: 95/100.** 1M tier (1,048,576 in, 128K out) per tier mapping; capped below 100 because no 98%+ retrieval proof at 512K+.
- **Multimodal: 95/100.** Native text/image/video/audio in, text out (omnimodal encoders + Visual Coding 71.5 measured); capped below 100 with no published vision-accuracy lead over Pro.
- **Coding: 87/100.** TB2.1 87.6 exceeds the 85% frontier bar with DeepSWE 67.9 just under the 74% bar and Cyber 77.2–95.1 security strength; capped by ProgramBench 26.0%, ExploitBench 25.3% tails and missing SWE-Verified/LiveCode direct runs.
- **Cost efficiency: 100/100.** $0 Zen Free tier in/out; paid fallback $0.14/$0.28 is still ~1/20 frontier cost.
- **Overall Score: 89/100.** Mean of the five non-cost dims (85+84+95+95+87)/5 = 89.2 → 89; best-fit as high-volume free omnimodal agent/coder, escalate to Pro/Opus for exploit-grade or 50%+ TB4.0 sessions.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-22
- Method: public internet research (Xiaomi release page + HF README, VentureBeat 2026-09-22, orcarouter/cellcog comparisons of Xiaomi tables, AA Index pages for Pro proxy); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
