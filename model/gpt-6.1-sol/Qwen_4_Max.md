# GPT-6.1 Sol — findings by Qwen 4 Max

- Source: OpenAI/gpt-6.1-sol
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's DevDay (Sep 29, 2026) refresh of the Sol tier — "near-Astra performance for complex work at a lower cost." Replaced GPT-6 Sol just 7 days after that model's Sep 22 launch. Matches or beats GPT-6 Astra on several independent suites (ARC-AGI-2 94.2, FrontierMath v2 Tier-4 100, TB4.1 60.9, GDPval-AA 1,608) at $2/$10 vs Astra's $10/$50; KingBench hands-on places it 3rd/11, just behind Opus 5.5 and Astra. Distinct from GPT-6 Sol (Sep 22) and GPT-5.6 Sol (Jul 9, $4/$20).
- **Provider / access:** OpenAI API (`gpt-6.1-sol`; Responses + Chat Completions + Batch; tool calling requires Responses API), Microsoft Azure, Amazon Bedrock (`openai.gpt-6.1-sol`), Google Cloud (private preview), OpenRouter (incl. EU in-region routing via Azure, $2.20/$11). Codex and ChatGPT Work use a 500K default context; subscription usage has no long-context surcharge. No fine-tuning, no Realtime/Live endpoints.
- **Release / knowledge:** Released 2026-09-29 (DevDay); knowledge cutoff Apr 30, 2026. System-card addendum to the GPT-6 Astra card: Preparedness Framework **Critical in cybersecurity, High in biological/chemical**; same safeguards stack as Astra.
- **IDs:** `gpt-6.1-sol` (default snapshot); Bedrock `openai.gpt-6.1-sol`; OpenRouter `openai/gpt-6.1-sol`.
- **Context window:** 1,050,000 tokens total; **max input 922,000**, max output 128,000. API prompts >272K input tokens are billed 2x input/cache and 1.5x output for the full request (subscription usage exempt). AA-LCR 83.0% but MLCR-AA 38.3%.
- **Modalities:** Text + image in; text out. No audio/video. `reasoning.effort` low / medium (default) / high / xhigh / max. Supported tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search.
- **Pricing (as of 2026-11-11):** $2 in / $10 out per 1M; cached input $0.10 (95% discount), cache writes $2.50 (1.25x). Batch/Flex 50% ($1/$5); Fast mode 2x ($4/$20); Ultrafast 6x ($12/$60); regional processing +10%. AA cost per Intelligence Index task $1.27–1.47 (Max effort) vs ~$3.26 Astra / ~$5.98 Opus 5.5; Low effort $0.16/task.
- **Architecture:** Proprietary, undisclosed (reasoning model; parameter count not published). Weights not available.

### Raw benchmarks found

Agentic / tool use:

- Terminal-Bench 4.1 **60.9%** (tbench.ai leaderboard, independent; GPT-6 Sol was 50.3, GPT-5.6 Sol 38.5); AA Terminal-Bench 4.0 **56.1%** (AA-run)
- GDPval-AA v2.1 **1,608 Elo** / 54.8% normalized (AA leaderboard; above the 1,573 Astra column in Moonshot's Oct card, below Opus 5.5's 1,846–1,866); AA-Briefcase v1.1 **1,555** (Opus 5.5 1,803–1,822, K3.1 Pro 1,678)
- AutomationBench-AA **64.9%** (AA-run; K3.1 Pro 73.3 / Opus 5.5 69.5 in Moonshot's vendor-run table) vs vendor **AutomationBench 36.1%** (OpenAI launch post — a different benchmark, not comparable)
- Terminal-Bench-Science 0.1 **57.0%** (vendor launch; Astra 68.1 / Opus 5.5 63.3 / K3.1 Pro 38.1 in Moonshot's table); AA-AnalystAgent 50.0%; MKA 47.7%; Harvey LAB-AA v1.1 **6.9%** (via Anthropic's Fable 5.2/Mythos 5.2 system card, Nov 9); Hermes Index 57.1% / Hermes Bench 73.9% (Nous Research); MazeBench 17% (ASCII, tools)
- KingBench hands-on (6 practical builds, independent): **5.50/10, 3rd of 11** — behind Opus 5.5 (5.78) and Astra (5.65), ahead of Argon (5.43), Haiku 5.5 (5.42), K3.1 Pro (5.37)

Coding:

- DeepSWE v1.1 **71.9%** (vendor launch; Astra 74.1 / Opus 5.5 74.2 / K3.1 Pro 75.5 in Moonshot's table); FrontierCode 2.0 **39.0%** (Cognition; K3.1 Pro 19.6 — v1.1 scores like Opus 5.5's 54.4 are a different benchmark version)
- ScarfBench 68.4% (IBM Research/Kaggle); AA-SciCode 54.2%; Bug Hunt Bench 44.3 fixes; ExploitGym **35.1%** (system-card addendum; Astra 42.4, K3.1 Pro 20.7)

Reasoning / knowledge:

- ARC-AGI-1 **96.5%**, ARC-AGI-2 **94.2%**, ARC-AGI-3 52.7% (ARC Prize published semi-private results — independent; GPT-5.6 Sol's 92.5 ARC-2 was vendor-run)
- FrontierMath v2 Tiers 1–3 **93.7%**, **Tier 4 100.0%** (Epoch AI leaderboard — independent; GPT-5.6 Sol was 89/83)
- AA-HLE **52.9%**; CritPt 31.7%; AA-Omniscience Index 42.0 (accuracy 61.8%, hallucination rate 51.9%); STEMBench 2.76 (Ulam Oct 28 audit)
- HealthBench 56.7 raw / 58.5 length-adjusted; Professional 64.2 / 67.2 raw; Hard 36.2 (system-card addendum); BioBasicsBench 62.6% (OpenAI wet-lab post)

Multimodal / long context:

- AA-MMMU-Pro **86.0%** (AA-run; Opus 5.5 87.7 / Astra 86.9 in Moonshot's table); ExtractBench **95.31%** but ExtractBench Pro **12%**; ParseBench 69.63% (LlamaIndex Nov 10 snapshots); GDP.pdf 31.0%; Design Arena Website 1,309 (OpenRouter)
- AA-LCR **83.0%**; MLCR-AA **38.3%** (medical multi-hop long context — weak)

Independent aggregates:

- Artificial Analysis Intelligence Index **v5.0.1**: Max **55**, Xhigh 52, High 50, Medium 46, Low 35 — **#12/74** on the release page (BenchLM's Nov 10 leaderboard snapshot: 54.6). v5.0.1 is NOT comparable with v4.3.2-era scores (Opus 5.5 58, K3.1 Pro 55) or the version-unstated 46.5
- AA performance: Max 20.2 min/task (#52/72), 56 tok/s output; Low 1.7 min/task, TTFT 2.71s (an earlier snapshot showed 2.52s); cost/task $1.27 (page summary) vs $1.47 (variant table) — snapshot drift, both labelled; verbosity output/input 3.32
- BenchLM aggregate **84.91/100, #5 of 1020** (partial coverage — 65 of 812 benchmarks — so conservative); only 1 of 114 priced models costs the same or less and scores higher

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.1 60.9 (independent), GDPval-AA 1,608, AA AutomationBench 64.9, KingBench 3rd/11 at 5.50 — genuinely near-Astra; capped by AA-Briefcase 1,555 vs Opus 5.5's ~1,800+, Harvey LAB-AA 6.9, and vendor AutomationBench 36.1 showing SaaS-workflow headroom.
- **Reasoning: 91/100.** Elite verified results: FrontierMath v2 Tier-4 100% and ARC-AGI-2 94.2% (both independent), ARC-AGI-1 96.5; capped by AA-HLE 52.9 (below the Opus/K3.1-with-tools class), CritPt 31.7, STEMBench 2.76, and a 51.9% AA-Omniscience hallucination rate.
- **Context window: 88/100.** 1.05M window with 128K output and AA-LCR 83.0; capped by the 922K input ceiling, the >272K-token 2x/1.5x API surcharge (same mechanics as GPT-5.6 Sol; subscriptions exempt), and MLCR-AA 38.3 multi-hop weakness.
- **Multimodal: 81/100.** Strong image/document reasoning for a text+image model — AA-MMMU-Pro 86.0, ExtractBench 95.31, ParseBench 69.6; capped by ExtractBench Pro 12% on hard extraction, GDP.pdf 31.0, and no audio/video input or media generation.
- **Coding: 89/100.** TB4.1 60.9, DeepSWE 71.9, FrontierCode 2.0 39.0, ScarfBench 68.4, ExploitGym 35.1; capped by DeepSWE slightly under Astra/Opus/K3.1, AA TB4.0 56.1, and no published SWE-bench Verified/Pro figures in the sources read.
- **Cost efficiency: 82/100.** $2/$10 with $0.10 cache reads is 1/5 of Astra's rate; AA cost/task $1.27–1.47 (Max) and $0.16 (Low) undercut every closed frontier peer except Spark-class models; Batch/Flex at $1/$5 and surcharge-free subscriptions help; capped by the >272K API surcharge, Fast/Ultrafast 2x/6x multipliers, and 20.2 min/task at Max effort.
- **Overall Score: 87.8/100.** Mean of the five quality dims (90+91+88+81+89)/5 = 87.8. Best-fit: the value pick for complex agentic/coding work — near-Astra capability at a fifth of the price, with verified elite math/ARC reasoning; Opus 5.5 still leads long-horizon knowledge-work Elo and parametric reliability, and Astra keeps the top Preparedness-cleared cyber capability.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (OpenAI's official model documentation and Deployment Safety Hub addendum, corroborated by BenchLM's per-benchmark sourced profile, Artificial Analysis' independent release analysis, llm-stats' rate card, OpenRouter's provider price matrix, and MindStudio's independent KingBench review); scores are normalized 1–100 interpretations, not official vendor scores. Identity kept distinct: GPT-6.1 Sol (Sep 29) ≠ GPT-6 Sol (Sep 22, TB4.1 50.3) ≠ GPT-5.6 Sol (Jul 9, $4/$20). Conflicts labelled, never averaged: AA Intelligence Index v5.0.1 Max 55 vs v4.3.2-era scores (not comparable) vs BenchLM's 54.6 snapshot; vendor AutomationBench 36.1 vs independent AutomationBench-AA 64.9 (different benchmarks); AA cost/task $1.27 (summary) vs $1.47 (variant table); GDPval-AA 1,608 (current AA snapshot) vs peer columns in Moonshot's Oct card; FrontierCode 2.0 vs v1.1 never mixed. openai.com's launch post returns 403 — vendor launch numbers (DeepSWE 71.9, TB-Science 57.0, AutomationBench 36.1) and system-card numbers (HealthBench family, ExploitGym 35.1) are cited via BenchLM's explicit attributions to those primary documents; ARC Prize, Epoch AI, tbench.ai, Cognition, LlamaIndex, Nous, IBM and Ulam results likewise via BenchLM's sourced rows. OpenRouter's dated snapshot URL 404s; the canonical model page was used.
- Reference URLs:
  - [GPT-6.1 Sol model documentation — OpenAI Developers](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [Addendum to GPT-6 Astra System Card: GPT-6.1 Sol — OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-1-sol)
  - [GPT-6.1 Sol benchmark profile — BenchLM](https://benchlm.ai/models/gpt-6-1-sol)
  - [GPT-6.1 Sol: Release Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/releases/gpt-6-1-sol)
  - [GPT-6.1 Sol Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/gpt-6.1-sol)
  - [OpenAI: GPT-6.1 Sol — OpenRouter](https://openrouter.ai/openai/gpt-6.1-sol)
  - [Kimi K3.1 Pro benchmarks review (KingBench cross-model results) — MindStudio](https://www.mindstudio.ai/blog/kimi-k3-1-pro-benchmarks-review)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.