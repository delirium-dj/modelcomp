# Leanstral 1.5 — findings by Qwen 3.8 Flash

- Source: Mistral AI **Leanstral 1.5** (curated id `mistral/leanstral-1.5`; HF `mistralai/Leanstral-1.5-119B-A6B`), from Mistral's launch post (`mistral.ai/news/leanstral-1-5`), Mistral Docs model page, and the Hugging Face model card
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** Leanstral 1.5 is a **real, documented, open-weights (Apache-2.0) specialist** — Mistral's Lean 4 formal-theorem-proving / autoformalization code agent, released **2026-07-02**. It is scored. This is a **domain-narrow model**: its verified strengths are formal mathematics and machine-verified code correctness, **not** general chat/coding breadth, and the normalized scores reflect that specialization (and the **text-only** modality floor).

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's **open-source code agent for Lean 4** — a "proof abundance" model that generates formal proofs, interacts with the Lean compiler/LSP for feedback, and iterates until proofs verify; also surfaces real bugs by specifiying and proving properties over Rust→Lean translated codebases.
- **Provider / access:** Hugging Face open weights `mistralai/Leanstral-1.5-119B-A6B` (**Apache-2.0**); free API endpoint `leanstral-1-5`; recommended in Mistral Vibe (`/leanstall`, `vibe --agent lean`, optional Lean-LSP MCP).
- **Release / knowledge:** **2026-07-02**; trained via mid-training → SFT → RL with **CISPO** across two RL environments (multi-turn Lean verifier; raw-filesystem code agent).
- **IDs:** `Leanstral-1.5-119B-A6B` (HF), `leanstral-1-5` (API).
- **Context window:** **~256K** (meta: 262,144 / 256K).
- **Modalities:** **text in / text out** (formal Lean + natural-language statements); reasoning/thinking model.
- **Pricing (as of 2026-10-30):** **free open weights ($0/$0 self-host)**; hosted **~$0.15 / $0.45** per 1M; ~**$4 per PutnamBench problem** vs $54–68 (Aleph Prover) / $300+ (Seed-Prover-1.5-high).
- **Architecture:** sparse MoE, **119B total / 6B active** (A6B).

### Raw benchmarks found

> **Provenance:** first-party Mistral evaluation (released with charts + FLTEval open-sourced); no Artificial Analysis / independent-UI row exists for this niche checkpoint, so domain-specific formal-math results are the evidence base.

- **miniF2F:** **saturated — 100%** on both validation and test.
- **PutnamBench:** **587 / 672** problems solved (edges Seed-Prover-1.5-high by 7 at far lower cost); test-time scaling climbs **44 → 244 → 493 → 587** as the per-attempt budget goes 50K → 200K → 1M → 4M tokens.
- **FATE-H / FATE-X (abstract algebra):** **new SOTA 87 / 34**.
- **FLTEval (real pull-request proof engineering):** pass@1 **21.9 → 28.9**, pass@8 **31.9 → 43.2**, surpassing Opus 4.6's 39.6 at ~1/7 the cost.
- **Code verification:** across 57 repositories, flagged 47 violated properties → 11 genuine bugs, **5 previously unreported** (e.g. a `varinteger` zigzag-decode overflow).

### Normalized scores (1–100)

- **Tool use: 70/100.** Genuinely agentic — edits files, runs bash, drives the Lean LSP/compiler, persists through 22+ context-compactions on long proofs — but the tool surface is **specific to the proof-engineering workflow**, not general function-calling breadth (no τ-bench/BFCL).
- **Reasoning: 84/100.** Elite, *verifiable* formal reasoning: miniF2F saturation, PutnamBench 587, FATE-H/X SOTA and monotone test-time scaling are frontier-grade — but scoped to symbolic math, so it does not certify broad open-world reasoning.
- **Context window: 74/100.** ~256K is generous and clearly exploited by the multi-million-token proof loops (2.7M-token AVL proof); docked vs the 1M flagships.
- **Multimodal: 15/100.** **Text-only** — floor per `RULES.md`.
- **Coding: 72/100.** Outstanding *formal* code work — Lean 4 development, correctness-spec synthesis, real bug-finding across Rust→Lean repos — but no general SWE-bench/LiveCodeBench software-engineering evidence; strong in its lane, narrow overall.
- **Cost efficiency: 96/100.** Free Apache-2.0 weights + a free API endpoint + ~$0.15/$0.45 hosted + ~$4/problem against $54–300 rivals — near-unbeatable economics.
- **Overall Score: 63/100.** Half-up mean of the five quality dims (70+84+74+15+72)/5 = 63.0 (Cost excluded). Best fit: **formal verification, theorem proving, and machine-checked code correctness** (and autoformalization research) where a free, self-hostable 6B-active specialist beats far costers. Not the pick for general chat, breadth coding, or multimodal work.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-30
- Method: public internet research — Mistral launch post (`mistral.ai/news/leanstral-1-5`: miniF2F 100%, PutnamBench 587/672, FATE-H/X 87/34, FLTEval 28.9@1 / 43.2@8, 5 bugs in 57 repos, CISPO RL, test-time-scaling table), Mistral Docs (`docs.mistral.ai/models/leanstral-1-5`: 119B/6B-active), and the Hugging Face card (Apache-2.0, Lean-4 code-agent). The curated `meta.json` matches first-party specs (119B/6.5B-A, 256K, free weights, ~$0.15/$0.45). No independent aggregator row was found; results are labeled first-party. Scores are normalized 1–100 interpretations of a **deliberately narrow specialist**; **Multimodal = 15** (text-only). Kept distinct from general Mistral chat lines.
- Revisit trigger: an independent (AA/vals-style) run, a Leanstral 2.0, or published general (non-formal) coding benchmarks that would let the Coding/Reasoning dims move beyond the proof lane.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
