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

## Addendum — 2026-11-10 second pass (merged from a mis-stemmed twin file)

This reporter's 2026-11-10 research pass was initially saved under the wrong
filename `GPT_6.1_Astra.md` (wrong reporter stem); on user order the same day it
was merged here and the twin file deleted. Reporter: **GPT-6 Astra**
(`agentrouter/gpt-6-astra`). The main report above stays the operative one; only
this pass's new findings are listed.

### Model-card updates (2026-11-10 pass)

- Model card published 2026-10-13; **knowledge cutoff March 2026** (previously
  unverified). IDs: `google/gemini-4-argon`, stable code `gemini-4-argon`. [2]
- Context: unified input-plus-output limit **1,048,576** tokens; ordinary
  synchronous output 65,536; long decode up to 1,048,576 within the same shared
  budget. [1]
- Modalities: text/image/video/audio/PDF input, text output; thinking, function
  calling, structured output, code execution and computer use. No image/audio
  generation or Live API. [1]
- Pricing: $2/$10/$0.10 standard through November 30; **$4/$20/$0.20 from
  December 1**. Thinking is billed. No free tier; paid data not used for product
  improvement. Invite-only Contributor $1/$5 (permits product improvement);
  batch/flex $1/$5 during the promotion. [3]
- Current official documentation supersedes the main report's
  "public ID not verified" status.

### Raw benchmarks found (2026-11-10 pass)

All figures are Google's October model-card evaluations [2], versions retained.
Reconfirmed with matching values: AutomationBench 51.3%, DeepSWE v1.1 77.9%,
LVBench 91.7%, Vibe Code Bench ≈91.9%. New in this pass:

- **Vals Finance Agent v2: 65.4%; Agent's Last Exam: 39.5%; OSWorld 2.0 offline
  subset (partial): 69.2%.** [2]
- **Terminal-Bench 4.0: 57.4%** (vendor-precise; the main report's 57% was
  AA-displayed). [2]
- **Vals Index: 68.9%; LABBench 2: 88.8%; RiemannBench: 76.0%; Terminal-Bench
  Science 0.1: 57.6%.** [2]
- **FrontierSWE v2: 55.0%.** [2]
- **GraphWalks BFS F1: 99.7% up to 128K; 84.2% at 256K–1M** — the short-window
  result does not establish 98% retrieval at 512K+. [2]
- **Chartography: 71.6%** (multimodal). [2]
- No verified exact-model scores found this pass for tau2/tau3, GDPval-AA,
  Claw-Eval, MCP-Atlas, GPQA, HLE, CritPt, Omniscience, LiveCodeBench, SciCode.

### Normalized scores (2026-11-10 pass)

Second-pass scoring, same rubric: **Tool use 93**, **Reasoning 94**,
**Context window 96**, **Multimodal 95**, **Coding 97**, **Cost efficiency 73**,
**Overall 95** — mean (93 + 94 + 96 + 95 + 97) / 5 = 95. The main report's score
block above is the operative one; this block records the same-day independent
judgment for reference.

References (2026-11-10 pass):

- [A1 — API specifications](https://ai.google.dev/gemini-api/docs/models/gemini-4-argon)
- [A2 — Official model card and evaluation table](https://deepmind.google/models/model-cards/gemini-4-argon/)
- [A3 — Current pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-4-argon)

## Signature

- Provided by: **GPT-6 Astra (agentrouter/gpt-6-astra)** — 2026-11-10 (addendum above; merged from a mis-stemmed twin file on user order)
- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
