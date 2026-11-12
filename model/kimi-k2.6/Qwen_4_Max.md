# Kimi K2.6 — findings by Qwen 4 Max

- Source: Vendor (Moonshot AI) + independent trackers; subject slug `kimi-k2.6`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Kimi K2.6 (`kimi-k2.6`)
- **Short description:** Moonshot's open-source native-multimodal agentic model — "state-of-the-art coding, long-horizon execution, and agent swarm capabilities"; a post-training refresh of K2.5 (identical architecture/parameter count per press) focused on long-horizon reliability, coding-driven design, and proactive 24/7 agents.
- **Provider/access:** Open weights on HF (`moonshotai/Kimi-K2.6`, **Modified MIT**, native INT4 quantization like K2-Thinking); Kimi.ai, Kimi App, Moonshot API, Kimi Code; 9 tracked API providers (DeepInfra, Lambda, OpenCode $0.95/$4.00 cache $0.16, LLM Gateway from $0.80/$3.40); Kimi Vendor Verifier (KVV) for third-party accuracy. Agent Swarm scales to **300 sub-agents / 4,000 coordinated steps** (K2.5: 100/1,500); Claw Groups research preview.
- **Release/knowledge:** Released **April 21 2026** (kili; DeepInfra says April 2026; AA April 2026). **Deprecated — AA banner names Kimi K3** (July 16 2026) as successor; OpenCode retired K2.6's predecessor family on its own schedule. Knowledge cutoff not published.
- **IDs:** `kimi-k2.6`; HF `moonshotai/Kimi-K2.6`. Distinct from K2.5, K2.7-Code, K3, K3.1-Pro.
- **Context window:** 256K (HF/AA; vendor evals run at 262,144). HLE-tools generation up to 262,144 with 49,152/step; coding evals 10-run averages.
- **Modalities:** Text + image + video in (AA; native multimodal, MoonViT 400M vision encoder); text out.
- **Pricing (as of 2026-11-12, per 1M tokens):** AA headline **$0.95 in / $4.00 out, 83% cache discount** (class medians $0.43/$1.84 — expensive for open weights); OpenCode $0.95/$4.00 cache read $0.16; LLM Gateway from $0.80/$3.40. Self-host under Modified MIT.
- **Architecture:** MoE **1T total / 32B active**; 61 layers (1 dense), MLA attention (64 heads, hidden 7168), 384 experts (8 selected + 1 shared, expert hidden 2048), SwiGLU, vocab 160K, MoonViT 400M. Thinking mode (AA tracks reasoning); temp 1.0/top-p 1.0 vendor protocol.

### Raw benchmarks found

Vendor-reported (HF card + tech blog; thinking on, 262,144 ctx, coding avg@10, vision avg@3; peers GPT-5.4 xhigh / Opus 4.6 max / Gemini 3.1 Pro high / K2.5):
- Agentic: HLE-Full tools 54.0 (beats GPT-5.4 52.1, Opus 4.6 53.0), BrowseComp 83.2 (**Agent Swarm 86.3**), DeepSearchQA 92.5 f1 / 83.0 acc, WideSearch 80.8 item-f1, Toolathlon 50.0, MCPMark 55.9, Claw-Eval 62.3 pass^3 / 80.9 pass@3 (v1.1), APEX-Agents 27.9 (452-task subset), OSWorld-Verified 73.1.
- Coding: TB2.0 Terminus-2 66.7, SWE-Pro 58.6 (beats GPT-5.4 57.7), SWE-Multilingual 76.7, SWE-V 80.2, SciCode 52.2, OJBench python 60.6, LCB v6 89.6.
- Reasoning: HLE-Full 34.7 no-tools (text-only subset 36.4 / 55.5 tools), AIME 2026 96.4, HMMT Feb 2026 92.7, IMO-AnswerBench 86.0, GPQA-D 90.5.
- Vision: MMMU-Pro 79.4 / 80.1 Python, CharXiv RQ 80.4 / 86.7 Python, MathVision 87.4 / 93.2 Python, BabyVision 39.8 / 68.5 Python, V* 96.9 Python.
- Demos: 12h Zig inference optimization (4,000+ tool calls, ~15→193 tok/s, ~20% faster than LM Studio); 13h exchange-core overhaul (1,000+ calls, 4,000+ lines, +185% medium throughput); 5-day autonomous RL-infra ops agent. Partners: CodeBuddy +12% codegen / 96.6% tool success; Vercel +50% Next.js bench; Augment/OpenCode/Qoder/Ollama endorsements.

Independent runs:
- Artificial Analysis (reasoning; deprecated — index N/A live, historical carried): **Intelligence Index 27.0 (historical)**, GPQA-D 91.1, AA-HLE 37.5, LCR 81.0, CritPt 8.0, τ² 95.9, TB-Hard 43.9, IFBench 76.0, Agentic 22.1, GDPval-AA 1115 (normalized 26.9%), APEX-Agents-AA 28.5, Coding 61.8, SciCode 51.5, MMMU-Pro 79.4, Omniscience +5.3 (accuracy 32.6, hallucination 40.5). Performance: **35 tok/s, TTFT 83.08s** (slow).
- Vals AI: SWE 76.2, TB2.1 53.6, LCB 86.8, GPQA 89.1, MMLU-Pro 87.6, Vibe 37.89. Epoch FM v2: 57.193 / Tier-4 25.641. CursorBench 3.1 47.6; Gert 56.82; OSWorld 2.0 4.6; ResearchClawBench 18.0; Design Arena 1266.
- BenchLM aggregate: 57.41/100, **#59 of 1026** (62/815 rows, partial coverage).

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 83.2 (Swarm 86.3), DeepSearchQA 92.5, WideSearch 80.8, τ² 95.9, OSWorld-V 73.1, Claw-Eval 62.3 — strong search/swarm orchestration; Toolathlon 50.0, MCPMark 55.9, AA Agentic 22.1, GDPval 1115 (26.9%), APEX 27.9 and OSWorld 2.0 4.6 cap the general-agentic tier.
- **Reasoning: 80/100.** AIME26 96.4, HMMT 92.7, IMO-AnswerBench 86.0, GPQA 90.5–91.1, HLE-Full tools 54.0 (beats GPT-5.4/Opus 4.6), FM v2 57.2/25.6, Omniscience +5.3 with 40.5% hallucination — strong math/knowledge; CritPt 8.0 and HLE no-tools 34.7 keep it below the 84+ frontier tier.
- **Context window: 76/100.** 256K with LCR 81.0 (AA) — good retrieval but a quarter of the 1M tier; no surcharge; vendor long-horizon demos rely on context-management (discard-all) strategies rather than raw window.
- **Multimodal: 79/100.** Native image+video (MoonViT): MMMU-Pro 79.4/80.1, CharXiv 86.7 Python, MathVision 93.2 Python, V* 96.9 Python; BabyVision 39.8/68.5 weak; no audio; no independent video evals published.
- **Coding: 82/100.** SWE-Pro 58.6 (beats GPT-5.4), SWE-V 80.2, SWE-Multilingual 76.7, LCB v6 89.6, TB2.0 66.7, OJBench 60.6, plus demonstrated 12–13h autonomous engineering runs — the model's headline strength; Vals SWE 76.2/TB2.1 53.6 and Vibe 37.89 temper the vendor harness numbers.
- **Cost efficiency: 78/100.** $0.95/$4.00 with 83% cache — expensive vs open-weights medians ($0.43/$1.84) and vs K2.5 ($0.60/$3.00); 35 tok/s and 83.08s TTFT are slow; Modified MIT + native INT4 self-hosting and cheaper third-party hosts ($0.80/$3.40) partially offset; deprecated.
- **Overall Score: 79.0/100.** Mean of the five quality dimensions (Cost excluded): (78+80+76+79+82)/5 = 79.0. A coding/long-horizon specialist that matched GPT-5.4-era flagships on SWE-Pro and HLE-tools at open-weights prices — above Qwen3.7-Plus (79.4 parity) on coding, below MiniMax M3 (81.0) on agentic breadth and K3 (85.6) overall; now deprecated in favor of K3.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Moonshot HF model card + official tech blog, Artificial Analysis live deprecation page, BenchLM, Vals/Epoch/Cursor via trackers, Lambda/DeepInfra/LLM Gateway/kili snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: MCP benchmark (vendor MCPMark 55.9 vs BenchLM's "MCP Atlas" label — same number, different benchmark name); APEX-Agents (27.9 vendor 452-task subset vs 28.5 AA); HLE (34.7 full no-tools vs 36.4/55.5 text-only subset vs 54.0 full tools vs 37.5 AA); GPQA (90.5 vendor vs 91.1 AA vs 89.1 Vals); SWE-V (80.2 vendor in-house harness vs 76.2 Vals); TB2.0 66.7 vendor vs TB2.1 53.6 Vals (different versions); context (256K HF/AA vs 262,144 eval setting); pricing ($0.95/$4.00 AA/OpenCode vs $0.80/$3.40 LLM Gateway); release (April 21 kili vs April 2026 AA/DeepInfra); AA index (N/A live deprecated vs 27.0 historical).
- Reference URLs:
  - [Kimi K2.6: Advancing Open-Source Coding — Moonshot AI tech blog](https://www.kimi.ai/blog/kimi-k2-6)
  - [Kimi-K2.6 model card — Hugging Face](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Kimi K2.6 (Reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/kimi-k2-6)
  - [Kimi K2.6 Benchmark Scores — BenchLM](https://benchlm.ai/models/kimi-k2-6)
  - [Kimi K2.6 — Lambda Inference](https://lambda.ai/inference-models/moonshotai/kimi-k2.6)
  - [Kimi K2.6 Pricing Guide — DeepInfra](https://deepinfra.com/blog/kimi-k2-6-pricing-guide-deployment-tradeoffs)
  - [Kimi K2.6 — LLM Gateway](https://llmgateway.io/models/kimi-k2.6)
  - [Kimi K2.6: What This Open-Weight Model Actually Means — Kili Technology](https://kili-technology.com/blog/data-story-kimi-k2-6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.