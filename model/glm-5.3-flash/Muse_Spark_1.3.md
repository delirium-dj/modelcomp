# GLM 5.3 Flash — findings by Muse Spark 1.3

- Source: Z.AI/GLM-5.3-Flash (ex `ox-alpha` stealth), e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's cost-optimized natively multimodal Flash MoE (320B/18B, 1M) that ran a week as the `ox-alpha` stealth model. Top use case is high-volume agentic coding and automation at roughly one-tenth the GLM-5.3 price, approaching Opus 4.8.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` at `https://opencode.ai/zen/v1/chat/completions` (Chat Completions, OpenAI-compatible). Native Z.ai API + Hugging Face `zai-org/GLM-5.3-Flash`.
- **Release / knowledge:** 2026-08-26 release (stealth `ox-alpha` on OpenRouter/OpenCode the same week, served on domestic Chinese chips); knowledge cutoff undisclosed
- **IDs:** `opencode/glm-5.3-flash` (Zen); `zai-org/GLM-5.3-Flash` (HF, MIT)
- **Context window:** 1,048,576 tokens total (1M) — verified via Z.ai blog, HF card, and Artificial Analysis 1000K listing; eval footnotes confirm 256K–400K harnesses with 300K HLE-tools management strategy
- **Modalities:** text + image in (AA verified) plus video per vendor (frame-extraction fallback for non-video endpoints); text out; reasoning yes; tool calls yes; JSON mode via standard chat API
- **Pricing (as of 2026-09-22):** Paid $0.15 in / $0.50 out / $0.03 cached per 1M (Zen + Z.ai list agree; 50% launch promo ended 2026-09-09). No $0 Free tier — scored on paid pricing. Zero-day retention on Zen/Go routes.
- **Architecture:** MoE 320B total / 18B active, hybrid KDA-linear + NoPE sparse MLA attention (~3× less attention compute, 4.4× smaller KV cache), MIT open weights (~306 GiB FP8, Hopper+ for self-host)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Toolathlon-Verified: **78.4%** (Z.ai blog 2026-08-26; GLM-5.2 59.9, Opus 4.8 76.2 on same table — best in aireleasetracker set)
- AutomationBench v1.0.6: **48.8%** (Z.ai blog; GLM-5.2 26.2, Opus 4.8 41.0, Gemini 3.7 Flash 52.3 on same table)
- AutomationBench-AA (independent): **60.4%** (BenchLM `glm-5-3-flash` panel; AA comparison `60%` vs GLM-5.3-max 62%)
- Tau3-Banking: **47.2%** (BenchLM `glm-5-3-flash` AA Tau3 Banking row)
- GDPval-AA v2: **1773** (Z.ai blog, AA-evaluated; GLM-5.2 1504, Opus 4.8 1582 on same table) and **1655** (AA v4.3 comparison page, current revision — version drift, both listed)
- AA-Briefcase: **1449** (BenchLM panel; AA comparison 1449 vs 1504 for max)
- Terminal-Bench 2.1: **84.3%** (Z.ai blog, Claude Code 2.1.207, temp 1.0, 6h timeout; Opus 4.8 85.0, GPT-5.6 Terra 87.4, GLM-5.2 81.0 on same table)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (BenchmarkList AA-GPQA row 2026-09-02, 24/464, 95th pct; BenchLM Vals 86.4% on same model — harness differs, both listed)
- HLE with tools: **55.3%** (Z.ai blog full set, 300K ctx, GPT-5.6-luna-medium judge; 10/27, 65th pct on BenchmarkList)
- HLE (AA independent): **39.9–40%** (BenchmarkList 29/466 94th pct; AA comparison `40%` vs max 42% — text-only subset vs tools-assisted 55.3 above)
- CritPt: **15%** (AA comparison; max 19%)
- Artificial Analysis Intelligence Index: **42 points v4.3** (AA model page + AA Flash-vs-max comparison, current) and **57–57.5 points v4.1/v4.1.1** (Z.ai-era: 57 at $0.045/task Pareto frontier per blog; 57.5 #29/636 per dataconomy; 41.9 BenchLM row — index revisions, not comparable head-to-head)
- Omniscience: **7–7.5 points** (AA comparison 7; BenchLM AA-Omniscience Index 7.5%)
- LCR: **80%** (AA-LCR v1.1 on AA comparison, ties max 80%; dataconomy LCR 80% agrees)
- Agents' Last Exam: **26.3%** (Z.ai blog; Opus 4.8 27.0, Terra 28.0 on same table)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (SWE-Pro not in Z.ai Flash table; NL2Repo + DeepSWE below are the coded proxies)
- LiveCodeBench: **no verified public score found**
- SciCode: **52%** (AA comparison; max 59%) — **46.1%** on BenchmarkList independent row (54/458, 88th pct; harness differs)
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **63.4%** (Z.ai blog mini-swe-agent, temp 0.95, 400K ctx; GLM-5.2 46.2, Opus 4.8 58.0, Terra 69.6 on same table; 13/33 63rd pct on BenchmarkList)
- NL2Repo: **56.3%** (Z.ai blog; 9/31 73rd pct, best-in-set on aireleasetracker)
- Z.ai Code Bench v1.0 (max effort): **29.0** (Z.ai blog; Opus 4.8 29.5)
- SWE-Marathon: **62/160 passing trials** (BenchmarkList 9/24, 65th pct, $2.46/trial, 65.76M tokens/trial — self-reported 2026-08-28)

Long context:

- AA-LCR v1.1: **80%** at 1M family (AA comparison — longest-context proxy; ties full 5.3)
- MRCR / RULER / GraphWalks at stated length: **no MRCR/RULER percentage reported at 512K/1M** (1M claimed natively; MVBench 77.8% + MMVU 80.5% exercise video-temporal context instead)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 88/100.** Toolathlon 78.4 beats Opus 4.8 with Automation 48.8 beating Opus by ~8 and Tau3 47.2 frontier-class; capped by AA Automation 60% trailing full 5.3 (62%).
- **Reasoning: 86/100.** GPQA 91.2 + HLE-tools 55.3 with Index 42 (v4.3) leading open flash class; capped by CritPt 15 and HLE-text 40 trailing max (42).
- **Context window: 97/100.** Native 1M tier with measured AA-LCR 80%; capped below 100 without 98%+ retrieval at 512K+.
- **Multimodal: 78/100.** Text + image verified (OfficeQA 62.4 ahead of Opus, CharXiv 89.4, Chartography 78.0, MMVU 80.5, OSWorld 2.0 59.1 ahead of Opus); capped below video-native leaders (MVBench 77.8 trails Gemini 82.2, BabyVision 53.4 mid).
- **Coding: 90/100.** TB2.1 84.3 within 0.7 of Opus with DeepSWE 63.4 beating Opus by 5+ and NL2Repo best-in-set; capped by SWE-Marathon mid-pack and missing SWE-Verified head-to-head.
- **Cost efficiency: 95/100.** Paid $0.15/$0.50 ($0.03 cached) — ~1/10th GLM-5.3, $0.045/task Pareto point; capped below $0 by definition.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88+86+97+78+90)/5 = 87.8 → 88; best-fit as default high-volume multimodal coder, keep Opus/Terra for longest-horizon summits.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-22
- Method: public internet research (Z.ai GLM-5.3-Flash blog 2026-08-26 + HF `zai-org/GLM-5.3-Flash`, AA model + comparison pages, BenchLM/BenchmarkList panels, datacamp/marktechpost summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
