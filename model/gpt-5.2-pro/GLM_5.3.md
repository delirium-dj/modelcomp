# GPT-5.2 Pro — findings by GLM 5.3

- Source: OpenAI (`gpt-5.2-pro`, snapshot `gpt-5.2-pro-2025-12-11`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro (hyphenated vendor style per repo convention)
- **Short description:** OpenAI's highest-effort "Pro" tier of the GPT-5.2 series (released 2025-12-11) — a distinct high-compute checkpoint positioned as "our smartest and most trustworthy option for difficult questions where a higher-quality answer is worth the wait," with early testing showing fewer major errors and stronger performance in complex domains like programming. Not a variant of GPT-5.2 Thinking; a separate, slower, far more expensive tier. Superseded as "latest pro model" by GPT-5.5 Pro (official docs recommend migrating).
- **Provider / access:** OpenAI API, **Responses API only** (`v1/responses`); Chat Completions not supported for this tier. Official docs: "some requests may take several minutes to finish" (background mode recommended). No OpenCode Zen route (absent from the live Zen models endpoint, verified 2026-10-23).
- **Release / knowledge:** released 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `gpt-5.2-pro` (snapshot `gpt-5.2-pro-2025-12-11`). No Free ID exists on Zen — OpenAI's own API is the only verified route.
- **Context window:** 400,000 total tokens; 128,000 max output (official OpenAI model docs, fetched 2026-10-27).
- **Modalities:** text + image in; text out. Reasoning tokens with efforts `medium`/`high`/`xhigh` (xhigh introduced with this series). Tools per official docs: function_calling, file_search, image_generation, mcp, web_search. No audio/video input; no non-text output.
- **Pricing (as of 2026-10-27):** $21 / 1M input, $168 / 1M output (official pricing table; no cached-input discount line published for this tier — "-" in the official table). Third-party resellers list input from $10.50 / 1M (computeprices.com, checked 2026-10-17) but output stays ~$168. For contrast the sibling `gpt-5.2` (Thinking) is $1.75 / $14 with 90% cached-input discount — Pro is 12x input / 12x output.
- **Architecture:** proprietary; parameter count undisclosed. A separate Pro-tier checkpoint of the GPT-5.2 series, not a serving profile of `gpt-5.2`.

### Raw benchmarks found

> All Pro-tier rows below are from the official OpenAI launch appendix ("Introducing GPT-5.2", 2025-12-11, run at reasoning effort xhigh) and the companion "Advancing science and math with GPT-5.2" post. No independent evaluator publishes Pro-tier numbers: BenchLM covers **0 of 706** benchmarks ("coming soon", page updated 2026-10-23), Artificial Analysis has no Pro page (404), Vals AI has no `openai_gpt-5.2-pro` entry (it tested only `gpt-5.2` Thinking). Sibling (GPT-5.2 Thinking) figures are quoted ONLY as clearly-labeled provisional proxies, never as Pro measurements.

Agent / tool use:

- GDPval (ties allowed, wins or ties): **74.1%** (official; highest reported in the series — sibling Thinking 70.9% was "our first model that performs at or above a human expert level")
- GDPval (ties allowed, clear wins): **60.0%** (official; Thinking 49.8%)
- GDPval (no ties): **67.6%** (official; Thinking 61.0%)
- Investment banking spreadsheet tasks (internal): **71.7%** (official; Thinking 68.4%)
- BrowseComp: **77.9%** (official tool-usage table; Thinking 65.8%, GPT-5.1 Thinking 50.8%)
- Terminal-Bench 2.1: **no verified public score found** for the Pro ID
- Tau3-Banking / Tau2-Bench: **no verified public score found** for the Pro ID (sibling Thinking official: Tau2-bench Telecom 98.7% — provisional proxy only)
- GDPval-AA (Elo): **no verified public score found** (AA does not benchmark the Pro tier)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** for the Pro ID (sibling Thinking official: MCP-Atlas 60.6%, Toolathlon 46.3% — provisional proxies only)

Reasoning / knowledge:

- GPQA Diamond (no tools): **93.2%** (official; above sibling Thinking's 92.4%)
- HLE (no tools): **36.6%** (official; Thinking 34.5%)
- HLE (w/ search, Python): **50.0%** (official; Thinking 45.5%)
- AIME 2025 (no tools): **100.0%** (official; Thinking 100.0%)
- HMMT Feb 2025 (no tools): **100.0%** (official)
- ARC-AGI-1 (Verified): **90.5%** (official — "the first model to cross the 90% threshold", vs o3-preview's 87% at ~390x the cost)
- ARC-AGI-2 (Verified): **54.2%** (official, run at high; new CoT state of the art at launch; Thinking 52.9%)
- LCR / MLCR: **no verified public score found** for the Pro ID
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM 0 rows covered; AA 404)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (official qualitative claim only: fewer major errors per early testing; ChatGPT factuality rows are "-" for Pro)
- FrontierMath: **no verified public score found** for the Pro ID (sibling Thinking official: Tier 1–3 40.3%, Tier 4 14.6% — provisional proxy only)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for the Pro ID — every coding row in the official appendix is "-" for Pro. Closest provisional proxy (different SKU): GPT-5.2 Thinking SWE-bench Verified 80.0% / SWE-Bench Pro (public) 55.6% (official). Note: OpenAI has since stopped reporting SWE-bench Verified altogether, citing contamination.
- LiveCodeBench: **no verified public score found** for the Pro ID (Vals measured sibling `gpt-5.2` at 85.36% — provisional proxy only)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** for the Pro ID (Vals: sibling `gpt-5.2` set the then-SOTA 41.31% — provisional proxy only)
- DeepSWE / Coding Index / other: **no verified public score found** (SWE-Lancer IC Diamond: official row "-" for Pro; Thinking 74.6% — provisional proxy only)

Long context:

- No verified long-context retrieval score for the Pro ID — official MRCRv2 / GraphWalks / BrowseComp Long Context rows are all "-" for Pro (sibling Thinking: near-100% on 4-needle MRCRv2 out to 256K, GraphWalks bfs <128k 94.0% — provisional proxies only). Verified window: 400K total / 128K max output.

Conflicting results (compared across sources):

- DataCamp's GPT-5.2 write-up reports the GPQA Diamond comparison as "93.8% vs 93.2%" (Thinking vs Pro) — this conflicts with OpenAI's official appendix (92.4% Thinking / 93.2% Pro). The official table wins; the DataCamp figure is third-party transcription drift and is not used.
- models.dev carries stale/different pricing ($19.09/$152.73) superseded by the official $21/$168 sheet (noted 2026-10-23, re-confirmed 2026-10-27).

### Normalized scores (1–100)

- **Tool use: 85/100.** Official GDPval wins-or-ties 74.1% (above the sibling's at/above-human-expert 70.9%) and BrowseComp 77.9% (launch-leading agentic search, +12.1 pts over Thinking) verify top-tier professional/agent task execution; capped by zero verified multi-turn tool-harness rows (Tau2/Tau3, MCP-Atlas, Toolathlon, Terminal-Bench) under the `gpt-5.2-pro` ID.
- **Reasoning: 92/100.** GPQA Diamond 93.2% (frontier band 90%+), perfect AIME 2025 and HMMT Feb 2025 (100.0%), first-ever >90% ARC-AGI-1 (90.5%) and launch-SOTA ARC-AGI-2 (54.2%) put it in the 90–100 band; capped by no-tools HLE 36.6% (below the 40% frontier reference), no FrontierMath/LCR/CritPt rows for the Pro ID, and no independent index coverage (AA 404, BenchLM 0 rows).
- **Context window: 80/100.** Verified 400,000-token window with 128K max output sits high in the 200K–500K tier (65–84 band, 200K = 70 anchor) at 2x the classic 200K baseline; capped by zero verified long-context retrieval scores for the Pro ID (MRCRv2/GraphWalks published only for the Thinking sibling).
- **Multimodal: 65/100.** Official modalities are text+image in / text out, placing it in the image-in band (60–70); capped mid-band because no vision benchmark (CharXiv/MMMU/ScreenSpot) is published for the Pro ID and there is no audio/video input or non-text output.
- **Coding: 72/100.** No verified coding benchmark exists for the Pro ID (every official coding row is "-"); scored provisionally from the same-series GPT-5.2 Thinking sibling (SWE-bench Verified 80.0%, SWE-Bench Pro 55.6% — a different SKU, marked provisional) plus OpenAI's qualitative early-testing note of "stronger performance in complex domains like programming"; capped hard by the absence of any direct Pro-tier coding measurement.
- **Cost efficiency: 18/100.** $21/$168 per 1M (official) is ~2x the $10/$50 ≈ 30 reference on input and ~3.4x on output, with no cached-input discount line; small credit for OpenAI's token-efficiency argument (quality per dollar on agentic evals) and third-party input routes from $10.50/1M.
- **Overall Score: 79/100.** (85 + 92 + 80 + 65 + 72) / 5 = 78.8 → 79 (half-up; Cost excluded). Best-fit: the deep-effort tier for one-shot answers to the hardest professional and abstract-reasoning questions where quality is worth the wait and the extreme price — not a high-volume coding/agent workhorse (no verified tool-harness or coding rows; 12x sibling pricing).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-27
- Method: public internet research (official OpenAI launch appendix + "Advancing science and math" post + model docs + pricing, fetched 2026-10-27; BenchLM, Vals AI, Artificial Analysis, DataCamp, computeprices cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
