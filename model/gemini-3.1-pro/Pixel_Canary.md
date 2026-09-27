# Gemini 3.1 Pro — findings by Pixel Canary

- Source: Google / Gemini 3.1 Pro (`gemini-3.1-pro`, third-party alias `google/gemini-3.1-pro`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro — Google's February 2026 flagship reasoning model, still sold on routers in September 2026. Not a variant of 3.1 Flash; it sits one generation behind the 3.8 line.
- **Short description:** Pro-tier multimodal reasoning model with dynamic thinking enabled by default, aimed at complex knowledge work and agents. Third-party routers still list it as `gemini-3.1-pro-preview`.
- **Provider / access:** Google Gemini API (`generateContent` / `streamGenerateContent`, OpenAI-compatible endpoint available) and Vertex AI; 25 provider offerings tracked on LLMBoard (`gemini-3.1-pro-preview` on OpenRouter, 302.AI, Opper, Tempr, Abacus, Kilo Gateway etc.). Chat/Responses: Gemini-native endpoint.
- **Release / knowledge:** released 2026-02-19; knowledge cutoff 2025-01-31 (LLMBoard specification block).
- **IDs:** `google/gemini-3.1-pro` (OpenCode Zen style), `gemini-3.1-pro-preview` (routers). No Free ID confirmed on Zen — treat as paid (`meta.noFreeId` semantics).
- **Context window:** 1,000,000 input tokens; 65,536 max output (LLMBoard spec lists "1M" context and 65.5K max output; Google's FAQ text says "1 million-token input context window and supports up to 64k output tokens" — both agree the input is 1M).
- **Modalities:** audio, image, video, text in; text out. Reasoning: yes (dynamic thinking by default). Tool calls: yes (BrowseComp, t2-bench and APEX-Agents all evaluated it with tools); JSON / structured output supported.
- **Pricing (as of 2026-09-27):** $2 / 1M input, $12 / 1M output on Google's API; lowest tracked third-party route $1 / $6 (Kilo Gateway). Cached-input rate not published in the sources consulted (no verified public figure). Paid only — free access is consumer-app level, not an API free tier.
- **Architecture:** proprietary, parameters undisclosed; not open weights.

### Raw benchmarks found

> Values from LLMBoard's model profile (2026-06-25 → 2026-09-26 evaluation dates); rank/participant fields are LLMBoard's own aggregation across vendors, Artificial Analysis and LMArena.

Agent / tool use:

- t2-bench: **99.30%** (**#1 of 23**, 100th pct — strongest tool-calling result in the profile)
- BrowseComp (deep-research browsing): **85.90%** (#11/67)
- APEX-Agents: **33.50%** (#5/10, 55th pct — the weak spot: long-horizon enterprise agent tasks)
- LM Arena Search: **1210.46** rating (#8/28); Search Factuality variant **1207.68** (#6/28)
- Terminal-Bench 2.1 / 4.0, GDPval-AA, τ²-Banking, Claw-Eval, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.30%** (#4/250) and Artificial Analysis re-run **94.14%** (#7/199)
- HLE (text, no tools, AA): **47.03%** (#10/200)
- ARC-AGI v2: **77.10%** (#3/19)
- LiveBench: **79.93%** (#4/38); LiveBench instruction split **79.10** (#3/41)
- MMMLU: **92.60%** (#2/51)
- AA Omniscience Accuracy: **54.85%** (#9/201) — AA-Omniscience hallucination rate itself not published for this ID
- CritPt / LCR / MLCR: no verified public score found
- LLMBoard composite: **75.8** with 80% coverage across 20 benchmark families

Coding:

- SWE-bench Verified: **80.60%** (#9/116)
- LiveCodeBench Pro: **2887 Elo** (#1/5)
- SciCode: **59.00%** (#2/24); AA SciCode subtasks **58.68%** (#8/89)
- SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID — no long-context retrieval reported beyond the 1M window itself.

Runtime: **90 tok/s** output, **0.60 s** catalog latency (Google, LLMBoard) — fast for a Pro-class thinker, which is why it still gets deployed as a cheap-reasoning route.

### Normalized scores (1–100)

- **Tool use: 85/100.** t2-bench 99.30% (#1/23) plus BrowseComp 85.90% is a first-rate tool caller; capped by APEX-Agents 33.50% (55th pct) showing long-horizon enterprise agent loops still leak, and no Terminal-Bench evidence.
- **Reasoning: 88/100.** GPQA 94.30%, HLE 47.03%, ARC-AGI v2 77.10% (#3) and LiveBench 79.93% are frontier-adjacent; capped by Omniscience accuracy of only 54.85% (knowledge/hallucination ceiling) and by being a Feb-2026 generation model.
- **Context window: 86/100.** 1M input tokens with 65,536 output; capped because no measured retrieval benchmark exists at that length for this ID.
- **Multimodal: 84/100.** Audio, image, video and text input plus tool use; capped at text-only output — no image, audio or video generation.
- **Coding: 85/100.** SWE-bench Verified 80.60% and LiveCodeBench Pro #1 (2887) with SciCode 59.00% is strong but no longer class-leading against the 2026 DeepSWE-era cohort.
- **Cost efficiency: 72/100.** $2 / $12 per 1M is premium pricing with a documented $1 / $6 router route; no API free tier and no published cache discount.
- **Overall Score: 85.6/100.** Half-up mean of (85 + 88 + 86 + 84 + 85) = 428 / 5 = 85.6, Cost excluded. Best fit: research/browsing agents and long-document analysis where 1M context and 90 tok/s matter more than raw frontier reasoning.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. its provider pricing table, Google AI for Developers model pages); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
