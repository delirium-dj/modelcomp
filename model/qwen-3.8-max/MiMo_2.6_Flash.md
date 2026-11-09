# Qwen3.8-Max — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-max`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 88). Fresh sources this pass: BenchLM snapshot 2026-11-07
> (incl. Epoch AI FrontierMath rows), Artificial Analysis model page. Changes:
> Reasoning 86→88 (new verified FrontierMath v2 T1-3 74.737% / Tier 4 46.341%,
> plus independent Vals GPQA Diamond 93.7%); Coding 85→88 (new verified Vals
> SWE-bench 85.6% and LiveCodeBench 87.9%, previously "no verified public score
> found"); Overall 88→89.0. Tool use 86, Context 95, Multimodal 88 and Cost
> efficiency 86 held.

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's largest-ever flagship (preview 2026-07-19 at WAIC Shanghai, GA 2026-08-03) — 2.4T-parameter sparse MoE (95B active, ~4% expert activation) on the Qwen 3.5 foundation with hybrid attention; first Max-class Qwen with open weights (Qwen3.8-2.4T-A95B, 2026-08-13, custom license, text-only/262K native; Qwen3.8-27B Apache 2.0). Snapshot `qwen3.8-max-0902` (2026-09-02) lifts front-end CodeArena +22 → 1691 (#1). "Second only to Fable 5" per Alibaba. National rankings: Text Arena #5, Vision Arena #2, Frontend Code #4.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (OpenAI- and Anthropic-protocol compatible; Beijing/Singapore/US-Virginia endpoints), QwenWork, OpenRouter, DigitalOcean; no Bedrock/Vertex listing confirmed. AA lists 2 API providers for the 0902 snapshot. Rate limits 2M TPM / 15K RPM.
- **Release / knowledge:** released 2026-08-03 (0902 snapshot 2026-09-02); knowledge cutoff undisclosed (no training/safety model card published).
- **IDs:** `qwen/qwen3.8-max` (gateway routes) / `qwen3.8-max` (native; `qwen3.8-max-0902`).
- **Context window:** 1,000,000 tokens (991,808 max input non-thinking, 983,616 thinking); **AA serves/lists 984k** (2026-11-08 page — practical served figure, still the ≥1M tier); max output 131,072; max reasoning budget 262,144.
- **Modalities:** text, images, video in (native visual understanding incl. long-video/document parsing); text out; reasoning yes (`reasoning_effort`: low/medium/**xhigh default**, `enable_thinking`, `preserve_thinking` — preserved reasoning_content counts as billable input); tool calls yes (function calling, structured outputs, built-in `code_interpreter`, `web_search`, `web_extractor`, `t2i_search`, `i2i_search`, fine-tuning). AA lists text + image input, text out.
- **Pricing (as of 2026-11-08):** **$2.00 in / $6.00 out** per 1M (AA-confirmed 2026-11-08; cache discount 88%, blended ≈ $1.18/M on 7:2:1; $10.02 per AA Intelligence-Index task), flat across the full 1M window; implicit cache $0.25 read; explicit cache $2.50 write / $0.17 read; batch file $0.825/$2.475; third-party routes from $1.65/$4.95 (llm-stats); 1M-token free quota (Singapore). China: ¥12/¥36. Paid (open weights free under custom/Apache licenses).
- **Architecture:** sparse MoE, 2.4T total / 95B active (from open checkpoint card), hybrid attention, Qwen 3.5 base.

### Raw benchmarks found

Agent / tool use (vendor table unless noted):

- Terminal-Bench 2.1: **86.6** (Claude Code avg@10, 5h timeout — beats Opus 4.8/Fable 5 84.6, behind Sol 88.8; below the 88% frontier ref). Vals AI independent harness: **67.4%** (harness split noted).
- OSWorld-Verified: **86.1**. OSWorld 2.0: 19.4 (vendor). WebArena-Verified 66.8; AndroidWorld 85.3; MobileWorld 77.8. Agents' Last Exam: **27.0 pass / 52.4 score** (vs Sol 30.6/53.6). Automation-Bench: 27.3 (Pass@1). Toolathlon Verified: 72.5. CoWorkBench 74.8; WorkSpaceBench 67.7; JobBench 53.4; SkillsBench 70.2; WideSearch/WideResearch 81.9.
- Nous Hermes Index 36.2 / Hermes Bench 70.5 (independent, via BenchLM 2026-11-07). GDPval-AA / Tau3 / Claw-Eval / MCP Atlas / Terminal-Bench 4.0: no verified public score found.
- Arenas: Arena.AI multimodal blind pairwise **#2 global** (behind Fable 5); CodeArena front-end **#1** (1691, 0902 snapshot); Text Arena #5, Vision Arena #2, Frontend Code #4.

Reasoning / knowledge (vendor unless noted):

- GPQA Diamond: **92.6** (vendor; clears the 90%+ ref) — corroborated independently by Vals AI **93.7%** (via BenchLM 2026-11-07). MMLU-Pro (Vals): 88.6%.
- HLE: **43.6** no tools / **56.2** with tools (clears the 40%+ ref; Fable 5 53.3).
- **FrontierMath v2 (Tiers 1–3): 74.737% / Tier 4: 46.341%** (Epoch AI leaderboard via BenchLM — NEW this pass; was "no verified public score found"; T1-3 far above GLM-5.3-Flash's 55.8 on the same board).
- AA Intelligence Index: **34 on current v5.0.1** (AA model page 2026-11-08; #41/69 in its class, below the 37 median) — AA rescaled the index since the previous report (v4.3.2 showed 45 here), so old/new values are not comparable across versions; on either reading it sits under the 60+ ref.
- IFBench 82.8; HealthBench 60.2; PLawBench 73.2; MathVision 95.2 (97.7 w/ Python); LogicVista 91.9 (vendor). ARC-AGI: no verified public score found.

Coding (vendor table unless noted):

- **SWE-bench (Vals AI): 85.6%** — NEW this pass (was "no verified public score found"); **LiveCodeBench (Vals): 87.9%** — NEW this pass. Vals TB2.1 harness: 67.4%.
- SWE-bench Pro: **67.7** (Claude Code harness; Fable 5 80.0 — the biggest gap). FrontierSWE: **73.5** (Fable 5 88.8). FrontierSWE v2: 15.8 (Proximal). DeepSWE 1.1: **56.6** (Fable 70.0, Sol 73.0 — well under the 74% ref).
- PaperBench: **93.0** (#1 of the comparison set, above Sol 90.5 and Fable 88.8). NL2Repo 55.9; AndroidBench 75.1; QwenSWEBench 80.7; QwenQoderBench 58.4; MLS-Bench-Lite 41.0; VulcanBench v3 81.2 (independent); OpenHarmony Bench 60.8.
- SciCode / AA Coding Index: no verified public score found in this pass's sources.

Long context (vendor):

- MRCR v2 (8-needle, 256K): **92.9** (vs Sol 93.8, Opus 4.8 83.2). LongBench v2: 66.3. AA serves 984k (2026-11-08). No 512K–1M needle row.

Vision / multimodal (vendor table unless noted):

- **Video-MME (with subtitles): 90.4**, **VideoMMMU 88.7**, MLVU (M-Avg) 90.8, LVBench 81.8 — NEW video rows this pass (confirms the video-in claim with measured numbers).
- MMMU-Pro 82.3; CharXiv 93.5 (88.4 w/o tools); OmniDocBench 1.5 92.1; ScreenSpot Pro 84.5; RealWorldQA 88.0; BabyVision 82.0 (91.3 w/ Python); MMVU 82.4; MedXpertQA-MM 80.4; ZeroBench 24.0 (49.0 w/ Python — the weak spot).

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 86.1 and ALE 52.4 are top-tier, TB2.1 86.6 is strong-but-below-ref (Vals' independent run only 67.4), Toolathlon/AutomationBench mid, no GDPval/Tau3/Claw row, and the whole table is vendor-run (Qwen's own harness) — held at 86, no new row in this pass moves the calibration.
- **Reasoning: 88/100.** Moved 86→88 on two new independent verifications: Epoch AI FrontierMath v2 T1-3 **74.737%** / Tier 4 **46.341%** (was "no verified public score found") and Vals GPQA Diamond **93.7%** corroborating the vendor's 92.6, alongside HLE 43.6/56.2 clearing the 40% ref; capped by the AA Intelligence Index reading (34 on v5.0.1 — under the 60+ ref, below its class median — with the version rescale from 45 noted).
- **Context window: 95/100.** 1M window = ≥1M tier floor (AA lists the practical 984k served figure 2026-11-08) with excellent 256K MRCR (92.9) but no retrieval evidence at 512K+ → floor (held).
- **Multimodal: 88/100.** Text + image + video in (video band 75–90); this pass adds measured video rows — Video-MME 90.4, VideoMMMU 88.7, MLVU 90.8 — plus Arena #2 vision, OmniDocBench 92.1 and CharXiv 93.5; no audio in, text-only out keeps it below 90 (held; the new rows confirm the band rather than move it).
- **Coding: 88/100.** Moved 85→88 on the two newly verified independent rows — Vals SWE-bench **85.6%** and LiveCodeBench **87.9%** (both "no verified public score found" in the previous report) — supported by PaperBench 93.0 (#1 of set) and TB2.1 86.6 above Opus/Fable; capped by DeepSWE 56.6 far under the 74% ref, SWE-Pro 67.7 / FrontierSWE 73.5 trailing Fable 5 by 12–15 points, and FrontierSWE v2 15.8.
- **Cost efficiency: 86/100.** $2/$6 flat over the entire 1M window with 88% cache discount ($0.25 cache reads), AA blended $1.18/M and half-price batch sits just under the $1.25/$4.25 ≈ 88 anchor band; held at 86 (pricing unchanged this pass) by preserved-thinking billing (reasoning counts as input), very slow serving (AA: 61.9 min/Index task, 46 tok/s, #68/68 in class) and $10.02/task AA cost-per-task (index version changed — not comparable to the earlier $5.41).
- **Overall Score: 89.0/100.** (86+88+95+88+88)/5 = 89.0 → aggressive $2/$6 flagship with arena-validated multimodal strength, FrontierMath 74.7, and Vals-verified SWE-bench/LiveCodeBench; the honest gaps are hard-SWE vs Fable 5, the independent intelligence composite (34 on v5.0.1), and vendor-only provenance for the tool-use table.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM 2026-11-07 snapshot, Artificial Analysis model page, Epoch AI FrontierMath v2 leaderboard, Vals AI rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Qwen3.8 Max (updated 2026-11-07)](https://benchlm.ai/models/qwen3-8-max)
  - [Artificial Analysis — Qwen3.8 Max (0902)](https://artificialanalysis.ai/models/qwen3-8-max)
  - [Epoch AI — FrontierMath v2 (Tiers 1–3)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Qwen — Qwen3.8-Max release post](https://qwen.ai/blog?id=qwen3.8)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block). Preserved verbatim during the 2026-11-08 second-pass enrichment (archive not re-scored).

# Qwen3.8-Max — findings by Mimo v2.6 Flash

- Source: Alibaba / Qwen3.8-Max (`qwen3.8-max`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (also `qwen3.8-max-0902` dated snapshot)
- **Short description:** Alibaba Cloud Qwen Team's largest 2026 flagship — a 2.4T sparse MoE multimodal foundation model aimed at coding, knowledge work, research, and long-horizon autonomous agents. Not a variant of another entry here; the open-weight sibling is `Qwen3.8-2.4T-A95B` (`qwen3.8-2.4t-a95b`).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud (`qwen3.8-max`, `qwen3.8-max-0902`); third-party hosts include Fireworks, OpenRouter, DeepInfra, Vercel AI Gateway. Chat Completions–style API with function calling, structured outputs, context cache, code interpreter / web tools on QwenCloud.
- **Release / knowledge:** announced 2026-08-03; open-weight sibling listed ~2026-08-12; snapshot `qwen3.8-max-0902` on 2026-09-02. Knowledge cutoff not published in reviewed sources.
- **IDs:** `alibaba/qwen3.8-max` / `qwen3.8-max` (QwenCloud). **No Zen Free ID** — paid pricing only (one-time 1M-token free quota noted in platform materials).
- **Context window:** 1,000,000 tokens input; 131,072 max output (LLM Reference / QwenCloud rate limits; thinking-mode max input ~983K).
- **Modalities:** text / image / PDF / video in; text out; hybrid thinking mode on by default; tool calls, JSON/structured outputs, prompt caching yes; no audio pipeline listed.
- **Pricing (as of 2026-09-23):** list **$2.00 / $6.00** per 1M in/out on QwenCloud; discounted routes from ~$1.65 / $4.95 (DeepInfra etc.); implicit cache read ~$0.17–0.25; batch half-price on first-party.
- **Architecture:** 2.4T total params, ~95B activated, sparse MoE + hybrid attention; proprietary API release (open-weight twin `Qwen3.8-2.4T-A95B` with thinking on by default).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (BenchLM public row); Vals harness **67.4%** — harness split noted
- Tau3-Banking / Tau2-Bench: no verified public score found under those exact names in reviewed rows
- GDPval-AA: no verified public score found as a standalone row; AA Intelligence Index **45** (AA-native 2026-09-28) embeds GDPval among its ten evals
- Claw-Eval / ClawProBench: no verified public score found
- Toolathlon / MCP-Atlas: Toolathlon wins vs Plus peers on llm-stats shared set; exact Toolathlon % for Max not pinned in reviewed rows — no verified public score found for MCP-Atlas
- HLE w/ tools: **56.2%** (BenchLM)
- CoWorkBench 74.8%; JobBench 53.4%; MobileWorld 77.8%; OSWorld-class visual agent work cited by Alibaba PR (OSWorld 86.1 on open-weight sibling card via QwenCloud — treat as sibling-tied proxy)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (BenchLM); Vals GPQA-D **93.7%**; pricepertoken AA GPQA **92.7**
- HLE: **43.6%** (no tools); **56.2%** with tools (BenchLM)
- LCR / MLCR: AA-LCR not pinned for Max in reviewed rows — no verified public score found under that label; LCR rank #47 marker on CloudPrice AA card implies mid-high AA-LCR but exact value not captured
- CritPt: no verified public score found for Max in reviewed rows
- Artificial Analysis Intelligence Index: **45** (AA-native, 2026-09-28; prior 46.9/#13 rollup close but superseded, see Fresh-source note)
- MMLU-Pro (Vals): **88.6%**; IFBench 82.8%; IFEval lane #16 at 90.5 composite
- Omniscience Accuracy / Hallucination Rate: no verified public score found for Max
- DesignArena / Text Arena: DesignArena Elo **1322 (#8)** among coding-elo boards; Alibaba PR: **#5 Text Arena, #2 Vision Arena** at launch

Coding:

- SWE-bench Verified: **85.6%** (BenchLM "SWE-bench (Vals)"); official Verified row not separately pinned — Vals figure cited as-is
- SWE-bench Pro: **67.7%** (BenchLM)
- LiveCodeBench: **87.9%** (Vals) / LCB v6 not listed for Max on the public v6 top-20 board — no separate v6 row found
- DeepSWE: **56.6%**; FrontierSWE **73.5%**; FrontierSWE v2 15.8%; NL2Repo 55.9%
- SciCode / AA-SciCode: no verified public standalone % captured; AA Coding Index **71.8 / #20**
- PaperBench: **93.0%**; VulcanBench v3 81.2%; OpenHarmony Bench 60.8%
- Vibe Code Bench: no verified public score found for Max

Long context:

- 1M window with long-context LLM-Stats index **#4** among reported peers; LongBench v2 wins vs Qwen3.6 Plus on llm-stats shared set
- MRCR / RULER exact retrieval curves for Max: no verified public score found in reviewed sources

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): AA-native **Intelligence Index 45** (v4.3.2) replaces the 46.9/#13 rollup citation — corroborating within 2 points; scores unchanged.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6% plus strong agentic lane (#9/151 public lane, HLE-with-tools 56.2%, CoWorkBench 74.8%) sits just under the TB2.1 ~88%+ frontier band; missing Tau3/GDPval/Claw-Eval standalone rows cap the top end.
- **Reasoning: 89/100.** GPQA Diamond 92.6–93.7% and HLE 43.6% (56.2% with tools) clear the frontier references (GPQA 90+, HLE 40+); AA Index 45 (v4.3.2 refresh) and absent CritPt/Omniscience rows keep it from the mid-90s.
- **Context window: 94/100.** Full 1M / 131K-out lands in the ≥1M tier (95–100), held one point shy of the top because no ≥98%-at-512K retrieval proof (MRCR/RULER) was published for this exact ID.
- **Multimodal: 88/100.** Native image/PDF/video in with #2 Vision Arena placement and chart/document claims; no audio input and text-only output keep it in the video/PDF band (75–90) rather than 90+.
- **Coding: 89/100.** SWE-bench (Vals) 85.6%, LiveCodeBench 87.9%, SWE-Pro 67.7%, DeepSWE 56.6%, Coding Index 71.8 form a near-frontier stack — DeepSWE still trails the 74%+ frontier reference.
- **Cost efficiency: 90/100.** Flat $2/$6 with $0.17–0.25 cache and sub-$2 discounted routes beats the ~$1.25/$4.25 ≈88 reference on input while staying far above the $3/$15 ≈60 tier; no Free ID means it never hits 100.
- **Overall Score: 89.6/100.** Mean of (88 + 89 + 94 + 88 + 89) / 5 = 89.6; best-fit as a top-tier paid multimodal coder/agent when 1M context and sub-$3 effective rates matter more than absolute SOTA Verified rows.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (Alibaba Cloud press room, QwenCloud changelog/docs, BenchLM, CloudPrice, LLM Reference, llm-stats, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
