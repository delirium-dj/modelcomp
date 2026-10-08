# Gemini 3 Pro — findings by Laguna XS 2.1

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (preview)
- **Short description:** Google's first Gemini 3 flagship (2025-11-18) — first model to break 1500 Elo on LMArena (1501), sparse-MoE multimodal reasoning model with a 1M window; succeeded by Gemini 3.1 Pro (2026-02-19).
- **Provider / access:** Gemini API / AI Studio (`gemini-3-pro-preview`), Vertex AI, Gemini app, Google Antigravity, Gemini CLI. Controls: `thinking_level`, `media_resolution`; Deep Think mode for AI Ultra subscribers.
- **Release / knowledge:** 2025-11-18 (preview); knowledge cutoff January 2025.
- **IDs:** `gemini-3-pro-preview` (Gemini API). No Zen Free ID found.
- **Context window:** 1M tokens in / 64K (65,536) out.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (thinking levels + Deep Think); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** ≤200K: $2 / $12 per 1M in/out; >200K: $4 / $18; cached input $0.20 / $0.40; cache storage $4.50/M tokens/hour; Batch 50% off.
- **Architecture:** proprietary sparse mixture-of-experts transformer, trained from scratch (not a 2.5 fine-tune); no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.9%** (Google 3.1 Pro model card, Terminus-2 harness; 54.2% at launch per llm-stats)
- τ2-bench: Retail **85.3%** / Telecom **98.0%** (Google model card)
- MCP Atlas: **54.1%** (Google model card)
- BrowseComp: **59.2%** (Google model card, search + Python + browse)
- GDPval-AA: **1195 Elo** (Google model card)
- APEX-Agents: **18.4%** (Google model card)
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google; #1 at launch)
- HLE: **37.5% no tools / 45.8% search+code** (Google model card)
- ARC-AGI-2: **31.1%** standard / **45.1%** Deep Think (ARC Prize Verified)
- AIME 2025: **95.0%** / **100%** with code execution (Google)
- MathArena Apex: **23.4%** (Google)
- MMLU: **91.8%**; MMMLU **91.8%**; SimpleQA Verified **72.1%**
- LMArena Elo: **1501** (#1 at launch — first model past 1500)
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **76.2%** (single attempt; vs Opus 4.5 80.9 at launch)
- SWE-bench Pro (Public): **43.3%** (Google model card)
- LiveCodeBench Pro: **2439 Elo** (Google model card)
- SciCode: **56%** (Google model card)
- WebDev Arena: **1487 Elo** (#1 at launch)
- Terminal-Bench 2.0 **56.9%** (see above)

Long context:

- MRCR v2 (8-needle): **77.0%** at 128K average; **26.3%** at 1M pointwise (Google model card)

Multimodal (supporting): MMMU-Pro **81.0%**; Video-MMMU **87.6%**; screen comprehension **72.7%** (vs GPT-5.1 3.5, per The AI Rankings)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ2-bench 85.3/98.0% is strong, but TB 2.0 56.9%, MCP Atlas 54.1%, BrowseComp 59.2% and GDPval 1195 sit clearly below the 2026 frontier — capped there.
- **Reasoning: 87/100.** GPQA 91.9%, HLE 37.5%, ARC-AGI-2 45.1% (Deep Think) and LMArena 1501 were all launch-topping; capped by newer models (3.1 Pro, Opus 5.x, Astra) pushing well past these numbers and an 88% hallucinate-when-wrong report (The AI Rankings).
- **Context window: 95/100.** 1M window (95–100 tier) but MRCR v2 26.3% at 1M pointwise is weak — the floor of the tier, same as 3.1 Pro.
- **Multimodal: 95/100.** Text/image/audio/video/PDF in with Video-MMMU 87.6% and MMMU-Pro 81.0% — full input coverage (audio-in tier 90–100); text-only output caps it.
- **Coding: 83/100.** SWE-bench Verified 76.2%, LiveCodeBench Pro 2439 and WebDev Arena #1 are strong; capped by trailing Opus 4.5 on SWE-bench at launch and SWE-bench Pro 43.3%.
- **Cost efficiency: 75/100.** $2/$12 (≤200K) sits between the methodology's $1.25/$4.25 (~88) and $3/$15 (~60) anchors; >200K tier ($4/$18) and preview status cap it. Batch 50% and $0.20 caching help.
- **Overall Score: 87.2/100.** Mean of (76, 87, 95, 95, 83) = 87.2 — a 2025 late-year flagship still competitive on multimodal + reasoning value; superseded by 3.1 Pro for hard reasoning.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Google DeepMind 3.1 Pro model card comparison table, Google Cloud blog, llm-stats, AI/TLDR, The AI Rankings, Benched.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
