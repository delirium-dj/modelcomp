# Qwen 3.8 — findings by Beam

- Source: Alibaba/Qwen 3.8, `alibaba/qwen-3.8`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's open-weight Qwen 3.8 (Jul 21, 2026): 2.4T params, open weights, preview available via Qwen Studio/Qwen Cloud. Claimed "second only to Claude Fable 5" performance. Preview version released; weights scheduled.
- **Provider / access:** Alibaba Cloud Model Studio; Qwen Studio (preview); Qwen Cloud token plan.
- **Release / knowledge:** Preview 2026-07-19; full release expected shortly after; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8`
- **Context window:** 1,000,000 tokens (per 3.8-Max); preview variant.
- **Modalities:** text, image in (preview supports SVG generation); text out; reasoning yes; tool calling (preview). Open weights (scheduled).
- **Pricing (as of 2026-10-17):** Not published for 3.8 (preview); paid tier via Qwen Cloud.
- **Architecture:** 2.4T params, MoE, open weights (scheduled).

### Raw benchmarks found

Agent / tool use:

- No verified public benchmark numbers for Qwen 3.8 (preview) in sources; Qwen team claims "second only to Claude Fable 5" performance without released benchmarks.
- Qwen 3.8-Max-Preview available on Qwen Studio; performance reportedly improving daily.

Reasoning / knowledge:

- No verified public benchmark numbers found.

Coding:

- No verified public benchmark numbers found (SVG animation demo only).

Long context:

- 1M context (per 3.8-Max); MRCR: not reported.

Multimodal:

- Preview supports text/image; SVG generation demo.

### Normalized scores (1–100)

- **Tool use: 60/100.** No verified benchmarks; provisional based on Qwen 3.8-Max preview claims (BenchLM Qwen3.8 Max 69.7 overall).
- **Reasoning: 62/100.** No verified benchmarks; provisional.
- **Context window: 85/100.** 1M window (per 3.8-Max); caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; provisional.
- **Coding: 62/100.** No verified benchmarks; provisional.
- **Cost efficiency: 70/100.** Pricing not published.
- **Overall Score: 69.4/100.** Provisional mean of five quality dims; based on Qwen 3.8-Max preview (BenchLM 69.7) pending verification. Treat as low-confidence.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (GIGAZINE, Alibaba, BenchLM Qwen3.8 Max); scores are normalized 1–100 interpretations, not official vendor scores. Qwen 3.8 (non-Max) has no verified public benchmarks; scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>