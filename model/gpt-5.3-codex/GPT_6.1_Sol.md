# GPT-5.3 Codex — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-5.3-codex`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** Proprietary reasoning model tuned for agentic coding, repository workflows and computer-mediated professional work. Standard Codex is distinct from GPT-5.3 Instant and Codex-Spark [S1,S2,S8].
- **Provider / access:** OpenAI Codex app/CLI/IDE/web; current direct API uses **`v1/responses`**, not native Chat Completions, supports functions, hosted shell, skills, web search, streaming and structured output [S2]. OpenRouter supplies its own translated interface and advertises OpenAI/Azure providers [S6].
- **Release / status:** Vendor launch **2026-02-05** initially said API access forthcoming; Vals evaluation and OpenRouter snapshot are **2026-02-24**, representing a later API distribution record [S1,S4,S6]. Official notice **2026-10-01** deprecates the model with shutdown **2027-04-01**, recommending GPT-6 Sol [S7]. Deprecated does not mean already unavailable.
- **IDs:** `gpt-5.3-codex`, OpenRouter `openai/gpt-5.3-codex` / advertised snapshot `openai/gpt-5.3-codex-20260224` [S2,S6]. No separate free Zen ID verified; local `opencode/` routing is not established just by metadata.
- **Context window:** Official **400,000 total**, **272,000 maximum input**, **128,000 maximum output**, independently corroborated by the actual gateway [S2,S6]. Do not describe 400K as an unconditional input allowance. Compaction permits longer workflows but does not enlarge the simultaneous window.
- **Modalities:** Official text/image input → text; Vals/OpenRouter also expose file input [S2,S4,S6]. Official Responses file guide explains that vision-capable models receive both PDF text and page images, while non-PDF docs extract text only [S10]. No native audio/video or non-text generation assigned. This directly contradicts local metadata's text-only shorthand.
- **Pricing (as of 2026-10-20):** Official **$1.75 input / $14 output / $0.175 cached input per 1M** [S2]. OpenRouter standard routes match; fast priority **$3.50/$28/$0.35**, search **$0.01/call**, are separate terms [S6]. Batch unsupported on the model endpoint table; a generic rate-limit table's batch-queue column is not proof of model Batch support.
- **Architecture / knowledge:** Closed weights, parameter count/active count undisclosed; official knowledge cutoff **2025-08-31**. Vendor states training/serving on NVIDIA GB200 NVL72; exact architecture not inferred from that hardware [S1,S2]. Reasoning efforts **low/medium/high/xhigh** [S2].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.0 77.3%**, vendor **xhigh** [S1]. Independent Vals **64.05% ±5.12**, rank **6/67**, **Terminus2**, about **$0.35/test**, **8m26s** [S4,S9]. Vals' dated update explicitly says TB used **high**, while other tests used xhigh; do not assign its global profile setting blindly to this run.
- OSWorld-Verified **64.7%**, vendor vision-based desktop tasks; GDPval **70.9% wins-or-ties**, with custom skills, not GDPval-AA Elo [S1].
- Destructive-action avoidance **0.88**, official internal evaluation of preserving concurrent user edits, not task-completion accuracy [S3, PDF p.7/Table2].
- CVE-Bench **90% pass@1 averaged over 3 rollouts**, on **34/40** tasks, blind zero-day configuration; professional CTF **88% pass@12** over selected rollouts; Cyber Range **80% of scenarios with at least one success in 16 trials** [S3, Figures5–7]. These are distinct datasets and attempt budgets, not one generic success rate. Launch CTF **77.6%** is retained separately [S1].
- Irregular's external near-final-model evaluation, **as reported in the vendor card**, finds **86% network simulation /72% vulnerability research /53% evasion**, up to **1,000 turns**, compaction every **100K** and resumed runs; **no CyScenarioBench challenge solved** [S3, PDF pp.18–19]. Irregular's directly inspected methodology describes scenario-level orchestration but does not publish this exact Codex score there [S11]. External provenance through a vendor report is not an independently reread result sheet.
- Tau2 **86%** appears only as secondary BenchLM attribution [S8]. Exact TB2.1 / Tau3-Banking / Claw-Eval / MCP-Atlas scores not verified in inspected sources.

Reasoning / knowledge:

- Vendor's full system card supplies reasoning evidence through specialist troubleshooting and internal diagnosis rather than a general GPQA/HLE table [S3]. Figure2 labels ProtocolQA Open-Ended **44% pass@1**, Figure4 TroubleshootingBench **32% pass@1**, Figure9 OpenAI-Proof Q&A **6% pass@1** across **20** difficult internal research/engineering bottlenecks [S3]. The last result materially limits broad research-automation claims.
- Source inconsistency: ProtocolQA figure labels Codex44%, while adjacent prose says all models underperform a42% median expert baseline. Figure3 labels Codex50% vs predecessor48%, while prose calls the predecessor highest. These internal prose/chart conflicts are preserved, not silently resolved [S3, PDF pp.9–10].
- AA Intelligence Index **33***, explicitly **estimated**, **independent evaluation forthcoming**; BenchLM reports **32.5** [S5,S8]. This is not treated as a completed independent index run. AA cost/task and aggregate token use are **N/A**, so no fabricated efficiency total is inferred.
- AA measures serving **122.1 tokens/s**, **54.24s TTFT** [S5]; runtime measurement and estimated quality are separate evidence.
- BenchLM attributes GPQA **91.5%**, HLE **42.5%**, CritPt **16.9%**, Omniscience accuracy **52.9%**, hallucination **89.2%**, IFBench **75.4%** to AA [S8]. These detailed submetrics were not directly extracted from the current AA evaluation table and are **secondary**, especially given the current composite's estimated status. Local 91.52/42.49 precision is not inherited as verified primary data.

Coding:

- SWE-Pro **Public 56.8%**, SWE-Lancer **IC Diamond 81.4%**, vendor xhigh [S1]. These are not SWE Verified or all SWE-Lancer tasks.
- Independent Vals SWE-bench **78.00% ±1.85**, rank **33/88**; LiveCodeBench **87.31% ±0.97**, rank **16/143**; IOI **53.83% ±6.31**, rank **22/44** [S4].
- Independent Vals Vibe Code Bench **v1.1 61.77% ±4.71**, rank **51/115** [S4]. Its February24 update quotes an older **41.4%** VibeCodeBench result and notes weaker adaptation to OpenHands than general GPT-5.2; a different dated/versioned result, not a controlled contradiction with today's v1.1 score.
- Internal Monorepo-Bench **56% pass@1**, hidden-test PR replication, official Figure8 [S3, PDF p.20].
- BenchLM claims **SWE Verified85%** and cites the same system-card PDF [S8]. The inspected **31-page PDF does not provide that conventional SWE table**, and the launch instead reports SWE-Pro. Therefore85 is unverified secondary attribution, **excluded from normalization**. Independent78 remains usable.
- Secondary SWE-Rebench **58.2%** links a September2025 task set, not a claim that Codex existed September2025. Direct leaderboard fetch exceeded5MB; exact run not independently inspected [S8]. No verified DeepSWE/Atlas score found.

Long context:

- Verified **400K total /272K input /128K output** [S2,S6]. No verified ≥512K retrieval result or full-input MRCR accuracy found.
- Official card documents compaction at100K in external evaluation and very long multi-compaction workloads [S3]. Millions of cumulative processed tokens in launch demos are not native millions-token context.
- AA-LCR **83.3%** appears secondarily on BenchLM [S8]; not a directly inspected full-window recall rate.

Multimodal:

- Official image input plus OSWorld-Verified **64.7%** supplies model-specific visual grounding/action evidence [S1,S2]. Official file processing supports vision-backed PDFs but extracts non-PDF docs text-only [S10].
- Card Figure3's specialist multimodal troubleshooting labels **50% pass@1** on350 held-out questions, with the prose/chart conflict noted above [S3].
- AA MMMU-Pro **78.5%** is a secondary BenchLM attribution [S8], not a directly confirmed primary result. No native audio/video capability imported from the surrounding ChatGPT product.

### Research trail and comparisons

Fresh queries: [DuckDuckGo official system card](https://html.duckduckgo.com/html/?q=%22GPT-5.3-Codex%22+official+system+card) returned a bot challenge; [Google independent benchmark/review](https://www.google.com/search?q=%22GPT-5.3+Codex%22+independent+benchmark+review&hl=en) an interstitial; [Bing exact-ID pricing/reasoning/context](https://www.bing.com/search?q=%22gpt-5.3-codex%22+pricing+reasoning+context&setlang=en&cc=us) broad GPT links. Direct official launch/docs/deprecation notices, full PDF, AA, Vals model and benchmark-methodology pages, Irregular and actual gateway metadata supplied extensive usable evidence. Search-engine failures are logged, not treated as nonexistence.

Important resolutions: **Responses-only direct API vs translated gateways**, **272K input vs400K total**, **image/PDF input vs local text-only metadata**, **scheduled deprecation vs already shut down**, **vendor xhigh vs Vals high TB2.0**, **estimated AA composite vs measured runtime**, and **unverified85% SWE citation vs independently measured78%**. Vendor launch's “API coming soon” is historical and is superseded for availability by current API documentation/providers. An actual direct PDF reading was necessary to reject secondary attribution and identify internal chart/prose inconsistencies.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong vendor TB/OSWorld and independent TB64.05% with a known harness support capable execution; attempt-budget differences and failures on harder scenario orchestration cap autonomy [S1,S3,S4,S9].
- **Reasoning: 82/100.** Primary professional-work and troubleshooting evidence supports substantial reasoning; hard internal diagnosis6%, specialist variability and AA's uncompleted estimated composite constrain confidence. Secondary GPQA/HLE precision is not used as primary justification [S1,S3,S5].
- **Context window: 84/100.** Verified400K total/272K input belongs to the256K–499K class; compaction helps task continuity but no measured larger native window justifies a higher tier [S2,S6].
- **Multimodal: 80/100.** Verified native image input, PDF page-image processing and OSWorld provide useful visual/document competence; no native audio/video or non-text generation limits breadth [S1,S2,S10].
- **Coding: 87/100.** Independent SWE78%/LCB87.31%, vendor SWE-Pro56.8% and internal Monorepo56% establish strong engineering; harness variance and unverified secondary85% prevent overclaiming [S1,S3,S4].
- **Cost efficiency: 80/100.** $1.75/$14, 90% cached-input discount and Vals TB$0.35/test are reasonable for successful coding; long reasoning latency, expensive output and no measured AA task-cost total constrain value [S2,S5,S9].
- **Overall Score: 83/100.** Half-up mean `(84 + 82 + 84 + 80 + 87) / 5 = 83.4 → 83`; cost excluded. Best fit: tool-rich repository engineering and supervised professional artifact workflows with explicit effort/harness settings.

### Sources

- [S1] https://openai.com/index/introducing-gpt-5-3-codex/ — dated February5 launch, exact xhigh appendix and historical availability.
- [S2] https://developers.openai.com/api/docs/models/gpt-5.3-codex — current exact API, context/input/output split, image modality, prices, knowledge cutoff and features.
- [S3] https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf — all31 pages read, including labelled figures; current HTML https://deploymentsafety.openai.com/gpt-5-3-codex linked by https://openai.com/index/gpt-5-3-codex-system-card/.
- [S4] https://www.vals.ai/models/openai_gpt-5.3-codex — independent results/uncertainty, dated update and important high-vs-xhigh exception.
- [S5] https://artificialanalysis.ai/models/gpt-5-3-codex — explicitly estimated quality index, N/A task costs and measured serving performance.
- [S6] https://openrouter.ai/api/v1/models/openai/gpt-5.3-codex/endpoints — live provider routes, advertised20260224 snapshot, exact272K input and current tier prices; no inference made.
- [S7] https://developers.openai.com/api/docs/deprecations.md — October1 official deprecation with April1,2027 shutdown.
- [S8] https://benchlm.ai/models/gpt-5-3-codex — secondary source discovery, updated2026-10-19; mismatched SWE85% source explicitly excluded.
- [S9] https://www.vals.ai/benchmarks/terminal-bench-2 — exact independent TB2.0 score/cost, Terminus2/pass@1 methodology and archived status.
- [S10] https://developers.openai.com/api/docs/guides/file-inputs.md — direct PDF text/page-image processing and non-PDF image limitations.
- [S11] https://www.irregular.com/publications/cyscenariobench — external scenario-benchmark methodology, not an exact public Codex result sheet.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent public research; at least three distinct engine queries, full official system card/figure inspection, current vendor documentation/deprecation, independent Vals/AA, external benchmark methodology and provider API comparisons. No peer findings read. Editorial normalized scores keep vendor, independent, estimated and secondary evidence distinct.
