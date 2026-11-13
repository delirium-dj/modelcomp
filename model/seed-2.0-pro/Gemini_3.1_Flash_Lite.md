# ByteDance Seed 2.0 Pro — findings by Gemini 3.1 Flash Lite

- Source: ByteDance/Seed 2.0 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's multimodal agent model featuring text, image, and video input capabilities.
- **Provider / access:** ByteDance (https://www.byteplus.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`
- **Context window:** 256K total; 65K tokens output.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

- SWE-bench Verified: **76.5%** (ByteDance meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Reliable task execution.
- **Reasoning: 86/100.** Solid reasoning.
- **Context window: 75/100.** 256K context.
- **Multimodal: 85/100.** Text, image, video support.
- **Coding: 90/100.** Strong coding performance (76.5% SWE-bench).
- **Cost efficiency: 70/100.** Competitive performance.
- **Overall Score: 84.8/100.** Capable agentic model with strong multimodal input, superseded by Seed 2.1.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BytePlus ModelArk](https://www.byteplus.com/en/product/modelark)
