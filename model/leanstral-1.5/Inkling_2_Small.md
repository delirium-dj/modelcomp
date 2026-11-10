# Leanstral 1.5 — findings by Inkling 2 Small

- Source: Mistral (`leanstral-1.5`)
- Date: 2026-11-10 (UTC) — deep second pass 2026-11-10
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5 (mistralai/Leanstral-1.5-119B-A6B)
- **Short description:** Mistral's open-source formal-proof / code-verification specialist — an AI agent for Lean 4 theorem proving and verified program repair, built on the Mistral Small 4 family. 119B total / 6.5B active MoE, Apache 2.0, free API + open weights. NOT a general chat model. Now flagged Deprecated (2026-09-29) on Mistral's model lifecycle.
- **Provider / access:** Open weights on Hugging Face (`mistralai/Leanstral-1.5-119B-A6B`); free Labs API endpoint `leanstral-1-5` (docs.mistral.ai; deprecated 2026-09-29); Mistral Vibe CLI (`vibe --agent lean`); vLLM ≥0.24; lean-lsp-mcp (OATOP/official).
- **Release / knowledge:** Released 2026-06-30 (HN announcement; blog 2026-07-02); updated model of Leanstral-2603; knowledge cutoff not publicly stated.
- **IDs:** `labs-leanstral-1-5` (Mistral console); `mistralai/Leanstral-1.5-119B-A6B` (HF); `leanstral-1-5` (API)
- **Context window:** 256,000 tokens; max output 128,000 tokens (Mistral docs model card).
- **Modalities:** text + image in; text out; reasoning yes (`none`/`high` effort, high recommended); tool calls yes (Lean LSP MCP + Vibe harness; multiturn prover loop + code-agent environment).
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights — free; free Labs API (deprecated); self-host via vLLM. No paid tier (Mistral often grants hosted access free for Labs models).
- **Architecture:** MoE, 119B total / 6.5B active, 128 routed experts (4 active) + shared. Derived from Mistral Small 4 family; Leanstral-2603 lineage.

### Raw benchmarks found

Agent / tool use (domain):

- FLTEval (pass@1): **28.9%** (from 21.9); pass@8: **43.2%** — surpasses Claude Opus 4.6's **39.6%** at ~1/7 the cost (Mistral launch blog, 2026-07-02)
- Code-agent environment: raw-filesystem edits, bash, Lean LSP, 22-compaction runs up to 2.7M tokens/session (Mistral blog)
- OpenATP independent run (FATE-H subset, 2026-07-22): Leanstral 1.5 **9/10** in ~23:00 free (vs Claude Code 10/10 $2.05, Codex 9/10 $2.68) — comparable accuracy to Claude at zero marginal cost (HN-posted results, unreproduced elsewhere)

Reasoning / knowledge (formal mathematics):

- miniF2F: **100%** validation and test — saturated (Mistral blog)
- PutnamBench: **587 / 672** (87%) at the 4M-token budget; pass@8 vs attempt-budget scaling 44@50k → 244@200k → 493@1M → 587@4M (Mistral blog)
- FATE-H: **87%** (new SOTA); FATE-X: **34%** (new SOTA) (Mistral blog)
- AIProver (external paper, Oct 2026): Leanstral-1.5 base pass@4 semantic correctness **15.7%** → 36.7% after AIProver harness; confirms base-model capability in research-level autoformalization

Coding (verified code verification):

- Bug discovery across 57 OSS repositories: 47 flagged properties → 11 genuine bugs → 5 previously unreported (Mistral blog)
- No SWE-bench / LiveCodeBench rows published for this ID

Long context:

- 256K native; context compaction runs to **2.7M tokens in one task** (22 compactions on the AVL-tree proof) — long-horizon agentic behavior verified by demo; no RULER/MRCR row published

Multimodal:

- Text + image in (model card: Vibe UI image rendering); no verified public multimodal benchmark rows for this ID

### Normalized scores (1–100)

(Domain = formal verification / code verification; not general-purpose chat.)

- **Tool use: 65/100.** Verified agentic tool use in-domain: Lean LSP MCP + filesystem + bash multiturn loop (2.7M-token sessions, 22 compactions), OpenATP 9/10 FATE-H free. Off-domain tool-use evidence is absent.
- **Reasoning: 88/100.** PutnamBench 87.5% (587/672, budget 4M), miniF2F 100%, FATE-H 87% / FATE-X 34% — SOTA formal reasoning; test-time scaling is monotonic to 4M tokens. Off-domain reasoning unmeasured.
- **Context window: 78/100.** 256K window with 128K max output (docs); effective runs to 2.7M tokens via compaction; no retrieval-bench row published — scored on verified long-session evidence, capped by missing RULER/LCR.
- **Multimodal: 60/100.** Text + image in (charts/diagrams for proof work); zero measured multimodal rows — provisional.
- **Coding: 72/100.** The model's core: verified program repair and property inference (FLTEval 43.2 pass@8 beats Opus 4.6 39.6 at ~1/7 cost; 5 previously unknown OSS bugs found). No SWE-bench/LCB rows — scored on verified verification-adjacent coding, not general agentic coding.
- **Cost efficiency: 96/100.** Free Apache 2.0 weights + free Labs API (deprecated but still functional) — zero marginal cost; the efficiency claim vs Opus 4.6/Seed-Prover (~$4/problem vs ~$300) is vendor-cited and consistent with OpenATP's free score.
- **Overall Score: 73/100.** (65 + 88 + 78 + 60 + 72) / 5 = 72.6 → 73. Best fit: formal verification / Lean 4 proof engineering / verified-code work; not a general assistant — for general use pick a general model.

## Confirmation note (for this file)

Evidence supports a real scored report; this file supersedes the self-excluded verdict. Per the twin rule it retires its sibling `Inkling_2_Small.md.excluded` — deletion requires your explicit per-file confirmation.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC (deep second pass)
- Method: public internet research (Mistral launch blog 2026-07-02, Mistral docs model card, HF model card + API, HN announcement + OpenATP independent run, arXiv AIProver paper, BenchLM/llmbenchmark/OpenRouter absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Leanstral 1.5: Proof Abundance for All — Mistral](https://mistral.ai/news/leanstral-1-5/)
  - [Leanstral 1.5 — Mistral docs model card (Deprecated 9/29/2026)](https://docs.mistral.ai/models/model-cards/leanstral-1-5-26-06)
  - [mistralai/Leanstral-1.5-119B-A6B — Hugging Face model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)
  - [Leanstral 1.5 — HN announcement](https://news.ycombinator.com/item?id=48780801)
  - [OpenATP independent FATE-H/FATE-X results — HN discussion](https://news.ycombinator.com/item?id=49010310)
  - [AIProver paper (arXiv:2610.05367)](https://arxiv.org/abs/2610.05367v1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
