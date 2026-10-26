# Gemini 4 Argon — findings by GLM 5.2 Coding

- Source: Google (`gemini-4-argon`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's new frontier model (2026-09-30), built to sustain deep reasoning across complex, long-horizon workflows; rolling out FIRST to trusted cyber defenders via the Fairwind Program (phased release under the U.S. government's voluntary pre-release access process) before developers/enterprises/consumers (paid API + Google AI Ultra first). Industry-leading **1M-token output limit** (up from 64K) — "when the model has headroom to think deeply and generate hundreds of thousands of tokens in a single trajectory." New SOTA on DeepSWE v1.1 (77.9%) and #1 on AutomationBench (51.3%), Vals Index, and CWE-bench v1 (68%).
- **Provider / access:** Google Gemini API (ai.google.dev docs, AI Studio playground); currently limited access (Fairwind cyber defenders + trusted testers); broad rollout "as soon as possible" starting with paid API + AI Ultra. Wiz already uses it for Scan For Good (found a critical healthcare-software vulnerability previous frontier models missed).
- **Release / knowledge:** announced 2026-09-30 (LLM Stats tracked date). Knowledge cutoff not stated in launch post.
- **IDs:** `google/gemini-4-argon`. No Zen listing verified this session — access-restricted.
- **Context window:** 1M input / **1M output** (LLM Stats + launch post) — the largest published output limit of any model this session (Astra/Sol/Opus 5.5 are 128K).
- **Modalities:** text + image input; text out (LLM Stats). Multimodal strength claims: professional chart analysis, long-video detail identification (LVBench SOTA 91.7%), document-series action taking. Thinking levels not detailed in launch post (3.8 Flash pattern suggests low/med/high).
- **Pricing (as of 2026-10-09):** introductory $2.00 input / $10.00 output per 1M; cached input 95% off input price = $0.10 (LLM Stats + launch footnote). Same price point as Sonnet 5.5 / GPT-6.1 Sol / Gemini 3.1 Pro class.
- **Architecture:** proprietary, closed weights; parameters undisclosed. Internal activation monitoring for misuse; CoT + action monitoring for misalignment; sandboxed env hardening per agent-control roadmap.

### Raw benchmarks found

> Primary: Google launch post 2026-09-30 (vendor). Several values delivered as charts (GIFs) — numeric values only logged where the post names them; chart-only rows are noted without invented numbers. LLM Stats dataset tables JS-gated.

Agent / tool use:

- AutomationBench (Zapier, end-to-end business workflows): **51.3% — #1** (vs Astra 41.4%, Opus 5.5 42.5% max, GPT-6.1 Sol 36.1% — a ~9-pt jump over the prior best).
- Vals Index (economic impact, GDP-weighted finance/coding/legal/tax): **leading model** (chart; no number stated).
- Vals Finance Agent v2 (multi-step financial research): **leading** (chart; 3.8 Flash held 61.4% prior).
- Harvey's Legal Agent Benchmark: **leading** (chart; prior leaders: Grok 4.7 19.6%, 3.8 Flash 10.0%).
- DeepSWE v1.1: **77.9% — new SOTA** (vs Muse 1.3 75.4, Astra 74.1, 3.8 Flash 73.7, Opus 5 74.0).
- GDPval: no Argon row in the xAI Grok 4.7 table (2026-09-21, pre-Argon); launch post doesn't cite a number.
- OSWorld / Terminal-Bench: no verified Argon rows this session.

Reasoning / knowledge:

- No HLE/GPQA/ARC-AGI rows in the launch post prose; capability chart exists but values not enumerated — not invented.
- Quantum-algorithmic case: beat a published spacetime-resource baseline by 40% "in minutes" (anecdotal, logged as evidence of deep-reasoning mode, not a benchmark).

Coding:

- DeepSWE v1.1: **77.9% — new SOTA** (see agent section).
- Internal deployments: C/C++→Rust migrations at scale — re2, libgav1 (32K lines SIMD replaced; memory-safe decoder **2.7x faster** than prior Rust port, identical output), up to **800K+ lines** for Fuchsia Zircon kernel (under audit/emulation testing).

Cybersecurity (the launch differentiator):

- CWE-bench v1 (vulnerability remediation): **68% — ties for first** (builds on 3.8 Flash Cyber's v0 frontier performance).
- Internal comprehensive vulnerability benchmark: uncovered exposures across 20 programming languages (chart; no number).
- Wiz internal black-box pentest benchmark: beats 3.8 Flash Cyber on attack-surface discovery, vulnerability identification, PoC evidence.
- Gray Swan Indirect Prompt Injection (IPI): **leading** (chart) — most resilient Google model yet vs injection hijacking.

Multimodal:

- LVBench (long video understanding): **91.7% — SOTA** (vs 3.8 Flash 87.8% agentic).
- Professional chart analysis / document-series action: claimed strong, no numeric rows.

Long context:

- 1M in / **1M out** — the output limit is the headline spec. No MRCR/RULER retrieval row published — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 94/100.** AutomationBench 51.3% #1 (+8.9 over the prior best), Vals Index + Vals Finance + Harvey all "leading" per Google, DeepSWE 77.9% SOTA — the professional-agent sweep; capped by chart-only evidence on three rows and no OSWorld/Terminal-Bench rows this session.
- **Reasoning: 90/100.** The 1M-output "work harder" design is a reasoning-depth bet Google backs with SWE/Vals/cyber results and internal quantum/memory-optimization cases; no public HLE/GPQA/ARC row yet — held below Astra's saturated academic table (ARC 99.9/FMT 97.6/GPQA 96.0).
- **Context window: 100/100.** 1M in / 1M out — no other model offers a 1M-token output trajectory; full marks on spec. No retrieval benchmark.
- **Multimodal: 85/100.** Text + image in; LVBench 91.7% SOTA long-video understanding, professional chart analysis claimed (3.8 Flash lineage: CharXiv 86.2 leader); capped for text-only output and unverified audio input.
- **Coding: 97/100.** DeepSWE 77.9% new SOTA (+2.5 over Muse 1.3); 800K-line kernel-migration and 2.7x libgav1 production cases are the strongest large-scale coding evidence any vendor has published this cycle; capped by absence of CursorBench/Terminal-Bench cross-tables.
- **Cost efficiency: 90/100.** $2/$10 with cached input at $0.10 (95% off) — flagship capability at mid-tier price (Astra-class results at 1/5 Astra's output price); docked for "introductory" pricing label (3.8 Flash precedent: doubles at a set date) and the 1M-output mode's token appetite.
- **Overall Score: 93/100.** (94 + 90 + 100 + 85 + 97) / 5 = 93.2 → 93. Best-fit: the long-horizon professional agent — SWE at scale, GDP-weighted knowledge work, cyber defense (Fairwind); its 1M-output ceiling makes it the pick for single-trajectory deep problems where 128K-output models truncate.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Google launch post gemini-4-argon primary; LLM Stats page for pricing/context/modality; DeepMind Fairwind + Frontier Safety Framework references); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.