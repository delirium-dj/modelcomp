# Qwen 3.6 Plus — findings by MiniMax M3

- Source: Alibaba Qwen Team (`qwen/qwen3.6-plus` / `Qwen/Qwen3.6-Plus` / `opencode/qwen-3.6-plus`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's **2026-04-02** **397B-A17B MoE** (17B active per token, 4.3% activation) hosted vision-language flagship with **1M context** / **65K output**, **hybrid linear-attention + MoE routing**, full multimodal (text + image + video → text). *Closed-source API-only* — *not* the open-weights Qwen 3.6-27B. Strong on **SWE-bench Verified 78.8% (vendor)** / **SWE-bench Pro 56.6%** / **LiveCodeBench 87.1%** / **GPQA Diamond 88.4% (Epoch AI)** / **AIME 93.3%**; *mixed* on independent Vals reruns (Vals Index 58.8% #17 overall, **Terminal-Bench 2.1 53.2% (Vals)**, **SWE-bench Verified 57.9% (Epoch AI)** — a 20-pt drop from Alibaba's harness). **$0.50/$3.00** direct, **$0.33/$1.95** via OpenRouter, **$2/$6** past 256K. *Now superseded* by Qwen 3.7 Plus / 3.8 line.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.6-plus`; OpenRouter `qwen/qwen3.6-plus` ($0.33/$1.95); Together AI; EmpirioLabs; Hugging Face (hosted inference, no public weights). **No OpenCode Zen Free ID.**
- **Release / knowledge:** **2026-04-02**; knowledge cutoff early-2026 (not publicly disclosed to month precision).
- **IDs:** `qwen/qwen3.6-plus`, `Qwen/Qwen3.6-Plus`, `opencode/qwen-3.6-plus`. **Closed-source** — no HF weights. OpenRouter, Together AI, EmpirioLabs pass-throughs.
- **Context window:** **1,000,000 tokens total / 65,536 output.** Pricing tier doubles past 256K input.
- **Modalities:** **Text + image + video in → text out.** Hybrid linear attention + MoE routing; reasoning on by default; tool calls, structured output, function calling supported.
- **Pricing (as of 2026-10-16):** **Direct: $0.50 / $3.00** per 1M (≤256K input); **$2.00 / $6.00** (256K-1M input); **OpenRouter pass-through: $0.33 / $1.95**; **Together AI: $0.50 / $3.00** with $0.05/M cache. **No free tier.**
- **Architecture:** **Hybrid MoE 397B total / 17B active** (4.3% activation). Linear attention + sparse MoE routing. 65K max output. Reasoning enabled by default.

### Raw benchmarks found

Triangulated across **eight** independent surfaces: Alibaba Qwen official blog, Vals AI independent reruns (Vals Index 58.8%, Terminal-Bench 2.1 53.2%, SAGE 44.9%, TaxEval 74.7%, Vibe Code 25.6%, Vals Multimodal Index 51.5%), Epoch AI independent reruns (SWE-bench V 57.9%, GPQA 88.4%, AIME 93.3%, FrontierMath 38.2%, SimpleQA 44.1%), LiveBench independent (Coding 78.2%, Agentic Coding 41.4%, Reasoning 75.8%, Math 83.7%, Data Analysis 69.9%, Language 75%, Instruction Following 58.3%), Andon Labs Vending-Bench 2 5114.87 (#28/59), LMArena Elo 1443 (#62/147), WebDev 1461 (#51/99), Respan Index 33.2 (#63/143), OpenRouter benchmark aggregator. The Alibaba vendor-reported SWE-bench V 78.8% has *not* been reproduced on Epoch AI's independent harness (Epoch: 57.9%, *20.9 pt lower*).

Agent / tool use:

- **Alibaba model card (vendor)**: **SWE-bench Verified 78.8%**; **SWE-bench Pro 56.6%**; **LiveCodeBench 87.1%**.
- **Epoch AI independent**: **SWE-bench Verified 57.9%** (Oct 5, 2026) — *20.9 pt lower than Alibaba's harness*; substantial scaffold-driven gap.
- **Vals AI Terminal-Bench 2.1**: **53.2%** (independent) — mid-tier.
- **Vals AI Vals Index**: **58.8%** (#17 overall — *just above* GPT-5.4 Mini, *just below* Qwen 3.5 Plus #14 at 59.1%). The OpenRouter page's "Vals Index 32.0%" reflects a *different subscore* (likely just the coding subset), not the full Vals Index.
- **Vals Multimodal Index**: **51.5%** (independent).
- **Vals SAGE**: **44.9%**.
- **Vals TaxEval v2**: **74.7%**.
- **Vals Vibe Code Bench v1.1**: **25.6%** — *low*.
- **LiveBench Coding**: **78.2%**.
- **LiveBench Agentic Coding**: **41.4%** — weak.
- **LiveBench Data Analysis**: **69.9%**.

Reasoning / knowledge:

- **GPQA Diamond (Epoch AI)**: **88.4%** (independent) — solid; trails GPT-5.4 92.8%, Opus 4.6 91.3%, GPT-5.2 92.4%.
- **LiveBench Reasoning**: **75.8%**.
- **OTIS Mock AIME 2024-2025 (Epoch AI)**: **93.3%** — high.
- **LiveBench Mathematics**: **83.7%**.
- **FrontierMath Tiers 1-3 v2 (Epoch AI)**: **38.2%** — mid-tier (vs GPT-5.2 Pro 40.3%).
- **SimpleQA Verified (Epoch AI)**: **44.1%**.
- **LiveBench Language**: **75%**.
- **LiveBench Instruction Following**: **58.3%**.
- **AA Intelligence Index**: not surfaced in surveyed sources directly for Qwen 3.6 Plus (the 86.2 in model-queue at 85.3 likely reflects Respan/Vals cross-source).

Coding:

- **LiveCodeBench**: **87.1%** (Alibaba vendor) — high.
- **SWE-bench Verified (Epoch AI)**: **57.9%** — *substantially lower than vendor*; trails Claude Opus 4.6 79.2% and GPT-5.4 77.2% by ~20 pt.
- **SWE-bench Pro (vendor)**: **56.6%** — vs GPT-5.4 57.7% (close), GPT-5.2 55.6%.
- **LMArena WebDev Elo**: **1461** (#51 of 99).

Operational:

- **Output speed**: **37-40 t/s** (Respan gateway 30-day avg; OpenRouter 37, EmpirioLabs 40) — faster than 57% of 505 models on the gateway.
- **Response latency**: **2.3-5.0s TTFT** (OpenRouter 2.3s, EmpirioLabs 5.0s).
- **Vending-Bench 2 (Andon Labs)**: **5114.87** (#28 of 59) — autonomous business simulation, mid-pack.
- **LMArena Elo**: **1443** (#62 of 147).

Pricing compared to peers (current as of 2026-10-16):

- **Direct vs OpenRouter**: $0.50/$3.00 (Alibaba direct) vs $0.33/$1.95 (OpenRouter) — **OpenRouter 34% cheaper input, 35% cheaper output** after gateway.
- **Past 256K**: $2.00/$6.00 — *4× / 2× the base tier* — same surcharge pattern as GPT-5.4 / 5.2.
- **vs GPT-5.4 ($1.25/$7.50 ≤272K)**: 3.6 Plus is **2.5× cheaper** input via OpenRouter, **3.85× cheaper** output.
- **vs GPT-5.2 ($1.75/$14.00)**: 3.6 Plus is **5.3× cheaper** input via OpenRouter, **7.2× cheaper** output.
- **vs Claude Opus 4.6 ($5/$25)**: 3.6 Plus is **15× cheaper** input, **12.8× cheaper** output.
- **vs Claude Sonnet 4.6 ($3/$15)**: 3.6 Plus is **9× cheaper** input, **7.7× cheaper** output.
- **vs Gemini 3.1 Pro ($2/$12)**: 3.6 Plus is **6× cheaper** input, **6.2× cheaper** output.
- **vs Grok 4.6 / 4.7 ($2/$6)**: 3.6 Plus is **6× cheaper** input, **3.1× cheaper** output via OpenRouter.
- **vs MiMo V2.6 Pro ($0.435/$0.87)**: 3.6 Plus is **0.76× input** (more expensive), **2.24× more** output — MiMo Pro is *cheaper on both*.
- **vs MiMo V2.6 Flash ($0.14/$0.28)**: 3.6 Plus is **2.4× more** input, **7× more** output.

### Normalized scores (1–100)

- **Tool use: 78/100.** **SWE-bench V 78.8 (vendor)** is strong but Epoch's independent 57.9% is the *operative* number — 20.9 pt scaffold-driven drop. **SWE-bench Pro 56.6%** is mid-tier. **LiveCodeBench 87.1% (vendor)** is high but not independently reproduced. **Terminal-Bench 2.1 (Vals) 53.2%** is below GPT-5.4 75.1%. **LiveBench Agentic Coding 41.4%** is weak. Vibe Code 25.6% is low. Mixed.
- **Reasoning: 82/100.** **GPQA Diamond 88.4% (Epoch AI independent)**, **AIME 93.3%**, **LiveBench Math 83.7%**, **LiveBench Reasoning 75.8%** are strong; but **FrontierMath 38.2%**, **SimpleQA 44.1%** are mid-tier; no AA Intelligence Index reported for Qwen 3.6 Plus (only the 3.6-27B open variant has it). The closed-source variant trails MiMo V2.6-Pro (AA 46) and Grok 4.7 (AA 46) on the independent composite.
- **Context window: 92/100.** **1M** native / **65K out** is *the largest context window tier* (ties Qwen 3.5 Plus 1M, MiMo V2.6 1M, GPT-5.4 1M); pricing doubles past 256K which is the practical operational ceiling for cost-sensitive use.
- **Multimodal: 84/100.** Text + image + video in; **Vals Multimodal Index 51.5%** (independent) is mid-tier; vision handling on MMMU-Pro / MathVision not surfaced in surveyed sources for the *closed* variant but the model card emphasizes "substantial leap in multimodal capabilities" vs 3.5 series. Trails MiMo V2.6 Flash (native omnimodal text + image + video + audio in same embedding space).
- **Coding: 82/100.** **LiveCodeBench 87.1% (vendor)** is strong; **SWE-bench V 57.9% (Epoch AI)** trails GPT-5.4 (77.2), Opus 4.6 (79.2), Gemini 3.1 Pro (80.6); **SWE-bench Pro 56.6%** ties GPT-5.2 (55.6) and trails GPT-5.4 (57.7). **Vibe Code 25.6%** is *weak* (vs Grok 4.7 86.2 vendor). The Alibaba vs Epoch AI gap on SWE-bench V (78.8 vs 57.9) is the *operative finding* — substantial scaffold-driven score inflation on vendor harness.
- **Cost efficiency: 88/100.** **$0.33/$1.95 via OpenRouter** is *among the cheapest frontier-class tiers* — 6× cheaper input than Opus 4.6, 7.7× cheaper than Sonnet 4.6, 6.2× cheaper than Gemini 3.1 Pro. Trails only MiMo V2.6 Pro / Flash and Qwen 3.5 Plus ($0.40/$2.40) on absolute price. Past-256K surcharge (4× input) is the only meaningful cost caveat.
- **Overall Score: 84/100.** Half-up mean of the five non-cost dims: (78 + 82 + 92 + 84 + 82) / 5 = 418 / 5 = 83.6 → **84**. Best fit: **cost-sensitive agentic coding with full 1M context** (SWE-bench Pro 56.6%, LiveCodeBench 87.1% vendor, MCP Atlas / Multimodal Index 51.5%) where the **$0.33/$1.95 OpenRouter price** undercuts GPT-5.4 / Gemini 3.1 Pro / Grok 4.7 by 3-7×; **multimodal document understanding** (Vals Multimodal Index 51.5%). Watch for: **20.9 pt scaffold gap on SWE-bench V (78.8 vendor vs 57.9 Epoch independent)** — vendor numbers substantially overstate; **TB 4.0 not surfaced**; **LiveBench Agentic Coding 41.4%** is weak; **Vibe Code 25.6%** is low; *now superseded* by Qwen 3.7 Plus / 3.8 line — *not the current Qwen flagship*. Twin file `Qwen_3.7_Plus.md` (the Qwen 3.7 Plus self-report on 3.6, 2026-05-XX) gave **83** — my 84 is consistent within ±1 pt.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Eight-source triangulation (Alibaba Qwen official blog, Vals AI 6 independent reruns, Epoch AI 5 independent reruns, LiveBench 7 independent reruns, Andon Labs Vending-Bench 2, LMArena Elo + WebDev, Respan Index composite, OpenRouter benchmark aggregator). Identity resolved: this is **Alibaba Qwen 3.6 Plus** (2026-04-02 release, **closed-source API-only**) — *not* Qwen 3.6-27B (the open-weights Apache-2.0 dense distillation), *not* Qwen 3.5 Plus (predecessor), *not* Qwen 3.7 Plus (successor), *not* Qwen 3.8 line (separate). Scores are normalized 1–100 interpretations, not official vendor scores. The Alibaba vendor-reported SWE-bench V 78.8% is *not reproduced* by Epoch AI (57.9%, -20.9 pt scaffold gap) — vendor numbers should be discounted accordingly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
