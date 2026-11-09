# MiMo-V2.6-Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro — **BEST-RANKED OPEN-WEIGHT MODEL IN BATCH** (BenchLM 56.44, #59/1009)
- **Short description:** Xiaomi's open-weight reasoning model — a genuine specialist: **outstanding at defensive cybersecurity** (CyberGym 94.0%, CyberGym-E2E-AA 78.6%, AA Cyber Index 56.1% — joint-best in series) and solid at agentic coding (TB 2.1 89.9%, Toolathlon-Verified 76.9%, OSWorld-Verified 82%), paired with **negative AA-Omniscience index (−4.5)** — more incorrect than correct answers on knowledge questions. **Open-weight cyber/coding workhorse, not a knowledge model.**
- **Provider / access:** Hugging Face weights (`XiaomiMiMo/MiMo-V2.6-Pro-RL`), **OpenCode Zen (`xiaomi/mimo-v2.6-pro` at $0.435/$0.87/$0.217)** — ~1/23rd of GPT-5.5 Pro's rate card. OpenRouter (`xiaomi/mimo-v2.6-pro`), Xiaomi first-party API (`mimo-v2.6-pro` at `https://api.xiaomimimo.com/v1`), GMI Cloud/Novita. **No Free hosted ID** — self-hosting (MIT license) is $0 path.
- **Release / knowledge:** 2026-09-21 release; open-sourced with weights, RL environments, framework; arXiv:2610.11959 (2026-10-08). **Knowledge cutoff: no verified official statement.**
- **IDs:** `mimo-v2.6-pro` (Xiaomi); `xiaomi/mimo-v2.6-pro` (OpenRouter/Zen); `XiaomiMiMo/MiMo-V2.6-Pro-RL` (HF). No Free Zen ID — free promo applies to MiMo-V2.6-Flash, not Pro.
- **Context window:** **1,048,576 tokens total (1M) / 128K max output (131,072 per Zen/OpenRouter)** — verified via Xiaomi model page and AA; rate limits 100 RPM / 10M TPM.
- **Modalities:** Text, image, video, **audio** in (Xiaomi spec page, AA); text out. Deep thinking (reasoning, toggleable `thinking` param), tool calls, streaming, web search (billed separately), structured output (JSON), context caching. **Note: some tooling configs list text+image only — verify audio/video on your route.**
- **Pricing (as of 2026-11-08):** **$0.435 in / $0.87 out / $0.0036 cache hit (99% discount)** per 1M; domestic CNY ¥3/¥6 (cache hit ¥0.025). Batch 50% ($0.2175/$0.435). UltraSpeed 10× ($4.35/$8.70). Web search ~$5/1,000 calls (outside China). AA blended ≈$0.18/1M, ≈$0.26/Intelligence-Index task.
- **Architecture:** Open-weight sparse MoE (MIT license). **1.02T total / 42B active**; 384 experts / 8 activated; 70 layers (60 SWA + 10 GA); hidden 6144; SWA window 128; hybrid sliding-window + global attention; 5-layer MTP speculative decoder (7 tokens/pass); MiMo ViT 681M + audio encoders 308M/127M; pretrained 30T tokens (27T text + 3T omni); MXFP4 QAT; context extended to 1M; RL: async GRPO (1,568 prompts × 16 rollouts/step, ~$2.6M compute).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-02) + official Xiaomi sources. **Average of 32 qualifying raters: 91 Overall** (Tool 88.9, Reasoning 88.9, Context 96.1, Multimodal 92, Coding 89.1). Queue: 91. Step 5 Preview: 81. GLM 5.3 Flash: 83. My original: 84. **OPEN-WEIGHT SPECIALIST: cyber/coding strength, knowledge weakness.**

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi model card, harbor harness, HF-published) / **67.79%** (Vals AI independent, #33/73) — **LARGE VENDOR-VS-INDEPENDENT GAP**
- Terminal-Bench 4.0: **34.9%** (vendor) / **31.31%** (Vals AI, #23/59) — well behind closed frontier (Opus 5 49.0, Astra 59.6 vendor)
- Terminal-Bench-Science 0.1: **2.86%** (Vals AI, #34/43) — **weak spot**
- Toolathlon-Verified: **76.9%** (vendor, HKUST harness, HF-published; Opus 5 80.6)
- GDPval-AA v2.1: **Elo 1,673** (vendor citing AA; Opus 5 1,708, Fable 5.1 1,735, GPT-5.6 Sol 1,588) / **59.2% normalized** (AA) — **77 Elo under 1,750 frontier**
- AutomationBench v1.0.6: **53.1%** (vendor; above Opus 5 50.3) / **58.6%** (AA)
- OSWorld-Verified: **82.0%** (vendor; Opus 5 83.4)
- JobBench: **62.0%** (vendor)
- Agents' Last Exam: **31.6%** (vendor, HF-published; ties Opus 5)
- CyberGym: **94.0%** (vendor) — **joint-highest CyberGym in series**
- CyberGym-E2E-AA: **78.6%**; **AA Cyber Index: 56.1%** — **highest cyber index here** (Step 5 / GLM)
- CWE-Bench-AA: **63.3%**; DeepsecBench-AA: **26.2%** (Step 5)
- AA Briefcase: **1,511 Elo** (Step 5) / **1,515 Elo** (original)
- AA AutomationBench: **58.6%**; AA AnalystAgent: **37.5%** (Step 5)
- ExploitGym: **17.8%**; GDP.pdf: **19.2%** (Step 5 / GLM)
- Vals CyberBench v1.1: **72.86%** (#3/47); Vals SRE Bench: **3.05%** (GLM)
- **τ³-Banking, BrowseComp, MCP-Atlas, Tau2/Tau3-Bench, Claw-Eval: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM)

Reasoning / knowledge:

- AA Intelligence Index: **46.32** on v4.3 at launch — **#1 open-weights**, above GLM-5.3 (45), Kimi K3 (44), tied Grok 4.7; 5-7pts below Claude/GPT frontier / **current AA v5.0 rebase: 30**, #3/23 in open-weights class, 4/4 intelligence units (GLM)
- AA-HLE: **49.4%** — **clears 40%+ frontier ref** (Step 5 / GLM)
- AA-LCR: **86.3%** — **HIGHEST long-context-reasoning in batch** (Step 5 / GLM) — above Astra 80.7%, Opus 5.5 84.7%, Sonnet 5.5 82.7%
- AA-Omniscience: **index −4.5** (negative = more incorrect than correct); accuracy **34.8%**, hallucination **60.2%** (Step 5) — **decisive knowledge weakness**
- Vals ProofBench v1.1: **70.00%** (#19/52); MysteryMechanism: **15.31%** (#27/29); Vals Index (24 benchmarks): **57.81%** (#16/32), $0.43/test (GLM)
- CritPt: **26.6%** (AA) (original) / **no verified standalone score** (GLM, inside v5.0 index)
- MLCR-AA: **18.3%** (AA) (original) / **12.8%** (GLM)
- STEMBench: **2.17** (Ulam audit) (original)
- **GPQA Diamond, HLE (standalone), ARC-AGI-1/2, MMLU-Pro, FrontierMath, MRCR: NO VERIFIED PUBLIC SCORE** — **entire frontier-reference set except HLE missing** (GLM / Step 5)

Coding:

- DeepSWE v1.1: **71.9%** (vendor, HF-published; RL lifted from 58.4 to ~72.6; Opus 5 74.0) (GLM / Step 5)
- ProgramBench: **26.5%** (vendor) vs **0.50% fully-resolved / 69.82% partial** (Vals AI, #23/64) — **LARGE HARNESS DISCREPANCY**
- Vibe Code Bench v1.1: **85.22%** (#16/123, Vals AI) (GLM) / **no verified** (Step 5)
- IOI: **39.33%** (#37/46, Vals AI) (GLM)
- SWE-bench Verified/Pro: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- SWE-bench Multimodal: **41.25%** (#15/20, Vals AI) (GLM)
- LiveCodeBench: **NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- MiMo Code Bench (in-house): **63.2%** (vendor) (GLM)
- Terminal-Bench 2.1: **89.9%** (vendor) — **clears 85% ref** (Step 5 / GLM)
- AA-SciCode: **60.9%** (AA) — **clears 55%+ ref** (Step 5 / GLM)
- kingy.ai OpenCode hands-on (2026-09-21): **23/23 hidden checks** on 3 coding/data tasks at ~$0.03 total, matching Opus 5 (23/23, ~$1.03) (GLM)
- **SWE-bench Verified, SWE-Pro, LiveCodeBench, AA Coding Index, Vibe Code Bench (Step 5), FrontierCode: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM)

Multimodal:

- Design Arena (website): **1,307 Elo** (OpenRouter) (Step 5) / **1,308 Elo** (original)
- MiMo VisualCoding: **72.3%** (in-house vendor; above Opus 5 70.0, below Astra 82.2) (GLM)
- **MMMU-Pro, CharXiv, BabyVision, ZeroBench, ParseBench, ExtractBench: NO VERIFIED PUBLIC SCORE** (Step 5 / GLM)
- **Multimodal coverage INFERRED from single web-design result** — model card does not state modality set (Step 5)

Long context:

- **NO MRCR / RULER / GraphWalks VERIFIED PUBLIC SCORE** (GLM)
- 1M window vendor-verified (pretrained at 256K, mid-trained/RL at up to 1M-token sequences)
- Vals AI observed **failures from hitting 128K output cap on long agentic tasks** (notably Code Migration) (GLM)
- AA-LCR: **86.3%** (HIGHEST in batch) (Step 5 / GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 32 qualifying raters = **91 Overall** (Tool 88.9, Reasoning 88.9, Context 96.1, Multimodal 92, Coding 89.1). Queue: 91. Step 5 Preview: 81. GLM 5.3 Flash: 83. My original: 84. **OPEN-WEIGHT SPECIALIST: cyber/coding strength, knowledge weakness.**

- **Tool use: 82/100.** (was 80) TB 2.1 **89.9%** (vendor, clears 88%+ frontier), CyberGym **94.0%** (joint-highest in series), CyberGym-E2E-AA **78.6%**, AA Cyber Index **56.1%** (highest here), Toolathlon-Verified **76.9%**, OSWorld-Verified **82.0%**, JobBench **62.0%**, GDPval-AA **1,673 Elo**, AutomationBench **53.1-58.6%**. **Capped by:** TB 4.0 **31.3-34.9%** (behind closed frontier 49-60), **Vals TB 2.1 67.79% (large vendor-independent gap)**, TB-Science **2.86%**, GDPval-AA **1,673 Elo (77 under 1,750 frontier)**, AA AnalystAgent **37.5%**, Agents' Last Exam **31.6%**, **no τ³-Banking/BrowseComp/MCP-Atlas/Claw-Eval**.
- **Reasoning: 72/100.** (was 72) AA-HLE **49.4%** (clears 40%+), **AA-LCR 86.3% (HIGHEST in batch)**, Vals ProofBench **70.0%**, AA Index v4.3 **46.32 (#1 open-weights)**. **Capped by:** **AA-Omniscience −4.5 (NEGATIVE — more incorrect than correct)**, AA Index v5.0 **30 (#3/23 open-weights)**, **GPQA Diamond, ARC-AGI, MMLU-Pro, FrontierMath, MRCR: ALL MISSING** — 4 of methodology's reasoning references uncheckable. Model reasons competently on long context but **actively unreliable as knowledge source**.
- **Context window: 97/100.** (was 95) **1M/128K verified** (Xiaomi page, AA); **AA-LCR 86.3% (HIGHEST in batch)**. **Held at 97 (not 100): no MRCR/RULER/GraphWalks; Vals 128K output-cap failures on long agentic tasks.**
- **Multimodal: 75/100.** (was 90) **Native text+image+video+audio in (Xiaomi spec, AA); text out.** Design Arena **1,307 Elo**, MiMo VisualCoding **72.3%**. **Scored at top of +image-in band (60-70) marginally above on single web-design result — EXPLICITLY AN INFERENCE, not vendor claim.** MMMU-Pro, CharXiv, BabyVision, ZeroBench, ParseBench, ExtractBench: ALL UNPUBLISHED. If card confirms omni-modal → 90s; if text-only → 10-20.
- **Coding: 84/100.** (was 82) TB 2.1 **89.9%**, AA-SciCode **60.9%** (clears 55% ref), DeepSWE **71.9%** (2.1pts under 74% ref), Vibe Code **85.22%** (#16/123), kingy.ai OpenCode **23/23 at $0.03**. **Capped by:** ProgramBench vendor-vs-Vals **26.5% vs 0.50% (large discrepancy)**, TB 4.0 **~31-35%**, **NO SWE-V/Pro/LiveCodeBench/AA Coding Index/FrontierCode**.
- **Cost efficiency: 96/100.** (was 98) **$0.435/$0.87** with **99% cache discount ($0.0036)**, 50% batch, **MIT weights (self-hosting viable)**. AA $0.13-0.26/index task vs $2.00 (Kimi K3) to $7.63 (Fable 5.1); full AA index run **$206.66 vs $7,274.74 for Opus 5**. Flagship-class intelligence at small fraction of frontier cost. **Not $0, so not 100.**
- **Overall Score: 82/100.** (was 84) Half-up mean of (82 + 72 + 97 + 75 + 84) / 5 = 410 / 5 = 82 → **82**. **Below queue (91), average of 32 qualifying raters (91).** Best-fit: **Best open-weight defensive-security & agentic-coding model in series** — CyberGym 94.0%, CWE-Bench-AA 63.3%, TB 2.1 89.9%, DeepSWE 71.9%, Vibe Code 85.22%, kingy.ai 23/23 at $0.03; **AA-LCR 86.3% (HIGHEST in batch)**; exceptional value at $0.435/$0.87 with MIT self-hosting. **DO NOT USE as knowledge/factual assistant: AA-Omniscience −4.5 (NEGATIVE), every reasoning frontier ref except HLE unmeasured.** Keep closed frontier model as baseline for hardest long-horizon terminal tasks and deep science/math reasoning.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 81), GLM 5.3 Flash (2026-11-02, Overall 83) + official Xiaomi sources (MiMo-V2.6-Pro-RL model card, technical report PDF, arXiv 2610.11959, mimo.mi.com specs/pricing, launch blog). **Average of 32 qualifying raters: 91 Overall.** Queue: 91. **Critical findings:** Best-ranked open-weight in batch (BenchLM #59); **CyberGym 94.0% (joint-highest), AA Cyber Index 56.1% (highest), CWE-Bench-AA 63.3%**; TB 2.1 89.9%; DeepSWE 71.9%; Vibe Code 85.22%; **AA-LCR 86.3% (HIGHEST in batch)**; **AA-Omniscience −4.5 (NEGATIVE — more incorrect than correct)**; GPQA/ARC/MRCR/FrontierMath all missing; Vals TB 2.1 67.79% (large vendor-ind gap); ProgramBench 26.5% vs 0.50% (large discrepancy); multimodal inferred from single Design Arena result; 128K output cap fails long agentic tasks; MIT license self-hostable; $0.435/$0.87 exceptional value.
- Reference URLs:
  - [Xiaomi — MiMo-V2.6-Pro-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  - [Xiaomi — MiMo-V2.6 technical report (source of most benchmark rows)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
  - [Xiaomi — MiMo-V2.6-Pro model page (specs, pricing, capabilities)](https://mimo.mi.com/models/en-US/mimo-v2.6-pro)
  - [Xiaomi MiMo-V2.6 launch blog](https://mimo.xiaomi.com/mimo-v2-6)
  - [Technical report: MiMo-V2.6 — Scaling Reinforcement Learning Towards Self-Improvement (arXiv 2610.11959)](https://arxiv.org/html/2610.11959v1)
  - [BenchLM — MiMo-V2.6-Pro benchmark scores (37 rows, 56.44/100, #59/1009)](https://benchlm.ai/models/mimo-v2-6-pro)
  - [Artificial Analysis — MiMo-V2.6-Pro intelligence, performance & price](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [Vals AI — MiMo V2.6 Pro benchmark suite & evaluation note](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)
  - [STEMBench120 October 28, 2026 snapshot audit](https://www.ulam.ai/stembench#full-run-results)
  - [Bug Hunt Bench public data](https://bughunt.productcompass.pm/data/benchmark.json)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---