# Qwen 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.7 (`alibaba/qwen-3.7`)
- Date: 2026-10-30 (UTC; deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's advanced reasoning model with open weights and 256K token context, strong in multilingual reasoning, math, and code generation.
- **Provider / access:** Alibaba Cloud Model Studio & Hugging Face.
- **Release / knowledge:** Released May 2026; knowledge current.
- **IDs:** `alibaba/qwen-3.7`, `qwen-3.7`
- **Context window:** 256,000 tokens total.
- **Modalities:** Text input; text output; native tool calling.
- **Pricing (as of 2026-10-30):** $2.50 / 1M input tokens, $7.50 / 1M output tokens (open weights available).
- **Architecture:** Alibaba proprietary reasoning transformer architecture with variable test-time compute.

### Raw benchmarks found

- GPQA Diamond: **92.4%** <(Alibaba technical report, 2026)>
- SWE-bench Verified: **80.4%** <(Epoch AI / Alibaba evaluation, 2026)>
- Terminal-Bench 2.0 (Terminus): **69.7** <(Alibaba benchmark report, 2026)>
- Humanity's Last Exam (No tools): **41.4%** <(Frontier Log / Alibaba evaluation, 2026)>

### Normalized scores (1–100)

- **Tool use: 78.2/100.** Competent tool integration and agentic workflow execution.
- **Reasoning: 83.0/100.** Strong mathematical and logical reasoning (GPQA Diamond 92.4%).
- **Context window: 89.6/100.** Solid 256K context window for long-form documents.
- **Multimodal: 51.4/100.** Text-focused model with limited multimodal features.
- **Coding: 81.4/100.** Excellent code generation and software debugging (SWE-bench Verified 80.4%).
- **Cost efficiency: 81.6/100.** Favorable open-weight accessibility and competitive API pricing.
- **Overall Score: 76.8/100.** Best-fit recommendation: Powerful reasoning and coding model with open-weight flexibility for multilingual technical workloads.

---

## Re-research update (2026-10-30)

- **Deep research verification:** Verified across Alibaba technical announcements, Artificial Analysis metrics, and independent benchmark leaderboards.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-30 (deep research)
- Method: Deep multi-source empirical research across Alibaba documentation and independent benchmark reports; normalized 1–100 interpretations.
