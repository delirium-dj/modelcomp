# Mercury 2.5 — findings by Kimi K3

- Source: Inception Labs (`inception/mercury-2.5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' flagship diffusion LLM (dLLM): bidirectional denoising Transformer decoding token blocks in parallel instead of left-to-right, reaching a verified >1,100 tok/s — the fastest production text model measured in its class. Doubles Mercury 2's context to 260K.
- **Provider / access:** OpenRouter (`inception/mercury-2.5`); ARMES (Zero-Data-Retention routing, free plan tier listed).
- **Release / knowledge:** Released September 2026 (Vals AI registry lists 2026-09-08).
- **IDs:** `inception/mercury-2.5` (OpenRouter/ARMES). No Free ID exists on OpenCode Zen (ARMES includes it on the free plan with ZDR).
- **Context window:** 260,000 tokens (ARMES docs; twice Mercury 2's 128K).
- **Modalities:** Text in/out (diffusion text model — "real-time voice agents" in positioning refers to latency suitability, not audio input). Native parallel tool calling, tunable test-time reasoning tokens, deterministic JSON/schema structured output.
- **Pricing (as of 2026-10-01):** OpenRouter $0.04 / $0.15 per MTok (input/output, quoted in ARMES docs); ARMES direct lists $0.20 / $0.75 per MTok. Extremely cheap either way.
- **Architecture:** Dense diffusion Transformer (dLLM), proprietary. Verified on ARMES: peak generation 1,107 tps on NVIDIA enterprise GPUs; vendor-reported +40% internal reasoning delta vs Mercury 2 (internal eval, not external); AA Intelligence Index **12.3**, Slop Index 21.1 (as listed by ARMES).

### Raw benchmarks found

Reasoning / knowledge:

- AA Intelligence Index: **12.3** (listed on ARMES model docs) — far below the frontier 60+ reference
- Internal reasoning delta vs Mercury 2: **+40%** (vendor-claimed, internal harness — provisional)

Agent / tool use / coding:

- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval / SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found** — ARMES explicitly notes Inception has not published external standardized frontier evaluations. BenchLM ranks Mercury 2.5 #2 on cost-adjusted coding value (score not extracted).

Speed: **1,107 tps** peak / >1,100 sustained (ARMES-verified).

Long context: 260K window documented; no retrieval benchmark published.

### Normalized scores (1–100)

> Confidence is low: the only standardized quality number is the AA Intelligence Index (12.3). Scores other than Cost are provisional.

- **Tool use: 55/100.** Native parallel tool calling and JSON enforcement suit high-fanout agent loops; no Terminal-Bench/Tau3/GDPval numbers published — mid-band provisional.
- **Reasoning: 42/100.** AA Intelligence Index 12.3 sits below even the mid band (20–35 → 55–65); +40% vs Mercury 2 is vendor-internal only.
- **Context window: 70/100.** 260K maps to the low 200K–500K band; no retrieval-depth data.
- **Multimodal: 15/100.** Text-only in and out (10–20 band).
- **Coding: 50/100.** #2 on BenchLM's cost-adjusted coding value list but no SWE-bench/LiveCodeBench score published; provisional pending external coding evals.
- **Cost efficiency: 97/100.** $0.04/$0.15 per MTok (OpenRouter) matches the ~$0.10/$0.20 → 97–99 reference with extreme >1,100 tps throughput; cheapest speed-first option measured.
- **Overall Score: 46/100.** Half-up mean of the five quality dims: (55 + 42 + 70 + 15 + 50) / 5 = 46.4 → 46. Best fit: ultra-high-throughput, latency-critical text pipelines (real-time agents, structured extraction at scale) where frontier intelligence is unnecessary; not for serious reasoning or repo-scale coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (ARMES model docs incl. verified throughput + AA Intelligence Index listing; Vals AI registry; BenchLM value ranking); scores are normalized 1–100 interpretations, mostly provisional pending external benchmark publication.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
