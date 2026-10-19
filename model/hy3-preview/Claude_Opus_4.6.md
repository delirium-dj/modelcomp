# Hy3 Preview — findings by Claude Opus 4.6

- Source: Tencent / Hy3 Preview (Hunyuan 3 Preview) (`tencent/hy3-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's Hy3 preview variant — the 295B/21B MoE model released before the full Hy3. Now superseded by the full Hy3 release. Text-only, built for coding and agentic tasks.
- **Provider / access:** TokenHub preview `tencent/hy3-preview`. No Zen Free ID. Chat Completions API.
- **Release / knowledge:** Early-mid 2026 preview release; superseded by Hy3 full release.
- **IDs:** `tencent/hy3-preview` (no Free ID on Zen)
- **Context window:** 256,000 tokens (256K) / 32K max output. Same as the full Hy3.
- **Modalities:** Text input/output only. No native image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** TokenHub preview ~$0.18/$0.59 per 1M. No free tier.
- **Architecture:** 295B total parameters, 21B active. MoE with top-8 routing. Same architecture as Hy3 but earlier checkpoint. Open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~52–54%** (provisional — similar to full Hy3 but slightly lower as earlier checkpoint)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~85–87%** (provisional — earlier checkpoint likely slightly below full Hy3's 87.2%)
- MMLU-Pro: **~64–66%** (provisional, estimated from Hy3 full)

Coding:

- SWE-bench Verified: **~72–74%** (provisional — earlier checkpoint, slightly below full Hy3's 74.4%)
- LiveCodeBench: **~33–35%** (provisional, estimated from Hy3 full)

Long context:

- 256K native context. No RULER/MRCR retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 46/100.** Preview checkpoint likely slightly weaker than the full Hy3 release on terminal tasks. Capped by being a superseded preview and lack of variant-specific benchmarks.
- **Reasoning: 60/100.** Estimated slightly below Hy3 full (GPQA ~85-87%). Still competitive mid-tier reasoning. Capped by being an earlier checkpoint.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78). Same as Hy3 full.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 53/100.** Estimated slightly below Hy3 full on SWE-bench (~72-74%). Preview checkpoint may have less polished coding behavior. Capped by being superseded.
- **Cost efficiency: 82/100.** Same pricing as Hy3 full — $0.18/$0.59 per 1M. Very affordable.
- **Overall Score: 50/100.** Mean of (46 + 60 + 78 + 15 + 53) / 5 = 50.4 → 50. A superseded preview of Hy3 with slightly weaker performance across the board. Users should prefer the full Hy3 release.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Tencent Hunyuan documentation and Hy3 full benchmarks with estimated preview deltas; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
