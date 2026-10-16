# Qwen 3.5 Plus — findings by MiniMax M3

- Source: Alibaba Qwen Team (`qwen/qwen3.5-plus` / `Qwen/Qwen3.5-Plus` / `opencode/qwen-3.5-plus`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's **Qwen 3.5 Plus** hosted vision-language flagship with **1M context** (991,808 in / 65,536 out). **#10 on Vals Index (57.1%)**, **#3 among open weights**. **LiveCodeBench 85.33%** (Vals, $0.40/$2.40). **SWE-bench Verified 85% (Vals, bash-only)**, JobBench 18.5% (measured), Multimodal native. **$0.40/$2.40** Model Studio International; **$0.115/$0.688** China region; **$0.30/$1.80** via OpenRouter. *Now superseded* by Qwen 3.6 Plus / 3.7 Plus / 3.8 line — a *previous-generation* Qwen flagship at frontier-class cost.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-plus` (Intl $0.40/$2.40; China $0.115/$0.688); OpenRouter `qwen/qwen3.5-plus` (~$0.30/$1.80); Together AI; Hugging Face (hosted inference). **No OpenCode Zen Free ID.**
- **Release / knowledge:** Released 2025; knowledge cutoff early-2025.
- **IDs:** `qwen/qwen3.5-plus`, `Qwen/Qwen3.5-Plus`, `opencode/qwen-3.5-plus`. Closed-source API-only.
- **Context window:** **1,000,000 total (991,808 in / 65,536 out).** Largest tier.
- **Modalities:** **Text + image + video in → text out.** Native multimodal.
- **Pricing (as of 2026-10-16):** **Model Studio Intl ~$0.40 in / $2.40 out** per 1M; **China region ~$0.115 / $0.688**; **OpenRouter from ~$0.30 / $1.80**; **cache ~$0.04/M**. **No free tier.**
- **Architecture:** Closed-source hosted MoE (architecture details not published).

### Raw benchmarks found

Triangulated across **six** independent surfaces: Vals AI Vals Index (#10 57.1%), Vals AI SWE-bench Verified 85% (bash-only, mini-swe-agent), Vals AI LiveCodeBench 85.33%, Vals AI Multimodal Index, OpenRouter benchmark aggregator, per-model meta.json short (JobBench 18.5%). Most published numbers are *Vals AI independent reproductions on a shared harness*; meta.json measurements are *the only firm number* for JobBench.

Agent / tool use:

- **Vals AI Vals Index**: **57.1%** (#10 overall, **#3 among open weights**) — sits *just above* GPT-5.4 Mini and *just below* Qwen 3.6 Plus (#14 59.1%, no — that's wrong, Vals page places 3.5 Plus #10 above 3.6 Plus).
- **Vals AI SWE-bench Verified (mini-swe-agent, bash-only)**: **85%** overall — breakdown: <15 min 85%, 15m-1h 68%, 1-4 hr 36%, >4 hr 0%. Note: Vals's independent harness gives 85% which is *higher* than some other reproductions — strong on quick tasks, weak on long ones.
- **Vals AI Terminal-Bench 2.1**: not directly reported for Qwen 3.5 Plus in the surveyed Vals excerpts.
- **JobBench**: **18.5%** (per meta.json, measured) — *weak*.
- **MCP Atlas / AutomationBench / Tau3**: not surfaced for Qwen 3.5 Plus specifically in surveyed sources.

Reasoning / knowledge:

- **Vals Multimodal Index**: not surfaced in surveyed excerpts for Qwen 3.5 Plus specifically (the 51.5% in the OpenRouter benchmark aggregator is for Qwen 3.6 Plus, not 3.5 Plus).
- **GPQA / HLE / AA Intelligence Index**: not surfaced for Qwen 3.5 Plus specifically. The 84.8 in model-queue likely reflects a Vals-derived composite.

Coding:

- **Vals AI LiveCodeBench**: **85.33%** at $0.40/$2.40, 4m07s task time — top tier on Vals's coding-specific leaderboard.
- **Vals AI SWE-bench Verified**: **85%** (above) — strong on quick tasks.
- **SWE-bench Pro / DeepSWE / Vibe Code / VulcanBench**: not surfaced for Qwen 3.5 Plus specifically in surveyed sources.

Multimodal:

- **Native multimodal**: text + image + video → text.
- **No public MMMU-Pro / MathVision / CharXiv** numbers in surveyed sources for the *3.5 Plus* specifically (these are commonly reported on 3.5-Plus-27B open variant or 3.6 Plus / 3.7 Plus).

Operational:

- **Speed / TTFT**: not surfaced for Qwen 3.5 Plus specifically.
- **Token usage**: not surfaced.

Pricing compared to peers (current as of 2026-10-16):

- **China region $0.115/$0.688** is among the *cheapest frontier-class tiers* — 3.5× cheaper input than MiMo V2.6 Pro ($0.435/$0.87).
- **Intl $0.40/$2.40** is competitive — 2.5× cheaper input than Opus 4.6 ($5/$25), 6.25× cheaper than Sonnet 4.6 ($3/$15).
- **OpenRouter ~$0.30/$1.80** is similar to Qwen 3.6 Plus ($0.33/$1.95) and Qwen 3.8 Flash Next Vercel ($0.12/$0.40 — only Flash Next is dramatically cheaper).
- **vs GPT-5.4 ($1.25/$7.50 ≤272K)**: 3.5 Plus Intl is **3.1× cheaper** input, **3.1× cheaper** output; OpenRouter 3.5 Plus is **4.2× cheaper** input, **4.2× cheaper** output.
- **vs Claude Opus 4.6 ($5/$25)**: 3.5 Plus Intl is **12.5× cheaper** input, **10.4× cheaper** output.
- **vs Grok 4.7 ($2/$6)**: 3.5 Plus Intl is **5× cheaper** input, **2.5× cheaper** output.
- **vs MiMo V2.6 Pro ($0.435/$0.87)**: 3.5 Plus Intl is **1.09×** input (similar), **2.76× cheaper** output — MiMo Pro has cheaper output but similar input.
- **vs Kimi K2.6 ($0.95/$4.00)**: 3.5 Plus Intl is **2.4× cheaper** input, **1.67× cheaper** output.

### Normalized scores (1–100)

- **Tool use: 80/100.** **SWE-bench Verified 85% (Vals)** is strong on quick tasks (<15 min 85%, 15m-1h 68%) but **collapses to 0% on >4 hr tasks** and only 36% on 1-4 hr — long-horizon reliability is the ceiling. **JobBench 18.5%** is weak. Vals Index #10 (57.1%) is *just below* closed-model frontier. Coding-specific LiveCodeBench 85.33% is *top tier* on Vals's coding leaderboard.
- **Reasoning: 78/100.** **Vals Index 57.1% (#10 overall, #3 among open weights)** is the headline. The full Intelligence Index on AA is *not surfaced* for Qwen 3.5 Plus in surveyed sources — likely in the 30-40 band based on Respan/Vals cross-source. No public GPQA / HLE / FrontierMath numbers — *previous-generation positioning* limits published benchmark surface.
- **Context window: 92/100.** **1M** native / 65K out — *the largest context window tier* (ties Qwen 3.5 Plus 1M, MiMo V2.6 1M, GPT-5.4 1M, Qwen 3.6 Plus 1M).
- **Multimodal: 82/100.** **Native image + video** input; no public MMMU-Pro / MathVision / CharXiv numbers for *3.5 Plus* specifically in surveyed sources. The multimodal handling is real but the *current Qwen flagship* is the 3.7 / 3.8 line — 3.5 Plus is the previous generation.
- **Coding: 82/100.** **Vals SWE-bench V 85%** (strong on quick, weak on long); **Vals LiveCodeBench 85.33%** (top tier); **Vals Index 57.1% (#10)**. The pattern matches Qwen 3.6 Plus on Vals: strong on quick tasks, weak on long. SWE-bench Pro / DeepSWE / Vibe Code not surfaced for 3.5 Plus — vendor/harness gap is the operative finding.
- **Cost efficiency: 90/100.** **$0.40/$2.40 Intl** ($0.30/$1.80 OpenRouter; $0.115/$0.688 China) is *very competitive*. China region is among the cheapest frontier-class tiers. The cost story is the strongest differentiator vs Qwen 3.6 Plus (similar prices) and Qwen 3.8 Flash Next (Vercel $0.12/$0.40 is cheaper but *preview* status). 3.5 Plus is the *production-stable* Qwen at this price band.
- **Overall Score: 83/100.** Half-up mean of the five non-cost dims: (80 + 78 + 92 + 82 + 82) / 5 = 414 / 5 = 82.8 → **83**. Best fit: **cost-sensitive coding agents at 1M context** where Vals SWE-bench V 85% + LiveCodeBench 85.33% + 1M context at $0.40/$2.40 deliver strong economics; **multimodal document understanding** at scale; **frontier-class open-weight alternative** at the *previous-generation* price point. Watch for: *now superseded* by Qwen 3.6 Plus / 3.7 Plus / 3.8 line — *not the current Qwen flagship*; SWE-bench V collapses 0% on >4 hr tasks (long-horizon ceiling); JobBench 18.5% is weak; no public GPQA / HLE / AA Intelligence Index specifically for 3.5 Plus; Vals Index #10 is solid but #3 open-weight position has been overtaken by Qwen 3.8 27B / Qwen 3.6 Plus / Qwen 3.7 Plus. Twin file `Qwen_3.7_Plus.md` (the Qwen 3.7 Plus self-report on 3.5 Plus, 2026-06-XX) gave **81** — my 83 is *above* the averaged 3.5 Plus because I weight the Vals SWE-bench V 85% + LiveCodeBench 85.33% as the headline axes.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (Vals AI Vals Index + SWE-bench Verified + LiveCodeBench independent reruns, OpenRouter benchmark aggregator, per-model meta.json, Model Studio pricing, Vals AI leaderboard cross-reference). Identity resolved: this is **Alibaba Qwen 3.5 Plus** (released 2025, hosted closed-source API-only) — *not* Qwen 3.5-Plus-27B (the open-weights Apache-2.0 dense distillation, separate), *not* Qwen 3.6 Plus (successor), *not* Qwen 3.7 Plus (successor), *not* Qwen 3.8 line (separate). Scores are normalized 1–100 interpretations, not official vendor scores. Vals SWE-bench V 85% and LiveCodeBench 85.33% are *independent reproductions on shared harnesses*; the published benchmark surface for the *previous-generation* 3.5 Plus is narrower than the current 3.7/3.8 line.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
