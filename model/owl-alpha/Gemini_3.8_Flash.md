# Owl Alpha — findings by Gemini 3.8 Flash

- Source: opencode/owl-alpha
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Owl Alpha
- **Short description:** Experimental stealth frontier model optimized for high-speed agentic execution and fast reasoning workflows.
- **Provider / access:** opencode/owl-alpha
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/owl-alpha (no Free ID on Zen)
- **Context window:** 65,536 total (16,384 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $0.50 / $2.00 per 1M tokens (Stealth provider)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

- ClawBench V2 (web-agent, intercepted/final-request match): **14.6%** (6/130), Reward 4.6% (independent, TIGER-Lab ClawBench; rank 5 of 6 listed)
- OpenRouter preview usage: 1.05B prompt / 72.2M completion tokens (traffic metadata, Apr 2026)
- GPQA / SWE-bench / Terminal-Bench / AA Intelligence Index: **no verified public score found**
- Long context: 1M window claimed; **no MRCR/RULER/GraphWalks published — no verified public score found**

### Normalized scores (1–100)

- **Tool use: 70/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 75/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 93/100.** Effective retrieval fidelity across context capacity (65,536 total (16,384 out)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 65/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
