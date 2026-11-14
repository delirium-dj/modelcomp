- Source: OpenAI/GPT-6 Luna
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's 2026-09-22/23 low-cost GPT-6 tier, the model powering ChatGPT's free tier (1.2B+ weekly users). At higher reasoning effort it reaches GPT-5.6 Sol levels at roughly 1/100 of the cost. A distinct model; GPT-6 Sol, GPT-6 Terra and GPT-6 Astra are separate, and the `union-alpha` stealth alias is a composite router record handled by the project identity roster.
- **Provider / access:** OpenAI API (model `gpt-6-luna`) with `high` / `medium` / `low` / `none` reasoning efforts, ChatGPT free tier, plus Amazon Bedrock and Azure; batch variant at half price.
- **Release / knowledge:** 2026-09-22 US Western / 2026-09-23 (Baike article states both 9/22 and 9/23; reported separately). Knowledge cutoff: a third-party tracker notes news knowledge to ~April 2026 (low-confidence). No vendor-verified cutoff found.
- **IDs:** `gpt-6-luna`; batch / Pro variants are serving profiles (`gpt-6-luna-batch`, `gpt-6-luna-pro`), not separate models.
- **Context window:** **1,000,000 tokens** per a third-party BenchGecko catalogue (1.1M total listed); no vendor-verified figure in the retrieved Baike excerpt.
- **Modalities:** text and image in, text out (multimodal per third-party trackers); professional work, coding, automation and computer operation, chat and classification. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$0.10 / 1M input, $0.50 / 1M output**; cache read **$0.01 / 1M**, cache write **$0.125 / 1M** (third-party trackers, consistent with Baike's $0.10/$0.50). Batch tier **$0.05 / $0.25**; cached prompt calls up to **90% cheaper**.
- **Architecture:** Proprietary, closed weights. A third-party low-confidence estimate suggests **~400B total / ~17B active MoE** — explicitly an estimate, not a vendor disclosure.

### Raw benchmarks found

Agent / tool use:

- Coding Agent Index v2.0: **31** (from the GPT-6.1 Terra comparison; GPT-6.1 Sol 54, GPT-6.1 Terra 48) — a comparison row measured under Luna's ID, labelled by harness
- Artificial Analysis Intelligence Index: **37** (from the DeepSeek V4.1 Flash comparison, where V4.1 Flash scored 39) — comparison row, labelled
- Attempt to bypass restrictions: **77% → 42%** (alignment improvement, not capability)
- AI BENCHY (third-party, `low` effort): score **7.6**, rank **#125**, **63.8%** attempt pass rate (12/23), reliability **9.7**, total cost **$0.033**, avg response **23.23s**; `none` effort: score **5.5**, **40.6%** pass rate — labelled third-party, effort-specific
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- At high reasoning effort, reaches **GPT-5.6 Sol level at ~1/100 the cost** (vendor positioning, qualitative)
- Artificial Analysis index **37** (comparison row); BenchGecko normalised average **53.0 / 53.3** across 25 public benchmarks (different aggregator, reported separately)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Coding Agent Index v2.0 **31** as above; AI BENCHY coding subscore 6.0 (`low`) / 5.5 (`none`) — third-party
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token third-party-reported window with improved prompt caching; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 80/100.** Native computer-operation/automation positioning, tool calling (AI BENCHY Tool Calling 10.0 at low effort) and four effort tiers; capped by a 31 Coding Agent Index and a 63.8%/40.6% third-party pass rate.
- **Reasoning: 78/100.** GPT-5.6-Sol-level output at high effort (vendor claim) with a 53.3 third-party normalised average; capped by an AA index of 37 in the comparison row and low AI BENCHY general-intelligence scores.
- **Context window: 88/100.** A 1M-token third-party-reported window with 90% cheaper cached prompts; capped by no vendor-verified figure and no retrieval benchmark.
- **Multimodal: 78/100.** Image+text input per third-party trackers for computer operation; capped by text-only output, no verified audio/video input, and no multimodal benchmark.
- **Coding: 76/100.** Coding Agent Index 31 with usable but modest third-party coding subscores; capped by being the lowest GPT-6 tier and no SWE-bench/Terminal-Bench figure.
- **Cost efficiency: 99/100.** $0.10/$0.50 per 1M with $0.01 cache reads, a $0.05/$0.25 batch tier, 90% cached-prompt savings, ~1/100 of GPT-5.6 Sol's task cost and a free ChatGPT tier — the best value in this comparison set. Excluded from Overall.
- **Overall Score: 80/100.** Half-up mean of 80, 78, 88, 78, 76 = 80.0 → 80. Best fit: extremely high-volume chat, classification, extraction and lightweight agent subtasks where cost dominates; escalate hard reasoning and coding to Sol/Astra.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-6 Luna article retrieved via public web search excerpt (release, $0.10/$0.50 pricing, positioning, 90% cache savings, 77%→42% bypass rate, free-tier rollout), with third-party trackers (AI BENCHY, BenchGecko) for effort-specific scores, price history and context — all explicitly labelled third-party, with conflicting index values (37 / 53.0 / 53.3 / 7.6) kept separate rather than merged. Comparison rows measured under other models' articles (DeepSeek V4.1 Flash, GPT-6.1 Terra) are labelled by harness. The `union-alpha` stealth alias belongs to a composite-router identity record and is not treated as this model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GPT-6 Luna — 百度百科 (retrieved via search excerpt; release, pricing, positioning)](https://baike.baidu.com/item/GPT-6%20Luna/69132871)
  - [GPT-6 Luna — BenchGecko (third-party context, price, benchmark average)](https://www.benchgecko.ai/model/gpt-6-luna)
