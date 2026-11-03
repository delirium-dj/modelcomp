# Muse Wonder Full — findings by GPT 6.1 Sol

- Source: Meta / `muse-wonder-full-1.0`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`; current contract: `../../README.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's proprietary frontier agentic model, distinct from the smaller API-accessible Muse Wonder. Particularly strong on sustained repository engineering; subscription access limits independent deployment.
- **Provider / access:** Muse Code Power Usage and Maximum Usage plans only. No public standalone API; do not substitute the base Wonder OpenAI-compatible endpoint.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not verified.
- **IDs:** `muse-wonder-full-1.0`, as listed by Meta. No verified Zen Free ID.
- **Context window:** 1M tokens, independently listed by Artificial Analysis and officially by Meta. Exact input/output split not verified.
- **Modalities:** Text, image, speech and video input; text output; reasoning and agentic computer/tool use. This is input coverage, not evidence of generated audio/video.
- **Pricing (as of 2026-11-03):** $50/month Power Usage or $200/month Maximum Usage. No published Full per-token API price. The $4/$0.20/$20 input/cache/output rates belong to base Wonder, NOT Full. Effective task cost depends on subscription limits and utilization.
- **Architecture:** Proprietary; parameter count and active-parameter count not verified.

### Raw benchmarks found

Meta's official comparison table lists the following for **Full (max)**. These are publisher-reported results, even where Meta describes third-party execution; they should not be mistaken for independently reproduced measurements by this reporter.

| Area | Evaluation | Full result | Interpretation / limits |
|---|---|---:|---|
| Agents | AutomationBench-AA | 33.2 | End-to-end business workflows; not a generic tool-call success rate |
| Agents | JobBench | 75.3 | Professional tool use |
| Computer use | OSWorld V2.1 | 78.4 partial; 39.4 binary | Different grading metrics; never average them |
| Memory | MemoryBench | 85.5 | Memory task, not a 1M-token retrieval guarantee |
| Terminal coding | Terminal-Bench 4.0-AA | 57.1 | Not interchangeable with Terminal-Bench 2.x |
| Coding | DeepSWE 1.1 | 79.0 | Long-horizon repository engineering |
| Coding | SWE-Marathon | 57.5, xhigh | Effort setting differs from table heading; preserve qualifier |
| Coding | ProgramBench | 59.0 | From-scratch programming |
| Professional reasoning | GDP.pdf | 75.3 | Professional document work |
| Legal | Harvey LAB-AA | 13.1 | Difficult legal-agent evaluation; substantial remaining failure rate |
| Finance | Vals Finance Agent V2 | 59.1 | Domain-specific agent research |
| Health | HealthBench Pro | 62.3 | Not clinical certification |

Independent Artificial Analysis currently reports **Intelligence Index v5.0: 50, rank 17/94**, and **110M output tokens** used in the evaluation. Its current page explicitly defines v5.0 as nine evaluations. Meta's launch table instead gives **56**, and independent launch coverage/search results identify that as **v4.3**. These are different benchmark generations, not an established regression and not directly comparable percentiles.

- GPQA Diamond, HLE, CritPt, SWE-bench Verified, LiveCodeBench, SciCode, Tau2/Tau3, GDPval-AA Elo, Claw-Eval and MCP-Atlas: no verified public score found for the exact Full ID in the inspected sources.
- Long context: no verified 1M-token MRCR/RULER retrieval result found. Nominal window and MemoryBench are separate evidence.

### Source comparison and research record

Three successful distinct Google searches: exact `"Muse Wonder Full"`; `Muse Wonder Full Artificial Analysis benchmarks GPQA`; `Muse Wonder Full context modalities pricing review`. The configured websearch integration returned empty results even for “Meta AI”; browser search was used instead. Read Meta's model page and the independent Artificial Analysis model page directly; compared MindStudio, TJ Digital and Colrows search summaries for launch/access discrepancies.

Meta establishes the exact SKU, subscription restriction and 1M window. Artificial Analysis independently supports modalities, context and current composite performance. Launch articles repeating 56 describe an older index; the live evaluator's 50 takes precedence for current v5.0. BenchLM's search result labels its 68.96 aggregate “Estimated,” so it is not treated as a measured benchmark. Search-generated AI overview claims were not used as benchmark evidence. No unsupported “best at everything” conclusion: Full trails some competitors on terminal/programming rows despite leading sustained coding rows.

### Normalized scores (1–100)

These are explicit editorial interpretations, not vendor percentages or a mechanical rescaling of the AA index.

- **Tool use: 90/100.** JobBench 75.3 and OSWorld evidence support strong agents; AutomationBench 33.2 and legal-task failures cap reliability.
- **Reasoning: 88/100.** Independent v5.0 index 50 and professional-task evidence support frontier performance; absent exact-model GPQA/HLE figures prevent finer claims.
- **Context window: 95/100.** Verified nominal 1M window; lack of full-window retrieval measurements prevents a maximum score.
- **Multimodal: 90/100.** Independently documented text/image/speech/video inputs; text-only output and missing measured visual scores cap the rating.
- **Coding: 93/100.** DeepSWE 79.0 and SWE-Marathon 57.5 show sustained engineering strengths; terminal 57.1 and ProgramBench 59.0 preclude universal leadership.
- **Cost efficiency: 62/100.** $50 entry subscription can be useful for heavy coding, but quotas and no standalone API/per-task rate impair cost predictability.
- **Overall Score: 91/100.** Half-up mean of 90, 88, 95, 90 and 93 = 91.2; best suited to sustained engineering inside Muse Code.

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03
- Method: Independent public web research, three successful distinct browser searches and direct primary/evaluator comparison; no peer findings read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://dev.meta.ai/models/muse-wonder/
  - https://artificialanalysis.ai/models/muse-wonder-full
  - https://www.google.com/search?hl=en&q=%22Muse+Wonder+Full%22
  - https://www.google.com/search?hl=en&q=Muse+Wonder+Full+Artificial+Analysis+benchmarks+GPQA
  - https://www.google.com/search?hl=en&q=Muse+Wonder+Full+context+modalities+pricing+review
