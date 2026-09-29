# Grok 4 Fast — findings by Kimi K3

- Source: SpaceXAI — post-July-2026 branding of xAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`; Zen listing `opencode/grok-4-fast`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** SpaceXAI's September 2025 cost-efficiency flagship: one unified weight set steered into `reasoning` or `non-reasoning` mode, matching Grok 4 on benchmarks with ~40% fewer thinking tokens (~98% cheaper for the same frontier-benchmark performance, per xAI). Claimed #1 on LMArena Search Arena at launch; SOTA price-to-intelligence per Artificial Analysis. Superseded by Grok 4.1 Fast (Nov 2025, which halved its hallucination rate) and the 4.20/4.x line; no longer in the official API pricing table as of Sept 2026.
- **Provider / access:** SpaceXAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`), grok.com (Fast/Auto modes), OpenRouter, Vercel AI Gateway; OpenCode Zen listing `opencode/grok-4-fast`. OpenAI-compatible Chat Completions. Status: legacy — `grok-4-fast-*` IDs are absent from the docs.x.ai pricing table checked 2026-09-29 (current lineup: 4.3/4.20/4.5/4.6/4.7).
- **Release / knowledge:** Released 2025-09-19 (x.ai/news launch post; model card at data.x.ai/2025-09-19-grok-4-fast-model-card.pdf). Knowledge cutoff not publicly stated.
- **IDs:** `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (SpaceXAI API); `opencode/grok-4-fast` (Zen). LMArena codenames: `menlo` (Search Arena), `tahoe` (Text Arena). No Zen Free ID.
- **Context window:** 2M tokens native (official launch post, both API variants); Zen listing caps at 128K total (scored on the capped tier — see notes).
- **Modalities:** Zen listing: text in/out. Native model ingests media incl. images/videos on X during agentic search (launch post); AA-MMMU-Pro 61.8% implies vision input supported natively (BenchLM). Reasoning yes (unified single-weight architecture, steered via system prompt); tool calls yes (trained end-to-end with tool-use RL); JSON mode yes.
- **Pricing (as of 2026-09-29):** Launch pricing $0.20 / $0.50 per 1M in/out under 128K tokens; $0.40 / $1.00 at ≥128K; cached input $0.05 (official launch post). No current official price — removed from docs.x.ai table. Zen: standard paid pricing, no free tier.
- **Architecture:** Proprietary; unified reasoning/non-reasoning single-weight architecture; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **65.8%** (BenchLM, AA harness)
- BrowseComp: **44.9%** (xAI launch; Grok 4 43.0%); BrowseComp-zh: **51.2%**; X Bench Deepsearch (zh): **74.0%**; X Browse: **58.0%** (internal)
- LMArena Search Arena: **#1, 1163 Elo** (+17 over o3-search; codename `menlo`); LMArena Text Arena: **#8** (`tahoe`), on par with grok-4-0709
- SimpleQA: **95.0%**, Reka Research Eval: **66.0%** (xAI launch); 4.1 Fast's later research evals (63.9 Reka / 87.6 FRAMES) use this as reference point
- Terminal-Bench 4.0 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (xAI launch table); AA-GPQA Diamond 84.7% (BenchLM)
- AIME 2025 (no tools): **92.0%**; HMMT 2025 (no tools): **93.3%** (xAI launch)
- HLE (no tools): **20.0%** (xAI launch; Grok 4 25.4%); AA-HLE 19.1% (BenchLM)
- LCR / AA-LCR: **73.7%** (BenchLM)
- CritPt: **2.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **17.9** (current v4.3-era reading, BenchLM-mirrored; launch-era v3 promo chart cited ~75 — pre-rebase, not comparable). BenchLM overall: **42.43 / #106 of 508** (partial coverage, 12 of 486 benchmarks)
- Omniscience Accuracy / Hallucination Rate: **22.8% / 68.3%** (AA via BenchLM). Grok 4.1 Fast later cut hallucination rate in half vs Grok 4 Fast (x.ai/news, 2025-11-19)

Coding:

- LiveCodeBench (Jan–May): **80.0%** (xAI launch table; Grok 4 79.0%)
- Vibe Code Bench: **0.00%** (BenchLM harness — flagged anomalous)
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE: no verified public score found

Long context:

- 2M native window claimed (xAI); AA-LCR 73.7% exists but no MRCR/RULER at ≥512K reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 65.8% plus Search Arena #1 with native tool-use RL and BrowseComp 44.9% put it top of the mid band; capped by missing Terminal-Bench/GDPval/Claw-Eval rows.
- **Reasoning: 78/100.** GPQA 85.7%, AIME 92%, HMMT 93.3% are strong for its cost class (upper 70s for a 2025-era model by 2026 standards); capped by HLE 20% no-tools and low current AA Index 17.9.
- **Context window: 58/100.** Scored on the 128K-total Zen tier (100K–200K band → 50–64); note: the native API model is officially 2M (95–100 territory there) — Zen's cap is what this listing offers.
- **Multimodal: 15/100.** Zen listing is text in/out (10–20 band); native image input exists per AA-MMMU-Pro 61.8% but isn't exposed on the evaluated ID.
- **Coding: 68/100.** Methodology's exact mid case: LiveCodeBench 80% with Vibe <10% → 65–75; no SWE-bench row. Capped at 68 by the anomalous Vibe 0% and missing SWE/SciCode evidence.
- **Cost efficiency: 97/100.** Verified launch pricing $0.20/$0.50 (cached $0.05) sits squarely in the $0.20/$0.50 ≈ 97–99 cheap-tier band; AA independently verified SOTA price-to-intelligence at launch.
- **Overall Score: 58/100.** (70+78+58+15+68)/5 = 57.8 → 58. Best fit: dirt-cheap reasoning agent/search workloads via the native 2M-context API; on the capped text-only Zen tier it only suits short text tasks. As of Sept 2026, consider Grok 4.1 Fast's successors instead — this ID is legacy.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: public internet research (x.ai/news launch post + benchmark tables, docs.x.ai pricing table, BenchLM model page); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed launch figures unchanged (2025-09-19, 2M native, $0.20/$0.50 tiered); marked legacy — `grok-4-fast-*` missing from current official pricing table; cost score moved 95 → 97 per cheap-tier band; AA Index annotated launch-era v3 ~75 vs current v4.3-era 17.9; branding updated xAI → SpaceXAI.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
