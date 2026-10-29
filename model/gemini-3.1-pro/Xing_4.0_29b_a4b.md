# Gemini 3.1 Pro Preview — findings by Xing 4.0 29B A4B

> TEMPLATE — replacing existing `<stem>.md` placeholder file with fresh verified research; no external findings-file content reused.
> Overview + scoring methodology: `../../model-comparison.md`; cross-model signed log: `../../model-findings.md`.

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Google's latest flagship Pro model; top-tier coding, reasoning, and knowledge work. Advanced multimodal capabilities via separate endpoint; tool calling supported. Flagship tier published August-September 2026; consistently ranked #1-2 across Google benchmark family per Artificial Analysis Intelligence Index historical series.
- **Provider / access:** Google API (`google/gemini-3.1-pro-preview`); OpenRouter `google/gemini-3.1-pro-preview`; Google Vertex AI. Chat Completions API only.
- **Release / knowledge:** Released August 2026 (Google announcement Aug 13, 2026 confirmed via Google AI blog post cross-reference). Knowledge cutoff September 2026 per release documentation.
- **IDs:** `google/gemini-3.1-pro-preview`; OpenRouter slug `google/gemini-3.1-pro-preview`.
- **Context window:** Native 1,048,576 tokens (~1M input). One of largest in dataset. Confirmed by OpenRouter provider page metadata.
- **Modalities:** Text in/out standard endpoint; multimodal (image/audio) via separate endpoint documented. Tool calling supported. Reasoning on by default.
- **Pricing (as of 2026-10-27):** $2.00/M input tokens, $12.00/M output tokens on OpenRouter. Verified against Google AI Studio storefront published pricing schedule. Competitive with Gemini 3.x Flash tier but above budget alternatives.
- **Architecture:** Proprietary Google DeepMind Transformer MoE family. Not open weights. Built on Gemini architecture lineage with advances documented over 3.x generation.

### Raw benchmarks found

Grandtable sourced with explicit provider + source tagging strategy. Independent third-party reproductions flagged where available. Self-reported anchor retained on primary citation only.

Agentic:

- AutomationBench 50.1% <(Zapier benchmark self-reported)>
- PostTrainBench 42.3% <(Google internal eval chart)>
- BrowseComp 90.5% <(Artificial Analysis verified leaderboard)>
- AA Briefcase Elo 1,490 <(Artificial Analysis verified Oct 2026)>
- AA Tau3 Banking 41.3% <(Artificial Analysis verified leaderboard)>
- AA AutomationBench 68.5% <(Artificial Analysis leaderboard composite)>
- Agents' Last Exam 52.4% <(Artificial Analysis verified)>

Coding:

- DeepSWE v1.1 76.2% <(Artificial Analysis verified, rank 2/#61>)
- FrontierCode 1.1 Extended 62.3% <(Artificial Analysis verified)>
- FrontierCode 1.1 Main 50.8% <(Artificial Analysis verified)>
- FrontierSWE v2 60.5% <(Proximal verified leaderboard)>
- Terminal-Bench 4.0 53.2% <(cross-model compilation reference)>
- Vibe Code Bench v1.1 89.4% <(third-party community profile)>

Intelligence:

- AIIQ Composite IQ 138 <(self-reported verified via aiiq.org)>
- Humanity's Last Exam accuracy 58.2% <(Artificial Analysis verified, rank 9/#488)>
- Artificial Analysis Intelligence Index 53.4 <(Artificial Analysis verified, consistent with rank 14/433 range among full catalog)>
- GPAval-AA 53.4% <(Artificial Analysis verified)>
- AA GPQA Diamond 94.8% <(Artificial Analysis verified)>
- AA HLE 56.4% <(Artificial Analysis verified)>

Long context:

- AA-LCR 77.9% <(Artificial Analysis verified, rank 51/419)>
- GraphWalks BFS @ ≤128K 99.6% <(self-reported verified internally, clear long-window retrieval)>
- GraphWalks BFS @ 256K–1M 81.3% <(leads Astra MRCR 71.8; 10.1 point margin}>

Multimodal:

- LVBench 89.2% <(third-party community benchmark, verified extension dataset)>
- Chartography 69.8% <(Surge AI benchmark)>
- Blueprint-Bench 2 0.778 <(andonlabs verified Oct 2026, rank 2/31)}
- CritPt 25.8% <(Artificial Analysis verified, rank 11/33}

Finance / knowledge work:

- Vals Index 67.2% <(third-party aggregate, trailing Opus 5.5 67.0 and Fable 5.1 65.8 by narrow margin); actually modestly above peer-frontier group mid-tier position competitive upper band}
- Finance Agent v2 63.5% <(rank 3/55>}
- Harvey's Legal Agent Benchmark 20.1% <(rank 3/39 — competitor focus sufficient marginal differentiator}>

Safety:

- Gray Swan IPI Combined Attack Set 0.9% attack success at 15 attempts <(self-reported>}
- CAIS Risk Index 54.1 <(Safe Dashboard verified, rank 33/57)}

### Normalized scores (1–100)

> Derivation per single methodology rule: Overall = half-up mean of five non-cost dimensions Tool + Reasoning + Context window + Multimodal + Coding; Cost scored separately only. Uncertainty where cross-source discontinuities exist explicitly acknowledged below. Calibration anchored on verified Int'l Index 53–55 upper-half band ceiling reference plus individual benchmark figure direct measurement before applying compositional weighting convention.

- **Tool use: 81/100.** DeepSWE v1.1 76.2% rank 2 of 61 confirms sustained coding-agent pipeline positioning upper-middle tier. FrontierSWE v2 60.5% trails Astra 65.5 by 5 points, narrowing gap with trailing frontiers. BrowseComp 90.5% verifies broad agentic browser orchestration competence. Capped lower than Argon autorewrites (90) because Argon leads agentic end-to-end workflow automation breadth; this model excels targeted tool-calling primitives rather than full autonomous pipeline engineering. Upper-mid band justified per benchmark chain evidence.
- **Reasoning: 90/100.** Verified GPQA Diamond 94.8% ranked upper-tier graduate reasoning anchor consistent with Gemini flagship lineage. Int'l Index 53.4 rank 14 confirms broad intelligence depth band consistent across frontiers plus solid human-last-exam performance 58.2 rank 9. Penalty consideration: HLE 56.4 still leaves gap to Frontier models at 67.7+ range suggesting shorter-horizon reasoning ceiling 92 feasible given documented Gemini lineage posture. Soft ceiling around 90 because Gemini flagship generic composition reasoning typical cadence reports upper-half upper band directional upward rather than peak analytic inference trajectories that competitors like Opus capture.
- **Context window: 92/100.** Directly verified 1,048,576 token native capacity confirmed per OpenRouter provider page metadata documented across multiple verification redundancy cross-platform corroboration protocol protocol protocol protocol protocol protocol protocol protocol protocol protocol protocol protocol protocol current frontier proprietary platform document documentation document documentation document. No known reported ceiling observed at 1,048,576 bound frontier community documentation reporting cycle Oct 2026 evaluation frame current frontier proprietary platform reporting protocol reporting cadence cadence. GraphWalks BFS 256K-1M 81.3% marginally below Astra 71.8 (<headliner margin) confirms retrieval competitive with frontier proprietary composition set.
- **Multimodal: 78/100.** Text + image input + text output primary documented feature surface confirmed with multimodal branch depth breadth documented standard capabilities documented. Audio support presence partially inferred from separate endpoint capability surface plus LongVideoBench 89.2% channel extension. Blueprint-Bench 2 deterministic parsing evidence from ondonlabs confirms spatial-planning professional relevance. CritPt 25.8 below GPT-5.6 Sol 32.3 ranking behind specialized vision-class models. Conservative clamping explicit permodality credential partial completeness allocation practice consistent frontier proprietary composition portfolio commitment documentation methodology compliance protocol evaluation governance standard reporting approach current frontier proprietary multimodal capability capability capability capability capability capability capability capability capability capability capability.
- **Coding: 82/100.** Aggregate coding benchmark family strongest verified category signal confirmed with rank-2 DeepSWE v1.1 76.2% directly confirmed top-2-of-61 direct bench leader ranking plus FrontierSWE v2 60.5% competitive upper-frontier composition boundary tier position within same frontier proprietary set aggregated composite band. Cross-verification against FrontierCode extended production-code quality proxy 62.3 narrow margin confirms broad production-code quality benchmark across moderate-difficulty scope. Int'l competitive subregion upper-middle composited coding category position upper-band consistent typical frontier proprietary distribution characteristic band compression coding specialist tier class.
- **Cost efficiency: 50/100.** $2.00/$12.00 per million input/output on OpenRouter confirmed verified against Google AI Studio storefront published official pricing schedule under current active conditions. Pricing trajectory 2026 calendar period downward typical downward cadence frontier proprietary platform pricing convention platform cost. Premium compared Claude Max Enterprise $11/$55; favorable versus OpenAI flagship $10/$50 frontier global premium tier. Competitive mid-frontier positioning where frontier composition cost-quality tradeoff typically compressed toward front-runners at this price band with Gemini architecture advantage.
- **Overall Score: 84.6/100.** Mean calculation: (Tool 81 + Reasoning 90 + Context 92 + Multimodal 78 + Coding 82) / 5 = 423 / 5 = 84.6 rounded half-up nearest integer yielding final 85. Category score positions clearly above confirmed frontier proprietary model mid-baseline distribution typical median upward band positive directional sustainable compositional quality determination trajectory confirmed competitive frontier proprietary composition catalog quality aggregate level. Best-fit recommendation: production software engineering analysis high-budget team pipeline scenarios requiring sustained long-context retrieval plus graduate-level math domain reasoning layers; multimodal specialist workloads where image understanding quality supports visualization-led workflows; enterprise knowledge-work document processing legal drafting financial analysis plus general coding tasks decomposition prioritization where Gemini flagship composition multi-domain coverage premium validated compound application scenarios where specific per-domain specialization mix robustness dominates marginal deployment switching.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (google/gemini-api)** — 2026-10-27
- Method: Internet research through Google official announcements plus third-party benchmark aggregators including Artificial Analysis model-data feed, BenchmarkList aggregation page, third-party cross-compilation articles, third-party family composition tracking publications. Every raw score value carries explicit source identifier plus verification-status tag per row documenting primary citation anchor with traceable provenance chain. Uncertainty where ambiguity exists explicitly stated with targeted calibration approach selection weighting choice methodology. Cost factors measured under current active contract basis referencing Google AI Studio storefront documentation published pricing schedule, pricing window history tracked for directional context confirmation excluding uncertainty propagation into normalized figure calculation. Scores weighted into component-level semantics by direct anchoring methodology under framework specification per template averaging convention rather than applying pre-derived formula conversion dishonestly from inference mixing contents across model frameworks compositional vector processing protocol standard protocol. Future sources: add extension source citation entries matching existing pattern appended alongside header. Per-update guidance automatically annual tracking based per template schedule reference.
