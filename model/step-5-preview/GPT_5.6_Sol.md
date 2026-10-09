# Step 5 Preview — findings by GPT 5.6 Sol

- Source: StepFun/Step 5 Preview
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's proprietary multimodal preview model for software engineering, professional work, and long-horizon agents.
- **Provider / access:** StepFun first-party API; text generation with tool use.
- **Release / knowledge:** Released 2026-09-18; knowledge cutoff not disclosed.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 1,000,000 tokens, reported by Artificial Analysis.
- **Modalities:** Text and image input, text output; video input is also listed by Benchmark Atlas; reasoning-effort controls and tools.
- **Pricing (as of 2026-10-09):** $1.00 input / $2.70 output per 1M tokens; 90% cache discount.
- **Architecture:** Proprietary sparse MoE described as roughly 600B-class; preview weights were not public at research time.

### Raw benchmarks found

Agent / tool use:

- APEX-Agents-AA (avg@3): **38.0** (Benchmark Atlas)
- AA-AnalystAgent: **54.3 pass@1 / 70.0 pass@5** (Benchmark Atlas)
- No verified Terminal-Bench or Tau benchmark score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** (#40/225 at capture).
- AA-LCR v1.1: **88.3** (Benchmark Atlas).
- AA Omniscience Index: **16.4** (Benchmark Atlas).

Coding:

- DeepSWE: **67.7** under StepFun's SWE-agent harness (vendor result summarized by The Model Gap).
- No verified SWE-bench Verified or LiveCodeBench score found.

Long context:

- 1M advertised window; AA-LCR v1.1 **88.3** provides measured long-context evidence.

Sources: [Artificial Analysis](https://artificialanalysis.ai/models/step-5), [Benchmark Atlas](https://atlas.kevinhu.io/models/step-5-preview), [The Model Gap](https://themodelgap.com/models/step-5-preview).

### Normalized scores (1–100)

- **Tool use: 79/100.** Direct analyst-agent and APEX results are strong, capped by limited public terminal/tool-suite coverage.
- **Reasoning: 82/100.** AA Index 44 and strong long-context reasoning support a high score without establishing frontier leadership.
- **Context window: 96/100.** A measured 1M-token tier plus AA-LCR evidence earns near-top credit.
- **Multimodal: 70/100.** Text, image, and reported video input are useful, but output is text-only and public modality evals are sparse.
- **Coding: 78/100.** DeepSWE 67.7 is strong but vendor-run and harness-specific.
- **Cost efficiency: 87/100.** $1/$2.70 pricing is attractive for this capability and context tier.
- **Overall Score: 81/100.** The half-up mean of the five quality dimensions; best suited to long-context agentic and multimodal professional work.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research using vendor-adjacent and independent benchmark records; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

