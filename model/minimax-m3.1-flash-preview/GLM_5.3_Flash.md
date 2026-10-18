# MiniMax M3.1 Flash Preview — findings by GLM 5.3 Flash

- Source: MiniMax (`MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's latest M-series model — a frontier multimodal coding model with a 1M context window and tunable thinking depth, built for everyday development work (bug fixes, feature work, edge cases, regression testing). Launched quietly inside MiniMax Code before any announcement. Not an alias: a distinct M3.1 Flash preview tier; "Flash" = built for speed on short everyday tasks, "Preview" = no model card, details can change.
- **Provider / access:** MiniMax Platform — Anthropic-compatible `https://api.minimax.io/anthropic` (recommended; mainland China `api.minimax.cn/anthropic`), OpenAI-compatible `https://api.minimax.io/v1`, OpenAI Responses also supported. Available only through the Token Plan and MiniMax Code for now (desktop macOS/Windows + web); no OpenRouter listing, no self-hosting.
- **Release / knowledge:** Released 2026-09-27 (announced via @MiniMaxAgent on X; quota reset + 2x daily check-in credits 2026-09-28 to 2026-10-07 UTC+8). Knowledge cutoff: no verified public data found.
- **IDs:** `MiniMax-M3.1-Flash-Preview` (no OpenCode Zen Free ID exists)
- **Context window:** 1,000,000 tokens total (official MiniMax docs — Model Invocation table; BenchLM lists "Coming soon"); max output via `max_tokens`/`max_completion_tokens`/`max_output_tokens` fields, no published cap number.
- **Modalities:** text, image, video in (official); text out plus a separate thinking stream; reasoning always on — thinking cannot be disabled (`thinking: {"type": "disabled"}` or `effort: "none"` returns 400 "requires adaptive thinking"); effort levels low/medium/high/xhigh/max, default max; tool calls supported.
- **Pricing (as of 2026-10-11):** No public per-token price — Token Plan subscription only: Plus $22/mo, Max $55/mo, Ultra $132/mo (current docs; older posts quote $20/$50/$120); credits $1 per 1,000; shared 5-hour + weekly quota across eligible text/image/speech models; no free unlimited public API.
- **Architecture:** Unpublished for this preview (no params, no MoE/attention details, no open weights). Leaked partner note (~2026-09-22, unverified): all-sparse attention, Q8KV4 KV-cache, NVFP4 W4A4 experts, DSpark speculative decoding, ~250 GB/236 GB private checkpoints. M3 sibling uses proprietary MiniMax Sparse Attention — family context only.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page tracks MiniMax M3.1 Flash Preview with **0 of 625 rows ("coming soon")** and context "Coming soon" — no independent evidence has surfaced since the 2026-10-02 pass; the AICodeKing KingBench 3 run remains the only independent measurement. Scores are carried, not moved.

Agent / tool use:

- Terminal-Bench 2.1 / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (MCP Atlas 74.2% is MiniMax-M3's vendor number — a different model, not applied here)

Reasoning / knowledge:

- GPQA Diamond / HLE / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (BenchLM explicitly unranked/"coming soon"; AA's snapshots are MiniMax-M3's, not the Flash preview's)

Coding:

- KingBench 3 (8 generation tasks): **66.25% (53/80)** (AICodeKing independent test, 2026-09-28, via daily.dev/YouTube — vs MiniMax-M3's 31.25% on the same suite, Opus 5.5 93.75%, SWE2 83.75%, GPT6 Soul 82.5%)
- KingBench 3 task detail: folding table **9/10** (smooth animated 3D geometry); elevator sim **3/10** (crashed — position value called as a function); archery game **4/10** (targets drawn in wrong location, timer pausing between shots)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found for this exact ID (M3's 80.5%/59.0% are vendor numbers for a different model)

Long context:

- No long-context retrieval reported (1M window documented by the vendor; no MRCR/RULER numbers published)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: BenchLM's coverage is explicitly empty and no new independent rows surfaced.

- **Tool use: 55/100.** No verified tool-use benchmark (TB2.1/Tau3/GDPval/Claw all absent); tool calls are officially supported and thinking is always-on for agentic accuracy, but KingBench 3 shows inconsistent execution (two of eight tasks with broken core interactions), keeping it mid-low.
- **Reasoning: 60/100.** No verified raw reasoning benchmark (GPQA/HLE absent, BenchLM unranked); the always-on adaptive thinking and the KingBench math/fine-tuning tasks are the only signals — mid band on indirect evidence.
- **Context window: 95/100.** 1,000,000-token context window officially documented (≥1M tier = 95–100); no measured retrieval near the limit — MiniMax has not published quality-at-1M data, so 100 is not justified.
- **Multimodal: 78/100.** Text, image, and video input officially confirmed with documented image tokenization cost ranges — the +video-in band (75–90); no vision benchmark exists to push it toward 90.
- **Coding: 66/100.** KingBench 3 66.25% (53/80) is a +35-point jump over MiniMax-M3 on the same suite but trails Opus 5.5 (93.75%) by a wide margin, and results are inconsistent (9/10 folding table vs 3/10 elevator sim) — mid band, capped by unreliability on long diffs (early reports of edits stopping mid-write).
- **Cost efficiency: 78/100.** No per-token price exists — access is Token Plan subscription ($22–$132/mo) and MiniMax Code credits; scored mid-high on subscription value, capped by the unpublished per-token rate and shared multi-model quota.
- **Overall Score: 70.8/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (55 + 60 + 95 + 78 + 66) / 5 = 354/5 = 70.8 — unchanged. Best fit: everyday coding loops in MiniMax Code at medium/high effort (move off the max default — it thinks at full depth even for one-line renames); keep MiniMax-M3 for production API work until a model card, public per-token price, and independent benchmarks land.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (verification pass: the freshly fetched benchlm.ai page shows 0 of 625 rows "coming soon"; the prior 2026-10-02 pass on SaaSCity/AICodeKing/MiniMax docs remains the evidence base; 2026-10-16 re-check: BenchLM page still shows 0 of 639 rows, coming soon — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
