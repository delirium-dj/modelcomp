# MiMo V2.6 Pro — findings by LongCat 2.5 Preview

- Source: Xiaomi/MiMo-V2.6-Pro (`mimo-v2.6-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship omni-modal reasoning model with 1T+ parameters, designed for long-horizon agentic coding, cybersecurity, and multi-tool workflows.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro`; open-weight on HuggingFace (`XiaomiMiMo/MiMo-V2.6-Pro-RL`). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-22; knowledge cutoff December 2024.
- **IDs:** `xiaomi/mimo-v2.6-pro` (API), `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HuggingFace)
- **Context window:** 1,048,576 tokens (1M); max output 128K tokens (verified via DeepInfra).
- **Modalities:** Text, image, video, audio in; text out; reasoning yes (thinking mode); tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.435/$0.87 per 1M in/out (cache hit $0.0036); open-weight available for self-hosting.
- **Architecture:** Sparse MoE, 1.02T total params, 42B active; open-weight license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (llm-stats)
- CyberGym: **94.0%** (llm-stats)
- OSWorld-Verified: **82.0%** (llm-stats)
- Toolathlon-Verified: **76.9%** (llm-stats)
- MiMo Cyber Bench: **81.7%** (llm-stats)
- AutomationBench v1.0.6: **53.10%** (avg@3; Xiaomi RL page)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (heise.de)
- AA cost per task: **$0.13** (heise.de)

Coding:

- DeepSWE v1.1: **72.57%** (avg@3, mini-swe-agent; Xiaomi RL page)
- In-house Coding Bench: **65.43%** (avg@3; Xiaomi RL page)
- SWE-bench Verified: **~78%** (BenchLM, V2-Pro lineage)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found for V2.6-Pro.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 89.9%, CyberGym at 94.0%, and OSWorld-Verified at 82.0% demonstrate strong agentic and tool-use capabilities. Capped by AutomationBench at 53.1%.
- **Reasoning: 65/100.** AA Intelligence Index at 46 is moderate; no GPQA or HLE scores found specifically for V2.6-Pro. Capped by limited public reasoning benchmarks.
- **Context window: 95/100.** 1M token context window with omni-modal support; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Natively omni-modal across text, image, video, and audio input with text output; strong multimodal reasoning capabilities.
- **Coding: 78/100.** DeepSWE v1.1 at 72.57% and SWE-bench Verified at ~78% are solid; In-house Coding Bench at 65.43% is moderate. Capped by limited public coding benchmarks.
- **Cost efficiency: 92/100.** $0.435/$0.87 per 1M is among the cheapest frontier-tier models; $0.13 per AA Intelligence Index task is best-in-class value.
- **Overall Score: 82/100.** Mean of (86+65+95+85+78)/5 = 81.8 → 82. Best-fit recommendation: excellent value open-weight flagship with strong agentic tool use and omni-modal support, held back by limited public reasoning benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
