# Gemini 3 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-3-pro-preview`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview; Deep Think mode available)
- **Short description:** Google DeepMind's November 2025 frontier flagship — the first Gemini 3 model, leading 13 of 16 widely tracked benchmarks at launch with state-of-the-art reasoning, multimodal and video understanding; best for complex tasks requiring broad world knowledge and advanced reasoning across modalities. Superseded within the family by 3.5/3.8 models but still the Google Pro tier.
- **Provider / access:** Gemini API (`gemini-3-pro-preview`) via Google AI Studio, Vertex AI, Gemini Enterprise (Chat Completions-style Gemini API); Deep Think mode for the hardest reasoning. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-11-18; knowledge cutoff January 2025 (per Gemini 3 Flash launch context; not independently re-verified for 3 Pro).
- **IDs:** `gemini-3-pro-preview` (Google Gemini API / Vertex AI). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens; 64K output (verified via vellum.ai and llm-stats).
- **Modalities:** text, image, audio, video and PDF input; text output; reasoning yes (Deep Think mode); tool calls (code execution, search-as-tool); JSON mode.
- **Pricing (as of 2026-09-24):** $2.00 / $12.00 per 1M in/out up to 200K input; $4.00 / $18.00 above 200K; cached input $0.20 per 1M plus storage (verified via the Kingy AI frontier price table). Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench Telecom: **98.0%** (airank.dev)
- Vending-Bench 2: **#1 leaderboard, mean net worth $5,478.16** (272% higher than GPT-5.1; vellum.ai) — long-horizon planning over a simulated year
- ScreenSpot-Pro: high score (vellum.ai; exact value in image, not machine-readable)
- Terminal-Bench, GDPval-AA, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (93.8% with Deep Think; vellum.ai — ~4-point lead over GPT-5.1's 88.1%)
- HLE: **37.5%** (40%+ with Deep Think; vellum.ai)
- ARC-AGI-2: **31.1%** (45.1% with Deep Think at launch; a later February 2026 verified Deep Think result of 84.6% per aiwiki.ai)
- AIME 2025: **100%** with code execution / **95.0%** without tools (vellum.ai)
- MathArena Apex: only model that looks somewhat capable; >20x jump over prior models (vellum.ai)
- MMMLU: **91.8%** (#1); Global PIQA: **93.4%** (vellum.ai)
- MMMU-Pro: **81.0%** (+5 over GPT-5.1); Video-MMMU: **87.6%** (vellum.ai)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **76.2%** (vellum.ai; competitive with Claude Sonnet 4.5's 77.2%)
- LiveCodeBench Pro: **Elo 2,439** (vellum.ai; ~200 points higher than GPT-5.1's 2,243)
- SWE-bench Pro: no verified public score found
- LiveCodeBench (standard): no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2: **77.0%** at the 128k average context length; at 1M it outpaces Gemini 2.5 Pro by 9.9% (vellum.ai)

### Normalized scores (1–100)

- **Tool use: 92/100.** TAU2-Bench Telecom 98.0% is near-perfect, Vending-Bench 2 #1 demonstrates frontier long-horizon planning and consistent tool usage, and ScreenSpot-Pro is high; missing Terminal-Bench/GDPval numbers keep it under 95.
- **Reasoning: 90/100.** GPQA Diamond 91.9% clears the 90%+ frontier reference, AIME 95% without tools and ARC-AGI-2 45.1% (Deep Think) are elite; HLE 37.5% stays just under the 40% bar, capping it.
- **Context window: 92/100.** 1M tokens maps to the ≥1M tier (95–100) with strong MRCR v2 recall (77.0% at 128K, outpacing 2.5 Pro at 1M); no ≥98% retrieval at 512K+ verified, so no 95.
- **Multimodal: 95/100.** Text, image, audio, video and PDF input with MMMU-Pro 81.0% and Video-MMMU 87.6% (video reasoning strength) — top of the 90–100 band; text-only output is the only gap.
- **Coding: 84/100.** SWE-bench Verified 76.2% and a LiveCodeBench Pro Elo of 2,439 (commanding algorithmic lead) are strong; trailing Claude Sonnet 4.5 on SWE-bench and missing SWE-bench Pro prevent 90+.
- **Cost efficiency: 82/100.** $2/$12 per 1M up to 200K sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, landed at 82; the 200K surcharge ($4/$18) is the caveat.
- **Overall Score: 91/100.** Mean of the five quality dims (92 + 90 + 92 + 95 + 84) / 5 = 90.6 → 91. Best-fit: the strongest choice for multimodal and video reasoning, PhD-level science and long-horizon planning — with Deep Think for the hardest reasoning and Flash tiers for cost-sensitive volume.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (vellum.ai benchmark breakdown, airank.dev, aiwiki.ai, llm-stats, Kingy AI frontier price table, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.
