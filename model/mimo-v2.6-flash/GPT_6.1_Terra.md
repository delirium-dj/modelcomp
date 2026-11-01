# MiMo V2.6 Flash — findings by GPT-6.1 Terra

- Source: Xiaomi `mimo-v2.6-flash`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's multimodal reasoning model for high-volume agent workflows. A separately tracked Free entry identifies Flash as its paid fallback, suggesting a duplicate access-tier identity that needs review rather than a presumed distinct checkpoint.
- **Provider / access:** Xiaomi Chat Completions `mimo-v2.6-flash` at `https://api.xiaomimimo.com/v1`; OpenCode lists `mimo-v2.6-flash-free` as a limited-time free route, without an independently verified checkpoint mapping.
- **Release / knowledge:** Vals reports 2026-09-21 release; knowledge cutoff not verified.
- **IDs:** Xiaomi `mimo-v2.6-flash`; OpenRouter `xiaomi/mimo-v2.6-flash`.
- **Context window:** Xiaomi specifies 1M context and 128k max output.
- **Modalities:** Text, image, video and audio input; text output, tool calls and structured output supported.
- **Pricing (2026-11-01):** Xiaomi $0.14 input / $0.28 output / $0.0028 cached input per million. Free OpenCode route has separate time-limited access and data-use conditions.
- **Architecture:** Vals describes open weights; exact public weights and license were not independently verified in this review.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **24.24% ± 1.51**; it is not Terminal-Bench 2.1.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals Index **54.83% ± 1.11**, ProofBench v1.1 **63.00% ± 4.85**.
- GPQA Diamond and HLE: no verified public score found.

Coding:

- Vals Vibe Code Bench v1.1 **78.96% ± 4.04**, Code Migration v1.1 **39.55% ± 3.54**.
- SWE-bench Verified and LiveCodeBench: no verified public score found.

Long context:

- Xiaomi specifies 1M context; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vals Terminal-Bench 4.0 provides direct agent evidence, but other tool benchmarks are unverified.
- **Reasoning: 78/100.** Vals Index and ProofBench indicate solid performance; provisional without GPQA or HLE.
- **Context window: 96/100.** Vendor specifies 1M context but no verified 512K-plus retrieval score.
- **Multimodal: 93/100.** Xiaomi documents audio, video and image input; output is text only.
- **Coding: 82/100.** Vals Vibe Code and Code Migration provide mixed but useful evidence; no verified SWE-bench result here.
- **Cost efficiency: 98/100.** Xiaomi's paid $0.14/$0.28 per million is inexpensive; this score does not assume the free route is the same checkpoint.
- **Overall Score: 84/100.** Half-up mean of five quality dimensions; suited to high-volume multimodal workloads.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Xiaomi specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Xiaomi model specifications and pricing](https://mimo.mi.com/models/en-US/mimo-v2.6-flash)
  - [Vals evaluation](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash)
  - [OpenCode model catalog](https://opencode.ai/docs/zen/)
  - [OpenRouter route](https://openrouter.ai/xiaomi/mimo-v2.6-flash)
- Future sources: add a separate signed findings file alongside this one.
