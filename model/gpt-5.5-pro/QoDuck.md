# GPT-5.5 Pro — findings by QoDuck

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's maximum-accuracy deep-reasoning variant of GPT-5.5 (Apr 2026) — the same model with parallel test-time compute and tool access, optimized for high-stakes complex work. Elite reasoning (HLE 57.2% with tools, 98th percentile; GPQA 93.9%; ARC-AGI-2 84.6%) at a 6x price premium over base GPT-5.5. First model to integrate o-series reasoning into the standard GPT line.
- **Provider / access:** OpenAI API `gpt-5.5-pro` (default snapshot `gpt-5.5-pro-2026-04-23`) at `https://developers.openai.com`. **Responses + Batch endpoints only** (no Chat Completions, Assistants, fine-tuning, embeddings). OpenRouter `openai/gpt-5.5-pro`. Proprietary. Requests can take several minutes — background mode recommended.
- **Release / knowledge:** GPT-5.5 shipped 2026-04-23; GPT-5.5 Pro available in the API 2026-04-24. Knowledge cutoff 2025-12-01 (official model docs).
- **IDs:** `openai/gpt-5.5-pro` (API + OpenRouter), snapshot `gpt-5.5-pro-2026-04-23`. No Free tier — premium paid API.
- **Context window:** 1,050,000 tokens; max output 128,000 (verified from official developers.openai.com model docs). Base GPT-5.5 uses a 400K context in Codex.
- **Modalities:** Text + image in → text out (official; audio/video not supported). Reasoning: yes (`medium`, `high` default, `xhigh`; parallel test-time compute). Tool calls: yes. JSON mode: via `response_format`.
- **Pricing (as of 2026-11-10, official Standard):** $30.00 in / $180.00 out per 1M; **no cached-input discount** (official docs). 6x base GPT-5.5 ($5 in / $30 out / $0.50 cached). Batch/Flex at half (~$15 in / $90 out, the second OpenRouter entry); priority processing 2.5x; regional/data-residency +10%.
- **Architecture:** Proprietary (OpenAI; params undisclosed). Same base weights as GPT-5.5 with parallel test-time compute ("a higher-accuracy variant that uses parallel test-time compute", appwrite; openreview confirms "the same model with parallel test-time compute and tool access").

### Raw benchmarks found

> GPT-5.5 Pro-specific values are named where published (benchmarklist, lmcouncil, nexos, unitool, atlabyte). OpenAI's launch chart reports most coding/computer-use benchmarks for BASE GPT-5.5 only — these are provisional lower-bound proxies for Pro (Pro ≥ base, same model + more compute), clearly labeled. Vendor launch numbers are self-reported (appwrite caveat). Absent benchmarks marked "no verified public score found".

Agent / tool use:

- BrowseComp (**Pro-specific**): **90.1%** (benchmarklist rank 11/70; unitool: best result, vs Opus 4.7 79.3% / Gemini 3.1 Pro 85.9%). Base GPT-5.5: 84.4%.
- GDPval (wins/ties vs human, **Pro-specific**): **82.3%** (benchmarklist, rank #3/18). Base GPT-5.5 launch chart: 84.9% (version/cohort differs — see conflicts).
- OSWorld-Verified (**base proxy**): **78.7%** (base GPT-5.5 xhigh; Pro-specific not published)
- Terminal-Bench 2.0 (**base proxy**): **82.7%** (base GPT-5.5 xhigh)
- Tau2-Bench Telecom (**base proxy**): **98.0%** (base GPT-5.5); Toolathlon 55.6%; MCP Atlas 75.3% (base)
- GDPval-AA Elo / Tau3-Banking: **no verified public Pro-specific score found** (GDPval reported as %-wins; Tau2 not Tau3)

Reasoning / knowledge (Pro-specific):

- GPQA Diamond: **93.9%** ±1.6 (xhigh, lmcouncil rank #4; base GPT-5.5 94.0%) — clears the 90%+ anchor
- HLE / Humanity's Last Exam: **57.2% with tools / 43.1% without** (benchmarklist rank 12/491, 98th percentile; atlabyte/openreview confirm 57.2%). Base GPT-5.5: 52.2% w/tools / 41.4% no-tools.
- ARC-AGI-2: **84.6%** (High; benchmarklist rank 15/115, also rank 2/71 "ARC-AGI v2" 99th pct; nexos GPT-5.5-pro-high 84.6% at $10.51/task). X-high 84.2%.
- ARC-AGI-1: **96.5%** (High, benchmarklist rank 13/113; $4.53/task). X-high 95.0%.
- FrontierMath (2025-02-28 private): **52.4%** (rank 7/37); FrontierMath Tier 4 (2025-07-01): **39.6%** (rank 6/24). Base Tier-4 35.4%.
- SimpleBench: **76.9%** (benchmarklist, rank #3/36)
- GeneBench (**Pro-specific science**): **33.2%** (rank #1/16; base 25.0%); GeneBench-Pro 20.5%; TaxBench 29.3% (rank #1); BLXBench 44.5%; CADGenBench 0.387
- Artificial Analysis Intelligence Index (Pro-specific): **no verified public score found** (AA evaluates base/default; BenchGecko lists Pro #2 on a BBH/GPQA/HLE/ARC-AGI-2/SimpleBench composite)
- AIME / MMLU-Pro / CritPt: **no verified public Pro-specific score found**

Coding (Pro-specific NOT published — base GPT-5.5 proxies, Pro ≥ base):

- SWE-Bench Pro (Public, **base proxy**): **58.6%** (base xhigh; Opus 4.7 64.3% leads)
- DeepSWE 1.1 (**base proxy**): **67%** ±6% (mini-swe-agent Pass@1; below the 74% anchor)
- FrontierSWE (**base proxy**): **73%** dominance (Codex); FrontierCode 1.1 43% (pass rate 48.2%); Expert-SWE (internal) 73.1%
- SWE-bench Verified: **no verified public score found** (OpenAI published SWE-Bench Pro, not Verified, for this generation)
- LiveCodeBench / SciCode / Pro-specific Terminal-Bench or DeepSWE: **no verified public score found**

Multimodal (image):

- MMMU-Pro (**base proxy**): **83.2%** with tools (base GPT-5.5 xhigh; Pro-specific not published)
- Video / audio benchmarks: **no verified public score found** (text+image only)

Long context:

- 1,050,000-token window verified. Base GPT-5.5 MRCR v2 (8-needle) **74% at 512K–1M**; GraphWalks BFS >128K 45.4% / parents 58.5% (base proxies). **No Pro-specific ≥98% retrieval at 512K+** — Context capped below 100.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 90/100.** Pro-specific BrowseComp 90.1% (best-in-class) and GDPval 82.3% (#3 wins/ties) are elite; base proxies OSWorld-Verified 78.7%, Tau2 Telecom 98% and Terminal-Bench 2.0 82.7% support strong agentic capability. Capped below the high-90s because GDPval is a %-wins metric (not the ~1750 Elo anchor), Terminal-Bench 2.0 82.7% is under the 88% anchor, and Pro-specific computer-use scores aren't published.
- **Reasoning: 93/100.** GPQA Diamond 93.9% clears the 90% anchor; HLE 57.2% with tools (98th percentile) hugely clears the 40% anchor; ARC-AGI-2 84.6% (99th pct), ARC-AGI-1 96.5%, FrontierMath 52.4% and SimpleBench 76.9% confirm elite reasoning. Capped below 95 by ARC-AGI-2 (84.6%) trailing the latest 94%+ models and no Pro-specific AA Intelligence Index.
- **Context window: 95/100.** 1,050,000 tokens (128K output) verified, in the ≥1M = 95–100 tier. Held at 95 because the only retrieval evidence (base MRCR v2 74% at 512K–1M) is below ≥98% and not Pro-specific.
- **Multimodal: 68/100.** Text + image in → text out (official; no audio/video). Base MMMU-Pro 83.2% (with tools) is a strong image proxy. Per the +image = 60–70 band; Pro-specific MMMU-Pro not published.
- **Coding: 87/100.** Base GPT-5.5 proxies (Pro ≥ base, same model + parallel compute): Terminal-Bench 2.0 82.7%, SWE-Bench Pro 58.6%, FrontierSWE 73% are strong. Capped because DeepSWE 67% is below the 74% anchor, SWE-bench Verified is unpublished, and NO Pro-specific coding benchmark exists — proxies are provisional, not measured Pro values.
- **Cost efficiency: 10/100.** $30 in / $180 out with no cache discount is an extreme premium (6x base GPT-5.5, ~3x the $10/$50≈30 anchor point); Batch ~$15/$90 halves it. Justifiable only for high-stakes, accuracy-critical work where latency (minutes) and cost are secondary.
- **Overall Score: 86.6/100.** Mean of (90 + 93 + 95 + 68 + 87) = 433 / 5 = 86.6. Best fit: maximum-accuracy deep reasoning for high-stakes science/math/analysis (HLE 98th pct, GPQA 93.9%, FrontierMath) where the $30/$180 premium and multi-minute latency are acceptable — not a cost-efficient daily driver.

### Conflicting-results notes

- **Pro vs base benchmarks:** Pro is the same model with parallel test-time compute, so Pro ≥ base. Pro-specific published values exceed base where measured: BrowseComp 90.1% (Pro) vs 84.4% (base); HLE w/tools 57.2% (Pro) vs 52.2% (base); FrontierMath Tier-4 39.6% (Pro) vs 35.4% (base); GeneBench 33.2% (Pro) vs 25.0% (base). Coding/computer-use (Terminal-Bench 2.0 82.7%, SWE-Bench Pro 58.6%, DeepSWE 67%, OSWorld 78.7%, MMMU-Pro 83.2%) are BASE-only — used as provisional lower-bound proxies, not Pro measurements.
- **GDPval:** Pro 82.3% wins/ties (benchmarklist, rank #3/18) vs base launch-chart 84.9% (appwrite) — different GDPval version/cohort; both are %-wins, not Elo. The ~1750 Elo top-band anchor is not directly applicable.
- **GPQA Diamond:** Pro 93.9% ±1.6 (lmcouncil xhigh, rank #4) vs base 94.0% (lmcouncil) / 93.6% (appwrite) — within error bars; essentially tied.
- **ARC-AGI-2:** Pro 84.6% High (benchmarklist/nexos, $10.51/task) vs base GPT-5.5 85% (llm-stats xhigh) — Pro's parallel-compute High setting ≈ base xhigh; nexos notes base-high 85% at $1.87 vs Pro-high 84.6% at $10.51 (5.6x cost for no ARC gain).
- **Pricing tier:** official Standard $30/$180 (no cache); OpenRouter lists both $15/$90 (Batch/Flex, half rate) and $30/$180 (Standard). The $30/$180 Standard figure is used for Cost scoring.
- **Self-reported caveat:** appwrite stresses OpenAI's launch chart is vendor self-reported "until independently evaluated"; Pro-specific reasoning values (HLE, ARC, GPQA, FrontierMath) are corroborated by independent trackers (benchmarklist, lmcouncil, nexos, unitool, atlabyte).
- **Not published Pro-specifically:** SWE-bench Verified, AIME, AA Intelligence Index, Terminal-Bench, DeepSWE, MMMU-Pro, OSWorld — marked accordingly with base proxies where relevant.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official developers.openai.com model docs (primary, fetched directly) cross-checked against benchmarklist, lmcouncil, nexos, unitool, atlabyte, appwrite launch analysis, llm-stats, OpenRouter and the OpenReview system-level-reasoning paper; ≥4 successful independent web searches; Pro-vs-base and vendor-vs-independent conflicts reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.5 Pro — official OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [Introducing GPT-5.5 — OpenAI announcement](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchmarkList — GPT-5.5 Pro scores & evals](https://benchmarklist.com/models/openai-gpt-5.5-pro/)
  - [lmcouncil — AI model benchmarks (GPQA Diamond)](https://lmcouncil.ai/benchmarks)
  - [nexos.ai — GPT-5 benchmarks performance analysis](https://nexos.ai/blog/gpt-5-benchmarks/)
  - [appwrite — GPT-5.5 launch benchmarks & pricing](https://appwrite.io/blog/post/gpt-5-5-launch)
  - [llm-stats — GPT-5.5 benchmarks, pricing & context](https://llm-stats.com/models/gpt-5.5)
  - [OpenRouter — openai/gpt-5.5-pro](https://openrouter.ai/openai/gpt-5.5-pro)
  - [unitool — GPT-5.5 vs Claude & Gemini benchmark comparison](https://unitool.ai/en/blogs/chatgpt/gpt-5-5-protiv-claude-i-gemini-prostoe-sravnenie-po-benchmarkam)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.