# Grok 4 — findings by Space Bunny Alpha

- Source: xAI (`grok-4`, snapshot `grok-4-0709`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Correction to my own earlier report.** A previous Space Bunny Alpha file for this
> slug scored it **45.2/100**. Re-researched 2026-10-01, it scores **72/100**. The
> earlier figure appears to have been scored against Grok 4's weak abstract-reasoning
> and frontier-math rows in isolation rather than against its full measured profile.
> The revision is recorded rather than quietly replaced.

## Model card

- **Name:** Grok 4
- **Short description:** xAI's frontier reasoning model, released **2025-07-09/10**, trained with large-scale reinforcement learning on xAI's **Colossus** cluster (200,000 H100s, Memphis — xAI-confirmed) and shipped with **native, RL-trained tool use and real-time search across X and the web**. Critically, the tool calling is **baked into training, not post-hoc function-call injection**. It is the model that first broke 50% on Humanity's Last Exam — a result delivered by the **Heavy** variant. Not a variant or alias of another entry in this dataset; **Grok 4 Heavy** is a separate multi-agent product and **Grok 4 Fast** is a separate cheaper line with a much larger window.
- **Provider / access:** **xAI API** (`grok-4`), plus **SuperGrok** consumer subscription (~$30/month, includes DeepSearch and Big Brain Mode) and **SuperGrok Heavy** (~$300/month, the most expensive consumer AI subscription at launch). EU (Ireland) and US data residency routes; **zero data retention on pay-as-you-go**, no training by default, GDPR DPA available. Minimal OpenAI-SDK migration cost. `grok-4-0709` is **deprecated** in favour of `grok-4`.
- **Release / knowledge:** released **2025-07-09** (API), some trackers record 2025-07-10. Knowledge cutoff **2024-12-31** — older than most of the 2026 frontier, and a real constraint for anything current-events-shaped. Parameter counts **not disclosed**; third-party MoE-backbone estimates circulate but are **unverified** and are not treated here as specification.
- **IDs:** `grok-4` (xAI API, current); `grok-4-0709` (dated snapshot, deprecated). Opper gateway routes: `xai/grok-4`, `xai-zdr/grok-4`, `xai/grok-4-eu`, `xai-zdr/grok-4-eu`.
- **Context window:** **256,000 tokens** (xAI docs; Artificial Analysis, Opper, LLM Stats and Awesome Agents all agree). **Max output is inconsistently reported**: Awesome Agents and LLM Stats give **8,000 tokens**, Opper gives **16,000**, modelbenchmark.io gives 256,000. The first-party xAI docs did not yield a figure in the sources reviewed; **8K is used here** because two independent trackers agree on it, and the discrepancy is flagged. For scale: the **Grok 4 Fast** line carries a **2M-token** window at $0.20/$0.50 — a 7.5× context increase for 1/30th the input price, which is the trade this slug is not.
- **Modalities:** **text and image in; text out** (xAI). Opper additionally lists **files and PDF input**. Tools and structured output supported. **No audio or video input** documented.
- **Pricing (as of 2026-10-01):** **$3.00 / MTok input, $15.00 / MTok output**, **cached input $0.75** (75% off), automatic prompt caching. **Long-context surcharge: prompts above 128K tokens bill at $6.00 / $30.00 per MTok.** Relative position: **5× cheaper than Claude Opus 4.6 ($15/$75) on both input and output**, but **above GPT-5.2 Thinking ($1.75/$14) and Gemini 3.1 Pro ($2.00/$10)**.

### Raw benchmarks found

Reasoning / knowledge:

- **GPQA Diamond: 87.5%** (xAI, launch) — Artificial Analysis records 88%; Epoch AI **87.0 ±2.0**
- **AIME 2025: 91.7%** (xAI); **HMMT 2025: 90%** (xAI); USAMO 2025 **37.5%** (xAI)
- **Humanity's Last Exam: 38.6%** with Python + internet / **25.4%** without tools (xAI); Artificial Analysis records 27%
- **ARC-AGI-2: 15.9%** (xAI) — the model's weakest frontier-adjacent number, and a large gap to GPT-5.2 Thinking (52.9%) and Gemini 3.1 Pro (77.1%)
- **MMLU-Pro: 83%** (xAI at launch) / **87%** (Artificial Analysis)
- **FrontierMath-v1: 19.7 ±2.3**; **FrontierMath-Tier-4: 1.0 ±0.0** (Epoch AI) — effectively at the floor on hard frontier maths
- **OTIS Mock AIME 2024-2025: 84.0 ±5.0**; **Chess Puzzles: 28.0 ±4.5** (Epoch AI)
- CritPt / AA-Omniscience / SciCode: **no verified public score found**

Agent / tool use:

- **Terminal-Bench Hard: 38%** (Artificial Analysis); AnotherWrapper records **Terminal-Bench 27.2%**
- **τ²-Bench Telecom: 75%** (Artificial Analysis)
- **APEX-Agents: 15.2%** (AnotherWrapper)
- **Vending-Bench: $4,694.15 net worth**, average of 5 runs (xAI) — a long-horizon business simulation where xAI reports Grok 4 "well ahead of other models and human baselines." This is the single most distinctive agentic number the model has, and it is vendor-run on xAI's own simulation.
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Toolathlon / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Capability claim, no numbers: **real-time search across X and the web, integrated into training.**

Coding:

- **SWE-bench Verified: 72.5%** (xAI launch) / **75%** (as cited by AnotherWrapper and automatio) — level with GPT-5 and Gemini 2.5 Pro, and above Claude Opus 4's 72.5% at 5× the price
- **LiveCodeBench: 79%** (xAI, Jan–May window); Grok 4 Heavy 79.4%
- **Aider Polyglot: 79.6%** (Aider, `high`, diff format, 2025-07-11)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- **Long-context reasoning: 68%** (Artificial Analysis; the aggregator labels this as AA's long-context metric at this model's vintage). No MRCR, RULER or GraphWalks figure was found, and **the 128K surcharge threshold means the top third of the window bills at double**.

Vision / multimodal:

- Text and image input documented; Opper additionally lists files and PDF.
- **No MMMU, MMMUPro, DocVQA, OmniDocBench or CharXiv figure was found** for this checkpoint.

Grok 4 Heavy (separate multi-agent variant — **not** this model):

- **HLE 44.4–50.7%** (text-only subset 50.7%) — the result that made Grok 4 the first model past 50% on HLE
- **AIME 2025: 100%** (with Python); **GPQA 88.4%**; LiveCodeBench 79.4%; SWE-bench est. 80%+
- Cost: **~$300/month** via SuperGrok Heavy, or high API compute. Latency can reach **30 minutes** on hard requests.
- Per aispectrum, the widely-quoted HLE 44.4% and GPQA 88.9% figures belong to Heavy, **not** to the single-agent Grok 4 — a distinction repeated here because it is the most common misattribution in this model's record.

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-scale, and the score reflects a genuine split rather than a judgment call. Up: **native RL-trained tool use with real-time X and web search baked into training** — not post-hoc injection — which is a real architectural advantage over function-call wrappers; **τ²-Bench Telecom 75%** is a solid service-workflow result; and **Vending-Bench $4,694.15 net worth** is the strongest long-horizon planning signal any model in this pass has published, ahead of the human baseline on xAI's own simulation. Down, and it is heavy: **Terminal-Bench Hard 38%** (AnotherWrapper: **27.2%**), **APEX-Agents 15.2%**. A model that tops a business simulation but sits bottom-decile on APEX-Agents is a strong planner and a mediocre executor — it reasons about a long horizon well and does not reliably complete many small mechanical steps. Also capped by **~30-minute worst-case latency** on hard requests, which is a practical limit on multi-step agent loops regardless of score.
- **Reasoning: 78/100.** Strong and specifically *shaped*. Up: **GPQA Diamond 87.5%** (88% on AA, 87.0 ±2.0 on Epoch AI — three trackers agree), **AIME 2025 91.7%**, **HMMT 2025 90%**, **MMLU-Pro 83–87%**. That is genuine graduate-level science and competition-maths capability. Capped at 78 by four weak areas that a headline would hide: **ARC-AGI-2 at 15.9%** against Gemini 3.1 Pro's 77.1% and GPT-5.2's 52.9%, **HLE 25.4% without tools**, **FrontierMath-v1 19.7%** and **FrontierMath-Tier-4 at 1.0 ±0.0**. A model at 87.5% GPQA and 91.7% AIME but 1.0% on Tier-4 frontier maths and 15.9% on ARC-AGI-2 is excellent at *reproducing* advanced reasoning and weak at *novel* abstract structure. The 2024-12-31 cutoff also puts a hard ceiling on anything current.
- **Context window: 74/100.** **256,000 tokens** with **68% long-context reasoning** (Artificial Analysis) — the methodology's 200K–500K band, scored in its upper half because there *is* a retrieval measurement behind the spec, which most models in this dataset lack. Two deductions, both documented: the **max-output figure is disputed across trackers** (8K / 16K / 256K) and no first-party number was recoverable, and an 8K–16K output ceiling is genuinely restrictive next to Opus 4.6's 128K; and **the rate doubles above 128K tokens**, so filling the window costs double on the portion beyond it. For a model whose own sibling line offers 2M tokens at $0.20/$0.50, 256K is a deliberate narrowing.
- **Multimodal: 72/100.** **Text, image and (per Opper) file/PDF input; text out.** Scored near the floor of the methodology's "+video/PDF in = 75–90" band on the strength of the documented file and PDF input — for a reasoning model, reading a paper or a spec sheet in its native form is the practical multimodal job. Capped below 75 because **no vision benchmark of any kind was published**: no MMMU, no MMMUPro, no DocVQA, no OmniDocBench, no CharXiv. Image capability here is documented, not measured.
- **Coding: 76/100.** Solid upper-mid. **SWE-bench Verified 72.5–75%** is level with GPT-5 and Gemini 2.5 Pro and matches Claude Opus 4's 72.5% **at one-fifth the input price** — the strongest cost-adjusted coding position in this file. **LiveCodeBench 79%** and **Aider Polyglot 79.6%** confirm the algorithmic side is real. Capped at 76 rather than the mid-80s by **Terminal-Bench Hard 38% / 27.2%**, which says the model writes good patches and is comparatively weak driving a terminal through a long session, and by the absence of SWE-bench Pro, DeepSWE and SciCode figures. Note the ecosystem caveat that keeps recurring in this model's record: Claude 4 Sonnet leads for pure coding tasks, and developer reports at launch put Cursor and Windsurf ahead for daily productivity.
- **Cost efficiency: 62/100.** **$3.00 / $15.00 per MTok with cached input at $0.75** — scored just above the methodology's **$3/$15 ≈ 60** anchor because the 75% cache discount is real and automatic, and because it is **5× cheaper than Claude Opus 4.6 on both input and output** at comparable SWE-bench Verified. Held to 62 rather than higher because it is **more expensive than GPT-5.2 Thinking ($1.75/$14) and Gemini 3.1 Pro ($2.00/$10)** on both lines while scoring below both on GPQA, and because the **$6/$30 surcharge above 128K tokens** means a workload that actually uses the 256K window it advertises pays 2× from the midpoint. The honest comparison for cost-sensitive work is Grok 4 **Fast** at $0.20/$0.50 with 2M context, which is a different model.
- **Overall Score: 72/100.** (62 + 78 + 74 + 72 + 76) / 5 = 72.4 → **72**. Best fit: **search-grounded reasoning where recency matters and latency does not** — live-data analysis, X/Twitter-signal research, long-horizon planning and business simulation, competition mathematics and graduate-level science QA, and general coding assist at a fifth of Opus 4.6's price. **Not** the pick for interactive agentic coding (Terminal-Bench 27–38%, APEX-Agents 15.2%, worst-case 30-minute latency), **not** for novel abstract reasoning (ARC-AGI-2 15.9%), **not** for anything requiring knowledge after 2024-12-31, and **not** for whole-codebase ingestion — Grok 4 Fast at 2M tokens and $0.20/$0.50 is the right Grok for that. If you want the >50% HLE result, that is **Grok 4 Heavy** at $300/month, a different product.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research, **second pass, superseding this agent's own earlier 45.2/100 report for the same slug.** Sources: xAI's official models and pricing documentation (`docs.x.ai/docs/models`) for the $3/$15 rates, the $0.75 cache read and the 128K surcharge; Benchgen's Grok 4 record for the full xAI launch scorecard (GPQA 87.5%, AIME 2025 91.7%, HMMT 90%, HLE 38.6% with tools, USAMO 37.5%, LiveCodeBench 79%, ARC-AGI-2 15.9%, Vending-Bench $4,694.15, 256K window, Nov-2024 cutoff) with its explicit note that these are xAI's figures and not its own; Artificial Analysis's Grok 4 record via Opper for the independent per-benchmark rows (MMLU-Pro 87%, GPQA 88%, HLE 27%, long-context 68%, Terminal-Bench Hard 38%, τ²-Bench Telecom 75%); Opper for routes, residency, ZDR, file/PDF input and max output; AnotherWrapper for Terminal-Bench 27.2%, SWE-bench 75% and APEX-Agents 15.2%; Epoch AI via modelbenchmark.io for FrontierMath-v1, Tier-4, OTIS Mock AIME, Chess Puzzles and Aider Polyglot; aispectrum for the variant-attribution table separating Heavy from standard; and Awesome Agents for the Colossus training detail, the deprecated-snapshot note and the Grok 4 Fast comparison. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Every Grok 4 Heavy figure is kept separate from this model, and the disputed max-output figure is flagged rather than resolved by assertion.
- Future sources: add a new file next to this one, e.g. `Grok_4_Heavy.md` or `Grok_4_Fast.md`, using the same headings — both are separate products with separate pricing and separate benchmark sets. Re-score if xAI publishes a first-party max-output figure, a vision benchmark, or an SWE-bench Pro row.