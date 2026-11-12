# GPT-5.5 — findings by Qwen 4 Max

- Source: OpenAI/gpt-5.5
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's April 23, 2026 flagship — "a new class of intelligence for coding and professional work", shipped exactly one week after Claude Opus 4.7. Five-level reasoning effort (none→xhigh), full 1.05M context, and the broadest OpenAI tool surface (computer_use, apply_patch, skills, code_interpreter, hosted_shell). Strong math/science (GPQA 93.6, FrontierMath v2 T4 72.5) and SWE-V ~82.6, but weak on the newest hard-agent evals (FrontierCode 2.0 22.6, ARC-AGI-3 0.4) and knowledge reliability (AA-Omniscience 20.5, hallucination rate 89.0%).
- **Provider / access:** OpenAI API (`gpt-5.5`, snapshot `gpt-5.5-2026-04-23`), Chat Completions + Responses + Batch; Amazon Bedrock (`openai.gpt-5.5`); ChatGPT Plus/Pro/Business/Enterprise rollout. Preparedness framework (system card via Appwrite): Bio High, Cyber High (up from GPT-5.4), Self-Improvement below High.
- **Release / knowledge:** Released 2026-04-23 (official snapshot + Appwrite + llm-stats agree). Knowledge cutoff **Dec 1, 2025**. Effort: none, low, medium (default), high, xhigh.
- **IDs:** `gpt-5.5` / `gpt-5.5-2026-04-23`; Bedrock `openai.gpt-5.5`; siblings `gpt-5.5-pro` ($30/$180), predecessor `gpt-5.4` ($2.50/$15).
- **Context window:** **1,050,000 tokens**, **128K max output**. MRCR v2: 83.1% (64-128K), 87.5% (128-256K) — no published 1M retrieval row; AA-LCR 84.3. >272K input prompts: **2x input / 1.5x output full-session surcharge** (standard, batch, flex); long-context rate limits 10x lower.
- **Modalities:** Text + image in, text out. MMMU-Pro 81.2 (vendor) / 79.9 (AA); ExtractBench 93.35, ParseBench 66.42. No audio/video.
- **Pricing (as of 2026-11-12):** **$5 in / $0.50 cached / $30 out per 1M** (official). Batch/Flex half price, regional residency +10%. 2x GPT-5.4's rate; cheaper than Opus 4.7 ($5/$25) on input parity but 20% pricier on output.
- **Architecture:** Proprietary, undisclosed. Notable research result: a Lean-verified Ramsey-theory proof contribution (Appwrite/system-card coverage); UI critique in independent review: card-grid generation aesthetics trail rivals.

### Raw benchmarks found

Vendor-reported (OpenAI launch post, via BenchLM's sourced profile + Appwrite analysis):

- Agent/tool: BrowseComp **84.4**, OSWorld-Verified **78.7**, MCP Atlas 75.3, Toolathlon **55.6**, τ²-bench Telecom **98.0**, CyberGym 81.8, LifeVal 77.4, GDPval 84.9% wins-ties (expert comparison)
- Coding: SWE-bench Pro **58.6** (Opus 4.7 64.3 in same table), TB2.0 **82.7** (vendor; leaderboard 82.0)
- Reasoning/knowledge: GPQA-D **93.6**, HLE **52.2** w-tools / **41.4** no-tools, ARC-AGI-2 **85**, FrontierMath legacy T1-3 51.7 / T4 35.4, BioBasicsBench 35.4, OfficeQA Pro 54.1, BixBench 80.5
- Multimodal/context: MMMU-Pro **81.2** / 83.2 w-Python, MRCR v2 83.1 (64-128K) / 87.5 (128-256K)

Independent runs (BenchLM profile, Nov 11):

- AA: Intelligence Index **38.4** (version unstated on profile — NOT comparable with v5.0.1-era scores), AA-HLE 45.8, AA-GPQA 93.5, AA-Omniscience **20.5** (accuracy 58.0, hallucination **89.0%**), AA-LCR 84.3, CritPt 27.1, AA Coding Index 74.9, Agentic Index 37.3, GDPval-AA **1,396 Elo / 42.5% normalized**, AnalystAgent 50.0, EnterpriseOps-Gym 46.6, ITBench 45.8, Tau3 Banking 39.0, TB-Hard 60.6, AA TB2.1 **84.3**, IFBench 75.9, SciCode 55.8, MMMU-Pro 79.9
- Vals AI: SWE-bench **82.6**, TB2.1 76.4, LiveCodeBench 85.3, GPQA-D 93.2, MMLU-Pro 88.1, Vibe Code Bench 69.85
- ARC Prize: ARC-AGI-1 **95.0** (XHigh verified), ARC-AGI-3 **0.4** (semi-private)
- Epoch: FrontierMath v2 T1-3 **85.263**, T4 **72.500**
- Cognition: FrontierCode 1.1 **43.0**, FrontierCode 2.0 **22.6**; CursorBench 3.1 59.2 / 3.2 58.4
- Hard-agent tail: OSWorld 2.0 **13.0**, JobBench 42.7, ApprenticeBench 20, MazeBench 0, ResearchClawBench 17.0, ExploitGym 13.4, PostTrainBench v1.1 27.2
- Other: ExtractBench 93.35 / ParseBench 66.42 (LlamaIndex), React Native Evals 84.7, Gert Labs 72.93, Design Arena 1,252; BenchLM aggregate **68.39/100, #20 of 1026** (89/815 coverage)

### Normalized scores (1–100)

- **Tool use: 84/100.** τ² 98.0, OSWorld-V 78.7, BrowseComp 84.4, MCP Atlas 75.3 and the full computer_use/skills toolset are strong; capped hard by Toolathlon 55.6, GDPval-AA 1,396 (leaders 1,800+), AA Agentic 37.3, OSWorld 2.0 13.0, JobBench 42.7 and MazeBench 0 — the newest long-horizon agent evals expose a clear gap.
- **Reasoning: 88/100.** GPQA 93.6 (AA-confirmed 93.5), FrontierMath v2 T1-3 85.3 / T4 72.5 (Epoch), ARC-1 95.0 verified, ARC-2 85, HLE 52.2 w-tools — frontier math/science; capped by HLE 41.4 no-tools, AA-HLE 45.8, CritPt 27.1, ARC-3 0.4, and AA-Omniscience 20.5 with 89% hallucination rate (knowledge reliability is a real weakness).
- **Context window: 88/100.** 1.05M with 128K output, MRCR v2 87.5 at 128-256K and AA-LCR 84.3; deducted for the >272K 2x/1.5x surcharge, reduced long-context rate limits, and no published 1M-depth retrieval score.
- **Multimodal: 78/100.** Image-in with MMMU-Pro 81.2/79.9 (vendor/AA converge), excellent document extraction (ExtractBench 93.35) and image_generation/code_interpreter tools; no audio/video, ParseBench 66.42 and Design Arena 1,252 show mid-pack visual generation/grounding.
- **Coding: 84/100.** SWE-V 82.6 (Vals), TB2.0 82.0, LiveCodeBench 85.3, AA Coding 74.9, React Native 84.7 — solid production coding; capped by SWE-Pro 58.6 (Opus 4.7 64.3), FrontierCode 2.0 **22.6**, CursorBench ~59, PostTrainBench 27.2 — hard-repo and newest-generation coding trail the frontier badly.
- **Cost efficiency: 52/100.** $5/$30 with 90%-off cache ($0.50), Batch/Flex half-price and Bedrock availability; but 2x GPT-5.4's price, +10% regional, >272K surcharge, and xhigh effort burns reasoning tokens at $30/M — mid-pack frontier economics, far from the value leaders.
- **Overall Score: 84.4/100.** Mean of the five quality dims (84+88+88+78+84)/5 = 84.4. Best-fit: a strong general-purpose professional/coding flagship for math-heavy analysis, document work and mainstream agentic pipelines; avoid it for bleeding-edge hard-agent tasks (FrontierCode 2.0, ARC-3) and knowledge-critical unverified Q&A — and note it was superseded within months by the GPT-5.6/6 families.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI's official developer model page fetched live, BenchLM's 89-row sourced profile fetched live, Appwrite's source-backed launch analysis, llm-stats rate card via search snippet); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: TB2.0 82.7 (vendor) vs 82.0 (leaderboard) vs AA TB2.1 84.3 vs Vals TB2.1 76.4 — different benchmark versions and harnesses; SWE-V 82.6 (Vals) vs vendor SWE-Pro 58.6 are different benchmarks; AA Intelligence Index 38.4 carries no version label on the profile — never compared with v5.0.1-era scores (Fable 5.2 64.6, Sol Max 55); GDPval 84.9% wins-ties (vendor expert comparison) vs GDPval-AA 1,396 Elo (AA) are different metrics. openai.com launch post 403s — vendor rows captured via BenchLM attribution and Appwrite. Identity: GPT-5.5 ≠ GPT-5.5 Pro ≠ GPT-5.4; FrontierCode 1.1 ≠ 2.0; FrontierMath legacy ≠ v2; ARC-AGI-1/2/3 distinct.
- Reference URLs:
  - [GPT-5.5 — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.5)
  - [GPT-5.5 benchmark profile — BenchLM](https://benchlm.ai/models/gpt-5-5)
  - [GPT-5.5 is here: benchmarks, pricing, and what changes — Appwrite](https://appwrite.io/blog/post/gpt-5-5-launch)
  - [Introducing GPT-5.5 — OpenAI (vendor source cited via BenchLM; direct fetch 403)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/gpt-5.5)
  - [Vals AI — GPT-5.5 independent runs](https://www.vals.ai/models/openai_gpt-5.5)
  - [ARC Prize leaderboard](https://arcprize.org/leaderboard)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [GPT-5.5 — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.