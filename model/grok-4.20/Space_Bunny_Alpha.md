# Grok 4.20 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4.20-0309-reasoning`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 0309 v2 (reasoning variant; xAI's short name is "Grok 4.20")
- **Short description:** SpaceXAI's high-speed general reasoning flagship of early 2026, marketed on three axes — output speed, agentic tool calling, and truthfulness (lowest hallucination rate claimed on the market). It is a general-purpose text+image model, not a coding specialist, and is now **deprecated**: Artificial Analysis and the xAI docs both point users at Grok 4.3 (high) and later Grok 4.6 / Grok 4.7.
- **Provider / access:** xAI API — `https://api.x.ai/v1/chat/completions` (Chat Completions) and the stateful `https://api.x.ai/v1/responses` (Responses API). Also served through Microsoft Azure Foundry (AA tracks 2 providers: xAI first-party, Azure).
- **Release / knowledge:** public beta from 2026-02-17; documentation release / GA on 2026-03-24 (model snapshot dated 0309); AA lists the release as April 2026 and xAI's model card PDF is dated 2026-04-07. Knowledge cutoff not published for this model.
- **IDs:** `grok-4.20-0309-reasoning` (canonical), aliases `grok-4.20`, `grok-4.20-reasoning`, `grok-4.20-0309`, `grok-4.20-reasoning-latest`, `grok-4.20-beta-0309-reasoning`, `grok-4.20-experimental-beta-0304`; OpenRouter-style ID `x-ai/grok-4.20-20260309`. A non-reasoning sibling (`Grok 4.20 0309 v2 (Non-reasoning)`) is tracked separately by AA. **No OpenCode Zen Free ID exists** for this model — cost is scored on xAI's paid pricing.
- **Context window:** **2,000,000 tokens** per Artificial Analysis and Benchable (both list 2M for `grok-4.20-20260309`); the xAI docs model page states **1,000,000**. Both figures verified from vendor/third-party pages — they disagree, so 1M is treated as the contractual minimum and 2M as the observed maximum. No separate max-output cap is published.
- **Modalities:** text and image in, text out (xAI docs: "Modalities Text, Image → Text"); reasoning yes (reasoning variant) and a separate non-reasoning variant exists; function calling / tool use yes; structured outputs (JSON mode) yes; file input supported on the multi-agent endpoints; `logprobs`/`top_logprobs` are **not** supported on `grok-4.20` and newer.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input, $0.20 / 1M cached input, $2.50 / 1M output (xAI first-party). Prompts above 200K tokens are billed at a higher tier ($2.50 / $5.00 per Benchable's endpoint table); AA's blended 7:2:1 cache/input/output rate is $0.64 per 1M tokens (vs $2.40 on Azure). Paid, no free tier.
- **Architecture:** proprietary; parameter count not disclosed. Optimized for decoding throughput (112 t/s first-party, 220 t/s via Azure) with a large served context.

### Raw benchmarks found

> Measured numbers with (source / harness). Where no number was published, it is stated as missing rather than estimated.

Agent / tool use:

- τ²-Bench Telecom: **97%**, 2nd place overall (behind GLM-5) — AA harness, reported at release (WinBuzzer, 2026-03-25, citing Artificial Analysis)
- IFBench (instruction following): **83%**, 1st place — AA harness, reported at release
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench (beyond the Telecom domain above): no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:


### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 88/100.** τ²-Bench Telecom 97% (2nd overall, AA harness) and a 1st-place 83% on IFBench are genuinely frontier tool-use and instruction-following results, and xAI markets the model specifically for agentic tool calling; capped at 88 because no Terminal-Bench, GDPval-AA, τ3-Banking or Claw-Eval figure is published, so a single telecom domain has to stand in for the whole dimension.
- **Reasoning: 61/100.** AA Intelligence Index v4.3.2 of 26 sits at the in-class median, which the methodology maps to the mid 55–65 band, and the record 78% non-hallucination rate on AA-Omniscience is a real accuracy plus; capped because no GPQA Diamond, HLE or CritPt number is public and the impressive release-era Index v4.0 of 48 does not survive the current index.
- **Context window: 96/100.** Both independently reported windows (2M on AA/Benchable, 1M on xAI's own page) clear the ≥1M tier, which maps to 95–100; held at 96 rather than 100 because no retrieval-at-length result (≥98% at 512K+) is published and the vendor and third-party context figures disagree.
- **Multimodal: 67/100.** Text and image in, text out per the xAI docs, which is the "+image input" 60–70 band; capped there because there is no video, PDF or audio input and no non-text output, and no image-understanding benchmark is published.
- **Coding: 58/100.** No verified public coding benchmark exists for this model — no SWE-bench Verified, DeepSWE, LiveCodeBench or SciCode row — and the generation was explicitly positioned around speed and tool calling rather than code; the score is a provisional read anchored on the AA v4.3.2 composite of 26 (which contains SciCode and Terminal-Bench 4.0) plus the strong terminal/tool profile implied by τ²-Bench Telecom, and it is the least evidence-backed number in this report.
- **Cost efficiency: 92/100.** $1.25 in / $2.50 out is cheaper than the ~$1.25/$4.25 ≈ 88 reference point in the methodology, the 84% cache discount takes the 7:2:1 blended rate to $0.64 per 1M, and 112 t/s decoding is top-decile for the class; held below the top band because it is a paid tier with a higher >200K-token price step.
- **Overall Score: 74/100.** Mean of the five non-cost dims (88 + 61 + 96 + 67 + 58) / 5 = 74.0 — a fast, extremely honest, tool-ready generalist with a huge window that has been overtaken on raw intelligence by Grok 4.3, 4.6 and 4.7; best fit is high-throughput agentic tool-calling and retrieval over 1M tokens where hallucination risk matters more than index points.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny-alpha)** — 2026-09-25
- Method: public internet research (xAI docs model + release-notes pages, the xAI Grok 4.20 model card PDF header, Artificial Analysis model/provider pages, Benchable, and contemporaneous reporting of the launch results). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.

- Artificial Analysis Intelligence Index v4.3.2: **26** (reasoning) / **14** (non-reasoning) — **#28 of 673 models**, and #105 / 211 within its price/intelligence class (median 26). At release the retired AA Index v4.0 read **48, 8th overall**; the gap is an index-version change, not a regression.
- AA-Omniscience: **78% non-hallucination rate** — the highest of any model measured on that test at the time
- GPQA Diamond / HLE / CritPt / AA-LCR v1.1: included in the v4.3.2 composite, **not published separately** — no verified public score found
- LatchBio biosafety / HackerBench v0.3: not reported for this generation (both are published for Grok 4.7)

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found (SciCode is folded into the AA v4.3.2 composite only)
- Vibe Code Bench: no verified public score found
- Positioning evidence instead of numbers: xAI sells the model on "agentic tool calling capabilities" and "industry-leading speed"; it was **not** the coding flagship of its generation (Grok 4.5/4.6/4.7 took that role explicitly)

Long context:

- No long-context retrieval benchmark reported for this model (no MRCR / RULER / GraphWalks row). The only verified long-context facts are the advertised 2M (AA, Benchable) / 1M (xAI docs) window and xAI's separate statement that its "higher context pricing" tier kicks in above 200K tokens.

Throughput / cost reference points (AA, first-party API): output **111.6 t/s** (#42 of 211 in class; 220.3 t/s on Azure), TTFT **21.73 s** (high, reasoning variant), non-reasoning variant 94 t/s with 0.60 s TTFT.
