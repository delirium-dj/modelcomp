# GLM 5.2 — findings by Mimo v2.6 Flash

- Source: Zhipu AI / Z.AI/`glm-5.2`
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 (Zen entry `opencode/glm-5.2`)
- **Short description:** Z.AI's prior-generation open-weights MoE flagship (2026-06) for agentic long-horizon tasks and enterprise SE — MIT, 753B/40B-active, 1M native context; Zen serves a **204K** window. Superseded at list price by GLM-5.3 (2026-08-18) at the same $1.40/$4.40.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2` (Chat Completions) with a **Free Zen tier available**; Z.AI API `glm-5.2`; third parties (DeepInfra, Fireworks, Sail Research ~$0.50/$3.04, OpenRouter); self-host MIT weights.
- **Release / knowledge:** API 2026-06-13; open weights 2026-06-16 (HF). Knowledge cutoff not restated (GLM-5.x line ~early 2026).
- **IDs:** `opencode/glm-5.2` (Zen); `zai/glm-5.2` / `zhipuai/glm-5.2`.
- **Context window:** Zen meta **204K** total (verified meta.json); Z.AI native **1,000,000** in / ~131K out (IndexShare sparse attention). Scored on the **served 204K Zen window**; native 1M noted.
- **Modalities:** text in; text out; thinking effort High/Max; tool calls yes; JSON mode via API.
- **Pricing (as of 2026-09-22):** Zen **Free tier available** (eval tier; free = cost 100); Z.AI paid **$1.40 in / $4.40 out per 1M**, cache read $0.26; Sail Research from $0.50/$3.04.
- **Architecture:** MoE **~753B total / ~40B active**; MIT open weights; IndexShare sparse attention.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Z.AI launch (2026-06) primary; BenchLM/Epoch/themodelbeat independent rows where noted.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (Z.AI) / **77.9%** (AA independent, 2026-10-09 — spread 77.9–82.7 across all harnesses/sources)
- Terminal-Bench 4.0: **1.0%** (AA via OpenRouter, 2026-10-09 — near-zero on the newest board, alongside the existing TB3.0 4.6 row); AA Terminal-Bench Hard **50.8%** (2026-10-09 — conflicts with the BenchLM 30.7 above; different runs, both kept)
- Terminal-Bench 2.1 (Claude Code harness): **82.7%** (Z.AI best-reported)
- MCP-Atlas (Public): **76.8%** (Z.AI/BenchLM)
- τ²-bench: **99.1%** (Epoch/themodelbeat)
- GDPval-AA: **1418 Elo / 45.3%** (BenchLM)
- Toolathlon: **48.2%** (BenchLM)
- APEX-Agents-AA: **33.7%** (BenchLM)
- AA Agentic Index: **39.4** (BenchLM)
- Terminal-Bench Hard / BashArena: **30.7%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.AI) / **91.9%** (Epoch/themodelbeat)
- AIME 2026: **99.2%** (Z.AI)
- Humanity's Last Exam: **40.5%** text-only / **54.7%** with tools (Z.AI)
- CritPt / AA Intelligence Index: AA Intelligence Index **33.7** (Max effort, #12/117 open-weights class, median 18; AA via model page/OpenRouter, 2026-10-09 — **fills the first-pass gap**); CritPt **20.9%**, AA-Omniscience accuracy 24.3% / non-hallucination 73.7%, AA-LCR 78.3%, IFBench 73.3% (all AA, 2026-10-09). AA marks GLM-5.2 deprecated in favor of GLM-5.3.

Coding:

- SWE-bench Pro: **62.1%** (Z.AI; up from GLM-5.1 58.4; beats GPT-5.5 58.6, trails Opus 4.8 69.2)
- Terminal-Bench 2.0 (Vals): **81.0%** (BenchLM)
- Terminal-Bench 3.0: **4.6%** (BenchLM — new hard board, near-zero)
- FrontierSWE Dominance: **74.4** (Z.AI/Proximal; trails Opus 4.8 75.1 by 0.7, beats GPT-5.5 72.6)
- PostTrainBench: **34.3** (Z.AI; beats GPT-5.5 28.4, trails Opus 4.8 37.2)
- SWE-Marathon: **13.0%** (Z.AI; trails Opus 4.8 26.0)
- NL2Repo: **48.9%** (Z.AI)
- DeepSWE: **46.2** (Z.AI table)
- SWE-bench (Vals): **82.8%** (BenchLM)
- LiveCodeBench (Vals): **69.5%** (BenchLM)
- AA Coding Index: **68.8** (BenchLM)
- SciCode: **50.5%** (themodelbeat) / AA-SciCode 51.2 (BenchLM)
- SWE-bench Verified: **78.7%** (themodelbeat)
- Design Arena Code Categories: **#1 blind human-preference** (Layer3 Labs citing Design Arena)

Long context:

- Native 1M / Zen 204K; MRCR / RULER retrieval for 5.2: no verified public score found in this pass (IndexShare efficiency claims only)

Multimodal:

- **Text-only** — no vision/audio (template: 15)

### Normalized scores (1–100)

- **Tool use: 79/100.** TB2.1 81.0/82.7, MCP-Atlas 76.8, τ² 99.1, GDPval 1418 are production-grade agentic scores; Toolathlon 48.2, APEX 33.7, TB3.0 4.6, and TB Hard 30.7 cap below the 85+ frontier.
- **Reasoning: 87/100.** AIME 99.2, GPQA 91.2–91.9 (HF leaderboard rank **#8**, re-checked 2026-10-09), HLE-tools 54.7 — elite open-weight science/math reasoning; the new AA Index 33.7 (#12/117) and CritPt 20.9 fill the breadth gap without changing the band (held 2026-10-09; cross-file ordering note vs `glm-5.3` stands as flagged in the coding sibling).
- **Context window: 70/100.** Scored on **verified Zen 204K** window (methodology: 200K tier = 70); native Z.AI 1M would score ~96 if served full — note as upgrade path via Z.AI API, not this Zen ID.
- **Multimodal: 15/100.** Text-only (template rule: 15) — hard-confirmed 2026-10-09 by the HF chat template, which inserts "You are unable to process this media" reminders for image/video/audio parts.
- **Coding: 84/100.** SWE-Pro 62.1, FrontierSWE 74.4 (near Opus 4.8), SWE-Verified 78.7, AA Coding Index 68.8, Design Arena #1 — elite open coding; SWE-Marathon 13.0 and TB3.0 4.6 are the clear long-horizon/new-board caps.
- **Cost efficiency: 100/100.** **Free Zen tier available** on this ID (eval tier = $0 → 100); paid Z.AI $1.40/$4.40 also excellent if free quota ends.
- **Overall Score: 67/100.** Mean of five quality dims (79+87+70+15+84)/5 = 67.0. Best-fit: free-tier long-context text coding/agentic work on Zen where the 204K window suffices — step up to GLM-5.3 (same paid price, higher scores) or Z.AI's native 1M endpoint when window/peak quality matters more than the free tier.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (z.ai/blog/glm-5.2, benchr GLM-5.2 review, Layer3 Labs, BenchLM glm-5-2, Epoch/themodelbeat, automatio.ai); second pass 2026-10-09 re-checked [AA GLM-5.2](https://artificialanalysis.ai/models/glm-5-2) and the [OpenRouter z-ai/glm-5.2 benchmark block](https://openrouter.ai/z-ai/glm-5.2) (Index/CritPt/Omniscience/TB4.0 fills) plus the [HF zai-org/GLM-5.2 card](https://huggingface.co/zai-org/GLM-5.2) (GPQA #8 rank, text-only template confirmation); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gaps closed:** AA Intelligence Index **33.7** (#12/117), CritPt **20.9%**, Omniscience 24.3%/73.7%, AA-LCR 78.3, IFBench 73.3, **TB4.0 1.0%**.
- **Conflicts kept:** TB Hard 30.7 (BenchLM) vs 50.8 (AA); TB2.1 81.0–82.7 (Z.AI) vs 77.9 (AA); GPQA 91.2 (Z.AI/HF, HF rank #8) vs 89.5 (AA).
- **Confirmed:** MIT, 753B/40B, text-only (HF template hard-rejects media), deprecation banner (→ GLM-5.3); DeepInfra hosted route as cheap as $2.40/M output.
- **Scores:** no dimension changed; Overall held at 67 (Zen-served 204K window still the scoring anchor).
