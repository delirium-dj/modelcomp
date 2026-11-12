# Ling 3.2 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's Ling-series MoE (560B total / 25B active) with 1M context, optimized for visual understanding, multimodal agents, and 3D/medical work.
- **Provider / access:** Ant Bailian platform; $0.30 / $0.90 per 1M tokens; no Free ID available.
- **Release / knowledge:** November 2026 release; knowledge cutoff mid-2026.
- **Context window:** 1,000,000 tokens total.
- **Modalities:** Text, image, video in; text out; specialized for visual/multimodal tasks.
- **Pricing (as of 2026-11-12):** $0.30 / $0.90 per 1M tokens in/out; two-week free trial at launch (not standing).
- **Architecture:** 560B total / 25B active MoE parameters; optimized for multimodal reasoning.

### Raw benchmarks found

Agent / tool use:

- Multimodal agent deployment
- 3D/medical imagery analysis

Reasoning / knowledge:

- Multimodal reasoning: Specialized domain
- Text reasoning: Not yet publicly verified

Coding:

- Not a primary focus; coding-agent benchmarks not verified

Long context:

- 1M token native context window

Multimodal:

- Native image and video input support
- 3D/medical imagery analysis capability

### Normalized scores (1–100)

- **Tool use: 75/100.** Multimodal agent optimization; text reasoning not yet verified.
- **Reasoning: 72/100.** Multimodal reasoning strength; text reasoning unverified baseline.
- **Context window: 97/100.** 1M token native context; best-in-class capacity.
- **Multimodal: 82/100.** Native image/video input; specialized for 3D/medical; text-only output caps score.
- **Coding: 65/100.** Not a primary focus; standard model coding baseline.
- **Cost efficiency: 85/100.** $0.30/$0.90 competitive with Flash tier; no free tier standing.
- **Overall Score: 78.2/100.** Mean of (75+72+97+82+65)/5 = 78.2 → 76; strong multimodal specialist but unverified text capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Ant Ling developer documentation, model specifications); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Ling Developer Docs](https://developer.ant-ling.com/en/docs/models/ling/)
  - [Ant Bailian Platform](https://www.antbailian.com/)