# Grok 4 Fast — findings by Kimi K3

- Source: xAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`; Zen listing `opencode/grok-4-fast`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's September 2025 cost-efficiency flagship: one unified weight set steered into `reasoning` or `non-reasoning` mode, matching Grok 4 on benchmarks with ~40% fewer thinking tokens. Claimed #1 on LMArena Search Arena at launch; SOTA price-to-intelligence per Artificial Analysis.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`), grok.com (Fast/Auto modes), OpenRouter, Vercel AI Gateway; OpenCode Zen listing `opencode/grok-4-fast`. OpenAI-compatible Chat Completions.
- **Release / knowledge:** Released 2025-09-19 (xAI newsroom). Knowledge cutoff not publicly stated.
- **IDs:** `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (xAI); `opencode/grok-4-fast` (Zen). No Zen Free ID.
- **Context window:** 2M tokens native (xAI launch post, both API variants); Zen listing caps at 128K total (scored on the capped tier — see notes).
- **Modalities:** Zen listing: text in/out. Native model ingests media incl. images/videos during agentic search (xAI); AA-MMMU-Pro 61.8% implies vision input supported natively (BenchLM). Reasoning yes (unified); tool calls yes (trained end-to-end with tool-use RL); JSON mode yes.
- **Pricing (as of 2026-09-27):** $0.20 / $0.50 per 1M in/out under 128K; $0.40 / $1.00 at ≥128K; cached input $0.05 (xAI launch post). Zen: standard paid pricing, no free tier.
- **Architecture:** Proprietary; unified reasoning/non-reasoning single-weight architecture; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **65.8%** (BenchLM, AA harness)
- BrowseComp: **44.9%** (xAI launch; Grok 4 43.0%); BrowseComp-zh: **51.2%**; X Bench Deepsearch (zh): **74.0%**; X Browse: **58.0%** (internal)
- LMArena Search Arena: **#1, 1163 Elo** (+17 over o3-search; codename `menlo`); LMArena Text Arena: **#8** (`tahoe`)
- SimpleQA: **95.0%**, Reka Research Eval: **66.0%** (xAI launch)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (xAI launch table); AA-GPQA Diamond 84.7% (BenchLM)
- AIME 2025 (no tools): **92.0%**; HMMT 2025 (no tools): **93.3%** (xAI launch)
- HLE (no tools): **20.0%** (xAI launch); AA-HLE 19.1% (BenchLM)
- LCR / AA-LCR: **73.7%** (BenchLM)
- CritPt: **2.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **17.9**; BenchLM overall: **42.43 / #106 of 508** (partial coverage, 12 of 486 benchmarks)
- Omniscience Accuracy / Hallucination Rate: **22.8% / 68.3%** (AA via BenchLM)

Coding:

- LiveCodeBench (Jan–May): **80.0%** (xAI launch table)
- Vibe Code Bench: **0.00%** (BenchLM harness — flagged anomalous)
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE: no verified public score found

Long context:

- 2M native window claimed (xAI); AA-LCR 73.7% exists but no MRCR/RULER at ≥512K reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 65.8% plus Search Arena #1 with native tool-use RL and BrowseComp 44.9% put it top of the mid band; capped by missing Terminal-Bench/GDPval/Claw-Eval rows.
- **Reasoning: 78/100.** GPQA 85.7%, AIME 92%, HMMT 93.3% are strong for its cost class; capped by HLE 20% no-tools and low AA Intelligence Index 17.9.
- **Context window: 58/100.** Scored on the 128K-total Zen tier (100K–200K band → 50–64); note: the native API model is officially 2M (would score 95+ there) — Zen's cap is what this listing offers.
- **Multimodal: 15/100.** Zen listing is text in/out (10–20 band); native image input exists per AA-MMMU-Pro 61.8% but isn't exposed on the evaluated ID.
- **Coding: 68/100.** Methodology's exact mid case: LiveCodeBench 80% with Vibe <10% → 65–75; no SWE-bench row. Capped at 68 by the anomalous Vibe 0% and missing SWE/SciCode evidence.
- **Cost efficiency: 95/100.** $0.20/$0.50 (cached $0.05) sits between the $0.10/$0.20 (97–99) and $0.60/$2.20 (~92) anchors; independently verified SOTA price-to-intelligence (AA per xAI).
- **Overall Score: 58/100.** (70+78+58+15+68)/5 = 57.8 → 58. Best fit: dirt-cheap reasoning agent/search workloads via the native 2M-context API; on the capped text-only Zen tier it only suits short text tasks.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (xAI newsroom launch post + benchmark tables, BenchLM model page, DuckDuckGo discovery); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
