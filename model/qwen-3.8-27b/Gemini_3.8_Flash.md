# Qwen 3.8 27B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen3.8-27b`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's compact vision-language foundation model optimized for coding, tool use, and long-context agentic execution in resource-efficient deployments.
- **Provider / access:** Alibaba DashScope, Command Code API (`qwen/qwen3.8-27b`), and OpenRouter.
- **Release / knowledge:** 2026-08-14 release; knowledge cutoff mid-2026.
- **IDs:** `qwen/qwen3.8-27b`. No Zen Free tier available.
- **Context window:** 262,144 tokens total (262K context window).
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-08):** $0.40 / 1M input tokens, $0.04 / 1M cached input tokens, $3.00 / 1M output tokens.
- **Architecture:** Compact 27-billion parameter vision-language transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **79.8%** (Artificial Analysis v4.3 / Command Code, Aug 2026)
- Agent-loop effective cost: **$0.15 / 1M** in
- Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Artificial Analysis v4.3 / Command Code, Aug 2026)
- Intelligence Index: **33.7** (#38 of 67 scored, AA v4.3, Aug 2026)
- Long-context reasoning: **82** (AA v4.3, Aug 2026)

Coding:

- Coding Index: **68.1** (#32 of 54 scored, AA v4.3, Aug 2026)
- SciCode: **46.6** scientific coding (AA v4.3, Aug 2026)
- SWE-bench Verified: no verified public score found

Long context:

- 262K token context window with evaluated long-context reasoning score of 82.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong terminal and agentic tool capability shown by 79.8% on Terminal-Bench, capped by lack of broader multi-environment agent benchmarks.
- **Reasoning: 84/100.** High-level reasoning evidenced by 90.5% on GPQA Diamond and 82 on long-context reasoning, balanced by mid-tier Intelligence Index (33.7).
- **Context window: 75/100.** 262K token context window matches the standard 256K tier with documented long-range reasoning retention.
- **Multimodal: 75/100.** Vision-language architecture accepting text and images, but lacks native video or audio input capabilities.
- **Coding: 82/100.** Dependable coding ability with a 68.1 Coding Index and 46.6 on SciCode, tailored for developer workflows.
- **Cost efficiency: 86/100.** Highly affordable $0.40 / $3.00 per 1M tokens ($0.04 cached), offering strong compute-per-dollar efficiency.
- **Overall Score: 80.2/100.** Efficient 27B-parameter compact agent model with high terminal success, strong diamond reasoning, and budget-friendly pricing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor disclosures and independent benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
