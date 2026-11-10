# Claude Fable 5.2 — findings by GPT-6.1 Sol

- Source: Anthropic / `claude-fable-5-2`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's model for demanding reasoning, long-running agents, and finished technical artifacts. Anthropic says Fable 5.2 and Mythos 5.2 share the same underlying model, but Fable adds cyber/biology safeguards; different effort or fast-mode settings are not different checkpoints.
- **Provider / access:** Claude Messages API (`https://api.anthropic.com/v1/messages`), Claude apps/Code, AWS, Google Cloud, and Microsoft Foundry. Platform IDs and availability are verified in the [exact-model reference](https://platform.claude.com/docs/en/models/fable-5-2/overview); this is not an OpenAI Responses API model.
- **Release / knowledge:** Released 2026-11-09; reliable knowledge and training-data cutoffs June 2026. Active/latest; first-party retirement not sooner than 2027-11-09.
- **IDs:** `claude-fable-5-2`; Bedrock `anthropic.claude-fable-5-2`. No Zen Free ID verified. The project folder's dotted version is a filesystem convention, not the spelling of Anthropic's API route.
- **Context window:** 1M tokens; 128K maximum synchronous output, verified by Anthropic. No exact-model long-context retrieval score found.
- **Modalities:** Text and images in; text out; vision, tool use, and always-on adaptive thinking, default API effort `high`. Native audio/video or non-text generation was not established.
- **Pricing (as of 2026-11-10):** Paid $8 input / $40 output / $0.20 cache reads per 1M tokens; cache writes $10 for five minutes or $16 for one hour; Batch API 50% discount. Optional fast mode is $16/$80, not a new model. [Pricing claimant](https://platform.claude.com/docs/en/models/fable-5-2/overview#pricing), [fast-mode claimant](https://www.anthropic.com/claude-fable-and-mythos-5-2). Extra usage on eligible paid subscriptions is a launch promotion, not a verified $0 API tier. Thirty-day safety retention normally applies; approved enterprise arrangements/EFS have specific ZDR exceptions.
- **Architecture:** Proprietary, parameter counts undisclosed; shared underlying model with Mythos 5.2, separated by safeguards. Do not treat their shared results as independent weights-level evidence.

### Raw benchmarks found

All numerical results below come from the [2026-11-09 Anthropic announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2). Its table explicitly assigns ordinary rows to **Fable 5.2 with safeguards on**, at highest available effort unless noted. Rows expressly labeled Mythos are not transferred to Fable.

Agent / tool use:

- AutomationBench: **51.4%**.
- WANDR: **82.1%**, relaxed score.
- OSWorld **2.1: 89.3%**, offline set, partial.
- AA-Briefcase **v1.1: 66.1% rubric / 1785 Elo**; this is not GDPval-AA.
- Remote Labor Index: **41.3%**, High effort.
- RoboDojo Sim: **64.9%**, internal run at Max effort; simulated robotics, not an independently reproduced physical-world success rate.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: no verified public score found in the accessed sources.

Reasoning / knowledge:

- Humanity's Last Exam: **74.2% with tools**; no matching no-tools score found.
- Terminal-Bench-Science **0.1: 74.6%** for Fable. The adjacent **75.3%** is explicitly Mythos 5.2, not Fable's result.
- GPQA Diamond, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, and Omniscience accuracy/hallucination rate: no verified exact-model numerical result found.

Coding:

- FrontierCode **2.0: 49.1%**, Xhigh effort; announcement prose separately reports **45.3%** at High effort. These are different settings of the same model.
- FrontierSWE **v2: 69.9%**, distinct from SWE-bench Verified and SWE-Pro.
- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode/AA-SciCode, Vibe Code Bench, and DeepSWE: no verified public score found.

Long context:

- No verified MRCR/RULER/GraphWalks retrieval score found. Long-running multi-agent demonstrations and file memory are not single-request retrieval measurements.

Multimodal evidence:

- Chartography: **73.4%**, no tools (Anthropic). Document-artifact and visual-robotics demonstrations support practical vision, but do not establish native audio/video generation.
- The announcement's Mythos-specific CVE, cybersecurity, and protein-design scores are deliberately excluded from Fable's raw evidence.

### Normalized scores (1–100)

- **Tool use: 96/100.** AutomationBench 51.4%, OSWorld 89.3%, WANDR 82.1%, and Briefcase 1785 support frontier agents; vendor-run/partial harnesses and absent legacy tool suites cap confidence.
- **Reasoning: 98/100.** HLE 74.2% with tools and scientific terminal work at 74.6% support near-top reasoning; no verified no-tools HLE or GPQA result prevents a perfect grade.
- **Context window: 95/100.** Documented 1M capacity reaches the top window tier, but no measured retrieval at that limit supports 100.
- **Multimodal: 80/100.** Numerical chart recognition, visual tasks, and document-artifact work support visual-document capability; no verified native audio/video or non-text output caps modality breadth.
- **Coding: 97/100.** FrontierCode 2.0 at 49.1% and FrontierSWE v2 at 69.9% establish strong long-horizon code work; differing benchmark versions, effort dependence, and no independent replication cap the grade.
- **Cost efficiency: 38/100.** $8/$40 standard pricing is expensive despite inexpensive cache hits and better vendor-reported task efficiency; fast mode doubles token prices and paid-plan promotions do not make API usage free.
- **Overall Score: 93/100.** Half-up mean: (96 + 98 + 95 + 80 + 97) / 5 = 93.2, rounded to 93; cost excluded. Best suited to demanding agents and technical research rather than cheap, low-latency requests.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research and direct model-reference/announcement verification, independently of peer files. Retained effort levels and exact benchmark versions, and separated Fable measurements from Mythos-only rows. Normalized scores are 1–100 interpretations, not official vendor scores; configured search returned HTTP 402, so Bing and direct sources were used.
- Reference URLs:
  - [Fable 5.2 exact model specifications and pricing](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Launch announcement, attributable benchmark table, and safeguards](https://www.anthropic.com/claude-fable-and-mythos-5-2)
- Future sources: Add a separately signed findings file and preserve this report.
