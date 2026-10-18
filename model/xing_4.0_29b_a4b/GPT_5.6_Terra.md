# Xing 4.0 29B-A4B - findings by GPT 5.6 Terra

- Source: China Telecom/Xing4.0-29B-A4B
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom Artificial Intelligence Technology's Apache-2.0 open-weight successor to TeleChat, optimized for engineering agents and Ascend deployment. Its upstream release names OpenCode among its targeted agent-framework integrations, matching `opencode/xing_4.0_29b_a4b`.
- **Provider / access:** Self-hosted OpenAI-compatible API via vLLM, SGLang, or KTransformers; OpenCode route `opencode/xing_4.0_29b_a4b`; upstream weights `XingChen-AGI/Xing4.0-29B-A4B`.
- **Release / knowledge:** 2026-09-17 open-weight release; no vendor knowledge cutoff was found in the reviewed sources.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B`; OpenCode `opencode/xing_4.0_29b_a4b`.
- **Context window:** 256K native, extensible to 512K with YaRN (China Telecom model card).
- **Modalities:** Text input/output; reasoning, structured tool calling, and an OpenAI-compatible chat API. No image, audio, video, or non-text output is documented.
- **Pricing (as of 2026-10-18):** Apache 2.0 open weights and a free promotional OpenCode Zen tier; self-hosting has no vendor token price.
- **Architecture:** 29B total / 4B active MoE with 64 routed experts, 4 active experts per token, MLA, mHC, and MTP; trained on Ascend NPUs with MindSpore.

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench: **64.63%**; Claw-Eval: **76.55%**; DeepresearchBII: **60.80%** (China Telecom vendor model card: https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B/raw/main/README.md).
- Terminal-Bench 2.1: **57.50%** (three-run average, Terminus 2 harness) (China Telecom vendor model card).

Reasoning / knowledge:

- AIME 2026: **90.00%**; IFBench: **69.67%**; AA-LCR: **61.00%** (China Telecom vendor model card).
- No independently published exact-model GPQA, HLE, or composite intelligence index was found in the reviewed sources.

Coding:

- SWE-bench Verified: **75.00%**; SWE-bench Multilingual: **66.00%**; Terminal-Bench 2.1: **57.50%** (China Telecom vendor model card).
- The vendor used a SWE-agent harness at 210K context for SWE-bench and a three-run Terminus 2.1 setup for Terminal-Bench.

Long context:

- AA-LCR: **61.00%** (vendor model card); no exact 256K or 512K retrieval benchmark was found.

### Normalized scores (1-100)

- **Tool use: 78/100.** Claw-Eval (76.55%) and Tau3-Bench (64.63%) show strong published agent performance, while Terminal-Bench 2.1 (57.50%) and DeepresearchBII (60.80%) cap the score.
- **Reasoning: 73/100.** AIME 2026 (90.00%), IFBench (69.67%), and AA-LCR (61.00%) are solid, but the absence of independently reported GPQA, HLE, and composite intelligence results prevents a higher score.
- **Context window: 75/100.** The verified 256K native context sits in the 200K-500K tier; AA-LCR 61.00% supports a mid-tier score rather than a near-limit retrieval claim.
- **Multimodal: 15/100.** The documented model is text input/output only.
- **Coding: 78/100.** SWE-bench Verified (75.00%) and Multilingual (66.00%) are strong, but Terminal-Bench 2.1 (57.50%) and limited independent coverage cap the score.
- **Cost efficiency: 98/100.** Apache 2.0 self-hosting and the promotional free route are highly cost-efficient, subject to hardware and promo availability.
- **Overall Score: 64/100.** `(78 + 73 + 75 + 15 + 78) / 5 = 63.8`, rounded half-up; a strong open text-only agent option, with vendor-reported benchmark claims needing future independent replication.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-18
- Method: China Telecom's upstream Hugging Face/GitHub model card and technical report; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
