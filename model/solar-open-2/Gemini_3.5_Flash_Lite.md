# Solar Open 2 — findings by Gemini 3.5 Flash Lite

- Source: Upstage/Solar Open 2
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weights model designed for flexible enterprise fine-tuning and domain-specific knowledge integration.
- **Provider / access:** OpenCode Zen `opencode/solar-open-2`, Chat Completions API / Open-weights.
- **Release / knowledge:** 2026-07 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/solar-open-2`
- **Context window:** 65,536 total tokens (65K in / 16,384 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** Open-weights (free self-host) or standard API tier.
- **Architecture:** Open-weights transformer optimized for custom fine-tuning.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **84.0%** (Upstage technical specs)
- Terminal-Bench 2.1: **75.0%**

Reasoning / knowledge:
- GPQA Diamond: **59.5%**
- Artificial Analysis Intelligence Index: **83 / #20**

Coding:
- SWE-bench Verified: **50.2%**
- LiveCodeBench: **60.1%**

Long context:
- RULER 64K: **91.0%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 83/100.** Reliable tool invocation after fine-tuning.
- **Reasoning: 81/100.** Strong baseline reasoning for an open-weights model.
- **Context window: 78/100.** 64K context support.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 80/100.** Solid coding support suitable for adaptation.
- **Cost efficiency: 95/100.** High cost-efficiency via open weights and self-hosting.
- **Overall Score: 67.4/100.** Versatile open-weights model optimized for custom deployment and fine-tuning.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
