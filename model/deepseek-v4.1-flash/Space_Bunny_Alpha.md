# DeepSeek V4.1 Flash — findings by Space Bunny Alpha

- Source: DeepSeek (`deepseek-v4.1-flash`; reasoning/max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's fast, low-cost, open-weight multimodal reasoning model for coding, tool use, and million-token agent workloads.
- **Provider / access:** DeepSeek API (`deepseek-flash` is the current model name; legacy `deepseek-v4.1-flash` is used by providers); OpenAI- and Anthropic-compatible endpoints. Hugging Face weights: `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Release / knowledge:** Hugging Face metadata shows repository creation on 2026-09-10; no reliable knowledge cutoff was shown.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash`; API route `deepseek-flash`; legacy `deepseek-v4.1-flash`.
- **Context window:** 1M tokens; **384K maximum output** (DeepSeek API Models & Pricing page, verified 2026-09-24).
- **Modalities:** Text and image input; text output; vision supported; both thinking and non-thinking modes; JSON output, tool calls, Responses API, Anthropic API, and chat prefix completion supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** Off-peak $0.15 per 1M cache-miss input and $0.60 output; peak $0.30 input and $1.20 output. Cache-hit input is $0.003 off-peak / $0.006 peak. Peak hours are 01:00–04:00 and 06:00–10:00 UTC on weekdays, excluding Chinese public holidays.
- **Architecture:** Open-weights MoE, approximately 552B total parameters and 16B active; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek V4.1 Flash model-card eval metadata, provider-exact)
- Toolathlon: **54.8%** (BenchLM, provider-exact DeepSeek V4.1 Flash model card)
- HLE with tools: **63.9%** (BenchLM, provider-exact DeepSeek V4.1 Flash model card)
- Agents' Last Exam: **31.8%**; CyberGym: **88.1%** (BenchLM, provider-exact model-card sources)
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek V4.1 Flash Hugging Face model-card eval metadata)
- GPQA Graduate-Level: **90.9%** (BenchLM, provider-exact model-card source)
- HLE with tools: **63.9%**
- Artificial Analysis Intelligence Index: **39/100**, rank **#7/113** (Artificial Analysis, accessed 2026-09-24)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- DeepSWE: **74.2%** (DeepSeek V4.1 Flash model-card eval metadata; DeepSWE v1.1, official mini-swe-agent harness)
- Terminal-Bench 2.1: **90.6%**
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No independent retrieval-at-length result for this exact model was found. DeepSeek API verifies a 1M-token context and 384K maximum output.

Sources consulted: [DeepSeek V4.1 Flash Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing), [Artificial Analysis DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash), and [BenchLM DeepSeek V4.1 Flash](https://benchlm.ai/models/deepseek-v4-1-flash), accessed 2026-09-24. Benchmark harness and configuration labels are retained.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 90.6%, Toolathlon 54.8%, and explicit tool-call support provide strong agent evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 91/100.** GPQA 90.9%, HLE with tools 63.9%, and AA Index 39 support strong reasoning; missing LCR/CritPt values prevent a higher score.
- **Context window: 98/100.** The 1M context and 384K output limit are officially verified; no exact-model retrieval-at-length result was found.
- **Multimodal: 65/100.** DeepSeek explicitly verifies text/image input with text output and vision support; audio/video are not listed.
- **Coding: 93/100.** DeepSWE 74.2% and Terminal-Bench 90.6% are strong direct coding-agent measurements; exact SWE-bench, LiveCodeBench, and SciCode values are missing.
- **Cost efficiency: 98/100.** Off-peak $0.15/$0.60 and peak $0.30/$1.20 are exceptionally inexpensive for a 1M-context multimodal model; provider routes can differ.
- **Overall Score: 88.4/100.** (95 + 91 + 98 + 65 + 93) / 5 = 88.4. Best fit: fast, low-cost multimodal coding agents and long-context workflows.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of DeepSeek's official API documentation and Hugging Face model card, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
