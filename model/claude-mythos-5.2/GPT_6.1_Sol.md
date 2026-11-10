# Claude Mythos 5.2 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-mythos-5-2`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's verification-gated deployment for cybersecurity and life-sciences research. It is the same underlying model as Fable 5.2 with selected safeguards lifted, not documented as different weights; exact Mythos results and safeguarded Fable proxies are kept separate below.
- **Provider / access:** Verified organizations on the Claude Messages API (`https://api.anthropic.com/v1/messages`), Bedrock, Google Cloud, and Microsoft Foundry. See the [exact reference](https://platform.claude.com/docs/en/models/mythos-5-2/overview); no generally accessible OpenAI Responses route established.
- **Release / knowledge:** Released 2026-11-09; reliable knowledge and training cutoffs June 2026. Active, verification required; first-party retirement not sooner than 2027-11-09.
- **IDs:** `claude-mythos-5-2`; Bedrock `anthropic.claude-mythos-5-2`. No Zen Free ID verified. Fast mode and effort levels are serving options, not model identities.
- **Context window:** 1M tokens; 128K maximum synchronous output, verified in the model reference. No exact-ID retrieval benchmark found.
- **Modalities:** Text and images in; text out; tool use, vision, adaptive thinking always on, default API effort `high`. No verified native audio/video or non-text output.
- **Pricing (as of 2026-11-10):** Paid $8 input / $40 output / $0.20 cache read per 1M; five-minute writes $10, one-hour writes $16; Batch API 50% discount. Optional fast mode $16/$80. [Model-specific pricing](https://platform.claude.com/docs/en/models/mythos-5-2/overview#pricing), [fast-mode and retention claimant](https://www.anthropic.com/claude-fable-and-mythos-5-2). Standard safety retention is 30 days; eligible enterprise/EFS arrangements provide specific ZDR exceptions. No free API tier verified.
- **Architecture:** Proprietary, undisclosed parameter counts; shared underlying model with Fable 5.2. This identity finding does not authorize changing either existing project folder.

### Raw benchmarks found

The [2026-11-09 announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2) explicitly labels the following results **Mythos 5.2**, unlike ordinary table rows assigned to Fable. Highest available effort is used unless noted; these are vendor-reported results.

Agent / tool use:

- Terminal-Bench-Science **0.1: 75.3%**, explicitly Mythos 5.2; the adjacent 74.6% belongs to Fable.
- CyScenarioBench: **76.3%**, Mythos 5.2. The announcement warns that different labs use unique tasks, so this is not a shared-task head-to-head comparison.
- CVE Rediscovery: **89.6%**, Mythos 5.2, internal October evaluation over **1,829 CVEs**; not SWE-bench or a general-purpose tool-call metric.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified exact-ID public score found.

Reasoning / knowledge:

- De novo binder design: **85.1%**, Mythos 5.2, **24-hour** setting (vendor evaluation; not clinical efficacy).
- Capsid-structure case study: **28 of 34** attempted structures accurately modeled, attributed to Mythos 5.2. The source defines success by structural RMSD thresholds; this is a small internal case study, not a general medical benchmark.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, and Omniscience accuracy/hallucination rate: no verified exact-Mythos numerical result found. The closest shared-weights proxy is **Fable 5.2 HLE 74.2% with tools**, measured with Fable safeguards; it is not relabeled as Mythos.

Coding:

- Exact-Mythos evidence: CVE Rediscovery **89.6%** and scientific terminal work **75.3%**, relevant to code analysis and research workflows but not equivalent to ordinary coding benchmarks.
- **Provisional shared-weights proxies, measured as Fable 5.2:** FrontierCode **2.0: 49.1%** at Xhigh; FrontierSWE **v2: 69.9%**. The vendor's same-underlying-model statement motivates cautious capability inference, not an invented Mythos measurement.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: no verified exact-ID public score found.

Long context:

- No verified exact-ID MRCR/RULER/GraphWalks retrieval result. The 1M limit is a documented capacity, not measured perfect retrieval.

Multimodal evidence:

- Exact input specification is text/images. Fable 5.2's Chartography **73.4% without tools** is only a shared-weights visual proxy, not an exact Mythos score.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exact scientific-terminal 75.3% and security-agent results support strong agentic work; restricted tasks and absent broad exact-ID tool suites cap generalization.
- **Reasoning: 96/100.** Scientific-terminal and binder-design evidence support deep technical reasoning, reinforced provisionally by shared-weight Fable HLE; no isolated general-reasoning suite supports 100.
- **Context window: 95/100.** Verified 1M capacity reaches the top context tier, but no measured retrieval supports a perfect score.
- **Multimodal: 75/100.** Verified image understanding and a clearly labeled shared-weight visual proxy support a provisional visual grade; native audio/video, non-text output, and exact-ID visual accuracy remain unverified.
- **Coding: 94/100.** Exact vulnerability analysis and scientific code workflows, plus explicitly provisional Fable coding proxies, support a high grade capped by missing isolated Mythos SWE/LiveCode results.
- **Cost efficiency: 36/100.** $8/$40 standard pricing is expensive; caching and batching help but fast mode costs $16/$80, and no verified free lane exists.
- **Overall Score: 91/100.** Half-up mean: (94 + 96 + 95 + 75 + 94) / 5 = 90.8, rounded to 91; cost excluded. Best fit is verified technical research, with provisional uncertainty for generic coding and visual comparisons.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source lookup and direct model-reference/announcement verification, with targeted extraction from the live announcement. No peer files read. Exact Mythos rows and Fable shared-weight proxies are explicitly separated; normalized scores are interpretations, not vendor scores. The configured search returned HTTP 402; Bing and direct sources were used.
- Reference URLs:
  - [Exact Mythos 5.2 model, IDs, access, pricing, and limits](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Attributable benchmark table, shared identity, and research case studies](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- Future sources: Preserve this report; add separately signed evidence without counting shared-weight proxies as independent measurements.
