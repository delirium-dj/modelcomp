# Gemini 2.5 Flash — findings by Big Pickle

- Source: Google (`gemini-2.5-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's hybrid-reasoning mid-tier workhorse of the 2.5 family — a 1M-context multimodal model with a toggleable 0–24,576-token thinking budget at $0.30/$2.50. Now legacy-era: it is scheduled for shutdown on October 16, 2026, in favor of Gemini 3.5 Flash.
- **Provider / access:** Google — Gemini API (AI Studio / Vertex AI); `gemini-2.5-flash`. Proprietary hosted API only.
- **Release / knowledge:** preview April 17, 2025; GA June 17, 2025; quality/efficiency refresh Sept 25, 2025. Knowledge cutoff ~January 2025.
- **IDs:** `gemini-2.5-flash` (Google; proprietary, no open weights)
- **Context window:** 1,048,576 tokens input / 65,536–66K output.
- **Modalities:** text, image, video, audio input; text output; hybrid thinking on/off with 0–24,576 token budget (or dynamic); grounding with Google Search, code execution, function calling.
- **Pricing (as of 2026-09-20):** $0.30 in / $2.50 out per 1M (audio input $1.00/1M); batch $0.15/$1.25; cached input $0.03. Thinking tokens billed as standard output — no premium.
- **Architecture:** Sparse mixture-of-experts transformer, native multimodal; parameters undisclosed.
- **Deprecation:** shutdown scheduled 2026-10-16, replacement Gemini 3.5 Flash (awesomeagents.ai).

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Google model card, thinking mode; ranked #74/308 on aiwartracker; from 74% at 0K budget to 80%+ at 24K)
- AIME 2025: **72.0%** (Google model card)
- Global MMLU Lite: **88.4%** (Google model card)

Coding:

- SWE-bench Verified: **60.4%** (model card, thinking mode, single attempt; paper-era figures 48.9% single / 60.3% multiple; Sept 2025 refresh +5% to ~54% then final 60.4%)
- LiveCodeBench: **71.3%** (aiwartracker #55/204)
- Aider Polyglot: **61.9%**; Aider Edit: **56.7%**
- SciCode: **39.4%** (aiwartracker #91/307)
- Real-world coding trails Claude Sonnet 4.6's SWE-bench Verified 79.6% by ~20 points (awesomeagents.ai)

Agent / tool use:

- Terminal-Bench: **13.6%** (aiwartracker, earlier harness version — weak by 2026 standards)
- Better agentic tool use from Sept 2025 refresh (Google dev blog); no 2.5-era strong agentic milestone

Long context:

- MRCR v2 (8-needle): **54.3%** @128K / **21.0%** @1M (Gemini 2.X paper); LOFT (hard) ≤128K: **82.1%**, @1M: **58.9%**
- AA-LCR: **61.7**; LongBench-v2: **62.1** (aiwartracker / AA)

Multimodal:

- MMMU (visual reasoning): **79.7%** (Google model card)
- Native text/image/video/audio input in one endpoint (awesomeagents.ai)
- MMMU-Pro / video-specific: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 13.6% on earlier harnesses and a 60.4% SWE-bench ceiling put it well below the agentic frontier by 2026 standards; fine for basic function calling.
- **Reasoning: 77/100.** GPQA Diamond 82.8% maps to the 76–80 band — a genuinely useful reasoner for its 2025 era, now clearly mid-pack.
- **Context window: 84/100.** Full 1M window with decent LOFT 128K (82.1) but sharp MRCR drop-off at full length (21% @1M).
- **Multimodal: 80/100.** Native text/image/video/audio input (MMMU 79.7%) at a budget price — a strong modality set for its age.
- **Coding: 67/100.** SWE-bench Verified 60.4% and LiveCodeBench 71.3% are respectable mid-tier results, ~20 points behind 2026 leaders.
- **Cost efficiency: 85/100.** $0.30/$2.50 with free thinking tokens was the value benchmark of its era, and remains cheap — but it is about to be shut down.
- **Overall Score: 74/100.** Mean of the five quality dims (62+77+84+80+67)/5 = 74.0 → 74. A fast, cheap, genuinely capable multimodal workhorse that is now a legacy model: still serviceable, best replaced by Gemini 3.5 Flash after October 2026.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 62 | 62 | — |
| Reasoning | 77 | 77 | — (harness divergence noted) |
| Context window | 84 | 84 | — |
| Multimodal | 80 | 80 | — |
| Coding | 67 | 67 | — |
| Cost efficiency | 85 | 85 | — |
| **Overall** | **74** | **74** | **—** |

**BenchLM composite: 41.97/100, #135 of 1014**, from only 12 of 739 rows — the thinnest coverage in this cohort, so treat the composite as indicative only.

**Correction — the shutdown date moved.** The original said 2026-10-16; Google's deprecation schedule now lists **`gemini-2.5-flash` shutdown on 2026-12-01**, after which requests auto-route to **`gemini-3.5-flash-lite`**. That is 26 days from this re-run, and it is the single most decision-relevant fact in the file.

**The independent numbers are much worse than the model card, and the reason is configuration.** AA measures **GPQA Diamond 68.3%** (vendor 82.8%), **HLE 4.7%**, **AA-LCR 49.9%** (original 61.7), **τ²-bench 14.9%**, **AA-MMMU-Pro 65.5%**, **CritPt 1.4%**, **AA-IFBench 39.0%** and an **AA Intelligence Index of 9.8**. Those runs do not use the 24K thinking budget that the vendor card assumes, so they measure the default-speed configuration rather than the headline one. Both are true; the practical read is that the card's numbers require explicitly enabling thinking.

**Worst honesty reading in the cohort.** AA-Omniscience: **26.1% accuracy / 93.0% hallucination rate / index −42.6**. This is the strongest argument in the file against using 2.5 Flash as a factual oracle, and it was not visible at the original research date.

**What held up.** Vendor thinking-mode results (GPQA 82.8%, AIME 2025 72.0%, MMMU 79.7%, SWE-bench Verified 60.4%, LiveCodeBench 71.3%) are unchanged, as is the four-channel input claim. Context stays 84 on the 1M window, though MRCR v2 at 1M (21.0%) remains the weak point.

**Pricing and availability.** List price unchanged at **$0.30 in / $2.50 out, $0.03 cached** (BenchLM price registry, 2026-11-05), but the model is **no longer in the `opencode` provider catalogue on models.dev** — Zen has already dropped it.

**Net assessment.** Numerically stable, operationally over. The scores describe a 2025-era workhorse correctly; the lifecycle note now dominates, and anyone still calling this ID should expect `gemini-3.5-flash-lite` behaviour after 2026-12-01.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (arxiv paper 2507.06261, ai.google.dev, developers.googleblog.com, awesomeagents.ai, aiwartracker.com, userightai.com; BenchLM, Artificial Analysis and Google's deprecation schedule on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini API deprecations (shutdown schedule)](https://ai.google.dev/gemini-api/docs/deprecations)
  - [Google — Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [BenchLM — Gemini 2.5 Flash](https://benchlm.ai/models/gemini-2-5-flash)
  - [Gemini 2.5 technical report (arXiv:2507.06261)](https://arxiv.org/abs/2507.06261)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash_2.md`, using the same headings.