# Gemini 3.8 Flash — findings by Pixel Canary

- Source: Google / Gemini 3.8 Flash (`gemini-3.8-flash`, third-party alias `google/gemini-3.8-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (third-party listings append `(Free)` where it is served on a zero-cost router tier; Google's own API is paid).
- **Short description:** Google's most capable Flash-tier Gemini — a fast, multimodal reasoning workhorse aimed at long-horizon software engineering and autonomous agent loops at workhorse pricing. Third Flash release in six weeks; sibling (not alias) of the security-tuned Gemini 3.8 Flash Cyber.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, `generateContent` / `streamGenerateContent`, plus an OpenAI-compatible endpoint), Vertex AI, Google AI Studio, Gemini Enterprise, AI Pro/Ultra plans; Artificial Analysis lists 4 API providers; OpenCode Zen serves `google/gemini-3.8-flash` with a free tier.
- **Release / knowledge:** launched 2026-09-02; Google model page last updated 2026-09-02 UTC. Knowledge cutoff not published (`no verified public score found`).
- **IDs:** `google/gemini-3.8-flash` (Zen), `gemini-3.8-flash` (Gemini API / Vertex). No Free ID on Google's own API — the zero-cost path is AI Studio / Zen rate-limited tier.
- **Context window:** 1,048,576 input / 65,536 max output tokens (Google AI for Developers model page; corroborated by Artificial Analysis).
- **Modalities:** text, image, video, audio, PDF in; text out. Reasoning yes (thinking low / medium / high; `minimal` errors). Supported: function calling, structured outputs, code execution, URL context, file search, Google Search / Maps grounding, computer use (Preview), caching, Batch / Flex / Priority inference. **Not** supported: image generation, audio generation, Live API.
- **Pricing (as of 2026-09-27):** introductory $0.75 / 1M input, $3.75 / 1M output through 2026-12-31, then $1.50 / $7.50 from 2027-01-01; 90% cache discount (cached input ≈ $0.075/1M, cache-write ≈ $0.15/1M); blended $0.58/1M and $1.24 per Intelligence-Index task (#52/211, Artificial Analysis) — but measured spend ≈ 40% above 3.7 Flash from verbosity. Free AI Studio / Zen tier available (free-tier traffic may be used for training under Google's free terms).
- **Architecture:** proprietary, parameter count undisclosed.

### Raw benchmarks found

> Google's launch table is a vendor document (Gemini scores self-computed, competitor scores self-reported); Artificial Analysis is independent.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google evaluation report via Emergent — best in its own table, ahead of Claude Opus 5 and GPT-5.6 Sol)
- Terminal-Bench 4.0: trails Claude Opus 5 on Google's table; exact Gemini value unpublished (no verified public score found)
- OSWorld-2.0 (computer use): **59.0%** (Google report; 3.7 Flash 50.6%, still behind Opus 5)
- Vals Finance Agent v2: **61.4%** (run by Vals.AI — independent; leads Opus 5)
- GDPval-AA: **1545 Elo** (allthemodels.ai aggregate of llm-stats / Artificial Analysis)
- Harvey Legal Agents, Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2 (high thinking): **41 — rank #40 / 211**, class median 26 (artificialanalysis.ai, independent)
- HLE-Verified: **54.9%** (Google launch figure)
- GPQA Diamond / CritPt / LCR / MLCR / AA-Omniscience hallucination: no verified public score found for this ID (v4.3.2 folds CritPt, AA-LCR and Omniscience into the composite)
- Automated safety vs Gemini 3 Flash (DeepMind model card): safety **+0.0pp**, tone **+0.2pp**, unjustified refusals **−1.1pp**; Frontier Safety Framework: no new Tracked/Critical Capability Levels vs 3.7 Flash

Coding:

- DeepSWE v1.1: **73.7%** (Google report; 3.7 Flash 65.3%, Claude Opus 5 74.0%, GPT-5.6 Sol 72.7%)
- Multimodal-document proxies: CharXiv-R **0.86**, LVBench **0.87** (allthemodels.ai)
- CWE-Bench patching (sibling 3.8 Flash Cyber): **47.2% pass@1** vs a leading frontier model at 47.8% (Google blog — bounds the 3.8 base's patching ceiling)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for this ID

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval benchmark published for this ID; the 1,048,576-token window plus 90% cache discount are the only verified long-context facts.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency is excluded.

- **Tool use: 88/100.** Terminal-Bench 2.1 89.4%, GDPval-AA 1545 Elo, OSWorld-2.0 59.0%, Vals Finance Agent v2 61.4% and a complete native tool stack (function calling, code execution, file search, grounding, structured outputs, computer use) put it just below the frontier agents; capped by Terminal-Bench 4.0 / OSWorld trailing Claude Opus 5 and computer use still being Preview-grade.
- **Reasoning: 86/100.** Intelligence Index 41 vs class median 26 (#40/211) plus HLE-Verified 54.9% is top-quartile reasoning; capped by the index sitting well below the current frontier and by heavy verbosity (170M index output tokens vs 88M median) that drives TTFT to 23.5s.
- **Context window: 90/100.** Full 1,048,576-token input window with a 90% cached-input discount and 65,536-token output; capped because no measured MRCR-class retrieval result exists for this ID and output is 16× smaller than input.
- **Multimodal: 85/100.** Text + image + video + audio + PDF input with strong document/video readouts (CharXiv-R 0.86, LVBench 0.87); capped at text-only output — no image generation, no audio generation, no Live API.
- **Coding: 89/100.** DeepSWE v1.1 73.7% is within 0.3pp of Claude Opus 5 and above GPT-5.6 Sol at a fraction of the price, with Terminal-Bench 2.1 leading its own table; capped by missing SWE-bench Verified / LiveCodeBench evidence.
- **Cost efficiency: 88/100.** $0.75 / $3.75 per 1M with 90% cache discount, $1.24 per intelligence-index task (#52/211) and a real free AI Studio / Zen tier; capped because introductory pricing ends 2026-12-31 (→ $1.50 / $7.50) and measured spend runs ~40% above 3.7 Flash from verbosity.
- **Overall Score: 87.6/100.** Half-up mean of (88 + 86 + 90 + 85 + 89) = 438 / 5 = 87.6, Cost excluded. Best fit: high-volume agentic coding and finance/document agent pipelines that need near-frontier output at workhorse pricing.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (Google AI for Developers model page, Google DeepMind model card, Google launch blog post, Artificial Analysis model page, Emergent and AllTheModels write-ups); no peer `model/` findings files were read — only the single `- **Overall Score:` line of `average.md` was used to order the queue. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


