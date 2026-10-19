# Claude Opus 5.5 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Claude 5.5-family model, released 2026-09-22 — the current top of the Artificial Analysis Intelligence Index (58, #1/217). A reasoning-first, agentic/coding model with adaptive thinking (always on) and a 1M-token context window. It is *not* a tier alias of `claude-opus-5`: the two are separately benchmarked (Claude Opus 5 = 80.09 on BenchLM, #8; Claude Opus 5.5 = 86.66, #1) and Anthropic states 5.5 "costs 40% less to run than Opus 5".
- **Provider / access:** Anthropic API `claude-opus-5-5` (Messages API; `platform.claude.com/docs/en/models/opus-5-5/overview`); AWS Bedrock `anthropic.claude-opus-5-5`; Google Vertex AI and Microsoft Foundry `claude-opus-5-5`; OpenRouter `anthropic/claude-opus-5.5` (chat completions, 9 API providers per Artificial Analysis); OpenCode Zen `opencode/claude-opus-5-5` (`https://opencode.ai/inference/anthropic/v1/messages`, Messages API).
- **Release / knowledge:** Released 2026-09-22 ("Latest. Released September 22, 2026."). Knowledge cutoff **June 2026**, training cutoff June 2026. Retirement: "Not sooner than September 22, 2027".
- **IDs:** `claude-opus-5-5` (Anthropic), `anthropic.claude-opus-5-5` (Bedrock), `anthropic/claude-opus-5.5` + `anthropic/claude-opus-5.5:batch` (OpenRouter), `opencode/claude-opus-5-5` (OpenCode Zen).
- **Context window:** **1,000,000 tokens** total, **128,000 max output** (Anthropic docs; OpenRouter: context 1,000,000, `max_completion_tokens` 128,000). A 300K-output beta (`output-300k-2026-03-24`) exists for Batch. Simon Willison (2026-09-22): "Opus 5.5 has a 128,000 maximum output token limit (as do the other Claude models), and it hit that while it was still reasoning" — i.e. the cap is a real limit at max effort.
- **Modalities:** text and image in, text out ("Text and images → text"). No video, audio or PDF input is documented. Adaptive thinking is always on, with `effort` = low / medium / high / xhigh / max (default medium); all Anthropic-published results use "adaptive thinking at max effort" unless noted. Tool use: full Claude tool stack (function calling, computer use, web/fetch, bash, text editor, code execution, MCP).
- **Pricing (as of 2026-10-19, per 1M tokens):** input **$4**, output **$20**, 5-minute cache write **$5**, 1-hour cache write **$8**, cache read **$0.20**; Batch **$2 / $10** (cache read $0.10, write $2.50); Fast mode **$8 / $40**. Anthropic: "Input and output tokens are $4 and $20 per million, 20% less than Opus 5" and "Cache reads … are $0.20 per million tokens, 60% less than Opus 5". OpenCode Zen lists the same $4 / $20 / $0.20 / $5.00.
- **Architecture:** proprietary, closed weights; parameter count not disclosed. Safeguards fall back to earlier models on some domains: cyber tasks fall back to Opus 4.8, biology to Opus 5.

### Raw benchmarks found

> Anthropic's own published numbers are marked "vendor"; Artificial Analysis (AA) and the official Terminal-Bench board are independent; BenchLM rows carry their own evidence labels ("Provider exact", "Benchmark exact", "Proximal"). The AA "Max, Default Fallback" variant is the one that includes the safety fallbacks.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (vendor, xhigh effort; "standard error is ±2.6 pts for Claude Opus 5.5") / **64.8% ± 3.1%** (official tbench.ai board, rank 1, Claude Code harness, effort max, 330 trials, total cost $4,718.65) / **59.6%** (AA, mini-swe-agent; "On Terminal-Bench 4.0 it scores 59.6%, level with the leader GPT-6 Astra (xhigh) and +11 points over Opus 5")
- Terminal-Bench 2.1: **no verified public score found** for 5.5 (Opus 5 has 84.6% via Vals; the two versions are not comparable on this benchmark)
- Tau3-Banking / Tau2-Bench: **not measured** (AA `tauBanking: null`, `tau2: null`) — no independent τ-bench number published for 5.5
- Toolathlon-Verified: **77.8%** (vendor, BenchLM ledger) / Toolathlon Pass@3 **82.4%** / Toolathlon Pass³ **72.2%** / Toolathlon average turns 26.9 (all vendor)
- GDPval-AA v2.1: **1846 Elo** (vendor) / **1866.27** (AA) / 68.3% normalized (AA, per BenchLM)
- AutomationBench: **40.0%** (vendor — "no fallback, Zapier run") / **69.54%** (AA AutomationBench-AA partial score) — a large harness/condition gap
- Agents' Last Exam (LAB): all-pass **8.3%**, criterion-pass **91.2%** (vendor)
- OSWorld: **81.8%** (vendor, OSWorld **2.1**, partial) / **48.7%** (OSWorld **2.0**, per BenchLM system-card relay) — benchmark-version mismatch, not a contradiction
- CWE-bench v1: **67.0%** (independent, Collinear); Hermes Index **63.3%** and Hermes Bench **76.7%** (both best-verified in the catalog); MazeBench **13%** (independent, ASCII mode)
- ITBench-AA (SRE): **38.23%** (AA); GDP.pdf all-pass **26.2%** (AA); AA-Briefcase Elo **1822** (AA article) / 1803 (AA leaderboard via BenchLM); AA-Analyst **56.25%** (AA); AA-Omniscience index **46.42**, accuracy **66.22%**, hallucination rate **58.61%** (AA); Gray Swan IPI (15 attempts) **1.0%** (vendor) — near the best in the catalog
- Claw-Eval / ClawProBench: **no verified public score found**; Toolathon/MCP-Atlas: **no verified public score found** (Toolathlon is published, MCP Atlas is not)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for 5.5 (AA `gpqa: null`)
- HLE: **67.7%** with tools / **64.4%** without tools (vendor) / **61.35%** (AA) — three conditions, all listed
- LCR / MLCR: AA-LCR v1.1 **84.67%** (AA); MLCR-AA **66.67%** (AA)
- CritPt: **31.71%** (AA)
- Artificial Analysis Intelligence Index: **58** (AA, rank **#1 / 217**) / 57.6 (BenchLM, citing AA) / 61.2 (OpenAI's own index version for a different model)
- ARC-AGI-1 **97.50%**, ARC-AGI-2 **91.7%** (independent, ARC Prize — "3.3 behind GPT-6 Astra" on ARC-AGI-2); STEMBench 2.62 (behind GPT-6 Astra 2.81); FrontierMath v2 Tiers 1–3 **91.228%**, Tier 4 **95.000%** (independent, Epoch AI)
- HealthBench **68.1%** raw, 60.6% length-adjusted; HealthBench Pro **65.6%** (raw 77.1%); BioMystery 89.3% human-solvable / 50.0% human-difficult; GMMLU 94.3%, MILU 93.1%
- Omniscience Accuracy / Hallucination Rate: **66.22% / 58.61%** (AA)

Coding:

- SWE-bench Pro: **89.9%** (vendor) — best-verified in the catalog; SWE Multilingual **93.9%** (vendor, best); SWE Multimodal **61.4%** (vendor, best)
- SWE-bench Verified: **no verified public score found** for 5.5
- DeepSWE: **74.2%** (vendor) / 4.8 behind Muse Wonder Full 79.0% (BenchLM ledger)
- FrontierSWE v2: **62.3%** (Proximal, BenchLM) — 3.2 behind GPT-6 Astra 65.5%
- Terminal-Bench 4.0: see above (66.4 / 64.8 / 59.6)
- SciCode: **66.90%** (AA)
- FrontierCode v1.1: Main **54.4%** (vendor, best-verified) / 52.17% (AA); Extended **63.6%** (vendor, 0.9 behind GPT-6 Astra 64.5%)
- CursorBench 4.0: **57.8%** (vendor at max; 52.5% at default effort) — best-verified
- ProgramBench **91.2%**; PostTrainBench v1.1 **49.3%** (best); Bug Hunt Bench **41.7 fixes** (independent)
- LiveCodeBench / Vibe Code Bench: **no verified public score found**
- Terminal-Bench-Science 0.1: **58.7%** (vendor) / 59.05% (AA) / 62.86% ±5.82 (Vals AI, "1/41")

Long context:

- GraphWalks BFS 256K–1M: **66.8%** (vendor, per BenchLM) — 17.4 points behind Gemini 4 Argon's 84.2%
- AA-LCR v1.1 **84.67%** (short-window band); MRCR / RULER: **no verified public score found** for 5.5
- Context window 1M with 128K max output; measured multi-hop retrieval at the 256K–1M band is mid-60s, not ≥98%

Performance profile (AA, Max with fallback): output **94.4 t/s** (#76/185), TTFT **562.75s** (vs 3.69s class median), cost per Intelligence Index task **$5.98** (#112/114 — second-most expensive class), 260M output tokens (#114/116 verbosity), ~119k output tokens per Index task (vs ~73k for Opus 5 max), blended 7:2:1 price $2.94/M, cache-hit discount 95%.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 92/100.** Frontier-tier agentic numbers — GDPval-AA 1846–1866 Elo (rubric anchor ~1750+), Terminal-Bench 4.0 64.8% on the official board (rank 1), Toolathlon-Verified 77.8% with Pass³ 72.2%, OSWorld 2.1 81.8% partial / 2.0 48.7%, OSWorld-class computer use, CWE-bench v1 67.0%, Hermes Index 63.3% (best-verified), IPI 1.0% (near-best prompt-injection resistance). Capped below 95 by no published Terminal-Bench 2.1, **no τ3/τ2-bench measurement at all** (the rubric's frontier anchor requires τ3 ≈ 50%+), AutomationBench 40.0% in Anthropic's own no-fallback run, MazeBench 13% and LAB all-pass 8.3% on long-horizon agent work.
- **Reasoning: 93/100.** HLE 61.35–67.7%, AA-LCR 84.67%, MLCR-AA 66.67%, CritPt 31.71%, FrontierMath v2 91.228% (T1–3) and 95.000% (T4) on Epoch AI's independent board, ARC-AGI-2 91.7% and ARC-AGI-1 97.50% (ARC Prize), STEMBench 2.62, HealthBench Pro 65.6%, BioMystery 89.3%. Just under the 90–100 ceiling because the Artificial Analysis Intelligence Index is **58**, below the rubric's 60+ anchor for the top band, GPQA Diamond is unmeasured for this model, and ARC-AGI-2 / STEMBench trail GPT-6 Astra.
- **Context window: 96/100.** 1,000,000-token context with a 128,000 max output — the rubric's top window tier (≥1M = 95–100), and 128K clears the 64K "no caveat" line. Held to 96 rather than 100 because the rubric awards 100 only with "≥98% retrieval at 512K+", and the published 256K–1M GraphWalks BFS result is **66.8%** — the weakest long-context retrieval of the models in this batch — with no MRCR or RULER figure published at all.
- **Multimodal: 70/100.** Image input with text output, and strong vision evals — OfficeQA Pro 67.7% (best-verified), OfficeQA 78.9% (best-verified), Chartography 89.0% with tools / 64.4% without, MMMU-Pro 87.69% (AA), biomedical image analysis 71.4%, BenchCAD V2C 0.962 with tools. The rubric's "+image in = 60–70" band is the ceiling: **no video, audio or PDF input** is documented for Claude Opus 5.5, so the 90–100 "+audio / non-text output" band does not apply.
- **Coding: 93/100.** SWE-bench Pro 89.9% and SWE Multilingual 93.9% (both best-verified), DeepSWE 74.2% (rubric anchor 74%+), Terminal-Bench 2.1 not published but Terminal-Bench 4.0 64.8% on the official board, SciCode 66.90% (anchor 55%+), FrontierCode 1.1 Main 54.4% (best) / Ext 63.6%, FrontierSWE v2 62.3%, CursorBench 4.0 57.8% (best), ProgramBench 91.2%, PostTrainBench 49.3% (best), Bug Hunt 41.7 fixes. Capped by no published SWE-bench Verified, no LiveCodeBench, no Vibe Code Bench, and by the second-best positioning on FrontierSWE v2 and Terminal-Bench-Science.
- **Cost efficiency: 52/100.** Scored on the evaluated route: OpenCode Zen `opencode/claude-opus-5-5` at **$4.00 in / $20.00 out** per 1M, cache read $0.20 (95% discount), cache write $5.00 — identical to Anthropic's list price. The rubric's anchors are "~$1.25/$4.25 ≈ 88" and "$3/$15 ≈ 60"; $4/$20 is a tier below the latter, and Artificial Analysis prices the model at **#112 of 114** for cost ($5.98 per Index task) with a 265s-class TTFT. Batch ($2/$10) and Fast ($8/$40) exist; the 95% cache-read discount is what keeps long agentic runs affordable.
- **Overall Score: 88.8/100.** (92 + 93 + 96 + 70 + 93) / 5 = 88.8 — best-fit: the strongest all-round agentic model in this batch and the AA index leader, worth its price for long-horizon agent/coding work; pair it with a cheaper model for bulk drafting, and note that its long-context multi-hop retrieval (66.8% at 256K–1M) is not its strength.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 66.4 / 64.8 / 59.6.** Anthropic publishes 66.4% at xhigh (±2.6); the official tbench.ai board shows 64.8% ± 3.1 at max with the Claude Code harness (rank 1 of 330 trials); Artificial Analysis measures 59.6% with mini-swe-agent. All three are kept; the official board is used as the independent anchor because it is the benchmark's own harness with published trial counts and cost.
2. **AutomationBench — 40.0 vs 69.54.** Anthropic's 40.0% is explicitly "no fallback, Zapier run"; AA's 69.54% is its own agentic SaaS-workflow harness. The gap is a harness-and-fallback condition, not a scoring error, so both are listed and neither is silently preferred.
3. **HLE — 67.7 with tools / 64.4 without / 61.35 (AA).** Three different conditions; the with-tools figure is the vendor's, the AA number is the tool-free measured one. Reasoning is scored on the middle-to-lower of these.
4. **OSWorld — 81.8% (2.1) vs 48.7% (2.0).** Different benchmark versions, and the 2.1 number is a "partial" credit run. Both listed, neither merged.
5. **AA Intelligence Index 58 vs 57.6 vs OpenAI's 61.2 for a different model.** Rounding and index-version drift; the AA model page (58, #1/217) is used.
6. **AA-Briefcase Elo 1822 vs 1803.** Same tracker, different snapshot; the article figure is cited alongside the leaderboard figure.
7. **FrontierCode 54.4% (max) vs 54.6% (default effort).** Anthropic's own two effort levels disagree by 0.2 points; both are recorded.
8. **Cache-read discount wording.** Anthropic's overview says "prompt cache reads cost 10% of the base input price (…5% on Claude Opus 5.5)" while the pricing page says "$0.20 per 1M" (5% of $4) and AA reports "a 95% discount compared to uncached input pricing, up from 90%". The 5% / 95% reading is consistent with the $0.20 figure and is what is scored.
9. **Ranking comparability.** BenchLM ranks 5.5 at #1 of 956 with 80 of 644 benchmarks covered, but ranks Opus 5 at #8 with 99 covered — the coverage is not coverage-neutral, so no rank claim is used as a score.
10. **Community signal.** The launch thread on Hacker News (2,279 points, 2,081 comments for GPT-6 Astra's parallel launch; the Opus 5.5 thread is comparably large) contains both strong endorsements and reports of hitting the 128K output cap mid-reasoning; Simon Willison's note about "it hit that while it was still reasoning" is the concrete, quotable caveat and is reflected in the Context-window justification.

### Notes on identity

- `claude-opus-5-5` is a distinct model from `claude-opus-5` (separate scores, separate pricing, separate benchmarks) and from `claude-opus-4.8` / `claude-opus-4.7`. No tier-suffix identity question arises.
- The AA variant label "Max, Default Fallback" means the safety-fallback configuration is the default on the evaluated route; the pure no-fallback configuration has no verified public index score.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Anthropic first-party model docs, pricing page, launch page and system-card relays; independent trackers Artificial Analysis (model page + launch article), the official Terminal-Bench 4.0 leaderboard, Vals AI, ARC Prize, Epoch AI FrontierMath, Collinear CWE-bench, Hermes, MazeBench, CursorBench and Bug Hunt Bench via the BenchLM evidence ledger; OpenRouter and OpenCode Zen model/pricing catalogs; Hacker News and Simon Willison commentary. Vendor-vs-independent conflicts are listed explicitly rather than merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
