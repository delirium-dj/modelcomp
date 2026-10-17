# Grok 4 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (Heavy = separate multi-agent variant, not scored here)
- **Short description:** xAI's July 2025 flagship, announced as "the smartest AI in the world," built on version 6 of xAI's foundation model with 100x more training compute than Grok 2; always-on reasoning model with strong tool-augmented reasoning. BenchLM ranks it #90 of 889 (51.96). Superseded by the Grok 4.2/4.3/4.5/4.6 line but still API-available.
- **Provider / access:** xAI API (`grok-4`, `https://x.ai/api`, OpenAI-compatible); also in Grok apps (free tier uses Grok 4-class models), inside X and Tesla vehicles. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-07-09; knowledge cutoff December 2024 (verified via llm-stats).
- **IDs:** `grok-4` (xAI API). No Free ID on Zen.
- **Context window:** 256,000 input tokens / 8,000 max output (verified via llm-stats provider table) — **BenchLM's 2026-10-10 page lists 128K, an unresolved conflict**; the 256K documented window stays primary.
- **Modalities:** text and image input; text output; reasoning yes (always-on reasoning; BenchLM classifies the base variant as non-reasoning); tool calls (code execution, retrieval); JSON mode via API.
- **Pricing (as of 2026-10-11):** $3.00 / $15.00 per 1M in/out via xAI (no cached-input rate listed); paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **74.9%** (AA, independent — fills the Tau2 gap; decent for the class); Gert Labs: **42.34%**
- React Native Evals: **72.6%** (RN Evals leaderboard — new, mid)
- Terminal-Bench / Tau3 / GDPval-AA / MCPAtlas / Claw-Eval / Toolathon: no verified public score found
- HLE tool jump 25.4% → 38.6% with tools (prior pass) remains the indirect tool-reasoning evidence

Reasoning / knowledge:

- GPQA Diamond: **87.7%** (AA, independent — corroborates the 87% xAI-reported figure)
- HLE: **26.7%** (AA tool-free — consistent with the 25.4% tool-free launch read; the 38.6% with-tools row is a different setting)
- Artificial Analysis Intelligence Index: **22.5** (AA — fills the index gap; low)
- AA-LCR v1.1: **68.0%** (AA — fills the long-context gap, weak-mid); CritPt: **2.0%** (AA — near-zero)
- FrontierMath v2: **19.7%** Tiers 1–3 / **2.1%** Tier 4 (Epoch AI — weak)
- ARC-AGI-2: **15.8%** (xAI-reported, prior pass)
- AIME 2025: **30/30** (xAI-reported, prior pass)
- AA-Omniscience: **40.5% accuracy / 64.5% non-hallucination row / 2.1 index** (AA — weak)
- AA-IFBench: **53.7%** (AA)

Coding:

- LiveCodeBench: **91%** (xAI-reported, prior pass); SWE-bench Verified: **75%** (pre-launch provisional, prior pass)
- React Native Evals: **72.6%** (new — mid)
- SWE-bench Pro / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR 68.0% is the first measured long-context number (weak-mid); 256K window claimed; no MRCR/RULER value verified

Multimodal:

- AA-MMMU-Pro: **68.8%** (AA — first measured vision evidence, mid for the band)

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 74.9% (AA) fills the Tau2 gap and the HLE tool jump stands, but zero verified Terminal-Bench/GDPval/MCP-Atlas numbers keep the score on indirect evidence — unchanged.
- **Reasoning: 74/100.** (Was 80 on the prior pass.) GPQA 87.7% (corroborated) and AIME 30/30 stay strong, but the newly measured AA Index 22.5, CritPt 2.0%, FrontierMath T4 2.1% and AA-LCR 68.0% document the July-2025 age against the 2026 class — the correction the prior score resisted.
- **Context window: 72/100.** 256K input maps to the 200K–500K tier (BenchLM's 128K listing is a lone conflict); the 8K max output is a real caveat for big generations; AA-LCR 68.0% is mid.
- **Multimodal: 65/100.** Text + image input, text output with measured MMMU-Pro 68.8%; no video/audio input — the image-in band is 60–70.
- **Coding: 82/100.** LiveCodeBench 91% (vendor) and the provisional 75% SWE-V are mid-frontier; React Native Evals 72.6% adds a mid independent row; the leak-provenance caveat and missing SWE-bench Pro/SciCode prevent 85+.
- **Cost efficiency: 60/100.** $3/$15 per 1M tokens sits at the $3/$15 = ~60 methodology reference — the most expensive tier tracked alongside premium flagships, with no cache discount.
- **Overall Score: 72.6/100.** (Was 74 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (70 + 74 + 72 + 65 + 82) / 5 = 363/5 = 72.6 — lowered slightly on the 2026-10-11 second pass as the AA/Epoch boards document the age. Best-fit: a superseded flagship best kept for reasoning-heavy chat and legacy integrations; newer Grok models beat it on coding, context and price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 with AA/Epoch AI citations, the prior 2026-09-24 pass on llm-stats/binaryverseai/nextbigfuture, xAI-reported rows via benchlm.ai; 2026-10-16 re-check: BenchLM 13-row refresh corroborates every row, no new data (rank drift only: #90/889 51.96 → #92/954 51.77) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
