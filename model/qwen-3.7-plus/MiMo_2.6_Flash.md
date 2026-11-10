# Qwen3.7-Plus — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen (`qwen-3.7-plus`)
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-07 (Overall 83). Fresh source this pass: BenchLM model page
> (snapshot 2026-11-10, overall 53.58, rank #83/1020, 70/804 rows — the
> launch benchmark table now fully indexed, including the video rows that
> were missing last pass). Changes: Multimodal 84→87 (Video-MME **88.0**,
> VideoMMMU **85.4**, MathVision **90.3**, CharXiv 85.9, OmniDocBench 1.5
> 91.4, independent AA-MMMU-Pro **80.5** — the previous cap "no
> video-benchmark figure" is gone); Tool use 79→80 (previously-absent rows
> now published at decent mid levels: Claw-Eval **62.7**, MCP Atlas
> **73.2**, OSWorld-Verified **73.3**, BFCL v4 72.9 — offset by GDPval-AA
> 886 Elo, APEX-Agents-AA 22.4, OSWorld 2.0 2.8). Held: Reasoning 80
> (new FrontierMath v2 34.386% mid, HMMT 92.9/IMOAnswerBench 86.0 vendor
> strong but Index still ~25), Context 95 (new MRCRv2 91.7% — real
> retrieval row but <98% keeps floor band), Coding 76 (all four refs still
> missed), Cost 94; Overall 83→84 (mean 83.6).

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** The cost-effective Plus sibling of Qwen3.7-Max (announced 2026-06-02, GA after preview), and the Qwen line's multimodal-agent workhorse: it bolts image + **video** understanding onto the text-only Qwen3.7 backbone and adds GUI grounding, screen reading, and end-to-end mobile navigation (ScreenSpot Pro, AndroidWorld) while keeping Max-tier agentic scaffolds (Claude Code, OpenClaw, Qwen Code). Proprietary/API-only. Priced at roughly one-sixteenth to one-sixth of Max. Vendor frames it as "approaching Max-tier" on coding agents and STEM reasoning; independent AA measurements tell a more mixed story (GPQA exactly at the 90 line, HLE 35.6, TB4.0 at 1.0).
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.7-plus`, OpenAI-compatible endpoints in Beijing, Singapore, US-Virginia), OpenRouter (`qwen/qwen3.7-plus`), OrcaRouter, aggregators; no open weights.
- **Release / knowledge:** released 2026-06-02/03 (preview ~2026-05-14); knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-plus` (hosted) / `qwen/qwen3.7-plus` (gateways).
- **Context window:** **1,000,000 tokens** (QwenCloud max input 991K non-thinking / 983K thinking); max output 65,536 (OpenRouter/OrcaRouter; some Model Studio docs say 32,768); reasoning effort up to 262K tokens budgeted.
- **Modalities:** **text + image + video in** (per OrcaRouter/Model Beats; Model Studio config lists text-only for the plain endpoint but vision routes exist); text out; reasoning yes (thinking mode, controllable depth); tool calls yes (native function calling, structured outputs, context-cache prefix sharing).
- **Pricing (as of 2026-10-07):** OpenRouter **$0.32 in / $1.28 out** per 1M, cache read $0.064; official tiered: ≤256K prompts ~$0.40/$1.20 (non-thinking, Singapore), **above 256K the rate jumps to ~$1.06–$1.20 in / $3.60–$4.25 out**, thinking-mode output ~$4.00 up to 256K; Cache Creation $0.40, 5-min cache read $0.032. Roughly 95% below Claude Opus 4.7 on blended pricing.
- **Architecture:** proprietary multimodal extension of the Qwen3.7 text MoE backbone; size undisclosed; closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **61.0** (Artificial Analysis, independent) / **52.8** (Vals AI, independent) / 70.3→(TB2.0) — **far under the 85% ref**
- Terminal-Bench 4.0: **1.0** (AA, independent) — floor; Terminal-Bench Hard: 47.0 (AA)
- Terminal-Bench 2.0 (Terminus-2): **70.3** (vendor self-run; matched by OrcaRouter) — strong for its class
- AndroidWorld: **81** (vendor), ScreenSpot Pro (GUI grounding): **79** (vendor) — the signature capability
- Claw-Eval: **62.7%** (vendor launch table, via BenchLM 2026-11-10 — new); MCP Atlas: **73.2%** (vendor — new); BFCL v4 **72.9%**, QwenClawBench **61.8%**, DeepPlanning **62.3%**, VITA-Bench 45.6%, QwenWebBench 1536 Elo (vendor launch table — new)
- OSWorld-Verified: **73.3%** (vendor — new, just under the 75% ref); OSWorld 2.0: **2.8%** (OSWorld 2.0 paper — new); APEX-Agents-AA: **22.4%** (AA leaderboard — new)
- τ²-Bench Telecom: **93.0** (AA) vs τ-Bench Banking: 17.5 (AA); SkillsBench 54.3 (Vals); GDPval-AA: **886 Elo / 13.3% normalized** (AA — Elo now published); AA EnterpriseOps-Gym **40.6%** (AA — new); Finance Agent 38.2, Legal Research 16.3, Tax Agent 38.7 (Vals)
- AA Agentic Index: **19.7** (AA current); ALE: none

Reasoning / knowledge:

- GPQA Diamond: **90.3** vendor / **90.0** (AA, independent) — **exactly at the 90%+ ref, both readings agree**
- HLE (AA): **35.6%** — **under the 40%+ ref**
- AA Intelligence Index: **25.2** (OpenRouter AA table) vs **39** (AI-TLDR citing AA) — **either reading well under the 60+ ref** (scale/re-base discrepancy noted, both fail the ref)
- SuperGPQA: 71.4 (Model Beats, #4); CritPt 9.1 (AA); AA-Omniscience 22.5 accuracy / 72.3 non-hallucination
- FrontierMath v2 (Tiers 1–3): **34.386%** (Epoch AI leaderboard, via BenchLM 2026-11-10 — new, mid-tier)
- Contest math (vendor launch table — new): HMMT Feb 2026 **92.9%**, IMOAnswerBench **86.0%**, Apex 22.7%; MMLU-Pro 88.5, MMLU-Redux 94.5, MMMLU 89.0
- AA Agentic Index: **17.5** (AA)

Coding (vendor unless noted):

- SWE-bench Verified: **77.7** vendor (AA-sourced list agrees) — solid mid-band
- SWE-bench Pro: 57.6 (vendor/Model Beats #34); SWE-bench Multilingual: 75.8
- SciCode: **46.1** (AA, independent) / **51.3** (vendor launch table — new, still under ref)
- AA Coding Index: **55.9** — **under the 70+ ref**
- Vibe Code Bench 46.4, Code Migration 12.9 (Vals); NL2Repo **41.1%** (vendor — new); SWE Coding (Model Beats) 14.2
- No DeepSWE row found for this model; LiveCodeBench row on BenchLM (89.6) is sourced from the Qwen3.8-27B model card — not attributed to this model, excluded.

Long context:

- 1M window; **AA-LCR: 73.0** (AA, independent) — a real retrieval signal at length, middling score; **MRCRv2: 91.7%** (vendor launch table, via BenchLM 2026-11-10 — new, first window-length retrieval row; under the ≥98% band for a top score); no needle figure.

Multimodal (vendor unless noted):

- **Video-MME (w/ sub): 88.0%**, **VideoMMMU: 85.4%**, **MathVision: 90.3%**, CharXiv 85.9%, MLVU 87.4%, OmniDocBench 1.5 91.4%, RealWorldQA 86.9%, SimpleVQA 81.7%, MMMU-Pro **79%**, OCRBench V2 70.7%, ERQA 69.8%, MedXpertQA (MM) 71.0%, MMSearch-Plus 41.4%, ODINW13 51.1% (vendor launch table — new this pass; the video rows were missing last pass)
- **AA-MMMU-Pro: 80.5%** (Artificial Analysis independent — new); Design Arena Website 1265 (OpenRouter)
- Vals Multimodal Index: **53.9** (Vals, independent) — mediocre; ScreenSpot Pro 79 and AndroidWorld 81 are vendor-run. No audio input, no PDF rows.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong mobile/GUI rows (AndroidWorld 81, ScreenSpot 79 vendor) and τ²-Telecom 93 (AA), with the previously-absent rows now published at decent mid levels — Claw-Eval 62.7, MCP Atlas 73.2, OSWorld-Verified 73.3 (just under the 75 ref), BFCL v4 72.9 — but independent terminal agent rows still collapse (TB2.1 52.8–61, TB4.0 1.0), GDPval-AA 886 Elo and AA Agentic Index 19.7 remain bottom-tier, OSWorld 2.0 reads 2.8%, and ALE is absent → 80 (was 79).
- **Reasoning: 80/100.** GPQA Diamond lands exactly on the 90+ ref with vendor and AA agreement (90.3/90.0) and SuperGPQA #4; HLE 35.6 and the AA Index (25.2–39) both miss their refs, CritPt 9.1 is low, and the new FrontierMath v2 34.386% is mid-tier — the new vendor contest-math rows (HMMT 92.9, IMOAnswerBench 86.0) are strong but don't move the refs.
- **Context window: 95/100.** 1M → ≥1M floor; the new MRCRv2 91.7% is the first window-length retrieval row (welcome, but under the ≥98% band for a higher score) and AA-LCR 73 is middling.
- **Multimodal: 87/100.** Image + video in → 75–90 band; the missing video rows are now published and strong — Video-MME 88.0, VideoMMMU 85.4, MathVision 90.3, CharXiv 85.9, OmniDocBench 1.5 91.4 — plus independent AA-MMMU-Pro 80.5 and the GUI/mobile pair (79/81); held below 90 by Vals' Multimodal Index 53.9, no audio, no PDF, and text-only output → 87 (was 84).
- **Coding: 76/100.** SWE-V 77.7 and SWE-ML 75.8 are respectable mid-band scores and TB2.0 70.3 is good, but all four coding refs miss: SciCode 46.1/51.3 (<55), coding index 55.9 (<70), TB2.1 52.8–61 (<85), no DeepSWE row; TB4.0 1.0 is a floor reading.
- **Cost efficiency: 94/100.** $0.32–0.40/$1.28–1.60 (cache ~10–20%) for a 1M-context multimodal agent model — an order of magnitude below the $0.60/$2.20 anchor; only the >256K long-prompt tier ($1.06+/$4.25) and thinking-mode output surcharges prevent a top score. Pricing confirmed unchanged on the AA model page (2026-11-10).
- **Overall Score: 84/100.** (80+80+95+87+76)/5 = 418/5 = 83.6 → 84 — the value play in the Qwen line: video-capable GUI/mobile agents at flash-tier prices, with a ref-clearing GPQA and now-published video/vision rows, discounted for independent terminal-agent numbers in the 50s/60s, a floor TB4.0, an AA Index nowhere near 60, and coding refs it doesn't clear.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with its cited sources — Alibaba Cloud launch benchmark table, Artificial Analysis model page, Vals AI, Epoch AI FrontierMath v2, OSWorld 2.0 paper — plus OpenRouter and llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.7 Plus (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/qwen3-7-plus)
  - [Qwen3.7 Plus (Artificial Analysis)](https://artificialanalysis.ai/models/qwen3-7-plus)
  - [Qwen3.7-Plus launch benchmarks (Alibaba Cloud)](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
  - [Qwen3.7-Plus (llm-stats)](https://llm-stats.com/models/qwen3.7-plus)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Qwen3.7-Plus — findings by Mimo v2.6 Flash

- Source: Alibaba (Qwen)/qwen3.7-plus
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba's cost-effective multimodal *agent* model in the Qwen3.7 line (GA 2026-06-01), adding image + video perception and GUI/screen interaction to the text Qwen 3.7 backbone; the vision counterpart to the text-only Qwen3.7-Max at roughly one-sixth the price. Not the same as the open `qwen-3.8-27b` or `qwen3.8-max` entries.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.7-plus`, snapshot `qwen3.7-plus-2026-05-26`), OpenRouter `qwen/qwen3.7-plus`, Requesty `alibaba/qwen3.7-plus`, Fireworks and Together. OpenAI-compatible Chat Completions and Responses API.
- **Release / knowledge:** previewed 2026-05-20 (Alibaba Cloud Summit), generally available 2026-06-01, announced 2026-06-02; knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-plus` (DashScope), `qwen/qwen3.7-plus` (OpenRouter). **No Free tier and no Zen Free ID found** — every call is billed (HokAI).
- **Context window:** 1,000,000 tokens (max input 991,808; 983,616 in thinking mode); max output 131,072 (Alibaba docs / OpenRouter / Requesty — QwenCloud lists 65,536, AI/TLDR lists 32,768: host-dependent); chain-of-thought budget up to 262,144 with a `preserve_thinking` API parameter.
- **Modalities:** text, image, video in; text out (no image generation); reasoning/thinking mode (effort set to xhigh in the recommended reasoning prompt); tool calls; JSON/structured output. Proprietary — **API-only, no open weights**.
- **Pricing (as of 2026-09-25):** Beijing base **$0.40 in / $1.60 out** per 1M (≤256K prompts), explicit cache read $0.04; international (Singapore) **$0.32 / $1.28** on OpenRouter/Requesty with cache read $0.032–0.064; tiered rates above 256K rise to ~$0.826/$3.301 (or $1.20/$3.60 thinking-mode output). Batch and implicit-cache discounts listed on the Alibaba docs page.
- **Architecture:** undisclosed — proprietary multimodal vision-language agent extending the Qwen 3.7 text backbone; parameter count not published.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). (AA) = Artificial Analysis independent run; (vendor) = Alibaba's own tables (Harbor/Terminus-2 for TB2.0, internal scaffold for SWE series).

Agent / tool use:

- Terminal-Bench 2.0 (Harbor/Terminus-2, vendor): **70.3%** (avg of 5 runs, 256K ctx) — beat DeepSeek-V4-Pro Max 67.9 and Gemini-3.1 Pro 63.5 on that table
- Terminal-Bench Hard (AA): **47.0%**
- Tau3-Banking: no verified public score found; **τ²-Bench Telecom (AA): 93.0%** — a different harness, not τ³-Banking
- GDPval-AA (AA): **12.8%** (percentage metric, not an Elo)
- Claw-Eval / ClawProBench: no verified public score found (QwenClawBench is the in-house, open-sourced substitute — no value published in the sources read)
- Toolathon / SWE Atlas Codebase QnA: no verified public score found
- MCP-Mark, MCP-Atlas, Deep-Planning, SkillsBench, CoWorkBench, VITA-Bench: run by Alibaba, **no values published** in the sources read
- ScreenSpot Pro (GUI grounding): **79.0** (vendor); AndroidWorld: **81.0** (vendor)
- Artificial Analysis Agentic Index: **17.5** (AA)

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (AA) / 90.3 (vendor)
- HLE: **35.6%** (AA)
- AA-LCR: **73.0** (AA)
- CritPt: **9.1%** (AA)
- Artificial Analysis Intelligence Index: **25.2** (current AA index version via OpenRouter) — an earlier run was reported as **39** (HokAI, 2026-06-15) / 39.4 (Requesty); index versions are not comparable, both cited. BenchLM overall: no verified public score found
- AA-Omniscience: accuracy **22.5%**, non-hallucination rate **72.3%** (hallucination 27.7%)
- IFBench: **78.0** (AA); HMMT, IMOAnswerBench, MMLU-ProX, WMT24++: vendor-run, no values published in sources read

Coding:

- SWE-bench Verified: no verified public score found (Alibaba publishes "SWE-bench series" rows without a Verified value in the sources read; HokAI shows no figure)
- LiveCodeBench: no verified public score found
- SciCode: **46.1%** (AA)
- Vibe Code Bench: no verified public score found
- Artificial Analysis Coding Index: **55.9** (AA)
- DeepSWE / Coding Index other: no verified public score found

Long context:

- 1,000,000-token window (Alibaba docs / OpenRouter / Requesty); MRCR / RULER / GraphWalks: **no long-context retrieval reported** — 1M is a listed capacity, not a measured retrieval score.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong on the surfaces that are measured — τ²-Bench Telecom 93.0, AndroidWorld 81.0, ScreenSpot Pro 79.0, TB2.0 70.3 (vendor) — but AA's Agentic Index of just 17.5 and GDPval-AA of 12.8% pull the same model back, and the TB2.1 / Tau3 / GDPval-Elo numbers the methodology anchors on are absent. Capped mid-70s by that split verdict plus unpublished MCP-Mark/MCP-Atlas/QwenClawBench values.
- **Reasoning: 76/100.** GPQA Diamond 90.0 clears the 90+ frontier reference and HLE 35.6 is close to the 40+ reference; AA-LCR 73 is well above the mid band. Capped by CritPt 9.1, AA-Omniscience accuracy 22.5 (27.7% hallucination rate), and an Intelligence Index of 25.2 on the current scale (earlier runs 39–39.4) that sits far below frontier.
- **Context window: 95/100.** ≥1M tier = 95–100; 1,000,000 listed with 991,808 max input and 131,072 max output confirmed by Alibaba's own context table. Not 100 because no ≥98% retrieval accuracy at 512K+ is published (MRCR/RULER absent).
- **Multimodal: 82/100.** Text + image + **video** in, text out — squarely in the +video band (75–90), with GUI/screen evidence (ScreenSpot Pro 79.0, AndroidWorld 81.0) backing real visual-agent use. Not higher: no audio input, no PDF-specific row, text-only output.
- **Coding: 76/100.** AA Coding Index 55.9 and SciCode 46.1 are solidly above the mid band but short of the frontier references (Coding Index 70+, SciCode 55+), and Alibaba's own TB2.0 70.3 is good without being frontier. Capped by no SWE-bench Verified, LiveCodeBench or DeepSWE number at all.
- **Cost efficiency: 93/100.** $0.40/$1.60 (Beijing) or $0.32/$1.28 (international) with cache reads at $0.032–0.08 lands just better than the ~$0.60/$2.20 → 92 anchor, and the tiered >256K rates are the main thing that stops it scoring higher; no free tier exists.
- **Overall Score: 81/100.** (74 + 76 + 95 + 82 + 76) / 5 = 80.6 → 81 — best-fit as the cheap 1M-context vision/video agent for screen-reading, GUI automation and long multimodal traces; pick Qwen3.7-Max or a closed frontier model when hard reasoning or published SWE-bench numbers decide the job.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Alibaba Cloud Model Studio docs and blog, AI/TLDR and HokAI profiles, OpenRouter/Requesty benchmark summaries of Artificial Analysis runs, VentureBeat release coverage, QwenCloud specs); scores are normalized 1–100 interpretations, not official vendor scores. AI-index values from different AA index versions are cited separately, never mixed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

