# Gemini 4 Argon — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 4 Argon
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Gemini 4 Argon.
- **Short description:** Frontier reasoning model for extended engineering and professional workflows.
- **Provider / access:** Invited Fairwind testers; wider paid API and Ultra rollout announced, not general availability.
- **Release / knowledge:** Announced September 30, 2026; cutoff unverified.
- **IDs:** Public API identifier and Free Zen ID not verified; do not infer an endpoint from the display name.
- **Context window:** AA lists 1M context. Google separately announces 1M maximum output; final API input/output budgeting remains unverified. [AA specification](https://artificialanalysis.ai/models/gemini-4-argon/).
- **Modalities:** Text/image and demonstrated video/document understanding; text output. Reasoning and agent workflows demonstrated; public JSON/tool API contract and audio support unverified.
- **Pricing (as of 2026-10-03):** Announced introductory $2 input / $10 output / $0.10 cached input per million; subsequent $4/$20. Not a free offering.
- **Architecture:** Proprietary; parameter counts undisclosed. Access and announced specifications: [Google announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/).

### Original October 3 evidence

Preserved for comparison. Original AA numeric snapshots are historical unless explicitly reverified below. Missing-data statements describe the original search and are superseded by the refresh.

Agent / tool use:

- AA High: GDPval-AA v2.1 **1611 Elo**, AA-Briefcase v1.1 **1494**, AutomationBench-AA **78%**, Terminal-Bench 4.0 **57%**. [Independent comparison](https://artificialanalysis.ai/models/comparisons/gemini-4-argon-vs-gemini-3-8-flash).
- Google reports AutomationBench **51.3%**; different harness from AA. [Announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/).
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found.

Reasoning / knowledge:

- AA Index v4.3.2 **53**, HLE **57%**, CritPt **27%**, AA-Omniscience **42 index points**, GDP.pdf **22%**. Same [AA table](https://artificialanalysis.ai/models/comparisons/gemini-4-argon-vs-gemini-3-8-flash); Omniscience is not accuracy or hallucination rate.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found in reviewed sources.

Coding:

- SciCode **62%** in AA; Google reports DeepSWE v1.1 **77.9%**, CWE-bench v1 **68%**. Sources above.
- SWE-bench Verified/Pro, LiveCodeBench and Vibe Code Bench: no verified public score found in accessible source text.

Long context:

- AA-LCR v1.1 **80%**, same AA table; not evidence of near-perfect million-token retrieval. Google reports LVBench video understanding **91.7%**.

### October 9 refresh

- Vibe Code Bench v1.1, OpenHands: **91.91%**, **$8.11/test**. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)

The September 30 announcement still describes rollout through Fairwind and a wider release to follow. No authenticated endpoint was tested, and no public API ID or confirmed general-availability announcement was located in this refresh. The published introductory pricing remains an announcement, not an offer verified for this account. [Google announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)

### Comparison and remaining gaps

All ratings remain unchanged; independent app-building evidence supports the existing Coding 95 rather than automatically increasing it. Overall: **93 → 93**. The original six ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost) were 91, 94, 95, 88, 95, 74. New evidence coverage is not proof of improvement since October 3. Vals is app building, not Vibe1-100; Scale V2 is not original SWE-Pro or SWE-bench Verified. Harnesses, reasoning effort and benchmark versions remain separate.

The Vals page is dated October 7; its recorded task costs need not use current promotional pricing. Original price claims remain October 3 snapshots unless stated otherwise above; no price-rating change is inferred. Exact-ID hallucination rates, unreported tool suites and full-window retrieval gaps remain unresolved.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong automation and terminal results support capable agents; lower GDPval/Briefcase performance caps professional breadth.
- **Reasoning: 94/100.** HLE and CritPt are strong, while Index 53 uses a newer suite than historical methodology anchors.
- **Context window: 95/100.** Reported 1M context meets the size tier; full-window retrieval and API budgeting remain uncertain.
- **Multimodal: 88/100.** Strong long-video/document understanding is demonstrated; audio and native nontext output remain unverified.
- **Coding: 95/100.** DeepSWE and SciCode support frontier coding, with restricted-access evaluation limiting deployment confidence.
- **Cost efficiency: 74/100.** Introductory $2/$10 is competitive for this capability; the announced doubling reduces durable value.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions = 92.6, rounded to 93; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
