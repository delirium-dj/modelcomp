# Leanstral 1.5 — findings by Ernie 5.5 Flash

- Source: Mistral AI/Leanstral 1.5 (`leanstral-1.5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's open-weights Lean 4 formal-proof engineering agent (released 2026-07-02) — 119B total / 6B active MoE that proves theorems, autoformalizes specs and verifies Rust code properties inside real repositories using the Lean toolchain as verifier. Not a general chat model.
- **Provider / access:** Open weights `mistralai/Leanstral-1.5-119B-A6B` on Hugging Face (Apache 2.0); free API endpoint `leanstral-1-5` on the Mistral platform; runs inside Mistral Vibe (`vibe --agent lean`) with the Lean LSP MCP server.
- **Release / knowledge:** 2026-07-02; knowledge cutoff not published.
- **IDs:** `leanstral-1.5`, `leanstral-1-5` (Mistral API), `mistralai/Leanstral-1.5-119B-A6B` (HF).
- **Context window:** 262,144 tokens (catalogue; max output 128,000).
- **Modalities:** text and image in; text out; agentic tool use (bash, file editing, Lean language server, MCP tools); reasoning-native.
- **Pricing (as of 2026-11-13):** $0 per token — Apache 2.0 weights and a free API endpoint.
- **Architecture:** MoE, 119B total / 6B active (Mistral Small 4 family lineage); trained with mid-training + SFT + CISPO RL in two environments (multiturn Lean-verifier loop and a raw-filesystem code-agent loop).

### Raw benchmarks found

> Mistral's own evaluation table from the Leanstral 1.5 release post (2026-07-02).

Agent / tool use:

- FLTEval (Fermat's Last Theorem repo PRs, agentic proof engineering): **pass@1 28.9** (up from 21.9), **pass@8 43.2** (vs Opus 4.6 pass@8 39.6) — at ~1/7 the cost
- Real-repo bug hunt (Aeneas Rust→Lean pipeline): **11 genuine bugs flagged across 57 repositories, 5 previously unreported** (e.g. varinteger zigzag sign overflow)
- Terminal-Bench / Tau2 / GDPval / Claw-Eval: no verified public score found (not applicable to this model class)

Reasoning / knowledge:

- miniF2F (formal math, cross-system): **100% validation and test — saturated**
- PutnamBench (672 competition problems): **587/672 solved** at 4M-token budget (44 @50k → 244 @200k → 493 @1M → 587 @4M, Pass@8 test-time scaling); beats Seed-Prover 1.5 high by 7 problems at ~$4/problem vs ~$300+
- FATE-H (graduate algebra): **87%** — state of the art
- FATE-X (PhD-level algebra): **34%** — state of the art
- GPQA / HLE / MMLU-Pro: no verified public score found

Coding:

- Code verification (AVL-tree O(log n) proof over 2.7M tokens, 22 compactions): verified, no score
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- 262,144 declared; the test-time-scaling runs consumed up to 4M tokens per problem via compaction, but no MRCR/RULER figure published.

### Normalized scores (1–100)

- **Tool use: 84/100.** The code-agent environment (bash, file edits, Lean LSP, MCP) with FLTEval pass@8 43.2 beating Opus 4.6 at 1/7 cost and 5 previously-unknown real bugs found is genuine agentic evidence. Capped by the domain narrowness (Lean-only harnesses).
- **Reasoning: 90/100.** miniF2F saturated (100%), PutnamBench 587/672 with monotone test-time scaling to 4M tokens, and SOTA on both FATE-H (87%) and FATE-X (34%) — frontier-class formal reasoning. Capped by the narrow domain: no general-science rows exist.
- **Context window: 88/100.** 262,144 native with demonstrated multi-million-token agentic runs via compaction — tier 200K–500K high band; no retrieval index at 256K.
- **Multimodal: 50/100.** Text + image in documented (Mistral Small 4 family multimodal base), but the model is trained and evaluated for Lean proof work only; no vision benchmark rows.
- **Coding: 80/100.** FLTEval and the Rust→Lean verification pipeline are real coding-agent results (pass@1 28.9, pass@8 43.2, 11 bugs found), but no SWE-bench/LiveCodeBench row exists and the coding is formal-verification-specific. Capped by the domain gap.
- **Cost efficiency: 100/100.** $0 — Apache 2.0 weights plus a free API endpoint.
- **Overall Score: 78.4/100.** Best fit for Lean 4 proof engineering, autoformalization and formal code verification inside agent harnesses; the single-domain evidence base keeps it out of the top band despite frontier formal-math numbers.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Mistral AI's Leanstral 1.5 release post and its evaluation section, Hugging Face model card, BenchmarkList/BenchLM catalogue checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Leanstral 1.5: Proof Abundance for All — Mistral AI](https://mistral.ai/news/leanstral-1-5/)
  - [mistralai/Leanstral-1.5-119B-A6B — Hugging Face](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)
  - [Leanstral 1.5 — BenchmarkList](https://benchmarklist.com/models/mistralai-leanstral-1.5-119b-a6b/)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.