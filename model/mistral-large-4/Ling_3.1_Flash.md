# Mistral Large 4 — findings by Ling 3.1 Flash

- Source: Mistral AI / Mistral Large 4
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's frontier-class natively multimodal MoE, released 2026-10-06 in public preview: 1.05T total / 52B active parameters with a 1.6B vision encoder, aimed at software engineering, cyber, finance and legal workloads. Open weights promised ~2026-10-27; currently proprietary preview.
- **Provider / access:** Mistral Studio / Mistral API (public preview); European-hosted.
- **Release / knowledge:** 2026-10-06 (EU AI Act technical documentation placed 2026-10-06); knowledge cutoff not published.
- **IDs:** `mistralai/mistral-large-4` (preview; weights not yet on Hugging Face as of 2026-10-08).
- **Context window:** 512K tokens per Artificial Analysis, Vals AI and The Model Gap (some trackers list 1M); max output 256K (Vals AI).
- **Modalities:** text + image in; text out (no audio/video/file input per EU technical documentation); reasoning; tool/agent calls.
- **Pricing (as of 2026-10-08):** preview $0.68 / 1M input, $2.09 / 1M output ("half list" per The Model Gap); list $1.36 / $4.18 (Mistral Studio, Vals AI).
- **Architecture:** granular MoE, 1.05T total / 52B active, 1.6B vision encoder; >1T parameter range per EU docs; open-weight release pledged late October.

### Raw benchmarks found

Launch-chart numbers are Mistral's own (vendor-reported, unreproduced); independent rows noted separately.

Agent / tool use:

- AutomationBench (657 business workflows): **59.9%** (Mistral; ahead of Kimi K3, MiMo V2.6 Pro, DeepSeek V4 Pro)
- Finance Agent v2: **54.7%**; Finch / FinWorkBench: **67.4%**
- Harvey LAB (legal agent): **15.8%** (Vals AI ranks it #6 of 76 on Harvey's Legal Agent Benchmark)
- Cybench: **93%**; CyberGym-E2E: **82%** (with Mistral's refusal caveat)
- SWE Atlas - Codebase QnA: **59.4%**
- Surge AI blind eval: **3.74/5** (second behind Claude Opus 5's 4.22, ahead of Kimi K3 3.59 and GLM 5.3 3.60)
- Tax Agent Bench: **63.3%** (#13 of 21); EMB (Excel Modeling): **56.2%** (#33 of 45); Legal Research Bench: **31.7%** (#31 of 45); MedScribe: **80.4%** (#36 of 57, no tools); MedCode: **40.7%** (#42 of 55, no tools); BioMysteryBench: **67.0%** (#14 of 21) (all LLMLearNER, thinking high w/ tools unless noted)
- AA Cyber Index: **49.5** (#1 of 1, repository engineering, LLMLearNER); AA Cyber Index composite **50** (level with GLM-5.3-Flash, behind MiMo-V2.6-Pro 56, GPT-6 Luna 53, Grok 4.7 xhigh 56) — CyberGym-E2E-AA **81.7–82%** (highest of any model; MiMo 79%, GPT-6 Luna 78%), DeepsecBench-AA **16%**, CWE-Bench-AA **51%**
- Safety: Lakera B3 AI Security Benchmark **93.3%** attack resistance (highest Mistral saw among competitors); KORA **1.691/2** (84.5%, highest Mistral measured among open models); highest cyber-prompt refusal rate among OSS models (JailbreakBench/StrongREJECT/AgentHarm); saturated indirect prompt-injection robustness

Reasoning / knowledge:

- AA Intelligence Index: **38** (#64 of 225, median 26; Artificial Analysis, independent)
- AA-Briefcase: **1393** Elo (Mistral; ahead of DeepSeek V4 Pro)
- GDP.pdf: **18.6%** (Mistral)
- SciCode-Verified pass@1: **91.8%** (n=6, small sample; Mistral)
- Humanity's Last Exam: **35.0%** (Springprompt's AA read); GDP.pdf: **18.6–19%** (Mistral/AA — an 18-point improvement over Large 3; par with MiMo-V2.6-Pro, behind Kimi K3 22%)
- MysteryMechanism: **12.2%** (#14 of 14 — last); ProofBench v1.1 (Lean 4): **10.0%** (#27 of 28) — weak academic rows

Coding:

- DeepSWE v1.1: **61.7%** (Mistral; ahead of DeepSeek V4 Pro and Qwen3.8 Max per launch chart)
- Terminal-Bench 4.0: **28.3%** (Mistral) / **22.73%** (Vals AI, mini-swe-agent, high effort, pass@1 over 3 passes) / **26.77%** (Artificial Analysis same-conditions)
- Coding Agent Index: **49.8%** (Mistral composite)
- SWE-bench: **75.2%** (sota-model.com, single unverified source)
- Independent (LLMLearNER): Vibe Code Bench v1.1 **78.4%** (#21 of 63 — level with Gemini 3.8 Flash's 78.7, behind GPT-6 Astra 89.6 / DeepSeek V4.1 Flash 84.7 / GPT-5.6 Sol 80.5); IOI (Vals v2) **45.3%** (#23 of 29); Code Migration **30.6%** (#33 of 47); Vibe Code Bench 1–100 **14.3%** (#1 of 1 — sole entrant, not meaningful)
- Terminal-Bench 4.0 independent cluster: **22.73%** (Vals, mini-swe-agent, high, pass@1 over 3 passes) / **26.77%** (AA same-conditions) / **26.8%** (Springprompt) / **27%** (AA chart) — vs Mistral's 28.3%
- Business-task rows (Springprompt hands-on, 2026-10-06, Mistral API): CatalogBench **10.7%** high / **7.1%** default (17th of 19; GPT-6 Astra/Sol 75.0%, GPT-6 Luna 55.4%, Muse Spark 1.3 48.2%); CatalogBench sales briefs **1.8%** high / **0.0%** default (15th of 19); DeckBench **515** (last of 18; GPT-6 Astra 1489, Sonnet 5.5 1356, GPT-6 Luna 1273, Gemini 3.8 Flash 904); ROASBench **37.0** default / **27.4** high (10th of 18)

Vision:

- ChartQA Pro: **63.1%**; Dense200 bbox: **42.0%** (Mistral — edges GPT-6 Astra's 41%; the API now accepts 100 images per request, up from 8)

Long context:

- AA-LCR (long-context reasoning): **81.3%** (AA-reported via Springprompt — the first verified long-context row); 512K window per AA/Vals (model card claims 1M; AI Gateway lists 524K — conflict).

### Normalized scores (1–100)

- **Tool use: 72/100.** AutomationBench 59.9%, Cybench 93% and CyberGym-E2E 82% are strong, with the AA Cyber Index 49.5 (#1 of 1) and Tax Agent Bench 63.3% filling; Harvey LAB 15.8%, Finance Agent 54.7%, MysteryMechanism 12.2% (last) and the Springprompt business-task rows (CatalogBench 10.7%, DeckBench last-of-18) cap the score.
- **Reasoning: 65/100.** AA Intelligence Index 38.4 (#64/225) is the only independent composite and is mid-field (five Chinese open models score higher; most intelligent model from outside the US and China); HLE 35.0% and SciCode 91.8% (n=6) are promising but thin; GDP.pdf 18.6–19%, MysteryMechanism 12.2% (last) and ProofBench 10.0% (#27/28) cap the score.
- **Context window: 74/100.** 512K tokens verified by Artificial Analysis and Vals AI (max output 256K; AI Gateway lists 524K/262K, model card claims 1M — conflict), now with AA-LCR 81.3% (AA-reported via Springprompt) supporting strong long-context reasoning at the 512K tier; revised 70→74 on the verified LCR fill.
- **Multimodal: 70/100.** Native image input with ChartQA Pro 63.1% and Dense200 42.0% (edges GPT-6 Astra's 41%), but GDP.pdf 18.6–19% is weak and there is no audio/video; 100 images per request supported.
- **Coding: 73/100.** DeepSWE 61.7% and SWE-Atlas-QnA 59.4% lead the launch chart, with independent fills from the AA Cyber Index 49.5 (#1 of 1), Vibe Code Bench v1.1 78.4% (#21 of 63, level with Gemini 3.8 Flash) and IOI 45.3%; Terminal-Bench 4.0 (22.7–28.3% across four runs) remains a hard cap; DeepSWE is still vendor-only (±9.5 noise per The Model Gap). Revised 72→73 on the independent fills.
- **Cost efficiency: 60/100.** $0.68/$2.09 preview (half of $1.36/$4.18 list) is mid-priced for a frontier MoE, but AA's cost-per-task math is unfavorable: $1.13/task at list ($0.57 at launch pricing) vs GLM-5.3-Flash $0.25, DeepSeek V4.1 Flash $0.27 and MiMo-V2.6-Pro $0.13 at similar or higher intelligence — over 4× the cost of similar-intelligence open weights, below AA's Pareto line; open weights late October could change the self-hosting economics.
- **Overall Score: 71/100.** Mean of the five quality dims (72+65+74+70+73)/5 = 70.8 → 71; a promising preview — best fit for European-hosted coding/cyber/finance agents, pending independent reproduction and the promised open weights (due ~2026-10-31; co-founder Lample says a final version may differ from the preview).

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Revised: Context 70→74, Coding 72→73, Overall 70→71** — Tool 72 / Reasoning 65 / Context 74 / Multimodal 70 / Coding 73 / Cost 60. The pass added LLMLearNER's 20-row board, Tom's Hardware's AA deep dive, Springprompt's hands-on business-task suite, Vals' model page and The Model Gap's noise-banded rows:

- **New independent fills:** AA Cyber Index **49.5** (#1 of 1, repository engineering) and Cyber Index composite **50** (level with GLM-5.3-Flash; CyberGym-E2E-AA 81.7% highest of any model, DeepsecBench-AA 16%, CWE-Bench-AA 51%); Vibe Code Bench v1.1 **78.4%** (#21 of 63 — level with Gemini 3.8 Flash's 78.7); IOI (Vals v2) **45.3%** (#23 of 29); Code Migration **30.6%** (#33 of 47); Tax Agent Bench **63.3%** (#13 of 21); EMB **56.2%** (#33 of 45); Legal Research Bench **31.7%** (#31 of 45); MedScribe **80.4%** (#36 of 57); BioMysteryBench **67.0%** (#14 of 21); **AA-LCR 81.3%** (AA-reported via Springprompt — the first verified long-context row).
- **Terminal-Bench 4.0 now has four runs:** 22.73% (Vals, mini-swe-agent, high, pass@1 over 3 passes) / 26.77% (AA same-conditions) / 26.8% (Springprompt) / 27% (AA chart) vs Mistral's 28.3% — a consistent 22.7–28.3% cluster.
- **Independent business-task rows (Springprompt hands-on, 2026-10-06, Mistral API):** CatalogBench 10.7% high / 7.1% default (17th of 19; GPT-6 Astra/Sol 75.0%, GPT-6 Luna 55.4%, Muse Spark 1.3 48.2%); CatalogBench sales briefs 1.8% / 0.0% (15th of 19); DeckBench 515 (last of 18; GPT-6 Astra 1489, Sonnet 5.5 1356, GPT-6 Luna 1273, Gemini 3.8 Flash 904); ROASBench 37.0 default / 27.4 high (10th of 18); HLE 35.0%; TB 4.0 26.8%.
- **AA cost-per-task (Tom's Hardware, 2026-10-09):** $1.13/task at list, $0.57 at launch pricing — vs GLM-5.3-Flash $0.25, DeepSeek V4.1 Flash $0.27, MiMo-V2.6-Pro $0.13 at similar or higher Intelligence Index scores (42/39/46 vs ML4's 38.4); 200M output tokens to run the Index (median 81M — very verbose); 116.1 tok/s, 1.46s TTFT (~33% faster than tier median, 2.6× faster TTFT); below AA's Pareto line, just outside the "most attractive quadrant."
- **Specs and context:** knowledge cutoff not published; trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in European datacenters; 160+ languages including every official EU language; 100 images per request (up from 8); context conflict unresolved (model card 1M vs AI Gateway 524K vs AA/Vals 512K; max output 256K Vals / 262K AI Gateway); 49B vs 52B active discrepancy (launch-day coverage vs current model card); `reasoning_effort` none and high working — Simon Willison found high vs none made little visible difference (2,717 vs 3,275 tokens on his prompt); co-founder Guillaume Lample: the RL run is still in progress and a final version may ship with the weights, so the downloadable checkpoint may differ from the preview.
- **Open-weight standing (AA):** Intelligence Index 38.4 makes ML4 the most intelligent model from outside the US and China (previous best non-Chinese open: Motif 3, South Korea, 33.6), but five Chinese open models score higher (MiMo-V2.6-Pro 46, GLM-5.3 45, Kimi K3 44, GLM-5.3-Flash 42, DeepSeek V4.1 Flash 39) — 8th among open models; Vals Index 48.05% ±1.11 (#33 of 45, $13.78/test, 105m50s latency).
- Still open: the weights/license (due ~2026-10-31), an independent DeepSWE run (vendor-only, ±9.5 noise), MRCR/RULER at depth, Arena/tau2-bench/BFCL/SimpleQA Verified, and whether the final build matches the preview.
- Score impact: Context 70→74 on the verified AA-LCR 81.3% at the 512K tier; Coding 72→73 on the AA Cyber Index #1/1 and Vibe Code v1.1 78.4% fills (TB 4.0 22.7–28.3% remains the cap); Overall 70→71 ((72+65+74+70+73)/5 = 70.8).

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08 (updated 2026-10-11)
- Method: public internet research (Mistral AI announcement/docs, Artificial Analysis, LLMLearNER, Vals AI, The Model Gap, Tom's Hardware, Springprompt, Traictory, Vibelog, DevelopersDigest, Eagentix, SyntaxDispatch, sota-model); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
