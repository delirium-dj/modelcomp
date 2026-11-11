# Gemini 3.1 Pro — findings by Qwen 4 Max

- Source: Google/gemini-3.1-pro
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (preview)
- **Short description:** Google DeepMind's mid-cycle Pro-tier upgrade (Feb 2026) applying Gemini 3 Deep Think breakthroughs to the core model: 2x+ abstract-reasoning jump, SOTA on 13 of 16 published benchmarks at launch, positioned as frontier reasoning at mid-tier price. Still labelled preview; the DeepMind model page (checked Nov 2026) lists "3.5 Pro coming soon" as its successor.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.1-pro-preview`), Vertex AI, Gemini Enterprise, Gemini app + NotebookLM (Pro/Ultra plans), Gemini CLI, Antigravity, Android Studio; GitHub Copilot public preview, Perplexity Pro, OpenRouter `google/gemini-3.1-pro-preview`. Separate `gemini-3.1-pro-preview-customtools` endpoint optimized for bash/custom-tool agent workflows (quality may fluctuate elsewhere).
- **Release / knowledge:** Released 2026-02-19 (preview; GA "soon" per launch blog). Knowledge cutoff not stated in the sources read.
- **IDs:** `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools`. No free-tier API ID documented (AI Studio free tier applies platform-wide, not a distinct model ID).
- **Context window:** 1,048,576 input tokens; 65,536 max output (AI Studio model docs). Pricing tier boundary at 200K: above it rates double.
- **Modalities:** Text, image, video, audio and PDF in; text out. Thinking: yes. Tools: function calling, code execution, context caching, file search, Google Search grounding, Maps grounding, URL context, structured outputs. No image generation, no audio generation, no Live API. Batch, Flex and Priority inference supported.
- **Pricing (as of 2026-11-11):** $2.00 in / $12.00 out per 1M (≤200K context); >200K context $4.00 / $18.00; batch input $1.00; context caching $0.20 per 1M (~90% cache discount per Artificial Analysis; blended 7:2:1 rate $1.74). AA-measured 110 tok/s output, 14.29 s time-to-first-answer-token.
- **Architecture:** Proprietary; parameters undisclosed. Reasoning model built on Gemini 3 Deep Think research (Deep Think itself scored 84.6% ARC-AGI-2). RE-Bench human-normalized 1.27 in Deep Think mode (vs 3 Pro 1.04). Frontier Safety Framework: below critical capability levels, but cyber competence reached the "alert threshold"; model card reports near-100% success on novel situational-awareness challenges; improved text safety/tone vs 3 Pro with low unjustified refusals.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **69.2%** — led at launch (Google eval table via LLM Rumors; vs Opus 4.6 59.5%, GPT-5.2 60.6%)
- BrowseComp: **85.9%** (vs Gemini 3 Pro 59.2%, Opus 4.6 84.0%, GPT-5.2 65.8%)
- Terminal-Bench 2.0: **68.5%** — launch SOTA (vs Opus 4.6 65.4%, GPT-5.2 54.0%; GPT-5.3-Codex later 77.3% per MetricNexus)
- τ2-bench Telecom: **99.3%** (tied Opus 4.6); τ2-bench Retail: **90.8%** (vs Opus 4.6 91.9%)
- APEX-Agents: **33.5%** (vs Opus 4.6 29.8%, GPT-5.2 23.0%)
- GDPval-AA: **1,317 Elo** — well behind Sonnet 4.6's 1,633 (LLM Rumors)
- OSWorld: not published by Google for this model (Opus 4.6 72.7% cited by MetricNexus as an omitted comparison)

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** verified — more than double Gemini 3 Pro's 31.1% (Google launch blog; vs Opus 4.6 68.8%, GPT-5.2 52.9%)
- GPQA Diamond: **94.3%** — led all models at launch (vs Opus 4.6 91.3%, GPT-5.2 92.4%)
- Humanity's Last Exam: **44.4%** no tools (vs Opus 4.6 40.0%, GPT-5.2 34.5%); **51.4%** with tools (trails Opus 4.6 53.1%)
- MMMLU: **92.6%** (vs Opus 4.6 91.1%, GPT-5.2 89.6%)
- AA Intelligence Index: **57** vs Opus 4.6 53 (February 2026 snapshot via MetricNexus; index version unstated — not comparable to later v4.1.1/v5.x figures); LMArena ~1500 Elo, tied with Opus 4.6 (1504)

Coding:

- SWE-bench Verified: **80.6%** single attempt (Google model card; razor-thin trail of Opus 4.6 80.8%; GPT-5.2 80.0%)
- LiveCodeBench Pro: **2,887 Elo** — highest recorded at launch (vs GPT-5.2 2,393)
- SWE-bench Pro: **54.2%** (trails GPT-5.3-Codex 56.8%)
- Terminal-Bench 2.0: 68.5% (see agent section)
- Real-world caveat: Hacker News launch thread (963 points) praises raw code/reasoning but reports unreliable tool calling, multi-step loops and mid-session context loss — "superb at incredibly hard stuff, falls apart on some of the most basic things"

Long context:

- MRCR v2 (8-needle) at 128K: **84.9%** average (DeepMind model page; ties Opus 4.6)
- MRCR v2 at 1M: **26.3%** — identical to Gemini 3 Pro and far behind Opus 4.6's 76% (LLM Rumors); the advertised 1M window does not retrieve reliably at full length
- Full AA benchmark suite run cost ~$892 vs $1,800+ for Opus 4.6 (MetricNexus citing AA)

### Normalized scores (1–100)

- **Tool use: 88/100.** Launch-leading MCP Atlas (69.2%), BrowseComp (85.9%), τ2 Telecom (99.3%) and Terminal-Bench 2.0 (68.5%) plus the customtools endpoint; capped by GDPval-AA 1,317 (far behind Claude), no published OSWorld, and widespread developer reports of tool-calling failures and multi-step loops.
- **Reasoning: 92/100.** ARC-AGI-2 77.1% (2.5x predecessor), GPQA Diamond 94.3% and no-tools HLE 44.4% all led at launch; MMMLU 92.6%; capped by HLE-with-tools trailing Opus 4.6 and later flagships (Opus 5.5, Astra) superseding these numbers on newer harnesses.
- **Context window: 85/100.** 1M input window with strong 128K retrieval (MRCR 84.9%); heavily capped by 26.3% MRCR at 1M (marketing window, unreliable retrieval), 65K output ceiling, and doubled rates above 200K.
- **Multimodal: 86/100.** Native text/image/video/audio/PDF input with MMMU-Pro 80.5%; capped by text-only output, no image/audio generation and no Live API.
- **Coding: 88/100.** SWE-bench Verified 80.6% (near-parity with Opus 4.6), record 2,887 LiveCodeBench Pro Elo and launch-SOTA Terminal-Bench 2.0; capped by SWE-bench Pro 54.2% behind GPT-5.3-Codex and the reasoning-vs-execution gap developers report in agentic coding.
- **Cost efficiency: 82/100.** $2/$12 undercuts every Western frontier rival at launch (60%+ below Opus 4.6) with $1 batch input and $0.20 caching; capped by $12 output (above GPT-5.2's $10) and the >200K-context $4/$18 tier.
- **Overall Score: 87.8/100.** Mean of the five quality dims (88+92+85+86+88)/5 = 87.8. Best-fit: reasoning-heavy analysis, scientific work, MCP agent pipelines and cost-sensitive high-volume inference — not long-horizon autonomous coding or full-1M retrieval workloads.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Google launch blog + AI Studio model docs + DeepMind model page, corroborated by Artificial Analysis, llm-stats, LLM Rumors and MetricNexus benchmark tables); scores are normalized 1–100 interpretations, not official vendor scores. AA index figure carries an explicit snapshot label (Feb 2026, version unstated); vendor-table comparisons are against Feb-2026 rivals (Opus 4.6, GPT-5.2), not later flagships.
- Reference URLs:
  - [Gemini 3.1 Pro: A smarter model for your most complex tasks — Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Gemini 3.1 Pro preview — Google AI Studio docs](https://aistudio.google.com/docs/models/gemini-3.1-pro-preview)
  - [Gemini 3.1 Pro — Google DeepMind](https://deepmind.google/models/gemini/pro/)
  - [Gemini 3.1 Pro Preview — Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Gemini 3.1 Pro: Pricing, Context Window, Benchmarks — llm-stats](https://llm-stats.com/blog/research/gemini-3.1-pro-launch)
  - [Gemini 3.1 Pro Doubled Its Reasoning Score in 3 Months — LLM Rumors](https://www.llmrumors.com/news/gemini-3-1-pro-google-reclaims-benchmark-crown)
  - [Gemini 3.1 Pro: Benchmarks, Pricing, and Real-World Verdict — MetricNexus](https://metricnexus.ai/blog/gemini-3-1-pro-benchmarks-pricing-review)
  - [Gemini 3.1 Pro Preview — OpenRouter](https://openrouter.ai/google/gemini-3.1-pro-preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.