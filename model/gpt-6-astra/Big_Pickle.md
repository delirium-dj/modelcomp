# OpenAI GPT-6 Astra — findings by Big Pickle

- Source: OpenAI (`gpt-6-astra`); benchmarks from OpenAI's self-reported launch table, BenchLM, llm-stats, Artificial Analysis and modelavailability.com
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (`gpt-6-astra`). Announced **2026-09-03** as a limited preview to trusted partners; **stable public release to paid users 2026-09-04**. Predecessor: GPT-5.6. Wikipedia and llm-stats agree on both dates.
- **Short description:** OpenAI's GPT-6 flagship — explicitly "not a Flash hop" (llm-stats). OpenAI calls it a "generational leap" in cybersecurity, professional work, software engineering and science, and states it is "faster and capable of performing more tasks than any prior iteration", with better focus, task-boundary adherence, user-intent understanding and multi-step workflow completion. Named use cases include tax returns, video-game scenes, food ordering and job searches. President Greg Brockman said it could eventually be seen as the arrival of AGI; OpenAI's stated definition of AGI is "an automated system that can perform all economically valuable work as well as or better than humans".
- **Provider / access:** first-party OpenAI API, plus **Microsoft Foundry** (global-standard and US data-zone tiers, ~28 regions, deprecation 2028-01-11). Reasoning effort spans **low through max, adding `xhigh` and `max`** on top of low/medium/high — note that **llm-stats' gateway default is `low`**, so third-party gateway numbers understate this model unless effort is set. No free tier.
- **Release / knowledge:** released 2026-09-04 (stable). **Knowledge cutoff April 30, 2026.**
- **IDs:** `gpt-6-astra`.
- **Context window:** **1,050,000 tokens (1.05M)** input, **128,000 max output**. **Critically, long-context pricing is tiered:** requests **above 272K input tokens** are charged at roughly **2× input and cached-input, and 1.5× output for the full request.** So the top ~70% of the advertised window costs 2–2.5× the headline rate.
- **Modalities:** **text and image in; text out.** No audio or video input documented. File input, parallel tool calls, reasoning, streaming, structured output, tools and vision all supported.
- **Pricing (as of 2026-09-28), Standard list per 1M:** **$10.00 input / $1.00 cached input / $12.50 cache write / $50.00 output.** Above 272K input: effectively $20 in / $2 cached / $25 cache write / $75 out. Microsoft Foundry's US data-zone tier is marginally higher still ($11 / $55 output, $13.75 cache write). Aggregator resellers quote $13/$65, a markup over first-party.
- **Architecture:** **proprietary / closed weights.** No parameter count. Aidan Clark (VP of Research): this was "by far" OpenAI's largest training run and "the first time we've pretrained on more than 100,000 GPUs at our Stargate site in Texas."
- **Access restriction, material:** the public release is a **restricted version that rejects certain prompts in areas such as cybersecurity.** Release was also delayed from GPT-5.6 following the **July 2026 Hugging Face incident**, with safeguards added before shipping. OpenAI describes Astra as its most aligned model yet while simultaneously warning about its cyber capabilities.

### Raw benchmarks found

Note the provenance split: OpenAI's launch table is **self-reported**, and llm-stats flags it as such. BenchLM rows below are third-party collected. Where the two overlap, BenchLM corroborates OpenAI (TB4 57.90 vs 57.7; TB-Science 64.6 vs 64.6; BrowseComp 91.5 vs 91.5).

Coding / agentic:

- DeepSWE v1.1: **74.1** (OpenAI self-reported) — edging Claude Opus 5 (74.0) and GPT-5.6 Sol (73.0) on the same benchmark
- **Terminal-Bench 4.0: 57.7** (OpenAI) / **57.90%** (BenchLM) — the leading TB4 score found in this dataset
- Terminal-Bench 2.1 (Vals): **87.3%** — ahead of Claude Opus 5 (84.6%) and Claude Sonnet 5 (74.5%)
- **AutomationBench: 41.4%** — ahead of Claude Opus 5's 26.0%, the widest margin in this comparison
- **Agents' Last Exam: 59.3%**; **ExploitGym: 42.4%**
- BrowseComp: **91.5%** (OpenAI) / **91.5%** (BenchLM) — best verified web-navigation figure in this dataset, beating Claude Opus 5 (90.8%) and Claude Opus 4.8 (84.3%)
- HLE **with** tools: **57.2%** — **behind Claude Opus 5's 64.7%**, the clearest loss in the set
- BenchLM agentic lane: **70.3, #5 of 151**; Claude Opus 5 takes #2 at 77.4 and Claude Opus 4.8 #16 at 63.2
- SWE-bench Verified / Pro, Toolathlon, MCP Atlas, OSWorld, DeepSearchQA: **no verified public score found** for Astra

Reasoning / knowledge:

- **ARC-AGI-3: 62.7%** — more than double Claude Opus 5's **30.2%**, and the single largest reasoning gap in the dataset
- **ARC-AGI-1: 98.50%**
- GPQA Diamond: **96.0** (OpenAI self-reported)
- **FrontierMath v2 (Tier 4): 97.600%** versus **31.250%** for Claude Opus 4.8 — a 66-point swing on the hardest math tier
- BenchLM reasoning lane average: **88.8, #1 of 22** — the highest reasoning score of any model BenchLM ranks
- BenchLM overall: **81.05**, ahead of Claude Opus 5 (80.67), Claude Sonnet 5 (70.76) and Claude Opus 4.8 (72.3)

Multimodal / computer use:

- ScreenSpot Pro: **92.7%**
- BenchCAD Vision2Code (with tools): **0.959**
- BenchLM multimodal lane: **82.6, unranked (3 rankable rows)** — actually **below Claude Opus 4.8's 87.5 (#3 of 48)** and Claude Sonnet 5's 77.5
- Text + image in, text out; no audio or video documented

Context:

- 1,050,000 input / 128,000 output. No MRCR, RULER or needle-in-a-haystack figure published for Astra. The **272K long-context pricing cliff** is the only published long-context data point, and it is a billing fact rather than a capability one.

Cost (independent, and the decisive finding):

- **Artificial Analysis: "GPT-6 Astra is 75% more expensive than GPT-5.6 Sol at max effort, and largely sits behind its predecessor on the Intelligence Index vs Cost per [task]."** That is the cleanest available statement of the value problem, and it comes from an independent evaluator rather than a vendor.
- With $10/$50 list and a 2×/1.5× multiplier above 272K, Astra is the most expensive model in this comparison set. For scale: Claude Opus 5 is $5/$25, Gemini 3.8 Flash is $0.75/$3.75.

### Normalized scores (1–100)

- **Tool use: 92/100.** Up 2, and the evidence got stronger. **BrowseComp 91.5%** is the best verified web-navigation result in this dataset (ahead of Opus 5's 90.8% and Opus 4.8's 84.3%), **Terminal-Bench 2.1 87.3%** beats every Claude model measured on it, **Terminal-Bench 4.0 57.7%** is the leading TB4 score found anywhere in this dataset, and **AutomationBench 41.4% versus Opus 5's 26.0%** is the widest single agentic margin recorded. BenchLM's **#5 of 151** agentic lane is consistent. Held back from the high 90s by one specific, documented loss — **HLE with tools 57.2% against Opus 5's 64.7%** — plus no verified SWE-bench, Toolathlon, MCP Atlas or OSWorld row.
- **Reasoning: 96/100.** Held, and now on much firmer ground than before. **ARC-AGI-3 62.7% versus Opus 5's 30.2%** is the standout result in this report, **ARC-AGI-1 98.50%**, **GPQA Diamond 96.0**, and above all **FrontierMath v2 Tier 4 at 97.6% against Opus 4.8's 31.25%** — a 66-point gap on the hardest tier of frontier math. BenchLM's reasoning lane of **88.8 is #1 of 22**. Not 100 because GPQA is vendor self-reported and the FrontierMath and ARC-AGI rows are single-source.
- **Context window: 94/100.** Down 2. **1,050,000 input / 128,000 output** is the largest window in this comparison set, and 128K output is generous. Two things hold it below the top band: **no public MRCR, RULER or needle-in-a-haystack measurement exists for Astra**, and the **272K long-context pricing threshold** means the advertised window is only economically available for the first quarter of its range. A 1.05M window that bills at 2× above 272K is not the same capability as a flat-rate 1M window.
- **Multimodal: 84/100.** Down 2. The evidence is thinner here than the price suggests: **ScreenSpot Pro 92.7%** and **BenchCAD Vision2Code 0.959** are genuinely strong computer-use and vision-to-code results, but BenchLM's multimodal lane of **82.6 is unranked on only 3 rankable rows** and sits **below Claude Opus 4.8's 87.5 (#3 of 48)**. Input is **text and image only** — no audio or video documented, which puts Astra behind Gemini's speech/video input. Two strong rows and a GUI-agent edge, not a broad multimodal profile.
- **Coding: 88/100.** Up 3. **DeepSWE v1.1 74.1** edges both Claude Opus 5 (74.0) and GPT-5.6 Sol (73.0) on the same long-horizon agentic coding benchmark, **Terminal-Bench 4.0 57.7%** is the best TB4 figure in the dataset, and BenchLM's coding lane of **75.3 ranks #4 of 183**. Not higher because the launch table is **self-reported**, because SWE-bench Verified and Pro are unverified for Astra, and because Terminal-Bench and DeepSWE measure agent products as much as models.
- **Cost efficiency: 42/100.** Down 13, the largest cost correction in this batch so far. **$10 input / $50 output with $1 cached and $12.50 cache-write** is the most expensive list price among every model compared here — Claude Opus 5 is $5/$25, Gemini 3.8 Flash is $0.75/$3.75. Worse, it is expensive *and* dominated: Artificial Analysis states plainly that Astra "is 75% more expensive than GPT-5.6 Sol at max effort, and largely sits behind its predecessor on the Intelligence Index vs Cost per task." The **>272K multiplier (2× input, 1.5× output)** means long-context workloads — exactly the reason to buy a 1.05M window — cost up to 2.5× the headline rate. A model priced above its own predecessor while trailing it on index-per-dollar is the definition of poor cost efficiency, whatever its absolute quality.
- **Overall Score: 90.8/100.** Half-up mean of the five quality dims: (92 + 96 + 94 + 84 + 88) / 5 = 90.8. Best fit: the strongest reasoner and the best web/terminal agent measured in this dataset, and the model to reach for when the task is hard and the budget is not the constraint. The trade-offs are severe and specific: it is the most expensive model here, it is priced above GPT-5.6 Sol while trailing it on index-per-dollar, its long-context tier bills at 2×, and its public build **refuses cybersecurity-adjacent prompts**. Frontier capability, worst-in-class economics.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (llm-stats `gpt-6-astra-launch` research post, Wikipedia `GPT-6`, Artificial Analysis `Benchmarking GPT-6 Astra` article, BenchLM comparison pages `claude-opus-5-vs-gpt-6-astra`, `claude-opus-4-8-vs-gpt-6-astra` and `claude-sonnet-5-vs-gpt-6-astra`, modelavailability.com Foundry listing, aimlapi spec page). Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research note (supersedes the 2026-09-17 pass):** net Overall 91 → **90.8**, a near-flat result for a reason worth stating plainly — **the quality ceiling held and the price got worse.** Four dimensions moved up on newly surfaced evidence (Tool use 90 → 92 on BrowseComp 91.5%, TB2.1 87.3%, TB4 57.7% and AutomationBench 41.4%; Coding 85 → 88 on DeepSWE 74.1 and a #4-of-183 coding lane; Reasoning held at 96 but now on ARC-AGI-3 62.7% and FrontierMath Tier 4 97.6% rather than assertion; Context 96 → 94 on the 272K billing cliff). One moved down hard: **Cost efficiency 55 → 42**, driven by Artificial Analysis's independent finding that Astra is **75% more expensive than GPT-5.6 Sol at max effort while largely sitting behind it on index-per-dollar**, plus the >272K 2×/1.5× long-context multiplier. Net effect: the model's overall rank is essentially unchanged, but its *value* proposition is materially worse than the earlier pass implied.
- **Conflicts and provenance recorded rather than smoothed over:** (1) **benchmark provenance** — OpenAI's launch table is self-reported, and llm-stats explicitly flags it as unverified; BenchLM independently corroborates the three rows it duplicates (TB4 57.90 vs 57.7, TB-Science 64.6 both, BrowseComp 91.5 both), so those are marked corroborated while GPQA 96.0, DeepSWE 74.1 and the FrontierMath/ARC-AGI rows remain single-source. (2) **pricing** — $10/$50 first-party versus $11/$55 on Foundry's US data-zone tier and $13/$65 at resellers; the first-party list is used. (3) **effort-setting caveat** — llm-stats' gateway defaults to `low` reasoning, so any third-party number gathered without setting effort explicitly understates the model. (4) **public access is restricted** — the shipped build rejects cybersecurity-adjacent prompts, which is a capability limit that no benchmark captures and which belongs in any serious evaluation of this model.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
