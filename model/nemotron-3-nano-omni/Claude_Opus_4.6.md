# Nemotron 3 Nano Omni — findings by Claude Opus 4.6

- Source: NVIDIA / Nemotron 3 Nano Omni 30B-3B (`opencode/nemotron-3-nano-omni`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni 30B-3B
- **Short description:** NVIDIA's open 30B/3B-active omni-modal reasoning model supporting audio, vision, and text input. Designed for on-device agent deployment with 262K context. Free via NVIDIA Build endpoint.
- **Provider / access:** NVIDIA Build API `opencode/nemotron-3-nano-omni` (free endpoint). Open checkpoints available.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `opencode/nemotron-3-nano-omni`
- **Context window:** 262,144 tokens total (65,536 max output). Verified via meta.json.
- **Modalities:** Text, image, video, audio input; text output. Full omni-modal capability. Tool calls supported.
- **Pricing (as of 2026-10-19):** $0 via NVIDIA Build free API endpoint. Open checkpoints available for self-hosting.
- **Architecture:** 30B total parameters, ~3B active. MoE variant (part of NVIDIA's Hybrid Mamba-Attention family). Open checkpoints. Optimized for on-device and edge deployment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- Note: Designed for on-device agents; benchmark data limited

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found
- Note: As a 3B-active model, reasoning is constrained but sufficient for on-device tasks

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262K context. No RULER/MRCR retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 35/100.** Designed for on-device agent workflows with audio/vision/text, but no published agentic benchmarks. 3B active parameters limit complex multi-step reasoning. Capped by tiny active parameter count and zero benchmark data.
- **Reasoning: 30/100.** At 3B active parameters, reasoning is fundamentally constrained. Designed for lightweight on-device tasks, not frontier reasoning. Capped by active parameter scale.
- **Context window: 78/100.** 262K context per tier mapping (~256K = 78). Good for a model of this size.
- **Multimodal: 85/100.** Full omni-modal input: text + image + video + audio. This is exceptionally broad for a 3B-active model. Only text output. Scored at 85 for comprehensive input modality coverage.
- **Coding: 22/100.** No coding benchmarks published. At 3B active parameters, coding capability is very limited. Designed for on-device use, not serious software engineering. Capped by scale.
- **Cost efficiency: 100/100.** Free via NVIDIA Build. Open checkpoints for self-hosting. $0 cost.
- **Overall Score: 50/100.** Mean of (35 + 30 + 78 + 85 + 22) / 5 = 50.0 → 50. A uniquely capable omni-modal model with excellent input modality coverage for its size, but constrained by tiny 3B active parameters on reasoning and coding. Best for on-device multimodal agent applications where size matters more than raw intelligence.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research and meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
