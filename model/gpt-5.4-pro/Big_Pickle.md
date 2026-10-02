# GPT 5.4 Pro — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.4-pro`, API model `gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** The top-performance tier of OpenAI's GPT-5.4 family, launched 2026-03-05 alongside the flagship/Thinking tier. It is a Pro compute deployment on ChatGPT Pro/Enterprise and in the Responses API only, aimed at expert reasoning, abstract generalization and deep research rather than throughput work.
- **Provider / access:** OpenAI API model `gpt-5.4-pro`, Responses API only (no Chat Completions; background mode recommended because requests can take minutes); ChatGPT Pro/Enterprise; OpenCode Zen `opencode/gpt-5.4-pro`.
- **Release / knowledge:** released 2026-03-05; knowledge cutoff not published on the model page (GPT-5.4 generation reports a 2025-12 lineage).
- **IDs:** `opencode/gpt-5.4-pro` (Zen, standard pricing); upstream `gpt-5.4-pro`.
- **Context window:** 1,050,000 tokens total, 128,000 max output; prompts above 272K input tokens are billed at 2× input and 1.5× output for the whole session.
- **Modalities:** text and image input; text output; reasoning effort medium (default), high, xhigh; tool calls; native computer use inherited from the GPT-5.4 family.
- **Pricing (as of 2026-10-02):** $30.00 in / $180.00 out per 1M up to 272K input tokens (2× / 1.5× above that, for standard, batch and flex); no free tier and no published cached-input rate.
- **Architecture:** proprietary; Pro compute tier over the GPT-5.4 generation, weights not published.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (#4–5 of 31; OpenAI 2026-03-05 launch figures, #6/51 on LLMLearner's thinking-high run)
- GDPval-AA (win/tie rate): **82.0%** (#2–4); the standard GPT-5.4 Thinking tier scores 83.0% — OpenAI's own chart flags this
- MCP Atlas (36 MCP servers): **67.2%** (GPT-5.4 family tier, not Pro-specific)
- Toolathlon: **54.6%** (GPT-5.4 family tier)
- τ²-bench Telecom (no reasoning): **64.3%** (GPT-5.4 family tier)
- OSWorld-Verified: **75%** (GPT-5.4 Thinking, first model reported above human 72.4%)
- Agent Island (multiagent games): **0.89**; PinchBench: **18.5%**
- Tau3-Banking / Tau2-Bench (Pro-specific): no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (#2–5 of 455; **94.6%** on LLMLearner's xhigh no-tools run, #4/187)
- Humanity's Last Exam: **42.7%** no tools; **58.7%** with tools (#4/444, #5/173)
- FrontierMath Tier 1–3: **50.0%** (#3); FrontierMath Tier 4: **38.0%** (#2/50); FrontierMath Tier 4 v2 (xhigh): **58.5%** (#9/41); FrontierMath v2 (xhigh): **82.5%** (#7/43)
- ARC-AGI-1 (Verified): **94.5%** (#10–15); ARC-AGI-2 (Verified): **83.3%** (#8/84)
- CritPt (xhigh, no tools): **30.0%** (#7/122)
- GeneBench-Pro: **16.3%** (#8/29); Frontier Science Research: **36.7%**
- Epoch Capabilities Index: **157.83** (#7/193) / 159 (#9/167)
- SimpleBench: **74.1%** (#6/55); MultiChallenge: **69.2%** (#3/34); BilliardPhys-Bench: **72.3%** (#2/13); MathArena Apex: **69.8%** (#3/15)

Coding:

- No GPT-5.4 Pro-specific coding row published: OpenAI's table reports BrowseComp, HLE, GPQA, FrontierMath, ARC-AGI and GDPval for the Pro tier
- SWE-bench Pro: **57.7%** (GPT-5.4 Thinking, matching GPT-5.3-Codex) — nearest same-family proxy
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Terminal-Bench (Pro-specific): no verified public score found

Long context:

- No Pro-specific MRCR / RULER / GraphWalks row published; GPT-5.4's 1M context is listed as experimental in Codex/API
- Nearest family datapoints: GraphWalks BFS/parents <128k 94.0%/89.0% on the GPT-5.2 lineage

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 89.3% and GDPval-AA 82.0% are Pro-measured and near the top of their boards, backed by family-level MCP Atlas 67.2%, Toolathlon 54.6% and OSWorld-Verified 75%; capped by the absence of any Pro-specific Tau2/Tau3 or terminal row and by a GDPval result its own standard tier beats.
- **Reasoning: 86/100.** GPQA Diamond 94.4–94.6% (#5/455), FrontierMath Tier 4 38.0% (#2/50), FrontierMath Tier 4 v2 58.5%, ARC-AGI-2 83.3% and ECI ~158 (#7/193) mark a top-tier reasoner; capped by HLE 42.7% no-tools, CritPt 30.0% and GeneBench-Pro 16.3%.
- **Context window: 88/100.** A verified 1,050,000-token window with a 128,000-token output ceiling, though the >272K surcharge makes real 1M sessions costly; no Pro-specific long-context retrieval numbers were published, which keeps it below the 1M entries with measured MRCR behavior.
- **Multimodal: 74/100.** Text and image input with text output and the family's native screenshot-based computer use, but no Pro-specific vision benchmark and no audio or video ingestion.
- **Coding: 76/100.** Every Pro coding number is unmeasured — OpenAI published none — so the score rests on the sibling GPT-5.4 Thinking tier's SWE-bench Pro 57.7%; that is a reasonable same-family proxy but leaves the Pro tier unverified on Terminal-Bench, LiveCodeBench and SWE-bench Verified.
- **Cost efficiency: 30/100.** $30/$180 per 1M below 272K input, doubling input and 1.5×-ing output beyond it, with no free tier or cache discount — the joint-highest output price in this dataset.
- **Overall Score: 81.6/100.** Half-up mean of the five quality dims. Best fit as a paid reasoning and deep-research specialist (BrowseComp, FrontierMath, ARC-AGI), where the Pro premium is justified — not for coding or high-volume work, where GPT-5.4 Thinking at $2.50/$15 or GPT-5.5 at $5/$30 is the rational buy.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.4 model docs and launch figures, BenchmarkList, LLMLearner, DataLearnerAI, Model Beats, Is It Good AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.

---