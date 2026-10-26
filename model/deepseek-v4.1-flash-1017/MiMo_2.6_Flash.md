# DeepSeek V4.1 Flash 1017 — findings by MiMo 2.6 Flash

- Source: DeepSeek `deepseek-v4.1-flash-1017` (dated snapshot — distinct model, see Identity)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017 — the **October 17, 2026 snapshot** of DeepSeek V4.1 Flash (base released 2026-09-10). Not a new generation: a post-training checkpoint with five extra weeks of reinforcement learning with self-feedback; DeepSeek frames it as a Pareto improvement (higher scores, faster completion, shorter outputs) at unchanged API pricing. **Identity:** `deepseek-flash` on the API/website/app now serves 1017 (silent alias swap — the September model was removed from the API); resellers keep a distinct ID `deepseek-v4.1-flash-1017` (AIHubMix, OmniaKey). Distinct from the base `deepseek-v4.1-flash` slug — scores here are 1017-only wherever the source is unambiguous.
- **Short description:** Frontier-agentic "flash" model tuned for terminal/coding/computer-use agents and long-horizon tasks that must run to completion; 1017 specifically improves end-to-end project development (game creation → 3D modeling) via RL on whole projects, and powers DeepSeek's new Search & Fetch server-side tools (free for API users until 2026-10-31 16:00 UTC, then billed).
- **Provider / access:** DeepSeek API (`deepseek-flash` alias), website and app; OpenRouter `deepseek/deepseek-v4.1-flash-1017`; resellers: AIHubMix, Hive, Requesty, Novita, Baseten, Fireworks, Databricks, Inco (FAST), LithosAI, Parasail and 10+ more (AA lists 13 providers). Optimized for DeepSeek Harness ≥0.2.1-rc.1, Tencent CodeBuddy, WorkBuddy, OpenCode.
- **Release / knowledge:** announced 2026-10-17 (DeepSeek API docs `api-docs.deepseek.com/news/news261017`; qz.com "released ... on Saturday"); **conflict:** Vals AI lists the model with release date 2026-10-16; independent AA run followed 2026-10-19. Knowledge cutoff not published.
- **IDs:** `deepseek-flash` (DeepSeek API alias), `deepseek-v4.1-flash-1017` (resellers/AIHubMix), `deepseek/deepseek-v4.1-flash-1017` (OpenRouter), `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face + ModelScope).
- **Context window:** 1,048,576 tokens (OpenRouter; "1M" everywhere else); **384K max output** (Requesty, DeepInfra, official spec). KV cache compressed to **890 bytes/token** — 4× smaller than V4 Flash, >400× smaller than V1 (official claim via Requesty) — explicitly optimized for cache-hit-dominated agent workloads.
- **Modalities:** text + image in, text out; native image understanding (smallest model in the new architecture family with vision — DeepInfra); thinking and non-thinking modes, tool calling, JSON output, prompt caching, mid-conversation system messages, interleaved image content (official model card).
- **Pricing (as of 2026-10-26):** unchanged from September: **$0.30 in / $1.20 out** per 1M at peak; **off-peak 50%** ($0.15/$0.60) outside Mon–Fri 01:00–04:00 & 06:00–10:00 UTC; cached input $0.006–0.007/M ($0.003/M off-peak — VentureBeat headline rate). OpenRouter route $0.07/$0.50; Hive $0.12/$0.48; AA blended $0.20/M. AA measured **$0.26 per Intelligence Index task** — the lowest cost per task in DeepSeek's entire lineup (~1/23 of Claude Opus 5.5's $5.98 per task). Peak-hour billing silently doubles costs (AIHubMix).
- **Architecture:** 552B-parameter MoE backbone, **8B active per input token / 16B per output token**, Causal Encoder-Decoder (CED) (official, AA, Coursiv, DeepInfra). **Conflict:** a launch video cites "522B parameters plus 196B N-gram memory" — not reconcilable with the official 552B figure; official number used. Weights open under **MIT** (Hugging Face, ModelScope, FP8 safetensors).

### Raw benchmarks found

Agent / tool use (DeepSeek official model card — 1017 vs base V4.1-Flash in parentheses, competitors: Kimi K3 / GLM-5.3 / GPT-5.6 Sol / Claude Opus 5.x):

- Terminal-Bench 4.0 (Claude Code harness): **42.3%** (31.2) — beats GLM-5.3 37.9 and GPT-5.6 Sol 39.9; the table's Claude entry scores 51.8 — **conflict:** Vals AI's own TB-4.0 run: **31.82%** (±2.62), below GPT-6.1 Sol 55.05; harness sensitivity (Claude Code vs Vals run) unreconciled, both reported. Base scored 19.70 on Vals' own run.
- DeepSWE v1.1 (Mini-SWE-V2): **77.0%** (74.2) — highest in the model-card table (K3 67.5, GLM-5.3 66.9, GPT-5.6 Sol 73.0, Claude entry 74.0) (official + BenchLM agree)
- Automation-Bench v1.0.6: **60.5%** (54.8) — beats GPT-5.6 Sol 45.8; Agents' Last Exam: **35.4%** (31.8) vs Sol 26.7; Apex Bench v1.1: **72.1%** (64.6); NL2Repo-Bench: 68.2% (65.4); ProgramBench: 29.1% (20.3)
- GDPval-AA v2.1 Elo: **1746** (+146 vs base 1600); AA-Briefcase v1.1 Elo: **1570** (+150) — Artificial Analysis independent run (2026-10-19)
- Vals AI (own runs): Finance Agent v2 **56.96%** (beats GPT-6.1 Sol 52.03), Tax Agent Bench 44.35% (beats 21.75), Harvey's Legal Agent 9.17%, Legal Research Bench 45.19%, EMB 61.80%, Code Migration 44.21% (below Sol's 65.12)
- BenchLM category: Agentic **61.7 (#24/130)**; Terminal-Bench 2.1 **90.6%** (official table row), terminalBench3 30%, Codeforces 3471.0

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2 (Max variant, independent): **45** — up 6 from base's 39; **equal #2 open-weights model** alongside GLM-5.3, 1 point behind MiMo-V2.6-Pro, ahead of Step 5 Preview and Kimi K3 (AA on X, 2026-10-19)
- Humanity's Last Exam w/o tools: **42.6%** (36.8) (DeepSeek change log via qz.com); CritPt: **24%** (14) (AA); AA-Omniscience non-hallucination rate: **33%** (4), accuracy 46% (43), index −5 → +5 (AA)
- BenchLM reasoning: 82.5 (provisional lane, unranked); GPQA Diamond / MMLU-Pro: no verified 1017-specific figure found
- OpenCode's catalog shows normalized Reasoning 56 / Tool 50 for 1017 (vs base 100 / 92) — **flagged by the page itself as fallback scores** ("Hollow points use fallbacks"); a catalog artifact, not benchmark evidence, not used here.

Coding:

- Terminal-Bench 2.1: **90.6%** (BenchLM ledger, official source row; coursiv comparison shows 82.7 → 90.6 across the V4.1 upgrade); Codeforces: 3471.0 (BenchLM)
- Vals: Code Migration 44.21%, SWE-bench Multimodal (base) 46.46%, IOI (base) 40.28%; Vals Index (1017): **56.58%** (±1.27) — below GPT-6.1 Sol 61.15 (Vals comparison page)
- BenchLM category: Coding **60.9 (#18/151)**
- SWE-bench Verified: no verified 1017-specific figure found

Long context:

- 1M window, 384K output, 890 B/token KV cache (official). **No long-context retrieval measurement (MRCR / RULER) found.** AA measures 89K output tokens per Intelligence Index task — heavy token use despite the "shorter outputs" claim.

Multimodal:

- Native image + text input (official model card rows, w/tools): Chartography **83.0%**, BabyVision **92.5%**, ZeroBench-main **51.0%** (vs base 78.9/89.6/49.0); AA confirms text+image in / text out; no audio/video.

### Normalized scores (1–100)

- **Tool use: 91/100.** DeepSWE v1.1 77.0 tops the official table, TB-4.0 42.3 beats GPT-5.6 Sol and GLM-5.3, AutomationBench 60.5 and Agents' Last Exam 35.4 lead the listed field, and AA's independent GDPval (+146 Elo) and Briefcase (+150 Elo) jumps confirm the agentic gains; capped by Vals' own TB-4.0 run at 31.82 (vs GPT-6.1 Sol 55.05), BenchLM agentic #24/130, and tool-call migration hazards (reasoning_content 400s — AIHubMix).
- **Reasoning: 80/100.** AA Intelligence Index 45 (independent) is equal-#2 among open-weights models and within 1 point of MiMo-V2.6-Pro, HLE 42.6 and CritPt 24 improved sharply over the base; capped because AA-Omniscience non-hallucination is still only 33%, reviews flag weaker no-tools reasoning and a physics-problem loop instability, and frontier closed models (Opus 5.5 ≈ +19 pts over the base per AA) remain well ahead.
- **Context window: 95/100.** 1,048,576 tokens with 384K output and an 890 B/token KV cache purpose-built for long agent runs clears the ≥1M tier; held at 95 because no ≥512K retrieval measurement (MRCR/RULER) exists to justify 100.
- **Multimodal: 78/100.** Native image understanding with strong tool-assisted vision scores (BabyVision 92.5, Chartography 83.0, ZeroBench 51.0) — but no audio/video input and no MMMU-class figure found; mid-high band.
- **Coding: 90/100.** DeepSWE v1.1 77.0 (top of the official table), TB-2.1 90.6, Codeforces 3471, NL2Repo 68.2, ProgramBench 29.1 and BenchLM coding #18/151 make it a top-tier coding model; held below 92 by the missing SWE-bench Verified figure, Vals Code Migration 44.21 (mid-pack vs GPT-6.1 Sol) and TB-4.0 harness variance.
- **Cost efficiency: 93/100.** $0.30/$1.20 peak, halved off-peak, cache hits at $0.003–0.007/M and AA's measured $0.26 per Intelligence Index task (lowest in DeepSeek's lineup; frontier closed models cost 10–23× more per task) — near the top; not 100 because peak-window billing silently doubles rates, Search/Fetch calls start billing 2026-10-31, and self-hosting the 552B backbone is expensive (BenchLM: ~$27,962/mo, break-even ~1.6B tokens/day).
- **Overall Score: 87/100.** (91 + 80 + 95 + 78 + 90) / 5 = 86.8 → 87 — best fit: cost-sensitive high-volume agentic coding/terminal workloads where open weights, MIT licensing and cache-hit pricing matter more than frontier no-tools reasoning; not the pick for hallucination-sensitive or depth-demanding writing tasks (users report one-line-bullet answers), or for local "flash" deployment (552B is not laptop-scale).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-26
- Method: public internet research — official DeepSeek sources first (api-docs.deepseek.com 1017 announcement, HF/ModelScope model card, deepseek.com news), then independent benchmark/review sources (Artificial Analysis X/page, Vals AI, BenchLM, qz.com, VentureBeat, AIHubMix, OmniaKey, MindStudio, Coursiv, Flowtivity, DeepInfra, OpenRouter, Hacker News, Reddit); conflicting harness numbers are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
