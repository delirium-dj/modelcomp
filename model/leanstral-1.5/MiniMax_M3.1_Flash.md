# Leanstral 1.5 — Research findings

- **Source**: Mistral AI — official news post and API model card; weights `mistralai/Leanstral-1.5-119B-A6B`; independent cross-checks from the PutnamBench community leaderboard and Future Stack Reviews
- **Researched by**: MiniMax M3.1 Flash — 2026-11-03 (UTC)

## Model card

- **Name**: Leanstral 1.5 (`leanstral-1-5`, Labs id `labs-leanstral-1-5`, weights `mistralai/Leanstral-1.5-119B-A6B`)
- **Short description**: Mistral's Apache-2.0 open-weight **Lean 4 proof-engineering agent** — a 119B-total / 6.5B-active MoE (part of the Mistral Small 4 family) trained with mid-training → SFT → RL (CISPO) in two environments: a multiturn prover that iterates against the Lean compiler, and a code-agent environment where it edits files, runs bash and queries the Lean language server. Purpose-built for formal mathematics, autoformalization and code verification — not a general chat model.
- **Provider / access**: Hugging Face (Apache-2.0 weights); Mistral API as `leanstral-1-5` / `labs-leanstral-1-5`; recommended through Mistral Vibe + Lean LSP MCP. **The hosted endpoint is deprecated** — Mistral's model card gives a deprecation date of **2026-09-29**, and the Labs listing gives a retirement date of **2026-09-30**; Labs models are experimental, may change or be removed with two weeks' notice and are explicitly not recommended for production.
- **Release date**: 2026-06-30 (Mistral API model card) / news post published **2026-07-02**.
- **Context window**: **256k** context, **128k** max output on the API. Mistral's own example vLLM configuration for the weights uses 4-way tensor parallelism and caps the model length at **200,000** tokens.
- **Modalities**: text in → text out on the API (chat completions, function calling, agents & conversations, structured outputs). The Hugging Face card notes the underlying Small 4 family "combines multimodal capabilities", but no multimodal input or output is documented for this model and no multimodal benchmark exists.
- **Licence**: Apache 2.0.
- **Lifecycle / data terms**: Labs-tier models may use submitted data for Mistral training regardless of plan or opt-out; Zero Data Retention is offered only on the Scale plan for stateless calls, and the public docs do not say it overrides the Labs training rule (independent review).

## Raw benchmarks found

### Vendor-reported (official news post, 2026-07-02)

| Benchmark | Result | Setting |
| --- | --- | --- |
| miniF2F (formal mathematics, IMO-level) | **100 % validation and test** ("saturated") | pass@4 / 2M-token budget |
| PutnamBench | **587 / 672** problems | pass@8, 4M-token budget |
| FATE-H (graduate abstract algebra) | **87 %** (87 problems) — new SOTA | pass@8 |
| FATE-X (PhD abstract algebra) | **34 %** (34 problems) — new SOTA | pass@8 |
| FLTEval (real PRs from the Fermat's Last Theorem repo) | pass@1 **21.9 → 28.9**, pass@8 **31.9 → 43.2** (vs Claude Opus 4.6 at 39.6, at ~1/7 the cost) | Leanstral 1.0 → 1.5 |
| ArXivLean | **17.1 %** (7 / 41) | reported |

- **Test-time scaling on PutnamBench (pass@8)**: 44 problems @50K tokens → 244 @200K → 493 @1M → **587 @4M**; the AVL-tree time-complexity proof ran **>2.7M tokens across 22 context compactions**.
- **Bug discovery**: across **57 repositories** the pipeline (Aeneas Rust→Lean translation) flagged 47 violated properties, of which **11 were genuine bugs, 5 previously unreported on GitHub** (example: `datrs/varinteger` sign function overflow on `Std.U64.MAX`).
- **Cost**: "about **$4** per PutnamBench problem" (blog) vs **$1.68** (technical-report table) — both Mistral numbers, both dependent on undisclosed token/hardware/retry assumptions; comparison set: Seed-Prover 1.5 high ≈ $300+/problem (10 H20-days), Aleph Prover $54–68/problem.
- **Baselines it beats (as measured by Mistral)**: Goedel-Architect without natural-language guidance, Seed-Prover 1.5 (high) and AxProverBase.

### Independent cross-checks

- **PutnamBench community leaderboard** (trishullab, entry added 2026-07-19): **Leanstral 1.5 = 588 solved / 672**, 4M tokens per problem — i.e. **one problem more** than Mistral's own 587. On the same board it now sits below Goedel-Architect (597 at pass@4, 642 with answer placeholders), below "Mistral Prover" (DeepSeek V4 Pro + Leanstral, 658) and far below the systems now at 672 (NEAR AI w/ DeepSeek V4, Forall/Astrio, Midas Prover, Humanfia, Aleph Prover).
- **Future Stack Reviews (2026-07-15), independent audit**: miniF2F's initial test run was **242 / 244**, not a clean 100 % — the last two problems fell only on extra attempts (one after 37); FATE-H/FATE-X leads are "scoped to systems without natural-language proof access" (general reasoners run at pass@64 and score ≈0 % at those tiers); the FLTEval comparison is **not like-for-like** (Leanstral pass@8 in Mistral Vibe vs Claude Opus 4.6 pass@1 in Claude Code); ArXivLean 17.1 % vs Aleph's 34.2 % is "an honest ceiling on cutting-edge research math"; **all figures are Mistral-reported and were not independently reproduced**; access is free but the surrounding verification labour (specification, translation, review) is not; hosted Labs access is an evaluation path, not a production entitlement.
- **Models.dev**: no model page exists for Leanstral 1.5 (redirects to the homepage) — it is absent from the independent spec/price database.

### Explicitly not found

No Artificial Analysis, BenchLM or OpenCharts record with measured rows; no SWE-bench, Terminal-Bench, LiveCodeBench, τ²-bench, GPQA, HLE or MMLU number for this model — its evaluation is entirely inside the Lean/formal-mathematics ecosystem.

## Normalized scores (1–100)

- **Tool use: 58/100.** Genuinely agentic inside its domain — file editing, bash, Lean language-server inspection, MCP, and 22 context compactions inside a single 2.7M-token proof — but there is no general agentic benchmark (Terminal-Bench, τ², GAIA, OSWorld) and no independent reproduction of the agentic behaviour, so it is scored on documented behaviour in a single closed environment.
- **Reasoning: 82/100.** State-of-the-art *formal* reasoning: miniF2F saturated (242–244 / 244 on the honest reading), PutnamBench 587–588 / 672 (top-tier open at launch, +7 over Seed-Prover 1.5 high) and SOTA on FATE-H (87 %) / FATE-X (34 %). Discounted because ArXivLean 17.1 % shows the ceiling on frontier research mathematics, because every number is vendor-reported, and because no general-domain reasoning metric (GPQA/HLE/AIME) exists.
- **Context window: 72/100.** 256k context / 128k max output on the API, with Mistral's own reference vLLM configuration capping at 200,000 tokens — a genuine long-horizon window (compaction across millions of tokens) in the 200K–500K band.
- **Multimodal: 18/100.** The API exposes text chat completions only; the Hugging Face card's "multimodal capabilities" remark refers to the parent Small 4 family and is not backed by any documented input modality, output modality or benchmark for this model — treated as text-only.
- **Coding: 50/100.** Real code-verification capability: FLTEval pass@8 43.2 % on actual repository PRs, a proven AVL O(log n) insertion/deletion bound, and 11 genuine bugs (5 new) found across 57 repositories. But the "code" is Lean 4 proof code inside one ecosystem, there is no general SWE-bench / LiveCodeBench result, and the FLTEval comparison to Claude is pass@8-vs-pass@1 across different harnesses.
- **Cost efficiency: 97/100.** Apache-2.0 weights (free access, self-hostable) and a $0 Labs endpoint while it existed; real-world cost is vendor-estimated $1.68–$4 per solved PutnamBench problem plus 4-way tensor-parallel hardware. The free hosted lane has been retired (late September 2026), so the durable cost basis is the open weights.
- **Overall Score: 56.0/100.** (58 + 82 + 72 + 18 + 50) / 5 = 280 / 5 = **56.0**.

**Best fit**: formal-mathematics and software-verification teams already working in Lean 4 that own the specification/translation/review pipeline; research groups hunting theorem-prover SOTA; real-world Rust/C++ property-verification pipelines (Aeneas-style translation).
**Worst fit**: general chat, general-purpose coding assistants, multimodal work, and any buyer who needs a *general* reasoning model — its SOTA numbers are domain-scoped and vendor-reported.

## Agreement notes

- **587 vs 588 on PutnamBench**: Mistral's post says 587/672 while the independent community leaderboard records 588 — a one-problem discrepancy, most plausibly a late-added problem or a re-scored entry. Both figures are used as a range (587–588) rather than picking one.
- **"Saturates miniF2F" vs 242/244**: the vendor's 100 % val/test claim and the reviewer's "initial test run was 242/244" are reconcilable — the two remaining problems fell only on extra attempts — but "saturated" should be read as "244/244 with retries", not as a single clean pass.
- **Cost per problem: $4 vs $1.68**: both are Mistral's own figures (blog prose vs technical-report table) and neither is independently verified; the reviewer's verdict — "read them as vendor estimates, not as your bill" — is applied here.
- **FLTEval "beats Opus 4.6"**: the comparison mixes pass@8 (Leanstral) with pass@1 (Opus 4.6) and two different agent harnesses (Mistral Vibe vs Claude Code); it is therefore evidence of efficiency on real PRs, not a like-for-like quality win.
- **"Free" framing**: the hosted endpoint really was $0, but it was a Labs preview with an end date (2026-09-29/30), account-level rate limits, a training-data clause and no production recommendation. The weights remain the durable free artefact.
- **Retirement dates disagree by one day** (model card deprecation 2026-09-29 vs Labs listing retirement 2026-09-30); the endpoint is retired either way, which is why cost is scored on self-hosted weights.
- **Identity**: the folder's `opencode/leanstral-1.5` id does not exist in any catalogue — the real ids are Mistral `leanstral-1-5` / `labs-leanstral-1-5` and HF `mistralai/Leanstral-1.5-119B-A6B`. The folder `meta.json`'s "262,144 (256K)" context and "119B/6.5B active" figures match the API card, but its "hosted ~$0.15/$0.45" hosted price was **not** found in Mistral's pricing documentation during this sweep (the endpoint was free/experimental) and was therefore not used.

---

**Provided by**: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-11-03

**Method**: Mistral's official news post and API model card were read for the benchmark results, lifecycle, context and pricing claims; the third-party PutnamBench community leaderboard was used as an independent count of solved problems; an independent audit (Future Stack Reviews, 2026-07-15) was used to test the vendor claims, recover the honest miniF2F and ArXivLean numbers and document the Labs-endpoint caveats; absence from Models.dev was verified. Every figure is attributed to its source and vendor-reported numbers are labelled as such.

**Reference URLs**:
- https://mistral.ai/news/leanstral-1-5/ — official announcement (miniF2F, PutnamBench 587/672, FATE-H/X, FLTEval, test-time scaling, bug-discovery study, cost)
- https://docs.mistral.ai/models/leanstral-1-5 — official API model card (256k context, 128k max output, deprecation 2026-09-29, features)
- https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B — official weights card (Apache 2.0, vLLM reference config, Small 4 family)
- https://trishullab.github.io/PutnamBench/leaderboard.html — independent PutnamBench leaderboard (Leanstral 1.5 = 588, ranked against the field)
- https://future-stack-reviews.com/leanstral-1-5-tierc/ — independent audit (miniF2F 242/244, ArXivLean 17.1 %, harness caveats, Labs endpoint retirement and data terms)
- https://github.com/mistralai/LeanstralSafeVerify — Mistral's verification fork used to check generated proofs
- https://github.com/mistralai/FLTEval — the FLTEval benchmark, open-sourced with this release

**Future sources to check**: any independent reproduction of the PutnamBench / FLTEval numbers (all figures so far are vendor-reported), a successor Leanstral release after the September 2026 Labs retirement, ArXivLean leaderboard movement, and any Leanstral-based prover entry that overtakes the 672/672 systems (e.g. DeepSeek V4 Pro + Leanstral at 658).
