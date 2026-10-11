# Ox Alpha — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai) / Ox Alpha (stealth preview of GLM-5.3-Flash)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Anonymous "stealth" preview model that appeared on OpenRouter/OpenCode in Aug 2026. Later revealed to be Zhipu AI's GLM-5.3-Flash under a blind testing codename. Strong in coding and front-end generation tasks with a 1M context window.
- **Provider / access:** OpenRouter (`stealth/ox-alpha`), OpenCode Zen (`opencode/ox-alpha`). Free during preview window; now available as GLM-5.3-Flash via standard providers.
- **Release / knowledge:** 2026-08 (stealth preview); transitioned to GLM-5.3-Flash branding late Aug 2026.
- **IDs:** `opencode/ox-alpha` (stealth preview ID; underlying model: GLM-5.3-Flash)
- **Context window:** 1,048,576 tokens (1M); 131,072 max output tokens.
- **Modalities:** Text, image, video, PDF in; text out; tool calls.
- **Pricing (as of 2026-10-11):** Free during stealth preview (OpenCode Zen tier). Now available as GLM-5.3-Flash at standard paid rates.
- **Architecture:** MoE; estimated 320B total parameters, ~18B–40B active per token. Proprietary (Zhipu AI).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **26.6%** (source: replacehumans.ai community evaluation)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (under Ox Alpha codename)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE: **63.4%** verified on full dataset (source: medium.com, replacehumans.ai; initial 80% on 10-task subset was inflated)
- LiveCodeBench v6: **28.0%** pass@1 (source: github.com leaderboard)
- King Bench (front-end): **70/80** (source: mindstudio.ai; Three.js/SVG generation tasks)
- SWE-bench Verified: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 1,048,576 token context window (1M). No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 68/100.** TB 3.0 26.6% is below-average for agent benchmarks (ref: 25–35% = 55–70 range on TB 3.0). Stealth model with limited agentic testing. Missing most agent benchmarks.
- **Reasoning: 78/100.** No standalone reasoning benchmarks verified under Ox Alpha identity. Inferred from GLM-5.3-Flash family positioning (mid-to-upper tier). Missing GPQA/HLE/ARC-AGI data limits confidence.
- **Context window: 93/100.** 1M verified context. 131K output is generous. Production preview stability was mixed during high traffic periods.
- **Multimodal: 70/100.** Text + image + video + PDF in; text out. Broad input coverage. No audio. PDF parsing adds value. Video+image multimodal = 65–75 range.
- **Coding: 79/100.** DeepSWE 63.4% is solid on full dataset. LiveCodeBench 28.0% is moderate. King Bench 70/80 shows strong front-end capability. Initial inflated scores corrected downward.
- **Cost efficiency: 100/100.** Free during stealth preview on Zen. Exceptional value for the performance delivered.
- **Overall Score: 78/100.** Mean of (68 + 78 + 93 + 70 + 79) / 5 = 77.6, rounded to 78. Stealth model offering solid performance, especially in front-end coding; limited verified benchmarks constrain scoring.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (mindstudio.ai, replacehumans.ai, medium.com, reddit.com, glm5.app, z.ai, github.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
