# Mercury 2.5 — findings by DeepSeek 4.1 Flash

- Source: Inception / Mercury 2.5 (`inception/mercury-2.5`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against the official Inception launch post (2026-09-08), BenchLM (`mercury-2-5`, updated 2026-10-12), Vals AI (`inception_mercury-2.5`), LMMarketCap (`inception-mercury-2-5`) and Benchable (`inception/mercury-2.5-20260908`). The official card and pricing are confirmed unchanged; the benchmark picture is now populated by three independent harnesses (Artificial Analysis via BenchLM, Vals AI, Benchable) whose numbers diverge sharply — surfaced under conflicts below. No dimension changes are supported beyond a small Reasoning adjustment from new GPQA-D evidence.

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's latest diffusion LLM (dLLM) — it refines multiple tokens in parallel instead of generating sequentially, reaching 1,107 tokens/s on standard NVIDIA GPUs. Inception says it is "the largest diffusion language model ever trained," positioned as the fastest reasoning LLM for latency-compounding production workloads (search agents, voice pipelines, coding sub-agents). — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5
- **Provider / access:** Inception API, Baseten and OpenRouter (OpenAI-compatible); supports tunable reasoning, parallel tool calls and schema-aligned JSON output. Not open weights (Vals AI: "Weights Private"; no Hugging Face listing). — https://www.vals.ai/models/inception_mercury-2.5
- **Release / knowledge:** Released 2026-09-08; knowledge cutoff not published. — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5
- **IDs:** `mercury-2.5` (Inception/OpenRouter, `inception/mercury-2.5`); Vals endpoint `inception/mercury-2.5`; OpenCode Zen tracks it as `opencode/mercury-2.5`. No Zen Free ID.
- **Context window:** 260,000 tokens; **65,536 max output**. — https://benchlm.ai/models/mercury-2-5
- **Modalities:** text in / text out (no image/audio/video/file input documented — Vals AI marks Image/Video/File input "not supported"). Reasoning yes (tunable levels), tool use, structured outputs.
- **Pricing (as of 2026-10-11):** launch promo **$0.04 / $0.15 per 1M** in/out (cache read $0.004), 80% off the list **$0.20 / $0.75** per 1M. Inception publishes the $0.20/$0.75 list rate. — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5
- **Architecture:** diffusion large language model (dLLM), discrete-diffusion parallel decoding. Parameter count not published. — https://blog.buildfastwithai.com/mercury-2-5-ai-model-review

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **96.0%** (vendor launch chart, relayed by BenchLM) — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5 · https://benchlm.ai/models/mercury-2-5
- Terminal-Bench 2.1: **34.5%** (Vals leaderboard, relayed by BenchLM) — https://www.vals.ai/models/inception_mercury-2.5
- DeepSearchQA: **34.0%** (vendor launch chart) — https://benchlm.ai/models/mercury-2-5
- GDPval-AA: **0.0%** (Artificial Analysis, via BenchLM) — https://benchlm.ai/models/mercury-2-5
- Vals AI agentic suites (independent): Terminal-Bench 4.0 **0.00%**, Vibe Code Bench v1.1 **3.68%**, Code Migration **4.52%**, SkillsBench **18.06%**, Finance Agent v2 **18.89%**, Tax Agent Bench **2.49%**, Harvey's Legal Agent **0.00%**, Vals Index **8.86%** (#47 of 47) — https://www.vals.ai/models/inception_mercury-2.5
- Parallel tool calls are supported (product capability, no benchmark); Console/Claw/MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (vendor launch chart) — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5
- AA-LCR: **68.0%** (vendor launch chart, relayed by BenchLM) — https://benchlm.ai/models/mercury-2-5
- HLE: **11.8%**; Artificial Analysis Intelligence Index: **12.3**; CritPt: **0.0%** (AA via BenchLM) — https://benchlm.ai/models/mercury-2-5
- AA-Omniscience: Accuracy **22.0%** / Hallucination Rate **67.0%** / Index **−39.5%** (vendor + AA via BenchLM) — https://benchlm.ai/models/mercury-2-5
- IFBench: **77%** (vendor launch chart) — https://benchlm.ai/models/mercury-2-5
- No MRCR/RULER/GraphWalks retrieval score — **no verified public score found**.

Coding:

- SciCode: **38%** (vendor); AA-SciCode: **38.5%** (AA via BenchLM) — https://benchlm.ai/models/mercury-2-5
- Vibe Code Bench v1.1: **3.68%**; Code Migration: **4.52%**; Terminal-Bench 4.0: **0.00%**; IOI: **2.44%** (Vals AI, independent) — https://www.vals.ai/models/inception_mercury-2.5
- SWE-bench Verified / DeepSWE / LiveCodeBench / SWE-Atlas: **no verified public score found**.

Long context:

- 260K-token window documented; AA-LCR **68.0%** is decent for the class but is a reasoning composite; no MRCR/RULER/GraphWalks retrieval score — **no verified public score found**.

Multimodal:

- Text-in / text-out only (Vals AI: image, video and file input "not supported") — **https://www.vals.ai/models/inception_mercury-2.5**

### Normalized scores (1–100)

- **Tool use: 50/100.** A vendor τ³-bench of 96.0% is striking, but it is contradicted by GDPval-AA 0.0%, Terminal-Bench 2.1 34.5% (below the mid-band 45–60% reference) and Vals' near-zero agentic results — tool use stays unproven and mid-banded. — https://benchlm.ai/models/mercury-2-5 · https://www.vals.ai/models/inception_mercury-2.5
- **Reasoning: 60/100.** New GPQA-D **79.0%** is solidly mid-band and AA-LCR 68.0% is good, offset by HLE 11.8%, CritPt 0.0% and Intelligence Index 12.3 (below mid) — nudged up from 58 on the GPQA-D evidence. — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5 · https://benchlm.ai/models/mercury-2-5
- **Context window: 74/100.** 260K tokens sits in the 200K–500K band (200K = 70, between 70 and 85). — https://benchlm.ai/models/mercury-2-5
- **Multimodal: 15/100.** Text-in / text-out only.
- **Coding: 62/100.** SciCode 38% / AA-SciCode 38.5% are mid; very low Vals Vibe Code (3.68%) and no SWE-bench/Terminal-Bench success confirm the "coding sub-agent" positioning is speed- not capability-led, capping it in the mid band. — https://benchlm.ai/models/mercury-2-5 · https://www.vals.ai/models/inception_mercury-2.5
- **Cost efficiency: 99/100.** $0.04 / $0.15 per 1M (cache $0.004) at launch is among the cheapest evaluated tiers (list $0.20/$0.75 still cheap), with dLLM throughput lowering effective cost further. — https://www.inceptionlabs.ai/blog/introducing-mercury-2-5
- **Overall Score: 52/100.** (50 + 60 + 74 + 15 + 62) / 5 = 52.2 → 52. Best fit: latency-critical, high-volume text tasks and routing/sub-agent work where raw intelligence is secondary to speed and price.

**Conflicts surfaced (do not merge silently):** Benchable reports Coding **98.0%** and Mathematics **98.0%** (and Reasoning 96.0%), which is irreconcilable with official SciCode 38%, AA-LCR 68%, Vals Vibe Code 3.68% and IOI 2.44% — treat Benchable's figures as a divergent harness outlier. Benchable also lists Instruction Following (Baseline) 0.0% while BenchLM's IFBench is 77%. Aggregate trackers disagree on the composite: BenchLM **36.09/100** (#152/891) vs LMMarketCap **40/100** (#234/438). The prior report's AA-LCR 71.7% and AA-Omniscience 22.7%/19.7% have been superseded by the trackers' current 68.0% and 22.0%/67.0% hallucination. — https://benchable.ai/models/inception/mercury-2.5-20260908 · https://benchlm.ai/models/mercury-2-5 · https://lmmarketcap.com/model/inception-mercury-2-5

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (official Inception launch post; BenchLM, Vals AI, LMMarketCap and Benchable trackers; OpenRouter model page and its Artificial Analysis table); scores are normalized 1–100 interpretations, not official vendor scores; Tool use and Coding flagged where no matching benchmark exists.
- Future sources: add a new file next to this one, e.g. `Mercury_3.md`, using the same headings.
