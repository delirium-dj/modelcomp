# Claude Opus 4.6 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning-capable model, enhanced with thinking for complex multi-step tasks; an earlier Opus generation superseded by 4.8/5.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-opus-4.6`); no Free Zen ID.
- **Release / knowledge:** Opus 4.6 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-4.6`
- **Context window:** 1,000,000 tokens via OpenRouter/BenchLM (curated listing shows 200K).
- **Modalities:** text/image/file in; text out; reasoning/thinking yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $5.00 in / $25.00 out per 1M (OpenRouter first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%**
- BrowseComp **83.7%**; OSWorld-Verified **72.7%**; DeepSearchQA **73.7%**; CyberGym **66.6%**
- Claw-Eval **70.4%**; browsing suite **84.8%**; Gert Labs **61.85%**; JobBench **36.7%**; ApprenticeBench **5%**
- GDPval-AA: no verified public score found for this ID
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **89.2–91.3%**; SuperGPQA **95%**; MMLU-Pro **82%** (AA 89.1%)
- HLE **53%** (40% w/o tools); AA-HLE **19.1%**
- AA-LCR **67.0%**; CritPt **2.8%**; AA Index **26.4%**
- AA-Omniscience Accuracy / Hallucination Rate: **45.8% / 80.1%**
- AIME25 **99.8%** (Arcee); FrontierMath v2 Tier 4 **22.9%**

Coding:

- SWE-bench Verified **80.8%** (variant 75.6%); SWE-bench Pro **53.4%**
- LiveCodeBench Pro **70.7%**; SWE-Rebench **65.3%**; Vibe Code Bench **57.57%**
- React Native Evals **84.1%**; FrontierCode 1.1 Main **26.9%**

Long context:

- AA-LCR 67.0%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **77.3%** (AA 72.5%); ScreenSpot Pro **83.1%**; ERQA **51.6%**; MedXpertQA (MM) **64.8%**; Design Arena **1299 Elo**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.0 65.4%, BrowseComp 83.7% and OSWorld-Verified 72.7% are good; JobBench 36.7% and ApprenticeBench 5% drag.
- **Reasoning: 74/100.** GPQA 89–91% is solid, but AA Index 26.4%, HLE 40–53% and CritPt 2.8% place it well below current flagships.
- **Context window: 90/100.** 1M API window but AA-LCR only 67%.
- **Multimodal: 80/100.** text/image/file in with MMMU-Pro 77.3% and ScreenSpot 83.1%; text-only output.
- **Coding: 82/100.** SWE Verified 80.8% and React Native Evals 84.1% are strong; SWE-Pro 53.4% and FrontierCode 26.9% trail.
- **Cost efficiency: 48/100.** $5/$25 per 1M is premium for an older generation.
- **Overall Score: 82/100.** Mean of (84 + 74 + 90 + 80 + 82) / 5 = 82.0 → 82. Best-fit: legacy multi-step coding/agent work when newer Opus tiers are unavailable.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
