# Grok 4.1 — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok 4.1 (`xai/grok-4.1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (thinking / non-reasoning modes; paid, no Free ID on OpenCode Zen)
- **Short description:** xAI's 2025-11-17 post-training refinement of the same ~1.7T-parameter MoE base that powers Grok 4. It traded raw benchmark leadership for usability: blind human preference up 64.78% over the previous production model, #1 on EQ-Bench3 and an LMArena text win at launch. The reasoning mode is codenamed `quasarflux`, the non-reasoning mode `tensor`.
- **Provider / access:** xAI API (`grok-4.1`, `grok-4-1-*`), grok.com, X and the mobile apps; OpenAI-compatible Chat Completions plus the Responses API. Proprietary/closed weights.
- **Release / knowledge:** Released 2025-11-17 (silent rollout 2025-11-01 → 11-14); support for the Agent Tools API (server-side web/X search, Python sandbox, document retrieval) shipped with Grok 4.1 Fast two days later.
- **IDs:** `grok-4.1` (xAI API), `xai/grok-4.1` (third-party catalogues). No OpenCode Zen Free ID found.
- **Context window:** 256K input / 8K output for standard Grok 4.1 (LLM Stats provider table). The 2M-token window belongs to Grok 4.1 Fast, not this checkpoint.
- **Modalities:** text and image in, text out; reasoning + non-reasoning modes in one model, tool/function calling, MCP/remote tools, Agent Tools API. No audio or video.
- **Pricing (as of 2026-09-27):** $3.00 / 1M input and $15.00 / 1M output via xAI (LLM Stats; ≈$3.57/1M blended at 20:1). Grok 4.1 Fast, a different model, is $0.20/$0.50.
- **Architecture:** ~1.7T total-parameter Mixture-of-Experts, same base weights as Grok 4; gains come from a rebuilt post-training pipeline (verifiable rewards plus frontier reasoning models used as autonomous reward graders). Claude-style disclosure of active-parameter count: none.

### Raw benchmarks found

Agent / tool use:

- TAU3-Bench **71.6%**; Terminal-Bench 2.0 **41.3%**; GDPval-AA **1211 Elo**; OpenClaw Arena Model Leaderboard **51.8%**
- M3-BENCH **90** (9/12, 27th pct); DPBench deadlock-simultaneous **70.0%** (rank 3 of 5); OI-Bench standard accuracy **78.1%** with directive attack-success rates 6.0–8.6%
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Terminal-Bench 2.1: **no verified public score found** for this checkpoint

Reasoning / knowledge:

- EQ-Bench3 **1586 Elo — #1 overall** (previous frontier models ~1470–1490)
- Hallucination rate **4.22%** (down from 12.09% for Grok 4 — a 65% reduction); SimpleQA **93.8%**; SimpleQA Verified **67.5%**
- ComputeBench **117.4**; Codeforces Elo **2504**; HLE **11.9%**; MRCR **62.0%**
- BenchmarkList profile: BenchLM general knowledge **90** (7/106, 94th pct), RP-Bench **1507.1**, MuseBench **20.5%**, ResearchClawBench **13.5** (15/17), LiveMedBench **0.3%**, ECI **128.78 (#96/398)**; Artificial Analysis Intelligence Index value for 4.1 thinking: **no verified public score found**
- LMArena Text Arena: **1483 Elo #1 overall** (thinking, at launch) and **1465 Elo #2** (non-reasoning mode)

Coding:

- LiveCodeBench **68.6%**; SWE-Pro **61.4%**; Codeforces Elo **2504**
- SWE-bench Verified / Terminal-Bench 2.1 / SciCode: **no verified public score found** for this checkpoint

Long context:

- MRCR **62.0%** at the published setting; no RULER/GraphWalks value reported, and the 8K output cap is the binding limit in practice. Grok 4 Fast, not 4.1, carries the 2M window.

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU3 71.6% and GDPval-AA 1211 are solid, and the Agent Tools API makes server-side search/sandbox calls a single request; the cap is Terminal-Bench 2.0 at 41.3% and a missing MCP Atlas/Toolathon row.
- **Reasoning: 84/100.** #1 EQ-Bench3 (1586 Elo), 4.22% hallucination rate and 93.8% SimpleQA are the strongest factuality/alignment profile in this scan, but 11.9% HLE and 62.0% MRCR show the reasoning ceiling sits below 2026 frontier models.
- **Context window: 76/100.** 256K input is a genuine step above 200K peers, but it is a 256K/8K shape — the small output budget and the absence of a long-context retrieval benchmark cap the score, and 2M remains a Fast-only feature.
- **Multimodal: 65/100.** Text and image input with a published VisionBench **73.0%**; no audio, video or image output, so coverage stops at standard vision-language input.
- **Coding: 80/100.** 68.6% LiveCodeBench and a 2504 Codeforces Elo are strong for a post-training-only update, but 61.4% SWE-Pro with no SWE-bench Verified figure keeps it behind the coding specialists.
- **Cost efficiency: 62/100.** $3/$15 per 1M is mid-tier pricing for frontier-class quality — reasonable value, but roughly 15× the blended cost of Grok 4 Fast and with no free tier.
- **Overall Score: 76.6/100.** (78 + 84 + 76 + 65 + 80) / 5 = 76.6. Best fit: emotional/natural conversation, factuality-sensitive information seeking and agentic search, rather than terminal-heavy coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (xAI Grok 4.1 launch post, LLM Stats provider/model page, BenchmarkList profile, ChatForest review). **Re-verification attempt 2026-09-27:** xAI's public models hub now surfaces only **Grok 4.7** (500K context, $2.00/$6.00, knowledge cutoff May 2026) and exposes a "Model Retirement (May 15, 2026)" notice; the retirement schedule page itself returned 404 on the URL tried, so **Grok 4.1's live availability on the xAI API could not be confirmed in this pass** — the specs and scores below stand as researched, but treat the endpoint status as unverified. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
