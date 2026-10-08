# Qwen 3.8 27B — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.8-27b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27.78B-parameter open-weight multimodal model, released August 14, 2026. Natively understands text, images, and video. Popular for local deployment on consumer-grade GPUs (fits on a single RTX 4090 at 4-bit quantization). Apache 2.0 licensed.
- **Provider / access:** Open-weights (Apache 2.0) via Hugging Face; available via multiple API providers.
- **Release / knowledge:** 2026-08-14 release; knowledge cutoff not publicly confirmed.
- **IDs:** `alibaba/qwen-3.8-27b`
- **Context window:** 262,144 tokens (262K) native, extendable to ~1M via YaRN scaling.
- **Modalities:** Text + image + video in (native multimodal); text out; flexible thinking control (adjustable effort levels).
- **Pricing (as of 2026-10-08):** Open-weights (Apache 2.0) — free self-hosting. API: ~$0.15–0.50 / $1.875–3.00 per 1M (varies by provider).
- **Architecture:** Dense transformer; 27.78B parameters (not MoE — all parameters active). Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Artificial Analysis Intelligence Index: **~34** (strong for 27B size class).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Agentic and reverse engineering capability noted in community evaluations.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.

Coding:

- SWE-bench Pro: **~61.7%** (vs. 53.4% for earlier Qwen generations; community benchmarks).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.

Long context:

- 262K native; ~1M via YaRN. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 74/100.** AA Intelligence Index ~34 places it well above median for size class. Flexible thinking control. Capped by absent tool-specific benchmarks and smaller model size.
- **Reasoning: 76/100.** Strong for 27B size; multi-dimensional reasoning and reverse engineering noted. Capped by absent GPQA/HLE data.
- **Context window: 72/100.** 262K native is moderate; YaRN extends to ~1M but with potential quality degradation. Capped by native context below 1M standard.
- **Multimodal: 78/100.** Native text + image + video input. Broader than many competitors at this size. Text-only output. Capped by no audio and no generative output.
- **Coding: 78/100.** SWE-bench Pro ~61.7% is strong for a 27B dense model. Fits on consumer hardware. Capped by being surpassed by larger models.
- **Cost efficiency: 93/100.** Open-weights (Apache 2.0); fits on a single RTX 4090 at 4-bit. API at $0.15/$1.875 is extremely cheap. Outstanding local-deployment value.
- **Overall Score: 76/100.** Mean of (74 + 76 + 72 + 78 + 78) / 5 = 75.6, rounded to 76. Exceptional open-weight model for local deployment with native multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-08
- Method: Public internet research (Alibaba/Qwen docs, Artificial Analysis, Hugging Face, community benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
