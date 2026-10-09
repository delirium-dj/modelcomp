# Gemma 4 26B A4B — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemma-4-26B-A4B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights MoE (25.2B total / 3.8B active, Apache 2.0) with 256K context and image input; 4B-class speed with a large knowledge base — best for cheap high-throughput image+text agents.
- **Provider / access:** OpenCode Zen / OpenRouter `opencode/gemma-4.26b-a4b` (Chat Completions API)
- **Release / knowledge:** 2026-03-01; knowledge cutoff February 2026
- **IDs:** `opencode/gemma-4.26b-a4b`
- **Context window:** 256,000 tokens input, 8,192 tokens output (verified via Google release docs)
- **Modalities:** text, image in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** ~$0.09 in / $0.30 out per 1M tokens (paid tier / self-host $0)
- **Architecture:** Mixture of Experts (MoE), open weights (Apache 2.0)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **67.5%** (Google Gemma technical report)
- Tau3-Banking: **66.2%**

Reasoning / knowledge:
- GPQA Diamond: **38.4%** (Google benchmarks)
- Artificial Analysis Intelligence Index: **70.2 / #88**

Coding:
- SWE-bench Verified: **45.2%**
- LiveCodeBench: **42.5%**

Long context:
- RULER (256K window): 88.0% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 68/100.** Capable tool calling for lightweight open-weight MoE (Terminal-Bench 67.5%).
- **Reasoning: 68/100.** Moderate reasoning capability for 4B active model (GPQA 38.4%).
- **Context window: 88/100.** 256K context window with stable retrieval.
- **Multimodal: 80/100.** Image and text input support.
- **Coding: 46/100.** Basic coding assistance (SWE-bench 45.2%).
- **Cost efficiency: 95/100.** Extremely low cost at ~$0.09 / $0.30 per 1M tokens and open-weights availability.
- **Overall Score: 70/100.** Mean of the five quality dims (68, 68, 88, 80, 46 -> average 70.0); highly efficient open-weight vision model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
