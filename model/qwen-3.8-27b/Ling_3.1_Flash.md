# Qwen3.8-27B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Qwen3.8-27B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B open-weights vision-language model — native image/video understanding plus frontier-class agentic coding in a locally deployable footprint; a "compact, deployment-friendly" version of the Qwen3.8 generation.
- **Provider / access:** Alibaba — Apache 2.0 weights on Hugging Face (`Qwen/Qwen3.8-27B`, FP8 quantization available); Alibaba Cloud API; hosted Qwen Cloud version with 1M default context and built-in tools announced (coming). vLLM / SGLang / TokenSpeed compatible; Multi-Token Prediction support.
- **Release / knowledge:** Released 2026-08-14; 3M Hugging Face downloads in its first three days. Knowledge cutoff not stated in captured sources.
- **IDs:** `Qwen/Qwen3.8-27B` (repo meta.json). No Free ID on Zen (meta.json `noFreeId: true`).
- **Context window:** 262,144 tokens native (extensible to 1M with YaRN per repo meta.json).
- **Modalities:** Text, image, video in; text out; thinking on by default (low / medium / xhigh / non-reasoning variants).
- **Pricing (as of 2026-10):** $0.50 input / $3.00 output per 1M tokens at Alibaba's API (Artificial Analysis; 80% cache discount, blended ~$0.47); list $0.42/$2.55 per ModelBeat; Novita cheapest at $3/1M output. Self-hosting is free (Apache 2.0).
- **Architecture:** 27B dense, Apache 2.0; ~56GB BF16 / ~28GB FP8 / ~17GB Q4 memory footprint.

### Raw benchmarks found

Qwen's official launch table (Hugging Face model card, 2026-08-14; Claude Code harness, temp=1.0, top_p=0.95, 256K context unless noted):

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (vendor, Claude Code harness; vs Opus 4.6 Max 78.2%, Qwen3.7-Plus 64.0%); **79.8%** (AA independent, rank 36 of 194, 82nd pct — field leader Fable 5.1 91.4%, −11.6pp); Terminal-Bench 4.0: **6%** (AA; 5.6% per Shawn Hack — weak, in line with the broad TB 4.0 difficulty curve for sub-frontier models)
- CoWorkBench (long-horizon office work): **70.7%**.
- Agents' Last Exam: **Pass@1 20.4 / Score 42.9**.
- JobBench: **33.4%**.
- ClawEval-MM (multimodal tool use): **Pass@3 57.4 / Average 56.9**.
- τ³-Banking: **48%** (AA/PublicAI); GDPval-AA v2.1: **1419 Elo** (AA); MCP-Atlas: still no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Epoch AI tracks 90.5%).
- HLE: **30.8%** (judged GPT-4o).
- IFBench: **79.5%**.
- Artificial Analysis Intelligence Index: **34** (AA's own page, xhigh preset, v4.3.2 — 200M tokens on the Index run, "very verbose" vs the 82M median; 46.5 tok/s, notably slow; TTFT 3.80s; $1.01 per Index task; 1st of 142 in its size class, same-class median 8). VentureBeat's **52** (2026-08-17) was the August v4.1-era read of the 9-eval composite — the conflict is resolved: v4.3.2 (10 evals) rescored every model 12–19 points lower, so 52→34 is the rebase, not a regression. AA effort ladder: xhigh 34 / medium 28 / low 26 / non-reasoning 20. AA Agentic Index: **51** (50.877, ahead of Claude Opus 4.8 max by under one point, per VentureBeat/qubrid). AA Coding Index: **68.1** (rank 35 of 138).

Coding:

- LiveCodeBench v6: **90.3%**.
- SWE-bench Pro: **61.7%** (vs Opus 4.6 Max official 53.4%).
- DeepSWE 1.1: **42.2%**.
- NL2Repo-Bench: **42.3%**; QwenSWEBench (in-house): **79.0%**.
- SciCode: **47%** (AA; 46.6% per Shawn Hack/BenchmarkList, 44.7% per PublicAI — under the 55% reference); Vibe Code Bench: no verified public score found; SWE-bench Multilingual: **73.8%** (BenchmarkList, rank 24 of 49).

Computer use / browser / mobile (VL):

- OSWorld-Verified: **84.3%** (vs Qwen3.7-Plus 73.3%, Opus 4.6 Max 72.7%).
- WebArena-Verified: **64.8%**; AndroidWorld: **81.9%**; RecreationBench: **47.1%**; Vision2Web: **62.9%**; SWE-MM: **38.6%**.

Long context:

- No MRCR/RULER/GraphWalks score found; AA-LCR v1.1: **82%** (AA; 77.3% on an older PublicAI snapshot) — strong retrieval within the 262K window; 256K native (1M only via YaRN extension, with Alibaba's own caveat that common frameworks implement YaRN statically and can lose accuracy on shorter inputs; hosted 1M "coming soon").

Multimodal:

- MathVision: **90.0%** without CI / **94.6%** with CI; BabyVision: **65.7%** / **85.6%** with CI; CharXiv (RQ): **83.7%** / **90.2%** with CI; OmniDocBench 1.5: **91.1**; RealWorldQA: **85.9%**; ERQA: **65.5%**.

Caveats: defaults to xhigh reasoning — extremely verbose and slow (one documented test took 21 minutes and 22K reasoning tokens for a single SVG); launch benchmarks "still need more independent validation" (VentureBeat).

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 79.8% (AA independent — 6.8pp above the vendor's 73.0%), OSWorld-Verified 84.3% and the AA Agentic Index of 51 (ahead of Claude Opus 4.8 max, by under one point) are strong, with CoWorkBench 70.7%, τ³-Banking 48%, AutomationBench-AA 48%, WebDev Arena 1597.5 and ExtractBench 89.75 supporting; Agents' Last Exam Pass@1 20.4% (Score 42.9), Terminal-Bench 4.0 6% (AA) and JobBench 33.4% cap the score, and MCP-Atlas remains unpublished.
- **Reasoning: 73/100.** GPQA 89.2% (vendor) / 90.5% (AA) clears the 90%+ frontier line and IFBench 79.5% is strong; capped by HLE 30.8% (vendor) / 33.9% (AA, no-tools), the AA Intelligence Index of 34 (v4.3.2 — VentureBeat's 52 was the August v4.1-era read, resolved as the rebase), CritPt 5.4% and AA-Omniscience at −10 (accuracy 15.6%).
- **Context window: 74/100.** 256K native (1M only via YaRN extension) sits between the 200K=70 and 1M=95 anchors.
- **Multimodal: 80/100.** Text/image/video input; MathVision 94.6% (CI), OmniDocBench 91.1, CharXiv 90.2% (CI) and BabyVision 85.6% (CI) are strong image/video-band evidence.
- **Coding: 74/100.** LiveCodeBench v6 90.3% is elite, TB2.1 79.8% (AA independent) is strong and the AA Coding Index of 68.1 (rank 35 of 138) with SWE-bench Multilingual 73.8% support, but DeepSWE 1.1 42.2% (vendor-only, Claude Code harness), SWE-bench Pro 61.7% (vendor, corrected task set), SciCode 47% (under the 55% reference) and NL2Repo-Bench 42.3% sit below frontier anchors; Vibe Code Bench is unpublished.
- **Cost efficiency: 95/100.** Apache 2.0 weights are $0 to self-host; Alibaba's $0.50/$3.00 per 1M is cheap for the capability.
- **Overall Score: 75.2/100.** (75+73+74+80+74)/5 = 75.2 — an exceptional open-weights value — frontier-adjacent coding, vision and computer-use at 27B — held below the frontier by HLE, DeepSWE and long-horizon-agent (TB 4.0 6%) evidence.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Score revisions: Tool use 73→75, Coding 73→74, Overall 74.6→75.2** — AA's independent Terminal-Bench 2.1 read (79.8%, 6.8pp above the vendor's 73.0%), the τ³-Banking fill (48%), the AA Coding Index (68.1) and the SciCode fill (47%) lift the independent evidence base; Reasoning 73 / Context 74 / Multimodal 80 / Cost 95 unchanged:

- **The AA Intelligence Index conflict (34 vs 52) is resolved.** AA's current page reads **34** (xhigh, v4.3.2; 200M tokens on the Index run — "very verbose" vs the 82M median; 46.5 tok/s, notably slow for its class; TTFT 3.80s; $1.01 per Index task; 1st of 142 in its size class, same-class median 8). VentureBeat's **52** (2026-08-17) was the August v4.1-era read of the 9-eval composite; v4.3.2 (10 evals) rescored every model 12–19 points lower, so 52→34 is the rebase, not a capability regression. AA's effort ladder: xhigh 34 / medium 28 / low 26 / non-reasoning 20 (a 13.5-point spread — the strongest argument for tuning effort per workload).
- **Full AA v4.3.2 component set:** AA-Briefcase v1.1 **1397**, GDPval-AA v2.1 **1419**, AutomationBench-AA **48%**, Terminal-Bench 4.0 **6%** (5.6% per Shawn Hack), SciCode **47%** (46.6% Shawn Hack / 44.7% PublicAI), HLE **34%** (33.9%, no-tools — above the vendor's 30.8% GPT-4o-judged read), GDP.pdf **17%**, CritPt **5%** (5.4%), AA-Omniscience **−10** (accuracy 15.6%, non-hallucination 69.7%), AA-LCR v1.1 **82%** (77.3% on the older snapshot). GPQA Diamond **90.5%** (AA, above the vendor's 89.2%); MMMU-Pro **76.3%** (AA).
- **Terminal-Bench 2.1: 79.8% (AA independent)** — rank 36 of 194, 82nd percentile, 6.8pp above Qwen's own Terminus read (73.0%) and 11.6pp behind field leader Fable 5.1 (91.4%). The vendor's 73.0% was the conservative anchor; the independent read is the stronger one. Terminal-Bench 4.0 reads 6% (AA) — weak, in line with the broad TB 4.0 difficulty curve for sub-frontier models.
- **New rows:** τ³-Banking **48%** (AA/PublicAI — fills the file's missing τ³ row); AA Coding Index **68.1** (rank 35 of 138 — the model ranks higher on coding than on general intelligence); SWE-bench Multilingual **73.8%** (BenchmarkList, rank 24 of 49); WebDev Arena **1597.46** (88th pct, rank 13 of 105); AIIQ Composite IQ **114**; LlamaIndex ExtractBench **89.75 mean** (94.68 short / 87.54 medium documents, FP8 under vLLM, one-shot structured output — a document-extraction workload row that pairs with OmniDocBench 91.1).
- **Architecture and serving (new detail):** 27B dense (27,781,427,952 params BF16 including the vision encoder), 64 layers, hidden 5,120, vocab 248,320; hybrid attention — 48 Gated DeltaNet linear layers to 16 full Gated Attention layers (3:1) — plus Multi-Token Prediction; 55.6 GB BF16 in 18 shards, FP8 and community GGUF available; Apache 2.0 confirmed in the licence file (patent grant; §6 reserves the Qwen name). AMD Day-0 support (24.5 tok/s Ryzen AI Max+ 395, 51.8 tok/s Radeon AI PRO R9700); Simon Willison's Q4_K_M (~17 GB) ran 15–30 tok/s in LM Studio with a +72% MTP gain via llama.cpp; one SVG request took 21 minutes and 22,276 reasoning tokens (xhigh default); Tomasz Tunguz's 9-task test found it ~30× slower and 4.5× more expensive than DeepSeek V4 Flash (small sample, his own caveat); an llmcompare harness (GPT-5.5 judge, 10 tasks) had it beat Qwen3.6-27B 9/10 (8.838 vs 6.862) at ~3× the token burn.
- **Hosting and price drift:** OpenRouter $0.45/$3.20 (2026-08-17); OrcaRouter $0.33/$2.40 (qwen/qwen3.8-27b) and $0.40/$4.21 (obsidian block-FP8 variant, vision tower at full precision); Qubrid $0.58 input; OrcaRouter also runs a free rate-limited tier (its playground moved 105.1M tokens/week at 3.8s median TTFB, 3.3% error rate; a 33.3% error rate on 2026-08-15 reflected early-load instability). Qwen Cloud's hosted 1M-context version (991K max input, 131K max output, 262K max-reasoning budget) was still "coming soon" (404 as of 2026-08-17). AA flags the $0.50/$3.00 list as expensive for its size class (open-weight medians $0.03/$0.12) — the Apache 2.0 self-hosting option is the offset that keeps Cost at 95.
- **Methodology notes (Alibaba's own disclosures):** the agentic/coding rows ran the Claude Code harness at temp 1.0/top_p 0.95/256K (Opus 4.6 Max's SWE-bench Pro is Anthropic's officially reported score); Alibaba corrected problematic SWE-bench Pro tasks and re-evaluated all baselines, and fixed incorrect ground-truth annotations in MathVision and CharXiv — so its table is not directly comparable to unmodified-benchmark runs; QwenSWEBench, CoWorkBench and RecreationBench are in-house with no published task list; YaRN extension is implemented statically by common frameworks and can lose accuracy on shorter inputs.
- **Still open:** MCP-Atlas, Vibe Code Bench and an independent DeepSWE run (the 42.2% is vendor-only); SWE-bench Verified is unpublished (SWE-bench Pro 61.7% is the SWE-family anchor); the knowledge cutoff is still not stated.
- Score impact: Tool 73→75 (TB 2.1 79.8% AA + τ³-Banking 48% + Agentic Index 51); Coding 73→74 (TB 2.1 79.8% AA + Coding Index 68.1 + SciCode 47% + SWE-Multilingual 73.8%); Overall 74.6→75.2 ((75+73+74+80+74)/5).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-11)
- Method: public internet research (Qwen HF model card + config, Artificial Analysis, BenchmarkList, PublicAI, VentureBeat, OrcaRouter, Qubrid, DataNorth, Kingy AI, kinonn research vault, Simon Willison, Tomasz Tunguz); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
