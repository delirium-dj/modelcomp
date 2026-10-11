# Qwen 3.8 Flash Next — findings by Ling 3.1 Flash

- Source: Alibaba (Qwen Team) / Qwen3.8-Flash-Next
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba Qwen Team's open-weights preview of the Qwen4 architecture (released 2026-08-26): a 125B MoE with 6B active per token, plus a 51B n-gram embedding table (offloadable to host RAM) and a 4B MTP head — ~176B stored. Deliberately architectural: "architectural innovation for sustainable AGI progress" over raw scaling. The production build with 1M context and built-in tools is served as Qwen3.8-Flash on QwenCloud.
- **Provider / access:** OpenRouter `qwen/qwen3.8-flash-next` (serverless, OpenAI-compatible); QwenCloud serves the production `qwen3.8-flash`; only one API provider at launch (Alibaba Cloud International).
- **Release / knowledge:** 2026-08-26; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.8-flash-next` (OpenRouter); weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face and ModelScope (Qwen Community License 1.0).
- **Context window:** 262,144 native, extensible to 1,000,000 (YaRN); sparse-attention kernel claims up to 7.6× prefill / 4.9× decode speedups at 1M tokens.
- **Modalities:** text + image (vision encoder; video-understanding rows reported) in; text out; tool calls; MTP (multi-token prediction) serving.
- **Pricing (as of 2026-10-08):** QwenCloud $0.16 / 1M input, $0.47 / 1M output; OpenRouter $0.15 / $0.47, cache read $0.016 (91.1% observed cache-hit rate → effective input ~$0.028/1M).
- **Architecture:** 125B MoE main + 51B n-gram embedding (deterministically addressed, not in per-token compute) + 4B MTP head; Qwen Sparse Attention, gated residuals, Gated DeltaNet hybrid stack; open weights.

### Raw benchmarks found

All task numbers are Qwen-reported (vendor benchmarks, unreproduced as of 2026-10-08; harness notes per HF model card).

Agent / tool use:

- Toolathlon Verified (Pass@1): **73.5%**
- CoWorkBench (long-horizon office work): **73.9%**
- JobBench (professional job tasks): **55.7%**
- Agents' Last Exam: **Pass@1 24.3%**, score 51.2
- AndroidWorld: **84.5%**; OSWorld 2.0: **19.4%** binary / **52.3%** partial
- ClawEval-MM (Pass@3): **64.4%**; Vision2Web: **64.0%**; τ³-Banking: **45.4%** (AA — fills the gap; vs Qwen3.8-27B's 48.0% and DeepSeek-V4-Flash's 30.9%); Terminal-Bench 2.1: **86.1%** (AA, #16 of 55 — strong independent row)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vs Claude Opus 4.6 Max 91.3%)
- Humanity's Last Exam: **35.9%** (GPT-4o judge; Opus 4.6 Max 40.0%)
- IFBench: **81.3%**
- AA Intelligence Index: **40** (v4.3.2, #6 of 117 in class, median 18; 240M tokens on the Index run — "very verbose" vs the 140M median; $0.37 per task, $363 to run the Index). The August read of **56** (#5 of 111, median 29, ~$0.10/task) was the v4.1-era composite — the 16-point drop is the v4.3.2 rebase (10 evals, rescored 12–19 points lower), not a regression. v4.3.2 components: AA-Briefcase v1.1 **1581**, GDPval-AA v2.1 **1629**, AutomationBench-AA **56%**, Terminal-Bench 4.0 **25%** (25.25%, #21 of 40, 38.4pp behind Sonnet 5.5), SciCode **51%** (50.6%), HLE **38%** (AA, no-tools — above the vendor's 35.9% GPT-4o-judged read), GDP.pdf **16%** (15.6%), CritPt **11%** (11.1%), AA-Omniscience **−10** (accuracy 24.5%, hallucination rate 45.3%), AA-LCR v1.1 **80%** (79.7%). AA-GPQA Diamond: **92.3%** (above the vendor's 91.7%)
- MathVision without/with CI: **90.6% / 95.7%**

Coding:

- LiveCodeBench v6: **91.9%** (vs Opus 4.6 Max 88.8%)
- SWE-bench Pro: **62.5%** (Claude Code harness; vs Opus 4.6 Max 53.4%)
- SWE-bench Multilingual: **81.0%** (mini-SWE-agent; vs Opus 4.6 Max 77.5%)
- DeepSWE 1.1: **58.7%** (best of Claude Code / mini-SWE-agent harnesses — performs best on mini-SWE-agent, per the model card's own disclosure)
- NL2Repo-Bench: **48.1%** (repo-level generation, Claude Code harness with repo-accessing bash commands — pip download/install, git clone — disabled to prevent reward hacking; DeepSeek-V4-Flash 54.2% leads)

Multimodal:

- RealWorldQA: **88.5%**; CharXiv RQ without/with CI: **84.6% / 90.6%**; LVBench (video): **76.6%**; ERQA: **72.3%**; RecreationBench: **49.9%**

Long context:

- AA-LCR v1.1: **80%** (AA; 79.7% on Dataconomy's pull — fills the "no verified long-context retrieval score" gap; a strong retrieval read); no MRCR/RULER row; the 1M-token extension is architectural (sparse attention) with vendor throughput claims only.

### Normalized scores (1–100)

- **Tool use: 77/100.** Toolathlon 73.5%, CoWorkBench 73.9%, AndroidWorld 84.5% and Terminal-Bench 2.1 86.1% (AA independent, #16 of 55) are strong for the tier, with AutomationBench-AA 56% (AA) and τ³-Banking 45.4% supporting, capped by JobBench 55.7%, OSWorld 2.0 binary 19.4%, Agents' Last Exam Pass@1 24.3% and Terminal-Bench 4.0 25.25% (AA).
- **Reasoning: 78/100.** GPQA Diamond 91.7% (vendor) / 92.3% (AA) and MathVision 95.7% are elite, but HLE 35.9% (vendor) / 38% (AA, no-tools) trails Opus 4.6 Max (40.0%), the AA Intelligence Index of 40 (v4.3.2) sits mid-frontier, and CritPt 11.1% plus AA-Omniscience at −10 (accuracy 24.5%, hallucination 45.3%) cap the score.
- **Context window: 75/100.** 262K native / 1M extensible with big sparse-attention speedup claims; AA-LCR v1.1 80% (AA) is a strong independently measured retrieval read that confirms but doesn't raise the band (the 262K native window is the driver).
- **Multimodal: 85/100.** Native vision with RealWorldQA 88.5%, CharXiv RQ 90.6% (w/ CI), LVBench 76.6% video understanding; RecreationBench 49.9% is the weak row; text-only output. Independent KingBench testing (MindStudio, 2026-08-29) ties GLM 5.3 Flash on math and agentic pipeline (both perfect) but trails on 3D rendering and front-end polish (56/80 vs 63/80 — a near-total failure on a folding-table animation, 2/10), a visual-generation caveat separate from understanding.
- **Coding: 82/100.** LiveCodeBench v6 91.9%, SWE-bench Multilingual 81.0%, Terminal-Bench 2.1 86.1% (AA), SWE-bench Pro 62.5% and DeepSWE 58.7% (best on mini-SWE-agent) beat much larger models; NL2Repo 48.1%, SciCode 50.6% (under the 55% reference) and Terminal-Bench 4.0 25.25% (AA) cap it.
- **Cost efficiency: 95/100.** $0.16/$0.47 per 1M with ~$0.028 effective input after cache hits — an order of magnitude under Qwen3.8-Max ($2/$6) and among the cheapest capable models listed.
- **Overall Score: 79/100.** (77+78+75+85+82)/5 = 79.4 → 79; best fit for high-volume coding-agent and office-automation workloads on a budget — now with AA v4.3.2 verification (Index 40, TB 2.1 86.1%, AA-LCR 80%) and one independent KingBench run alongside the vendor sheet.

---

## Update 2026-10-11 (deep second pass, 2 independent searches)

**Score revision: Tool use 76→77, Overall unchanged at 79** — AA's full v4.3.2 component set and Terminal-Bench 2.1 (86.1%, #16 of 55) lift the independent evidence base; Reasoning 78 / Context 75 / Multimodal 85 / Coding 82 / Cost 95 unchanged:

- **AA Intelligence Index: 40 (v4.3.2, #6 of 117 in class, median 18; 240M tokens on the Index run — "very verbose" vs the 140M median; $0.37 per task, $363 to run the full Index vs Kimi K3 Low's $1,190).** The file's 56 (#5 of 111, median 29, ~$0.10/task) was the August v4.1-era composite (Dataconomy's 2026-08-27 pull: Intelligence 55.8, Coding Index 73.1) — the 16-point drop is the v4.3.2 rebase (10 evals, rescored 12–19 points lower across the board), not a regression. Full v4.3.2 component set: AA-Briefcase v1.1 1581, GDPval-AA v2.1 1629, AutomationBench-AA 56%, Terminal-Bench 4.0 25% (25.25%, #21 of 40, 38.4pp behind Claude Sonnet 5.5's 63.6%), SciCode 51% (50.6%, #39 of 89), HLE 38% (AA, no-tools — above the vendor's 35.9% GPT-4o-judged read), GDP.pdf 16% (15.6%), CritPt 11% (11.1%, #44 of 124), AA-Omniscience −10 (−9.7; accuracy 24.5%, hallucination rate 45.3%), AA-LCR v1.1 80% (79.7%). AA-GPQA Diamond 92.3% — above the vendor's 91.7%. Openness Index 38.9. New rows: BRIDGE Medical 45.9 (CoT) / 56.0 (few-shot) / 47.0 (zero-shot); LiveBench 76.2% (#26 of 101); τ³-Banking 45.4% (vs Qwen3.8-27B's 48.0% and DeepSeek-V4-Flash's 30.9%).
- **Terminal-Bench 2.1: 86.1% (AA, #16 of 55)** — a strong independent row the vendor sheet didn't include; the model also leads its own comparison columns (Qwen3.8-27B, Qwen3.7-Plus, DeepSeek-V4-Flash) on most agentic rows per SemiAnalysis's card read.
- **Independent verification is still thin:** MindStudio's KingBench (2026-08-29, fixed 8-task suite) scores Flash-Next 56/80 (70%) vs GLM 5.3 Flash's 63/80 (78.75%) — tied on math and the agentic pipeline (both perfect 10s), behind on 3D rendering and front-end polish (folding-table animation 2/10, a near-total failure; SVG panda 6/10 vs 8/10; elevator simulation 5/10 vs 6/10; wristwatch 7/10 tie; contact-lens case 8/10 vs 7/10, a win; bow-and-arrow 8/10 tie). The split matters: on pure logic, math and multi-step agentic execution the two are indistinguishable; on visual polish and animation fidelity Flash-Next falls behind. RankLLMs reports "SWE-bench Verified 68.2%" and "Terminal-Bench 38.4%" — neither row exists on the vendor card (which publishes SWE-bench Pro 62.5 instead of Verified) and the 38.4% conflicts with AA's TB 2.1 86.1%; flagged as likely mislabels, not adopted.
- **Harness disclosures (model card / Dell FP8 hub):** DeepSWE 1.1 ran both Claude Code and mini-SWE-agent harnesses (temp 1.0, top_p 0.95, 256K) — "We report the highest score across the two harnesses; notably, Qwen3.8-Flash-Next performs best on mini-SWE-agent"; SWE-bench Pro via Claude Code on a corrected task set with all baselines re-evaluated (Opus 4.6 Max excepted, officially published); SWE-bench Multilingual via mini-SWE-agent; NL2Repo-Bench via Claude Code with repo-accessing bash commands (pip download/install, git clone) disabled to prevent reward hacking; CoWorkBench is an in-house suite across CS/finance/law/medical productivity domains; HLE judged by GPT-4o.
- **Serving profile (AA):** 53 tok/s, TTFT 2.32s, time-to-first-answer 40.18s; $0.0882 blended ($0.15/$0.47, cache read $0.016) — among the cheapest capable models on AA's board; QwenCloud's production `qwen3.8-flash` serves the 1M-context build; the open checkpoint is a VLM (`image-text-to-text`) with a custom `Qwen4ExpForConditionalGeneration` architecture requiring `trust_remote_code` (~250 GB fp16).
- **Still open:** MRCR/RULER, SWE-bench Verified (the card publishes Pro instead), an independent LiveCodeBench run, and any second independent agentic run beyond KingBench.
- Score impact: Tool 76→77 (TB 2.1 86.1% AA + AutomationBench 56% + τ³-Banking 45.4%, against the new TB 4.0 25.25% cap); Overall stays 79 ((77+78+75+85+82)/5 = 79.4 → 79).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-08 (updated 2026-10-11)
- Method: public internet research (Qwen HF model card + blog, Artificial Analysis, BenchmarkList, Dataconomy, Benchmark Atlas, AIEvals, BenchLM, LLMLearner, SemiAnalysis InferenceX, MindStudio KingBench, RankLLMs, kinonn research vault, acecloud); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
