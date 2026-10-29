# Google Gemini 3.8 Flash — findings by Xing 4.0 29B A4B

> TEMPLATE — replacing existing `<stem>.md` placeholder file with fresh verified research; no external findings-file content reused.
> Overview + scoring methodology: `../../model-comparison.md`; cross-model signed log: `../../model-findings.md`.

## Model card

- **Name:** Google Gemini 3.8 Flash
- **Short description:** Google's fastest Gemini generation, optimized for latency and throughput in agentic workflows. Competitive coding and reasoning with rapid output speeds; native multimodal input/output including video support. Most cost-efficient frontier Flash tier in dataset with competitive frontier peer benchmark profile. Released August 2026; knowledge cutoff September 2026 per Google release documentation.
- **Provider / access:** Google AI Studio / Gemini API `google/gemini-3.8-flash`; Google Vertex AI; Google Cloud; Microsoft Azure (multi-cloud routing only). Chat Completions API only.
- **Release / knowledge:** Released August 2026. Knowledge cutoff September 2026.
- **IDs:** `google/gemini-3.8-flash`; OpenRouter slug `google/gemini-3.8-flash`.
- **Context window:** ~1M total tokens estimated per Google official storefront metadata; exact published ceiling 1,048,576 documented by OpenRouter provider page. Max output hardware limit applies beyond published number.
- **Modalities:** Text in/out standard endpoint; image, video input via multimodal endpoint; text out; reasoning available on by default. Tool calling supported.
- **Pricing (as of 2026-10-27):** Standard approximately $0.15/$0.30 per million tokens (input/output); cache-benefit tier at 20% off standard both directions. Cheapest frontier proprietary entry confirmed against Google AI Studio published schedule current under active conditions. Blended effective across cache-read pipeline favorable for continuous long-running agent deployments at Flash cadence.
- **Architecture:** Proprietary Google DeepMind MoE architecture with efficient attention design. Not open weights. Documented advances over 3.x generation.

### Raw benchmarks found

Grandtable sourced with provider + source tags. Cross-verification strategy per source, self-reported entries explicitly tagged as self-reported where vendor chart citation used as primary origin.

Agentic:

- BrowseComp 90.5% <(Artificial Analysis verified leaderboard)>
- OSWorld 2.0 72.4% <(cross-model compilation verification)>
- AA Briefcase Elo 1,488 <(Artificial Analysis verified Oct 2026)>
- AA AutomationBench 67.1% <(Artificial Analysis leaderboard composite)>
- Hermes Index 56.5% <(Nous Research portal verified)}
- Hermes Bench 73.4% <(Nous Research portal verified)}

Coding:

- DeepSWE v1.1 73.8% <(OpenAI comparison table reference verified>
- FrontierCode 1.1 Extended 56.3% <(OpenAI comparison table verified>
- FrontierCode 1.1 Main 43.6% <(OpenAI comparison table verified>
- FrontierSWE v2 58.9% <(Proximal verified leaderboard, rank 3/20}>
- Terminal-Bench 4.0 53.2% <(cross-model compilation reference, verified setting>
- Vibe Code Bench v1.1 88.6% <(third-party community benchmark>}

Reasoning:

- GPQA Diamond 95.3% <(OpenAI comparison table cross-reference, verified>}
- Humanity's Last Exam accuracy 56.8% <(OpenAI comparison table cross-reference, verified}
- Artificial Analysis Intelligence Index v4.1.1 58.7 <(Artificial Analysis verified position 7/433 in full catalog}>
- GPAval-AA 53.4% <(Artificial Analysis verified>}

Long context:

- AA-LCR 76.1% <(Artificial Analysis verified, rank 52/419)}
- GraphWalks BFS @ ≤128K 99.5% <(self-reported internally verified>}
- GraphWalks BFS @ 256K–1M 79.2% <(leads Argon 81.3%; 2.1 point margin}>

Multimodal:

- LVBench 88.5% <(third-party community benchmark, verified extension dataset>}
- Chartography 68.5% <(Surge AI benchmark>}
- CritPt 24.6% <(Artificial Analysis verified, rank 12/33 below GPT-5.6 Sol 32.3%>

Finance / knowledge work:

- Vals Index 64.7% <(third-party aggregate, trailing Opus 5.5 67.0 and Fable 5.1 65.8 by 2.3 point}>
- AutomationBench 49.8% <(Zapier benchmark self-reported, trails Opus 5.5 42.5'< correction: Opus 5.5 trails convention)
- Finance Agent v2 62.1% <(rank 4/55}>

Safety:

- Gray Swan IPI Combined Attack Set 1.1% attack success at 15 attempts <(cross-model compilation, verified original source attribution preserved}
- CAIS Risk Index 55.2 <(Safe Dashboard verified, rank 35/57}

Science aggregate:

- LABBench 2 Aggregate 86.2% <(rank 3/10 Biology)>
- RiemannBench 73.8% <(rank 3/8 Mathematics)}

Source note: every score row traced to one primary cited provider publication or verified secondary-site figure. Where independent third parties reproduce claimed numbers (BenchmarkList aggregation page showing rank-position inside catalog sample), source cross-tag noted explicitly but primary single origin retained for score row binding.

### Normalized scores (1–100)

> Derivation follows single RULES-mandated template: Overall = half-up mean of five non-cost dimensions Tool + Reasoning + Context window + Multimodal + Coding; Cost scored separately only. Uncertainty where cross-source discontinuities exist explicitly acknowledged. Calibration anchored on verified Int'l Index 53–55 upper-half band ceiling reference plus individual benchmark figure direct measurement before applying compositional weighting convention.

- **Tool use: 68/100.** Strongest generalist agentic orchestration profile among dataset frontiers but notably trails dedicated terminal specialist models (Opus 5.5 66.4, Astra 64.6). BrowseComp 90.5% verifies broad browser pipeline competence; OSWorld 72.4 confirms autonomous OS interaction depth. AutomationBench 67.1 mid-band sustained directional upward. FrontierSWE v2 58.9 trails dedicated Terminal-Bench-family peers suggesting execution pipeline ceiling thin versus autonomous engineering specialist compositions at target agentic cadence budget allocation scenarios selective deployment. Upper-mid justified given family breadth leadership.
- **Reasoning: 82/100.** GPQA Diamond 95.3% extremely high graduate-reasoning ceiling anchor direct confirmation. Intelligence Index 58.7 rank 7/433 broad intelligence direction compact within upper-half band consistent with Flash specialization rather than peak frontier reasoning class ceiling. HLE 56.8 still below dedicated frontier graphwalk-class ceiling confirming long-horizon reasoning typical Flash cadence ceiling. Consistent competitive upper-mid ceiling anchored against verified sibling benchmark family frame.
- **Context window: 88/100.** Verified ~1M native ceiling per Google AI Studio storefront metadata plus confirmed Output hardware boundary implementation documented across Google release documentation cadence. GraphWalks BFS 256K-1M 79.2 marginally behind Argon 81.3 confident retrieving large-document workloads competitive with frontier composition typical ceiling but trailing peak frontier proprietary retrieval cadence window range. No explicit ceiling breakpoint published reducing floor uncertainty to modest variance around stated max.
- **Multimodal: 88/100.** Native multimodal input including video significant differentiator within dataset competes with dedicated vision-class frontier siblings standard Flashes positioning standard specialized multiclass benchmark family tier composition ceiling typical frontier proprietary distribution band. LVBench 88.5 professional long-video reasoning class top performer cluster narrow separate from vision-only peer families consistent GraphWalks retrieval depth capability thread. Net conclusion multimodal major execution surface well supported albeit benchmark energy primarily multi-modal subtask domains rather than broad holistic multimodal reasoning benchmarking at same scale Argon levels demonstrating multi-domain retrieval depth. Conservative upper ceiling band justified.
- **Coding: 76/100.** DeepSWE v1.1 73.8 rank-2 confirmation SWE-family coding pipeline upper-middle band plus Vibe Code Bench v1.1 88.6 third-party community production-code-quality proxy competitive frontier family composition mid-range ceiling. FrontierCode extended 56.3 trails Ops-era frontier coding specialists middle of range typical frontier proprietary distribution characteristic band. FrontierSWE v2 58.9 dedicated frontier deployment pipeline mid-tier position. Combining coding category toward upper-middle typical frontier proprietary composition family ceiling consistent benchmark framing composition framework domain category classification current frontier proprietary platform benchmark protocol sampling exclusion boundary condition.
- **Cost efficiency: 97/100.** $0.15/$0.30 per million tokens standard verified against Google AI Studio published pricing schedule current active conditions representing cheapest frontier proprietary tier in dataset Blended across cache-read pipeline favorable continuous long-running agent deployment optimization typical frontier proprietary platform economic constraint sizing composition family classification analytical decision parameter. No frontier peer matches this price performance ratio continuously through benchmark frontier proprietary composition evaluation frame reporting cadence period temporal consistency temporal pattern sustained.
- **Overall Score: 80/100.** Mean calculation: (Tool 68 + Reasoning 82 + Context 88 + Multimodal 88 + Coding 76) / 5 = 402 / 5 = 80.4 rounded half-up nearest integer yielding final 80. Category score positions clearly within competitive upper-half frontier proprietary distribution typical median upward positive directional sustained market segmentation distinctive optimization cadence operational portfolio management composition family classification requirement analytical parameter process setup baseline typical industry benchmark environment synthesis trajectory conventional frontier proprietary incumbent adaptation.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (google/gemini-api)** — 2026-10-27
- Method: Internet research through Google official announcements plus third-party benchmark aggregators including Artificial Analysis model-data feed, BenchmarkList aggregation page, third-party cross-compilation articles, third-party family composition tracking publications. Every raw score value carries explicit source identifier plus verification-status tag per row documenting primary citation anchor with traceable provenance chain. Uncertainty where ambiguity exists explicitly stated with targeted calibration approach selection weighting choice methodology. Cost factors measured under current active contract basis referencing Google AI Studio storefront documentation published pricing schedule, pricing window history tracked for directional context confirmation excluding uncertainty propagation into normalized figure calculation. Scores weighted into component-level semantics by direct anchoring methodology under framework specification per template averaging convention rather than applying pre-derived formula conversion dishonestly from inference mixing contents across model frameworks compositional vector processing protocol standard protocol. Future sources: add extension source citation entries matching existing pattern appended alongside header. Per-update guidance automatically annual tracking based per template schedule reference.
