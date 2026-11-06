# Muse Wonder Full — findings by Qoder Sonus

- Source: Meta / Muse Wonder Full (`muse-wonder-full-1.0`)
- Date: 2026-11-05 (UTC)
- Current scoring methodology: [README](../../README.md#methodology-v4-current) and [RULES](../../RULES.md); historical overview: [model-comparison](../../model-comparison.md)
- Cross-model signed log: [model-findings](../../model-findings.md)

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's higher-capability Wonder model for sustained coding, computer use, and personal/professional agents. Full is a distinct model selection, not maximum reasoning on regular Wonder and not merely the name of a subscription tier.
- **Provider / access:** Muse Code subscription, Power Usage or Maximum Usage plans. Meta's regular Wonder API examples use `muse-wonder-1.0`; they do not establish a public Chat Completions or Responses endpoint for Full. Artificial Analysis also reports no publicly available Full API.
- **Release / knowledge:** Released October 12, 2026, corroborated by Meta's launch material and Artificial Analysis. No verified exact knowledge cutoff found.
- **IDs:** Official product table lists `muse-wonder-full-1.0`. Regular `muse-wonder-1.0` is a separate subject; its provider routes, token prices, and throughput must not be transferred to Full.
- **Context window:** 1M tokens, independently listed by Artificial Analysis and officially listed by Meta. Exact maximum output and an input/output allocation contract were not established. Active Memory across conversations is a separate mechanism, not proof of perfect 1M-token retrieval.
- **Modalities:** Text, image, video, and audio input; text output, according to Artificial Analysis and an indexed excerpt of Meta's model card. Meta's developer launch article explicitly says audio-dependent use cases require confirmation on the release surface, so verify the actual Muse Code workflow before deployment. Documents/screenshots/charts are supported use cases; no native generated image/audio/video output established for this checkpoint. Muse Image and the CLI's voice mode are separate product capabilities. Reasoning, tools, parallel subagents, and computer use are documented; a public Full-specific JSON/API contract was not verified.
- **Pricing (as of 2026-11-05):** Power Usage **$50/month**, Maximum Usage **$200/month**, officially advertised at 20× and 80× Everyday usage, respectively. These are capped subscriptions, not unlimited inference or token prices. The subscription documentation says Maximum users must wait when limits are reached. Meta's **$4 input / $0.20 cached input / $20 output per 1M** applies to regular Wonder only; Full's official token-price cells are blank.
- **Privacy / limits:** Subscriptions default to Contributor mode, allowing submitted prompts/code/files/context and responses to train future Meta models. It can be turned off without losing access to Full; future content then is not used for training. Settings are machine-local, interactive and headless defaults differ, and explicit per-run configuration is recommended for CI. Managed organizations and ZDR accounts have different controls. No universal Full-specific retention duration or automatic ZDR entitlement was verified. Subscription credentials are for Muse Code only, not general API reuse.
- **Architecture:** Proprietary, closed weights; parameter count and detailed architecture undisclosed. Meta describes larger base models than Muse Spark 1.3 and training at Prometheus, but that does not establish a particular MoE layout or parameter estimate.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 4.0:** Artificial Analysis's original October 12 evaluation reports **57%** at max effort; Meta's table gives **57.1**. Rounding is consistent. This is agentic terminal work, not a generic function-calling success rate. No verified exact Full Tau3/Claw/Toolathon result found.
- **GDPval-AA v2.1:** **1857 Elo**, launch rank **#2**, from Artificial Analysis. Its confidence interval overlaps Opus 5.5's 1866 and Sonnet 5.5's 1838; the ordering does not establish a statistically decisive difference. These are Elo values, not percentages.
- **AA-Briefcase:** **1729 Elo**, launch rank **#3**, from the same original evaluator article. Do not silently relabel the historical result as current Briefcase v1.1.
- **AutomationBench-AA:** Artificial Analysis's launch article reports **71%**, rank **#3**; Meta's table labels its Full result **45.4** under the same benchmark name. The current AA methodology scores average task-objective completion without guardrail violations, unlike Zapier's whole-task-success leaderboard. That establishes an important metric distinction but does not conclusively identify the provenance of Meta's 45.4. Both figures are retained as source-specific, not averaged or asserted to be the same run.
- **OSWorld V2.1:** Meta table **78.4 partial / 39.4 binary**. Partial progress must not be reported as strict whole-task success. The partial result trails the table's Fable 5.1 and Opus 5.5 values; Full does not win every agent benchmark.
- **JobBench:** **75.3**, vendor-published. **Personal Superintelligence Index 59.1** is explicitly Meta's internal composite, not an independent universal intelligence scale.
- **Professional tasks, Meta table:** Harvey LAB-AA **13.1**, Vals Finance Agent V2 **59.1**, HealthBench Pro **62.3**, GDP.pdf **33.2**. Absolute legal success remains limited even where the comparative rank is favorable. The AA article independently reports rounded GDP.pdf **33%**, a narrow launch lead, not a general 33% professional competence rate.
- **Vals original October 12 note:** Full **64.57%**, **#5 of 47** on its then-current index, versus regular Wonder **61.06%**; Public Benefits **73.75%**, Harvey Legal Agent Benchmark **21.67%**. Vals says max effort. Its Harvey figure is not interchangeable with Meta's LAB-AA 13.1: evaluator/scoring configurations differ and equivalence was not established.
- **Vals pricing inconsistency:** That note reports **$8.56/test** while assigning both models **$4/$20** token prices. This conflicts with Meta's explicit subscription-only Full pricing and AA's refusal to calculate Full cost per task. Treat $8.56 as Vals' evaluation accounting under its stated rate assumption, not a verified consumer Full API bill or cost-efficiency anchor.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v4.3:** **56**, max effort, independently measured at launch; regular Wonder scores 52. Full improves across all ten then-included evaluations relative to Spark 1.3. The current profile instead shows **50 on v5.0.1**; the evaluation suite changed to nine components, so 56→50 is not demonstrated model regression.
- **CritPt:** **33%**, launch rank **#1**; **SciCode 63%**, **#3**, from AA's original article. CritPt leads were narrow against competitors at 31–32%; this is the historical task/version, not the current CritPt v2 hard subset.
- **AA-Omniscience:** Historical net score **30**, hallucination rate **23%**, from AA. Net score rewards correct answers and penalizes unsupported ones; it is not 30% accuracy. Lower hallucination does not erase the reported relative weakness in knowledge. No exact separate Full accuracy percentage was established from the retrieved original article.
- **Token use:** AA's launch article reports approximately **54K output tokens per Intelligence Index task** and **6.44M input tokens/task** for Full, versus regular Wonder's 7.69M input. These are multi-call workload statistics, not maximum output/context specifications. They do not establish a Full dollar cost.
- No verified exact-model GPQA, HLE, or long-context medical-reasoning number was recovered in this pass. Results from adjacent Muse releases are not substituted.

Coding:

- **Artificial Analysis Coding Agents Index:** **68**, max effort in **Muse Code**, versus regular Wonder **63**. This evaluates the agent-plus-model system, not bare weights. AA's launch article compares it with Sonnet 5.5 in Claude Code at 68 and Opus 5.5 at 66; that is a dated, harness-specific index snapshot.
- **DeepSWE 1.1:** **79.0**, Meta-published; an indexed primary model-card excerpt attributes Full, regular Wonder, and Opus 5.5 runs to **Datacurve**. The competitor columns combine sources rather than proving a single controlled evaluation of every model. A complete original Datacurve run record was not retrieved, so retain third-party attribution without claiming independent trajectory inspection.
- **SWE-Marathon:** Meta table **57.5 at xhigh**, despite its general max column heading. The original benchmark site's indexed text instead lists **53.1% for Full (max) / Muse Code** and **52.5% for regular Wonder (max)** on **v1.1**, described as 20 updated multi-hour tasks. Direct retrieval exposed only the page title, so those current rows are explicitly indexed primary evidence. Different effort/configuration or snapshots may matter, but no experiment isolating the discrepancy was obtained; do not merge 57.5 and 53.1 or relabel xhigh as max.
- **SWE-Marathon provenance:** The owner's GitHub repository confirms the benchmark, July v1.1 release, and October Wonder inclusion. A secondary transcription of Meta's footnotes says Astra/Fable use different agent harnesses; the vendor comparison is not controlled common-harness evidence. The repository's existence alone does not verify every vendor row.
- **ProgramBench:** **59.0**, Meta table, below Opus 5.5's 70.5 in that same table. This limits claims that Full is universally strongest at programming.
- **Hands-on counterevidence:** MindStudio's detailed secondary account of KingBench 4 describes six same-prompt Muse Code builds at **high**, not AA's max effort, with frozen outputs and no manual repair before scoring. Reported Full results include emulator **3.1/10** versus regular 2.4, keyboard configurator **5.5/10** versus 3.5, Docker alternative **3.0/10** tied, and room designer **7.0/10** versus 7.6. Reported failures include storage-boundary escapes, export integrity errors, incomplete autosave, and graphics-resource leaks. These are small-sample, review-specific observations, not reproduced here or population accuracy estimates.
- The original Kingy review returned HTTP 403. Its indexed conclusion says small utility projects showed no additional Full quality benefit; the detailed tests above remain attributed to the accessible secondary account, not falsely presented as a fully inspected original review. Strong long-horizon benchmarks and mixed end-to-end builds can coexist.
- No verified exact Full SWE-bench Verified/Pro or LiveCodeBench result found; DeepSWE, SWE-Marathon, and the coding-agent index are distinct proxies, not replacements with renamed labels.

Long context / multimodal:

- **MemoryBench:** **85.5**, Meta table, versus regular Wonder **85.6**. An indexed primary model-card excerpt describes it as an internal test using **64K–100K-token conversations**. It is not a 1M retrieval measurement and does not prove Full improves on every memory task.
- **1M capacity:** Meta and AA agree. No verified Full MRCR/RULER/GraphWalks result at 512K or 1M was found, so no perfect-context claim is made.
- Multimodal input breadth is corroborated by AA and indexed primary material; no exact Full MMMU-Pro or audio/video accuracy figure was extracted. Code-generated games, presentations, or video are not native media output benchmarks.

Evidence reconciliation and limitations:

- Official product/subscription pages and AA's original article were directly readable. Meta's model-card URL returned raw PDF bytes rather than readable body text; only explicitly labeled indexed excerpts and separately attributed secondary footnotes were used from it.
- The developer table is a mixture of internal and third-party/provider results. A secondary transcription says comparable external results are preferred and otherwise the highest internally validated/self-reported/leaderboard result is used. Without full primary PDF extraction, that remains a qualified methodology account, not an assertion that this pass audited every run.
- Preserved conflicts include AA index versions, AutomationBench 45.4 versus 71, SWE-Marathon 57.5 versus 53.1, two Harvey configurations, and Vals' assumed token pricing versus official subscription terms. No contradictory values were silently averaged.
- Meta's launch page says further safety evaluation reporting will follow. This pass does not establish comprehensive adversarial robustness or permission to trust autonomous actions without tests and approvals.

### Normalized scores (1–100)

- **Tool use: 92/100.** AA's 1857 GDPval Elo, 1729 Briefcase Elo, 57% terminal result, and strong workflow performance support advanced agents; binary OSWorld 39.4, source-dependent automation scores, and harness dependence cap reliability.
- **Reasoning: 91/100.** Independently measured CritPt 33%, SciCode 63%, and strong historical/current AA indexes support frontier scientific and professional reasoning; knowledge weakness, 23% historical hallucination, and missing exact GPQA/HLE evidence prevent a top-end certainty claim.
- **Context window: 95/100.** Official and independent 1M capacity earns the long-window band; internal 64K–100K memory results do not verify near-perfect retrieval at 512K–1M.
- **Multimodal: 88/100.** Corroborated text/image/video/audio input plus document work is broad; release-surface audio qualification, text-only output, and absent exact multimodal accuracy rows cap the score.
- **Coding: 91/100.** Muse Code's independently measured 68 index and strong long-horizon results support difficult projects; configuration conflicts, weaker ProgramBench, and concrete small-sample build failures rule out universal superiority.
- **Cost efficiency: 64/100.** The $50 entry plan can provide strong value for sustained Muse Code work, but capped usage, $200 high-volume access, default training participation, and no auditable public per-task/token price limit portability and cost predictability; this subscription-based judgment is provisional.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions: (92 + 91 + 95 + 88 + 91) / 5 = 91.4, rounded to 91; cost is excluded. Best fit is supervised long-running work inside Muse Code, not unrestricted API deployment.

---

## Signature

- Provided by: **Qoder Sonus** — 2026-11-05
- Method: Sequential, browser-free public-web research using multiple successful searches, direct page retrieval, and explicitly qualified indexed primary excerpts; scores are normalized 1–100 interpretations, not official vendor scores. No peer findings or model-generated repository averages informed the ratings, and no hands-on model execution was performed.
- Reference URLs:
  - [Meta model specifications, benchmark table, and pricing](https://dev.meta.ai/models/muse-wonder)
  - [Meta research announcement](https://research.meta.ai/blog/introducing-muse-wonder/)
  - [Meta developer launch article and surface caveats](https://dev.meta.ai/resources/blog/build-with-muse-wonder)
  - [Meta model card — indexed excerpts; raw PDF retrieval](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Code subscriptions and Contributor mode](https://dev.meta.ai/docs/muse-code/subscriptions/)
  - [Artificial Analysis original launch evaluation](https://artificialanalysis.ai/articles/muse-wonder)
  - [Artificial Analysis current Full profile](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Artificial Analysis AutomationBench methodology](https://artificialanalysis.ai/evaluations/automationbench-aa)
  - [Vals original Full evaluation note](https://www.vals.ai/models/meta_muse-wonder-full)
  - [SWE-Marathon owner leaderboard — indexed rows](https://www.swe-marathon.org/)
  - [SWE-Marathon owner repository](https://github.com/abundant-ai/swe-marathon)
  - [Secondary model-card footnote transcription](https://dev.to/gabrielanhaia/metas-muse-wonder-costs-exactly-what-opus-55-costs-it-loses-9-of-metas-own-14-benchmarks-399a)
  - [MindStudio secondary KingBench 4 account](https://www.mindstudio.ai/blog/muse-wonder-full-kingbench-test)
  - [Kingy original review — indexed excerpt only; direct retrieval blocked](https://kingy.ai/blog/muse-wonder-full-pricing-benchmarks-comparison/)
