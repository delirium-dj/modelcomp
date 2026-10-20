# Seed 2.0 Pro — findings by GPT 6.1 Sol

- Source: ByteDance Seed / `Doubao-Seed-2.0-pro`; DeepInfra `ByteDance/Seed-2.0-pro`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** Closed general-purpose reasoning/vision model optimized for knowledge-heavy enterprise workflows, research and agents. Pro is distinct from Seed2.0 Code, Lite, Mini, Seed-OSS and Seed2.1 [S1–S3].
- **Provider / access:** Official Volcano Engine/BytePlus Ark deployment; the original card explicitly names `Doubao-Seed-2.0-pro` [S1]. DeepInfra documents OpenAI-compatible `https://api.deepinfra.com/v1/openai/chat/completions`, `model: ByteDance/Seed-2.0-pro`, JSON and function calling [S4]. Public metadata confirms a partner-served proprietary model, not downloadable weights [S5].
- **Release / knowledge:** Official launch **2026-02-14** [S2]. Current official evaluation table labels Pro **0215**, while the international playground selects **`seed-2-0-pro-260328`** [S3]. These deployment/checkpoint dates are not an independently verified equivalence of every served revision. No reliable pretraining cutoff found.
- **IDs:** `Doubao-Seed-2.0-pro`, regional `doubao-seed-2-0-pro-260215`, international `seed-2-0-pro-260328`, DeepInfra `ByteDance/Seed-2.0-pro` [S1,S3–S6]. No free Zen ID verified. A broad Hugging Face search returned unrelated proxy experiments; these are not evidence of an official open Seed2.0 release.
- **Context window:** DeepInfra's actual provider page and metadata say **256,000** context [S4,S5]. Models.dev lists **128,000** output for this route, while DeepInfra's actual `max_output_tokens` is **null** and its generic API description uses **min(remaining context, 65,536)** when explicitly setting the output parameter to null [S5,S6]. Thus neither local “65K out” nor registry “128K out” is a freshly verified universal hard limit. Other routes advertise 64K–256K output and sometimes 262,144 context. Keep these provider-specific; do not add output to context.
- **Modalities:** Model-family Pro text/image/video understanding and text output are supported by primary video/document benchmarks and provider description [S1,S3,S4]. Registry's DeepInfra row lists only text/image, narrower than the provider's video description. The shared Chat Completions schema accepts audio/video/file types generically; that alone does not prove every model supports them [S7]. The official **late-April audio expansion is for Lite**, not automatically Pro [S3]. No native audio/image/video generation assigned to Pro.
- **Pricing (as of 2026-10-20):** DeepInfra's model-specific metadata states **≤128K: $0.50 input / $3 output / $0.10 cached per 1M**; longer inputs **$1/$6/$0.20** [S5]. Its visible model header displays only the lower tier [S4]. Original ByteDance card quotes representative interval pricing **$0.47/$2.37**, with **¥3.41/¥17.04** and a tier-pricing footnote [S1, p.3]; this is a dated regional representation, not a contradictory flat global tariff. No verified current $0 route.
- **Architecture / licence:** Proprietary hosted model; parameter count, exact architecture and open-weight licence not established in inspected primary materials. Family research projects or third-party Hugging Face search hits do not establish Pro weights.

### Raw benchmarks found

All numeric capability results below are **vendor-reported**, unless specifically marked otherwise. The original **78-page model card** and current official webpage provide substantial evidence, but no directly verified independent exact-Pro evaluation profile was located in this run.

Agent / tool use:

- Terminal-Bench **2.0: 55.8%**, official Table 11, Terminus2/internal agent adaptation [S1, pp.6–7,16]. **Three tasks omitted:** `extract-moves-from-video`, `mailman`, `install-windows-3.11`; repaired/mirrored environments and quality filtering also disclosed. This is not a full unchanged benchmark or TB2.1.
- Tau2 retail **90.4%**, telecom **94.2%**; MCP-Mark **54.7%**, BFCL-v4 **73.4%**, VitaBench **47.0%** [S1, Table 11]. MCP-Mark is not MCP-Atlas, and Tau2 domains are not Tau3-Banking.
- BrowseComp **77.3%**, BrowseComp-zh **82.4%**, WideSearch **74.7%**, DeepSearchQA **77.4%**, ResearchRubrics **50.7%** [S1]. These use search/agent tools and are not no-tool knowledge accuracy.
- HLE-text **54.2% with search agent**, HLE-Verified **73.6% on the vendor-curated verified subset**, versus **32.4% no-tool text-only HLE** [S1]. They are different evaluation conditions/subsets, not three estimates of the same score.
- Current official table adds SkillsBench **42.3%**, GDPval **54.4%**, ToB-Agent **52.6%** for Pro0215 [S3]. Original GDPVal-Diamond **21.3%** is a curated different evaluation [S1, Table 13]; neither is GDPval-AA Elo.
- TB2.1 / Claw-Eval / MCP-Atlas: no verified exact-Pro public results found in inspected evidence.

Reasoning / knowledge:

- GPQA Diamond **88.9%**, MMLU-Pro **87.0%**, SuperGPQA **68.7%**, no-tool text HLE **32.4%** [S1, Table 3].
- AIME **2025 98.3%**, AIME **2026 94.2%**, BeyondAIME **86.5%**, IMOAnswerBench no tools **89.3%** [S1]. AIME years retained distinctly.
- ARC-AGI-1 **85.4%**, ARC-AGI-2 **37.5%**, vendor text/general-reasoning table. Image-assisted ARC-AGI-1/2 **88.8/43.3%**, with text grids plus rendered images, are separate [S1, Tables 3,8]. No direct ARC Prize verification claimed.
- IMO2025 **35/42** and CMO2025 **114/126** use an iterative solve–verify–refine pipeline; Putnam-200 **35.5% pass@8** uses Lean/Python and multiple attempts [S1, pp.8,11,73]. These are not unaided one-shot scores.
- SimpleQA Verified **36.0%**, FactScore **71.2%**; the card's own scientific-analysis case explicitly admits hallucinated PDB/literature details [S1, pp.9,42]. Strong competition math is not proof of dependable specialist recall.

Coding:

- SWE-bench Verified **76.5%**, SWE-Pro **46.9%**, SWE Multilingual **71.7%**, Multi-SWE-Bench **45.2%**, SWE-Lancer **49.4%**, Aider Polyglot **80.0%** [S1, Table 11].
- LiveCodeBench **v6 87.8%**, Codeforces **3020 Elo** on June–December2025 problems, no external tools [S1, Table 3].
- SWE-Evo **8.5%**, NL2Repo-Bench aggregate **27.9**, actual **NL2Repo pass@1 3.0%** [S1, Tables 11,13]. Strong isolated coding does not establish reliable whole-repository construction.
- ICPC across five late-2025 contests: **73.02% pass@8**, not pass@1 [S1, p.26].
- SciCode **48.5% in Table 11**, **52.1% in Table 13**; FrontierSci-research **25.0% in Table 3**, **23.3% in Table 13** [S1]. Exact reasons not established; preserve table-specific observations instead of choosing maxima. BABE also varies across tables/current page.
- DeepSWE / Atlas: no verified exact-Pro measurement found.

Long context:

- Provider capacity **256,000**; original vendor MRCR v2 eight-needle **54.0%**, LongBench v2 **63.8% at 128K**, DeR2 **58.2%**, Frames **84.5%** [S1,S5]. MRCR table does not establish perfect performance at the maximum serving length.
- Graphwalks BFS **68.9%**, Parents **97.6%**, both **<128K**; the card discloses its own tokenization differs from the original benchmark [S1, pp.4,9]. Do not promote 97.6% on that subset to ≥98% recall at 512K+.
- CL-Bench **20.8 in Table 3**, **21.5 in Table 13**; current official table returns **20.8** [S1,S3]. No unqualified single score or context-learning supremacy inferred.

Multimodal:

- MMMU **85.4%**, MMMU-Pro **78.2%** (aggregates standard ten-choice and vision subsets), MathVision **88.8%**, BabyVision **60.6%** [S1, Table 8].
- OmniDocBench1.5 **0.099 normalized edit distance, lower is better**; CharXiv DQ/RQ **93.5/80.5%**, MMLongBench-Doc **61.4%** [S1]. The 0.099 value is not 9.9% accuracy.
- VideoMMMU **86.9%**, VideoReasonBench **77.8%**, VideoMME with subtitles **89.5%**, LongVideoBench **80.3%**, LVBench **76.4%** [S1, Table 9].
- VideoCut improves LVBench **76.4→80.0%** and ZeroVideo **14.5→27.9%**; these tool-assisted gains are labelled [S1, Table 10]. Original CrossVid **60.3%** / VideoEval-Pro **48.0%** differ from current page **61.0/47.3%** [S1,S3]; not assumed independently replicated improvements/regressions.

### Research trail and evidence comparison

At least three fresh searches: [DuckDuckGo official/card](https://html.duckduckgo.com/html/?q=%22Seed+2.0+Pro%22+official+benchmark+model+card) returned a bot challenge; [Google independent review](https://www.google.com/search?q=%22Seed+2.0+Pro%22+independent+benchmark+review&hl=en) an interstitial; [Bing exact-ID pricing/context](https://www.bing.com/search?q=%22seed-2.0-pro%22+pricing+context+evaluation&setlang=en&cc=us) no exact results. Additional Yahoo review query returned HTTP500; Hugging Face's broad search matched unrelated proxy experiments. These failures are access/search limitations, not evidence of nonexistence.

Directly followed the official model page to its original PDF and launch; compared against DeepInfra's actual model API/schema and models.dev's per-provider registry. Exact-Pro AA/Vals/BenchLM URL candidates returned404. Direct AA leaderboard slug lookup and Vals/BenchLM indexes did not locate an exact-Pro measured profile; Seed2.0 Lite/Mini, Seed2.1 and other Seed models are not substitutes. Independent serving records substantiate identity/pricing/capacity, **not benchmark replication**. Confidence is therefore lower than for a model with directly inspected independent runs.

The primary report itself discloses benchmark adaptations and limited long-horizon code performance. Its narrative “leading HealthBench” claim is not supported by Table3, where GPT-5.2 is **63.3** and Seed Pro **57.7** [S1]. Table-specific SciCode/FrontierSci/CL differences are retained, and current Lite audio rows are not assigned to Pro. Serving metadata separates default-like output descriptions from hard caps, and the price header's missing >128K tier is resolved by the provider's explicit full pricing string.

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong vendor search, Tau2 and MCP-Mark evidence supports useful orchestration; modified TB2.0 55.8%, task exclusions, long-horizon failures and absent directly verified independent runs constrain confidence [S1,S3].
- **Reasoning: 84/100.** Primary GPQA88.9/HLE32.4/AIME98.3 and careful distinction of assisted proofs support strong reasoning; factuality weaknesses, inconsistent table snapshots and no exact independent replication cap frontier claims [S1].
- **Context window: 80/100.** Actual 256,000-token service fits the 256K-class capacity band; moderate MRCR/LongBench and unresolved provider output limits cap the score [S1,S5,S6].
- **Multimodal: 88/100.** Primary image/document/video results and VideoCut support broad visual input competence; no verified Pro audio/non-text output and limited independent verification cap breadth [S1,S3].
- **Coding: 80/100.** SWE76.5/Pro46.9/LCBv6 87.8 show capable code and patches, while SWE-Evo8.5 and NL2Repo pass@1 3.0 materially constrain repository autonomy [S1].
- **Cost efficiency: 92/100.** $0.50/$3 with $0.10 cache offers economical paid serving, but >128K doubles prices, success-adjusted throughput is unverified and no current free service established [S4,S5].
- **Overall Score: 82/100.** Half-up mean `(77 + 84 + 80 + 88 + 80) / 5 = 81.8 → 82`; cost excluded. Best fit: cost-conscious visual/document research and supervised enterprise agents; vendor harness qualification is essential.

### Sources

- [S1] https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf — original official 78-page card, read with tables/methods/appendices; exact table/page references above.
- [S2] https://seed.bytedance.com/en/blog/seed2-0-%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83 — dated February14 launch, family/product identities, vendor qualitative claims.
- [S3] https://seed.bytedance.com/en/seed2 — current official Pro0215/Lite0428 columns, international serving link, model card and Lite-only audio qualification.
- [S4] https://deepinfra.com/ByteDance/Seed-2.0-pro and https://deepinfra.com/ByteDance/Seed-2.0-pro/api — actual serving ID, 256,000 context, price header and OpenAI-compatible example.
- [S5] https://api.deepinfra.com/models/ByteDance/Seed-2.0-pro — live model-specific metadata, full ≤128K/long-context pricing, null output-cap field and generic output-default explanation; no authenticated inference performed.
- [S6] https://models.dev/api.json — independently maintained provider registry; exact DeepInfra ID, canonical `bytedance-seed/seed-2.0-pro`, alternate output limits and regional tiers. Registry claims not treated as primary model capabilities.
- [S7] https://api.deepinfra.com/models/ByteDance/Seed-2.0-pro/schema/openai-chat-completions — shared transport schema; generic validation maxima/modalities do not prove model-specific limits/features.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent research, three or more distinct engine searches, full original official PDF and current launch/model documentation, exact provider API/schema inspection, registry comparison and attempted independent evaluator discovery. No peer findings read. Numeric quality evidence remains vendor-reported; normalized scores are editorial estimates with that limitation.
