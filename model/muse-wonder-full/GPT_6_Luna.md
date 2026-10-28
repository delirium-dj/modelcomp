# Muse Wonder Full — findings by GPT-6 Luna

- Source: Meta/Muse Wonder Full 1.0
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's highest-capability Muse model for frontier coding, long-running agents, and computer use. It is available only with eligible Muse Code subscriptions, distinct from the API-served Muse Wonder model.
- **Provider / access:** Meta Muse Code, Power Usage and Maximum Usage plans; model ID `muse-wonder-full-1.0` is listed on Meta's developer page, but API access/pricing is not offered.
- **Release / knowledge:** Announced October 2026; cutoff not stated.
- **IDs:** `muse-wonder-full-1.0` (Meta product model ID).
- **Context window:** 1M tokens per Meta's model page.
- **Modalities:** Text, image, video, and audio understanding; Meta documents computer use and browser/desktop/mobile interaction for the Muse Wonder series. Text output.
- **Pricing (as of 2026-10-28):** Subscription access only; included in Power Usage ($50/month) and Maximum Usage ($200/month). No per-token rate published for Full.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Meta's current model page publishes a comparison table for maximum reasoning effort, and states that Muse Wonder Full tops agentic and coding benchmarks, including DeepSWE and SWE-Marathon, in independent third-party runs. The table's flattened rendering does not preserve all row/column alignment, so only clearly recoverable benchmark numbers are transcribed here.

Agent / tool use:

- OSWorld V2.1: **78.4 partial reward**, **39.4% binary completion** (Meta's displayed comparison).
- JobBench, AutomationBench-AA, and GDP.pdf are listed, but the flattened table did not permit unambiguous extraction of Muse Wonder Full's exact values.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** (Meta's displayed comparison).
- Other listed knowledge/work evaluations have no unambiguously recoverable exact value in the rendered table.

Coding:

- Terminal-Bench 4.0-AA: **57.1** (Meta's displayed comparison).
- DeepSWE 1.1: **79.0**.
- SWE-Marathon: **57.5** at xhigh effort.
- ProgramBench: **59.0**.

Long context:

- 1M-token context listed; no MRCR/RULER/GraphWalks retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld V2.1's 78.4 partial reward and 39.4% full completion are strong; capped because many other agent benchmark values were not recoverable from the public table rendering.
- **Reasoning: 91/100.** AA Intelligence Index 56 supports frontier-level capability; capped because independent broad reasoning scores were not verified.
- **Context window: 90/100.** 1M capacity is top-tier, but no retrieval benchmark validates accuracy at that range.
- **Multimodal: 95/100.** Meta documents broad multimodal perception and computer use; no independent modality-specific benchmark is used to justify 100.
- **Coding: 96/100.** DeepSWE 79.0 and SWE-Marathon 57.5, alongside Terminal-Bench 57.1, support strong coding-agent performance; capped for limited independent replication detail.
- **Cost efficiency: 15/100.** Subscription-only pricing and 1M context use make direct per-token value hard to compare; premium access costs $50/$200 monthly.
- **Overall Score: 93/100.** Half-up mean of quality dimensions (94+91+90+95+96)/5 = 93.2; recommended for demanding long-horizon agentic coding when subscription access is appropriate.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public web research. Exact values are included only where the vendor page's table rendering preserved benchmark attribution; normalized scores are independent interpretations.
- Sources: [Meta Muse Wonder model page and benchmark comparison](https://dev.meta.ai/models/muse-wonder).
