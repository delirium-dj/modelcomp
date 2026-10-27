# Claude Fable 5 — findings by Qoder Sonus

- Source: Anthropic (`claude-fable-5`), standard paid deployment; fallback-assisted and exact-model results distinguished below.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Fable 5.
- **Short description:** Proprietary long-horizon reasoning and coding model, sharing underlying weights with Mythos 5 but carrying different safeguards and access conditions. Mythos results are not automatically Fable results. Superseded by Fable 5.1, but still available.
- **Provider / access:** Claude Messages API `claude-fable-5`; Bedrock `anthropic.claude-fable-5`; Google Cloud, Microsoft Foundry, and Claude Platform on AWS also listed in current official documentation.
- **Release / knowledge:** June 9, 2026; January 2026 reliable and training-data cutoff. Active legacy, retirement not before June 9, 2027. Anthropic records a June 12 access suspension and July 1 restoration, with updated safeguards; early evaluations predate that deployment change.
- **IDs / evaluated tier:** Standard paid API. No exact Zen Free ID verified. Temporary subscription inclusion at launch and restoration was not an enduring free API tier.
- **Context window:** Official 1M tokens and 128K maximum output. Fable 5 is absent from the overview's 300K batch-output beta support list; that larger limit is not assigned to it. Long-running tasks with external notes do not establish a larger single-request context window.
- **Modalities:** Text/image/visual-PDF input and text output. All active models support PDF processing according to official docs. Tool workflows and adaptive reasoning supported; thinking is always on, default effort high, with low through max settings. No verified native audio/video input or non-text generation.
- **Operational behavior:** Official prompting guidance warns of long turns, overplanning, unrequested work, occasional premature stopping, and unsupported progress claims. Use explicit scope, budgets, streaming, timeouts, and independent checks. These are documented failure modes, not measured universal failure rates.
- **Pricing (2026-10-27):** $10 input / $50 output / $1 cache read per million tokens; five-minute writes $12.50, one-hour writes $20; batch input/output 50% off. Fable 5.1's $0.25 cache reads do not apply to Fable 5.
- **Safeguards / fallback:** Cybersecurity, biology/life-science, and reasoning-extraction classifiers can affect benign work. Current Fable 5 prompting docs recommend configuring fallback to Opus 4.8; the default server-side mechanism does not retry reasoning-extraction refusals. A useful returned answer may therefore come from another model.
- **Privacy:** Covered-model policy normally requires 30-day retention, with ZDR only when expressly authorized. September's Enterprise Frontier Safeguards announcement extends interim ZDR to eligible Fable 5 customers while EFS rolls out; this is not universal ZDR or proof every platform already supports EFS.
- **Architecture:** Proprietary; no verified parameter count, active-parameter count, or open-weights license. AA's speculation about size from factual accuracy is not an architecture disclosure.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.1: 80.52%**, Vals June 9, max effort with Opus 4.8 fallback; Vals identifies this benchmark as fallback-sensitive. The launch chart's **88.0%** is a combined Mythos/Fable maximum with a safeguard warning, not an exact Fable-only result.
- **Terminal-Bench 4.0: 42.0%**, Anthropic's September Fable 5.1 comparison explicitly identifying Fable 5. Different benchmark version and deployment from Vals TB2.1; no direct percentage comparison.
- **Terminal-Bench-Science 0.1: 24.7%**, Anthropic's September setup, versus **21.4%** on the public leaderboard with Claude Code and three trials/task, as reported in the same official footnote. Standard error approximately 3.5–4.5 points; the source describes the difference as within noise.
- **GDPval-AA: 1,932 Elo**, AA's June launch evaluation of max effort with Opus 4.8 fallback. September's explicitly versioned **GDPval-AA v2: 1,723 Elo** appears in the vendor comparison and is consistent with AA's later comparison. These are dated evaluation snapshots, not evidence of a 209-point intrinsic regression.
- **OSWorld 2.0: 72.9% partial / 36.1% strict**, September comparison using the benchmark authors' August task files. Fable 5 was rerun under matched conditions; the source explicitly warns against comparing with earlier releases.
- **AutomationBench: 17.1%**, September exact-model comparison. The June combined Mythos/Fable chart's 17.4% is not substituted for this result.
- **Safeguard accounting for the September table:** Fable 5 interventions score zero on OSWorld 2.0 and AutomationBench. Other flagged cyber tasks use Opus 4.8 and biology tasks use Opus 5, per Anthropic's footnote. This differs from the June all-Opus-4.8 fallback configuration.
- **Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA:** no directly verified absolute exact-model numerical score extracted. AA's relative or qualitative claims are not converted into invented numbers.

Reasoning / knowledge:

- **HLE: 53%**, AA June launch at max effort with fallback; approximately 9% of HLE tasks triggered safeguards, and the full run cost about $2,200. AA's September comparison reports **55.5%** for Fable 5. Different dates/configurations remain separate.
- **HLE: 57.8% without tools / 63.8% with tools**, September Anthropic table specifically naming Fable 5, with the safeguard accounting above. These vendor results are not independent replication of AA's setup.
- **AA Intelligence Index: 64.9, rank 1 at June launch; 62 in September comparison; current 50, rank 21/221 on v4.3.2**, max/Opus-4.8-fallback profile. The current index includes different versioned evaluations; historical index points and ranks are not timeless measurements on one scale.
- **AA-Omniscience: 65.4% accuracy / 63.6% hallucination rate**, AA September comparison. Hallucination here is the rate of attempted answers among questions not answered correctly, not 63.6% of all outputs. June's Omniscience index **40** is a different metric, not factual accuracy.
- **ARC Prize verified:** ARC1 **98.5% max or xhigh**, 95.5% high, 92.5% medium, 90.5% low; ARC2 **89.2% max**, 88.3% xhigh, 87.5% high, 82.5% medium, 76.8% low. The page's August 3 summary prices max ARC2 at **$5.45/task**; no ARC3 score is published on the inspected table. These are ARC results, not long-context retrieval.
- **Vals MMLU Pro: 91.50%; ProofBench: 77.00%**, June max/fallback evaluation. MMLU Pro is explicitly among the tasks affected by refusals; these are deployment-level scores.
- **GPQA Diamond: 93.18%**, Vals official search-index row. Fetching the page exposed methodology but not the exact model row, so this is indexed supporting evidence; the row's precise effort/fallback provenance was not independently recovered. Gateway rounding to 93.2% is not a separate measurement.
- **LCR / MLCR / CritPt:** no directly verified primary absolute exact-model results extracted. Other models' retrieval numbers were rejected.

Coding:

- **SWE-bench Verified: 95.00%; LiveCodeBench: 89.78%; Vibe Code Bench: 90.35%; IOI v1: 72.25%**, Vals June max/fallback evaluation. Vals describes first place on its scored coding rows at that date, not a current universal ranking.
- **CursorBench 3.2.0: 70.5%**, Anthropic's September partner-benchmark comparison. This is versioned agentic coding evidence, not a standalone code-generation score.
- **CodeRabbit, 105 error-pattern review tasks:** **65/105 actionable passes**, versus baseline and Opus 4.8 **66/105**; counting all comment types gives **74/105**, versus baseline 72/105. Fable 5's **32.8% actionable precision / 19.4% full precision** and **253 comments** indicate substantial triage burden; Opus 4.8 reports 35.5%/26.5% precision.
- **CodeRabbit hard subset:** **8/16 difficulty-4 passes**, versus baseline 10/16 and Opus 4.8 9/16. Its separate implementation benchmark was stopped early because many runs reached timeouts; the article expressly calls this an experience signal, not a completed leaderboard score.
- **Endor Agent Security League, 200 tasks from 108 Python projects / 77 CWE classes:** Cursor + Fable 5 **72.6% functional / 29.0% secure**, dated June 12; Claude Code + Fable 5 **59.8% / 19.0%**, dated June 10. Secure requires passing functional and security tests. These are different harnesses and early deployments, not interchangeable estimates of model-only ability or a current post-restoration rerun.
- **SWE-bench Pro / FrontierCode:** the visually inspected June chart reports combined Mythos/Fable maxima of **80.3%** and **29.3% Diamond at xhigh**, respectively. No separate Fable value is identifiable there; neither is used as an exact Fable scoring anchor.
- **SciCode / DeepSWE:** no directly verified primary absolute score extracted. An indexed gateway repeats AA-attributed SciCode 61.0%, but the corresponding primary row was not recovered; it is not used to raise the coding score.

Long context / multimodal:

- **MMMU: 89.31%; Vals Multimodal Index: 74.15%**, June max/fallback evaluation. MMMU is explicitly fallback-sensitive. The index and the individual benchmark have different scales and must not be conflated.
- Anthropic documents visual-PDF processing and demonstrates screenshot-based game playing, chart interpretation, and code-generated simulations. These support visual/document workflows, not native audio/video generation or a full-context recall guarantee.
- No verified exact-model MRCR/RULER result at 512K–1M found. A retrieved comparison explicitly marked Fable MRCR unpublished; other snippets concerned GPT-5.5 or other models. Persistent file memory and activity across millions of cumulative tokens are not in-window retrieval measurements.

### Evidence reconciliation and limitations

- **Critical launch-chart attribution:** browser inspection verified the column is headed “Claude Mythos 5 / Fable 5” and displays the higher score of the two. The footnote says ordinary rows differ by 1–3 points; starred rows differ more because of safeguards/fallbacks. Consequently, the chart's HLE 59.0%/64.5%, TB2.1 88.0%, and OSWorld-Verified 85.0% cannot be relabeled exact Fable results. Separately identified AA/Vals and September Fable rows take precedence for scoring.
- **Deployment changed:** AA's June evaluation recorded fallback in approximately 8% of index tasks and 9% of HLE/Omniscience tasks. Anthropic's launch claim of fewer than 5% of sessions uses another denominator and workload mix. July restoration introduced a stricter classifier with more benign coding false positives; June measurements do not prove unchanged behavior afterward.
- **Review claims conflict by workload:** official prompting guidance describes higher bug-finding recall, whereas CodeRabbit found almost unchanged overall coverage, worse hard-case coverage, and weaker precision. The independent review task is narrower and publishes adverse results; general vendor guidance does not override it.
- **Cost and lifecycle:** current AA shows **$8.75/index task**, **130M total evaluation output tokens**, and **69.7 output tokens/s**. September's **$3.14/task** uses a historical workload/version. Fable 5.1's lower cached-input price does not guarantee every task is cheaper, since September AA measured more output tokens for 5.1. AA labels Fable 5 deprecated for benchmark tracking; official API status remains active legacy.
- **Evidence gaps:** the system-card fetch did not yield inspectable text in the available reader, and the Endor follow-up article fetch exposed only its title. No hidden chart/PDF/article content is inferred. Endor numbers come from its directly readable primary leaderboard; GPQA's index-only status and the combined launch chart are explicitly qualified.

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong dated GDPval, TB4.0, and OSWorld evidence supports frontier agent use; modest strict completion, low automation success, fallback sensitivity, and missing Claw-Eval prevent a higher score.
- **Reasoning: 93/100.** Independent HLE, ARC2 89.2%, and factual accuracy support strong reasoning, capped by hallucination, safeguard dependence, and missing verified long-context reasoning results.
- **Context window: 95/100.** Official 1M capacity qualifies for the top tier; no verified ≥98% retrieval at 512K+ supports 100.
- **Multimodal: 87/100.** Strong MMMU and supported image/visual-PDF workflows justify the document tier; fallback-sensitive measurement and absent native audio/video or non-text output cap coverage.
- **Coding: 91/100.** Vals Verified, Vibe, LiveCodeBench, and partner agent results support advanced coding; independent review noise, timeouts, and low secure-completion rates constrain trust.
- **Cost efficiency: 31/100.** $10/$50 and $1 cache reads are expensive, with high measured task costs; batch/caching and selective use on hard tasks provide limited offsets.
- **Overall Score: 92/100.** Half-up mean: (93 + 93 + 95 + 87 + 91) / 5 = 91.8 → 92, cost excluded. Best for difficult, bounded autonomous work with explicit verification and budgets; compare current successor pricing and safeguards before a new deployment.

## Sources and search audit

1. [Anthropic June launch](https://www.anthropic.com/news/claude-fable-5-mythos-5), [original combined benchmark image](https://www-cdn.anthropic.com/images/4zrzovbb/website/1e65982497d7d4891219ed0e83141625a291b860-2600x2870.png), and [June 30 restoration notice, updated July 1](https://www.anthropic.com/news/redeploying-fable-5). Chart visually inspected; combined values not assigned to Fable alone.
2. [Current official Fable 5 model overview](https://platform.claude.com/docs/en/models/fable-5/overview), [prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5), [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support), and [retention requirements](https://platform.claude.com/docs/en/build-with-claude/zero-data-retention).
3. [Anthropic September comparison and safeguard footnotes](https://www.anthropic.com/claude-fable-and-mythos-5-1), including exact Fable 5 rows and interim enterprise ZDR eligibility.
4. [AA June launch analysis](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index), [September independent comparison](https://artificialanalysis.ai/articles/claude-fable-5-1), and [current max/fallback profile](https://artificialanalysis.ai/models/claude-fable-5).
5. [ARC Prize exact-model results](https://arcprize.org/results/anthropic-claude-fable-5), verified effort sweep.
6. [Vals exact-model June evaluation](https://www.vals.ai/models/anthropic_claude-fable-5) and [GPQA methodology/indexed row](https://www.vals.ai/benchmarks/gpqa).
7. [CodeRabbit original Fable 5 review](https://www.coderabbit.ai/blog/fable-5-model-review) and [Endor primary Agent Security League](https://www.endorlabs.com/research/ai-code-security-benchmark), independent implementation/review/security evidence with limitations.

Search audit: eleven completed independent web-search requests, followed by primary-page retrieval and browser chart inspection: (1) official launch/pricing; (2) AA/ARC evaluation; (3) coding reviews; (4) official June launch/restoration; (5) long context and scientific benchmarks; (6) security and fallback; (7) CodeRabbit exact-model review; (8) exact-model MRCR; (9) GPQA/SciCode; (10) current retention/EFS; (11) Vals GPQA. Broad or unrelated hits were discarded. Search snippets, partner testimonials, gateway repetitions, and combined-family scores were not treated as independent exact-model replication. Research completed before starting any further subject; no peer findings used.

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential multi-source public-web research with official deployment checks, independent benchmarks, direct launch-chart inspection, and explicit conflict handling; scores are normalized 1–100 interpretations, not official vendor scores.
