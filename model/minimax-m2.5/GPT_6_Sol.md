# MiniMax-M2.5 — findings by GPT 6 Sol

- Source: MiniMax (`MiniMaxAI/MiniMax-M2.5`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.5.
- **Short description:** MiniMax's open-weight text-reasoning and coding MoE trained for agentic software engineering, research and office workflows. M2.5-Lightning / highspeed is a faster, differently priced **serving tier of the same capability**, not another checkpoint ([launch](https://www.minimax.io/blog/minimax-m25), [weights](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)).
- **Provider / access:** Weights `MiniMaxAI/MiniMax-M2.5`; existing first-party pay-as-you-go users can call `MiniMax-M2.5` through Anthropic-compatible Messages (`https://api.minimax.io/anthropic`) or OpenAI-compatible Chat Completions until the announced **November 18 retirement**. **No new first-party users since October 19**; M/Token Plan requests carrying this ID already route to **M3.1 Flash**, not M2.5. Third-party `minimax/minimax-m2.5` or OpenCode `minimax-m2.5` / cataloged `minimax-m2.5-free` may have separate availability, but verify weights behind the route before attributing M2.5 results ([MiniMax retirement notice](https://platform.minimax.io/docs/faq/models), [models.dev](https://models.dev/models/minimax/MiniMax-M2.5/)).
- **Release / knowledge:** **2026-02-12** release; no reliable specific training-data cutoff on the official model card ([launch](https://www.minimax.io/blog/minimax-m25), [weights](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)).
- **IDs:** Weight repository `MiniMaxAI/MiniMax-M2.5`; API `MiniMax-M2.5`, OpenRouter `minimax/minimax-m2.5`; `MiniMax-M2.5-highspeed` / Lightning is a serving tier, not a distinct benchmark-bearing model ([MiniMax launch](https://www.minimax.io/blog/minimax-m25), [current cache tariff](https://platform.minimax.io/docs/api-reference/anthropic-api-compatible-cache)).
- **Context window:** **204,800 tokens** listed on provider inventory, with route-specific output allowance up to **131,072**. Provider context caps differ (e.g. 196,608 on Bedrock); do not add output limit to total context ([models.dev](https://models.dev/models/minimax/MiniMax-M2.5/)).
- **Modalities:** Text in/out, mandatory reasoning and tool calls. The MiniMax Anthropic API explicitly says M2.x does **not** accept image/video blocks; office-file work in MiniMax Agent uses external document tools, not native image/PDF understanding ([API schema](https://platform.minimax.io/docs/api-reference/text-chat-anthropic), [launch](https://www.minimax.io/blog/minimax-m25)).
- **Pricing (as of 2026-11-02):** MiniMax's February launch stated standard M2.5 **$0.15 input/$1.20 output** versus Lightning **$0.30/$2.40** per million, but its later [first-party explicit-cache table](https://platform.minimax.io/docs/api-reference/anthropic-api-compatible-cache) and [provider inventory](https://models.dev/models/minimax/MiniMax-M2.5/) list **$0.30/$1.20** for standard M2.5, **$0.03 cache read** and **$0.375 explicit cache write** (per million). This is a **legacy existing-customer** first-party tariff until November 18, not a new-user offer; verify the chosen third-party route and backend identity. Weight download is not free compute; temporary/limited free routes are not an unconditional free API promise ([retirement notice](https://platform.minimax.io/docs/faq/models)).
- **Architecture / license:** Approximately **230B total / 10B active** MoE (rounded vendor series figures); HF weights have a **modified-MIT** model license, not plain unmodified MIT. Commercial distribution carries attribution/notice and model-use-policy terms; distinguish the separate code license from the **LICENSE-MODEL** governing weights ([weights](https://huggingface.co/MiniMaxAI/MiniMax-M2.5), [model license](https://github.com/MiniMax-AI/MiniMax-M2.5/blob/main/LICENSE-MODEL)).

### Raw benchmarks found

- **Agent / tool use:** Vendor [BrowseComp **76.3%** with context management](https://www.minimax.io/blog/minimax-m25): the vendor says history is discarded once usage exceeds 30% of maximum context, so this is not a no-compaction score. Vendor GDPval-MM agent-office-work **59.0% pairwise win rate** uses an internal benchmark and LLM judge, not the independent GDPval-AA score. MiniMax reports Terminal-Bench 2 with altered Dockerfiles, 8-core/16GB sandboxes, 7,200-second timeout and a Claude Code 2.0.64 harness; do not equate those runs with a default-harness independent leaderboard.
- **Reasoning / knowledge:** Vendor [GPQA Diamond **85.2%**, HLE without tools **19.4%**, AIME 2025 **86.3%**, IFBench **70.0%**](https://github.com/MiniMax-AI/MiniMax-M2.5); these are internally tested public datasets, not AA-run measurements. [Artificial Analysis current model page](https://artificialanalysis.ai/models/minimax-m2-5) renders **N/A** for its v5 Intelligence Index: don't recycle an older estimated index as a current score.
- **Coding:** Vendor Claude Code harness [SWE-bench Verified **80.2%**, Multi-SWE-Bench **51.3%**](https://www.minimax.io/blog/minimax-m25), averaged across four internal runs; vendor Droid **79.7%** and OpenCode **76.1%** use different agent scaffolds. Independent [Vals AI Mini-SWE-agent SWE-bench Verified **74.2%**](https://www.vals.ai/benchmarks/swebench) and independently cataloged [SWE-bench Verified **75.8%**](https://selfhost.directory/models/benchmarks/swe-bench-verified) are distinct harness/results, not corroboration of 80.2. Vendor SciCode **44.4%** ([appendix](https://github.com/MiniMax-AI/MiniMax-M2.5)).
- **Long context:** Vendor AA-LCR **69.5%** using its internal reproduction of the public test ([appendix](https://github.com/MiniMax-AI/MiniMax-M2.5)); no independent full-204,800-token retrieval curve established. Nominal context is not a measured full-window retention rate.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong vendor search/office numbers and multiple harnesses, discounted for compaction and internally modified terminal evaluations.
- **Reasoning: 75/100.** GPQA is strong while HLE/IFBench and absent current independent index temper confidence.
- **Context window: 71/100.** ~205K advertised and 69.5 vendor AA-LCR, without independent full-window evidence.
- **Multimodal: 15/100.** Native input/output is text only; external office tools do not change that.
- **Coding: 78/100.** Independent SWE results in the mid-70s support robust engineering; higher vendor 80.2 is harness-dependent.
- **Cost efficiency: 78/100.** Low legacy $0.30/$1.20 listed tariff, cache and downloadable weights, discounted for imminent first-party retirement, auto-rerouting of plan IDs, long-rollout tokens and host variability.
- **Overall Score: 63/100.** Half-up mean (75 + 75 + 71 + 15 + 78) / 5 = 62.8; strong text/code agent if the serving route and harness are pinned (cost efficiency is reported separately).

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: At least three successful searches covering official release/weights, independent coding evaluation, and current API tariffs. Kept standard versus Lightning, first-party versus routed prices, and independent versus vendor-run harnesses separate. Scores are normalized interpretations.
- Reference URLs:
  - [MiniMax M2.5 launch and evaluation methods](https://www.minimax.io/blog/minimax-m25)
  - [MiniMax M2.5 weights and modified-MIT terms](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)
  - [MiniMax benchmark appendix](https://github.com/MiniMax-AI/MiniMax-M2.5)
  - [Vals independent SWE-bench leaderboard](https://www.vals.ai/benchmarks/swebench)
  - [MiniMax current explicit-cache pricing](https://platform.minimax.io/docs/api-reference/anthropic-api-compatible-cache)
  - [MiniMax M2.5/M2.7 first-party retirement and plan rerouting notice](https://platform.minimax.io/docs/faq/models)
  - [Provider inventory, context and tariffs](https://models.dev/models/minimax/MiniMax-M2.5/)
- Future sources: add a new file next to this one using the same headings.
