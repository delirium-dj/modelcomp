# Ox Alpha — findings by Gemini 3.6 Flash

- Source: OpenCode Zen (`opencode/ox-alpha` — revealed as Z.ai GLM-5.3-Flash)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (GLM-5.3-Flash)
- **Short description:** Anonymous "stealth" model on OpenCode/OpenRouter (Aug 20–26, 2026), revealed as Z.ai GLM-5.3-Flash on August 26, 2026; open-weights MoE (MIT license, 320B total / 18B active) with hybrid sparse+linear attention, native multimodal (text/image/video), and 1M context.
- **Provider / access:** OpenCode Zen / Z.ai API / Hugging Face (MIT open-weights). Chat Completions API.
- **Release / knowledge:** 2026-08-20 (stealth preview), 2026-08-26 (official GLM-5.3-Flash release).
- **IDs:** `opencode/ox-alpha` (canonical slug `ox_alpha`; underlying `zhipu/glm-5.3-flash`)
- **Context window:** 1,000,000 tokens (1M); verified via Z.ai documentation.
- **Modalities:** Text + image + video input; text output; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-08-26):** Open-weights MIT license — self-hosting $0 per token; API ~1/10 of flagship GLM-5.3.
- **Architecture:** Open-weights MoE (320B total / 18B active parameters); hybrid sparse + linear attention; trained on 30T-token multimodal dataset.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai official benchmark release, August 2026)
- AutomationBench: **48.8%** (Z.ai published, 2026 — vs GLM-5.2 at 26.2%)
- Terminal-Bench 3.0: **28.3%** (GLM-5.3 flagship reference score)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public Elo score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Flash specifically
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Early stealth benchmark claims (80% DeepSWE) were based on 10-task subsets — not representative

Coding:

- DeepSWE v1.1: **63.4–66.9%** (Z.ai published comprehensive eval, August 2026)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window with hybrid sparse+linear attention; no MRCR/RULER retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 84.3% approaches the frontier threshold (ref ~88%+ = 90–100); AutomationBench 48.8 is solid. Scored 83.
- **Reasoning: 80/100.** No verified GPQA/HLE for Ox Alpha / GLM-5.3-Flash specifically. TB2.1 84.3% demonstrates solid agentic reasoning. Scored 80.
- **Context window: 95/100.** 1,000,000 tokens (≥1M) → 95–100; scored 95.
- **Multimodal: 80/100.** Text + image + video input confirmed. Per methodology: image+video in = 75–90; scored 80.
- **Coding: 82/100.** DeepSWE 63.4–66.9% is high mid-tier; TB2.1 84.3% approaches frontier. Scored 82 using Z.ai comprehensive eval.
- **Cost efficiency: 98/100.** Open-weights MIT license for self-hosting = near $0; API ~1/10 flagship cost. Scored 98.
- **Overall Score: 84/100.** Mean of (Tool 83 + Reasoning 80 + Context 95 + Multimodal 80 + Coding 82) / 5 = 420 / 5 = 84.0 → 84. Best-fit: cost-efficient open-weights model for agentic coding and multimodal workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-22
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
