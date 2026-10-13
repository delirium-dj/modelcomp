# GLM 5.2 — findings by Kimi K3

- Source: Z.AI (Zhipu) / GLM 5.2 (`zai-org/GLM-5.2`, MIT open weights)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; official HF card verifies 753B params, MIT license, and adds SWE-bench Pro + full official reasoning/coding agentic tables; OpenRouter verifies release date and a very cheap pricing tier)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's open-weight GLM-5 flagship released June 16, 2026 — 753B MoE, solid 1M context, strong reasoning at max effort and #1 τ²-Telecom agentic stack. Succeeded by GLM-5.3 (same base, post-training-only gains) on Aug 18, 2026.
- **Provider / access:** Z.AI API, ~30 OpenRouter providers, open weights HF `zai-org/GLM-5.2` (MIT — "Pure Open, no regional limits" per official card).
- **Release / knowledge:** Released **2026-06-16** (OpenRouter + HF collection timestamp; corrects first-pass 2026-06-13 from benchleader); knowledge cutoff not verified.
- **IDs:** `z-ai/glm-5.2` (OpenRouter) / HF `zai-org/GLM-5.2`. Reasoning API: `reasoning_effort` high/xhigh (xhigh = max) per OpenRouter.
- **Context window:** **1M tokens** (official card — "solid 1M-token context that stably sustains long-horizon work"; IndexShare sparse-attention reuse cuts per-token FLOPs 2.9× at 1M).
- **Modalities:** text in/out; reasoning yes (multiple effort levels incl. max); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **OpenRouter headline $0.06/M in / $7/M out** (new this pass — cheapest-verified headline; first-pass benchleader blended ~$0.64/$2.02 and typical $1.40/$4.40 remain plausible across providers; wide provider spread).
- **Architecture:** **753B-param MoE (glm_moe_dsa), MIT** (HF safetensors — official; confirms first-pass "~754B-class community metadata"). GLM-5.3 uses the **same base model** (5.3 = post-training on this base, per 5.3 card).

### Raw benchmarks found

Agent / tool use (official card rows marked *official*, new this pass):

- Terminal-Bench 2.1: **81.0%** (Terminus-2) / **82.7%** (best harness, Claude Code 2.1.167) *(official)*; first-pass TB-Hard 50.8% and TB 4.0 1.0% (benchleader) stand
- MCP-Atlas (500-task public set): **76.8%** *(official)*; first-pass Scale SEAL 77.8% consistent
- Tool-Decathlon: **48.2%** *(official — new)*
- Agents' Last Exam (official leaderboard snapshot 2026-10-01): overall pass **20.4%**, CLI pass **23.8%** *(new)*
- τ²-Bench Telecom (AA): 99.1% (#1); Banking (AA): 34.6%; GDPval (AA): 42.9%; APEX-Agents (AA): 33.7%; LMArena Agent #4 (benchleader, first-pass aggregate)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** *(official — close to first-pass 91.9% Epoch max)*; 89.5% (AA); 85.6% (Vals)
- HLE: **40.5%** / w tools **54.7%** *(official — first pass had AA 41.1%, consistent)*
- CritPt: **20.9%** *(official — matches first pass exactly)*; ARC-AGI-1 77.0% / 2 22.8% (benchleader)
- AIME 2026: **99.2%** *(official — first pass had Epoch 90.0%, a much lower independent reading; flagged conflict, likely effort/protocol diff)*
- HMMT Nov 2025 **94.4%** / Feb 2026 **92.5%**; IMOAnswerBench **91.0%** *(official — new)*
- AA Intelligence Index 33.7 (max); LiveBench 73.2%; AA-LCR 78.3% (benchleader, first-pass aggregate)

Coding:

- **SWE-bench Pro: 62.1%** *(official — NEW THIS PASS; for reference the same card lists Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%)*
- SWE-bench Verified (Epoch): 78.7% (#5); SWE-bench (Vals): 82.8% (benchleader, first-pass)
- DeepSWE: **46.2%** *(official — first pass had 43.8%)*; FrontierSWE (Dominance): **74.4%**; ProgramBench: **63.7%**; NL2Repo: **48.9%** *(official — NL2Repo/ProgramBench new)*; SWE-Marathon: **13.0%** *(official — new, weak)*; PostTrainBench: **34.3%** *(official — new)*
- LiveCodeBench (Vals) 69.5%; SciCode (AA) 51.2%; LMArena WebDev 1600 / Coding 1510 (benchleader, first-pass)

Long context:

- Native 1M with IndexShare attention diet (official card); AA-LCR 78.3% (benchleader, first-pass); no MRCR/RULER row.

Multimodal:

- Text-only — floor applies.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 84/100.** Unchanged — official MCP-Atlas 76.8% and Tool-Decathlon 48.2% confirm the benchleader aggregate; capped by ALE CLI 23.8%, GDPval 42.9%.
- **Reasoning: 80/100.** Unchanged — official GPQA 91.2% / HMMT 92.5% / CritPt 20.9% confirm the profile; AIME conflict (99.2% official vs 90.0% Epoch) noted, both elite-tier; capped by ARC-AGI-2 22.8%.
- **Context window: 88/100.** Unchanged — official card confirms solid-1M design goal + LCR 78.3%.
- **Multimodal: 15/100.** Unchanged — text-only.
- **Coding: 84/100.** +1 — newly verified official SWE-bench Pro 62.1%, ProgramBench 63.7%, FrontierSWE 74.4%, NL2Repo 48.9% add depth; capped by SWE-Marathon 13.0% and first-pass LiveCodeBench 69.5%.
- **Cost efficiency: 82/100.** Unchanged — MIT open weights + OpenRouter-verified $0.06/$7 headline tier confirm the value case.
- **Overall Score: 70/100.** Half-up mean of the five quality dims (84+80+88+15+84)/5 = 70.2 → 70 (unchanged; the +1 coding does not move the rounded mean). Best fit: text-only agentic + coding stack with MIT open weights and 1M context at sub-$1 input rates. GLM-5.3 supersedes it on the same base — pick 5.2 when the MIT license (vs GLM-5.3's custom license) matters.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (official HF card `zai-org/GLM-5.2` — 753B MoE, MIT, official benchmark table incl. SWE-bench Pro 62.1 / TB 2.1 81.0–82.7 / MCP-Atlas 76.8 / Tool-Decathlon 48.2 / HMMT 92.5 / CritPt 20.9; HF eval-results w/ official Agents'-Last-Exam snapshot 2026-10-01; OpenRouter `z-ai/glm-5.2` — released Jun 16 2026, $0.06/$7, 1M context). Conflicts flagged: AIME 99.2 official vs 90.0 Epoch; pricing headline vs benchleader historical blend. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
