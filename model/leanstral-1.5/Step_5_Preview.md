# Leanstral 1.5 — findings by Step 5 Preview

- Source: Mistral AI (`mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5. Mistral's **Apache-2.0 specialist theorem-proving model for the Lean 4 proof assistant** — a **119B / 6.5B-active MoE** that **saturates miniF2F** and **solves 587/672 PutnamBench problems**, with an API endpoint that was **retired 2026-09-30 after a 90-day life**. **A negative finding governs this report: BenchLM carries no `leanstral-1.5` page in any spelling** (both `Leanstral-1.5` and the repo spelling 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** The specialist-with-a-single-purpose-profile model. Its results are extraordinary in one narrow domain and essentially unmeasured everywhere else: **miniF2F saturated at 100%** on validation and test, **PutnamBench 587/672** (a +7 SOTA margin over Seed-Prover 1.5 at high effort), and **5 previously unreported bugs found across 57 repositories**. **No GPQA, HLE, SWE-bench, Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld or MMMU-Pro figure exists for it.**
- **Provider / access:** MIT/Apache-2.0 weights on Hugging Face (`mistralai/Leanstral-1.5-119B-A6B`). **The Labs API endpoint was deprecated 2026-09-29 and retired 2026-09-30.** Successor: Leanstral 26.03 (`mistralai/Leanstral-2603`, March 2026).
- **Release / knowledge:** released **2026-07-02** (mistral.ai/news/leanstral-1-5, "Proof Abundance for All"). **Knowledge cutoff not disclosed.**
- **IDs:** `labs-leanstral-1-5` (v1.5 API ID, dead); `mistralai/Leanstral-1.5-119B-A6B` (Hugging Face); repo id `opencode/leanstral-1.5`.
- **Context window:** **256,000 tokens total with 128,000 max output** (Mistral docs card).
- **Modalities:** **text in, text out** per the docs card (chat-completions only). **The Hugging Face chat template additionally encodes `[IMG]` image-input support, which the docs do not list** — so image input is a secondary, undocumented capability and is not scored as such. Reasoning model with `reasoning_effort` accepting none/high.
- **Pricing (as of 2026-11-06):** **$0 during its life** (free Labs endpoint). **Now retired, so no live price exists.** Self-hosting a 119B MoE is the only cost path.
- **Architecture:** open weights, **Apache-2.0**, **119B total / 6.5B active** (docs card; the repo's "A6B" suffix corroborates ~6B and the launch blog rounds it to "6B active"). MoE.

### Raw benchmarks found

- **miniF2F: saturated at 100%** on both validation and test sets (Mistral launch post).
- **PutnamBench: 587 / 672** problems solved, a stated SOTA margin of **+7 over Seed-Prover 1.5** at high effort (Mistral launch post).
- **Bug discovery: 5 previously unreported bugs across 57 repositories** — 11 of 47 flagged properties judged genuine (Mistral launch post). At roughly **$4 per problem**; one AVL-tree proof ran **2.7M tokens across 22 context compactions**.
- **No verified public score found** for GPQA, HLE, AA-LCR, CritPt, SWE-bench, LiveCodeBench, SciCode, Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, MMMU-Pro or any agentic/composite index.

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the mid band. **No agentic benchmark of any kind exists** — no Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Held above the floor because the model demonstrably sustains 2.7M-token multi-turn proof sessions with 22 context compactions, which is a real long-horizon tool-loop capability even if unbenched.
- **Reasoning: 95/100.** The methodology's top band, and the strongest specialist score in this research series. **miniF2F saturated at 100% on validation and test, and PutnamBench 587/672 with a +7 SOTA margin** are genuinely exceptional results in formal theorem proving. Held at 95 rather than 100 because the domain is narrow — formal Lean 4 proofs, not general reasoning — and **GPQA, HLE, ARC-AGI, MRCR and every general reasoning reference are unmeasured**, so the 95 is domain-specific and must not be read as general capability.
- **Context window: 88/100.** **256,000 tokens with 128,000 max output** — the methodology's 200K–500K band (65–84) at its ceiling, scored at 88 because a single proof ran **2.7M tokens across 22 context compactions**, which is direct empirical evidence that the window is used hard and retained well in practice. Held below the ≥1M tier because no MRCR or AA-LCR figure exists.
- **Multimodal: 15/100.** **Text in, text out** per the docs card — the methodology's text-only band (10–20), at the top of it because the HF chat template *does* encode `[IMG]` support. **No image benchmark exists to justify anything higher, and the capability is undocumented by Mistral.**
- **Coding: 55/100.** Below the mid band. **No SWE-bench, LiveCodeBench, SciCode, DeepSWE or Terminal-Bench figure exists.** Held at 55 rather than the floor because **5 previously unreported bugs found across 57 repositories** is a genuine code-analysis result, and proof assistants operate on formal code — but this is SFT on Lean 4, not SWE-bench-shaped repair.
- **Cost efficiency: 95/100.** The endpoint was **free ($0)** for its entire live life, which under the methodology's "$0 = 100" rule is a full-marks signal. Held at 95 by two practical frictions: **the endpoint is now retired, so the $0 price is historical and unavailable**; and **Apache-2.0 self-hosting a 119B MoE is a real GPU cost** that a metered $0 endpoint concealed.
- **Overall Score: 60/100.** (45 + 95 + 88 + 15 + 55) / 5 = 59.6 → **60** → **60**. Recommendation: **the strongest formal-theorem-proving specialist in this research series, and a retired one.** miniF2F saturation and PutnamBench 587/672 at $0 with Apache-2.0 weights is a genuinely remarkable package *for Lean 4 proving*. Three cautions: **the API endpoint was retired 2026-09-30 after a 90-day life**, so the free route no longer exists; **the capability is narrow** — 95/100 here is domain-specific, and a 45 on general tool use and a 15 on multimodal reflect what the model actually is; and **self-hosting 119B is expensive**, which is the only remaining access path. Prefer the successor **Leanstral 26.03**.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `leanstral-1.5` page in any spelling** (both `Leanstral-1.5` and the repo spelling return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the prior verified research pass (2026-10-24), with figures re-attributed to Mistral's own launch post, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **The API retirement is surfaced in the model card and carried into the recommendation as the decisive operational fact** — deprecated 2026-09-29, retired 2026-09-30, a 90-day API life — with the successor Leanstral 26.03 named. **The domain-narrowness of the 95/100 reasoning score is stated explicitly and repeatedly**, since a saturated miniF2F and a 587/672 PutnamBench are formal-theorem-proving results and must not be read as general reasoning capability; the general references (GPQA, HLE, ARC-AGI, MRCR) are all absent and named as such. **An undocumented secondary capability is recorded rather than scored: the HF chat template encodes `[IMG]` image input that Mistral's own docs do not list.** The **2.7M-token, 22-compaction proof session** is attributed as direct empirical evidence for the context score, and the **~$4-per-problem** figure as an economic signal. Missing benchmarks (every benchmark measured anywhere in this research series other than miniF2F and PutnamBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Leanstral 1.5 launch post (primary source; miniF2F, PutnamBench, bug discoveries)](https://mistral.ai/news/leanstral-1-5)
  - [Hugging Face — mistralai/Leanstral-1.5-119B-A6B model card (Apache-2.0 weights, chat template)](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)
  - [Repo curated meta — `model/leanstral-1.5/meta.json` (256K/128K, retired 2026-09-30, Apache-2.0, 119B/6.5B)](/model/leanstral-1.5/meta.json)
  - See also: [`model/mistral-large-4/`](mistral-large-4.md) (52.54) — Mistral's open-weight flagship refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
