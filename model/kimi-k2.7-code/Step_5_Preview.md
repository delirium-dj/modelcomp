# Kimi K2.7 Code — findings by Step 5 Preview

- Source: Moonshot AI / Kimi K2.7 Code (`opencode/kimi-k2.7-code`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's open-weight coding-specialized 1T/32B MoE cut — the #1 open-weight model on Vals' SWE-bench Verified (78.20%) and Terminal-Bench 2.1 (67.04%), with ~30% fewer thinking tokens than K2.6; it replaces K2.6 inside Kimi Code at $0.95/$4.00.
- **Provider / access:** Open weights (`moonshotai/Kimi-K2.7-Code`, HF); Moonshot API, OpenRouter (`moonshotai/kimi-k2.7-code`), OpenCode Zen (`opencode/kimi-k2.7-code`), Kimi Code CLI (plans from $19/mo); Chat Completions API, tool/MCP calling.
- **Release / knowledge:** released 2026-06-12 (Vals AI, llm-stats, BenchLM); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.7-code` (Zen), `moonshotai/kimi-k2.7-code` (OpenRouter), `moonshotai/Kimi-K2.7-Code` (HF weights).
- **Context window:** 262,144 (256K); 256K max output (Vals AI).
- **Modalities:** text, image, video in; text out; reasoning; tool calling (MCP).
- **Pricing (as of 2026-10-21):** $0.95/$4.00 per 1M in/out (Vals AI, folder meta; cached $0.19); llm-stats lists a cheaper $0.68/$3.40 route (cached $0.136).
- **Architecture:** 1T-total / 32B-active MoE (folder meta, codersera); open weights; ~30% more token-efficient reasoning than K2.6.

### Raw benchmarks found

Vals AI (independent) + Moonshot model card + Artificial Analysis / Epoch AI figures via BenchLM:

Agent / tool use:

- MCP Mark Verified: **81.1%** (Moonshot model card via BenchLM — beats Claude Opus 4.8 on this row per kingy.ai)
- τ²-bench: **90.1%** (Artificial Analysis via BenchLM)
- MCP Atlas: **76%** (Moonshot model card via BenchLM)
- Terminal-Bench 2.1: **67.04%** (Vals AI; rank 37/75, **#1 open-weight**)
- Kimi Claw 24/7: **46.9%** (Moonshot model card via BenchLM)
- GDPval-AA: **1,114 Elo / 26.9%** normalized (Artificial Analysis via BenchLM) — low
- AA Agentic Index: **22.5%** (Artificial Analysis via BenchLM)
- Tau3-Banking / OSWorld / Claw-Eval / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (Artificial Analysis via BenchLM)
- HLE: **35.0%** (Artificial Analysis via BenchLM) — mid band
- AA Intelligence Index: **25.8%** (Artificial Analysis via BenchLM — mid band)
- AA-LCR (long-context reasoning): **79.3%** (Artificial Analysis via BenchLM)
- CritPt: **10.0%** (Artificial Analysis via BenchLM); FrontierMath v2 T4: **12.2%** (Epoch AI via BenchLM)
- AA-Omniscience: Accuracy **39.6%**, Hallucination Rate **82.4%** (Artificial Analysis via BenchLM)
- AA-IFBench: **63.1%** (Artificial Analysis via BenchLM)
- MMLU-Pro: no verified public score found

Coding:

- SWE-bench Verified: **78.20% ±1.85** (Vals AI; rank 32/88 — matches Claude Opus 4.6 Thinking and GPT-5.4 xhigh, edges GPT-5.3 Codex; **#1 open-weight**)
- LiveCodeBench: **82.05% ±1.07** (Vals AI; rank 58/143, #8 open-weight — a relative weak spot)
- Vibe Code Bench v1.1: **47.21% ±5.19** (Vals AI; rank 66/116, #3 open-weight)
- Terminal-Bench 2.1: **67.04%** (listed above)
- AA-SciCode: **47.8%** (Artificial Analysis via BenchLM)
- AA Coding Index: **60.8%** (Artificial Analysis via BenchLM)
- CursorBench 3.2: **49.7%** (Cursor evals via BenchLM)
- Kimi Code Bench v2: **62.0%** (Moonshot model card)
- ProgramBench: **53.6%** (Moonshot model card) vs **0.00%** (Vals AI) — harness conflict flagged; neither independently reconciled
- MLS-Bench Lite: **35.1%** (Moonshot); OpenHarmony Bench: **52.1%** (OpenHarmony leaderboard via BenchLM)
- Code Migration: **25.39%** (Vals AI); SkillsBench: **50.04%** (Vals AI)
- DeepSWE / SWE-bench Pro: no verified public score found

Long context:

- AA-LCR **79.3%** long-context reasoning (Artificial Analysis, via BenchLM); 262K native window with 256K max output; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Mark Verified 81.1%, MCP Atlas 76%, τ²-bench 90.1% and Terminal-Bench 2.1 67.04% (#1 open-weight) show first-class coding-agent tool use; capped by GDPval 1,114 Elo (26.9%), AA Agentic Index 22.5%, Kimi Claw 46.9% and no Tau3/OSWorld/Claw numbers.
- **Reasoning: 82/100.** GPQA Diamond 89.6% is strong and AA-LCR 79.3% is good; capped by HLE 35.0%, AA Intelligence Index 25.8% (mid band), CritPt 10.0%, FrontierMath Tier 4 12.2%, IFBench 63.1% and an 82.4% hallucination rate.
- **Context window: 78/100.** 262,144 native with a generous 256K max-output budget lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 79.3% is mid-band and no ≥512K retrieval evidence exists.
- **Multimodal: 88/100.** Text, image and video input (video-in tier 75–90) with text-only output; no MMMU-class score published for this code-cut ID and no audio input or non-text output.
- **Coding: 80/100.** SWE-bench Verified 78.20% and Terminal-Bench 2.1 67.04% are both #1-open-weight results and Vibe Code Bench 47.21% is #3-open; capped by LiveCodeBench 82.05% (rank 58/143), SciCode 47.8%, AA Coding Index 60.8%, CursorBench 49.7% and Moonshot's own table showing it never beats GPT-5.5.
- **Cost efficiency: 85/100.** $0.95/$4.00 (cached $0.19) sits between the ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 reference bands; open weights (free self-host) plus a $0.68/$3.40 provider route pull the effective cost down.
- **Overall Score: 82/100.** Mean of (82 + 82 + 78 + 88 + 80) / 5 = 82.0 → 82. Best fit: the strongest open-weight long-horizon coding/agent backbone you can self-host at $0 — frontier closed models still lead every shared row in Moonshot's own comparison table.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Vals AI independent coding benchmark page, Artificial Analysis/Epoch AI/Cursor/OpenHarmony figures via BenchLM, llm-stats, kingy.ai, codersera); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
