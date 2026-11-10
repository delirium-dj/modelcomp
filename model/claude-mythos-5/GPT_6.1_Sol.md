# Claude Mythos 5 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-mythos-5`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall formula in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's restricted-access Mythos-class model for vetted security and life-sciences organizations. Anthropic explicitly says it is the same underlying model as Claude Fable 5, with selected safeguards lifted; the different access behavior must not be mistaken for different weights.
- **Provider / access:** Verification-gated Claude Messages API (`https://api.anthropic.com/v1/messages`), Amazon Bedrock, Google Cloud, and Microsoft Foundry, as listed in the [model reference](https://platform.claude.com/docs/en/models/mythos-5/overview). Not a generally available OpenAI Chat Completions/Responses route.
- **Release / knowledge:** Released 2026-06-09; reliable knowledge and training-data cutoffs January 2026. The reference marks it active with verification required and a retirement commitment not sooner than 2027-06-09; Mythos 5.2 is now the current generation.
- **IDs:** `claude-mythos-5`; Bedrock `anthropic.claude-mythos-5`. No Zen Free ID verified.
- **Context window:** 1M tokens and 128K maximum synchronous output, verified in the model-specific reference. No measured retrieval accuracy at that limit was found.
- **Modalities:** Text and image inputs; text output; adaptive thinking always on, default effort `high`, tool use, and vision. No verified native audio/video input or non-text output.
- **Pricing (as of 2026-11-10):** Paid $10 input / $50 output / $1 cache read per 1M tokens; five-minute cache writes $12.50 and one-hour writes $20; Batch API discount 50%. [Exact-model pricing claimant](https://platform.claude.com/docs/en/models/mythos-5/overview#pricing). Verification is an access restriction, not a free tier. The launch announcement requires 30-day safety retention and states that this traffic is not used for training.
- **Architecture:** Proprietary, undisclosed parameter counts; same underlying model as Fable 5, with different safeguards. This is an identity-review finding, not permission to merge or alter either permanent project folder.

### Raw benchmarks found

The [June launch announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5) includes a [benchmark-table image](https://www-cdn.anthropic.com/images/4zrzovbb/website/1e65982497d7d4891219ed0e83141625a291b860-2600x2870.png), inspected directly. Its column is **Claude Mythos 5 / Fable 5**. The footnote says it reports the higher result of the two; ordinary results differ by one to three percentage points, while starred rows differ more because of Fable's safeguards. These are joint upper-envelope observations, not isolated exact-ID measurements and not two independent reports.

Agent / tool use:

- Terminal-Bench **2.1: 88.0%***; GDPval-AA: **1932 Elo**; AutomationBench: **17.4%**; OSWorld-Verified: **85.0%** (joint column, Anthropic; retain the starred-row caveat).
- Legal Agent Benchmark: **13.3%** (joint column, Anthropic).
- Tau3-Banking/Tau2-Bench, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- Humanity's Last Exam: **59.0%*** without tools and **64.57%*** with tools (joint upper-envelope, Anthropic).
- BioMysteryBench: **46.1%*** hard subset and **83.9%*** human-solved subset (joint upper-envelope, Anthropic).
- The announcement separately attributes to **Mythos 5** an approximately **80%** preference rate for molecular-biology hypotheses in blinded comparisons with Opus-class models. This is a vendor-internal preference study, not HLE accuracy or an independent replication.
- GPQA Diamond, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, and Omniscience accuracy/hallucination rate: no verified exact-ID numerical result found.

Coding:

- SWE-Bench Pro: **80.3%**; FrontierCode **Diamond: 29.3%** at `xhigh`; Terminal-Bench **2.1: 88.0%*** (joint upper-envelope, Anthropic).
- LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench, and DeepSWE: no verified public score found.

Long context:

- No verified MRCR/RULER/GraphWalks retrieval score found for `claude-mythos-5`. Claims about multi-million-token agent sessions and external memory do not establish a larger single-request context limit.

Additional evidence:

- GDP.pdf: **29.8%** without tools; Blueprint-Bench **2: 38.6%** (joint visual/document and spatial-reasoning results, Anthropic).
- Exact Mythos 5 protein-design case study: **9 of 14** targets produced strong candidates, per the announcement; experimental investigation was ongoing. This is not a clinical success rate.
- ExploitBench **Cap%: 78.0%*** and HealthBench Professional **66.0%*** appear in the joint column. Restricted safeguards and task scope prevent generalizing them to unrestricted consumer access.

### Normalized scores (1–100)

- **Tool use: 93/100.** Joint TB2.1 88.0% and GDPval-AA 1932 support frontier agents, but ambiguous per-ID attribution and much weaker AutomationBench 17.4% cap this provisional interpretation.
- **Reasoning: 94/100.** Joint HLE results and the exact-Mythos biology preference study support deep reasoning; vendor-only evaluation and upper-envelope reporting prevent an isolated maximum grade.
- **Context window: 95/100.** The documented 1M limit reaches the top capacity tier, but no verified long-context retrieval measurement supports 100.
- **Multimodal: 75/100.** Image understanding and document/spatial benchmarks support a visual-document grade; native audio/video and non-text output are not established, and joint-score attribution remains uncertain.
- **Coding: 94/100.** SWE-Bench Pro 80.3% and TB2.1 88.0% are strong joint evidence; this provisional grade is capped because the announcement does not separate all Mythos and Fable runs.
- **Cost efficiency: 30/100.** $10/$50 base pricing matches the methodology's expensive tier; caching and batch discounts help, but neither supplies a free API lane.
- **Overall Score: 90/100.** Half-up mean: (93 + 94 + 95 + 75 + 94) / 5 = 90.2, rounded to 90; cost excluded. A provisional fit for vetted long-horizon research and engineering, not a claim of independent benchmark separation from Fable 5.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source lookup, direct Anthropic references, and visual transcription of the official benchmark image. No peer findings were read. Joint results, exact-Mythos studies, and access restrictions are explicitly separated; normalized grades are interpretations rather than vendor scores. The configured search integration returned HTTP 402; Bing and direct sources were used.
- Reference URLs:
  - [Exact Mythos 5 reference, IDs, limits, pricing, and status](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [June 9 launch and safeguards/identity explanation](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Official joint benchmark image and methodological footnote](https://www-cdn.anthropic.com/images/4zrzovbb/website/1e65982497d7d4891219ed0e83141625a291b860-2600x2870.png)
  - [Current Mythos family availability](https://www.anthropic.com/claude/mythos)
- Future sources: Add a separately signed file; preserve this report and do not silently pool joint-column results as independent observations.
