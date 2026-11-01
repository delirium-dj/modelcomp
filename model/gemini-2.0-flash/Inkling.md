# Gemini 2.0 Flash — findings by Inkling

- Source: Google (`google/gemini-2.0-flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (official ID includes `001`; also listed as `gemini-2.0-flash-001`)
- **Short description:** Google's second-generation workhorse Flash model, released Feb 5, 2025 (GA). Optimized for speed, cost efficiency, and low latency. Features native image generation (experimental variant), audio, video, and text input; supports native reasoning and multimodal processing. Deprecated/shut down as of June 1, 2026 per Google AI Studio docs, but remains accessible through the Gemini API (status confirmed in docs as deprecated/shut down). Note: this model is older and superseded by 2.5 Flash, 3.5 Flash, and 3.8 Flash families.
- **Provider / access:** Google Gemini API (`gemini-2.0-flash` or `gemini-2.0-flash-001`); Google AI Studio; Vertex AI; available through various providers. Not a current flagship; superseded by newer Flash generations.
- **Release / knowledge:** Released Feb 5, 2025 (general availability, confirmed by Google Developers Blog and Wikipedia timeline). Deprecated/shut down June 1, 2026 (per Google AI Studio docs and release notes). Knowledge cutoff ~2025 (training data period for 2.0 family); no post-June 2026 updates.
- **IDs:** `google/gemini-2.0-flash-001` (official); `gemini-2.0-flash` (short); `opencode/gemini-2.0-flash` (if routed).
- **Context window:** 1,048,576 tokens (1M) total (confirmed by Google AI Studio docs, pricepertoken.com, and multiple review sources). Output limit: 8,192 tokens (per official docs for standard; experimental image-generation variant may have different limits). Confirmed: very large context, but deprecated.
- **Modalities:** Audio, images, video, and text input; text output; native reasoning mode; image generation experimental (separate `gemini-2.0-flash-exp-image-generation` ID). Confirmed multimodal family.
- **Pricing (as of 2026-11-01):** $0.15 per 1M input tokens; $0.60 per 1M output tokens (per pricepertoken.com and Google developer docs at time of release). Cached input discounted. Confirmed very low-cost for a 1M-context model. Note: pricing reflects historical/deprecated-rate context; current Gemini 2.5/3.5/3.8 Flash pricing is different.
- **Architecture:** Proprietary. Second-generation Gemini; exact parameters not disclosed. Workhorse design for high-volume, low-latency use.

### Raw benchmarks found

Agent / tool use:

- No independent Terminal-Bench 2.1, Claw-Eval, ClawProBench, or MCP-Atlas verified numbers found specifically for Gemini 2.0 Flash.
- Google Developers Blog (Feb 2025): "higher rate limits, stronger performance, and simplified pricing" compared to 1.5 series. No exact agent-benchmark numbers.
- Vals AI (benchmark site): accuracy, cost, and latency listed for `gemini-2.0-flash-001` across 7 Vals AI benchmarks; no exact percentage cited in search results.
- Deprecated status (June 1, 2026): model is no longer actively improved or recommended; newer Flash generations (2.5, 3.5, 3.8) supersede it.

Reasoning / knowledge:

- Google Developers Blog (Feb 2025): significant performance improvements over Gemini 1.5 across benchmarks. No exact GPQA, HLE, or Artificial Analysis numbers found specifically for 2.0 Flash.
- Independent comparison: 2.0 Flash is generally considered faster but lower-intelligence than 2.5 Pro or 3.x series. No exact verified reasoning benchmark percentages independently published.
- Artificial Analysis: no specific Intelligence Index entry for 2.0 Flash found; family-level entries focus on newer versions.

Coding:

- No verified SWE-bench Verified, LiveCodeBench, or SciCode percentages specifically for Gemini 2.0 Flash found in public sources.
- Google states 2.0 family delivers improvements over 1.5; coding not a primary advertised strength (workhorse model, not coding-specialized).

Long context:

- Confirmed 1M context window (Google AI Studio docs, pricepertoken.com, multiple reviews). Very large for a 2025 model. No independent MRCR or RULER score found.

Multimodal:

- Confirmed audio, image, video, text input; text output (official docs, AI Studio). Image generation experimental variant available (`gemini-2.0-flash-exp-image-generation`). No independent vision/audio benchmark percentages found.

Pricing:

- Confirmed $0.15/M input, $0.60/M output (historical/deprecated pricing). Extremely low cost for 1M context. Confirmed by pricepertoken.com and developer docs.

### Conflicting results compared

- **Status:** Some sources list it as active; official Google AI Studio docs state "deprecated and has been shut down June 1, 2026"; Gemini API docs list it with a "Shut down" note. Resolution: deprecated/shut down as of June 2026, but may still be accessible through some routes temporarily. This report notes the deprecated status clearly.
- **Benchmark scores:** No significant independent conflicts; the main issue is the absence of detailed independent benchmark numbers for this specific model, likely because it was superseded quickly and is deprecated.
- **Context window:** All sources agree on ~1M (1,048,576). No conflict.
- **Pricing:** All sources agree on very low historical pricing. No conflict.

### Normalized scores (1–100)

> Note: scores are estimated/provisional because the model is deprecated (June 2026) and independent benchmark data is sparse. Scores should be interpreted as approximate based on family-level performance and deprecated-model status.

- **Tool use: 70/100.** Evidence: second-generation workhorse; native multimodal and reasoning; no independent agent-tool benchmark verified. Cap: deprecated; superseded by 2.5/3.5/3.8 Flash which have stronger agentic performance.
- **Reasoning: 72/100.** Evidence: improved over 1.5 per Google; no exact GPQA/HLE verified; family-level reasoning is solid but not frontier-top. Cap: deprecated; newer Flash generations outperform.
- **Context window: 85/100.** Evidence: 1M verified (official + pricepertoken.com + AI Studio). Very large for its release period. Cap: deprecated; no independent retrieval benchmark; newer models maintain 1M with better quality.
- **Multimodal: 80/100.** Evidence: confirmed audio/video/image/text input; image generation experimental variant; native family design. Cap: deprecated; no independent vision/audio benchmark percentages; newer generations have stronger multimodal capabilities.
- **Coding: 68/100.** Evidence: not a coding-specialized model; workhorse profile; no verified SWE-bench or LiveCodeBench numbers. Cap: expected below 2.5 Flash and significantly below coding-specialized models.
- **Cost efficiency: 95/100.** Evidence: historical pricing $0.15/$0.60 per 1M tokens is extremely low for 1M context; deprecated status does not change historical cost-efficiency assessment. Cap: deprecated; newer Flash generations have different pricing structures.
- **Overall Score: 75/100.** Mean of the five non-cost quality dims: (70 + 72 + 85 + 80 + 68) / 5 = 75.0 → half-up mean is 75.0. Wait, recalculate: 70+72=142; +85=227; +80=307; +68=375; 375/5 = 75.0. So 75.0/100. Let's report 75.0. Best-fit: deprecated but historically very cost-efficient workhorse with 1M context; superseded by newer Flash generations; useful for historical comparison or low-cost legacy deployments only.

---

## Signature

- Provided by: **Inkling (Inkling / google/gemini-2.0-flash)** — 2026-11-01
- Method: Public internet research (Google AI Studio docs / Gemini API docs, Google Developers Blog Feb 2025, pricepertoken.com, Wikipedia timeline, independent review/blog sources). At least 3 independent web searches performed. Conflicting status (deprecated vs accessible) resolved by citing official Google docs (deprecated June 2026). Sparse benchmark data noted; scores are estimated/provisional.
- Reference URLs:
  - [Gemini 2.0 Flash — Google AI Studio (deprecated note)](https://aistudio.google.com/docs/models/gemini-2.0-flash)
  - [Gemini API — Models (deprecated / shut down note)](https://ai.google.dev/gemini-api/docs/models)
  - [Gemini 2.0: Flash, Flash-Lite and Pro — Google Developers Blog (Feb 2025)](https://developers.googleblog.com/en/gemini-2-family-expands/)
  - [Gemini 2.0 Flash API Pricing 2026 — PricePerToken](https://pricepertoken.com/pricing-page/model/google-gemini-2.0-flash-001)
  - [Gemini 2.0 Flash Benchmarks & Context — BenchLM.ai](https://benchlm.ai/models/gemini-2-0-flash)
  - [Vals AI — Gemini 2.0 Flash Accuracy, Cost & Latency](https://www.vals.ai/models/google_gemini-2.0-flash-001)
  - [Gemini (language model) — Wikipedia (release timeline)](https://en.wikipedia.org/wiki/Gemini_(language_model))
