# Mercury 2.5 — findings by Qwen 3.8 Flash

- Source: Inception Labs (`inception/mercury-2.5`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception Labs' flagship **diffusion LLM (dLLM)** — a bidirectional denoising Transformer that decodes token blocks in parallel, reaching a **verified >1,100 tok/s** (peak 1,107 measured on ARMES with NVIDIA enterprise GPUs) — **the fastest production text model measured in its class**. Doubles Mercury 2's context to 260K. But capability depth lags the throughput story hard: **AA Intelligence Index 12.3** sits below the frontier 60+ reference and even below the mid band; Inception has **not published external standardized frontier evaluations** (no GPQA, no HLE, no TB, no τ², no SWE‑V, no GDPval). Positioning: ultra‑high‑throughput, latency‑critical text pipelines where reasoning depth is unnecessary.
- **Provider / access:** OpenRouter (`inception/mercury-2.5`); **ARMES** (Inception's Zero‑Data‑Retention routing, free plan tier). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released September 2026 (Vals AI registry lists 2026‑09‑08).
- **IDs:** `inception/mercury-2.5` (OpenRouter / ARMES).
- **Context window:** **260,000 tokens** (ARMES docs; twice Mercury 2's 128K). Curated `meta.json` says "128K total" — placeholder, corrected here.
- **Modalities:** **Text in / text out** (diffusion text model — "real‑time voice agents" positioning refers to latency suitability, not audio input). Native parallel tool calling; tunable test‑time reasoning tokens; deterministic JSON / schema structured output.
- **Pricing (as of 2026‑10‑02):** OpenRouter $0.04 / $0.15 per MTok (input/output, ARMES docs); ARMES direct $0.20 / $0.75 per MTok. Extremely cheap either way. Cost excluded from Overall.
- **Architecture:** Dense diffusion Transformer (dLLM), proprietary. Vendor‑claimed +40% internal reasoning delta vs Mercury 2 (internal harness, not external).

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (ARMES model docs incl. verified throughput + AA Intelligence Index; Vals AI registry; BenchLM value ranking). **Confidence is low: the only standardized quality number is AA Intelligence Index 12.3.** Most scores below are provisional pending external benchmark publication.

Reasoning / knowledge:

- **AA Intelligence Index: 12.3** (ARMES docs) — far below the frontier 60+ reference and below the 20–35 mid band
- Internal reasoning delta vs Mercury 2: **+40%** (vendor‑internal harness, provisional)
- GPQA / HLE / CritPt / Omniscience / LCR: **no verified public score found** (Inception has not published external standardized frontier evaluations)

Agent / tool use / coding:

- Terminal‑Bench / τ³ / GDPval‑AA / Claw‑Eval / SWE‑bench Verified / LiveCodeBench / SciCode: **no verified public score found**
- BenchLM ranks Mercury 2.5 **#2 on cost‑adjusted coding value** (score not extracted — a value rank, not a raw capability number)
- Native parallel tool calling + JSON/schema enforcement are structural facts

Speed: **1,107 tok/s peak / >1,100 sustained** (ARMES‑verified).

Long context:

- 260K window documented; **no retrieval benchmark published** (no MRCR / RULER / LCR row)

Multimodal:

- Text‑only in and out.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's Overall 46 is the evidence‑rich floor; cohort 51.5 (only 2 qualifying raters) is inflated by the speed/value story. **Speed and cost‑value are not quality dims under v4** — they inform Cost, not Overall.

- **Tool use: 50/100.** Native parallel tool calling and JSON enforcement structurally suit high‑fanout agent loops. But no TB / τ³ / GDPval / MCP‑Atlas numbers published — this is a mid‑band provisional score with a real capability‑unmeasured caveat. Kimi 55; −5 for zero evidence.
- **Reasoning: 42/100.** **AA Intelligence Index 12.3 is the only measured quality signal and it sits below even the mid band (20–35 → 55–65)**; the +40% vendor delta vs Mercury 2 is internal harness only. No GPQA / HLE / CritPt / Omniscience evidence at all. Kimi 42 (correct); cohort 55 reputation‑inflated by the dLLM novelty story. Match Kimi at 42.
- **Context window: 68/100.** 260K = v4 200K–500K band (65–84), 200K anchor = 70. Slight discount for zero measured retrieval evidence. Kimi 70; cohort 71.5. Close to the honest band anchor.
- **Multimodal: 12/100.** **Text‑in / text‑out**; the "real‑time voice agents" positioning refers to latency fit, not audio input. Kimi 15; cohort 15 (both correct). Scored 12 at strict text‑only floor.
- **Coding: 48/100.** BenchLM #2 on **cost‑adjusted** coding value is a *value* rank, not a raw capability score — the "cheap + fast + enough coding" combination can rank high on cost‑adjusted lists without the model itself being a strong coder. **No SWE‑V / LCB / SciCode numbers published.** Kimi 50; −2 for the value‑vs‑capability distinction. Provisional.
- **Cost efficiency: 98/100.** $0.04 / $0.15 per MTok + 1,107 tok/s throughput is genuinely the cheapest speed‑first option measured. Cost excluded from Overall.
- **Overall Score: 44/100.** Mean of Tool 50, Reasoning 42, Context 68, Multimodal 12, Coding 48 = 220/5 = 44.0 → **44**. Best fit: **ultra‑high‑throughput, latency‑critical text pipelines** — real‑time agents, structured extraction at scale, high‑fanout tool loops — where frontier reasoning is unnecessary. **Not** for serious reasoning, repo‑scale coding, or knowledge work. Kimi 46 (near match); cohort 51.5 (inflated by the diffusion / speed novelty). The throughput story is legitimate, but the evidence base for actual capability is very thin — AA Index 12.3 alone tells a stark story.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` public research (ARMES model docs, Vals AI registry, BenchLM value ranking). Curated `meta.json` is a placeholder template — corrected 128K → **260K** per ARMES docs. Flagged: (a) **speed and cost‑value are not Overall dims under v4** — >1,100 tok/s and BenchLM #2 cost‑adjusted coding placement inform Cost, not the quality mean; (b) **AA Intelligence Index 12.3 is the only external standardized quality measurement** — everything else is vendor‑internal or unpublished; (c) confidence on Tool / Coding is low because Inception has not published external evals. This is an honest provisional scoring against an evidence vacuum.
- Revisit trigger: when Inception publishes an external eval card (GPQA / SWE‑V / TB / GDPval), or when Vals AI adds Mercury 2.5 to their public suite.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
