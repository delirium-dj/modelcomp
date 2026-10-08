# GLM-5.3 FlashX — findings by Claude Opus 4.6

- Source: Zhipu AI (Z.ai)/GLM-5.3 FlashX (`glm-5.3-flashx`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** Zhipu AI's high-speed serving tier of the GLM-5.3-Flash model, sharing identical weights but optimized for lower latency and higher throughput (up to 200 TPS). Same underlying 320B/18B MoE architecture as GLM-5.3-Flash. Previously tested anonymously under codename "Ox Alpha."
- **Provider / access:** Z.ai API (`glm-5.3-flashx`), OpenRouter. Chat Completions API.
- **Release / knowledge:** 2026-09-18 release (FlashX tier); base GLM-5.3-Flash released 2026-08-26. Knowledge cutoff not publicly specified.
- **IDs:** `z.ai/glm-5.3-flashx`
- **Context window:** 1,000,000 tokens total; up to 1,000,000 output tokens — verified via Z.ai documentation.
- **Modalities:** Text + image + video in; text out. Tool/function calls supported. JSON mode supported. No native audio input.
- **Pricing (as of 2026-10-08):** $0.37 / $1.25 per 1M tokens (input / output). ~2.5× the standard Flash tier price for higher throughput.
- **Architecture:** Mixture-of-Experts (MoE); 320B total parameters, 18B active per token. Hybrid sparse and linear attention with Manifold-Constrained Hyper-Connections (mHC). Same weights as GLM-5.3-Flash. MIT license (open weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~84.3%** (source: leaderboard evaluations — same weights as GLM-5.3-Flash)
- AutomationBench: **48.8** (source: vendor comparison data)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~91.2%** (source: independent leaderboard testing)
- HLE: **~55.3%** (source: third-party evaluations)
- Artificial Analysis Intelligence Index: **~57** (v4.1.1) (source: Artificial Analysis)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **63.4** (source: benchmark evaluations)
- SWE-bench Verified / SWE-Pro: no verified public score found for FlashX specifically
- LiveCodeBench: no verified public score found for FlashX specifically
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M token context window supported. No specific MRCR / RULER / GraphWalks retrieval scores found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 ~84.3% is strong agent performance for a flash-tier model. AutomationBench 48.8 is moderate. Capped by limited coverage on Tau-bench and dedicated tool-use evaluations.
- **Reasoning: 85/100.** GPQA ~91.2% and HLE ~55.3% show solid reasoning. AA Intelligence Index 57 is competitive for a flash model. Capped by limited reasoning benchmark diversity compared to flagship-class models.
- **Context window: 92/100.** 1M token context window with up to 1M output tokens is among the largest available. Capped by lack of published long-context retrieval accuracy benchmarks (MRCR/RULER).
- **Multimodal: 75/100.** Natively supports text, image, and video input — broader multimodal coverage than many competitors. No audio input. Text-only output. Capped by absence of audio modality and output modalities beyond text.
- **Coding: 83/100.** DeepSWE v1.1 at 63.4 demonstrates solid coding capability. Performance approaches Claude Opus 4.8 level per vendor claims. Capped by limited SWE-bench and LiveCodeBench specific scores for FlashX.
- **Cost efficiency: 88/100.** $0.37/$1.25 per 1M tokens is very cost-efficient despite being the premium-speed tier. Standard Flash is even cheaper at $0.15/$0.50.
- **Overall Score: 84/100.** Mean of (84 + 85 + 92 + 75 + 83) / 5 = 83.8 → 84. A high-speed serving tier offering the same intelligence as GLM-5.3-Flash at premium throughput. Best fit for latency-sensitive interactive and real-time agentic applications.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Z.ai documentation, Artificial Analysis, leaderboard evaluations, vendor comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
