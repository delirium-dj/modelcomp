# Grok 4 Fast — findings by GLM 5.3 Flash

- Source: xAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient reasoning model delivering frontier-level performance at ~98% lower cost than Grok 4, with a 2M-token context window, unified reasoning/non-reasoning architecture, and native web/X search.
- **Provider / access:** xAI API (`grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`), also on OpenRouter and Vercel AI Gateway; free for all users on grok.com in Fast/Auto modes. Chat Completions API.
- **Release / knowledge:** 2025-09-19 release (model card: 2025-09-19); knowledge cutoff not stated in fetched sources.
- **IDs:** `xai/grok-4-fast-reasoning`, `xai/grok-4-fast-non-reasoning` (no Free ID exists on Zen)
- **Context window:** 2,000,000 tokens (xAI announcement; both variants; benchlm 2M).
- **Modalities:** text input; text output; reasoning yes (unified — long chain-of-thought steered via system prompt / API parameter); tool calls yes (end-to-end tool-use RL: code execution, web/X browsing, image/video ingestion via search); JSON mode supported. Enhanced multimodal was listed as future work at launch.
- **Pricing (as of 2026-10-09):** $0.20 in / $0.50 out per 1M (<128K prompt); $0.40 in / $1.00 out (≥128K); cached input $0.05 per 1M (xAI announcement pricing table). Free tier on grok.com (consumer data-usage caveats apply).
- **Architecture:** proprietary; single unified weight set for reasoning and non-reasoning modes, trained with large-scale RL for intelligence density (40% fewer thinking tokens than Grok 4 at comparable performance).

### Raw benchmarks found

> xAI's Sep 19, 2025 announcement + AA/Vals rows via benchlm.ai (updated 2026-10-09). Previously-missing rows now measured.

Agent / tool use:

- BrowseComp: **44.9%** (SOTA at release; Grok 4: 43.0%) (xAI announcement)
- Tau2-bench: **65.8%** (AA via benchlm.ai — fills the previously-missing Tau row)
- SimpleQA: **95.0%** (Grok 4: 94.0%) (xAI announcement)
- Reka Research Eval: **66.0%** (Grok 4: 58.0%) (xAI announcement)
- BrowseComp (zh): **51.2%**; X Bench Deepsearch (zh): **74.0%**; X Browse (internal multihop search): **58.0%** (xAI announcement)
- LMArena Search Arena: **#1** — `grok-4-fast-search` (`menlo`) at **1163 Elo**, +17 over `o3-search` (xAI announcement)
- Terminal-Bench 2.1 / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.7%** (AA-GPQA Diamond — corroborates the launch claim of 85.7%)
- AIME 2025 (no tools): **92.0%**; HMMT 2025 (no tools): **93.3%** (xAI announcement)
- HLE: **19.1%** (AA-HLE — corroborates the launch 20.0%; well under the 40% bar)
- AA-LCR: **73.7%** (AA long-context-reasoning board — fills the previously-missing LCR); CritPt: **2.9%**
- Artificial Analysis Intelligence Index: **17.9** (AA current reading via benchlm.ai — fills the previously-missing independent index value; the launch-era claim was only a qualitative SOTA price-to-intelligence ratio)
- AA-Omniscience: Index -29.9, accuracy **22.8%**, hallucination rate **68.3%** (benchlm.ai — poor)
- AA-IFBench: **50.5%** (AA)
- LMArena Text Arena: **#8** — `grok-4-fast` (`tahoe`), on par with `grok-4-0709` (xAI announcement)

Coding:

- LiveCodeBench (Jan–May 2025): **80.0%** (Grok 4: 79.0%, GPT-5 High: 86.8%) (xAI announcement)
- Vibe Code Bench: **0.00%** (Vals AI v1.1 via benchlm.ai — fills; very weak)
- SWE-bench Verified (Vals AI bash-only harness, 9/1/2026): **66 / 37 / 7 / 0%** by difficulty band (<15 min / 15m–1h / 1–4h / >4h) — weak on long tasks
- SWE-bench Verified (official) / SWE-bench Pro / SciCode: no verified public score found

Long context:

- AA-LCR **73.7%** measured (fills the previously-missing row); 2M window spec; no MRCR/RULER/GraphWalks value found

Multimodal / vision:

- AA-MMMU-Pro: **61.8%** (AA — fills the first measured vision row; image/video ingestion via search tooling, not native input)

### Normalized scores (1–100)

- **Tool use: 80/100.** Native tool-use RL with SOTA agentic search (BrowseComp 44.9%, SimpleQA 95%, LMArena Search #1) and the filled Tau2 65.8%; capped by absent Terminal/Claw/MCP-Atlas scores and weak long-task SWE-bench.
- **Reasoning: 78/100.** GPQA 84.7–85.7%, AIME 2025 92.0% and HMMT 93.3% are strong; the filled AA Index 17.9, HLE 19.1–20.0%, CritPt 2.9% and the 68.3% hallucination rate cap it down from the old 84.
- **Context window: 92/100.** 2M tokens — top-tier at release and still among the largest, with the filled AA-LCR 73.7% measured; capped only by lack of ≥98%-retrieval results at extreme lengths.
- **Multimodal: 50/100.** Text-first with image/video ingestion through search tooling (measured AA-MMMU-Pro 61.8%); native multimodal input was explicitly future work at launch.
- **Coding: 74/100.** LiveCodeBench 80.0% is strong; the filled Vibe Code Bench 0.00% and the bash-only SWE-V long-task bands (37/7/0%) cap it.
- **Cost efficiency: 92/100.** $0.20/$0.50 per 1M tokens with $0.05 cached — SOTA price-to-intelligence per Artificial Analysis (Sep 2025); extremely cheap for frontier-level quality.
- **Overall Score: 75/100.** Mean of the five quality dims (80 + 78 + 92 + 50 + 74) / 5 = 74.8 → 75. Best fit: cost-sensitive agentic search and information-seeking with huge context needs.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing AA and Vals boards + the xAI announcement — official plus independent sources, conflicts compared; earlier draft via xAI announcement + Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Tau2 65.8%, AA-LCR 73.7%, AA Index 17.9, Vibe 0.00%, AA-MMMU-Pro 61.8%, AA-Omniscience 68.3% — Tool 82→80, Reasoning 84→78, Multimodal 45→50, Coding 78→74, Overall 76→75.
- Future sources: add a new file next to this one, e.g. `Grok_4.1_Fast.md`, using the same headings.
