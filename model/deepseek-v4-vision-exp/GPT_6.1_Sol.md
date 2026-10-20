# DeepSeek V4 Vision Exp — findings by GPT 6.1 Sol

- Source: DeepSeek / original `DeepSeek-V4-Flash-Vision-Exp` checkpoint
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (project's shortened label for DeepSeek-V4-Flash-Vision-Exp)
- **Short description:** DeepSeek's experimental image-understanding extension of V4 Flash, evaluated here as the original released checkpoint. The vendor API has retired that model and reroutes its old name to V4.1 Flash; third-party checkpoint serving and open weights are separately documented [S1–S5]. This report does not claim that the local `opencode/deepseek-v4-vision-exp` route exists.
- **Provider / access:** Original DeepSeek API supported Chat Completions, Anthropic Messages and Responses; exact old ID `deepseek-v4-flash-vision-exp` [S1]. Current OpenRouter Chat Completions `deepseek/deepseek-v4-flash-vision-exp` lists DeepInfra, GMICloud and SiliconFlow providers for the dated **20260821** model [S4]. Calling the same legacy name at **DeepSeek itself** currently executes a different model [S3].
- **Release / knowledge:** Official release **2026-08-21**; DeepSeek API retirement **2026-09-10**; October 17 upgrade makes the vendor legacy route resolve to **V4.1-Flash-1017** [S1,S3]. Exact original-model knowledge cutoff unverified. HF repository creation on August 31 is not the API release date.
- **IDs:** Original checkpoint `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`; OpenRouter `deepseek/deepseek-v4-flash-vision-exp`, provider snapshot `deepseek/deepseek-v4-flash-vision-exp-20260821` [S2,S4]. Z.ai's cross-vendor chart explicitly uses the shorter label **DeepSeek-V4-Vision-Exp**, matching the project subject and the exact original terminal/DeepSWE/agent results [S5]. This resolves the model's display identity, not an unverified Zen endpoint.
- **Context window:** Original checkpoint config directly specifies **1,048,576** positions, with YaRN from **65,536** original positions and factor **16** [S2]. Live third-party providers list **1,048,576** (GMICloud **1,048,575**) context. Maximum completion varies: DeepInfra **262,144**, GMICloud **943,717**, SiliconFlow **393,216** [S4]. These provider limits are claims, not retrieval measurements. Local metadata's 200K is not supported by this checkpoint/configuration evidence.
- **Modalities:** Text/image in, text out; tools, reasoning and structured output on listed providers [S1,S2,S4]. The original launch describes image files/base64/URLs, up to **384** image tokens, not arbitrary PDF/video/audio input [S1]. Current successor documentation uses different image-token limits and is not transferred backward.
- **Pricing (as of 2026-10-20):** Original-checkpoint third-party serving: DeepInfra through OpenRouter **$0.2156 input / $0.6468 output / $0.00686 cache-read per 1M** at its listed discount; GMICloud/SiliconFlow **$0.44/$1.32**, with different cache rates [S4]. These are present third-party offers, not reconstructed historical DeepSeek tariffs. No current free Zen route verified; open weights do not make infrastructure free.
- **Architecture:** Original open **MIT** checkpoint; V4 Flash backbone plus vision encoder/aligner, MoE/hyper-connections and DSpark. Config has **43** main hidden layers, **256** routed experts with **6** selected plus **1** shared, **32-layer** vision encoder, FP4 expert dtype and FP8 quantization metadata [S2]. Total/active parameter count not independently established here; no V4.1 parameter counts borrowed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9%**, original vendor release/card; DeepSeek Harness minimal mode, max reasoning effort, temperature **1.0**, top-p **0.95** [S1,S2].
- Toolathlon Verified: **75.9%**; CyberGym **75.3%**; DSBench-Hard **63.6%** (internal), original card [S2].
- AutomationBench **Public 25.7%**; Agents' Last Exam **27.3**; ApexBench **36.5% pass@1**, original vendor [S1,S2]. The Agents' Last Exam table does not fully specify the reward definition; it is retained as the reported score, not silently assigned a pass@k.
- Z.ai's independently published comparison chart labels the subject **DeepSeek-V4-Vision-Exp** and shows TB2.1 **83.9**, Agents' Last Exam **27.3**, AutomationBench **v1.0.6 38.8**, GDPval-AA **v2 1675 Elo** [S5]. Matching terminal/agent figures may be reused published values, not proof of fresh independent replication; AutomationBench's different version is material.
- Tau3-Banking / Claw-Eval / MCP-Atlas: no verified public score found in inspected sources.

Reasoning / knowledge:

- HLE **with tools 55.1%**, from the directly inspected Z.ai chart for the shortened exact subject [S5]. This is cross-vendor published evidence, not a DeepSeek claim or unaided HLE result; original task-level run records were not inspected.
- ZeroBench: **35.0% pass@5**, original vendor; Chartography **64.3**, original vendor visual-agent evaluation [S1,S2]. Multi-attempt, tool/agent-based visual reasoning cannot be equated with single-pass general reasoning accuracy.
- GPQA Diamond / no-tools HLE / CritPt / AA Intelligence Index / hallucination rate: no verified exact-checkpoint public score found in inspected sources. Vendor's statement that pure-text capability matches Flash is qualitative support, not a numeric license to copy Flash benchmarks [S1].

Coding:

- DeepSWE: **59.3%**; NL2Repo **57.7%**, original release/card [S1,S2]. Text-agent harness/settings are specified above; task limits for every row are not fully given.
- Z.ai's chart also reports DeepSWE **v1.1 59.3%** for **DeepSeek-V4-Vision-Exp** [S5]; the secondary [Stealth Models guide](https://stealthmodels.com/ox-alpha/) reproduces this and AutomationBench **38.8** [S6]. The guide is not a third independent measurement.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified exact-checkpoint public score found in inspected material.

Long context:

- **1,048,576** configured positions, independently consistent with currently listed third-party context [S2,S4].
- No verified original-checkpoint MRCR/RULER/AA-LCR or 512K+ retrieval-accuracy result found. Configured YaRN scaling alone does not establish reliable recall throughout the full window.

Multimodal:

- Original vendor ZeroBench **35.0% pass@5**, versus Opus 4.8 **34.0%** in the same vendor table; ApexBench **36.5%**, versus **39.4%**; Chartography **64.3**, versus **65.0** [S2]. The narrow ZeroBench advantage does not imply overall visual superiority.
- Original text-only Flash ignores visual inputs on two comparison suites, according to the card; gains there partly test adding vision, not only stronger reasoning [S2]. No verified audio/video/general MMMU result assigned.

### Search trail and conflicts

Fresh searches: [Bing `"DeepSeek-V4-Vision-Exp" benchmark`](https://www.bing.com/search?q=%22DeepSeek-V4-Vision-Exp%22+benchmark&setlang=en&cc=us) gave no results; [Google `"DeepSeek V4 Vision Exp" official model card`](https://www.google.com/search?q=%22DeepSeek+V4+Vision+Exp%22+official+model+card&hl=en) gave a JavaScript interstitial; [Brave exact-ID independent review](https://search.brave.com/search?q=%22deepseek-v4-vision-exp%22+independent+review) gave HTTP 429. A fourth [HF official-publisher search](https://huggingface.co/api/models?author=deepseek-ai&search=Vision&limit=20) located the exact open checkpoint, enabling direct card/config inspection.

Guessed AA, BenchLM and Vals experiment pages returned 404; no scores were inferred from those failures. OpenRouter's actual provider endpoint, DeepSeek's historical release/current retirement notice, the original config and Z.ai's chart supply new verifiable evidence. Models.dev additionally distinguishes DeepSeek's retired vendor alias (current V4.1-1017) from third-party original-checkpoint serving [S7]; directory metadata is lower authority than actual vendor/provider sources.

**Resolved conflicts:** the shorter project name is a published cross-vendor label, while the genuine model ID includes Flash; **200K/free Zen** local claims do not match verified original-checkpoint configuration/current offers. **25.7 AutomationBench Public** and **38.8 v1.0.6** remain separate results. DeepSeek's **2026-09-10 retirement** applies to its own hosted model, while dated third-party offers still advertise original weights; no successor's higher scores or tariff are represented as this experiment's measurements.

### Normalized scores (1–100)

- **Tool use: 85/100.** Exact original TB2.1 83.9% and Toolathlon 75.9% indicate strong agent execution; uneven automation and limited independent task-level replication cap the score [S1,S2,S5].
- **Reasoning: 80/100.** Cross-vendor tool-assisted HLE 55.1% plus exact visual reasoning results support capable applied reasoning; missing unaided GPQA/HLE and multi-attempt/tool dependence constrain confidence [S1,S2,S5].
- **Context window: 95/100.** Exact original config and listed providers verify a 1M configuration, meeting the tier; no high-accuracy long-range retrieval demonstration supports 100 [S2,S4].
- **Multimodal: 70/100.** Native image understanding with measured chart/visual reasoning merits the upper image-input band; no verified native audio/video/PDF contract or non-text generation supports broader-modality scoring [S1,S2,S4].
- **Coding: 85/100.** DeepSWE 59.3%, NL2Repo 57.7% and TB2.1 83.9% support substantial coding ability; sparse broader coding/independent coverage caps the rating [S1,S2,S5].
- **Cost efficiency: 95/100.** Verified original-checkpoint serving at $0.2156/$0.6468 is economical; promotional/provider variation, unknown task-level spend and paid compute keep it below 100 [S4].
- **Overall Score: 83/100.** Half-up mean `(85 + 80 + 95 + 70 + 85) / 5 = 83`; cost excluded. Best fit: reproducible original-checkpoint image/code agents through an explicitly pinned host or self-deployment, with the vendor legacy route's successor mapping understood.

### Sources

- [S1] https://api-docs.deepseek.com/news/news260821 and https://api-docs.deepseek.com/updates — original release, exact benchmark definitions, release/retirement dates and current routing history.
- [S2] https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp/raw/main/README.md and https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp/raw/main/config.json — original measured model, licence, architecture, image support and exact context configuration.
- [S3] https://api-docs.deepseek.com/quick_start/pricing and https://api-docs.deepseek.com/guides/vision — explicit vendor alias replacement; current successor specifications kept separate.
- [S4] https://openrouter.ai/api/v1/models/deepseek/deepseek-v4-flash-vision-exp/endpoints — currently advertised original dated checkpoint providers, prices, precision, modalities and limits; availability was not authenticated by making inference calls.
- [S5] https://raw.githubusercontent.com/zai-org/GLM-5/refs/heads/main/resources/bench_53.png — directly viewed cross-vendor chart, exact short label, HLE/tools, GDPval, DeepSWE and AutomationBench version.
- [S6] https://stealthmodels.com/ox-alpha/ — independent guide's secondary transcription and source links; no claim of independent DeepSeek rerun.
- [S7] https://models.dev/api.json — corroborating provider-specific canonical IDs; not substituted for direct provider terms.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Fresh independent multi-engine plus official-publisher search; original card/config, historical and current vendor docs, exact live third-party metadata, direct cross-vendor chart inspection and secondary comparison. Own excluded twin read only after research/draft conclusion. New original-checkpoint context, licence, serving prices and broader reasoning evidence resolve the prior insufficient-evidence decision. Scores are editorial 1–100 interpretations, not official benchmark scores.
