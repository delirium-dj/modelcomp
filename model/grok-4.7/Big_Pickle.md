# Grok 4.7 — findings by Big Pickle

- Source: xAI `grok-4.7` (`xhigh` reasoning effort; 4 effort levels up to xhigh)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (SpaceXAI / xAI; not a Free-tier model)
- **Short description:** Released **2026-09-21** — five days before this report — as xAI's most capable model for coding and knowledge work. xAI's pitch is price-performance: same $2/$6 as Grok 4.6, "twice as fast, at half the price of comparable models," on a **larger 210B-parameter base** that now includes SpaceX data in training. The independent read is more measured: an AA Intelligence Index of 46 (#21 of 211, versus a class median of 26) makes it genuinely strong, and it leads the field on EEBench and the Harvey legal-agent benchmark — but xAI's own launch table concedes Claude Fable 5.1 Max is ahead on four of seven benchmarks, and an independent retest puts its Terminal-Bench 4.0 at 26% against GPT-6 Astra's 60%. The real cost catch is verbosity: 240M output tokens on the AA Index against a median of 88M.
- **Provider / access:** xAI API, plus **3 providers** tracked by Artificial Analysis. Live in **Cursor on all plans** and as the **default model in Grok Build**, and served through third-party coding harnesses, model routers and cloud platforms. A **fast variant** is offered at double output speed for **$4 in / $12 out** per 1M. Try-for-free tier advertised by xAI.
- **Release / knowledge:** 2026-09-21. Model card: `media.x.ai/v1/website/4p7card-5eccc980.pdf`. **Knowledge cutoff not published** in any source located; xAI's documented Grok cutoff for the 4.5/4.6 generation is 2026-02-01, so 4.7 is at least that current. Live search remains the answer for current events.
- **IDs:** `grok-4.7`, with four reasoning effort levels up to `xhigh` — the configuration Artificial Analysis benchmarks and the one xAI's headline numbers use. No OpenCode Zen Free ID — paid xAI model.
- **Context window:** **500,000 tokens** (xAI API docs and AA; ≈750 A4 pages). Note this is a *reduction* from Grok 4.1/4.2's 2M and matches Grok 4.5/4.6 at 500K. Pricing doubles for prompts ≥200K tokens. **No long-context retrieval result (AA-LCR v1.1, MRCR, RULER) has been published as a standalone score**, although AA-LCR v1.1 contributes to the Intelligence Index composite.
- **Modalities:** In: text, **image**. Out: text. Reasoning: yes, four effort levels. Native tool use, function calling, structured outputs, web search and X search. Prompt caching: yes, with a 75% cache discount.
- **Pricing (as of 2026-09-26):** **$2.00 in / $6.00 out per 1M tokens**, unchanged from Grok 4.6. Cache discount 75%. Blended **$1.35/1M** at a 7:2:1 cache-hit ratio ($3.00 at 3:1). Prompts reaching 200K tokens bill at $4.00 in / $1.00 cached / $12.00 out. Fast variant: $4 / $12. No free programmatic tier.
- **Architecture:** Proprietary, **~210B parameters** (KuCoin, citing the release report) — the first xAI release to disclose a parameter figure. Served at the same price and speed as Grok 4.6 despite the larger base.
- **Safety:** Ships with what xAI calls its best-calibrated safeguards to date, using a new architecture for safely refusing jailbreaks. On HackerBench v0.3, only **3.3%** of risky dual-use prompts passed.

### Raw benchmarks found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **46**, #21/211 in class — **4 out of 4 units** for intelligence, class median 26. This is a real independent measurement, not a vendor claim, and it is five days old
- **AA-Briefcase v1.1: 1657 Elo** (agentic knowledge work) — Grok 4.6: 1546; Claude Fable 5.1 Max: 1678
- **GDPval-AA v2.1: 1695 Elo** (agentic real-world work) — Grok 4.6: 1605; GPT-6 Astra max: 1542; Claude Fable 5.1 Max: 1735
- GPQA Diamond / AIME 2025 / HLE / MMLU-Pro: **no standalone public score found.** These feed the AA Index composite, but the individual values were not published
- CritPt: **no verified public score found**
- AA-Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- BenchLM overall: **no public overall score found** (model too new)

Agent / tool use:

- Terminal-Bench 4.0: **38.0%** per xAI's launch table (xhigh) — up sharply from **20.3%** on Grok 4.6. **Conflict:** the-decoder reports an independent retest at **26%**, against GPT-6 Astra at 60%, with even DeepSeek V4.1 Flash edging past it. xAI's own table puts Fable 5.1 Max ahead here
- AA-Briefcase and GDPval-AA (above) are the two strongest tool-use-adjacent signals, both in the 1650–1700 Elo range
- AutomationBench-AA, τ³-Banking, ITBench-AA, EnterpriseOps-Gym-AA, AA-AnalystAgent: **no standalone public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Coding:

- **DeepSWE v1.1: 71.0%** (xhigh) — Grok 4.6 (high): 65.2%; Claude Fable 5.1 Max: 70.0%; GPT-5.6 Sol Max: 72.7%. Ahead of Fable, just behind GPT-5.6 Sol
- **CursorBench 4.0: 46.3%** — Grok 4.6 (high): 40.4%. xAI reports being "at the frontier in price-performance" here, but concedes Fable 5.1 Max leads the absolute score
- SciCode / AA-SciCode, SWE-bench Verified / Pro, Vibe Code Bench, AA Coding Index: **no verified public score found**
- **EEBench: 64.0%** (electrical engineering) — GPT-5.6 Sol: 39.4%; Claude Fable 5.1: 56.4%. **Leads the compared field**

Domain / professional:

- **Harvey Legal Agent Benchmark: 19.6%** — highest of the four models xAI compared
- **HealthBench Professional: 56.7%**; xAI's own table shows it trailing competitors on some clinical benchmarks
- EEBench 64.0% as above

Performance and cost efficiency (AA, measured on xAI's own API):

- Output speed: **47.5 tok/s** — #151/211, "notably slow", class median 79.5
- Time to first token: **1.52 s** — very competitive, class median 3.75 s
- Verbosity: **240M output tokens** across the Intelligence Index vs a class median of 88M — roughly 2.7x
- Cost per Intelligence Index task: **$3.74** — 4 out of 4 units for cost

### Normalized scores (1–100)

- **Tool use: 84/100.** The professional-work evidence is as good as it gets outside the very top: **GDPval-AA 1695 Elo** and **AA-Briefcase 1657 Elo** are both elite figures, and both are independent AA measurements rather than vendor claims. 84 rather than 90+ because the terminal side is the weak half — Terminal-Bench 4.0 is 38.0% on xAI's own numbers and only **26% on independent retest**, versus 60% for GPT-6 Astra — and because AutomationBench, τ³-Banking, ITBench and EnterpriseOps have published no standalone figures at all. Elite at professional knowledge work, mediocre at driving a terminal.
- **Reasoning: 78/100.** An AA Intelligence Index of **46** (#21/211, 4 out of 4 units, against a median of 26) is a strong, current, independent verdict. The cap at 78 is the missing detail: with no published GPQA Diamond, AIME 2025, HLE or MMLU-Pro value, there is no way to see *where* the intelligence comes from. GDPval and Briefcase measure professional output quality, not frontier knowledge recall, and HLE — the dimension where Grok 4.20 scored only ~31% — is simply not visible here.
- **Context window: 84/100.** 500K is a documented xAI contract and lands in the 200K–1M tier, well clear of the sub-200K penalty most models take. Not higher because 500K is a *step down* from the 2M that Grok 4.1 and Grok 4.2 offered, and because no AA-LCR v1.1, MRCR or RULER figure was ever published — the long-context dimension is inferred from the spec, not measured.
- **Multimodal: 70/100.** Text and **image** in, text out — the "+image in = 60–70" tier, taken at the top. No audio, no video, no PDF input, no non-text output.
- **Coding: 86/100.** The model's whole reason for existing, and it delivers. **DeepSWE v1.1 at 71.0%** edges past Claude Fable 5.1 Max (70.0%) and sits just behind GPT-5.6 Sol Max (72.7%); **CursorBench 4.0 at 46.3%** clears methodology's >45% frontier bar while rising 5.9 points over Grok 4.6; **EEBench 64.0%** leads the entire compared field. Not higher because the launch table's Terminal-Bench 4.0 is 38.0% and the independent retest is 26% — a model that tops DeepSWE and then drops to a quarter on multi-hour terminal work has a real reliability ceiling on long autonomous runs.
- **Cost efficiency: 86/100.** $2.00 in / $6.00 out is mid-tier, not cheap: the ~$0.60/$2.20 reference anchors ~92, and this is well above it. AA's own efficiency verdict is better than the sticker price suggests — **4 out of 4 units for cost**, $1.35/1M blended with caching, and 4 out of 4 units for verbosity efficiency — and xAI's "half the price of comparable models" claim holds against Claude Fable 5.1 and GPT-5.6 Sol Max. The drag is real and measurable: **240M output tokens vs an 88M median** means per-task cost climbs fast on long agentic loops, and prompts past 200K double to $4/$12.
- **Overall Score: 80.4/100.** Mean of the five quality dims: (84 + 78 + 84 + 70 + 86) / 5. **Best fit — a strong, cheap, brand-new coding-and-knowledge-work pick, chosen with eyes open.** It beats Fable 5.1 Max on DeepSWE, EEBench and the Harvey legal benchmark; beats GPT-6 Astra Max on GDPval; and it is five days old with an independent 46 on the AA Index. Accept three things: it is **slow** (47.5 tok/s, bottom third of its class) and **extremely verbose** (2.7x median tokens), which together make it feel expensive in wall-clock and token terms despite the fair price; its **500K window is smaller** than the 4.1/4.2 generation; and its **Terminal-Bench result disagrees with itself** — 38% vendor, 26% independent, against 60% for the leader. Route long autonomous terminal jobs elsewhere and use Grok 4.7 for patch-and-fix and professional knowledge work.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (xAI launch post `x.ai/news/grok-4-7`, Grok 4.7 model card PDF `media.x.ai/v1/website/4p7card-5eccc980.pdf`, xAI API model docs, Artificial Analysis model page, aimodeling, Gate News, the-decoder, KuCoin, alishangtian, dzone, AI Weekly); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated, and the vendor-vs-independent Terminal-Bench conflict is reported as a conflict rather than resolved in the model's favour.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
