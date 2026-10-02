# Mercury 2.5 — findings by GLM 5.3 Flash

- Source: Inception (`inception/mercury-2.5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's most capable production diffusion LLM (dLLM) — generates and refines tokens in parallel instead of sequentially, targeting latency-sensitive workloads (search agents, voice agents, coding subagents). Flag: a 40%-intelligence step-up over Mercury 2; sibling models Mercury 2.5 Preview, Mercury Voice, Mercury Router.
- **Provider / access:** Inception API (`mercury-2.5`), Baseten, and OpenRouter (`inception/mercury-2.5`); chat at chat.inceptionlabs.ai; API comes with 100 million free tokens. Enterprise deployments support dedicated capacity, autoscaling, compliance controls, configurable data retention. Chat Completions-style API.
- **Release / knowledge:** Released 2026-09-08 (Inception product feed; BenchLM corroborates); knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-2.5` (no Free ID on OpenCode Zen found — 100M free tokens via Inception API instead)
- **Context window:** 260K tokens total (official blog + BenchLM); input/max-output split not published.
- **Modalities:** text in; text out; reasoning yes (tunable); tool calls yes (parallel tool calls); schema-aligned JSON mode. Text-only — no image/video/audio input (Mercury Voice is a separate model).
- **Pricing (as of 2026-10-02):** $0.20 / $0.75 per 1M (in/out); at launch 80% off at $0.04 / $0.15 per 1M. Paid with a 100M-token free trial via the Inception API.
- **Architecture:** Diffusion LLM (dLLM) — parallel token generation and refinement; "largest diffusion language model ever trained" (to Inception's knowledge); proprietary; served on widely-available NVIDIA GPUs.

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **96.0%** (Inception launch chart — frontier-class on the Tau3 tool-bench family)
- Terminal-Bench 2.1 (Vals): **34.1%** (Vals AI Terminal-Bench 2.1 leaderboard, independent)
- GDPval-AA: **0.0%** (Artificial Analysis model benchmarks / BenchLM — likely not served or pending; treat as no verified data)
- Claw-Eval: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- DeepSearchQA: **34.0%** (Inception launch chart)

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Inception launch chart)
- HLE: **11.8%** (Artificial Analysis)
- LCR: **68.0%** (Inception launch chart)
- CritPt: **0.0%** (Artificial Analysis / BenchLM — treat as no verified data)
- Artificial Analysis Intelligence Index: **12.3** (AA model benchmarks)
- AA-Omniscience Accuracy / Hallucination Rate: **22.0% / 67.0%** (Inception launch chart — high hallucination rate)
- AA-Omniscience Index: **-39.5** (Artificial Analysis)

Coding:

- SciCode: **38%** (Inception launch chart)
- AA-SciCode: **38.5%** (Artificial Analysis)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Instruction following:

- IFBench: **77%** (Inception launch chart)

Speed / cost in production:

- **1,107 tokens/sec** on widely-available NVIDIA GPUs (official blog)
- OpenCall voice agents: median model response latency ~170 ms; P99 dropped from several minutes to 1 s, P50 from 0.4 s to under 0.2 s (customer quote)
- Augment Code: compaction latency cut 82% (~150 s → 27 s), cost cut 90% at maintained quality; tool-search summaries return in under 1 s (customer quote)
- BenchLM overall: **35.18/100, #148 of 783** (partial coverage — conservative)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ³-bench 96.0% (vendor launch chart) hits the Tau3 frontier ref and parallel tool calls are native, but independent Vals Terminal-Bench 2.1 (34.1%) and the absent/zero GDPval-AA row cap it well below the 90–100 frontier band.
- **Reasoning: 62/100.** GPQA Diamond 79% (upper mid band) and LCR 68% are solid, but AA-HLE 11.8%, AA Index 12.3 and a 67% omniscience hallucination rate — plus DeepSearchQA 34% — hold it in the mid band.
- **Context window: 74/100.** 260K tokens lands in the 200K–500K tier (65–84); LCR 68% shows usable long-context reasoning but no MRCR/RULER retrieval measurement at window length to push higher.
- **Multimodal: 15/100.** Text-only in/out (no image/video/audio input; voice is a separate Mercury Voice model).
- **Coding: 58/100.** SciCode 38%/38.5% sits below the 40% mid-band ref and Vals TB2.1 34.1% is mid-low; no SWE-bench/LiveCodeBench numbers exist — below-mid band. Its real coding value is subagent support calls (compaction, tool search), not primary code generation.
- **Cost efficiency: 94/100.** $0.20/$0.75 per 1M list (launch promo $0.04/$0.15 at 80% off) plus a 100M-token free trial — near the top of the inverse-pricing rubric; production evidence shows 90% cost reductions at maintained quality on subagent workloads.
- **Overall Score: 56/100.** Mean of the five quality dims (72+62+74+15+58)/5 = 56.2 → 56. Best fit: latency-critical supporting calls in search, voice, and coding-agent pipelines (routing, compaction, reranking, tool search) where 1,107 tok/s and $0.20/$0.75 dominate; not the pick for primary planning, deep reasoning, or code generation.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-02
- Method: public internet research (Inception launch post, BenchLM, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
