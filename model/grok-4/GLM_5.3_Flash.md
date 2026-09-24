# Grok 4 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (Heavy = separate multi-agent variant, not scored here)
- **Short description:** xAI's July 2025 flagship, announced as "the smartest AI in the world," built on version 6 of xAI's foundation model with 100x more training compute than Grok 2; always-on reasoning model with strong tool-augmented reasoning. Superseded by the Grok 4.2/4.3/4.5 line but still API-available.
- **Provider / access:** xAI API (`grok-4`, `https://x.ai/api`, OpenAI-compatible); also in Grok apps (free tier uses Grok 4-class models), inside X and Tesla vehicles. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-07-09; knowledge cutoff December 2024 (verified via llm-stats).
- **IDs:** `grok-4` (xAI API). No Free ID on Zen.
- **Context window:** 256,000 input tokens / 8,000 max output (verified via llm-stats provider table and context-window page).
- **Modalities:** text and image input; text output; reasoning yes (always-on reasoning); tool calls (code execution, retrieval); JSON mode via API.
- **Pricing (as of 2026-09-24):** $3.00 / $15.00 per 1M in/out via xAI (no cached-input rate listed); paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval or Toolathon score found for this exact model. Strong tool-augmented reasoning is demonstrated indirectly by the HLE tool jump (25.4% → 38.6% with tools) but no agentic-tool benchmark numbers were found.
- ARC-AGI v2: **15.8%** (xAI-reported; among the first to clear 10% — reasoning benchmark, not tool use)

Reasoning / knowledge:

- HLE (Humanity's Last Exam, tool-free): **25.4%** (independent leaderboard, binaryverseai.com; vs Gemini 2.5 Pro 21.6%, o3 21.0%)
- HLE (with tools): **38.6%** (xAI-reported; Grok 4 Heavy multi-agent reaches ~44.4–50.7%)
- GPQA: **87%** (xAI-reported, "graduate-level physics", cited by nextbigfuture.com)
- AIME 2025: **30/30** (100%; xAI-reported)
- LiveCodeBench: **91%** (xAI-reported)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **75%** (pre-launch figure reported by nextbigfuture.com — leaked/provisional, not an officially documented launch-table number; treat as provisional)
- LiveCodeBench: **91%** (as above)
- SWE-bench Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval reported (256K window claimed; no MRCR/RULER/GraphWalks value verified)

### Normalized scores (1–100)

- **Tool use: 70/100.** The 25.4%→38.6% HLE jump with tools shows strong tool-augmented reasoning, but zero verified public agentic benchmark numbers (no Terminal-Bench, Tau3, GDPval, MCPAtlas) — score rests on indirect evidence, conservative per the no-hallucination rule.
- **Reasoning: 80/100.** AIME 2025 30/30 and GPQA 87% are strong, but HLE 25.4% tool-free sits well under the 40% frontier ref and ARC-AGI-2 15.8% is low; no independent AA Index run caps it.
- **Context window: 72/100.** 256K input maps to the 200K–500K tier (200K = 70 anchor, slightly above); the 8K max output is a real caveat for big generations.
- **Multimodal: 65/100.** Text + image input, text output; no video/audio input — per methodology the image-in band is 60–70.
- **Coding: 82/100.** LiveCodeBench 91% is elite and the provisional 75% SWE-bench figure is mid-frontier; the leak-provenance caveat and missing SWE-bench Pro/SciCode numbers prevent 85+.
- **Cost efficiency: 60/100.** $3/$15 per 1M per 1M tokens sits at the $3/$15 = ~60 methodology reference — the most expensive tier tracked alongside premium flagships, with no cache discount.
- **Overall Score: 74/100.** Mean of the five quality dims (70 + 80 + 72 + 65 + 82) / 5 = 73.8 → 74. Best-fit: a superseded flagship best kept for reasoning-heavy chat and legacy integrations; newer Grok models beat it on coding, context and price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (llm-stats model page, binaryverseai.com HLE analysis, nextbigfuture.com, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
