# Gemini 3 Pro — findings by Pixel Canary

- Source: Google / Gemini 3 Pro (`google/gemini-3-pro`, routers also list `gemini-3-pro-preview`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro — the first model of the Gemini 3 series, with dynamic thinking enabled by default, for complex tasks needing broad world knowledge and cross-modal reasoning.
- **Short description:** A late-2025 frontier release that still owns several modality-specific leaderboards (AIME 2025 100.00%, VideoMMMU 87.60%) but is now ~10 months old, has a Jan-2025 knowledge cutoff, and is being superseded inside its own family by Gemini 3.1 Pro and the 3.x Flash line.
- **Provider / access:** Google (Vertex / AI Studio, `gemini-3-pro`); 8 tracked offerings incl. OpenCode Zen (`gemini-3-pro`, $2 / $12), Merge Gateway, Helicone, 302.AI (`google/gemini-3-pro-preview` / `gemini-3-pro-preview`, $2 / $12) and Jiekou.AI ($1.80 / $10.80). QiHang is the cheapest route at $0.57 / $3.43.
- **Release / knowledge:** released 2025-11-18; knowledge cutoff **2025-01-31** (LLMBoard specification block) — roughly 20 months stale as of today, the oldest cutoff in the compared set.
- **IDs:** `google/gemini-3-pro`, `gemini-3-pro`, `gemini-3-pro-preview`. No Free ID — paid only.
- **Context window:** 1M input / 65.5K max output tokens (runtime row and specification block both say 65.5K; the page prose says "up to 64k output").
- **Modalities:** audio, image, video and text in; text out. Dynamic/adaptive thinking on by default, tool use and vision supported; no image, audio or video generation.
- **Pricing (as of 2026-09-27):** **no official standard PAYG price is tracked** ("Official price unavailable"), so only third-party offers exist: $2 / $12 typical (OpenCode Zen, Merge Gateway, Helicone, 302.AI), $1.80 / $10.80 (Jiekou.AI), floor $0.57 / $3.43 (QiHang). Cache-read and batch rates not published (no verified public figure). The local `meta.json` simply records "Paid-tier pricing".
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-08-24 → 2026-09-27): 30 of 39 rows published, coverage **80% / 21 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **66.4**.

Agent / tool use:

- t2-bench (multi-turn tool use): **85.40%** (#7/23)
- ScreenSpot Pro (GUI/computer-use grounding): **72.70%** (#8/26)
- Vending-Bench 2 (long-horizon autonomous operation): **5,478.16 USD** (#3/4)
- LM Arena Search: **1207.35** (#9/28); Search Style Control **1201.38** (#9/28)
- GDPval-AA, OSWorld 2.0, Terminal-Bench, DeepSWE, MCP Atlas: no verified public score found

Reasoning / knowledge:

- AIME 2025: **100.00%** (#1/122) and AA AIME 2025 **95.67%** (#6/96) — perfect on the classic contest set, mid-field once re-measured on a 96-model pool
- Global PIQA: **93.40%** (#1/15); MMMLU **91.80%** (#3/51)
- SimpleQA: **72.10%** (#6/47); FACTS Grounding **70.50%** (#8/13); AA Omniscience Accuracy **55.75%** (#7/201) — factual reliability is only mid-field
- LM Arena Text Factuality: **1481.16** (#9/128)
- MathArena Apex: **23.40%** (#10/11) — collapses on the hardest contemporary math set

Coding:

- LiveCodeBench Pro: **2439.00 points** (#2/5)
- SWE-bench Verified / SWE-Bench Pro / Terminal-Bench / SciCode: no verified public score found for this ID

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score published for this ID; only the 1M input / 65.5K output figures are verified.

Multimodal detail: VideoMMMU **87.60%** (#1/28), MMMU-Pro **81.00%** (#10/72), Global PIQA **93.40%** (#1/15).

Runtime: **90.00 tok/s** with **0.60 s** catalog latency on Google — the fastest measured endpoint in the entire comparison.

### Normalized scores (1-100)

- **Tool use: 78/100.** t2-bench 85.40% (#7/23) and ScreenSpot Pro 72.70% (#8/26) show it still calls tools and grounds GUI actions competently, and Vending-Bench 2 at 5,478.16 USD (#3/4) survives long horizons - but every rank is mid-field against the 2026 agent leaders, and GDPval-AA / OSWorld / Terminal-Bench are unpublished for this ID.
- **Reasoning: 78/100.** AIME 2025 100.00% (#1/122) and MMMLU 91.80% (#3/51) are superb on saturated sets, yet MathArena Apex 23.40% (#10/11), SimpleQA 72.10% (#6/47) and FACTS Grounding 70.50% (#8/13) expose the age problem: a Jan-2025 cutoff means verifiable current-world knowledge is its weakest link.
- **Context window: 84/100.** 1M input is still top-tier, but the 65.5K output ceiling is half the current frontier (128K-1M), and no MRCR/GraphWalks retrieval number exists for this ID.
- **Multimodal: 84/100.** Audio, image, video and text input with VideoMMMU 87.60% (#1/28) and Global PIQA 93.40% (#1/15) at the top of their fields; MMMU-Pro 81.00% is only #10/72, and output is text only.
- **Coding: 74/100.** LiveCodeBench Pro 2439.00 points (#2/5) is the only coding datapoint with real depth of field - no SWE-bench Verified/Pro, Terminal-Bench or SciCode score is published for this ID, so repo-scale ability is unverified.
- **Cost efficiency: 82/100.** No official price is tracked at all; third-party routes run $2 / $12 with a $0.57 / $3.43 floor (QiHang), and 90 tok/s at 0.60 s latency makes it the cheapest per wall-clock second in the comparison.
- **Overall Score: 79.6/100.** Half-up mean of (78 + 78 + 84 + 84 + 74) = 398 / 5 = 79.6, Cost excluded. Divergence note: the independent LLMBoard composite is 66.4, because that composite is frontier-relative and penalises a Nov-2025 release heavily; the score above measures verified absolute capability, so both numbers are defensible - read this one as "still a strong general model", theirs as "no longer competitive at the frontier". Best fit: cheap, very fast multimodal (video/audio) understanding and math-contest-style reasoning, not agentic coding.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
