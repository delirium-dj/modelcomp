# Grok 4.1 — findings by GPT-6 Luna

- Source: xAI/Grok 4.1
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 conversational model, released in Thinking and Non-Thinking configurations. xAI emphasized conversational style, emotional intelligence, helpfulness, and hallucination reduction while retaining Grok 4's core reasoning capabilities.
- **Provider / access:** Consumer access through Grok.com, X, and the iOS/Android apps, per xAI's launch notice and model card. No exact-model API route is documented in the launch materials; xAI's current developer model catalog recommends Grok 4.7 and does not list Grok 4.1. Do not treat similarly named Grok 4.1 Fast API entries as this model.
- **Release / knowledge:** Released **2025-11-17**. No exact-model knowledge cutoff found.
- **IDs:** Consumer model-picker name **Grok 4.1**; configurations **Grok 4.1 Thinking (T)** and **Grok 4.1 Non-Thinking (NT)**. xAI's launch article also gives internal evaluation codenames `quasarflux` (Thinking) and `tensor` (Non-Thinking). No API model ID verified.
- **Context window:** No exact-model context specification found in xAI's announcement, model card, or current developer model catalog. BenchLM lists 1M, but that figure was not corroborated by a primary xAI source and is not used as a verified specification.
- **Modalities:** xAI publishes no comprehensive input/output modality specification for these consumer configurations. Its model card includes a FigQA score and characterizes FigQA as multimodal, which supports image/figure understanding; no audio or video support was verified. The WMDP and VCT results are explicitly text-only evaluations, not a claim that the product itself is text-only.
- **Pricing (as of 2026-10-30):** No per-token API pricing verified for Grok 4.1. xAI's current API pricing/model pages omit it; consumer access is through Grok's app tiers, but the release does not state model-specific subscription cost or quota.
- **Architecture / training:** Parameter count and architecture are undisclosed. xAI describes pretraining on public internet, third-party, user/contractor, and internally generated data, followed by targeted mid-training and supervised fine-tuning plus reinforcement learning using human feedback, verifiable rewards, and model-based graders. The launch article says the model used Grok 4's large-scale RL infrastructure, with further optimization for style, personality, helpfulness, and alignment.
- **Evaluation caveat:** Public results are sparse and mostly vendor-reported. The LMArena Elo numbers below are xAI's snapshot in its launch announcement; they are human-preference standings, not a reasoning benchmark. The risk model card reports safety and dual-use evaluations, some with safeguards removed. Do not treat those scores as general coding or everyday tool-use results.

### Raw benchmarks found

Human preference / general conversation:

- xAI's November 2025 report says Grok 4.1 Thinking held **1,483 LMArena Text Elo (#1)**, while Non-Thinking held **1,465 Elo (#2)**. The article says the Thinking configuration led the highest non-xAI model by 31 points. These are xAI-reported leaderboard results at launch, not a current leaderboard snapshot.
- During xAI's blind silent rollout of preliminary builds on **2025-11-01 to 2025-11-14**, Grok 4.1 was preferred **64.78%** of the time over the previous production model on live traffic. This is a vendor-reported paired preference result, not a public benchmark score.
- xAI also reports evaluating EQ-Bench 3 and Creative Writing v3, but numeric scores are embedded in graphics not reproduced in the accessible source text; no numeric result is transcribed or used here.

Agent / safety / cyber:

- xAI's model card reports **AgentHarm harmful-request answer rates** of **14% (Thinking)** and **4% (Non-Thinking)**; lower is safer. On **AgentDojo prompt-injection attack success**, it reports **5% (Thinking)** and **1% (Non-Thinking)**; lower is more robust.
- On **CyBench**, the card reports an **unguided end-to-end cyber-task success rate of 39% (Thinking)**, versus 43% for Grok 4. This measures offensive CTF capability, not general software engineering or routine tool-use competence.
- xAI's card reports multilingual chat refusal answer rates of **7% / 5%** for Thinking/Non-Thinking, **2% / 0%** under user jailbreak, and **2% / 0%** under system jailbreak. Its input-filter false-negative rates for restricted biology/chemistry requests range from 0% to 3% without prompt injection and 12% to 20% with prompt injection.
- The card reports **MASK dishonesty rates of 49% / 46%** and **sycophancy rates of 19% / 23%** for Thinking/Non-Thinking; lower is better on both. These are concerning-propensity metrics, not overall reasoning scores.
- BenchLM lists ResearchClawBench **13.5%**, but the linked primary ResearchClawBench page currently says “No scored runs yet.” Treat the aggregator row as uncorroborated and exclude it from score normalization.
- No verified Terminal-Bench, Tau3-Banking, GDPval-AA, OSWorld, or Claw-Eval result found for this exact model.

Reasoning / knowledge / multimodal:

- xAI's model card reports **WMDP Bio 87%**, **WMDP Chemistry 84%**, and **WMDP Cyber 84%** for Thinking. These are dual-use knowledge evaluations and should not be equated with GPQA or general reasoning.
- Additional Thinking results: **Virology Capabilities Test 61%**, **BioLP-Bench 37%**, **ProtocolQA 79%**, **FigQA 34%**, and **CloningScenarios 46%**. The card says Grok 4.1 is below the human baselines on multimodal FigQA and multi-step CloningScenarios; FigQA is evidence of figure/image understanding, not broad multimodal coverage.
- No verified GPQA Diamond, HLE, MRCR/LCR, CritPt, or Intelligence Index score found.

Coding:

- CyBench's **39%** Thinking success rate is the only verified agentic coding-adjacent result found; it is a CTF/cybersecurity benchmark, not SWE-bench, LiveCodeBench, or Terminal-Bench.
- No verified SWE-bench, DeepSWE, LiveCodeBench, SciCode, or Terminal-Bench result found for Grok 4.1.

### Normalized scores (1–100)

- **Tool use: 65/100.** AgentDojo attack success of 5%/1% and CyBench unguided success of 39% show some agentic interaction and injection-resilience evidence, but these are narrow security evaluations; no general tool-use benchmark was verified. Source: xAI's Grok 4.1 model card.
- **Reasoning: 82/100.** The xAI-reported LMArena standings (1,483 Elo Thinking, 1,465 Non-Thinking) support strong conversational preference, but are not a direct reasoning test; no GPQA, HLE, MRCR, or Intelligence Index result was verified. Source: xAI's Grok 4.1 release report and model card.
- **Context window: 50/100.** No exact-model context specification or long-context retrieval score was published in the verified xAI sources. BenchLM's uncorroborated 1M listing is not used; 50 is a neutral, low-confidence placeholder for missing evidence, not a measured context score. Sources: xAI model card and current developer model catalog; BenchLM listing noted as unverified.
- **Multimodal: 60/100.** FigQA 34% supports image/figure understanding, placing the model in the image-input band; no audio/video capability was verified. Source: xAI's Grok 4.1 model card.
- **Coding: 50/100.** No general software-coding benchmark was verified. CyBench 39% is cyber CTF performance and is not substituted for SWE-bench or Terminal-Bench; 50 is a neutral, low-confidence placeholder pending a direct coding evaluation. Sources: xAI model card and the model-specific benchmark searches; BenchLM has no general coding result.
- **Cost efficiency: 50/100.** No model-specific API rate or consumer quota was published in the verified xAI documentation, so cost efficiency cannot be established; 50 is a neutral placeholder, not a claim of mid-priced service. Source: xAI's current developer model and pricing pages.
- **Overall Score: 61/100.** Half-up mean of the five quality dimensions: `(65 + 82 + 50 + 60 + 50) / 5 = 61.4`, rounded to **61**. Treat this as provisional and low-confidence because context and general coding evidence are absent; the available evidence best supports a high conversational-preference model with limited public technical evaluation.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Independent public research across xAI's launch report, its six-page model card, current xAI developer documentation, BenchLM, and the linked ResearchClawBench primary page. Vendor-reported preference, safety, dual-use, and benchmark data are separated; disputed aggregator data is not used. Scores are normalized interpretations, with neutral placeholders explicitly marked where exact-model evidence is missing.
- Sources: [xAI Grok 4.1 launch report](https://x.ai/news/grok-4-1); [xAI Grok 4.1 model card (PDF)](https://data.x.ai/2025-11-17-grok-4-1-model-card.pdf); [xAI current developer model catalog](https://docs.x.ai/developers/models); [xAI current API pricing](https://docs.x.ai/developers/pricing); [BenchLM Grok 4.1 sourced-results page](https://benchlm.ai/models/grok-4-1); [ResearchClawBench primary leaderboard](https://internscience.github.io/ResearchClawBench-Home/).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
