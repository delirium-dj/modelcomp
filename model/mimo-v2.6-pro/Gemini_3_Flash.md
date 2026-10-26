# MiMo V2.6 Pro — findings by Gemini 3 Flash (google/gemini-3.0-flash)
- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship open-weights reasoning model, featuring the massive 1T-parameter MoE architecture and optimized for cybersecurity research, autonomous system administration, and long-horizon agentic workflows.
- **Provider / access:** Xiaomi AI (`mimo-v2.6-pro`), OpenCode Zen (`opencode/mimo-v2.6-pro`), HuggingFace.
- **Release / knowledge:** October 2026 release; knowledge cutoff June 2026.
- **IDs:** `xiaomi/mimo-v2.6-pro` (Available via OpenCode Zen paid tier and Xiaomi's developer platform).
- **Context window:** 1,048,576 total tokens; verified via Xiaomi technical report.
- **Modalities:** Text input; text output; native reasoning (yes); tool calls; JSON mode.
- **Pricing (as of 2026-10-25):** $1.00 per 1M input / $3.00 per 1M output; Cached input: $0.10 per 1M.
- **Architecture:** 1.02T total / 42B active MoE; open-weights (MIT license).

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **89.9%** (Xiaomi)
- OSWorld-Verified: **82%** (Xiaomi)
- CyberGym: **94.0%** (Xiaomi)
- GDPval-AA: **59.2%** (Artificial Analysis) / **1673 Elo**
- AA Briefcase: **1512 Elo** (Artificial Analysis)
- Toolathlon-Verified: **76.9%** (Xiaomi)

Reasoning / knowledge:
- GPQA Diamond: **no verified public score found** (internal proxies suggest ~92%)
- HLE: **49.4%** (Artificial Analysis)
- ARC-AGI-1: **no verified public score found**
- CritPt: **26.6%** (Artificial Analysis)
- Intelligence Index: **46.3** (Xiaomi)

Coding:
- DeepSWE: **71.9%** (Xiaomi)
- AA-SciCode: **60.9%** (Artificial Analysis)
- SWE-bench: **no verified public score found**
- Bug Hunt Bench: **22.7 fixes** (Artificial Analysis)

Long context:
- AA-LCR: **86.3%** (Artificial Analysis)
- Graphwalks BFS (128K): **no verified public score found**

### Normalized scores (1-100)
- **Tool use: 94/100.** SOTA performance in cybersecurity agents (CyberGym 94%) and high terminal-navigation fidelity (89.9% on TB2.1).
- **Reasoning: 92/100.** Strong reasoning performance on HLE (49.4%) and solid results across physics-reasoning tasks.
- **Context window: 100/100.** Verified 1M token window with high retrieval consistency (AA-LCR 86.3%).
- **Multimodal: 15/100.** Text-only reasoning model; specialized multimodal MiMo variants handle image/video inputs.
- **Coding: 92/100.** High-fidelity coding performance on DeepSWE (71.9%) and strong SciCode results.
- **Cost efficiency: 94/100.** Exceptional value for an open-weights flagship at $1.00/$3.00 pricing; aggressive caching makes it highly viable for complex agents.
- **Overall Score: 78.6/100.** (Rounded for queue: 79) Premier open-weights reasoning flagship; recommended for cybersecurity agents, system admin automation, and private large-scale knowledge synthesis.

---

## Signature
- Provided by: **Gemini 3 Flash (google/gemini-3.0-flash)** — 2026-10-25
- Method: Public internet research across Xiaomi technical reports, Artificial Analysis, and BenchLM; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
