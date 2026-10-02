# Mercury 2.5 — findings by GLM 5.3

- Source: Inception (`inception/mercury-2.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's most capable production diffusion LLM (dLLM) — to the vendor's knowledge the largest diffusion language model ever trained. Quality tier "comparable to cost-optimized frontier models like GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, and Claude Haiku 4.5" at extreme speed; built for latency-critical plumbing: search/RAG calls, voice agents, and coding-subagent support tasks.
- **Provider / access:** Inception API (`https://api.inceptionlabs.ai`, docs.inceptionlabs.ai), Baseten, OpenRouter; 100 million free trial tokens. Not on OpenCode Zen.
- **Release / knowledge:** released September 2026 (official launch post; page last published 2026-10-01). Knowledge cutoff not published.
- **IDs:** `mercury-2.5` on the Inception API. No Zen ID.
- **Context window:** 260K tokens (official).
- **Modalities:** text in, text out; diffusion architecture (parallel multi-token generation); tunable reasoning; parallel tool calls; schema-aligned JSON.
- **Pricing (as of 2026-10-02):** $0.20 / $0.75 per MTok in/out standard; 80%-off launch pricing $0.04 / $0.15. Enterprise: dedicated capacity, configurable data retention.
- **Architecture:** proprietary diffusion language model — the first production result of a customer-feedback training loop over Mercury 2 failure cases; a 40% intelligence increase over Mercury 2; served on widely-available NVIDIA GPUs.

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **96.0%** (official launch chart) — top-tier structured tool work
- Terminal-Bench 2.1 (Vals): **34.1%** — weak long-horizon terminal agency
- GDPval-AA: **0.0%** normalized (AA via BenchLM) — no professional knowledge-work capability
- DeepSearchQA: **34.0%** (official launch chart)
- Claw-Eval / MCP Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (official launch chart)
- AA Intelligence Index: **12.3%**; AA-HLE: **11.8%** (AA via BenchLM)
- CritPt: **0.0%** (AA via BenchLM)
- Omniscience: accuracy **22.0%**, hallucination rate **67.0%**, index **-39.5%** (official launch chart + AA via BenchLM — poor honesty)
- AA-LCR: **68.0%** (official launch chart); IFBench: **77%**
- BenchLM composite: **35.18/100, #148 of 783** (15 of 645 benchmarks covered)

Coding:

- SciCode: **38%** (official launch chart; AA-SciCode 38.5%)
- SWE-bench Verified / LiveCodeBench: no verified public score found
- Production role: coding-subagent support — Augment Code uses Mercury for context compaction, model routing, and MCP tool search (82% latency cut, 90% cost cut on compaction, official customer evidence) — not for writing code

Long context:

- MRCR / RULER: no verified public score found (260K window, official)

Speed / latency (official production evidence):

- **1,107 tokens/second** on widely-available NVIDIA GPUs; OpenCall voice agents: median model response latency ~170 ms, P99 from minutes to 1 second

### Normalized scores (1–100)

- **Tool use: 55/100.** Extremely polarized: τ³-bench 96.0% (top-tier structured tool workflows, parallel tool calls, schema-aligned JSON) against Terminal-Bench 2.1 34.1% and GDPval-AA 0.0%. Diffusion speed makes it excellent at short, repetitive, structured tool calls and useless as a long-horizon agent. Capped by the terminal/professional-agent collapse.
- **Reasoning: 50/100.** GPQA Diamond 79.0% is respectable and LCR 68% passable, but HLE 11.8%, AA Intelligence Index 12.3%, CritPt 0.0%, and a 67% hallucination rate mark a shallow-reasoning, low-honesty profile. Capped by depth and truthfulness.
- **Context window: 70/100.** 260K tokens (official) sits in the 200K-500K band; no retrieval-quality rows exist, and the product's sweet spot is short interactions rather than deep-window work.
- **Multimodal: 15/100.** Text-only in and out (diffusion text model); no image/audio/video input. Text-only convention.
- **Coding: 42/100.** SciCode 38% and TB2.1 34.1% are weak, and no SWE-bench/LiveCodeBench rows exist; its real coding role is support plumbing (compaction, routing, tool search — verified in production at Augment Code), not code generation. Capped by absent direct code-writing evidence.
- **Cost efficiency: 97/100.** $0.20/$0.75 per MTok standard with an 80%-off launch price ($0.04/$0.15), 1,107 tok/s, and 100M free trial tokens — near the $0 = 100 ceiling; the cheapest tier in this pass on effective cost-per-task for short calls.
- **Overall Score: 46/100.** Half-up mean of the five quality dims: (55 + 50 + 70 + 15 + 42) / 5 = 46.4 → 46. An ultra-fast, near-free diffusion engine for latency-critical plumbing — search/RAG loops, voice, sub-agent support — never the reasoning or coding brain.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (Inception's official Mercury 2.5 launch post for pricing/specs/production evidence, BenchLM aggregator rows with sources — official launch chart, AA, Vals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
