# Grok 4.20 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4.20-0309-reasoning`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 0309 v2 (reasoning variant; xAI's short name is "Grok 4.20")
- **Short description:** SpaceXAI's high-speed general reasoning flagship of early 2026, marketed on three axes — output speed, agentic tool calling, and prompt adherence/truthfulness. It is a general-purpose text+image model, not a coding specialist, and is **deprecated**: Artificial Analysis and the xAI docs both point users at **Grok 4.3** (high) and later Grok 4.6 / Grok 4.7.
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions) and the stateful `https://api.x.ai/v1/responses` (Responses API). Also served through Microsoft Azure Foundry, Google Cloud Vertex AI partner models (`grok-4.20-reasoning`, GA), and Oracle OCI Generative AI (`xai.grok-4.20-0309-reasoning`); AA tracks 2 providers: xAI first-party and Azure.
- **Release / knowledge:** public beta from 2026-02-17; documentation release / GA on 2026-03-24 (model snapshot dated 0309); AA lists the release as April 2026 and xAI's model card PDF is dated 2026-04-07. **Knowledge cutoff: August 2025.**
- **IDs:** `grok-4.20-0309-reasoning` (canonical), aliases `grok-4.20`, `grok-4.20-reasoning`, `grok-4.20-0309`, `grok-4.20-reasoning-latest`, `grok-4.20-beta-0309-reasoning`, `grok-4.20-experimental-beta-0304`; OpenRouter-style ID `x-ai/grok-4.20-20260309`. A non-reasoning sibling (`Grok 4.20 0309 v2 (Non-reasoning)`) is tracked separately by AA. **No OpenCode Zen Free ID exists** for this model — cost is scored on xAI's paid pricing.
- **Context window:** **2,000,000 tokens** per Artificial Analysis, Benchable, and Google Cloud (2M for `grok-4.20-20260309`); the xAI docs model page states **1,000,000**, and Oracle's playground caps the response length at 131,000 tokens while keeping a 1M context. Both principal figures verified from vendor/third-party pages — they disagree, so 1M is treated as the contractual minimum and 2M as the observed maximum.
- **Modalities:** text and image in, text out (xAI docs: "Modalities Text, Image → Text"; Google Cloud: inputs Text, Image, outputs Text); reasoning yes (reasoning variant) and a separate non-reasoning variant exists; function calling / tool use yes; structured outputs (JSON mode) yes; file input supported on the multi-agent endpoints; `logprobs`/`top_logprobs` are **not** supported on `grok-4.20` and newer.
- **Pricing (as of 2026-09-29):** $1.25 / 1M input, $0.20 / 1M cached input, $2.50 / 1M output (xAI first-party). Prompts above 200K tokens are billed at a higher tier ($2.50 / $5.00 per Benchable's endpoint table); AA's blended 7:2:1 cache/input/output rate is $0.64 per 1M tokens (vs $2.40 on Azure). Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Optimized for decoding throughput (**109.8 t/s** first-party) with a large served context.

### Raw benchmarks found

> Measured numbers with (source / harness). Where no number was published, it is stated as missing rather than estimated.

Agent / tool use:

- τ²-Bench Telecom: **97%**, 2nd place overall (behind GLM-5) — AA harness, reported at release (WinBuzzer, 2026-03-25, citing Artificial Analysis)
- IFBench (instruction following): **83%**, 1st place — AA harness, reported at release
- **GDPval-AA: Elo 1233** (Artificial Analysis, accessed 2026-09-29; the Grok 4.3 launch article cites the 0309 v2 figure as **1179** on its own harness, so the number is version- and harness-sensitive)
- Terminal-Bench 2.1 / Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench (beyond the Telecom domain above): **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **26** (reasoning) / **14** (non-reasoning) — verified 2026-09-29 on the current v4.3.2 index; earlier index builds displayed 37 and 38, so the 26 is the current-methodology value. At release the retired AA Index v4.0 read **48, 8th overall**; the gap is an index-version change, not a regression.
- **Humanity's Last Exam: 35%** (Artificial Analysis v4.3.2 breakdown, accessed 2026-09-29)
- **CritPt: 7%** (Artificial Analysis v4.3.2 breakdown, accessed 2026-09-29)
- AA-Omniscience Non-Hallucination Rate: **withdrawn from this report.** The prior "78% non-hallucination" claim could not be re-verified against a current AA breakdown for this exact snapshot, so it is treated as unverifiable and is **not** used to support any score.
- Knowledge cutoff: **August 2025**.
- GPQA Diamond / AA-LCR v1.1 / LatchBio biosafety / HackerBench v0.3: **no verified public score found** (published for other Grok generations only)

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found** (SciCode is folded into the AA v4.3.2 composite only)
- Vibe Code Bench: **no verified public score found**
- Positioning evidence instead of numbers: xAI sells the model on "agentic tool calling capabilities" and "industry-leading speed"; it was **not** the coding flagship of its generation (Grok 4.5/4.6/4.7 took that role explicitly)

Long context:

- No long-context retrieval benchmark reported for this model (no MRCR / RULER / GraphWalks row). The only verified long-context facts are the advertised 2M (AA, Benchable, Google Cloud) / 1M (xAI docs) window and xAI's separate statement that its "higher context pricing" tier kicks in above 200K tokens.

Throughput / cost reference points (AA, first-party API): output **109.8 tokens/s**, time to first answer token **22.01 s** (reasoning variant); non-reasoning variant is materially faster with a sub-second TTFT. An Azure-hosted measurement of 220.3 t/s was recorded at an earlier date.

Sources consulted: xAI docs model and release-notes pages, the xAI Grok 4.20 model card PDF header, Artificial Analysis model/provider pages and the Grok 4.3 launch article, Google Cloud Vertex AI partner-model docs, Oracle OCI Generative AI docs, and contemporaneous reporting of the launch results; all accessed 2026-09-29.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 89/100.** τ²-Bench Telecom 97% (2nd overall, AA harness) and a 1st-place 83% on IFBench are genuinely frontier tool-use and instruction-following results, and the newly published GDPval-AA Elo of 1233 adds real professional-agent evidence; capped at 89 because no Terminal-Bench, τ3-Banking or Claw-Eval figure is published, so a single telecom domain plus one Elo still has to stand in for the whole dimension.
- **Reasoning: 61/100.** AA Intelligence Index v4.3.2 of 26 sits at the in-class median, which the methodology maps to the mid 55–65 band, and HLE 35% plus CritPt 7% are consistent with that; capped because the 78% AA-Omniscience non-hallucination figure has been withdrawn as unverifiable, no GPQA Diamond number is public, and the release-era Index v4.0 of 48 does not survive the current index.
- **Context window: 96/100.** Both independently reported windows (2M on AA/Benchable/Google Cloud, 1M on xAI's own page) clear the ≥1M tier, which maps to 95–100; held at 96 rather than 100 because no retrieval-at-length result (≥98% at 512K+) is published, the vendor and third-party context figures disagree, and Oracle's playground caps response length at 131,000 tokens.
- **Multimodal: 67/100.** Text and image in, text out per the xAI docs and Google Cloud model card, which is the "+image input" 60–70 band; capped there because there is no video, PDF or audio input and no non-text output, and no image-understanding benchmark is published.
- **Coding: 58/100.** No verified public coding benchmark exists for this model — no SWE-bench Verified, DeepSWE, LiveCodeBench or SciCode row — and the generation was explicitly positioned around speed and tool calling rather than code; the score is a provisional read anchored on the AA v4.3.2 composite of 26 (which contains SciCode and Terminal-Bench 4.0) plus the strong terminal/tool profile implied by τ²-Bench Telecom, and it is the least evidence-backed number in this report.
- **Cost efficiency: 92/100.** $1.25 in / $2.50 out is cheaper than the ~$1.25/$4.25 ≈ 88 reference point in the methodology, the 84% cache discount takes the 7:2:1 blended rate to $0.64 per 1M, and 109.8 t/s decoding is top-decile for the class; held below the top band because it is a paid tier with a higher >200K-token price step.
- **Overall Score: 74.2/100.** Mean of the five non-cost dims (89 + 61 + 96 + 67 + 58) / 5 = 371 / 5 = 74.2. Best fit is high-throughput agentic tool-calling and retrieval over 1M tokens where prompt adherence matters more than index points; prefer Grok 4.3 or later for new work.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (xAI docs model + release-notes pages, the xAI Grok 4.20 model card PDF header, Artificial Analysis model/provider pages and launch articles, Google Cloud and Oracle partner docs, and contemporaneous reporting of the launch results). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
