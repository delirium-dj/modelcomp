# GPT-6.1 Terra — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-6.1-terra`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra — OpenAI's mid-tier member of the GPT-6.1 generation (ladder: Luna < Terra < Sol < Astra). It replaces the older GPT-5.6 Terra and is a distinct model from its siblings GPT-6.1 Sol, GPT-6 Astra and GPT-6 Luna (separate folders in this dataset).
- **Short description:** Fast, cost-efficient workhorse for high-volume computer use, visual reasoning and everyday office/agentic work (forms, invoices, technical drawings, bounded coding, video edits). OpenAI explicitly positions it below Sol/Astra for hard software engineering.
- **Provider / access:** OpenAI API `gpt-6.1-terra` (Chat Completions and Responses; vendor model page `developers.openai.com/api/docs/models/gpt-6.1-terra`); also in ChatGPT Work and Codex for Plus/Pro/Enterprise/Edu users; OpenRouter `openai/gpt-6.1-terra` (Azure in-region EU routing at $1.20 in / $6 out per 1M); Requesty router `openai/gpt-6.1-terra` (OpenAI-compatible, EU-only endpoint). Artificial Analysis lists 6 API providers. **Dataset ID caveat:** this folder's scaffolded `meta.json` lists `opencode/gpt-6.1-terra` (OpenCode Zen), but the Zen catalogue fetched 2026-10-30 contains only `gpt-5.6-terra` for the Terra family — no `gpt-6.1-terra` Zen route exists.
- **Release / knowledge:** 2026-10-26 (OpenAI announcement, X post, API docs, system card); knowledge cutoff not published.
- **IDs:** `gpt-6.1-terra` (OpenAI), `openai/gpt-6.1-terra` (OpenRouter, Requesty), `gpt-6.1-terra:flex` (Flex processing tier, ~$0.50/1M input per Requesty), `opencode/gpt-6.1-terra` (dataset id — not a live Zen route, see caveat).
- **Context window:** 1.1M tokens total with 128K max output (Requesty catalogue, reading OpenAI's spec); Artificial Analysis lists 1.0M. **Long-context surcharge:** above 272K input tokens the rates step up to $2 in / $7.50 out / $0.10 cached per 1M. The folder's scaffolded `meta.json` claim of "128K total" is contradicted by every vendor-side source.
- **Modalities:** text and image in, text out (Artificial Analysis technical spec); reasoning model with effort variants (low / medium / high / xhigh / max) plus a non-reasoning variant; tool calling, computer use, web search, file search, JSON-schema structured output, prompt caching (Requesty capability list 5/8 — vision, reasoning, tool calling, caching, JSON schema, computer use, web search; no audio or video in).
- **Pricing (as of 2026-10-30):** Standard $1.00 input / $5.00 output / $0.05 cached read / $1.25 cache write per 1M tokens — 50% below GPT-5.6 Terra and GPT-6.1 Sol ($2/$10) and 10× GPT-6 Luna's output rate. Batch/Flex/Build/Launch/Grow tiers are not individually priced on the vendor page; OpenRouter EU Azure quotes $1.20/$6. Tool fees: web search $10 per 1,000 calls, file search $2.50 per 1,000.
- **Architecture:** proprietary; parameter count not disclosed by OpenAI or any aggregator.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** (OpenAI launch figure at max reasoning effort) vs **55.56%** (Artificial Analysis independent run: 66 tasks, mini-swe-agent harness, avg@3) — Artificial Analysis's same-batch rows are GPT-6.1 Sol max 56.1%, GPT-5.6 Terra max 35.4%
- Terminal-Bench-Science 0.1: **58.3%** (BenchLM benchmark ledger); OpenAI states Terra surpasses GPT-6.1 Sol on this evaluation at max effort and comes within 5 points of Claude Opus 5.5
- Agents' Last Exam: **60.0%** (BenchLM ledger); OpenAI: ~15 percentage points above GPT-5.6 Terra at medium effort at roughly one-third the cost, and level with GPT-6 Astra at one-tenth the price per token
- OSWorld 2.1 (offline subset, 82 tasks): **74.2%** (BenchLM ledger) — tracked separately from OSWorld 2.0
- Artificial Analysis Intelligence Index: **51** (max variant, Index v5.0; rank #12 of 57 in the >$1/M proprietary price class; class median 38)
- GDPval-AA v2.1 / AA-Briefcase Elo / Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for this model

Reasoning / knowledge:

- Humanity's Last Exam: **46.2%** (Requesty model card, attributed to Artificial Analysis/model-card sources — secondary transcription, not read from an AA per-evaluation table)
- SciCode: **55.1%** (Requesty model card, same secondary attribution)
- Artificial Analysis Intelligence Index: **51** (current AA model page, v5.0) vs **48, rank #25 of 221** (emergent.sh, 2026-10-27, earlier AA snapshot) — see agreement notes
- BenchLM decision score: **75.9/100, rank #10 of 229** (BenchLM model record, a different composite methodology)
- LiveBench 2.0: **77.8** (livebench.ai leaderboard row, recorded in my earlier Muse Wonder research)
- Internal factuality: error rate on OpenAI's error-inducing-prompt set falls from 53.6% (GPT-5.6 Terra) to **16.7% at low effort**, and by 18 points to **4.3% at max effort** (vendor-internal set)
- GPQA Diamond / CritPt / AA-Omniscience / LCR / MLCR: no verified public score found

Coding:

- Terminal-Bench 4.0: **50.3%** vendor / **55.56%** Artificial Analysis (see agentic section)
- Terminal-Bench-Science 0.1: **58.3%** (BenchLM ledger)
- SciCode: **55.1%** (Requesty model card)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE / FrontierCode 2.0 / Vibe Code Bench: no verified public score found (Requesty's chart references SWE-bench Verified and MMLU-Pro but publishes no values in the text)

Long context:

- 1.1M tokens total / 128K max output (Requesty reading of OpenAI's spec; AA lists 1.0M) and a 272K-token long-context pricing threshold — but **no long-context retrieval benchmark (MRCR / RULER / GraphWalks) was published for GPT-6.1 Terra**: no verified long-context retrieval figure found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Frontier-adjacent agent profile: Terminal-Bench 4.0 55.56% on Artificial Analysis's own 66-task mini-swe-agent run (level with GPT-6.1 Sol max 56.1%, behind GPT-6 Astra 59.1%), Agents' Last Exam 60.0%, Terminal-Bench-Science 0.1 58.3%, OSWorld 2.1 offline 74.2%, and AA Intelligence Index 51 (top decile of its price class). Capped below the 90–100 band by the absence of any published GDPval-AA Elo, AA-Briefcase Elo or Tau3/Tau2 figure, and by OpenAI's own statement that Sol/Astra remain the better pick for the hardest coding work.
- **Reasoning: 80/100.** Humanity's Last Exam 46.2% (above the 40% reference line), SciCode 55.1%, AA Intelligence Index 51 (v5.0) against a class median of 38, Terminal-Bench-Science 58.3%, LiveBench 2.0 77.8, and a 4.3% error rate at max effort on OpenAI's internal hallucination set. Capped by no published GPQA Diamond, CritPt or Omniscience score, so the 90+ reference (GPQA 90%+ / HLE 40%+ / MRCR 95%+ / Index 60+ together) is not met.
- **Context window: 96/100.** 1.1M total tokens with 128K max output (OpenAI spec via Requesty; Artificial Analysis 1.0M) — top of the ≥1M tier band. Not 100 because no ≥98% retrieval-at-512K+ measurement exists for this model; a 272K long-context price step also lands on real workloads.
- **Multimodal: 80/100.** Text + image in with text out (AA spec), a top-tier MMMU-Pro 85.5% and real computer-use/screen work (OSWorld 2.1 offline 74.2%, Agents' Last Exam 60.0%) place it in the upper image band. Capped below the 90–100 band because no audio or video input exists and no vision-specific independent leaderboard beyond MMMU-Pro was published.
- **Coding: 80/100.** Terminal-Bench 4.0 50.3% vendor / 55.56% independent, Terminal-Bench-Science 0.1 58.3% and SciCode 55.1% (at the SciCode reference line) are solidly above mid-tier. Capped well below the 90–100 reference (DeepSWE 74%+, Terminal-Bench 2.1 85%+, SciCode 55%+ together) by no public SWE-bench Verified, LiveCodeBench or DeepSWE number, and by OpenAI steering hard engineering work to Sol and Astra.
- **Cost efficiency: 88/100.** $1.00 input / $5.00 output per 1M with a 95% cached-read discount ($0.05) and $1.25 cache write — half the price of GPT-5.6 Terra and GPT-6.1 Sol, with a $0.73 blended rate (7:2:1) and Artificial Analysis at $0.96 per Intelligence Index task for the max variant ($0.07 for the low variant). Penalising factors: output at 5× input, the long-context step to $2/$7.50 above 272K tokens, and web-search tool fees; there is no free tier.
- **Overall Score: 84.8/100.** Half-up mean of the five quality dims (88 + 80 + 96 + 80 + 80) / 5 = 84.8. Best fit: high-volume computer-use and document/visual-reasoning agents where Terra's half-Sol price and 91 t/s decode speed matter; weaker fit for frontier software engineering or knowledge-heavy reasoning, where GPT-6.1 Sol, GPT-6 Astra or Claude Opus 5.5 are the better buy even at 2–4× the token price.

### Agreement notes (conflicting readings)

- **Terminal-Bench 4.0 (50.3% vs 55.56%):** OpenAI's 50.3% and Artificial Analysis's 55.56% are different harness runs (OpenAI's own agent setup vs AA's 66-task mini-swe-agent, avg@3). Terminal-Bench states that scores are not comparable across versions or harnesses, so both are cited and neither is averaged. OpenAI's own figure is also the one against GPT-5.6 Terra's published 21.5%.
- **Intelligence Index (51 vs 48):** the AA model page now reports 51 for the max variant, while emergent.sh (2026-10-27) quotes AA at 48 and rank #25 of 221 — index-version and variant drift (AA moved to Index v5.0 with a partly private eval set); the current 51 is the live number.
- **Latency (0.96 s vs 233.43 s):** the AA release page's headline 0.96 s time-to-first-answer-token belongs to the **non-reasoning** variant, while AA's model page reports 233.43 s TTFT for the Max reasoning variant (class median 3.66 s). Both are real but describe different variants — reasoning "thinking" time dominates the Max variant.
- **Speed claim vs measured throughput:** OpenAI's "3× faster tasks than GPT-6 Astra and GPT-6.1 Sol" is a wall-clock task-completion claim; Artificial Analysis measures 90.9 output tokens/s (rank #80/196, class median 83.6 t/s), i.e. only modestly above average decode speed. The two are not the same quantity.
- **Context window (1.1M vs 1.0M vs 128K):** OpenAI's spec via Requesty says 1.1M total / 128K output, Artificial Analysis lists 1.0M, and the dataset's scaffolded `meta.json` for this folder says "128K total" — that scaffold value is wrong and is not used.
- **Pricing variants:** standard $1/$5, EU in-region Azure $1.20/$6 on OpenRouter, long-context tier $2/$7.50 above 272K, and a Flex variant near $0.50/1M input; Batch/Build/Launch/Grow prices are unpublished on the vendor page.
- **Provenance mix:** Agents' Last Exam, OSWorld 2.1 offline subset and Terminal-Bench-Science 0.1 numbers reach this report through BenchLM's source-linked ledger; HLE 46.2% and SciCode 55.1% are transcriptions on Requesty's model card (which cites Artificial Analysis/model cards) rather than values read from AA's own per-evaluation tables; Terminal-Bench 4.0 50.3%, the Agents' Last Exam delta and the error-rate set are vendor-authored.
- **Access caveat:** no OpenCode Zen route for `gpt-6.1-terra` exists in the current catalogue (only `gpt-5.6-terra`), so the dataset's `opencode/gpt-6.1-terra` id is not a purchasable Zen path today.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-30
- Method: public internet research (OpenAI launch page and API pricing docs via mirrors, Artificial Analysis release + model pages, OpenRouter and Requesty model listings, BenchLM-linked benchmark ledger via emergent.sh, kingy.ai and eigent.ai analyses, activepieces pricing teardown, livebench.ai leaderboard row, OpenCode Zen catalogue check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Terra.md`, using the same headings.
