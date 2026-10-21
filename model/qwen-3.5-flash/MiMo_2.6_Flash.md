# Qwen3.5-Flash — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen (`qwen/qwen3.5-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Flash
- **Short description:** Alibaba's Flash-tier Qwen3.5 vision-language model — a hybrid linear-attention + sparse-MoE design built for fast multimodal inference with reasoning and tool use; 1M context at near-free pricing, hosted on Model Studio (and mirrored by OpenRouter/Vercel).
- **Provider / access:** Alibaba Cloud Model Studio (`qwen/qwen3.5-flash`, snapshot `qwen3.5-flash-2026-02-23`); OpenRouter `qwen/qwen3.5-flash-02-23`; Vercel AI Gateway `alibaba/qwen3.5-flash`. Chat Completions style APIs.
- **Release / knowledge:** released 2026-02-23 (Vals AI; Model Studio snapshot date; CloudPrice lists 2026-02-25); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-flash` (Model Studio), `qwen/qwen3.5-flash-02-23` (OpenRouter), `alibaba/qwen3.5-flash` (Vercel). Catalogued as open-weight by Vals AI and BenchGecko; no distinct weights repo was directly verified in this pass — treat as a hosted tier unless weights are confirmed.
- **Context window:** 1,000,000 tokens (Model Studio docs: Context Window 1,000,000; max input 991,808; thinking-mode max input 983,616); max output 65,536 tokens; max chain-of-thought 81,920.
- **Modalities:** text, image and video in; text out; thinking (reasoning) mode; tool use (Vals AI, Model Studio, CloudPrice).
- **Pricing (as of 2026-10-21):** Model Studio list price (excl. promotions) Global/China ≤128K: $0.029 in / $0.287 out per 1M (128K–256K tier $0.115 / $1.147); EU scope $0.10 / $0.40; OpenRouter $0.065 / $0.26; Vercel $0.10 / $0.40 with $0.01 cache read (Model Studio docs, CloudPrice). Near-free effective pricing.
- **Architecture:** hybrid linear attention + sparse MoE, native vision-language Flash design (Model Studio docs); parameter count not published in sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **24.72%** (Vals AI; Vals Index note 24.7%)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.83%** (Vals AI)
- MMLU-Pro: **84.06%** (Vals AI)
- LegalBench: **84.28% (#36/151)** (Vals AI — model's best relative rank)
- FrontierMath v2 (Tiers 1–3): **18.2%** (Epoch AI leaderboard via BenchLM)
- Vals Index: **#22 overall, 49.6% accuracy; #7 among open-weight models** (Vals AI, 2026-03-02)
- BenchLM overall: **42.73 (#130/972)** (BenchLM, partial coverage)
- HLE / LCR / Omniscience: no verified public score found

Coding:

- LiveCodeBench: **83.28%** (Vals AI)
- SWE-bench (Vals harness): **64.40%** (Vals AI leaderboard; Vals Index prose separately cites 54.9% on SWE-bench Verified)
- SciCode / DeepSWE: no verified public score found

Long context:

- No MRCR/RULER-style public retrieval figure found despite the 1M window

Multimodal:

- MMMU-Pro: **81.91%** (Vals AI)
- Chatbot Arena Elo — Coding: **1238** (BenchGecko)

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.0 24.72% is well below the mid band, and no Tau3/GDPval/Claw rows exist — weak terminal-agent showing despite tool-use support.
- **Reasoning: 80/100.** GPQA 82.8% and MMLU-Pro 84.1% are strong, LegalBench 84.3% (#36) shows domain depth, but FrontierMath 18.2% and the mid Vals Index standing keep it out of the high 80s.
- **Context window: 95/100.** Full 1M window (Model Studio) clears the ≥1M tier (95–100); not pushed to 100 because no ≥98% retrieval measurement at 512K+ exists.
- **Multimodal: 85/100.** Text+image+video input with text output and MMMU-Pro 81.9% — upper band of the video-in tier.
- **Coding: 70/100.** LiveCodeBench 83.3% is strong, but SWE-bench ~55–64% and Terminal-Bench 2.0 24.7% drag the agentic/SWE side down.
- **Cost efficiency: 97/100.** $0.029–$0.10 in / $0.287–$0.40 out (plus cheaper OpenRouter route and cache reads) — near-free 1M-context multimodal serving.
- **Overall Score: 76/100.** Mean of (48 + 80 + 95 + 85 + 70) / 5 = 75.6 → 76. Best fit: cheap long-context multimodal workhorse (RAG, docs, video/image understanding); not a terminal-agent or heavy SWE fixer.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (Alibaba Model Studio docs, Vals AI leaderboards, BenchLM, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
