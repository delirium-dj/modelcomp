# Grok Build 0.1 — findings by Claude Opus 5

- Source: xAI / SpaceXAI (`grok-build-0.1`, aliased to `grok-code-fast-1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding model — "SpaceXAI's intelligent coding model for agentic software, engineering, and workflow tasks" ([xAI docs](https://docs.x.ai/developers/models/grok-build-0.1)). **Critical identity finding:** xAI's own model reference lists its aliases as **`grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`** — i.e. **Grok Build 0.1 and Grok Code Fast 1 are the same model under a renamed primary ID.** BenchLM tracks them as two separate entries (`grok-build-0-1` unranked with 1 benchmark; `grok-code-fast-1` scored at 34.18 with 12), so the benchmark record below is assembled from both, and every figure is labelled with the ID it was measured under. This is not a guess — it is xAI's published alias list.
- **Provider / access:** xAI API as `grok-build-0.1`; **OpenCode Zen** as `grok-build-0.1` on `https://opencode.ai/zen/v1/responses` ([Zen docs](https://opencode.ai/docs/zen/)). **Batch API: not supported** — unusual, and a real constraint for bulk work. Regions: **`us-east-1` and `us-west-2` only** — no EU option.
- **Release / knowledge:** **No explicit release date on xAI's model page.** The `grok-code-fast-1-0825` alias implies an August 2025 snapshot origin for the underlying model. Knowledge cutoff: no verified public date found.
- **IDs:** `grok-build-0.1` (primary), with `grok-code-fast-1` / `grok-code-fast` / `grok-code-fast-1-0825` as documented aliases. **No free tier.**
- **Context window:** **256,000 tokens** (xAI docs; corroborated by [BenchLM](https://benchlm.ai/models/grok-build-0-1)). Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out** (xAI docs: "text, image → text"). No audio, no video, no generated media. Reasoning: **xAI's capability table says "Reasoning: Yes"**, while BenchLM classifies both IDs as **Non-Reasoning** — a direct conflict I report rather than resolve; the likeliest explanation is a harness-configuration label. Function calling: yes. Structured outputs: yes.
- **Pricing (as of 2026-10-08):** Tiered at the 200K-prompt boundary — **input $1.00 / MTok below 200K, $2.00 above; cached input $0.20 / $0.40; output $2.00 / $4.00** (xAI docs). As with Grok 4.20, **a request that reaches 200K tokens is billed at the higher rate for *all* tokens**, not just the overflow. Zen matches at $1.00 / $2.00 with $0.20 cached. Rate limits are generous: **37 requests/second, 10,000,000 tokens/minute**.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and training method undisclosed.

### Raw benchmarks found

> Coverage is thin — 12 benchmarks across both IDs, almost all from Artificial Analysis. Figures measured under the `grok-code-fast-1` alias are labelled as such; xAI's published alias list is the justification for treating them as this model's.

Agent / tool use:

- **τ²-bench: 75.7%** ([Artificial Analysis](https://artificialanalysis.ai/models/grok-code-fast-1), measured as `grok-code-fast-1`)
- Gert Labs rankings: **49.15%** ([Gert Labs](https://gertlabs.com/rankings), measured as `grok-build-0-1`) — the only benchmark BenchLM attaches to the new ID
- **Terminal-Bench (any version), OSWorld, MCP-Atlas, GDPval-AA, Toolathlon, Claw-Eval: no verified public score found.** For a model whose stated purpose is "agentic software, engineering, and workflow tasks", the absence of any terminal or computer-use measurement is a genuine evidential hole.
- Capability surface verified at the interface level: function calling and structured outputs both supported

Reasoning / knowledge:

- AA-GPQA Diamond: **72.7%** (Artificial Analysis, as `grok-code-fast-1`)
- AA-LCR: **53.0%**; AA-HLE: **8.0%**; **CritPt: 0.0%** (Artificial Analysis)
- AA-IFBench: **41.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **14.1**; BenchLM overall **34.18/100, rank #156 of 889** under the `grok-code-fast-1` ID; **unranked with no computed score** under `grok-build-0-1`
- AA-Omniscience: Index **−37.1**, Accuracy **23.5%**, **Hallucination Rate 79.3%**
- MMLU-Pro, AIME, FrontierMath: no verified public score found

Coding:

- **SWE-bench Verified: 70.8%** ([xAI blog, grok-code-fast-1](https://x.ai/blog/grok-code-fast-1))
- **LiveCodeBench: 62.0%** ([Vals AI](https://www.vals.ai/models/grok_grok-code-fast-1)) — independent
- SWE-bench Pro, SciCode, FrontierCode, Aider Polyglot, Vibe Code Bench: no verified public score found

Multimodal:

- **No vision benchmark of any kind.** Image input is documented by xAI and entirely unmeasured — no MMMU, no chart, no document, no OCR, no GUI grounding.

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 53.0%** is the only quantified long-context signal, and it is weak — barely half the tasks solved.

### Normalized scores (1–100)

- **Tool use: 60/100.** **τ²-bench 75.7%** is a respectable independent function-calling result, and both function calling and structured outputs are documented and supported. But the dimension cannot go higher: Gert Labs 49.15% is mid-band, and there is **no Terminal-Bench, OSWorld, MCP or GDPval figure at all** for a model explicitly sold on agentic software and workflow tasks.
- **Reasoning: 52/100.** AA-GPQA Diamond 72.7% is decent for a coding-tier model, but everything else is weak: **AA-HLE 8.0%, CritPt 0.0%, AA-IFBench 41.4%, AA-LCR 53.0%**, an AA Intelligence Index of **14.1**, and a **79.3% hallucination rate** against 23.5% accuracy. The vendor-versus-aggregator disagreement over whether this is even a reasoning model does not help confidence.
- **Context window: 68/100.** 256,000 tokens is a solid specification for a coding model and the rate limits (37 rps, 10M TPM) support real throughput across it. Held in the high 60s by **AA-LCR 53.0%** indicating poor usable quality at depth, by the absence of any retrieval measurement, and by the **200K billing cliff that reprices the entire request** — which makes the top fifth of the window economically awkward.
- **Multimodal: 48/100.** Image input is vendor-documented, and **not one vision benchmark exists**. Scored just below the midpoint: the modality is confirmed present, its quality is entirely unknown, and output is text-only.
- **Coding: 68/100.** The dimension the model exists for and its strongest: **SWE-bench Verified 70.8%** from xAI with **LiveCodeBench 62.0% independently measured by Vals AI** is a credible, useful coding profile at this price point. Capped by the absence of SWE-bench Pro, SciCode, FrontierCode or any agentic-coding harness, and by the lack of an independent SWE-bench reproduction.
- **Cost efficiency: 54/100.** $1.00 in / $2.00 out with $0.20 cached reads is genuinely cheap, and 10M TPM at 37 rps is production-grade throughput. But four concrete deductions apply: **no Batch API support** (unique among the models I have scored, and a real cost penalty for bulk work); the **200K cliff doubles the rate on the whole request**; **US-only regions**; and no free tier. The decisive comparison is intra-family: **Grok 4.3 costs $1.25 / $2.50 — 25% more — and scores 53.58 on BenchLM against this model's 34.18**, a 57% higher aggregate for a quarter more money, with a 1M window instead of 256K.
- **Overall Score: 59.2/100.** Mean of the five non-cost dims (60 + 52 + 68 + 48 + 68) / 5 = 59.2. Best fit: **cheap, high-throughput, latency-sensitive coding assistance under 200K tokens** — targeted edits, codebase Q&A, routine repair — where 10M TPM and $1.00 input matter more than peak capability. Do not use it for autonomous agentic engineering despite the marketing (no terminal or computer-use measurement exists), for anything needing reliable factual output (79.3% hallucination rate), or for bulk offline jobs (no Batch API). Within xAI's own catalogue, Grok 4.3 is the better buy at nearly the same price.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — xAI's own developer model reference for `grok-build-0.1` (the positioning statement, text+image modalities, 256,000-token context, **the published alias list identifying `grok-code-fast-1` / `grok-code-fast` / `grok-code-fast-1-0825` as the same model**, the function-calling / structured-output / reasoning capability flags, the full tiered pricing with its 200K whole-request repricing rule, the explicit lack of Batch API support, the 37 rps / 10M TPM rate limits, and the US-only region list), BenchLM's pages for **both** `grok-build-0-1` and `grok-code-fast-1`, the OpenCode Zen pricing table, and the underlying Artificial Analysis, Vals AI, Gert Labs and xAI-blog sources. Because xAI documents the alias relationship directly, benchmark figures measured under `grok-code-fast-1` are treated as this model's and **each is explicitly labelled with the ID it was measured under**. The conflict between xAI's "Reasoning: Yes" capability flag and BenchLM's Non-Reasoning classification is reported rather than resolved. No release date was published, so none is asserted beyond noting what the `-0825` alias implies. The Grok 4.3 price/score comparison used in the cost assessment draws on BenchLM aggregate scores and xAI's published rate card only; no benchmark was imported from any other Grok folder. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
