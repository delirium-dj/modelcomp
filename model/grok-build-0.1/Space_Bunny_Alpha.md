# Grok Build 0.1 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-build-0.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-validation 2026-09-29 — what changed.** The Artificial Analysis Intelligence
> Index value is **unchanged at 27** on **v4.3.2**, but four things moved:
> (1) AA now carries an explicit **"This model is deprecated"** banner on the model's
> own page and names the successor as **Grok 4.5** ("SpaceXAI has launched a newer
> release, Grok 4.5. We suggest considering it instead"); the earlier report recorded
> the supersession informally and this is now the vendor-labelled state.
> (2) **Output speed drifted down 48.8 → 43.6 t/s** and TTFT 0.63 → 0.62 s.
> (3) **New sub-evaluation rows are now published** for the 0616 snapshot (GDPval-AA
> v2.1, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1) — the previous report
> correctly said these were "inside the composite, not published separately."
> (4) Consequently **Context window moved 74 → 80** on the first real retrieval-at-
> length measurement, and **Overall moved 69.8 → 71.0**.

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's purpose-built agentic **coding** model — the same weights that power the Grok Build product, trained specifically for agentic coding tasks (web development, debugging and MCP support) and shipped as a public beta on the xAI API. It is a renamed, re-tuned successor of Grok Code Fast 1 (the old `grok-code-fast-1` slug now resolves here) and it is a **fast** model first: xAI markets it at 100+ tokens/second. **Superseded:** Artificial Analysis marks the `0616` snapshot **deprecated** and directs users to **Grok 4.5**. Note the naming trap: the *Grok Build product* (the CLI/agent, now at v0.2.117) is separately versioned and still active — what is deprecated is the *API model snapshot* being scored here, and `grok-build-0.1` itself is **not** on the May 15, 2026 xAI retirement list.
- **Provider / access:** xAI API — public beta via `https://api.x.ai/v1/responses` (Responses API is the documented entry point in xAI's launch post). Also distributed through OpenRouter and the Vercel AI Gateway, and used inside Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code and OpenCode. Batch API is **not** supported.
- **Release / knowledge:** announced as a coding model in May 2026 (Benchable lists 2026-05-20); xAI's "Grok Build 0.1 on API" post is dated 2026-05-29; Artificial Analysis tracks a `0616` snapshot released 2026-06-16. Knowledge cutoff not published.
- **IDs:** `grok-build-0.1` (canonical). Aliases per the xAI docs model page: `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` — so the August 2025 Grok Code Fast 1 line and this model share one endpoint. `grok-code-fast-1` **retired from the xAI API 2026-05-15** and now redirects to `grok-build-0.1`, per the xAI "May 15, 2026 Model Retirement" migration page. **No OpenCode Zen Free ID exists**; cost is scored on xAI's paid pricing.
- **Context window:** **256,000 tokens**, verified on the xAI docs model page, on Benchable, and on the AA model page (which states 256k in the spec table and rounds to 260k in its FAQ). No separate max-output cap is published.
- **Modalities:** text and image in, text out (xAI docs: "Modalities Text, Image → Text"); AA independently confirms text+image input for the 0616 snapshot, and Benchable additionally lists file input. Reasoning yes (built-in, not user-configurable); function calling / tool use yes (MCP support is a headline feature); structured outputs yes.
- **Pricing (as of 2026-09-29):** $1.00 / 1M input, $0.20 / 1M cached input (80% cache discount), $2.00 / 1M output. AA blended 7:2:1 rate $0.54 per 1M tokens. xAI notes higher-context pricing applies above 200K tokens. Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Region `us-east-1` and `us-west-2`; rate limits 37 requests/s and 10,000,000 tokens/min.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Where no number was published, it is stated as missing rather than estimated. All Artificial Analysis figures below are the **v4.3.2** composite (10 evals) read off the model's own page, `artificialanalysis.ai/models/grok-build-0-1-06-16`, on 2026-09-29.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **27** (reasoning snapshot `Grok Build 0.1 0616`) — **#100 of 216** in class, above the in-class median of 26. (Its predecessor `Grok Code Fast 1` scored 14 on the same index — a large jump for the retrained model.)
- **GDPval-AA v2.1: 1052 Elo** (Artificial Analysis, agentic real-world work) — newly published at sub-eval granularity since the last pass.
- Terminal-Bench 4.0 / AutomationBench-AA / AA-Briefcase v1.1 / τ³-Banking / Tau2-Bench: **no verified public score found** (these remain blank in AA's own per-eval grid for this model; the headline composite still folds them in).
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- MCP support: explicitly a training target ("MCP support" named in xAI's launch post) — qualitative, no numeric harness score published

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **27** (see above)
- **Humanity's Last Exam: 38%**; **CritPt: 9%**; **GDP.pdf: 24%**; **AA-Omniscience Index: 6** — all newly published at sub-eval granularity on the AA model page. The Omniscience figure in particular (a −100…+100 scale) confirms this is a low-knowledge model, and HLE at 38% and CritPt at 9% cap the reasoning read.
- GPQA Diamond / AA-LCR v1.1 (see Long context) / hallucination metrics: **no verified public score found**
- No reasoning-specific vendor numbers were published at launch; xAI framed the model as a speedy general-purpose option "outside of coding", not as a reasoning flagship. The newly visible HLE 38% / CritPt 9% rows confirm that framing.

Coding:

- **SciCode and Terminal-Bench 4.0 are inside the AA v4.3.2 composite of 27** but are not published as standalone rows for this snapshot — so they remain a proxy, not a measurement.
- No verified public SWE-bench Verified, SWE-Pro, DeepSWE, LiveCodeBench or Vibe Code Bench score exists for `grok-build-0.1` — xAI published positioning (agentic coding, web development, debugging, best-in-class in Grok Build / Cursor / Hermes Agent / OpenClaw / Kilo Code / OpenCode) but no numbers, and Benchable's benchmark table for the model is empty.

Long context:

- **AA-LCR v1.1: 75%** (Artificial Analysis, long-context reasoning) — newly published. This is the first genuine retrieval-at-length measurement found for this model and it is the single fact that moved the Context window score from 74 to 80.
- No MRCR / RULER / GraphWalks row. The verified long-context facts are the 256K window, xAI's higher-context pricing tier above 200K tokens, and now the 75% AA-LCR v1.1 reading.

Throughput / cost reference points: xAI markets 100+ t/s. AA measured **43.6 t/s** (#158 of 216, "notably slow" against a class median of 79.1) with **0.62 s** time to first token, and 1 API provider tracked. The AA provider page separately reports a 59 t/s median and 0.60 s first chunk for the SpaceXAI route. **Both of these are lower than the 48.8 t/s / 0.63 s recorded in the 2026-09-25 pass** — the vendor's 100+ t/s marketing claim is not what an independent harness measures. Because the model is deprecated, AA notes it now benchmarks only the default 10K-input workload and treats other workload results as historical.


### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 74/100.** *(unchanged)* The model is trained for agentic coding with MCP support, ships function calling and structured outputs, and is documented as best-performing inside real coding harnesses (Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code, OpenCode) with a sub-second TTFT; the new **GDPval-AA v2.1 1052 Elo** row is a genuine addition to the evidence base. Capped at 74 because no independent Terminal-Bench 4.0, AutomationBench-AA, τ³-bench, Toolathon, MCP-Atlas or Claw-Eval number is published, and the model is now formally deprecated.
- **Reasoning: 64/100.** *(unchanged, but now better evidenced)* An AA Intelligence Index of 27 is above average within its class (median 26) and up from 14 for the Grok Code Fast 1 snapshot it replaces, placing it in the methodology's "Index 20–35 → 55–65" band. The newly visible sub-evals — **HLE 38%, CritPt 9%, AA-Omniscience Index 6** — confirm the ceiling is low and hold the score at the top of the band rather than pushing it higher.
- **Context window: 80/100.** ⬆ **CHANGED from 74.** The verified 256,000-token window (xAI docs, Benchable, AA) sits in the methodology's 200K–500K tier, and the previously missing long-context evidence has now arrived: **AA-LCR v1.1 at 75%** is a real retrieval-at-length measurement, which is exactly the condition the earlier report said was absent. Lifted accordingly, and still held below the next tier because there is no MRCR/RULER/GraphWalks sweep and the 75% is not a 98%-at-512K result.
- **Multimodal: 67/100.** *(unchanged)* Text and image in, text out per the xAI docs (AA independently confirms image input for the 0616 snapshot) — the "+image input" 60–70 band; capped there because there is no video, PDF or audio input, no non-text output, and image understanding is untested (no MMMU-Pro row).
- **Coding: 70/100.** *(unchanged)* This is the one dimension the model was purpose-built for, with the strongest qualitative evidence in this report (dedicated agentic-coding training, MCP support, best-in-harness placement, and an AA composite of 27 that contains SciCode and Terminal-Bench 4.0); scored provisionally at 70 and explicitly low-confidence, because **no public SWE-bench Verified, DeepSWE, LiveCodeBench or SciCode number was ever published** for this snapshot and the model is now deprecated, so AA will not fill the gap.
- **Cost efficiency: 95/100.** *(unchanged)* $1.00 in / $2.00 out is one of the cheapest paid points in the comparison — well past the ~$0.60/$2.20 ≈ 92 reference and past ~$1.25/$4.25 ≈ 88 — and the 80% cache discount takes the blended 7:2:1 rate to $0.54 per 1M; held just below the top band because it is a paid rather than free tier and prompts above 200K tokens carry a higher rate.
- **Overall Score: 71.0/100.** ⬆ **CHANGED from 69.8.** Mean of the five non-cost dims (74 + 64 + 80 + 67 + 70) / 5 = 355 / 5 = 71.0. The move is entirely the Context window re-rating on the new AA-LCR v1.1 75% row; nothing else was moved. Read with the deprecation banner attached: this is a cheap, quick, 256K-window coding agent model whose value is throughput per dollar inside an existing harness, not raw benchmark strength, and SpaceXAI itself now points new work at Grok 4.5. Best fit for high-volume sub-agent loops (MCP servers, boilerplate web builds, debugging passes) where $1/$2 and sub-second time-to-token matter more than index points.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (xAI docs model page, the xAI "Grok Build 0.1 on API" launch post, the xAI "May 15, 2026 Model Retirement" migration page, the xAI Grok Build changelog, Artificial Analysis model pages for Grok Build 0.1 0616 and its Grok Code Fast 1 predecessor including the v4.3.2 sub-evaluation grid, and Benchable). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.5.md`, using the same headings.
