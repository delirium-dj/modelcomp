# Grok 4.20 — findings by Big Pickle

- Source: xAI `grok-4.20` generation — `grok-4.20-0309-reasoning` / `grok-4.20-0309-non-reasoning` / `grok-4.20-multi-agent-0309` (v2: `grok-4.20-0309-v2-*`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (SpaceXAI / xAI; not a Free-tier model)
- **Short description:** The March 2026 xAI generation, and the first Grok built as an explicit **multi-agent** system: a council of four specialised agents reason in parallel, debate, fact-check, and synthesise one answer per turn. xAI's own model page sells it as "a high-performance model with industry-leading speed and agentic tool calling capabilities… the lowest hallucination rate on the market with strict prompt adherence." In practice it is a well-priced, thoroughly-benchmarked mid-frontier workhorse — genuinely good at agentic tool use (τ²-bench in the mid-90s) and hard science (GPQA Diamond 88.5%), noticeably weaker at agentic coding (Vibe Code Bench under 5%) and long-form expert knowledge (HLE ~31%). **Superseded twice**: by Grok 4.3 (2026-04-30) and then Grok 4.5 / 4.6.
- **Provider / access:** xAI API. Model IDs `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, and `grok-4.20-multi-agent-0309`; aliases `grok-4.20` and `grok-4.20-reasoning-latest`. Also served on Oracle Cloud (OCI Generative AI) and Google Cloud. Standard OpenAI-compatible **Chat Completions**.
- **Release / knowledge:** Public beta 2026-02-17; API release **2026-03-10** (Artificial Analysis release date, corroborated by cloudprice and benchlm). A refreshed **v2** snapshot shipped 2026-04-07. **Knowledge cutoff November 2024** per R[AI]DAR, carrying xAI's standing Grok cutoff — so on a model that scores 88.5% on GPQA Diamond, the ground truth is old and live search is effectively mandatory. Note also: `logprobs` and `top_logprobs` are **not supported** by Grok 4.20 and newer, and are silently ignored if set.
- **IDs:** `grok-4.20-0309-reasoning` (default for the `grok-4.20` alias), `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`. No OpenCode Zen Free ID — paid xAI model.
- **Context window:** **Source conflict, unresolved.** xAI's own live pricing table lists **1M** tokens for `grok-4.20-0309-reasoning`; Artificial Analysis lists **2M** (≈3,000 A4 pages), as do R[AI]DAR, Opper, cloudprice and the family spec. Either way it lands in the ≥1M tier. No long-context retrieval result (MRCR, RULER, GraphWalks) has ever been published for this model.
- **Modalities:** In: text, **image** (jpg/jpeg/png, max 20MiB per image, no limit on count, any input order). Out: text. Reasoning: yes, with a distinct non-reasoning variant and a dedicated multi-agent variant. Capabilities: function calling, structured outputs, native web search and X search. Prompt caching: yes. PDF input: inconsistently documented — Opper lists it, xAI's own modality docs do not.
- **Pricing (as of 2026-09-26):** xAI's live price table: **$1.25 in / $0.20 cached / $2.50 out per 1M tokens** for prompts under 200K, **doubling to $2.50 / $0.40 / $5.00** once the prompt reaches 200K tokens (a genuine long-context tax). Artificial Analysis tracks the release at a higher **$2.00 / $6.00** (with a 90% cache discount), so the model has been repriced downward since launch. Batch API supported. No free tier.
- **Architecture:** Proprietary; parameter count not disclosed. Multi-agent council of four parallel specialists, unlike every earlier single-model Grok release.

### Raw benchmarks found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index, reasoning variant: **37**, #78/187 in class (median 35) — AA's own 44B mirror lists 37 for the 0309 release and 38 for v2; both figures are marked *estimated*
- Artificial Analysis Intelligence Index, non-reasoning variant: **23**, #32/67 (an earlier AA snapshot showed 25 / 15 respectively — AA revised these upward)
- GPQA Diamond: **88.5%** (reasoning variant, R[AI]DAR; attributed to a published source)
- Humanity's Last Exam: **30%** (R[AI]DAR) / **31.6%** without tools (benchlm, Apr–Aug 2026)
- MMLU / MMLU-Pro: **no verified public score found** for this model
- AIME 2025 / HMMT 2025: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- AA-Omniscience Accuracy / Hallucination Rate: **no score published**; xAI's "lowest hallucination rate on the market" claim is unquantified marketing
- BenchLM overall: **61.06/100**, public rank #63, 90% interval 44.1–78.0 (benchlm, updated 2026-09-02)

Agent / tool use:

- **τ²-Bench: 96.5%** (R[AI]DAR) / **93** for v2 (44B mirror of AA data) — a frontier-grade agentic tool-use result
- Terminal-Bench 2.0: **47.1%** (benchlm)
- Terminal-Bench Hard: **40.9%** (R[AI]DAR) / **38** for v2
- GDPval-AA / AA-Briefcase / AutomationBench-AA: **no standalone public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Vending-Bench: **$4,694 net worth** attributed to Grok 4.20 by The Global Statistics — *low confidence, single unverified aggregator, not counted in scoring*

Coding:

- SWE-bench Verified: **76.7%** (benchlm)
- SWE-bench Pro: **51.8%** (benchlm)
- LiveCodeBench Pro: **74.2%** (benchlm)
- SciCode / AA-SciCode: **44.7%** (R[AI]DAR) / **46** for v2
- Vibe Code Bench: **4.06%** (benchlm) — a severe outlier and a genuine red flag
- DeepSWE / AA Coding Index: **no standalone public score found**

Domain benchmarks (benchlm):

- HealthBench Hard: **20.3%**
- MedXpertQA (text): **50.2%**
- IFBench: **81** (v2, 44B mirror of AA data)

Long context:

- 1M or 2M documented depending on source; **no retrieval measurement at any window length has ever been published.**

Speed (AA provider benchmark, v2):

- Output speed: Azure **223.7 tok/s**, xAI **100.8 tok/s**
- Time to first answer token: Azure **10.07 s**, xAI **23.52 s** — the reasoning variant is slow to first token by design

> **Source-quality note.** The Global Statistics publishes a "Grok 4.20" table showing AA Intelligence Index 49, MMLU 92.1%, GPQA 87.5%, AIME 2025 91.7%, LiveCodeBench 79.0% and HLE 40.0%. Every one of those numbers is **Grok 4's July 2025 launch table relabelled as Grok 4.20** — they contradict AA's own 37 and the R[AI]DAR GPQA of 88.5%. That aggregator is excluded from this report. A Tokenmix-sourced claim of "78% SWE-bench, 91.2% MMLU, 1385 Elo coding arena" is likewise unverified and excluded.

### Normalized scores (1–100)

- **Tool use: 82/100.** The strongest dimension by a distance. **τ²-bench at 96.5%** is a frontier-grade agentic tool-use result, backed by a four-agent debate-and-fact-check architecture, native web + X search, function calling and structured outputs, and xAI's explicit design target of agentic tool calling. Held at 82 rather than 90+ because the agentic *terminal* numbers are only mid-range — Terminal-Bench 2.0 at 47.1% and Terminal-Bench Hard at 40.9% — and because there is no GDPval-AA or AutomationBench-AA figure at all, so the real-world-work half of the tool-use dimension is simply unmeasured.
- **Reasoning: 78/100.** GPQA Diamond 88.5% is near-frontier graduate science, and HLE at ~30–31.6% is far above the sub-10% that defines the mid band, with an AA Intelligence Index of 37 above its class median. The gap to 90 is HLE: at 31.6% without tools it is roughly half the 40%+ frontier reference, which says the model handles hard science questions but not the long, multi-domain expert synthesis that HLE is built to probe. No AIME or MMLU-Pro figure was published, so the maths and general-knowledge axes rest on inference.
- **Context window: 96/100.** Both candidate values — xAI's 1M and everyone else's 2M — sit in the ≥1M top tier, and xAI's own rate card is a hard contract, so this is well above the 200K/1M boundary that costs most models 20 points. The 4 missing points are the unmeasured retrieval: no MRCR/RULER was ever published, and xAI's doubling of price past a 200K prompt is a serving-cost signal, not a proof of recall at 1M.
- **Multimodal: 70/100.** Text and **image** in, text out — the "+image in = 60–70" tier, taken at the top. xAI documents solid image handling (20MiB max, unlimited count, arbitrary input order). Not higher: no audio input, no video, no non-text output, and PDF support is claimed by one aggregator but absent from xAI's own modality documentation.
- **Coding: 74/100.** Genuinely split. SWE-bench Verified **76.7%** and SWE-bench Pro **51.8%** are real, independently-sourced, and land in methodology's 75–88 zone alongside Terminal-Bench 2.0 at 47.1%. But **Vibe Code Bench at 4.06%** is an outright collapse — the model can pass issue-resolution suites and still fail at open-ended "build me an app" work — and SciCode at 44.7% confirms weak multi-file scientific coding. Net: a competent patch-and-fix engineer, not an autonomous builder.
- **Cost efficiency: 88/100.** At xAI's current **$1.25 / $2.50** with a **$0.20** cache rate this is a genuinely cheap mid-frontier model — but it is more expensive than the ~$0.60/$2.20 reference that anchors ~92, and AA's tracked rate for the release is $2.00 / $6.00, which is worse. The 200K prompt cliff (everything doubles) is a real cost for the large-context workloads this model is otherwise suited to. No free tier, so no path to the 95+ band.
- **Overall Score: 80.0/100.** Mean of the five quality dims: (82 + 78 + 96 + 70 + 74) / 5. **Best fit — a cheap, well-documented agentic-workhorse pick for 2026 work that is now legacy.** Its selling point is the τ²-bench-grade tool calling at a $1.25 input rate with a 1M+ window. The caveats stack up: superseded by Grok 4.3, 4.5 and 4.6; a November 2024 knowledge cutoff; no `logprobs`; a Vibe Code Bench score under 5%; and a documented 2x price jump past 200K prompts. For new work in September 2026, choose Grok 4.6 — keep Grok 4.20 only if an existing pipeline depends on its exact ID or its multi-agent mode.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (xAI model docs and live pricing table, xAI model page for Grok 4.20 0309 Reasoning, Artificial Analysis model and provider pages, benchlm, R[AI]DAR, 44B AA mirror, cloudprice); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated, and one aggregator found to have relabelled Grok 4's launch table is explicitly excluded.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
