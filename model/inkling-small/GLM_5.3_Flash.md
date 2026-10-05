# Inkling-Small — findings by GLM 5.3 Flash

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's open-weight companion to its flagship Inkling model — about a quarter of the size (276B total vs 975B) yet matching or beating Inkling on most published benchmarks. Top use cases: agentic coding, general reasoning, and self-hosting a near-flagship model on accessible hardware.
- **Provider / access:** OpenRouter (`inkling-small`, plus a free `inkling-small:free` variant); open weights (Apache 2.0) for self-hosting with MXFP8/NVFP4 quantization support. Chat Completions-style API via OpenRouter.
- **Release / knowledge:** Released 2026-07-30, two weeks after flagship Inkling (2026-07-15); knowledge cutoff not published.
- **IDs:** OpenRouter `inkling-small`; free tier exists as `inkling-small:free`
- **Context window:** Up to 1M tokens per OpenRouter and BenchLM listings (OpenRouter free variant included); llm-stats lists 524K — sources conflict, and the vendor's own Inkling post ("context window of up to 1M tokens") refers to the family. Verified how: vendor post + directory listings; no public retrieval benchmark confirms the full window.
- **Modalities:** multimodal reasoning model (image input per vendor positioning; trails on CharXiv-R vision benchmarks per third-party stats). Text output. Tool calls supported (agentic results). JSON mode not documented.
- **Pricing (as of 2026-10-05):** $0.30 per 1M input / $0.06 cached / $1.20 per 1M output — roughly a third of flagship Inkling's $4.05/M output. Free variant available on OpenRouter (data-usage caveats typical of free tiers). Open weights = free self-hosting.
- **Architecture:** ~276B total parameters, ~12B active (sparse MoE); Apache 2.0 open weights; MXFP8 and NVFP4 checkpoint support. Flagship Inkling requires ~2TB aggregated VRAM at BF16; Inkling-Small is the deployable one.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (best harness; beats flagship Inkling's 63.8% — vendor release post, echoed by VentureBeat/DataCamp)
- Toolathlon: **outperforms Seed 2.1 Pro** (third-party comparison, llm-stats.com; exact score not published)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor release post; 88.3% also cited in secondary coverage — beats flagship Inkling's 87.2%)
- HLE (text-only): **31.6%** (vendor release post; beats Inkling's 29.7%)
- SimpleQA Verified: **20.6%** (notably weak factual recall vs 43.9% for Inkling — third-party analysis)
- BrowseComp / CharXiv-R: trails larger frontier models (llm-stats.com; exact values not published)
- Artificial Analysis Intelligence Index: within one point of Inkling, which scored 41 (Artificial Analysis)
- BenchLM overall: **55.12/100**, rank #67 of 212 (source-verified position #38 of 74)
- CritPt / LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** (vendor release post; beats flagship Inkling's 77.6%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval benchmark (MRCR / RULER / GraphWalks) reported; window sources conflict (1M vs 524K)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 64.7% (best harness) beats the 975B flagship, and a Toolathlon win over Seed 2.1 Pro confirms real agentic competence; capped by no Tau2/GDPval/Toolathon numbers and vendor-harness dependence.
- **Reasoning: 87/100.** GPQA Diamond 89.5% plus HLE 31.6% are both strong and beat the larger parent; Artificial Analysis confirms near-flagship reasoning. Capped by the glaring SimpleQA Verified 20.6% factual-recall hole and BrowseComp/HLE gap to true frontier.
- **Context window: 84/100.** 1M-token window per vendor/major directories is top-tier spec; capped by the 524K conflicting listing, zero retrieval verification, and no long-context benchmark.
- **Multimodal: 60/100.** Multimodal reasoning model with image input, but no measured vision scores surfaced and third-party stats show it trailing on CharXiv-R — capability credited, performance unproven.
- **Coding: 85/100.** SWE-bench Verified 80.2% beats the flagship and sits in strong open-weight territory; capped by no LiveCodeBench/SciCode corroboration.
- **Cost efficiency: 92/100.** $0.30/$1.20 per 1M with a free OpenRouter variant and Apache 2.0 self-hosting, at near-flagship quality — outstanding value; not higher because cached/long-output economics at 1M context are undocumented.
- **Overall Score: 79.6/100.** Mean of the five quality dims (82 + 87 + 84 + 60 + 85) / 5. Best fit: teams wanting near-flagship agentic coding and reasoning with open weights they can actually deploy.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (Thinking Machines release post, OpenRouter, BenchLM, llm-stats, Artificial Analysis references, VentureBeat/DataCamp coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
