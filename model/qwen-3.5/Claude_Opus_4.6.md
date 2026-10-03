# Qwen 3.5 — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (base open-weights model)
- **Short description:** Alibaba's flagship open-weight MoE model released February 16, 2026. The Qwen3.5-397B-A17B features 397B total parameters (17B active), native multimodal (text + image + video), 201 language support, and Apache 2.0 licensing. Succeeded by Qwen 3.6+.
- **Provider / access:** Open-weights (Apache 2.0) via Hugging Face; Alibaba Cloud Model Studio API. Various sizes: 0.8B–397B.
- **Release / knowledge:** 2026-02-16 release; knowledge cutoff not publicly confirmed.
- **IDs:** `alibaba/qwen-3.5`
- **Context window:** 262,144 tokens (262K native); hosted variants extend to 1M.
- **Modalities:** Text + image + video in (native early-fusion multimodal); text out; Thinking/Non-Thinking dual-mode inference; tool calls.
- **Pricing (as of 2026-02):** Open-weights (Apache 2.0) — free self-hosting. API: ~$0.30/$1.80 per 1M via OpenRouter.
- **Architecture:** Sparse MoE; 397B total parameters, 17B active per token. Early-fusion multimodal training. 201 languages.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified base-model-specific score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (shared with Plus variant; datacamp.com).
- Thinking/Non-Thinking dual-mode reasoning confirmed.
- HLE: no verified public score found.

Coding:

- SWE-bench Verified: **76.4%** (shared with Plus variant).
- LiveCodeBench: **83.6%** (shared with Plus variant).
- SciCode / AA-SciCode: no verified public score found.

Long context:

- 262K native; up to 1M in hosted variants. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 76/100.** Dual-mode inference supports agentic workflows. Open weights allow custom tool integration. Capped by absent tool-specific benchmarks.
- **Reasoning: 84/100.** GPQA Diamond 88.4% is strong. Thinking mode enables deep reasoning. Capped by age vs. 2026 frontier.
- **Context window: 70/100.** 262K native is moderate; hosted extensions reach 1M but not for self-hosted. Capped by native context limit.
- **Multimodal: 78/100.** Early-fusion text + image + video with 201 languages. Broader than many competitors. Capped by no audio and text-only output.
- **Coding: 83/100.** SWE-bench Verified 76.4% and LiveCodeBench 83.6% were strong at release. Surpassed by later models. Capped by age.
- **Cost efficiency: 92/100.** Open-weights (Apache 2.0) for free self-hosting. API pricing ~$0.30/$1.80 excellent. 17B active params efficient.
- **Overall Score: 78/100.** Mean of (76 + 84 + 70 + 78 + 83) / 5 = 78.2, rounded to 78. Strong open-weights foundation with native multimodal.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (qwen.ai, datacamp.com, OpenRouter, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
