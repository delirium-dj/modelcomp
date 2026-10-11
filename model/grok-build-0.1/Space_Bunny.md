# Grok Build 0.1 — findings by Space Bunny

- Source: SpaceXAI/xAI (`xai/grok-build-0.1`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **Small net change — Overall 69.8 → 69.0 — with one structural correction.**

> ### ⚠ The alias claim in the prior report is not supported, and importing the wrong model's data would badly misstate this score
> The prior report stated that "the old `grok-code-fast-1` slug now resolves here" and that this model is "a renamed, re-tuned successor of Grok Code Fast 1." **BenchLM now maintains two entirely separate entries in two separate families**, and they are not interchangeable:
>
> | | Grok Build 0.1 | Grok Code Fast 1 |
> |---|---|---|
> | BenchLM family | **Grok Build** | **Grok Code Fast 1** |
> | BenchLM rows | **1 of 625** (unranked) | 12 of 625, composite **34.22**, #161/889 |
> | AA Intelligence Index | **27** | **14.1** |
> | Hallucination Rate | not published | **79.3%** |
> | HLE / CritPt / IFBench | not published | **8.0% / 0.0% / 41.4%** |
>
> **A 13-point index gap and a completely separate benchmark set.** This report therefore scores Grok Build 0.1 **only** on data belonging to it, and **does not import any Grok Code Fast 1 figures.** The prior pass did the same — it used the index of 27, not 14 — and that discipline is retained and extended.

Restated: **Tool 74 → 70**, **Reasoning 64 (unchanged)**, **Context 74 (unchanged)**, **Multimodal 67 (unchanged)**, **Coding 70 (unchanged)**, **Cost 95 (unchanged)**.

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's purpose-built agentic **coding** model — the same weights that power the Grok Build product, trained for agentic coding tasks (web development, debugging, MCP support) and shipped as a public beta on the xAI API. **A fast model first:** xAI markets it at 100+ tokens/second. Now **superseded** — AA redirects users to Grok 4.5 (high).
- **Provider / access:** xAI API — public beta via `https://api.x.ai/v1/responses` (Responses API is the documented entry point). Also via OpenRouter and the Vercel AI Gateway, and used inside Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code and OpenCode. **Batch API is not supported.**
- **Release / knowledge:** announced as a coding model in **May 2026** (Benchable 2026-05-20); xAI's "Grok Build 0.1 on API" post dated 2026-05-29; AA tracks a `0616` snapshot released **2026-06-16**. **Knowledge cutoff not published** — unchanged gap.
- **IDs:** `grok-build-0.1` (canonical). **Alias status now disputed:** the prior report listed `grok-code-fast-1`, `grok-code-fast`, and `grok-code-fast-1-0825` as aliases per xAI's docs page, but BenchLM tracks Grok Code Fast 1 as a **separate model in a separate family**. Both readings are recorded; **the benchmark data is not merged.**
- **Context window:** **256,000 tokens**, verified on the xAI docs model page, Benchable, and BenchLM (256K). AA rounds to ~260K. **No separate max-output cap is published.**
- **Modalities:** **text and image in, text out** (xAI docs: "Modalities Text, Image → Text"); AA confirms text+image input for the 0616 snapshot; Benchable additionally lists file input. Reasoning yes; function calling / tool use yes (**MCP support is a headline training target**); structured outputs yes.
- **Pricing (verified 2026-10-10):** **$1.00 / 1M input, $0.20 / 1M cached input (80% cache discount), $2.00 / 1M output**; AA blended 7:2:1 rate **$0.54 per 1M**. xAI notes higher-context pricing applies **above 200K tokens**. Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Regions `us-east-1` and `us-west-2`; rate limits 37 requests/s and 10,000,000 tokens/min.

### Raw benchmarks found

> **The honest statement of this report's evidence base: there is almost none.** After two passes, Grok Build 0.1 has **one measured agentic benchmark and one composite index.** Everything else is unmeasured.

- **Gert Labs Composite Game Benchmark: 49.15%** (Gert Labs rankings) — **the only measured agentic benchmark for this exact model**, new this pass
- **Artificial Analysis Intelligence Index v4.3.2: 27** (reasoning snapshot `Grok Build 0.1 0616`), **#95 of 211** in class against an in-class median of 26 — the only independent composite published for this model
- **No Terminal-Bench 2.0/2.1/3.0/4.0, no τ-bench, no GDPval-AA, no Toolathlon, no MCP-Atlas, no Claw-Eval, no ClawProBench.** Terminal-Bench 4.0 is folded into the AA composite only.
- **No GPQA Diamond, HLE, CritPt, AA-LCR, or AA-Omniscience** — inside the composite, not published separately. **No hallucination rate exists for this model.**
- **No SWE-bench Verified, SWE-bench Pro, DeepSWE, LiveCodeBench, SciCode, or Vibe Code Bench score has ever been published** for `grok-build-0.1`. xAI published positioning only; Benchable's benchmark table for the model is empty.
- **No MRCR / RULER / GraphWalks retrieval result.** The only verified long-context facts are the 256K window and the >200K pricing tier.
- Throughput: xAI markets **100+ t/s**; **AA measured 48.8 t/s** on the first-party API (#148 of 211) with **0.63 s TTFT**, 1 API provider tracked.

Sources consulted: [BenchLM Grok Build 0.1 (updated 2026-10-10)](https://benchlm.ai/models/grok-build-0-1), [BenchLM Grok Code Fast 1](https://benchlm.ai/models/grok-code-fast-1) (consulted specifically to test, and to exclude, the alias claim), [Gert Labs rankings](https://gertlabs.com/rankings), the xAI docs model page, xAI's "Grok Build 0.1 on API" launch post, and Artificial Analysis's pages for both `grok-build-0-1 0616` and `grok-code-fast-1`, accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 70/100.** Down from 74. The prior 74 rested on qualitative positioning — agentic-coding training, MCP support as a named training target, and "best-in-harness placement" across Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code and OpenCode — plus the AA composite of 27 as its only measured anchor. **Gert Labs at 49.15%** is the first real agentic measurement for this exact model and it is mid-range: for context, Hy4 preview reads **61.7%**, Grok Build 0.1 **49.15%**, Mistral Medium 3.5 **39.10%**, and Hy3 Preview **36.91%**. That is a genuine datapoint and it does not support a strong score. Still above the floor because MCP support is a genuine architectural commitment rather than a bolt-on, and because the AA composite of 27 is above its class median.
- **Reasoning: 64/100.** **Unchanged.** An **AA Intelligence Index of 27** sits above the in-class median of 26 and well above Grok Code Fast 1's 14.1 — a large jump for the retrained model, as the prior pass noted. That places it in the methodology's "Index 20–35 → 55–65" band, and it is held near the top of that band. **No GPQA Diamond, HLE, CritPt, AA-LCR, or hallucination rate has ever been published**, so there is no way to locate this model on any dimension other than the composite. Note the context: its nearest measured sibling, **Grok Code Fast 1, reads HLE 8.0%, CritPt 0.0%, IFBench 41.4%, and a 79.3% hallucination rate** — if Grok Build 0.1 inherits more of that lineage than the index suggests, this score is optimistic. That is a caution, not evidence, and is not counted against the model.
- **Context window: 74/100.** **Unchanged.** The **256,000-token window** is verified three ways (xAI docs, Benchable, BenchLM) and sits in the 200K–500K tier with 28% headroom above the 200K anchor. Held well below the next tier because **no retrieval-at-length benchmark exists in any form** — no MRCR, RULER, GraphWalks, or AA-LCR — and **no max-output cap is published**, which is an unusual omission for an xAI model.
- **Multimodal: 67/100.** **Unchanged.** **Text and image in, text out** per the xAI docs, independently confirmed by AA for the 0616 snapshot — the "+image input" 60–70 band. Capped there because there is **no video, PDF, or audio input, no non-text output, and no image-understanding benchmark** for this model. Note that its Zen-priced sibling **Grok 4.7 ($2.00/$6.00, 500K context) is Active and supersedes it** on every axis.
- **Coding: 70/100.** **Unchanged, and explicitly the lowest-confidence score in this report.** This is the one dimension the model was purpose-built for, and it is the dimension with **zero published benchmarks.** No SWE-bench Verified, no SWE-bench Pro, no LiveCodeBench, no DeepSWE, no SciCode, no Vibe Code Bench — for a model whose entire launch positioning is "the best agentic coding model." The AA composite of 27 contains SciCode and Terminal-Bench 4.0, which is the only indirect evidence available. **70 is a placeholder resting on qualitative positioning, not measurement**, and should be treated as such by anyone comparing this model on coding.
- **Cost efficiency: 95/100.** **Unchanged.** **$1.00 in / $2.00 out with an 80% cache discount** is one of the cheapest paid rates measured in this batch — past the ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 reference points — and the cache discount takes the blended 7:2:1 rate to **$0.54 per 1M**. With **0.63 s TTFT**, this is genuinely good value for high-volume sub-agent loops. Held below the top band because it is a paid tier with no free route, and because **prompts above 200K tokens carry a higher rate** — which matters given the 256K window is the model's main draw.
- **Overall Score: 69.0/100.** (70 + 64 + 74 + 67 + 70) / 5 = 345 / 5 = 69.0, down from 69.8. **Best fit: high-volume sub-agent loops inside an existing coding harness — MCP servers, boilerplate web builds, debugging passes — where $1/$2, a 0.63 s TTFT and MCP-native training matter more than benchmark scores.** **Four cautions, and they are unusually serious for a model with a 69.0.** First, **this score rests on almost no evidence** — one benchmark and one composite index after two research passes, on a model whose every other claim is marketing. Second, **Coding 70 is a placeholder**, not a measurement, on the one dimension the model exists for. **Third, and the practical recommendation: do not adopt.** xAI itself steers users to **Grok 4.5 (high)**, which costs **$2.00/$6.00** but is a current-generation model — **Grok 4.20 scores 57.33, Grok 4.5 64.22 and Grok 4.6 67.92** on BenchLM against Grok Build 0.1's **unranked, one-row entry.** Paying more for a model that actually has benchmarks is the better trade at any budget. Fourth, **no knowledge cutoff, no max-output cap, and no hallucination data exist** after two passes.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Grok Build 0.1 profile, BenchLM's Grok Code Fast 1 profile (consulted specifically to test and exclude the alias claim), Gert Labs rankings, the xAI docs model page, xAI's "Grok Build 0.1 on API" launch post, and Artificial Analysis's pages for both `grok-build-0-1 0616` and `grok-code-fast-1`; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the substantive finding is a negative one about the evidence base, and a correction to the prior pass's alias claim.** The prior report asserted that `grok-code-fast-1` "now resolves here" and that this model is a renamed successor; **BenchLM maintains the two in separate families with a 13-point Intelligence Index gap (27 vs 14.1) and disjoint benchmark sets.** Had the prior pass scored this model on Grok Code Fast 1's data, the score would have been roughly ten points too low. **This report imports no Grok Code Fast 1 figures**, and the prior pass's discipline in using the index of 27 rather than 14 is credited rather than overturned. **The new evidence is one number: Gert Labs 49.15%**, the first measured agentic benchmark for this exact model, placed in context against Hy4 (61.7%), Mistral Medium 3.5 (39.10%) and Hy3 Preview (36.91%). **Five scores are deliberately left unchanged** because nothing new bears on them, and **Coding 70 is explicitly flagged as the lowest-confidence number in the report** — a placeholder on a model launched entirely on coding claims with zero published coding benchmarks. **This report's overriding conclusion is that a 69.0 here is not comparable to a 69.0 earned on measured evidence elsewhere in this dataset**, and the model is superseded by Grok 4.5 on xAI's own recommendation. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct primary retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Grok_Build_0_1_Recheck.md`, using the same headings.