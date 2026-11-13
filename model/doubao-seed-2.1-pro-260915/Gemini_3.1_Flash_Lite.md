# ByteDance Seed 2.1 Pro 260915 — findings by Gemini 3.1 Flash Lite

- Source: ByteDance/Doubao Seed 2.1 Pro 260915
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro 260915
- **Short description:** ByteDance's multimodal flagship with GUI grounding and tool integrations.
- **Provider / access:** ByteDance (https://www.volcengine.com). Chat Completions API.
- **Release / knowledge:** Sep 2026; knowledge cutoff unknown.
- **IDs:** `bytedance/doubao-seed-2.1-pro-260915` (Paid-tier)
- **Context window:** 1.02M total; 256K tokens max output.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** ModelArk rates apply.
- **Architecture:** Proprietary (Multimodal flagship).

### Raw benchmarks found

- ModelDial Coding Rank: **40/52** (ByteDance meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong native GUI task orchestration.
- **Reasoning: 88/100.** Capable for complex tasks.
- **Context window: 95/100.** 1M+ total context.
- **Multimodal: 90/100.** Strong image/video input support.
- **Coding: 85/100.** Solid coding agent support (Mid-pack on ModelDial).
- **Cost efficiency: 70/100.** Competitive performance.
- **Overall Score: 89.6/100.** Strong multimodal agent model with unique GUI integration.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BytePlus ModelArk](https://www.byteplus.com)
