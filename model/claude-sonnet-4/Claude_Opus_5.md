# Claude Sonnet 4 — findings by Claude Opus 5

- Source: Anthropic (`claude-sonnet-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's mid-tier model from the May-2025 Claude 4 generation — the first Claude line built as **hybrid reasoning models**, offering near-instant responses *and* extended thinking from the same weights. Positioned as "a significant upgrade to Claude Sonnet 3.7, delivering superior coding and reasoning while responding more precisely to your instructions", and notable at launch for taking the SWE-bench Verified lead at **72.7%** — ahead of its own Opus 4 sibling's 72.5% ([Anthropic, 2025-05-22](https://www.anthropic.com/news/claude-4)). Distinct model; Sonnet 4.5 / 4.6 / 5 / 5.5 are later releases with their own folders.
- **Provider / access:** Launched on the Claude API, Amazon Bedrock and Google Cloud Vertex AI, plus the Claude Pro/Max/Team/Enterprise plans — **and the free Claude tier**, which Opus 4 did not get. **Lifecycle:** `platform.claude.com/docs/en/models/sonnet-4/overview` now returns **404**, and OpenCode Zen's own docs list Claude Sonnet 4 in the deprecation table with a date of **2026-06-15** ([Zen docs](https://opencode.ai/docs/zen/)). It is a retired model; this repo records the local route `opencode/claude-sonnet-4`.
- **Release / knowledge:** Released **2025-05-22**, alongside Claude Opus 4. Shipped under ASL-3 safeguards. Knowledge cutoff: no verified public date found.
- **IDs:** `claude-sonnet-4` (Claude API), `anthropic/claude-sonnet-4` (OpenRouter). **A free consumer route existed** — Anthropic made Sonnet 4 available to free Claude users, with extended thinking included on paid plans — but there was never a free API tier, and the model is now deprecated on the routes I could check.
- **Context window:** **200,000 tokens** ([BenchLM](https://benchlm.ai/models/claude-4-sonnet)). Max output: no verified public figure found — Anthropic's launch post does not state one and the model reference page is gone. Prompt caching was extended to **1 hour** at this launch, which was new at the time.
- **Modalities:** **Text + image in → text out.** No audio, no video, no generated media. Reasoning: **hybrid** — a single model with two modes, extended thinking budgeted up to **64K tokens**. Tool calls: yes, and this generation is where several now-standard capabilities arrived: **extended thinking *with* tool use (beta)**, **parallel tool execution**, a **code execution tool**, an **MCP connector**, a **Files API**, and developer-granted local-file access enabling persistent "memory files". Raw chain-of-thought is summarised by a smaller model roughly 5% of the time (when the thought process is long), with full raw access gated behind a Developer Mode.
- **Pricing (as of 2026-10-08):** **$3 / MTok input, $15 / MTok output** — unchanged from previous Sonnet generations at launch ([Anthropic](https://www.anthropic.com/news/claude-4)). No free API tier. Given the deprecation, these are historical list rates rather than a live offer on every route.
- **Architecture:** Proprietary, closed weights. Parameter count and activation scheme undisclosed. The one disclosed behavioural change worth recording: both Claude 4 models are **65% less likely than Sonnet 3.7** to exploit shortcuts or loopholes on agentic tasks that are susceptible to them — a measured alignment improvement, not a capability claim.

### Raw benchmarks found

> Anthropic's launch post is methodologically careful in a way that is worth preserving. It states exactly which benchmarks used extended thinking and which did not, publishes the *without*-thinking numbers separately, describes its SWE-bench scaffold (only two tools — bash and string-replacement file editing; the Claude 3.7 "planning tool" was removed), reports out of the **full 500 problems** while noting OpenAI's figures come from a 477-problem subset, and separates its "high compute" rejection-sampling result from the headline. Several figures below exist only as chart values in that post and are recorded as unextractable rather than guessed.

Agent / tool use:

- τ²-bench: **52.3%** ([Artificial Analysis](https://artificialanalysis.ai/models/claude-4-sonnet))
- Gert Labs rankings: **39.66%** ([Gert Labs](https://gertlabs.com/rankings))
- JobBench: **18.4%** ([JobBench paper](https://arxiv.org/abs/2605.26329))
- **TAU-bench: no extractable value.** Anthropic reports it for Sonnet 4 only with extended thinking and discloses an aggressive methodology — a prompt addendum to both the Airline and Retail agent policies, and the step limit raised from **30 to 100** — but the figure itself sits in a chart. I am not estimating it.
- **Terminal-bench: no verified public score found for Sonnet 4.** Anthropic published 43.2% for Opus 4 and did not give a Sonnet 4 value.
- OSWorld, GDPval-AA, MCP-Atlas, Toolathlon, BrowseComp: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **70.0% without extended thinking** (Anthropic, stated explicitly); independently **AA-GPQA Diamond 68.3%** (Artificial Analysis) — close agreement. The with-thinking figure is chart-only.
- MMMLU: **85.4% without extended thinking** (Anthropic)
- AIME: **33.1% without extended thinking** (Anthropic)
- AA-HLE: **4.3%** (Artificial Analysis)
- AA-LCR: **44.0%** (Artificial Analysis)
- CritPt: **1.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **16.6**; BenchLM overall **38.39/100, rank #139 of 889** (15 of 625 benchmarks, flagged conservative)
- AA-Omniscience: Index **−9.0**, Accuracy **22.7%**, **Hallucination Rate 41.0%** — and this deserves emphasis rather than a footnote: **41.0% is by far the lowest hallucination rate of any model I have assessed in this research pass**, against 82–93% for most 2026 frontier models. Low accuracy, but it declines to answer far more readily than its successors.
- AA-IFBench: **45.4%**

Coding:

- **SWE-bench Verified: 72.7%** (Anthropic, **without** extended thinking, full 500 problems, two-tool scaffold) — state of the art at launch and ahead of Opus 4's 72.5%
- **SWE-bench Verified, "high compute": 80.2%** (Anthropic) — achieved with parallel sampling, discarding patches that break visible regression tests, and an internal scoring model selecting the best candidate. Anthropic separates this clearly from the headline number, and so do I: it measures a *system*, not the model.
- Design Arena — Website: **1152 Elo** ([OpenRouter](https://openrouter.ai/anthropic/claude-sonnet-4/benchmarks))
- **LiveCodeBench, SWE-bench Pro, SciCode, FrontierCode, Vibe Code Bench: no verified public score found.** No independent reproduction of the 72.7% SWE-bench figure exists in my sources either.
- Substantial partner testimony rather than numbers: GitHub adopted Sonnet 4 as the model powering the new GitHub Copilot coding agent; iGent reported navigation errors falling "from 20% to near zero"; Sourcegraph, Augment Code and Manus all reported improvements. Recorded as corroborating deployment evidence, not as benchmarks.

Multimodal:

- MMMU: **72.6% without extended thinking** (Anthropic); independently **AA-MMMU-Pro 62.4%** (Artificial Analysis)
- No MathVision, CharXiv, OmniDocBench, document/OCR, video or audio number found

Long context:

- No MRCR / RULER / needle-retrieval number at any depth. **AA-LCR 44.0%** is the only quantified long-context signal, and at 44% it is the weakest long-context reasoning result of any Anthropic model in this dataset.

### Normalized scores (1–100)

- **Tool use: 55/100.** This generation is where a lot of modern agentic plumbing originated — extended thinking *with* tool use, parallel tool execution, the MCP connector, a code execution tool, the Files API, memory files — and the 65% reduction in shortcut-seeking is a real, measured behavioural improvement. But the measurements that exist are mid-to-low: τ²-bench 52.3%, Gert Labs 39.66%, JobBench 18.4%, **no Terminal-bench figure at all for Sonnet 4**, and a TAU-bench result Anthropic published only as a chart under a modified policy prompt with the step limit more than tripled. Infrastructure firsts do not translate into agentic scores.
- **Reasoning: 56/100.** GPQA Diamond 70.0% without thinking is credible and independently corroborated at 68.3%, and MMMLU 85.4% is solid. But by 2026 standards the rest is weak: **AA-HLE 4.3%**, CritPt 1.1%, AIME 33.1%, AA-IFBench 45.4%, an AA Intelligence Index of 16.6. One genuine and underrated strength pulls this up rather than down: a **41.0% hallucination rate** is less than half that of most current frontier models — this model knows less but admits it far more often, which for some workloads is the more valuable property.
- **Context window: 64/100.** 200,000 tokens was competitive in May 2025 and is unremarkable now, with every current Anthropic tier at 1M. **AA-LCR 44.0%** indicates the window's usable reasoning quality is poor, and no retrieval curve was ever published. Credit retained for the 1-hour prompt-cache TTL introduced at this launch, which was a genuine economic improvement for long reused prompts.
- **Multimodal: 55/100.** Text and images in, text only out — no audio, no video, no generated media. The one vendor figure (MMMU 72.6% without thinking) is respectable for its era, but the independent harness measures **AA-MMMU-Pro at 62.4%**, and there is no chart, document, OCR or GUI-grounding measurement whatsoever. Nothing here has aged well.
- **Coding: 68/100.** The dimension that justified the model: **SWE-bench Verified 72.7%** was state of the art at launch, beat its own Opus sibling, and was reported honestly — full 500 problems, a deliberately minimal two-tool scaffold with the previous generation's planning tool *removed*, and the 80.2% rejection-sampling result clearly separated as a high-compute system score. Deployment evidence is unusually strong (GitHub shipped it as Copilot's coding agent). Capped because there is **no independent reproduction** of 72.7%, no LiveCodeBench, no SWE-bench Pro, and no agentic-coding harness result of any kind.
- **Cost efficiency: 28/100.** $3 in / $15 out per MTok for a model BenchLM ranks **#139 of 889**, on routes that are now deprecated — Zen retired it 2026-06-15 and Anthropic's own model page is gone. The comparison that settles this is internal to Anthropic's catalogue: **Claude Haiku 5.5 costs $0.10 / $0.50 and scores 66.35** — that is **30× cheaper on input and 30× cheaper on output for nearly double the aggregate score**, from the same vendor, available today. Credit retained only for the historical free-tier availability on consumer Claude. There is no workload for which paying this rate is rational now.
- **Overall Score: 59.6/100.** Mean of the five non-cost dims (55 + 56 + 64 + 55 + 68) / 5 = 59.6. Best fit: essentially historical. It remains the model that took the SWE-bench crown with a deliberately minimal scaffold, that introduced hybrid instant/extended-thinking inference, and that shipped the MCP connector and parallel tool execution — and its 41% hallucination rate is a property worth remembering as newer, smarter models traded abstention for confidence. For live work it is deprecated, 30× more expensive than a strictly better sibling, and should not be deployed new.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Anthropic's "Introducing Claude 4" launch post (release date, hybrid-reasoning design, 64K thinking budget, $3/$15 pricing, free-tier availability, the new API capabilities, the 65% shortcut-reduction figure, the thinking-summary mechanism, and the full appendix disclosing per-benchmark extended-thinking usage, the without-thinking GPQA/MMMLU/MMMU/AIME values, the two-tool SWE-bench scaffold, the full-500-problem reporting basis, and the separate high-compute 80.2% methodology), BenchLM's aggregated `claude-4-sonnet` page, the Artificial Analysis and Gert Labs leaderboards, the JobBench paper, OpenRouter benchmarks, and the OpenCode Zen deprecation table. `platform.claude.com/docs/en/models/sonnet-4/overview` was requested and returned 404, reported as evidence of retirement. Benchmarks Anthropic published only as chart values — including Sonnet 4's TAU-bench and with-thinking GPQA — were deliberately **not** estimated, and the 80.2% high-compute figure is reported as a system result rather than credited to the model. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
