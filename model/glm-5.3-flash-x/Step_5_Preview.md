# GLM 5.3 Flash X — findings by Step 5 Preview

- Source: Z.ai (Zhipu AI) / GLM-5.3-FlashX (gateway route `opencode/glm-5.3-flash-x`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X (vendor display: GLM-5.3-FlashX)
- **Short description:** Z.ai's speed-optimized serving SKU of GLM-5.3-Flash — the first natively multimodal model in the GLM-5 series (320B total / 18B active-parameter hybrid sparse+linear-attention MoE), tuned for ~200 tok/s throughput on interactive coding and long-horizon agent work with a 1M-token context. Released 2026-09-18, roughly two months before Qwen3.7-Max and three weeks after the base Flash (2026-08-26). Pre-release stealth name: `ox-alpha` (tested anonymously on OpenCode/OpenRouter; the `ox_alpha` slug is parked and resolves here per `model-aliases.generated.md`).
- **Identity note (spelling duplicate):** Z.ai's canonical API code is **`glm-5.3-flashx`** (docs.z.ai lists codes `glm-5.3-flash` / `glm-5.3-flashx` / `glm-5.3-flashx-legal`; OpenRouter `z-ai/glm-5.3-flashx`). This folder's `meta.json` carries the hyphenated OpenCode Zen route `opencode/glm-5.3-flash-x`; its specs (320B/18B, 1,048,576 ctx, 131,072 max output, $0.37/$1.25 per 1M with $0.075 cached, MIT open weights) match `glm-5.3-flashx` exactly — the two on-disk slugs are spelling variants of ONE model (same weights: "Identical capability to Flash but a different rate card", `model/glm-5.3-flashx/meta.json`). Flagged for the orchestrator as a suspected duplicate pair (hyphenated Zen route vs vendor spelling); per `RULES.md` the canonical spelling is the vendor's `glm-5.3-flashx`. Benchmark figures below are cited under the ID actually measured (`z-ai/glm-5.3-flashx`).
- **Provider / access:** Z.ai API (api.z.ai, OpenAI-compatible + Anthropic protocols; Responses endpoint unsupported), OpenRouter `z-ai/glm-5.3-flashx` (~10 providers, 2x price spread), OpenCode Zen `opencode/glm-5.3-flash-x` / `opencode/glm-5.3-flashx`, Mistral AI (`zai-glm-5-3-flash`), plus AIMLAPI/Opper/ZenMux/B.AI routes. Aliases seen in the wild: `cursor-glm-5.3-flashx`, `zhipu/glm-5.3-flashx`.
- **Release / knowledge:** 2026-09-18 release (inferse, ZenMux, AIMLAPI all agree); knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.3-flashx` (vendor/OpenRouter); `opencode/glm-5.3-flash-x` (Zen route, this folder's meta); `zai-glm-5-3-flash` (Mistral).
- **Context window:** 1,048,576 tokens total / 131,072 max output (inferse, Tokenator, B.AI, OfoxAI; Z.ai docs say "1M-token context window, text parameters consistent with GLM-5.3"; Vals AI/Kilo measure 1M with 128K output cap — minor conflict, 131,072 is the commonly listed figure).
- **Modalities:** Text, image, video in; text out (Z.ai docs "first native multimodal model in the GLM-5 series"; Tokenator lists text+image only, OfoxAI/AIMLAPI include video — conflict, vendor docs win: multimodal incl. video). Reasoning always-on with low/high/max effort levels (cannot be disabled per OfoxAI); tool calls yes; web search tool yes; prompt caching yes.
- **Pricing (as of 2026-10-28):** Z.ai list $0.37 input / $1.25 output per 1M, $0.075 cached read (inferse, B.AI, Tokenator, OfoxAI all agree; OfoxAI observed a 59% promo at $0.15/$0.50). Markups elsewhere: AIMLAPI $0.481/$1.625. MIT-licensed open weights — free to self-host (HF `zai-org/GLM-5.3-Flash`).
- **Architecture:** 320B total / 18B active MoE (Mistral, Tokenator, OpenRouter via model card); hybrid sparse + linear attention ("maintains accurate long-context behavior while reducing compute overhead"); Manifold-Constrained Hyper-Connections (mHC); trained on a 30T-token multimodal corpus; MIT license, open weights.

### Raw benchmarks found

> FlashX shares Flash's weights, so benchmark lineage is `z-ai-glm-5.3-flash` data (same measured lineage); FlashX-specific published evidence is the ~200 tok/s speed claim. Vendor-selected comparisons are flagged.

Agent / tool use:

- GDPval-AA v2: **1,773 Elo** (Z.ai launch post via BenchLM — frontier-band reference ~1,750+; vs GLM-5.2's 1,504)
- Toolathlon-Verified: **78.4%** (Z.ai launch post; vs GLM-5.2 59.9)
- AutomationBench v1.0.6: **48.8%** (Z.ai launch post; vs GLM-5.2 26.2)
- Harvey LAB-AA (legal, all-criteria pass): **19.2%** (Z.ai docs)
- Agents' Last Exam: **26.3%** (Z.ai launch post; GLM-5.3 flagship 28.5%)
- HLE with Tools: **55.3%** (Z.ai launch post; flagship 62.5%)
- MazeBench (ASCII, tools): **0%** (MazeBench leaderboard via BenchLM — weak)
- BenchLM agentic public-lane: **48.7 (Supported, #48/153)**
- Terminal-Bench 2.1: **84.3%** (Z.ai launch post; vs Claude Opus 4.8's 85.0) — vendor-harness
- Tau3-Banking / Claw-Eval / MCP-Atlas: no verified public score found
- SWE Atlas Codebase QnA: no verified public score found (37.9% figure belongs to MiniMax-M3)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (v4.1.1, Z.ai blog citing AA — "$0.045 per task discounted, Pareto frontier") — **conflict:** BenchmarkList records **57.5, rank 12/418 (97th percentile)** on the same index; AA's live page now runs v5.0 and shows no public index value for this deprecated-model lineage
- Base-model knowledge: MMLU **88.1**, BBH **86.6** (GLM-5.3-Flash-Base table, Z.ai blog)
- AA-Omniscience Index: **7.47 (#29/48, 59th pct)** (BenchmarkList — notably weak knowledge reliability)
- GPQA Diamond / CritPt / LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **63.4%** (Z.ai launch post; vs GLM-5.2 46.2; flagship GLM-5.3 leads 69.0 pass@1, gap narrows to 2.6 pts at pass@4 per Together AI)
- Terminal-Bench 2.1: **84.3%** (see Tool use — near Opus 4.8's 85.0)
- NL2Repo: **56.3%** (Z.ai launch post; vs GLM-5.2 48.9)
- SWE-bench (Vals harness): **92.0%** (Vals AI via BenchLM — **conflict:** suspiciously high vs DeepSWE 63.4; different scaffold/scoring, both reported, neither is SWE-bench Verified)
- LiveCodeBench (Vals): **80.5%** (Vals AI via BenchLM; ties flagship GLM-5.3)
- Z.ai Code Bench v1.0 (Claude Code 2.1.207 harness): **29.0** (Z.ai docs; vs Opus 4.8 29.5 — near tie)
- BenchLM coding public-lane: (see overall below)
- Kilo Code leaderboard: `z-ai/glm-5.3-flash` Code Agent **#37** (Recommended)
- Vibe Code Bench: no verified public score found

Multimodal / vision:

- MVBench: **77.8% (#2/26)** (Z.ai blog via BenchmarkList)
- CharXiv Reasoning with Tools: **89.4%**; Chartography with Tools: **78.0%** (Z.ai blog)
- OfficeQA Pro: **62.4%** (Z.ai blog — "field leader" claim, vendor-selected)
- BabyVision: **53.4%** (Z.ai blog)
- Vals AI: MedScribe **#9/109**; Vals Index **50.86% (#23/28)** overall

Long context:

- 1M window verified (vendor + independent); AA-LCR-style retrieval-at-length for this exact ID: no verified public score found (flagship GLM-5.3 measures AA-LCR 79.7% — lineage note only, not FlashX's own number).

Speed (FlashX-specific):

- Vendor claim: up to **200 tok/s** (Z.ai docs, Tokenator, Inferse, MyClaw) — the SKU's reason to exist
- Independent AA measurement on the Flash lineage: **50.2 tok/s** output, **1.47s TTFT** (glm5.app decoding AA data) — conflict between vendor speed claim and AA-measured lineage speed; FlashX serving is faster than base Flash but the 200 tok/s figure is unverified independently

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA 1,773 Elo reaches the methodology's frontier reference (~1,750+) and Toolathlon-Verified 78.4 is strong, but AutomationBench 48.8, Harvey LAB 19.2 and MazeBench 0% pull the composite down; no Tau3/Claw-Eval/MCP-Atlas public numbers cap verification.
- **Reasoning: 80/100.** AA Intelligence Index 57/57.5 (BenchmarkList rank 12/418) with HLE-with-tools 55.3 and base MMLU 88.1 — solidly strong but below the 90-100 band that needs Index 60+; AA-Omniscience 7.47 is a real knowledge-reliability weakness.
- **Context window: 95/100.** 1,048,576-token window (vendor + Vals + Kilo independently) = ≥1M tier; 95 not 100 because no independent 98%+ retrieval-at-length number exists for this exact ID (flagship's AA-LCR 79.7% is lineage only).
- **Multimodal: 85/100.** Native image+video input with text output (vendor docs; video-input conflict noted); strong chart/document vision (CharXiv 89.4, MVBench 77.8 #2/26) but BabyVision 53.4 and 62.4 OfficeQA show mid-tier visual reasoning; no audio input and no image output caps it below 90.
- **Coding: 84/100.** Terminal-Bench 2.1 84.3 (0.7 pts off Opus 4.8), LiveCodeBench 80.5, NL2Repo 56.3 and Z.ai Code Bench 29.0≈Opus 4.8 are strong; DeepSWE 63.4 (vs 74%+ frontier reference) and the unverified 200 tok/s claim keep it out of the 90s. Vals-harness SWE-bench 92.0 cited but treated as scaffold-sensitive.
- **Cost efficiency: 93/100.** $0.37/$1.25 list with $0.075 cached reads (promo as low as $0.15/$0.50), MIT open weights with free self-hosting, and AA-measured $0.045/index-task — near the ~92 anchor for $0.60/$2.20 tiers and cheaper; only the lack of a hosted free tier and 2x gateway markups keep it from 97+.
- **Overall Score: 85/100.** Mean of Tool 82 + Reasoning 80 + Context 95 + Multimodal 85 + Coding 84 = 426/5 = 85.2 → 85. Best fit: low-latency multimodal coding and long-horizon agent loops at flash pricing — pick the `glm-5.3-flashx` spelling folder (same model) or flagship `glm-5.3` when quality beats speed.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-28
- Method: public internet research (Z.ai docs + launch blog + release notes, Artificial Analysis via glm5.app/BenchmarkList, Vals AI, BenchLM, Together AI, Kilo Code, Mistral docs, inferse/Tokenator/B.AI/OfoxAI/AIMLAPI/ZenMux spec pages, InsiderLLM/LocalClaw weight audits); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
