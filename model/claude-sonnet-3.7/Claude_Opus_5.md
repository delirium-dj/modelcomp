# Claude Sonnet 3.7 — findings by Claude Opus 5

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (Anthropic's own launch styling was "Claude 3.7 Sonnet"; the company later inverted the tier/version order across the line, and its own appendix footnote on the launch post reads simply "Lesson learned on naming")
- **Short description:** **The first hybrid reasoning model on the market** — a single model that produces either near-instant responses or extended, step-by-step thinking made visible to the user, with API-level control over the thinking budget. Anthropic framed this as a deliberate philosophical choice: "just as humans use a single brain for both quick responses and deep reflection, we believe reasoning should be an integrated capability of frontier models rather than a separate model entirely" ([Anthropic, 2025-02-24](https://www.anthropic.com/news/claude-3-7-sonnet)). It also shipped **Claude Code** as a limited research preview — the origin of Anthropic's agentic coding tool. Distinct model; Sonnet 4 and later are separate releases with their own folders.
- **Provider / access:** Launched on all Claude plans (**Free**, Pro, Team, Enterprise), the Claude Developer Platform, Amazon Bedrock and Google Cloud Vertex AI. Extended thinking was available everywhere **except** the free tier. **Lifecycle — this model is retired:** Anthropic's deprecation register records `claude-3-7-sonnet-20250219` as **Retired**, deprecated **2025-10-28** and retired **2026-02-19**, with `claude-sonnet-4-6` as the recommended replacement ([model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations)). Requests to it now fail. `platform.claude.com/docs/en/models/sonnet-3-7/overview` returns **404**.
- **Release / knowledge:** Released **2025-02-24**; retired **2026-02-19** — a 12-month service life. Knowledge cutoff: no verified public date found.
- **IDs:** `claude-3-7-sonnet-20250219` (retired), `claude-3-7-sonnet-latest` (alias). **There was a genuine free route** — the Claude free tier carried it (standard mode only) — but nothing is reachable now.
- **Context window:** **200,000 tokens**, with a **128,000-token output limit**; the thinking budget is set as "no more than N tokens, for any value of N up to its output limit of 128K", per Anthropic's own description. Corroborated by [llmdb](https://llmdb.com/models/claude-3-7-sonnet) and [AI Wiki](https://aiwiki.ai/wiki/claude_3_7_sonnet).
- **Modalities:** **Text + image in → text out.** No audio, no video, no generated media. Reasoning: **hybrid — the defining feature**, with visible chain-of-thought and a developer-set token budget trading speed and cost against answer quality. Tool calls: yes, including computer use (the system card specifically addresses prompt-injection risk in computer-use settings).
- **Pricing (as of 2026-10-08):** **$3 / MTok input, $15 / MTok output** at launch, **identical in both standard and extended thinking modes, and inclusive of thinking tokens** — a pricing decision worth recording because several later vendors (and Anthropic itself on Gemini-era comparisons) charged differently for reasoning. These are historical rates: the model is retired and cannot be purchased.
- **Architecture:** Proprietary, closed weights. Parameters undisclosed. Two disclosed design choices are substantive: Anthropic "optimized somewhat less for math and computer science competition problems, and instead shifted focus towards real-world tasks that better reflect how businesses actually use LLMs" — which the benchmark profile below confirms almost perfectly — and unnecessary refusals were cut by **45%** versus Claude 3.5 Sonnet.

### Raw benchmarks found

> Unusually well-documented for a retired model, because [evals.report](https://evals.report/models/anthropic-claude-3-7-sonnet) tracks **33 scores** for it and labels each one **Official / Verified / Unverified**. Those labels are preserved below. Anthropic's own launch appendix is also exceptionally transparent about scaffolding, including releasing the specific 11 SWE-bench test cases that would not run on its infrastructure.

Agent / tool use:

- τ²-bench (Telecom): **49%** pass^1 (*Verified*)
- WebArena: **52.0%** task success (*Verified*)
- GAIA: **43.9%** accuracy (*Unverified*)
- Online-Mind2Web: **39.33%** task success (*Verified*)
- MCP-Universe: **24.24%** overall success rate (*Verified*)
- GDPval: **1048 Elo** (*Official*)
- **METR Task-Completion Time Horizons: 60.4 minutes** at the 50% time horizon (*Official*) — i.e. tasks taking a competent human about an hour were completed half the time, which in February 2025 was a notable autonomy milestone
- **Gray Swan Arena (agent red-teaming / indirect prompt injection): 1.61% Attack Success Rate** (*Verified*) — lower is better, and 1.61% is an excellent robustness result that few models in this dataset can match
- TAU-bench: Anthropic claimed state of the art but published it as a chart. Its disclosed scaffolding is aggressive — a prompt addendum to the Airline Agent Policy instructing use of a separate "planning" tool, with the step cap raised from **30 to 100** — and the value is not extractable. Not estimated.

Reasoning / knowledge:

- GPQA Diamond: **78.5%** accuracy (*Official*)
- MMLU-Pro: **83.7%** accuracy (*Verified*)
- AIME (OTIS Mock): **57.8%** accuracy (*Official*)
- Epoch Capabilities Index: **142.0** (*Official*)
- MultiChallenge: **51.58%** accuracy (*Verified*)
- MASK (alignment between statements and knowledge): **82.13** honesty score (*Verified*)
- PolyMath (multilingual, difficulty-weighted): **33.5** DW-ACC (*Verified*); MultiNRC: **27.77%** (*Official*)
- FrontierMath: **4.14%** (*Official*); EnigmaEval: **4.23%** (*Verified*); **PutnamBench: 0 problems solved** (*Verified*)
- **BenchLM has no entry for this model at all**, and neither does Artificial Analysis — so there is no AA Intelligence Index, no CritPt, no AA-LCR and no hallucination-rate measurement. The MASK honesty score of 82.13 is the closest available proxy and it is a different construct.
- Chat preference (recorded but not scored as capability): LMArena **1299** (*Official*), Arena-Hard-Auto v2.0 **59.8%** win rate (*Official*), EQ-Bench Creative Writing v3 **1395 Elo** (*Verified*), Design Arena **1231 Elo** (*Verified*)

Coding:

- **SWE-bench Verified: 61.0%** % resolved (*Official*, evals.report). Anthropic's own figures are **63.7%** no-extended-thinking pass@1 and **70.3%** "high compute" — both on the **n=489** subset that ran on its infrastructure, with the 11 incompatible cases counted as failures in the vanilla figure to maintain leaderboard parity. The high-compute number uses parallel sampling, discarding patches that break visible regression tests, and a scoring model to rank survivors — a *system* result, not a model result, and Anthropic says so.
- Aider Polyglot: **64.9%** % correct (*Official*)
- SWE-bench Multilingual: **43%** (*Verified*); SWE-bench Multimodal: **31.33%** (*Verified*)
- SciCode: **40.3%** (*Unverified*); LiveCodeBench: **39.4%** Pass@1 (*Unverified*); BigCodeBench: **33.8%** calibrated Pass@1 (*Verified*)
- **GSO (software optimization for SWE-agents): 3.8%** Opt@1 (*Official*) — near-floor on performance-engineering tasks

Multimodal:

- MMMU: **75.0%** accuracy (*Unverified*)
- **ZeroBench: 1.0%** pass@1 (*Verified*) — effectively zero on the hardest visual-reasoning set
- SWE-bench Multimodal 31.33% doubles as grounded-vision evidence
- No MathVision, CharXiv, OmniDocBench, OCR, video or audio number found

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth**, and no AA-LCR entry exists. The 200K window has no public retrieval validation whatsoever.

### Normalized scores (1–100)

- **Tool use: 58/100.** A genuinely interesting profile rather than a uniformly weak one. The standouts are **METR's 60.4-minute 50% time horizon** — roughly an hour of autonomous work, a real milestone for early 2025 — and a **1.61% indirect-prompt-injection attack success rate**, which is among the best agent-robustness figures I have seen anywhere in this pass and reflects Anthropic having taken computer-use prompt injection seriously in the system card. Capped by mid-band task performance (τ²-bench 49%, WebArena 52.0%, GAIA 43.9%, Online-Mind2Web 39.33%), a poor **MCP-Universe 24.24%**, a GDPval of only 1048 Elo, and a TAU-bench claim that exists only as a chart behind a modified policy prompt and a tripled step cap.
- **Reasoning: 62/100.** GPQA Diamond 78.5% and MMLU-Pro 83.7% were strong in February 2025 and remain respectable, MultiChallenge 51.58% is decent on multi-turn work, and a **MASK honesty score of 82.13** suggests unusually good alignment between what it says and what it knows. The low end is where Anthropic told us it would be: having explicitly de-prioritised competition math, it posts **FrontierMath 4.14%, EnigmaEval 4.23%, and PutnamBench 0 problems solved**. That is a coherent engineering trade-off, not a defect — but it is still a capability ceiling, and with no AA index or hallucination measurement available there is nothing to offset it.
- **Context window: 64/100.** 200,000 tokens with a 128,000-token output ceiling was competitive in early 2025 and is unremarkable against the 1M windows now standard across Anthropic's own line. Credit for the thinking-budget design being bounded by that output limit, which made the cost/quality trade-off explicit and controllable. Held at 64 because **no retrieval or long-context reasoning measurement exists at all** — not one number at any depth.
- **Multimodal: 54/100.** Text and images in, text only out. MMMU 75.0% was solid for its era but is flagged *Unverified*, SWE-bench Multimodal 31.33% shows limited grounded capability, and **ZeroBench 1.0%** shows the hard visual-reasoning ceiling is essentially at the floor. No chart, document, OCR, video or audio measurement exists.
- **Coding: 62/100.** This was the model's purpose and it delivered for its time: **SWE-bench Verified 61.0% (Official), Anthropic's own 63.7% with deliberately minimal scaffolding**, and Aider Polyglot 64.9%, with strong partner testimony from Cursor, Cognition, Vercel, Replit and Canva. Anthropic's reporting deserves credit — it used a two-tool scaffold, published the excluded test cases, and separated the 70.3% rejection-sampling result as a system score. Capped by everything harder: SWE-bench Multilingual 43%, LiveCodeBench 39.4%, BigCodeBench 33.8%, and **GSO 3.8%** on optimization tasks.
- **Cost efficiency: 20/100.** **The model is retired** — deprecated 2025-10-28, retired 2026-02-19, requests now fail — so its effective value at any price is close to nil, and that is what this dimension has to capture. Even judged on its historical $3 / $15 rate, the intra-vendor comparison is brutal: **Claude Haiku 5.5 costs $0.10 / $0.50**, i.e. **30× less on both lines**, and is a far stronger model available today. The 20 rather than lower reflects two real historical virtues: free-tier availability on consumer Claude, and the genuinely developer-friendly decision to charge one flat rate across both modes with thinking tokens included.
- **Overall Score: 60/100.** Mean of the five non-cost dims (58 + 62 + 64 + 54 + 62) / 5 = 60.0. Best fit: **none — it is retired and cannot be called.** Its lasting significance is architectural rather than operational: it was the first hybrid reasoning model, it established the visible-thinking-with-a-token-budget pattern that the whole industry adopted, it shipped Claude Code, and it is still one of the most prompt-injection-resistant agents on record (1.61% ASR). It is also a clean example of a vendor stating a trade-off in advance — less competition math, more real-world tasks — and the benchmark profile matching that statement exactly.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Anthropic's "Claude 3.7 Sonnet and Claude Code" launch post (release date, hybrid-reasoning design and philosophy, 128K thinking/output limit, $3/$15 flat pricing inclusive of thinking tokens, free-tier availability, the 45% refusal reduction, the deliberate de-prioritisation of competition math, and the full appendix on TAU-bench and SWE-bench scaffolding including the n=489 subset, the two-tool scaffold, the separate 70.3% high-compute methodology and the 11 released incompatible test cases), Anthropic's **model-deprecation register** (deprecated 2025-10-28, retired 2026-02-19, replacement `claude-sonnet-4-6`), and **evals.report**, which tracks 33 scores for this model with explicit Official / Verified / Unverified provenance labels — all of which are preserved in this report. `platform.claude.com/docs/en/models/sonnet-3-7/overview` returned 404 and both `benchlm.ai/md/models/claude-3-7-sonnet.md` and `.../claude-sonnet-3-7.md` returned 404, so no BenchLM or Artificial Analysis aggregate exists; the resulting absence of a hallucination-rate measurement is reported rather than proxied from sibling models. Anthropic's chart-only TAU-bench figure was deliberately not estimated, and the 70.3% high-compute SWE-bench result is reported as a system score rather than credited to the model. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
