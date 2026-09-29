# DeepSeek V4.1 Flash — findings by Pixel Canary

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`, API model `deepseek-flash`), OpenCode partner listing `opencode/deepseek-v4.1-flash`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash (smallest model of the V4 architecture family; **no OpenCode Zen Free ID** — `opencode/deepseek-v4-flash-free` is the retired predecessor tier)
- **Short description:** DeepSeek's September 2026 asymmetric encoder–decoder MoE: 552B total parameters but only **8B active on input (prefill) and 16B on output (decode)**, native visual understanding, a 1M window with 384K output, and a KV cache one-quarter the HBM / one-eighth the SSD of the previous generation. DeepSeek markets it as beating its own flagship and is retiring V4-Pro in its favor — from 04:00 UTC 2026-09-14 all `deepseek-v4-pro` requests route to V4.1-Flash at V4.1-Flash rates.
- **Provider / access:** DeepSeek API (`deepseek-flash`; `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` temporarily reroute here), Baseten (`deepseek-ai/DeepSeek-V4.1-Flash`), OpenCode (`opencode/deepseek-v4.1-flash`) and OpenCode Go (`opencode-go/deepseek-v4.1-flash`), plus Fireworks / Novita-style hosts; DeepSeek names OpenCode and WorkBuddy/CodeBuddy as official launch partners. OpenAI-compatible Chat Completions with tool calling and structured output.
- **Release / knowledge:** Released **2026-09-10** (DeepSeek API Docs news); new pricing effective the same moment; knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4.1-flash` (repo ID), `deepseek-flash` (vendor), `deepseek-ai/DeepSeek-V4.1-Flash` (Hugging Face weights).
- **Context window:** **1,000,000 input tokens / 384,000 max output** (models.dev `opencode` and `opencode-go` entries; LLMLearner concurs). Baseten's hosted copy lists 1,048,576 / 32,768 — the output cap is host-dependent.
- **Modalities:** Text + image in (native visual understanding); text out. Reasoning: on by default (thinking effort exposed as `Max` / `Thinking High` in published rows). Tool calling, function calling, structured output all supported.
- **Pricing (as of 2026-09-29):** DeepSeek standard text tier **$0.15 / 1M input, $0.60 / 1M output, $0.003 cached input** (effective 2026-09-10), with **peak/off-peak metering — off-peak is 50% of peak**. OpenCode resells at $0.30 / $1.20 with $0.006 cache reads; OpenCode Go at $0.15 / $0.60 with $0.003 cache reads; Baseten $0.30 / $1.20. Artificial Analysis measures ≈$0.27 per Intelligence-Index task.
- **Architecture:** 552B-parameter sparse MoE, **MIT-licensed open weights** on Hugging Face, with the DeepSeek V4.1 technical report published alongside; asymmetric causal encoder–decoder design (8B active for input processing, 16B for output generation) plus heavily compressed KV cache.

### Raw benchmarks found

Public rows compiled from the BenchLM profile `deepseek-v4-1-flash` (updated 2026-09-28) and LLMLearner's sourced snapshot (45 results); BenchLM composite **55.7/100, rank #55 / 512**.

Agentic / tool use:

- Terminal-Bench 2.1 (Max, with tools): **90.6%** — #3 of 51 on that leaderboard
- Terminal-Bench 3.0: **30.0%**; Terminal-Bench 4.0: **26.8%** (#17/54; Artificial Analysis harness 26.8%)
- GDPval-AA v2 (with tools): **1632 Elo** (#10/14); BenchLM lists the same row at 55.0% normalized / Elo 1600
- AutomationBench: **54.8** — **#1 of 23**; AutomationBench-AA: **68.9**
- Agents' Last Exam (with tools): **31.8%** (#7/22); CyberGym: **88.1%** (#3/11); ExploitGym: 15.3%
- SEC-Bench Pro: **62.8%** (#3/5); Harvey Legal Agent Bench 6.7; Legal Research Bench 41.4; Public Benefits Bench v1.1 64.3; SAGE 47.9

Coding:

- DeepSWE: **74.2%** (#2 of 43); NL2Repo-Bench: **65.4%** (#2 of 16)
- CodeForces (Max, no tools): **3471** — **#1 of 16**
- Vibe Code Bench v1.1: **84.7** (#10/58); Code Migration (Thinking High): 45.6; Program Bench: 20.3; IOI Vals v2: 40.3
- SciCode: 51.9 (#32/87); AA-SciCode: 51.9; WeirdML v3: 0.059 (#12/13)

Reasoning / knowledge:

- GPQA Diamond (Max, no tools): **90.9%** (#32/187); HLE with tools: **63.9%** (#5 of 131); AA-HLE (no tools): 39.2%
- Artificial Analysis Intelligence Index: **39.5** (max effort ≈ 39, ~$0.27 per task); ECI 155 (#28/167); SuperCLUE 71.8 (#2/13)
- CritPt: 14.3 (#33/122); MathArena Apex: **65.6** (#4/15); ProofBench v1.1 (Lean 4): 54.0; MysteryMechanism: 21.2
- AA-Omniscience: Accuracy **46.4%**, Hallucination Rate **96.5%**, Omniscience Index **−5.3** (the single biggest drag on its BenchLM composite)
- SimpleBench: 66.7; Creative Writing 1540 (#51/110)

Long context:

- AA-LCR (long-context reasoning): **84.0%** (#6 of 11); MRCRv2 / RULER / GraphWalks: no verified public score found for this exact ID

Multimodal:

- BabyVision (with tools): **89.6%** (#3 of 8); Chartography (with tools): **78.9%** (#5/9); MMMU-Pro: 77.0 (#38/117); ZeroBench Main: 49.0 (#3/5); GDP.pdf: 12.8 (#36/80)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found for this exact ID
- Video / audio benchmarks: none — the API accepts text + image only

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 90.6% (#3/51), AutomationBench #1/23 and CyberGym 88.1% (#3/11) make it the strongest agent tier at this price, and GDPval-AA 1632 Elo is flagship-adjacent knowledge-work; capped because it falls apart on the hardest agentic suites — Terminal-Bench 4.0 26.8% (#17/54), Terminal-Bench 3.0 30.0%, Agents' Last Exam 31.8%.
- **Reasoning: 72/100.** HLE-with-tools 63.9% (#5/131), GPQA Diamond 90.9% and MathArena Apex 65.6% (#4/15) are genuinely strong, but the AA Intelligence Index is only 39.5, CritPt 14.3%, and the AA-Omniscience pair is pathological: 46.4% accuracy against a **96.5% hallucination rate** (Omniscience Index −5.3) — it answers almost every unanswerable question.
- **Context window: 88/100.** 1M input with a class-leading **384K output** ceiling and AA-LCR 84.0% (#6/11), plus a KV cache at 1/4 the HBM and 1/8 the SSD of the prior generation that makes the window cheap to actually use; capped because no MRCRv2/RULER/GraphWalks retrieval-depth curve is published, and third-party hosts cap output far lower (Baseten 32K).
- **Multimodal: 68/100.** Native visual understanding is strong for its size — BabyVision 89.6% (#3/8), Chartography 78.9% (#5/9) — but text + image is the entire input surface (no video, no audio, no PDF), text-only output, and document-reasoning on GDP.pdf is weak at 12.8%.
- **Coding: 86/100.** DeepSWE 74.2% (#2/43), NL2Repo-Bench 65.4% (#2/16), CodeForces 3471 (#1/16) and Vibe Code Bench 84.7 put it above every open-weight peer and above DeepSeek's own retired V4-Pro flagship; capped because SWE-bench Verified/Pro are unpublished and Terminal-Bench 4.0 (26.8%) shows the strength is harness-dependent.
- **Cost efficiency: 96/100.** $0.15 / $0.60 per 1M with $0.003 cache reads and **off-peak rates at 50% of peak**, ≈$0.27 per AA Intelligence-Index task, and MIT-licensed open weights for free self-hosting — the cheapest credible frontier-adjacent model in the repo; capped only because there is no OpenCode Zen Free ID for this exact ID (a $0 tier would be 100).
- **Overall Score: 79.2/100.** (82 + 72 + 88 + 68 + 86) / 5 = 79.2 — best fit as a high-throughput agentic coding and tool-use workhorse where output volume and unit economics dominate; not a model to trust for unsupervised factual answers.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (DeepSeek API Docs release note "DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient" 2026-09-10, LLMLearner sourced benchmark snapshot, BenchLM profile `deepseek-v4-1-flash` refreshed 2026-09-28, models.dev pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
