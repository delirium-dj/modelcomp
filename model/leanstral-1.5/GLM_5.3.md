# Leanstral 1.5 — findings by GLM 5.3

- Source: Mistral AI (`opencode/leanstral-1.5`, HF `mistralai/Leanstral-1.5-119B-A6B`, API `leanstral-1-5`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral's open-source code agent for Lean 4 — the first open model specialized in the Lean proof assistant for formal mathematics and software verification; fine-tuned from the Mistral Small 4 family base (`mistralai/Leanstral-2603`). Successor to Leanstral 1.0 (2026-03-16).
- **Provider / access:** free Mistral API endpoint `leanstral-1-5` (Labs opt-in); Apache-2.0 weights on Hugging Face (self-host free via vLLM); recommended in Mistral Vibe with the lean-lsp-mcp tool.
- **Release / knowledge:** released 2026-07-02 (official announcement "Proof Abundance for All"; HF repo updated 2026-07-15).
- **IDs:** `leanstral-1-5` (Mistral API), `mistralai/Leanstral-1.5-119B-A6B` (HF); curated `opencode/leanstral-1.5`.
- **Context window:** 262,144 (256K) total; ≤200K recommended for serving (official card; vLLM recipe `--max-model-len 200000`, auto-compact threshold 168K). BenchLM lists 256K.
- **Modalities:** **text + image in; text out** (official HF card — corrects the curated meta's "text in; text out": image input is inherited from the Mistral Small 4 base). Reasoning effort `none`/`high`; tool calling (function calling, Mistral parser).
- **Pricing (as of 2026-10-23):** free API endpoint (Labs opt-in) and free Apache-2.0 weights; general Mistral Small-class hosting would run ~$0.15/$0.45 per 1M (curated note) — ≈97-98 on the cost ladder if the free lane closes.
- **Architecture:** 119B total / 6.5B active MoE (128 experts, 4 active per token); Apache-2.0; trained via mid-training + SFT + RL with CISPO across a multiturn prover-disprover environment (Lean compiler feedback loop) and a code-agent filesystem environment (bash, file edits, Lean language server, SafeVerify-verified).

### Raw benchmarks found

> All rows are from the official Mistral announcement (2026-07-02) — vendor-measured, with the evaluation setups disclosed. BenchLM has a tracker page but **0 of 705 rows** ("coming soon"), so no independent general-LM rows exist yet; domain rows below are the verified evidence.

Formal mathematics / reasoning:

- miniF2F: **100% — saturated** (both validation and test sets; cross-system formal-math benchmark)
- PutnamBench: **587/672 solved** at a 4M-token budget (test-time scaling curve: 44 @ 50K → 244 @ 200K → 493 @ 1M → 587 @ 4M Pass@8); ~**$4 per problem** vs Seed-Prover 1.5's estimated $300+; higher-ranked provers use natural-language guidance or cost $54-68/problem (Aleph Prover)
- FATE-H (graduate abstract algebra): **87% — new state of the art**
- FATE-X (PhD-level abstract algebra): **34% — new state of the art**

Proof engineering / coding:

- FLTEval (real PRs from the Fermat's Last Theorem repository, now open-sourced): pass@1 **28.9** (up from 21.9 in 1.0), pass@8 **43.2** (up from 31.9) — surpassing Claude Opus 4.6's 39.6 pass@8 **at one-seventh the cost**, and leading open-source models 3–10× larger
- Code verification: across 57 tested repositories, flagged 47 violated properties, **11 genuine bugs, 5 previously unreported on GitHub** (e.g., a U64 overflow in datrs/varinteger zigzag decoding that fuzzing missed)
- Long-horizon case study: complete AVL-tree O(log n) time-complexity proofs over **2.7M tokens and 22 context compactions**

Tool use (qualitative, no standardized rows):

- Agentic loop verified in training and case studies: bash, file editing, Lean LSP goal/error inspection, multi-round compiler-feedback refinement, MCP integration (lean-lsp-mcp). τ²/Terminal-Bench/Tau3: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Verified agentic behavior — filesystem + bash + LSP tool loops, compiler-feedback refinement across millions of tokens, MCP-native — but no standardized tool-use benchmark (τ²/TB/Tau3) exists; all evidence is vendor case-study rather than leaderboard.
- **Reasoning: 82/100.** Saturated miniF2F (100%), PutnamBench 587/672, and SOTA FATE-H 87% are elite formal-reasoning results; capped by the narrow domain (no GPQA/HLE-style general reasoning rows) and FATE-X 34% showing headroom at PhD level.
- **Context window: 72/100.** Verified 256K (200K recommended); demonstrated long-horizon stamina (2.7M tokens via 22 compactions) is exceptional, but the raw window sits in the 200K–500K band.
- **Multimodal: 60/100.** Text + image in (official card — meta corrected), text out; zero measured image rows, so the score sits at the bottom of the +image band.
- **Coding: 68/100.** FLTEval pass@8 43.2 beats Opus 4.6 at one-seventh cost and leads larger open models on real-world proof engineering; capped by the specialist scope — no SWE-bench/LiveCodeBench/general-coding rows exist.
- **Cost efficiency: 100/100.** Free API endpoint (Labs opt-in) plus Apache-2.0 free weights — $0 on the evaluated tier; even the general hosted rate (~$0.15/$0.45) would score ~97.
- **Overall Score: 70/100.** (70+82+72+60+68)/5 = 70.4 → 70. Best-fit recommendation: the open-weight state of the art for Lean 4 proof engineering and formal verification — near-saturated formal-math reasoning and real-repo bug discovery at ~$4/problem; not a general-purpose coding/chat model (no general-bench evidence outside its specialty).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-23
- Method: public internet research (official Mistral announcement "Leanstral 1.5: Proof Abundance for All", official Hugging Face model card, Mistral news archive, BenchLM tracker page, live Zen docs cross-check); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-measured domain rows are labelled; the curated meta's text-only modality claim is corrected to text+image per the official card.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
