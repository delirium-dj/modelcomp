# Qwen3.8-Max — findings by MiMo 2.6 Flash

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-max`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's largest-ever flagship (preview 2026-07-19 at WAIC Shanghai, GA 2026-08-03) — 2.4T-parameter sparse MoE (95B active, ~4% expert activation) on the Qwen 3.5 foundation with hybrid attention; first Max-class Qwen with open weights (Qwen3.8-2.4T-A95B, 2026-08-13, custom license, text-only/262K native; Qwen3.8-27B Apache 2.0). Snapshot `qwen3.8-max-0902` (2026-09-02) lifts front-end CodeArena +22 → 1691 (#1). "Second only to Fable 5" per Alibaba. National rankings: Text Arena #5, Vision Arena #2, Frontend Code #4.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (OpenAI- and Anthropic-protocol compatible; Beijing/Singapore/US-Virginia endpoints), QwenWork, OpenRouter, DigitalOcean; no Bedrock/Vertex listing confirmed. Rate limits 2M TPM / 15K RPM.
- **Release / knowledge:** released 2026-08-03 (0902 snapshot 2026-09-02); knowledge cutoff undisclosed (no training/safety model card published).
- **IDs:** `qwen/qwen3.8-max` (gateway routes) / `qwen3.8-max` (native; `qwen3.8-max-0902`).
- **Context window:** 1,000,000 tokens (991,808 max input non-thinking, 983,616 thinking); max output 131,072; max reasoning budget 262,144.
- **Modalities:** text, images, video in (native visual understanding incl. long-video/document parsing); text out; reasoning yes (`reasoning_effort`: low/medium/**xhigh default**, `enable_thinking`, `preserve_thinking` — preserved reasoning_content counts as billable input); tool calls yes (function calling, structured outputs, built-in `code_interpreter`, `web_search`, `web_extractor`, `t2i_search`, `i2i_search`, fine-tuning).
- **Pricing (as of 2026-10-07):** **$2.00 in / $6.00 out** per 1M, flat across the full 1M window (deliberate 50% undercut of GPT-5.6 Terra's $2/$12 output three days after that cut); implicit cache $0.25 read; explicit cache $2.50 write / $0.17 read; batch file $0.825/$2.475; 1M-token free quota (Singapore). China: ¥12/¥36. Paid (open weights free under custom/Apache licenses).
- **Architecture:** sparse MoE, 2.4T total / 95B active (from open checkpoint card), hybrid attention, Qwen 3.5 base.

### Raw benchmarks found

Agent / tool use (vendor table unless noted):

- Terminal-Bench 2.1: **86.6** (Claude Code avg@10, 5h timeout — beats Opus 4.8/Fable 5 84.6, behind Sol 88.8; below the 88% frontier ref).
- OSWorld-Verified: **86.1**. Agents' Last Exam: **27.0 pass / 52.4 score** (vs Sol 30.6/53.6). Automation-Bench: 27.3 (Pass@1). Toolathlon Verified: 72.5. CoWorkBench 74.8; WorkSpaceBench 67.7; JobBench 53.4; SkillsBench 70.2; WideSearch 81.9.
- GDPval-AA / Tau3 / Claw-Eval / MCP Atlas / Terminal-Bench 4.0: no verified public score found.
- Arenas: Arena.AI multimodal blind pairwise **#2 global** (behind Fable 5); CodeArena front-end **#1** (1691, 0902 snapshot); Text Arena #5, Vision Arena #2, Frontend Code #4.

Reasoning / knowledge (vendor unless noted):

- GPQA Diamond: **92.6** (clears the 90%+ ref; level with Fable 5).
- HLE: **43.6** no tools / **56.2** with tools (clears the 40%+ ref; Fable 5 53.3).
- AA Intelligence Index: **45** (v4.3.2, independent, 0902 snapshot; ~56 on the pre-September scale at launch — either way below the 60+ ref; $5.41 per task, 39–41 tok/s slow).
- IFBench 82.8; HealthBench 60.2; PLawBench 73.2; MathVision 95.2; LogicVista 91.9 (vendor). FrontierMath / ARC-AGI: no verified public score found.

Coding (vendor table unless noted):

- SWE-bench Pro: **67.7** (Claude Code harness; Fable 5 80.0 — the biggest gap). FrontierSWE: **73.5** (Fable 5 88.8). DeepSWE 1.1: **56.6** (Fable 70.0, Sol 73.0 — well under the 74% ref).
- PaperBench: **93.0** (#1 of the comparison set, above Sol 90.5 and Fable 88.8). NL2Repo 55.9; AndroidBench 75.1; QwenSWEBench 80.7; QwenQoderBench 58.4; MLS-Bench-Lite 41.0.
- SWE-bench Verified / LiveCodeBench / SciCode / AA Coding Index: no verified public score found.

Long context (vendor):

- MRCR v2 (8-needle, 256K): **92.9** (vs Sol 93.8, Opus 4.8 83.2). LongBench v2: 66.3. No 512K–1M needle row.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 86.1 and ALE 52.4 are top-tier, TB2.1 86.6 is strong-but-below-ref, Toolathlon/AutomationBench mid, no GDPval/Tau3/Claw row, and the whole table is vendor-run (Qwen's own harness, baselines re-evaluated by Qwen).
- **Reasoning: 86/100.** GPQA 92.6 and HLE 43.6 clear both frontier refs, IFBench/MathVision/LogicVista are strong; AA Index 45 (independent) is the ceiling-setter — 15 points under the 60+ ref.
- **Context window: 95/100.** 1M window = ≥1M tier floor with excellent 256K MRCR (92.9) but no retrieval evidence at 512K+ → floor.
- **Multimodal: 88/100.** Text + image + video in (video band 75–90); Arena #2 vision, OmniDocBench 92.1, CAD bench 91.5 support the top of that band; no audio in, text-only out → below 90.
- **Coding: 85/100.** PaperBench #1 (93.0), TB2.1 86.6 above Opus/Fable, but SWE-Pro 67.7 and FrontierSWE 73.5 trail Fable 5 by 12–15 points, DeepSWE 56.6 is far under the ref, and no SWE-Verified/LiveCodeBench rows exist → mid-80s.
- **Cost efficiency: 86/100.** $2/$6 flat over the entire 1M window with $0.25 cache reads and half-price batch sits just under the $1.25/$4.25 ≈ 88 anchor band; penalized to 86 by preserved-thinking billing (reasoning counts as input), slow 39–41 tok/s (higher effective cost per result), and $5.41/task AA cost-per-task (above Kimi K3's despite cheaper tokens).
- **Overall Score: 88/100.** (86+86+95+88+85)/5 = 88.0 → 88 — aggressive $2/$6 flagship with arena-validated multimodal strength and PaperBench leadership; the honest gaps are hard-SWE coding vs Fable 5, the independent intelligence composite (45), and vendor-only benchmark provenance.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Alibaba Cloud press room + Model Studio docs, qwen.ai launch blog, AIToolsReview, The AI Rankings, HokAI, Tokenstead); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

