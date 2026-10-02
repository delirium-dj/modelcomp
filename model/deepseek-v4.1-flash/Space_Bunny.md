# DeepSeek V4.1 Flash — findings by Space Bunny Alpha

- Source: DeepSeek (`deepseek-v4.1-flash`; reasoning/max effort)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's fast, low-cost, open-weight multimodal reasoning model for coding, tool use, and million-token agent workloads.
- **Provider / access:** DeepSeek API (`deepseek-flash` is the current model name; legacy `deepseek-v4.1-flash` is used by providers); OpenAI- and Anthropic-compatible endpoints. Hugging Face weights: `deepseek-ai/DeepSeek-V4.1-Flash`. Available through 24 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-10 per Artificial Analysis; Hugging Face metadata shows repository creation on 2026-09-10. No reliable knowledge cutoff was shown.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash`; API route `deepseek-flash`; legacy `deepseek-v4.1-flash`.
- **Context window:** 1M tokens; **384K maximum output** (DeepSeek API Models & Pricing page, verified 2026-09-29). Artificial Analysis independently confirms 1M (~1500 A4 pages).
- **Modalities:** Text and image input; text output; vision supported; both thinking and non-thinking modes; JSON output, tool calls, Responses API, Anthropic API, and chat prefix completion supported. Audio/video are not listed.
- **Pricing (as of 2026-09-29):** Off-peak $0.15 per 1M cache-miss input and $0.60 output; peak $0.30 input and $1.20 output. Cache-hit input is $0.003 off-peak / $0.006 peak. Peak hours are 01:00–04:00 and 06:00–10:00 UTC on weekdays, excluding Chinese public holidays. Artificial Analysis quotes the blended peak rate ($0.30 in / $1.20 out) with a **98% cache discount** and $0.27 per Intelligence Index task.
- **Architecture:** Open-weights MoE, **552B total parameters and 16B active** (Artificial Analysis, re-verified 2026-09-29 — the 2026-09-24 report recorded these as "approximately" and only from DeepSeek sources). MIT license.
- **Lifecycle:** No deprecation, discontinuation, or successor notice found on 2026-09-29. Not flagged on Artificial Analysis.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek V4.1 Flash model-card eval metadata, provider-exact)
- Toolathlon: **54.8%** (BenchLM, provider-exact DeepSeek V4.1 Flash model card)
- HLE with tools: **63.9%** (BenchLM, provider-exact DeepSeek V4.1 Flash model card)
- Agents' Last Exam: **31.8%**; CyberGym: **88.1%** (BenchLM, provider-exact model-card sources)
- Artificial Analysis Intelligence Index v4.3.2: **39/100**, rank **#7/116** (Artificial Analysis, accessed 2026-09-29). Index unchanged; the 2026-09-24 report recorded rank **#7/113** — same position, larger field.
- Output speed: **217.0 tokens/s**; time to first token **1.05s** (Artificial Analysis, accessed 2026-09-29). **New this cycle** — no throughput was recorded on 2026-09-24. AA ranks speed **#4/116** and TTFT as very competitive against a 2.01s class median.
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek V4.1 Flash Hugging Face model-card eval metadata)
- GPQA Graduate-Level: **90.9%** (BenchLM, provider-exact model-card source)
- HLE with tools: **63.9%**
- Artificial Analysis Intelligence Index: **39** (v4.3.2, unchanged)
- Verbosity: **250M** output tokens on the Intelligence Index — AA classes this as "very verbose" versus a 140M median
- LCR/MLCR, CritPt, AA-Omniscience, and hallucination metrics: **no verified public exact value found**

Coding:

- DeepSWE: **74.2%** (DeepSeek V4.1 Flash model-card eval metadata; DeepSWE v1.1, official mini-swe-agent harness)
- Terminal-Bench 2.1: **90.6%**
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No independent retrieval-at-length result for this exact model was found. DeepSeek API verifies a 1M-token context and 384K maximum output, matched by Artificial Analysis.

Sources consulted: [DeepSeek V4.1 Flash Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), [DeepSeek API Models & Pricing](https://api-docs.deepseek.com/quick_start/pricing), [Artificial Analysis DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash), and [BenchLM DeepSeek V4.1 Flash](https://benchlm.ai/models/deepseek-v4-1-flash), accessed 2026-09-29. Benchmark harness and configuration labels are retained.

### Normalized scores (1–100)

- **Tool use: 95/100.** Unchanged. Terminal-Bench 90.6%, Toolathlon 54.8%, explicit tool-call support, and a max-effort AA Index of 39 at #7 provide strong agent evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 91/100.** Unchanged. GPQA 90.9%, HLE with tools 63.9%, and AA Index 39 support strong reasoning; missing LCR/CritPt values prevent a higher score.
- **Context window: 98/100.** Unchanged. The 1M context and 384K output limit are officially verified and independently confirmed; no exact-model retrieval-at-length result was found.
- **Multimodal: 65/100.** Unchanged. DeepSeek explicitly verifies text/image input with text output and vision support; audio/video are not listed.
- **Coding: 93/100.** Unchanged. DeepSWE 74.2% and Terminal-Bench 90.6% are strong direct coding-agent measurements; exact SWE-bench, LiveCodeBench, and SciCode values are missing.
- **Cost efficiency: 98/100.** Unchanged. Off-peak $0.15/$0.60 and peak $0.30/$1.20 are exceptionally inexpensive for a 1M-context multimodal model, at $0.27 per Intelligence Index task with a 98% cache discount; provider routes can differ. Note the 250M-token verbosity raises realized spend on long agentic runs even at this price.
- **Overall Score: 88.4/100.** (95 + 91 + 98 + 65 + 93) / 5 = 88.4. Overall is unchanged. The auditable deltas this cycle are newly recorded throughput (217.0 t/s, TTFT 1.05s, speed rank #4/116), rank restated as #7/116 (was #7/113) at an unchanged index of 39, a 98% cache discount figure, and parameter counts now confirmed as 552B/16B. Best fit: fast, low-cost multimodal coding agents and long-context workflows.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of DeepSeek's official API documentation and Hugging Face model card, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
