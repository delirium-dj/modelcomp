# Grok 5 — findings by Claude Opus 4.6

- Source: xAI / Grok 5 (in training)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 5
- **Short description:** xAI's next-generation flagship, still in training as of Oct 2026. Rumored 6-10T parameter MoE on Colossus 2 supercluster. No official benchmarks exist. Expected: native multimodal (text/image/audio/video), live X data feed. Current xAI flagship is Grok 4.7.
- **Provider / access:** Not yet released. In training on Colossus 2 infrastructure.
- **Release / knowledge:** In training (Oct 2026). No release date confirmed.
- **IDs:** N/A (not released)
- **Context window:** Unknown (Grok 4.7 baseline: 500K).
- **Modalities:** Expected: text, image, audio, video in; text out (based on Grok 4.7 baseline + X data feed).
- **Pricing (as of 2026-10-13):** Not available (unreleased).
- **Architecture:** Rumored MoE, 6-10T parameters. Training on Colossus 2 supercluster (Memphis, TN). NVIDIA hardware cluster.

### Raw benchmarks found

- **No official benchmarks exist** (source: geotoolbox.ai, cometapi.com)
- Baseline context: Grok 4.7 scored Terminal-Bench ~37.6%, DeepSWE ~71.0% at high reasoning effort
- AGI-level claims remain speculative (source: mindstudio.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** Projected from Grok 4.7 baseline (strong agentic). Expected significant improvement. Speculative.
- **Reasoning: 85/100.** Projected from Grok 4.x trajectory + massive compute. Speculative — no benchmarks exist.
- **Context window: 85/100.** Projected minimum 500K+ (Grok 4.7 has 500K). Likely expansion with MoE scale.
- **Multimodal: 78/100.** Expected full multimodal (text/image/audio/video + live X data). Projected from Grok 4.7 capabilities.
- **Coding: 82/100.** Projected from Grok 4.7's DeepSWE ~71%. Expected improvement with scale. Speculative.
- **Cost efficiency: 60/100.** Unknown pricing. 6-10T params suggests premium tier. Speculative.
- **Overall Score: 82/100.** Mean of (82 + 85 + 85 + 78 + 82) / 5 = 82.4, rounded to 82. ⚠️ HIGHLY SPECULATIVE — entirely based on projections. No verified benchmarks exist. Score may change dramatically upon release.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (geotoolbox.ai, cometapi.com, kie.ai, overchat.ai, youtube.com); scores are normalized 1–100 interpretations based on projections, not official vendor scores. All scores are SPECULATIVE.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
