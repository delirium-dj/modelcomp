# Gemini 2.5 — findings by Space Bunny

- Source: Google DeepMind (`gemini-2.5-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `gemini-2.5-pro`)
- **Short description:** Google DeepMind's 2.5-family flagship thinking model — built for complex reasoning over code, math, STEM and large datasets/codebases/documents. Now a **legacy access-limited** model: Google restricts new access to users who have actively used the 2.5 models, and points new projects at 3.5 Flash-Lite or 3.8 Flash. Not deprecated, still served, but effectively a legacy SKU rather than a current flagship.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`), Google AI Studio, Gemini app (Advanced tier), Vertex AI, and OpenRouter as `google/gemini-2.5-pro`. OpenAI-compatible endpoint; supports both Chat Completions and the Gemini-native generateContent path.
- **Release / knowledge:** 2.5 Pro Experimental announced 2025-03-25; GA **2025-06-05** (GA date per Artificial Analysis; LLMLearner lists the family debut as 2025-05-01). **Knowledge cutoff: January 2025** (Google model docs + AA).
- **IDs:** `gemini-2.5-pro` (Google). OpenRouter `google/gemini-2.5-pro`. No Zen Free ID — paid.
- **Context window:** **1,048,576 input tokens (1M)**, **65,536 max output** (Google model card). 2M context was announced as "coming soon" at launch and has not shipped.
- **Modalities:** text, image, audio, video, and **PDF** in; text out. Reasoning: supported (thinking model). Function calling, structured outputs, code execution, file search, search grounding, URL context, caching, batch/Flex/Priority inference all supported. Audio **generation** not supported (input only).
- **Pricing (as of 2026-10-04):** Google API **$1.25 in / $10.00 out per 1M**; cache discount 90% ($0.23 blended cached rate per AA; LLMLearner lists cached input $0.125). AA blended 7:2:1 cache-hit ratio → $1.34/1M. Paid, not a free tier. Zen routes it via OpenRouter at comparable pricing.
- **Architecture:** proprietary — Google has not disclosed parameter count or architecture.

### Raw benchmarks found

> Mixed provenance: launch-blog figures are **vendor-reported by Google (Mar 2025)**; AA/LLMLearner figures are third-party aggregator runs. AA now benchmarks it only on the default 10k-input-token workload and flags the model **deprecated**, so most AA rows are frozen history.

Agent / tool use:

- Terminal-Bench 2.1 / Tau2-Bench: no verified public score found for this model
- GDPval-AA: no verified public score found
- τ³-Banking (service workflows): **13.7%** (#66/107, thinking high, with tools) — LLMLearner
- AutomationBench-AA / AA-Briefcase v1.1: tracked inside the AA Intelligence Index v4.3.2; standalone values not published

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **16** (#172/224) — lower end of its price tier (tier median 26)
- Humanity's Last Exam: **18.8%** without tool use — **state-of-the-art at launch** (Google blog, Mar 2025, no test-time voting)
- GPQA Diamond / AIME 2025: Google states 2.5 Pro "leads in math and science benchmarks like GPQA and AIME 2025" without test-time techniques; **exact values not published in the blog text**
- FrontierMath v2: **24.6** (#65/75); FrontierMath Tier 4 v2: **0.0** (#61/63) — LLMLearner
- CritPt / SciCode / AA-Omniscience / AA-LCR v1.1: tracked inside the AA Intelligence Index; standalone values not published here
- Speed: **126.2 output tokens/s** (#35/224), TTFT 18.21s — AA

Coding:

- SWE-bench Verified: **63.8%** with a custom agent setup — Google blog, Mar 2025 (vendor-reported, non-standard harness)
- AA-SciCode: tracked in the Intelligence Index only; no standalone verified score found
- Vibe Code Bench / DeepSWE / LiveCodeBench: no verified public score found for this model

Long context:
### Normalized scores (1–100)

- **Tool use: 62/100.** Native function calling, code execution, file search, grounding and computer-use tooling are all first-class Google features, and the 1M window suits agentic context — but the only verified agentic *result* is τ³-Banking **13.7% (#66/107)**, which is weak, and Google published no Terminal-Bench, Tau2 or GDPval-AA score for it. Scored on capability plus that single weak measured result.
- **Reasoning: 66/100.** HLE 18.8% without tools was genuinely SOTA in March 2025 and is the strongest verified number here, but on today's field an AA Intelligence Index of **16 (#172/224)** and FrontierMath v2 **24.6 (#65/75)** place it far behind current-generation peers. GPQA/AIME values were claimed-leading but never published, so nothing can be credited for them. The January 2025 cutoff is now ~21 months stale.
- **Context window: 94/100.** A true native **1,048,576-token** input window with 65,536 max output is elite and needs no extrapolation trick — Google even published MRCR evaluations against it. Held below the top band because no verifiable retrieval-at-length number survives in the sources retrieved, and the announced 2M never shipped.
- **Multimodal: 88/100.** Unusually broad native input coverage — text, image, **audio**, video and PDF in one model, which is a wider I/O surface than most same-generation peers, and Google's own Gemini line has always led here. Capped slightly because no current verified MMMU/vision benchmark number for this exact SKU was found.
- **Coding: 70/100.** SWE-bench Verified **63.8%** was a large jump over 2.0 at launch and remains a respectable figure, but it is vendor-measured on a custom agent harness and is now well behind frontier coding agents; no LiveCodeBench, DeepSWE or SciCode standalone score was verified.
- **Cost efficiency: 58/100.** $1.25 in / $10.00 out with a 90% cache discount is only moderately priced (AA: #9/224 on cost per Index task, tier median $2.00 in) — respectable for a 1M-context flagship, but $10/M output is expensive next to current-generation models and it is a paid, access-limited SKU with no free tier.
- **Overall Score: 76/100.** Best-fit as a still-capable 1M-context multimodal reasoning model for long-document and codebase work inside an existing Google Cloud contract — not a current pick for new builds, where Google's own guidance points to 3.5 Flash-Lite / 3.8 Flash. Mean of the five non-cost dims: (62 + 66 + 94 + 88 + 70) / 5 = 76.0 → 76.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-04
- Method: public internet research (Google Gemini API model docs, Google DeepMind launch blog, Artificial Analysis model page, LLMLearner, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-reported and aggregator figures are distinguished throughout.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Pro_2.md`, using the same headings.

- MRCR (Multi Round Coreference Resolution): evaluated and published by Google as part of the launch post (updated 2025-03-26); **exact value not present in the blog text retrieved**
- RULER / GraphWalks: no verified public score found. Native 1M window, no published retrieval-at-length number.