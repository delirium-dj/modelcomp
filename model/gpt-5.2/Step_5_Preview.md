# GPT-5.2 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Thinking)
- **Short description:** OpenAI's December 2025 flagship (released 2025-12-11; now the "previous flagship" after GPT-5.4/5.5/6) — the first model OpenAI measured at or above human-expert level on GDPval knowledge work (70.9% wins-or-tes across 44 occupations), with then-state-of-the-art SWE-bench Pro (55.6%) and MRCR v2 long-context integration. Shipped as Thinking / Pro / Instant; also spawned GPT-5.2-Codex (2025-12-18).
- **Provider / access:** OpenAI API `gpt-5.2` (Responses + Chat Completions; `gpt-5.2-pro` Responses-only); ChatGPT paid plans. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2` (Thinking), `gpt-5.2-pro`, `gpt-5.2-chat-latest` (Instant); snapshot `gpt-5.2-2025-12-11`.
- **Context window:** 400,000 tokens; 128,000 max output; `/compact` endpoint extends effective context.
- **Modalities:** Text, image and file in → text out. Reasoning effort none/low/medium/high/xhigh; function calling; tool search.
- **Pricing (as of 2026-10-09):** $1.75 / MTok input, $14.00 output, cached input $0.175 (90% off); GPT-5.2 Pro $21/$168; Azure first-party route observed at $0.88/$7.00.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use (OpenAI launch table, Thinking at xhigh):

- τ²-Bench: Telecom **98.7%** / Retail **82.0%**
- BrowseComp: **65.8%** (Pro 77.9%); BrowseComp Long Context: **92.0% @128K / 89.8% @256K**
- Scale MCP-Atlas: **60.6%** (GPT-5.1 44.5%); Toolathlon: **46.3%**
- Terminal-Bench 2.0: **64.7%** (Codex CLI harness, per the Claude Opus 4.6 system card); GDPval: **70.9% wins-or-ties / 49.8% clear wins** (Pro 74.1%)
- Investment-banking spreadsheet tasks (internal): 68.4%
- Claw-Eval / ClawProBench / GDPval-AA Elo: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Pro 93.2% — the highest in its benchmark cohort at launch)
- HLE: **34.5% no tools / 45.5% with search + Python** (Pro 36.6% / 50.0%)
- MMMLU: **89.6%**; HMMT Feb 2025: **99.4%**; AIME 2025: **100.0%**
- FrontierMath: Tier 1–3 **40.3%** (then-SOTA) / Tier 4 **14.6%** (with Python)
- ARC-AGI-1 (Verified): **86.2%**; ARC-AGI-2 (Verified): **52.9%** (Pro 54.2%)
- Artificial Analysis Intelligence Index: **30** (xhigh, rebased v4.3.2)

Coding:

- SWE-bench Pro (public): **55.6%** — state of the art at release; SWE-bench Verified: **80.0%**; SWE-Lancer IC Diamond: 74.6%; SWE-bench Multilingual: 66.7%
- LiveCodeBench Pro: **Elo 2393**; Arena Code Elo 1521
- GPT-5.2-Codex (sibling): Terminal-Bench 66.5%, SciCode 54.6%, GPQA 89.9%

Long context (the release's headline strength):

- OpenAI MRCR v2 8-needle: **98.2% (4–8K), 89.3% (8–16K), 95.3% (16–32K), 92.0% (32–64K), 85.6% (64–128K), 77.0% (128–256K)** — first model near 100% on the 4-needle variant out to 256K
- GraphWalks: BFS **94.0%** / parents **89.0%** (<128K)

Multimodal:

- MMMU-Pro: **79.5% no tools / 80.4% with Python**; Video-MMMU: 85.9%; CharXiv Reasoning: 82.1% / 88.7% with Python; ScreenSpot-Pro (w/ Python): 86.3%

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² Telecom 98.7% / Retail 82.0%, BrowseComp 65.8% (92.0% long-context) and MCP-Atlas 60.6% are solidly mid-frontier, and it was the first model at expert level on GDPval; capped by Toolathlon 46.3% and no published Terminal-Bench 4.0/AutomationBench numbers.
- **Reasoning: 88/100.** GPQA 92.4%, AIME 100%, HMMT 99.4%, ARC-AGI-2 52.9% and FrontierMath T1–3 40.3% are frontier-band; capped by HLE 34.5% without tools (the December generation's level), FrontierMath T4 14.6% and the rebased AA Index of 30.
- **Context window: 84/100.** 400K-token window with 128K output sits at the top of the 200K–500K band, and it backs it with the best MRCR v2 profile of its generation (98.2% → 77.0% out to 256K) plus GraphWalks 94.0%; the ≥1M tier is reserved for 1M-window models.
- **Multimodal: 70/100.** Text + image + file in → text out is the 60–70 band, at its top on MMMU-Pro 79.5–80.4%, CharXiv 88.7% (with Python) and ScreenSpot-Pro 86.3%; no video/audio input or non-text output.
- **Coding: 82/100.** SWE-bench Pro 55.6% (SOTA at release), SWE-bench Verified 80.0%, SWE-Lancer 74.6% and LCB Pro Elo 2393 are frontier-adjacent; capped by SWE-bench Multilingual 66.7% and the newer generations' 64–81% SWE-Pro range that now leads the field.
- **Cost efficiency: 70/100.** $1.75/$14 per MTok (cached $0.175) sits between the methodology's ~$1.25/$4.25 ≈ 88 and ~$3/$15 ≈ 60 tiers; Azure's observed $0.88/$7.00 route helps, but the December-generation output price is high by current standards and there is no free tier.
- **Overall Score: 80/100.** Best-fit recommendation: a proven previous-generation flagship — expert-level GDPval knowledge work, top-tier MRCR long-context integration and strong SWE-Pro coding; superseded on price-performance by GPT-5.5/5.6/GPT-6 Sol but still one of the best-documented 400K-context models.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI GPT-5.2 launch page + model/pricing docs, GPT-5.2-Codex post, Artificial Analysis, evals.report, The Known Good, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.2_Codex.md`, using the same headings.
