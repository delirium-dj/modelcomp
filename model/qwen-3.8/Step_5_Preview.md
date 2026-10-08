# Qwen 3.8 — findings by Step 5 Preview

- Source: Alibaba (`qwen3.8-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (Qwen3.8-Max — the Qwen 3.8 generation flagship)
- **Short description:** Alibaba's Qwen 3.8 generation flagship: a ~2.4-trillion-parameter multimodal sparse MoE (95B active/token) with a 1M-token context, native text/image/video input, and aggressive $2/$6 pricing. **Identity note:** Alibaba ships no standalone base "Qwen 3.8" SKU — the 3.8 generation's tiers are Max (2.4T-A95B), Flash, Flash-Next, 27B and Omni-Flash; the verified-benchmark "Qwen 3.8" model is this Max-class flagship (also published as open weights `Qwen3.8-2.4T-A95B`). This report covers that flagship.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud `qwen3.8-max` (snapshot `qwen3.8-max-0902` live since 2026-09-05; also `qwen3.8-max-prime` fast tier); OpenRouter `qwen/qwen3.8-max`; OpenCode Zen `opencode/qwen3.8-max` ($2/$6, cache read $0.25). OpenAI- and DashScope-compatible; Anthropic-compatible endpoint available.
- **Release / knowledge:** GA 2026-08-03 (preview 2026-07-19); upgraded 0902 snapshot 2026-09-02. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.8-max` (Model Studio/Zen), `qwen3.8-max-0902`, `qwen3.8-max-prime`, open weights `Qwen/Qwen3.8-2.4T-A95B` (HF, custom Qwen3.8-Max license).
- **Context window:** 1,000,000 tokens (991,808 max input; 983,616 with thinking; 131,072 max output; 262,144 max reasoning budget); open checkpoint: 262,144 native, extensible to ~1M via YaRN.
- **Modalities:** Text, image and video in → text out (first Qwen >1T multimodal). Thinking mode with reasoning effort low/medium/xhigh (`preserve_thinking` supported); function calling, structured outputs, batching, prefix completion, fine-tuning; five built-in Responses-API tools (code_interpreter, web_search, web_extractor, t2i_search, i2i_search).
- **Pricing (as of 2026-10-09):** $2.00 / MTok input, $6.00 output (flat across the whole 1M window); implicit cache read $0.25; explicit cache creation $2.50 / read $0.17; batch 50% off; new Model Studio accounts get a 1M-token free quota (Singapore). Artificial Analysis measures $5.41 per completed task, 39–41 tok/s.
- **Architecture:** Sparse MoE, ~2.4T total / 95B active (per open checkpoint card), hybrid attention; hosted API proprietary, open 2.4T checkpoint text-only under the custom "qwen3.8-max" license; Qwen3.8-27B sibling is Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Artificial Analysis, 0902 snapshot, max effort — independent; Alibaba's 86.6% on the 0803 build via Claude Code avg@10; AA read the 0803 build at 81.3%)
- GDPval-AA: **Elo 1608** (AA); AA-Briefcase v1.1: Elo 1564-class (unifybench lists 1564 for the AA-Briefcase family)
- AutomationBench-AA: **56.2%** (AA); Automation-Bench pass@1: 27.3% (vendor 600-task subset)
- OSWorld-Verified: **86.1%** (vendor — table lead vs Fable 5's 85.0); OSWorld 2.0: 19.4/46.7 partial
- Toolathlon Verified: **72.5%** (vendor — still self-reported); JobBench 53.4%; SkillsBench 70.2%; WideSearch 81.9%
- Terminal-Bench 4.0: **34.3%** (Vals mini-swe-agent) / 26.97% ±3.78 (official board, Claude Code, max) — behind the Claude/GPT frontier
- Terminal-Bench-Science: **no verified public score found**; Claw-Eval (text): no verified public score found; ClawEval-MM 77.2/74.8 (vendor multimodal variant)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (Vals AI, rank 5/133 — independent; vendor 92.6%, AA 92.7–92.8 across snapshots)
- HLE: **43.1%** no tools (AA, 0902; vendor 43.6%; agreement across all three); HLE with tools 56.2% (vendor)
- AA Intelligence Index: **45** on the re-based v4.3.2 (0902 snapshot — level with GLM-5.3, a point above Kimi K3); 56 on the pre-September scale
- IFBench: **82.8%** (vendor — table lead); CritPt: **no verified public score found**
- LiveBench overall: **78.5%** (LiveBench board, 0803 build)

Coding:

- SWE-bench Verified: **85.6%** (Vals AI independent, rank 13/83, bash-only harness)
- SWE-bench Pro: **67.7%** (vendor, Claude Code harness; vs Fable 5 80.0%, Opus 4.8 69.2%, GPT-5.6 Sol 64.6%)
- DeepSWE v1.1: **56.6%** (vendor) / **57.0%** (DeepSWE leaderboard) — vs Fable 5 70.0, GPT-5.6 Sol 73.0 (the clearest gap)
- LiveCodeBench: **87.8%** (Vals); FrontierSWE 73.5%; PaperBench **93.0% (#1** — ahead of GPT-5.6 Sol 90.5, Fable 5 88.8)
- NL2Repo-Bench 55.9%; MLS-Bench-Lite 41.0%; AndroidBench 75.1%; CodeArena 1691–1757 (#1 front-end arena at the 0902 snapshot)
- Vibe Code Bench: **no verified public score found**

Multimodal:

- MMMU-Pro: **82.3%** (vendor; Fable 5 81.2, Opus 4.8 75.6); MathVision 95.2/97.7; BabyVision 82.0/91.3; ZeroBench-Sub 48.5%
- OmniDocBench 1.5: 92.1% (table lead); VideoMME (w/ subs): 90.4%; HLE-VL (w/ tools): 52.2%; CharXiv (RQ) 88.4/93.5%

Long context:

- 1M-token hosted window; MRCR v2 256K 8-needle: **92.9%** (vendor; vs Opus 4.8 83.2, GPT-5.6 Sol 93.8); **no public 1M-length MRCR**; LongBench v2 66.3%

### Normalized scores (1–100)

- **Tool use: 86/100.** Independent AA Terminal-Bench 2.1 88.8%, GDPval-AA Elo 1608, AutomationBench-AA 56.2% and OSWorld-Verified 86.1% are frontier-band; capped by Terminal-Bench 4.0 at 34.3%/27.0% (well behind the Claude/GPT frontier), Toolathlon 72.5% still vendor-reported, and no public TB-Science/Claw-Eval.
- **Reasoning: 87/100.** GPQA 93.7% (Vals) and HLE 43.1% (AA, corroborated three ways) put general reasoning at parity with US frontier models, with the AA Intelligence Index at 45 (v4.3.2) and IFBench 82.8%; capped by HLE trailing Fable 5's 53.3% by ~10 points and no public CritPt.
- **Context window: 94/100.** 1M-token flat-priced window with 131K output is the ≥1M tier, and MRCR v2 92.9% at 256K (vendor) is near the top of the field; the 100 tier's ≥98% retrieval at 512K+ is unverifiable (no 1M MRCR published), and the open checkpoint's native window is only 262K.
- **Multimodal: 85/100.** Native text + image + video in → text out is the 75–90 band, anchored by MMMU-Pro 82.3%, MathVision 95.2%, BabyVision 82.0% and OmniDocBench 92.1% — among the strongest vision packages in the field; no non-text output keeps it below 90.
- **Coding: 86/100.** SWE-bench Verified 85.6% (Vals), LiveCodeBench 87.8%, PaperBench 93.0% (#1) and CodeArena #1 show true frontier coding strength; capped by SWE-bench Pro 67.7% and DeepSWE 57.0% — the contamination-resistant long-horizon agentic suites where Fable 5/GPT-5.6 Sol hold a 13–16-point lead.
- **Cost efficiency: 66/100.** $2/$6 per MTok sits between the methodology's $3/$15 ≈ 60 and $0.60/$2.20 ≈ 92 tiers, with $0.25 implicit cache reads and 50%-off batch; AA's measured $5.41/task (2x+ GLM-5.3/Kimi K3) and 39–41 tok/s throughput temper the list-price advantage.
- **Overall Score: 88/100.** Best-fit recommendation: the value pick for multimodal, document and research-coding agents at $2/$6 — PaperBench/CodeArena-class output with 1M context; pair with a Claude/GPT flagship for the deepest long-horizon repository engineering (DeepSWE/SWE-Pro).

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Qwen official blog + full benchmark table, Alibaba Cloud Model Studio docs/pricing, Artificial Analysis, Vals AI via The Model Gap/BenchLeader, BenchmarkList, models.dev, OpenCode Zen docs, The AI Rankings, AIToolsReview); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
