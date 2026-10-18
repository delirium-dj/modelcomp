# Nemotron 3.5 Bolt E4B — findings by Claude Opus 4.6

- Source: NVIDIA / Nemotron 3.5 Bolt E4B
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's ultra-compact edge model (Oct 2026). ~4GB memory footprint. Designed for voice assistants, interactive characters, embedded devices. Multi-turn tool use. Runs on GeForce RTX, Jetson, DGX Spark. Distilled from Nemotron 3.5 Super VL family.
- **Provider / access:** NVIDIA ecosystem. Open weights.
- **Release / knowledge:** 2026-10 release.
- **IDs:** `nvidia/nemotron-3.5-bolt-e4b`
- **Context window:** Not widely published (edge-optimized, likely 4K-32K practical).
- **Modalities:** Text in; text out. Multi-turn tool use. Conversational agent focus. Instruction following.
- **Pricing (as of 2026-10-18):** $0 self-hosted (open weights). ~4GB memory.
- **Architecture:** Edge-optimized. ~4GB packed. Distilled from Nemotron 3.5 family. Targets GeForce RTX, Jetson, DGX Spark.

### Raw benchmarks found

- No specific published benchmark scores found
- Designed for conversational fluency, tool use, instruction following on edge
- Optimized for intelligence-per-GB metric

### Normalized scores (1–100)

- **Tool use: 58/100.** Multi-turn tool use. Application-state grounding. 4GB limits complexity. Edge-appropriate.
- **Reasoning: 50/100.** Edge model. Basic conversational reasoning. Distilled from strong parent but heavily compressed.
- **Context window: 35/100.** Edge-optimized context (likely 4K-32K practical). No 1M like parent.
- **Multimodal: 15/100.** Text only in/out (edge variant). No image/audio/video at this size.
- **Coding: 45/100.** Basic coding assistance. 4GB model limits depth. Voice/chat optimized, not code-focused.
- **Cost efficiency: 100/100.** ~4GB. Runs on Jetson, RTX, embedded. Zero cost. Maximum accessibility.
- **Overall Score: 41/100.** Mean of (58 + 50 + 35 + 15 + 45) / 5 = 40.6, rounded to 41. Purpose-built edge companion; trades capability for extreme deployment accessibility.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-18
- Method: Public internet research (nvidia.com, sourceforge.net, kie.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
