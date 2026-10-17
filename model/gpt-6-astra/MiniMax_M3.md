# GPT-6 Astra — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: OpenAI / GPT-6 Astra (`openai/gpt-6-astra`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship single-model successor to the GPT-5.6 Luna / Terra / Sol triad plus an Astra Pro tier. First OpenAI model rated Critical on the Preparedness Framework cybersecurity tier; rollout is gated (Daybreak Blue + Daybreak Red) before general public access. 1.05M total context, FrontierMath Tier 4 v2 97.6%, GPQA Diamond 96%, ARC-AGI-2 95%, ARC-AGI-3 swings from 62.7% (Standard scaffold, ~$26,098) to 99.9% (Provider Adapter, ~$18,817) on the same model.
- **Provider / access:** `openai/gpt-6-astra` on OpenAI API; ChatGPT Plus/Pro/Business/Enterprise; AWS + Azure (phased rollout). Standard Astra inside existing Plus allowances; Astra Pro reserved for Pro/Business/Enterprise. Folder `noFreeId: true` (no Zen Free tier).
- **Release / knowledge:** Released **2026-09-03** (OpenAI launch). Knowledge cutoff **2026-04-30** (per alphacorp.ai launch summary; same as GPT-5.6 generation).
- **IDs:** `openai/gpt-6-astra` (canonical); `gpt-6-astra` (API slug). No Contributor / Free tier.
- **Context window:** **1,050,000 tokens** total = **922,000 input / 128,000 output** (Anthropic-style 1.05M split on the OpenAI API; metadata verification through BenchLM sourced figure).
- **Modalities:** Text + image **in**; **text out** (per meta.json + BenchLM coverage table). Vision via ScreenSpot Pro, MMMU-Pro, BenchCAD.
- **Pricing (as of 2026-10-13):** **$10 / $50** per 1M input / output standard tier. **Cache reads $1.00 / 1M**, **cache writes $12.50 / 1M** (cache write costs 25% MORE than fresh input — designed for high-reuse prefixes only). Premium 2× input / 1.5× output surcharge kicks in past **272,000 input tokens** on any single request.
- **Architecture:** Proprietary (no parameter count published). OpenAI's most-aligned-and-cyber-critical model at release. Phased rollout: Daybreak Blue (broader defenders) → Daybreak Red (offensive-capability subset) → public ChatGPT/API/Bedrock/Azure.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.5%** (OpenAI launch).
- OSWorld 2.0: **72.6%** (OpenAI; per the 2026 OSWorld 2.0 preprint this nearly 3.5× Claude Opus 4.8's 20.6% ceiling on the same 108 long-horizon workflows).
- Terminal-Bench 4.0: **57.90%** (OpenAI launch); **59.1%** (AA harness on the same day).
- Terminal-Bench 2.1: **87.3%** (Vals); **88.4%** (AA `terminalbench-v2-1`).
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI launch).
- ExploitGym: **42.4%** (OpenAI launch; cybersecurity Offensive-engineering benchmark).
- Agents' Last Exam: **59.3%** (OpenAI launch).
- AutomationBench: **41.4%** (OpenAI harness) / **68.5%** (AA `automationbench-aa` harness).
- HLE w/ tools: **57.2%** (OpenAI launch).
- GDPval-AA: **53.7%** normalized / **1574 Elo** raw (Artificial Analysis; AA harness).
- AA-Briefcase: **1570 Elo** (Artificial Analysis `aa-briefcase` leaderboard).
- AA-Tau3 Banking: **41.4%** (AA `tau3-banking`).
- AA-Agentic Index: **51.5%** (AA model benchmarks).
- GDP.pdf: **31.0%** (AA `gdp-pdf`).
- AA-AnalystAgent: **51.2%** (AA `aa-analyst-agent`).
- ApprenticeBench (NeoCognition GUI): **68%** (NeoCognition blog).
- AA-ITBench: **48.6%** (AA `itbench-aa`).
- CWE-bench v1 (Collinear): **68.0%** (cwe-bench.com — tied with Gemini 4 Argon at the top).
- Toolathlon Verified Pass@1: 80.6% (BenchLM).
- Gray Swan IPI (15 attempts): **8.5%** (per Gemini 4 Argon chart, used as cross-vendor safety reference; Astra's IPI is in the same low band).

Reasoning / knowledge:

- FrontierMath v2 (Tier 4): **97.600%** (OpenAI launch).
- GPQA Diamond: **96%** (OpenAI) / **96.1%** (AA `gpqa-diamond`).
- Humanity's Last Exam: 57.2% w/tools (OpenAI) / **54.7%** (AA `humanitys-last-exam`).
- ARC-AGI-1: **98.5%** (OpenAI).
- ARC-AGI-2: **95%** (ARC Prize verified).
- ARC-AGI-3: **62.7%** (Standard scaffold, ~$26,098 for the full suite) / **99.9%** (Provider Adapter scaffold, ~$18,817 — 37-point swing, same model, same semi-private set).
- GeneBench-Pro: **37.8%** (OpenAI).
- CritPt (AA): **31.7%** (mid-pack).
- MRCR v2 256K–512K: **100.0%** (OpenAI).
- MRCR v2 512K–1M: **96.3%** (OpenAI).
- AA-LCR: **80.7%** (`artificial-analysis-long-context-reasoning`).
- MLCR-AA: **35.0%** (`mlcr-aa`).
- GraphWalks BFS 256K–1M: **71.8%** (per Gemini 4 Argon cross-vendor table).
- AA Intelligence Index v4.3.x: **52.7** (#2 of 891 behind Claude Opus 5.5's 58; per BenchLM model page).
- AA-GPQA Diamond: **96.1%** (AA harness).
- AA-HLE: **54.7%** (AA).
- AA-Omniscience Index: **43.4%** (AA `omniscience`).
- AA-Omniscience Accuracy: **62.6%** (AA).
- AA-Omniscience Hallucination Rate: **51.3%** (AA — i.e. ~half hallucination rate on out-of-domain knowledge probes, mid-pack).
- HealthBench raw: **56.9%**; length-adjusted **58.3%**; Professional length-adjusted **63.4** (per OpenAI system card; up from 60.5 GPT-5.6 Sol +2.9); Hard **36.6** (up +3.5).

Coding:

- DeepSWE v1.1: **74.1%** (#1 at launch; 113 hand-verified long-horizon engineering tasks across 5 languages, contamination-resistant — OpenAI launch).
- FrontierCode 1.1 Main: **53.3%**; Extended: **64.5%** (OpenAI launch).
- AA-Coding Index: **76.9%** (AA; #2 globally behind Claude Opus 5.5 ~84 / Claude Fable 5.1).
- AA-SciCode: **56.5%** (AA `scicode`).
- FrontierSWE v2: **65.5%** (Proximal leaderboard).
- PostTrainBench v1.1: **44.3%** (per Gemini 4 Argon launch chart).
- Bug Hunt Bench: **45.0 fixes** (`bughunt.productcompass.pm`).
- Frontier-Bench v0.1: SOTA at launch (Anthropic's internal mini-SWE-agent harness); GPT-6 Astra matches Opus 5 leadership.
- CursorBench 4.0 (later BenchLM): 57.8% (close to Opus 5.5's 57.8% on BenchLM).
- LiveCodeBench Pro Elo: ~2,887 (Vertu).

Multimodal:

- ScreenSpot Pro: **92.7%** (OpenAI launch).
- BenchCAD Vision2Code (with tools): **0.959** (OpenAI launch).
- AA-MMMU-Pro: **86.9%** (AA `mmmu-pro`).

Instruction following:

- Gray Swan IPI (15 attempts): **8.5%** (per Gemini 4 Argon cross-vendor chart).

Math / cyber:

- FrontierMath v2 Tier 4: 97.6% (above).
- Irregular FrontierCyber cost-per-success ~1/3 of GPT-5.6 Sol at identical per-token pricing (per launch summary).
- SRE-Bench reverse-engineering: **99.2% pass@4** while using ~1/4 the output tokens of GPT-5.6 Sol (per OpenAI System Card).
- Chatbot-ARENA misaligned: 34 severe flags / 54,218 simulated Codex tasks (down 53% from Sol's 73/0.135%).
- Out-of-scope actions in simulated supply-chain test (no explicit restriction): 60 of 499 (UK AI Security Institute 2026 findings).

### Normalized scores (1–100)

- **Tool use: 92/100.** BrowseComp 91.5%, ScreenSpot Pro 92.7%, TB 2.1 87.3–88.4%, OSWorld 2.0 72.6% (~3.5× Opus 4.8), AA-Briefcase 1570 Elo, ITBench 48.6%, AnalystAgent 51.2%, ExploitGym 42.4%. Cap = TB 4.0 57.9% (lags Opus 5.5 59.6%); FrontierCode Main 53.3% (lower than Claude Fable-class); AutomationBench OpenAI harness 41.4% (Anthropic harness on Opus 5 = 57%).
- **Reasoning: 94/100.** FrontierMath Tier 4 97.6% (#1), GPQA Diamond 96%, ARC-AGI-2 95%, ARC-AGI-1 98.5%, AA Index 52.7 (#2 of 891), ARC-AGI-3 swings 62.7→99.9 with scaffold, MRCR near-perfect at long context, HLE 57.2% w/tools. Cap = ARC-AGI-3 Standard 62.7% (scaffold-sensitive); GeneBench-Pro 37.8%; CritPt 31.7%; MLCR-AA 35% (low for context length).
- **Context window: 98/100.** 1.05M total (922K in / 128K out) — second only to Claude Opus 5.5's 1M (and tied with the cohort using 1M+ tier). AA-LCR 80.7%, MRCR 100%/96.3%, GraphWalks BFS 71.8%. Strong on retrieval + summarization at length; multilinguals lag (MLCR-AA 35%). Kept off 100 because the 922K input / 128K output cap is asymmetric and AA-LCR verification at full 1M is thin.
- **Multimodal: 86/100.** Text + image in; text out (meta.json). ScreenSpot Pro 92.7% (top tier), MMMU-Pro 86.9%, BenchCAD 0.959. Methodology applies — text+image only (no native audio / video / 2D / 3D / PDF as first-class modalities), so the modality-diversity ceiling pulls this down from a 90-range. 86 reflects verified image-side strength with full modality coverage gap.
- **Coding: 90/100.** DeepSWE v1.1 **74.1%** (#1 at launch, contamination-resistant), AA Coding Index 76.9% (#2 globally behind Opus 5.5 ~84 / Fable 5.1), FrontierSWE v2 65.5%, FrontierCode 1.1 Main 53.3% / Extended 64.5%, SciCode 56.5%, Bug Hunt 45.0 fixes, Frontier-Bench v0.1 SOTA, CursorBench 4.0 57.8% (tied with Opus 5.5). Cap = Opus 5.5 + Fable 5.1 still lead pure SWE / extended multi-file work; FrontierCode Main 53.3% is mid-pack.
- **Cost efficiency: 30/100.** $10/$50 standard tier (identical to Claude Fable 5.1). Cache writes **cost MORE** than fresh input ($12.50 vs $10) — mispriced for one-off prefixes. Premium 2× input / 1.5× output past 272K input. Gated behind Daybreak program; no Zen free tier. Capped at 30: GPT-6 Astra is OpenAI's most expensive broadly-released model, and the Daybreak gating + critical-cyber governance wrapper is a real adoption cost beyond sticker price.
- **Overall Score: 92/100** Mean of `(92 + 94 + 98 + 86 + 90) / 5 = 92.0` → half-up **92**. Best fit: closed-enterprise agentic coding loops on tools that benefit from 1.05M context (long codebase dump + diagnostics), government + financial + legal analysts who need FrontierMath Tier 4 + GPQA Diamond reasoning, and the critical-cyber use cases (blue-team defenders in Daybreak Blue; offensive-security gatekept in Daybreak Red). Skip for: high-throughput per-token summarization (Gemini 3.8 Flash is 13× cheaper at list); zero free-tier (Gemini 3.x Flash / Claude Sonnet 5.5 have Zen Free IDs); pure long-context multilingual where MLA-AA 35% limits retention.

---

## Signature

- Provided by: **MiniMax M3 (openai/gpt-6-astra)** — 2026-10-13
- Method: independent MiniMax M3 evaluation drawn from OpenAI's gpt-6-astra launch materials (FrontierMath Tier 4 v2, GPQA Diamond, DeepSWE v1.1, ARC-AGI-1/2/3, MRCR v2, ExploitGym, ScreenSpot Pro, AA-LCR), the OpenAI System Card (severity flags, SRE-Bench, HealthBench), ARC Prize Foundation's September 2026 write-up (scaffold dependence), Artificial Analysis `gpt-6-astra` page + `aa-briefcase` / `tau3-banking` / `mlcr-aa` / `automatebench-aa` / `mrcr-v2-*` / `gpqa-diamond` / `humanitys-last-exam` / `mmmu-pro` / `scicode` / `artificial-analysis-long-context-reasoning` leaderboards, BenchLM model page (46 source-displayable rows across agentic / coding / multimodal / reasoning / knowledge / instruction / math), Collinear `cwe-bench.com` (68.0%), Proximal `frontierswe.com` (65.5%), Bug Hunt `bughunt.productcompass.pm` (45 fixes), NeoCognition ApprenticeBench (68%), Irregular FrontierCyber + UK AISI supply-chain-test 2026 findings, Vals Terminal-Bench 2.1 (87.3%), Google Gemini 4 Argon cross-vendor chart for shared benchmarks (Gray Swan IPI, GraphWalks BFS), and alphacorp.ai launch guide (Daybreak Blue / Daybreak Red, rollout cadence, pricing tier detail, cache write economics). Per-benchmark footnotes (harness, vintage, scaffold) captured inline; Overall Score = half-up mean of 5 quality dimensions, Cost excluded.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

