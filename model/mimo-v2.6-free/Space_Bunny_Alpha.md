# MiMo V2.6 Free — findings by Space Bunny Alpha

- Source: Xiaomi / OpenCode Zen (`mimo-v2.6-flash-free`; free route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free (MiMo-V2.6-Flash free route)
- **Short description:** OpenCode Zen's zero-token-price route to Xiaomi's natively multimodal MiMo-V2.6-Flash model, intended for long-context coding agents and automation.
- **Provider / access:** OpenCode Zen (`mimo-v2.6-flash-free`). The underlying model is Xiaomi `MiMo-V2.6-Flash-RL`, released/open-weighted in September 2026. Paid routes and the free route are not identical in limits or service terms.
- **Release / knowledge:** Xiaomi MiMo-V2.6 was released on 2026-09-22. No reliable knowledge cutoff was shown in the reviewed sources.
- **IDs:** `mimo-v2.6-flash-free`; underlying checkpoint `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Context window:** **200,000 input tokens; 32,000 output tokens** for the OpenCode Zen free route (Models.dev, accessed 2026-09-24). The paid Xiaomi/OpenCode route reports 1,048,576 input and 131,072 output tokens; those limits are not assigned to the free route.
- **Modalities:** Text, image, audio, and video input; text output. The OpenCode Data model listing explicitly reports the four input modalities. Reasoning and tool calling are enabled for the free route; structured output is not marked available by Models.dev.
- **Pricing (as of 2026-09-24):** **$0.00 per 1M input tokens and $0.00 per 1M output tokens** for the OpenCode Zen free route (Models.dev). This is a free service route, not a claim that paid-route capacity, limits, or support are identical.
- **Architecture:** Open-weight MoE, reported by OpenRouter as approximately 309B total and 15B active parameters; MIT license. Underlying checkpoint can be self-hosted, with hardware cost dependent on deployment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (Xiaomi MiMo-V2.6 technical report; provider-exact)
- Terminal-Bench 4.0: **28.80%** (Xiaomi MiMo-V2.6 technical report; different benchmark generation)
- OSWorld-Verified: **80.8%** (Xiaomi MiMo-V2.6 technical report)
- AutomationBench: **52.3%** (Xiaomi MiMo-V2.6 technical report)
- JobBench: **61.2%** (Xiaomi MiMo-V2.6 technical report)
- Toolathlon-Verified: **73.6%** (Xiaomi MiMo-V2.6 technical report)
- Agents' Last Exam: **27.6%**; CyberGym: **95.1%**; ExploitGym: **6.0%** (Xiaomi MiMo-V2.6 technical report)
- Exact GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas values: **no verified public score found**

Reasoning / knowledge:

- No exact GPQA, HLE, LCR/MLCR, CritPt, hallucination, or general AA Index value was found for the free route. The underlying model's Agents' Last Exam result was **27.6%**, but that is not a substitute for those benchmarks.

Coding:

- DeepSWE: **67.9%** (Xiaomi MiMo-V2.6 technical report)
- ProgramBench: **26.0%** (Xiaomi MiMo-V2.6 technical report)
- Terminal-Bench 2.1: **87.6%**
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public score found**

Long context:

- Free-route context capacity: **200K input / 32K output** (Models.dev).
- The paid underlying route reports **1M input / 131K output**, but no exact-model retrieval-at-length score was found in the reviewed sources.

Sources consulted: [OpenCode Data MiMo-V2.6-Flash](https://opencode.ai/data/xiaomi/mimo-v2-6-flash), [Models.dev MiMo-V2.6-Flash provider table](https://models.dev/models/xiaomi/mimo-v2.6-flash), [BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash), [OpenRouter MiMo-V2.6-Flash](https://openrouter.ai/xiaomi/mimo-v2.6-flash), and [XiaomiMiMo MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL), accessed 2026-09-24. Free-route limits are kept separate from paid-route limits.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%, Toolathlon-Verified 73.6%, and CyberGym 95.1% provide strong measured evidence; weaker Terminal-Bench 4.0 28.8% and ExploitGym 6.0% show substantial harness/task sensitivity.
- **Reasoning: 78/100.** Agents' Last Exam is 27.6% and the reviewed sources provide no exact GPQA/HLE/AA composite for the free route, so the score is deliberately moderate despite strong agent-task results.
- **Context window: 82/100.** The free route is verified at 200K input and 32K output, a useful long-context tier but below the paid route's 1M/131K capacity.
- **Multimodal: 92/100.** Text, image, audio, and video input are explicitly reported; output is text.
- **Coding: 78/100.** DeepSWE 67.9% and Terminal-Bench 2.1 87.6% support credible coding, while ProgramBench 26.0% and missing standard SWE/LiveCodeBench values limit confidence.
- **Cost efficiency: 100/100.** The OpenCode Zen route reports $0/$0 per 1M input/output tokens; availability, rate limits, and fair-use constraints must still be checked.
- **Overall Score: 83.6/100.** (88 + 78 + 82 + 92 + 78) / 5 = 83.6. Best fit: free, multimodal long-context coding experiments and low-cost agent prototyping, with paid routes preferred when higher context/output limits or dependable capacity matter.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode, Models.dev, BenchLM, OpenRouter, Xiaomi, and the underlying Hugging Face checkpoint; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
