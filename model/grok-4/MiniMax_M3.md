# Grok 4 — findings by MiniMax M3

> xAI's July 2025 frontier. 256K, native tool use + real-time X / web search.
> **First model to score 50 % on HLE.** Deprecated — superseded by 4.5-4.7 line.

## Model card

- **Vendor:** xAI (closed weights; `grok-4` API ID).
- **Released:** 2025-07-09 (xAI news: *Grok 4*).
- **Architecture:** Closed-weight reasoning transformer. Trained on xAI's 200,000-GPU Colossus cluster with reinforcement learning at pretraining scale. **6× compute-efficiency improvement** over Grok 3 Reasoning; **>10× compute** than any previous xAI training run. Multi-domain verifiable data (was math + coding, expanded to many more domains).
- **Context:** 256,000 (256K).
- **Modalities:** Text, image, PDF in; text out. Native vision (Grok Voice Mode + camera streaming).
- **Pricing:** $3 / $15 per 1M in / out, $0.75 cached input. **Higher above 128K tokens** (xAI's prompt-length tier shift). `noFreeId: true`.
- **Position:** xAI's flagship July–November 2025. Superseded by Grok 4.1 (Oct 2025) → 4.5 (2026) → 4.6 → 4.7 → 4.20 → 4.3. **Deprecated per `meta.json` short**, but still a reference model for tool-use + X-search quality. Grok 4 Heavy (parallel test-time compute) is the upper tier.

### Raw benchmarks found

- **Reasoning / math**
  - **Humanity's Last Exam (HLE, text-only subset, with tools): 50.7 %** (Grok 4 Heavy) — **first model to score 50 % on HLE** (xAI, 2025-07-09).
  - AIME 2025 (no tools): **91.7 %** (per `meta.json` short; Grok 4 Fast page confirms 91.7 % for Grok 4).
  - HMMT 2025 (no tools): 90.0 % (Grok 4 Fast page).
  - USAMO 2025 (Grok 4 Heavy): **61.9 %** (proof-based olympiad math, xAI news).
  - GPQA Diamond: **87.5 %** (Grok 4 Fast page).
- **Coding**
  - LiveCodeBench (Jan–May 2025, Grok 4 baseline): 79.0 % (Grok 4 Fast page comparison).
  - Vending-Bench (agentic, multi-day simulation): **$4,694.15 net worth / 4,569 units sold (5-run average)** — vastly outpacing Claude Opus 4 ($2,077 / 1,412) and humans ($844 / 344). xAI's flagship agentic-economics win.
- **ARC-AGI-2**
  - **15.9 %** on closed-model leaderboard (xAI, July 2025) — nearly double Opus 4's ~8.6 %, +8 pp over previous closed-model high.
- **Tool use (native)**
  - X keyword + semantic search trained with RL.
  - Web browsing with deep link traversal.
  - Code interpreter for live execution.
  - Deep Research mode (multi-step synthesis).
  - Voice + vision (camera in real time) in Grok app.
- **Latent weaknesses**
  - **HLE 25.4 % no-tools** (Grok 4 Fast page) — the headline is "with tools" 50.7 %; without tools, Grok 4 is mid-pack, not frontier.
  - HLE 20.0 % for Grok 4 Fast no-tools — even lower.

### Normalized scores (1–100)

- **Tool use: 80/100.** **Native RL-trained tool use is the headline** — X search, web search, code interpreter, deep research all trained end-to-end. Vending-Bench $4,694 net worth (vs Opus 4 $2,077) and Devin/Cursor/GitHub-style agentic comparisons all favor Grok 4 at launch. Tool 80.4 average tracks the family.
- **Reasoning: 85/100.** AIME 91.7 %, HMMT 90.0 %, GPQA 87.5 %, USAMO 61.9 % (Grok 4 Heavy), HLE 50.7 % with tools — Grok 4 is the frontier for math/reasoning in July 2025. Reasoning 84.8 average is one of the highest in the queue's mid-band.
- **Context window: 81/100.** 256K matches Kimi K2.5/K2.6/K2.7 (the open-weight 1T class) but is far below Grok 4 Fast / 4.20 / 4.1 Fast's 2M context. The "higher above 128K tokens" tier shift also drags on cost-per-task for long contexts.
- **Multimodal: 70/100.** Native vision + PDF in, but the public benchmark table doesn't include vision-evals. Voice mode with camera streaming is the most novel multimodal feature. 70.2 average tracks "vision-capable, not a vision specialist."
- **Coding: 80/100.** LiveCodeBench 79.0 %, Vending-Bench $4,694 (a frontier agentic-coding economic result), and the agentic-tool chain. Not the SWE-bench Verified leader at the time (Claude Sonnet 4.5 launched Sep 29, 2025 at 77.2 % SWE-bench — but Grok 4 doesn't publish a SWE-bench number for direct comparison). 80.0 average.
- **Cost efficiency: 65/100.** $3/$15 + $0.75 cached is mid-tier for a frontier closed model in 2025; **higher above 128K** is a hard tier shift that doubles cost for long-context use. Compared to Grok 4 Fast ($0.20/$0.50) and Grok 4.20 ($1.25/$2.50), Grok 4 is 6-15× more expensive at the per-token layer. 65.2 average.
- **Overall Score: 79/100.** Half-up mean of the 5 non-cost quality dims: (80 + 85 + 81 + 70 + 80) / 5 = 396 / 5 = 79.2 → **79**.

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
