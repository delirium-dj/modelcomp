# Gemini 2.5 Pro — MiniMax M3 findings

> **Stem:** Gemini 2.5 Pro (slug `gemini-2.5-pro`)
> **Official model ID:** `gemini-2.5-pro` (Google AI Studio / Gemini API), `models/gemini-2.5-pro` (Vertex AI)
> **Provider:** Google DeepMind
> **Window:** 1,048,576 tokens input (1M); **64,000 output**
> **Modalities:** Text, image, audio, video, PDF in; text out (Gemini 2.5 Flash added native image and audio output in experimental form; Pro is text-only at output)
> **Release date:** 2025-03-25 (Gemini 2.5 Pro Experimental); general availability 2025-Q2; Deep Think variant launched to trusted testers 2025-06
> **License:** Proprietary (closed weights; API + Vertex AI)
> **Price (≤200K token prompts):** **$1.25 / $10.00 per 1M** input/output
> **Price (>200K token prompts):** **$2.50 / $15.00 per 1M** input/output (the tiered pricing is the model-specific structural feature)
> **Cached input:** not separately priced in the standard tier table; the Gemini 1.5 Pro cached-input distinction was retired with the 2.5 line
> **Date of research:** 2026-10-17

## Identity & lineage

Gemini 2.5 Pro is **Google DeepMind's canonical thinking flagship of 2025** — the first Gemini generation to ship **thinking (chain-of-thought reasoning) as a native capability across all model sizes**. Released 2025-03-25 as 2.5 Pro Experimental, it debuted at #1 on LMArena by a significant margin and held the leadership position on common math, science, and coding benchmarks at launch.

The 2.5 family (Pro, Flash, Flash-Lite) replaced Gemini 1.5 Pro and 1.5 Flash as the production flagship line. The **2.5 Pro Deep Think** variant — a parallel-reasoning extension using "naturally blends in parallel thinking techniques during response generation" — was announced at Google I/O 2025-06 and launched to trusted testers. Deep Think is the operational ceiling of the 2.5 line; it set SOTA on USAMO 2025 (math), LiveCodeBench (competitive coding), and MMMU (multimodal understanding) at the time.

Gemini 2.5 Pro has now been **superseded by the Gemini 3.x line** — Gemini 3 Pro, 3.1 Pro (Feb 2026), and the 3.5/3.6/3.7/3.8 Flash cadence. As of late 2026, Gemini 2.5 Pro is **retained in the model roster but no longer the recommended default** for new deployments. Its position in the comparison set is "the architecture that proved native thinking works at the frontier, before the 3.x line pushed the cost/intelligence frontier further."

## Architecture & capability claims

The Gemini 2.5 technical report (arXiv 2507.06261) lays out four structural facts that matter for every other number below:

1. **First Gemini family trained on TPUv5p.** Synchronous data-parallel training across multiple 8960-chip TPUv5p pods, with two infrastructure advances that are operational: (a) **slice-granularity elasticity** that continues training through TPU failures with ~97% throughput (vs 10+ minute delays on Gemini 1.5), and (b) **split-phase SDC (Silent Data Corruption) detection** that uses deterministic replay and per-device checksums to localize hardware corruption within minutes. Result: 93.4% of training time spent on TPU compute, with ~0.25% of steps replayed due to suspected SDCs and 6% of those confirmed as genuine hardware corruption. This is the engineering reason the 2.5 family shipped at unusual cadence.
2. **Native multimodality with 1M context.** 1M-token context window was a structural advantage over the 200K-400K class competitors in early 2025. The model processes text, image, audio, video, and PDF in a single forward pass, with **66 visual tokens per frame** (vs 258 in prior generation) — enabling **3-hour-long video understanding** within the 1M window. This is the architectural capability that put Gemini 2.5 Pro at the top of VideoMME 86.9% (with subtitles+audio).
3. **Dynamic thinking budget.** Gemini 2.5 was the first Gemini generation with **thinking natively built into every model size**. The model can spend "tens of thousands of forward passes" during a thinking stage before responding; this is the architectural mechanism underneath the +70.5 point jump in AIME 2025 over Gemini 1.5 Pro (17.5% → 88.0%) and the +28.3 point jump in GPQA Diamond (58.1% → 86.4%).
4. **Distillation for smaller variants.** The 2.5 Flash and 2.5 Flash-Lite are distilled from the Pro teacher with k-sparse output distributions. This is why Gemini 2.5 Flash became "the second most capable model in the Gemini family" per the technical report — the distillation chain works.

The Gemini Plays Pokémon demonstration is the qualitative anchor: 2.5 Pro solved spinner puzzles in one shot, navigated the Safari Zone's step-constrained multi-map puzzle, and reached Cinnabar Island autonomously — long-horizon agentic capability that was the launch-period talking point.

## Benchmark scores

- **Overall Score: 84/100**

### Coding (vendor report, March 2025 launch)

| Benchmark | Gemini 2.5 Pro | Closest competitor at launch |
| --- | --- | --- |
| LiveCodeBench | **74.2%** | o3 high 72.0%, o4-mini high 75.8% |
| Aider Polyglot | **82.2%** | o3 high 79.6%, Claude Sonnet 4 61.3% |
| SWE-bench Verified (single attempt) | 59.6% | o3 high 69.1%, Claude Sonnet 4 72.7% |
| SWE-bench Verified (multiple attempts) | 67.2% | Claude Sonnet 4 80.2%, Claude Opus 4 79.4% |
| AIME 2025 (single attempt) | 88.0% | o3 high 88.9%, o4-mini high 92.7% |

The Aider Polyglot 82.2% was the headline at launch — Gemini 2.5 Pro led all the major closed competitors. SWE-bench Verified 59.6% single attempt was below Claude Sonnet 4 / Opus 4 at the time, which is the documented weak spot.

### Reasoning (vendor report)

| Benchmark | Gemini 2.5 Pro | Closest competitor at launch |
| --- | --- | --- |
| **GPQA Diamond** (single attempt) | **86.4%** | o3 high 83.3%, Claude Opus 4 79.6%, Grok 3 Beta 80.2% |
| Humanity's Last Exam (no tools) | **21.6%** | o3 high 20.3%, DeepSeek R1 14.0%, Grok 3 Beta — |
| SimpleQA | **54.0%** | o3 high 48.6%, Grok 3 Beta 43.6%, DeepSeek R1 27.8% |
| FACTS Grounding | **87.8%** | DeepSeek R1 82.4%, Claude Sonnet 4 79.1% |

Gemini 2.5 Pro led GPQA Diamond and HLE without tools at launch — the canonical thinking-model achievement. SimpleQA and FACTS Grounding leadership indicated factuality work, with grounding at 87.8% being the highest single-model score in the comparison table.

### Multimodal (vendor report, March 2025)

| Benchmark | Gemini 2.5 Pro | GPT-4.1 (vendor) |
| --- | --- | --- |
| MMMU | **82.0%** | 76.5% (o3 high), 74.4% (Sonnet 4) |
| Vibe-Eval | 67.2% | n/a |
| ZeroBench | 4.5% | n/a (very hard multimodal) |
| BetterChartQA | 72.4% | n/a |
| VideoMME (visual-only) | 84.3% | 72.0% |
| VideoMME (audio + visual) | 78.7% | 63.4% |
| VideoMME (audio + visual + subtitles) | **86.9%** | 79.6% |
| VideoMMMU | **83.6%** | 60.9% |
| 1H-VideoQA | **81.0%** | 56.8% |
| LVBench | **78.7%** | 63.4% |
| ActivityNet-QA | 66.7% | 60.4% |
| Perception Test | **78.4%** | 64.8% |
| FLEURS (WER ↓) | 6.66 | 8.17 (GPT-4o transcribe) |

The video axis is the operational Gemini 2.5 Pro strength. VideoMMMU 83.6%, VideoMME (full) 86.9%, and LVBench 78.7% were all state-of-the-art at launch and surpassed GPT-4.1 across every video benchmark in the comparison. The audio-translation BLEU on CoVoST2 (38.48 across 21 languages) led all GPT-4o variants.

### Long-context

| Benchmark | Gemini 2.5 Pro |
| --- | --- |
| LOFT (hard retrieval) ≤128K | **87.0%** (SOTA at launch) |
| LOFT (hard retrieval) 1M | **69.8%** (only model supporting 1M context in the comparison) |
| MRCR-V2 (8-needle) ≤128K | 58.0% (leads Sonnet 4 39.1% and Opus 4 16.1%) |
| MRCR-V2 (8-needle) 1M | 16.4% (only model in the comparison supporting 1M context) |

Gemini 2.5 Pro was the **only model in the comparison set supporting 1M+ tokens** at launch, with documented 1M recall quality (the 46-minute video recall example in the appendix). MRCR-V2 1M at 16.4% shows the cost of pushing to the full window.

### Gemini Deep Research on HLE

| Date | HLE score |
| --- | --- |
| Dec 2024 (Gemini 1.5 Pro) | 7.95% |
| 2025-Q1 (Gemini 2.5 Pro) | 21.6% |
| June 2025 (Deep Think, default compute) | **26.9%** |
| June 2025 (Deep Think, higher compute) | **32.4%** |

Gemini Deep Research (an agent built on 2.5 Pro) went from 7.95% on HLE in December 2024 to 32.4% with Deep Think at higher compute — a 4× improvement. This is the operational ceiling of 2.5 Pro when used as an agent reasoning engine.

### Independent verification (Vals AI, late 2025–2026)

| Benchmark | Score |
| --- | --- |
| LiveCodeBench (Vals) | **79.16%** (per vals.ai, $1.25/$10, 2m45s) |
| LiveCodeBench (Vals, per pricepertoken.com leaderboard) | 77.8% (the 06-05 preview) |

The Vals independent number is slightly higher than the vendor's 74.2% — the difference is harness methodology (the Vals harness is the canonical independent platform).

### Where it sits in the 2026 leaderboard ecosystem

As of late 2026, Gemini 2.5 Pro is **mid-pack on closed-frontier reasoning benchmarks** — its launch-cohort strengths (GPQA 86.4%, AIME 88.0%) are no longer SOTA. Gemini 3.1 Pro (Feb 2026), GPT-6 Astra, Kimi K3, Claude Opus 5, and Claude Fable 5 have all pushed past. The model's enduring value is in:

- **Long-context at 1M tokens** (still the practical ceiling for many production tasks)
- **Multimodal depth** (VideoMMMU 83.6%, VideoMME 86.9%, audio translation BLEU 38.48)
- **Cost efficiency at the 200K-and-under tier** ($1.25/$10 is competitive)

### Honest interpretation of the record

The benchmark record for Gemini 2.5 Pro is **strong but superseded**. The launch-cohort SOTA results (GPQA 86.4%, HLE no-tools 21.6%, Aider Polyglot 82.2%, VideoMME 86.9%) were real at the time and reflected the genuine architectural contribution of native thinking. By late 2026, every single one of those has been surpassed by successor Gemini 3.x models and the closed-frontier cohort. The model's position is now "the baseline for the thinking-model generation" rather than the frontier.

## Pricing & deployment

| Channel | ≤200K in | >200K in | Output ≤200K | Output >200K | Context |
| --- | --- | --- | --- | --- | --- |
| **Google AI Studio / Gemini API** | **$1.25** | **$2.50** | **$10.00** | **$15.00** | 1M / 64K out |
| Vertex AI | $1.25 | $2.50 | $10.00 | $15.00 | 1M / 64K out |
| OpenRouter `google/gemini-2.5-pro` | $1.25 | $2.50 | $10.00 | $15.00 | 1M / 64K out |
| Gemini Advanced (consumer) | bundled with subscription | — | — | — | — |

The **tiered pricing** ($1.25/$10 ≤200K vs $2.50/$15 >200K) is the cost-of-quality mechanism: prompts over 200K tokens pay 2× input and 1.5× output. For long-context workloads (200K-1M), Gemini 2.5 Pro's $2.50/$15 puts it roughly comparable to Claude Sonnet 5 ($3/$15) and below Opus 5 ($5/$25). The 1M context is the operational differentiator.

Free tier: 50 requests per day in Google AI Studio (per metacto.com 2026 snapshot).

## Where it fits — and where it does not

**Reasonable fit:**

- **Long-context workloads up to 1M tokens** — production document analysis, code-base Q&A over large repos, multi-document summarization, audio/video transcript understanding at hour-long scale. The 1M window is the largest stable tier for closed multimodal models in the comparison set.
- **Multimodal agentic tasks** — Gemini 2.5 Pro accepts text, image, audio, video, and PDF in a single forward pass with native 3-hour video understanding. VideoMMMU 83.6%, VideoMME 86.9% are the operational ceiling.
- **Audio understanding and translation** — FLEURS WER 6.66 across 53 languages and CoVoST2 BLEU 38.48 across 21 languages are the strongest audio results in the closed-frontier cohort.
- **Cost-sensitive Gemini routing** — at $1.25/$10 for ≤200K prompts, this is the cheapest Google DeepMind model that retains frontier multimodal capability. Gemini 2.5 Flash is cheaper ($0.30/$2.50) but a meaningful capability tier below.
- **Deep Research agent workloads** — Gemini Deep Research built on 2.5 Pro achieved 32.4% on HLE with Deep Think at higher compute, the SOTA agent-HLE result at the time.

**Poor fit:**

- **Hard reasoning ceilings in 2026** — GPQA 86.4% and AIME 88.0% are launch-cohort SOTA but have been surpassed by GPT-6 Astra, Kimi K3, Claude Opus 5, Claude Fable 5, and Muse Spark 1.3. For the deepest reasoning, route to Gemini 3.x Pro.
- **Closed-frontier coding** — SWE-bench Verified 59.6% single attempt is below Claude Sonnet 4 (72.7%), Opus 4 (72.5%), o3 high (69.1%), and o4-mini high (68.1%) at launch. The multiple-attempts 67.2% is mid-pack. For pure coding-agent workloads, Claude Opus 4.7/4.8 or GPT-6 Astra are the upgrade.
- **Cost efficiency at scale** — at $1.25/$10 (≤200K), Gemini 2.5 Pro is mid-tier on cost. Gemini 2.5 Flash is 4× cheaper; Kimi K3 is 2× cheaper; GPT-5.6 Luna, Grok 4.5, and DeepSeek V4.1 Flash are all in the cheaper band.
- **Reasoning mode bills at output rate** — thinking tokens count as output, so a hard problem with a long chain can hit $0.50+ in output cost. Budget accordingly.

## Triangulated scores

- **Tool use: 74/100.** SWE-bench Verified 59.6% single attempt / 67.2% multiple attempts is mid-pack. Deep Research agent HLE 32.4% (with Deep Think) is the agentic ceiling. The 1M context window with LOFT 87.0% (≤128K) and 69.8% (1M) is the long-context tool-use strength. JobBench, τ²-bench, and Vals' SWE-bench harness are not in the model card, so independent coverage is partial.
- **Reasoning: 82/100.** GPQA Diamond 86.4%, AIME 2025 88.0%, HLE no-tools 21.6%, Aider Polyglot 82.2% are the launch-cohort strengths. LiveCodeBench 74.2% (vendor) / 79.16% (Vals) is solid but mid-pack. The reasoning ceiling has been surpassed by the 3.x line and Kimi K3.
- **Context window: 95/100.** 1M input / 64K output is the largest closed-multimodal tier in the comparison set. The 1M extension (announced for later) was already operational at launch. LOFT 1M 69.8% is the only published 1M-context retrieval result in the closed-frontier cohort. MRCR-V2 1M 16.4% shows the cost of pushing to the full window.
- **Multimodal: 90/100.** VideoMMMU 83.6%, VideoMME (full) 86.9%, LVBench 78.7%, Perception Test 78.4%, ActivityNet-QA 66.7%, MMMU 82.0%, audio BLEU 38.48. Native multimodal at the 1M-window tier is the operational differentiator. Audio, video, and image in one forward pass.
- **Coding: 80/100.** Aider Polyglot 82.2% (launch SOTA), LiveCodeBench 74.2% (vendor) / 79.16% (Vals), SWE-bench Verified 59.6% / 67.2%. Strong coding at launch but no longer SOTA; closed-frontier cohort has pulled ahead.
- **Cost efficiency: 75/100.** $1.25/$10 (≤200K) is mid-tier on closed models. The 2× tier at >200K is structurally fair but noticeable. Compared to Gemini 2.5 Flash ($0.30/$2.50), it's 4× more expensive. Compared to Kimi K3 ($0.60/$2.50), 2× more expensive. The cost equation improves for long-context workloads where the 1M window is the alternative.
- **Overall: 84/100.** The 2025 thinking-model flagship — strong multimodal breadth at 1M context, frontier-at-launch GPQA / AIME / HLE / VideoMME, but mid-pack in 2026 on the closed-frontier reasoning axis. Succeeded by the Gemini 3.x line. Cost-competitive at ≤200K, expensive at >200K. The benchmark record is vendor-dominant (Google's own numbers), but the architectural contributions (native thinking, TPUv5p infrastructure, 1M multimodal context) are real.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17