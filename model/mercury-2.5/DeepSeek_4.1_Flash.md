# Mercury 2.5 — findings by DeepSeek 4.1 Flash

- Source: Inception / Mercury 2.5 (`inception/mercury-2.5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's latest diffusion LLM (dLLM) — it refines multiple tokens in parallel instead of generating sequentially, reaching ~1,107 tokens/s on standard GPUs. Positioned as the fastest reasoning LLM, for latency-compounding production workloads (search agents, voice pipelines, coding sub-agents).
- **Provider / access:** Inception (single provider route), OpenRouter — OpenAI-compatible; supports parallel tool calls and schema-aligned JSON output. Not open weights.
- **Release / knowledge:** Released 2026-09-08; knowledge cutoff not published.
- **IDs:** `mercury-2.5` (Inception/OpenRouter); OpenCode Zen tracks it as `opencode/mercury-2.5`. No Zen Free ID.
- **Context window:** 260,000 tokens (OpenRouter), **65,536 max output**.
- **Modalities:** text in / text out (no image/audio/video documented). Reasoning yes (tunable levels), tool use, structured outputs.
- **Pricing (as of 2026-10-01):** **$0.04 / $0.15 per 1M** in/out (cache read $0.004), currently listed 80% off the $0.20/$0.75 list price.
- **Architecture:** diffusion large language model (dLLM), discrete-diffusion parallel decoding. Parameter count not published.

### Raw benchmarks found

Agent / tool use (Artificial Analysis via OpenRouter):

- GDPval-AA: **0.0%** — the model registers no measurable work-product performance on this suite
- Parallel tool calls are supported (product capability, no benchmark); Console/Claw/MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12.3**; HLE: **11.8%**; AA-LCR: **71.7%**; CritPt: **0.0%**
- AA-Omniscience Accuracy **22.7%** / Non-Hallucination **19.7%**
- GPQA Diamond: **no verified public score found**

Coding:

- SciCode: **38.5%**; positioned for coding sub-agents (no SWE-bench/Terminal-Bench/LiveCodeBench number)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- 260K-token window documented; AA-LCR **71.7%** is strong for the class but is a reasoning composite; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 50/100.** GDPval-AA 0.0% and no agentic benchmark make its tool-use profile unproven despite parallel tool-call support — scored low-mid as a documented unknown.
- **Reasoning: 58/100.** AA-LCR 71.7% is good, but HLE 11.8%, CritPt 0.0% and an Intelligence Index of 12.3 place it in the low-mid band.
- **Context window: 74/100.** 260K tokens sits in the 200K–500K band (200K = 70, between 70 and 85).
- **Multimodal: 15/100.** Text-in / text-out only.
- **Coding: 62/100.** SciCode 38.5% is mid; no SWE-bench/Terminal-Bench confirms the "coding sub-agent" positioning, so it is capped in the mid band.
- **Cost efficiency: 99/100.** $0.04 / $0.15 per 1M (cache $0.004) is among the cheapest evaluated tiers, with the dLLM throughput lowering effective cost further.
- **Overall Score: 52/100.** (50 + 58 + 74 + 15 + 62) / 5 = 51.8 → 52. Best fit: latency-critical, high-volume text tasks and routing/sub-agent work where raw intelligence is secondary to speed and price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page with its Artificial Analysis table, Inception product descriptions); scores are normalized 1–100 interpretations, not official vendor scores; Tool use and Coding flagged where no matching benchmark exists.
- Future sources: add a new file next to this one, e.g. `Mercury_3.md`, using the same headings.