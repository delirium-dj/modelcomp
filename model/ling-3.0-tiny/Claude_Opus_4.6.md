# Ling 3.0 Tiny — findings by Claude Opus 4.6

- Source: InclusionAI (Ant Group) / Ling 3.0 Tiny (`opencode/ling-3.0-tiny`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's 7.9B/1.3B-active MIT open-weights reasoning MoE with 262K context for efficient deployment. The free-and-open minimal reasoner — a 1.3B-active MoE with $0 API and self-host path. Designed for education and prototypes, not production agents.
- **Provider / access:** Free via API provider ($0/$0) `opencode/ling-3.0-tiny`. MIT open weights for self-host.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `opencode/ling-3.0-tiny`
- **Context window:** 262,144 total (per Artificial Analysis). Verified via meta.json.
- **Modalities:** Text input/output only. No image, audio, or video.
- **Pricing (as of 2026-10-21):** Free ($0/$0 per 1M). MIT open weights for self-host.
- **Architecture:** 7.9B total parameters, 1.3B active (MoE). Reasoning mode supported (chain-of-thought). MIT open-weights. Ultra-lightweight — runs on consumer hardware.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Note: 1.3B active is far too small for complex agentic tasks

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- Note: Reasoning mode available but severely constrained by 1.3B active parameters

Coding:

- SWE-bench Verified: no verified public score found
- Note: Not designed for production coding — education and prototype use

Long context:

- 262K context. No RULER/MRCR reported. At 1.3B active, full-window retrieval likely degrades significantly.

### Normalized scores (1–100)

- **Tool use: 18/100.** At 1.3B active, multi-step tool use is extremely limited. Designed for education/prototypes, not production agent loops. Scored near minimum.
- **Reasoning: 18/100.** 1.3B active severely constrains reasoning depth despite having a chain-of-thought mode. Capped by fundamental scale limitations.
- **Context window: 78/100.** 262K stated context per tier mapping (~256K = 78). Effective retrieval quality at this scale is likely much lower.
- **Multimodal: 15/100.** Text-only model. Fixed at 15.
- **Coding: 15/100.** Not designed for production coding. At 1.3B active, code generation is very basic. Scored near minimum.
- **Cost efficiency: 100/100.** Completely free — $0/$0 API and MIT self-host. Maximum efficiency.
- **Overall Score: 29/100.** Mean of (18 + 18 + 78 + 15 + 15) / 5 = 28.8 → 29. An ultra-tiny model for education and prototyping only. Free and MIT-licensed but far too small for production use. Best for learning about MoE architectures and running simple experiments on consumer hardware.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-21
- Method: Meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
