# Qwen 3.5 397B — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397b
- **Short description:** Alibaba's flagship open-weights 397B/17B active MoE with hybrid linear-attention and sparse-MoE architecture for advanced reasoning and agents.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`, Apache 2.0); hosted via OpenRouter (`qwen/qwen3.5-397b-a17b`) and OpenCode Zen (`opencode/qwen-3.5-397b`).
- **Release / knowledge:** Released February 2026; knowledge cutoff current.
- **IDs:** `qwen/qwen3.5-397b-a17b`
- **Context window:** 262,144 tokens native (extensible to ~1M via YaRN RoPE; verified via Alibaba documentation).
- **Modalities:** Text input, image input, video input; text output; tool calling and reasoning.
- **Pricing (as of 2026-10-10):** ~$0.39 input / $2.34 output per 1M tokens on API providers; open weights free (Apache 2.0).
- **Architecture:** Hybrid Gated DeltaNet linear attention + sparse MoE, 397B total / 17B active parameters by Alibaba.

### Raw benchmarks found

- Terminal-Bench 2.1: **52.5%** <(Alibaba technical report, 2026)>
- Tau3-Banking / Tau2-Bench: **86.7%** <(TAU2-Bench evaluation suite)>
- GPQA Diamond: **88.4%** <(Alibaba evaluation report)>
- SWE-bench Verified: **76.4%** <(SWE-bench official leaderboard, October 2026)>
- RULER 256K window: **94.0% retrieval accuracy** <(Alibaba technical documentation)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional tool calling and benchmark results across BFCL and Tau2-Bench (86.7%).
- **Reasoning: 90/100.** Top-tier reasoning capabilities on GPQA Diamond (88.4%) and MMLU-Pro.
- **Context window: 93/100.** Native 256K context with high retrieval accuracy (RULER 94.0%).
- **Multimodal: 85/100.** Strong native vision-language and OCR integration.
- **Coding: 89/100.** Outstanding coding performance on SWE-bench Verified (76.4%).
- **Cost efficiency: 88/100.** Highly cost-effective API pricing and open weights (Apache 2.0).
- **Overall Score: 89.0/100.** Best-fit recommendation: Premier open-weights MoE reasoning and coding powerhouse.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Alibaba technical documentation. SWE-bench Verified 76.4% and GPQA Diamond 88.4% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Alibaba technical documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
