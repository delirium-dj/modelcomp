# Claude Opus 4.7 — findings by Space Bunny

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's most capable generally available flagship at launch (2026-04-16), positioned as a hard upgrade over Opus 4.6 at identical list price — the GA step below the still-restricted Claude Mythos Preview, and the first broadly released model carrying cyber safeguards developed through Project Glasswing. Not an alias: a distinct model ID with its own weights.
- **Provider / access:** Anthropic Claude API `claude-opus-4-7` (Messages API); also Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Hosted on OpenCode Zen as `opencode/claude-opus-4-7` at `https://opencode.ai/zen/v1/messages` (Messages protocol, `@ai-sdk/anthropic`).
- **Release / knowledge:** released 2026-04-16; knowledge cutoff January 2026 (Anthropic materials give "up to January 2026"; OpenCode Data lists 2026-01-31).
- **IDs:** `anthropic/claude-opus-4-7` (first-party), `opencode/claude-opus-4-7` (Zen). No Free tier ID exists for this model on Zen.
- **Context window:** 1,000,000 tokens input / 128,000 max output — verified from Anthropic model docs, Microsoft Foundry catalog ("Context window 1000k, Token limits 128k output"), Artificial Analysis ("1M"), and OpenCode Data. No long-context premium tier is listed on the Anthropic price sheet.
- **Modalities:** text + image + PDF in (images up to 2,576 px long edge / ~3.75 MP, 3.3× prior Claude capacity), text out; extended reasoning yes; tool calls yes; structured/JSON output supported.
- **Pricing (as of 2026-10-17):** $5.00 / $25.00 per 1M input/output tokens; cache hit $0.50, 5-min cache write $6.25, 1-hour cache write $10.00; batch processing $2.50 / $12.50; US-only inference +10% ($5.50 / $27.50). Paid — identical on Claude API, Bedrock, Vertex AI and Foundry; OpenCode Zen lists the same $5.00 / $25.00 / $0.50 / $6.25. Caveat: Opus 4.7 ships an updated tokenizer, so identical content can consume ~1.0–1.35× more tokens than on Opus 4.6, and high effort levels increase output volume — a stable price card does not imply a stable invoice.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count or MoE topology.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **77.3** (Anthropic launch table; Opus 4.6 = 62.7, +14.6)
- OSWorld-Verified: **78.0%** (Anthropic launch table; Opus 4.6 = 72.7)
- Terminal-Bench 2.0: **69.4%** (Anthropic launch table; Opus 4.6 = 65.4) — **conflicting**: OpenCode Data's Opus 4.7 page lists Terminal-Bench **66.1%** success rate, sourced to Anthropic's later Opus 4.8 post; BenchLM shows Opus 4.7 Terminal-Bench 2.0 as "coming soon". The 69.4 launch figure is used here.
- Tau2/Tau3-Bench: no verified public score found for 4.7 specifically (Anthropic cites "Finance Agent" instead).
- GDPval-AA: **1356** Elo at max effort (Artificial Analysis, Opus 4.7 vs Opus 4.6 comparison)
- Tool-error rate: **one third** of Opus 4.6's on multi-step agentic workflows (Anthropic); +14% multi-step agentic reasoning improvement
- Internal 93-task coding benchmark: **+13%** resolution over Opus 4.6 (Anthropic)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic launch table; Opus 4.6 = 91.3)
- HLE: **54.7%** with tools (Anthropic launch table); **42%** without tools (Artificial Analysis, max effort) — note the two are different harnesses, not a contradiction
- Artificial Analysis Intelligence Index: **41 (estimated) / rank #53 of 216** (max effort); Opus 4.6 = 32, Claude Opus 5 = 51
- CritPt: **12%** (Artificial Analysis — notably weak, below Opus 4.6's 13%)
- AA-Omniscience: **27** (Opus 4.6 = 14); Omniscience Accuracy / hallucination rate: no separate public rate found
- AA-LCR v1.1: **79%**
- AA-Briefcase v1.1: **1254** (Opus 4.6 = 1254 in one listing, 1255 in another — measurement noise)
- BrowseComp: **79.3%** (Anthropic) — the one regression vs 4.6 (84.0)
- BenchLM overall point estimate: **66.72** (#42/128 public lane; Opus 4.6 = 62.38)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic launch table; Opus 4.6 = 80.8, Gemini 3.1 Pro = 80.6)
- SWE-bench Pro: **64.3%** (Anthropic/AWS; Opus 4.6 = 53.4, GPT-5.4 = 57.7, Gemini 3.1 Pro = 54.2) — **conflicting**: Artificial Analysis coding-agent lane reports pass@1 **44.9** for the same benchmark name, a different harness/agent scaffold.
- CursorBench: **70%** (Cursor CEO; Opus 4.6 = 58%)
- Artificial Analysis Coding Agent Index: **66.6** average pass@1
- SWE-Atlas Refactoring: **48.57** (Scale Labs leaderboard); SWE-Atlas Codebase QnA: **81** pass@1 (Artificial Analysis)
- BigLaw Bench for Harvey: **90.9%** at high effort (Harvey partner evaluation)
- OfficeQA Pro (Databricks): **21% fewer errors** vs Opus 4.6

Long context:

- Long-context research composite: **0.715** overall across six modules — tied for top overall score of any model tested (Anthropic), with General Finance module at **0.813** (vs 0.767 for Opus 4.6)
- AA-LCR v1.1: **79%** at 1M-scale context
- Anthropic states Opus 4.7 delivered the most consistent long-context performance in its evaluation set; independent RULER/MRCR numbers at 1M were not published.

Multimodal:

- CharXiv-R (with tools): **91.0** (Opus 4.6 = 77.4, +13.6)
- Image input resolution: **2,576 px long edge / 3.75 MP**, up from 1,568 px / 1.15 MP
- MMMU-Pro: no verified public 4.7-specific score found (Artificial Analysis lists the eval slot without a figure for this model)

### Normalized scores (1–100)

- **Tool use: 90/100.** Best-in-class evidence: MCP-Atlas 77.3 (+14.6 over its own predecessor), OSWorld-Verified 78.0, Terminal-Bench 2.0 69.4, GDPval-AA 1356, and a vendor-reported tool-error rate one third of Opus 4.6's on hours-long agentic runs. Capped just below the top band because Anthropic published no independent Tau2/Tau3 figure for 4.7 and GPU (Kubernetes incident root-cause) numbers are not public.
- **Reasoning: 88/100.** GPQA Diamond 94.2 and HLE 54.7-with-tools are frontier-grade, AA Intelligence Index 41 at #53/216. Capped by CritPt at only 12% (a weak spot the launch table omits), a BrowseComp regression versus 4.6, and an AA index that is an estimate rather than a measured run.
- **Context window: 96/100.** 1,000,000-token context with 128,000 max output, verified across four independent sources, plus the best long-context consistency claim in Anthropic's own set (0.715 composite) and AA-LCR 79%. Not 100 because no independent RULER/MRCR retrieval curve at 1M has been published and AA's LCR sits at 79%, not saturation.
- **Multimodal: 85/100.** Genuinely frontier vision: 3.75 MP / 2,576 px input (3.3× prior Claude), CharXiv-R 91.0 with tools, native PDF plus document/chart reasoning. Held below the top band because no MMMU-Pro figure is published for 4.7 and there is no image/audio output.
- **Coding: 93/100.** SWE-bench Verified 87.6%, SWE-bench Pro 64.3% (clear SOTA over GPT-5.4's 57.7% and Gemini 3.1 Pro's 54.2%), CursorBench 70% vs 58%, Terminal-Bench 2.0 69.4%, AA Coding Agent Index 66.6. Not 100 because the AA coding-agent harness measures the same benchmark names far lower (SWE-bench Pro 44.9 pass@1), showing substantial harness sensitivity.
- **Cost efficiency: 45/100.** $5 / $25 per 1M with a $6.25 cache write is the premium Anthropic tier — 2.5× the AA median input price and 2.5× the median output price — and the new tokenizer plus high-effort reasoning can inflate real billings beyond the flat rate suggests. Strong capability, weak value per token.
- **Overall Score: 90/100.** Mean of the five non-cost dims (90 + 88 + 96 + 85 + 93) / 5 = 90.4, half-up to 90. Best-fit recommendation: the go-to model for long-horizon agentic software engineering and million-token-context knowledge work where correctness dominates unit economics — not for high-volume, price-sensitive traffic, where Opus 5.5 at $4/$20 or Sonnet 5.5 at $2/$10 deliver comparable shape at a fraction of the cost.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: public internet research across the Anthropic launch post and system card, the Anthropic list-price sheets (2026-05-12 / 2026-05-27 / 2026-06-29), Artificial Analysis model pages and head-to-head comparisons, OpenCode Zen model/pricing docs plus OpenCode Data, Scale Labs SWE-Atlas, BenchLM, and independent press (TheNextWeb, ALM Corp, LLM-Stats). Conflicting third-party figures (Terminal-Bench 66.1 vs 69.4, SWE-bench Pro 44.9 vs 64.3, an SEO-site page claiming 200K context and $15/$75 pricing) were identified and resolved in favour of vendor and Artificial Analysis primaries; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.