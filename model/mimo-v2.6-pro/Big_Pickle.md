# Xiaomi MiMo-V2.6-Pro — findings by Big Pickle

- Source: Xiaomi (MiMo Open Platform) `mimo-v2.6-pro`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.6-Pro-RL (API ID `mimo-v2.6-pro`; weights repo `XiaomiMiMo/MiMo-V2.6-Pro-RL`). Flagship checkpoint of the MiMo-V2.6 series, trained in the same 6-day mixed-RL run as `mimo-v2.6-flash` but as a separate, ~3.3x-larger model — not an alias of it. The 9B `MiMo-V2.6-Distill-Qwen-9B` is a different, much smaller model and is not covered here.
- **Short description:** Xiaomi's strongest open-weight natively omnimodal (text/image/video/audio in, text out) sparse-MoE model, released 2026-09-22 as the capability tier of the MiMo-V2.6 line. The stated design goal was "scaling reinforcement learning toward self-improvement" — one mixed RL run across coding, general agents, visual and cybersecurity rather than per-domain runs. Main use case: long-horizon agent and coding-agent work at 1M context where quality matters more than per-token cost. MIT weights mean it can be self-hosted, but the 1.02T-parameter footprint makes that a datacenter job, not a single-GPU one.
- **Provider / access:** Xiaomi MiMo Open Platform — `POST https://api.xiaomimimo.com/v1/chat/completions` with `model: "mimo-v2.6-pro"` (OpenAI Chat Completions; a Responses API and an Anthropic-compatible route are also documented). Also on Xiaomi AI Studio, MiMo Code, MiMo Desktop, the MiMo Batch API (50% of real-time rates) and OpenRouter. Thinking is toggleable; recommended sampling `temperature=1.0`, `top_p=0.95`.
- **Release / knowledge:** released 2026-09-22 (weights + technical report open-sourced same day; Vals AI dates the release 2026-09-21). Knowledge cutoff not disclosed for this checkpoint.
- **IDs:** `mimo-v2.6-pro` (Xiaomi platform, all-lowercase), `xiaomi/mimo-v2.6-pro` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face weights).
- **Context window:** 1,048,576 tokens (1M) total; max output 128k. Verified two ways — Vals AI lists a 1M window with `max output tokens` capped at 128,000, and the official model card's architecture table states `Max Context Length: 1M`.
- **Modalities:** text, image, video and audio in; text out; reasoning yes; tool calls yes (`--tool-call-parser mimo`, `--enable-auto-tool-choice`); JSON / structured output exposed on the platform. Note: Vals AI's harness lists image input as supported but **video input as not supported**, so the omni claim is vendor-documented rather than independently reproduced for video.
- **Pricing (as of 2026-09-28):** $0.43 / $0.87 per 1M fresh input / output tokens (Vals AI quotes $0.435 in / $0.87 out). A cached-input rate is **not disclosed** for this tier. Batch API is 50% of real-time rates. Paid tier — no free quota found, so this is a ~2.2x price premium over the Flash tier ($0.14 / $0.28) for roughly 2.8x the activated parameters.
- **Architecture:** sparse MoE, 1.02T total / 42B activated parameters, 70 layers (60 sliding-window-attention + 10 global-attention, 128-token window), hidden size 6144, 384 routed experts with 8 active, 5-layer SWA MTP speculative decoder (DFlash-style, 7 tokens per draft pass). Omnimodal front end: 681M MiMo ViT vision encoder (28 layers: 24 SWA + 4 full), 308M AudioTokenizer (20 RVQ codebooks) + 127M audio patch encoder. MIT license — open weights, commercial self-hosting permitted. RL stack: asynchronous GRPO on 1,568 prompts x 16 rollouts per step, with Groupwise Reward Synthesis and Groupwise Advantage Redistribution for the self-improvement loop, plus Multi-Prefix Multi-Teacher On-Policy Distillation.

### Raw benchmarks found

Agent / tool use:

- Toolathlon-Verified: **76.9%** (official model card; also logged on the HF `hkust-nlp` eval-result leaderboard)
- Terminal-Bench 2.1: **89.9%** (official model card; HF eval-result leaderboard, identical value) — but **67.79%** on Vals AI (#33 of 73), a 22-point harness spread
- Terminal-Bench 4.0: **34.9%** official card / **34.8%** AA-sourced; **24.75% ±3.07** on Vals AI (#12 of 37)
- Terminal-Bench Science: **2.86% ±2.01** (Vals AI, #24 of 33) — the model's single worst cell, below Flash's 5.71%
- GDPval-AA 2.1: **1673 Elo** (official model card; BenchLM carries normalized **58.7%**); AA Briefcase **1517**, GDP.pdf **19.2%** (Artificial Analysis)
- AutomationBench v1.0.6: **53.1%** official card; **58.6%** on the AA-run variant (Artificial Analysis)
- OSWorld-Verified: **82.0%** (official model card) — trails Claude Opus 5 (83.4), GPT-5.6 Sol (83.0) and Claude Fable 5 (86.0) in Xiaomi's own comparison table, so desktop-computer use is a parity result, not a win
- Agents' Last Exam: **31.6%** (official model card) — tied with Claude Opus 5
- JobBench: **62.0%** (official model card)
- Vals Index (composite across Vals' suite): **59.47% ±1.18**, **#18 of 66** (the vendor update text phrases it as #17 of 65), at **$0.389 cost per test** and 52 min 20 s mean latency (Vals AI). Sits within a point of Grok 4.7 (60.22%) and GPT-5.6 Luna (59.88%), and is the **top-scoring open-weight model on the Index** alongside Flash.
- Domain agents: Finance Agent v2 **57.34%** (#12/70), Tax Agent Bench **64.94%** (#16/61), Legal Research Bench **47.12%** (#12/69, matching Grok 4.7), SAGE **45.05%** (#38/88), Harvey's Legal Agent **10.83%** (#11/70), Public Benefits Bench v1.1 **68.94%** (**#5 of 43**), ProofBench v1.1 **70.00%** (#13/41), MedCode **44.97%** (#35/102), MedScribe **88.31%** (#11/104), EMB **62.86%** (#24/66) (all Vals AI)
- SRE Bench: **3.05% ±1.06** (#10 of 14) (Vals AI) — a near-total failure domain, and the clearest argument against trusting this model unattended on infrastructure work
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this checkpoint
- Claw-Eval / ClawProBench / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.3%** (BenchLM, AA-sourced) — the highest AA Intelligence Index of any open-weight model I checked, ahead of DeepSeek V4.1 Flash and Kimi K3, and roughly 8 points above the Flash tier (37.9)
- HLE (AA-HLE): **49.4%** (Artificial Analysis) — a large step over Flash's 35.1%
- AA-LCR: **86.3%** (Artificial Analysis) — the strongest published long-context-comprehension evidence for this checkpoint
- CritPt: **26.6%**; MLCR-AA: **18.3%** (Artificial Analysis) — both more than double the Flash tier
- Omniscience Accuracy / Hallucination Rate: **34.8% / 40.6%**, Omniscience Index **8.4** (Artificial Analysis) — a much better right/wrong ratio than Flash (27.0% / 54.4%, index -12.7), but the hallucination rate is still the model's weakest axis
- IOI **39.33% ±2.41** (#29/36), MysteryMechanism **15.31% ±2.42** (#18/19), BioMysteryBench: **no verified public score found** (Vals AI has no row)
- GPQA Diamond / MMLU-Pro / AIME 2025: **no verified public score found** for this checkpoint. The 83.7% GPQA figure circulating online belongs to the *earlier* MiMo-V2-Flash (Dec 2025) and must not be carried over; the V2.6 card omits GPQA entirely.

Coding:

- DeepSWE v1.1: **71.9%** (official model card, mini-swe-agent harness; also logged on the HF `datacurve/deep-swe` eval-result leaderboard) — 4 points above Flash and within 2.1 of Claude Opus 5 (74.0)
- MiMo Code Bench: **63.2%** (official model card)
- ProgramBench: **26.5%** official model card vs **0.50% ±0.50** on Vals AI (#15/53) — a 26-point harness spread; Vals notes a 69.82% *partial* pass rate, so read this as "unreliable at whole-file formal program synthesis" rather than either number being a typo
- Vibe Code Bench v1.1: **85.22% ±3.39** (**#10 of 104**) (Vals AI) — real shipped-app quality, a genuine strength
- Code Migration (long-horizon repo work): **43.01% ±4.32** (#21/69) (Vals AI)
- AA-SciCode: **60.9%** (Artificial Analysis) — above the 55% frontier line, unlike Flash's 51.3%
- MiMo VisualCoding: **72.3%** official card / **72.4%** in the MiMo-V2.6 release note (Flash 71.5, Claude Opus 5 70.0, GPT-5.6 Sol 73.4)
- **SWE-bench Verified: 66.2%** (MiMo-V2.6 release note, "increased from 61.1") — the previously-missing headline coding number, published in Xiaomi's own V2.6 announcement. Mid-tier rather than frontier: Claude Opus 5 posts 96%, Claude Fable 5 95%, Gemini 3.1 Pro 80.6%, and DeepSeek-V4-Pro-Max 80.6%. Epoch AI currently flags SWE-bench Verified and DeepSWE v1.1 as flawed because of scoring details — treat both as directional.
- MiMo Cyber Bench: **47.0%** (release note, up from 31.3) — a cybersecurity-agent result that had no row in the card's headline table and is new in the re-run.
- LiveCodeBench / SWE-Pro: **no verified public score found**
- Terminal-Bench Science and SRE Bench (above) are the counterweight: strong code generation, weak at operating/debugging real systems

Long context:

- 1M window is claimed and configured, and AA-LCR 86.3% is real long-context-comprehension evidence — but **no verified 1M retrieval measurement (MRCR / RULER / GraphWalks at 512K+) published for this checkpoint**. Vals AI notes both V2.6 models "hit the 128k output cap on a handful of long agentic tasks (most often on Code Migration), which count as failures", which is consistent with Code Migration scoring only 43.01%.
- Serving reality check: 52 min 20 s mean latency across the Vals Index run, and Vals explicitly attributes Pro's Terminal-Bench 2.1 failures to "long reasoning turns that run out the task clock" — Pro thinks longer than Flash and sometimes does not finish. That is a real operational cost of the 1M window at this price tier.
- Self-hosting is technically open (MIT) but the 1.02T-parameter footprint means the practical deployment is a multi-node SGLang/vLLM cluster, not a workstation.

### Normalized scores (1–100)

- **Tool use: 87/100.** The strongest open-weight agentic profile I verified: Terminal-Bench 2.1 89.9%, OSWorld-Verified 82.0%, Toolathlon-Verified 76.9%, GDPval-AA 1673 Elo, AutomationBench 53.1%, Agents' Last Exam 31.6% (tied with Claude Opus 5), and a Vals Index 59.47% placing it within a point of Grok 4.7 and GPT-5.6 Luna while #1 among open weights. Held below 90 by two hard failures — SRE Bench **3.05%** and Terminal-Bench Science **2.86%** — plus a 22-point Terminal-Bench 2.1 harness spread (89.9% official vs 67.79% on Vals) and no Tau3/Tau2 figure at all. The tool-use ceiling is real but domain-specific.
- **Reasoning: 84/100.** AA Intelligence Index 46.3 is the best open-weight reading available, HLE 49.4% is a genuine step up, and AA-LCR 86.3% / CritPt 26.6% / MLCR 18.3% all more than double the Flash tier. Capped by grounding: a 40.6% hallucination rate on closed-book factual recall (Omniscience Index 8.4), no GPQA Diamond or MMLU-Pro figure, and MysteryMechanism 15.31%. Strong at reasoning over supplied material; still not trustworthy as a closed-book oracle.
- **Context window: 95/100.** 1,048,576 tokens with 128k max output is top-tier on paper, and AA-LCR 86.3% is the best independent long-context evidence in this family. Not 100 because no verified ≥98% retrieval-at-512K+ measurement exists, and the 128k output cap produced counted failures on the longest agentic tasks. The 128k cap is a caveat, not a separate penalty.
- **Multimodal: 93/100.** Natively omnimodal in one checkpoint — text, image, video and audio in, with a 681M ViT and a real audio tokenizer stack, which the methodology places in the 90–100 band. MiMo VisualCoding 72.3% and Design Arena Website 1325 show the vision path works, and it edges out the Flash tier. Short of the top of the band because Vals AI's harness could not pass video input, so the omni claim remains vendor-documented for that modality, and no MMMU-Pro row was published for Pro specifically.
- **Coding: 88/100.** DeepSWE v1.1 71.9% (within 2.1 of Claude Opus 5), **SWE-bench Verified 66.2%**, Vibe Code Bench 85.22% (#10/104), AA-SciCode 60.9%, MiMo Code Bench 63.2% and MiMo Cyber Bench 47.0% form a genuinely frontier-adjacent set spanning agentic, whole-repo and security work. Held out of the 90–100 band by ProgramBench collapsing to 0.50% on Vals (against 26.5% official — a 26-point harness spread), Code Migration at 43.01% showing real strain on long repo-scale edits, and the SRE (3.05%) / Terminal-Bench Science (2.86%) collapses. The 66.2% SWE-bench Verified is the honest ceiling marker: real, published, and roughly 30 points behind the leaders.
- **Cost efficiency: 88/100.** $0.43 in / $0.87 out per 1M lands essentially on the ≈88 reference band, roughly 2.2x the Flash tier, with no published cached-input rate to soften it. Vals independently measures $0.389 per test while scoring #18/66 on accuracy — excellent value, just not the best in the field (Flash is #17 at $0.197). MIT weights mean the same per-token economics apply to a self-hosted deployment, though at 1.02T parameters that saving is theoretical for most teams. Not 90+ — it is a paid tier, not $0.
- **Overall Score: 89.4/100.** Half-up mean of the five quality dims: (87 + 84 + 95 + 93 + 88) / 5 = 89.4. Best fit: the strongest open-weight pick for long-horizon agent and coding-agent work that needs real image/video/audio input and a 1M window, and the only one of this family I would put near factual-precision-sensitive pipelines — but never unattended on infrastructure (SRE 3.05%) or formal program synthesis (ProgramBench 0.50%), and drop to `mimo-v2.6-flash` when the bill matters more than the last 5 points of quality.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Xiaomi MiMo docs/news including the MiMo-V2.6 release note, the official `XiaomiMiMo/MiMo-V2.6-Pro-RL` Hugging Face model card, Vals AI model page and Sep 22 2026 update, BenchLM model page, Artificial Analysis-sourced rows, OpenRouter API docs, Epoch AI benchmark caveats). Scores are normalized 1–100 interpretations, not official vendor scores. Numbers belonging to the Flash tier, MiMo-V2.5-Pro or the earlier MiMo-V2-Flash were deliberately excluded except where explicitly labelled as comparisons.
- **Verification pass (same day, 2026-09-28):** the report was re-checked against Xiaomi's MiMo-V2.6 release note and one genuine gap was found and corrected. The earlier pass recorded "SWE-bench Verified: no verified public score found" — **Xiaomi does publish it, at 66.2% (up from 61.1)**, alongside **MiMo Cyber Bench 47.0% (up from 31.3)**, neither of which appeared on the Hugging Face model card that the first pass worked from. Coding therefore moved **86 → 88** and Overall **89.0 → 89.4**. Two things were checked and found *not* to be errors: the release note's "Terminal Bench 2.1 from 37.1 to 52.8" belongs to the **Flash** tier, not Pro (Pro's official figure is 89.9%), and the "MiMo-V2 Series deprecated June 30" banner on Xiaomi's docs site applies to the **V2 / V2-Pro line**, not to V2.5 or V2.6, so this checkpoint is current and not end-of-life.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
