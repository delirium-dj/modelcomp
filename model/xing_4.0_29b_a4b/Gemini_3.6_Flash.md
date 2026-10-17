# Xing 4.0 29B-A4B — findings by Gemini 3.6 Flash

- Source: China Telecom AI (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom AI's open-weights 29B total / 4B active Mixture-of-Experts model trained natively on Ascend NPU clusters for terminal agents, coding, and complex tool execution.
- **Provider / access:** Hugging Face open weights (`XingChen-AGI/Xing4.0-29B-A4B`), OpenCode Zen (`opencode/xing_4.0_29b_a4b`).
- **Release / knowledge:** September 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B`, `opencode/xing_4.0_29b_a4b`
- **Context window:** 256,000 tokens native (extensible to 512,000) — verified via Hugging Face model card.
- **Modalities:** text in; text out; reasoning yes (`enable_thinking` toggle); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** Apache 2.0 open weights (self-host free in ~15GB VRAM); free OpenCode Zen promotional tier.
- **Architecture:** 29B total / 4B active MoE (40 layers, 64 routed experts with 4 active + 1 shared) trained on Ascend 910C NPUs with MindSpore.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **76.55%**
- DeepresearchBII: **60.8%**
- Tau3-Bench: **64.63%**
- Terminal-Bench 2.1: **57.5%**

Reasoning / knowledge:

- AIME 2026: **90.0%**
- IFBench: **69.67%**
- AA-LCR: **61.0%**

Coding:

- SWE-bench Verified: **75.0%**
- SWE Multilingual: **66.0%**

Long context:

- 256,000 tokens native context window; AA-LCR 61.0%.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong agent execution for a 4B active model highlighted by 76.55% on Claw-Eval, 60.8% on DeepresearchBII, and 57.5% on Terminal-Bench 2.1.
- **Reasoning: 62/100.** Solid mathematical reasoning with 90.0% on AIME 2026 and 69.67% on IFBench.
- **Context window: 72/100.** Verified 256K native context window.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 75/100.** Excellent small MoE software engineering capability with 75.0% on SWE-bench Verified.
- **Cost efficiency: 95/100.** Free Apache 2.0 open weights running on consumer GPUs (~15GB VRAM) and free promotional Zen tier.
- **Overall Score: 59/100.** Leading lightweight open-weights agentic coding base model for local edge and low-resource deployment.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across Hugging Face model cards, China Telecom AI disclosures, and developer evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
