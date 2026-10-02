# Grok Build 0.1 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-build-0.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** SpaceXAI's purpose-built agentic **coding** model — the same weights that power the Grok Build product, trained specifically for agentic coding tasks (web development, debugging and MCP support) and shipped as a public beta on the xAI API. It is a renamed, re-tuned successor of Grok Code Fast 1 (the old `grok-code-fast-1` slug now resolves here) and it is a **fast** model first: xAI markets it at 100+ tokens/second. Now superseded — AA redirects users to Grok 4.5 (high).
- **Provider / access:** xAI API — public beta via `https://api.x.ai/v1/responses` (Responses API is the documented entry point in xAI's launch post). Also distributed through OpenRouter and the Vercel AI Gateway, and used inside Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code and OpenCode. Batch API is **not** supported.
- **Release / knowledge:** announced as a coding model in May 2026 (Benchable lists 2026-05-20); xAI's "Grok Build 0.1 on API" post is dated 2026-05-29; Artificial Analysis tracks a `0616` snapshot released 2026-06-16. Knowledge cutoff not published.
- **IDs:** `grok-build-0.1` (canonical). Aliases per the xAI docs model page: `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825` — so the August 2025 Grok Code Fast 1 line and this model share one endpoint. **No OpenCode Zen Free ID exists**; cost is scored on xAI's paid pricing.
- **Context window:** **256,000 tokens**, verified on the xAI docs model page and on Benchable; AA reports 256k (~384 A4 pages) and its FAQ rounds this to 260k. No separate max-output cap is published.
- **Modalities:** text and image in, text out (xAI docs: "Modalities Text, Image → Text"); AA confirms text+image input for the 0616 snapshot, and Benchable additionally lists file input. Reasoning yes; function calling / tool use yes (MCP support is a headline feature); structured outputs yes.
- **Pricing (as of 2026-09-25):** $1.00 / 1M input, $0.20 / 1M cached input (80% cache discount), $2.00 / 1M output. AA blended 7:2:1 rate $0.54 per 1M tokens. xAI notes higher-context pricing applies above 200K tokens. Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Region `us-east-1` and `us-west-2`; rate limits 37 requests/s and 10,000,000 tokens/min.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Where no number was published, it is stated as missing rather than estimated.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **27** (reasoning snapshot `Grok Build 0.1 0616`) — **#95 of 211** in class, above the in-class median of 26. (Its predecessor `Grok Code Fast 1` scored 14, #286 of 673, on the same index — a large jump for the retrained model.)
- MCP support: explicitly a training target ("MCP support" named in xAI's launch post) — qualitative, no numeric harness score published
- Terminal-Bench 2.1 / 4.0 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found (Terminal-Bench 4.0 is folded into the AA composite only)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **27** (see above) — the only independent composite score published for this model
- GPQA Diamond / HLE / CritPt / AA-LCR v1.1 / AA-Omniscience: inside the composite, **not published separately** — no verified public score found
- No reasoning-specific vendor numbers were published at launch; xAI framed the model as a speedy general-purpose option "outside of coding", not as a reasoning flagship.

Coding:

- No verified public SWE-bench Verified, SWE-Pro, DeepSWE, LiveCodeBench, SciCode or Vibe Code Bench score exists for `grok-build-0.1` — xAI published positioning (agentic coding, web development, debugging, best-in-class in Grok Build / Cursor / Hermes Agent / OpenClaw / Kilo Code / OpenCode) but no numbers, and Benchable's benchmark table for the model is empty.
- The AA v4.3.2 composite of 27 does include SciCode and Terminal-Bench 4.0, which is the closest available proxy for code quality.

Long context:

- No long-context retrieval benchmark reported (no MRCR / RULER / GraphWalks row). The verified long-context facts are the 256K window and xAI's higher-context pricing tier above 200K tokens.

Throughput / cost reference points: xAI markets 100+ t/s; AA measured **48.8 t/s** on the first-party API (#148 of 211) with **0.63 s** time to first token, and 1 API provider tracked.


### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 74/100.** The model is trained for agentic coding with MCP support, ships function calling and structured outputs, and is documented as best-performing inside real coding harnesses (Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code, OpenCode) with a 0.63 s TTFT; capped at 74 because no independent Terminal-Bench, τ-bench, Toolathon, MCP-Atlas or Claw-Eval number is published, so the AA composite of 27 is the only measured anchor.
- **Reasoning: 64/100.** An AA Intelligence Index of 27 is above average within its class (median 26) and up from 14 for the Grok Code Fast 1 snapshot it replaces, placing it in the methodology's "Index 20–35 → 55–65" band; held near the top of that band because the model was explicitly trained for agentic coding rather than deep reasoning, and no GPQA Diamond, HLE or CritPt figure exists.
- **Context window: 74/100.** The verified 256,000-token window (xAI docs, Benchable, AA) sits in the methodology's 200K–500K tier, which spans 65–84 with 200K = 70; scored above the 200K anchor for the 28% headroom and the absence of a published output cap, and held well under the next tier because no retrieval-at-length benchmark is reported.
- **Multimodal: 67/100.** Text and image in, text out per the xAI docs (AA independently confirms image input for the 0616 snapshot) — the "+image input" 60–70 band; capped there because there is no video, PDF or audio input and no non-text output, and image understanding is untested.
- **Coding: 70/100.** This is the one dimension the model was purpose-built for, with the strongest qualitative evidence in this report (dedicated agentic-coding training, MCP support, best-in-harness placement, and an AA composite of 27 that contains SciCode and Terminal-Bench 4.0); scored provisionally at 70 and explicitly low-confidence, because **no public SWE-bench Verified, DeepSWE, LiveCodeBench or SciCode number was ever published** for this snapshot.
- **Cost efficiency: 95/100.** $1.00 in / $2.00 out is one of the cheapest paid points in the comparison — well past the ~$0.60/$2.20 ≈ 92 reference and past ~$1.25/$4.25 ≈ 88 — and the 80% cache discount takes the blended 7:2:1 rate to $0.54 per 1M; held just below the top band because it is a paid rather than free tier and prompts above 200K tokens carry a higher rate.
- **Overall Score: 69.8/100.** Mean of the five non-cost dims (74 + 64 + 74 + 67 + 70) / 5 = 69.8 — a cheap, quick, 256K-window coding agent model whose value is throughput per dollar inside an existing harness, not raw benchmark strength; best fit for high-volume sub-agent loops (MCP servers, boilerplate web builds, debugging passes) where $1/$2 and sub-second time-to-token matter more than index points.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny-alpha)** — 2026-09-25
- Method: public internet research (xAI docs model page, the xAI "Grok Build 0.1 on API" launch post, Artificial Analysis model pages for Grok Build 0.1 0616 and its Grok Code Fast 1 predecessor, and Benchable). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.5.md`, using the same headings.
