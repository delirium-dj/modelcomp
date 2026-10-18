# Mercury 2.5 — findings by GLM 5.3 Flash

- Source: Inception (`inception/mercury-2.5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's most capable production diffusion LLM (dLLM) — generates and refines tokens in parallel instead of sequentially, targeting latency-sensitive workloads (search agents, voice agents, coding subagents). BenchLM ranks it #151 of 889 (36.35) with 15 of 625 rows. Flag: a 40%-intelligence step-up over Mercury 2.
- **Provider / access:** Inception API (`mercury-2.5`), Baseten, and OpenRouter (`inception/mercury-2.5`); chat at chat.inceptionlabs.ai; API comes with 100 million free tokens.
- **Release / knowledge:** Released 2026-09-08 (Inception product feed; BenchLM corroborates); knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-2.5` (no Free ID on OpenCode Zen — 100M free tokens via Inception API instead)
- **Context window:** 260K tokens total (BenchLM concurs); input/max-output split not published.
- **Modalities:** text in; text out; reasoning yes (tunable); tool calls yes (parallel tool calls); schema-aligned JSON mode. Text-only.
- **Pricing (as of 2026-10-11):** $0.20 / $0.75 per 1M (in/out); at launch 80% off at $0.04 / $0.15 per 1M. Paid with a 100M-token free trial via the Inception API.
- **Architecture:** Diffusion LLM (dLLM) — parallel token generation and refinement; proprietary; served on widely-available NVIDIA GPUs.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10, now computing 36.35 #151) corroborates every existing row identically — no new evidence. Scores are carried, not moved.

Agent / tool use:

- τ³-bench: **96.0%** (Inception launch chart — corroborated; frontier-class on the Tau3 tool-bench family)
- Terminal-Bench 2.1 (Vals): **34.5%** (Vals AI — corroborated; the prior pass read 34.1%, a minor percentile drift)
- GDPval-AA: **0.0%** (AA — corroborated; likely not served or pending)
- DeepSearchQA: **34.0%** (corroborated)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (corroborated); HLE: **11.8%** (AA — corroborated); LCR: **68.0%** (corroborated); CritPt: **0.0%** (corroborated)
- Artificial Analysis Intelligence Index: **12.3** (AA — corroborated)
- AA-Omniscience: **22.0% accuracy / 67.0% non-hallucination row / −39.5 index** (corroborated — high hallucination rate)

Coding:

- SciCode: **38% / 38.5%** (corroborated)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Instruction following:

- IFBench: **77%** (corroborated)

Speed / cost in production:

- **1,107 tokens/sec** on widely-available NVIDIA GPUs (official blog)
- OpenCall voice agents: median response latency ~170 ms; P99 dropped to 1 s (customer quote)
- Augment Code: compaction latency cut 82%, cost cut 90% at maintained quality (customer quote)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: full row-by-row corroboration, no new evidence.

- **Tool use: 72/100.** τ³-bench 96.0% (vendor launch chart) hits the Tau3 frontier ref and parallel tool calls are native, but independent Vals Terminal-Bench 2.1 (34.5%) and the absent/zero GDPval-AA row cap it well below the 90–100 frontier band.
- **Reasoning: 62/100.** GPQA Diamond 79% (upper mid band) and LCR 68% are solid, but AA-HLE 11.8%, AA Index 12.3 and a 67% omniscience hallucination rate — plus DeepSearchQA 34% — hold it in the mid band.
- **Context window: 74/100.** 260K tokens lands in the 200K–500K tier (65–84); LCR 68% shows usable long-context reasoning but no MRCR/RULER retrieval measurement at window length to push higher.
- **Multimodal: 15/100.** Text-only in/out (no image/video/audio input; voice is a separate Mercury Voice model).
- **Coding: 58/100.** SciCode 38%/38.5% sits below the 40% mid-band ref and Vals TB2.1 34.5% is mid-low; no SWE-bench/LiveCodeBench numbers exist. Its real coding value is subagent support calls (compaction, tool search), not primary code generation.
- **Cost efficiency: 94/100.** $0.20/$0.75 per 1M list (launch promo $0.04/$0.15 at 80% off) plus a 100M-token free trial — near the top of the inverse-pricing rubric; production evidence shows 90% cost reductions at maintained quality on subagent workloads.
- **Overall Score: 56.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (72 + 62 + 74 + 15 + 58) / 5 = 281/5 = 56.2 — unchanged. Best fit: latency-critical supporting calls in search, voice, and coding-agent pipelines (routing, compaction, reranking, tool search) where 1,107 tok/s and $0.20/$0.75 dominate; not the pick for primary planning, deep reasoning, or code generation.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (verification pass: the freshly fetched benchlm.ai Mercury 2.5 page corroborates all rows identically (now computing 36.35 #151); the prior 2026-10-02 pass on the Inception launch post/AA/Vals remains the evidence base; 2026-10-16 re-check: BenchLM 15-row refresh corroborates every row, no new data (rank #151/889 36.35 → #165/954 33.77) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
